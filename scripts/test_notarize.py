import importlib.util
from pathlib import Path
import subprocess
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('notarize', Path(__file__).with_name('notarize.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class NotarizationTests(unittest.TestCase):
    def exercise(self, status, expected, wait_rc=0, log_rc=0):
        calls = []
        def run(args, **kwargs):
            calls.append(args)
            command = args[2]
            output = {'submit': '{"id":"test-id"}', 'wait': status, 'log': ''}[command]
            return subprocess.CompletedProcess(args, wait_rc if command == 'wait' else log_rc if command == 'log' else 0, output, '')
        with tempfile.TemporaryDirectory() as directory:
            if expected:
                module.notarize('app.zip', directory, ['--keychain-profile','test'], run)
            else:
                with self.assertRaises(RuntimeError):
                    module.notarize('app.zip', directory, ['--keychain-profile','test'], run)
            self.assertTrue((Path(directory)/'submission.json').exists())
            self.assertTrue((Path(directory)/'status.json').exists())
            self.assertEqual(sum(c[2]=='submit' for c in calls), 1)
    def test_accepted(self): self.exercise('{"status":"Accepted"}', True)
    def test_invalid(self): self.exercise('{"status":"Invalid"}', False)
    def test_timeout_does_not_resubmit(self): self.exercise('{"message":"timeout"}', False, 124)
    def test_unreadable_wait(self): self.exercise('', False, 1)
    def test_log_failure_blocks(self): self.exercise('{"status":"Accepted"}', False, log_rc=1)

if __name__ == '__main__': unittest.main()
