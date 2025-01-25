"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["main"],{

/***/ 84759:
/*!****************************************************************!*\
  !*** ./src/app/admin/services/Admin/searchStudents.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchStudentsService": function() { return /* binding */ SearchStudentsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var SearchStudentsService = /*#__PURE__*/function () {
  function SearchStudentsService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchStudentsService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchStudentsService, [{
    key: "getStudentsByEduCompId",
    value: function getStudentsByEduCompId(EduCompId, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getStudents/").concat(EduCompId), data);
    }
  }, {
    key: "getStudentBalance",
    value: function getStudentBalance(userId, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/returnBalanceCheck/").concat(userId, "/").concat(EduCompId));
    }
  }, {
    key: "getStudentPayments",
    value: function getStudentPayments(EduCompId, page, userId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/returnUserPayments/").concat(EduCompId, "/").concat(page, "/").concat(userId));
    }
  }, {
    key: "getStudentPaymentsHistory",
    value: function getStudentPaymentsHistory(EduCompId, page, userId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/returnUserPaymentsHistory/").concat(EduCompId, "/").concat(page, "/").concat(userId));
    }
  }, {
    key: "getStudentStatus",
    value: function getStudentStatus(userId, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/educationalCompStatus/").concat(userId, "/").concat(EduCompId));
    }
  }, {
    key: "deleteStudent",
    value: function deleteStudent(EduCompId, id) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/RemoveEducationalComponent_User/").concat(EduCompId, "/").concat(id), null);
    }
  }, {
    key: "getStudentGroupsAndStatuts",
    value: function getStudentGroupsAndStatuts(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/JoinStudentsEducationalComponent/").concat(EduCompId));
    }
  }, {
    key: "getStudentStatusList",
    value: function getStudentStatusList(page, EduCompUserId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/ReservationStatusPaging/").concat(page, "/").concat(EduCompUserId));
    }
  }, {
    key: "updateStudentStatus",
    value: function updateStudentStatus(EduCompId, body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/EduCompStatus/").concat(EduCompId), body);
    }
  }, {
    key: "getUserDataRefundLecture",
    value: function getUserDataRefundLecture(userId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/RefundLecture/").concat(userId));
    }
  }, {
    key: "refundLecture",
    value: function refundLecture(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/RefundLecture", body);
    }
  }, {
    key: "getStudentCode",
    value: function getStudentCode(EduCompId, userId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/ChangeStudentCode/").concat(EduCompId, "/").concat(userId));
    }
  }, {
    key: "updateStudentCode",
    value: function updateStudentCode(EduCompId, body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/ChangeStudentCode/").concat(EduCompId), body);
    }
  }]);

  return SearchStudentsService;
}();

SearchStudentsService.ɵfac = function SearchStudentsService_Factory(t) {
  return new (t || SearchStudentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

SearchStudentsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SearchStudentsService,
  factory: SearchStudentsService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full-layout.component */ 97873);
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ 90578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var appRoutes = [{
  path: "",
  redirectTo: "home",
  pathMatch: "full"
}, {
  path: "",
  component: _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_2__.FullLayoutComponent,
  data: {
    title: "full Views"
  },
  children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_3__.Full_ROUTES //  canActivate: [AuthGuard],

}, {
  path: "home",
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_home_pages_custome-educational-year-subjects_custome-educational-year-subject-9764cb"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(function (m) {
      return m.HomeModule;
    });
  }
}, {
  path: "auth",
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/registration.module */ 5051)).then(function (m) {
      return m.RegistrationModule;
    });
  }
}, {
  path: "**",
  redirectTo: "auth/error"
}];
var AppRoutingModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(appRoutes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules,
    relativeLinkResolution: "legacy"
  })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var AppComponent = /*#__PURE__*/function () {
  function AppComponent(router) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.router = router;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.subscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
      })).subscribe(function () {
        return window.scrollTo(0, 0);
      });
      var currentLang = localStorage.getItem("currentLang");

      if (currentLang == null || currentLang == undefined) {
        localStorage.setItem("currentLang", "ar");
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; },
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 34370);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full-layout.component */ 97873);
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/window.service */ 60294);
/* harmony import */ var _shared_services_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth/token-interceptor.service */ 55082);
/* harmony import */ var _shared_services_auth_error_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth/error-interceptor.service */ 45802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);





















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
var AppModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _shared_services_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__.TokenInterceptorService,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _shared_services_auth_error_interceptor_service__WEBPACK_IMPORTED_MODULE_8__.ErrorInterceptor,
    multi: true
  }, {
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, {
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE,
    useValue: 'en-GB'
  }, _shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__.WINDOW_PROVIDERS],
  imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
    defaultLanguage: "ar",
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
    }
  }), ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule.forRoot({
    progressBar: false,
    autoDismiss: true,
    timeOut: 7000,
    positionClass: "toast-top-right",
    enableHtml: true,
    preventDuplicates: true
  }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_5__.FullLayoutComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule]
  });
})();

/***/ }),

/***/ 97873:
/*!**************************************************!*\
  !*** ./src/app/layouts/full-layout.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": function() { return /* binding */ FullLayoutComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/window.service */ 60294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ 85682);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/customizer.service */ 60360);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-device-detector */ 81431);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/navbar/navbar.component */ 54696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/footer/footer.component */ 45227);
/* harmony import */ var _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/notification-sidebar/notification-sidebar.component */ 76430);
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/directives/sidebar.directive */ 57744);
/* harmony import */ var _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/vertical-menu/vertical-menu.component */ 82329);



















var _c0 = function _c0(a0) {
  return {
    "background-image": a0
  };
};

function FullLayoutComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 12);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r2.bgImage + ")"));
  }
}

var _c1 = function _c1(a0, a1, a2) {
  return {
    "main-menu": a0,
    "menu-fixed": a1,
    "menu-native-scroll": a2
  };
};

function FullLayoutComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_2_Template_div_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r3.sidebarMouseenter($event);
    })("mouseleave", function FullLayoutComponent_div_2_Template_div_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r5.sidebarMouseleave($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, FullLayoutComponent_div_2_div_2_Template, 1, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](4, _c1, ctx_r0.menuPosition === "Side" || ctx_r0.displayOverlayMenu, ctx_r0.menuPosition === "Side" || ctx_r0.displayOverlayMenu, !ctx_r0.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("data-background-color", (ctx_r0.config == null ? null : ctx_r0.config.layout.variant) === "Transparent" ? "black" : ctx_r0.bgColor)("data-image", ctx_r0.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.config == null ? null : ctx_r0.config.layout.sidebar.backgroundImage);
  }
}

function FullLayoutComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FullLayoutComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r6.scrollToTop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

var _c2 = function _c2(a0) {
  return {
    "show-overlay": a0
  };
};

var _c3 = function _c3(a0, a1) {
  return {
    "d-none": a0,
    "d-block": a1
  };
};

var FullLayoutComponent = /*#__PURE__*/function () {
  function FullLayoutComponent(configService, layoutService, router, customizerService, document, window, renderer, cdr, deviceService) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullLayoutComponent);

    this.configService = configService;
    this.layoutService = layoutService;
    this.router = router;
    this.customizerService = customizerService;
    this.document = document;
    this.window = window;
    this.renderer = renderer;
    this.cdr = cdr;
    this.deviceService = deviceService;
    this.hideSidebar = true;
    this.overlayContent = false;
    this.isSmallScreen = false; // menuPosition = 'Side';

    this.menuPosition = "Top";
    this.displayOverlayMenu = false; // Vertical Side menu for screenSize < 1200

    this.config = {};
    this.isMenuCollapsedOnHover = false;
    this.isNavbarSeachTextEmpty = true;
    this.isScrollTopVisible = false;
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth; // On toggle sidebar menu

    this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
      _this.hideSidebar = !isShow;

      if (_this.hideSidebar) {
        _this.overlayContent = false;
      } else {
        _this.overlayContent = true;
      }

      _this.toggleSidebar();
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FullLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this2.config = templateConf;
        } //load layout


        _this2.loadLayout();

        _this2.cdr.markForCheck();
      }); //hide overlay class on router change

      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationEnd;
      })).subscribe(function (routeChange) {
        if (_this2.config.layout.menuPosition === "Side" || _this2.displayOverlayMenu) {
          // Vertical Menu
          if (_this2.innerWidth < 1200) {
            _this2.layoutService.toggleSidebarSmallScreen(false);

            _this2.overlayContent = false;

            _this2.renderer.removeClass(_this2.document.body, "overflow-hidden");
          }
        }
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.setMenuLayout();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      //Unsubcribe subscriptions
      if (this.configSub) {
        this.configSub.unsubscribe();
      }

      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    } //adjust layout

  }, {
    key: "setMenuLayout",
    value: function setMenuLayout() {
      this.overlayContent = false;
      this.renderer.removeClass(this.document.body, "blank-page");

      if (this.config.layout.menuPosition === "Top") {
        // Horizontal Menu
        if (this.innerWidth < 1200) {
          // Screen size < 1200
          this.displayOverlayMenu = true;
          this.hideSidebar = true;
          this.renderer.removeClass(this.document.body, "horizontal-menu");
          this.renderer.removeClass(this.document.body, "menu-open");
          this.renderer.addClass(this.document.body, "horizontal-layout");
          this.renderer.addClass(this.document.body, "horizontal-menu-padding");
          this.renderer.addClass(this.document.body, "vertical-layout");
          this.renderer.addClass(this.document.body, "vertical-overlay-menu");
          this.renderer.addClass(this.document.body, "fixed-navbar");
          this.renderer.addClass(this.document.body, "menu-hide");
        } else {
          // Screen size > 1200
          this.displayOverlayMenu = false;
          this.hideSidebar = false;
          this.renderer.setAttribute(this.document.body, "data-menu", "horizontal-menu");
          this.renderer.removeClass(this.document.body, "vertical-layout");
          this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
          this.renderer.removeClass(this.document.body, "fixed-navbar");
          this.renderer.removeClass(this.document.body, "menu-hide");
          this.renderer.removeClass(this.document.body, "vertical-menu");
          this.renderer.addClass(this.document.body, "horizontal-menu");
          this.renderer.addClass(this.document.body, "horizontal-layout");
          this.renderer.addClass(this.document.body, "horizontal-menu-padding");
        }
      } else if (this.config.layout.menuPosition === "Side") {
        // Vertical Menu
        if (this.innerWidth < 1200) {
          // If Screen size < 1200
          this.displayOverlayMenu = true;
          this.renderer.removeClass(this.document.body, "horizontal-layout");
          this.renderer.removeClass(this.document.body, "horizontal-menu");
          this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
          this.renderer.removeClass(this.document.body, "menu-expanded");
          this.renderer.removeClass(this.document.body, "vertical-menu");
          this.renderer.removeClass(this.document.body, "menu-open");
          this.renderer.removeClass(this.document.body, "nav-collapsed");
          this.renderer.addClass(this.document.body, "vertical-layout");
          this.renderer.addClass(this.document.body, "menu-hide");
        } else {
          // If Screen size > 1200
          this.displayOverlayMenu = false;
          this.renderer.removeClass(this.document.body, "horizontal-layout");
          this.renderer.removeClass(this.document.body, "horizontal-menu");
          this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
          this.renderer.setAttribute(this.document.body, "data-menu", "vertical-menu");
          this.renderer.addClass(this.document.body, "vertical-layout");

          if (!this.config.layout.sidebar.collapsed) {
            this.renderer.addClass(this.document.body, "menu-expanded");
            this.renderer.addClass(this.document.body, "menu-open");
          }

          this.renderer.addClass(this.document.body, "vertical-menu");
          this.renderer.removeClass(this.document.body, "menu-hide");
          this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
        }
      }
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      //menu position "SIDE" or "TOP"
      if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
        this.menuPosition = this.config.layout.menuPosition;
      } //Hide/show sidebar menu background image


      if (!this.config.layout.sidebar.backgroundImage) {
        this.bgImage = "";
      } else {
        this.bgImage = this.config.layout.sidebar.backgroundImageURL;
      } //Set sidebar menu background color


      if (!this.config.layout.sidebar.backgroundColor) {
        this.bgColor = this.customizerService.light_dark_colors[7].code;
      } else {
        this.bgColor = this.config.layout.sidebar.backgroundColor;
      } //toggle side menu


      if (this.config.layout.menuPosition === "Side") {
        if (this.config.layout.sidebar.collapsed) {
          this.isMenuCollapsedOnHover = true;
        } else {
          this.isMenuCollapsedOnHover = true;
        }

        this.toggleSidebar();
      }

      this.removeTransparentBGClasses(); // Layout variants

      if (this.config.layout.variant === "Light") {
        this.renderer.removeClass(this.document.body, "layout-dark");
        this.renderer.removeClass(this.document.body, "layout-transparent");
      } else if (this.config.layout.variant === "Dark") {
        this.renderer.removeClass(this.document.body, "layout-transparent");
        this.renderer.addClass(this.document.body, "layout-dark");
      } else if (this.config.layout.variant === "Transparent") {
        this.renderer.addClass(this.document.body, "layout-dark");
        this.renderer.addClass(this.document.body, "layout-transparent");
        this.renderer.addClass(this.document.body, this.bgColor);
        this.bgImage = "";
      }

      this.setMenuLayout(); // For Sidebar width

      if (this.config.layout.sidebar.size === "sidebar-sm") {
        this.renderer.removeClass(this.document.body, "sidebar-lg");
        this.renderer.addClass(this.document.body, "sidebar-sm");
      } else if (this.config.layout.sidebar.size === "sidebar-lg") {
        this.renderer.removeClass(this.document.body, "sidebar-sm");
        this.renderer.addClass(this.document.body, "sidebar-lg");
      } else {
        this.renderer.removeClass(this.document.body, "sidebar-sm");
        this.renderer.removeClass(this.document.body, "sidebar-lg");
      }

      if (this.config.layout.menuPosition === "Side") {
        // vertical/Side menu expanded/collapse
        if (this.config.layout.sidebar.collapsed && !this.isSmallScreen) {
          // collapse side menu
          this.renderer.removeClass(this.document.body, "menu-expanded");
          this.renderer.addClass(this.document.body, "nav-collapsed");
        } else {
          // expand side menu
          this.renderer.removeClass(this.document.body, "nav-collapsed");
          this.renderer.addClass(this.document.body, "menu-expanded");
        }
      } //Navbar types


      if (this.config.layout.navbar.type === "Static") {
        this.renderer.removeClass(this.document.body, "navbar-sticky");
        this.renderer.addClass(this.document.body, "navbar-static");
      } else if (this.config.layout.navbar.type === "Fixed") {
        this.renderer.removeClass(this.document.body, "navbar-static");
        this.renderer.addClass(this.document.body, "navbar-sticky");
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      if (this.hideSidebar) {
        // on sidebar collapse
        this.renderer.removeClass(this.document.body, "menu-expanded");
        this.renderer.removeClass(this.document.body, "vertical-menu");
        this.renderer.removeClass(this.document.body, "menu-open");
        this.renderer.addClass(this.document.body, "vertical-layout");
        this.renderer.addClass(this.document.body, "menu-hide");

        if (this.config.layout.menuPosition === "Top") {
          this.renderer.addClass(this.document.body, "vertical-overlay-menu");
        }
      } else {
        // on sidebar expand
        this.renderer.addClass(this.document.body, "vertical-layout");
        this.renderer.addClass(this.document.body, "menu-expanded");
        this.renderer.addClass(this.document.body, "vertical-menu");

        if (this.config.layout.sidebar.collapsed) {
          this.renderer.removeClass(this.document.body, "menu-open");
        } else {
          this.renderer.addClass(this.document.body, "menu-open");
        }

        this.renderer.removeClass(this.document.body, "menu-hide");
      }

      this.isTouchDevice();
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      var isMobile = this.deviceService.isMobile();
      var isTablet = this.deviceService.isTablet();

      if (isMobile || isTablet) {
        if (!this.hideSidebar) {
          this.renderer.addClass(this.document.body, "overflow-hidden");
        } else {
          this.renderer.removeClass(this.document.body, "overflow-hidden");
        }
      }
    }
  }, {
    key: "hideCompactMenuOnSmallScreen",
    value: function hideCompactMenuOnSmallScreen() {
      if (this.innerWidth < 1200) {
        var conf = this.config;
        conf.layout.sidebar.collapsed = false;
        this.configService.applyTemplateConfigChange({
          layout: conf.layout
        });
      }
    } //Remove transparent layout classes

  }, {
    key: "removeTransparentBGClasses",
    value: function removeTransparentBGClasses() {
      var _this3 = this;

      this.customizerService.transparent_colors.forEach(function (_) {
        _this3.renderer.removeClass(_this3.document.body, _.class);
      });
      this.customizerService.transparent_colors_with_shade.forEach(function (_) {
        _this3.renderer.removeClass(_this3.document.body, _.class);
      });
    }
  }, {
    key: "sidebarMouseenter",
    value: function sidebarMouseenter(e) {
      if (this.config.layout.sidebar.collapsed) {
        this.isMenuCollapsedOnHover = false;
        this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
      }
    }
  }, {
    key: "sidebarMouseleave",
    value: function sidebarMouseleave(e) {
      if (this.config.layout.sidebar.collapsed) {
        this.isMenuCollapsedOnHover = true;
        this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
      }
    } //scroll to top on click

  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }, {
    key: "onOutsideClick",
    value: function onOutsideClick(e) {
      if (this.innerWidth < 1200) {
        if (!e.target.classList.contains("toggleSidebarNavbarButton")) {
          this.layoutService.toggleSidebarSmallScreen(false);
        }
      }
    }
  }, {
    key: "onWrapperClick",
    value: function onWrapperClick() {
      this.isNavbarSeachTextEmpty = true;
    }
  }, {
    key: "checkNavbarSeachTextEmpty",
    value: function checkNavbarSeachTextEmpty($event) {
      this.isNavbarSeachTextEmpty = $event;
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      var _this4 = this;

      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(function () {
        _this4.innerWidth = event.target.innerWidth;

        _this4.setMenuLayout();

        _this4.hideCompactMenuOnSmallScreen();
      }.bind(this), 500);
    } //Add/remove classes on page scroll

  }, {
    key: "onWindowScroll",
    value: function onWindowScroll() {
      var number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

      if (number > 60) {
        this.renderer.addClass(this.document.body, "navbar-scrolled");
      } else {
        this.renderer.removeClass(this.document.body, "navbar-scrolled");
      }

      if (number > 400) {
        this.isScrollTopVisible = true;
      } else {
        this.isScrollTopVisible = false;
      }

      if (number > 20) {
        this.renderer.addClass(this.document.body, "page-scrolled");
      } else {
        this.renderer.removeClass(this.document.body, "page-scrolled");
      }
    }
  }]);

  return FullLayoutComponent;
}();

FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
  return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_2__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_15__.DeviceDetectorService));
};

FullLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: FullLayoutComponent,
  selectors: [["app-full-layout"]],
  hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
    }
  },
  decls: 13,
  vars: 9,
  consts: [[3, "seachTextEmpty"], [1, "wrapper", 3, "ngClass", "click", "resize"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "sidenav-overlay", 3, "ngClass", "click"], [1, "drag-target"], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]],
  template: function FullLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-navbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("seachTextEmpty", function FullLayoutComponent_Template_app_navbar_seachTextEmpty_0_listener($event) {
        return ctx.checkNavbarSeachTextEmpty($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_1_listener() {
        return ctx.onWrapperClick();
      })("resize", function FullLayoutComponent_Template_div_resize_1_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, FullLayoutComponent_div_2_Template, 3, 8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, FullLayoutComponent_button_9_Template, 2, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "app-notification-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_11_listener($event) {
        return ctx.onOutsideClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](4, _c2, !ctx.isNavbarSeachTextEmpty));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](6, _c3, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
    }
  },
  directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.NotificationSidebarComponent, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_9__.SidebarDirective, _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_10__.VerticalMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImZ1bGwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 21138:
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAnimations": function() { return /* binding */ customAnimations; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

var customAnimations = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0px'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 <=> 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200))])];

/***/ }),

/***/ 64609:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete-content.directive.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteContentDirective": function() { return /* binding */ AutocompleteContentDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AutocompleteContentDirective = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AutocompleteContentDirective(tpl) {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteContentDirective);

  this.tpl = tpl;
});

AutocompleteContentDirective.ɵfac = function AutocompleteContentDirective_Factory(t) {
  return new (t || AutocompleteContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef));
};

AutocompleteContentDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: AutocompleteContentDirective,
  selectors: [["", "appAutocompleteContent", ""]]
});

/***/ }),

/***/ 7575:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": function() { return /* binding */ AutocompleteComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);








var _c0 = ["root"];

function AutocompleteComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AutocompleteComponent_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content ? ctx_r1.content.tpl : null);
  }
}

var AutocompleteComponent = /*#__PURE__*/function () {
  function AutocompleteComponent() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutocompleteComponent);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AutocompleteComponent, [{
    key: "optionsClick",
    value: function optionsClick() {
      return this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (options) {
        var clicks$ = options.map(function (option) {
          return option.click$;
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(clicks$);
      }));
    }
  }]);

  return AutocompleteComponent;
}();

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)();
};

AutocompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["app-autocomplete"]],
  contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__.AutocompleteContentDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_3__.OptionComponent, 4);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.rootTemplate = _t.first);
    }
  },
  exportAs: ["appAutocomplete"],
  decls: 2,
  vars: 0,
  consts: [["root", ""], [1, "autocomplete", "search-list"], [4, "ngTemplateOutlet"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet],
  styles: [".autocomplete[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.search-list[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  background: #FFFFFF;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n  padding-left: 0;\r\n  border-radius: 0.267rem;\r\n  z-index: 1200;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvY29tcGxldGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjY3cmVtO1xyXG4gIHotaW5kZXg6IDEyMDA7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 86780:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.directive.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteDirective": function() { return /* binding */ AutocompleteDirective; },
/* harmony export */   "overlayClickOutside": function() { return /* binding */ overlayClickOutside; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 24476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ 69222);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);












var AutocompleteDirective = /*#__PURE__*/function () {
  function AutocompleteDirective(host, ngControl, vcr, overlay, router) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutocompleteDirective);

    this.host = host;
    this.ngControl = ngControl;
    this.vcr = vcr;
    this.overlay = overlay;
    this.router = router;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AutocompleteDirective, [{
    key: "control",
    get: function get() {
      return this.ngControl.control;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.origin, "focus").pipe((0,ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe(function () {
        _this.openDropdown();

        _this.appAutocomplete.optionsClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(_this.overlayRef.detachments())).subscribe(function (value) {
          _this.control.setValue(value);

          _this.close();
        });
      });
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd;
      })).subscribe(function (routeChange) {
        _this.close();
      });
    }
  }, {
    key: "openDropdown",
    value: function openDropdown() {
      var _this2 = this;

      this.close();
      this.overlayRef = this.overlay.create({
        width: this.origin.offsetWidth,
        maxHeight: 40 * 3,
        backdropClass: "",
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        positionStrategy: this.getOverlayPosition()
      });
      var template = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.TemplatePortal(this.appAutocomplete.rootTemplate, this.vcr);
      this.overlayRef.attach(template);
      overlayClickOutside(this.overlayRef, this.origin).subscribe(function () {
        return _this2.close();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {}
  }, {
    key: "close",
    value: function close() {
      if (this.overlayRef) {
        this.overlayRef.detach();
      }

      this.overlayRef = null;
    }
  }, {
    key: "getOverlayPosition",
    value: function getOverlayPosition() {
      var positions = [new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ConnectionPositionPair({
        originX: "start",
        originY: "bottom"
      }, {
        overlayX: "start",
        overlayY: "top"
      }), new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ConnectionPositionPair({
        originX: "start",
        originY: "top"
      }, {
        overlayX: "start",
        overlayY: "bottom"
      })];
      return this.overlay.position().flexibleConnectedTo(this.origin).withPositions(positions).withFlexibleDimensions(false).withPush(false);
    }
  }, {
    key: "origin",
    get: function get() {
      return this.host.nativeElement;
    }
  }]);

  return AutocompleteDirective;
}();

AutocompleteDirective.ɵfac = function AutocompleteDirective_Factory(t) {
  return new (t || AutocompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

AutocompleteDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: AutocompleteDirective,
  selectors: [["", "appAutocomplete", ""]],
  inputs: {
    appAutocomplete: "appAutocomplete"
  }
});
function overlayClickOutside(overlayRef, origin) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, "click").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
    var clickTarget = event.target;
    var notOrigin = clickTarget !== origin; // the input

    var notOverlay = !!overlayRef && overlayRef.overlayElement.contains(clickTarget) === false; // the autocomplete

    return notOrigin && notOverlay;
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(overlayRef.detachments()));
}

/***/ }),

/***/ 10322:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteModule": function() { return /* binding */ AutocompleteModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete.component */ 7575);
/* harmony import */ var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete.directive */ 86780);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








var publicApi = [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent, _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteDirective, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__.AutocompleteContentDirective, _option_option_component__WEBPACK_IMPORTED_MODULE_5__.OptionComponent];
var AutocompleteModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AutocompleteModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteModule);
});

AutocompleteModule.ɵfac = function AutocompleteModule_Factory(t) {
  return new (t || AutocompleteModule)();
};

AutocompleteModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AutocompleteModule
});
AutocompleteModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AutocompleteModule, {
    declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent, _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteDirective, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__.AutocompleteContentDirective, _option_option_component__WEBPACK_IMPORTED_MODULE_5__.OptionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
    exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent, _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteDirective, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__.AutocompleteContentDirective, _option_option_component__WEBPACK_IMPORTED_MODULE_5__.OptionComponent]
  });
})();

/***/ }),

/***/ 17606:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/option/option.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionComponent": function() { return /* binding */ OptionComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





var _c0 = ["*"];
var OptionComponent = /*#__PURE__*/function () {
  function OptionComponent(host) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OptionComponent);

    this.host = host;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OptionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.click$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mapTo)(this.value));
    }
  }, {
    key: "element",
    get: function get() {
      return this.host.nativeElement;
    }
  }]);

  return OptionComponent;
}();

OptionComponent.ɵfac = function OptionComponent_Factory(t) {
  return new (t || OptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
};

OptionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OptionComponent,
  selectors: [["app-option"]],
  inputs: {
    value: "value",
    url: "url"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "option"]],
  template: function OptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.no-result[_nghost-%COMP%] {\n  pointer-events: none;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n  display: block;\n}\n\n[_nghost-%COMP%]:first-child   .option[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.35rem;\n  border-top-right-radius: 0.35rem;\n}\n\n[_nghost-%COMP%]:last-child   .option[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n}\n\n.first-active-item[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUdFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJvcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbjpob3N0Lm5vLXJlc3VsdCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3Q6Zmlyc3QtY2hpbGQgLm9wdGlvbiB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zNXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zNXJlbTtcclxufVxyXG5cclxuOmhvc3Q6bGFzdC1jaGlsZCAub3B0aW9uIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjM1cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjM1cmVtO1xyXG59XHJcblxyXG4ub3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG46aG9zdC5maXJzdC1hY3RpdmUtaXRlbSB7XHJcbiAgLm9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gIH1cclxufVxyXG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 89782:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": function() { return /* binding */ ConfirmDialogComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);







var ConfirmDialogComponent = /*#__PURE__*/function () {
  function ConfirmDialogComponent(data) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConfirmDialogComponent);

    this.data = data;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfirmDialogComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ConfirmDialogComponent;
}();

ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
  return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};

ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ConfirmDialogComponent,
  selectors: [["app-confirm-dialog"]],
  decls: 14,
  vars: 14,
  consts: [["mat-dialog-title", "", 1, "primary-color"], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", "float-right", 3, "mat-dialog-close"]],
  template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx.data.title), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, ctx.data.msg));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 10, "General.NoThanks"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 12, ctx.data.btn), " ");
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".primary-color[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWNvbG9yIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 41069:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialogs/delete-dialog/delete-dialog.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": function() { return /* binding */ DeleteDialogComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);







var DeleteDialogComponent = /*#__PURE__*/function () {
  function DeleteDialogComponent(data) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DeleteDialogComponent);

    this.data = data;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DeleteDialogComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return DeleteDialogComponent;
}();

DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) {
  return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};

DeleteDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DeleteDialogComponent,
  selectors: [["app-delete-dialog"]],
  decls: 16,
  vars: 17,
  consts: [["mat-dialog-title", "", 1, "primary-color"], ["mat-dialog-content", ""], [1, "danger", "font-weight-bold"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "mat-dialog-close"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"]],
  template: function DeleteDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, "General.ConfirmDelete"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "labels.ConfirmDeleteMsg"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, ctx.data.msg), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, "General.NoThanks"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 15, "General.Delete"), " ");
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".primary-color[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6ImRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeS1jb2xvciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 90508:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialogs/enter-code-dialog/enter-code-dialog.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterCodeDialogComponent": function() { return /* binding */ EnterCodeDialogComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












function EnterCodeDialogComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.data.msg), " ");
  }
}

var EnterCodeDialogComponent = /*#__PURE__*/function () {
  function EnterCodeDialogComponent(data) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EnterCodeDialogComponent);

    this.data = data;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EnterCodeDialogComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return EnterCodeDialogComponent;
}();

EnterCodeDialogComponent.ɵfac = function EnterCodeDialogComponent_Factory(t) {
  return new (t || EnterCodeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};

EnterCodeDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EnterCodeDialogComponent,
  selectors: [["app-enter-code-dialog"]],
  decls: 21,
  vars: 19,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["dataInput", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "btn", "btn-danger", 3, "mat-dialog-close"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", 3, "mat-dialog-close"]],
  template: function EnterCodeDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EnterCodeDialogComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.code = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EnterCodeDialogComponent_mat_error_13_Template, 3, 3, "mat-error", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, ctx.data.title));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 11, ctx.data.msg));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, "labels.Code"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.error == null ? null : _r0.error.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 15, "General.NoThanks"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 17, "General.Subscribe"), " ");
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRlci1jb2RlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 53483:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialogs/save-exam-dialog/save-exam-dialog.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveExamDialogComponent": function() { return /* binding */ SaveExamDialogComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 89461);









function SaveExamDialogComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "Material.ResetExam"), " ");
  }
}

var SaveExamDialogComponent = /*#__PURE__*/function () {
  function SaveExamDialogComponent(data) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SaveExamDialogComponent);

    this.data = data;
    console.log(data);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SaveExamDialogComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return SaveExamDialogComponent;
}();

SaveExamDialogComponent.ɵfac = function SaveExamDialogComponent_Factory(t) {
  return new (t || SaveExamDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};

SaveExamDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SaveExamDialogComponent,
  selectors: [["app-save-exam-dialog"]],
  decls: 14,
  vars: 14,
  consts: [["mat-dialog-title", "", 1, "primary-color"], ["mat-dialog-content", ""], [1, "primary"], ["mat-dialog-actions", ""], ["routerLink", "/home", 1, "btn", "btn-warning", 3, "mat-dialog-close"], ["id", "btnSubmit", "class", "btn btn-primary bg-light-primary", 3, "mat-dialog-close", 4, "ngIf"], ["id", "btnSubmit", 1, "btn", "btn-primary", "bg-light-primary", 3, "mat-dialog-close"]],
  template: function SaveExamDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SaveExamDialogComponent_button_13_Template, 3, 4, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 8, "labels.ExamRuselts"), " ", ctx.data.title, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 10, "labels.StudentMark"), " : (", ctx.data.solvidResults.result, " / ", ctx.data.solvidResults.total_mark, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 12, "General.BackToHome"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.solvidResults && ctx.data.solvidResults.repeatable);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLWV4YW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 71044:
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/dropdowns/subjects-by-teacherid/subjects-by-teacherid.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectsByTeacheridComponent": function() { return /* binding */ SubjectsByTeacheridComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dynamic-form-field/input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);













function SubjectsByTeacheridComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", subject_r1.subject_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subject_r1.subject_ar_name, " ");
  }
}

var SubjectsByTeacheridComponent = /*#__PURE__*/function () {
  function SubjectsByTeacheridComponent(GeneralService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubjectsByTeacheridComponent);

    this.GeneralService = GeneralService;
    this.multiple = false;
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubjectsByTeacheridComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.subjectControl.disable();

      if (this.teacherIdControl.value > 0) {
        this.getSubjectByTeacherId(this.teacherIdControl.value);
        this.subjectControl.enable();
      }

      this.teacherIdControl.valueChanges.subscribe(function (teacherId) {
        // this.subjectControl.setValue(null);
        if (teacherId > 0) {
          _this.getSubjectByTeacherId(teacherId);

          _this.subjectControl.enable();
        } else {
          _this.subjectControl.setValue(null);

          _this.subjectControl.disable();
        }
      });
      this.subjectControl.valueChanges.subscribe(function (subjectID) {});
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.selectionChange.emit(event.value);
    }
  }, {
    key: "getSubjectByTeacherId",
    value: function getSubjectByTeacherId(teacherId) {
      var _this2 = this;

      this.GeneralService.getSubjectByTeacherId(teacherId, 36).subscribe(function (res) {
        _this2.subjects = res.subjects;
      });
    }
  }]);

  return SubjectsByTeacheridComponent;
}();

SubjectsByTeacheridComponent.ɵfac = function SubjectsByTeacheridComponent_Factory(t) {
  return new (t || SubjectsByTeacheridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService));
};

SubjectsByTeacheridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SubjectsByTeacheridComponent,
  selectors: [["app-subjects-by-teacherid"]],
  inputs: {
    subjectControl: "subjectControl",
    teacherIdControl: "teacherIdControl",
    submitted: "submitted",
    multiple: "multiple"
  },
  outputs: {
    selectionChange: "selectionChange"
  },
  decls: 11,
  vars: 12,
  consts: [["appearance", "legacy"], [3, "formControl", "multiple", "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "control", "submitted", "isSelect"], [3, "value"]],
  template: function SubjectsByTeacheridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function SubjectsByTeacheridComponent_Template_mat_select_selectionChange_4_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubjectsByTeacheridComponent_mat_option_8_Template, 2, 2, "mat-option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input-validation-msg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, "Material.Subjects"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.subjectControl)("multiple", ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 10, "Material.Subjects"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.subjectControl)("submitted", ctx.submitted)("isSelect", true);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_3__.InputValidationMsgComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJqZWN0cy1ieS10ZWFjaGVyaWQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 12327:
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/button-file-input-upload/file-input-upload.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonFileInputUploadComponent": function() { return /* binding */ ButtonFileInputUploadComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }








var ButtonFileInputUploadComponent = /*#__PURE__*/function () {
  function ButtonFileInputUploadComponent(fileService, msg) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonFileInputUploadComponent);

    this.fileService = fileService;
    this.msg = msg;
    this.submitted = false;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonFileInputUploadComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      if (this.removeFile) {
        this.fileService.resetFileById(this.htmlId);
      }
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fileService.uploadFile(event).then(function (file) {
                  // file to large > 10 .MB
                  if (file.size > 10485760) {
                    _this.msg.warning("General.largFileError");

                    if (_this.htmlId) _this.fileService.resetFileById(_this.htmlId);
                  } else {
                    setTimeout(function () {
                      var _a;

                      (_a = _this.control) === null || _a === void 0 ? void 0 : _a.setValue(file);
                    }, 100);
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return ButtonFileInputUploadComponent;
}();

ButtonFileInputUploadComponent.ɵfac = function ButtonFileInputUploadComponent_Factory(t) {
  return new (t || ButtonFileInputUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService));
};

ButtonFileInputUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ButtonFileInputUploadComponent,
  selectors: [["app-file-input-upload"]],
  inputs: {
    control: "control",
    submitted: "submitted",
    accept: "accept",
    removeFile: "removeFile",
    htmlId: "htmlId",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 10,
  vars: 8,
  consts: [[1, "row"], [1, "col-12"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", "btn-sm", "float-right", 3, "click"], [1, "fa", "fa-upload"], ["hidden", "", "type", "file", "name", "answerFourImage", 1, "form-control", 3, "id", "accept", "change"], ["fileInput", ""], [1, "danger"], [3, "control", "submitted", "isFile"]],
  template: function ButtonFileInputUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ButtonFileInputUploadComponent_Template_button_click_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);

        return _r0.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ButtonFileInputUploadComponent_Template_input_change_6_listener($event) {
        return ctx.uploadFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input-validation-msg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 6, "General.Upload"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.htmlId)("accept", ctx.accept);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted)("isFile", true);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_4__.InputValidationMsgComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLWlucHV0LXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 67978:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/datepicker-input/datepicker-input.component.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatepickerInputComponent": function() { return /* binding */ DatepickerInputComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










var DatepickerInputComponent = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DatepickerInputComponent(datePipe) {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatepickerInputComponent);

  var _a, _b;

  this.datePipe = datePipe;
  this.submitted = false;
  this.appearance = "legacy";
  this.maxDate = null;
  (_a = this.control) === null || _a === void 0 ? void 0 : _a.setValue(datePipe.transform((_b = this.control) === null || _b === void 0 ? void 0 : _b.value));
});

DatepickerInputComponent.ɵfac = function DatepickerInputComponent_Factory(t) {
  return new (t || DatepickerInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe));
};

DatepickerInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DatepickerInputComponent,
  selectors: [["app-datepicker-input"]],
  inputs: {
    control: "control",
    label: "label",
    placeholder: "placeholder",
    submitted: "submitted",
    appearance: "appearance",
    maxDate: "maxDate"
  },
  decls: 11,
  vars: 14,
  consts: [[3, "appearance"], ["matInput", "", 3, "matDatepicker", "formControl", "placeholder", "max"], ["matSuffix", "", 3, "for"], ["date", ""], [3, "control", "submitted", "isDate"]],
  template: function DatepickerInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker-toggle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-datepicker", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input-validation-msg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", ctx.appearance);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 10, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 12, ctx.placeholder))("max", ctx.maxDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted)("isDate", true);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__.InputValidationMsgComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlcGlja2VyLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 82158:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/file-input/file-input.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileInputComponent": function() { return /* binding */ FileInputComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }








var FileInputComponent = /*#__PURE__*/function () {
  function FileInputComponent(fileService, msg) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileInputComponent);

    this.fileService = fileService;
    this.msg = msg;
    this.submitted = false;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FileInputComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      if (this.removeFile) {
        this.fileService.resetFileById(this.htmlId);
      }
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fileService.uploadFile(event).then(function (file) {
                  // file to large > 10 .MB
                  if (file.size > 10485760) {
                    _this.msg.warning("General.largFileError");

                    if (_this.htmlId) _this.fileService.resetFileById(_this.htmlId);
                  } else {
                    setTimeout(function () {
                      var _a;

                      (_a = _this.control) === null || _a === void 0 ? void 0 : _a.setValue(file);
                    }, 100);
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return FileInputComponent;
}();

FileInputComponent.ɵfac = function FileInputComponent_Factory(t) {
  return new (t || FileInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService));
};

FileInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FileInputComponent,
  selectors: [["app-file-input"]],
  inputs: {
    control: "control",
    submitted: "submitted",
    accept: "accept",
    removeFile: "removeFile",
    htmlId: "htmlId",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 8,
  consts: [[1, "row"], [1, "col-12"], ["type", "file", "name", "answerFourImage", 1, "form-control", 3, "id", "accept", "change"], [1, "danger"], [3, "control", "submitted", "isFile"]],
  template: function FileInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function FileInputComponent_Template_input_change_5_listener($event) {
        return ctx.uploadFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input-validation-msg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.htmlId)("accept", ctx.accept);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted)("isFile", true);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_4__.InputValidationMsgComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 90530:
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/input-validation-msg/input-validation-msg.component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputValidationMsgComponent": function() { return /* binding */ InputValidationMsgComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






function InputValidationMsgComponent_span_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.MustSelectFile"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.mustEnterDate"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.toDatedIsBefore"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.minusNum"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValidEmail"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.bigZero"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.NumberMustStartWith"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "labels.minLength"), " ", ctx_r11.control.errors == null ? null : ctx_r11.control.errors.minlength.requiredLength, " ");
  }
}

function InputValidationMsgComponent_span_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "labels.maxLength"), " ", ctx_r12.control.errors == null ? null : ctx_r12.control.errors.maxlength.requiredLength, " ");
  }
}

function InputValidationMsgComponent_span_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "labels.maxNum"), " ", ctx_r13.control.errors == null ? null : ctx_r13.control.errors.max.max, " ");
  }
}

function InputValidationMsgComponent_span_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "labels.minNum"), " ", ctx_r14.control.errors == null ? null : ctx_r14.control.errors.min.min, " ");
  }
}

function InputValidationMsgComponent_span_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.notMatchPassword"), " ");
  }
}

function InputValidationMsgComponent_span_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.smallerThan"), " ");
  }
}

function InputValidationMsgComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InputValidationMsgComponent_span_0_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InputValidationMsgComponent_span_0_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InputValidationMsgComponent_span_0_span_3_Template, 3, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InputValidationMsgComponent_span_0_span_4_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InputValidationMsgComponent_span_0_span_5_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InputValidationMsgComponent_span_0_span_6_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InputValidationMsgComponent_span_0_span_7_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, InputValidationMsgComponent_span_0_span_8_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, InputValidationMsgComponent_span_0_span_9_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, InputValidationMsgComponent_span_0_span_10_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, InputValidationMsgComponent_span_0_span_11_Template, 3, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, InputValidationMsgComponent_span_0_span_12_Template, 3, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, InputValidationMsgComponent_span_0_span_13_Template, 3, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, InputValidationMsgComponent_span_0_span_14_Template, 3, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, InputValidationMsgComponent_span_0_span_15_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, InputValidationMsgComponent_span_0_span_16_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx_r0.control.errors == null ? null : ctx_r0.control.errors.required) || (ctx_r0.control.errors == null ? null : ctx_r0.control.errors.whiteSpace)) && !ctx_r0.isSelect && !ctx_r0.isDate && !ctx_r0.isFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.control == null ? null : ctx_r0.control.errors == null ? null : ctx_r0.control.errors.required) && ctx_r0.isSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.control == null ? null : ctx_r0.control.errors == null ? null : ctx_r0.control.errors.required) && ctx_r0.isFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.control.errors == null ? null : ctx_r0.control.errors.required) && ctx_r0.isDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.control.errors == null ? null : ctx_r0.control.errors.dateBefore) && ctx_r0.isDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.minusNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.bigZero);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.MobileStartsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.mustMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.smallerThanNumbers);
  }
}

var InputValidationMsgComponent = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InputValidationMsgComponent() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InputValidationMsgComponent);

  this.submitted = false;
  this.isSelect = false;
  this.isDate = false;
  this.isFile = false;
});

InputValidationMsgComponent.ɵfac = function InputValidationMsgComponent_Factory(t) {
  return new (t || InputValidationMsgComponent)();
};

InputValidationMsgComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: InputValidationMsgComponent,
  selectors: [["input-validation-msg"]],
  inputs: {
    control: "control",
    submitted: "submitted",
    isSelect: "isSelect",
    isDate: "isDate",
    isFile: "isFile"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], ["class", "file-error", 4, "ngIf"], [1, "file-error"]],
  template: function InputValidationMsgComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InputValidationMsgComponent_span_0_Template, 17, 16, "span", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.control.invalid && (ctx.control.touched || ctx.submitted));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".file-error[_ngcontent-%COMP%] {\n  font-size: 75% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXZhbGlkYXRpb24tbXNnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJpbnB1dC12YWxpZGF0aW9uLW1zZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWVycm9yIHtcclxuICBmb250LXNpemU6IDc1JSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 45471:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/input/input.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": function() { return /* binding */ InputComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








var InputComponent = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InputComponent() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InputComponent);

  this.type = "text";
  this.submitted = false;
  this.appearance = "legacy";
});

InputComponent.ɵfac = function InputComponent_Factory(t) {
  return new (t || InputComponent)();
};

InputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: InputComponent,
  selectors: [["app-input"]],
  inputs: {
    control: "control",
    label: "label",
    type: "type",
    placeholder: "placeholder",
    submitted: "submitted",
    appearance: "appearance",
    class: "class",
    autocomplete: "autocomplete"
  },
  decls: 8,
  vars: 14,
  consts: [[3, "appearance"], ["matInput", "", 2, "outline", "none !important", 3, "type", "formControl", "autocomplete", "placeholder"], [3, "control", "submitted"]],
  template: function InputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input-validation-msg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", ctx.appearance);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 10, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.control)("autocomplete", ctx.autocomplete)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 12, ctx.placeholder));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__.InputValidationMsgComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 24724:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/radio-button/radio-button.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonComponent": function() { return /* binding */ RadioButtonComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











function RadioButtonComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-radio-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RadioButtonComponent_div_4_Template_mat_radio_button_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r2.change($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var radio_r1 = ctx.$implicit;
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]((tmp_0_0 = radio_r1.cssClass) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "col-md-6 col-12");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", radio_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, radio_r1.label), " ");
  }
}

var RadioButtonComponent = /*#__PURE__*/function () {
  function RadioButtonComponent() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RadioButtonComponent);

    this.submitted = false;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RadioButtonComponent, [{
    key: "change",
    value: function change(event) {
      this.onChange.emit(event.value);
    }
  }]);

  return RadioButtonComponent;
}();

RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) {
  return new (t || RadioButtonComponent)();
};

RadioButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RadioButtonComponent,
  selectors: [["app-radio-button"]],
  inputs: {
    control: "control",
    label: "label",
    radioList: "radioList",
    submitted: "submitted"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 7,
  vars: 8,
  consts: [[1, "row", 3, "formControl"], [3, "class", 4, "ngFor", "ngForOf"], [1, "error"], [3, "control", "submitted", "isSelect"], [3, "value", "change"]],
  template: function RadioButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-radio-group", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RadioButtonComponent_div_4_Template, 4, 6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-hint", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input-validation-msg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 6, ctx.label), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.control);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.radioList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted)("isSelect", true);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__.InputValidationMsgComponent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__.MatRadioButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: [".error[_ngcontent-%COMP%] {\n  font-size: 75%;\n}\n\n.mat-radio-group[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0YiLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcclxuICBmb250LXNpemU6IDc1JTtcclxufVxyXG5cclxuLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 82721:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/textarea/textarea.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaComponent": function() { return /* binding */ TextareaComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








var TextareaComponent = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TextareaComponent() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextareaComponent);

  this.type = "text";
  this.submitted = false;
  this.appearance = "legacy";
});

TextareaComponent.ɵfac = function TextareaComponent_Factory(t) {
  return new (t || TextareaComponent)();
};

TextareaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TextareaComponent,
  selectors: [["app-textarea"]],
  inputs: {
    control: "control",
    label: "label",
    type: "type",
    placeholder: "placeholder",
    rows: "rows",
    cols: "cols",
    submitted: "submitted",
    appearance: "appearance",
    class: "class"
  },
  decls: 9,
  vars: 14,
  consts: [[3, "appearance"], ["matInput", "", 3, "formControl", "placeholder", "rows", "cols"], [3, "control", "submitted"]],
  template: function TextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "textarea", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input-validation-msg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", ctx.appearance);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 10, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 12, ctx.placeholder))("rows", ctx.rows)("cols", ctx.cols);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__.InputValidationMsgComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0YXJlYS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 49232:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/evaluations/general-evaluation/general-evaluation.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralEvaluationComponent": function() { return /* binding */ GeneralEvaluationComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 93774);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/round.pipe */ 12598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








var data = {
  WidgetlineDashboard2Chart: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"],
    series: [[55, 60, 50, 55, 50, 60, 55, 57]]
  }
};
var GeneralEvaluationComponent = /*#__PURE__*/function () {
  function GeneralEvaluationComponent(StudentServ) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GeneralEvaluationComponent);

    this.StudentServ = StudentServ;
    this.WidgetlineChart = {
      type: "Line",
      data: data["WidgetlineDashboard2Chart"],
      options: {
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: 0
        },
        axisY: {
          showGrid: false,
          low: 50,
          showLabel: false,
          offset: 0
        },
        fullWidth: true
      }
    };

    this.fireRefreshEventOnWindow = function () {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("resize", true, false);
      window.dispatchEvent(evt);
    };
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GeneralEvaluationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.returnGeneralEvaluation();
    } // Return Student General Evaluation

  }, {
    key: "returnGeneralEvaluation",
    value: function returnGeneralEvaluation() {
      var _this = this;

      this.StudentServ.returnGeneralEvaluation().subscribe(function (res) {
        _this.GeneralEvaluation = res;
        _this.presentage = res.studentGrades / (res.examGrades != 0 ? res.examGrades : 1) * 100;
      });
    }
  }, {
    key: "onResized",
    value: function onResized(event) {
      var _this2 = this;

      setTimeout(function () {
        _this2.fireRefreshEventOnWindow();
      }, 300);
    }
  }]);

  return GeneralEvaluationComponent;
}();

GeneralEvaluationComponent.ɵfac = function GeneralEvaluationComponent_Factory(t) {
  return new (t || GeneralEvaluationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService));
};

GeneralEvaluationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: GeneralEvaluationComponent,
  selectors: [["app-general-evaluation"]],
  decls: 66,
  vars: 42,
  consts: [[1, "row", 3, "resized"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-12"], [1, "card", "bg-info", "bg-lighten-3"], [1, "card-content"], [1, "card-body", "py-0"], [1, "media"], [1, "media-body", "info", "text-left"], [1, "font-large-1", "info", "mb-0"], [1, "media-right", "info", "text-right"], [1, "ft-trending-up", "font-large-1"], ["id", "Widget-line-chart", 1, "WidgetlineChart", "WidgetlineChartShadow", "mb-3"], [1, "height-75", 3, "data", "type", "options"], [1, "card", "bg-warning", "bg-lighten-3"], [1, "media-body", "warning", "text-left"], [1, "font-large-1", "warning", "mb-0"], [1, "media-right", "warning", "text-right"], [1, "ft-play", "font-large-1"], ["id", "Widget-line-chart2", 1, "WidgetlineChart1", "WidgetlineChart1Shadow", "mb-3"], [1, "height-75", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "card", "bg-light", "dark", "bg-lighten-3"], [1, "media-body", "light", "text-left"], [1, "font-large-1", "dark", "mb-0"], [1, "dark"], [1, "media-right", "dark", "text-right"], [1, "ft-book", "font-large-1"], ["id", "Widget-line-chart2", 1, "WidgetlineChart2", "WidgetlineChart2Shadow", "mb-3"], [1, "card", "bg-secondary", "bg-lighten-3"], [1, "media-body", "secondary", "text-left"], [1, "font-large-1", "secondary", "mb-0"], [1, "media-right", "secondary", "text-right"], [1, "ft-activity", "font-large-1"], ["id", "Widget-line-chart2", 1, "WidgetlineChart3", "WidgetlineChart3Shadow", "mb-3"]],
  template: function GeneralEvaluationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resized", function GeneralEvaluationComponent_Template_div_resized_0_listener($event) {
        return ctx.onResized($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "x-chartist", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "x-chartist", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h3", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "x-chartist", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "h3", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](60, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "x-chartist", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 26, ctx.presentage), "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 28, "Material.GeneralEvaluation"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.WidgetlineChart.data)("type", ctx.WidgetlineChart.type)("options", ctx.WidgetlineChart.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 30, ctx.GeneralEvaluation == null ? null : ctx.GeneralEvaluation.matCount) || 0, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 32, "Material.Videos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.WidgetlineChart.data)("type", ctx.WidgetlineChart.type)("options", ctx.WidgetlineChart.options)("responsiveOptions", ctx.WidgetlineChart.responsiveOptions)("events", ctx.WidgetlineChart.events);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 34, ctx.GeneralEvaluation == null ? null : ctx.GeneralEvaluation.examCount) || 0, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 36, "Material.Exams"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.WidgetlineChart.data)("type", ctx.WidgetlineChart.type)("options", ctx.WidgetlineChart.options)("responsiveOptions", ctx.WidgetlineChart.responsiveOptions)("events", ctx.WidgetlineChart.events);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](57, 38, ctx.GeneralEvaluation == null ? null : ctx.GeneralEvaluation.giftPoints) || 0, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](60, 40, "Material.Points"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.WidgetlineChart.data)("type", ctx.WidgetlineChart.type)("options", ctx.WidgetlineChart.options)("responsiveOptions", ctx.WidgetlineChart.responsiveOptions)("events", ctx.WidgetlineChart.events);
    }
  },
  directives: [ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent],
  pipes: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_3__.RoundPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["[_nghost-%COMP%]     .ct-grid {\n  stroke-dasharray: 0;\n  stroke: rgba(0, 0, 0, 0.1);\n  opacity: 0;\n}\n\n[_nghost-%COMP%]     .ct-label {\n  font-size: 0.9rem;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartShadow {\n  filter: drop-shadow(0px 15px 6px rgba(47, 139, 230, 0.6));\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-line {\n  stroke: #2F8BE6;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart1 .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart1Shadow {\n  filter: drop-shadow(0px 15px 6px rgba(247, 126, 23, 0.6));\n}\n\n[_nghost-%COMP%]     .WidgetlineChart1 .ct-line {\n  stroke: #F77E17;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart2 .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart2Shadow {\n  filter: drop-shadow(0px 15px 6px #1A051D);\n}\n\n[_nghost-%COMP%]     .WidgetlineChart2 .ct-line {\n  stroke: #1A051D;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart3 .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart3Shadow {\n  filter: drop-shadow(0px 15px 6px #616D89);\n}\n\n[_nghost-%COMP%]     .WidgetlineChart3 .ct-line {\n  stroke: #616D89;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .lineChart1 .apexcharts-tooltip {\n  color: #342E49 !important;\n}\n\n[_nghost-%COMP%]     .lineChart1Shadow {\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.1));\n  \n}\n\n[_nghost-%COMP%]     .donut1 .ct-label {\n  font-size: 4rem;\n  fill: #F77E17;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-done .ct-slice-donut {\n  stroke: #FCC173;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-label {\n  font-size: 4rem;\n  fill: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-done .ct-slice-donut {\n  stroke: #81C8F7;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-label {\n  font-size: 4rem;\n  fill: #F55252;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-done .ct-slice-donut {\n  stroke: #FCA897;\n}\n\n[_nghost-%COMP%]     .weather-pic {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-line {\n  stroke-width: 1px;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-a .ct-line {\n  stroke: #60AFF0;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-a .ct-point-circle {\n  stroke: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-b .ct-line {\n  stroke: #6CD975;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-b .ct-point-circle {\n  stroke: #616D89;\n}\n\n[_nghost-%COMP%]     .lineChart2Shadow {\n  filter: drop-shadow(0px 16px 6px rgba(0, 0, 0, 0.15));\n  \n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarning .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarning .ct-line {\n  stroke: url(\"/dashboard/dashboard2#widgradient1\") !important;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarning .ct-grid {\n  stroke: transparent !important;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarningShadow {\n  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.2));\n  \n}\n\n[_nghost-%COMP%]     .dash2-user img {\n  width: 6.5rem;\n  background-color: transparent;\n  border: 2px solid #975AFF;\n  padding: 0.4rem;\n}\n\n[_nghost-%COMP%]     .dash2-progress {\n  height: 1rem;\n  background-color: #F7F7F8;\n}\n\n[_nghost-%COMP%]     .dash2-progress .progress-bar {\n  border-radius: 0;\n}\n\n[_nghost-%COMP%]     .dash2-progress .progress-bar:last-child {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-line {\n  stroke-width: 1px;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard2#gradient\") !important;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-a .ct-point-circle, .lineAreaChart[_ngcontent-%COMP%]   .ct-series-a[_ngcontent-%COMP%]   .ct-line[_ngcontent-%COMP%] {\n  stroke: #975AFF;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-b .ct-area {\n  fill: #F9877C;\n  fill-opacity: 0.1;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-b .ct-point-circle {\n  stroke: #F55252;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtZXZhbHVhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBRUkseURBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBRUkseURBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBRUkseUNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBRUkseUNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUVJLG9EQUFBO0VBQ0EsOERBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUVJLHFEQUFBO0VBQ0EsOERBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLDREQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFFSSxvREFBQTtFQUNBLDhEQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdDQUFBO0VBQ0EsbUNBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUVJLHNEQUFBO0FBREo7O0FBSUE7O0VBRUksZUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREoiLCJmaWxlIjoiZ2VuZXJhbC1ldmFsdWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFzc2V0cy9zYXNzL2NvcmUvdmFyaWFibGVzL2dyYWRpZW50LXZhcmlhYmxlcy5zY3NzXCI7XHJcbjpob3N0IDo6bmctZGVlcCAuY3QtZ3JpZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwO1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNnB4IHJnYmEoNDcsIDEzOSwgMjMwLCAwLjYpKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNnB4IHJnYmEoNDcsIDEzOSwgMjMwLCAwLjYpKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlOiAjMkY4QkU2O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydDFTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDZweCByZ2JhKDI0NywgMTI2LCAyMywgMC42KSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDZweCByZ2JhKDI0NywgMTI2LCAyMywgMC42KSk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MSAuY3QtbGluZSB7XHJcbiAgICBzdHJva2U6ICNGNzdFMTc7XHJcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQyIC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MlNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNnB4ICMxQTA1MUQpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTVweCA2cHggIzFBMDUxRCk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MiAuY3QtbGluZSB7XHJcbiAgICBzdHJva2U6ICMxQTA1MUQ7XHJcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQzIC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0M1NoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNnB4ICM2MTZEODkpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTVweCA2cHggIzYxNkQ4OSk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MyAuY3QtbGluZSB7XHJcbiAgICBzdHJva2U6ICM2MTZEODk7XHJcbiAgICBzdHJva2Utd2lkdGg6IDRweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQxIC5hcGV4Y2hhcnRzLXRvb2x0aXAge1xyXG4gICAgY29sb3I6ICMzNDJFNDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQxU2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbiAgICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDEgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZpbGw6ICNGNzdFMTc7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZG9udXQxIC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRjVGNUY1O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0MSAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkNDMTczO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0MiAuY3QtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgZmlsbDogIzJGOEJFNjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDIgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNGNUY1RjU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZG9udXQyIC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM4MUM4Rjc7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZG9udXQzIC5jdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBmaWxsOiAjRjU1MjUyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0MyAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0Y1RjVGNTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDMgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0ZDQTg5NztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC53ZWF0aGVyLXBpYyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQyIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiAjRkZGRkZGO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDIgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlOiAjNjBBRkYwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjMkY4QkU2O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDIgLmN0LXNlcmllcy1iIC5jdC1saW5lIHtcclxuICAgIHN0cm9rZTogIzZDRDk3NTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogIzYxNkQ4OTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQyU2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcclxuICAgIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydEVhcm5pbmcgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnRFYXJuaW5nIC5jdC1saW5lIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQyLWdyYWRpZW50LXBhdGggKyAgI3dpZGdyYWRpZW50MSkgIWltcG9ydGFudDtcclxuICAgIHN0cm9rZS13aWR0aDogNHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydEVhcm5pbmcgLmN0LWdyaWQge1xyXG4gICAgc3Ryb2tlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydEVhcm5pbmdTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICAgIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhc2gyLXVzZXIgaW1nIHtcclxuICAgIHdpZHRoOiA2LjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5NzVBRkY7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGFzaDItcHJvZ3Jlc3Mge1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGODtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXNoMi1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGFzaDItcHJvZ3Jlc3MgLnByb2dyZXNzLWJhcjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWFDaGFydCAuY3QtbGluZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiAjRkZGRkZGO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIC8vIGZpbGwgOiAjQjU4M0ZGO1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQyLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUsXHJcbi5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XHJcbiAgICBzdHJva2U6ICM5NzVBRkY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogI0Y5ODc3QztcclxuICAgIGZpbGwtb3BhY2l0eTogMC4xO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjRjU1MjUyO1xyXG59Il19 */"]
});

/***/ }),

/***/ 38937:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/shared/components/evaluations/materails-general-evaluation/materails-general-evaluation.component.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterailsGeneralEvaluationComponent": function() { return /* binding */ MaterailsGeneralEvaluationComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ 97103);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/round.pipe */ 12598);













function MaterailsGeneralEvaluationComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", subject_r1.subject_ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", subject_r1.currentSubjectExamsCount == 0 ? 0 : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, subject_r1.currentSubjectStudentExamsCount / subject_r1.currentSubjectExamsCount * 100), " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", subject_r1.currentSubjectExamsCount == 0 ? 0 : subject_r1.currentSubjectStudentExamsCount / subject_r1.currentSubjectExamsCount * 100);
  }
}

var a = {
  line2: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [[160, 150, 140, 120, 75, 35, 45, 65, 100, 145, 160, 180], [100, 95, 90, 100, 110, 120, 130, 140, 130, 95, 75, 80]]
  }
};
var MaterailsGeneralEvaluationComponent = /*#__PURE__*/function () {
  function MaterailsGeneralEvaluationComponent(StudentServ, spinner) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MaterailsGeneralEvaluationComponent);

    this.StudentServ = StudentServ;
    this.spinner = spinner;
    this.subjectsEvaluation = [];
    this.labels = [];
    this.series = [];
    this.data = {
      line2: {
        labels: [this.labels],
        series: [[160, 150, 140, 120, 75, 35, 45, 65, 100, 145, 160, 180]]
      }
    }; // Line chart configuration Starts

    this.lineChart2 = {
      type: "Line",
      data: this.data["line2"],
      options: {
        axisX: {
          showGrid: false
        },
        axisY: {
          low: 0,
          scaleMinSpace: 20
        },
        fullWidth: true
      },
      responsiveOptions: [["screen and (max-width: 640px) and (min-width: 381px)", {
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }], ["screen and (max-width: 380px)", {
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]],
      events: {
        draw: function draw(data) {
          var circleRadius = 6;

          if (data.type === "point") {
            var circle = new chartist__WEBPACK_IMPORTED_MODULE_3__.Svg("circle", {
              cx: data.x,
              cy: data.y,
              r: circleRadius,
              class: "ct-point-circle"
            });
            data.element.replace(circle);
          } else if (data.type === "label") {
            // adjust label position for rotation
            var dX = data.width / 2 + (30 - data.width);
            data.element.attr({
              x: data.element.attr("x") - dX
            });
          }
        }
      }
    };
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MaterailsGeneralEvaluationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.returnGeneralEvaluation();
    } // Return Student General Evaluation

  }, {
    key: "returnGeneralEvaluation",
    value: function returnGeneralEvaluation() {
      var _this = this;

      this.spinner.show();
      this.StudentServ.returnGeneralEvaluation().subscribe(function (res) {
        _this.subjectsEvaluation = res.subjectsCountList; //  console.log(res);

        var _iterator = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.subjectsEvaluation),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var obj = _step.value;

            // this.labels += `"${obj.subject_ar_name}",`;
            _this.labels.push(obj.subject_ar_name);
          } //  console.log("labels", this.labels);

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      this.spinner.show();
    }
  }]);

  return MaterailsGeneralEvaluationComponent;
}();

MaterailsGeneralEvaluationComponent.ɵfac = function MaterailsGeneralEvaluationComponent_Factory(t) {
  return new (t || MaterailsGeneralEvaluationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_4__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService));
};

MaterailsGeneralEvaluationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MaterailsGeneralEvaluationComponent,
  selectors: [["app-materails-general-evaluation"]],
  decls: 8,
  vars: 4,
  consts: [[1, "card"], [1, "scrolled350"], [4, "ngFor", "ngForOf"], [1, "subject-name", "font-medium-1", "d-inline"], [1, "badge", "bg-light-info", "d-inline", "float-right"], ["mode", "determinate", 3, "value"]],
  template: function MaterailsGeneralEvaluationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MaterailsGeneralEvaluationComponent_div_6_Template, 7, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "Material.EvaluationByMaterials"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.subjectsEvaluation);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_5__.RoundPipe],
  styles: [".subject-name[_ngcontent-%COMP%] {\n  color: #33a7d5;\n}\n\n.scrolled350[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n  .mat-progress-bar {\n  margin: 9px 0 25px !important;\n}\n\n.mat-card.card[_ngcontent-%COMP%] {\n  min-height: 470px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyYWlscy1nZW5lcmFsLWV2YWx1YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsNEJBQUE7QUFFRiIsImZpbGUiOiJtYXRlcmFpbHMtZ2VuZXJhbC1ldmFsdWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3QtbmFtZSB7XHJcbiAgY29sb3I6ICMzM2E3ZDU7XHJcbn1cclxuXHJcbi5zY3JvbGxlZDM1MCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICBtYXJnaW46IDlweCAwIDI1cHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWNhcmQuY2FyZCB7XHJcbiAgbWluLWhlaWdodDogNDcwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 88641:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/evaluations/subject-evaluation/subject-evaluation.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectEvaluationComponent": function() { return /* binding */ SubjectEvaluationComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/round.pipe */ 12598);













function SubjectEvaluationComponent_ng_template_79_tr_14_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r17.examID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "General.Show"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_79_tr_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Exam.ExamSolvedOffline"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_79_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubjectEvaluationComponent_ng_template_79_tr_14_a_8_Template, 3, 4, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubjectEvaluationComponent_ng_template_79_tr_14_span_9_Template, 3, 3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r17 = ctx.$implicit;
    var i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r17.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r17.studentGrade, "/", exam_r17.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(exam_r17 == null ? null : exam_r17.isSolvedOffline));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", exam_r17 == null ? null : exam_r17.isSolvedOffline);
  }
}

function SubjectEvaluationComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_79_tr_14_Template, 10, 6, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.Exams == null ? null : ctx_r1.Exams.solvedExams == null ? null : ctx_r1.Exams.solvedExams.subject_exams);
  }
}

function SubjectEvaluationComponent_ng_template_84_tr_14_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r23.examID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "General.Show"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_84_tr_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Exam.ExamSolvedOffline"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_84_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubjectEvaluationComponent_ng_template_84_tr_14_a_8_Template, 3, 4, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubjectEvaluationComponent_ng_template_84_tr_14_span_9_Template, 3, 3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r23 = ctx.$implicit;
    var i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r23.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r23.studentGrade, "/", exam_r23.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(exam_r23 == null ? null : exam_r23.isSolvedOffline));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", exam_r23 == null ? null : exam_r23.isSolvedOffline);
  }
}

function SubjectEvaluationComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_84_tr_14_Template, 10, 6, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.Exams == null ? null : ctx_r2.Exams.solvedExams == null ? null : ctx_r2.Exams.solvedExams.unit_exams);
  }
}

function SubjectEvaluationComponent_ng_template_89_tr_14_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r29.examID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "General.Show"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_89_tr_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Exam.ExamSolvedOffline"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_89_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubjectEvaluationComponent_ng_template_89_tr_14_a_8_Template, 3, 4, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubjectEvaluationComponent_ng_template_89_tr_14_span_9_Template, 3, 3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r29 = ctx.$implicit;
    var i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r30 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r29.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r29.studentGrade, "/", exam_r29.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(exam_r29 == null ? null : exam_r29.isSolvedOffline));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", exam_r29 == null ? null : exam_r29.isSolvedOffline);
  }
}

function SubjectEvaluationComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_89_tr_14_Template, 10, 6, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.Exams == null ? null : ctx_r3.Exams.solvedExams == null ? null : ctx_r3.Exams.solvedExams.lesson_exams);
  }
}

function SubjectEvaluationComponent_ng_template_94_tr_14_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r35.examID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "General.Show"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_94_tr_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Exam.ExamSolvedOffline"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_94_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubjectEvaluationComponent_ng_template_94_tr_14_a_8_Template, 3, 4, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubjectEvaluationComponent_ng_template_94_tr_14_span_9_Template, 3, 3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r35 = ctx.$implicit;
    var i_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r36 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r35.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r35.studentGrade, "/", exam_r35.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(exam_r35 == null ? null : exam_r35.isSolvedOffline));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", exam_r35 == null ? null : exam_r35.isSolvedOffline);
  }
}

function SubjectEvaluationComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_94_tr_14_Template, 10, 6, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.Exams == null ? null : ctx_r4.Exams.solvedExams == null ? null : ctx_r4.Exams.solvedExams.quizzes);
  }
}

function SubjectEvaluationComponent_ng_template_105_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r41 = ctx.$implicit;
    var i_r42 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r42 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r41.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r41.studentGrade, "/", exam_r41.examGrade, "");
  }
}

function SubjectEvaluationComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_105_tr_12_Template, 7, 4, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.Exams == null ? null : ctx_r6.Exams.unSolvedExams == null ? null : ctx_r6.Exams.unSolvedExams.subject_exams);
  }
}

function SubjectEvaluationComponent_ng_template_110_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r44 = ctx.$implicit;
    var i_r45 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r45 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r44.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r44.studentGrade, "/", exam_r44.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r44.examID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "General.Show"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_110_tr_14_Template, 11, 8, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.Exams == null ? null : ctx_r7.Exams.unSolvedExams == null ? null : ctx_r7.Exams.unSolvedExams.unit_exams);
  }
}

function SubjectEvaluationComponent_ng_template_115_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r47 = ctx.$implicit;
    var i_r48 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r48 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r47.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r47.studentGrade, "/", exam_r47.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r47.examID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "General.Show"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_115_tr_14_Template, 11, 8, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.Exams == null ? null : ctx_r8.Exams.unSolvedExams == null ? null : ctx_r8.Exams.unSolvedExams.lesson_exams);
  }
}

function SubjectEvaluationComponent_ng_template_120_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r50 = ctx.$implicit;
    var i_r51 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r51 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r50.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r50.studentGrade, "/", exam_r50.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r50.examID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "General.Show"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_120_tr_14_Template, 11, 8, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Exam.Grade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.Exams == null ? null : ctx_r9.Exams.unSolvedExams == null ? null : ctx_r9.Exams.unSolvedExams.quizzes);
  }
}

function SubjectEvaluationComponent_ng_template_135_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r53 = ctx.$implicit;
    var i_r54 = ctx.index;
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r54 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r53.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r53.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r53.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r53.teacherUserId, "/teacher-subject/", material_r53 == null ? null : material_r53.teacher_subject, "/", ctx_r52.subjectId, "/material/", material_r53 == null ? null : material_r53.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, "General.Enter"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SubjectEvaluationComponent_ng_template_135_tr_17_Template, 14, 11, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "labels.Subject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 8, "labels.Teacher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.Materials == null ? null : ctx_r11.Materials.subscribedLectures == null ? null : ctx_r11.Materials.subscribedLectures.online);
  }
}

function SubjectEvaluationComponent_ng_template_140_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r56 = ctx.$implicit;
    var i_r57 = ctx.index;
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r57 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r56.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r56.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r56.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r56.teacherUserId, "/teacher-subject/", material_r56 == null ? null : material_r56.teacher_subject, "/", ctx_r55.subjectId, "/material/", material_r56 == null ? null : material_r56.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, "General.Enter"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SubjectEvaluationComponent_ng_template_140_tr_17_Template, 14, 11, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "labels.Subject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 8, "labels.Teacher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.Materials == null ? null : ctx_r12.Materials.subscribedLectures == null ? null : ctx_r12.Materials.subscribedLectures.offline);
  }
}

function SubjectEvaluationComponent_ng_template_151_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r59 = ctx.$implicit;
    var i_r60 = ctx.index;
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r60 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r59.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r59.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r59.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r59.teacherUserId, "/teacher-subject/", material_r59 == null ? null : material_r59.teacher_subject, "/", ctx_r58.subjectId, "/material/", material_r59 == null ? null : material_r59.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, "General.Enter"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SubjectEvaluationComponent_ng_template_151_tr_17_Template, 14, 11, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "labels.Subject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 8, "labels.Teacher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.Materials == null ? null : ctx_r14.Materials.unSubscribedLectures == null ? null : ctx_r14.Materials.unSubscribedLectures.online);
  }
}

function SubjectEvaluationComponent_ng_template_156_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r62 = ctx.$implicit;
    var i_r63 = ctx.index;
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r63 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r62.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r62.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r62.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r62.teacherUserId, "/teacher-subject/", material_r62 == null ? null : material_r62.teacher_subject, "/", ctx_r61.subjectId, "/material/", material_r62 == null ? null : material_r62.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, "General.Enter"), " ");
  }
}

function SubjectEvaluationComponent_ng_template_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SubjectEvaluationComponent_ng_template_156_tr_17_Template, 14, 11, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, "labels.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "labels.Subject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 8, "labels.Teacher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r15.Materials == null ? null : ctx_r15.Materials.unSubscribedLectures == null ? null : ctx_r15.Materials.unSubscribedLectures.offline);
  }
}

var _c0 = function _c0(a0) {
  return {
    width: a0
  };
};

var SubjectEvaluationComponent = /*#__PURE__*/function () {
  function SubjectEvaluationComponent(StudentServ, route, spinner) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubjectEvaluationComponent);

    this.StudentServ = StudentServ;
    this.route = route;
    this.spinner = spinner;
    this.achievments = 0;
    this.route.paramMap.subscribe(function (params) {
      _this.subjectId = Number(params.get("subjectId"));

      if (_this.subjectId) {
        _this.returnStudentSubjectEvaluation(_this.subjectId);

        _this.getSubjectMaterials();
      }
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubjectEvaluationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "returnStudentSubjectEvaluation",
    value: function returnStudentSubjectEvaluation(subjectId) {
      var _this2 = this;

      this.spinner.show();
      this.StudentServ.returnSubjectEvaluation(subjectId).subscribe(function (res) {
        _this2.Exams = res; //console.log("SubjectEvaluation", res);

        _this2.achievments = (res === null || res === void 0 ? void 0 : res.studentGrades) == 0 ? 0 : (res === null || res === void 0 ? void 0 : res.studentGrades) / (res === null || res === void 0 ? void 0 : res.examGrades) * 100;

        _this2.spinner.hide();
      });
    }
  }, {
    key: "getSubjectMaterials",
    value: function getSubjectMaterials() {
      var _this3 = this;

      this.spinner.show();
      this.StudentServ.getSubjectMaterials(this.subjectId).subscribe(function (res) {
        // console.log("SubjectMaterials", res);
        _this3.Materials = res;

        _this3.spinner.hide();
      });
    }
  }]);

  return SubjectEvaluationComponent;
}();

SubjectEvaluationComponent.ɵfac = function SubjectEvaluationComponent_Factory(t) {
  return new (t || SubjectEvaluationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService));
};

SubjectEvaluationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SubjectEvaluationComponent,
  selectors: [["app-subject-evaluation"]],
  decls: 158,
  vars: 99,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "col-12", "col-md-3"], [1, "card"], [1, "media"], [1, "media-body", "text-left"], [1, "mb-1", "primary"], [1, "primary"], [1, "media-right", "align-self-center"], [1, "ft-play", "primary", "font-large-2", "float-right"], [1, "progress", 2, "height", "4px"], ["role", "progressbar", "attr.aria-valuemax", "100", 1, "progress-bar", "bg-primary"], [1, "mb-1", "warning"], [1, "warning"], [1, "ft-book-open", "warning", "font-large-2", "float-right"], ["role", "progressbar", "attr.aria-valuemax", "100", 1, "progress-bar", "bg-warning"], [1, "mb-1", "success"], [1, "success"], [1, "ft-check", "success", "font-large-2", "float-right"], ["attr.aria-valuemax", "100", 1, "progress-bar", "bg-success"], [1, "mb-1", "danger"], [1, "danger"], [1, "ft-trending-up", "danger", "font-large-2", "float-right"], ["role", "progressbar", "attr.aria-valuemax", "100", 1, "progress-bar", "bg-danger"], [1, "col-12", "col-md-6"], ["mat-align-tabs", "start"], [3, "label"], [1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills"], ["Solved", "ngbNav"], ["ngbNavItem", "Subject"], ["ngbNavLink", "", 1, "nav-link", "rounded", "text-center"], ["ngbNavContent", ""], ["ngbNavItem", "Unit"], ["ngbNavItem", "Lesson"], ["ngbNavItem", "quizzes"], [1, "ml-4", 3, "ngbNavOutlet"], ["Unsolved", "ngbNav"], ["ngbNavItem", "Subject2"], ["ngbNavItem", "Unit2"], ["ngbNavItem", "Lesson2"], ["ngbNavItem", "quizzes2"], ["Subscribed", "ngbNav"], ["ngbNavItem", "Videos"], ["ngbNavItem", "Offline"], ["Unsubscribed", "ngbNav"], [1, "table", "text-center", "m-0", "table-sm"], [4, "ngFor", "ngForOf"], [1, "text-truncate"], ["class", "info p-0", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], [1, "info", "p-0", 3, "routerLink"], ["r", "", 1, "info", "p-0", 3, "routerLink"], [1, "ft-play", "font-medium-1", "mr-1"]],
  template: function SubjectEvaluationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h3", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-tab-group", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-tab", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "ul", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "li", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, SubjectEvaluationComponent_ng_template_79_Template, 15, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "li", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](83, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, SubjectEvaluationComponent_ng_template_84_Template, 15, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "li", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](88, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, SubjectEvaluationComponent_ng_template_89_Template, 15, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](93, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, SubjectEvaluationComponent_ng_template_94_Template, 15, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "mat-tab", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](97, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "ul", 29, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "li", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](104, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](105, SubjectEvaluationComponent_ng_template_105_Template, 13, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "li", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](109, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, SubjectEvaluationComponent_ng_template_110_Template, 15, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "li", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](114, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](115, SubjectEvaluationComponent_ng_template_115_Template, 15, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](119, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](120, SubjectEvaluationComponent_ng_template_120_Template, 15, 7, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "mat-tab-group", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "mat-tab", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](127, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "ul", 29, 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](134, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](135, SubjectEvaluationComponent_ng_template_135_Template, 18, 10, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "li", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](139, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](140, SubjectEvaluationComponent_ng_template_140_Template, 18, 10, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](141, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "mat-tab", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](143, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "ul", 29, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](150, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](151, SubjectEvaluationComponent_ng_template_151_Template, 18, 10, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "li", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](155, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](156, SubjectEvaluationComponent_ng_template_156_Template, 18, 10, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](74);

      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](100);

      var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](130);

      var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](146);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.Exams == null ? null : ctx.Exams.specificSubject == null ? null : ctx.Exams.specificSubject.subject_ar_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.Exams == null ? null : ctx.Exams.matCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 45, "Material.Videos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](91, _c0, (ctx.Exams == null ? null : ctx.Exams.matCount) + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", ctx.Exams == null ? null : ctx.Exams.matCount)("aria-valuemin", ctx.Exams == null ? null : ctx.Exams.matCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.Exams == null ? null : ctx.Exams.examCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 47, "Material.Exams"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](93, _c0, (ctx.Exams == null ? null : ctx.Exams.examCount) + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", ctx.Exams == null ? null : ctx.Exams.examCount)("aria-valuemin", ctx.Exams == null ? null : ctx.Exams.examCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.Exams == null ? null : ctx.Exams.studentExamCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 49, "Material.SolvedExams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](95, _c0, (ctx.Exams == null ? null : ctx.Exams.studentExamCount) + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", ctx.Exams == null ? null : ctx.Exams.studentExamCount)("aria-valuemin", ctx.Exams == null ? null : ctx.Exams.studentExamCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 51, ctx.achievments), " % ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 53, "Material.Achievments"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](97, _c0, ctx.achievments + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 55, ctx.achievments))("aria-valuemin", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 57, ctx.achievments));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 59, "Exam.SolvedExams"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 61, "Exam.SubjectExams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](83, 63, "Exam.UnitExams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](88, 65, "Exam.LessonExams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](93, 67, "Exam.Quizzes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](97, 69, "Exam.unSolvedExams"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](104, 71, "Exam.SubjectExams"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](109, 73, "Exam.UnitExams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](114, 75, "Exam.LessonExams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](119, 77, "Exam.Quizzes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](127, 79, "labels.SubscribedLectures"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](134, 81, "labels.VideosLecture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](139, 83, "labels.OfflineLecture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](143, 85, "labels.UnsubscribedLectures"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](150, 87, "labels.VideosLecture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](155, 89, "labels.OfflineLecture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r13);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_3__.RoundPipe],
  styles: [".media-body[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  padding: 3px;\n  margin-bottom: 5px;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  color: #975aff;\n  background-color: transparent;\n  border-bottom: 1px solid;\n  border-radius: 0;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3QtZXZhbHVhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7QUFJRiIsImZpbGUiOiJzdWJqZWN0LWV2YWx1YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaWEtYm9keSA+IGg1IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY2FyZCAubWVkaWEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjOTc1YWZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 1709:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/leader-board/leader-board.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderBoardComponent": function() { return /* binding */ LeaderBoardComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





var LeaderBoardComponent = /*#__PURE__*/function () {
  function LeaderBoardComponent() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeaderBoardComponent);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LeaderBoardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return LeaderBoardComponent;
}();

LeaderBoardComponent.ɵfac = function LeaderBoardComponent_Factory(t) {
  return new (t || LeaderBoardComponent)();
};

LeaderBoardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LeaderBoardComponent,
  selectors: [["app-leader-board"]],
  decls: 87,
  vars: 3,
  consts: [[1, "card"], [1, "mt", "pr-10", "scrolled350"], [1, "media", "pt-0", "pb-2", "mt-20"], ["src", "assets/img/portrait/small/avatar-s-20.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], [1, "media-body"], [1, "font-medium-1", "mb-0"], [1, "grey", "font-small-3", "m-0"], [1, "badge", "bg-light-info"], [1, "media", "py-2"], ["src", "assets/img/portrait/small/avatar-s-15.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-7.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-6.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-16.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-25.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"]],
  template: function LeaderBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Jessica Rice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Jacob Rios");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "HTML Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Russell Delgado");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Database Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Sara McDonald");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Janet Lucas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Project Manger");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Mark Carter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "HTML Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Sara McDonald");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Janet Lucas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Project Manger");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Mark Carter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "HTML Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " First");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "Material.LeaderBoard"));
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXItYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 77786:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/my-appretiation/my-appretiation.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAppretiationComponent": function() { return /* binding */ MyAppretiationComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 11961);




var MyAppretiationComponent = /*#__PURE__*/function () {
  function MyAppretiationComponent() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyAppretiationComponent);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MyAppretiationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return MyAppretiationComponent;
}();

MyAppretiationComponent.ɵfac = function MyAppretiationComponent_Factory(t) {
  return new (t || MyAppretiationComponent)();
};

MyAppretiationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MyAppretiationComponent,
  selectors: [["app-my-appretiation"]],
  decls: 68,
  vars: 0,
  consts: [[1, "card"], [1, "mt", "pr-10", "scrolled350"], [1, "media", "pt-0", "pb-2", "mt-20"], ["src", "assets/img/portrait/small/avatar-s-20.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], [1, "media-body"], [1, "font-medium-1", "mb-0"], [1, "grey", "font-small-3", "m-0"], [1, "media", "py-2"], ["src", "assets/img/portrait/small/avatar-s-15.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-7.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-6.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-16.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-25.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"]],
  template: function MyAppretiationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "My Appretiation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Jessica Rice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Jacob Rios");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "HTML Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Russell Delgado");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Database Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Sara McDonald");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Janet Lucas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Project Manger");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Mark Carter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "HTML Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Sara McDonald");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Janet Lucas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Project Manger");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Mark Carter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "HTML Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent],
  styles: [".mt[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.pr-10[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFwcHJldGlhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6Im15LWFwcHJldGlhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnByLTEwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 24133:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/refund-lecture/refund-lecture.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundLectureComponent": function() { return /* binding */ RefundLectureComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_admin_services_Admin_searchStudents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/Admin/searchStudents.service */ 84759);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function RefundLectureComponent_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var stage_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", stage_r10.stage_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", stage_r10.stage_name, " ");
  }
}

function RefundLectureComponent_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function RefundLectureComponent_mat_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var year_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", year_r11.educational_year_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", year_r11.educational_year_name, " ");
  }
}

function RefundLectureComponent_mat_error_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function RefundLectureComponent_mat_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", subject_r12.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subject_r12.Text, " ");
  }
}

function RefundLectureComponent_mat_error_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function RefundLectureComponent_mat_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", teacher_r13.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", teacher_r13.Text, " ");
  }
}

function RefundLectureComponent_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function RefundLectureComponent_mat_option_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lec_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lec_r14.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", lec_r14.Text, " ");
  }
}

function RefundLectureComponent_mat_error_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

var RefundLectureComponent = /*#__PURE__*/function () {
  function RefundLectureComponent(fb, route, GeneralService, SearchStudentsService, spinner, toastr) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RefundLectureComponent);

    this.fb = fb;
    this.route = route;
    this.GeneralService = GeneralService;
    this.SearchStudentsService = SearchStudentsService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.Stages = [];
    this.Years = [];
    this.Subjects = [];
    this.Teachers = [];
    this.Lectures = [];
    route.paramMap.subscribe(function (params) {
      _this.userId = Number(params.get("userId"));
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RefundLectureComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getUserDataRefundLecture();
      this.getEduStagesList();
      this.myForm = this.fb.group({
        userId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        stageId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        yearId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        subjectId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        teacherId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        RefundedLectureId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
      });
      this.FormCtrls.userId.setValue(this.userId);
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getUserDataRefundLecture",
    value: function getUserDataRefundLecture() {
      var _this2 = this;

      this.spinner.show();
      this.SearchStudentsService.getUserDataRefundLecture(this.userId).subscribe(function (res) {
        if (res.model.userId == _this2.userId) {
          _this2.user = res.model.user;
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "refundLecture",
    value: function refundLecture() {
      var _this3 = this;

      if (this.myForm.valid) {
        this.spinner.show();
        var data = {
          userId: this.userId,
          RefundedLectureId: this.FormCtrls.RefundedLectureId.value
        };
        this.SearchStudentsService.refundLecture(data).subscribe(function (res) {
          if (res.returnString == "Success") {
            _this3.getUserDataRefundLecture();

            _this3.myForm.reset();

            _this3.toastr.success("تم إسترجاع المحاضرة بنجاح");
          } else {
            _this3.toastr.warning(res.returnString);
          }

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "getEduStagesList",
    value: function getEduStagesList() {
      var _this4 = this;

      this.GeneralService.getAllEduStagesList().subscribe(function (res) {
        _this4.Stages = res;
      });
    }
  }, {
    key: "getEduYearByStageId",
    value: function getEduYearByStageId(stageId) {
      var _this5 = this;

      this.Years = [];
      this.Subjects = [];
      this.Teachers = [];
      this.Lectures = [];
      this.FormCtrls.yearId.setValue("");
      this.FormCtrls.subjectId.setValue("");
      this.FormCtrls.teacherId.setValue("");
      this.FormCtrls.RefundedLectureId.setValue("");

      if (stageId) {
        this.GeneralService.getEduYearByStageId(stageId).subscribe(function (res) {
          _this5.Years = res;
        });
      }
    }
  }, {
    key: "getSubjectsByYearId",
    value: function getSubjectsByYearId(YearId) {
      var _this6 = this;

      this.Subjects = [];
      this.Teachers = [];
      this.Lectures = [];
      this.FormCtrls.subjectId.setValue("");
      this.FormCtrls.teacherId.setValue("");
      this.FormCtrls.RefundedLectureId.setValue("");

      if (YearId) {
        this.GeneralService.getSubjectsByYearId(YearId).subscribe(function (res) {
          _this6.Subjects = res; //console.log(res)
        });
      }
    }
  }, {
    key: "getTeachersBySubId",
    value: function getTeachersBySubId(subjectId) {
      var _this7 = this;

      this.Teachers = [];
      this.Lectures = [];
      this.FormCtrls.teacherId.setValue("");
      this.FormCtrls.RefundedLectureId.setValue("");

      if (subjectId) {
        this.GeneralService.getTeachersBySubjectId(subjectId).subscribe(function (res) {
          _this7.Teachers = res; //console.log(res)
        });
      }
    }
  }, {
    key: "getUserBoughtedMaterials",
    value: function getUserBoughtedMaterials(teacherId) {
      var _this8 = this;

      this.Lectures = [];
      this.FormCtrls.RefundedLectureId.setValue("");

      if (teacherId) {
        this.GeneralService.getUserBoughtedMaterials({
          teacherUserId: teacherId,
          subjectId: this.FormCtrls.subjectId.value,
          notStudent: true,
          studentUserId: this.userId
        }).subscribe(function (res) {
          _this8.Lectures = res; // console.log('Materials', res);
        });
      }
    }
  }]);

  return RefundLectureComponent;
}();

RefundLectureComponent.ɵfac = function RefundLectureComponent_Factory(t) {
  return new (t || RefundLectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_Admin_searchStudents_service__WEBPACK_IMPORTED_MODULE_3__.SearchStudentsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
};

RefundLectureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RefundLectureComponent,
  selectors: [["app-refund-lecture"]],
  decls: 90,
  vars: 63,
  consts: [[1, "row"], [1, "col-12"], [1, "example-card"], [1, "form-container", "form-horizontal", 3, "formGroup"], [1, "form-group", "row"], [1, "col-sm-3"], [1, "primary"], ["disabled", "", "readonly", "", 1, "form-control", "bg-light-primary", 3, "value"], [1, "row", "f-w"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["formControlName", "stageId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "yearId", 3, "selectionChange"], ["formControlName", "subjectId", 3, "selectionChange"], ["formControlName", "teacherId", 3, "selectionChange"], ["formControlName", "RefundedLectureId"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [3, "value"]],
  template: function RefundLectureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function RefundLectureComponent_Template_mat_select_selectionChange_36_listener() {
        return ctx.getEduYearByStageId(ctx.FormCtrls.stageId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, RefundLectureComponent_mat_option_40_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, RefundLectureComponent_mat_error_41_Template, 3, 3, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function RefundLectureComponent_Template_mat_select_selectionChange_47_listener() {
        return ctx.getSubjectsByYearId(ctx.FormCtrls.yearId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, RefundLectureComponent_mat_option_51_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, RefundLectureComponent_mat_error_52_Template, 3, 3, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function RefundLectureComponent_Template_mat_select_selectionChange_58_listener() {
        return ctx.getTeachersBySubId(ctx.FormCtrls.subjectId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, RefundLectureComponent_mat_option_62_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, RefundLectureComponent_mat_error_63_Template, 3, 3, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function RefundLectureComponent_Template_mat_select_selectionChange_69_listener() {
        return ctx.getUserBoughtedMaterials(ctx.FormCtrls.teacherId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, RefundLectureComponent_mat_option_73_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, RefundLectureComponent_mat_error_74_Template, 3, 3, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](79, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](83, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, RefundLectureComponent_mat_option_84_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, RefundLectureComponent_mat_error_85_Template, 3, 3, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "mat-card-actions", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RefundLectureComponent_Template_button_click_87_listener() {
        return ctx.refundLecture();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](89, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 31, "labels.RefundLecture"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 33, "labels.Name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.ar_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 35, "labels.Email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.account_email);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 37, "labels.Mobile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 39, "labels.Credits"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.credits);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 41, "labels.Stage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 43, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Stages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.stageId.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 45, "labels.Year"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 47, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Years);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.yearId.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](57, 49, "Material.Subject"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 51, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.subjectId.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](68, 53, "Material.Teacher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](72, 55, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.teacherId.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](79, 57, "Material.Lecture"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](83, 59, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Lectures);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.RefundedLectureId.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](89, 61, "General.Refund"), " ");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtbGVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 15054:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/user-balance-details/user-balance-details.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBalanceDetailsComponent": function() { return /* binding */ UserBalanceDetailsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_admin_services_Admin_searchStudents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/Admin/searchStudents.service */ 84759);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth/auth.service */ 16256);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/NewDate.pipe */ 3865);



















function UserBalanceDetailsComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r32 + 1);
  }
}

function UserBalanceDetailsComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "NewDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ele_r33 == null ? null : ele_r33.Date));
  }
}

function UserBalanceDetailsComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ele_r34 == null ? null : ele_r34.amount, " .LE");
  }
}

function UserBalanceDetailsComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Payment Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r35 == null ? null : ele_r35.payment_method);
  }
}

function UserBalanceDetailsComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r36 == null ? null : ele_r36.order_status);
  }
}

function UserBalanceDetailsComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Fawry Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_54_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ele_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ele_r37 == null ? null : ele_r37.payment_gateway_reference_id, " ");
  }
}

function UserBalanceDetailsComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserBalanceDetailsComponent_td_54_ng_container_1_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ele_r37 == null ? null : ele_r37.payment_gateway_reference_id) != "0");
  }
}

function UserBalanceDetailsComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
  }
}

function UserBalanceDetailsComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
  }
}

function UserBalanceDetailsComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r41 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r41 + 1);
  }
}

function UserBalanceDetailsComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Lecture Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r42 == null ? null : ele_r42.itemTypeArName);
  }
}

function UserBalanceDetailsComponent_th_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Lecture Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r43 == null ? null : ele_r43.partName);
  }
}

function UserBalanceDetailsComponent_th_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r44 == null ? null : ele_r44.teacherName);
  }
}

function UserBalanceDetailsComponent_th_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r45 == null ? null : ele_r45.subjectName);
  }
}

function UserBalanceDetailsComponent_th_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r46 == null ? null : ele_r46.amount);
  }
}

function UserBalanceDetailsComponent_th_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Payment Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ele_r47 == null ? null : ele_r47.paymentMethodName, " ");
  }
}

function UserBalanceDetailsComponent_th_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "NewDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ele_r48 == null ? null : ele_r48.Date));
  }
}

function UserBalanceDetailsComponent_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
  }
}

function UserBalanceDetailsComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
  }
}

var _c0 = function _c0() {
  return [10];
};

var UserBalanceDetailsComponent = /*#__PURE__*/function () {
  function UserBalanceDetailsComponent(route, SearchStudentsService, spinner, authserv, toastr) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserBalanceDetailsComponent);

    this.route = route;
    this.SearchStudentsService = SearchStudentsService;
    this.spinner = spinner;
    this.authserv = authserv;
    this.toastr = toastr;
    this.EduCompId = null; //Payments: IUserPaymentsVM[] = [];
    // PaymentsHistory: IUserPaymentsHistoryVM[] = [];

    this.displayedColumnsPayments = ["#", "date", "amount", "paymentMethod", "status", "payment_gateway_reference_id"];
    this.displayedColumnsPaymentsHistory = ["#", "lectureType", "lectureName", "teacher", "subject", "price", "paymentMethod", "date"];
    this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.QueryList();
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.QueryList(); //Pagination

    this.PaymentsTotalCount = 0;
    this.HistoryTotalCount = 0;
    route.paramMap.subscribe(function (params) {
      _this.userId = Number(params.get("userId"));
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserBalanceDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.getStudentBalance();
      this.getStudentPayments(1);
      this.getStudentPaymentsHistory(1);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getStudentBalance();

        _this2.getStudentPayments(1);

        _this2.getStudentPaymentsHistory(1);
      });
      this.authserv.branchId.subscribe(function (e) {});
    }
  }, {
    key: "getStudentBalance",
    value: function getStudentBalance() {
      var _this3 = this;

      this.spinner.show();
      this.SearchStudentsService.getStudentBalance(this.userId, this.EduCompId).subscribe(function (res) {
        _this3.userBalance = res.model;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "getStudentPayments",
    value: function getStudentPayments(p) {
      var _this4 = this;

      this.spinner.show();
      this.SearchStudentsService.getStudentPayments(this.EduCompId, p, this.userId).subscribe(function (res) {
        _this4.dataSourcePayments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res.userPayments);
        _this4.dataSourcePayments.paginator = _this4.paginator[0];
        _this4.dataSourcePayments.sort = _this4.sort[0];
        _this4.PaymentsTotalCount = res.totalCount;

        _this4.spinner.hide();
      });
    }
  }, {
    key: "getStudentPaymentsHistory",
    value: function getStudentPaymentsHistory(p) {
      var _this5 = this;

      this.spinner.show();
      this.SearchStudentsService.getStudentPaymentsHistory(this.EduCompId, p, this.userId).subscribe(function (res) {
        _this5.dataSourcePaymentsHistory = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res.userPayments);
        _this5.dataSourcePaymentsHistory.paginator = _this5.paginator[1];
        _this5.dataSourcePaymentsHistory.sort = _this5.sort[1];
        _this5.HistoryTotalCount = res.totalCount;

        _this5.spinner.hide();
      });
    }
  }]);

  return UserBalanceDetailsComponent;
}();

UserBalanceDetailsComponent.ɵfac = function UserBalanceDetailsComponent_Factory(t) {
  return new (t || UserBalanceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_searchStudents_service__WEBPACK_IMPORTED_MODULE_2__.SearchStudentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
};

UserBalanceDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UserBalanceDetailsComponent,
  selectors: [["app-user-balance-details"]],
  viewQuery: function UserBalanceDetailsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 93,
  vars: 15,
  consts: [[1, "row"], [1, "col-12", "col-md-4"], [1, "card", "card-inverse", "bg-warning"], [1, "media"], [1, "media-body", "text-left"], [1, "card-text"], [1, "card", "card-inverse", "bg-danger"], [1, "card", "card-inverse", "bg-primary"], [1, "col-12"], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "amount"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "status"], ["matColumnDef", "payment_gateway_reference_id"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "length", "page"], ["matColumnDef", "lectureType"], ["matColumnDef", "lectureName"], ["matColumnDef", "teacher"], ["matColumnDef", "subject"], ["matColumnDef", "price"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function UserBalanceDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Current Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-card", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Total recharge balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Recharge History");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](37, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, UserBalanceDetailsComponent_th_38_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, UserBalanceDetailsComponent_td_39_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](40, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, UserBalanceDetailsComponent_th_41_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, UserBalanceDetailsComponent_td_42_Template, 3, 3, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](43, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, UserBalanceDetailsComponent_th_44_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, UserBalanceDetailsComponent_td_45_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](46, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, UserBalanceDetailsComponent_th_47_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, UserBalanceDetailsComponent_td_48_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](49, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, UserBalanceDetailsComponent_th_50_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, UserBalanceDetailsComponent_td_51_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](52, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, UserBalanceDetailsComponent_th_53_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, UserBalanceDetailsComponent_td_54_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, UserBalanceDetailsComponent_tr_55_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, UserBalanceDetailsComponent_tr_56_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-paginator", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function UserBalanceDetailsComponent_Template_mat_paginator_page_57_listener($event) {
        return ctx.getStudentPayments($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Payments History");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](66, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, UserBalanceDetailsComponent_th_67_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, UserBalanceDetailsComponent_td_68_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](69, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, UserBalanceDetailsComponent_th_70_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, UserBalanceDetailsComponent_td_71_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](72, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, UserBalanceDetailsComponent_th_73_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, UserBalanceDetailsComponent_td_74_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](75, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, UserBalanceDetailsComponent_th_76_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, UserBalanceDetailsComponent_td_77_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](78, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, UserBalanceDetailsComponent_th_79_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, UserBalanceDetailsComponent_td_80_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](81, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, UserBalanceDetailsComponent_th_82_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, UserBalanceDetailsComponent_td_83_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](84, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, UserBalanceDetailsComponent_th_85_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, UserBalanceDetailsComponent_td_86_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](87, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, UserBalanceDetailsComponent_th_88_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, UserBalanceDetailsComponent_td_89_Template, 3, 3, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, UserBalanceDetailsComponent_tr_90_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, UserBalanceDetailsComponent_tr_91_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-paginator", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function UserBalanceDetailsComponent_Template_mat_paginator_page_92_listener($event) {
        return ctx.getStudentPaymentsHistory($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.userBalance == null ? null : ctx.userBalance.ActualBalance, " LE");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.userBalance == null ? null : ctx.userBalance.Expenses, " LE");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.userBalance == null ? null : ctx.userBalance.Balance, " LE");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSourcePayments);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsPayments);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsPayments);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0))("length", ctx.PaymentsTotalCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSourcePaymentsHistory);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsPaymentsHistory);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsPaymentsHistory);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0))("length", ctx.HistoryTotalCount);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
  pipes: [_pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_4__.NewDatePipe],
  styles: [".media-body[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYmFsYW5jZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUYiLCJmaWxlIjoidXNlci1iYWxhbmNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaWEtYm9keSA+IGg1IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY2FyZCAubWVkaWEge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 18515:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/user-data/user-data.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataComponent": function() { return /* binding */ UserDataComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function UserDataComponent_mat_hint_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function UserDataComponent_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserDataComponent_mat_hint_28_span_1_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.ar_name.errors == null ? null : ctx_r1.FormCtrls.ar_name.errors.required) || (ctx_r1.FormCtrls.ar_name.errors == null ? null : ctx_r1.FormCtrls.ar_name.errors.whiteSpace));
  }
}

function UserDataComponent_mat_hint_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_35_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "labels.MobileLength"), " ");
  }
}

function UserDataComponent_mat_hint_35_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "labels.NumberMustStartWith"), " ");
  }
}

function UserDataComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserDataComponent_mat_hint_35_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, UserDataComponent_mat_hint_35_span_2_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UserDataComponent_mat_hint_35_span_3_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.required) || (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.whiteSpace) || (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.minlength) || (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.startsWith);
  }
}

function UserDataComponent_mat_hint_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Enter correct Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserDataComponent_mat_hint_42_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, UserDataComponent_mat_hint_42_span_2_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.account_email.errors == null ? null : ctx_r3.FormCtrls.account_email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.account_email.errors == null ? null : ctx_r3.FormCtrls.account_email.errors.email);
  }
}

function UserDataComponent_mat_hint_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserDataComponent_mat_hint_49_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrls.account_password.errors == null ? null : ctx_r4.FormCtrls.account_password.errors.required);
  }
}

function UserDataComponent_mat_hint_56_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserDataComponent_mat_hint_56_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrls.newPassword.errors == null ? null : ctx_r5.FormCtrls.newPassword.errors.required);
  }
}

function UserDataComponent_mat_hint_63_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " New Password and Confirm Password not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserDataComponent_mat_hint_63_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.FormCtrls.ConfirmPassword.errors == null ? null : ctx_r6.FormCtrls.ConfirmPassword.errors.mustMatch);
  }
}

var UserDataComponent = /*#__PURE__*/function () {
  function UserDataComponent(fb, toastr, fileService, GeneralServ, spinner) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserDataComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.fileService = fileService;
    this.GeneralServ = GeneralServ;
    this.spinner = spinner;
    this.submitted = false;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserDataComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.returnProfile();
      this.myForm = this.fb.group({
        ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^[a-zA-Z \u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]+$/), app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9_ \-\(\)\S*$]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(8), app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.startsWith]],
        account_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
        account_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)]],
        newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)]],
        ConfirmPassword: [null],
        profilePicture: [""]
      }, {
        validator: app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.mustMatch("newPassword", "ConfirmPassword")
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "returnProfile",
    value: function returnProfile() {
      var _this = this;

      this.spinner.show();
      this.GeneralServ.returnProfile().subscribe(function (res) {
        var _a;

        _this.myForm.patchValue(res.user);

        _this.FormCtrls.profilePicture.setValue(res.picturePath);

        _this.picturePath = (_a = _this.fileService.previewPicture(res.picturePath)) !== null && _a !== void 0 ? _a : app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__.AppAssets.userAvatar;

        _this.FormCtrls.account_password.setValue("");

        _this.username = res.user.ar_name;

        _this.spinner.hide();
      });
    }
  }, {
    key: "editProfile",
    value: function editProfile() {
      var _this2 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        this.spinner.show();
        this.GeneralServ.editProfile(this.myForm.value).subscribe(function (res) {
          if (res.returnValue == 1) {
            _this2.toastr.success("تم التعديل");

            _this2.returnProfile();
          } else if (res.returnValue == 22) {
            _this2.toastr.error("يجب إدخال  كلمه المرور الصحيحة");
          }

          _this2.submitted = false;

          _this2.spinner.hide();
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this3 = this;

      var fileName = event.target.files[0].name;
      var fileSize = event.target.files[0].size;
      var fileType = event.target.files[0].type;
      var LastModified = event.target.files[0].lastModified;
      var LastModifiedDate = event.target.files[0].lastModifiedDate;

      if (event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = function (event) {
          var fileReder = event.target.result;
          var data = {
            FileAsBase64: fileReder,
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };

          _this3.FormCtrls.profilePicture.setValue(data);

          _this3.picturePath = fileReder;
        };
      }
    }
  }]);

  return UserDataComponent;
}();

UserDataComponent.ɵfac = function UserDataComponent_Factory(t) {
  return new (t || UserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService));
};

UserDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UserDataComponent,
  selectors: [["app-user-data"]],
  decls: 68,
  vars: 36,
  consts: [[1, "row"], [1, "col-12"], [1, "example-card"], [1, "media"], ["alt", "avatar", "height", "64", "width", "64", 1, "users-avatar-shadow", "avatar", "mr-3", "rounded-circle", 3, "src"], [1, "media-body"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-start", "px-0", "mb-sm-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn-sm", "bg-light-primary", "mb-1", "mb-sm-0", 3, "click"], ["hidden", "", "type", "file", "accept", "image/*", "id", "file", 3, "change"], ["fileInput", ""], [1, "form-container", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "ar_name", "autocomplete", "new-password"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "mobile"], ["matInput", "", "type", "email", "formControlName", "account_email", "autocomplete", "new-password"], ["matInput", "", "type", "password", "formControlName", "account_password", "autocomplete", "new-password"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "ConfirmPassword"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"]],
  template: function UserDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserDataComponent_Template_button_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);

        return _r0.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserDataComponent_Template_input_change_18_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, UserDataComponent_mat_hint_28_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, UserDataComponent_mat_hint_35_Template, 4, 3, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, UserDataComponent_mat_hint_42_Template, 3, 2, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, UserDataComponent_mat_hint_49_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, UserDataComponent_mat_hint_56_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, UserDataComponent_mat_hint_63_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-card-actions", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserDataComponent_Template_button_click_65_listener() {
        return ctx.editProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](67, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 18, "Navbar.EditProfile"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 20, "labels.ProfilePicture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 22, "labels.Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ar_name.invalid && (ctx.FormCtrls.ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 24, "labels.Mobile"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.mobile.invalid && (ctx.FormCtrls.mobile.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 26, "labels.Email"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.account_email.invalid && (ctx.FormCtrls.account_email.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 28, "labels.Password"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.account_password.invalid && (ctx.FormCtrls.account_password.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](54, 30, "labels.NewPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.newPassword.invalid && (ctx.FormCtrls.newPassword.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 32, "labels.ConfirmPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ConfirmPassword.invalid && (ctx.FormCtrls.ConfirmPassword.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](67, 34, "General.Save"), " ");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 21446:
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/zoom-helping-requests/create-request-data/create-request-data.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateRequestDataComponent": function() { return /* binding */ CreateRequestDataComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_student_services_helping_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/student/services/helping-request.service */ 75926);
/* harmony import */ var _dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














var CreateRequestDataComponent = /*#__PURE__*/function () {
  function CreateRequestDataComponent(data, dialogRef, fb, datePipe, spinner, toastr, _helpingRequestService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateRequestDataComponent);

    this.data = data;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.datePipe = datePipe;
    this.spinner = spinner;
    this.toastr = toastr;
    this._helpingRequestService = _helpingRequestService;
    this.submitted = false;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateRequestDataComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.form = this.fb.group({
        RequestId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        DateOfZoomMeeting: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        link: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
      });
      this.form.patchValue(this.data);
      this.FormCtrls.RequestId.setValue(this.data.id);
      this.FormCtrls.DateOfZoomMeeting.setValue(this.mapTime(this.data.DateOfZoomMeeting));
      console.log("data", this.data);
      console.log("FormCtrls", this.form.value);
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.form.controls;
    }
  }, {
    key: "submite",
    value: function submite() {
      var _this = this;

      this.submitted = true;

      if (this.form.valid) {
        this.spinner.show();
        var body = {
          RequestId: this.FormCtrls.RequestId.value,
          DateOfZoomMeeting: this.FormCtrls.DateOfZoomMeeting.value,
          link: this.FormCtrls.link.value
        };

        this._helpingRequestService.createMeetingLink(body).subscribe(function (res) {
          if (res.returnValue == 1) {
            _this.toastr.success("تم حفظ البيانات");

            _this.dialogRef.close(true);
          }

          _this.spinner.hide();
        });
      }
    }
  }, {
    key: "mapTime",
    value: function mapTime(time) {
      if (time) {
        var _time = time.toString().split("T");

        var timeParts = _time[1].split(":");

        return "".concat(timeParts[0], ":").concat(timeParts[1]);
      }
    }
  }]);

  return CreateRequestDataComponent;
}();

CreateRequestDataComponent.ɵfac = function CreateRequestDataComponent_Factory(t) {
  return new (t || CreateRequestDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_student_services_helping_request_service__WEBPACK_IMPORTED_MODULE_2__.HelpingRequestService));
};

CreateRequestDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CreateRequestDataComponent,
  selectors: [["app-create-request-data"]],
  decls: 19,
  vars: 15,
  consts: [["mat-dialog-title", "", 1, "primary-color"], ["mat-dialog-content", ""], [3, "formGroup"], [1, "row"], [1, "col-md-6", "col-12"], ["label", "labels.zoomLink", 3, "control", "submitted"], ["type", "time", "label", "labels.Time", 3, "control", "submitted"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], ["mat-raised-button", "", 1, "btn", "btn-primary", "float-right", 3, "click"]],
  template: function CreateRequestDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateRequestDataComponent_Template_button_click_15_listener() {
        return ctx.submite();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 9, "labels.requestData"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.FormCtrls.link)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.FormCtrls.DateOfZoomMeeting)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 11, "General.Close"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 13, "General.Save"), " ");
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcmVxdWVzdC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 9829:
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/zoom-helping-requests/helping-requests/helping-requests.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpingRequestsComponent": function() { return /* binding */ HelpingRequestsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _create_request_data_create_request_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-request-data/create-request-data.component */ 21446);
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/confirm-dialog/confirm-dialog.component */ 89782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_helping_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/student/services/helping-request.service */ 75926);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/Time.pipe */ 45318);



























function HelpingRequestsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.requestId"), " ");
  }
}

function HelpingRequestsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ele_r12.id, " ");
  }
}

function HelpingRequestsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Status"), " ");
  }
}

function HelpingRequestsComponent_td_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Pendeing"), " ");
  }
}

function HelpingRequestsComponent_td_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.availableNow"), " ");
  }
}

function HelpingRequestsComponent_td_40_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0633\u0648\u0641 \u064A\u062A\u0645 \u0625\u062A\u0627\u062D\u0629 \u0627\u0644\u0631\u0627\u0628\u0637 \u0628\u0639\u062F \u0642\u0644\u064A\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function HelpingRequestsComponent_td_40_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0633\u0648\u0641 \u064A\u062A\u0645 \u0639\u0642\u062F \u0627\u0644\u0627\u062C\u0646\u0645\u0627\u0639 \u0628\u0639\u062F \u0642\u0644\u064A\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function HelpingRequestsComponent_td_40_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.meetingDone"), " ");
  }
}

function HelpingRequestsComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HelpingRequestsComponent_td_40_span_1_Template, 3, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HelpingRequestsComponent_td_40_span_2_Template, 3, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HelpingRequestsComponent_td_40_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HelpingRequestsComponent_td_40_span_4_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, HelpingRequestsComponent_td_40_span_5_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r13 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ele_r13.link == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ele_r13.canJoin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ele_r13.link != null && !ele_r13.canJoin && !ele_r13.isDone && ctx_r4.authService.isStudent());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ele_r13.link != null && !ele_r13.canJoin && !ele_r13.isDone && !ctx_r4.authService.isStudent());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ele_r13.isDone);
  }
}

function HelpingRequestsComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Time"), " ");
  }
}

function HelpingRequestsComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r19 = ctx.$implicit;
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ele_r19.DateOfZoomMeeting)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "\u0644\u0645 \u064A\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0648\u0642\u062A", " ");
  }
}

function HelpingRequestsComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, " actions"), " ");
  }
}

function HelpingRequestsComponent_td_46_ng_container_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HelpingRequestsComponent_td_46_ng_container_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      var ele_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r24.confirmClose(ele_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0637\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function HelpingRequestsComponent_td_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HelpingRequestsComponent_td_46_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      var ele_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r27.createMeetingLink(ele_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " \u0627\u0636\u0627\u0641\u0647 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HelpingRequestsComponent_td_46_ng_container_1_button_3_Template, 2, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ele_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ele_r20.link != null && !ele_r20.isDone && ele_r20.canJoin);
  }
}

function HelpingRequestsComponent_td_46_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HelpingRequestsComponent_td_46_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      var ele_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r34.joinMeeting(ele_r20.link);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Joinmeeting"), " ");
  }
}

function HelpingRequestsComponent_td_46_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "--");
  }
}

function HelpingRequestsComponent_td_46_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HelpingRequestsComponent_td_46_ng_container_2_button_1_Template, 3, 3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HelpingRequestsComponent_td_46_ng_container_2_ng_template_2_Template, 1, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

    var ele_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ele_r20.canJoin)("ngIfElse", _r32);
  }
}

function HelpingRequestsComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HelpingRequestsComponent_td_46_ng_container_1_Template, 4, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HelpingRequestsComponent_td_46_ng_container_2_Template, 4, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.authService.isStudent());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.authService.isStudent());
  }
}

function HelpingRequestsComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 41);
  }
}

function HelpingRequestsComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 42);
  }
}

function HelpingRequestsComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
  }
}

var _c0 = function _c0() {
  return [10];
};

var HelpingRequestsComponent = /*#__PURE__*/function () {
  function HelpingRequestsComponent(_helpingRequestService, authService, dialog, spinner, fb, datePipe, languageService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HelpingRequestsComponent);

    this._helpingRequestService = _helpingRequestService;
    this.authService = authService;
    this.dialog = dialog;
    this.spinner = spinner;
    this.fb = fb;
    this.datePipe = datePipe;
    this.languageService = languageService;
    this.displayedColumns = [//	"#",
    "requestId", // "subject",
    "time", "status", "actions"];
    this.curr_page = 1;
    this.currentTime = datePipe.transform(new Date(), "yyyy-MM-ddThh:mm:ss");
    console.log(this.currentTime);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HelpingRequestsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.form = this.fb.group({
        page: [this.curr_page, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        requestId: [null],
        teacherSubjectId: [null]
      });
      this.getAllRequests(this.curr_page);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
      }
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "getAllRequests",
    value: function getAllRequests(page) {
      var _this = this;

      var body = {
        page: page,
        requestId: this.form.get("requestId").value,
        teacherSubjectId: this.form.get("teacherSubjectId").value
      };
      this.spinner.show();
      this.curr_page = page;

      this._helpingRequestService.getAllRequests(body).subscribe(function (res) {
        if (res) {
          console.log(res);
          _this.totalItems = res.itemCounts;
          _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(res.zoom_Requests);
          res.zoom_Requests.map(function (req) {
            if (req.DateOfZoomMeeting != null && !req.isDone && new Date(req.DateOfZoomMeeting).getTime() <= new Date().getTime()) {
              req.canJoin = true;
            } else {
              req.canJoin = false;
            }
          });
        }

        _this.spinner.hide();
      });
    }
  }, {
    key: "closeZoomRequest",
    value: function closeZoomRequest(request) {
      var _this2 = this;

      this.spinner.show();

      this._helpingRequestService.closeZoomRequest(request.id).subscribe(function (res) {
        if (res) {
          _this2.getAllRequests(_this2.curr_page);
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "confirmClose",
    value: function confirmClose(request) {
      var _this3 = this;

      this.dialog.open(_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
        data: {
          btn: "General.Confirm",
          title: " إغلاق الطلب",
          msg: "\u0647\u0644 \u0627\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0637\u0644\u0628 \u0631\u0642\u0645 (".concat(request.id, ")")
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this3.closeZoomRequest(request);
      });
    }
  }, {
    key: "createMeetingLink",
    value: function createMeetingLink(request) {
      var _this4 = this;

      this.dialog.open(_create_request_data_create_request_data_component__WEBPACK_IMPORTED_MODULE_2__.CreateRequestDataComponent, {
        data: request,
        width: "750px"
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this4.getAllRequests(_this4.curr_page);
      });
    }
  }, {
    key: "joinMeeting",
    value: function joinMeeting(zoomLink) {
      window.open( //"https://zoom.us/wc/join" + id,
      zoomLink, "_blank", "location=yes,height=600,width=800,scrollbars=yes,status=yes");
    }
  }]);

  return HelpingRequestsComponent;
}();

HelpingRequestsComponent.ɵfac = function HelpingRequestsComponent_Factory(t) {
  return new (t || HelpingRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_student_services_helping_request_service__WEBPACK_IMPORTED_MODULE_4__.HelpingRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService));
};

HelpingRequestsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HelpingRequestsComponent,
  selectors: [["app-helping-requests"]],
  viewQuery: function HelpingRequestsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 51,
  vars: 20,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", 1, "btn", "bg-light-info", "float-right", 3, "click"], ["mat-raised-button", "", 1, "btn", "bg-light-warning", "float-right", 3, "click"], [1, "container-fluid"], [1, "form-container", 3, "formGroup"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "requestId"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "requestId"], ["mat-header-cell", "", "class", "text-center", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "time"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "text-center", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", 1, "text-center"], ["mat-cell", ""], ["class", "danger", 4, "ngIf"], ["class", "info", 4, "ngIf"], ["class", "warning", 4, "ngIf"], ["class", "success", 4, "ngIf"], [1, "danger"], [1, "info"], [1, "warning"], [1, "success"], ["dir", "ltr"], [4, "ngIf"], [1, "btn", "btn-info", "round", "mr-1", "mb-1", 3, "click"], ["class", "btn btn-danger round mr-1 mb-1", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "click"], ["class", "btn btn-info round mr-1 mb-1", 3, "click", 4, "ngIf", "ngIfElse"], ["noAction", ""], ["mat-header-row", ""], ["mat-row", "", 1, "text-center"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function HelpingRequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HelpingRequestsComponent_Template_button_click_7_listener() {
        return ctx.getAllRequests(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HelpingRequestsComponent_Template_button_click_10_listener() {
        ctx.form.reset();
        return ctx.getAllRequests(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " \u0645\u0633\u062D \u0627\u0644\u062D\u0642\u0648\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function HelpingRequestsComponent_Template_input_keyup_31_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](35, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, HelpingRequestsComponent_th_36_Template, 3, 3, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, HelpingRequestsComponent_td_37_Template, 2, 1, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](38, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, HelpingRequestsComponent_th_39_Template, 3, 3, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, HelpingRequestsComponent_td_40_Template, 6, 5, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](41, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, HelpingRequestsComponent_th_42_Template, 3, 3, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, HelpingRequestsComponent_td_43_Template, 4, 3, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](44, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, HelpingRequestsComponent_th_45_Template, 3, 3, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, HelpingRequestsComponent_td_46_Template, 3, 2, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, HelpingRequestsComponent_tr_47_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, HelpingRequestsComponent_tr_48_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, HelpingRequestsComponent_tr_49_Template, 3, 1, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-paginator", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function HelpingRequestsComponent_Template_mat_paginator_page_50_listener($event) {
        return ctx.getAllRequests($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 11, "Navbar.helping-requests"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 13, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 15, "labels.requestId"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 17, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](19, _c0))("length", ctx.totalItems)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_7__.TimePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwaW5nLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 57934:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/zoom-meeting/zoom-meeting.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomMeetingComponent": function() { return /* binding */ ZoomMeetingComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zoomus/websdk */ 51856);
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_zoom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/zoom.service */ 4093);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















function ZoomMeetingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZoomMeetingComponent_div_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r2.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "zoom.JoinYourClass"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 4, "zoom.JoinMeeting"), " ");
  }
}

_zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.setZoomJSLib("https://source.zoom.us/2.13.0/lib", "/av");
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.preLoadWasm();
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.prepareWebSDK(); // loads language files, also passes any error messages to the ui

_zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.i18n.load("en-US");
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.i18n.reload("en-US");
var ZoomMeetingComponent = /*#__PURE__*/function () {
  function ZoomMeetingComponent(zoomService, fb, router, appStrings, GeneralServ, spinner) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZoomMeetingComponent);

    this.zoomService = zoomService;
    this.fb = fb;
    this.router = router;
    this.appStrings = appStrings;
    this.GeneralServ = GeneralServ;
    this.spinner = spinner;
    this.submitted = false;
    this.showInputs = false;
    this.subcription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ZoomMeetingComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // this.startMeetingForm = this.fb.group({
      // 	// meeting data
      // 	meetingNumber: ["5928232148", [Validators.required, CustomeValidator.whiteSpace]],
      // 	passWord: ["FXZ7QB", [Validators.required, CustomeValidator.whiteSpace]],
      // 	// the name of the user joining the meeting
      // 	userName: ["" /* , [Validators.required, CustomeValidator.whiteSpace] */],
      // 	userEmail: [""],
      // });
      this.getUserInfo();
    } // get formCtrls() {
    // 	return this.startMeetingForm.controls;
    // }

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this = this;

      this.spinner.show();
      this.GeneralServ.returnProfile().subscribe(function (res) {
        _this.user = res.user;
        if (!_this.showInputs) _this.onSubmit();

        _this.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this2 = this;

      this.submitted = true; // if (this.startMeetingForm.valid) {
      // let formValues: any = this.startMeetingForm.value;

      var signaturePaylod = {
        meetingNumber: this.meetingNumber,
        apiKey: this.appStrings.zoomSdkKey,
        apiSecret: this.appStrings.zoomSdkSecret,
        role: "1"
      };
      this.subcription.add(this.zoomService.genrateSignature(signaturePaylod).subscribe(function (signature) {
        // console.log(signature, signaturePaylod);
        _this2.handleGenrateSignature(signature);
      })); // }
    }
  }, {
    key: "handleGenrateSignature",
    value: function handleGenrateSignature(signature) {
      var meetingPayloads = {
        meetingNumber: this.meetingNumber.replace(/\s/g, ""),
        passWord: this.passWord,
        signature: signature,
        userEmail: "",
        userName: this.user.ar_name
      };
      document.getElementById("zmmtg-root").style.display = "block";
      this.zoomService.initializeWebSDK(meetingPayloads, this.router.url); // this.zoomService.generateMeetingUrl(signature).subscribe((res) => {
      //   console.log(res);
      // });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.subcription.unsubscribe(); // this.router.navigateByUrl("/student/zoom-meeting");
    }
  }]);

  return ZoomMeetingComponent;
}();

ZoomMeetingComponent.ɵfac = function ZoomMeetingComponent_Factory(t) {
  return new (t || ZoomMeetingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_zoom_service__WEBPACK_IMPORTED_MODULE_3__.ZoomService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_4__.AppStrings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService));
};

ZoomMeetingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ZoomMeetingComponent,
  selectors: [["app-zoom-meeting"]],
  inputs: {
    showInputs: "showInputs",
    meetingNumber: "meetingNumber",
    passWord: "passWord",
    zoomSdkKey: "zoomSdkKey",
    zoomSdkSecret: "zoomSdkSecret"
  },
  decls: 3,
  vars: 1,
  consts: [["id", "zooomn", 1, "row"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", 3, "click"], ["addBtn", ""]],
  template: function ZoomMeetingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ZoomMeetingComponent_div_2_Template, 10, 6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showInputs);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b29tLW1lZXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 93495:
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerComponent": function() { return /* binding */ CustomizerComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customizer.service */ 60360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);








var _c0 = ["customizer"];

var _c1 = function _c1(a0) {
  return {
    "selected": a0
  };
};

function CustomizerComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_68_Template_span_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      var color_r7 = restoredCtx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r8.customizerService.changeSidebarBGColor(color_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("", color_r7.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r7.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-color", color_r7.code);
  }
}

function CustomizerComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_70_Template_span_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      var color_r10 = restoredCtx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r11.customizerService.changeSidebarBGColor(color_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("", color_r10.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r10.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-color", color_r10.code);
  }
}

function CustomizerComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_77_Template_div_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      var color_r13 = restoredCtx.$implicit;
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r14.customizerService.changeSidebarTransparentBGColor(color_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("rounded ", color_r13.class, " ct-glass-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r13.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-image", color_r13.class);
  }
}

function CustomizerComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_85_Template_img_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      var img_r16 = restoredCtx.$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r17.customizerService.changeSidebarBgImage(img_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", img_r16.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, img_r16.active));
  }
}

function CustomizerComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_93_Template_span_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      var color_r19 = restoredCtx.$implicit;
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r20.customizerService.changeSidebarTransparentBGColor(color_r19);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("", color_r19.class, " d-block rounded  ct-color-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-color", color_r19.class);
  }
}

var _c2 = function _c2(a0) {
  return {
    "active": a0
  };
};

function CustomizerComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Sidebar Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r22.changeSidebarWidth("sidebar-sm");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r24.changeSidebarWidth("sidebar-md");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r25.changeSidebarWidth("sidebar-lg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, ctx_r6.size === "sidebar-sm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.size === "sidebar-md"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-md");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.size === "sidebar-lg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-lg");
  }
}

var _c3 = function _c3(a0) {
  return {
    open: a0
  };
};

var CustomizerComponent = /*#__PURE__*/function () {
  function CustomizerComponent(renderer, configService, customizerService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomizerComponent);

    this.renderer = renderer;
    this.configService = configService;
    this.customizerService = customizerService;
    this.isBgImageDisplay = true;
    this.isOpen = true;
    this.config = {};
    this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.config = this.configService.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;

    if (this.config.layout.sidebar.size) {
      this.size = this.config.layout.sidebar.size;
    }
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomizerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "changeSidebarWidth",
    value: function changeSidebarWidth(value) {
      this.size = value;
      this.customizerService.changeSidebarWidth(value);
    }
  }, {
    key: "toggleCustomizer",
    value: function toggleCustomizer() {
      if (this.isOpen) {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
      } else {
        this.renderer.addClass(this.customizer.nativeElement, "open");
        this.isOpen = true;
      }
    }
  }, {
    key: "closeCustomizer",
    value: function closeCustomizer() {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    }
  }, {
    key: "bgImageDisplay",
    value: function bgImageDisplay(e) {
      if (e.target.checked) {
        this.isBgImageDisplay = true;
      } else {
        this.isBgImageDisplay = false;
      } //emit event to FUll Layout


      this.customizerService.bgImageDisplay(e);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }
  }]);

  return CustomizerComponent;
}();

CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) {
  return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__.CustomizerService));
};

CustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CustomizerComponent,
  selectors: [["app-customizer"]],
  viewQuery: function CustomizerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.customizer = _t.first);
    }
  },
  outputs: {
    directionEvent: "directionEvent"
  },
  decls: 115,
  vars: 17,
  consts: [[1, "customizer", "d-none", "d-lg-none", "d-xl-block", 3, "ngClass"], ["customizer", ""], [1, "customizer-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["id", "customizer-toggle-icon", 1, "customizer-toggle", "bg-primary", 3, "click"], [1, "ft-settings", "font-medium-1", "spinner", "white", "align-middle"], ["data-ps-id", "df6a5ce4-a175-9172-4402-dabd98fc9c0a", 1, "customizer-content", "p-3", "ps-container", "ps-theme-dark", 3, "perfectScrollbar"], [1, "text-uppercase"], [1, "ct-layout"], [1, "mb-3", "d-flex", "align-items-center"], [1, "ft-layout", "font-medium-2", "mr-2"], [1, "layout-switch"], [1, "radio", "radio-sm", "d-inline-block", "light-layout", "mr-3"], ["id", "ll-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "ll-switch"], [1, "radio", "radio-sm", "d-inline-block", "dark-layout", "mr-3"], ["id", "dl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "dl-switch"], [1, "radio", "radio-sm", "d-inline-block", "transparent-layout"], ["id", "tl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "tl-switch"], [1, "ct-menu-type"], [1, "ft-credit-card", "font-medium-2", "mr-2"], [1, "menu-switch"], [1, "radio", "radio-sm", "d-inline-block", "menu-side", "mr-3"], ["id", "menu-side", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-side"], [1, "radio", "radio-sm", "d-inline-block", "menu-top"], ["id", "menu-top", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-top"], [1, "ct-navbar-type"], [1, "ft-more-horizontal", "font-medium-2", "mr-2"], [1, "navbar-switch"], [1, "radio", "radio-sm", "d-inline-block", "nav-static", "mr-3"], ["id", "nav-static", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-static"], [1, "radio", "radio-sm", "d-inline-block", "nav-fixed"], ["id", "nav-fixed", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-fixed"], [1, "ct-bg-color"], [1, "sb-options", "d-flex", "align-items-center", "mb-3"], [1, "ft-droplet", "font-medium-2", "mr-2"], [1, "cz-bg-color", "sb-color-options"], [1, "row", "mb-3"], ["class", "col px-2", 4, "ngFor", "ngForOf"], [1, "row"], [1, "tl-bg-img"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ft-star", "font-medium-2", "mr-2"], [1, "cz-tl-bg-image", "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "ct-bg-image"], [1, "sb-bg-img", "d-flex", "align-items-center", "mb-3"], [1, "ft-sidebar", "font-medium-2", "mr-2"], [1, "cz-bg-image", "row", "sb-bg-img"], ["class", "col-2 px-2", 4, "ngFor", "ngForOf"], [1, "tl-color-option"], [1, "tl-color-options", "d-flex", "align-items-center", "mb-3"], [1, "cz-tl-bg-color"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "ct-bg-image-toggler"], [1, "togglebutton", "toggle-sb-bg-img"], [1, "float-right"], [1, "checkbox"], ["id", "sidebar-bg-img", "type", "checkbox", "checked", "", 1, "cz-bg-image-display", 3, "change"], ["for", "sidebar-bg-img"], [1, "ct-compact-toggler"], [1, "togglebutton"], ["id", "cz-compact-menu", "type", "checkbox", 1, "cz-compact-menu", 3, "checked", "change"], ["for", "cz-compact-menu"], ["class", "ct-sidebar-size", 4, "ngIf"], [1, "col", "px-2"], [2, "width", "30px", "height", "30px", 3, "ngClass", "click"], [1, "col-sm-3"], [3, "ngClass", "click"], [1, "col-2", "px-2"], ["alt", "sidebar bg image", "width", "90", 1, "rounded", 3, "src", "ngClass", "click"], [1, "col"], [1, "ct-sidebar-size"], ["id", "cz-sidebar-width", "data-toggle", "buttons", 1, "cz-sidebar-width", "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-primary", 3, "ngClass"], ["id", "cz-btn-radio-1", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-sm", 3, "checked", "change"], ["id", "cz-btn-radio-2", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-md", 3, "checked", "change"], ["id", "cz-btn-radio-3", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-lg", 3, "checked", "change"]],
  template: function CustomizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() {
        return ctx.closeCustomizer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_4_listener() {
        return ctx.toggleCustomizer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Theme Customizer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Customize & Preview in Real Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Layout Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_19_listener() {
        return ctx.customizerService.switchLayout("light", ctx.isBgImageDisplay);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_23_listener() {
        return ctx.customizerService.switchLayout("dark", ctx.isBgImageDisplay);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_27_listener() {
        return ctx.customizerService.switchLayout("transparent", ctx.isBgImageDisplay);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Transparent");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Navigation Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_38_listener() {
        return ctx.customizerService.toggleMenuPosition("Side");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_42_listener() {
        return ctx.customizerService.toggleMenuPosition("Top");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Navbar Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_53_listener() {
        return ctx.customizerService.toggleNavbarType("Static");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_57_listener() {
        return ctx.customizerService.toggleNavbarType("Fixed");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "h6", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Sidebar Color Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, CustomizerComponent_div_68_Template, 2, 7, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, CustomizerComponent_div_70_Template, 2, 7, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "h6", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Background Colors with Shades");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, CustomizerComponent_div_77_Template, 2, 7, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "h6", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Sidebar Bg Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, CustomizerComponent_div_85_Template, 2, 4, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "h6", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Background Colors");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, CustomizerComponent_div_93_Template, 2, 7, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Sidebar Bg Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_102_listener($event) {
        return ctx.bgImageDisplay($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Compact Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_112_listener($event) {
        return ctx.customizerService.toggleCompactMenu($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, CustomizerComponent_div_114_Template, 17, 12, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c3, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Transparent");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutGradientBGColors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutSolidBGColors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColorsWithShades);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutBGImages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.sidebar.collapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.config.layout.sidebar.collapsed);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 8843:
/*!*******************************************!*\
  !*** ./src/app/shared/data/app-assets.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppAssets": function() { return /* binding */ AppAssets; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AppAssets = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppAssets() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppAssets);

  this.arFlag = "assets/img/flags/ar.png";
  this.enFlag = "assets/img/flags/us.png";
  this.logo = "assets/img/logo-w.png";
  this.darkLogo = "assets/img/logo-dark.png";
  this.lock = "assets/img/gallery/lock.png";
  this.maintenance = "assets/img/gallery/maintenance.png";
  this.examCardBackground = "assets/img/lectureBackground.jpeg";
  this.examCardBackground2 = "assets/img/ect.jpg";
  this.coursesNotFound = "assets/img/gallery/lock.png";
});
AppAssets.userAvatar = "assets/img/user.png";

AppAssets.ɵfac = function AppAssets_Factory(t) {
  return new (t || AppAssets)();
};

AppAssets.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppAssets,
  factory: AppAssets.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 57834:
/*!********************************************!*\
  !*** ./src/app/shared/data/app-strings.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStrings": function() { return /* binding */ AppStrings; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AppStrings = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppStrings() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppStrings);

  this.arabic = "عربي";
  this.english = "English";
  this.ar = "ar";
  this.en = "en";
  this.DEFAULT_LANG = "ar";
  this.CURRENT_LANG = "currentLang";
  this.TOKEN = "token";
  this.USER_TYPE_ID = "user_type_Id";
  this.YEAR_ID = "yearId";
  this.EDU_COMP_LIST = "EduCompList";
  this.USER_ID = "userId";
  this.CLASS_ID = "classId";
  this.BRANCH_ID = "branchId";
  this.EDUCOMP_ID = "EduCompId";
  this.CURRENT_PARENT_CHILD_ID = "currentParentChildId";
  this.zoomSdkKey = "cMSig6jnR3m5KyLoc7NEw"; // client id

  this.zoomSdkSecret = "vDDA2W9XQo8GVMxgTZUiq4RTd1EYYV6f"; // client secret
});

AppStrings.ɵfac = function AppStrings_Factory(t) {
  return new (t || AppStrings)();
};

AppStrings.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppStrings,
  factory: AppStrings.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 73515:
/*!********************************************!*\
  !*** ./src/app/shared/data/styles-path.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arStylesFiles": function() { return /* binding */ arStylesFiles; },
/* harmony export */   "enStylesFiles": function() { return /* binding */ enStylesFiles; }
/* harmony export */ });
var arStylesFiles = [{
  id: "style1",
  href: "assets/css-rtl/bootstrap.css",
  rel: "stylesheet"
}, {
  id: "style2",
  href: "assets/css-rtl/bootstrap-extended.css",
  rel: "stylesheet"
}, {
  id: "style3",
  href: "assets/css-rtl/colors.css",
  rel: "stylesheet"
}, {
  id: "style4",
  href: "assets/css-rtl/components.css",
  rel: "stylesheet"
}, {
  id: "style5",
  href: "assets/css-rtl/themes/layout-dark.css",
  rel: "stylesheet"
}, {
  id: "style6",
  href: "assets/css-rtl/plugins/switchery.css",
  rel: "stylesheet"
}, {
  id: "style7",
  href: "assets/css-rtl/custom-rtl.css",
  rel: "stylesheet"
}, {
  id: "style8",
  href: "assets/css-rtl/core/menu/horizontal-menu.css",
  rel: "stylesheet"
}, {
  id: "style9",
  href: "assets/css-rtl/pages/dashboard1.css",
  rel: "stylesheet"
}, {
  id: "style10",
  href: "assets/css-rtl/style-rtl.css",
  rel: "stylesheet"
}, {
  id: "ar_fonts",
  href: "assets/fonts/ar-fonts.css",
  rel: "stylesheet"
}];
var enStylesFiles = [{
  id: "en_fonts",
  href: "assets/fonts/en-fonts.css",
  rel: "stylesheet"
}];

/***/ }),

/***/ 91918:
/*!************************************************!*\
  !*** ./src/app/shared/data/template-search.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTITEMS": function() { return /* binding */ LISTITEMS; }
/* harmony export */ });
var LISTITEMS = [{
  "url": "/page",
  "name": "Page",
  "icon": "ft-home"
}, {
  "url": "/pages/login",
  "name": "Login",
  "icon": "ft-log-in"
}];

/***/ }),

/***/ 48327:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarAnchorToggleDirective": function() { return /* binding */ SidebarAnchorToggleDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-link.directive */ 7883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var SidebarAnchorToggleDirective = /*#__PURE__*/function () {
  function SidebarAnchorToggleDirective(navlink) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarAnchorToggleDirective);

    this.navlink = navlink;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarAnchorToggleDirective, [{
    key: "onClick",
    value: function onClick() {
      this.navlink.toggle();
    }
  }]);

  return SidebarAnchorToggleDirective;
}();

SidebarAnchorToggleDirective.ɵfac = function SidebarAnchorToggleDirective_Factory(t) {
  return new (t || SidebarAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_2__.SidebarLinkDirective));
};

SidebarAnchorToggleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SidebarAnchorToggleDirective,
  selectors: [["", "appSidebarAnchorToggle", ""]],
  hostBindings: function SidebarAnchorToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarAnchorToggleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

/***/ }),

/***/ 83273:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDropdownDirective": function() { return /* binding */ SidebarDropdownDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




var SidebarDropdownDirective = /*#__PURE__*/function () {
  function SidebarDropdownDirective(router) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarDropdownDirective);

    this.router = router;
    this.navlinks = [];
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarDropdownDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {//write your code here!
    }
  }]);

  return SidebarDropdownDirective;
}();

SidebarDropdownDirective.ɵfac = function SidebarDropdownDirective_Factory(t) {
  return new (t || SidebarDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

SidebarDropdownDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: SidebarDropdownDirective,
  selectors: [["", "appSidebarDropdown", ""]]
});

/***/ }),

/***/ 7883:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-link.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLinkDirective": function() { return /* binding */ SidebarLinkDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.directive */ 57744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var SidebarLinkDirective = /*#__PURE__*/function () {
  function SidebarLinkDirective(sideNav) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarLinkDirective);

    this.sideNav = sideNav;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarLinkDirective, [{
    key: "open",
    get: function get() {
      return this._open;
    },
    set: function set(value) {
      this._open = value;
    }
  }, {
    key: "sidebarGroupActive",
    get: function get() {
      return this._sidebarGroupActive;
    },
    set: function set(value) {
      this._sidebarGroupActive = value;
    }
  }, {
    key: "navCollapsedOpen",
    get: function get() {
      return this._navCollapsedOpen;
    },
    set: function set(value) {
      this._navCollapsedOpen = value;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.sideNav.addLink(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {} //when side menu (vertical menu) item gets clicked

  }, {
    key: "toggle",
    value: function toggle() {
      this.open = !this.open;

      if (this.open) {
        this.sideNav.closeOtherLinks(this);
      }

      if (!this.open && this.level.toString() === "1" && this.hasSub) {
        this.sidebarGroupActive = false;
      }
    }
  }]);

  return SidebarLinkDirective;
}();

SidebarLinkDirective.ɵfac = function SidebarLinkDirective_Factory(t) {
  return new (t || SidebarLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sidebar_directive__WEBPACK_IMPORTED_MODULE_2__.SidebarDirective));
};

SidebarLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SidebarLinkDirective,
  selectors: [["", "appSidebarlink", ""]],
  hostVars: 6,
  hostBindings: function SidebarLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("open", ctx.open)("sidebar-group-active", ctx.sidebarGroupActive)("nav-collapsed-open", ctx.navCollapsedOpen);
    }
  },
  inputs: {
    parent: "parent",
    level: "level",
    hasSub: "hasSub",
    path: "path",
    open: "open",
    sidebarGroupActive: "sidebarGroupActive",
    navCollapsedOpen: "navCollapsedOpen"
  }
});

/***/ }),

/***/ 57744:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDirective": function() { return /* binding */ SidebarDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 85682);






var SidebarDirective = /*#__PURE__*/function () {
  function SidebarDirective(cdr, router, configService, layoutService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarDirective);

    this.cdr = cdr;
    this.router = router;
    this.configService = configService;
    this.layoutService = layoutService;
    this.navlinks = [];
    this.config = {};
    this.mouseEnter = false;
    this.sidebarExpanded = true;
    this.config = this.configService.templateConf;
    this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarDirective, [{
    key: "navExpanded",
    get: function get() {
      return this._navExpanded;
    },
    set: function set(value) {
      this._navExpanded = value;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.innerWidth = window.innerWidth;
      this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this.config = templateConf;
        }

        _this.loadLayout();

        _this.cdr.markForCheck();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    } //load layout when changes in the config

  }, {
    key: "loadLayout",
    value: function loadLayout() {
      this.sidebarExpanded = !this.config.layout.sidebar.collapsed;

      if (this.config.layout.sidebar.collapsed && !this.mouseEnter) {
        this.setSidebarGroupActiveCollapsed();
        this.navExpanded = false;
      } else {
        this.setSidebarGroupActive();
        this.navExpanded = true;
      }
    } //add menu links to the link list

  }, {
    key: "addLink",
    value: function addLink(link) {
      this.navlinks.push(link);
    } //close all other menu items other than active one

  }, {
    key: "closeOtherLinks",
    value: function closeOtherLinks(openLink) {
      this.navlinks.forEach(function (link) {
        if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
          link.open = false;
          link.sidebarGroupActive = false;
        } else if (link === openLink && openLink.level.toString() === "1" && link.hasSub === true) {
          link.sidebarGroupActive = true;
        } else if (link === openLink && openLink.level.toString() === "1" && link.hasSub === false) {
          link.sidebarGroupActive = false;
          link.open = false;
        } else if (link === openLink && openLink.level.toString() != "1" && link.hasSub === false) {
          link.open = false;
          link.sidebarGroupActive = false;
          return;
        }
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {} // call when sidebar toggle is collapsed but still in expand mode on mouse hover

  }, {
    key: "setSidebarGroupActive",
    value: function setSidebarGroupActive() {
      var _this2 = this;

      if (this.navlinks.length > 0) {
        this.navlinks.forEach(function (link) {
          link.sidebarGroupActive = false;
          link.navCollapsedOpen = false;
        });
        var matched = this.navlinks.find(function (link) {
          return link.path === _this2.router.url;
        });

        if (matched) {
          var parent = this.navlinks.find(function (link) {
            return link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true;
          });

          if (parent) {
            parent.sidebarGroupActive = true;
            parent.navCollapsedOpen = false;
            parent.open = true;
          }
        }
      }
    } // call when sidebar toggle is collapsed and is in collapse mode on mouse out

  }, {
    key: "setSidebarGroupActiveCollapsed",
    value: function setSidebarGroupActiveCollapsed() {
      var _this3 = this;

      this.closeOtherLinks(this.navlinks.find(function (link) {
        return link.path === _this3.router.url;
      }));

      if (this.navlinks.length > 0) {
        this.navlinks.forEach(function (link) {
          link.sidebarGroupActive = false;
          link.navCollapsedOpen = false;
        });
        var matched = this.navlinks.find(function (link) {
          return link.path === _this3.router.url;
        });

        if (matched) {
          var parent = this.navlinks.find(function (link) {
            return link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true;
          });

          if (parent) {
            parent.sidebarGroupActive = true;
            parent.navCollapsedOpen = true;
            parent.open = false;
          }
        }
      }
    } // mouse enter event of side menu

  }, {
    key: "onMouseOver",
    value: function onMouseOver(e) {
      this.mouseEnter = true;

      if (this.config.layout.sidebar.collapsed) {
        this.setSidebarGroupActive();
        this.navExpanded = true;
      }
    } // mouse leave event of side menu

  }, {
    key: "onMouseOut",
    value: function onMouseOut(e) {
      this.mouseEnter = false;

      if (this.config.layout.sidebar.collapsed) {
        this.setSidebarGroupActiveCollapsed();
        this.navExpanded = false;
      }
    }
  }]);

  return SidebarDirective;
}();

SidebarDirective.ɵfac = function SidebarDirective_Factory(t) {
  return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService));
};

SidebarDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: SidebarDirective,
  selectors: [["", "appSidebar", ""]],
  hostVars: 2,
  hostBindings: function SidebarDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SidebarDirective_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseOver($event);
      })("mouseleave", function SidebarDirective_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseOut($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded", ctx.navExpanded);
    }
  },
  inputs: {
    navExpanded: "navExpanded"
  }
});

/***/ }),

/***/ 53418:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleFullscreenDirective": function() { return /* binding */ ToggleFullscreenDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ 38914);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ToggleFullscreenDirective = /*#__PURE__*/function () {
  function ToggleFullscreenDirective() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToggleFullscreenDirective);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ToggleFullscreenDirective, [{
    key: "onClick",
    value: function onClick() {
      if (screenfull__WEBPACK_IMPORTED_MODULE_2__.isEnabled) {
        screenfull__WEBPACK_IMPORTED_MODULE_2__.toggle();
      }
    }
  }]);

  return ToggleFullscreenDirective;
}();

ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) {
  return new (t || ToggleFullscreenDirective)();
};

ToggleFullscreenDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ToggleFullscreenDirective,
  selectors: [["", "appToggleFullscreen", ""]],
  hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }
});

/***/ }),

/***/ 91354:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuAnchorToggleDirective": function() { return /* binding */ TopMenuAnchorToggleDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topmenu-link.directive */ 31793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var TopMenuAnchorToggleDirective = /*#__PURE__*/function () {
  function TopMenuAnchorToggleDirective(navlink) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuAnchorToggleDirective);

    this.navlink = navlink;
  } // @HostListener("click", ["$event"])
  // onClick() {
  //   this.navlink.toggle();
  // }


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuAnchorToggleDirective, [{
    key: "onMouseOver",
    value: function onMouseOver(e) {
      this.navlink.openDropdown();
    }
  }]);

  return TopMenuAnchorToggleDirective;
}();

TopMenuAnchorToggleDirective.ɵfac = function TopMenuAnchorToggleDirective_Factory(t) {
  return new (t || TopMenuAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_2__.TopMenuLinkDirective));
};

TopMenuAnchorToggleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: TopMenuAnchorToggleDirective,
  selectors: [["", "appTopMenuAnchorToggle", ""]],
  hostBindings: function TopMenuAnchorToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function TopMenuAnchorToggleDirective_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseOver($event);
      });
    }
  }
});

/***/ }),

/***/ 90235:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDropdownDirective": function() { return /* binding */ TopMenuDropdownDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




var TopMenuDropdownDirective = /*#__PURE__*/function () {
  function TopMenuDropdownDirective(router) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuDropdownDirective);

    this.router = router;
    this.navlinks = [];
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuDropdownDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {//write your code here!
    }
  }]);

  return TopMenuDropdownDirective;
}();

TopMenuDropdownDirective.ɵfac = function TopMenuDropdownDirective_Factory(t) {
  return new (t || TopMenuDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

TopMenuDropdownDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: TopMenuDropdownDirective,
  selectors: [["", "appTopMenuDropdown", ""]]
});

/***/ }),

/***/ 31793:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-link.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuLinkDirective": function() { return /* binding */ TopMenuLinkDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _topmenu_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topmenu.directive */ 60342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var TopMenuLinkDirective = /*#__PURE__*/function () {
  function TopMenuLinkDirective(topNav) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuLinkDirective);

    this.topNav = topNav;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuLinkDirective, [{
    key: "show",
    get: function get() {
      return this._show;
    },
    set: function set(value) {
      this._show = value;

      if (value) {
        this.topNav.closeOtherLinks(this);
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.topNav.addLink(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {}
  }, {
    key: "toggle",
    value: function toggle() {
      this.show = !this.show;
    }
  }, {
    key: "openDropdown",
    value: function openDropdown() {
      this.show = true;
    }
  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      this.show = false;
    }
  }]);

  return TopMenuLinkDirective;
}();

TopMenuLinkDirective.ɵfac = function TopMenuLinkDirective_Factory(t) {
  return new (t || TopMenuLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_topmenu_directive__WEBPACK_IMPORTED_MODULE_2__.TopMenuDirective));
};

TopMenuLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: TopMenuLinkDirective,
  selectors: [["", "appTopMenulink", ""]],
  hostVars: 2,
  hostBindings: function TopMenuLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.show);
    }
  },
  inputs: {
    parent: "parent",
    level: "level",
    show: "show"
  }
});

/***/ }),

/***/ 60342:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/topmenu.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDirective": function() { return /* binding */ TopMenuDirective; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var TopMenuDirective = /*#__PURE__*/function () {
  function TopMenuDirective() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuDirective);

    this.navlinks = [];
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "addLink",
    value: function addLink(link) {
      this.navlinks.push(link);
    }
  }, {
    key: "closeOtherLinks",
    value: function closeOtherLinks(openLink) {
      this.navlinks.forEach(function (link) {
        if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
          link.show = false;
        }
      });
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut(e) {
      this.navlinks.forEach(function (link) {
        link.show = false;
      });
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.navlinks.forEach(function (link) {
        link.show = false;
      });
    }
  }]);

  return TopMenuDirective;
}();

TopMenuDirective.ɵfac = function TopMenuDirective_Factory(t) {
  return new (t || TopMenuDirective)();
};

TopMenuDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: TopMenuDirective,
  selectors: [["", "appTopMenu", ""]],
  hostBindings: function TopMenuDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseleave", function TopMenuDirective_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseOut($event);
      })("click", function TopMenuDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




var FooterComponent = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterComponent() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterComponent);

  //Variables
  this.currentDate = new Date();
});

FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};

FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 8,
  vars: 4,
  consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], ["id", "pixinventLink", "href", "oxford.co"], [1, "d-none", "d-sm-inline-block"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Oxford");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, ", All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Copyright \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, ctx.currentDate, "yyyy"), " ");
    }
  },
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 22185:
/*!*********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/horizontal-menu.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": function() { return /* binding */ HorizontalMenuComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/topmenu-dropdown.directive */ 90235);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/topmenu-link.directive */ 31793);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/topmenu-anchor-toggle.directive */ 91354);















var _c0 = function _c0() {
  return {
    exact: true
  };
};

function HorizontalMenuComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 8, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 10, "Navbar.subscription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 12, "Navbar.helping-requests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 14, "Navbar.EducationalStage"));
  }
}

function HorizontalMenuComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 4, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 6, "Navbar.Support"));
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function HorizontalMenuComponent_ul_4_li_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c1, menuItem_r4.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 2, menuItem_r4.title));
  }
}

function HorizontalMenuComponent_ul_4_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c1, menuItem_r4.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, menuItem_r4.title));
  }
}

function HorizontalMenuComponent_ul_4_li_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c1, menuItem_r4.path), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, menuItem_r4.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, menuItem_r4.title));
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c1, menuSubsubItem_r16.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](6, _c1, menuSubsubItem_r16.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuSubsubItem_r16.title);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("href", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c1, menuSubsubItem_r16.path), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](6, _c1, menuSubsubItem_r16.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuSubsubItem_r16.title);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_a_1_Template, 4, 8, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_ng_template_2_Template, 4, 8, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r16 = ctx.$implicit;

    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

    var menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("level", ctx_r15.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("parent", menuItem_r4.title)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !menuSubsubItem_r16.isExternalLink)("ngIfElse", _r18);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_Template, 4, 6, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuSubItem_r13.submenu);
  }
}

var _c2 = function _c2(a0) {
  return {
    functionId: a0
  };
};

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return ctx_r24.setFunC;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r13 = ctx.$implicit;
    var menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("level", ctx_r12.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("parent", menuItem_r4.title)("routerLinkActive", (menuSubItem_r13.submenu == null ? null : menuSubItem_r13.submenu.length) != 0 ? "active" : "active")("ngClass", menuSubItem_r13.class === "dropdown-item" ? "" : "has-sub dropdown dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-menu", menuSubItem_r13.class === "dropdown-item" ? "" : "dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r13.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c2, menuSubItem_r13.functionId))("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c1, menuSubItem_r13.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 11, menuSubItem_r13.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (menuSubItem_r13.submenu == null ? null : menuSubItem_r13.submenu.length) > 0);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_Template, 7, 17, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuItem_r4.submenu);
  }
}

function HorizontalMenuComponent_ul_4_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_a_1_Template, 5, 6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HorizontalMenuComponent_ul_4_li_7_a_2_Template, 5, 7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, HorizontalMenuComponent_ul_4_li_7_a_3_Template, 5, 9, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HorizontalMenuComponent_ul_4_li_7_ul_4_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("level", ctx_r3.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("parent", menuItem_r4.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c1, menuItem_r4.class))("routerLinkActive", (menuItem_r4.submenu == null ? null : menuItem_r4.submenu.length) != 0 ? "active" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-menu", menuItem_r4.class === "dropdown nav-item" ? "dropdown" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (menuItem_r4.submenu == null ? null : menuItem_r4.submenu.length) > 0 && !menuItem_r4.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (menuItem_r4.submenu == null ? null : menuItem_r4.submenu.length) === 0 && !menuItem_r4.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuItem_r4.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (menuItem_r4.submenu == null ? null : menuItem_r4.submenu.length) > 0);
  }
}

function HorizontalMenuComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, HorizontalMenuComponent_ul_4_li_7_Template, 5, 13, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 3, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.menuItems);
  }
}

var _c3 = function _c3(a0, a1) {
  return {
    "navbar-sticky": a0,
    "navbar-fixed": a1
  };
};

var HorizontalMenuComponent = /*#__PURE__*/function () {
  function HorizontalMenuComponent(router, authService, configService, cdr, studentserv, translate, GeneralServ, spinner) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalMenuComponent);

    this.router = router;
    this.authService = authService;
    this.configService = configService;
    this.cdr = cdr;
    this.studentserv = studentserv;
    this.translate = translate;
    this.GeneralServ = GeneralServ;
    this.spinner = spinner;
    this.config = {};
    this.level = 0;
    this.transparentBGClass = "";
    this.menuPosition = "Top";
    this.config = this.configService.templateConf;
    this.EduCompId = this.authService.getEduCompId();
    this.branchId = this.authService.getBranchId();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // if (this.authService.isStudent()) {
      // 	this.balanceCheck();
      // }
      if (!this.authService.isStudent() && !this.authService.isSupport() && this.authService.isUser()) {
        if (this.EduCompId) this.onChangeEduCompId(this.EduCompId); //	this.getEduCompByUser();

        this.getUserFunctions(this.branchId);
      }

      if (!this.authService.isUser()) {
        this.menuItems = [];
      } // this.menuItems = routs;

    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.authService.branchId.subscribe(function (e) {
        _this.branchId = e.branchId;

        if (!_this.authService.isStudent() && !_this.authService.isSupport()) {
          //	if (this.EduCompId) this.onChangeEduCompId(this.EduCompId);
          _this.getUserFunctions(e.branchId);
        }
      });
      this.authService.EduCompId.subscribe(function (e) {
        _this.EduCompId = e.EduCompId;

        if (!_this.authService.isStudent() && !_this.authService.isSupport() && _this.authService.isUser()) {
          _this.getUserFunctions(e.branchId); //if (this.EduCompId) this.onChangeEduCompId(this.EduCompId);
          //  this.onChangeEduCompId(e.EduCompId);

        }
      });
      this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this.config = templateConf;
        }

        _this.loadLayout();

        _this.cdr.markForCheck();
      });
    }
  }, {
    key: "getUserFunctions",
    value: function getUserFunctions(branchId) {
      var _this2 = this;

      this.spinner.show();
      this.authService.getUserFunctions(branchId).subscribe(function (res) {
        // console.log("functions: ", res);
        res.Groups.map(function (menuItems) {
          menuItems.class = "dropdown nav-item has-sub";
          menuItems.icon = "ft-align-left";
          menuItems.isExternalLink = false;
          menuItems.badge = "";
          menuItems.badgeClass = "";
          menuItems.submenu.map(function (item) {
            item.class = "dropdown-item";
            item.icon = "ft-arrow-right submenu-icon";
            item.isExternalLink = false;
            item.badge = "";
            item.badgeClass = "";
          });
        });
        res.GrouplessFunctions.map(function (menuItems) {
          menuItems.class = "dropdown nav-item";
          menuItems.icon = "ft-align-left";
          menuItems.isExternalLink = false;
          menuItems.submenu = [];
        });
        _this2.menuItems = [];
        _this2.menuItems = res.Groups.concat(res.GrouplessFunctions); //  console.log("menuItems: ", this.menuItems);

        _this2.spinner.hide();
      });
    }
  }, {
    key: "getEduCompByUser",
    value: function getEduCompByUser() {
      var _this3 = this;

      this.Branches = [];
      this.branchId = "";
      this.GeneralServ.getEduCompByUser().subscribe(function (res) {
        _this3.EducationalComps = res;
      });
    }
  }, {
    key: "onChangeEduCompId",
    value: function onChangeEduCompId(EduCompId) {
      var _this4 = this;

      this.authService.setEduCompId(EduCompId);

      if (EduCompId !== "null" && EduCompId != "undefined") {
        this.GeneralServ.getBranchesByEduComp(EduCompId).subscribe(function (res) {
          var _a, _b;

          _this4.Branches = res;

          _this4.authService.setBranchId((_a = res[0]) === null || _a === void 0 ? void 0 : _a.Id);

          _this4.branchId = (_b = res[0]) === null || _b === void 0 ? void 0 : _b.Id;
        });
      }
    }
  }, {
    key: "changebranchId",
    value: function changebranchId() {
      this.authService.setBranchId(this.branchId);
    } // Return  balanceCheck Data

  }, {
    key: "balanceCheck",
    value: function balanceCheck() {
      var _this5 = this;

      this.studentserv.balanceCheck().subscribe(function (res) {
        _this5.BalanceData = res;
      });
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
        this.menuPosition = this.config.layout.menuPosition;
      }

      if (this.config.layout.variant === "Transparent") {
        this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
      } else {
        this.transparentBGClass = "";
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }
  }]);

  return HorizontalMenuComponent;
}();

HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) {
  return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_4__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService));
};

HorizontalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HorizontalMenuComponent,
  selectors: [["app-horizontal-menu"]],
  decls: 6,
  vars: 10,
  consts: [["role", "navigation", "data-menu", "menu-wrapper", "data-nav", "brand-center", 3, "ngClass"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content", "center-layout", "row", "w-100"], ["appTopMenuDropdown", "", "class", "navigation-main nav navbar-nav", "id", "main-menu-navigation", "data-menu", "menu-navigation", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "navigation-main nav navbar-nav col-9", "id", "main-menu-navigation", "data-menu", "menu-navigation", 4, "ngIf"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav"], ["appTopMenulink", "", "parent", "Home", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/home", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "ft-home"], ["appTopMenulink", "", "parent", "Recharge", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/student/subscription", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "icon-credit-card"], ["routerLink", "/student/helping-requests", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], ["routerLink", "/student/educational-stage", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "icon-book-open"], ["routerLink", "/support/search", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav", "col-9"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "dropdown-toggle nav-link d-flex align-items-center", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "href", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "dropdown-menu", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [3, "ngClass"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "routerLink"], ["target", "_blank", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "href"], ["appTopMenuDropdown", "", 1, "dropdown-menu"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "queryParams", "ngClass", "click"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink"], [1, ""], ["data-toggle", "dropdown", "target", "_blank", 3, "ngClass", "href"]],
  template: function HorizontalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HorizontalMenuComponent_ul_2_Template, 25, 20, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, HorizontalMenuComponent_ul_3_Template, 13, 10, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HorizontalMenuComponent_ul_4_Template, 8, 6, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-shadow menu-border navbar-brand-center  ", ctx.transparentBGClass, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](7, _c3, ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.authService.isStudent());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.authService.isSupport());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx.authService.isStudent() || ctx.authService.isSupport()) && ctx.authService.isUser());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.TopMenuDropdownDirective, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_7__.TopMenuLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_8__.TopMenuAnchorToggleDirective],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: [".dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  clear: both;\n  font-weight: 400;\n  color: #342e49;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24taXRlbSB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMzNDJlNDk7XHJcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 793:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/grid-list */ 63346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tree */ 34972);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/clipboard */ 91604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ 3184);








































var materialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__.ClipboardModule // NgImageSliderModule,
//ExcelExportModule,
//UploadModule,
];
var MaterialModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MaterialModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MaterialModule);
});

MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};

MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({
  imports: [[materialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__.ClipboardModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__.ClipboardModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__.ClipboardModule]
  });
})();

/***/ }),

/***/ 54696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _data_template_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/template-search */ 91918);
/* harmony import */ var _data_app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/app-assets */ 8843);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth/auth.service */ 16256);
/* harmony import */ var _services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/General/upload-file.service */ 75013);
/* harmony import */ var _services_General_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/General/general.service */ 65086);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directives/topmenu.directive */ 60342);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/toggle-fullscreen.directive */ 53418);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);



















var _c0 = ["search"];
var _c1 = ["searchResults"];

var _c2 = function _c2() {
  return ["/"];
};

function NavbarComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " \xA0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}

function NavbarComponent_li_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_li_16_div_8_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r6.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 2, "Navbar.EditProfile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 4, "Navbar.LogOut"));
  }
}

function NavbarComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, NavbarComponent_li_16_div_8_Template, 14, 6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.user == null ? null : ctx_r1.user.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.user_ID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.authservice.isStudent());
  }
}

function NavbarComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_ng_container_17_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r8.setNewReservation(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_ng_container_17_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r10.setNewReservation(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "Navbar.Login"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 4, "Navbar.Register"), " ");
  }
}

function NavbarComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_ng_container_18_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r11.setNewReservation(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_ng_container_18_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r13.setNewReservation(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "Navbar.LoginNew"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 4, "Navbar.RegisterNew"), " ");
  }
}

function NavbarComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_ng_container_19_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r14.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "Navbar.EditProfile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 4, "Navbar.LogOut"), " ");
  }
}

var _c3 = function _c3(a0, a1, a2, a3) {
  return {
    "navbar-brand-center": a0,
    "navbar-static": a1,
    "navbar-sticky": a2,
    "fixed-top": a3
  };
};

var NavbarComponent = /*#__PURE__*/function () {
  function NavbarComponent(translate, layoutService, router, configService, cdr, authservice, fileService, GeneralServ) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);

    this.translate = translate;
    this.layoutService = layoutService;
    this.router = router;
    this.configService = configService;
    this.cdr = cdr;
    this.authservice = authservice;
    this.fileService = fileService;
    this.GeneralServ = GeneralServ;
    this.selectedLanguageText = "English";
    this.selectedLanguageFlag = "./assets/img/flags/us.png";
    this.toggleClass = "ft-maximize";
    this.placement = "bottom-right";
    this.logoUrl = "assets/newhome/img/logo/logo-black.png"; //logoUrl = 'assets/img/logo.png';

    this.menuPosition = "Side";
    this.isSmallScreen = false;
    this.searchOpenClass = "";
    this.transparentBGClass = "";
    this.hideSidebar = true;
    this.isCollapsed = true;
    this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.seachTextEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.listItems = [];
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
    this.config = {};
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
      _this.hideSidebar = !isShow;
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a; //  const browserLang: string = this.translate.getBrowserLang();
      // this.translate.use(browserLang.match(/en|ar/) ? browserLang : "ar");


      this.currentLang = (_a = localStorage.getItem("currentLang")) !== null && _a !== void 0 ? _a : "ar";
      this.translate.use(this.currentLang);
      this.listItems = _data_template_search__WEBPACK_IMPORTED_MODULE_2__.LISTITEMS;
      if (this.authservice.isUser()) this.returnProfile();

      if (this.innerWidth < 1200) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.ChangeLanguage(this.currentLang);
      this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this2.config = templateConf;
        }

        Promise.resolve().then(function () {
          _this2.loadLayout();

          _this2.cdr.markForCheck();
        });
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }

      if (this.configSub) {
        this.configSub.unsubscribe();
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      this.authservice.logout();
    }
  }, {
    key: "setNewReservation",
    value: function setNewReservation(value) {
      this.authservice.setNewReservation(value);
    }
  }, {
    key: "ChangeLanguage",
    value: function ChangeLanguage(language) {
      var _this3 = this;

      this.translate.use(language || "ar");
      localStorage.setItem("currentLang", language);
      changeStyle();

      if (language === "en") {
        Promise.resolve().then(function () {
          _this3.selectedLanguageText = "English";
          _this3.selectedLanguageFlag = "./assets/img/flags/us.png";
        });
      } else if (language === "ar") {
        Promise.resolve().then(function () {
          _this3.selectedLanguageText = "عربي";
          _this3.selectedLanguageFlag = "./assets/img/flags/ar.png";
        });
      }
    }
  }, {
    key: "returnProfile",
    value: function returnProfile() {
      var _this4 = this;

      this.GeneralServ.returnProfile().subscribe(function (res) {
        var _a;

        _this4.user = res.user;
        _this4.picturePath = (_a = _this4.fileService.previewPicture(res.picturePath)) !== null && _a !== void 0 ? _a : _data_app_assets__WEBPACK_IMPORTED_MODULE_3__.AppAssets.userAvatar;
      });
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      this.innerWidth = event.target.innerWidth;

      if (this.innerWidth < 1200) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
        this.menuPosition = this.config.layout.menuPosition;
      }

      if (this.config.layout.variant === "Light") {
        this.logoUrl = "assets/newhome/img/logo/logo-black.png"; // this.logoUrl = "assets/img/logo-dark.png";
      } else {
        this.logoUrl = "assets/newhome/img/logo/logo-black.png"; //this.logoUrl = "assets/img/logo.png";
      }

      if (this.config.layout.variant === "Transparent") {
        this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
      } else {
        this.transparentBGClass = "";
      }
    }
  }, {
    key: "onSearchKey",
    value: function onSearchKey(event) {
      if (this.searchResults && this.searchResults.length > 0) {
        this.searchResults.first.host.nativeElement.classList.add("first-active-item");
      }

      if (event.target.value === "") {
        this.seachTextEmpty.emit(true);
      } else {
        this.seachTextEmpty.emit(false);
      }
    }
  }, {
    key: "removeActiveClass",
    value: function removeActiveClass() {
      if (this.searchResults && this.searchResults.length > 0) {
        this.searchResults.first.host.nativeElement.classList.remove("first-active-item");
      }
    }
  }, {
    key: "onEscEvent",
    value: function onEscEvent() {
      this.control.setValue("");
      this.searchOpenClass = "";
      this.seachTextEmpty.emit(true);
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      if (this.searchResults && this.searchResults.length > 0) {
        var url = this.searchResults.first.url;

        if (url && url != "") {
          this.control.setValue("");
          this.searchOpenClass = "";
          this.router.navigate([url]);
          this.seachTextEmpty.emit(true);
        }
      }
    }
  }, {
    key: "redirectTo",
    value: function redirectTo(value) {
      this.router.navigate([value]);
      this.seachTextEmpty.emit(true);
    }
  }, {
    key: "ToggleClass",
    value: function ToggleClass() {
      if (this.toggleClass === "ft-maximize") {
        this.toggleClass = "ft-minimize";
      } else {
        this.toggleClass = "ft-maximize";
      }
    }
  }, {
    key: "toggleSearchOpenClass",
    value: function toggleSearchOpenClass(display) {
      var _this5 = this;

      this.control.setValue("");

      if (display) {
        this.searchOpenClass = "open";
        setTimeout(function () {
          _this5.searchElement.nativeElement.focus();
        }, 0);
      } else {
        this.searchOpenClass = "";
      }

      this.seachTextEmpty.emit(true);
    }
  }, {
    key: "toggleNotificationSidebar",
    value: function toggleNotificationSidebar() {
      this.layoutService.toggleNotificationSidebar(true);
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    }
  }]);

  return NavbarComponent;
}();

NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_7__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_General_general_service__WEBPACK_IMPORTED_MODULE_8__.GeneralService));
};

NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  viewQuery: function NavbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.searchResults = _t);
    }
  },
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
    }
  },
  outputs: {
    toggleHideSidebar: "toggleHideSidebar",
    seachTextEmpty: "seachTextEmpty"
  },
  decls: 23,
  vars: 16,
  consts: [[3, "ngClass"], [1, "container-fluid", "navbar-wrapper"], [1, "navbar-header", "d-flex"], ["data-toggle", "collapse", 1, "navbar-toggle", "menu-toggle", "d-xl-none", "d-block", "float-left", "align-items-center", "justify-content-center", 3, "click"], [1, "ft-menu", "font-medium-3"], [1, "navbar-brand"], [1, "navbar-header"], [1, "navbar-nav"], [1, "nav-item"], [1, "logo"], ["class", "logo-text", 3, "routerLink", 4, "ngIf"], [1, "new-home", "mr-3", "ml-3", 2, "width", "650px"], ["appTopMenu", ""], [1, "navbar-container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-block"], ["class", "dropdown nav-item mr-1", "placement", "bottom-left", "display", "static", "ngbDropdown", "", 4, "ngIf"], [4, "ngIf"], [1, "i18n-dropdown", "dropdown", "nav-item", "mr-2"], ["id", "navbar-fullscreen", "href", "javascript:;", "appToggleFullscreen", "", 1, "nav-link", "apptogglefullscreen", 3, "click"], [1, "logo-text", 3, "routerLink"], [1, "logo-img", 2, "display", "inline-block"], ["alt", "  logo", 1, "logo-img", 3, "src"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1"], ["id", "dropdownBasic2", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "user-dropdown", "d-flex", "align-items-end"], [1, "user", "d-md-flex", "d-none", "mr-2"], [1, "text-right"], [1, "text-right", "text-lightcolor", "font-small-3"], ["alt", "avatar", "height", "35", "width", "35", 1, "avatar", 3, "src"], ["class", "dropdown-menu text-left dropdown-menu-right m-0 pb-0", "aria-labelledby", "dropdownBasic2", "ngbDropdownMenu", "", 4, "ngIf"], ["aria-labelledby", "dropdownBasic2", "ngbDropdownMenu", "", 1, "dropdown-menu", "text-left", "dropdown-menu-right", "m-0", "pb-0"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "ft-edit", "mr-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "ft-power", "mr-2"], [1, "dropdown", "nav-item", "mr-2", "d-xs-none"], ["routerLink", "/auth/login", 1, "nav-link", 3, "click"], ["routerLink", "/auth/register", 1, "nav-link", 3, "click"], ["routerLink", "/profile", 1, "nav-link"], [1, "nav-link", 3, "click"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, NavbarComponent_a_10_Template, 4, 3, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-horizontal-menu", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, NavbarComponent_li_16_Template, 9, 4, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, NavbarComponent_ng_container_17_Template, 9, 6, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, NavbarComponent_ng_container_18_Template, 9, 6, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, NavbarComponent_ng_container_19_Template, 9, 6, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_21_listener() {
        return ctx.ToggleClass();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("navbar navbar-expand-lg navbar-light header-navbar ", ctx.transparentBGClass, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction4"](11, _c3, ctx.menuPosition === "Top", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed", ctx.isSmallScreen && ctx.menuPosition === "Top"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.authservice.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUser() && ctx.authservice.isStudent());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"](" ", ctx.toggleClass, " font-medium-3");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_9__.HorizontalMenuComponent, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_10__.TopMenuDirective, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__.ToggleFullscreenDirective, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".logo-text[_ngcontent-%COMP%] {\n  width: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLFdBQUE7QUFFWCIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby10ZXh0e3dpZHRoOiAxNTAlO31cclxuIl19 */"]
});

/***/ }),

/***/ 76430:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSidebarComponent": function() { return /* binding */ NotificationSidebarComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);








function NotificationSidebarComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "System Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "New Update Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "1 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Android Pie 9.0.0_r52v availabe (658MB).");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Download Now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Reminder!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "52 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Your meeting is scheduled with Mr. Derrick Walters at 16:00. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Snooze");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Recieved a File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "4 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Christina Rogers sent you a file for the next conference. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Diamond.sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Voice Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "10 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Natalya Parker sent you a voice message.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Listen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Weather Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Hi John! It is a rainy day with 16\xB0C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Applications Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Just now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Victoria Hampton sent you a mail and has a file attachment with it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Register.pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "MakeMyTrip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "7 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Your next flight for San Francisco will be on 24th March. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Important");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "CNN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "16 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "U.S. investigating report says email account linked to CIA Director was hacked.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Read full article");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Maps");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "You visited Walmart Supercenter in Chicago.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Write a Review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Updates Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "2 days ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "19 app updates found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function NotificationSidebarComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "General Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Use switches when looking for yes or no answers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Show recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "The \"for\" attribute is necessary to bind checkbox with the input.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Product Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Message and mail me on weekly product updates.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Email on Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Mail me when someone follows me.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Announcements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Receive all the news and announcements from my clients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Date and Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Show date and time on top of every page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Email on Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Mail me when someone comments on my article.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

var _c0 = function _c0(a0) {
  return {
    open: a0
  };
};

var NotificationSidebarComponent = /*#__PURE__*/function () {
  function NotificationSidebarComponent(layoutService) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationSidebarComponent);

    this.layoutService = layoutService;
    this.isOpen = false;
    this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(function (open) {
      _this.isOpen = open;
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationSidebarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.layoutService.toggleNotificationSidebar(false);
    }
  }]);

  return NotificationSidebarComponent;
}();

NotificationSidebarComponent.ɵfac = function NotificationSidebarComponent_Factory(t) {
  return new (t || NotificationSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService));
};

NotificationSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NotificationSidebarComponent,
  selectors: [["app-notification-sidebar"]],
  decls: 17,
  vars: 4,
  consts: [["id", "notification-sidebar", 1, "notification-sidebar", "d-none", "d-sm-none", "d-md-block", 3, "ngClass"], [1, "notification-sidebar-close", 3, "click"], [1, "ft-x", "font-medium-3", "grey", "darken-1"], [1, "side-nav", "notification-sidebar-content", 3, "perfectScrollbar"], [1, "row"], [1, "col-12", "notification-tab-content"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", 1, "nav-link"], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["id", "activity-tab", "role", "tabpanel", "aria-expanded", "true", "aria-labelledby", "base-tab1", 1, "row", "tab-pane"], ["id", "activity", 1, "col-12"], [1, "my-2", "text-bold-500"], ["id", "timeline-1", 1, "timeline-left", "timeline-wrapper", "mb-3"], [1, "timeline"], [1, "timeline-line", "mt-4"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-primary", "bg-lighten-4"], [1, "ft-download", "primary"], [1, "activity-list-text"], [1, "mb-1"], [1, "float-right", "grey", "font-italic", "font-small-2"], [1, "mt-0", "mb-2", "font-small-3"], [1, "notification-note"], [1, "p-1", "pl-2"], [1, "text-bold-500"], ["src", "assets/img/portrait/small/avatar-s-15.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/portrait/small/avatar-s-16.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/sketch-mac-icon.png", "alt", "icon", "width", "20"], [1, "text-bold-500", "ml-2"], [1, "ft-mic", "primary"], [1, "ft-cloud-drizzle", "primary"], ["id", "timeline-2", 1, "timeline-left", "timeline-wrapper"], ["src", "assets/img/portrait/small/avatar-s-26.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/pdf.png", "alt", "pdf icon", "width", "20"], [1, "ft-droplet", "primary"], ["src", "assets/img/portrait/small/avatar-s-23.png", "alt", "avatar", "width", "40", 1, "avatar"], [1, "ft-map", "primary"], [1, "ft-package", "primary"], ["id", "settings-tab", "aria-labelledby", "base-tab2", 1, "row", "tab-pane"], ["id", "settings", 1, "col-12"], [1, "mt-2", "mb-3"], [1, "list-unstyled", "mb-0", "mx-2"], [1, "mb-3"], [1, "float-right"], [1, "custom-switch"], ["id", "noti-s-switch-1", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-1", 1, "custom-control-label"], [1, "font-small-3", "m-0"], [1, "checkbox"], ["id", "noti-s-checkbox-1", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-1"], ["id", "noti-s-switch-4", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-4", 1, "custom-control-label"], ["id", "noti-s-switch-3", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-3", 1, "custom-control-label"], ["id", "noti-s-checkbox-2", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-2"], ["id", "noti-s-checkbox-3", "type", "checkbox"], ["for", "noti-s-checkbox-3"], ["id", "noti-s-switch-2", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-2", 1, "custom-control-label"]],
  template: function NotificationSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "aside", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationSidebarComponent_Template_a_click_1_listener() {
        return ctx.onClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nav", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Activity");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NotificationSidebarComponent_ng_template_11_Template, 166, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NotificationSidebarComponent_ng_template_15_Template, 75, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 3865:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/NewDate.pipe.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewDatePipe": function() { return /* binding */ NewDatePipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var NewDatePipe = /*#__PURE__*/function () {
  function NewDatePipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewDatePipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NewDatePipe, [{
    key: "transform",
    value: function transform(value) {
      var allDate = value.split('T');
      var thisDate = allDate[0].split('-');
      var newDate = [thisDate[2], thisDate[1], thisDate[0]].join("-");
      return newDate;
    }
  }]);

  return NewDatePipe;
}();

NewDatePipe.ɵfac = function NewDatePipe_Factory(t) {
  return new (t || NewDatePipe)();
};

NewDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "NewDate",
  type: NewDatePipe,
  pure: true
});

/***/ }),

/***/ 45318:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/Time.pipe.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimePipe": function() { return /* binding */ TimePipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var TimePipe = /*#__PURE__*/function () {
  function TimePipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TimePipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TimePipe, [{
    key: "transform",
    value: function transform(value) {
      if (value) {
        var x = value.search("T");

        if (x != -1) {
          var allDate = value.split('T');
          var thisTime = allDate[1].split(':');
          var suffix = thisTime[0] >= 12 ? "PM" : "AM";
          var hour = thisTime[0] > 12 ? thisTime[0] - 12 : thisTime[0];
          var hour = thisTime[0] == '00' ? 12 : thisTime[0];
          var hour = hour < 10 ? "0" + hour : hour;
          var min = thisTime[1];
          var sec = thisTime[2];
          var newTime = (hour > 12 ? hour - 12 : hour) + ':' + min + ' ' + suffix;
          return newTime;
        } else {
          var thisTime = value.split(':');
          var suffix = thisTime[0] >= 12 ? "PM" : "AM";
          var hour = thisTime[0] > 12 ? thisTime[0] - 12 : thisTime[0];
          var hour = thisTime[0] == '00' ? 12 : thisTime[0];
          var hour = thisTime[0] < 10 ? "0" + thisTime[0] : thisTime[0];
          var min = thisTime[1];
          var sec = thisTime[2];
          var newTime = (hour > 12 ? hour - 12 : hour) + ':' + min + ' ' + suffix;
          return newTime;
        }
      }
    }
  }]);

  return TimePipe;
}();

TimePipe.ɵfac = function TimePipe_Factory(t) {
  return new (t || TimePipe)();
};

TimePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "Time",
  type: TimePipe,
  pure: true
});

/***/ }),

/***/ 24236:
/*!********************************************!*\
  !*** ./src/app/shared/pipes/Timer.pipe.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPipe": function() { return /* binding */ TimerPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var TimerPipe = /*#__PURE__*/function () {
  function TimerPipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TimerPipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TimerPipe, [{
    key: "transform",
    value: function transform(value) {
      var hours = Math.floor(value / 3600);
      var minutes = Math.floor(value % 3600 / 60);
      return ("00" + hours).slice(-2) + ":" + ("00" + minutes).slice(-2) + ":" + ("00" + Math.floor(value - minutes * 60)).slice(-2);
    }
  }]);

  return TimerPipe;
}();

TimerPipe.ɵfac = function TimerPipe_Factory(t) {
  return new (t || TimerPipe)();
};

TimerPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "Timer",
  type: TimerPipe,
  pure: true
});

/***/ }),

/***/ 68738:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": function() { return /* binding */ FilterPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var FilterPipe = /*#__PURE__*/function () {
  function FilterPipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterPipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterPipe, [{
    key: "transform",
    value: function transform(items, searchTerm, labelKey) {
      if (!items || !searchTerm) {
        return null;
      }

      return items.filter(function (item) {
        return item[labelKey || "name"].toLowerCase().includes(searchTerm.toLowerCase()) === true;
      }).slice(0, 10);
    }
  }]);

  return FilterPipe;
}();

FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};

FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: true
});

/***/ }),

/***/ 67361:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": function() { return /* binding */ PipeModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ 68738);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.pipe */ 96903);
/* harmony import */ var _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-name.pipe */ 93100);
/* harmony import */ var _whatsapp_variables_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whatsapp-variables.pipe */ 85965);
/* harmony import */ var _NewDate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewDate.pipe */ 3865);
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./round.pipe */ 12598);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./safe.pipe */ 88246);
/* harmony import */ var _secondsToTime_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./secondsToTime.pipe */ 24838);
/* harmony import */ var _slice_announcement_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slice-announcement.pipe */ 2621);
/* harmony import */ var _slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slice-exam-pic.pipe */ 51033);
/* harmony import */ var _Time_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Time.pipe */ 45318);
/* harmony import */ var _Timer_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Timer.pipe */ 24236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
















var PipeModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PipeModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PipeModule);
});

PipeModule.ɵfac = function PipeModule_Factory(t) {
  return new (t || PipeModule)();
};

PipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: PipeModule
});
PipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](PipeModule, {
    declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortNamePipe, _whatsapp_variables_pipe__WEBPACK_IMPORTED_MODULE_5__.WhatsappVariablesPipe, _round_pipe__WEBPACK_IMPORTED_MODULE_7__.RoundPipe, _Timer_pipe__WEBPACK_IMPORTED_MODULE_13__.TimerPipe, _Time_pipe__WEBPACK_IMPORTED_MODULE_12__.TimePipe, _safe_pipe__WEBPACK_IMPORTED_MODULE_8__.SafePipe, _NewDate_pipe__WEBPACK_IMPORTED_MODULE_6__.NewDatePipe, _secondsToTime_pipe__WEBPACK_IMPORTED_MODULE_9__.SecondsToTimePipe, _slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_11__.SliceExamPicPipe, _slice_announcement_pipe__WEBPACK_IMPORTED_MODULE_10__.SliceAnnouncementPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule],
    exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortNamePipe, _whatsapp_variables_pipe__WEBPACK_IMPORTED_MODULE_5__.WhatsappVariablesPipe, _round_pipe__WEBPACK_IMPORTED_MODULE_7__.RoundPipe, _Timer_pipe__WEBPACK_IMPORTED_MODULE_13__.TimerPipe, _Time_pipe__WEBPACK_IMPORTED_MODULE_12__.TimePipe, _safe_pipe__WEBPACK_IMPORTED_MODULE_8__.SafePipe, _NewDate_pipe__WEBPACK_IMPORTED_MODULE_6__.NewDatePipe, _secondsToTime_pipe__WEBPACK_IMPORTED_MODULE_9__.SecondsToTimePipe, _slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_11__.SliceExamPicPipe, _slice_announcement_pipe__WEBPACK_IMPORTED_MODULE_10__.SliceAnnouncementPipe]
  });
})();

/***/ }),

/***/ 12598:
/*!********************************************!*\
  !*** ./src/app/shared/pipes/round.pipe.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundPipe": function() { return /* binding */ RoundPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var RoundPipe = /*#__PURE__*/function () {
  function RoundPipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RoundPipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RoundPipe, [{
    key: "transform",
    value: function transform(value) {
      return Math.round(value);
    }
  }]);

  return RoundPipe;
}();

RoundPipe.ɵfac = function RoundPipe_Factory(t) {
  return new (t || RoundPipe)();
};

RoundPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "round",
  type: RoundPipe,
  pure: true
});

/***/ }),

/***/ 88246:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": function() { return /* binding */ SafePipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);




var SafePipe = /*#__PURE__*/function () {
  function SafePipe(sanitizer) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SafePipe);

    this.sanitizer = sanitizer;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SafePipe, [{
    key: "transform",
    value: function transform(url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }]);

  return SafePipe;
}();

SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, 16));
};

SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});

/***/ }),

/***/ 96903:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": function() { return /* binding */ SearchPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SearchPipe = /*#__PURE__*/function () {
  function SearchPipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchPipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchPipe, [{
    key: "transform",
    value: function transform(value, keys, term) {
      if (!term) return value;
      return (value || []).filter(function (item) {
        return keys.split(',').some(function (key) {
          return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]);
        });
      });
    }
  }]);

  return SearchPipe;
}();

SearchPipe.ɵfac = function SearchPipe_Factory(t) {
  return new (t || SearchPipe)();
};

SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "search",
  type: SearchPipe,
  pure: true
});

/***/ }),

/***/ 24838:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/secondsToTime.pipe.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondsToTimePipe": function() { return /* binding */ SecondsToTimePipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SecondsToTimePipe = /*#__PURE__*/function () {
  function SecondsToTimePipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SecondsToTimePipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SecondsToTimePipe, [{
    key: "transform",
    value: function transform(value) {
      var date = new Date(0);
      date.setSeconds(value); // specify value for SECONDS here

      var timeString = date.toISOString().substr(11, 8);
      return timeString;
    }
  }]);

  return SecondsToTimePipe;
}();

SecondsToTimePipe.ɵfac = function SecondsToTimePipe_Factory(t) {
  return new (t || SecondsToTimePipe)();
};

SecondsToTimePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "secondsToTime",
  type: SecondsToTimePipe,
  pure: true
});

/***/ }),

/***/ 93100:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/short-name.pipe.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortNamePipe": function() { return /* binding */ ShortNamePipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var ShortNamePipe = /*#__PURE__*/function () {
  function ShortNamePipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShortNamePipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ShortNamePipe, [{
    key: "transform",
    value: function transform(fullName) {
      return fullName.split(' ').map(function (n) {
        return n[0];
      }).join('');
    }
  }]);

  return ShortNamePipe;
}();

ShortNamePipe.ɵfac = function ShortNamePipe_Factory(t) {
  return new (t || ShortNamePipe)();
};

ShortNamePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "shortName",
  type: ShortNamePipe,
  pure: true
});

/***/ }),

/***/ 2621:
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/slice-announcement.pipe.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceAnnouncementPipe": function() { return /* binding */ SliceAnnouncementPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SliceAnnouncementPipe = /*#__PURE__*/function () {
  function SliceAnnouncementPipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SliceAnnouncementPipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SliceAnnouncementPipe, [{
    key: "transform",
    value: function transform(value) {
      //console.log(value.replace(/(<([^>]+)>)/gi, ""));
      return value.replace(/(<([^>]+)>)/gi, "");
    }
  }]);

  return SliceAnnouncementPipe;
}();

SliceAnnouncementPipe.ɵfac = function SliceAnnouncementPipe_Factory(t) {
  return new (t || SliceAnnouncementPipe)();
};

SliceAnnouncementPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "sliceAnnouncement",
  type: SliceAnnouncementPipe,
  pure: true
});

/***/ }),

/***/ 51033:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/slice-exam-pic.pipe.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceExamPicPipe": function() { return /* binding */ SliceExamPicPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SliceExamPicPipe = /*#__PURE__*/function () {
  function SliceExamPicPipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SliceExamPicPipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SliceExamPicPipe, [{
    key: "transform",
    value: function transform(value) {
      var str = value.toLowerCase().search("../attachments");

      if (str != -1) {
        return value.slice(2);
      } else {
        return value;
      }
    }
  }]);

  return SliceExamPicPipe;
}();

SliceExamPicPipe.ɵfac = function SliceExamPicPipe_Factory(t) {
  return new (t || SliceExamPicPipe)();
};

SliceExamPicPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "sliceExamPic",
  type: SliceExamPicPipe,
  pure: true
});

/***/ }),

/***/ 85965:
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/whatsapp-variables.pipe.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsappVariablesPipe": function() { return /* binding */ WhatsappVariablesPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var WhatsappVariablesPipe = /*#__PURE__*/function () {
  function WhatsappVariablesPipe() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WhatsappVariablesPipe);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WhatsappVariablesPipe, [{
    key: "transform",
    value: function transform(value) {
      return value.replace(/[{,}]/g, "");
    }
  }]);

  return WhatsappVariablesPipe;
}();

WhatsappVariablesPipe.ɵfac = function WhatsappVariablesPipe_Factory(t) {
  return new (t || WhatsappVariablesPipe)();
};

WhatsappVariablesPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "whatsappVariables",
  type: WhatsappVariablesPipe,
  pure: true
});

/***/ }),

/***/ 90578:
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Full_ROUTES": function() { return /* binding */ Full_ROUTES; }
/* harmony export */ });
/* harmony import */ var _services_auth_Guards_roles_is_support_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth/Guards/roles/is-support.guard */ 43937);
/* harmony import */ var _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user-data/user-data.component */ 18515);
/* harmony import */ var _services_auth_Guards_auth_is_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/Guards/auth/is-user.guard */ 13670);


 //Route for content layout with sidebar, navbar and footer.

var Full_ROUTES = [// {
//   path: "home",
//   loadChildren: () =>
//     import("../../home/home.module").then((m) => m.HomeModule),
// },
{
  path: "profile",
  component: _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_1__.UserDataComponent,
  canActivate: [_services_auth_Guards_auth_is_user_guard__WEBPACK_IMPORTED_MODULE_2__.IsUserGuard]
}, // Admin
{
  path: "dashboard",
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_admin_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../admin/dashboard.module */ 60051)).then(function (m) {
      return m.DashboardModule;
    });
  }
}, // Assistant
{
  path: "dashboard",
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_assistant_assistant_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../assistant/assistant.module */ 1168)).then(function (m) {
      return m.AssistantModule;
    });
  }
}, // Student
{
  path: "student",
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_services_Admin_educational_service_ts-src_app_admin_services_Admin_subj-47c40a"), __webpack_require__.e("default-src_app_home_pages_custome-educational-year-subjects_custome-educational-year-subject-9764cb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_student_student_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../student/student.module */ 47859)).then(function (m) {
      return m.StudentModule;
    });
  } //canActivate: [IsStudentGuard],

}, // support
{
  path: "support",
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../support/support.module */ 96758)).then(function (m) {
      return m.SupportModule;
    });
  },
  canActivate: [_services_auth_Guards_roles_is_support_guard__WEBPACK_IMPORTED_MODULE_0__.IsSupportGuard]
}];

/***/ }),

/***/ 65086:
/*!************************************************************!*\
  !*** ./src/app/shared/services/General/general.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": function() { return /* binding */ GeneralService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var GeneralService = /*#__PURE__*/function () {
  function GeneralService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GeneralService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GeneralService, [{
    key: "getAllEduCompList",
    value: function getAllEduCompList() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "EduComponent");
    }
  }, {
    key: "returnProfile",
    value: function returnProfile() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnProfile");
    }
  }, {
    key: "editProfile",
    value: function editProfile(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/editProfile", data);
    }
  }, {
    key: "getAllEduStagesList",
    value: function getAllEduStagesList() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/getStages");
    }
  }, {
    key: "getEduYearByStageId",
    value: function getEduYearByStageId(stageId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/getEducationalYear/" + stageId);
    }
  }, {
    key: "getSubjectsByYearId",
    value: function getSubjectsByYearId(yearId) {
      // دي فالباك بترجع المواد بال teacherUserId not yearId
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/getSubjects/").concat(yearId));
    }
  }, {
    key: "getSubjectsByYearIdNew",
    value: function getSubjectsByYearIdNew(yearId) {
      // دي فالباك بترجع المواد بال  yearId
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/getSubjectsByYear/").concat(yearId));
    }
  }, {
    key: "getTeachersBySubjectId",
    value: function getTeachersBySubjectId(subjectId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/getTeachers/" + subjectId);
    }
  }, {
    key: "getTeachersMaterials",
    value: function getTeachersMaterials(subjectId, teacherId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnMaterialsByMainSubjectTeacherId/".concat(subjectId, "/").concat(teacherId));
    }
  }, {
    key: "getUserBoughtedMaterials",
    value: function getUserBoughtedMaterials(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/getUserMaterialsByTeacherSubject", data);
    }
  }, {
    key: "getEduCompByUser",
    value: function getEduCompByUser() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnEducationalComponentByUser");
    }
  }, {
    key: "getBranchesByEduComp",
    value: function getBranchesByEduComp(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/returBranchesByEduCompId/").concat(EduCompId));
    }
  }, {
    key: "returnStages",
    value: function returnStages(teacherId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnStages/" + teacherId);
    }
  }, {
    key: "getAllCountriesList",
    value: function getAllCountriesList() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getAllCountriesList");
    }
  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId(EduCompId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-all-teachers/" + EduCompId);
    }
  }, {
    key: "getTeacherBySubjectAndEduCompId",
    value: function getTeacherBySubjectAndEduCompId(EduCompId, subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getTeachersByEduCompID/").concat(EduCompId, "/").concat(subjectId));
    }
  }, {
    key: "getSubjectByTeacherId",
    value: function getSubjectByTeacherId(teacherId) {
      var yearId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-all-lectures/").concat(teacherId, "/").concat(yearId));
    }
  }, {
    key: "getAllSubjectByCustomEducationalYear",
    value: function getAllSubjectByCustomEducationalYear(yearId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getAllSubjectFroCustomEducationalYear/").concat(yearId));
    }
  }, {
    key: "getAllNotifications",
    value: function getAllNotifications(yearId, page) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnNotificationsByUserId/" + yearId + "/" + page);
    }
  }, {
    key: "ReadNotification",
    value: function ReadNotification(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/ReadNotification/" + id);
    }
  }]);

  return GeneralService;
}();

GeneralService.ɵfac = function GeneralService_Factory(t) {
  return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

GeneralService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GeneralService,
  factory: GeneralService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 75013:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/General/upload-file.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileService": function() { return /* binding */ FileService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }




var FileService = /*#__PURE__*/function () {
  function FileService() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileService);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FileService, [{
    key: "uploadFile",
    value: function uploadFile(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var file, reader, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = event.target.files[0];
                reader = new FileReader();
                data = {};
                reader === null || reader === void 0 ? void 0 : reader.readAsDataURL(file);

                reader.onload = function (event) {
                  data.FileAsBase64 = event.target.result;
                };

                data.name = file.name;
                data.size = file.size;
                data.type = file.type;
                data.LastModified = file.lastModified;
                data.LastModifiedDate = file.lastModifiedDate;
                _context.next = 12;
                return data;

              case 12:
                return _context.abrupt("return", _context.sent);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(url) {
      window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + url, "_blank");
    }
  }, {
    key: "previewPicture",
    value: function previewPicture(url) {
      if (url) {
        if (!url.FileAsBase64) return environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + url;else return url.FileAsBase64;
      }
    }
  }, {
    key: "resetFileInputs",
    value: function resetFileInputs() {
      var FileInputs = document.querySelectorAll('input[type="file"]');
      FileInputs.forEach(function (input) {
        input.value = null;
      });
    }
  }, {
    key: "resetFileById",
    value: function resetFileById(htmlId) {
      console.log("htmlId", htmlId);
      if (htmlId != null) (document === null || document === void 0 ? void 0 : document.getElementById(htmlId)).value = null;
    }
  }]);

  return FileService;
}();

FileService.ɵfac = function FileService_Factory(t) {
  return new (t || FileService)();
};

FileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: FileService,
  factory: FileService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 13670:
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/auth/Guards/auth/is-user.guard.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsUserGuard": function() { return /* binding */ IsUserGuard; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ 16256);





var IsUserGuard = /*#__PURE__*/function () {
  function IsUserGuard(route, authservice) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IsUserGuard);

    this.route = route;
    this.authservice = authservice;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IsUserGuard, [{
    key: "canActivate",
    value: function canActivate(route, state) {
      if (localStorage.getItem("token")) {
        return true;
      } else {
        this.route.navigate(["/auth/login"], {
          queryParams: {
            returnUrl: state.url
          }
        });
        return false;
      }
    }
  }]);

  return IsUserGuard;
}();

IsUserGuard.ɵfac = function IsUserGuard_Factory(t) {
  return new (t || IsUserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

IsUserGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: IsUserGuard,
  factory: IsUserGuard.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 43937:
/*!***********************************************************************!*\
  !*** ./src/app/shared/services/auth/Guards/roles/is-support.guard.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsSupportGuard": function() { return /* binding */ IsSupportGuard; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ 16256);





var IsSupportGuard = /*#__PURE__*/function () {
  function IsSupportGuard(route, authservice) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IsSupportGuard);

    this.route = route;
    this.authservice = authservice;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IsSupportGuard, [{
    key: "canActivate",
    value: function canActivate(route, state) {
      if (this.authservice.isSupport()) {
        return true;
      } else {
        this.route.navigateByUrl("/home");
        return false;
      }
    }
  }]);

  return IsSupportGuard;
}();

IsSupportGuard.ɵfac = function IsSupportGuard_Factory(t) {
  return new (t || IsSupportGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

IsSupportGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: IsSupportGuard,
  factory: IsSupportGuard.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 16256:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);








var AuthService = /*#__PURE__*/function () {
  function AuthService(http, router) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthService);

    this.http = http;
    this.router = router;
    this.EduCompId = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.branchId = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.NewReservation = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().append("Content-Type", "application/json");
  } // START Registeration


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthService, [{
    key: "Registeration",
    value: function Registeration(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "APIUsers/Register", data);
    } // START LOGIN

  }, {
    key: "login",
    value: function login(loginData) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "user/login", loginData);
    } //START LOGOUT

  }, {
    key: "logout",
    value: function logout() {
      Object.keys(localStorage).forEach(function (key) {
        if (!(key.includes("currentLang") || key.includes("NewReservation"))) delete localStorage[key];
      }); //   localStorage.clear();

      this.router.navigateByUrl("/home");
    } // START Forgot Password

  }, {
    key: "forgotPassword",
    value: function forgotPassword(email) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "APIUsers/forgotPassword", email);
    } // START Reset Password

  }, {
    key: "resetPassword",
    value: function resetPassword(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "APIUsers/resetPasswordByVerificationCode", data);
    }
  }, {
    key: "getUserFunctions",
    value: function getUserFunctions(branchId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/return-functions/").concat(branchId));
    }
  }, {
    key: "getUserRowFunctions",
    value: function getUserRowFunctions(parentId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/return-children-functions-by-parentId/").concat(parentId));
    } //================= Start  Chick Users ==================

  }, {
    key: "isUser",
    value: function isUser() {
      return !!localStorage.getItem("token");
    }
  }, {
    key: "isTeacher",
    value: function isTeacher() {
      if (localStorage.getItem("user_type_Id") == "1" && this.isUser()) {
        return true;
      } else return false;
    }
  }, {
    key: "isStudent",
    value: function isStudent() {
      if (localStorage.getItem("user_type_Id") == "2" && this.isUser()) {
        return true;
      } else return false;
    }
  }, {
    key: "isParent",
    value: function isParent() {
      if (localStorage.getItem("user_type_Id") == "3" && this.isUser()) {
        return true;
      } else return false;
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      if (localStorage.getItem("user_type_Id") == "4" && this.isUser()) {
        return true;
      } else return false;
    }
  }, {
    key: "isCenter",
    value: function isCenter() {
      if (localStorage.getItem("user_type_Id") == "5" && this.isUser()) {
        return true;
      } else return false;
    }
  }, {
    key: "isSupport",
    value: function isSupport() {
      if (localStorage.getItem("user_type_Id") == "6" && this.isUser()) {
        return true;
      } else return false;
    }
  }, {
    key: "isFinancial",
    value: function isFinancial() {
      if (localStorage.getItem("user_type_Id") == "7" && this.isUser()) {
        return true;
      } else return false;
    }
  }, {
    key: "isAssistant",
    value: function isAssistant() {
      if (localStorage.getItem("user_type_Id") == "8" && this.isUser()) {
        return true;
      } else return false;
    } // isUser GetToken

  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem("token") || null;
    }
  }, {
    key: "getNewReservation",
    value: function getNewReservation() {
      return Number(localStorage.getItem("NewReservation"));
    }
  }, {
    key: "getEduCompId",
    value: function getEduCompId() {
      return Number(localStorage.getItem("EduCompId"));
    }
  }, {
    key: "getBranchId",
    value: function getBranchId() {
      return Number(localStorage.getItem("branchId"));
    }
  }, {
    key: "setEduCompId",
    value: function setEduCompId(EduCompId) {
      localStorage.setItem("EduCompId", EduCompId || null);
      this.EduCompId.next({
        EduCompId: EduCompId
      });
    }
  }, {
    key: "setBranchId",
    value: function setBranchId(branchId) {
      localStorage.setItem("branchId", branchId || null);
      this.branchId.next({
        branchId: branchId
      });
    }
  }, {
    key: "setNewReservation",
    value: function setNewReservation(NewReservation) {
      var _this = this;

      console.log("Auth:", NewReservation);
      localStorage.setItem("NewReservation", NewReservation || 0);
      this.NewReservation.subscribe(function (valu) {
        _this.CurrentReservation = valu !== null && valu !== void 0 ? valu : 0;
      });
      if (this.CurrentReservation != NewReservation) this.NewReservation.next(NewReservation);
    } // setEducationType(EducationTypeId: any) {
    //   console.log("EducationTypeId:", EducationTypeId);
    //   localStorage.setItem("EducationTypeId", EducationTypeId);
    //   this.EducationTypeId.next(EducationTypeId);
    // }
    //Current YearId

  }, {
    key: "CurrentYearId",
    value: function CurrentYearId() {
      return Number(localStorage.getItem("yearId"));
    } //Current StageId

  }, {
    key: "CurrentStageId",
    value: function CurrentStageId() {
      return Number(localStorage.getItem("stageId"));
    }
  }]);

  return AuthService;
}(); //end class

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 45802:
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/auth/error-interceptor.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": function() { return /* binding */ ErrorInterceptor; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);









var ErrorInterceptor = /*#__PURE__*/function () {
  function ErrorInterceptor(authService, router, toastr, spinner) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorInterceptor);

    this.authService = authService;
    this.router = router;
    this.toastr = toastr;
    this.spinner = spinner;
    this.totalRequests = 0;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorInterceptor, [{
    key: "intercept",
    value: function intercept(request, next) {
      var _this = this;

      this.totalRequests++; // this.spinner.show();

      return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (err) {
        var error;

        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden
          _this.toastr.error("Login Session has expired!");

          _this.authService.logout();

          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)("Session has expired!");
        } else if (err.status === 404) {
          // this.router.navigate(["/notFound", err.status], {
          //   queryParams: {
          //     "Error-Status": err.status
          //   }
          // });
          error = err.message || err.statusText;

          _this.toastr.error(err.message, "Error");

          _this.spinner.hide();

          console.log(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }

        if (err.status === 500 || err.status === 400) {
          // this.router.navigate(["", err.status], {
          //   queryParams: {
          //     "Error-Status": err.status
          //   }
          // });
          error = err.message || err.statusText;

          _this.toastr.error(err.message, "Error");

          _this.spinner.hide();

          console.log(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        } else {
          error = err.message || err.statusText;

          _this.toastr.error(err.message, "Error");

          _this.spinner.hide();

          console.log(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(function () {
        _this.totalRequests--;

        if (_this.totalRequests <= 0) {
          _this.spinner.hide();
        }
      }));
    }
  }]);

  return ErrorInterceptor;
}();

ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService));
};

ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 55082:
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/auth/token-interceptor.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptorService": function() { return /* binding */ TokenInterceptorService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 16256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var TokenInterceptorService = /*#__PURE__*/function () {
  function TokenInterceptorService(injector, AuthService) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TokenInterceptorService);

    this.injector = injector;
    this.AuthService = AuthService;
    this.NewReservation = 0;
    this.NewReservation = localStorage.getItem("NewReservation"); // console.log("Interceptor-NewReservation:", this.NewReservation);

    AuthService.NewReservation.subscribe(function (value) {
      if (_this.NewReservation != value) _this.NewReservation = value;
      console.log("NewReservation", _this.NewReservation);
    });
  } // INTERCEPTORS are not dependable classes so we need to use
  // Injector to hold the required dependencies


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TokenInterceptorService, [{
    key: "intercept",
    value: function intercept(req, next) {
      var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
      var tokenReq = req.clone({
        setHeaders: {
          Authorization: "Basic ".concat(authService.getToken()),
          "New-Reservation": "".concat(this.NewReservation),
          "Content-Type": "application/json"
        }
      });
      return next.handle(tokenReq);
    }
  }]);

  return TokenInterceptorService;
}();

TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
  return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

TokenInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TokenInterceptorService,
  factory: TokenInterceptorService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 36955:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": function() { return /* binding */ ConfigService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ConfigService = /*#__PURE__*/function () {
  function ConfigService() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConfigService);

    this.templateConf = this.setConfigValue();
    this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.templateConf);
    this.templateConf$ = this.templateConfSubject.asObservable();
  } // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfigService, [{
    key: "setConfigValue",
    value: function setConfigValue() {
      return this.templateConf = {
        layout: {
          variant: "Light",
          menuPosition: "Top",
          customizer: {
            hidden: true
          },
          navbar: {
            type: "Static"
          },
          sidebar: {
            collapsed: false,
            size: "sidebar-md",
            backgroundColor: "man-of-steel",
            backgroundImage: true,
            backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
          }
        }
      };
    } // Default configurations for Dark layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Dark",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "black",
    //         backgroundImage: true,
    //         backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
    //       }
    //     }
    //   };
    // }
    // Default configurations for Transparent layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Transparent",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "bg-glass-1",
    //         backgroundImage: true,
    //         backgroundImageURL: ""
    //       }
    //     }
    //   };
    // }

  }, {
    key: "applyTemplateConfigChange",
    value: function applyTemplateConfigChange(tempConfig) {
      this.templateConf = Object.assign(this.templateConf, tempConfig);
      this.templateConfSubject.next(this.templateConf);
    }
  }]);

  return ConfigService;
}();

ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)();
};

ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 60360:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerService": function() { return /* binding */ CustomizerService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 36955);




var CustomizerService = /*#__PURE__*/function () {
  function CustomizerService(config) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomizerService);

    this.config = config; // sidebar BG colors for Light & Dark Layout

    this.light_dark_colors = [{
      code: "mint",
      class: "gradient-mint",
      active: false,
      type: 'gradient'
    }, {
      code: "king-yna",
      class: "gradient-king-yna",
      active: false,
      type: 'gradient'
    }, {
      code: "ibiza-sunset",
      class: "gradient-ibiza-sunset",
      active: false,
      type: 'gradient'
    }, {
      code: "flickr",
      class: "gradient-flickr",
      active: false,
      type: 'gradient'
    }, {
      code: "purple-bliss",
      class: "gradient-purple-bliss",
      active: false,
      type: 'gradient'
    }, {
      code: "man-of-steel",
      class: "gradient-man-of-steel",
      active: false,
      type: 'gradient'
    }, {
      code: "purple-love",
      class: "gradient-purple-love",
      active: false,
      type: 'gradient'
    }, {
      code: "black",
      class: "bg-black",
      active: false,
      type: 'solid'
    }, {
      code: "white",
      class: "bg-grey",
      active: false,
      type: 'solid'
    }, {
      code: "primary",
      class: "bg-primary",
      active: false,
      type: 'solid'
    }, {
      code: "success",
      class: "bg-success",
      active: false,
      type: 'solid'
    }, {
      code: "warning",
      class: "bg-warning",
      active: false,
      type: 'solid'
    }, {
      code: "info",
      class: "bg-info",
      active: false,
      type: 'solid'
    }, {
      code: "danger",
      class: "bg-danger",
      active: false,
      type: 'solid'
    }]; // sidebar BG colors for Transparent Layout

    this.transparent_colors = [{
      class: "bg-glass-hibiscus",
      active: false
    }, {
      class: "bg-glass-purple-pizzazz",
      active: false
    }, {
      class: "bg-glass-blue-lagoon",
      active: false
    }, {
      class: "bg-glass-electric-violet",
      active: false
    }, {
      class: "bg-glass-portage",
      active: false
    }, {
      class: "bg-glass-tundora",
      active: false
    }]; // sidebar BG images for Light & Dark Layout

    this.light_dark_bg_images = [{
      src: "assets/img/sidebar-bg/01.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/02.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/03.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/04.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/05.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/06.jpg",
      active: false
    }]; // Background Colors with Shades for Transparent Layout

    this.transparent_colors_with_shade = [{
      class: "bg-glass-1",
      active: false
    }, {
      class: "bg-glass-2",
      active: false
    }, {
      class: "bg-glass-3",
      active: false
    }, {
      class: "bg-glass-4",
      active: false
    }];
    this.lightDarkLayoutGradientBGColors = [];
    this.lightDarkLayoutSolidBGColors = [];
    this.transparentLayoutBGColors = [];
    this.transparentLayoutBGColorsWithShades = [];
    this.lightDarkLayoutBGImages = [];
    this.getData();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomizerService, [{
    key: "getData",
    value: function getData() {
      this.lightDarkLayoutGradientBGColors = this.getlightDarkLayoutGradientBGColors();
      this.lightDarkLayoutSolidBGColors = this.getlightDarkLayoutSolidBGColors();
      this.transparentLayoutBGColors = this.getTransparentLayoutBGColors();
      this.transparentLayoutBGColorsWithShades = this.GetTransparentLayoutBGColorsWithShades();
      this.lightDarkLayoutBGImages = this.getLightDarkLayoutBGImages();
    }
  }, {
    key: "getlightDarkLayoutGradientBGColors",
    value: function getlightDarkLayoutGradientBGColors() {
      var _this = this;

      return this.light_dark_colors.filter(function (_) {
        return _.type === 'gradient';
      }).map(function (color) {
        color.active = color.code === _this.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "getlightDarkLayoutSolidBGColors",
    value: function getlightDarkLayoutSolidBGColors() {
      var _this2 = this;

      return this.light_dark_colors.filter(function (_) {
        return _.type === 'solid';
      }).map(function (color) {
        color.active = color.code === _this2.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "getTransparentLayoutBGColors",
    value: function getTransparentLayoutBGColors() {
      var _this3 = this;

      return this.transparent_colors.map(function (color) {
        color.active = color.class === _this3.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "GetTransparentLayoutBGColorsWithShades",
    value: function GetTransparentLayoutBGColorsWithShades() {
      var _this4 = this;

      return this.transparent_colors_with_shade.map(function (color) {
        color.active = color.class === _this4.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "getLightDarkLayoutBGImages",
    value: function getLightDarkLayoutBGImages() {
      var _this5 = this;

      return this.light_dark_bg_images.map(function (image) {
        image.active = image.src === _this5.config.templateConf.layout.sidebar.backgroundImageURL;
        return Object.assign({}, image);
      });
    } //called when click to change on any Gradient/Solid color for Light & Dark layout in customizer

  }, {
    key: "changeSidebarBGColor",
    value: function changeSidebarBGColor(color) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.backgroundColor = color.code;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    } //called when click to change on any Transparent color for Transparent layout in customizer

  }, {
    key: "changeSidebarTransparentBGColor",
    value: function changeSidebarTransparentBGColor(color) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.backgroundColor = color.class;
      conf.layout.sidebar.backgroundImage = false;
      conf.layout.sidebar.backgroundImageURL = '';
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    } //called when click to change on any image for Light & Dark layout in customizer

  }, {
    key: "changeSidebarBgImage",
    value: function changeSidebarBgImage(image) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.backgroundImageURL = image.src;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    }
  }, {
    key: "bgImageDisplay",
    value: function bgImageDisplay(e) {
      var conf = this.config.templateConf;

      if (e.target.checked) {
        conf.layout.sidebar.backgroundImage = true;
      } else {
        conf.layout.sidebar.backgroundImage = false;
      }

      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "toggleCompactMenu",
    value: function toggleCompactMenu(e) {
      var conf = this.config.templateConf;

      if (e.target.checked) {
        conf.layout.sidebar.collapsed = true;
      } else {
        conf.layout.sidebar.collapsed = false;
      }

      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "changeSidebarWidth",
    value: function changeSidebarWidth(value) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.size = value;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "toggleNavbarType",
    value: function toggleNavbarType(value) {
      var conf = this.config.templateConf;
      conf.layout.navbar.type = value;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    } // position: "Side" for vertical menu and position: "Top" for horizontal menu

  }, {
    key: "toggleMenuPosition",
    value: function toggleMenuPosition(position) {
      var conf = this.config.templateConf;
      conf.layout.menuPosition = position;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "switchLayout",
    value: function switchLayout(layout, isBgImageDisplay) {
      var conf = this.config.templateConf;

      if (layout.toLowerCase() === 'light') {
        conf.layout.variant = 'Light';
        conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[0].src;
        conf.layout.sidebar.backgroundColor = this.light_dark_colors[5].code;
        conf.layout.sidebar.backgroundImage = isBgImageDisplay;
      } else if (layout.toLowerCase() === 'dark') {
        conf.layout.variant = 'Dark';
        conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[2].src;
        conf.layout.sidebar.backgroundColor = this.light_dark_colors[7].code;
        conf.layout.sidebar.backgroundImage = isBgImageDisplay;
      } else if (layout.toLowerCase() === 'transparent') {
        conf.layout.variant = 'Transparent';
        conf.layout.sidebar.backgroundImageURL = "";
        conf.layout.sidebar.backgroundColor = this.transparent_colors_with_shade[0].class;
      }

      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    }
  }]);

  return CustomizerService;
}();

CustomizerService.ɵfac = function CustomizerService_Factory(t) {
  return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
};

CustomizerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CustomizerService,
  factory: CustomizerService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 75531:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/language.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": function() { return /* binding */ LanguageService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _data_styles_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/styles-path */ 73515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _data_app_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/app-strings */ 57834);






var LanguageService = /*#__PURE__*/function () {
  function LanguageService(translate, appStrings) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LanguageService);

    this.translate = translate;
    this.appStrings = appStrings;
    this.arStyles = _data_styles_path__WEBPACK_IMPORTED_MODULE_2__.arStylesFiles;
    this.enStyles = _data_styles_path__WEBPACK_IMPORTED_MODULE_2__.enStylesFiles;
    this.currentLang = localStorage.getItem(this.appStrings.CURRENT_LANG);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LanguageService, [{
    key: "changeLanguage",
    value: function changeLanguage(language) {
      this.translate.use(language !== null && language !== void 0 ? language : this.appStrings.DEFAULT_LANG);
      localStorage.setItem(this.appStrings.CURRENT_LANG, language !== null && language !== void 0 ? language : this.appStrings.DEFAULT_LANG);
      this.currentLang = language; // this.translate.onLangChange.subscribe((lang) => {

      if (this.currentLang == this.appStrings.ar) {
        console.log("isArabic");
        this.isArabic = true;
        this.isEnglish = false;
      } else {
        this.isEnglish = true;
        this.isArabic = false;
      } //  });
      // console.log("lang", language);
      // console.log("isEnglish", this.isEnglish);
      // console.log("isArabic", this.isArabic);


      this.changeStyle(language);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(currentLang) {
      var head = document.getElementsByTagName("head")[0];

      if (currentLang == this.appStrings.ar) {
        // add ar style
        this.arStyles.forEach(function (style) {
          var ele = document.createElement("link");
          ele.id = style.id;
          ele.rel = style.rel;
          ele.href = style.href;
          head.appendChild(ele);
        }); // remove en style

        this.enStyles.forEach(function (style) {
          var _a;

          (_a = document.getElementById(style.id)) === null || _a === void 0 ? void 0 : _a.remove();
        });
      } else {
        // add en style
        this.enStyles.forEach(function (style) {
          var ele = document.createElement("link");
          ele.id = style.id;
          ele.rel = style.rel;
          ele.href = style.href;
          head.appendChild(ele);
        }); // remove ar style

        this.arStyles.forEach(function (style) {
          var _a;

          (_a = document.getElementById(style.id)) === null || _a === void 0 ? void 0 : _a.remove();
        });
      }
    }
  }]);

  return LanguageService;
}();

LanguageService.ɵfac = function LanguageService_Factory(t) {
  return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_data_app_strings__WEBPACK_IMPORTED_MODULE_3__.AppStrings));
};

LanguageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: LanguageService,
  factory: LanguageService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 85682:
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": function() { return /* binding */ LayoutService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var LayoutService = /*#__PURE__*/function () {
  function LayoutService() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayoutService);

    this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // small screen

    this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.toggleNotiSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // Observable

    this.toggleSidebar$ = this.toggleSidebar.asObservable();
    this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
    this.toggleNotiSidebar$ = this.toggleNotiSidebar.asObservable();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LayoutService, [{
    key: "toggleSidebarSmallScreen",
    value: function toggleSidebarSmallScreen(toggle) {
      this.toggleSidebar.next(toggle);
    }
  }, {
    key: "overlaySidebartoggle",
    value: function overlaySidebartoggle(toggle) {
      this.overlaySidebarToggle.next(toggle);
    }
  }, {
    key: "toggleNotificationSidebar",
    value: function toggleNotificationSidebar(toggle) {
      this.toggleNotiSidebar.next(toggle);
    }
  }]);

  return LayoutService;
}();

LayoutService.ɵfac = function LayoutService_Factory(t) {
  return new (t || LayoutService)();
};

LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LayoutService,
  factory: LayoutService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 29430:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/messages.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": function() { return /* binding */ MessagesService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





var MessagesService = /*#__PURE__*/function () {
  function MessagesService(toastr, translate) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MessagesService);

    this.toastr = toastr;
    this.translate = translate;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MessagesService, [{
    key: "success",
    value: function success(message, title, override) {
      var _this = this;

      var msg;
      this.translate.get(message).subscribe(function (data) {
        msg = _this.toastr.success(data, title, override);
      });
      return msg;
    }
  }, {
    key: "error",
    value: function error(message, title, override) {
      var _this2 = this;

      var msg;
      this.translate.get(message).subscribe(function (data) {
        msg = _this2.toastr.error(data, title, override);
      });
      return msg;
    }
  }, {
    key: "info",
    value: function info(message, title, override) {
      var _this3 = this;

      var msg;
      this.translate.get(message).subscribe(function (data) {
        msg = _this3.toastr.info(data, title, override);
      });
      return msg;
    }
  }, {
    key: "warning",
    value: function warning(message, title, override) {
      var _this4 = this;

      var msg;
      this.translate.get(message).subscribe(function (data) {
        msg = _this4.toastr.warning(data, title, override);
      });
      return msg;
    }
  }, {
    key: "show",
    value: function show(message, title, override) {
      var _this5 = this;

      var msg;
      this.translate.get(message).subscribe(function (data) {
        msg = _this5.toastr.show(data, title, override);
      });
      return msg;
    }
  }]);

  return MessagesService;
}();

MessagesService.ɵfac = function MessagesService_Factory(t) {
  return new (t || MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
};

MessagesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MessagesService,
  factory: MessagesService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 60294:
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": function() { return /* binding */ BrowserWindowRef; },
/* harmony export */   "WINDOW": function() { return /* binding */ WINDOW; },
/* harmony export */   "WINDOW_PROVIDERS": function() { return /* binding */ WINDOW_PROVIDERS; },
/* harmony export */   "WindowRef": function() { return /* binding */ WindowRef; },
/* harmony export */   "browserWindowProvider": function() { return /* binding */ browserWindowProvider; },
/* harmony export */   "windowFactory": function() { return /* binding */ windowFactory; },
/* harmony export */   "windowProvider": function() { return /* binding */ windowProvider; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







/* Create a new injection token for injecting the window into a component. */

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */

var WindowRef = /*#__PURE__*/function () {
  function WindowRef() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WindowRef);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(WindowRef, [{
    key: "nativeWindow",
    get: function get() {
      throw new Error('Not implemented.');
    }
  }]);

  return WindowRef;
}();
/* Define class that implements the abstract class and returns the native window object. */

var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BrowserWindowRef, _WindowRef);

  var _super = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserWindowRef);

  function BrowserWindowRef() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BrowserWindowRef);

    return _super.call(this);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(BrowserWindowRef, [{
    key: "nativeWindow",
    get: function get() {
      return window;
    }
  }]);

  return BrowserWindowRef;
}(WindowRef);

BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
  return new (t || BrowserWindowRef)();
};

BrowserWindowRef.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: BrowserWindowRef,
  factory: BrowserWindowRef.ɵfac
});
/* Create an factory function that returns the native window object. */

function windowFactory(browserWindowRef, platformId) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(platformId)) {
    return browserWindowRef.nativeWindow;
  }

  return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */

var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */

var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
};
/* Create an array of providers. */

var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

/***/ }),

/***/ 4093:
/*!*************************************************!*\
  !*** ./src/app/shared/services/zoom.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomService": function() { return /* binding */ ZoomService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zoomus/websdk */ 51856);
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);








var ZoomService = /*#__PURE__*/function () {
  function ZoomService(appStrings, http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ZoomService);

    this.appStrings = appStrings;
    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ZoomService, [{
    key: "initializeWebSDK",
    value: function initializeWebSDK(zoomClient, returnUrl) {
      var _this = this;

      // ZoomMtg.preLoadWasm();
      // ZoomMtg.prepareWebSDK();
      // ZoomMtg.i18n.load('en-US');
      // ZoomMtg.i18n.reload('en-US');
      _zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.init({
        leaveUrl: returnUrl,
        // isSupportAV: true,
        success: function success(_success) {
          console.log(_success);
          _zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.join({
            signature: zoomClient.signature,
            meetingNumber: zoomClient.meetingNumber,
            userName: zoomClient.userName,
            sdkKey: _this.appStrings.zoomSdkKey,
            userEmail: zoomClient.userEmail,
            passWord: zoomClient.passWord,
            // tk: zoomClient.registrantToken,
            // zak: zoomClient.zakToken,
            success: function success(_success2) {
              console.log(_success2); // console.log("dd", success.result.join_url);
            },
            error: function error(_error) {
              console.log(_error);
            }
          });
        },
        error: function error(_error2) {
          console.log(_error2);
        }
      });
    }
  }, {
    key: "genrateSignature",
    value: function genrateSignature(signatureModel) {
      var signature = _zoomus_websdk__WEBPACK_IMPORTED_MODULE_2__.ZoomMtg.generateSDKSignature({
        meetingNumber: signatureModel.meetingNumber,
        sdkKey: signatureModel.apiKey,
        sdkSecret: signatureModel.apiSecret,
        role: signatureModel.role
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(signature);
    } // generateMeetingUrl(signature: string): Observable<any> {
    //   const body = {
    //     topic: "Meeting Title",
    //     type: 1, // 1 for instant meetings, 2 for scheduled meetings, etc.
    //   };
    //   // console.log(signature);
    //   const options = {
    //     headers: {
    //       Authorization: "Bearer " + signature,
    //     },
    //   };
    //   return this.http.post(
    //     `https://api.zoom.us/v2.13.0/users/me/meetings`,
    //     body,
    //     options
    //   );
    // }

  }, {
    key: "getZoomDataForTeacher",
    value: function getZoomDataForTeacher(teacherSubjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL, "/zoom/getZoomDetails/").concat(teacherSubjectId));
    }
  }]);

  return ZoomService;
}();

ZoomService.ɵfac = function ZoomService_Factory(t) {
  return new (t || ZoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_4__.AppStrings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};

ZoomService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: ZoomService,
  factory: ZoomService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dialogs/save-exam-dialog/save-exam-dialog.component */ 53483);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ 53530);
/* harmony import */ var _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.module */ 10322);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ 45227);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ 54696);
/* harmony import */ var _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vertical-menu/vertical-menu.component */ 82329);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customizer/customizer.component */ 93495);
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ 76430);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ 53418);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebar-dropdown.directive */ 83273);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebar-anchor-toggle.directive */ 48327);
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebar.directive */ 57744);
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/topmenu.directive */ 60342);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/topmenu-link.directive */ 31793);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/topmenu-dropdown.directive */ 90235);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/topmenu-anchor-toggle.directive */ 91354);
/* harmony import */ var _components_evaluations_general_evaluation_general_evaluation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/evaluations/general-evaluation/general-evaluation.component */ 49232);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-chartist */ 93774);
/* harmony import */ var _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/my-appretiation/my-appretiation.component */ 77786);
/* harmony import */ var _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/evaluations/materails-general-evaluation/materails-general-evaluation.component */ 38937);
/* harmony import */ var _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/leader-board/leader-board.component */ 1709);
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _components_dialogs_enter_code_dialog_enter_code_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dialogs/enter-code-dialog/enter-code-dialog.component */ 90508);
/* harmony import */ var _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dialogs/confirm-dialog/confirm-dialog.component */ 89782);
/* harmony import */ var _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/refund-lecture/refund-lecture.component */ 24133);
/* harmony import */ var _components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user-balance-details/user-balance-details.component */ 15054);
/* harmony import */ var _components_evaluations_subject_evaluation_subject_evaluation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/evaluations/subject-evaluation/subject-evaluation.component */ 88641);
/* harmony import */ var _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/user-data/user-data.component */ 18515);
/* harmony import */ var _components_dynamic_form_field_button_file_input_upload_file_input_upload_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dynamic-form-field/button-file-input-upload/file-input-upload.component */ 12327);
/* harmony import */ var _components_dynamic_form_field_datepicker_input_datepicker_input_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/dynamic-form-field/datepicker-input/datepicker-input.component */ 67978);
/* harmony import */ var _components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dynamic-form-field/file-input/file-input.component */ 82158);
/* harmony import */ var _components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/dynamic-form-field/input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/dynamic-form-field/radio-button/radio-button.component */ 24724);
/* harmony import */ var _components_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/dynamic-form-field/textarea/textarea.component */ 82721);
/* harmony import */ var _components_dropdowns_subjects_by_teacherid_subjects_by_teacherid_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/dropdowns/subjects-by-teacherid/subjects-by-teacherid.component */ 71044);
/* harmony import */ var _components_zoom_meeting_zoom_meeting_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/zoom-meeting/zoom-meeting.component */ 57934);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 63163);
/* harmony import */ var _components_zoom_helping_requests_helping_requests_helping_requests_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/zoom-helping-requests/helping-requests/helping-requests.component */ 9829);
/* harmony import */ var _components_zoom_helping_requests_create_request_data_create_request_data_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/zoom-helping-requests/create-request-data/create-request-data.component */ 21446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ 3184);
















 //COMPONENTS





 //DIRECTIVES






































var SharedModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SharedModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SharedModule);
});

SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};

SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.DatePipe],
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_46__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_50__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_4__.ClickOutsideModule, _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_5__.AutocompleteModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule, ng_chartist__WEBPACK_IMPORTED_MODULE_52__.ChartistModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_53__.NgApexchartsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_54__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_55__.NgxPaginationModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_56__.SweetAlert2Module.forRoot()], _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleFullscreenDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarLinkDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__.SidebarDropdownDirective, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_15__.SidebarAnchorToggleDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_16__.SidebarDirective, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_18__.TopMenuLinkDirective, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__.TopMenuDropdownDirective, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__.TopMenuAnchorToggleDirective, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuDirective, _components_evaluations_general_evaluation_general_evaluation_component__WEBPACK_IMPORTED_MODULE_21__.GeneralEvaluationComponent, _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__.MyAppretiationComponent, _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__.MaterailsGeneralEvaluationComponent, _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__.LeaderBoardComponent, _components_dialogs_enter_code_dialog_enter_code_dialog_component__WEBPACK_IMPORTED_MODULE_26__.EnterCodeDialogComponent, _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__.DeleteDialogComponent, _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__.ConfirmDialogComponent, _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SaveExamDialogComponent, _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_29__.RefundLectureComponent, _components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_30__.UserBalanceDetailsComponent, _components_evaluations_subject_evaluation_subject_evaluation_component__WEBPACK_IMPORTED_MODULE_31__.SubjectEvaluationComponent, _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_32__.UserDataComponent, _components_dynamic_form_field_button_file_input_upload_file_input_upload_component__WEBPACK_IMPORTED_MODULE_33__.ButtonFileInputUploadComponent, _components_dynamic_form_field_datepicker_input_datepicker_input_component__WEBPACK_IMPORTED_MODULE_34__.DatepickerInputComponent, _components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_35__.FileInputComponent, _components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_36__.InputComponent, _components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_37__.InputValidationMsgComponent, _components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_38__.RadioButtonComponent, _components_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_39__.TextareaComponent, _components_dropdowns_subjects_by_teacherid_subjects_by_teacherid_component__WEBPACK_IMPORTED_MODULE_40__.SubjectsByTeacheridComponent, _components_zoom_meeting_zoom_meeting_component__WEBPACK_IMPORTED_MODULE_41__.ZoomMeetingComponent, _components_zoom_helping_requests_helping_requests_helping_requests_component__WEBPACK_IMPORTED_MODULE_42__.HelpingRequestsComponent, _components_zoom_helping_requests_create_request_data_create_request_data_component__WEBPACK_IMPORTED_MODULE_43__.CreateRequestDataComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_46__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_50__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_4__.ClickOutsideModule, _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_5__.AutocompleteModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule, ng_chartist__WEBPACK_IMPORTED_MODULE_52__.ChartistModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_53__.NgApexchartsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_54__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_55__.NgxPaginationModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_56__.SweetAlert2Module],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleFullscreenDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_16__.SidebarDirective, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_47__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule, _components_evaluations_general_evaluation_general_evaluation_component__WEBPACK_IMPORTED_MODULE_21__.GeneralEvaluationComponent, _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__.MyAppretiationComponent, _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__.MaterailsGeneralEvaluationComponent, _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__.LeaderBoardComponent, _components_dialogs_enter_code_dialog_enter_code_dialog_component__WEBPACK_IMPORTED_MODULE_26__.EnterCodeDialogComponent, _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__.DeleteDialogComponent, _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__.ConfirmDialogComponent, _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SaveExamDialogComponent, _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_29__.RefundLectureComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleFullscreenDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarLinkDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__.SidebarDropdownDirective, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_15__.SidebarAnchorToggleDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_16__.SidebarDirective, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_18__.TopMenuLinkDirective, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__.TopMenuDropdownDirective, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__.TopMenuAnchorToggleDirective, _components_evaluations_general_evaluation_general_evaluation_component__WEBPACK_IMPORTED_MODULE_21__.GeneralEvaluationComponent, _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__.MyAppretiationComponent, _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__.MaterailsGeneralEvaluationComponent, _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__.LeaderBoardComponent, _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__.DeleteDialogComponent, _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__.ConfirmDialogComponent, _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SaveExamDialogComponent, _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_29__.RefundLectureComponent, _components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_30__.UserBalanceDetailsComponent, _components_evaluations_subject_evaluation_subject_evaluation_component__WEBPACK_IMPORTED_MODULE_31__.SubjectEvaluationComponent, _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_32__.UserDataComponent, _components_dynamic_form_field_button_file_input_upload_file_input_upload_component__WEBPACK_IMPORTED_MODULE_33__.ButtonFileInputUploadComponent, _components_dynamic_form_field_datepicker_input_datepicker_input_component__WEBPACK_IMPORTED_MODULE_34__.DatepickerInputComponent, _components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_35__.FileInputComponent, _components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_36__.InputComponent, _components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_37__.InputValidationMsgComponent, _components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_38__.RadioButtonComponent, _components_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_39__.TextareaComponent, _components_dropdowns_subjects_by_teacherid_subjects_by_teacherid_component__WEBPACK_IMPORTED_MODULE_40__.SubjectsByTeacheridComponent, _components_zoom_meeting_zoom_meeting_component__WEBPACK_IMPORTED_MODULE_41__.ZoomMeetingComponent, _components_zoom_helping_requests_helping_requests_helping_requests_component__WEBPACK_IMPORTED_MODULE_42__.HelpingRequestsComponent]
  });
})();

/***/ }),

/***/ 84330:
/*!*************************************************************!*\
  !*** ./src/app/shared/validators/customeValid.validator.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomeValidator": function() { return /* binding */ CustomeValidator; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);


var CustomeValidator = /*#__PURE__*/function () {
  function CustomeValidator() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomeValidator);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomeValidator, null, [{
    key: "whiteSpace",
    value: // No White Space
    function whiteSpace(control) {
      if ((control.value || "").trim().length === 0) {
        return {
          whiteSpace: true
        };
      }

      return null;
    } // No minus numbers

  }, {
    key: "minusNum",
    value: function minusNum(control) {
      if (control.value < 0) {
        return {
          minusNum: true
        };
      }

      return null;
    }
  }, {
    key: "bigZero",
    value: function bigZero(control) {
      if (control.value <= 0) {
        return {
          bigZero: true
        };
      }

      return null;
    }
  }, {
    key: "ZeroLength",
    value: function ZeroLength(control) {
      if (control.value.length <= 0) {
        return {
          ZeroLength: true
        };
      }

      return null;
    }
  }, {
    key: "mustMatch",
    value: function mustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var _a;

        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !((_a = matchingControl.errors) === null || _a === void 0 ? void 0 : _a.mustMatch)) {
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }

        return null;
      };
    }
  }, {
    key: "rchargeAmount",
    value: function rchargeAmount(control) {
      if (control.value < 10 || control.value > 1000) {
        return {
          rchargeAmount: true
        };
      }

      return null;
    }
  }, {
    key: "noSpace",
    value: function noSpace(control) {
      if (control.value.length > 0 && control.value.trim().indexOf(" ") >= 0) {
        return {
          noSpace: true
        };
      }

      return null;
    }
  }, {
    key: "startsWith",
    value: function startsWith(control) {
      var _a;

      if (((_a = control.value) === null || _a === void 0 ? void 0 : _a.length) > 0 && !control.value.startsWith("01")) {
        return {
          startsWith: true
        };
      }

      return null;
    }
  }]);

  return CustomeValidator;
}();

/***/ }),

/***/ 82329:
/*!*****************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": function() { return /* binding */ VerticalMenuComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/custom-animations */ 21138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-device-detector */ 81431);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ 16256);
/* harmony import */ var _services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ 83273);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ 7883);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ 48327);


















var _c0 = ["toggleIcon"];

var _c1 = function _c1() {
  return ["/page"];
};

var _c2 = function _c2(a0, a1) {
  return {
    "ft-toggle-left": a0,
    "ft-toggle-right": a1
  };
};

function VerticalMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Mozakrety");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r6.toggleSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r8.CloseSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
  }
}

var _c3 = function _c3() {
  return {
    exact: true
  };
};

function VerticalMenuComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_ul_3_Template_a_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r9.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](24, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 12, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](25, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 14, "Navbar.subscription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](26, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 16, "Navbar.helping-requests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](27, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 18, "Navbar.EducationalStage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](28, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 20, "Navbar.EditProfile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](29, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 22, "Navbar.LogOut"));
  }
}

function VerticalMenuComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 4, "Navbar.Login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 6, "Navbar.Register"));
  }
}

function VerticalMenuComponent_ul_5_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var eduComp_r13 = ctx.$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", eduComp_r13.Id == ctx_r11.EduCompId)("value", eduComp_r13.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", eduComp_r13.Name, " ");
  }
}

function VerticalMenuComponent_ul_5_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var branch_r14 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", branch_r14.Id == ctx_r12.branchId)("value", branch_r14.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", branch_r14.Name, " ");
  }
}

function VerticalMenuComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function VerticalMenuComponent_ul_5_Template_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r15.EduCompId = $event;
    })("change", function VerticalMenuComponent_ul_5_Template_select_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r17.onChangeEduCompId(ctx_r17.EduCompId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, VerticalMenuComponent_ul_5_option_6_Template, 2, 3, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function VerticalMenuComponent_ul_5_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r18.branchId = $event;
    })("change", function VerticalMenuComponent_ul_5_Template_select_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r19.changebranchId();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, VerticalMenuComponent_ul_5_option_12_Template, 2, 3, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r3.EduCompId)("disabled", (ctx_r3.EducationalComps == null ? null : ctx_r3.EducationalComps.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 8, "labels.Center"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.EducationalComps);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r3.branchId)("disabled", !ctx_r3.EduCompId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 10, "labels.Branch"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.Branches);
  }
}

var _c4 = function _c4(a0) {
  return [a0];
};

function VerticalMenuComponent_ul_6_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c4, menuItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r21.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ul_6_li_1_a_1_span_5_Template, 2, 4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c4, menuItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r21.badge && menuItem_r21.badge != "");
  }
}

function VerticalMenuComponent_ul_6_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c4, menuItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r21.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ul_6_li_1_a_2_span_5_Template, 2, 4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c4, menuItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, menuItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r21.badge && menuItem_r21.badge != "");
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c4, menuSubItem_r32.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubItem_r32.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c4, menuSubsubItem_r37.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r37.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_a_1_span_5_Template, 2, 4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r37.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c4, menuSubsubItem_r37.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r37.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubsubItem_r37.badge && menuSubsubItem_r37.badge != "");
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c4, menuSubsubItem_r37.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r37.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_ng_template_2_span_5_Template, 2, 4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r37.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c4, menuSubsubItem_r37.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r37.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubsubItem_r37.badge && menuSubsubItem_r37.badge != "");
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_a_1_Template, 6, 8, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r37 = ctx.$implicit;

    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);

    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4).$implicit;
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r36.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r21.title)("hasSub", false)("path", menuSubsubItem_r37.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c3))("ngClass", ctx_r36.config.layout.menuPosition === "Side" ? menuSubsubItem_r37.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !menuSubsubItem_r37.isExternalLink)("ngIfElse", _r39);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_li_1_Template, 4, 9, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuSubItem_r32.submenu);
  }
}

var _c5 = function _c5(a0) {
  return {
    "has-sub": a0
  };
};

var _c6 = function _c6(a0) {
  return {
    functionId: a0
  };
};

function VerticalMenuComponent_ul_6_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_span_6_Template, 2, 4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_ul_7_Template, 2, 1, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r32 = ctx.$implicit;
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r31.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r21.title)("hasSub", menuSubItem_r32.class.includes("has-sub") ? true : false)("path", menuSubItem_r32.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](14, _c5, menuSubItem_r32.class.includes("has-sub") ? true : false))("routerLinkActive", (menuSubItem_r32.submenu == null ? null : menuSubItem_r32.submenu.length) != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r32.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c6, menuSubItem_r32.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c4, menuSubItem_r32.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 12, menuSubItem_r32.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r32.badge && menuSubItem_r32.badge != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (menuSubItem_r32.submenu == null ? null : menuSubItem_r32.submenu.length) > 0);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_ul_3_li_1_Template, 8, 20, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuItem_r21.submenu);
  }
}

var _c7 = function _c7() {
  return {
    exact: false
  };
};

function VerticalMenuComponent_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_a_1_Template, 6, 8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_ul_6_li_1_a_2_Template, 6, 7, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerticalMenuComponent_ul_6_li_1_ul_3_Template, 2, 1, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = ctx.$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r20.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r21.title)("path", menuItem_r21.path)("hasSub", menuItem_r21.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c5, menuItem_r21.class.includes("has-sub") ? true : false))("routerLinkActive", (menuItem_r21.submenu == null ? null : menuItem_r21.submenu.length) != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](12, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !menuItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (menuItem_r21.submenu == null ? null : menuItem_r21.submenu.length) > 0);
  }
}

function VerticalMenuComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_Template, 4, 13, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_ul_6_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r52);
      var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r51.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.menuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, "Navbar.EditProfile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 7, "Navbar.LogOut"));
  }
}

var VerticalMenuComponent = /*#__PURE__*/function () {
  function VerticalMenuComponent(router, translate, layoutService, configService, cdr, deviceService, AuthService, GeneralServ, spinner) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalMenuComponent);

    this.router = router;
    this.translate = translate;
    this.layoutService = layoutService;
    this.configService = configService;
    this.cdr = cdr;
    this.deviceService = deviceService;
    this.AuthService = AuthService;
    this.GeneralServ = GeneralServ;
    this.spinner = spinner;
    this.level = 0;
    this.logoUrl = "assets/img/logo.png";
    this.config = {};
    this.perfectScrollbarEnable = true;
    this.collapseSidebar = false;

    this.fireRefreshEventOnWindow = function () {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("resize", true, false);
      window.dispatchEvent(evt);
    };

    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.isTouchDevice();
    this.EduCompId = this.AuthService.getEduCompId();
    this.branchId = Number(this.AuthService.getBranchId());
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.AuthService.isStudent() && !this.AuthService.isSupport() && this.AuthService.isUser()) {
        if (this.EduCompId) this.onChangeEduCompId(this.EduCompId);
        this.getEduCompByUser();
        this.getUserFunctions(this.branchId);
      } //  this.menuItems = ROUTES;

    }
  }, {
    key: "logout",
    value: function logout() {
      this.AuthService.logout();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.AuthService.branchId.subscribe(function (e) {
        _this.branchId = e.branchId;

        if (!_this.AuthService.isStudent() && !_this.AuthService.isSupport() && _this.AuthService.isUser()) {
          _this.getUserFunctions(e.branchId);
        }
      });
      this.AuthService.EduCompId.subscribe(function (e) {
        _this.EduCompId = e.EduCompId;

        if (!_this.AuthService.isStudent() && !_this.AuthService.isSupport() && _this.AuthService.isUser()) {
          _this.getUserFunctions(e.branchId);

          _this.onChangeEduCompId(e.EduCompId);
        }
      });
      this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this.config = templateConf;
        }

        _this.loadLayout();

        _this.cdr.markForCheck();
      });
      this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(function (collapse) {
        if (_this.config.layout.menuPosition === "Side") {
          _this.collapseSidebar = collapse;
        }
      });
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize(event) {
      var _this2 = this;

      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(function () {
        _this2.innerWidth = event.target.innerWidth;

        _this2.loadLayout();
      }.bind(this), 500);
    }
  }, {
    key: "getUserFunctions",
    value: function getUserFunctions(branchId) {
      var _this3 = this;

      this.spinner.show();
      this.AuthService.getUserFunctions(branchId).subscribe(function (res) {
        // console.log("functions: ", res);
        res.Groups.map(function (menuItems) {
          menuItems.class = "dropdown nav-item has-sub";
          menuItems.icon = "ft-align-left";
          menuItems.isExternalLink = false;
          menuItems.badge = "";
          menuItems.badgeClass = "";
          menuItems.submenu.map(function (item) {
            item.class = "dropdown-item";
            item.icon = "ft-arrow-right submenu-icon";
            item.isExternalLink = false;
            item.badge = "";
            item.badgeClass = "";
          });
        });
        res.GrouplessFunctions.map(function (menuItems) {
          menuItems.class = "dropdown nav-item";
          menuItems.icon = "ft-align-left";
          menuItems.isExternalLink = false;
          menuItems.submenu = [];
        });
        _this3.menuItems = [];
        _this3.menuItems = res.Groups.concat(res.GrouplessFunctions); //  console.log("menuItems: ", this.menuItems);

        _this3.spinner.hide();
      });
    }
  }, {
    key: "getEduCompByUser",
    value: function getEduCompByUser() {
      var _this4 = this;

      this.Branches = [];
      this.branchId = null;
      this.GeneralServ.getEduCompByUser().subscribe(function (res) {
        _this4.EducationalComps = res;
      });
    }
  }, {
    key: "onChangeEduCompId",
    value: function onChangeEduCompId(EduCompId) {
      var _this5 = this;

      this.AuthService.setEduCompId(EduCompId);

      if (EduCompId !== "null" && EduCompId != "undefined") {
        this.GeneralServ.getBranchesByEduComp(EduCompId).subscribe(function (res) {
          var _a, _b;

          _this5.Branches = res;

          _this5.AuthService.setBranchId((_a = res[0]) === null || _a === void 0 ? void 0 : _a.Id);

          _this5.branchId = (_b = res[0]) === null || _b === void 0 ? void 0 : _b.Id;
        });
      }
    }
  }, {
    key: "changebranchId",
    value: function changebranchId() {
      this.AuthService.setBranchId(this.branchId);
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      if (this.config.layout.menuPosition === "Top") {
        // Horizontal Menu
        if (this.innerWidth < 1200) {// Screen size < 1200
          //  this.menuItems = HROUTES;
        }
      } else if (this.config.layout.menuPosition === "Side") {// Vertical Menu{
        // this.menuItems = ROUTES;
      }

      if (this.config.layout.sidebar.backgroundColor === "white") {
        this.logoUrl = "assets/img/logo-dark.png";
      } else {
        this.logoUrl = "assets/img/logo.png";
      }

      if (this.config.layout.sidebar.collapsed) {
        this.collapseSidebar = true;
      } else {
        this.collapseSidebar = false;
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      var _this6 = this;

      var conf = this.config;
      conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
      this.configService.applyTemplateConfigChange({
        layout: conf.layout
      });
      setTimeout(function () {
        _this6.fireRefreshEventOnWindow();
      }, 300);
    }
  }, {
    key: "CloseSidebar",
    value: function CloseSidebar() {
      this.layoutService.toggleSidebarSmallScreen(false);
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      var isMobile = this.deviceService.isMobile();
      var isTablet = this.deviceService.isTablet();

      if (isMobile || isTablet) {
        this.perfectScrollbarEnable = false;
      } else {
        this.perfectScrollbarEnable = true;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }

      if (this.configSub) {
        this.configSub.unsubscribe();
      }
    }
  }]);

  return VerticalMenuComponent;
}();

VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) {
  return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService));
};

VerticalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: VerticalMenuComponent,
  selectors: [["app-sidebar"]],
  viewQuery: function VerticalMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
    }
  },
  hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) {
        return ctx.onWindowResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    }
  },
  decls: 7,
  vars: 6,
  consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", "class", "navigation", 4, "ngIf"], ["appSidebarDropdown", "", 4, "ngIf"], ["class", "navigation", "appSidebarDropdown", "", 4, "ngIf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "logo-img"], ["alt", "Mozakrety logo", 3, "src"], [1, "text", "align-middle"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarDropdown", "", 1, "navigation"], ["appSidebarlink", "", "parent", "Home", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/home"], [1, "ft-home"], ["appSidebarlink", "", "parent", "Recharge", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/student/subscription", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "icon-credit-card"], ["routerLink", "/student/helping-requests", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], ["routerLink", "/student/educational-stage"], [1, "icon-book-open"], ["appSidebarlink", "", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/profile"], [1, "fa", "fa-user"], ["routerLink", "/auth/register", 3, "click"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/auth/login"], [1, "ft-user"], ["routerLink", "/auth/register"], ["appSidebarDropdown", ""], ["appSidebarlink", "", 1, "dropdown", "nav-item"], [1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions", "click"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf"], ["appSidebarAnchorToggle", "", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink"], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarAnchorToggle", ""], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["appSidebarAnchorToggle", "", 3, "routerLink", "queryParams"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["target", "_blank", 3, "routerLink"]],
  template: function VerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 12, 7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerticalMenuComponent_ul_3_Template, 37, 30, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_ul_4_Template, 13, 10, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_ul_5_Template, 13, 12, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, VerticalMenuComponent_ul_6_Template, 14, 11, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.AuthService.isStudent());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.AuthService.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.AuthService.isStudent() || ctx.AuthService.isSupport()) && ctx.AuthService.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.AuthService.isStudent() || ctx.AuthService.isSupport()) && ctx.menuItems && ctx.AuthService.isUser());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__.SidebarDropdownDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_8__.SidebarLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__.SidebarAnchorToggleDirective],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  encapsulation: 2,
  data: {
    animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_2__.customAnimations
  }
});

/***/ }),

/***/ 75926:
/*!*************************************************************!*\
  !*** ./src/app/student/services/helping-request.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpingRequestService": function() { return /* binding */ HelpingRequestService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var HelpingRequestService = /*#__PURE__*/function () {
  function HelpingRequestService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HelpingRequestService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HelpingRequestService, [{
    key: "contactRequest",
    value: function contactRequest(teacherSubjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "zoom/createZoomRequest/").concat(teacherSubjectId));
    }
  }, {
    key: "getAllRequests",
    value: function getAllRequests(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "zoom/getZoomRequest"), body);
    }
  }, {
    key: "createMeetingLink",
    value: function createMeetingLink(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "zoom/zoomRequestResponse"), body);
    }
  }, {
    key: "closeZoomRequest",
    value: function closeZoomRequest(requestId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "zoom/closeZoomRequest/").concat(requestId));
    }
  }]);

  return HelpingRequestService;
}();

HelpingRequestService.ɵfac = function HelpingRequestService_Factory(t) {
  return new (t || HelpingRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

HelpingRequestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: HelpingRequestService,
  factory: HelpingRequestService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 45130:
/*!*****************************************************!*\
  !*** ./src/app/student/services/student.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentService": function() { return /* binding */ StudentService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var StudentService = /*#__PURE__*/function () {
  function StudentService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentService);

    this.http = http;
  } //#region  Student Profile
  //Return Student Subjects


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentService, [{
    key: "returnStudentSubjects",
    value: function returnStudentSubjects() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/subjectsIndex");
    } //Return Student Subject Evaluation

  }, {
    key: "returnSubjectEvaluation",
    value: function returnSubjectEvaluation(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/subjectEvaluation/" + id);
    }
  }, {
    key: "getSubjectMaterials",
    value: function getSubjectMaterials(subjectId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnSubcribedAndUnSubcribedLectures/" + subjectId);
    } //Return Student General Evaluation

  }, {
    key: "returnGeneralEvaluation",
    value: function returnGeneralEvaluation() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Dashboard/Evaluation");
    } //Educational Component Request

  }, {
    key: "EduCompRequest",
    value: function EduCompRequest(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/EduComponentRequest/", data);
    } //Refund Lecture

  }, {
    key: "refundLecture",
    value: function refundLecture(lecId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/refundLecture/" + lecId);
    } //balanceCheck

  }, {
    key: "balanceCheck",
    value: function balanceCheck() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/balanceCheck");
    } //returnUserPaymentsHistory

  }, {
    key: "getPaymentsHistory",
    value: function getPaymentsHistory(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnUserPaymentsHistory/" + id);
    } //returnUserPayments

  }, {
    key: "getPayments",
    value: function getPayments(page) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnUserPayments/" + page);
    } //Request Fawry Code

  }, {
    key: "payAmount",
    value: function payAmount(amount, teacherId, EduCompId, methodId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/PayAmount/").concat(amount, "/").concat(teacherId, "/").concat(EduCompId, "/").concat(methodId), null);
    } //Request Fawry Code For Tamer ElQady

  }, {
    key: "payAmountCowPay",
    value: function payAmountCowPay(amount, teacherId, EduCompId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/payAmountCowPay/".concat(amount, "/").concat(teacherId, "/").concat(EduCompId), null);
    } //pay Amount  By Credit

  }, {
    key: "payAmountCredit",
    value: function payAmountCredit(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/PayAmountCC", data);
    } //Student  Education Stage Data

  }, {
    key: "SaveStudenStage",
    value: function SaveStudenStage(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/registerStudent", data);
    } //return Student Education Stage Data

  }, {
    key: "getStudenStageData",
    value: function getStudenStageData() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/getStudentData");
    } //Student  Education Stage Data

  }, {
    key: "TestFile",
    value: function TestFile(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/TestFile", data);
    } //#endregion
    //#region  Student Exams
    ////////////////////////////////
    //return Student Exams

  }, {
    key: "returnStudentExam",
    value: function returnStudentExam(examId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Exam/Details/" + examId);
    } //return Student Education Stage Data

  }, {
    key: "returnStudentExamResults",
    value: function returnStudentExamResults(examId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Exam/Results/" + examId, null);
    } //Submit Single Question

  }, {
    key: "SubmitSingleQuestion",
    value: function SubmitSingleQuestion(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Exam/SubmitSingleQuestion"), data);
    }
  }, {
    key: "SubmitSingleQuestionHistory",
    value: function SubmitSingleQuestionHistory(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Exam/SubmitSingleQuestionHistory"), data);
    } //Submit Exam

  }, {
    key: "SubmitExam",
    value: function SubmitExam(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Exam/Submit", data);
    } //Generate Exam From Template By templateId

  }, {
    key: "GenerateExamFromTemplate",
    value: function GenerateExamFromTemplate(templateId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Exam/GenerateExamFromTemplate/" + templateId, null);
    } //#endregion
    //#region Student Reservation
    ////////////////////////////////////
    // Return Inputs

  }, {
    key: "returnInputsByViewEduCompId",
    value: function returnInputsByViewEduCompId(EduCompId, viewId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnInputsByViewEduCompId/".concat(EduCompId, "/").concat(viewId), null);
    } // Return Policies

  }, {
    key: "EducationalComponentPolicies",
    value: function EducationalComponentPolicies(viewId, code) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/EducationalComponentPolicies/".concat(viewId, "/").concat(code));
    } // Reservation

  }, {
    key: "SubmitReservation",
    value: function SubmitReservation(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/Reservation", data);
    } // Return Educational Component Branches

  }, {
    key: "EducationalComponentTimetable",
    value: function EducationalComponentTimetable(viewId, code) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/EducationalComponentTimetable/".concat(viewId, "/").concat(code));
    } // Return Avaliable Dates By BranchId

  }, {
    key: "GetAvaliableDatesByBranchId",
    value: function GetAvaliableDatesByBranchId(BranchId, MustHaveStudents, DontShowMaxed) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/GetAvaliableDatesByBranchId/".concat(BranchId, "/").concat(MustHaveStudents, "/").concat(DontShowMaxed));
    } // Submit Date to Branche

  }, {
    key: "SubmitEducationalComponentTimetable",
    value: function SubmitEducationalComponentTimetable(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/EducationalComponentTimetable", data);
    } // return Current Student Educational Component Time Table

  }, {
    key: "returnCurrentStudentEducationalComponentTimeTable",
    value: function returnCurrentStudentEducationalComponentTimeTable(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnCurrentStudentEducationalComponentTimeTable/").concat(EduCompId));
    } //#endregion
    //#region  Top Students
    //GetTopStudents

  }, {
    key: "GetTopStudents",
    value: function GetTopStudents(EduCompId, TeacherId, SubjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/GetTopStudents/").concat(EduCompId, "/").concat(TeacherId, "/").concat(SubjectId));
    } //Get Top Exam Students By Teacher EduCompId

  }, {
    key: "GetTopExamStudents",
    value: function GetTopExamStudents(EduCompId, TeacherId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/GetTopExamStudentsByTeacherEduCompId/").concat(EduCompId, "/").concat(TeacherId));
    }
  }]);

  return StudentService;
}();

StudentService.ɵfac = function StudentService_Factory(t) {
  return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

StudentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StudentService,
  factory: StudentService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
  production: false,
  // apiURL: "http://localhost:18947/api/",
  // apiURL: "https://testproj2.cloudiax.com/api/", //Test;
  apiURL: "https://apikwoxford.cloudiax.com/api/" //Live;

};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map