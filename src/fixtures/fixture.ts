import { test as base, mergeTests } from '@playwright/test';
import { HelperType } from 'src/fixtures/types/HelperType';
import { PageType } from 'src/fixtures/types/PageType';

import { RandomDataGenerator } from 'src/helpers/random-data-generator/RandomDataGenerator';
import { ActionUtils } from 'src/utilities/ActionUtils';

// fixtures for page objects
const pageFixtures = base.extend<PageType>({
  loginPage: async ({ page }, use) => {
    const { LoginPage } = await import('@pages/LoginPage');
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    const { ProductPage } = await import('@pages/ProductPage');
    await use(new ProductPage(page));
  },
  headerPage: async ({ page }, use) => {
    const { HeaderPage } = await import('@pages/common/HeaderPage');
    await use(new HeaderPage(page));
  },
  cartPage: async ({ page }, use) => {
    const { CartPage } = await import('@pages/CartPage');
    await use(new CartPage(page));
  },
  checkOutPage: async ({ page }, use) => {
    const { CheckOutPage } = await import('@pages/CheckOutPage');
    await use(new CheckOutPage(page));
  }
});

export const actionUtilsFixtures = base.extend<HelperType>({
  actionUtils: async ({ page }, use) => {
    const actionUtils = new ActionUtils(page);
    await use(actionUtils);
  }
});

// fixtures for test data
export const testDataFixtures = base.extend<HelperType>({
  randomDataGenerator: async ({}, use) => {
    const dataGenerator = new RandomDataGenerator();
    await use(dataGenerator);
  }
});

export const test = mergeTests(pageFixtures, testDataFixtures, actionUtilsFixtures);
