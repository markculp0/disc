import { browser, by, element } from 'protractor';

/** AppPage - End-to-end testing class */
export class AppPage {
  /** Return BaseURL as Promise */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /** Return app title string as Promise */
  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
