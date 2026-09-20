#!/usr/bin/env python3
"""Submit once, retain evidence, and require Apple's Accepted status.

Usage: notarize.py ARCHIVE EVIDENCE_DIR [notarytool authentication options]
No credentials are persisted; pass a keychain profile locally or API key path in CI.
"""
import json
from pathlib import Path
import subprocess
import sys


def notarize(archive, evidence, auth, run=subprocess.run):
    evidence = Path(evidence)
    evidence.mkdir(parents=True, exist_ok=True)

    def call(command):
        return run(['xcrun', 'notarytool', *command, *auth], capture_output=True, text=True)

    submitted = call(['submit', str(archive), '--output-format', 'json'])
    try:
        submission = json.loads(submitted.stdout)
        job = submission['id']
    except (ValueError, KeyError):
        raise RuntimeError('Upload failed without a submission ID; inspect credentials and connectivity.')
    (evidence / 'submission.json').write_text(json.dumps(submission, indent=2) + '\n')
    print(f'Apple submission ID: {job}', flush=True)
    # A timeout ends only this wait, never the server-side submission.
    waited = call(['wait', job, '--timeout', '20m', '--output-format', 'json'])
    try:
        status = json.loads(waited.stdout)
    except ValueError:
        status = {'id': job, 'status': 'Unknown', 'wait_exit_code': waited.returncode}
    (evidence / 'status.json').write_text(json.dumps(status, indent=2) + '\n')
    if status.get('status') in ('Accepted', 'Invalid', 'Rejected'):
        log = call(['log', job, str(evidence / 'notary-log.json')])
        if log.returncode:
            raise RuntimeError(f'Unable to retain notarization log for {job}; no publication allowed.')
    if status.get('status') != 'Accepted':
        raise RuntimeError(f'Submission {job} is not Accepted. Check this ID before retrying; do not blindly resubmit.')
    print(f'Accepted: {job}', flush=True)


if __name__ == '__main__':
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    try:
        notarize(sys.argv[1], sys.argv[2], sys.argv[3:])
    except RuntimeError as error:
        sys.exit(str(error))
