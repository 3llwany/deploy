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
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 83204);
/* harmony import */ var _pages_see_more_categories_see_more_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/see-more-categories/see-more-categories.component */ 98871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var routes = [{
  path: "",
  pathMatch: "full",
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: "categories",
  component: _pages_see_more_categories_see_more_categories_component__WEBPACK_IMPORTED_MODULE_3__.SeeMoreCategoriesComponent,
  data: {
    view: "categories"
  }
}];
var HomeRoutingModule = /*#__PURE__*/(0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeRoutingModule() {
  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeRoutingModule);
});

HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
};

HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HomeRoutingModule
});
HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
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
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-index/home-index.component */ 43986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ 83204);
/* harmony import */ var _pages_home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-categories/home-categories.component */ 12600);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _pages_see_more_categories_see_more_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/see-more-categories/see-more-categories.component */ 98871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);














var HomeModule = /*#__PURE__*/(0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeModule() {
  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeModule);
});

HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};

HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__.HomeIndexComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _pages_home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_5__.HomeCategoriesComponent, _pages_see_more_categories_see_more_categories_component__WEBPACK_IMPORTED_MODULE_8__.SeeMoreCategoriesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
})();

/***/ }),

/***/ 12600:
/*!*************************************************************************!*\
  !*** ./src/app/home/pages/home-categories/home-categories.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeCategoriesComponent": function() { return /* binding */ HomeCategoriesComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_setup_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/setup/categories.service */ 40714);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/category-card/category-card.component */ 91836);
/* harmony import */ var _shared_skeleton_home_crads_with_title_skeleton_home_crads_with_title_skeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/skeleton/home-crads-with-title-skeleton/home-crads-with-title-skeleton.component */ 58708);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function HomeCategoriesComponent_ng_container_0_ng_container_1_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "seeMore"));
  }
}

function HomeCategoriesComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, HomeCategoriesComponent_ng_container_0_ng_container_1_div_1_p_5_Template, 4, 3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx_r4.title)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.showAllItems && ctx_r4.totalItems > 10);
  }
}

function HomeCategoriesComponent_ng_container_0_ng_container_1_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var category_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", category_r9.name, " ");
  }
}

function HomeCategoriesComponent_ng_container_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeCategoriesComponent_ng_container_0_ng_container_1_div_3_div_1_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.categories);
  }
}

function HomeCategoriesComponent_ng_container_0_ng_container_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-category-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var category_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("category", category_r11);
  }
}

function HomeCategoriesComponent_ng_container_0_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeCategoriesComponent_ng_container_0_ng_container_1_div_4_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.categories);
  }
}

function HomeCategoriesComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeCategoriesComponent_ng_container_0_ng_container_1_div_1_Template, 6, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HomeCategoriesComponent_ng_container_0_ng_container_1_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HomeCategoriesComponent_ng_container_0_ng_container_1_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.showTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isnavBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.isnavBar);
  }
}

function HomeCategoriesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeCategoriesComponent_ng_container_0_ng_container_1_Template, 5, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.categories.length > 0);
  }
}

function HomeCategoriesComponent_ng_template_1_app_home_crads_with_title_skeleton_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-home-crads-with-title-skeleton", 21);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("noOfCards", 10);
  }
}

var _c0 = function _c0() {
  return {
    height: "34px"
  };
};

function HomeCategoriesComponent_ng_template_1_div_1_ngx_skeleton_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 24);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

var _c1 = function _c1() {
  return [];
};

function HomeCategoriesComponent_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HomeCategoriesComponent_ng_template_1_div_1_ngx_skeleton_loader_2_Template, 1, 2, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c1).constructor(10));
  }
}

function HomeCategoriesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HomeCategoriesComponent_ng_template_1_app_home_crads_with_title_skeleton_0_Template, 1, 1, "app-home-crads-with-title-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeCategoriesComponent_ng_template_1_div_1_Template, 3, 2, "div", 20);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.isnavBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.isnavBar);
  }
}

var HomeCategoriesComponent = /*#__PURE__*/function () {
  function HomeCategoriesComponent(categoriesService, languageService, appAssets) {
    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeCategoriesComponent);

    this.categoriesService = categoriesService;
    this.languageService = languageService;
    this.appAssets = appAssets;
    this.isnavBar = false;
    this.showTitle = false;
    this.title = "exploreCategories";
    this.showAllItems = false;
    this.categories = [];
    this.eduCompId = null;
    this.isLoaded = false;
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeCategoriesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a;

      this.eduCompId = (_a = app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getEduCompId()) !== null && _a !== void 0 ? _a : null;
      if (this.eduCompId == 0) this.eduCompId = null;
      this.getAllCategories();
    }
  }, {
    key: "getAllCategories",
    value: function getAllCategories() {
      var _this = this;

      this.categoriesService.getCategories().subscribe(function (res) {
        if (res.returnValue == 1) _this.totalItems = res.MainCategories.length;
        _this.categories = _this.showAllItems ? res.MainCategories : res.MainCategories.slice(0, 10);
        _this.isLoaded = true;
      });
    }
  }]);

  return HomeCategoriesComponent;
}();

HomeCategoriesComponent.ɵfac = function HomeCategoriesComponent_Factory(t) {
  return new (t || HomeCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_setup_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_5__.AppAssets));
};

HomeCategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HomeCategoriesComponent,
  selectors: [["app-home-categories"]],
  inputs: {
    isnavBar: "isnavBar",
    showTitle: "showTitle",
    title: "title",
    showAllItems: "showAllItems"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["class", "home-section-header", 4, "ngIf"], [1, "home-categories"], ["class", "container-fluid categories-navbar", 4, "ngIf"], ["class", "categories-cards row", 4, "ngIf"], [1, "home-section-header"], [1, "main-header-h3"], ["class", "see-more", "routerLink", "/home/categories", 4, "ngIf"], ["routerLink", "/home/categories", 1, "see-more"], [1, "container-fluid", "categories-navbar"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "text-center", "d-block"], [1, "categories-cards", "row"], ["class", "col-xl-5 col-lg-3 col-md-4 col-sm-6 col-12", 4, "ngFor", "ngForOf"], [1, "col-xl-5", "col-lg-3", "col-md-4", "col-sm-6", "col-12"], [3, "category"], ["containerClasses", "courses", 3, "noOfCards", 4, "ngIf"], ["class", "home-categories", 4, "ngIf"], ["containerClasses", "courses", 3, "noOfCards"], [1, "container-fluid", "categories-navbar", 2, "height", "55px"], ["class", "flex-grow-1", 3, "theme", 4, "ngFor", "ngForOf"], [1, "flex-grow-1", 3, "theme"]],
  template: function HomeCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HomeCategoriesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeCategoriesComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _shared_components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__.CategoryCardComponent, _shared_skeleton_home_crads_with_title_skeleton_home_crads_with_title_skeleton_component__WEBPACK_IMPORTED_MODULE_7__.HomeCradsWithTitleSkeletonComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: [".home-categories[_ngcontent-%COMP%]   .categories-navbar[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 0 33px;\n  margin: 16px 28px;\n  padding: 10px 20px;\n  border-radius: 35px;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: solid 1px rgba(67, 122, 159, 0.21);\n  background-color: rgba(246, 249, 252, 0.9);\n}\n.home-categories[_ngcontent-%COMP%]   .categories-navbar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 8px;\n  color: #193141;\n  text-transform: capitalize;\n  font-family: \"agrandirNarrow\";\n  font-size: 15px;\n  line-height: 1.39;\n  letter-spacing: 0.38px;\n}\n.home-categories[_ngcontent-%COMP%]   .categories-cards[_ngcontent-%COMP%] {\n  gap: 30px 0;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXHN0eWxlLWNvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMENBQUE7QUFGSjtBQUlJO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNDcEJZO0VEcUJaLDBCQUFBO0VBRUEsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUhOO0FBT0U7RUFJRSxXQUFBO0VBR0EsbUJBQUE7QUFWSiIsImZpbGUiOiJob21lLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYXNzZXRzL3Nhc3Mvc3R5bGUtY29uc3RhbnRzXCI7XHJcblxyXG4uaG9tZS1jYXRlZ29yaWVzIHtcclxuICAuY2F0ZWdvcmllcy1uYXZiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwIDMzcHg7XHJcbiAgICBtYXJnaW46IDE2cHggMjhweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoNjcsIDEyMiwgMTU5LCAwLjIxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDksIDI1MiwgMC45KTtcclxuXHJcbiAgICAuaXRlbSB7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBjb2xvcjogJGRhcmstYmx1ZS1jb2xvcjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiYWdyYW5kaXJOYXJyb3dcIjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zOTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMzhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXRlZ29yaWVzLWNhcmRzIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGdhcDogMzBweCAwO1xyXG4gICAgLy8gcGFkZGluZzogMDtcclxuICAgIC8vIG1hcmdpbjogMTVweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8vIHdpZHRoOiBhdXRvO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG4iLCIkbWFpbi1jb2xvcjogI2U4NjgyMDtcclxuJG1haW4tbGlnaHQtY29sb3I6ICNmYjYyMzk7XHJcbiRlcnJvci1jb2xvcjogI2Y1NTI1MjtcclxuJGRhcmstYmx1ZS1jb2xvcjogIzE5MzE0MTtcclxuJGJsdWUtY29sb3I6ICM0MzdhOWY7XHJcbiRmb250QXdlc29tZTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiRtaW4tY29udGFpbmVyLWhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4kaW5wdXQtcmFkaXVzOiAxNXB4O1xyXG4kcmVkLWNvbG9yOiAjZDEwMzFiO1xyXG4kZ3JlZW4tY29sb3I6ICMyNThmNmU7XHJcbiJdfQ== */"]
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
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_student_services_teacherSubjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/student/services/teacherSubjects.service */ 89591);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);









function HomeIndexComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

var HomeIndexComponent = /*#__PURE__*/function () {
  function HomeIndexComponent(authservice, TeacherSubServ, MessagesService) {
    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeIndexComponent);

    this.authservice = authservice;
    this.TeacherSubServ = TeacherSubServ;
    this.MessagesService = MessagesService;
    this.teachers = [];
    this.customOptions = {
      autoplay: false,
      loop: false,
      rewind: true,
      margin: 10,
      dots: false,
      navSpeed: 300,
      navText: ['<i class="fas fa-arrow-right"></i>', '<i class="fas fa-arrow-left"></i>'],
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 2
        },
        740: {
          items: 4
        },
        940: {
          items: 5
        }
      },
      nav: false
    };
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.TeacherSubServ.ReturnHomeTeachers().subscribe(function (res) {
        _this.teachers = res; //console.log(res)
      });
    }
  }]);

  return HomeIndexComponent;
}();

HomeIndexComponent.ɵfac = function HomeIndexComponent_Factory(t) {
  return new (t || HomeIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_student_services_teacherSubjects_service__WEBPACK_IMPORTED_MODULE_3__.TeacherSubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService));
};

HomeIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HomeIndexComponent,
  selectors: [["app-home-index"]],
  decls: 77,
  vars: 1,
  consts: [[1, "mainhomearticletag"], [1, "bannermain2"], [1, "text-overlay"], [1, "font-bold"], [1, "font-regular"], ["class", "homebtn font-regular", "routerLink", "/auth/login", 4, "ngIf"], [1, "Whysection"], [1, "row"], [1, "col-md-6"], [1, "text-content"], [1, "whosectitle", "font-bold"], [1, "whosectextcont", "font-regular"], [1, "graphics"], [1, "whosecimg"], ["src", "../../../../assets/img/whopic.png"], [1, "focus"], [1, "foc-header"], [1, "foc-body"], [1, "col-12"], [1, "font-regular", "subtitledescription"], [1, "col-md-2"], [1, "feat-cart"], ["src", "../../../../assets/img/Asset10.png", 1, "feat-img"], [1, "feat-head", "font-bold"], [1, "feat-body", "font-regular"], ["src", "../../../../assets/img/Asset11.png", 1, "feat-img"], ["src", "../../../../assets/img/Asset12.png", 1, "feat-img"], [1, "feat-cart", "last"], ["src", "../../../../assets/img/Asset13.png", 1, "feat-img"], [1, "partner"], [1, "col-md-1"], [1, "col-md-5"], [1, "partn-img"], ["src", "../../../../assets/img/Asset21.png"], [1, "text-content2"], [1, "partnerlist", "font-regular"], ["routerLink", "/auth/login", 1, "homebtn", "font-regular"]],
  template: function HomeIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Egypt Training");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Learning More Knowledge");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HomeIndexComponent_a_7_Template, 2, 0, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "WHO WE ARE");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " When it comes to staff training, the right employee training software tool makes all the difference. Discover how TalentEgypt Training unlocks your team\u2019s full potential with online employee training. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "WHAT WE FOCUS ON");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Online employee training software makes it incredibly simple to develop, deliver, and manage the staff training programs that help great teams grow. It doesn\u2019t matter whether you\u2019re a multi-national or a small business. Making the switch from classroom-based training to a learning management system (Egypt Training) brings big benefits for businesses of any size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "LIFE COACHING");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Focus on where you are now and where you want to be in order to empower you. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "CAREER GUIDE");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Help you gain clarity on your career path & offer you the insight on how to climb the ladder. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "SELEF DEVELOPMENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Learn how to develop skills by yourself for your goals in various major fields. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "ELITE EMPACT");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, " Among the leaders in all industry, they both have a set of core beliefs that drive their success. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "section", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " We're Partner of Your Innovations ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " In our digital age, companies need an effective training courses to help them reach to new customers and emerging markets. Whether your organization is in agriculture, industrial sectors, or manufacturing, you need precise educational platform to connect with your target audience. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "ul", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Simple to integrate and easy to use");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Manage all your courses in one place");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.authservice.isUserLoggedIn());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 83204:
/*!***************************************************!*\
  !*** ./src/app/home/pages/home/home.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/setup/course.service */ 96002);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home-categories/home-categories.component */ 12600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/course-card/course-card.component */ 757);
/* harmony import */ var _shared_skeleton_home_crads_with_title_skeleton_home_crads_with_title_skeleton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/skeleton/home-crads-with-title-skeleton/home-crads-with-title-skeleton.component */ 58708);
/* harmony import */ var _shared_components_diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/diploma-card/diploma-card.component */ 93063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function HomeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function HomeComponent_div_4_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r13.scrollToSection("categories");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 6, "hey"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 8, "areYouReady"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 10, "takeGigStepInYour"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 12, "career"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 14, "beginYourJourneyNow"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 18, "startNow")), " ");
  }
}

function HomeComponent_div_5_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("error", function HomeComponent_div_5_ng_container_12_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r16.fileService.onError($event, ctx_r16.appAssets.homeCourseNoImg);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    var tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r15.fileService.previewPicture(ctx_r15.lastUserCourse == null ? null : ctx_r15.lastUserCourse.attach_path), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("routerLink", "/student/course/", ctx_r15.lastUserCourse.id, "/material/", ctx_r15.lastUserCourse.part_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r15.languageService.isArabic ? (tmp_2_0 = ctx_r15.lastUserCourse == null ? null : ctx_r15.lastUserCourse.ar_name) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ctx_r15.lastUserCourse == null ? null : ctx_r15.lastUserCourse.en_name : (tmp_2_0 = ctx_r15.lastUserCourse == null ? null : ctx_r15.lastUserCourse.en_name) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ctx_r15.lastUserCourse == null ? null : ctx_r15.lastUserCourse.ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("routerLink", "/student/course/", ctx_r15.lastUserCourse.id, "/material/", ctx_r15.lastUserCourse.part_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx_r15.lastUserCourse == null ? null : ctx_r15.lastUserCourse.part_name, " - ", ctx_r15.lastUserCourse == null ? null : ctx_r15.lastUserCourse.material_ar_name, " ");
  }
}

function HomeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, HomeComponent_div_5_ng_container_12_Template, 8, 8, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 6, "hey"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 8, ctx_r1.userName), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 10, "areYouReady"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 12, "continue"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 14, "learning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.lastUserCourse);
  }
}

function HomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r2.appAssets.gain_new_skills, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 6, "gainNewSkills"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r2.appAssets.keep_growing, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 8, "keepGrowing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r2.appAssets.automate_tasks, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 10, "automateTasks"));
  }
}

function HomeComponent_div_9_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "seeMore"));
  }
}

function HomeComponent_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-course-card", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("course", course_r20)("isContinue", true);
  }
}

function HomeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, HomeComponent_div_9_p_6_Template, 4, 3, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, HomeComponent_div_9_div_8_Template, 2, 2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "continueLearning")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r3.continueCourses == null ? null : ctx_r3.continueCourses.length) > 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](9, 7, ctx_r3.continueCourses, 0, 5));
  }
}

function HomeComponent_div_10_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "seeMore"));
  }
}

function HomeComponent_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-course-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("course", course_r23);
  }
}

function HomeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, HomeComponent_div_10_p_6_Template, 4, 3, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, HomeComponent_div_10_div_8_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "course.basicCourses")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r4.basicCourses == null ? null : ctx_r4.basicCourses.length) > 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](9, 7, ctx_r4.basicCourses, 0, 5));
  }
}

function HomeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-home-crads-with-title-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-home-crads-with-title-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function HomeComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " \u061F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "course.courses"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "learning"));
  }
}

function HomeComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "learning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, "course.courses"), " ? ");
  }
}

function HomeComponent_div_26_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "seeMore"));
  }
}

function HomeComponent_div_26_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-course-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("course", course_r26);
  }
}

function HomeComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, HomeComponent_div_26_p_6_Template, 4, 3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, HomeComponent_div_26_div_8_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "course.recommendedCourses")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r9.recommendedCourses == null ? null : ctx_r9.recommendedCourses.length) > 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](9, 7, ctx_r9.recommendedCourses, 0, 5));
  }
}

function HomeComponent_app_home_crads_with_title_skeleton_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-home-crads-with-title-skeleton");
  }
}

function HomeComponent_div_28_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "seeMore"));
  }
}

function HomeComponent_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-diploma-card", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var diploma_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("diploma", diploma_r29);
  }
}

function HomeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, HomeComponent_div_28_p_6_Template, 4, 3, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, HomeComponent_div_28_div_8_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "ourDiplomas")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r11.diplomas == null ? null : ctx_r11.diplomas.length) > 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](9, 7, ctx_r11.diplomas, 0, 5));
  }
}

function HomeComponent_app_home_crads_with_title_skeleton_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-home-crads-with-title-skeleton");
  }
}

var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent(authservice, appAssets, languageService, courseService, generalService, fileService) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);

    this.authservice = authservice;
    this.appAssets = appAssets;
    this.languageService = languageService;
    this.courseService = courseService;
    this.generalService = generalService;
    this.fileService = fileService;
    this.continueCourses = [];
    this.basicCourses = [];
    this.recommendedCourses = [];
    this.diplomas = [];
    this.isLoadedCourses = false;
    this.isLoadedDiplomas = false;
    this.userName = "";
    this.userId = 0; //get user data

    this.generalService.userData.subscribe(function (user) {
      _this.userName = user === null || user === void 0 ? void 0 : user.user.first_name.trim().split(" ")[0];

      if (_this.userId != (user === null || user === void 0 ? void 0 : user.user.user_ID)) {
        _this.userId = user === null || user === void 0 ? void 0 : user.user.user_ID;
        if (_this.userId > 0) _this.getAllDiplomas();
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.authservice.isUserLoggedIn()) {
        this.getAllEmployeeCourses();
        if (this.authservice.isStudent()) this.getLastUserCourse();
      }
    }
  }, {
    key: "getAllEmployeeCourses",
    value: function getAllEmployeeCourses() {
      var _this2 = this;

      this.courseService.getBasicAndRecommendedCourses().subscribe(function (res) {
        _this2.continueCourses = res.courses.filter(function (course) {
          return course.isCurrent;
        });
        _this2.basicCourses = res.courses.filter(function (course) {
          return course.basic && !course.isCurrent;
        });
        _this2.recommendedCourses = res.courses.filter(function (course) {
          return course.recommedned && !course.isCurrent;
        });
        _this2.isLoadedCourses = true; // console.log(
        //   this.continueCourses,
        //   this.basicCourses,
        //   this.recommendedCourses
        // );
      });
    }
  }, {
    key: "getLastUserCourse",
    value: function getLastUserCourse() {
      var _this3 = this;

      this.courseService.getLastCourseUser().subscribe(function (res) {
        if (res.returnValue != 0) _this3.lastUserCourse = res;
      });
    }
  }, {
    key: "getAllDiplomas",
    value: function getAllDiplomas() {
      var _this4 = this;

      this.courseService.getAllDiploma(this.userId).subscribe(function (res) {
        _this4.diplomas = res;
        _this4.isLoadedDiplomas = true;
      });
    }
  }, {
    key: "scrollToSection",
    value: function scrollToSection(className) {
      var element = document.getElementsByClassName(className)[0];

      if (element) {
        var top = element.offsetTop;
        window.scroll({
          top: top,
          behavior: "smooth"
        });
      }
    }
  }]);

  return HomeComponent;
}();

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__.AppAssets), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_7__.UploadFileService));
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 32,
  vars: 25,
  consts: [[1, "home", "main-pages-padding"], [1, "home-header"], [3, "isnavBar"], [1, "row", "first-row-info"], ["class", "col-md-6 col-12 description", 4, "ngIf"], [1, "col-md-6", "col-12", "px-0", "d-flex", "align-items-center", "justify-content-center", "pbottom-20"], ["alt", "login", "width", "90%", 3, "src"], ["class", "col-12 home-goals", 4, "ngIf"], ["class", "courses base-home-container", "style", "margin-top: -50px", 4, "ngIf"], ["class", "courses base-home-container", 4, "ngIf"], ["style", "margin-top: -65px", 4, "ngIf"], [1, "row", "mid-home-background"], [1, "col-md-4", "col-12", "text-center", "mtop-15"], ["alt", "mid-home", "width", "260", "height", "260", 3, "src"], [1, "col-md-8", "col-12", "text-container"], [4, "ngIf", "ngIfElse"], ["en", ""], [1, "dark-blue-btn", "radius-btn", 3, "click"], [1, "text-btn"], [4, "ngIf"], [1, "base-home-container", "categories"], [3, "isnavBar", "showTitle"], [1, "col-md-6", "col-12", "description"], [1, "main"], [1, "sub-1"], [1, "career"], [1, "sub-2", "roboto-regular"], [1, "orange-btn", "radius-btn", 3, "click"], [1, "part-video"], ["width", "350", "height", "210", 3, "src", "error"], [1, "far", "fa-play-circle", 3, "routerLink"], [1, "sub-3"], [1, "sub-4", "cursor-pointer", 3, "routerLink"], [1, "col-12", "home-goals"], [1, "row"], [1, "item", "col-md-3", "col-12"], [1, "icon", "col-md-4"], ["alt", "gain new skills", "width", "40", "height", "40", 3, "src"], [1, "col-md-6", "p-0"], ["alt", "keep growing", "width", "40", "height", "40", 3, "src"], ["alt", "automate tasks", "width", "40", "height", "40", 3, "src"], [1, "courses", "base-home-container", 2, "margin-top", "-50px"], [1, "home-section-header"], [1, "main-header-h3"], ["class", "see-more", "routerLink", "/student/mySpace", 4, "ngIf"], [1, "row", "course-cards"], ["class", "col-xl-5 col-lg-3 col-md-4 col-sm-6 col-12", 4, "ngFor", "ngForOf"], [2, "height", "18.2px"], ["routerLink", "/student/mySpace", 1, "see-more"], [1, "col-xl-5", "col-lg-3", "col-md-4", "col-sm-6", "col-12"], [3, "course", "isContinue"], [1, "courses", "base-home-container"], ["class", "see-more", "routerLink", "/student/basic-courses", 4, "ngIf"], ["routerLink", "/student/basic-courses", 1, "see-more"], [3, "course"], [2, "margin-top", "-65px"], [1, "learning"], ["class", "see-more", "routerLink", "/student/recommended-courses", 4, "ngIf"], ["routerLink", "/student/recommended-courses", 1, "see-more"], ["class", "see-more", "routerLink", "/student/diplomas", 4, "ngIf"], ["routerLink", "/student/diplomas", 1, "see-more"], [3, "diploma"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-home-categories", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 19, 20, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 13, 16, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 23, 12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 11, 11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 10, 11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, HomeComponent_ng_container_19_Template, 7, 6, "ng-container", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, HomeComponent_ng_template_20_Template, 5, 6, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_22_listener() {
        return ctx.scrollToSection(ctx.authservice.isUserLoggedIn() ? "courses" : "categories");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 10, 11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, HomeComponent_app_home_crads_with_title_skeleton_27_Template, 1, 0, "app-home-crads-with-title-skeleton", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, HomeComponent_div_28_Template, 10, 11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, HomeComponent_app_home_crads_with_title_skeleton_29_Template, 1, 0, "app-home-crads-with-title-skeleton", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](31, "app-home-categories", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](21);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isnavBar", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("user-home", ctx.authservice.isUserLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.authservice.isUserLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx.appAssets.login, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.authservice.isUserLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn() && (ctx.continueCourses == null ? null : ctx.continueCourses.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn() && (ctx.basicCourses == null ? null : ctx.basicCourses.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn() && !ctx.isLoadedCourses);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx.appAssets.mid_home, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 21, "readyToExploreOur"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.languageService.isArabic)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](25, 23, "LetGetStarted"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn() && (ctx.recommendedCourses == null ? null : ctx.recommendedCourses.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn() && !ctx.isLoadedCourses);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn() && (ctx.diplomas == null ? null : ctx.diplomas.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.authservice.isUserLoggedIn() && !ctx.isLoadedDiplomas);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isnavBar", false)("showTitle", true);
    }
  },
  directives: [_home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_8__.HomeCategoriesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _shared_components_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_9__.CourseCardComponent, _shared_skeleton_home_crads_with_title_skeleton_home_crads_with_title_skeleton_component__WEBPACK_IMPORTED_MODULE_10__.HomeCradsWithTitleSkeletonComponent, _shared_components_diploma_card_diploma_card_component__WEBPACK_IMPORTED_MODULE_11__.DiplomaCardComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe],
  styles: [".home.main-pages-padding[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.home-header[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  background-image: radial-gradient(circle at 50% 50%, #fff 7%, #e2eaf0 46%);\n  padding-top: 25px;\n  border-radius: 0 0 200px 200px;\n  margin-bottom: 90px;\n}\n\n\n\n.first-row-info[_ngcontent-%COMP%] {\n  padding: 0 60px 0 110px;\n  margin: 80px 0 0;\n  justify-content: space-around;\n  position: relative;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n  color: #193141;\n  padding: 0 30px;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  line-height: 1.3;\n  letter-spacing: 0.72px;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .sub-1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  line-height: 1.35;\n  letter-spacing: 1px;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .sub-1[_ngcontent-%COMP%]   .career[_ngcontent-%COMP%] {\n  color: #e86820;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .sub-2[_ngcontent-%COMP%] {\n  font-family: Roboto-Regular, sans-serif !important;\n  font-size: 20px;\n  line-height: 1.71;\n  letter-spacing: 0.41px;\n  color: #8a8a8a;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .sub-3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.3;\n  letter-spacing: 0.5px;\n  color: #193141;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .sub-4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.3;\n  letter-spacing: 0.5px;\n  color: #437a9f;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .part-video[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .part-video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .part-video[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 70px;\n  color: #e86820;\n  cursor: pointer;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 210px;\n  margin-top: 20px;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .home-goals[_ngcontent-%COMP%] {\n  margin: 50px 0 -50px 0;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .home-goals[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  gap: 10px 0;\n  justify-content: space-around;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .home-goals[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 35px 30px;\n  border-radius: 40px;\n  background-color: #437a9f;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .home-goals[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: space-around;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .home-goals[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.first-row-info[_ngcontent-%COMP%]   .home-goals[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 23px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n\n\n.mid-home-background[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  padding: 20px 50px;\n}\n\n.mid-home-background[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.mid-home-background[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 40px;\n  font-weight: bold;\n  line-height: 1.35;\n  color: #050c26;\n  text-align: center;\n}\n\n.mid-home-background[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .learning[_ngcontent-%COMP%] {\n  color: #e86820;\n}\n\n.mid-home-background[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 70px;\n}\n\n.user-home[_ngcontent-%COMP%] {\n  padding-bottom: 80px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxzdHlsZS1jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQSx1RUFBQTs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxjQ3ZCYztFRHdCZCxlQUFBO0FBREo7O0FBR0k7RUFDRSxTQUFBO0FBRE47O0FBSUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRk47O0FBS0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSE47O0FBS007RUFDRSxjQy9DSztBRDRDYjs7QUFPSTtFQUNFLGtEQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBTE47O0FBUUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0M3RFk7QUR1RGxCOztBQVNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNDcEVPO0FENkRiOztBQVVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFSTjs7QUFVTTtFQUNFLGVBQUE7QUFSUjs7QUFXTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDMUZLO0VEMkZMLGVBQUE7QUFUUjs7QUFhSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFYTjs7QUFlRTtFQUNFLHNCQUFBO0FBYko7O0FBZUk7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7QUFiTjs7QUFnQkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDNUdPO0FEOEZiOztBQWdCTTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFkUjs7QUFnQlE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWRWOztBQWlCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFmVjs7QUFzQkEsK0RBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQW5CSjs7QUFxQkk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFuQk47O0FBcUJNO0VBQ0UsY0NoS0s7QUQ2SWI7O0FBdUJJO0VBQ0Usa0JBQUE7QUFyQk47O0FBMEJBO0VBQ0UsK0JBQUE7QUF2QkYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhc3NldHMvc2Fzcy9zdHlsZS1jb25zdGFudHNcIjtcclxuXHJcbi5ob21lLm1haW4tcGFnZXMtcGFkZGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5ob21lLWhlYWRlciB7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsICNmZmYgNyUsICNlMmVhZjAgNDYlKTtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMjAwcHggMjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxufVxyXG5cclxuLyogIyMjIyMjIyMjIyMjIyMjIyMjIyMgZmlyc3Qgc2VjdGlvbiA+IG5vIGxvZ2luICMjIyMjIyMjIyMjIyMjIyMjIyMjICovXHJcbi5maXJzdC1yb3ctaW5mbyB7XHJcbiAgcGFkZGluZzogMCA2MHB4IDAgMTEwcHg7XHJcbiAgbWFyZ2luOiA4MHB4IDAgMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgY29sb3I6ICRkYXJrLWJsdWUtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjcycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi0xIHtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG4gICAgICAuY2FyZWVyIHtcclxuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3ViLTIge1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNDFweDtcclxuICAgICAgY29sb3I6ICM4YThhOGE7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi0zIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBjb2xvcjogJGRhcmstYmx1ZS1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3ViLTQge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAucGFydC12aWRlbyB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWF4LXdpZHRoOiAyMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ob21lLWdvYWxzIHtcclxuICAgIG1hcmdpbjogNTBweCAwIC01MHB4IDA7XHJcblxyXG4gICAgJiA+IC5yb3cge1xyXG4gICAgICBnYXA6IDEwcHggMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAzNXB4IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG5cclxuICAgICAgJiA+IC5yb3cge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogIyMjIyMjIyMjIyMjIyMjIyMjIyMgbWlkIGV4cGxvcmUgbW9yZSAjIyMjIyMjIyMjIyMjIyMjIyMjIyAqL1xyXG4ubWlkLWhvbWUtYmFja2dyb3VuZCB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgcGFkZGluZzogMjBweCA1MHB4O1xyXG5cclxuICAudGV4dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICAgIGNvbG9yOiAjMDUwYzI2O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAubGVhcm5pbmcge1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggNzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWhvbWUge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiJG1haW4tY29sb3I6ICNlODY4MjA7XHJcbiRtYWluLWxpZ2h0LWNvbG9yOiAjZmI2MjM5O1xyXG4kZXJyb3ItY29sb3I6ICNmNTUyNTI7XHJcbiRkYXJrLWJsdWUtY29sb3I6ICMxOTMxNDE7XHJcbiRibHVlLWNvbG9yOiAjNDM3YTlmO1xyXG4kZm9udEF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4kbWluLWNvbnRhaW5lci1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuJGlucHV0LXJhZGl1czogMTVweDtcclxuJHJlZC1jb2xvcjogI2QxMDMxYjtcclxuJGdyZWVuLWNvbG9yOiAjMjU4ZjZlO1xyXG4iXX0= */"]
});

/***/ }),

/***/ 98871:
/*!*********************************************************************************!*\
  !*** ./src/app/home/pages/see-more-categories/see-more-categories.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeMoreCategoriesComponent": function() { return /* binding */ SeeMoreCategoriesComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home-categories/home-categories.component */ 12600);





var SeeMoreCategoriesComponent = /*#__PURE__*/function () {
  function SeeMoreCategoriesComponent() {
    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SeeMoreCategoriesComponent);
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SeeMoreCategoriesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return SeeMoreCategoriesComponent;
}();

SeeMoreCategoriesComponent.ɵfac = function SeeMoreCategoriesComponent_Factory(t) {
  return new (t || SeeMoreCategoriesComponent)();
};

SeeMoreCategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SeeMoreCategoriesComponent,
  selectors: [["app-see-more-categories"]],
  decls: 4,
  vars: 3,
  consts: [[1, "emp-see-more-background", "general-emp-background-photo"], [1, "base-home-container", "main-pages-padding"], ["title", "categories.categories", 3, "isnavBar", "showTitle", "showAllItems"]],
  template: function SeeMoreCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-home-categories", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isnavBar", false)("showTitle", true)("showAllItems", true);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent, _home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_2__.HomeCategoriesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWUtbW9yZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map