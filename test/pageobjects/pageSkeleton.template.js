import { $ } from "@wdio/globals";
import Page from "./page.js";
import { routes } from "../../fixtures/routes.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * Update the super() call to reflect the correct selector
   */
  constructor() {
    super("h2+p");
  }

  /**
   * Pass the correct route to the super.open() method
   */
  open() {
    return super.open(routes.Home);
  }
}

export default new HomePage();
