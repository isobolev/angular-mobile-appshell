import { AngularMobileAppPage } from './app.po';

describe('angular-mobile-app App', function() {
  let page: AngularMobileAppPage;

  beforeEach(() => {
    page = new AngularMobileAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-mobile-app works!');
  });
});
