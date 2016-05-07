import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularMobileAppAppComponent } from '../app/angular-mobile-app.component';

beforeEachProviders(() => [AngularMobileAppAppComponent]);

describe('App: AngularMobileApp', () => {
  it('should create the app',
      inject([AngularMobileAppAppComponent], (app: AngularMobileAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-mobile-app works!\'',
      inject([AngularMobileAppAppComponent], (app: AngularMobileAppAppComponent) => {
    expect(app.title).toEqual('angular-mobile-app works!');
  }));
});
