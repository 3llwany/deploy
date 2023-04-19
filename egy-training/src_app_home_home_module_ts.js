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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-index/home-index.component */ 43986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: "",
  component: _pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__.HomeIndexComponent
}];
var HomeRoutingModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeRoutingModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeRoutingModule);
});

HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
};

HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: HomeRoutingModule
});
HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-index/home-index.component */ 43986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var HomeModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeModule);
});

HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};

HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_pages_home_index_home_index_component__WEBPACK_IMPORTED_MODULE_2__.HomeIndexComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule]
  });
})();

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
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_student_services_teacherSubjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/student/services/teacherSubjects.service */ 89591);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);






var HomeIndexComponent = /*#__PURE__*/function () {
  function HomeIndexComponent(authservice, TeacherSubServ, MessagesService) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeIndexComponent);

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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeIndexComponent, [{
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
  decls: 215,
  vars: 0,
  consts: [[1, "mainhomearticletag"], [1, "bannermain2"], [1, "row"], [1, "col-12", "col-lg-4", "col-md-4", "align-self-center"], [1, "contenttopmask"], [1, "has-lr-font-size", "d-block", "mb-3"], [1, "has-xxl-font-size"], [1, "has-s-font-size"], [1, "col-12", "col-lg-8", "col-md-8"], [1, "block-mask"], ["src", "assets/img/header3-mask.svg", "alt", "", 1, "img-mask-borders"], [1, "Whysection"], [1, "section-title", "d-block"], [1, "has-lr-font-size", "mb-5"], [1, "whyinnercontent"], [1, "paragraph", "container"], [1, "text-lg-center", "has-xlr-font-size"], [1, "text-lg-center", "has-m-font-size"], [1, "container", "mb-2"], [1, "col-12", "col-md-6"], [1, "icon-text", "mt-0", "my-lg-2"], [1, "row", "no-gutters"], [1, "col-12", "col-lg-2", "text-center", "align-items-center"], ["src", "assets/img/Automate-Frequent-Administrative-Processes.gif", 1, "img-fluid", "iconmdh"], [1, "col-12", "col-lg-10", "text-lg-left"], [1, "has-m-font-size", "wrap-title", 2, "width", "100%", "line-height", "20px"], [1, "reg-font", 2, "width", "100%"], ["src", "assets/img/Save-Time-Course-Creation.gif", 1, "img-fluid", "iconmdh"], [1, "wp-bootstrap-blocks-row", "row"], ["src", "assets/img/Enjoy-Simple-Course-Creation.gif", 1, "img-fluid", "iconmdh"], ["src", "assets/img/Reduce-Your-Training-Costs-Significantly.gif", 1, "img-fluid", "iconmdh"], [1, "aboutsection"], [1, "section", "has-background", 2, "--color", "#2CD1F8"], ["width", "100%", "height", "100%", "viewBox", "0 0 308 77", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M-8.56945 76.4533L295.54 75.1594C299.653 75.1443 303.068 71.3993 303.413 66.5234C304.352 53.2336 306.088 27.7815 306.896 13.4674C307.344 5.54976 302.349 -0.363444 296.247 0.0763605C280.728 1.19763 20.01 21.0438 5.18865 22.3107C-1.77437 22.9045 -6.12099 26.2743 -7.76865 32.9221C-10.3098 43.1996 -12.7995 53.504 -15.0549 63.8819C-15.3166 65.0916 -15.4988 66.233 -15.6015 67.2925C-16.0718 72.203 -12.7228 76.4687 -8.56945 76.4533Z"], [1, "container"], [1, "col-lg-12", "px-lg-8"], [1, "has-xl-font-size"], [1, "has-m-font-size"], [1, "section", "has-background", 2, "--color", "#FF9C00"], [1, "section", 2, "--color", "#FF9C00"], [1, "col-lg-12", "pl-lg-8", "px-lg-0"], [1, "col-12", "col-md-12", "col-lg-6"], [1, "content-list"], [1, "list-item", "no-heading", "my-5"], [1, "mb-lg-0"], [1, "mb-lg-0", "mb-0"], [1, "block-mask", "block-mask2", "mb-5", "mb-lg-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "viewBox", "0 0 573 256.001"], ["id", "mask-sm", "d", "M572,4239H-1V3983H572v256ZM15.615,3985a11.184,11.184,0,0,0-5.689,1.583,15.33,15.33,0,0,0-4.646,4.316A24.348,24.348,0,0,0,1,4005.138v211.455a24.348,24.348,0,0,0,4.281,14.24,15.336,15.336,0,0,0,4.646,4.316,11.187,11.187,0,0,0,5.689,1.583l521.09-64.831a15.835,15.835,0,0,0,6-1.2,19.246,19.246,0,0,0,5.581-3.548,29.028,29.028,0,0,0,8.1-13.78L571,4005.138a24.348,24.348,0,0,0-4.281-14.24,15.33,15.33,0,0,0-4.646-4.316,11.184,11.184,0,0,0-5.689-1.583Z", "transform", "translate(1 -3983)", "fill", "#fff"], [1, "block-mask", "block-mask3", "mb-5", "mb-lg-0"], [1, "boostssection"], [1, "container-fluid", "container-limits", "wp-block-group", "mt-2", "mb-6", "block_help", "has-shape", "style1", "boostsb"], [1, "row", 2, "position", "relative", "z-index", "2"], ["decoding", "async", "src", "assets/img/stats_bg-1.png", "alt", "", 1, "main_back", "position-absolute", 2, "top", "0", "left", "calc(100vw - 1852px - 10%)"], [1, "container", "help-container", "help-inner-container", 2, "height", "712px"], [1, "row", "h-100"], [1, "col-12", "col-lg-7", "align-self-center"], [1, "help-content-area"], [1, "block-content", "block-responsive-center"], [1, "col-12"], [1, "has-xl-font-size", "text-center", "text-lg-left", "has-lg-font-size"], [1, "row", "justify-content-center"], [1, "col-12", "bb-1", "col-md-4", "py-5", "py-lg-0", "text-center", "text-lg-left", "pr-lg-3", "br-1"], [1, "has-xs-font-size", "px-4", "px-md-0", "mb-0"], [1, "col-12", "bb-1", "col-md-4", "py-5", "py-lg-0", "text-center", "text-lg-left", "px-lg-3", "br-1"], [1, "col-12", "col-md-4", "py-5", "py-lg-0", "text-center", "text-lg-left", "px-lg-3"], ["aria-hidden", "true", 1, "wp-block-spacer", 2, "height", "22px"], [1, "has-xs-font-size"], ["data-background-image", "", "data-loaded", "true", 1, "col-12", "col-lg-5", "lozad", "d-flex", "justify-content-left", "align-items-end", "fade-in", 2, "background-size", "contain", "background-repeat", "no-repeat", "background-position", "bottom"], [1, "wp-block-image", "size-large", "w-100", "text-center", "d-none", "d-lg-block"], ["src", "assets/img/shut.png", "data-loaded", "true", 1, "img-fluid"]],
  template: function HomeIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " How employee training helps ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "great teams grow");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " When it comes to staff training, the right employee training software tool makes all the difference. Discover how TalentEgypt Training unlocks your team\u2019s full potential with online employee training. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h2", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "WHY CHOOSE AN Egypt Training?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h2", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " How an Egypt Training ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "transforms employee training");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Online employee training software makes it incredibly simple to develop, deliver, and manage the staff training programs that help great teams grow. It doesn\u2019t matter whether you\u2019re a multi-national or a small business. Making the switch from classroom-based training to a learning management system (Egypt Training) brings big benefits for businesses of any size. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Automate repetitive tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Take the hassle out of day-to-day administration by easily automating repeatable tasks like grading tests and assignments. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Automate repetitive tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " Take the hassle out of day-to-day administration by easily automating repeatable tasks like grading tests and assignments. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Automate repetitive tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, " Take the hassle out of day-to-day administration by easily automating repeatable tasks like grading tests and assignments. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Automate repetitive tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Take the hassle out of day-to-day administration by easily automating repeatable tasks like grading tests and assignments. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "section", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "h2", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "ABOUT EMPLOYEE TRAINING");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "path", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, " What is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " employee training and development?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, " When employee training and development is successful, it transforms individual employees and entire businesses \u2014 helping teams improve today and continue growing long-term. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, " But employee training and employee development play slightly different roles. Training programs teach employees skills for the position they\u2019re currently in. While development programs give employees the tools they need to keep growing throughout their careers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, " Together, employee training and development lead to smarter, more capable, and more successful teams. The use of the right employee training software can have a huge impact on the successful training of your whole team. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "path", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " How employee training ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, " benefits the entire business");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, " Employee training and development isn\u2019t just nice to have. It\u2019s a major factor in driving business success. Organizations that invest in nurturing talent enjoy more stability, higher engagement, and significant growth down the line. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](114, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, " The case for corporate training is an easy one to make. Strong employee training has been proven to lower turnover, increase profits, and keep businesses competitive. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](117, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, " Employee training doesn\u2019t just benefit employees: it benefits the organization as a whole. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "How company training benefits employees:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "ul", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Employees gain new skills and stay current with industry standards.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Steady growth and improvement lead to more capable and confident employees.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Strong employee training keeps company morale and motivation high.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "p", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Improves all measures of job satisfaction.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "svg", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "path", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "svg", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "path", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](155, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "How company training benefits employees:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "ul", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "Employees gain new skills and stay current with industry standards.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Steady growth and improvement lead to more capable and confident employees.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Strong employee training keeps company morale and motivation high.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "p", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "Improves all measures of job satisfaction.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "section", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](176, "img", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "h3", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "Employee training boosts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, "satisfaction, retention, and engagement");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "94%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "p", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "would stay longer with a company that invested in their career.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "51%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "p", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, "would leave their job if their company didn\u2019t offer training.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "76%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "p", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207, "ranked training and opportunities for growth among the top three non-financial motivators.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](208, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "p", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](211, "1. LinkedIn Learning | 2. Udemy | 3. Corbett Inc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](212, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "figure", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](214, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map