"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["main"],{

/***/ 64105:
/*!*******************************************************!*\
  !*** ./src/app/admin/services/Admin/gifts.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftsService": function() { return /* binding */ GiftsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);






var GiftsService = /*#__PURE__*/function () {
  function GiftsService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GiftsService);

    this.http = http;
    this.userPoints = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GiftsService, [{
    key: "getGiftCategoryByID",
    value: function getGiftCategoryByID(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-gift-category-by-id/").concat(id));
    } // getGiftByCategoryID(CategoryID: any) {
    //   return this.http.get(
    //     environment.apiURL + "Admin/getGiftsBank/" + CategoryID
    //   );
    // }

  }, {
    key: "RemoveGiftCategory",
    value: function RemoveGiftCategory(giftCategoryId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/removeGiftCategory/").concat(giftCategoryId));
    }
  }, {
    key: "RemoveGift",
    value: function RemoveGift(giftID) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/removeGift/" + giftID);
    }
  }, {
    key: "getCategoriesAll",
    value: function getCategoriesAll(eduCompId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getGiftsCategoriesAll/").concat(eduCompId, "/").concat(page));
    }
  }, {
    key: "getGiftsAll",
    value: function getGiftsAll(eduCompId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getGiftsAll/").concat(eduCompId, "/").concat(page));
    }
  }, {
    key: "getGiftCategoryDropDown",
    value: function getGiftCategoryDropDown(eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getAllGiftCategoryDrop/").concat(eduCompId));
    }
  }, {
    key: "getCategoriesSearch",
    value: function getCategoriesSearch(page, body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getGiftsCategories/").concat(page), body);
    }
  }, {
    key: "getGiftsSearch",
    value: function getGiftsSearch(eduCompId, page, body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getGiftsSearch/").concat(eduCompId, "/").concat(page), body);
    }
  }, {
    key: "getCategoryById",
    value: function getCategoryById(Id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-gift-category-by-id/" + Id);
    }
  }, {
    key: "getGiftGallery",
    value: function getGiftGallery() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getGiftGallery");
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      var _this = this;

      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getPointsOfUser").subscribe(function (res) {
        _this.userPoints.next(res);
      });
    }
  }, {
    key: "addEditCategory",
    value: function addEditCategory(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/category-add-edit"), body);
    }
  }, {
    key: "addGift",
    value: function addGift(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/addNewGift"), body);
    }
  }, {
    key: "getGiftById",
    value: function getGiftById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-gift-by-Id/").concat(id));
    }
  }, {
    key: "deleteAttach",
    value: function deleteAttach(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/delete-Attach-By-Id/").concat(id));
    }
  }, {
    key: "buyGift",
    value: function buyGift(giftId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/buyGift/").concat(giftId));
    }
  }]);

  return GiftsService;
}();

GiftsService.ɵfac = function GiftsService_Factory(t) {
  return new (t || GiftsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

GiftsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: GiftsService,
  factory: GiftsService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 84759:
/*!****************************************************************!*\
  !*** ./src/app/admin/services/Admin/searchStudents.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchStudentsService": function() { return /* binding */ SearchStudentsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var SearchStudentsService = /*#__PURE__*/function () {
  function SearchStudentsService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchStudentsService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchStudentsService, [{
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

/***/ 92174:
/*!**********************************************************************!*\
  !*** ./src/app/admin/services/setup/job-title-department.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JopTitleDepartmentService": function() { return /* binding */ JopTitleDepartmentService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var JopTitleDepartmentService = /*#__PURE__*/function () {
  function JopTitleDepartmentService(_http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JopTitleDepartmentService);

    this._http = _http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(JopTitleDepartmentService, [{
    key: "getJopTitlebyDepartment",
    value: function getJopTitlebyDepartment(userid, page) {
      return this._http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/returnAllUserDepartments/").concat(userid, "/").concat(page));
    }
  }, {
    key: "addJopTitlebyDepartment",
    value: function addJopTitlebyDepartment(model) {
      return this._http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/CreateUserDepartmentJobTitle"), model);
    }
  }, {
    key: "editAllDeparment",
    value: function editAllDeparment(model, id) {
      return this._http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/EditUserDepartmentJobTitle/").concat(id), model);
    }
  }, {
    key: "editJobTitle",
    value: function editJobTitle(model, id) {
      console.log('model', model);
      console.log('j', id);
      return this._http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/editJobTitleforuser/").concat(id), model);
    }
  }, {
    key: "deleteUserDeptJobTitle",
    value: function deleteUserDeptJobTitle(userid, id) {
      return this._http.delete(" ".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/deleteUserDepartment/").concat(userid, "/").concat(id));
    }
  }, {
    key: "deleteJopTitle",
    value: function deleteJopTitle(id) {
      console.log("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/deleteJobTitleForuser/").concat(id));
      return this._http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/deleteJobTitleForuser/").concat(id));
    }
  }]);

  return JopTitleDepartmentService;
}();

JopTitleDepartmentService.ɵfac = function JopTitleDepartmentService_Factory(t) {
  return new (t || JopTitleDepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

JopTitleDepartmentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: JopTitleDepartmentService,
  factory: JopTitleDepartmentService.ɵfac,
  providedIn: 'root'
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
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
var AppRoutingModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_data_app_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/data/app-strings */ 57834);







var AppComponent = /*#__PURE__*/function () {
  function AppComponent(router, appStrings) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.router = router;
    this.appStrings = appStrings;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.subscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd;
      })).subscribe(function () {
        return window.scrollTo(0, 0);
      });
      var currentLang = localStorage.getItem(this.appStrings.CURRENT_LANG);

      if (currentLang == null || currentLang == undefined) {
        localStorage.setItem(this.appStrings.CURRENT_LANG, this.appStrings.ar);
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
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_2__.AppStrings));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
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
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "myCustomTooltipDefaults": function() { return /* binding */ myCustomTooltipDefaults; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
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
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
















 // import { MAT_DATE_LOCALE } from "@angular/material/core";





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
var myCustomTooltipDefaults = {
  position: "above" // showDelay: 1000,
  // hideDelay: 1000,
  // touchendHideDelay: 1000,

};
var AppModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
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
    provide: _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MAT_TOOLTIP_DEFAULT_OPTIONS,
    useValue: myCustomTooltipDefaults
  }, // {
  //   provide: MAT_DATE_LOCALE, useValue: 'en-GB'
  // },
  _shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__.WINDOW_PROVIDERS],
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/window.service */ 60294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ 85682);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/customizer.service */ 60360);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-device-detector */ 81431);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/navbar/navbar.component */ 54696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/footer/footer.component */ 45227);
/* harmony import */ var _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/notification-sidebar/notification-sidebar.component */ 76430);
/* harmony import */ var _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/directives/topmenu.directive */ 60342);
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/directives/sidebar.directive */ 57744);
/* harmony import */ var _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/vertical-menu/vertical-menu.component */ 82329);





















function FullLayoutComponent_app_horizontal_menu_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-horizontal-menu", 11);
  }
}

var _c0 = function _c0(a0) {
  return {
    "background-image": a0
  };
};

function FullLayoutComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 14);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r3.bgImage + ")"));
  }
}

var _c1 = function _c1(a0, a1, a2) {
  return {
    "main-menu": a0,
    "menu-fixed": a1,
    "menu-native-scroll": a2
  };
};

function FullLayoutComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_3_Template_div_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r4.sidebarMouseenter($event);
    })("mouseleave", function FullLayoutComponent_div_3_Template_div_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r6.sidebarMouseleave($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FullLayoutComponent_div_3_div_2_Template, 1, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction3"](4, _c1, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, !ctx_r1.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-background-color", (ctx_r1.config == null ? null : ctx_r1.config.layout.variant) === "Transparent" ? "black" : ctx_r1.bgColor)("data-image", ctx_r1.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.config == null ? null : ctx_r1.config.layout.sidebar.backgroundImage);
  }
}

function FullLayoutComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FullLayoutComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r7.scrollToTop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
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

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullLayoutComponent);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FullLayoutComponent, [{
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

      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_15__.NavigationEnd;
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
  return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_2__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_17__.DeviceDetectorService));
};

FullLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: FullLayoutComponent,
  selectors: [["app-full-layout"]],
  hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"]);
    }
  },
  decls: 14,
  vars: 10,
  consts: [[3, "seachTextEmpty"], [1, "wrapper", 3, "ngClass", "click", "resize"], ["appTopMenu", "", 4, "ngIf"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "sidenav-overlay", 3, "ngClass", "click"], [1, "drag-target"], ["appTopMenu", ""], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]],
  template: function FullLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-navbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("seachTextEmpty", function FullLayoutComponent_Template_app_navbar_seachTextEmpty_0_listener($event) {
        return ctx.checkNavbarSeachTextEmpty($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_1_listener() {
        return ctx.onWrapperClick();
      })("resize", function FullLayoutComponent_Template_div_resize_1_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, FullLayoutComponent_app_horizontal_menu_2_Template, 1, 0, "app-horizontal-menu", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, FullLayoutComponent_div_3_Template, 3, 8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, FullLayoutComponent_button_10_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "app-notification-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_12_listener($event) {
        return ctx.onOutsideClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c2, !ctx.isNavbarSeachTextEmpty));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Top" && !ctx.displayOverlayMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](7, _c3, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
    }
  },
  directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.NotificationSidebarComponent, _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_9__.HorizontalMenuComponent, _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_10__.TopMenuDirective, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_11__.SidebarDirective, _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__.VerticalMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AutocompleteContentDirective = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AutocompleteContentDirective(tpl) {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteContentDirective);

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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









var _c0 = ["root"];

function AutocompleteComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AutocompleteComponent_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content ? ctx_r1.content.tpl : null);
  }
}

var AutocompleteComponent = /*#__PURE__*/function () {
  function AutocompleteComponent() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteComponent);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AutocompleteComponent, [{
    key: "optionsClick",
    value: function optionsClick() {
      return this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (options) {
        var clicks$ = options.map(function (option) {
          return option.click$;
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_7__.merge.apply(void 0, (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(clicks$));
      }));
    }
  }]);

  return AutocompleteComponent;
}();

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)();
};

AutocompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["app-autocomplete"]],
  contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteContentDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_4__.OptionComponent, 4);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rootTemplate = _t.first);
    }
  },
  exportAs: ["appAutocomplete"],
  decls: 2,
  vars: 0,
  consts: [["root", ""], [1, "autocomplete", "search-list"], [4, "ngTemplateOutlet"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutocompleteDirective);

    this.host = host;
    this.ngControl = ngControl;
    this.vcr = vcr;
    this.overlay = overlay;
    this.router = router;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AutocompleteDirective, [{
    key: "control",
    get: function get() {
      return this.ngControl.control;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.origin, 'focus').pipe((0,ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe(function () {
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
        backdropClass: '',
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
        originX: 'start',
        originY: 'bottom'
      }, {
        overlayX: 'start',
        overlayY: 'top'
      }), new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ConnectionPositionPair({
        originX: 'start',
        originY: 'top'
      }, {
        overlayX: 'start',
        overlayY: 'bottom'
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
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete.component */ 7575);
/* harmony import */ var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete.directive */ 86780);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








var publicApi = [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent, _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteDirective, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__.AutocompleteContentDirective, _option_option_component__WEBPACK_IMPORTED_MODULE_5__.OptionComponent];
var AutocompleteModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AutocompleteModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteModule);
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





var _c0 = ["*"];
var OptionComponent = /*#__PURE__*/function () {
  function OptionComponent(host) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OptionComponent);

    this.host = host;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OptionComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);







var ConfirmDialogComponent = /*#__PURE__*/function () {
  function ConfirmDialogComponent(data) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConfirmDialogComponent);

    this.data = data;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfirmDialogComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);







var DeleteDialogComponent = /*#__PURE__*/function () {
  function DeleteDialogComponent(data) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DeleteDialogComponent);

    this.data = data;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DeleteDialogComponent, [{
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
  styles: [".primary-color[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeS1jb2xvciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgfVxyXG4iXX0= */"]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EnterCodeDialogComponent);

    this.data = data;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EnterCodeDialogComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 89461);









function SaveExamDialogComponent_h1_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "labels.ExamRuselts"), " ", ctx_r0.data.title, "\n");
  }
}

function SaveExamDialogComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "labels.Survay"), " ", ctx_r1.data.title, "\n");
  }
}

function SaveExamDialogComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "labels.StudentMark"), " : (", ctx_r2.data.solvidResults.result, " / ", ctx_r2.data.solvidResults.total_mark, ") ");
  }
}

function SaveExamDialogComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "labels.SubmitMsg"), " ");
  }
}

function SaveExamDialogComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
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

function SaveExamDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SaveExamDialogComponent_div_6_button_4_Template, 3, 4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "General.BackToHome"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.data.solvidResults && ctx_r4.data.solvidResults.repeatable);
  }
}

function SaveExamDialogComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "General.close"), " ");
  }
}

var SaveExamDialogComponent = /*#__PURE__*/function () {
  function SaveExamDialogComponent(data) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SaveExamDialogComponent);

    this.data = data;
    console.log(data);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SaveExamDialogComponent, [{
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
  decls: 8,
  vars: 6,
  consts: [["mat-dialog-title", "", "class", "dark", 4, "ngIf"], ["mat-dialog-title", "", "class", "primary-color", 4, "ngIf"], ["mat-dialog-content", ""], ["class", "warning my-3", 4, "ngIf"], ["class", "primary", 4, "ngIf"], ["mat-dialog-actions", "", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end", 4, "ngIf"], ["mat-dialog-title", "", 1, "dark"], ["mat-dialog-title", "", 1, "primary-color"], [1, "warning", "my-3"], [1, "primary"], ["mat-dialog-actions", ""], ["routerLink", "/home", 1, "btn", "btn-warning", 3, "mat-dialog-close"], ["id", "btnSubmit", "class", "btn btn-primary bg-light-primary", 3, "mat-dialog-close", 4, "ngIf"], ["id", "btnSubmit", 1, "btn", "btn-primary", "bg-light-primary", 3, "mat-dialog-close"], ["mat-dialog-actions", "", "align", "end"], [1, "btn", "btn-warning", "bg-light-warning", 3, "mat-dialog-close"]],
  template: function SaveExamDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SaveExamDialogComponent_h1_0_Template, 3, 4, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SaveExamDialogComponent_h1_1_Template, 3, 4, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SaveExamDialogComponent_p_4_Template, 4, 5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SaveExamDialogComponent_p_5_Template, 4, 3, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SaveExamDialogComponent_div_6_Template, 5, 5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SaveExamDialogComponent_div_7_Template, 4, 4, "div", 6);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type != 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.type == 3);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLWV4YW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 72555:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/dialogs/update-date/update-date.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDateComponent": function() { return /* binding */ UpdateDateComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_admin_services_setup_job_title_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/setup/job-title-department.service */ 92174);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function UpdateDateComponent_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " You must choose a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function UpdateDateComponent_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateDateComponent_mat_hint_14_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.departmentCtrl["fromDate"] == null ? null : ctx_r1.departmentCtrl["fromDate"].errors == null ? null : ctx_r1.departmentCtrl["fromDate"].errors.required);
  }
}

var UpdateDateComponent = /*#__PURE__*/function () {
  function UpdateDateComponent(dialogRef, data, fb, toastr, _serjopTitlebyDepartment, translate, datePipe) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UpdateDateComponent);

    this.dialogRef = dialogRef;
    this.data = data;
    this.fb = fb;
    this.toastr = toastr;
    this._serjopTitlebyDepartment = _serjopTitlebyDepartment;
    this.translate = translate;
    this.datePipe = datePipe;
    this.submitted = false;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UpdateDateComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log(this.data);
      this.myForm = this.fb.group({
        userid: [this.data.user_dept_job_id],
        fromDate: [this.data.from_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        toDate: [this.data.to_date]
      });
    }
  }, {
    key: "departmentCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "updateJobTitle",
    value: function updateJobTitle() {
      var _this = this;

      if (this.departmentCtrl["toDate"].value && this.departmentCtrl["fromDate"].value > this.departmentCtrl["toDate"].value) {
        this.toastr.error("تاريخ بداية الفترة أكبر من تاريخ نهاية الفترة");
      } else {
        this.submitted = true;
        var model = {
          from_date: this.datePipe.transform(this.myForm.value.fromDate),
          to_date: this.datePipe.transform(this.myForm.value.toDate)
        };

        if (this.myForm.valid) {
          this._serjopTitlebyDepartment.editJobTitle(model, this.data.user_dept_job_id).subscribe(function (res) {
            if (res.returnValue == 1) {
              // this.alljoblist=res;
              _this.submitted = false;

              _this.translate.get("jobTitlebyDepartment.toasterSaveSucses").subscribe(function (res) {
                if (res) _this.toastr.success(res);
              });

              _this.myForm.reset();

              _this.dialogRef.close(true);
            } else _this.toastr.error(res.returnString);
          });
        }
      }
    }
  }]);

  return UpdateDateComponent;
}();

UpdateDateComponent.ɵfac = function UpdateDateComponent_Factory(t) {
  return new (t || UpdateDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_admin_services_setup_job_title_department_service__WEBPACK_IMPORTED_MODULE_2__.JopTitleDepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};

UpdateDateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: UpdateDateComponent,
  selectors: [["app-update-date"]],
  decls: 32,
  vars: 22,
  consts: [["mat-dialog-title", "", 1, "primary-color"], ["mat-dialog-content", ""], [1, "row", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker"], ["toDate", ""], ["mat-dialog-actions", "", "align", "end", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-primary"], ["mat-raised-button", "", 1, "btn", "btn-danger", 3, "mat-dialog-close"], [1, "text-danger"], [4, "ngIf"]],
  template: function UpdateDateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-datepicker-toggle", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-datepicker", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UpdateDateComponent_mat_hint_14_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "mat-datepicker-toggle", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-datepicker", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDateComponent_Template_div_click_24_listener() {
        return ctx.updateJobTitle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "ngx-spinner");
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);

      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 12, "updateDate.update"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, "jobTitlebyDepartment.FromDate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.departmentCtrl["fromDate"] == null ? null : ctx.departmentCtrl["fromDate"].invalid) && ((ctx.departmentCtrl["fromDate"] == null ? null : ctx.departmentCtrl["fromDate"].touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 16, "jobTitlebyDepartment.toDate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 18, "updateDate.update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 20, "General.close"), " ");
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 32222:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form-field/datepicker/datepicker.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatepickerComponent": function() { return /* binding */ DatepickerComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);









var DatepickerComponent = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DatepickerComponent() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatepickerComponent);

  this.submitted = false;
  this.appearance = "legacy";
});

DatepickerComponent.ɵfac = function DatepickerComponent_Factory(t) {
  return new (t || DatepickerComponent)();
};

DatepickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DatepickerComponent,
  selectors: [["app-datepicker"]],
  inputs: {
    control: "control",
    label: "label",
    placeholder: "placeholder",
    submitted: "submitted",
    appearance: "appearance"
  },
  decls: 11,
  vars: 13,
  consts: [[3, "appearance"], ["matInput", "", 3, "matDatepicker", "formControl", "placeholder"], ["matSuffix", "", 3, "for"], ["date", ""], [3, "control", "submitted", "isDate"]],
  template: function DatepickerComponent_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 11, ctx.placeholder));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted)("isDate", true);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__.InputValidationMsgComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






var FileInputComponent = /*#__PURE__*/function () {
  function FileInputComponent(fileService, msg) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileInputComponent);

    this.fileService = fileService;
    this.msg = msg;
    this.submitted = false;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FileInputComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
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
                  var _a;

                  if (file.size > 10485760) {
                    // file > 10 .MB
                    _this.msg.warning("General.largFileError");

                    if (_this.htmlId) _this.fileService.resetFileById(_this.htmlId);else _this.fileService.resetFileInputs();
                  } else (_a = _this.control) === null || _a === void 0 ? void 0 : _a.setValue(file);
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
  return new (t || FileInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService));
};

FileInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FileInputComponent,
  selectors: [["app-file-input"]],
  inputs: {
    control: "control",
    submitted: "submitted",
    accept: "accept",
    htmlId: "htmlId"
  },
  decls: 5,
  vars: 5,
  consts: [[1, "row"], [1, "col-12"], ["type", "file", "name", "answerFourImage", 1, "form-control", 3, "id", "accept", "change"], [1, "danger"], [3, "control", "submitted", "isFile"]],
  template: function FileInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function FileInputComponent_Template_input_change_2_listener($event) {
        return ctx.uploadFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input-validation-msg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.htmlId)("accept", ctx.accept);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.control)("submitted", ctx.submitted)("isFile", true);
    }
  },
  directives: [_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_4__.InputValidationMsgComponent],
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.minLength"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "labels.maxLength"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, InputValidationMsgComponent_span_0_span_11_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, InputValidationMsgComponent_span_0_span_12_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, InputValidationMsgComponent_span_0_span_13_Template, 3, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, InputValidationMsgComponent_span_0_span_14_Template, 3, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, InputValidationMsgComponent_span_0_span_15_Template, 3, 3, "span", 2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.startsWith);
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
  }
}

var InputValidationMsgComponent = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InputValidationMsgComponent() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InputValidationMsgComponent);

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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InputValidationMsgComponent_span_0_Template, 16, 15, "span", 0);
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








var InputComponent = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InputComponent() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InputComponent);

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
    appearance: "appearance"
  },
  decls: 8,
  vars: 11,
  consts: [[3, "appearance"], ["matInput", "", 3, "type", "formControl", "placeholder"], [3, "control", "submitted"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", ctx.appearance);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 9, ctx.placeholder));
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);









function RadioButtonComponent_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.label), " ");
  }
}

function RadioButtonComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-radio-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var radio_r2 = ctx.$implicit;
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]((tmp_0_0 = radio_r2.cssClass) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "col-md-6 col-12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", radio_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, radio_r2.label), " ");
  }
}

var RadioButtonComponent = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RadioButtonComponent() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RadioButtonComponent);
});

RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) {
  return new (t || RadioButtonComponent)();
};

RadioButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RadioButtonComponent,
  selectors: [["app-radio-button"]],
  inputs: {
    control: "control",
    label: "label",
    radioList: "radioList"
  },
  decls: 5,
  vars: 4,
  consts: [[1, "row"], ["class", "col-4 radio-group-label d-flex align-items-center", 4, "ngIf"], [1, "radio-group-div", 3, "ngClass"], [1, "row", 3, "formControl"], [3, "class", 4, "ngFor", "ngForOf"], [1, "col-4", "radio-group-label", "d-flex", "align-items-center"], [3, "value"]],
  template: function RadioButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RadioButtonComponent_mat_label_1_Template, 3, 3, "mat-label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-radio-group", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RadioButtonComponent_div_4_Template, 4, 6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.label ? "col-8" : "col-12");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.control);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.radioList);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".radio-group-label[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.radio-group-div[_ngcontent-%COMP%], .radio-group-label[_ngcontent-%COMP%] {\n  padding-bottom: 1.25em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxpQ0FBQTtBQUNGIiwiZmlsZSI6InJhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpby1ncm91cC1sYWJlbCB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5yYWRpby1ncm91cC1kaXYsXHJcbi5yYWRpby1ncm91cC1sYWJlbCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuMjVlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








var TextareaComponent = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TextareaComponent() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextareaComponent);

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
    appearance: "appearance"
  },
  decls: 9,
  vars: 12,
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appearance", ctx.appearance);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 10, ctx.placeholder))("rows", ctx.rows)("cols", ctx.cols);
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 19419);
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
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GeneralEvaluationComponent);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GeneralEvaluationComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MaterailsGeneralEvaluationComponent);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MaterailsGeneralEvaluationComponent, [{
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

        var _iterator = (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.subjectsEvaluation),
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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













function SubjectEvaluationComponent_ng_template_77_tr_12_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r17.examID, "");
  }
}

function SubjectEvaluationComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_77_tr_12_Template, 10, 5, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.Exams == null ? null : ctx_r1.Exams.solvedExams == null ? null : ctx_r1.Exams.solvedExams.subject_exams);
  }
}

function SubjectEvaluationComponent_ng_template_81_tr_12_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r20 = ctx.$implicit;
    var i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r20.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r20.studentGrade, "/", exam_r20.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r20.examID, "");
  }
}

function SubjectEvaluationComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_81_tr_12_Template, 10, 5, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.Exams == null ? null : ctx_r2.Exams.solvedExams == null ? null : ctx_r2.Exams.solvedExams.unit_exams);
  }
}

function SubjectEvaluationComponent_ng_template_85_tr_12_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r23.examID, "");
  }
}

function SubjectEvaluationComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_85_tr_12_Template, 10, 5, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.Exams == null ? null : ctx_r3.Exams.solvedExams == null ? null : ctx_r3.Exams.solvedExams.lesson_exams);
  }
}

function SubjectEvaluationComponent_ng_template_89_tr_12_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = ctx.$implicit;
    var i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r27 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r26.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r26.studentGrade, "/", exam_r26.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r26.examID, "");
  }
}

function SubjectEvaluationComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_89_tr_12_Template, 10, 5, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.Exams == null ? null : ctx_r4.Exams.solvedExams == null ? null : ctx_r4.Exams.solvedExams.quizzes);
  }
}

function SubjectEvaluationComponent_ng_template_98_tr_10_Template(rf, ctx) {
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
    var exam_r29 = ctx.$implicit;
    var i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r30 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r29.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r29.studentGrade, "/", exam_r29.examGrade, "");
  }
}

function SubjectEvaluationComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SubjectEvaluationComponent_ng_template_98_tr_10_Template, 7, 4, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.Exams == null ? null : ctx_r6.Exams.unSolvedExams == null ? null : ctx_r6.Exams.unSolvedExams.subject_exams);
  }
}

function SubjectEvaluationComponent_ng_template_102_tr_12_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r32 = ctx.$implicit;
    var i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r33 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r32.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r32.studentGrade, "/", exam_r32.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r32.examID, "");
  }
}

function SubjectEvaluationComponent_ng_template_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_102_tr_12_Template, 10, 5, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.Exams == null ? null : ctx_r7.Exams.unSolvedExams == null ? null : ctx_r7.Exams.unSolvedExams.unit_exams);
  }
}

function SubjectEvaluationComponent_ng_template_106_tr_12_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r35.examID, "");
  }
}

function SubjectEvaluationComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_106_tr_12_Template, 10, 5, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.Exams == null ? null : ctx_r8.Exams.unSolvedExams == null ? null : ctx_r8.Exams.unSolvedExams.lesson_exams);
  }
}

function SubjectEvaluationComponent_ng_template_110_tr_12_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r38 = ctx.$implicit;
    var i_r39 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r39 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r38.examName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", exam_r38.studentGrade, "/", exam_r38.examGrade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/student/exam/", exam_r38.examID, "");
  }
}

function SubjectEvaluationComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SubjectEvaluationComponent_ng_template_110_tr_12_Template, 10, 5, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.Exams == null ? null : ctx_r9.Exams.unSolvedExams == null ? null : ctx_r9.Exams.unSolvedExams.quizzes);
  }
}

function SubjectEvaluationComponent_ng_template_123_tr_14_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r41 = ctx.$implicit;
    var i_r42 = ctx.index;
    var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r42 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r41.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r41.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r41.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r41.teacherUserId, "/teacher-subject/", material_r41 == null ? null : material_r41.teacher_subject, "/", ctx_r40.subjectId, "/material/", material_r41 == null ? null : material_r41.id, "");
  }
}

function SubjectEvaluationComponent_ng_template_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_123_tr_14_Template, 13, 8, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.Materials == null ? null : ctx_r11.Materials.subscribedLectures == null ? null : ctx_r11.Materials.subscribedLectures.online);
  }
}

function SubjectEvaluationComponent_ng_template_127_tr_14_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r44 = ctx.$implicit;
    var i_r45 = ctx.index;
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r45 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r44.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r44.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r44.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r44.teacherUserId, "/teacher-subject/", material_r44 == null ? null : material_r44.teacher_subject, "/", ctx_r43.subjectId, "/material/", material_r44 == null ? null : material_r44.id, "");
  }
}

function SubjectEvaluationComponent_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_127_tr_14_Template, 13, 8, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.Materials == null ? null : ctx_r12.Materials.subscribedLectures == null ? null : ctx_r12.Materials.subscribedLectures.offline);
  }
}

function SubjectEvaluationComponent_ng_template_136_tr_14_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r47 = ctx.$implicit;
    var i_r48 = ctx.index;
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r48 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r47.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r47.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r47.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r47.teacherUserId, "/teacher-subject/", material_r47 == null ? null : material_r47.teacher_subject, "/", ctx_r46.subjectId, "/material/", material_r47 == null ? null : material_r47.id, "");
  }
}

function SubjectEvaluationComponent_ng_template_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_136_tr_14_Template, 13, 8, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.Materials == null ? null : ctx_r14.Materials.unSubscribedLectures == null ? null : ctx_r14.Materials.unSubscribedLectures.online);
  }
}

function SubjectEvaluationComponent_ng_template_140_tr_14_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r50 = ctx.$implicit;
    var i_r51 = ctx.index;
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r51 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r50.materialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r50.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](material_r50.teacherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("routerLink", "/student/teacher/", material_r50.teacherUserId, "/teacher-subject/", material_r50 == null ? null : material_r50.teacher_subject, "/", ctx_r49.subjectId, "/material/", material_r50 == null ? null : material_r50.id, "");
  }
}

function SubjectEvaluationComponent_ng_template_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubjectEvaluationComponent_ng_template_140_tr_14_Template, 13, 8, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
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

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubjectEvaluationComponent);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubjectEvaluationComponent, [{
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
  decls: 142,
  vars: 51,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "col-12", "col-md-3"], [1, "card"], [1, "media"], [1, "media-body", "text-left"], [1, "mb-1", "primary"], [1, "primary"], [1, "media-right", "align-self-center"], [1, "ft-play", "primary", "font-large-2", "float-right"], [1, "progress", 2, "height", "4px"], ["role", "progressbar", "attr.aria-valuemax", "100", 1, "progress-bar", "bg-primary"], [1, "mb-1", "warning"], [1, "warning"], [1, "ft-book-open", "warning", "font-large-2", "float-right"], ["role", "progressbar", "attr.aria-valuemax", "100", 1, "progress-bar", "bg-warning"], [1, "mb-1", "success"], [1, "success"], [1, "ft-check", "success", "font-large-2", "float-right"], ["attr.aria-valuemax", "100", 1, "progress-bar", "bg-success"], [1, "mb-1", "danger"], [1, "danger"], [1, "ft-trending-up", "danger", "font-large-2", "float-right"], ["role", "progressbar", "attr.aria-valuemax", "100", 1, "progress-bar", "bg-danger"], [1, "col-12", "col-md-6"], ["mat-align-tabs", "start"], ["label", "Solved Exams"], [1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills"], ["Solved", "ngbNav"], ["ngbNavItem", "Subject"], ["ngbNavLink", "", 1, "nav-link"], ["ngbNavContent", ""], ["ngbNavItem", "Unit"], ["ngbNavItem", "Lesson"], ["ngbNavItem", "quizzes"], [1, "ml-4", 3, "ngbNavOutlet"], ["label", "Unsolved Exams"], ["Unsolved", "ngbNav"], ["ngbNavItem", "Subject2"], ["ngbNavItem", "Unit2"], ["ngbNavItem", "Lesson2"], ["ngbNavItem", "quizzes2"], ["label", "Subscribed Lectures"], ["Subscribed", "ngbNav"], ["ngbNavItem", "Videos"], ["ngbNavItem", "Offline"], ["label", "Unsubscribed Lectures\n"], ["Unsubscribed", "ngbNav"], [1, "table", "text-center", "m-0", "table-sm"], [4, "ngFor", "ngForOf"], [1, "text-truncate"], [1, "info", "p-0", 3, "routerLink"], ["r", "", 1, "info", "p-0", 3, "routerLink"], [1, "ft-play", "font-medium-1", "mr-1"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "ul", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "li", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Subject Exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, SubjectEvaluationComponent_ng_template_77_Template, 13, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "li", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Unit Exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, SubjectEvaluationComponent_ng_template_81_Template, 13, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "li", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Lesson Exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, SubjectEvaluationComponent_ng_template_85_Template, 13, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Quizzes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, SubjectEvaluationComponent_ng_template_89_Template, 13, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "mat-tab", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "ul", 29, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "li", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Subject Exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](98, SubjectEvaluationComponent_ng_template_98_Template, 11, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "li", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Unit Exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, SubjectEvaluationComponent_ng_template_102_Template, 13, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Lesson Exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](106, SubjectEvaluationComponent_ng_template_106_Template, 13, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "li", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Quizzes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, SubjectEvaluationComponent_ng_template_110_Template, 13, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](111, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "mat-tab-group", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "mat-tab", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "ul", 29, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "li", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, " Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](123, SubjectEvaluationComponent_ng_template_123_Template, 15, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "li", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Offline");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](127, SubjectEvaluationComponent_ng_template_127_Template, 15, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "mat-tab", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "ul", 29, 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "li", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, " Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](136, SubjectEvaluationComponent_ng_template_136_Template, 15, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "li", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Offline");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](140, SubjectEvaluationComponent_ng_template_140_Template, 15, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](141, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](73);

      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](94);

      var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](119);

      var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](132);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.Exams == null ? null : ctx.Exams.specificSubject == null ? null : ctx.Exams.specificSubject.subject_ar_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.Exams == null ? null : ctx.Exams.matCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 29, "Material.Videos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](43, _c0, (ctx.Exams == null ? null : ctx.Exams.matCount) + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", ctx.Exams == null ? null : ctx.Exams.matCount)("aria-valuemin", ctx.Exams == null ? null : ctx.Exams.matCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.Exams == null ? null : ctx.Exams.examCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 31, "Material.Exams"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](45, _c0, (ctx.Exams == null ? null : ctx.Exams.examCount) + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", ctx.Exams == null ? null : ctx.Exams.examCount)("aria-valuemin", ctx.Exams == null ? null : ctx.Exams.examCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.Exams == null ? null : ctx.Exams.studentExamCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 33, "Material.SolvedExams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](47, _c0, (ctx.Exams == null ? null : ctx.Exams.studentExamCount) + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", ctx.Exams == null ? null : ctx.Exams.studentExamCount)("aria-valuemin", ctx.Exams == null ? null : ctx.Exams.studentExamCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 35, ctx.achievments), " % ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 37, "Material.Achievments"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](49, _c0, ctx.achievments + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 39, ctx.achievments))("aria-valuemin", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 41, ctx.achievments));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r13);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





var LeaderBoardComponent = /*#__PURE__*/function () {
  function LeaderBoardComponent() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeaderBoardComponent);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LeaderBoardComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 11961);




var MyAppretiationComponent = /*#__PURE__*/function () {
  function MyAppretiationComponent() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyAppretiationComponent);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MyAppretiationComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RefundLectureComponent);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RefundLectureComponent, [{
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
  consts: [[1, "row"], [1, "col-12"], [1, "example-card"], [1, "container-fluid", 3, "formGroup"], [1, "form-group", "row"], [1, "col-sm-3"], [1, "primary"], ["disabled", "", "readonly", "", 1, "form-control", "bg-light-primary", 3, "value"], [1, "row", "f-w"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["formControlName", "stageId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "yearId", 3, "selectionChange"], ["formControlName", "subjectId", 3, "selectionChange"], ["formControlName", "teacherId", 3, "selectionChange"], ["formControlName", "RefundedLectureId"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [3, "value"]],
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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
/* harmony import */ var _pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/NewDate.pipe */ 3865);


















function UserBalanceDetailsComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r30 + 1);
  }
}

function UserBalanceDetailsComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "NewDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ele_r31 == null ? null : ele_r31.Date));
  }
}

function UserBalanceDetailsComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ele_r32 == null ? null : ele_r32.amount, " .LE");
  }
}

function UserBalanceDetailsComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Payment Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r33 == null ? null : ele_r33.payment_method);
  }
}

function UserBalanceDetailsComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r34 == null ? null : ele_r34.order_status);
  }
}

function UserBalanceDetailsComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
  }
}

function UserBalanceDetailsComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 30);
  }
}

function UserBalanceDetailsComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r36 + 1);
  }
}

function UserBalanceDetailsComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Lecture Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r37 == null ? null : ele_r37.itemTypeArName);
  }
}

function UserBalanceDetailsComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Lecture Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r38 == null ? null : ele_r38.partName);
  }
}

function UserBalanceDetailsComponent_th_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r39 == null ? null : ele_r39.teacherName);
  }
}

function UserBalanceDetailsComponent_th_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r40 == null ? null : ele_r40.subjectName);
  }
}

function UserBalanceDetailsComponent_th_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r41 == null ? null : ele_r41.amount);
  }
}

function UserBalanceDetailsComponent_th_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Payment Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ele_r42 == null ? null : ele_r42.paymentMethodName, " ");
  }
}

function UserBalanceDetailsComponent_th_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserBalanceDetailsComponent_td_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "NewDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ele_r43 == null ? null : ele_r43.Date));
  }
}

function UserBalanceDetailsComponent_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
  }
}

function UserBalanceDetailsComponent_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 30);
  }
}

var _c0 = function _c0() {
  return [10];
};

var UserBalanceDetailsComponent = /*#__PURE__*/function () {
  function UserBalanceDetailsComponent(route, SearchStudentsService, spinner, authserv, toastr) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserBalanceDetailsComponent);

    this.route = route;
    this.SearchStudentsService = SearchStudentsService;
    this.spinner = spinner;
    this.authserv = authserv;
    this.toastr = toastr;
    this.EduCompId = null; //Payments: IUserPaymentsVM[] = [];
    // PaymentsHistory: IUserPaymentsHistoryVM[] = [];

    this.displayedColumnsPayments = ["#", "date", "amount", "paymentMethod", "status"];
    this.displayedColumnsPaymentsHistory = ["#", "lectureType", "lectureName", "teacher", "subject", "price", "paymentMethod", "date"];
    this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.QueryList();
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.QueryList(); //Pagination

    this.PaymentsTotalCount = 0;
    this.HistoryTotalCount = 0;
    route.paramMap.subscribe(function (params) {
      _this.userId = Number(params.get("userId"));
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserBalanceDetailsComponent, [{
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
  decls: 90,
  vars: 15,
  consts: [[1, "row"], [1, "col-12", "col-md-4"], [1, "card", "card-inverse", "bg-warning"], [1, "media"], [1, "media-body", "text-left"], [1, "card-text"], [1, "card", "card-inverse", "bg-danger"], [1, "card", "card-inverse", "bg-primary"], [1, "col-12"], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "amount"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "length", "page"], ["matColumnDef", "lectureType"], ["matColumnDef", "lectureName"], ["matColumnDef", "teacher"], ["matColumnDef", "subject"], ["matColumnDef", "price"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, UserBalanceDetailsComponent_tr_52_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, UserBalanceDetailsComponent_tr_53_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-paginator", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function UserBalanceDetailsComponent_Template_mat_paginator_page_54_listener($event) {
        return ctx.getStudentPayments($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " Payments History");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](63, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, UserBalanceDetailsComponent_th_64_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, UserBalanceDetailsComponent_td_65_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](66, 21);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](81, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, UserBalanceDetailsComponent_th_82_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, UserBalanceDetailsComponent_td_83_Template, 2, 1, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](84, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, UserBalanceDetailsComponent_th_85_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, UserBalanceDetailsComponent_td_86_Template, 3, 3, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, UserBalanceDetailsComponent_tr_87_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, UserBalanceDetailsComponent_tr_88_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "mat-paginator", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function UserBalanceDetailsComponent_Template_mat_paginator_page_89_listener($event) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
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
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function UserDataComponent_mat_hint_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function UserDataComponent_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserDataComponent_mat_hint_28_span_1_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.ar_name.errors == null ? null : ctx_r1.FormCtrls.ar_name.errors.required) || (ctx_r1.FormCtrls.ar_name.errors == null ? null : ctx_r1.FormCtrls.ar_name.errors.whiteSpace));
  }
}

function UserDataComponent_mat_hint_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_35_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.MobileLength"), " ");
  }
}

function UserDataComponent_mat_hint_35_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.NumberMustStartWith"), " ");
  }
}

function UserDataComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserDataComponent_mat_hint_35_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserDataComponent_mat_hint_35_span_2_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UserDataComponent_mat_hint_35_span_3_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.required) || (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.whiteSpace) || (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.minlength) || (ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.FormCtrls.mobile.errors == null ? null : ctx_r2.FormCtrls.mobile.errors.startsWith);
  }
}

function UserDataComponent_mat_hint_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Enter correct Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserDataComponent_mat_hint_42_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserDataComponent_mat_hint_42_span_2_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.account_email.errors == null ? null : ctx_r3.FormCtrls.account_email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.account_email.errors == null ? null : ctx_r3.FormCtrls.account_email.errors.email);
  }
}

function UserDataComponent_mat_hint_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserDataComponent_mat_hint_49_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrls.account_password.errors == null ? null : ctx_r4.FormCtrls.account_password.errors.required);
  }
}

function UserDataComponent_mat_hint_56_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserDataComponent_mat_hint_56_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrls.newPassword.errors == null ? null : ctx_r5.FormCtrls.newPassword.errors.required);
  }
}

function UserDataComponent_mat_hint_63_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " New Password and Confirm Password not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserDataComponent_mat_hint_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserDataComponent_mat_hint_63_span_1_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.FormCtrls.ConfirmPassword.errors == null ? null : ctx_r6.FormCtrls.ConfirmPassword.errors.mustMatch);
  }
}

var UserDataComponent = /*#__PURE__*/function () {
  function UserDataComponent(fb, toastr, GeneralServ, spinner) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserDataComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.GeneralServ = GeneralServ;
    this.spinner = spinner;
    this.submitted = false;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserDataComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.returnProfile();
      this.myForm = this.fb.group({
        ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[a-zA-Z \u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]+$/), app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9_ \-\(\)\S*$]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(11), app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.startsWith]],
        account_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
        account_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]],
        newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]],
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
        _this.myForm.patchValue(res.user);

        _this.FormCtrls.profilePicture.setValue(res.picturePath);

        _this.picturePath = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL.replace("/api/", "")).concat(res.picturePath);

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
  return new (t || UserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService));
};

UserDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UserDataComponent,
  selectors: [["app-user-data"]],
  decls: 68,
  vars: 36,
  consts: [[1, "row"], [1, "col-12"], [1, "example-card"], [1, "media"], ["alt", "avatar", "height", "64", "width", "64", 1, "users-avatar-shadow", "avatar", "mr-3", "rounded-circle", 3, "src"], [1, "media-body"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-start", "px-0", "mb-sm-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn-sm", "bg-light-primary", "mb-1", "mb-sm-0", 3, "click"], ["hidden", "", "type", "file", "accept", "image/*", "id", "file", 3, "change"], ["fileInput", ""], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "ar_name", "autocomplete", "new-password"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "mobile"], ["matInput", "", "type", "email", "formControlName", "account_email", "autocomplete", "new-password"], ["matInput", "", "type", "password", "formControlName", "account_password", "autocomplete", "new-password"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "ConfirmPassword"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"]],
  template: function UserDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserDataComponent_Template_button_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);

        return _r0.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UserDataComponent_Template_input_change_18_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, UserDataComponent_mat_hint_28_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, UserDataComponent_mat_hint_35_Template, 4, 3, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, UserDataComponent_mat_hint_42_Template, 3, 2, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, UserDataComponent_mat_hint_49_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, UserDataComponent_mat_hint_56_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, UserDataComponent_mat_hint_63_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "mat-card-actions", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserDataComponent_Template_button_click_65_listener() {
        return ctx.editProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 18, "Navbar.EditProfile"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 20, "labels.ProfilePicture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 22, "labels.Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ar_name.invalid && (ctx.FormCtrls.ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 24, "labels.Mobile"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.mobile.invalid && (ctx.FormCtrls.mobile.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 26, "labels.Email"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.account_email.invalid && (ctx.FormCtrls.account_email.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 28, "labels.Password"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.account_password.invalid && (ctx.FormCtrls.account_password.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 30, "labels.NewPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.newPassword.invalid && (ctx.FormCtrls.newPassword.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 32, "labels.ConfirmPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ConfirmPassword.invalid && (ctx.FormCtrls.ConfirmPassword.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 34, "General.Save"), " ");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomizerComponent);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomizerComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AppAssets = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppAssets() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppAssets);

  this.arFlag = "assets/img/flags/ar.png";
  this.enFlag = "assets/img/flags/us.png";
  this.logo = "assets/img/logo-ntemp.png";
  this.darkLogo = "assets/img/logo-dark.png";
  this.lock = "assets/img/gallery/lock.png";
  this.maintenance = "assets/img/gallery/maintenance.png";
  this.examCardBackground = "assets/img/lectureBackground.jpeg";
  this.examCardBackground2 = "assets/img/ect.jpg";
  this.coursesHeader = "assets/img/bak.jpg";
});

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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AppStrings = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppStrings() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppStrings);

  this.arabic = "عربي";
  this.english = "English";
  this.ar = "ar";
  this.en = "en";
  this.CURRENT_LANG = "currentLang";
  this.stageLecture = "material";
  this.stageExam = "exam";
  this.stageAttach = "attach";
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

/***/ 22843:
/*!********************************************!*\
  !*** ./src/app/shared/data/styles-path.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arabicStylesList": function() { return /* binding */ arabicStylesList; },
/* harmony export */   "enStylesList": function() { return /* binding */ enStylesList; }
/* harmony export */ });
var arabicStylesList = [{
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
var enStylesList = [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-link.directive */ 7883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var SidebarAnchorToggleDirective = /*#__PURE__*/function () {
  function SidebarAnchorToggleDirective(navlink) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarAnchorToggleDirective);

    this.navlink = navlink;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarAnchorToggleDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




var SidebarDropdownDirective = /*#__PURE__*/function () {
  function SidebarDropdownDirective(router) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarDropdownDirective);

    this.router = router;
    this.navlinks = [];
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarDropdownDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.directive */ 57744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var SidebarLinkDirective = /*#__PURE__*/function () {
  function SidebarLinkDirective(sideNav) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarLinkDirective);

    this.sideNav = sideNav;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarLinkDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 85682);






var SidebarDirective = /*#__PURE__*/function () {
  function SidebarDirective(cdr, router, configService, layoutService) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarDirective);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ 38914);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ToggleFullscreenDirective = /*#__PURE__*/function () {
  function ToggleFullscreenDirective() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToggleFullscreenDirective);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ToggleFullscreenDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topmenu-link.directive */ 31793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var TopMenuAnchorToggleDirective = /*#__PURE__*/function () {
  function TopMenuAnchorToggleDirective(navlink) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuAnchorToggleDirective);

    this.navlink = navlink;
  } // @HostListener("click", ["$event"])
  // onClick() {
  //   this.navlink.toggle();
  // }


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuAnchorToggleDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




var TopMenuDropdownDirective = /*#__PURE__*/function () {
  function TopMenuDropdownDirective(router) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuDropdownDirective);

    this.router = router;
    this.navlinks = [];
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuDropdownDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _topmenu_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topmenu.directive */ 60342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var TopMenuLinkDirective = /*#__PURE__*/function () {
  function TopMenuLinkDirective(topNav) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuLinkDirective);

    this.topNav = topNav;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuLinkDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var TopMenuDirective = /*#__PURE__*/function () {
  function TopMenuDirective() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuDirective);

    this.navlinks = [];
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuDirective, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




var FooterComponent = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterComponent() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterComponent);

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
  consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], ["id", "pixinventLink", "href", "https://trainingmisrangular.cloudiax.com"], [1, "d-none", "d-sm-inline-block"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Egypt Training");
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_admin_services_Admin_gifts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/admin/services/Admin/gifts.service */ 64105);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/topmenu-dropdown.directive */ 90235);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/topmenu-link.directive */ 31793);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/topmenu-anchor-toggle.directive */ 91354);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);

















var _c0 = function _c0() {
  return {
    exact: true
  };
};

function HorizontalMenuComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 9, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 11, "Navbar.mySpace"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 13, "Navbar.CourseRequest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 15, "Gifts.GiftsGallery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.points);
  }
}

function HorizontalMenuComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 8);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 4, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 6, "Navbar.Support"));
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function HorizontalMenuComponent_ul_4_li_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c1, menuItem_r5.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, menuItem_r5.title));
  }
}

function HorizontalMenuComponent_ul_4_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r5.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c1, menuItem_r5.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, menuItem_r5.title));
  }
}

function HorizontalMenuComponent_ul_4_li_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c1, menuItem_r5.path), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](7, _c1, menuItem_r5.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, menuItem_r5.title));
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c1, menuSubsubItem_r17.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c1, menuSubsubItem_r17.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r17.title);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("href", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c1, menuSubsubItem_r17.path), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c1, menuSubsubItem_r17.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r17.title);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_a_1_Template, 4, 8, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_ng_template_2_Template, 4, 8, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r17 = ctx.$implicit;

    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);

    var menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4).$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r16.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r5.title)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !menuSubsubItem_r17.isExternalLink)("ngIfElse", _r19);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_li_1_Template, 4, 6, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuSubItem_r14.submenu);
  }
}

var _c2 = function _c2(a0) {
  return {
    functionId: a0
  };
};

function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return ctx_r25.setFunC;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_ul_6_Template, 2, 1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r14 = ctx.$implicit;
    var menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r13.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r5.title)("routerLinkActive", (menuSubItem_r14.submenu == null ? null : menuSubItem_r14.submenu.length) != 0 ? "active" : "active")("ngClass", menuSubItem_r14.class === "dropdown-item" ? "" : "has-sub dropdown dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-menu", menuSubItem_r14.class === "dropdown-item" ? "" : "dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r14.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](13, _c2, menuSubItem_r14.functionId))("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c1, menuSubItem_r14.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 11, menuSubItem_r14.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (menuSubItem_r14.submenu == null ? null : menuSubItem_r14.submenu.length) > 0);
  }
}

function HorizontalMenuComponent_ul_4_li_7_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_ul_4_li_1_Template, 7, 17, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuItem_r5.submenu);
  }
}

function HorizontalMenuComponent_ul_4_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HorizontalMenuComponent_ul_4_li_7_a_1_Template, 5, 6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HorizontalMenuComponent_ul_4_li_7_a_2_Template, 5, 7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HorizontalMenuComponent_ul_4_li_7_a_3_Template, 5, 9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HorizontalMenuComponent_ul_4_li_7_ul_4_Template, 2, 1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r5 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r4.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r5.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c1, menuItem_r5.class))("routerLinkActive", (menuItem_r5.submenu == null ? null : menuItem_r5.submenu.length) != 0 ? "active" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-menu", menuItem_r5.class === "dropdown nav-item" ? "dropdown" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (menuItem_r5.submenu == null ? null : menuItem_r5.submenu.length) > 0 && !menuItem_r5.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (menuItem_r5.submenu == null ? null : menuItem_r5.submenu.length) === 0 && !menuItem_r5.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r5.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (menuItem_r5.submenu == null ? null : menuItem_r5.submenu.length) > 0);
  }
}

function HorizontalMenuComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HorizontalMenuComponent_ul_4_li_7_Template, 5, 13, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 3, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.menuItems);
  }
}

function HorizontalMenuComponent_ul_5_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var eduComp_r31 = ctx.$implicit;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", (eduComp_r31 == null ? null : eduComp_r31.Id) == ctx_r29.EduCompId)("value", eduComp_r31.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", eduComp_r31 == null ? null : eduComp_r31.Name, " ");
  }
}

function HorizontalMenuComponent_ul_5_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var branch_r32 = ctx.$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", (branch_r32 == null ? null : branch_r32.Id) == ctx_r30.branchId)("value", branch_r32 == null ? null : branch_r32.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", branch_r32 == null ? null : branch_r32.Name, " ");
  }
}

function HorizontalMenuComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function HorizontalMenuComponent_ul_5_Template_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r33.EduCompId = $event;
    })("change", function HorizontalMenuComponent_ul_5_Template_select_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r35.onChangeEduCompId(ctx_r35.EduCompId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HorizontalMenuComponent_ul_5_option_6_Template, 2, 3, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function HorizontalMenuComponent_ul_5_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r36.branchId = $event;
    })("change", function HorizontalMenuComponent_ul_5_Template_select_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r37.changebranchId();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HorizontalMenuComponent_ul_5_option_12_Template, 2, 3, "option", 44);
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

var _c3 = function _c3(a0, a1) {
  return {
    "navbar-sticky": a0,
    "navbar-fixed": a1
  };
};

var HorizontalMenuComponent = /*#__PURE__*/function () {
  function HorizontalMenuComponent(router, authService, configService, cdr, studentserv, translate, GeneralServ, spinner, giftServ) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalMenuComponent);

    this.router = router;
    this.authService = authService;
    this.configService = configService;
    this.cdr = cdr;
    this.studentserv = studentserv;
    this.translate = translate;
    this.GeneralServ = GeneralServ;
    this.spinner = spinner;
    this.giftServ = giftServ;
    this.config = {};
    this.level = 0;
    this.transparentBGClass = "";
    this.menuPosition = "Top";
    this.config = this.configService.templateConf;
    this.EduCompId = this.authService.getEduCompId();
    if (this.EduCompId) this.onChangeEduCompId(this.EduCompId);
    this.branchId = this.authService.getBranchId();
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var _a;

      if (this.authService.isStudent()) {
        this.balanceCheck();
        this.giftServ.getPoints();
      }

      (_a = this.giftServ) === null || _a === void 0 ? void 0 : _a.userPoints.subscribe(function (point) {
        _this.points = point.UnUsedpoints;
      });

      if (this.authService.isUser() && (!this.authService.isStudent() || !this.authService.isSupport())) {
        this.getEduCompByUser();
        this.getUserFunctions(this.branchId);
      }

      if (!this.authService.isUser()) {
        this.menuItems = [];
      } // this.menuItems = routs;

    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authService.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;

        if (_this2.authService.isUser() && (!_this2.authService.isStudent() || !_this2.authService.isSupport())) {
          if (e.branchId) _this2.getUserFunctions(e.branchId);
        }
      });
      this.authService.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        if (_this2.authService.isUser() && (!_this2.authService.isStudent() || !_this2.authService.isSupport())) {
          if (e.branchId) _this2.getUserFunctions(e.branchId); //  this.onChangeEduCompId(e.EduCompId);
        }
      });
      this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this2.config = templateConf;
        }

        _this2.loadLayout();

        _this2.cdr.markForCheck();
      });
    }
  }, {
    key: "getUserFunctions",
    value: function getUserFunctions(branchId) {
      var _this3 = this;

      this.spinner.show();
      var userFun = [];
      this.authService.getUserFunctions(branchId).subscribe(function (res) {
        res.GrouplessFunctions.forEach(function (fun) {
          if (!userFun.includes(fun.functionId)) userFun.push(fun.functionId);
        });
        res.Groups.forEach(function (fun) {
          fun.submenu.forEach(function (sunFun) {
            if (!userFun.includes(fun.functionId)) userFun.push(sunFun.functionId);
          });
        });

        _this3.authService.setUserFunctions(userFun); // console.log("functions: ", res);


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
      this.branchId = "";
      this.GeneralServ.getEduCompByUser().subscribe(function (res) {
        _this4.EducationalComps = res;
      });
    }
  }, {
    key: "onChangeEduCompId",
    value: function onChangeEduCompId(EduCompId) {
      var _this5 = this;

      this.authService.setEduCompId(EduCompId);

      if (EduCompId !== "null" && EduCompId != "undefined") {
        this.GeneralServ.getBranchesByEduComp(EduCompId).subscribe(function (res) {
          var _a, _b;

          _this5.Branches = res;

          _this5.authService.setBranchId((_a = res[0]) === null || _a === void 0 ? void 0 : _a.Id);

          _this5.branchId = (_b = res[0]) === null || _b === void 0 ? void 0 : _b.Id;
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
      var _this6 = this;

      this.studentserv.balanceCheck().subscribe(function (res) {
        _this6.BalanceData = res;
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
  return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_4__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_admin_services_Admin_gifts_service__WEBPACK_IMPORTED_MODULE_6__.GiftsService));
};

HorizontalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: HorizontalMenuComponent,
  selectors: [["app-horizontal-menu"]],
  decls: 7,
  vars: 11,
  consts: [["role", "navigation", "data-menu", "menu-wrapper", "data-nav", "brand-center", 3, "ngClass"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content", "center-layout", "row", "w-100"], ["appTopMenuDropdown", "", "class", "navigation-main nav navbar-nav", "id", "main-menu-navigation", "data-menu", "menu-navigation", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "navigation-main nav navbar-nav col-9", "id", "main-menu-navigation", "data-menu", "menu-navigation", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "navigation-main nav navbar-nav col-3 d-flex align-items-right", "id", "main-menu-navigation", "data-menu", "menu-navigation", 4, "ngIf"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav"], ["appTopMenulink", "", "parent", "Home", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/home", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "ft-home"], ["appTopMenulink", "", "parent", "My Space", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/student/mySpace", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "ft-user"], ["routerLink", "/student/course-employee-request", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "fa", "fa-user-plus"], ["appTopMenulink", "", "parent", "Recharge", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/student/gifts-gallery", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [1, "fa", "fa-gift"], ["routerLink", "/support/search", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav", "col-9"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "dropdown-toggle nav-link d-flex align-items-center", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "href", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "dropdown-menu", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [3, "ngClass"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "routerLink"], ["target", "_blank", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "href"], ["appTopMenuDropdown", "", 1, "dropdown-menu"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "queryParams", "ngClass", "click"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink"], [1, ""], ["data-toggle", "dropdown", "target", "_blank", 3, "ngClass", "href"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav", "col-3", "d-flex", "align-items-right"], ["appTopMenulink", "", 1, "dropdown", "nav-item"], [1, "form-control", "bg-secondry", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"]],
  template: function HorizontalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HorizontalMenuComponent_ul_2_Template, 28, 21, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HorizontalMenuComponent_ul_3_Template, 13, 10, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HorizontalMenuComponent_ul_4_Template, 8, 6, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, HorizontalMenuComponent_ul_5_Template, 13, 12, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMapInterpolate1"]("header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-shadow menu-border navbar-brand-center  ", ctx.transparentBGClass, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.authService.isStudent());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.authService.isSupport());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.authService.isStudent() || ctx.authService.isSupport()) && ctx.authService.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.authService.isStudent() || ctx.authService.isSupport()) && ctx.authService.isUser());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__.TopMenuDropdownDirective, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_8__.TopMenuLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__.TopMenuAnchorToggleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"]],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ 3184);







































var materialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule // NgImageSliderModule,
//ExcelExportModule,
//UploadModule,
];
var MaterialModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MaterialModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MaterialModule);
});

MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};

MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineInjector"]({
  imports: [[materialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__.MatTreeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__.MatGridListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _data_template_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/template-search */ 91918);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _data_styles_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/styles-path */ 22843);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth/auth.service */ 16256);
/* harmony import */ var _services_General_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/General/general.service */ 65086);
/* harmony import */ var _data_app_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/app-assets */ 8843);
/* harmony import */ var _data_app_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/app-strings */ 57834);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/toggle-fullscreen.directive */ 53418);



















var _c0 = ["search"];
var _c1 = ["searchResults"];

function NavbarComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_li_34_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r2.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.user == null ? null : ctx_r0.user.ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.user == null ? null : ctx_r0.user.user_ID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r0.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 5, "Navbar.EditProfile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 7, "Navbar.LogOut"));
  }
}

function NavbarComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, "Navbar.Login"), " ");
  }
}

var _c2 = function _c2(a0, a1, a2, a3) {
  return {
    "navbar-brand-center": a0,
    "navbar-static": a1,
    "navbar-sticky": a2,
    "fixed-top": a3
  };
};

var _c3 = function _c3() {
  return ["/"];
}; // declare function changeStyle(): any;


var NavbarComponent = /*#__PURE__*/function () {
  function NavbarComponent(translate, layoutService, router, configService, cdr, authservice, GeneralServ, assets, appStrings) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);

    this.translate = translate;
    this.layoutService = layoutService;
    this.router = router;
    this.configService = configService;
    this.cdr = cdr;
    this.authservice = authservice;
    this.GeneralServ = GeneralServ;
    this.assets = assets;
    this.appStrings = appStrings;
    this.selectedLanguageText = "English";
    this.selectedLanguageFlag = this.assets.enFlag;
    this.toggleClass = "ft-maximize";
    this.placement = "bottom-right";
    this.logoUrl = this.assets.logo; //logoUrl = 'assets/img/logo.png';

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
    this.translate.use(this.currentLang);
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
      _this.hideSidebar = !isShow;
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a;

      this.currentLang = (_a = localStorage.getItem(this.appStrings.CURRENT_LANG)) !== null && _a !== void 0 ? _a : this.appStrings.ar;
      this.translate.use(this.currentLang);
      this.listItems = _data_template_search__WEBPACK_IMPORTED_MODULE_2__.LISTITEMS;
      if (this.authservice.isUser()) this.returnProfile();

      if (this.innerWidth < 1200) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }

      this.arStyles = _data_styles_path__WEBPACK_IMPORTED_MODULE_4__.arabicStylesList;
      this.enStyles = _data_styles_path__WEBPACK_IMPORTED_MODULE_4__.enStylesList;
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

        _this2.loadLayout();

        _this2.cdr.markForCheck();
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
    key: "ChangeLanguage",
    value: function ChangeLanguage(language) {
      this.translate.use(language || this.appStrings.ar);
      localStorage.setItem(this.appStrings.CURRENT_LANG, language);

      if (language === this.appStrings.en) {
        this.selectedLanguageText = this.appStrings.english;
        this.selectedLanguageFlag = this.assets.enFlag;
      } else if (language === this.appStrings.ar) {
        this.selectedLanguageText = this.appStrings.arabic;
        this.selectedLanguageFlag = this.assets.arFlag;
      }

      this.changeStyle(language);
    }
  }, {
    key: "returnProfile",
    value: function returnProfile() {
      var _this3 = this;

      this.GeneralServ.returnProfile().subscribe(function (res) {
        _this3.user = res.user;
        _this3.picturePath = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL.replace("/api/", "")).concat(res.picturePath);
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
        this.logoUrl = this.assets.logo; // this.logoUrl = "assets/img/logo-dark.png";
      } else {
        this.logoUrl = this.assets.logo; //this.logoUrl = "assets/img/logo.png";
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
      var _this4 = this;

      this.control.setValue("");

      if (display) {
        this.searchOpenClass = "open";
        setTimeout(function () {
          _this4.searchElement.nativeElement.focus();
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
  }, {
    key: "changeStyle",
    value: function changeStyle(currentLang) {
      var head = document.getElementsByTagName("head")[0];

      if (currentLang == "ar") {
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

  return NavbarComponent;
}();

NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_5__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_General_general_service__WEBPACK_IMPORTED_MODULE_8__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_data_app_assets__WEBPACK_IMPORTED_MODULE_9__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_data_app_strings__WEBPACK_IMPORTED_MODULE_10__.AppStrings));
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
  decls: 39,
  vars: 22,
  consts: [[3, "ngClass"], [1, "container-fluid", "navbar-wrapper"], [1, "navbar-header", "d-flex"], ["data-toggle", "collapse", 1, "navbar-toggle", "menu-toggle", "d-xl-none", "d-block", "float-left", "align-items-center", "justify-content-center", 3, "click"], [1, "ft-menu", "font-medium-3"], [1, "navbar-brand"], [1, "navbar-header"], [1, "navbar-nav"], [1, "nav-item"], [1, "logo"], [1, "logo-text", 3, "routerLink"], [1, "logo-img", 2, "display", "inline-block"], ["alt", "EgyptTraining logo", 1, "logo-img", 3, "src"], [1, "text", "navlogo"], [1, "navbar-container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-block"], ["display", "dynamic", "ngbDropdown", "", 1, "i18n-dropdown", "dropdown", "nav-item"], ["id", "dropdown-flag", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "d-flex", "align-items-center", "dropdown-toggle", "dropdown-language"], ["alt", "flag", 1, "langimg", "selected-flag", 3, "src"], [1, "selected-language", "d-md-flex", "d-none"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdown-flag", 1, "dropdown-menu", "dropdown-menu-right", "text-left"], ["href", "javascript:;", "data-language", "en", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/ar.png", "alt", "flag", 1, "langimg", "mr-2"], [1, "font-small-3"], ["src", "./assets/img/flags/us.png", "alt", "flag", 1, "langimg", "mr-2"], ["class", "dropdown nav-item mr-1", "placement", "bottom-left", "display", "static", "ngbDropdown", "", 4, "ngIf"], [4, "ngIf"], [1, "i18n-dropdown", "dropdown", "nav-item", "mr-2"], ["id", "navbar-fullscreen", "href", "javascript:;", "appToggleFullscreen", "", 1, "nav-link", "apptogglefullscreen", 3, "click"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1"], ["id", "dropdownBasic2", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "user-dropdown", "d-flex", "align-items-end"], [1, "user", "d-md-flex", "d-none", "mr-2"], [1, "text-right"], [1, "text-right", "text-lightcolor", "font-small-3"], ["alt", "avatar", "height", "35", "width", "35", 1, "avatar", 3, "src"], ["aria-labelledby", "dropdownBasic2", "ngbDropdownMenu", "", 1, "dropdown-menu", "text-left", "dropdown-menu-right", "m-0", "pb-0"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "ft-edit", "mr-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "ft-power", "mr-2"], [1, "dropdown", "nav-item", "mr-2", "d-xs-none"], ["routerLink", "/auth/login", 1, "nav-link"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " \xA0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_26_listener() {
        return ctx.ChangeLanguage("ar");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "\u0639\u0631\u0628\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_30_listener() {
        return ctx.ChangeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](31, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, NavbarComponent_li_34_Template, 22, 9, "li", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, NavbarComponent_ng_container_35_Template, 5, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_37_listener() {
        return ctx.ToggleClass();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "i");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction4"](16, _c2, ctx.menuPosition === "Top", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed", ctx.isSmallScreen && ctx.menuPosition === "Top"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](21, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 14, "SiteName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx.selectedLanguageFlag, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.selectedLanguageText);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.authservice.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"](" ", ctx.toggleClass, " font-medium-3");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__.ToggleFullscreenDirective],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".logo-text[_ngcontent-%COMP%] {\n  width: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby10ZXh0IHtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG59Il19 */"]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationSidebarComponent);

    this.layoutService = layoutService;
    this.isOpen = false;
    this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(function (open) {
      _this.isOpen = open;
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationSidebarComponent, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var NewDatePipe = /*#__PURE__*/function () {
  function NewDatePipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewDatePipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NewDatePipe, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var TimePipe = /*#__PURE__*/function () {
  function TimePipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TimePipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TimePipe, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var TimerPipe = /*#__PURE__*/function () {
  function TimerPipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TimerPipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TimerPipe, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var FilterPipe = /*#__PURE__*/function () {
  function FilterPipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterPipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterPipe, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ 68738);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.pipe */ 96903);
/* harmony import */ var _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-name.pipe */ 93100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







var PipeModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PipeModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PipeModule);
});

PipeModule.ɵfac = function PipeModule_Factory(t) {
  return new (t || PipeModule)();
};

PipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: PipeModule
});
PipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PipeModule, {
    declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortNamePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
    exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortNamePipe]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var RoundPipe = /*#__PURE__*/function () {
  function RoundPipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RoundPipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RoundPipe, [{
    key: "transform",
    value: function transform(value) {
      return Math.round(value);
      ;
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);




var SafePipe = /*#__PURE__*/function () {
  function SafePipe(sanitizer) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SafePipe);

    this.sanitizer = sanitizer;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SafePipe, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SearchPipe = /*#__PURE__*/function () {
  function SearchPipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchPipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchPipe, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SecondsToTimePipe = /*#__PURE__*/function () {
  function SecondsToTimePipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SecondsToTimePipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SecondsToTimePipe, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var ShortNamePipe = /*#__PURE__*/function () {
  function ShortNamePipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShortNamePipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ShortNamePipe, [{
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

/***/ 51033:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/slice-exam-pic.pipe.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceExamPicPipe": function() { return /* binding */ SliceExamPicPipe; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SliceExamPicPipe = /*#__PURE__*/function () {
  function SliceExamPicPipe() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SliceExamPicPipe);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SliceExamPicPipe, [{
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
/* harmony import */ var _services_auth_Guards_roles_is_student_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/Guards/roles/is-student.guard */ 52536);
/* harmony import */ var _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user-data/user-data.component */ 18515);
/* harmony import */ var _services_auth_Guards_auth_is_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/Guards/auth/is-user.guard */ 13670);



 //Route for content layout with sidebar, navbar and footer.

var Full_ROUTES = [{
  path: "home",
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_student_services_teacherSubjects_service_ts-node_modules_ngx-owl-carousel-o_f-714683"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../home/home.module */ 3467)).then(function (m) {
      return m.HomeModule;
    });
  }
}, {
  path: "profile",
  component: _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_2__.UserDataComponent,
  canActivate: [_services_auth_Guards_auth_is_user_guard__WEBPACK_IMPORTED_MODULE_3__.IsUserGuard]
}, // Admin
{
  path: "dashboard",
  // canActivate: [AccessAllowGuard],
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../admin/dashboard.module */ 60051)).then(function (m) {
      return m.DashboardModule;
    });
  }
}, // Assistant
{
  path: "dashboard",
  // canActivate: [AccessAllowGuard],
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_assistant_assistant_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../assistant/assistant.module */ 1168)).then(function (m) {
      return m.AssistantModule;
    });
  }
}, // Student
{
  path: "student",
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin_services_Admin_educational_service_ts-src_app_admin_services_Admin_setu-03f4b2"), __webpack_require__.e("default-src_app_student_services_teacherSubjects_service_ts-node_modules_ngx-owl-carousel-o_f-714683"), __webpack_require__.e("common"), __webpack_require__.e("src_app_student_student_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../student/student.module */ 47859)).then(function (m) {
      return m.StudentModule;
    });
  },
  canActivate: [_services_auth_Guards_roles_is_student_guard__WEBPACK_IMPORTED_MODULE_1__.IsStudentGuard]
}, // Student
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var GeneralService = /*#__PURE__*/function () {
  function GeneralService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GeneralService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GeneralService, [{
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
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/getSubjects/" + yearId);
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
    value: function getSubjectByTeacherId(teacherId, yearId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-all-lectures/").concat(teacherId, "/").concat(yearId));
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
/* harmony export */   "UploadFileService": function() { return /* binding */ UploadFileService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }




var UploadFileService = /*#__PURE__*/function () {
  function UploadFileService() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UploadFileService);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadFileService, [{
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
        if (!url.FileAsBase64) return "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "")).concat(url);else return url.FileAsBase64;
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
      if (htmlId) document.getElementById(htmlId).value = null;
    }
  }]);

  return UploadFileService;
}();

UploadFileService.ɵfac = function UploadFileService_Factory(t) {
  return new (t || UploadFileService)();
};

UploadFileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: UploadFileService,
  factory: UploadFileService.ɵfac,
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ 16256);





var IsUserGuard = /*#__PURE__*/function () {
  function IsUserGuard(route, authservice) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IsUserGuard);

    this.route = route;
    this.authservice = authservice;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IsUserGuard, [{
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

/***/ 52536:
/*!***********************************************************************!*\
  !*** ./src/app/shared/services/auth/Guards/roles/is-student.guard.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsStudentGuard": function() { return /* binding */ IsStudentGuard; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ 16256);





var IsStudentGuard = /*#__PURE__*/function () {
  function IsStudentGuard(route, authservice) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IsStudentGuard);

    this.route = route;
    this.authservice = authservice;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IsStudentGuard, [{
    key: "canActivate",
    value: function canActivate(route, state) {
      if (this.authservice.isStudent()) {
        return true;
      } else {
        this.route.navigateByUrl("/home");
        return false;
      }
    }
  }]);

  return IsStudentGuard;
}();

IsStudentGuard.ɵfac = function IsStudentGuard_Factory(t) {
  return new (t || IsStudentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

IsStudentGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: IsStudentGuard,
  factory: IsStudentGuard.ɵfac,
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ 16256);





var IsSupportGuard = /*#__PURE__*/function () {
  function IsSupportGuard(route, authservice) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IsSupportGuard);

    this.route = route;
    this.authservice = authservice;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IsSupportGuard, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);









var AuthService = /*#__PURE__*/function () {
  function AuthService(http, router, appStrings) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthService);

    this.http = http;
    this.router = router;
    this.appStrings = appStrings;
    this.EduCompId = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.branchId = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.userFunctions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().append("Content-Type", "application/json");
  } //#region Registeration
  // START Registeration


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthService, [{
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
      var _this = this;

      Object.keys(localStorage).forEach(function (key) {
        if (!key.includes(_this.appStrings.CURRENT_LANG)) delete localStorage[key];
      });
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
    } //#endregion
    //#region  Chick Users
    //================= Start  Chick Users ==================

  }, {
    key: "isUser",
    value: function isUser() {
      return !!localStorage.getItem("token");
    }
  }, {
    key: "isTeacher",
    value: function isTeacher() {
      if (localStorage.getItem("user_type_Id") == "1") {
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
      if (localStorage.getItem("user_type_Id") == "3") {
        return true;
      } else return false;
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      if (localStorage.getItem("user_type_Id") == "4") {
        return true;
      } else return false;
    }
  }, {
    key: "isCenter",
    value: function isCenter() {
      if (localStorage.getItem("user_type_Id") == "5") {
        return true;
      } else return false;
    }
  }, {
    key: "isSupport",
    value: function isSupport() {
      if (localStorage.getItem("user_type_Id") == "6") {
        return true;
      } else return false;
    }
  }, {
    key: "isFinancial",
    value: function isFinancial() {
      if (localStorage.getItem("user_type_Id") == "7") {
        return true;
      } else return false;
    }
  }, {
    key: "isAssistant",
    value: function isAssistant() {
      if (localStorage.getItem("user_type_Id") == "8") {
        return true;
      } else return false;
    } //#endregion
    // isUser GetToken

  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem("token") || null;
    }
  }, {
    key: "UserFunctions",
    value: function UserFunctions() {
      return this, this.userFunctions;
    }
  }, {
    key: "setUserFunctions",
    value: function setUserFunctions(userFunction) {
      this.userFunctions.next(userFunction);
    }
  }, {
    key: "getEduCompId",
    value: function getEduCompId() {
      return localStorage.getItem("EduCompId");
    }
  }, {
    key: "setEduCompId",
    value: function setEduCompId(EduCompId) {
      if (EduCompId) {
        localStorage.setItem("EduCompId", EduCompId !== null && EduCompId !== void 0 ? EduCompId : null);
        this.EduCompId.next({
          EduCompId: EduCompId
        });
      }
    }
  }, {
    key: "getBranchId",
    value: function getBranchId() {
      return localStorage.getItem("branchId");
    }
  }, {
    key: "setBranchId",
    value: function setBranchId(branchId) {
      if (branchId) {
        localStorage.setItem("branchId", branchId !== null && branchId !== void 0 ? branchId : null);
        this.branchId.next({
          branchId: branchId
        });
      }
    } //Current YearId

  }, {
    key: "CurrentYearId",
    value: function CurrentYearId() {
      return localStorage.getItem("yearId");
    }
  }]);

  return AuthService;
}(); //end class

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_3__.AppStrings));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
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
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorInterceptor);

    this.authService = authService;
    this.router = router;
    this.toastr = toastr;
    this.spinner = spinner;
    this.totalRequests = 0;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorInterceptor, [{
    key: "intercept",
    value: function intercept(request, next) {
      var _this = this;

      this.totalRequests++;
      this.spinner.show();
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

          _this.toastr.error("an error occurred", "Error");

          _this.spinner.hide();

          console.log("Error", error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }

        if (err.status === 500 || err.status === 400) {
          // this.router.navigate(["", err.status], {
          //   queryParams: {
          //     "Error-Status": err.status
          //   }
          // });
          error = err.message || err.statusText;

          _this.toastr.error("an error occurred", "Error");

          _this.spinner.hide();

          console.log("Error", error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        } else {
          error = err.message || err.statusText;

          _this.toastr.error("an error occurred", "Error");

          _this.spinner.hide();

          console.log("Error", error);
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 16256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var TokenInterceptorService = /*#__PURE__*/function () {
  function TokenInterceptorService(injector) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TokenInterceptorService);

    this.injector = injector;
  } // INTERCEPTORS are not dependable classes so we need to use
  // Injector to hold the required dependencies


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TokenInterceptorService, [{
    key: "intercept",
    value: function intercept(req, next) {
      var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
      var tokenReq = req.clone({
        setHeaders: {
          Authorization: "Basic ".concat(authService.getToken()),
          "Content-Type": "application/json"
        }
      });
      return next.handle(tokenReq);
    }
  }]);

  return TokenInterceptorService;
}();

TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
  return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ConfigService = /*#__PURE__*/function () {
  function ConfigService() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConfigService);

    this.templateConf = this.setConfigValue();
    this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.templateConf);
    this.templateConf$ = this.templateConfSubject.asObservable();
  } // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfigService, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 36955);




var CustomizerService = /*#__PURE__*/function () {
  function CustomizerService(config) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomizerService);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomizerService, [{
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

/***/ 85682:
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": function() { return /* binding */ LayoutService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var LayoutService = /*#__PURE__*/function () {
  function LayoutService() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayoutService);

    this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // small screen

    this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.toggleNotiSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // Observable

    this.toggleSidebar$ = this.toggleSidebar.asObservable();
    this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
    this.toggleNotiSidebar$ = this.toggleNotiSidebar.asObservable();
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LayoutService, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





var MessagesService = /*#__PURE__*/function () {
  function MessagesService(toastr, translate) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MessagesService);

    this.toastr = toastr;
    this.translate = translate;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MessagesService, [{
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







/* Create a new injection token for injecting the window into a component. */

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */

var WindowRef = /*#__PURE__*/function () {
  function WindowRef() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WindowRef);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(WindowRef, [{
    key: "nativeWindow",
    get: function get() {
      throw new Error('Not implemented.');
    }
  }]);

  return WindowRef;
}();
/* Define class that implements the abstract class and returns the native window object. */

var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BrowserWindowRef, _WindowRef);

  var _super = (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserWindowRef);

  function BrowserWindowRef() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BrowserWindowRef);

    return _super.call(this);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(BrowserWindowRef, [{
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

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dialogs/save-exam-dialog/save-exam-dialog.component */ 53483);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-apexcharts */ 88208);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
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
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-chartist */ 19419);
/* harmony import */ var _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/my-appretiation/my-appretiation.component */ 77786);
/* harmony import */ var _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/evaluations/materails-general-evaluation/materails-general-evaluation.component */ 38937);
/* harmony import */ var _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/leader-board/leader-board.component */ 1709);
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _components_dialogs_enter_code_dialog_enter_code_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dialogs/enter-code-dialog/enter-code-dialog.component */ 90508);
/* harmony import */ var _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dialogs/confirm-dialog/confirm-dialog.component */ 89782);
/* harmony import */ var _pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/NewDate.pipe */ 3865);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/round.pipe */ 12598);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/safe.pipe */ 88246);
/* harmony import */ var _pipes_secondsToTime_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/secondsToTime.pipe */ 24838);
/* harmony import */ var _pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/slice-exam-pic.pipe */ 51033);
/* harmony import */ var _pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/Time.pipe */ 45318);
/* harmony import */ var _pipes_Timer_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pipes/Timer.pipe */ 24236);
/* harmony import */ var _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/refund-lecture/refund-lecture.component */ 24133);
/* harmony import */ var _components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/user-balance-details/user-balance-details.component */ 15054);
/* harmony import */ var _components_evaluations_subject_evaluation_subject_evaluation_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/evaluations/subject-evaluation/subject-evaluation.component */ 88641);
/* harmony import */ var _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/user-data/user-data.component */ 18515);
/* harmony import */ var _components_dialogs_update_date_update_date_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/dialogs/update-date/update-date.component */ 72555);
/* harmony import */ var _components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/dynamic-form-field/input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _components_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/dynamic-form-field/textarea/textarea.component */ 82721);
/* harmony import */ var _components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/dynamic-form-field/file-input/file-input.component */ 82158);
/* harmony import */ var _components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/dynamic-form-field/radio-button/radio-button.component */ 24724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ 3184);
















 //COMPONENTS





 //DIRECTIVES







































var SharedModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SharedModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SharedModule);
});

SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};

SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_48__.DatePipe],
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_49__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_48__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_53__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_54__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_4__.ClickOutsideModule, _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_5__.AutocompleteModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule, ng_chartist__WEBPACK_IMPORTED_MODULE_55__.ChartistModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_56__.NgApexchartsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_57__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_58__.NgxPaginationModule], _angular_common__WEBPACK_IMPORTED_MODULE_48__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__.TranslateModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleFullscreenDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarLinkDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__.SidebarDropdownDirective, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_15__.SidebarAnchorToggleDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_16__.SidebarDirective, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_18__.TopMenuLinkDirective, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__.TopMenuDropdownDirective, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__.TopMenuAnchorToggleDirective, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuDirective, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_30__.RoundPipe, _pipes_Timer_pipe__WEBPACK_IMPORTED_MODULE_35__.TimerPipe, _pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_34__.TimePipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_31__.SafePipe, _pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_29__.NewDatePipe, _pipes_secondsToTime_pipe__WEBPACK_IMPORTED_MODULE_32__.SecondsToTimePipe, _pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_33__.SliceExamPicPipe, //VimeoLinkPipe,
    _components_evaluations_general_evaluation_general_evaluation_component__WEBPACK_IMPORTED_MODULE_21__.GeneralEvaluationComponent, _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__.MyAppretiationComponent, _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__.MaterailsGeneralEvaluationComponent, _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__.LeaderBoardComponent, _components_dialogs_enter_code_dialog_enter_code_dialog_component__WEBPACK_IMPORTED_MODULE_26__.EnterCodeDialogComponent, _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__.DeleteDialogComponent, _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__.ConfirmDialogComponent, _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SaveExamDialogComponent, _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_36__.RefundLectureComponent, _components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_37__.UserBalanceDetailsComponent, _components_evaluations_subject_evaluation_subject_evaluation_component__WEBPACK_IMPORTED_MODULE_38__.SubjectEvaluationComponent, _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_39__.UserDataComponent, _components_dialogs_update_date_update_date_component__WEBPACK_IMPORTED_MODULE_40__.UpdateDateComponent, _components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_41__.InputValidationMsgComponent, _components_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_42__.TextareaComponent, _components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_43__.InputComponent, _components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_44__.DatepickerComponent, _components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_45__.FileInputComponent, _components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_46__.RadioButtonComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_49__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_48__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_53__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_54__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_4__.ClickOutsideModule, _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_5__.AutocompleteModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule, ng_chartist__WEBPACK_IMPORTED_MODULE_55__.ChartistModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_56__.NgApexchartsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_57__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_58__.NgxPaginationModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_48__.CommonModule, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleFullscreenDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_16__.SidebarDirective, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_51__.TranslateModule, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_30__.RoundPipe, _pipes_Timer_pipe__WEBPACK_IMPORTED_MODULE_35__.TimerPipe, _pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_34__.TimePipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_31__.SafePipe, _pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_29__.NewDatePipe, _pipes_secondsToTime_pipe__WEBPACK_IMPORTED_MODULE_32__.SecondsToTimePipe, _pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_33__.SliceExamPicPipe, _components_evaluations_general_evaluation_general_evaluation_component__WEBPACK_IMPORTED_MODULE_21__.GeneralEvaluationComponent, _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__.MyAppretiationComponent, _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__.MaterailsGeneralEvaluationComponent, _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__.LeaderBoardComponent, _components_dialogs_enter_code_dialog_enter_code_dialog_component__WEBPACK_IMPORTED_MODULE_26__.EnterCodeDialogComponent, _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__.DeleteDialogComponent, _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__.ConfirmDialogComponent, _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SaveExamDialogComponent, _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_36__.RefundLectureComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__.ToggleFullscreenDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarLinkDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__.SidebarDropdownDirective, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_15__.SidebarAnchorToggleDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_16__.SidebarDirective, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_18__.TopMenuLinkDirective, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__.TopMenuDropdownDirective, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__.TopMenuAnchorToggleDirective, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuDirective, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_30__.RoundPipe, _pipes_Timer_pipe__WEBPACK_IMPORTED_MODULE_35__.TimerPipe, _pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_34__.TimePipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_31__.SafePipe, _pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_29__.NewDatePipe, _pipes_secondsToTime_pipe__WEBPACK_IMPORTED_MODULE_32__.SecondsToTimePipe, _pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_33__.SliceExamPicPipe, _components_evaluations_general_evaluation_general_evaluation_component__WEBPACK_IMPORTED_MODULE_21__.GeneralEvaluationComponent, _components_my_appretiation_my_appretiation_component__WEBPACK_IMPORTED_MODULE_22__.MyAppretiationComponent, _components_evaluations_materails_general_evaluation_materails_general_evaluation_component__WEBPACK_IMPORTED_MODULE_23__.MaterailsGeneralEvaluationComponent, _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_24__.LeaderBoardComponent, _components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_27__.DeleteDialogComponent, _components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__.ConfirmDialogComponent, _components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SaveExamDialogComponent, _components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_36__.RefundLectureComponent, _components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_37__.UserBalanceDetailsComponent, _components_evaluations_subject_evaluation_subject_evaluation_component__WEBPACK_IMPORTED_MODULE_38__.SubjectEvaluationComponent, _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_39__.UserDataComponent, _components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_43__.InputComponent, _components_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_42__.TextareaComponent, _components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_41__.InputValidationMsgComponent, _components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_44__.DatepickerComponent, _components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_45__.FileInputComponent, _components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_46__.RadioButtonComponent]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);


var CustomeValidator = /*#__PURE__*/function () {
  function CustomeValidator() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomeValidator);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomeValidator, null, [{
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
      var _a;

      if (((_a = control.value) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
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
      var _a;

      if (((_a = control.value) === null || _a === void 0 ? void 0 : _a.length) > 0 && control.value.trim().indexOf(" ") >= 0) {
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
  }, {
    key: "dateBefore",
    value: function dateBefore(fromDate, toDate) {
      return function (formGroup) {
        var _a;

        var fromControl = formGroup === null || formGroup === void 0 ? void 0 : formGroup.controls[fromDate];
        var toControl = formGroup === null || formGroup === void 0 ? void 0 : formGroup.controls[toDate];

        if (toControl.errors && !((_a = toControl.errors) === null || _a === void 0 ? void 0 : _a.dateBefore)) {
          return;
        } // set error on toDate


        if (toControl.value && new Date(fromControl.value).getTime() > new Date(toControl.value).getTime()) {
          toControl.setErrors({
            dateBefore: true
          });
        } else {
          toControl.setErrors(null);
        }

        return null;
      };
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/custom-animations */ 21138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-device-detector */ 81431);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ 16256);
/* harmony import */ var _services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_admin_services_Admin_gifts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/admin/services/Admin/gifts.service */ 64105);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ 83273);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ 7883);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ 48327);



















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
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r6.toggleSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r8.CloseSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 4, "SiteName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](7, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
  }
}

var _c3 = function _c3() {
  return {
    exact: true
  };
};

function VerticalMenuComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VerticalMenuComponent_ul_3_Template_a_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r9.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](25, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 13, "Navbar.Home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](26, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 15, "Navbar.mySpace"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](27, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 17, "Navbar.CourseRequest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](28, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 19, "Navbar.EditUserProfile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](29, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 21, "Gifts.GiftsGallery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](30, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](39, 23, "Navbar.LogOut"));
  }
}

function VerticalMenuComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 3, "Navbar.Login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c3));
  }
}

function VerticalMenuComponent_ul_5_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var eduComp_r13 = ctx.$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selected", eduComp_r13.Id == ctx_r11.EduCompId)("value", eduComp_r13.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", eduComp_r13.Name, " ");
  }
}

function VerticalMenuComponent_ul_5_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var branch_r14 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selected", branch_r14.Id == ctx_r12.branchId)("value", branch_r14.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", branch_r14.Name, " ");
  }
}

function VerticalMenuComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function VerticalMenuComponent_ul_5_Template_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r15.EduCompId = $event;
    })("change", function VerticalMenuComponent_ul_5_Template_select_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r17.onChangeEduCompId(ctx_r17.EduCompId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, VerticalMenuComponent_ul_5_option_6_Template, 2, 3, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function VerticalMenuComponent_ul_5_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r18.branchId = $event;
    })("change", function VerticalMenuComponent_ul_5_Template_select_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r19.changebranchId();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, VerticalMenuComponent_ul_5_option_12_Template, 2, 3, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.EduCompId)("disabled", (ctx_r3.EducationalComps == null ? null : ctx_r3.EducationalComps.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 8, "labels.Center"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.EducationalComps);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.branchId)("disabled", !ctx_r3.EduCompId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 10, "labels.Branch"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.Branches);
  }
}

var _c4 = function _c4(a0) {
  return [a0];
};

function VerticalMenuComponent_ul_6_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c4, menuItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](menuItem_r21.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c4, menuSubItem_r26.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](menuSubItem_r26.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c4, menuSubsubItem_r31.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](menuSubsubItem_r31.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_a_1_span_5_Template, 2, 4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r31.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c4, menuSubsubItem_r31.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r31.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", menuSubsubItem_r31.badge && menuSubsubItem_r31.badge != "");
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c4, menuSubsubItem_r31.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](menuSubsubItem_r31.badge);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_ng_template_2_span_5_Template, 2, 4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r31.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c4, menuSubsubItem_r31.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r31.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", menuSubsubItem_r31.badge && menuSubsubItem_r31.badge != "");
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_a_1_Template, 6, 8, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r31 = ctx.$implicit;

    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);

    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4).$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("level", ctx_r30.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("parent", menuItem_r21.title)("hasSub", false)("path", menuSubsubItem_r31.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c3))("ngClass", ctx_r30.config.layout.menuPosition === "Side" ? menuSubsubItem_r31.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !menuSubsubItem_r31.isExternalLink)("ngIfElse", _r33);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_li_1_Template, 4, 9, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", menuSubItem_r26.submenu);
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

function VerticalMenuComponent_ul_6_li_1_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_span_6_Template, 2, 4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_ul_7_Template, 2, 1, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r26 = ctx.$implicit;
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("level", ctx_r25.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("parent", menuItem_r21.title)("hasSub", menuSubItem_r26.class.includes("has-sub") ? true : false)("path", menuSubItem_r26.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](14, _c5, menuSubItem_r26.class.includes("has-sub") ? true : false))("routerLinkActive", (menuSubItem_r26.submenu == null ? null : menuSubItem_r26.submenu.length) != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r26.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](16, _c6, menuSubItem_r26.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](18, _c4, menuSubItem_r26.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 12, menuSubItem_r26.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", menuSubItem_r26.badge && menuSubItem_r26.badge != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (menuSubItem_r26.submenu == null ? null : menuSubItem_r26.submenu.length) > 0);
  }
}

function VerticalMenuComponent_ul_6_li_1_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_ul_7_li_1_Template, 8, 20, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", menuItem_r21.submenu);
  }
}

var _c7 = function _c7() {
  return {
    exact: false
  };
};

function VerticalMenuComponent_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, VerticalMenuComponent_ul_6_li_1_span_6_Template, 2, 4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, VerticalMenuComponent_ul_6_li_1_ul_7_Template, 2, 1, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r21 = ctx.$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("level", ctx_r20.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("parent", menuItem_r21.title)("path", menuItem_r21.path)("hasSub", menuItem_r21.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](13, _c5, menuItem_r21.class.includes("has-sub") ? true : false))("routerLinkActive", (menuItem_r21.submenu == null ? null : menuItem_r21.submenu.length) != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](15, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](16, _c4, menuItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 11, menuItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", menuItem_r21.badge && menuItem_r21.badge != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (menuItem_r21.submenu == null ? null : menuItem_r21.submenu.length) > 0);
  }
}

function VerticalMenuComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, VerticalMenuComponent_ul_6_li_1_Template, 8, 18, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VerticalMenuComponent_ul_6_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r45.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.menuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 4, "Navbar.EditProfile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c3));
  }
}

var VerticalMenuComponent = /*#__PURE__*/function () {
  function VerticalMenuComponent(router, translate, layoutService, configService, cdr, deviceService, authService, GeneralServ, spinner, giftServ) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalMenuComponent);

    this.router = router;
    this.translate = translate;
    this.layoutService = layoutService;
    this.configService = configService;
    this.cdr = cdr;
    this.deviceService = deviceService;
    this.authService = authService;
    this.GeneralServ = GeneralServ;
    this.spinner = spinner;
    this.giftServ = giftServ;
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
    this.EduCompId = this.authService.getEduCompId();
    if (this.EduCompId) this.onChangeEduCompId(this.EduCompId);
    this.branchId = Number(this.authService.getBranchId());
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var _a;

      if (this.authService.isStudent()) {
        this.giftServ.getPoints();
      }

      (_a = this.giftServ) === null || _a === void 0 ? void 0 : _a.userPoints.subscribe(function (point) {
        _this.points = point.UnUsedpoints;
      });

      if (this.authService.isUser() && (!this.authService.isStudent() || !this.authService.isSupport())) {
        this.getEduCompByUser();
      }

      if (this.authService.isUser()) {
        this.getUserFunctions(this.branchId);
      } //  this.menuItems = ROUTES;

    }
  }, {
    key: "logout",
    value: function logout() {
      this.authService.logout();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authService.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;

        if (_this2.authService.isUser() && (!_this2.authService.isStudent() || !_this2.authService.isSupport())) {
          _this2.getUserFunctions(e.branchId);
        }
      });
      this.authService.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        if (_this2.authService.isUser() && (!_this2.authService.isStudent() || !_this2.authService.isSupport())) {
          _this2.getUserFunctions(e.branchId); //  this.onChangeEduCompId(e.EduCompId);

        }
      });
      this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this2.config = templateConf;
        }

        _this2.loadLayout();

        _this2.cdr.markForCheck();
      });
      this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(function (collapse) {
        if (_this2.config.layout.menuPosition === "Side") {
          _this2.collapseSidebar = collapse;
        }
      });
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize(event) {
      var _this3 = this;

      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(function () {
        _this3.innerWidth = event.target.innerWidth;

        _this3.loadLayout();
      }.bind(this), 500);
    }
  }, {
    key: "getUserFunctions",
    value: function getUserFunctions(branchId) {
      var _this4 = this;

      this.spinner.show();
      var userFun = [];
      this.authService.getUserFunctions(branchId).subscribe(function (res) {
        res.GrouplessFunctions.forEach(function (fun) {
          if (!userFun.includes(fun.functionId)) userFun.push(fun.functionId);
        });
        res.Groups.forEach(function (fun) {
          fun.submenu.forEach(function (sunFun) {
            if (!userFun.includes(fun.functionId)) userFun.push(sunFun.functionId);
          });
        });

        _this4.authService.setUserFunctions(userFun); // console.log("functions: ", res);


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
        _this4.menuItems = [];
        _this4.menuItems = res.Groups.concat(res.GrouplessFunctions); //  console.log("menuItems: ", this.menuItems);

        _this4.spinner.hide();
      });
    }
  }, {
    key: "getEduCompByUser",
    value: function getEduCompByUser() {
      var _this5 = this;

      this.Branches = [];
      this.branchId = null;
      this.GeneralServ.getEduCompByUser().subscribe(function (res) {
        _this5.EducationalComps = res;
      });
    }
  }, {
    key: "onChangeEduCompId",
    value: function onChangeEduCompId(EduCompId) {
      var _this6 = this;

      this.authService.setEduCompId(EduCompId);

      if (EduCompId !== "null" && EduCompId != "undefined") {
        this.GeneralServ.getBranchesByEduComp(EduCompId).subscribe(function (res) {
          var _a, _b;

          _this6.Branches = res;

          _this6.authService.setBranchId((_a = res[0]) === null || _a === void 0 ? void 0 : _a.Id);

          _this6.branchId = (_b = res[0]) === null || _b === void 0 ? void 0 : _b.Id;
        });
      }
    }
  }, {
    key: "changebranchId",
    value: function changebranchId() {
      this.authService.setBranchId(this.branchId);
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
      var _this7 = this;

      var conf = this.config;
      conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
      this.configService.applyTemplateConfigChange({
        layout: conf.layout
      });
      setTimeout(function () {
        _this7.fireRefreshEventOnWindow();
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
  return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_admin_services_Admin_gifts_service__WEBPACK_IMPORTED_MODULE_7__.GiftsService));
};

VerticalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: VerticalMenuComponent,
  selectors: [["app-sidebar"]],
  viewQuery: function VerticalMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
    }
  },
  hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) {
        return ctx.onWindowResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
    }
  },
  decls: 7,
  vars: 6,
  consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", "class", "navigation", 4, "ngIf"], ["appSidebarDropdown", "", 4, "ngIf"], ["class", "navigation", "appSidebarDropdown", "", 4, "ngIf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "logo-img"], ["alt", "egyTraining logo", 3, "src"], [1, "text", "align-middle"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarDropdown", "", 1, "navigation"], ["appSidebarlink", "", "parent", "Home", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/home"], [1, "ft-home"], ["appSidebarlink", "", "parent", "My Space", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/student/mySpace"], [1, "ft-user"], ["routerLink", "/student/course-employee-request"], [1, "fa", "fa-user-plus"], ["appSidebarlink", "", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/profile"], [1, "fa", "fa-user"], ["appSidebarlink", "", "parent", "Recharge", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/student/gifts-gallery"], [1, "fa", "fa-gift"], ["routerLink", "/auth/register", 3, "click"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/auth/login"], ["appSidebarDropdown", ""], ["appSidebarlink", "", 1, "dropdown", "nav-item"], [1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 1, "dropdown", "nav-item", 3, "routerLinkActiveOptions", "click"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", ""], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["appSidebarAnchorToggle", "", 3, "routerLink", "queryParams"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["appSidebarAnchorToggle", "", 3, "routerLink"], ["target", "_blank", 3, "routerLink"]],
  template: function VerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 13, 10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, VerticalMenuComponent_ul_3_Template, 40, 31, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, VerticalMenuComponent_ul_4_Template, 8, 7, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, VerticalMenuComponent_ul_5_Template, 13, 12, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, VerticalMenuComponent_ul_6_Template, 9, 8, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.authService.isStudent());
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.authService.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx.authService.isStudent() || ctx.authService.isSupport()) && ctx.authService.isUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx.authService.isStudent() || ctx.authService.isSupport()) && ctx.menuItems && ctx.authService.isUser());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__.SidebarDropdownDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_9__.SidebarLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_10__.SidebarAnchorToggleDirective],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  encapsulation: 2,
  data: {
    animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_2__.customAnimations
  }
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var StudentService = /*#__PURE__*/function () {
  function StudentService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentService);

    this.http = http;
  } //#region  Student Profile
  //Return Student Subjects


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentService, [{
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
    value: function getPayments(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnUserPayments/" + id);
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
  apiURL: "https://trainingmisapi.cloudiax.com/api/" //Test;

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