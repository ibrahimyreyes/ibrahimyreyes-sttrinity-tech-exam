import { APPCONFIG } from 'environments/env-prd';
import { test, expect } from 'src/hooks/BaseTest';

test.describe('E2E scenario for placing an order with bypass login', { tag: '@E2E' }, () => {
  test('[T44155]', async ({
    actionUtils,
    randomDataGenerator,
    productPage,
    headerPage,
    cartPage,
    checkOutPage
  }) => {
    const randomFirstName = await randomDataGenerator.generateRandomFirstName();
    const randomLastName = await randomDataGenerator.generateRandomLastNameWithUUID();

    await test.step('Navigate to inventory/product page', async () => {
      await actionUtils.navigateTo(APPCONFIG.Prd.SauceDemo.App.URL + '/inventory.html');
    });

    await test.step('Add product to cart', async () => {
      await actionUtils.navigateTo(APPCONFIG.Prd.SauceDemo.App.URL + '/inventory.html');
      await productPage.click_add_to_cart('Sauce Labs Backpack');
      await headerPage.click_addToCartIcon();
    });

    await test.step('Check out product from cart', async () => {
      await cartPage.click_checkout();
    });

    await test.step('Fill up checkout information', async () => {
      await checkOutPage.fill_up_firstName(randomFirstName);
      await checkOutPage.fill_up_lastName(randomLastName);
      await checkOutPage.fill_up_postalCode('14850');
      await checkOutPage.click_continue();
    });

    await test.step('Place order', async () => {
      await checkOutPage.click_finish();
    });

    await test.step('Verify order confirmation', async () => {
      const confirmationMessage = await checkOutPage.get_placeOrderConfirmationMessage();
      expect(confirmationMessage).toBe('Thank you for your order!');
    });
  });
});
