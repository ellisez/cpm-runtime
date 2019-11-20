#!/usr/bin/env node

process.env.CPM_PLATFORM='ios';

const root=path.resolve(cwd, 'native', cpm_platform);
if (!fs.existsSync(root)) {
  console.error(`${cpm_platform} are not installed!\ntry to add platform ${cpm_platform} to "package.json".\ntry to "cpm build".`);
  return;
}

process.env.VUE_CLI_SERVICE_CONFIG_PATH=path.resolve(root, 'vue.config.js');

require('../lib/platform');
