import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'angular-mobile-app-app',
  templateUrl: 'angular-mobile-app.component.html',
  styleUrls: ['angular-mobile-app.component.css'],
  directives: [MdToolbar]
})

export class AngularMobileAppAppComponent {
  title = 'angular-mobile-app works!';
}
