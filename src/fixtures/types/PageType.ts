export interface PageFixtures {
  loginPage: import('@pages/LoginPage').LoginPage;
  productPage: import('@pages/ProductPage').ProductPage;
  headerPage: import('@pages/common/HeaderPage').HeaderPage;
  cartPage: import('@pages/CartPage').CartPage;
}

export interface PageType extends PageFixtures {}
