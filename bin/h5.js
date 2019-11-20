#!/usr/bin/env node
const path=require('path');
const fs=require('fs');

const cwd=process.cwd();
const context=path.join(__dirname, '..');

process.chdir(context);
process.on('exit', function () {
  process.chdir(cwd);
});

const cpm_platform=path.basename(__filename, '.js');
process.env.CPM_PLATFORM=cpm_platform;

const root=path.resolve(cwd, 'native', cpm_platform);
if (!fs.existsSync(root)) {
  console.error(`${cpm_platform} are not installed!\ntry to add platform ${cpm_platform} to "package.json".\ntry to "cpm build".`);
  return;
}
process.env.CPM_NATIVE=root;

require('../lib/platform');

