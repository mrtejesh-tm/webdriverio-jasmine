import { $ } from "@wdio/globals";
import Page from "./page.js";
import { routes } from "../../fixtures/routes.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  constructor() {
    super("h2+p");
  }

  /**
   * Purpose of this method is to open the home page
   */
  open() {
    return super.open(routes.Home);
  }
}

export default new HomePage();
