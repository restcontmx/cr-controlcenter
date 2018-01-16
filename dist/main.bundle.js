webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Camaleon Admin';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__business_business_component__ = __webpack_require__("../../../../../src/app/business/business.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locations_locations_component__ = __webpack_require__("../../../../../src/app/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_dashboard_component__ = __webpack_require__("../../../../../src/app/auth/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_dashboard_main_component__ = __webpack_require__("../../../../../src/app/auth/dashboard.main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_navbar_component__ = __webpack_require__("../../../../../src/app/menu/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_footer_component__ = __webpack_require__("../../../../../src/app/menu/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu_sidebar_component__ = __webpack_require__("../../../../../src/app/menu/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_login_component__ = __webpack_require__("../../../../../src/app/auth/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__business_business_service__ = __webpack_require__("../../../../../src/app/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_alwaysauthguard_service__ = __webpack_require__("../../../../../src/app/auth/alwaysauthguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__business_business_list_component__ = __webpack_require__("../../../../../src/app/business/business.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__business_business_new_component__ = __webpack_require__("../../../../../src/app/business/business.new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__business_business_detail_component__ = __webpack_require__("../../../../../src/app/business/business.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__business_business_edit_component__ = __webpack_require__("../../../../../src/app/business/business.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__locations_location_new_component__ = __webpack_require__("../../../../../src/app/locations/location.new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__locations_location_service__ = __webpack_require__("../../../../../src/app/locations/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__locations_location_detail_component__ = __webpack_require__("../../../../../src/app/locations/location.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__permission_permission_component__ = __webpack_require__("../../../../../src/app/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__permission_permission_detail_component__ = __webpack_require__("../../../../../src/app/permission/permission.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__permission_permission_list_component__ = __webpack_require__("../../../../../src/app/permission/permission.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__permission_permission_service__ = __webpack_require__("../../../../../src/app/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__permission_permission_new_component__ = __webpack_require__("../../../../../src/app/permission/permission.new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__monitor_monitor_service__ = __webpack_require__("../../../../../src/app/monitor/monitor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__monitor_monitor_component__ = __webpack_require__("../../../../../src/app/monitor/monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__monitor_activitytype_list_component__ = __webpack_require__("../../../../../src/app/monitor/activitytype.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__monitor_activitytype_new_component__ = __webpack_require__("../../../../../src/app/monitor/activitytype.new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__auth_setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__auth_login_component__["a" /* LoginComponent */] },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_10__auth_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_alwaysauthguard_service__["a" /* AlwaysAuthGuard */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_11__auth_dashboard_main_component__["a" /* DashboardMainComponent */]
            },
            {
                path: 'business',
                component: __WEBPACK_IMPORTED_MODULE_7__business_business_component__["a" /* BusinessComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_19__business_business_list_component__["a" /* BusinessListComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_20__business_business_new_component__["a" /* BusinessNewComponent */] },
                    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_21__business_business_detail_component__["a" /* BusinessDetailComponent */] },
                    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_22__business_business_edit_component__["a" /* BusinessEditComponent */] },
                    { path: 'location/:id', component: __WEBPACK_IMPORTED_MODULE_23__locations_location_new_component__["a" /* LocationNewComponent */] },
                    { path: 'location/detail/:id', component: __WEBPACK_IMPORTED_MODULE_26__locations_location_detail_component__["a" /* LocationDetailComponent */] }
                ]
            },
            {
                path: 'permission',
                component: __WEBPACK_IMPORTED_MODULE_27__permission_permission_component__["a" /* PermissionComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_29__permission_permission_list_component__["a" /* PermissionListComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_31__permission_permission_new_component__["a" /* PermissionNewComponent */] },
                    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_28__permission_permission_detail_component__["a" /* PermissionDetailComponent */] }
                ]
            },
            {
                path: 'monitor',
                component: __WEBPACK_IMPORTED_MODULE_33__monitor_monitor_component__["a" /* MonitorComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_34__monitor_activitytype_list_component__["a" /* ActivityTypeListComponent */] },
                    { path: 'activitytype', component: __WEBPACK_IMPORTED_MODULE_34__monitor_activitytype_list_component__["a" /* ActivityTypeListComponent */] },
                    { path: 'newactivitytype', component: __WEBPACK_IMPORTED_MODULE_35__monitor_activitytype_new_component__["a" /* ActivityTypeNewComponent */] }
                ]
            }
        ]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__business_business_component__["a" /* BusinessComponent */],
            __WEBPACK_IMPORTED_MODULE_8__locations_locations_component__["a" /* LocationsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__auth_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_dashboard_main_component__["a" /* DashboardMainComponent */],
            __WEBPACK_IMPORTED_MODULE_15__auth_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__menu_navbar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__menu_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__menu_sidebar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__business_business_list_component__["a" /* BusinessListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__business_business_new_component__["a" /* BusinessNewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__business_business_detail_component__["a" /* BusinessDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__business_business_edit_component__["a" /* BusinessEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__locations_location_new_component__["a" /* LocationNewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__permission_permission_component__["a" /* PermissionComponent */],
            __WEBPACK_IMPORTED_MODULE_29__permission_permission_list_component__["a" /* PermissionListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__permission_permission_detail_component__["a" /* PermissionDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_31__permission_permission_new_component__["a" /* PermissionNewComponent */],
            __WEBPACK_IMPORTED_MODULE_33__monitor_monitor_component__["a" /* MonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_34__monitor_activitytype_list_component__["a" /* ActivityTypeListComponent */],
            __WEBPACK_IMPORTED_MODULE_35__monitor_activitytype_new_component__["a" /* ActivityTypeNewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__locations_location_detail_component__["a" /* LocationDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_37__swimlane_ngx_charts__["NgxChartsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_17__business_business_service__["a" /* BusinessService */],
            __WEBPACK_IMPORTED_MODULE_18__auth_alwaysauthguard_service__["a" /* AlwaysAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_24__users_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_25__locations_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_30__permission_permission_service__["a" /* PermissionService */],
            __WEBPACK_IMPORTED_MODULE_32__monitor_monitor_service__["a" /* MonitorService */],
            __WEBPACK_IMPORTED_MODULE_38__auth_setup_service__["a" /* SetupService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/alwaysauthguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlwaysAuthGuard = (function () {
    // constructor function
    // @param auth_service: Authentication service
    // @param router: router service
    // @returns none
    function AlwaysAuthGuard(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    // can activate
    // Verification of the login
    // @params none
    // @returns boolean
    AlwaysAuthGuard.prototype.canActivate = function () {
        if (this.auth_service.viewVerification()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AlwaysAuthGuard;
}());
AlwaysAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AlwaysAuthGuard);

var _a, _b;
//# sourceMappingURL=alwaysauthguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import RxJs required methods



var AuthService = (function () {
    // Constructor function
    // @param http_service:Http serivce
    // @param cookie_service:Cookie service 
    // @returns none
    function AuthService(http_service, cookie_service, setup_service) {
        var _this = this;
        this.http_service = http_service;
        this.cookie_service = cookie_service;
        this.setup_service = setup_service;
        // View validation
        // Verifies that the user is logged in
        // @params none
        // @return boolean
        this.viewVerification = function () {
            return localStorage.getItem('userdata') || null ? true : false;
        };
        // Log out function
        // This will handle the http pettition to log out
        // @params none
        // @returns a logout pettition
        this.logout = function () {
            localStorage.removeItem('userdata');
            return _this.http_service.post(_this.setup_service.getAPIUri() + 'auth/logout/', {});
        };
    }
    // Login function
    // This will handle the http pettiton to login on the server side
    // @param email : string - user email for auth
    // @param password : string - user password for auth
    // @returns a login pettition
    AuthService.prototype.login = function (email, password) {
        return this.http_service.post(this.setup_service.getAPIUri() + 'auth/login/', { 'email': email, 'password': password });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__setup_service__["a" /* SetupService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <header class=\"header\">\n        <camaleon-navbar></camaleon-navbar>\n    </header>\n    <div class=\"page-content d-flex align-items-stretch\">\n\n        <camaleon-sidebar></camaleon-sidebar>\n\n        <div class=\"content-inner\">\n            <!-- Content-->            \n            <router-outlet></router-outlet>\n            <!-- Page Footer-->\n            <camaleon-footer></camaleon-footer>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function DashboardComponent(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("Is in dasboard");
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/auth/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.main.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Header-->\n<header class=\"page-header\">\n    <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Dashboard</h2>\n    </div>\n</header>\n\n<!-- Dashboard Counts Section-->\n<section class=\"dashboard-counts no-padding-bottom\">\n    <div class=\"container-fluid\">\n        <div class=\"row bg-white has-shadow\">\n            <!-- Item -->\n            <div class=\"col-xl-3 col-sm-6\">\n                <div class=\"item d-flex align-items-center\">\n                    <div class=\"icon bg-violet\">\n                        <i class=\"icon-user\"></i>\n                    </div>\n                    <div class=\"title\">\n                        <span>New\n                            <br>Clients</span>\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 25%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                class=\"progress-bar bg-violet\"></div>\n                        </div>\n                    </div>\n                    <div class=\"number\">\n                        <strong>25</strong>\n                    </div>\n                </div>\n            </div>\n            <!-- Item -->\n            <div class=\"col-xl-3 col-sm-6\">\n                <div class=\"item d-flex align-items-center\">\n                    <div class=\"icon bg-red\">\n                        <i class=\"icon-padnote\"></i>\n                    </div>\n                    <div class=\"title\">\n                        <span>Work\n                            <br>Orders</span>\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 70%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                class=\"progress-bar bg-red\"></div>\n                        </div>\n                    </div>\n                    <div class=\"number\">\n                        <strong>70</strong>\n                    </div>\n                </div>\n            </div>\n            <!-- Item -->\n            <div class=\"col-xl-3 col-sm-6\">\n                <div class=\"item d-flex align-items-center\">\n                    <div class=\"icon bg-green\">\n                        <i class=\"icon-bill\"></i>\n                    </div>\n                    <div class=\"title\">\n                        <span>New\n                            <br>Invoices</span>\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 40%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                class=\"progress-bar bg-green\"></div>\n                        </div>\n                    </div>\n                    <div class=\"number\">\n                        <strong>40</strong>\n                    </div>\n                </div>\n            </div>\n            <!-- Item -->\n            <div class=\"col-xl-3 col-sm-6\">\n                <div class=\"item d-flex align-items-center\">\n                    <div class=\"icon bg-orange\">\n                        <i class=\"icon-check\"></i>\n                    </div>\n                    <div class=\"title\">\n                        <span>Open\n                            <br>Cases</span>\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 50%; height: 4px;\" aria-valuenow=\"{#val.value}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                class=\"progress-bar bg-orange\"></div>\n                        </div>\n                    </div>\n                    <div class=\"number\">\n                        <strong>50</strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n<!-- Projects Section-->\n<section class=\"projects no-padding-top\">\n    <div class=\"container-fluid\">\n        <!-- Project-->\n        <div class=\"project\">\n            <div class=\"row bg-white has-shadow\">\n                <div class=\"left-col col-lg-6 d-flex align-items-center justify-content-between\">\n                    <div class=\"project-title d-flex align-items-center\">\n                        <div class=\"image has-shadow\">\n                            <img src=\"img/project-1.jpg\" alt=\"...\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"text\">\n                            <h3 class=\"h4\">Project Title</h3>\n                            <small>Lorem Ipsum Dolor</small>\n                        </div>\n                    </div>\n                    <div class=\"project-date\">\n                        <span class=\"hidden-sm-down\">Today at 4:24 AM</span>\n                    </div>\n                </div>\n                <div class=\"right-col col-lg-6 d-flex align-items-center\">\n                    <div class=\"time\">\n                        <i class=\"fa fa-clock-o\"></i>12:00 PM </div>\n                    <div class=\"comments\">\n                        <i class=\"fa fa-comment-o\"></i>20</div>\n                    <div class=\"project-progress\">\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 45%; height: 6px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-red\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Project-->\n        <div class=\"project\">\n            <div class=\"row bg-white has-shadow\">\n                <div class=\"left-col col-lg-6 d-flex align-items-center justify-content-between\">\n                    <div class=\"project-title d-flex align-items-center\">\n                        <div class=\"image has-shadow\">\n                            <img src=\"img/project-2.jpg\" alt=\"...\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"text\">\n                            <h3 class=\"h4\">Project Title</h3>\n                            <small>Lorem Ipsum Dolor</small>\n                        </div>\n                    </div>\n                    <div class=\"project-date\">\n                        <span class=\"hidden-sm-down\">Today at 4:24 AM</span>\n                    </div>\n                </div>\n                <div class=\"right-col col-lg-6 d-flex align-items-center\">\n                    <div class=\"time\">\n                        <i class=\"fa fa-clock-o\"></i>12:00 PM </div>\n                    <div class=\"comments\">\n                        <i class=\"fa fa-comment-o\"></i>20</div>\n                    <div class=\"project-progress\">\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 60%; height: 6px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-green\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Project-->\n        <div class=\"project\">\n            <div class=\"row bg-white has-shadow\">\n                <div class=\"left-col col-lg-6 d-flex align-items-center justify-content-between\">\n                    <div class=\"project-title d-flex align-items-center\">\n                        <div class=\"image has-shadow\">\n                            <img src=\"img/project-3.jpg\" alt=\"...\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"text\">\n                            <h3 class=\"h4\">Project Title</h3>\n                            <small>Lorem Ipsum Dolor</small>\n                        </div>\n                    </div>\n                    <div class=\"project-date\">\n                        <span class=\"hidden-sm-down\">Today at 4:24 AM</span>\n                    </div>\n                </div>\n                <div class=\"right-col col-lg-6 d-flex align-items-center\">\n                    <div class=\"time\">\n                        <i class=\"fa fa-clock-o\"></i>12:00 PM </div>\n                    <div class=\"comments\">\n                        <i class=\"fa fa-comment-o\"></i>20</div>\n                    <div class=\"project-progress\">\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 50%; height: 6px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-violet\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Project-->\n        <div class=\"project\">\n            <div class=\"row bg-white has-shadow\">\n                <div class=\"left-col col-lg-6 d-flex align-items-center justify-content-between\">\n                    <div class=\"project-title d-flex align-items-center\">\n                        <div class=\"image has-shadow\">\n                            <img src=\"img/project-4.jpg\" alt=\"...\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"text\">\n                            <h3 class=\"h4\">Project Title</h3>\n                            <small>Lorem Ipsum Dolor</small>\n                        </div>\n                    </div>\n                    <div class=\"project-date\">\n                        <span class=\"hidden-sm-down\">Today at 4:24 AM</span>\n                    </div>\n                </div>\n                <div class=\"right-col col-lg-6 d-flex align-items-center\">\n                    <div class=\"time\">\n                        <i class=\"fa fa-clock-o\"></i>12:00 PM </div>\n                    <div class=\"comments\">\n                        <i class=\"fa fa-comment-o\"></i>20</div>\n                    <div class=\"project-progress\">\n                        <div class=\"progress\">\n                            <div role=\"progressbar\" style=\"width: 50%; height: 6px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-orange\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<!-- Updates Section                                                -->\n<section class=\"updates no-padding-top\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- Recent Updates-->\n            <div class=\"col-lg-4\">\n                <div class=\"recent-updates card\">\n                    <div class=\"card-close\">\n                        <div class=\"dropdown\">\n                            <button type=\"button\" id=\"closeCard6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                                <i class=\"fa fa-ellipsis-v\"></i>\n                            </button>\n                            <div aria-labelledby=\"closeCard6\" class=\"dropdown-menu dropdown-menu-right has-shadow\">\n                                <a href=\"#\" class=\"dropdown-item remove\">\n                                    <i class=\"fa fa-times\"></i>Close</a>\n                                <a href=\"#\" class=\"dropdown-item edit\">\n                                    <i class=\"fa fa-gear\"></i>Edit</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-header\">\n                        <h3 class=\"h4\">Recent Updates</h3>\n                    </div>\n                    <div class=\"card-body no-padding\">\n                        <!-- Item-->\n                        <div class=\"item d-flex justify-content-between\">\n                            <div class=\"info d-flex\">\n                                <div class=\"icon\">\n                                    <i class=\"icon-rss-feed\"></i>\n                                </div>\n                                <div class=\"title\">\n                                    <h5>Lorem ipsum dolor sit amet.</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.</p>\n                                </div>\n                            </div>\n                            <div class=\"date text-right\">\n                                <strong>24</strong>\n                                <span>May</span>\n                            </div>\n                        </div>\n                        <!-- Item-->\n                        <div class=\"item d-flex justify-content-between\">\n                            <div class=\"info d-flex\">\n                                <div class=\"icon\">\n                                    <i class=\"icon-rss-feed\"></i>\n                                </div>\n                                <div class=\"title\">\n                                    <h5>Lorem ipsum dolor sit amet.</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.</p>\n                                </div>\n                            </div>\n                            <div class=\"date text-right\">\n                                <strong>24</strong>\n                                <span>May</span>\n                            </div>\n                        </div>\n                        <!-- Item        -->\n                        <div class=\"item d-flex justify-content-between\">\n                            <div class=\"info d-flex\">\n                                <div class=\"icon\">\n                                    <i class=\"icon-rss-feed\"></i>\n                                </div>\n                                <div class=\"title\">\n                                    <h5>Lorem ipsum dolor sit amet.</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.</p>\n                                </div>\n                            </div>\n                            <div class=\"date text-right\">\n                                <strong>24</strong>\n                                <span>May</span>\n                            </div>\n                        </div>\n                        <!-- Item-->\n                        <div class=\"item d-flex justify-content-between\">\n                            <div class=\"info d-flex\">\n                                <div class=\"icon\">\n                                    <i class=\"icon-rss-feed\"></i>\n                                </div>\n                                <div class=\"title\">\n                                    <h5>Lorem ipsum dolor sit amet.</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.</p>\n                                </div>\n                            </div>\n                            <div class=\"date text-right\">\n                                <strong>24</strong>\n                                <span>May</span>\n                            </div>\n                        </div>\n                        <!-- Item-->\n                        <div class=\"item d-flex justify-content-between\">\n                            <div class=\"info d-flex\">\n                                <div class=\"icon\">\n                                    <i class=\"icon-rss-feed\"></i>\n                                </div>\n                                <div class=\"title\">\n                                    <h5>Lorem ipsum dolor sit amet.</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.</p>\n                                </div>\n                            </div>\n                            <div class=\"date text-right\">\n                                <strong>24</strong>\n                                <span>May</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Daily Feeds -->\n            <div class=\"col-lg-4\">\n                <div class=\"daily-feeds card\">\n                    <div class=\"card-close\">\n                        <div class=\"dropdown\">\n                            <button type=\"button\" id=\"closeCard7\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                                <i class=\"fa fa-ellipsis-v\"></i>\n                            </button>\n                            <div aria-labelledby=\"closeCard7\" class=\"dropdown-menu dropdown-menu-right has-shadow\">\n                                <a href=\"#\" class=\"dropdown-item remove\">\n                                    <i class=\"fa fa-times\"></i>Close</a>\n                                <a href=\"#\" class=\"dropdown-item edit\">\n                                    <i class=\"fa fa-gear\"></i>Edit</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-header\">\n                        <h3 class=\"h4\">Daily Feeds</h3>\n                    </div>\n                    <div class=\"card-body no-padding\">\n                        <!-- Item-->\n                        <div class=\"item\">\n                            <div class=\"feed d-flex justify-content-between\">\n                                <div class=\"feed-body d-flex justify-content-between\">\n                                    <a href=\"#\" class=\"feed-profile\">\n                                        <img src=\"img/avatar-5.jpg\" alt=\"person\" class=\"img-fluid rounded-circle\">\n                                    </a>\n                                    <div class=\"content\">\n                                        <h5>Aria Smith</h5>\n                                        <span>Posted a new blog </span>\n                                        <div class=\"full-date\">\n                                            <small>Today 5:60 pm - 12.06.2014</small>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"date text-right\">\n                                    <small>5min ago</small>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Item-->\n                        <div class=\"item\">\n                            <div class=\"feed d-flex justify-content-between\">\n                                <div class=\"feed-body d-flex justify-content-between\">\n                                    <a href=\"#\" class=\"feed-profile\">\n                                        <img src=\"img/avatar-2.jpg\" alt=\"person\" class=\"img-fluid rounded-circle\">\n                                    </a>\n                                    <div class=\"content\">\n                                        <h5>Frank Williams</h5>\n                                        <span>Posted a new blog </span>\n                                        <div class=\"full-date\">\n                                            <small>Today 5:60 pm - 12.06.2014</small>\n                                        </div>\n                                        <div class=\"CTAs\">\n                                            <a href=\"#\" class=\"btn btn-xs btn-secondary\">\n                                                <i class=\"fa fa-thumbs-up\"> </i>Like</a>\n                                            <a href=\"#\" class=\"btn btn-xs btn-secondary\">\n                                                <i class=\"fa fa-heart\"> </i>Love </a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"date text-right\">\n                                    <small>5min ago</small>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Item-->\n                        <div class=\"item clearfix\">\n                            <div class=\"feed d-flex justify-content-between\">\n                                <div class=\"feed-body d-flex justify-content-between\">\n                                    <a href=\"#\" class=\"feed-profile\">\n                                        <img src=\"img/avatar-3.jpg\" alt=\"person\" class=\"img-fluid rounded-circle\">\n                                    </a>\n                                    <div class=\"content\">\n                                        <h5>Ashley Wood</h5>\n                                        <span>Posted a new blog </span>\n                                        <div class=\"full-date\">\n                                            <small>Today 5:60 pm - 12.06.2014</small>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"date text-right\">\n                                    <small>5min ago</small>\n                                </div>\n                            </div>\n                            <div class=\"quote has-shadow\">\n                                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n                                    been the industry's standard dummy text ever since the 1500s. Over the years.</small>\n                            </div>\n                            <div class=\"CTAs pull-right\">\n                                <a href=\"#\" class=\"btn btn-xs btn-secondary\">\n                                    <i class=\"fa fa-thumbs-up\"> </i>Like</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Recent Activities -->\n            <div class=\"col-lg-4\">\n                <div class=\"recent-activities card\">\n                    <div class=\"card-close\">\n                        <div class=\"dropdown\">\n                            <button type=\"button\" id=\"closeCard8\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                                <i class=\"fa fa-ellipsis-v\"></i>\n                            </button>\n                            <div aria-labelledby=\"closeCard8\" class=\"dropdown-menu dropdown-menu-right has-shadow\">\n                                <a href=\"#\" class=\"dropdown-item remove\">\n                                    <i class=\"fa fa-times\"></i>Close</a>\n                                <a href=\"#\" class=\"dropdown-item edit\">\n                                    <i class=\"fa fa-gear\"></i>Edit</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-header\">\n                        <h3 class=\"h4\">Recent Activities</h3>\n                    </div>\n                    <div class=\"card-body no-padding\">\n                        <div class=\"item\">\n                            <div class=\"row\">\n                                <div class=\"col-4 date-holder text-right\">\n                                    <div class=\"icon\">\n                                        <i class=\"icon-clock\"></i>\n                                    </div>\n                                    <div class=\"date\">\n                                        <span>6:00 am</span>\n                                        <span class=\"text-info\">6 hours ago</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-8 content\">\n                                    <h5>Meeting</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt\n                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"row\">\n                                <div class=\"col-4 date-holder text-right\">\n                                    <div class=\"icon\">\n                                        <i class=\"icon-clock\"></i>\n                                    </div>\n                                    <div class=\"date\">\n                                        <span>6:00 am</span>\n                                        <span class=\"text-info\">6 hours ago</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-8 content\">\n                                    <h5>Meeting</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt\n                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"row\">\n                                <div class=\"col-4 date-holder text-right\">\n                                    <div class=\"icon\">\n                                        <i class=\"icon-clock\"></i>\n                                    </div>\n                                    <div class=\"date\">\n                                        <span>6:00 am</span>\n                                        <span class=\"text-info\">6 hours ago</span>\n                                    </div>\n                                </div>\n                                <div class=\"col-8 content\">\n                                    <h5>Meeting</h5>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt\n                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardMainComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function DashboardMainComponent(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    DashboardMainComponent.prototype.ngOnInit = function () {
        console.log("Is in dasboard");
    };
    return DashboardMainComponent;
}());
DashboardMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-main',
        template: __webpack_require__("../../../../../src/app/auth/dashboard.main.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardMainComponent);

var _a, _b;
//# sourceMappingURL=dashboard.main.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n.container {\n    margin-top: 70px;\n}\n.form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n    margin-bottom: 10px;\n}\n.form-signin .checkbox {\n    font-weight: normal;\n}\n.form-signin .form-control {\n    position: relative;\n    height: auto;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #log=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"login(log)\">\n        <h2 class=\"form-signin-heading\">Camaleon Reports Control Panel</h2>\n        <br>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" name=\"email\" required autofocus ngModel>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"password\" required ngModel>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    </form>\n</div>\n<!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/auth/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function LoginComponent(authservice, router) {
        var _this = this;
        this.authservice = authservice;
        this.router = router;
        // Login function
        // This uses the authentication service to validate the user and password
        // @params none
        // @returns void
        this.login = function (log) {
            if (log.valid) {
                _this.authservice.login(log.value.email, log.value.password)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    if (!response.error) {
                        console.log("Valid credentials");
                        _this.router.navigateByUrl('/');
                        localStorage.setItem('userdata', JSON.stringify(response.user_data));
                    }
                    else {
                        console.log("Not valid login", response.message);
                        alert(response.message);
                    }
                });
            }
        };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login.component.css")]
    })
    // Login component is the main login view
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/setup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetupService = (function () {
    // Constructor function
    // @returns none
    function SetupService() {
        this.DEVELOPMENT_MODE = false;
        this.dev_api_uri = "http://localhost:3333/api/";
        this.prod_api_uri = "/api/";
    }
    SetupService.prototype.getAPIUri = function () {
        return this.DEVELOPMENT_MODE ? this.dev_api_uri : this.prod_api_uri;
    };
    return SetupService;
}());
SetupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SetupService);

//# sourceMappingURL=setup.service.js.map

/***/ }),

/***/ "../../../../../src/app/business/business.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/business/business.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"page-header\">\n    <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Businesses</h2>\n    </div>\n</header>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <br>\n            <div class=\"statistic d-flex align-items-center bg-white has-shadow\" [routerLink]=\"['/business/']\">\n                <div class=\"icon bg-red\">\n                    <i class=\"fa fa-list\"></i>\n                </div>\n                <div class=\"text\">\n                    <small>List</small>\n                </div>\n            </div>\n            <div class=\"statistic d-flex align-items-center bg-white has-shadow\" [routerLink]=\"['/business/new']\">\n                <div class=\"icon bg-green\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </div>\n                <div class=\"text\">\n                    <small>New</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-10\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/business/business.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_service__ = __webpack_require__("../../../../../src/app/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function BusinessComponent(auth_service, router, service) {
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    BusinessComponent.prototype.ngOnInit = function () { };
    return BusinessComponent;
}());
BusinessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-business',
        template: __webpack_require__("../../../../../src/app/business/business.component.html"),
        styles: [__webpack_require__("../../../../../src/app/business/business.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */]) === "function" && _c || Object])
], BusinessComponent);

var _a, _b, _c;
//# sourceMappingURL=business.component.js.map

/***/ }),

/***/ "../../../../../src/app/business/business.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n            <a href=\"/business\">Business</a>\n        </li>\n        <li class=\"breadcrumb-item active\" *ngIf=\"business\">{{business.name}}</li>\n    </ul>\n</div>\n\n<section>\n    <div class=\"container-fluid\">\n        <div class=\"row\" *ngIf=\"business\">\n\n            <div class=\"col-md-12\">\n                <section class=\"charts\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"line-chart-example card\">\n                                    <div class=\"card-close\">\n                                        <div class=\"dropdown\">\n                                            <button type=\"button\" id=\"closeCard3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                                                <i class=\"fa fa-ellipsis-v\"></i>\n                                            </button>\n                                            <div aria-labelledby=\"closeCard3\" class=\"dropdown-menu dropdown-menu-right has-shadow\">\n                                                <a href=\"#\" class=\"dropdown-item remove\">\n                                                    <i class=\"fa fa-times\"></i>Close</a>\n                                                <a href=\"#\" class=\"dropdown-item edit\">\n                                                    <i class=\"fa fa-gear\"></i>Edit</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <ngx-charts-line-chart\n                                            [view]=\"view\"\n                                            [scheme]=\"colorScheme\"\n                                            [results]=\"multi\"\n                                            [gradient]=\"gradient\"\n                                            [xAxis]=\"showXAxis\"\n                                            [yAxis]=\"showYAxis\"\n                                            [legend]=\"showLegend\"\n                                            [showXAxisLabel]=\"showXAxisLabel\"\n                                            [showYAxisLabel]=\"showYAxisLabel\"\n                                            [xAxisLabel]=\"xAxisLabel\"\n                                            [yAxisLabel]=\"yAxisLabel\"\n                                            [autoScale]=\"autoScale\">\n                                        </ngx-charts-line-chart>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                    <div class=\"line-chart-example card\">\n                                        <div class=\"card-close\">\n                                            <div class=\"dropdown\">\n                                                <button type=\"button\" id=\"closeCard3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                                                    <i class=\"fa fa-ellipsis-v\"></i>\n                                                </button>\n                                                <div aria-labelledby=\"closeCard3\" class=\"dropdown-menu dropdown-menu-right has-shadow\">\n                                                    <a href=\"#\" class=\"dropdown-item remove\">\n                                                        <i class=\"fa fa-times\"></i>Close</a>\n                                                    <a href=\"#\" class=\"dropdown-item edit\">\n                                                        <i class=\"fa fa-gear\"></i>Edit</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"card-body\">\n                                                <ngx-charts-gauge\n                                                    [view]=\"view\"\n                                                    [scheme]=\"colorScheme\"\n                                                    [results]=\"data\"\n                                                    [min]=\"0\"\n                                                    [max]=\"100\"\n                                                    [angleSpan]=\"240\"\n                                                    [startAngle]=\"-120\"\n                                                    [units]=\"'Activity Reports'\"\n                                                    [bigSegments]=\"10\"\n                                                    [smallSegments]=\"5\">\n                                              </ngx-charts-gauge>\n                                        </div>\n                                    </div>\n                                </div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n        \n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h2>{{business.name}}\n                            <a [routerLink]=\"[ '/business/edit', business.id ]\">\n                                <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                            </a>\n                        </h2>\n                        <small>Description : {{business.description}}</small><br>\n                        <small>Production EndPoint : {{business.production_endpoint}}</small><br>\n                        <small>Tanus Symbolic Link : {{business.tanus_symb_link}}</small>\n                        <p class=\"lead\">\n                            Subscription Type : {{business.subscription.subscription_type.name}}\n                            <br> Subscription Status : {{business.subscription.status.name}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h3>\n                            <i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i> Subscription settings</h3>\n                        <button class=\"btn btn-sm btn-primary\" (click)=\"paySubscription(business.id)\">\n                            <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i> Pay</button>\n                        <button class=\"btn btn-sm btn-warning\" (click)=\"pendingSubscription(business.id)\">\n                            <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Pending</button>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"cancelSubscription(business.id)\">\n                            <i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancel</button>\n                        <hr>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-close\">\n                        <button class=\"btn btn-block btn-link\" [routerLink]=\"[ '/business/location', business.id ]\">New</button>\n                    </div>\n                    <div class=\"card-header d-flex align-items-center\">\n                        <h3 class=\"h4\">Locations</h3>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr class=\"table-danger\">\n                                        <th>Name</th>\n                                        <th>Created</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let loc of locations\" [routerLink]=\"[ '/business/location/detail', loc.id ]\">\n                                        <td>{{loc.location_name}}</td>\n                                        <td>{{loc.timestamp | date}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header d-flex align-items-center\">\n                        <h3 class=\"h4\">Camaleon Admins</h3>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr class=\"table-info\">\n                                        <th>CamaleonAdmin-ID</th>\n                                        <th>USER-ID</th>\n                                        <th>Name</th>\n                                        <th>Email</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of camaleonadmin\">\n                                        <td>{{user.id}}</td>\n                                        <td>{{user.user.id}}</td>\n                                        <td>{{user.user.first_name}} {{user.user.last_name}}</td>\n                                        <td>{{user.user.email}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header d-flex align-items-center\">\n                        <h3 class=\"h4\">User Reports</h3>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr class=\"table-info\">\n                                        <th>UserReports-ID</th>\n                                        <th>USER-ID</th>\n                                        <th>Name</th>\n                                        <th>Email</th>\n                                        <th>Profile</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of user_reports\">\n                                        <td>{{user.id}}</td>\n                                        <td>{{user.user.id}}</td>\n                                        <td>{{user.user.first_name}} {{user.user.last_name}}</td>\n                                        <td>{{user.user.email}}</td>\n                                        <td>{{user.profile.name}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"col-md-12\">\n\n                <h2>Activities</h2>\n                <hr>\n                <div class=\"container-fluid\" style=\"height:500px;overflow-y:scroll;\">\n\n                    <div class=\"project\" *ngFor=\"let a of activity\">\n                        <div class=\"row bg-white has-shadow\">\n                            <div class=\"left-col col-lg-6 d-flex align-items-center justify-content-between\">\n                                <div class=\"project-title d-flex align-items-center\">\n                                    <div class=\"text\">\n                                        <h3 class=\"h4\">{{a.name}}</h3>\n                                        <small>{{a.description}}</small>\n                                    </div>\n                                </div>\n                                <div class=\"project-date\">\n                                    <span class=\"hidden-sm-down\">{{a.timestamp | date : \"MM/dd/yyyy HH:mm:ss\"}}</span>\n                                </div>\n                            </div>\n                            <div class=\"right-col col-lg-6 d-flex align-items-center\">\n                                <div class=\"time\">\n                                    <i class=\"fa fa-user\"></i>{{a.email}} </div>\n                                <div class=\"comments\">\n                                    <i class=\"fa fa-info-circle\"></i>{{a.first_name}} {{a.last_name}}</div>\n                                <div class=\"project-progress\">\n                                    <div class=\"progress\">\n                                        <div role=\"progressbar\" style=\"width: 100%; height: 6px;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-blue\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <button class=\"btn btn-sm btn-default\" style=\"float:right;\">Next 50</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <h2>Error Report</h2>\n                <hr>\n                <div class=\"container-fluid\" style=\"height:500px;overflow-y: scroll;\">\n\n                    <div class=\"project\" *ngFor=\"let er of error_reports\">\n                        <div class=\"row bg-white has-shadow\">\n                            <div class=\"left-col col-lg-6 d-flex align-items-center justify-content-between\">\n                                <div class=\"project-title d-flex align-items-center\">\n                                    <div class=\"text\">\n                                        <h3 class=\"h4\">{{er.error_type}}</h3>\n                                        <small>{{er.description}}</small>\n                                    </div>\n                                </div>\n                                <div class=\"project-date\">\n                                    <span class=\"hidden-sm-down\">{{er.timestamp | date : \"MM/dd/yyyy HH:mm:ss\"}}</span>\n                                </div>\n                            </div>\n                            <div class=\"right-col col-lg-6 d-flex align-items-center\">\n                                <div class=\"time\">\n                                    <i class=\"fa fa-user\"></i>{{er.username}} </div>\n                                <div class=\"comments\">\n                                    <i class=\"fa fa-info-circle\"></i>{{er.first_name}} {{er.last_name}}</div>\n                                <div class=\"project-progress\">\n                                    <div class=\"progress\">\n                                        <div role=\"progressbar\" style=\"width: 100%; height: 6px;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar bg-red\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <button class=\"btn btn-sm btn-default\" style=\"float:right;\">Next 50</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"row\" *ngIf=\"business\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header d-flex align-items-center\">\n                    <h3 class=\"h4\">Delete Business</h3>\n                </div>\n                <div class=\"card-body\">\n                    <small>Warning you may lose valuable information with this action.</small>\n                    <button class=\"btn btn-block btn-danger\" (click)=\"delete()\">Delete {{business.name}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/business/business.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_service__ = __webpack_require__("../../../../../src/app/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locations_location_service__ = __webpack_require__("../../../../../src/app/locations/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__monitor_monitor_service__ = __webpack_require__("../../../../../src/app/monitor/monitor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BusinessDetailComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @param activated_route : service for getting the route params
    // @param location_service : location service
    // @param user_service : user service
    // @returns none
    function BusinessDetailComponent(auth_service, router, service, activated_route, location_service, user_service, monitor_service) {
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.activated_route = activated_route;
        this.location_service = location_service;
        this.user_service = user_service;
        this.monitor_service = monitor_service;
        this.locations = [];
        this.errors = "";
        this.successes = "";
        this.camaleonadmin = [];
        this.user_reports = [];
        this.activity = [];
        this.error_reports = [];
        this.errorreport_reports = [];
        this.activity_reports = [];
        this.view = [0, 0];
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Date';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Reports';
        this.colorScheme = {
            domain: ['#A10A28', '#5AA454']
        };
        this.autoScale = true;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    BusinessDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize page
        this.activity_page = 0;
        this.error_reports_page = 0;
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getBusiness(id);
            // Get the start date and the end date
            var d1 = ' 00:00:00', d2 = ' 23:59:59', today = new Date(), last_today = new Date();
            last_today.setDate(last_today.getDate() - 30);
            d1 = (last_today.getMonth() + 1) + '/' + last_today.getDate() + '/' + last_today.getFullYear() + d1;
            d2 = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() + d2;
            // Get monitor reports by business_id, date1( start ) and date2( end )
            _this.getMonitorReports(id, d1, d2);
        });
    };
    // Get business by id
    // @params id the business id
    // @returns none
    BusinessDetailComponent.prototype.getBusiness = function (id) {
        var _this = this;
        this.service.detail(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.business = response.data;
                _this.getLocations(id);
                _this.getUsers(id);
                _this.getActivity(id);
                _this.getErrorReports(id);
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Get activity
    // Will get business activities
    // @params id integer - business id
    // @returns none
    BusinessDetailComponent.prototype.getActivity = function (id) {
        var _this = this;
        this.monitor_service.getActivityByBusiness(id, this.activity_page)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.activity = response.data;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Get error reports
    // This will get the error reports on the system only in the api
    // @params id integer - business id
    // @returns none
    BusinessDetailComponent.prototype.getErrorReports = function (id) {
        var _this = this;
        this.monitor_service.getErrorReportsByBusiness(id, this.error_reports_page)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.error_reports = response.data;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Get locations by business id
    // @params id business id
    // @returns none
    BusinessDetailComponent.prototype.getLocations = function (id) {
        var _this = this;
        this.location_service.getLocationsByBusinessId(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.locations = response.data;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Get all the users by business id
    // @params id
    // @returns none
    BusinessDetailComponent.prototype.getUsers = function (id) {
        var _this = this;
        this.user_service.getUsersByBusinessId(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.user_reports = response.data.userreports;
                _this.camaleonadmin = response.data.camaleonadmin;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Delete function
    // this will delete a business on the service
    // @params none
    // @returns none
    BusinessDetailComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.business.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.router.navigateByUrl('/business');
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Cancel subscription
    // this will change the subscription status to canceled
    // @params id integer -  the business id
    // @returns none
    BusinessDetailComponent.prototype.cancelSubscription = function (id) {
        var _this = this;
        this.service.subCancel(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.business = response.data;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Pending subscription
    // this will change the subscription status to pending
    // @param id integer - business id
    // @returns none
    BusinessDetailComponent.prototype.pendingSubscription = function (id) {
        var _this = this;
        this.service.subPending(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.business = response.data;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // Pay Subscription
    // This will change the subscription status to paid
    // @param id integer - business id
    // @returns none
    BusinessDetailComponent.prototype.paySubscription = function (id) {
        var _this = this;
        this.service.subPay(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.business = response.data;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // getMonitorReports
    // returns all the activity and error reports
    // @param business_id : integer - Business id
    // @param date1 : string - the start date
    // @param date2 : string - the end date
    BusinessDetailComponent.prototype.getMonitorReports = function (id, d1, d2) {
        var _this = this;
        this.monitor_service.getReports(id, d1, d2)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.activity_reports = response.data.activity_reports;
                _this.errorreport_reports = response.data.error_reports;
                _this.initCharts(_this.errorreport_reports, _this.activity_reports);
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    // InitCharts
    // This will initialize the charts on the comp
    // @param e_reports : array - error reports
    // @param a_reports : array - activity reports
    // @returns none
    BusinessDetailComponent.prototype.initCharts = function (e_reports, a_reports) {
        var _this = this;
        this.multi = [
            {
                "name": "Errors",
                "series": []
            },
            {
                "name": "Activities",
                "series": []
            }
        ];
        e_reports.forEach(function (e_r) {
            _this.multi[0].series.push({ "name": e_r.timestamp, "value": e_r.count });
        });
        a_reports.forEach(function (a_r) {
            _this.multi[1].series.push({ "name": a_r.timestamp, "value": a_r.count });
        });
        var errs = e_reports.reduce(function (a, b) { return (a + b.count); }, 0);
        var alts = a_reports.reduce(function (a, b) { return (a + b.count); }, 0);
        this.data = [
            {
                "name": "Errors",
                "value": errs
            },
            {
                "name": "Alerts",
                "value": alts
            }
        ];
    };
    BusinessDetailComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return BusinessDetailComponent;
}());
BusinessDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-business-detail',
        template: __webpack_require__("../../../../../src/app/business/business.detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__locations_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__locations_location_service__["a" /* LocationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__users_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__users_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__monitor_monitor_service__["a" /* MonitorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__monitor_monitor_service__["a" /* MonitorService */]) === "function" && _g || Object])
], BusinessDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=business.detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/business/business.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Update Business</h2>\n\n<form (ngSubmit)=\"update()\" *ngIf=\"business\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"name\"></label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"name\"\n                        placeholder=\"Name\"\n                        required autofocus [(ngModel)]=\"business.name\">\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"description\"></label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"description\"\n                        placeholder=\"Description\"\n                        required autofocus [(ngModel)]=\"business.description\">\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"production_endpoint\"></label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"production_endpoint\"\n                        placeholder=\"Production EndPoint\"\n                        required autofocus [(ngModel)]=\"business.production_endpoint\">\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"tanus_symb_link\"></label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"tanus_symb_link\"\n                        placeholder=\"Tanus Symbolic Link\"\n                        required autofocus [(ngModel)]=\"business.tanus_symb_link\">\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <button type=\"submit\" class=\"btn bt-block btn-default\">Submit</button>                \n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/business/business.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_service__ = __webpack_require__("../../../../../src/app/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessEditComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function BusinessEditComponent(auth_service, router, service, user_service, activated_route) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.user_service = user_service;
        this.activated_route = activated_route;
        // add 
        // function for adding a new business
        // Adds the business then the user
        // @params businessForm : Form object
        // @returns none
        this.update = function () {
            // Add new business
            // Add new user with the bussines_id 
            var business = {
                id: _this.business.id,
                name: _this.business.name,
                description: _this.business.description,
                production_endpoint: _this.business.production_endpoint,
                tanus_symb_link: _this.business.tanus_symb_link
            };
            _this.service.update(business)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (!response.error) {
                    console.log(response);
                    _this.router.navigateByUrl("/business/detail/" + _this.business.id);
                }
                else {
                    _this.errors = "There was an error adding the business; " + response.message;
                }
            });
        };
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    BusinessEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getBusiness(id);
        });
    };
    // Get business by id
    // @params id the business id
    // @returns none
    BusinessEditComponent.prototype.getBusiness = function (id) {
        var _this = this;
        this.service.detail(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.business = response.data;
            }
            else {
                _this.errors = response.message;
            }
        });
    };
    return BusinessEditComponent;
}());
BusinessEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-business-edit',
        template: __webpack_require__("../../../../../src/app/business/business.edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__users_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], BusinessEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=business.edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/business/business.list.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Business List</li>\n    </ul>\n</div>\n<section>\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Created</th>\n                            <th>Subscription</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let business of businesses\" [routerLink]=\"['/business/detail', business.id]\">\n                            <th scope=\"row\">{{business.id}}</th>\n                            <td>{{business.name}}</td>\n                            <td>{{business.description}}</td>\n                            <td>{{business.timestamp | date:'MM/dd/yyyy H:mm:ss'}}</td>\n                            <td>{{business.subscription.subscription_type.name}}</td>\n                            <td>{{business.subscription.status.name}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/business/business.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_service__ = __webpack_require__("../../../../../src/app/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessListComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function BusinessListComponent(auth_service, router, service) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.businesses = [];
        // Get all the business
        // retrieves all the business from the server
        // @params none
        // @returns none
        this.getAllBusinesses = function () {
            _this.service.getAll().map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.businesses = response.data;
            });
        };
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    BusinessListComponent.prototype.ngOnInit = function () {
        this.getAllBusinesses();
    };
    return BusinessListComponent;
}());
BusinessListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-business-list',
        template: __webpack_require__("../../../../../src/app/business/business.list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */]) === "function" && _c || Object])
], BusinessListComponent);

var _a, _b, _c;
//# sourceMappingURL=business.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/business/business.new.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Business New</li>\n    </ul>\n</div>\n\n<section *ngIf=\"errors || messages\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"p-3 mb-2 bg-danger text-white\" *ngIf=\"errors\">\n                        {{errors}}\n                    </div>\n                    <div class=\"p-3 mb-2 bg-warning text-white\" *ngIf=\"messages\">\n                        {{messages}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"container-fluid\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form #businessForm=\"ngForm\" (ngSubmit)=\"add(businessForm)\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"business_name\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"business_name\" placeholder=\"Name\" required autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"business_description\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"business_description\" placeholder=\"Description\" required autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"business_production_endpoint\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"business_production_endpoint\" placeholder=\"Production EndPoint\" required autofocus\n                                        ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"business_tanus_symb_link\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"business_tanus_symb_link\" placeholder=\"Tanus Symbolic Link\" required autofocus\n                                        ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <h3>Default Camaleon User</h3>\n                                <small>This is for camaleon backdoor user.</small>\n                                <hr>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"user_first_name\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"user_first_name\" placeholder=\"First Name\" required autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"user_last_name\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"user_last_name\" placeholder=\"Second Name\" required autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"user_email\">Email address</label>\n                                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter default user email\" name=\"user_email\"\n                                        required autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"user_password\">Password</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"user_password\" required autofocus\n                                        ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <button type=\"submit\" class=\"btn bt-block btn-default\">Submit</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/business/business.new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_service__ = __webpack_require__("../../../../../src/app/business/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessNewComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function BusinessNewComponent(auth_service, router, service, user_service) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.user_service = user_service;
        // add 
        // function for adding a new business
        // Adds the business then the user
        // @params businessForm : Form object
        // @returns none
        this.add = function (businessForm) {
            if (businessForm.valid) {
                // Add new business
                // Add new user with the bussines_id 
                var user_1 = {
                    first_name: businessForm.value.user_first_name,
                    last_name: businessForm.value.user_last_name,
                    password: businessForm.value.user_password,
                    email: businessForm.value.user_email,
                    bussines_id: 0
                }, business = {
                    name: businessForm.value.business_name,
                    description: businessForm.value.business_description,
                    production_endpoint: businessForm.value.business_production_endpoint,
                    tanus_symb_link: businessForm.value.business_tanus_symb_link
                };
                _this.service.add(business)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    if (!response.error) {
                        console.log(response);
                        user_1.bussines_id = response.data.id;
                        _this.user_service.addCamaleonAdmin(user_1)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (response2) {
                            if (!response2.error) {
                                console.log("User successfuly added!");
                                _this.router.navigateByUrl('/business');
                            }
                            else {
                                _this.errors = 'There was an error with the user; ' + response2.message;
                            }
                        });
                    }
                    else {
                        _this.errors = "There was an error adding the business; " + response.message;
                    }
                });
            }
        };
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    BusinessNewComponent.prototype.ngOnInit = function () { };
    return BusinessNewComponent;
}());
BusinessNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-business-new',
        template: __webpack_require__("../../../../../src/app/business/business.new.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__business_service__["a" /* BusinessService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__users_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users_user_service__["a" /* UserService */]) === "function" && _d || Object])
], BusinessNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=business.new.component.js.map

/***/ }),

/***/ "../../../../../src/app/business/business.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessService = (function () {
    // Constructor function
    // @param http_service : http petttions
    // @returns none
    function BusinessService(http_service, setup_service) {
        this.http_service = http_service;
        this.setup_service = setup_service;
    }
    // Get all businesses
    // @params none
    // @returns http get pettition
    BusinessService.prototype.getAll = function () {
        return this.http_service.get(this.setup_service.getAPIUri() + 'business/');
    };
    // Add new business
    // @param data : business data
    // @returns http response
    BusinessService.prototype.add = function (data) {
        return this.http_service.post(this.setup_service.getAPIUri() + 'business/', data);
    };
    // Update business
    // @param data: business data
    // @returns http response
    BusinessService.prototype.update = function (data) {
        return this.http_service.put(this.setup_service.getAPIUri() + 'business/' + data.id, data);
    };
    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    BusinessService.prototype.detail = function (id) {
        return this.http_service.get(this.setup_service.getAPIUri() + 'business/' + id);
    };
    // Delete business by id
    // @param id : the location id
    // @returns Observable response
    BusinessService.prototype.delete = function (id) {
        return this.http_service.delete(this.setup_service.getAPIUri() + 'business/' + id);
    };
    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    BusinessService.prototype.subCancel = function (id) {
        return this.http_service.get(this.setup_service.getAPIUri() + 'subscription/cancel/' + id);
    };
    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    BusinessService.prototype.subPending = function (id) {
        return this.http_service.get(this.setup_service.getAPIUri() + 'subscription/pending/' + id);
    };
    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    BusinessService.prototype.subPay = function (id) {
        return this.http_service.get(this.setup_service.getAPIUri() + 'subscription/pay/' + id);
    };
    return BusinessService;
}());
BusinessService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */]) === "function" && _b || Object])
], BusinessService);

var _a, _b;
//# sourceMappingURL=business.service.js.map

/***/ }),

/***/ "../../../../../src/app/locations/location.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Location Status List</li>\n    </ul>\n</div>\n\n<section>\n    \n    <div class=\"container-fluid\" *ngIf=\"status\">\n        \n        <div class=\"card\">\n            <div class=\"card-body\">\n                <button class=\"btn btn-sm btn-danger\" style=\"float:right;\" (click)=\"hardUpdate()\" [hidden]=\"updating\">Hard Update</button>\n                <h5 [hidden]=\"!updating\">Updating...</h5>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Last Id</th>\n                            <th>Count</th>\n                            <th>Created</th>\n                            <th>Updated</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let s of status\">\n                            <th scope=\"row\">{{s.id}}</th>\n                            <td>{{s.table_name}}</td>\n                            <td>{{s.last_id}}</td>\n                            <td>{{s.count}}</td>\n                            <td>{{s.timestamp | date:'MM/dd/yyyy H:mm:ss'}}</td>\n                            <td>{{s.updated | date:'MM/dd/yyyy H:mm:ss'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/locations/location.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/locations/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationDetailComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @param activated_route : service for getting the route params
    // @param location_service : location service
    // @param user_service : user service
    // @returns none
    function LocationDetailComponent(auth_service, router, activated_route, location_service) {
        this.auth_service = auth_service;
        this.router = router;
        this.activated_route = activated_route;
        this.location_service = location_service;
        this.locations = [];
        this.errors = "";
        this.status = [];
        this.updating = false;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize page
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.location_id = id;
            _this.getStatus(_this.location_id);
        });
    };
    // Get status from service
    // @param id - location id
    // @returns none
    LocationDetailComponent.prototype.getStatus = function (id) {
        var _this = this;
        this.updating = true;
        this.location_service.getStatus(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                console.log(response);
                _this.status = response.data;
            }
            else {
                _this.errors = response.message;
            }
            _this.updating = false;
        });
    };
    LocationDetailComponent.prototype.hardUpdate = function () {
        var _this = this;
        this.updating = true;
        this.location_service.hardUpdate(this.location_id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.success_msj = "Hard Update successful";
                console.log(_this.success_msj);
                _this.getStatus(_this.location_id);
            }
            else {
                _this.errors = response.message;
            }
            _this.updating = false;
        });
    };
    return LocationDetailComponent;
}());
LocationDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-location-detail',
        template: __webpack_require__("../../../../../src/app/locations/location.detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _d || Object])
], LocationDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=location.detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/locations/location.new.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item\">\n            <a href=\"/business\">Business</a>    \n        </li>\n        <li class=\"breadcrumb-item active\">New Location</li>\n        \n    </ul>\n</div>\n\n<section>\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n                <div class=\"card-header d-flex align-items-center\">\n                    <h3 class=\"h4\">New Location</h3>\n                </div>\n                <div class=\"card-body\">\n                    <form #locationForm=\"ngForm\" (ngSubmit)=\"add( locationForm )\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Location Name</label>\n                            <input  type=\"text\"\n                                    class=\"form-control\"\n                                    name=\"name\"\n                                    placeholder=\"Name\"\n                                    required autofocus ngModel>\n                        </div>\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-block btn-default\">Submit</button> \n                    </form>\n                </div>   \n            </div>    \n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/locations/location.new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/locations/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationNewComponent = (function () {
    // Constructor
    // @param service : location service
    // @param router : router service
    // @param activated route : activated route
    // @returns none
    function LocationNewComponent(service, router, activated_route) {
        this.service = service;
        this.router = router;
        this.activated_route = activated_route;
    }
    // When init function
    // Init location
    // get id from route
    LocationNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location = {
            location_name: "",
            bussines_id: 0
        };
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.location.bussines_id = id;
        });
    };
    // Adds the location to the service
    // @params location form : ng form
    // @returns none
    LocationNewComponent.prototype.add = function (locationForm) {
        var _this = this;
        if (locationForm.valid) {
            this.location.location_name = locationForm.value.name;
            this.service.add(this.location)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (!response.error) {
                    _this.router.navigate(['/business/detail', _this.location.bussines_id]);
                }
                else {
                    console.log("There was an error adding the location ", response.message);
                }
            });
        }
    };
    return LocationNewComponent;
}());
LocationNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-business-location-new',
        template: __webpack_require__("../../../../../src/app/locations/location.new.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LocationNewComponent);

var _a, _b, _c;
//# sourceMappingURL=location.new.component.js.map

/***/ }),

/***/ "../../../../../src/app/locations/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationService = (function () {
    // Constructor function
    // @param http_service : http petttions
    // @returns none
    function LocationService(http_service, setup_service) {
        this.http_service = http_service;
        this.setup_service = setup_service;
    }
    // Get all locationes
    // @params none
    // @returns http get pettition
    LocationService.prototype.getAll = function () {
        return this.http_service.get(this.setup_service.getAPIUri() + 'location');
    };
    // Add new location
    // @param data : location data
    // @returns http response
    LocationService.prototype.add = function (data) {
        return this.http_service.post(this.setup_service.getAPIUri() + 'location/', data);
    };
    // Update location
    // @param data: location data
    // @returns http response
    LocationService.prototype.update = function (data) {
        return this.http_service.put("/api/location/" + data.id, data);
    };
    // Retrieve the location by id
    // @param id : the location id
    // @returns Observable response
    LocationService.prototype.detail = function (id) {
        return this.http_service.get("/api/location/" + id);
    };
    // Delete location by id
    // @param id : the location id
    // @returns Observable response
    LocationService.prototype.delete = function (id) {
        return this.http_service.delete("/api/location/" + id);
    };
    // Get all locations by business id
    // @params id business_id
    // @returns Observable response
    LocationService.prototype.getLocationsByBusinessId = function (id) {
        return this.http_service.get("/api/location/bybusiness?business_id=" + id);
    };
    // Get Status
    // Get all the location table status
    // @param id - location id
    // @returns observable response
    LocationService.prototype.getStatus = function (id) {
        return this.http_service.get("/api/location/status/" + id);
    };
    // Hard update
    // Set a hard update on all the tables
    // @param id : Number - location id
    // @return observable response
    LocationService.prototype.hardUpdate = function (id) {
        return this.http_service.get("/api/location/hardupdate/" + id);
    };
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */]) === "function" && _b || Object])
], LocationService);

var _a, _b;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/locations/locations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locations/locations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  locations works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/locations/locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationsComponent = (function () {
    function LocationsComponent() {
    }
    LocationsComponent.prototype.ngOnInit = function () {
    };
    return LocationsComponent;
}());
LocationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locations',
        template: __webpack_require__("../../../../../src/app/locations/locations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locations/locations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocationsComponent);

//# sourceMappingURL=locations.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <p> Powered By Camaleon Systems &copy; 2017</p>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n                <p>Design by\n                    <a href=\"https://bootstrapious.com/admin-templates\" class=\"external\">Bootstrapious</a>\n                </p>\n                <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/menu/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'camaleon-footer',
        template: __webpack_require__("../../../../../src/app/menu/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n    <!-- Search Box-->\n    <div class=\"search-box\">\n        <button class=\"dismiss\">\n            <i class=\"icon-close\"></i>\n        </button>\n        <form id=\"searchForm\" action=\"#\" role=\"search\">\n            <input type=\"search\" placeholder=\"What are you looking for...\" class=\"form-control\">\n        </form>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"navbar-holder d-flex align-items-center justify-content-between\">\n            <!-- Navbar Header-->\n            <div class=\"navbar-header\">\n                <!-- Navbar Brand -->\n                <a href=\"index.html\" class=\"navbar-brand\">\n                    <div class=\"brand-text brand-big\">\n                        <span>Camaleon Systems</span>\n                        <strong>Reports Control Center</strong>\n                    </div>\n                    <div class=\"brand-text brand-small\">\n                        <strong>CSRCR</strong>\n                    </div>\n                </a>\n                <!-- Toggle Button-->\n                <a id=\"toggle-btn\" href=\"#\" class=\"menu-btn active\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </a>\n            </div>\n            <!-- Navbar Menu -->\n            <ul class=\"nav-menu list-unstyled d-flex flex-md-row align-items-md-center\">\n                <!-- Search-->\n                <li class=\"nav-item d-flex align-items-center\">\n                    <a id=\"search\" href=\"#\">\n                        <i class=\"icon-search\"></i>\n                    </a>\n                </li>\n                <!-- Notifications-->\n                <li class=\"nav-item dropdown\">\n                    <a id=\"notifications\" rel=\"nofollow\" data-target=\"#\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                        class=\"nav-link\">\n                        <i class=\"fa fa-bell-o\"></i>\n                        <span class=\"badge bg-red\">12</span>\n                    </a>\n                    <ul aria-labelledby=\"notifications\" class=\"dropdown-menu\">\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\n                                <div class=\"notification\">\n                                    <div class=\"notification-content\">\n                                        <i class=\"fa fa-envelope bg-green\"></i>You have 6 new messages </div>\n                                    <div class=\"notification-time\">\n                                        <small>4 minutes ago</small>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\n                                <div class=\"notification\">\n                                    <div class=\"notification-content\">\n                                        <i class=\"fa fa-twitter bg-blue\"></i>You have 2 followers</div>\n                                    <div class=\"notification-time\">\n                                        <small>4 minutes ago</small>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\n                                <div class=\"notification\">\n                                    <div class=\"notification-content\">\n                                        <i class=\"fa fa-upload bg-orange\"></i>Server Rebooted</div>\n                                    <div class=\"notification-time\">\n                                        <small>4 minutes ago</small>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item\">\n                                <div class=\"notification\">\n                                    <div class=\"notification-content\">\n                                        <i class=\"fa fa-twitter bg-blue\"></i>You have 2 followers</div>\n                                    <div class=\"notification-time\">\n                                        <small>10 minutes ago</small>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item all-notifications text-center\">\n                                <strong>view all notifications </strong>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <!-- Messages                        -->\n                <li class=\"nav-item dropdown\">\n                    <a id=\"messages\" rel=\"nofollow\" data-target=\"#\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                        class=\"nav-link\">\n                        <i class=\"fa fa-envelope-o\"></i>\n                        <span class=\"badge bg-orange\">10</span>\n                    </a>\n                    <ul aria-labelledby=\"notifications\" class=\"dropdown-menu\">\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item d-flex\">\n                                <div class=\"msg-profile\">\n                                    <img src=\"img/avatar-1.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\">\n                                </div>\n                                <div class=\"msg-body\">\n                                    <h3 class=\"h5\">Jason Doe</h3>\n                                    <span>Sent You Message</span>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item d-flex\">\n                                <div class=\"msg-profile\">\n                                    <img src=\"img/avatar-2.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\">\n                                </div>\n                                <div class=\"msg-body\">\n                                    <h3 class=\"h5\">Frank Williams</h3>\n                                    <span>Sent You Message</span>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item d-flex\">\n                                <div class=\"msg-profile\">\n                                    <img src=\"img/avatar-3.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\">\n                                </div>\n                                <div class=\"msg-body\">\n                                    <h3 class=\"h5\">Ashley Wood</h3>\n                                    <span>Sent You Message</span>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a rel=\"nofollow\" href=\"#\" class=\"dropdown-item all-notifications text-center\">\n                                <strong>Read all messages </strong>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <!-- Logout    -->\n                <li class=\"nav-item\">\n                    <a (click)=\"logout()\" class=\"nav-link logout\">Logout\n                        <i class=\"fa fa-sign-out\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/menu/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function NavBarComponent(auth_service, router) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        // Log out funtion
        // Will logout and clean the cookie on the serve side of the app
        // @params none
        // @returns none
        this.logout = function () {
            _this.auth_service.logout()
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.router.navigateByUrl('/login');
                console.log("Log out succesful");
            });
        };
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'camaleon-navbar',
        template: __webpack_require__("../../../../../src/app/menu/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavBarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Side Navbar -->\n<nav class=\"side-navbar\">\n    <!-- Sidebar Navidation Menus-->\n    <ul class=\"list-unstyled\">\n        <li>\n            <a href=\"/\">\n                <i class=\"icon-home\"></i>Home </a>\n        </li>\n        <li>\n            <a href=\"/business\">\n                <i class=\"fa fa-building\"></i>Businesses </a>\n        </li>\n        <li>\n            <a href=\"/permission\">\n                <i class=\"fa fa-universal-access\"></i>Permissions </a>\n        </li>\n        <li>\n            <a href=\"/monitor\">\n                <i class=\"fa fa-bug\"></i>Monitor Settings </a>\n        </li>\n        <li>\n            <a href=\"forms.html\">\n                <i class=\"fa fa-cogs\"></i>Settings </a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/menu/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param route : routing service
    function SideBarComponent(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'camaleon-sidebar',
        template: __webpack_require__("../../../../../src/app/menu/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SideBarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/monitor/activitytype.list.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Activity Type List</li>\n    </ul>\n</div>\n<section>\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Value</th>\n                            <th>Created</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let activity_type of activity_types\">\n                            <th scope=\"row\">{{activity_type.id}}</th>\n                            <td>{{activity_type.name}}</td>\n                            <td>{{activity_type.description}}</td>\n                            <td>{{activity_type.value | number}}</td>\n                            <td>{{activity_type.timestamp | date:'MM/dd/yyyy H:mm:ss'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/monitor/activitytype.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityTypeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monitor_service__ = __webpack_require__("../../../../../src/app/monitor/monitor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityTypeListComponent = (function () {
    // Constructor function
    // @param service - Monitor service
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function ActivityTypeListComponent(auth_service, router, service) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.activity_types = [];
        // Get all the activity types
        // retrieves all the activity types from the server
        // @params none
        // @returns none
        this.getActivityTypes = function () {
            _this.service.getAllActivityType().map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.activity_types = response.data;
            });
        };
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ActivityTypeListComponent.prototype.ngOnInit = function () {
        this.getActivityTypes();
    };
    return ActivityTypeListComponent;
}());
ActivityTypeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activitytype-list',
        template: __webpack_require__("../../../../../src/app/monitor/activitytype.list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__monitor_service__["a" /* MonitorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__monitor_service__["a" /* MonitorService */]) === "function" && _c || Object])
], ActivityTypeListComponent);

var _a, _b, _c;
//# sourceMappingURL=activitytype.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/monitor/activitytype.new.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Activity Type New</li>\n    </ul>\n</div>\n\n<section *ngIf=\"errors || messages\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"p-3 mb-2 bg-danger text-white\" *ngIf=\"errors\">\n                        {{errors}}\n                    </div>\n                    <div class=\"p-3 mb-2 bg-warning text-white\" *ngIf=\"messages\">\n                        {{messages}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"container-fluid\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form #aForm=\"ngForm\" (ngSubmit)=\"add(aForm)\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\" required autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"description\"></label>\n                                    <input type=\"text\" class=\"form-control\" name=\"description\" placeholder=\"Description\" required autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"value\"></label>\n                                    <input type=\"number\" class=\"form-control\" name=\"value\" placeholder=\"Value\" autofocus ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <button type=\"submit\" class=\"btn bt-block btn-default\">Submit</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/monitor/activitytype.new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityTypeNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monitor_service__ = __webpack_require__("../../../../../src/app/monitor/monitor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityTypeNewComponent = (function () {
    // Constructor
    // @param service : location service
    // @param router : router service
    // @param activated route : activated route
    // @returns none
    function ActivityTypeNewComponent(service, router, activated_route) {
        this.service = service;
        this.router = router;
        this.activated_route = activated_route;
        this.errors = "";
        this.messages = "";
    }
    // Adds the activity type to the service
    // @params  activity type form : ng form
    // @returns none
    ActivityTypeNewComponent.prototype.add = function (aForm) {
        var _this = this;
        console.log(aForm);
        if (aForm.valid) {
            this.service.createActivityType(aForm.value)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (!response.error) {
                    _this.router.navigate(['/monitor/']);
                }
                else {
                    console.log("There was an error adding the Activity Type ", response.message);
                }
            });
        }
    };
    return ActivityTypeNewComponent;
}());
ActivityTypeNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activitytype-new',
        template: __webpack_require__("../../../../../src/app/monitor/activitytype.new.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__monitor_service__["a" /* MonitorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__monitor_service__["a" /* MonitorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ActivityTypeNewComponent);

var _a, _b, _c;
//# sourceMappingURL=activitytype.new.component.js.map

/***/ }),

/***/ "../../../../../src/app/monitor/monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"page-header\">\n    <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Monitor</h2>\n    </div>\n</header>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <br>\n            <div class=\"statistic d-flex align-items-center bg-white has-shadow\" [routerLink]=\"['/monitor/']\">\n                <div class=\"icon bg-red\">\n                    <i class=\"fa fa-list\"></i>\n                </div>\n                <div class=\"text\">\n                    <small>Activity Types</small>\n                </div>\n            </div>\n            <div class=\"statistic d-flex align-items-center bg-white has-shadow\" [routerLink]=\"['/monitor/newactivitytype']\">\n                <div class=\"icon bg-green\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </div>\n                <div class=\"text\">\n                    <small>New Activity Type</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-10\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/monitor/monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monitor_service__ = __webpack_require__("../../../../../src/app/monitor/monitor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MonitorComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function MonitorComponent(auth_service, router, service) {
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    MonitorComponent.prototype.ngOnInit = function () { };
    return MonitorComponent;
}());
MonitorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-monitor',
        template: __webpack_require__("../../../../../src/app/monitor/monitor.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__monitor_service__["a" /* MonitorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__monitor_service__["a" /* MonitorService */]) === "function" && _c || Object])
], MonitorComponent);

var _a, _b, _c;
//# sourceMappingURL=monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/monitor/monitor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonitorService = (function () {
    // Constructor function
    // @param http_service : http pettitions
    // @returns none
    function MonitorService(http_service, setup_service) {
        this.http_service = http_service;
        this.setup_service = setup_service;
    }
    // getActivityByBusiness 
    // @param id integer - business id
    // @param p integer - pagination number
    // @returns http_get_pettition
    MonitorService.prototype.getActivityByBusiness = function (id, p) {
        return this.http_service.get(this.setup_service.getAPIUri() + 'monitor/business/activity/' + id + '?p=' + p);
    };
    // getErrorReportsByBusiness
    // @param id integer - business id
    // @param p integer - pagination number
    // @reutrns http_get_pettition
    MonitorService.prototype.getErrorReportsByBusiness = function (id, p) {
        return this.http_service.get(this.setup_service.getAPIUri() + 'monitor/business/errorreport/' + id + '?p=' + p);
    };
    // createActivityType creates new activity type
    // @params data - activity type body
    // @return observable response
    MonitorService.prototype.createActivityType = function (data) {
        return this.http_service.post(this.setup_service.getAPIUri() + 'monitor/activitytype/', data);
    };
    // getAllActivityType returns all the activity types
    // @params none
    // @returns Observable response
    MonitorService.prototype.getAllActivityType = function () {
        return this.http_service.get(this.setup_service.getAPIUri() + 'monitor/activitytype/');
    };
    // getReports return all the activity reports and error reports
    // @param business_id : Integer - the business id
    // @param date1 : string - the start date in string
    // @param date2 : string - the end date in string
    // @returns Observable Response
    MonitorService.prototype.getReports = function (business_id, date1, date2) {
        return this.http_service.get("/api/monitor/reports/" + business_id + "?d1=" + date1 + "&d2=" + date2);
    };
    return MonitorService;
}());
MonitorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */]) === "function" && _b || Object])
], MonitorService);

var _a, _b;
//# sourceMappingURL=monitor.service.js.map

/***/ }),

/***/ "../../../../../src/app/permission/permission.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/permission/permission.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"page-header\">\n    <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Permissions</h2>\n    </div>\n</header>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <br>\n            <div class=\"statistic d-flex align-items-center bg-white has-shadow\" [routerLink]=\"['/permission/']\">\n                <div class=\"icon bg-red\">\n                    <i class=\"fa fa-list\"></i>\n                </div>\n                <div class=\"text\">\n                    <small>List</small>\n                </div>\n            </div>\n            <div class=\"statistic d-flex align-items-center bg-white has-shadow\" [routerLink]=\"['/permission/new']\">\n                <div class=\"icon bg-green\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </div>\n                <div class=\"text\">\n                    <small>New</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-10\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/permission/permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function PermissionComponent(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    PermissionComponent.prototype.ngOnInit = function () { };
    return PermissionComponent;
}());
PermissionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-permission',
        template: __webpack_require__("../../../../../src/app/permission/permission.component.html"),
        styles: [__webpack_require__("../../../../../src/app/permission/permission.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PermissionComponent);

var _a, _b;
//# sourceMappingURL=permission.component.js.map

/***/ }),

/***/ "../../../../../src/app/permission/permission.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"permission\">\n    <div class=\"col-md-12\">\n        <h2>Name : {{permission.name}}</h2>\n        <small>Description : {{permission.description}}</small>\n        <p>Reports Web Url : {{permission.web_url}}</p>\n        <p>Created : {{permission.timestamp | date}}</p>\n        <hr>\n    </div>\n</div>\n<hr>\n<div class=\"row\" *ngIf=\"permission\">\n    <div class=\"col-md-12\">\n        <h2>Delete Permission</h2>\n        <small>Warning you may lose valuable information with this action.</small>\n        <button class=\"btn btn-block btn-danger\" (click)=\"delete()\">Delete {{permission.name}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/permission/permission.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_service__ = __webpack_require__("../../../../../src/app/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionDetailComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function PermissionDetailComponent(auth_service, router, service, activated_route) {
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.activated_route = activated_route;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    PermissionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getPermission(id);
        });
    };
    // Get permission by id
    // @params id the permission id
    // @returns none
    PermissionDetailComponent.prototype.getPermission = function (id) {
        var _this = this;
        this.service.detail(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.permission = response.data;
            }
            else {
                console.log("There was an error");
            }
        });
    };
    // Delete function
    // this will delete a permission on the service
    // @params none
    // @returns none
    PermissionDetailComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.permission.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                _this.router.navigateByUrl('/permission');
            }
            else {
                console.log("There was an error ", response.message, ".");
            }
        });
    };
    return PermissionDetailComponent;
}());
PermissionDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-permission-detail',
        template: __webpack_require__("../../../../../src/app/permission/permission.detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__permission_service__["a" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__permission_service__["a" /* PermissionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PermissionDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=permission.detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/permission/permission.list.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"breadcrumb-holder container-fluid\">\n    <ul class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n            <a href=\"/\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Permission List</li>\n    </ul>\n</div>\n<section>\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <table class=\"table table-hover table-striped\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Web Reports URL</th>\n                            <th>Created</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let permission of permissions\" [routerLink]=\"['/permission/detail', permission.id]\">\n                            <th scope=\"row\">{{permission.id}}</th>\n                            <td>{{permission.name}}</td>\n                            <td>{{permission.description}}</td>\n                            <td>{{permission.web_url}}</td>\n                            <td>{{permission.timestamp | date:'MM/dd/yyyy H:mm:ss'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/permission/permission.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_service__ = __webpack_require__("../../../../../src/app/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionListComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function PermissionListComponent(auth_service, router, service) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.permissions = [];
        // Get all the permissions
        // retrieves all the permissions from the server
        // @params none
        // @returns none
        this.getAllPermissions = function () {
            _this.service.getAll().map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.permissions = response.data;
            });
        };
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    PermissionListComponent.prototype.ngOnInit = function () {
        this.getAllPermissions();
    };
    return PermissionListComponent;
}());
PermissionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-permission-list',
        template: __webpack_require__("../../../../../src/app/permission/permission.list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__permission_service__["a" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__permission_service__["a" /* PermissionService */]) === "function" && _c || Object])
], PermissionListComponent);

var _a, _b, _c;
//# sourceMappingURL=permission.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/permission/permission.new.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>New Permission</h2>\n\n<form #permissionForm=\"ngForm\" (ngSubmit)=\"add(permissionForm)\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"name\"></label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"name\"\n                        placeholder=\"Name\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"description\"></label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"description\"\n                        placeholder=\"Description\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"web_url\"></label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"web_url\"\n                        placeholder=\"Web Url\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"value\"></label>\n                <input  type=\"number\"\n                        class=\"form-control\"\n                        name=\"value\"\n                        placeholder=\"Value\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <button type=\"submit\" class=\"btn bt-block btn-default\">Submit</button>                \n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/permission/permission.new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_service__ = __webpack_require__("../../../../../src/app/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PermissionNewComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function PermissionNewComponent(auth_service, router, service, user_service) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.user_service = user_service;
        this.errors = "";
        this.messages = "";
        // add 
        // function for adding a new business
        // Adds the business then the user
        // @params businessForm : Form object
        // @returns none
        this.add = function (permissionForm) {
            if (permissionForm.valid) {
                // Add new business 
                // Add new user with the bussines_id 
                var permission = {
                    name: permissionForm.value.name,
                    description: permissionForm.value.description,
                    value: permissionForm.value.value,
                    web_url: permissionForm.value.web_url
                };
                _this.service.add(permission)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    if (!response.error) {
                        _this.router.navigateByUrl('/permission');
                    }
                    else {
                        console.log("There was an error adding the business; " + response.message);
                    }
                });
            }
        };
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    PermissionNewComponent.prototype.ngOnInit = function () { };
    return PermissionNewComponent;
}());
PermissionNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-permission-new',
        template: __webpack_require__("../../../../../src/app/permission/permission.new.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__permission_service__["a" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__permission_service__["a" /* PermissionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__users_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users_user_service__["a" /* UserService */]) === "function" && _d || Object])
], PermissionNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=permission.new.component.js.map

/***/ }),

/***/ "../../../../../src/app/permission/permission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionService = (function () {
    // Constructor function
    // @param http_service : http petttions
    // @returns none
    function PermissionService(http_service, setup_service) {
        this.http_service = http_service;
        this.setup_service = setup_service;
    }
    // Get all permissiones
    // @params none
    // @returns http get pettition
    PermissionService.prototype.getAll = function () {
        return this.http_service.get(this.setup_service.getAPIUri() + 'permission/');
    };
    // Add new permission
    // @param data : permission data
    // @returns http response
    PermissionService.prototype.add = function (data) {
        return this.http_service.post(this.setup_service.getAPIUri() + 'permission/', data);
    };
    // Update permission
    // @param data: permission data
    // @returns http response
    PermissionService.prototype.update = function (data) {
        return this.http_service.put(this.setup_service.getAPIUri() + 'permission/' + data.id, data);
    };
    // Retrieve the permission by id
    // @param id : the permission id
    // @returns Observable response
    PermissionService.prototype.detail = function (id) {
        return this.http_service.get(this.setup_service.getAPIUri() + 'permission/' + id);
    };
    // Delete permission by id
    // @param id : the location id
    // @returns Observable response
    PermissionService.prototype.delete = function (id) {
        return this.http_service.delete(this.setup_service.getAPIUri() + 'permission/' + id);
    };
    return PermissionService;
}());
PermissionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_setup_service__["a" /* SetupService */]) === "function" && _b || Object])
], PermissionService);

var _a, _b;
//# sourceMappingURL=permission.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods



var UserService = (function () {
    // Constructor function
    // @param http_service : Http service
    // @returns none
    function UserService(http_service, setup_service) {
        var _this = this;
        this.http_service = http_service;
        this.setup_service = setup_service;
        // Add new camaleon admin user
        // @params data
        // @returns json user data
        this.addCamaleonAdmin = function (data) {
            return _this.http_service.post(_this.setup_service.getAPIUri() + 'user/camaleonadmin/', data);
        };
    }
    // Get all the users by business id
    // @params id : integer
    // @returns Observable response
    UserService.prototype.getUsersByBusinessId = function (id) {
        return this.http_service.get(this.setup_service.getAPIUri() + "user/bybusiness/" + id);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_setup_service__["a" /* SetupService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map