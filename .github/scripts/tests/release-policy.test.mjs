import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const workflow = readFileSync('.github/workflows/release.yml', 'utf8');
const step = workflow.split('      - name: Check release secrets\n')[1].split('\n  release-unavailable:')[0];
const script = step.split('        run: |\n')[1].split('\n').map(line => line.startsWith('          ') ? line.slice(10) : line).join('\n');
const apple = ['DEVELOPER_ID_APP_CERT_BASE64', 'DEVELOPER_ID_APP_CERT_PASSWORD', 'KEYCHAIN_PASSWORD', 'DEVELOPER_ID_APP_SIGNING_IDENTITY', 'NOTARYTOOL_KEY', 'NOTARYTOOL_KEY_ID', 'NOTARYTOOL_ISSUER'];
const core = ['SPARKLE_PUBLIC_ED_KEY', 'SPARKLE_PRIVATE_ED_KEY', 'R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET', 'R2_PUBLIC_BASE_URL'];
for (const [name, event, ref, dry, count, missingCore, ok] of [
  ['public missing Apple fails', 'push', 'refs/tags/v1.0', '', 0, false, false],
  ['public partial Apple fails', 'push', 'refs/tags/v1.0', '', 1, false, false],
  ['public complete credentials pass', 'push', 'refs/tags/v1.0', '', 7, false, true],
  ['manual publish missing Apple fails', 'workflow_dispatch', 'refs/tags/v1.0', 'false', 0, false, false],
  ['tag rehearsal cannot use adhoc', 'workflow_dispatch', 'refs/tags/v1.0', 'true', 0, false, false],
  ['explicit branch rehearsal permits adhoc', 'workflow_dispatch', 'refs/heads/main', 'true', 0, false, true],
  ['partial rehearsal fails', 'workflow_dispatch', 'refs/heads/main', 'true', 1, false, false],
  ['missing core fails', 'push', 'refs/tags/v1.0', '', 7, true, false],
]) test(name, () => {
  const dir = mkdtempSync(join(tmpdir(), 'wink-policy-'));
  try {
    const env = {PATH:process.env.PATH, GITHUB_OUTPUT:join(dir,'output'), GITHUB_EVENT_NAME:event, GITHUB_REF:ref, DRY_RUN_INPUT:dry};
    for (const key of core) env[key]='fixture';
    for (const key of apple.slice(0,count)) env[key]='fixture';
    if (missingCore) delete env.R2_BUCKET;
    const result=spawnSync('bash',['-e','-c',script],{env,encoding:'utf8'});
    assert.equal(result.status===0,ok,result.stderr);
    if(ok) assert.match(readFileSync(env.GITHUB_OUTPUT,'utf8'), /release_ready=true/);
  } finally { rmSync(dir,{recursive:true,force:true}); }
});
