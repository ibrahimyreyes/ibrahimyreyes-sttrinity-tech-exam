import { APPCONFIG } from 'environments/env-prd';
import { test, expect } from 'src/hooks/BaseTest';

test.describe('E2E scenario for placing an order with a logged-in user', { tag: '@E2E' }, () => {
  test('[T44155]', async ({
    loginPage,
    actionUtils,
    randomDataGenerator,
    page
  }) => {
    const randomFirstName = await randomDataGenerator.generateRandomFirstName();
    const randomLastName = await randomDataGenerator.generateTimestamp();


    await test.step('Login', async () => {
      await actionUtils.navigateTo(APPCONFIG.Prd.SauceDemo.App.URL+'/inventory.html');
      // await loginPage.enter_username(APPCONFIG.Prd.SauceDemo.Credentials.USERNAME);
      // await loginPage.enter_password(APPCONFIG.Prd.SauceDemo.Credentials.PASSWORD);
      // await loginPage.click_log_in();
      // await page.context().storageState({ path: 'auth.json' });


    });
  }); 
});
