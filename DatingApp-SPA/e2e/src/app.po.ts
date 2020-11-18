import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
<<<<<<< HEAD
    return element(by.css('app-root h1')).getText() as Promise<string>;
=======
    return element(by.css('app-root .content span')).getText() as Promise<string>;
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
  }
}
