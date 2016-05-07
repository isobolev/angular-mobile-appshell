"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var toolbar_1 = require('@angular2-material/toolbar');
var AngularMobileAppAppComponent = (function () {
    function AngularMobileAppAppComponent() {
        this.title = 'angular-mobile-app works!';
    }
    AngularMobileAppAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular-mobile-app-app',
            templateUrl: 'angular-mobile-app.component.html',
            styleUrls: ['angular-mobile-app.component.css'],
            directives: [toolbar_1.MdToolbar]
        })
    ], AngularMobileAppAppComponent);
    return AngularMobileAppAppComponent;
}());
exports.AngularMobileAppAppComponent = AngularMobileAppAppComponent;
//# sourceMappingURL=angular-mobile-app.component.js.map