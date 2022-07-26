const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cypress.vivifyscrum-stage.com/',
    env: {
      EXTERNAL_EMAIL: 'cypress@test.com',
      EXTERNAL_PASSWORD: 'Test1234',
      API_BASE_URL: 'https://cypress-api.vivifyscrum-stage.com/api/v2',
    }
  },
});
