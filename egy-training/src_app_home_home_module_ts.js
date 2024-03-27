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

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map