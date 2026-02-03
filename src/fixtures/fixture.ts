import { AuthGenerator } from '@utilities/auth-utils/AuthGenerator';
import { LoginPage } from '@pages/LoginPage';

import { test as base, mergeTests } from '@playwright/test';
import { HelperType } from 'src/fixtures/types/HelperType';
import { PageType } from 'src/fixtures/types/PageType';

import { RandomDataGenerator } from 'src/helpers/random-data-generator/RandomDataGenerator';
import { ActionUtils } from 'src/utilities/ActionUtils';
import { TestDataReader } from 'src/utilities/reader-utils/JsonReader';

// fixtures for page objects

const pageFixtures = base.extend<PageType>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
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
  },
  jsonReader: async ({}, use) => {
    const jsonReader = new TestDataReader();
    await use(jsonReader);
  }
});


export const test = mergeTests(pageFixtures, testDataFixtures, actionUtilsFixtures);
