import { devices } from '@playwright/test';
import { APPCONFIG } from 'environments/env-prd';
import { test, expect } from 'src/hooks/BaseTest';

test.use({
  viewport: { width: 390, height: 844 }, // iPhone 13/12 dimensions
});

test.describe('Verify add to cart UI/UX notification in mobile responsive view for iPhone 13/12', { tag: '@component' }, () => {
  test('[TC001]', async ({
    actionUtils,
    productPage,
    headerPage,
  }) => {
 
    await test.step('Navigate to inventory/product page', async () => {
      await actionUtils.navigateTo(APPCONFIG.Prd.SauceDemo.App.URL + '/inventory.html');
    });
    await test.step('Add product to cart', async () => {
      await productPage.click_add_to_cart('Sauce Labs Backpack');
      await headerPage.click_addToCartIcon();
    });

    await test.step('Verify that the add to cart icon badge is color red', async () => { 
      const element =  await headerPage.get_AddTocartIconBadge_elem();
      const badgeColor = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
      });
      expect(badgeColor).toBe('rgb(226, 35, 26)'); // Red color in RGB format
    });
  });
});
