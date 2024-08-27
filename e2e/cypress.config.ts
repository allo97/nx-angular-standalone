import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run nx-angular-standalone:serve:development',
        production: 'nx run nx-angular-standalone:serve:production',
      },
      ciWebServerCommand: 'nx run nx-angular-standalone:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
    videosFolder: '../dist/cypress/e2e/videos-changed',
    screenshotsFolder: '../dist/cypress/e2e/screenshots-changed',
  },
});
