export class AngularMobileAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-mobile-app-app h1')).getText();
  }
}
