const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: "AUTOMATIONAPICYPRESS",
  defaultCommandTimeout: 40000,
  experimentalModifyObstructiveThirdPartyCode: true,
  experimentalInteractiveRunEvents: true,
  video: false,
  viewportWidth: 1400,
  viewportHeight: 860,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 1,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "mochawesome-report",
      reportTitle: "AUTOMATIONAPICYPRESS",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      timestamp: "ddmmyyyy_HHMMss"
    }
  },
  screenshotsFolder: "cypress/snapshots/actual",
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: true,
  env: {
    baseurl: process.env.BASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.js',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log(message) {
          console.log(message);
          return null;
        }
      });
    },
  },
});
