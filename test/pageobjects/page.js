import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {

    constructor(selector) {
        this.selector = selector;
    }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   */
  async waitForIsShown(isShown = true) {
    return $(this.selector).waitForExist({
      reverse: !isShown,
    });
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path) {
    await browser.maximizeWindow();
    return browser.url(`${path}`);
  }
}
