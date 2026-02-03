
import { LoginPage } from '@pages/LoginPage';
import { Page } from '@playwright/test';
import { ActionUtils } from '@utilities/ActionUtils';
import { APPCONFIG } from 'environments/env-prd';
import { test as setup } from 'src/hooks/BaseTest';


export class AuthGenerator {
  private loginPage: LoginPage;
  private actionUtils : ActionUtils;
  private page:Page;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.actionUtils = new ActionUtils(page); 
  }

  async getStorageState() {
    await setup.step('Login', async () => {
      await this.actionUtils.navigateTo(APPCONFIG.Prd.SauceDemo.App.URL);
      await this.loginPage.enter_username(APPCONFIG.Prd.SauceDemo.Credentials.USERNAME);
      await this.loginPage.enter_password(APPCONFIG.Prd.SauceDemo.Credentials.PASSWORD);
      await this.loginPage.click_log_in();
      await this.actionUtils.navigateTo(APPCONFIG.Prd.SauceDemo.App.URL);
      await this.page.goto(APPCONFIG.Prd.SauceDemo.App.URL+'/inventory.html');
      await this.page.context().storageState({ path: 'auth.json' });
    });
  }
}