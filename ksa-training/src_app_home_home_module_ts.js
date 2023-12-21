"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": function() { return /* binding */ HomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-index/home-index.component */ 43986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_home_courses_search_courses_search_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-courses/search-courses/search-courses.component */ 17418);
/* harmony import */ var _pages_home_courses_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-courses/course-info/course-info.component */ 56146);
/* harmony import */ var _pages_home_courses_popular_courses_most_popular_course_index_most_popular_course_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-courses/popular-courses/most-popular-course-index/most-popular-course-index.component */ 79129);
/* harmony import */ var _pages_home_courses_recent_courses_most_recent_course_index_most_recent_course_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-courses/recent-courses/most-recent-course-index/most-recent-course-index.component */ 32653);
/* harmony import */ var _pages_home_courses_diploma_diploma_index_diploma_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-courses/diploma/diploma-index/diploma-index.component */ 89313);
/* harmony import */ var _pages_home_courses_diploma_diploma_courses_diploma_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home-courses/diploma/diploma-courses/diploma-courses.component */ 49990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












var routes = [{
  path: "",
  component: _pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__.HomeIndexComponent,
  data: {
    breadcrumb: "Navbar.Home",
    view: ""
  }
}, {
  path: "search-courses/:categoryId",
  component: _pages_home_courses_search_courses_search_courses_component__WEBPACK_IMPORTED_MODULE_3__.SearchCoursesComponent,
  data: {
    breadcrumb: "course.SearchOnCourses",
    view: "search-courses"
  }
}, {
  path: "course-info/:courseId",
  component: _pages_home_courses_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_4__.CourseInfoComponent,
  data: {
    breadcrumb: "course.courseInfo",
    view: "course-info"
  }
}, {
  path: "most-popular-course-index",
  component: _pages_home_courses_popular_courses_most_popular_course_index_most_popular_course_index_component__WEBPACK_IMPORTED_MODULE_5__.MostPopularCourseIndexComponent,
  data: {
    breadcrumb: "course.PopularCourses",
    view: "most-popular-course-index"
  }
}, {
  path: "most-recent-course-index",
  component: _pages_home_courses_recent_courses_most_recent_course_index_most_recent_course_index_component__WEBPACK_IMPORTED_MODULE_6__.MostRecentCourseIndexComponent,
  data: {
    breadcrumb: "course.RecentCourses",
    view: "most-recent-course-index"
  }
}, {
  path: "diploma-index",
  component: _pages_home_courses_diploma_diploma_index_diploma_index_component__WEBPACK_IMPORTED_MODULE_7__.DiplomaIndexComponent,
  data: {
    breadcrumb: "course.Diplomas",
    view: "diploma-index"
  }
}, {
  path: "diploma-courses/:diplomaId",
  component: _pages_home_courses_diploma_diploma_courses_diploma_courses_component__WEBPACK_IMPORTED_MODULE_8__.DiplomaCoursesComponent,
  data: {
    breadcrumb: "course.DiplomaCourse",
    view: "diploma-courses"
  }
}];
var HomeRoutingModule = /*#__PURE__*/(0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeRoutingModule() {
  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeRoutingModule);
});

HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
};

HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: HomeRoutingModule
});
HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-index/home-index.component */ 43986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _pages_home_courses_popular_courses_most_popular_courses_most_popular_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-courses/popular-courses/most-popular-courses/most-popular-courses.component */ 91553);
/* harmony import */ var _pages_home_courses_course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-courses/course-card-details/course-card-details.component */ 81950);
/* harmony import */ var _pages_home_courses_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-courses/category-card/category-card.component */ 38162);
/* harmony import */ var _pages_home_courses_course_categories_course_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-courses/course-categories/course-categories.component */ 30326);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _pages_home_courses_search_courses_search_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home-courses/search-courses/search-courses.component */ 17418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _pages_home_courses_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home-courses/course-info/course-info.component */ 56146);
/* harmony import */ var _pages_home_courses_diploma_diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home-courses/diploma/diploma-card/diploma-card.component */ 18091);
/* harmony import */ var _pages_home_courses_recent_courses_most_recent_courses_most_recent_courses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home-courses/recent-courses/most-recent-courses/most-recent-courses.component */ 23584);
/* harmony import */ var _pages_home_courses_recent_courses_most_recent_course_index_most_recent_course_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home-courses/recent-courses/most-recent-course-index/most-recent-course-index.component */ 32653);
/* harmony import */ var _pages_home_courses_popular_courses_most_popular_course_index_most_popular_course_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/home-courses/popular-courses/most-popular-course-index/most-popular-course-index.component */ 79129);
/* harmony import */ var _pages_home_courses_diploma_diploma_home_diploma_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home-courses/diploma/diploma-home/diploma-home.component */ 62395);
/* harmony import */ var _pages_home_courses_diploma_diploma_index_diploma_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/home-courses/diploma/diploma-index/diploma-index.component */ 89313);
/* harmony import */ var _pages_home_courses_diploma_diploma_courses_diploma_courses_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home-courses/diploma/diploma-courses/diploma-courses.component */ 49990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);

























var HomeModule = /*#__PURE__*/(0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeModule() {
  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeModule);
});

HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};

HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_10__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_24__.NgxSpinnerModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__.HomeIndexComponent, _pages_home_courses_course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_5__.CourseCardDetailsComponent, _pages_home_courses_recent_courses_most_recent_courses_most_recent_courses_component__WEBPACK_IMPORTED_MODULE_13__.MostRecentCoursesComponent, _pages_home_courses_popular_courses_most_popular_courses_most_popular_courses_component__WEBPACK_IMPORTED_MODULE_4__.MostPopularCoursesComponent, _pages_home_courses_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__.CategoryCardComponent, _pages_home_courses_course_categories_course_categories_component__WEBPACK_IMPORTED_MODULE_7__.CourseCategoriesComponent, _pages_home_courses_search_courses_search_courses_component__WEBPACK_IMPORTED_MODULE_9__.SearchCoursesComponent, _pages_home_courses_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_11__.CourseInfoComponent, _pages_home_courses_diploma_diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_12__.DiplomaCardComponent, _pages_home_courses_popular_courses_most_popular_courses_most_popular_courses_component__WEBPACK_IMPORTED_MODULE_4__.MostPopularCoursesComponent, _pages_home_courses_recent_courses_most_recent_course_index_most_recent_course_index_component__WEBPACK_IMPORTED_MODULE_14__.MostRecentCourseIndexComponent, _pages_home_courses_popular_courses_most_popular_course_index_most_popular_course_index_component__WEBPACK_IMPORTED_MODULE_15__.MostPopularCourseIndexComponent, _pages_home_courses_diploma_diploma_home_diploma_home_component__WEBPACK_IMPORTED_MODULE_16__.DiplomaHomeComponent, _pages_home_courses_diploma_diploma_index_diploma_index_component__WEBPACK_IMPORTED_MODULE_17__.DiplomaIndexComponent, _pages_home_courses_diploma_diploma_courses_diploma_courses_component__WEBPACK_IMPORTED_MODULE_18__.DiplomaCoursesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_10__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_24__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 38162:
/*!**********************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/category-card/category-card.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryCardComponent": function() { return /* binding */ CategoryCardComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);









function CategoryCardComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function CategoryCardComponent_a_1_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.fileService.onError($event, ctx_r2.appAssets.defaultCategoryImage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var category_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "search-courses/", category_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.fileService.previewPicture(category_r1.attach_path), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.isArabic ? category_r1.ar_name : category_r1.en_name, " ");
  }
}

var CategoryCardComponent = /*#__PURE__*/function () {
  function CategoryCardComponent(fileService, appAssets, languageService) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CategoryCardComponent);

    this.fileService = fileService;
    this.appAssets = appAssets;
    this.languageService = languageService;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CategoryCardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return CategoryCardComponent;
}();

CategoryCardComponent.ɵfac = function CategoryCardComponent_Factory(t) {
  return new (t || CategoryCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService));
};

CategoryCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CategoryCardComponent,
  selectors: [["app-category-card"]],
  inputs: {
    categories: "categories"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "row"], ["class", "col-sm-6 col-md-4 col-xl-3 col-12", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-xl-3", "col-12", 3, "routerLink"], [1, "feat-cart"], [1, "coursecartimg", 3, "src", "error"], [1, "feat-head", "font-bold"]],
  template: function CategoryCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CategoryCardComponent_a_1_Template, 5, 3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 81950:
/*!**********************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/course-card-details/course-card-details.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseCardDetailsComponent": function() { return /* binding */ CourseCardDetailsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_data_owl_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/data/owl-options */ 83186);
/* harmony import */ var app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/rate-list */ 24174);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/student/services/shopping-cart.service */ 45162);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/pipes/round.pipe */ 12598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





















function CourseCardDetailsComponent_p_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r4.languageService.isArabic ? ctx_r4.course == null ? null : ctx_r4.course.category[0] == null ? null : ctx_r4.course.category[0].ar_name : ctx_r4.course == null ? null : ctx_r4.course.category[0] == null ? null : ctx_r4.course.category[0].en_name, " ");
  }
}

function CourseCardDetailsComponent_p_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matTooltip", ctx_r5.getCategoresTooltip(ctx_r5.course.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" + ", (ctx_r5.course == null ? null : ctx_r5.course.category == null ? null : ctx_r5.course.category.length) - 1, " ");
  }
}

function CourseCardDetailsComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CourseCardDetailsComponent_p_5_span_1_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CourseCardDetailsComponent_p_5_span_2_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.course == null ? null : ctx_r0.course.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r0.course == null ? null : ctx_r0.course.category == null ? null : ctx_r0.course.category.length) > 1);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "fa-star warning": a0,
    "fa-star-o grey": a1
  };
};

function CourseCardDetailsComponent_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "round");
  }

  if (rf & 2) {
    var star_r6 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, star_r6.rate <= ctx_r1.course.rate), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, star_r6.rate > ctx_r1.course.rate)));
  }
}

var _c1 = function _c1(a1) {
  return ["/home/course-info", a1];
};

function CourseCardDetailsComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c1, ctx_r2.course.subject_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "course.info"), " ");
  }
}

function CourseCardDetailsComponent_ng_container_23_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CourseCardDetailsComponent_ng_container_23_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r11.addToCart(ctx_r11.course.subject_id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "course.AddToCart"), " ");
  }
}

function CourseCardDetailsComponent_ng_container_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "course.Incart"), " ");
  }
}

var _c2 = function _c2(a1) {
  return ["/student/course", a1];
};

function CourseCardDetailsComponent_ng_container_23_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c2, ctx_r10.course.subject_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "course.GoToCourse"), " ");
  }
}

function CourseCardDetailsComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CourseCardDetailsComponent_ng_container_23_button_1_Template, 3, 3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CourseCardDetailsComponent_ng_container_23_span_2_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, CourseCardDetailsComponent_ng_container_23_a_3_Template, 3, 6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.course.isCard && !ctx_r3.course.isPaid && !ctx_r3.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.course.isCard && !ctx_r3.course.isPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.course.isPaid && ctx_r3.isStudent);
  }
}

var CourseCardDetailsComponent = /*#__PURE__*/function () {
  function CourseCardDetailsComponent(router, languageService, fileService, appAssets, spinner, shoppingCartService, authService, msg, dialog, appStrings) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseCardDetailsComponent);

    this.router = router;
    this.languageService = languageService;
    this.fileService = fileService;
    this.appAssets = appAssets;
    this.spinner = spinner;
    this.shoppingCartService = shoppingCartService;
    this.authService = authService;
    this.msg = msg;
    this.dialog = dialog;
    this.appStrings = appStrings;
    this.addedToCard = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.removeFromCard = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.options = app_shared_data_owl_options__WEBPACK_IMPORTED_MODULE_2__.customOptions;
    this.rates = [];
    this.isStudent = false;
    this.isAdmin = false;
    this.rates = app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_3__.Rates;
    this.isStudent = this.authService.isStudent();
    this.isAdmin = this.authService.isAdmin();
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseCardDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "addToCart",
    value: function addToCart(courseId) {
      var _this = this;

      if (!this.authService.isUserLoggedIn()) {
        this.router.navigateByUrl("auth/login");
        return;
      }

      var cartData = {
        id: 0,
        subject_id: courseId,
        diploma_id: null
      };
      this.spinner.show();
      this.shoppingCartService.addEditUserCartCourses(cartData).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this.msg.success("course.AddToCartSuccess"); // change add to cart into in cart


          _this.addedToCard.emit(courseId);
        } else _this.msg.warning(res.returnString);

        _this.spinner.hide();
      });
    } // rateCourse(subject_id: number, rate: number) {
    //   if (this.authService.isStudent()) {
    //     let body: RatetCourseRequest = {
    //       subject_id: subject_id,
    //       rate: rate,
    //     };
    //     this.shoppingCartService
    //       .rateCourse(body)
    //       .subscribe((res: RatetCourseResponse) => {
    //         if (res.returnValue == 1) {
    //           if (res.subject_rate.totalRate)
    //             this.course.rate = res.subject_rate?.totalRate;
    //           else this.course.rate = 0;
    //         } else this.msg.warning(res.returnString);
    //       });
    //   }
    // }

  }, {
    key: "getCategoresTooltip",
    value: function getCategoresTooltip(categoryList) {
      var _this2 = this;

      var Category = [];
      categoryList.forEach(function (ele, index) {
        if (index != 0) Category.push(_this2.languageService.isArabic ? ele.ar_name : ele.en_name);
      });
      return Category.join("\n");
    }
  }]);

  return CourseCardDetailsComponent;
}();

CourseCardDetailsComponent.ɵfac = function CourseCardDetailsComponent_Factory(t) {
  return new (t || CourseCardDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_5__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_6__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__.ShoppingCartService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_9__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_10__.AppStrings));
};

CourseCardDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CourseCardDetailsComponent,
  selectors: [["app-course-card-details"]],
  inputs: {
    course: "course"
  },
  outputs: {
    addedToCard: "addedToCard",
    removeFromCard: "removeFromCard"
  },
  decls: 24,
  vars: 20,
  consts: [[1, "course--cart-re", "mbottom-20"], [1, "coursecartimg", 3, "src", "error"], [1, "cart--divider"], [1, "maincoursetitle", "font-regular"], ["class", "coursecarttitle font-regular", 4, "ngIf"], [1, "rating", "mbottom-5"], ["class", "fa mright-3 font-size-15 rate-star", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "font-size-10"], [1, "font-size-10", "mright-3", "mleft-3", "d-block"], [1, "coursecartfooter"], ["class", "rating mbottom-5", 4, "ngIf"], [1, "price", "font-regular", "float-left"], [4, "ngIf"], [1, "coursecarttitle", "font-regular"], ["width", "22", "height", "22", "class", "round info font-size-10 padding-3 mleft-3 mright-3 b-info pointer", 3, "matTooltip", 4, "ngIf"], ["width", "22", "height", "22", 1, "round", "info", "font-size-10", "padding-3", "mleft-3", "mright-3", "b-info", "pointer", 3, "matTooltip"], [1, "fa", "mright-3", "font-size-15", "rate-star", 3, "ngClass"], [1, "font-size-10", "mright-3", "mleft-3", "d-block", "infolink", 3, "routerLink"], ["class", "btn-outline-orange border-2 round float-right", 3, "click", 4, "ngIf"], ["class", "success font-regular float-right in-cart mbottom-5 mleft-5", 4, "ngIf"], ["class", "btn-orange round float-right mbottom-5", 3, "routerLink", 4, "ngIf"], [1, "btn-outline-orange", "border-2", "round", "float-right", 3, "click"], [1, "success", "font-regular", "float-right", "in-cart", "mbottom-5", "mleft-5"], [1, "btn-orange", "round", "float-right", "mbottom-5", 3, "routerLink"]],
  template: function CourseCardDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("error", function CourseCardDetailsComponent_Template_img_error_1_listener($event) {
        return ctx.fileService.onError($event, ctx.appAssets.defaultCourseImage);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CourseCardDetailsComponent_p_5_Template, 3, 2, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, CourseCardDetailsComponent_i_7_Template, 3, 8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, CourseCardDetailsComponent_p_16_Template, 4, 6, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, CourseCardDetailsComponent_ng_container_23_Template, 4, 3, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx.fileService.previewPicture(ctx.course.attach_path), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.languageService.isArabic ? ctx.course.subject_ar_name : ctx.course.subject_en_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.course.isFollow);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.rates);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ( ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 12, ctx.course.rate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 14, "labels.outOf"), " 5) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx.course.userRatesCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 16, "course.peopleRate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.course.isPaid && !ctx.isAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 18, "CurrencySymbol"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((tmp_8_0 = ctx.course.cost) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.course.isFollow);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref],
  pipes: [_shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__.RoundPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: [".bg-card[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  display: block;\n  border-radius: 15px !important;\n  padding: 15px;\n}\n\nmat-card-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n  .mat-tooltip {\n  white-space: pre-line;\n  font-size: 12px;\n}\n\n.in-cart[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1jYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiY291cnNlLWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50ID4gcCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmluLWNhcnQge1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 30326:
/*!******************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/course-categories/course-categories.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseCategoriesComponent": function() { return /* binding */ CourseCategoriesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category-card/category-card.component */ 38162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);







function CourseCategoriesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CourseCategoriesComponent_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r1.moreCategories();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

var CourseCategoriesComponent = /*#__PURE__*/function () {
  function CourseCategoriesComponent(homeCoursesService) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseCategoriesComponent);

    this.homeCoursesService = homeCoursesService;
    this.curPage = 1;
    this.countItems = 0;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseCategoriesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllCategories();
    }
  }, {
    key: "getAllCategories",
    value: function getAllCategories() {
      var _this = this;

      this.homeCoursesService.getAllCategories(this.curPage).subscribe(function (res) {
        _this.CourseCategories = res.courseCategoryList;
        _this.countItems = res.countItems;
      });
    }
  }, {
    key: "moreCategories",
    value: function moreCategories() {
      var _this2 = this;

      this.curPage++;
      this.homeCoursesService.getAllCategories(this.curPage).subscribe(function (res) {
        for (var i = 0; i < res.courseCategoryList.length; i++) {
          var category = {};
          category.id = res.courseCategoryList[i].id;
          category.ar_name = res.courseCategoryList[i].ar_name;
          category.en_name = res.courseCategoryList[i].en_name;
          category.attach_path = res.courseCategoryList[i].attach_path;

          _this2.CourseCategories.push(category);
        }
      });
    }
  }]);

  return CourseCategoriesComponent;
}();

CourseCategoriesComponent.ɵfac = function CourseCategoriesComponent_Factory(t) {
  return new (t || CourseCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_2__.HomeCoursesService));
};

CourseCategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CourseCategoriesComponent,
  selectors: [["app-course-categories"]],
  decls: 3,
  vars: 2,
  consts: [[3, "categories"], [1, "row"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [1, "more--cats", 3, "click"], [1, "ft-chevron-down"]],
  template: function CourseCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-category-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CourseCategoriesComponent_div_2_Template, 3, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("categories", ctx.CourseCategories);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.countItems > 0 && ctx.countItems > ctx.CourseCategories.length);
    }
  },
  directives: [_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_3__.CategoryCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 56146:
/*!******************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/course-info/course-info.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseInfoComponent": function() { return /* binding */ CourseInfoComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/data/rate-list */ 24174);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var app_student_pages_check_user_buy_courses_dialog_check_user_buy_courses_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/student/pages/check-user-buy-courses-dialog/check-user-buy-courses-dialog.component */ 94951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/student/services/shopping-cart.service */ 45162);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/pipes/round.pipe */ 12598);

























function CourseInfoComponent_section_12_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function CourseInfoComponent_section_12_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CourseInfoComponent_section_12_ng_container_9_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var category_r16 = ctx.$implicit;
    var last_r17 = ctx.last;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.languageService.isArabic ? (tmp_0_0 = category_r16.ar_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : category_r16.en_name : (tmp_0_0 = category_r16.en_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : category_r16.ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !last_r17);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "fa-star warning": a0,
    "fa-star-o grey": a1
  };
};

function CourseInfoComponent_section_12_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "round");
  }

  if (rf & 2) {
    var star_r19 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, star_r19.rate <= ctx_r2.courseData.rate), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, star_r19.rate > ctx_r2.courseData.rate)));
  }
}

function CourseInfoComponent_section_12_button_20_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CourseInfoComponent_section_12_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r21.addToCart(ctx_r21.courseData.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "course.AddToCart"), " ");
  }
}

function CourseInfoComponent_section_12_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "course.Incart"), " ");
  }
}

function CourseInfoComponent_section_12_button_22_Template(rf, ctx) {
  if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CourseInfoComponent_section_12_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r23.openCheckUserBuyCourseDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "General.BuyNow"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 5, "CurrencySymbol"), " ", ctx_r5.courseData.cost, " ");
  }
}

function CourseInfoComponent_section_12_li_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 1, "course.Certification"));
  }
}

function CourseInfoComponent_section_12_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r7.courseData.subjectDescription, " ");
  }
}

function CourseInfoComponent_section_12_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "course.noDescription"), " ");
  }
}

function CourseInfoComponent_section_12_div_63_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var whatYouLearnItem_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", whatYouLearnItem_r26, " ");
  }
}

function CourseInfoComponent_section_12_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CourseInfoComponent_section_12_div_63_li_2_Template, 2, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r10.courseData.whatYouLearn);
  }
}

function CourseInfoComponent_section_12_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "course.noObjectives"), " ");
  }
}

function CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_li_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "Material.Lecture"), " ");
  }
}

function CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_li_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "labels.Exam"), " ");
  }
}

function CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_li_1_small_2_Template, 3, 3, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_li_1_small_3_Template, 3, 3, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var data_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r33.languageService.isArabic ? (tmp_0_0 = data_r31.ar_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : data_r31.en_name : (tmp_0_0 = data_r31.en_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : data_r31.ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", data_r31.type == ctx_r33.appStrings.stageLecture);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", data_r31.type == ctx_r33.appStrings.stageExam);
  }
}

function CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_li_1_Template, 4, 3, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var data_r31 = ctx.$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", data_r31.type != ctx_r30.appStrings.stageAttach);
  }
}

function CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-expansion-panel", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ul", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_ng_container_8_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var stage_r28 = ctx.$implicit;
    var unitIndex_r29 = ctx.index;
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("expanded", unitIndex_r29 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r27.languageService.isArabic ? (tmp_1_0 = stage_r28.unit_ar_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : stage_r28.unit_en_name : (tmp_1_0 = stage_r28.unit_en_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : stage_r28.unit_ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", stage_r28 == null ? null : stage_r28.unitContent);
  }
}

function CourseInfoComponent_section_12_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CourseInfoComponent_section_12_div_72_mat_expansion_panel_2_Template, 9, 3, "mat-expansion-panel", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r13.courseContent);
  }
}

function CourseInfoComponent_section_12_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "course.noContent"), " ");
  }
}

function CourseInfoComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("error", function CourseInfoComponent_section_12_Template_img_error_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r37.fileService.onError($event, ctx_r37.appAssets.defaultCourseImage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, CourseInfoComponent_section_12_ng_container_9_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, CourseInfoComponent_section_12_i_11_Template, 3, 8, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](14, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, CourseInfoComponent_section_12_button_20_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, CourseInfoComponent_section_12_span_21_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, CourseInfoComponent_section_12_button_22_Template, 4, 7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, " \xA0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](33, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, " \xA0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, " \xA0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](48, CourseInfoComponent_section_12_li_48_Template, 5, 3, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, CourseInfoComponent_section_12_div_54_Template, 3, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, CourseInfoComponent_section_12_ng_template_55_Template, 3, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, CourseInfoComponent_section_12_div_63_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](64, CourseInfoComponent_section_12_ng_template_64_Template, 3, 3, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](66, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](72, CourseInfoComponent_section_12_div_72_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](73, CourseInfoComponent_section_12_ng_template_73_Template, 3, 3, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](56);

    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](65);

    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](74);

    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r0.fileService.previewPicture(ctx_r0.courseData.attach_path), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.isArabic ? ctx_r0.courseData.subCourse_ar_name : ctx_r0.courseData.subCourse_en_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.courseData.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.rates);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ( ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](14, 27, ctx_r0.courseData.rate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 29, "labels.outOf"), " 5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r0.courseData.userRatesCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 31, "course.peopleRate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.courseData.isCard && !ctx_r0.courseData.isPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.courseData.isCard && !ctx_r0.courseData.isPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.courseData.isPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.courseData.course_hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](31, 33, "course.CourseTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.courseData.examCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](39, 35, "course.quizzes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.courseData.filesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](47, 37, "course.DownloadRes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.courseData.CourseCertificate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](53, 39, "course.courseDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.courseData.subjectDescription)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](62, 41, "course.WYL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.courseData.whatYouLearn.length > 0)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](71, 43, "course.Curriculum"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.courseContent.length > 0)("ngIfElse", _r14);
  }
}

var CourseInfoComponent = /*#__PURE__*/function () {
  function CourseInfoComponent(fileService, appAssets, languageService, route, homeCoursesService, spinner, msg, appStrings, router, fb, authService, shoppingCartService, dialog) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseInfoComponent);

    this.fileService = fileService;
    this.appAssets = appAssets;
    this.languageService = languageService;
    this.route = route;
    this.homeCoursesService = homeCoursesService;
    this.spinner = spinner;
    this.msg = msg;
    this.appStrings = appStrings;
    this.router = router;
    this.fb = fb;
    this.authService = authService;
    this.shoppingCartService = shoppingCartService;
    this.dialog = dialog;
    this.rates = [];
    this.rates = app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_2__.Rates;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseInfoComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.myForm = this.fb.group({
        courseNameSearch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]]
      });
      this.route.paramMap.subscribe(function (params) {
        _this.courseId = Number(params.get("courseId"));

        _this.getCourseData();
      }); // console.log(this.courseId);
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getCourseData",
    value: function getCourseData() {
      var _this2 = this;

      this.spinner.show();
      this.homeCoursesService.getCourseDataById(this.courseId, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.getUserId()).subscribe(function (res) {
        if (res) {
          // course data
          _this2.courseData = res.sub_course;
          _this2.courseData.course_Minutes = _this2.courseData.courseMinutes % 60;
          _this2.courseData.course_hours = Math.floor(_this2.courseData.courseMinutes / 60); // course content

          _this2.courseContent = res.Content;

          _this2.courseContent.map(function (unit) {
            unit.unitContent = unit.exams.concat(unit.materials);
            unit.unitContent.sort(function (a, b) {
              return a.order - b.order;
            });
          });

          _this2.courseContent = _this2.courseContent.reverse(); // console.log(this.courseContent);
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "openCheckUserBuyCourseDialog",
    value: function openCheckUserBuyCourseDialog() {
      var _this3 = this;

      if (!this.authService.isUserLoggedIn()) {
        this.router.navigateByUrl("auth/login");
        return;
      }

      this.dialog.open(app_student_pages_check_user_buy_courses_dialog_check_user_buy_courses_dialog_component__WEBPACK_IMPORTED_MODULE_5__.CheckUserBuyCoursesDialogComponent, {
        data: {
          msg: ""
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this3.buyCourse();
      });
    }
  }, {
    key: "buyCourse",
    value: function buyCourse() {
      var _this4 = this;

      var data;
      this.msg.success("course.buySuccesed");
      this.shoppingCartService.buyCourse(data).subscribe(function (res) {
        if (res) {
          _this4.msg.success("course.buySuccesed");
        }
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart(courseId) {
      var _this5 = this;

      if (!this.authService.isUserLoggedIn()) {
        this.router.navigateByUrl("auth/login");
        return;
      }

      var cartData = {
        id: 0,
        subject_id: courseId,
        diploma_id: null
      };
      this.spinner.show();
      this.shoppingCartService.addEditUserCartCourses(cartData).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this5.msg.success("course.AddToCartSuccess"); // change add to cart into in cart


          _this5.courseData.isCard = true;
        } else _this5.msg.warning(res.returnString);

        _this5.spinner.hide();
      });
    }
  }, {
    key: "searchCourses",
    value: function searchCourses() {
      if (this.myForm.valid) {
        this.router.navigate(["home/search-courses/0"], {
          queryParams: {
            courseName: this.formCtrls.courseNameSearch.value
          }
        });
      } else this.msg.warning("course.enterCourseNameField");
    }
  }]);

  return CourseInfoComponent;
}();

CourseInfoComponent.ɵfac = function CourseInfoComponent_Factory(t) {
  return new (t || CourseInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_7__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_9__.HomeCoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_10__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_11__.AppStrings), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_13__.ShoppingCartService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog));
};

CourseInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: CourseInfoComponent,
  selectors: [["app-course-info"]],
  decls: 13,
  vars: 5,
  consts: [[1, "courseinfo--page"], [1, "searchbar", "intoppage"], [1, "row"], [1, "col-6"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "courseNameSearch", 1, "form-control", "searchinput", "font-regular", 3, "placeholder", "keyup.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "searchbtn", 3, "click"], ["class", "info--data", 4, "ngIf"], [1, "info--data"], [1, "col-md-4"], [1, "main-data"], [1, "courseinfopic"], [3, "src", "error"], [1, "courseinfoname", "font-bold", "font-size-25"], [1, "maincourseinfoname", "font-bold"], [4, "ngFor", "ngForOf"], [1, "courseinforate"], ["class", "fa mright-3 font-size-30 rate-star", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "font-size-10"], [1, "font-size-10", "mright-3", "mleft-3", "d-block"], [1, "row", "courseinfobtns"], ["class", "btn-outline-orange border-2 round float-right mbottom-5", 3, "click", 4, "ngIf"], ["class", "success font-regular float-right mbottom-5 in-cart", 4, "ngIf"], [1, "features-ul"], [1, "icon-social-youtube"], [1, "numbers"], [1, "icon-bulb"], [1, "icon-cloud-download"], [4, "ngIf"], [1, "description"], [1, "heading--sect1"], ["class", "descriptioncontent", 4, "ngIf", "ngIfElse"], ["noDescription", ""], [1, "col-md-8"], [1, "objectives"], [4, "ngIf", "ngIfElse"], ["noObjectives", ""], [1, "clear--floating"], [1, "coursecontent"], ["class", "contentstages", 4, "ngIf", "ngIfElse"], ["noContent", ""], [1, "fa", "mright-3", "font-size-30", "rate-star", 3, "ngClass"], [1, "btn-outline-orange", "border-2", "round", "float-right", "mbottom-5", 3, "click"], [1, "success", "font-regular", "float-right", "mbottom-5", "in-cart"], [1, "icon-badge"], [1, "descriptioncontent"], [1, "alert", "bg-light-warning", "d-inline-block"], [1, "wtyl"], [1, "contentstages"], [3, "expanded", 4, "ngFor", "ngForOf"], [3, "expanded"], [1, "curic-panel-title"], [1, "lesson-title", "axi-bold"], [1, "content-lecture"], [1, "lecture-parts", "axi-regular"], ["class", "cursor-default", 4, "ngIf"], [1, "cursor-default"]],
  template: function CourseInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup.enter", function CourseInfoComponent_Template_input_keyup_enter_7_listener() {
        return ctx.searchCourses();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CourseInfoComponent_Template_button_click_10_listener() {
        return ctx.searchCourses();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, " \xA0\xA0\xA0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, CourseInfoComponent_section_12_Template, 75, 45, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 3, "course.SearchOnCourses"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.courseData);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanelTitle],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_14__.RoundPipe],
  styles: [".cursor-default[_ngcontent-%COMP%] {\n  cursor: default !important;\n}\n\n.in-cart[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  width: calc(100% - 20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUFDRiIsImZpbGUiOiJjb3Vyc2UtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJzb3ItZGVmYXVsdCB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbi1jYXJ0IHtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 18091:
/*!****************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/diploma/diploma-card/diploma-card.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiplomaCardComponent": function() { return /* binding */ DiplomaCardComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/data/rate-list */ 24174);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/student/services/shopping-cart.service */ 45162);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/pipes/round.pipe */ 12598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);


















function DiplomaCardComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.isArabic ? ctx_r0.Diploma == null ? null : ctx_r0.Diploma.category[0] == null ? null : ctx_r0.Diploma.category[0].ar_name : ctx_r0.Diploma == null ? null : ctx_r0.Diploma.category[0] == null ? null : ctx_r0.Diploma.category[0].en_name, " ");
  }
}

function DiplomaCardComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", ctx_r1.getCategoresTooltip(ctx_r1.Diploma.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" + ", (ctx_r1.Diploma == null ? null : ctx_r1.Diploma.category == null ? null : ctx_r1.Diploma.category.length) - 1, " ");
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "fa-star warning": a0,
    "fa-star-o grey": a1
  };
};

function DiplomaCardComponent_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "round");
  }

  if (rf & 2) {
    var star_r5 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, star_r5.rate <= ctx_r2.Diploma.rate), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, star_r5.rate > ctx_r2.Diploma.rate)));
  }
}

function DiplomaCardComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DiplomaCardComponent_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r7.addToCart(ctx_r7.Diploma.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "course.AddToCart"), " ");
  }
}

function DiplomaCardComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "course.Incart"), " ");
  }
}

var _c1 = function _c1(a1) {
  return ["/home/diploma-courses/", a1];
};

var DiplomaCardComponent = /*#__PURE__*/function () {
  function DiplomaCardComponent(fileService, appAssets, languageService, authService, router, spinner, shoppingCartService, msg) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DiplomaCardComponent);

    this.fileService = fileService;
    this.appAssets = appAssets;
    this.languageService = languageService;
    this.authService = authService;
    this.router = router;
    this.spinner = spinner;
    this.shoppingCartService = shoppingCartService;
    this.msg = msg;
    this.addedToCard = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.rates = [];
    this.isStudent = false;
    this.isAdmin = false;
    this.rates = app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_2__.Rates;
    this.isStudent = this.authService.isStudent();
    this.isAdmin = this.authService.isAdmin();
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DiplomaCardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "getCategoresTooltip",
    value: function getCategoresTooltip(categoryList) {
      var _this = this;

      var Category = [];
      categoryList.forEach(function (ele, index) {
        if (index != 0) Category.push(_this.languageService.isArabic ? ele.ar_name : ele.en_name);
      });
      return Category.join("\n");
    }
  }, {
    key: "addToCart",
    value: function addToCart(diplomaId) {
      var _this2 = this;

      if (!this.authService.isUserLoggedIn()) {
        this.router.navigateByUrl("auth/login");
        return;
      }

      var cartData = {
        id: 0,
        diploma_id: diplomaId,
        subject_id: null
      };
      this.spinner.show();
      this.shoppingCartService.addEditUserCartCourses(cartData).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this2.msg.success("course.AddToCartSuccess"); // change add to cart into in cart


          _this2.addedToCard.emit(diplomaId);
        } else _this2.msg.warning(res.returnString);

        _this2.spinner.hide();
      });
    }
  }]);

  return DiplomaCardComponent;
}();

DiplomaCardComponent.ɵfac = function DiplomaCardComponent_Factory(t) {
  return new (t || DiplomaCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_3__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_4__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__.ShoppingCartService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_8__.MessagesService));
};

DiplomaCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: DiplomaCardComponent,
  selectors: [["app-diploma-card"]],
  inputs: {
    Diploma: "Diploma"
  },
  outputs: {
    addedToCard: "addedToCard"
  },
  decls: 30,
  vars: 27,
  consts: [[1, "course--cart-re", "mbottom-20"], [1, "coursecartimg", 3, "src", "error"], [1, "cart--divider"], [1, "maincoursetitle", "font-regular"], [1, "coursecarttitle", "font-regular"], [4, "ngIf"], ["width", "22", "height", "22", "class", "round info font-size-10 padding-3 mleft-3 mright-3 b-info pointer", 3, "matTooltip", 4, "ngIf"], [1, "rating", "mbottom-5"], ["class", "fa mright-3 font-size-15 rate-star", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "font-size-10"], [1, "font-size-10", "mright-3", "mleft-3", "d-block"], [1, "coursecartfooter"], [1, "price", "font-regular", "float-left"], ["class", "btn-outline-orange border-2 round float-right mbottom-5 mleft-5", 3, "click", 4, "ngIf"], ["class", "success font-regular float-right in-cart mbottom-5 mleft-5", 4, "ngIf"], [1, "btn-outline-orange", "border-2", "round", "float-right", "mbottom-5", "mleft-5", 3, "routerLink"], ["width", "22", "height", "22", 1, "round", "info", "font-size-10", "padding-3", "mleft-3", "mright-3", "b-info", "pointer", 3, "matTooltip"], [1, "fa", "mright-3", "font-size-15", "rate-star", 3, "ngClass"], [1, "btn-outline-orange", "border-2", "round", "float-right", "mbottom-5", "mleft-5", 3, "click"], [1, "success", "font-regular", "float-right", "in-cart", "mbottom-5", "mleft-5"]],
  template: function DiplomaCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function DiplomaCardComponent_Template_img_error_1_listener($event) {
        return ctx.fileService.onError($event, ctx.appAssets.defaultDiplomaImage);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, DiplomaCardComponent_span_6_Template, 2, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, DiplomaCardComponent_span_7_Template, 2, 2, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, DiplomaCardComponent_i_9_Template, 3, 8, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, DiplomaCardComponent_button_25_Template, 3, 3, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, DiplomaCardComponent_span_26_Template, 3, 3, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var tmp_1_0;
      var tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.fileService.previewPicture(ctx.Diploma.attach_path), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.languageService.isArabic ? (tmp_1_0 = ctx.Diploma.diploma_ar_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx.Diploma.diploma_en_name : (tmp_1_0 = ctx.Diploma.diploma_en_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx.Diploma.diploma_ar_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Diploma == null ? null : ctx.Diploma.category);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.Diploma == null ? null : ctx.Diploma.category == null ? null : ctx.Diploma.category.length) > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.rates);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ( ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 15, ctx.Diploma.rate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 17, "labels.outOf"), " 5) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx.Diploma.userRatesCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 19, "course.peopleRateDiploma"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 21, "CurrencySymbol"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((tmp_8_0 = ctx.Diploma.price) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.Diploma.isCard && !ctx.Diploma.isPaid && !ctx.isAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Diploma.isCard && !ctx.Diploma.isPaid);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](25, _c1, ctx.Diploma.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 23, "course.GoToCourses"), " ");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass],
  pipes: [_shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_9__.RoundPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: [".in-cart[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcGxvbWEtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiZGlwbG9tYS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluLWNhcnQge1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 49990:
/*!**********************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/diploma/diploma-courses/diploma-courses.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiplomaCoursesComponent": function() { return /* binding */ DiplomaCoursesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/rate-list */ 24174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/admin/services/Admin/setup/course.service */ 96002);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/student/services/shopping-cart.service */ 45162);
/* harmony import */ var _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../course-card-details/course-card-details.component */ 81950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/pipes/round.pipe */ 12598);























function DiplomaCoursesComponent_div_15_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function DiplomaCoursesComponent_div_15_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DiplomaCoursesComponent_div_15_ng_container_7_span_2_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var category_r12 = ctx.$implicit;
    var last_r13 = ctx.last;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r5.languageService.isArabic ? (tmp_0_0 = category_r12.ar_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : category_r12.en_name : (tmp_0_0 = category_r12.en_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : category_r12.ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r13);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "fa-star warning": a0,
    "fa-star-o grey": a1
  };
};

function DiplomaCoursesComponent_div_15_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "round");
  }

  if (rf & 2) {
    var star_r15 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, star_r15.rate < ctx_r6.selectedDiploma.rate), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, star_r15.rate > ctx_r6.selectedDiploma.rate)));
  }
}

function DiplomaCoursesComponent_div_15_button_18_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DiplomaCoursesComponent_div_15_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r17.addToCart(ctx_r17.selectedDiploma.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "course.AddToCart"), " ");
  }
}

function DiplomaCoursesComponent_div_15_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "course.Incart"), " ");
  }
}

function DiplomaCoursesComponent_div_15_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r9.selectedDiploma.diploma_descreption, " ");
  }
}

function DiplomaCoursesComponent_div_15_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "course.noDescriptionDiploma"), " ");
  }
}

function DiplomaCoursesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function DiplomaCoursesComponent_div_15_Template_img_error_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r19.fileService.onError($event, ctx_r19.appAssets.defaultDiplomaImage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, DiplomaCoursesComponent_div_15_ng_container_7_Template, 3, 2, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, DiplomaCoursesComponent_div_15_i_9_Template, 3, 8, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, DiplomaCoursesComponent_div_15_button_18_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, DiplomaCoursesComponent_div_15_span_19_Template, 3, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, DiplomaCoursesComponent_div_15_div_25_Template, 3, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, DiplomaCoursesComponent_div_15_ng_template_26_Template, 3, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);

    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r0.fileService.previewPicture(ctx_r0.selectedDiploma == null ? null : ctx_r0.selectedDiploma.attach_path), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.isArabic ? (tmp_1_0 = ctx_r0.selectedDiploma == null ? null : ctx_r0.selectedDiploma.diploma_ar_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx_r0.selectedDiploma == null ? null : ctx_r0.selectedDiploma.diploma_en_name : (tmp_1_0 = ctx_r0.selectedDiploma == null ? null : ctx_r0.selectedDiploma.diploma_en_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx_r0.selectedDiploma == null ? null : ctx_r0.selectedDiploma.diploma_ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.selectedDiploma.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.rates);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ( ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 13, ctx_r0.selectedDiploma.rate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 15, "labels.outOf"), " 5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r0.selectedDiploma.userRatesCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](16, 17, "course.peopleRateDiploma"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r0.selectedDiploma.isCard && !ctx_r0.selectedDiploma.isPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.selectedDiploma.isCard && !ctx_r0.selectedDiploma.isPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](24, 19, "course.courseDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.selectedDiploma.diploma_descreption)("ngIfElse", _r10);
  }
}

function DiplomaCoursesComponent_div_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" for \"", ctx_r21.lastSearchName, "\" ");
  }
}

function DiplomaCoursesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, DiplomaCoursesComponent_div_22_span_5_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" About ", ctx_r1.courses == null ? null : ctx_r1.courses.length, " results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.lastSearchName);
  }
}

function DiplomaCoursesComponent_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-course-card-details", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("addedToCard", function DiplomaCoursesComponent_ng_container_25_ng_container_1_Template_app_course_card_details_addedToCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r24.addedToCard($event);
    })("removeFromCard", function DiplomaCoursesComponent_ng_container_25_ng_container_1_Template_app_course_card_details_removeFromCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r26.removeFromCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var course_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("course", course_r23);
  }
}

function DiplomaCoursesComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DiplomaCoursesComponent_ng_container_25_ng_container_1_Template, 3, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.courses);
  }
}

function DiplomaCoursesComponent_ng_template_26_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "course.for"), " \" ", ctx_r27.lastSearchName, " \" ");
  }
}

function DiplomaCoursesComponent_ng_template_26_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" in ", ctx_r28.languageService.isArabic ? (tmp_0_0 = ctx_r28.selectedDiploma == null ? null : ctx_r28.selectedDiploma.diploma_ar_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ctx_r28.selectedDiploma == null ? null : ctx_r28.selectedDiploma.diploma_en_name : (tmp_0_0 = ctx_r28.selectedDiploma == null ? null : ctx_r28.selectedDiploma.diploma_en_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ctx_r28.selectedDiploma == null ? null : ctx_r28.selectedDiploma.diploma_ar_name, " ");
  }
}

function DiplomaCoursesComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, DiplomaCoursesComponent_ng_template_26_span_5_Template, 3, 4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, DiplomaCoursesComponent_ng_template_26_span_6_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r4.appAssets.coursesNotFound, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 4, "course.NoCoursesSearch"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.lastSearchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.selectedDiploma);
  }
}

var DiplomaCoursesComponent = /*#__PURE__*/function () {
  function DiplomaCoursesComponent(fileService, appAssets, languageService, route, homeCoursesService, fb, spinner, msg, location, courseService, dialog, authService, router, shoppingCartService) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DiplomaCoursesComponent);

    this.fileService = fileService;
    this.appAssets = appAssets;
    this.languageService = languageService;
    this.route = route;
    this.homeCoursesService = homeCoursesService;
    this.fb = fb;
    this.spinner = spinner;
    this.msg = msg;
    this.location = location;
    this.courseService = courseService;
    this.dialog = dialog;
    this.authService = authService;
    this.router = router;
    this.shoppingCartService = shoppingCartService;
    this.courses = [];
    this.selectedDiploma = null;
    this.lastSearchName = null;
    this.rates = [];
    this.rates = app_shared_data_rate_list__WEBPACK_IMPORTED_MODULE_3__.Rates;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DiplomaCoursesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.myForm = this.fb.group({
        diplomaId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        courseName: [""]
      });
      this.route.paramMap.subscribe(function (params) {
        _this.FormCtrls.diplomaId.setValue(Number(params.get("diplomaId")));
      });
      this.route.queryParamMap.subscribe(function (queryParams) {
        var _a;

        _this.FormCtrls.courseName.setValue((_a = queryParams.get("courseName")) !== null && _a !== void 0 ? _a : "");

        _this.searchCourses();
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "searchCourses",
    value: function searchCourses() {
      var _this2 = this;

      // console.log("by course");
      if (this.FormCtrls.diplomaId.value) {
        var courseSearchData = {
          diplomaId: this.FormCtrls.diplomaId.value,
          courseName: this.FormCtrls.courseName.value.trim().toLowerCase()
        };
        this.spinner.show();
        this.homeCoursesService.searchDiplomaCourses(courseSearchData, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getUserId()).subscribe(function (res) {
          _this2.courses = [];
          _this2.lastSearchName = courseSearchData.courseName;

          if (res) {
            _this2.selectedDiploma = res === null || res === void 0 ? void 0 : res.diploma;
            _this2.courses = res === null || res === void 0 ? void 0 : res.diploma_courses;

            _this2.courses.map(function (course) {
              course.isPaid = _this2.selectedDiploma.isPaid;
            }); // change url


            if (courseSearchData.courseName) _this2.location.go("home/diploma-courses/".concat(courseSearchData.diplomaId, "?courseName=").concat(courseSearchData.courseName));else _this2.location.go("home/diploma-courses/".concat(courseSearchData.diplomaId));
          }

          _this2.spinner.hide();
        });
      } // else this.msg.warning("course.enterCourseNameField");

    }
  }, {
    key: "addedToCard",
    value: function addedToCard(courseId) {
      this.courses.map(function (course) {
        if (course.subject_id == courseId) course.isCard = true;
      });
    }
  }, {
    key: "removeFromCard",
    value: function removeFromCard(course) {
      this.courses.map(function (course) {
        if (course.subject_id == course.subject_id) course.isCard = false;
      });
    } // openCheckUserBuyCourseDialog(): void {
    //   if (!this.authService.isUserLoggedIn()) {
    //     this.router.navigateByUrl("auth/login");
    //     return;
    //   }
    //   this.dialog
    //     .open(CheckUserBuyCoursesDialogComponent, {
    //       data: {
    //         msg: "",
    //       },
    //     })
    //     .afterClosed()
    //     .subscribe((confirm) => {
    //       if (confirm) this.buyCourse();
    //     });
    // }
    // buyCourse() {
    //   let data: any;
    //   this.msg.success("course.buySuccesed");
    //   this.shoppingCartService.buyCourse(data).subscribe((res) => {
    //     if (res) {
    //       this.msg.success("course.buySuccesed");
    //     }
    //   });
    // }

  }, {
    key: "addToCart",
    value: function addToCart(diplomaId) {
      var _this3 = this;

      if (!this.authService.isUserLoggedIn()) {
        this.router.navigateByUrl("auth/login");
        return;
      }

      var cartData = {
        id: 0,
        diploma_id: diplomaId,
        subject_id: null
      };
      this.spinner.show();
      this.shoppingCartService.addEditUserCartCourses(cartData).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this3.msg.success("course.AddToCartSuccess"); // change add to cart into in cart


          _this3.selectedDiploma.isCard = true;
        } else _this3.msg.warning(res.returnString);

        _this3.spinner.hide();
      });
    }
  }]);

  return DiplomaCoursesComponent;
}();

DiplomaCoursesComponent.ɵfac = function DiplomaCoursesComponent_Factory(t) {
  return new (t || DiplomaCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_4__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_5__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_7__.HomeCoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_8__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_9__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_student_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__.ShoppingCartService));
};

DiplomaCoursesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: DiplomaCoursesComponent,
  selectors: [["app-diploma-courses"]],
  decls: 28,
  vars: 11,
  consts: [[1, "cat--page"], [1, "searchbar", "intoppage"], [1, "row"], [1, "col-md-6", "col-12"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "courseName", 1, "form-control", "searchinput", "font-regular", 3, "placeholder", "keyup.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "searchbtn", 3, "click"], [1, "info--data"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-8"], [1, "coursecontent"], [1, "heading--sect1"], ["class", "row", 4, "ngIf"], [1, "coursesgrid"], [4, "ngIf", "ngIfElse"], ["empty", ""], [1, "col-md-4"], [1, "main-data"], [1, "courseinfopic"], [1, "coursetitleimg", 3, "src", "error"], [1, "courseinfoname", "font-bold", "font-size-25"], [1, "maincourseinfoname", "font-bold"], [4, "ngFor", "ngForOf"], [1, "courseinforate"], ["class", "fa mright-3 font-size-30 rate-star", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "font-size-10"], [1, "font-size-10", "mright-3", "mleft-3", "d-block"], [1, "row", "courseinfobtns"], ["class", "btn-outline-orange border-2 round float-right mbottom-5", 3, "click", 4, "ngIf"], ["class", "success font-regular float-right mbottom-5 in-cart", 4, "ngIf"], [1, "description"], ["class", "descriptioncontent", 4, "ngIf", "ngIfElse"], ["noDescription", ""], [4, "ngIf"], [1, "fa", "mright-3", "font-size-30", "rate-star", 3, "ngClass"], [1, "btn-outline-orange", "border-2", "round", "float-right", "mbottom-5", 3, "click"], [1, "success", "font-regular", "float-right", "mbottom-5", "in-cart"], [1, "descriptioncontent"], [1, "alert", "bg-light-warning", "d-inline-block"], [1, "col-12"], [1, "searchrescount"], [1, "text-muted"], [1, "col-md-4", "col-sm-6"], [3, "course", "addedToCard", "removeFromCard"], [1, "col-12", "text-center"], ["alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2", 3, "src"], [1, "mt-4", "warning"]],
  template: function DiplomaCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup.enter", function DiplomaCoursesComponent_Template_input_keyup_enter_8_listener() {
        return ctx.searchCourses();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DiplomaCoursesComponent_Template_button_click_11_listener() {
        return ctx.searchCourses();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, " \xA0\xA0\xA0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, DiplomaCoursesComponent_div_15_Template, 28, 21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, DiplomaCoursesComponent_div_22_Template, 6, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, DiplomaCoursesComponent_ng_container_25_Template, 2, 1, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, DiplomaCoursesComponent_ng_template_26_Template, 7, 6, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 7, "course.SearchOnCourses"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.selectedDiploma);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](21, 9, "course.courses"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.courses == null ? null : ctx.courses.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.courses == null ? null : ctx.courses.length) > 0)("ngIfElse", _r3);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_12__.CourseCardDetailsComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _shared_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_13__.RoundPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXBsb21hLWNvdXJzZXMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 62395:
/*!****************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/diploma/diploma-home/diploma-home.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiplomaHomeComponent": function() { return /* binding */ DiplomaHomeComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../diploma-card/diploma-card.component */ 18091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);










function DiplomaHomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-diploma-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("addedToCard", function DiplomaHomeComponent_div_1_Template_app_diploma_card_addedToCard_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r3.addedToCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var Diploma_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Diploma", Diploma_r2);
  }
}

var _c0 = function _c0() {
  return ["diploma-index"];
};

function DiplomaHomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "course.seeMore"));
  }
}

var DiplomaHomeComponent = /*#__PURE__*/function () {
  function DiplomaHomeComponent(homeCoursesService) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DiplomaHomeComponent);

    this.homeCoursesService = homeCoursesService;
    this.Diplomas = [];
    this.curPage = 1;
    this.countItems = 0;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DiplomaHomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllDiplomas();
    }
  }, {
    key: "getAllDiplomas",
    value: function getAllDiplomas() {
      var _this = this;

      this.homeCoursesService.getAllDiplomas(this.curPage, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getUserId()).subscribe(function (res) {
        _this.Diplomas = res.DiplomaList;
        _this.countItems = res.countItems;
      });
    }
  }, {
    key: "addedToCard",
    value: function addedToCard(diplomaId) {
      this.Diplomas.map(function (course) {
        if (course.id == diplomaId) course.isCard = true;
      });
    }
  }]);

  return DiplomaHomeComponent;
}();

DiplomaHomeComponent.ɵfac = function DiplomaHomeComponent_Factory(t) {
  return new (t || DiplomaHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__.HomeCoursesService));
};

DiplomaHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DiplomaHomeComponent,
  selectors: [["app-diploma-home"]],
  decls: 3,
  vars: 2,
  consts: [[1, "row"], ["class", "col-sm-6 col-md-4 col-xl-3 col-12", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-sm-6", "col-md-4", "col-xl-3", "col-12"], [3, "Diploma", "addedToCard"], [1, "col-12"], [1, "more--cats", 3, "routerLink"], [1, "py-2"]],
  template: function DiplomaHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DiplomaHomeComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DiplomaHomeComponent_div_2_Template, 6, 5, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Diplomas);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.countItems > 0 && ctx.countItems > ctx.Diplomas.length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_4__.DiplomaCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXBsb21hLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 89313:
/*!******************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/diploma/diploma-index/diploma-index.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiplomaIndexComponent": function() { return /* binding */ DiplomaIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../diploma-card/diploma-card.component */ 18091);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









function DiplomaIndexComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-diploma-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("addedToCard", function DiplomaIndexComponent_div_8_Template_app_diploma_card_addedToCard_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.addedToCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var Diploma_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Diploma", Diploma_r1);
  }
}

var DiplomaIndexComponent = /*#__PURE__*/function () {
  function DiplomaIndexComponent(homeCoursesService) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DiplomaIndexComponent);

    this.homeCoursesService = homeCoursesService;
    this.Diplomas = [];
    this.countItems = 0;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DiplomaIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllDiplomas();
    }
  }, {
    key: "getAllDiplomas",
    value: function getAllDiplomas() {
      var _this = this;

      this.homeCoursesService.getAllDiplomas(null, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getUserId()).subscribe(function (res) {
        _this.Diplomas = res.DiplomaList;
        _this.countItems = res.countItems;
      });
    }
  }, {
    key: "addedToCard",
    value: function addedToCard(diplomaId) {
      this.Diplomas.map(function (course) {
        if (course.id == diplomaId) course.isCard = true;
      });
    }
  }]);

  return DiplomaIndexComponent;
}();

DiplomaIndexComponent.ɵfac = function DiplomaIndexComponent_Factory(t) {
  return new (t || DiplomaIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__.HomeCoursesService));
};

DiplomaIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DiplomaIndexComponent,
  selectors: [["app-diploma-index"]],
  decls: 9,
  vars: 4,
  consts: [[1, "container--notfw"], [1, "foc-header"], [1, "font-bold"], [1, "foc-body"], [1, "row"], ["class", "col-12 col-sm-12 col-md-6 col-lg-3 ", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-3"], [3, "Diploma", "addedToCard"]],
  template: function DiplomaIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DiplomaIndexComponent_div_8_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "course.Diplomas"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Diplomas);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_4__.DiplomaCardComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXBsb21hLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 79129:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/popular-courses/most-popular-course-index/most-popular-course-index.component.ts ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostPopularCourseIndexComponent": function() { return /* binding */ MostPopularCourseIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../course-card-details/course-card-details.component */ 81950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);










function MostPopularCourseIndexComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-course-card-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addedToCard", function MostPopularCourseIndexComponent_ng_container_6_Template_app_course_card_details_addedToCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r2.addedToCard($event);
    })("removeFromCard", function MostPopularCourseIndexComponent_ng_container_6_Template_app_course_card_details_removeFromCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r4.removeFromCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("course", course_r1);
  }
}

var MostPopularCourseIndexComponent = /*#__PURE__*/function () {
  function MostPopularCourseIndexComponent(homeCoursesService, msg) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MostPopularCourseIndexComponent);

    this.homeCoursesService = homeCoursesService;
    this.msg = msg;
    this.courses = [];
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MostPopularCourseIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getallPopularCourses();
    }
  }, {
    key: "getallPopularCourses",
    value: function getallPopularCourses() {
      var _this = this;

      console.log("gggjj");
      this.homeCoursesService.getMostPopularCourses(null, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getUserId()).subscribe(function (res) {
        res.mostPopularCourseList.forEach(function (ele) {
          _this.courses.push(ele.Course);
        });
      });
    }
  }, {
    key: "addedToCard",
    value: function addedToCard(courseId) {
      this.courses.map(function (course) {
        if (course.subject_id == courseId) course.isCard = true;
      });
    }
  }, {
    key: "removeFromCard",
    value: function removeFromCard(course) {
      var i = this.courses.indexOf(course);
      this.courses.splice(i, 1);
      this.msg.success("General.DeleteSuccessfully");
    }
  }]);

  return MostPopularCourseIndexComponent;
}();

MostPopularCourseIndexComponent.ɵfac = function MostPopularCourseIndexComponent_Factory(t) {
  return new (t || MostPopularCourseIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__.HomeCoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService));
};

MostPopularCourseIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MostPopularCourseIndexComponent,
  selectors: [["app-most-popular-course-index"]],
  decls: 7,
  vars: 4,
  consts: [[1, "coursesgrid"], [1, "container--notfw"], [1, "maintit--sectitle", "font-bold", "mb-3"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-3", "mb-4"], [3, "course", "addedToCard", "removeFromCard"]],
  template: function MostPopularCourseIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MostPopularCourseIndexComponent_ng_container_6_Template, 3, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "course.PopularCourses"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.courses);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_5__.CourseCardDetailsComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0LXBvcHVsYXItY291cnNlLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 91553:
/*!****************************************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/popular-courses/most-popular-courses/most-popular-courses.component.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostPopularCoursesComponent": function() { return /* binding */ MostPopularCoursesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_data_owl_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/data/owl-options */ 83186);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../course-card-details/course-card-details.component */ 81950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);














function MostPopularCoursesComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-course-card-details", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("addedToCard", function MostPopularCoursesComponent_1_ng_template_0_Template_app_course_card_details_addedToCard_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r4.addedToCard($event);
    })("removeFromCard", function MostPopularCoursesComponent_1_ng_template_0_Template_app_course_card_details_removeFromCard_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r6.removeFromCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("course", course_r2);
  }
}

function MostPopularCoursesComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MostPopularCoursesComponent_1_ng_template_0_Template, 1, 1, "ng-template", 3);
  }
}

function MostPopularCoursesComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "course.seeMore"), "\n");
  }
}

var MostPopularCoursesComponent = /*#__PURE__*/function () {
  function MostPopularCoursesComponent(homeCoursesService, msg) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MostPopularCoursesComponent);

    this.homeCoursesService = homeCoursesService;
    this.msg = msg;
    this.courses = [];
    this.PopularItemsCount = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.options = app_shared_data_owl_options__WEBPACK_IMPORTED_MODULE_2__.customOptions;
    this.countItems = 0;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MostPopularCoursesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getallPopularCourses();
    }
  }, {
    key: "getallPopularCourses",
    value: function getallPopularCourses() {
      var _this = this;

      this.homeCoursesService.getMostPopularCourses(1, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getUserId()).subscribe(function (res) {
        var _a;

        res.mostPopularCourseList.forEach(function (ele) {
          _this.courses.push(ele.Course);
        });
        _this.countItems = res.countItems;

        _this.PopularItemsCount.emit((_a = _this.courses) === null || _a === void 0 ? void 0 : _a.length);
      });
    }
  }, {
    key: "addedToCard",
    value: function addedToCard(courseId) {
      this.courses.map(function (course) {
        if (course.subject_id == courseId) course.isCard = true;
      });
    }
  }, {
    key: "removeFromCard",
    value: function removeFromCard(course) {
      var i = this.courses.indexOf(course);
      this.courses.splice(i, 1);
      this.msg.success("General.DeleteSuccessfully");
    }
  }]);

  return MostPopularCoursesComponent;
}();

MostPopularCoursesComponent.ɵfac = function MostPopularCoursesComponent_Factory(t) {
  return new (t || MostPopularCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_4__.HomeCoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService));
};

MostPopularCoursesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MostPopularCoursesComponent,
  selectors: [["app-most-popular-courses"]],
  outputs: {
    PopularItemsCount: "PopularItemsCount"
  },
  decls: 3,
  vars: 3,
  consts: [[3, "options"], [4, "ngFor", "ngForOf"], ["class", "seemorebutton font-regular float-right", "routerLink", "most-popular-course-index", 4, "ngIf"], ["carouselSlide", ""], [3, "course", "addedToCard", "removeFromCard"], ["routerLink", "most-popular-course-index", 1, "seemorebutton", "font-regular", "float-right"]],
  template: function MostPopularCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "owl-carousel-o", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MostPopularCoursesComponent_1_Template, 1, 0, undefined, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MostPopularCoursesComponent_a_2_Template, 3, 3, "a", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.courses);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.countItems > 10);
    }
  },
  directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselSlideDirective, _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_6__.CourseCardDetailsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0LXBvcHVsYXItY291cnNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 32653:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/recent-courses/most-recent-course-index/most-recent-course-index.component.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostRecentCourseIndexComponent": function() { return /* binding */ MostRecentCourseIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../course-card-details/course-card-details.component */ 81950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);










function MostRecentCourseIndexComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-course-card-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addedToCard", function MostRecentCourseIndexComponent_ng_container_6_Template_app_course_card_details_addedToCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r2.addedToCard($event);
    })("removeFromCard", function MostRecentCourseIndexComponent_ng_container_6_Template_app_course_card_details_removeFromCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r4.removeFromCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("course", course_r1);
  }
}

var MostRecentCourseIndexComponent = /*#__PURE__*/function () {
  function MostRecentCourseIndexComponent(homeCoursesService, msg) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MostRecentCourseIndexComponent);

    this.homeCoursesService = homeCoursesService;
    this.msg = msg;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MostRecentCourseIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getallMostRecentCourses();
    }
  }, {
    key: "getallMostRecentCourses",
    value: function getallMostRecentCourses() {
      var _this = this;

      this.homeCoursesService.getMostRecentCourses(null, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getUserId()).subscribe(function (res) {
        _this.courses = res.MostRecentCourses;
        console.log("resss", _this.courses);
      });
    }
  }, {
    key: "addedToCard",
    value: function addedToCard(courseId) {
      this.courses.map(function (course) {
        if (course.subject_id == courseId) course.isCard = true;
      });
    }
  }, {
    key: "removeFromCard",
    value: function removeFromCard(course) {
      var i = this.courses.indexOf(course);
      this.courses.splice(i, 1);
      this.msg.success("General.DeleteSuccessfully");
    }
  }]);

  return MostRecentCourseIndexComponent;
}();

MostRecentCourseIndexComponent.ɵfac = function MostRecentCourseIndexComponent_Factory(t) {
  return new (t || MostRecentCourseIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_3__.HomeCoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService));
};

MostRecentCourseIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MostRecentCourseIndexComponent,
  selectors: [["app-most-recent-course-index"]],
  decls: 7,
  vars: 4,
  consts: [[1, "coursesgrid"], [1, "container--notfw"], [1, "maintit--sectitle", "font-bold", "mb-3"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-3", "mb-4"], [3, "course", "addedToCard", "removeFromCard"]],
  template: function MostRecentCourseIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MostRecentCourseIndexComponent_ng_container_6_Template, 3, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "course.RecentCourses"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.courses);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_5__.CourseCardDetailsComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0LXJlY2VudC1jb3Vyc2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 23584:
/*!*************************************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/recent-courses/most-recent-courses/most-recent-courses.component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostRecentCoursesComponent": function() { return /* binding */ MostRecentCoursesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_data_owl_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/data/owl-options */ 83186);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../course-card-details/course-card-details.component */ 81950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);














function MostRecentCoursesComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-course-card-details", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("addedToCard", function MostRecentCoursesComponent_1_ng_template_0_Template_app_course_card_details_addedToCard_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r4.addedToCard($event);
    })("removeFromCard", function MostRecentCoursesComponent_1_ng_template_0_Template_app_course_card_details_removeFromCard_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r6.removeFromCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("course", course_r2);
  }
}

function MostRecentCoursesComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MostRecentCoursesComponent_1_ng_template_0_Template, 1, 1, "ng-template", 3);
  }
}

function MostRecentCoursesComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "course.seeMore"), "\n");
  }
}

var MostRecentCoursesComponent = /*#__PURE__*/function () {
  function MostRecentCoursesComponent(homeCoursesService, msg) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MostRecentCoursesComponent);

    this.homeCoursesService = homeCoursesService;
    this.msg = msg;
    this.RecentItemsCount = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.options = app_shared_data_owl_options__WEBPACK_IMPORTED_MODULE_2__.customOptions;
    this.countItems = 0;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MostRecentCoursesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getallMostRecentCourses();
    }
  }, {
    key: "getallMostRecentCourses",
    value: function getallMostRecentCourses() {
      var _this = this;

      this.homeCoursesService.getMostRecentCourses(1, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getUserId()).subscribe(function (res) {
        var _a;

        _this.courses = res.MostRecentCourses;
        _this.countItems = res.countItems;

        _this.RecentItemsCount.emit((_a = _this.courses) === null || _a === void 0 ? void 0 : _a.length);
      });
    }
  }, {
    key: "addedToCard",
    value: function addedToCard(courseId) {
      this.courses.map(function (course) {
        if (course.subject_id == courseId) course.isCard = true;
      });
    }
  }, {
    key: "removeFromCard",
    value: function removeFromCard(course) {
      var i = this.courses.indexOf(course);
      this.courses.splice(i, 1);
      this.msg.success("General.DeleteSuccessfully");
    }
  }]);

  return MostRecentCoursesComponent;
}();

MostRecentCoursesComponent.ɵfac = function MostRecentCoursesComponent_Factory(t) {
  return new (t || MostRecentCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_4__.HomeCoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService));
};

MostRecentCoursesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MostRecentCoursesComponent,
  selectors: [["app-most-recent-courses"]],
  outputs: {
    RecentItemsCount: "RecentItemsCount"
  },
  decls: 3,
  vars: 3,
  consts: [[3, "options"], [4, "ngFor", "ngForOf"], ["class", "seemorebutton font-regular float-right", "routerLink", "most-recent-course-index", 4, "ngIf"], ["carouselSlide", ""], [3, "course", "addedToCard", "removeFromCard"], ["routerLink", "most-recent-course-index", 1, "seemorebutton", "font-regular", "float-right"]],
  template: function MostRecentCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "owl-carousel-o", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MostRecentCoursesComponent_1_Template, 1, 0, undefined, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MostRecentCoursesComponent_a_2_Template, 3, 3, "a", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.courses);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.countItems > 10);
    }
  },
  directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselSlideDirective, _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_6__.CourseCardDetailsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0LXJlY2VudC1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 17418:
/*!************************************************************************************!*\
  !*** ./src/app/home/pages/home-courses/search-courses/search-courses.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCoursesComponent": function() { return /* binding */ SearchCoursesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/home/services/home-courses.service */ 91935);
/* harmony import */ var app_admin_services_setup_categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/admin/services/setup/categories.service */ 40714);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);
/* harmony import */ var _shared_components_dynamic_form_field_dropdown_with_search_dropdown_with_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/dropdown-with-search/dropdown-with-search.component */ 95121);
/* harmony import */ var _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../course-card-details/course-card-details.component */ 81950);
/* harmony import */ var _diploma_diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../diploma/diploma-card/diploma-card.component */ 18091);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 33935);






















function SearchCoursesComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function SearchCoursesComponent_section_14_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r5.fileService.onError($event, ctx_r5.appAssets.defaultCategoryImage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r0.fileService.previewPicture(ctx_r0.selectedCategory == null ? null : ctx_r0.selectedCategory.attach_path), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r0.languageService.isArabic ? ctx_r0.selectedCategory == null ? null : ctx_r0.selectedCategory.ar_name : ctx_r0.selectedCategory == null ? null : ctx_r0.selectedCategory.en_name, " ");
  }
}

function SearchCoursesComponent_div_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "course.for"), " \" ", ctx_r7.lastSearchName, " \" ");
  }
}

function SearchCoursesComponent_div_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" in ", ctx_r8.languageService.isArabic ? ctx_r8.selectedCategory == null ? null : ctx_r8.selectedCategory.ar_name : ctx_r8.selectedCategory == null ? null : ctx_r8.selectedCategory.en_name, "");
  }
}

function SearchCoursesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SearchCoursesComponent_div_15_span_5_Template, 3, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, SearchCoursesComponent_div_15_span_6_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" About ", ctx_r1.courses == null ? null : ctx_r1.courses.length, " results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.lastSearchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selectedCategory);
  }
}

function SearchCoursesComponent_ng_container_17_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-course-card-details", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("addedToCard", function SearchCoursesComponent_ng_container_17_ng_container_6_Template_app_course_card_details_addedToCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r11.addedToCard($event);
    })("removeFromCard", function SearchCoursesComponent_ng_container_17_ng_container_6_Template_app_course_card_details_removeFromCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r13.removeFromCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var course_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("course", course_r10);
  }
}

function SearchCoursesComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, SearchCoursesComponent_ng_container_17_ng_container_6_Template, 3, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "course.courses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.courses);
  }
}

function SearchCoursesComponent_ng_container_18_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-diploma-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("addedToCard", function SearchCoursesComponent_ng_container_18_ng_container_6_Template_app_diploma_card_addedToCard_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r16.addedToCard($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var diploma_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("Diploma", diploma_r15);
  }
}

function SearchCoursesComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, SearchCoursesComponent_ng_container_18_ng_container_6_Template, 3, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "course.Diplomas"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.diplomas);
  }
}

function SearchCoursesComponent_ng_container_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "course.for"), " \" ", ctx_r18.lastSearchName, " \" ");
  }
}

function SearchCoursesComponent_ng_container_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" in ", ctx_r19.languageService.isArabic ? ctx_r19.selectedCategory == null ? null : ctx_r19.selectedCategory.ar_name : ctx_r19.selectedCategory == null ? null : ctx_r19.selectedCategory.en_name, " ");
  }
}

function SearchCoursesComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, SearchCoursesComponent_ng_container_19_span_7_Template, 3, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, SearchCoursesComponent_ng_container_19_span_8_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r4.appAssets.coursesNotFound, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 4, "course.NoCoursesSearch"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.lastSearchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.selectedCategory);
  }
}

var SearchCoursesComponent = /*#__PURE__*/function () {
  function SearchCoursesComponent(fileService, appAssets, languageService, route, homeCoursesService, categoriesService, fb, spinner, authService, msg, location, router, appStrings) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchCoursesComponent);

    this.fileService = fileService;
    this.appAssets = appAssets;
    this.languageService = languageService;
    this.route = route;
    this.homeCoursesService = homeCoursesService;
    this.categoriesService = categoriesService;
    this.fb = fb;
    this.spinner = spinner;
    this.authService = authService;
    this.msg = msg;
    this.location = location;
    this.router = router;
    this.appStrings = appStrings;
    this.courses = [];
    this.diplomas = [];
    this.selectedCategory = null;
    this.lastSearchName = null;
    this.categories = [];
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchCoursesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.myForm = this.fb.group({
        categoryId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        filterCategory: [""
        /* , Validators.required */
        ],
        courseName: [""]
      });
      this.getAllCategories(); // this.FormCtrls.courseName.setValue(
      //   this.router.getCurrentNavigation().extras.state?.courseName
      // );
      // categoryId = 0 then search in all // categoryId > 0 then search in selected category

      this.route.paramMap.subscribe(function (params) {
        _this.FormCtrls.categoryId.setValue(Number(params.get("categoryId")));
      });
      this.route.queryParamMap.subscribe(function (queryParams) {
        var _a;

        _this.FormCtrls.courseName.setValue((_a = queryParams.get("courseName")) !== null && _a !== void 0 ? _a : "");

        _this.checkSerachType();
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getAllCategories",
    value: function getAllCategories() {
      var _this2 = this;

      this.categoriesService.getCategoriesDropdown().subscribe(function (res) {
        if (res) {
          _this2.categories = res.courseCategoryList;
        }
      });
    }
  }, {
    key: "getSelectedCategoryFormList",
    value: function getSelectedCategoryFormList() {
      var _this3 = this;

      var index = this.categories.findIndex(function (category) {
        return category.id == _this3.FormCtrls.categoryId.value;
      });
      this.selectedCategory = index >= 0 ? this.categories[index] : null;
    }
  }, {
    key: "getAllCoursesInCategory",
    value: function getAllCoursesInCategory() {
      var _this4 = this;

      this.courses = [];
      this.diplomas = [];
      this.lastSearchName = null;
      this.spinner.show();
      this.homeCoursesService.getAllCoursesAndDiplomasByCategoryId(this.FormCtrls.categoryId.value, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getUserId()).subscribe(function (res) {
        if (res) {
          _this4.courses = res.subCategoryList;
          _this4.diplomas = res.diplomaCategoryList;

          _this4.location.go("home/search-courses/".concat(_this4.FormCtrls.categoryId.value));

          _this4.getSelectedCategoryFormList();
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "checkSerachType",
    value: function checkSerachType() {
      if (this.FormCtrls.categoryId.value > 0 && !this.FormCtrls.courseName.value) this.getAllCoursesInCategory();else this.searchCourses();
    }
  }, {
    key: "searchCourses",
    value: function searchCourses() {
      var _this5 = this;

      if (this.myForm.valid) {
        var courseSearchData = {
          courseCategory_id: this.FormCtrls.categoryId.value,
          name: this.FormCtrls.courseName.value.trim().toLowerCase()
        };
        this.spinner.show();
        this.homeCoursesService.searchCourses(courseSearchData, app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getUserId()).subscribe(function (res) {
          _this5.courses = [];
          _this5.diplomas = [];
          _this5.lastSearchName = courseSearchData.name;

          if (res) {
            _this5.courses = res.subCategoryList;
            _this5.diplomas = res.diplomaList;

            _this5.location.go("home/search-courses/".concat(courseSearchData.courseCategory_id, "?courseName=").concat(courseSearchData.name));

            if (courseSearchData.courseCategory_id > 0) _this5.getSelectedCategoryFormList();
          }

          _this5.spinner.hide();
        });
      } else this.msg.warning("course.enterCourseNameField");
    }
  }, {
    key: "addedToCard",
    value: function addedToCard(id) {
      this.courses.map(function (course) {
        if (course.subject_id == id) course.isCard = true;
      });
      this.diplomas.map(function (diploma) {
        if (diploma.id == id) diploma.isCard = true;
      });
    }
  }, {
    key: "removeFromCard",
    value: function removeFromCard(course) {
      // let i = this.courses.indexOf(course);
      // this.courses.splice(i, 1);
      // this.msg.success("General.DeleteSuccessfully");
      this.courses.map(function (course) {
        if (course.subject_id == course.subject_id) course.isCard = false;
      });
    }
  }, {
    key: "onChange",
    value: function onChange($event) {
      if (!$event.value) {
        this.selectedCategory = null;
      }
    }
  }]);

  return SearchCoursesComponent;
}();

SearchCoursesComponent.ɵfac = function SearchCoursesComponent_Factory(t) {
  return new (t || SearchCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_3__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_4__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_home_services_home_courses_service__WEBPACK_IMPORTED_MODULE_6__.HomeCoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_admin_services_setup_categories_service__WEBPACK_IMPORTED_MODULE_7__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_9__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_10__.AppStrings));
};

SearchCoursesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: SearchCoursesComponent,
  selectors: [["app-search-courses"]],
  decls: 20,
  vars: 13,
  consts: [[1, "cat--page"], [1, "searchbar", "intoppage"], [1, "row"], [1, "col-md-6", "col-12"], [3, "formGroup"], [1, "input-group"], ["label", "categories.categories", 1, "col-4", "form-control", "searchinput", "font-regular", "searchDropdown", 3, "control", "filterControl", "List", "ngClass", "onChange"], ["type", "text", "formControlName", "courseName", 1, "form-control", "searchinput", "font-regular", 3, "placeholder", "keyup.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "searchbtn", 3, "click"], ["class", "pageinfo--title", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "coursesgrid"], [4, "ngIf"], [1, "pageinfo--title"], [1, "coursetitleimg", 3, "src", "error"], [1, "coursepagetilte"], [1, "col-12"], [1, "searchrescount"], [1, "text-muted"], [1, "heading--sect1"], [4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-3", "col-sm-4"], [3, "course", "addedToCard", "removeFromCard"], [1, "heading--sect1", "mtop-20"], [3, "Diploma", "addedToCard"], [1, "col-12", "text-center"], ["alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2", 3, "src"], [1, "mt-4", "warning"]],
  template: function SearchCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "dropdown-with-search", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onChange", function SearchCoursesComponent_Template_dropdown_with_search_onChange_8_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup.enter", function SearchCoursesComponent_Template_input_keyup_enter_9_listener() {
        return ctx.checkSerachType();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SearchCoursesComponent_Template_button_click_12_listener() {
        return ctx.checkSerachType();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " \xA0\xA0\xA0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, SearchCoursesComponent_section_14_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, SearchCoursesComponent_div_15_Template, 7, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, SearchCoursesComponent_ng_container_17_Template, 7, 4, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, SearchCoursesComponent_ng_container_18_Template, 7, 4, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, SearchCoursesComponent_ng_container_19_Template, 9, 6, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.FormCtrls.categoryId)("filterControl", ctx.FormCtrls.filterCategory)("List", ctx.categories)("ngClass", ctx.languageService.isArabic ? "mleft-5" : "mright-5");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 11, "course.SearchOnCourses"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.selectedCategory);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.courses == null ? null : ctx.courses.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.courses == null ? null : ctx.courses.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.diplomas == null ? null : ctx.diplomas.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.diplomas == null ? null : ctx.diplomas.length) == 0 && ctx.courses.length == 0);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_components_dynamic_form_field_dropdown_with_search_dropdown_with_search_component__WEBPACK_IMPORTED_MODULE_11__.DropdownWithSearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _course_card_details_course_card_details_component__WEBPACK_IMPORTED_MODULE_12__.CourseCardDetailsComponent, _diploma_diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_13__.DiplomaCardComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtY291cnNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 43986:
/*!***************************************************************!*\
  !*** ./src/app/home/pages/home-index/home-index.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeIndexComponent": function() { return /* binding */ HomeIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _home_courses_recent_courses_most_recent_courses_most_recent_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home-courses/recent-courses/most-recent-courses/most-recent-courses.component */ 23584);
/* harmony import */ var _home_courses_popular_courses_most_popular_courses_most_popular_courses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home-courses/popular-courses/most-popular-courses/most-popular-courses.component */ 91553);
/* harmony import */ var _home_courses_course_categories_course_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home-courses/course-categories/course-categories.component */ 30326);
/* harmony import */ var _home_courses_diploma_diploma_home_diploma_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home-courses/diploma/diploma-home/diploma-home.component */ 62395);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);















function HomeIndexComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function HomeIndexComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.appAssets.coursesNotFound, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 2, "course.NOcourse"), " ");
  }
}

function HomeIndexComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.appAssets.coursesNotFound, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 2, "course.NOcourse"), " ");
  }
}

var HomeIndexComponent = /*#__PURE__*/function () {
  function HomeIndexComponent(authservice, appAssets, fb, msg, router) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeIndexComponent);

    this.authservice = authservice;
    this.appAssets = appAssets;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.PopularItemsCount = 0;
    this.RecentItemsCount = 0;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "searchCourses",
    value: function searchCourses(courseName) {
      if (courseName) {
        this.router.navigate(["home/search-courses/0"], {
          queryParams: {
            courseName: courseName
          },
          state: {
            courseName: courseName
          }
        });
      } else this.msg.warning("course.enterCourseNameField");
    }
  }, {
    key: "getPoupularCount",
    value: function getPoupularCount(event) {
      this.PopularItemsCount = event;
    }
  }, {
    key: "getRecentCount",
    value: function getRecentCount(event) {
      this.RecentItemsCount = event;
    }
  }]);

  return HomeIndexComponent;
}();

HomeIndexComponent.ɵfac = function HomeIndexComponent_Factory(t) {
  return new (t || HomeIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};

HomeIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HomeIndexComponent,
  selectors: [["app-home-index"]],
  decls: 44,
  vars: 18,
  consts: [[1, "mainhomearticletag"], [1, "bannermain2"], ["src", "../../../../assets/img/banner2134.jpg"], [1, "text-overlay"], [1, "font-bold"], [1, "font-regular"], ["class", "homebtn font-regular", "routerLink", "/auth/login", 4, "ngIf"], [1, "coursestopcontainer"], [1, "maintit--sectitle", "font-bold"], [1, "foc-body"], [3, "RecentItemsCount"], ["class", "text-center p-3", 4, "ngIf"], [1, "coursespopcontainer"], [3, "PopularItemsCount"], [1, "focus"], [1, "foc-header"], [1, "row"], [1, "col-12"], [1, "font-regular", "subtitledescription"], ["routerLink", "/auth/login", 1, "homebtn", "font-regular"], [1, "text-center", "p-3"], ["height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2", 3, "src"], ["alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2", 3, "src"]],
  template: function HomeIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomeIndexComponent_a_10_Template, 2, 0, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "app-most-recent-courses", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("RecentItemsCount", function HomeIndexComponent_Template_app_most_recent_courses_RecentItemsCount_16_listener($event) {
        return ctx.getRecentCount($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, HomeIndexComponent_div_17_Template, 5, 4, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "app-most-popular-courses", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("PopularItemsCount", function HomeIndexComponent_Template_app_most_popular_courses_PopularItemsCount_23_listener($event) {
        return ctx.getPoupularCount($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, HomeIndexComponent_div_24_Template, 5, 4, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " Online employee training software makes it incredibly simple to develop, deliver, and manage the staff training programs that help great teams grow. It doesn\u2019t matter whether you\u2019re a multi-national or a small business. Making the switch from classroom-based training to a learning management system (Egypt Training) brings big benefits for businesses of any size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "app-course-categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "app-diploma-home");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 8, "General.mainbannerheader"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 10, "General.mainbannerdesc"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.authservice.isUserLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 12, "course.RecentCourses"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.RecentItemsCount == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 14, "course.PopularCourses"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.PopularItemsCount == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 16, "course.Diplomas"));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _home_courses_recent_courses_most_recent_courses_most_recent_courses_component__WEBPACK_IMPORTED_MODULE_5__.MostRecentCoursesComponent, _home_courses_popular_courses_most_popular_courses_most_popular_courses_component__WEBPACK_IMPORTED_MODULE_6__.MostPopularCoursesComponent, _home_courses_course_categories_course_categories_component__WEBPACK_IMPORTED_MODULE_7__.CourseCategoriesComponent, _home_courses_diploma_diploma_home_diploma_home_component__WEBPACK_IMPORTED_MODULE_8__.DiplomaHomeComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 91935:
/*!*******************************************************!*\
  !*** ./src/app/home/services/home-courses.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeCoursesService": function() { return /* binding */ HomeCoursesService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var HomeCoursesService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(HomeCoursesService, _AppClientService);

  var _super = (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeCoursesService);

  function HomeCoursesService(http) {
    var _this;

    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeCoursesService);

    _this = _super.call(this, http);
    _this.http = http;
    return _this;
  } // categories


  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeCoursesService, [{
    key: "getAllCategoriesWithCourses",
    value: function getAllCategoriesWithCourses() {
      return this.get("courseCategory/getAllSubjectCategories");
    } // get all courses by category Id

  }, {
    key: "getAllCoursesAndDiplomasByCategoryId",
    value: function getAllCoursesAndDiplomasByCategoryId(id, userId) {
      return this.get("subjectCategory/getAllCoursesAndDiplomasByCategoryId/".concat(id, "/").concat(userId));
    } // search courses

  }, {
    key: "searchCourses",
    value: function searchCourses(obj, userId) {
      return this.post("subjectCategory/searchCourses/".concat(userId), obj);
    } // get course data and content

  }, {
    key: "getCourseDataById",
    value: function getCourseDataById(id, userId) {
      return this.get("SubCourse/getSubCourseBySubCourseId/".concat(id, "/").concat(userId));
    } // get all Popular Courses

  }, {
    key: "getMostPopularCourses",
    value: function getMostPopularCourses(page, userId) {
      return this.get("subjectCategory/getMostPopularCourses/".concat(page, "/").concat(userId));
    } // get Recent Courses

  }, {
    key: "getMostRecentCourses",
    value: function getMostRecentCourses(page, userId) {
      return this.get("subjectCategory/getMostRecentCourses/".concat(page, "/").concat(userId));
    } // get all categories

  }, {
    key: "getAllCategories",
    value: function getAllCategories(page) {
      //return 8 item
      return this.get("courseCategory/returnAllCategoriesByPage/".concat(page));
    } // get all diplomas

  }, {
    key: "getAllDiplomas",
    value: function getAllDiplomas(page, userId) {
      // page = null > return all
      return this.get("Course/getAllDiploma/".concat(page, "/").concat(userId));
    }
  }, {
    key: "searchDiplomaCourses",
    value: function searchDiplomaCourses(obj, userId) {
      return this.post("Diploma/SearchDiploma/".concat(userId), obj);
    }
  }]);

  return HomeCoursesService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

HomeCoursesService.ɵfac = function HomeCoursesService_Factory(t) {
  return new (t || HomeCoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

HomeCoursesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: HomeCoursesService,
  factory: HomeCoursesService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 83186:
/*!********************************************!*\
  !*** ./src/app/shared/data/owl-options.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customOptions": function() { return /* binding */ customOptions; }
/* harmony export */ });
var customOptions = {
  autoplay: true,
  loop: false,
  rewind: true,
  margin: 20,
  dots: false,
  navSpeed: 300,
  nav: true,
  navText: ['<i class="ft-chevron-left"></i>', '<i class="ft-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    },
    1400: {
      items: 5
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map