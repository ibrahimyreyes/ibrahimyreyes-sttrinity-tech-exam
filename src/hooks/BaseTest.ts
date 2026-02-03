import { BrowserContext, Page, expect } from '@playwright/test';
import { AuthGenerator } from '@utilities/auth-utils/AuthGenerator';
import { APPCONFIG } from 'environments/env-prd';
import { test as baseTest } from 'src/fixtures/fixture';

type HookFixture = {
  context: BrowserContext;
  page: Page;
};

export const test = baseTest.extend<HookFixture>({
  context: async ({ browser }, use) => {
    // This code runs before all tests
    const context = await browser.newContext();
    const page = await context.newPage();
    const authGenerator = new AuthGenerator(APPCONFIG.Prd.SauceDemo.App.URL, APPCONFIG.Prd.SauceDemo.Credentials.USERNAME, APPCONFIG.Prd.SauceDemo.Credentials.PASSWORD, page);
    await authGenerator.getStorageState();
    await page.close();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    // This code runs before each test
    const page = await context.newPage();
    test.setTimeout(300000); // Set timeout for each test (300 seconds)
    page.setDefaultTimeout(60000); // Set timeout for action (60 seconds)
    page.setDefaultNavigationTimeout(60000); // Set timeout for navigating the page (60 seconds)
    await use(page);
    await page.close();
  }
});

export { expect };
