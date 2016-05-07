"use strict";
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var _angular_universal_1 = require('@angular-universal');
exports.options = {
    directives: [
        // The component that will become the main App Shell
        HelloMobileAppComponent
    ],
    providers: [
        // What URL should Angular be treating the app as if navigating
        core_1.provide(router_deprecated_1.APP_BASE_HREF, { useValue: '/' }),
        core_1.provide(_angular_universal_1.REQUEST_URL, { useValue: '/' }),
        router_deprecated_1.ROUTER_PROVIDERS,
        // Providers from universal to make routing and http work in node
        _angular_universal_1.NODE_LOCATION_PROVIDERS,
        _angular_universal_1.NODE_HTTP_PROVIDERS
    ],
    preboot: false
};
//# sourceMappingURL=main-app-shell.js.map