import Page from "../page";

class Navbar extends Page {
  constructor() {
    super("input+svg");
  }

  get homeLink() {
    return $("a[href='/']");
  }

  get homeOption() {
    return $("=Home");
  }

  get shopOption() {
    return $("=Shop");
  }

  get componentsOption() {
    return $("=Components");
  }

  get aboutOption() {
    return $("=About");
  }

  get journalOption() {
    return $("=Journal");
  }

  get contactOption() {
    return $("=Contact");
  }

  get apiOption() {
    return $("=API");
  }

  get categoryOption() {
    return $('//p[text()="Shop by Category"]');
  }

  get searchInput() {
    return $('input[placeholder="Search your products here"]')
  }

  get searchIcon() {
    return $('input+svg')
  }

  get profileIcon() {
    return $('//a[@href="/cart"]/preceding-sibling::div/div')
  }

  get cartIcon() {
    return $('a[href="/cart"]')
  }

  get signInButton() {
    return $('a[href="/signin"] li')
  }

  get signUpButton() {
    return $('a[href="/signup"] li')
  }

  /**
   * Purpose of this method is to click on home link
   */
  async clickHomeLink() {
    await this.homeLink.click();
  }

  /**
   * Purpose of this method is to click on home option
   */
  async clickHomeOption() {
    await this.homeOption.click();
  }

  /**
   * Purpose of this method is to click on shop option
   */
  async clickShopOption() {
    await this.shopOption.click();
  }

  /**
   * Purpose of this method is to click on components option
   */
  async clickComponentsOption() {
    await this.componentsOption.click();
  }

  /**
   * Purpose of this method is to click on about option
   */
  async clickAboutOption() {
    await this.aboutOption.click();
  }

  /**
   * Purpose of this method is to click on journal option
   */
  async clickJournalOption() {
    await this.journalOption.click();
  }

  /**
   * Purpose of this method is to click on contact option
   */
  async clickContactOption() {
    await this.contactOption.click();
  }

  /**
   * Purpose of this method is to click on api option
   */
  async clickApiOption() {
    await this.apiOption.click();
  }

  /**
   * Purpose of this method is to click on category option
   */
  async clickCategoryOption() {
    await this.categoryOption.click();
  }

  /**
   * Purpose of this method is to search for a product
   * Use this method with enterSearchText method
   * **Method in development**
   */
  async clickSearchIcon() {
    await this.searchIcon.click();
  }

  /**
   * Purpose of this method is to click on profile icon
   */
  async clickOnProfileIcon() {
    await this.profileIcon.click();
  }

  /**
   * Purpose of this method is to click on sign in button
   */
  async clickSignInButton() {
    await this.signInButton.click();
  }

  /**
   * Purpose of this method is to click on sign up button
   */
  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  /**
   * Purpose of this method is to tap on profile icon and click on sign in button
   */
  async tapProfileIconAndClickSignIn() {
    await this.clickOnProfileIcon();
    await this.clickSignInButton();
  }
}

export default new Navbar();