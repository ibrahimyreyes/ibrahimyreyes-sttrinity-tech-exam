import { APPCONFIG } from 'environments/env-prd';
import { test, expect } from 'src/hooks/BaseTest';

test.describe('E2E scenario for placing an order with bypass login', { tag: '@E2E' }, () => {
  test('[T44155]', async ({
    actionUtils,
    randomDataGenerator,
    productPage,
    headerPage,
    cartPage,
    page
  }) => {
    const randomFirstName = await randomDataGenerator.generateRandomFirstName();
    const randomLastName = await randomDataGenerator.generateTimestamp();

    await test.step('Login', async () => {
      await actionUtils.navigateTo(APPCONFIG.Prd.SauceDemo.App.URL + '/inventory.html');
      await productPage.click_add_to_cart('Sauce Labs Backpack');
      await headerPage.click_addToCartIcon();
      await cartPage.click_checkout();
    });
  });
});
