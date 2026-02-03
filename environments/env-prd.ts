import * as dotenv from 'dotenv';

// Determine which environment to use (default to 'staging' if none is set)
const ENV = process.env.TEST_ENV || 'staging';

// Load the corresponding `.env` file
dotenv.config({ path: `config/.env.${ENV}` });

// Export environment-specific settings
export const APPCONFIG = {
  Prd: {
    SauceDemo: {
      App: {
        URL: 'https://www.saucedemo.com/'
      },
      Credentials: {
        USERNAME: 'standard_user', // process.env.PRD_SAUCEDEMO_USERNAME || '',
        PASSWORD: 'secret_sauce'// process.env.PRD_SAUCEDEMO_PASSWORD || ''
      }
    }
  }
};
