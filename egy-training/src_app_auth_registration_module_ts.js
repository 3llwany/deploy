"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["src_app_auth_registration_module_ts"],{

/***/ 46111:
/*!***************************************************************!*\
  !*** ./src/app/auth/access-denied/access-denied.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessDeniedComponent": function() { return /* binding */ AccessDeniedComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






var _c0 = function _c0() {
  return ["/"];
};

var AccessDeniedComponent = /*#__PURE__*/function () {
  function AccessDeniedComponent() {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AccessDeniedComponent);
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AccessDeniedComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AccessDeniedComponent;
}();

AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) {
  return new (t || AccessDeniedComponent)();
};

AccessDeniedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccessDeniedComponent,
  selectors: [["app-access-denied"]],
  decls: 15,
  vars: 5,
  consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/lock.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]],
  template: function AccessDeniedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Access Denied!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "You don't have access to this page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 2, "General.BackToHome"), " ");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 16912:
/*!***************************************************************************!*\
  !*** ./src/app/auth/educational-details/educational-details.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalDetailsComponent": function() { return /* binding */ EducationalDetailsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EducationalDetailsComponent_ngb_alert_16_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngb-alert", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function EducationalDetailsComponent_ngb_alert_16_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r7.isFailed = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.errMsg);
  }
}

function EducationalDetailsComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var stage_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", stage_r9.stage_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", stage_r9.stage_name, " ");
  }
}

function EducationalDetailsComponent_mat_hint_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function EducationalDetailsComponent_mat_hint_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EducationalDetailsComponent_mat_hint_27_span_1_Template, 3, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.FormCtrls.stageID.errors == null ? null : ctx_r2.FormCtrls.stageID.errors.required);
  }
}

function EducationalDetailsComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var year_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", year_r11.educational_year_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", year_r11.educational_year_name, " ");
  }
}

function EducationalDetailsComponent_mat_hint_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function EducationalDetailsComponent_mat_hint_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EducationalDetailsComponent_mat_hint_37_span_1_Template, 3, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrls.EduYearID.errors == null ? null : ctx_r4.FormCtrls.EduYearID.errors.required);
  }
}

function EducationalDetailsComponent_mat_hint_43_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function EducationalDetailsComponent_mat_hint_43_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function EducationalDetailsComponent_mat_hint_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EducationalDetailsComponent_mat_hint_43_span_1_Template, 4, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EducationalDetailsComponent_mat_hint_43_span_2_Template, 3, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrls.parentName.errors == null ? null : ctx_r5.FormCtrls.parentName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.FormCtrls.parentName.errors == null ? null : ctx_r5.FormCtrls.parentName.errors.whiteSpace) || (ctx_r5.FormCtrls.parentName.errors == null ? null : ctx_r5.FormCtrls.parentName.errors.pattern));
  }
}

function EducationalDetailsComponent_mat_hint_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function EducationalDetailsComponent_mat_hint_49_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "labels.MobileLength"), " ");
  }
}

function EducationalDetailsComponent_mat_hint_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EducationalDetailsComponent_mat_hint_49_span_1_Template, 4, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EducationalDetailsComponent_mat_hint_49_span_2_Template, 4, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r6.FormCtrls.parentPhoneNumber.errors == null ? null : ctx_r6.FormCtrls.parentPhoneNumber.errors.required) || (ctx_r6.FormCtrls.parentPhoneNumber.errors == null ? null : ctx_r6.FormCtrls.parentPhoneNumber.errors.whiteSpace) || (ctx_r6.FormCtrls.parentPhoneNumber.errors == null ? null : ctx_r6.FormCtrls.parentPhoneNumber.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r6.FormCtrls.parentPhoneNumber.errors == null ? null : ctx_r6.FormCtrls.parentPhoneNumber.errors.minlength) || (ctx_r6.FormCtrls.parentPhoneNumber.errors == null ? null : ctx_r6.FormCtrls.parentPhoneNumber.errors.maxlength));
  }
}

var EducationalDetailsComponent = /*#__PURE__*/function () {
  function EducationalDetailsComponent(authService, generalServ, studentServ, fb, router, toaster, spinner) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EducationalDetailsComponent);

    this.authService = authService;
    this.generalServ = generalServ;
    this.studentServ = studentServ;
    this.fb = fb;
    this.router = router;
    this.toaster = toaster;
    this.spinner = spinner;
    this.EduStages = [];
    this.EduYears = [];
    this.submitted = false;
    this.isFailed = false;
    this.errMsg = "";
    this.matcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.ErrorStateMatcher();
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EducationalDetailsComponent, [{
    key: "canDeactivate",
    value: function canDeactivate() {
      if (this.myForm.valid) return true;else return false;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getEduStagesList();
      this.myForm = this.fb.group({
        stageID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        EduYearID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        parentName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[a-zA-Z \u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]+$/)]],
        parentPhoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9_\-\(\)\S*$]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(11)]]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    } //Return Educational Stages List

  }, {
    key: "getEduStagesList",
    value: function getEduStagesList() {
      var _this = this;

      this.generalServ.getAllEduStagesList().subscribe(function (res) {
        _this.EduStages = res;
      });
    } //Return Educational Years List By Stage Id

  }, {
    key: "getEduYearByStageId",
    value: function getEduYearByStageId(stageId) {
      var _this2 = this;

      this.EduYears = [];
      this.FormCtrls.EduYearID.setValue("");

      if (stageId) {
        this.generalServ.getEduYearByStageId(stageId).subscribe(function (res) {
          _this2.EduYears = res;
        });
      }
    } // Save Student Educational Stage Data

  }, {
    key: "SaveStudenStage",
    value: function SaveStudenStage() {
      var _this3 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        this.spinner.show();
        this.studentServ.SaveStudenStage(this.myForm.value).subscribe(function (res) {
          _this3.spinner.hide();

          if (res.returnValue == 1) {
            _this3.isFailed = false;

            _this3.toaster.success("تم انشاء الحساب بنجاح، من فضلك قم بتسجيل الدخول ");

            _this3.authService.logout();

            _this3.router.navigateByUrl("/auth/login");
          } else {
            _this3.isFailed = true;
            _this3.errMsg = res.returnString;
          }
        });
      }
    }
  }]);

  return EducationalDetailsComponent;
}();

EducationalDetailsComponent.ɵfac = function EducationalDetailsComponent_Factory(t) {
  return new (t || EducationalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_5__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

EducationalDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EducationalDetailsComponent,
  selectors: [["app-educational-details"]],
  hostBindings: function EducationalDetailsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("beforeunload", function EducationalDetailsComponent_beforeunload_HostBindingHandler() {
        return ctx.canDeactivate();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    }
  },
  decls: 56,
  vars: 37,
  consts: [["id", "regestration", 1, "auth-height"], [1, "row", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/register.png", "alt", "", "width", "350", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "card-title", "mb-2"], ["type", "light-danger", "class", "mb-2", 3, "close", 4, "ngIf"], [3, "formGroup"], ["appearance", "fill"], ["formControlName", "stageID", 3, "errorStateMatcher", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "EduYearID", 3, "errorStateMatcher"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "parentName", "placeholder", "Parent Name"], ["matInput", "", "type", "text", "formControlName", "parentPhoneNumber", "placeholder", "Parent Mobile"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["type", "light-danger", 1, "mb-2", 3, "close"], [1, "mb-0"], [3, "value"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"]],
  template: function EducationalDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, EducationalDetailsComponent_ngb_alert_16_Template, 3, 1, "ngb-alert", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EducationalDetailsComponent_Template_mat_select_selectionChange_22_listener() {
        return ctx.getEduYearByStageId(ctx.FormCtrls.stageID == null ? null : ctx.FormCtrls.stageID.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, EducationalDetailsComponent_mat_option_26_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, EducationalDetailsComponent_mat_hint_27_Template, 2, 1, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, EducationalDetailsComponent_mat_option_36_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, EducationalDetailsComponent_mat_hint_37_Template, 2, 1, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, EducationalDetailsComponent_mat_hint_43_Template, 3, 2, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, EducationalDetailsComponent_mat_hint_49_Template, 3, 2, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EducationalDetailsComponent_Template_a_click_52_listener() {
        return ctx.SaveStudenStage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 19, "auth.ConfirmRegister"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 21, "auth.CompleteRegisterMsg"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 23, "labels.Stage"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 25, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.EduStages);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.stageID.invalid && (ctx.FormCtrls.stageID.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 27, "labels.Year"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](35, 29, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.EduYears);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.EduYearID.invalid && (ctx.FormCtrls.EduYearID.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 31, "labels.ParentName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.parentName.invalid && (ctx.FormCtrls.parentName.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 33, "labels.ParentMobile"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.parentPhoneNumber.invalid && (ctx.FormCtrls.parentPhoneNumber.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](54, 35, "General.Confirm"), " ");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbAlert, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb25hbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 85427:
/*!***********************************************!*\
  !*** ./src/app/auth/error/error.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": function() { return /* binding */ ErrorComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ 78530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








var _c0 = function _c0() {
  return ["/"];
};

var ErrorComponent = /*#__PURE__*/function () {
  function ErrorComponent() {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorComponent);

    this.jsonAssets = app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_2__.JsonAssets;
    this.options = {
      path: this.jsonAssets.serverError
    };
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ErrorComponent;
}();

ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
};

ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-access-denied"]],
  decls: 13,
  vars: 6,
  consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], [1, "lottie", "align-items-center"], [3, "options"], [1, "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ng-lottie", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "an error occurred!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 3, "General.BackToHome"), " ");
    }
  },
  directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_4__.LottieComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 13866:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": function() { return /* binding */ ForgotPasswordComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function ForgotPasswordComponent_div_10_ngb_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function ForgotPasswordComponent_div_10_ngb_alert_7_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r4.isFailed = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.errMsg);
  }
}

function ForgotPasswordComponent_div_10_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function ForgotPasswordComponent_div_10_mat_hint_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " please enter a correct email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ForgotPasswordComponent_div_10_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-hint", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ForgotPasswordComponent_div_10_mat_hint_14_span_1_Template, 4, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ForgotPasswordComponent_div_10_mat_hint_14_span_2_Template, 3, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.email.errors == null ? null : ctx_r3.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.email.errors == null ? null : ctx_r3.email.errors.email);
  }
}

function ForgotPasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ForgotPasswordComponent_div_10_ngb_alert_7_Template, 3, 1, "ngb-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ForgotPasswordComponent_div_10_mat_hint_14_Template, 3, 2, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_10_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r8.forgotPassword();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, "auth.RecoverPassword"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 10, "auth.RecoverPasswordMsg"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.resetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 12, "labels.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.email.invalid && (ctx_r0.email.touched || ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 14, "General.SendCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 16, "auth.BackToLogin"), " ");
  }
}

function ForgotPasswordComponent_div_11_ngb_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function ForgotPasswordComponent_div_11_ngb_alert_7_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r13.isFailed = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.errMsg);
  }
}

function ForgotPasswordComponent_div_11_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function ForgotPasswordComponent_div_11_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-hint", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ForgotPasswordComponent_div_11_mat_hint_14_span_1_Template, 4, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r11.newPassCtrls.verificationCode.errors == null ? null : ctx_r11.newPassCtrls.verificationCode.errors.required) || (ctx_r11.newPassCtrls.verificationCode.errors == null ? null : ctx_r11.newPassCtrls.verificationCode.errors.whiteSpace));
  }
}

function ForgotPasswordComponent_div_11_mat_hint_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function ForgotPasswordComponent_div_11_mat_hint_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-hint", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ForgotPasswordComponent_div_11_mat_hint_20_span_1_Template, 4, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.newPassCtrls.new_password.errors == null ? null : ctx_r12.newPassCtrls.new_password.errors.required);
  }
}

function ForgotPasswordComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ForgotPasswordComponent_div_11_ngb_alert_7_Template, 3, 1, "ngb-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ForgotPasswordComponent_div_11_mat_hint_14_Template, 2, 1, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ForgotPasswordComponent_div_11_mat_hint_20_Template, 2, 1, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_11_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r17.resetPassword();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, "auth.NewPassword"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 11, "auth.EnterVerificationCodeMsg"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.newPassForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 13, "auth.VerificationCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.newPassCtrls.verificationCode.invalid && (ctx_r1.newPassCtrls.verificationCode.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 15, "auth.NewPassword"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.newPassCtrls.new_password.invalid && (ctx_r1.newPassCtrls.new_password.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 17, "General.Save"), " ");
  }
}

var ForgotPasswordComponent = /*#__PURE__*/function () {
  function ForgotPasswordComponent(authServ, router, fb, toastr, spinner) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ForgotPasswordComponent);

    this.authServ = authServ;
    this.router = router;
    this.fb = fb;
    this.toastr = toastr;
    this.spinner = spinner;
    this.submitted = false;
    this.isFailed = false;
    this.errMsg = "";
    this.ifHaveCode = false;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ForgotPasswordComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.resetForm = this.fb.group({
        email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]]
      });
      this.newPassForm = this.fb.group({
        verificationCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        new_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]]
      });
    }
  }, {
    key: "email",
    get: function get() {
      return this.resetForm.controls["email"];
    }
  }, {
    key: "newPassCtrls",
    get: function get() {
      return this.newPassForm.controls;
    } // START Forgot Password

  }, {
    key: "forgotPassword",
    value: function forgotPassword() {
      var _this = this;

      if (this.resetForm.valid) {
        this.spinner.show();
        this.authServ.forgotPassword(this.resetForm.value).subscribe(function (res) {
          console.log(res);

          if (res.returnValue == 0) {
            _this.ifHaveCode = true;
            _this.isFailed = false;
            _this.errMsg = "تم إرسال كود التأكيد الي البريد الإلكتروني الخاص بك";
          } else {
            _this.ifHaveCode = false;
            _this.isFailed = true;
            _this.errMsg = res.returnString;
          }

          _this.spinner.hide();
        });
      }
    } // START Forgot Password

  }, {
    key: "resetPassword",
    value: function resetPassword() {
      var _this2 = this;

      this.isFailed = false;

      if (this.newPassCtrls.valid) {
        this.spinner.show();
        this.authServ.resetPassword(this.newPassCtrls.value).subscribe(function (res) {
          console.log(res);

          if (res.returnValue == -1 && res.returnString == "Verification code is invalid.") {
            _this2.isFailed = true;
            _this2.errMsg = res.returnString;
          } else if (res.returnValue == 0 && res.returnString == "Password changed successfully.") {
            _this2.router.navigateByUrl("auth/login");

            _this2.toastr.success(" تم تغير كلمة المرور بنجاح قم بتسجيل الدخول بكلمة المرور الجديدة");
          }

          _this2.spinner.hide();
        });
      }
    }
  }]);

  return ForgotPasswordComponent;
}();

ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService));
};

ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["app-forgot-password"]],
  decls: 12,
  vars: 2,
  consts: [["id", "forgot-password", 1, "auth-height"], [1, "row", "full-height-vh", "m-0", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-12"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "/assets/img/gallery/forgot.png", "alt", "", "width", "260", "height", "230", 1, "img-fluid"], ["class", "col-lg-6 col-md-12 px-4 py-3", 4, "ngIf"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [1, "card-text", "mb-3"], ["type", "light-danger", "class", "mb-2", 3, "close", 4, "ngIf"], [3, "formGroup"], ["appearance", "legacy"], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email"], ["class", "text-danger", 4, "ngIf"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-between"], ["mat-raised-button", "", 1, "btn", "btn-primary", "ml-sm-1", 3, "click"], ["mat-raised-button", "", "routerLink", "/auth/login", 1, "btn", "bg-light-primary", "mb-2", "mb-sm-0"], ["type", "light-danger", 1, "mb-2", 3, "close"], [1, "mb-0"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], ["matInput", "", "type", "text", "placeholder", "Enter verification code", "formControlName", "verificationCode", "autocomplete", "off"], ["matInput", "", "type", "password", "placeholder", "Enter New Password", "formControlName", "new_password", "autocomplete", "off"], ["mat-raised-button", "", 1, "btn", "btn-primary", "ml-sm-1", "flex-right", 3, "click"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ForgotPasswordComponent_div_10_Template, 23, 18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ForgotPasswordComponent_div_11_Template, 26, 19, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ifHaveCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ifHaveCode);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbAlert, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 73099:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-page.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": function() { return /* binding */ LoginPageComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ 54696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function LoginPageComponent_ngb_alert_22_Template(rf, ctx) {
  if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngb-alert", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closed", function LoginPageComponent_ngb_alert_22_Template_ngb_alert_closed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r1.isFailed = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, ctx_r0.errMsg));
  }
}

var LoginPageComponent = /*#__PURE__*/function () {
  function LoginPageComponent(router, fb, authService, spinner, route, appAssets) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginPageComponent);

    this.router = router;
    this.fb = fb;
    this.authService = authService;
    this.spinner = spinner;
    this.route = route;
    this.appAssets = appAssets;
    this.submitted = false;
    this.isFailed = false;
    this.errMsg = "";
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginPageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams["returnUrl"];
      this.loginForm = this.fb.group({
        account_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
        account_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.loginForm.controls;
    } // login

  }, {
    key: "login",
    value: function login() {
      var _this = this;

      this.submitted = true;

      if (this.loginForm.valid) {
        this.spinner.show();
        this.authService.login(this.loginForm.value).subscribe(function (res) {
          var _a, _b;

          _this.spinner.hide();

          _this.submitted = false;
          _this.isFailed = false;

          if (res.returnValue == 0) {
            //TOKEN
            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setToken(res.authToken.token); // IsUserLoggedIn

            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setIsUserLoggedIn(true); // user type id

            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setUserTypeId(res.user_type_id); // year Id

            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setYearId(res.yearId); // userId

            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setUserId(res.user_id); // Educomp list

            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.setEduCompList(res.authToken.EduCompList); // current EducompId

            _this.authService.setEduCompId((_a = res.authToken.EduCompList[0]) !== null && _a !== void 0 ? _a : null);

            if (res.user_type_id == 2) {
              // current EducompId
              _this.authService.setEduCompId((_b = res.eduCompId) !== null && _b !== void 0 ? _b : null); // this.router.navigateByUrl(this.returnUrl || "student");


              _this.router.navigateByUrl("/home");
            } else if (res.user_type_id == 6) _this.router.navigateByUrl("/support/search" || 0);else _this.router.navigateByUrl("/home");
          } // if login Error
          else if (res.returnValue == -1) {
            _this.isFailed = true;
            _this.errMsg = "labels.loginErro";
          } else {
            _this.isFailed = true;
            _this.errMsg = res.returnString;
          }

          _this.authService.isUser$.next(true);
        });
      }
    }
  }]);

  return LoginPageComponent;
}();

LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
  return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_4__.AppAssets));
};

LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: LoginPageComponent,
  selectors: [["app-login-page"]],
  decls: 42,
  vars: 25,
  consts: [[1, "login-background"], ["id", "login"], [1, "row", "m-0"], [1, "col-md-4", "col-12", "description"], [1, "main"], [1, "sub-1"], [1, "sub-2"], [1, "col-md-4", "col-12", "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "p-0", "auth-img"], [1, "col-12", "p-0"], [1, "card-title"], ["type", "light-danger", "class", "mb-2", 3, "closed", 4, "ngIf"], [1, "emp-radius-inputs-container", 3, "formGroup"], [1, "row"], [1, "col-12"], ["label", "labels.Email", "placeholder", "labels.Email", "appearance", "standard", 3, "control", "submitted"], ["label", "labels.Password", "placeholder", "labels.Password", "appearance", "standard", "type", "password", 3, "control", "submitted"], [1, "d-sm-flex", "justify-content-between", "mb-3", "font-small-2"], ["routerLink", "/auth/reset-password", 1, "forgetpass"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], [1, "orange-btn", "radius-btn", "w-100", 3, "click"], [1, "text-btn"], [1, "col-md-4", "col-12", "d-flex", "align-items-center", "justify-content-center", "pbottom-20"], ["alt", "login", "width", "90%", 3, "src"], ["type", "light-danger", 1, "mb-2", 3, "closed"], [1, "mb-0"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, LoginPageComponent_ngb_alert_22_Template, 4, 3, "ngb-alert", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "app-input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "app-input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_34_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 13, "welcome!"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 15, "letsStartYourLearningAdventure"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 17, "beginYourJourneyNow"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 19, "auth.Login"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrls.account_email)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrls.account_password)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 21, "auth.ForgotPassword"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 23, "Navbar.signIn"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.appAssets.login, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    }
  },
  directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbAlert],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".login-background {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n  #login {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n  #login .card {\n  max-width: 400px;\n  border: solid 1px #d7d7d7;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 25px 40px;\n  margin: 45px 0 40px 0;\n  box-shadow: none;\n}\n  #login .card-title {\n  font-size: 26px;\n  color: #193141;\n  margin-bottom: 25px;\n}\n  #login .card-title::after {\n  content: \"\";\n  border: 3px solid #437a9f;\n  width: 130px;\n  display: block;\n  border-radius: 2px;\n  margin-top: 8px;\n}\n  #login .mat-form-field {\n  margin-bottom: 0 !important;\n}\n  #login label {\n  margin-bottom: 10px;\n}\n  #login .radius-btn {\n  font-size: 16px !important;\n  padding: 10px 30px;\n}\n  #login .radius-btn .text-btn {\n  line-height: normal;\n}\n  #login .forgetpass {\n  font-size: 15px;\n  color: #fb6239;\n  font-weight: bold;\n}\n  #login .description {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  padding: 20px 20px 20px 70px;\n}\n  #login .description p {\n  margin: 0;\n}\n  #login .description .main {\n  font-size: 22px;\n  font-weight: bold;\n  line-height: 1.3;\n  letter-spacing: 0.72px;\n  color: #193141;\n}\n  #login .description .sub-1 {\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 1.35;\n  letter-spacing: 1px;\n  color: #437a9f;\n}\n  #login .description .sub-2 {\n  font-family: Roboto-Regular;\n  font-size: 15px;\n  line-height: 1.71;\n  letter-spacing: 0.41px;\n  color: #8a8a8a;\n}\n  #login .input-label {\n  color: #101317;\n}\n  .login-background .egy-navbar {\n  background-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXHN0eWxlLWNvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUhOO0FBTUk7RUFDRSxlQUFBO0VBQ0EsY0N2Qlk7RUR3QlosbUJBQUE7QUFKTjtBQU1NO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKUjtBQVFJO0VBQ0UsMkJBQUE7QUFOTjtBQVNJO0VBQ0UsbUJBQUE7QUFQTjtBQVVJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQVJOO0FBVU07RUFDRSxtQkFBQTtBQVJSO0FBWUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBVk47QUFhSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0FBWE47QUFhTTtFQUNFLFNBQUE7QUFYUjtBQWNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNDM0VVO0FEK0RsQjtBQWVNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNDbEZLO0FEcUViO0FBZ0JNO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFkUjtBQWtCSTtFQUNFLGNBQUE7QUFoQk47QUFxQkE7RUFDRSxpQ0FBQTtBQWxCRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFzc2V0cy9zYXNzL3N0eWxlLWNvbnN0YW50c1wiO1xyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubG9naW4tYmFja2dyb3VuZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgI2xvZ2luIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q3ZDdkNztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMjVweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDQ1cHggMCA0MHB4IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIGNvbG9yOiAkZGFyay1ibHVlLWNvbG9yO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGJsdWUtY29sb3I7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yYWRpdXMtYnRuIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHJcbiAgICAgIC50ZXh0LWJ0biB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JnZXRwYXNzIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogI2ZiNjIzOTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMjBweDtcclxuICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNzBweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjcycHg7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWJsdWUtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWItMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3ViLTIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNDFweDtcclxuICAgICAgICBjb2xvcjogIzhhOGE4YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjMTAxMzE3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5sb2dpbi1iYWNrZ3JvdW5kIC5lZ3ktbmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiJG1haW4tY29sb3I6ICNlODY4MjA7XHJcbiRtYWluLWxpZ2h0LWNvbG9yOiAjZmI2MjM5O1xyXG4kZXJyb3ItY29sb3I6ICNmNTUyNTI7XHJcbiRkYXJrLWJsdWUtY29sb3I6ICMxOTMxNDE7XHJcbiRibHVlLWNvbG9yOiAjNDM3YTlmO1xyXG4kZm9udEF3ZXNvbWU6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4kbWluLWNvbnRhaW5lci1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuJGlucHV0LXJhZGl1czogMTVweDtcclxuJHJlZC1jb2xvcjogI2QxMDMxYjtcclxuIl19 */"]
});

/***/ }),

/***/ 24593:
/*!*******************************************************!*\
  !*** ./src/app/auth/not-found/not-found.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": function() { return /* binding */ NotFoundComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ 78530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








var _c0 = function _c0() {
  return ["/"];
};

var NotFoundComponent = /*#__PURE__*/(0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NotFoundComponent() {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotFoundComponent);

  this.jsonAssets = app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_2__.JsonAssets;
  this.options = {
    path: this.jsonAssets.notFoundJson
  };
});

NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};

NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-error-page"]],
  decls: 16,
  vars: 6,
  consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], [1, "lottie", "align-items-center"], [3, "options"], [1, "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ng-lottie", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "404 - Page Not Found!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "The page you are looking for might have been removed.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 3, "General.BackToHome"), " ");
    }
  },
  directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_4__.LottieComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 67225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": function() { return /* binding */ RegisterComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function RegisterComponent_ngb_alert_16_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngb-alert", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("close", function RegisterComponent_ngb_alert_16_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r6.isFailed = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errMsg);
  }
}

function RegisterComponent_mat_hint_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function RegisterComponent_mat_hint_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function RegisterComponent_mat_hint_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_mat_hint_23_span_1_Template, 4, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RegisterComponent_mat_hint_23_span_2_Template, 4, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrls.ar_name.errors == null ? null : ctx_r1.FormCtrls.ar_name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.ar_name.errors == null ? null : ctx_r1.FormCtrls.ar_name.errors.whiteSpace) || (ctx_r1.FormCtrls.ar_name.errors == null ? null : ctx_r1.FormCtrls.ar_name.errors.pattern));
  }
}

function RegisterComponent_mat_hint_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function RegisterComponent_mat_hint_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.MobileLength"), " ");
  }
}

function RegisterComponent_mat_hint_29_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.NumberMustStartWith"), " ");
  }
}

function RegisterComponent_mat_hint_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_mat_hint_29_span_1_Template, 4, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RegisterComponent_mat_hint_29_span_2_Template, 4, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RegisterComponent_mat_hint_29_span_3_Template, 4, 3, "span", 26);
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

function RegisterComponent_mat_hint_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function RegisterComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_mat_hint_35_span_1_Template, 4, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.account_email.errors == null ? null : ctx_r3.FormCtrls.account_email.errors.required);
  }
}

function RegisterComponent_mat_hint_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function RegisterComponent_mat_hint_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_mat_hint_41_span_1_Template, 4, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrls.account_password.errors == null ? null : ctx_r4.FormCtrls.account_password.errors.required);
  }
}

function RegisterComponent_mat_hint_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " You must enter a confirm password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function RegisterComponent_mat_hint_47_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Password and confirm not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function RegisterComponent_mat_hint_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_mat_hint_47_span_1_Template, 3, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RegisterComponent_mat_hint_47_span_2_Template, 3, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrls.confirmPassword.errors == null ? null : ctx_r5.FormCtrls.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrls.confirmPassword.errors == null ? null : ctx_r5.FormCtrls.confirmPassword.errors.mustMatch);
  }
}

var RegisterComponent = /*#__PURE__*/function () {
  function RegisterComponent(router, fb, toastr, authService, spinner) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RegisterComponent);

    this.router = router;
    this.fb = fb;
    this.toastr = toastr;
    this.authService = authService;
    this.spinner = spinner;
    this.submitted = false;
    this.isFailed = false;
    this.errMsg = "";
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RegisterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        Id: [null],
        userTypeId: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[a-zA-Z \u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]+$/), app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9_ \-\(\)\S*$]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(11), app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.MobileStartsWith]],
        account_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
        account_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
      }, {
        validator: app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.mustMatch("account_password", "confirmPassword")
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      this.submitted = true;
      console.log(this.myForm.value);

      if (this.myForm.valid) {
        this.spinner.show();
        this.authService.Registeration(this.myForm.value).subscribe(function (res) {
          //console.log(res);
          _this.spinner.hide();

          _this.submitted = false;
          _this.isFailed = false;

          if (res.returnValue == 1) {
            //TOKEN
            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.setToken(res.token.token); // user type id

            app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.setUserTypeId(res.user_type_id);

            if (res.user_type_id == "2") {
              _this.router.navigateByUrl("/auth/educational-details");
            } else {
              _this.router.navigateByUrl("/home");
            }
          }

          if (res.returnValue == 0) {
            _this.isFailed = true;
            _this.errMsg = res.returnString;
          }
        });
      }
    }
  }]);

  return RegisterComponent;
}();

RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService));
};

RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 57,
  vars: 34,
  consts: [["id", "regestration", 1, "auth-height"], [1, "row", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/register.png", "alt", "", "width", "350", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "card-title", "mb-2"], ["type", "light-danger", "class", "mb-2", 3, "close", 4, "ngIf"], [3, "formGroup"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "ar_name", "placeholder", "Name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "mobile", "placeholder", "Mobile"], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "account_email"], ["matInput", "", "type", "password", "placeholder", "password", "formControlName", "account_password"], ["matInput", "", "type", "password", "placeholder", "Confirm Password", "formControlName", "confirmPassword"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], ["mat-raised-button", "", 1, "btn", "btn-primary", "mb-2", "mb-sm-0", 3, "click"], ["mat-raised-button", "", "routerLink", "/auth/login", 1, "btn", "bg-light-primary", "mb-2", "mb-sm-0"], ["type", "light-danger", 1, "mb-2", 3, "close"], [1, "mb-0"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RegisterComponent_ngb_alert_16_Template, 3, 1, "ngb-alert", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, RegisterComponent_mat_hint_23_Template, 3, 2, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RegisterComponent_mat_hint_29_Template, 4, 3, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, RegisterComponent_mat_hint_35_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, RegisterComponent_mat_hint_41_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, RegisterComponent_mat_hint_47_Template, 3, 2, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_50_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 16, "auth.CreateAccount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 18, "auth.FillFormMsg"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 20, "labels.Name"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ar_name.invalid && (ctx.FormCtrls.ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 22, "labels.Mobile"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.mobile.invalid && (ctx.FormCtrls.mobile.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 24, "labels.Email"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.account_email.invalid && (ctx.FormCtrls.account_email.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 26, "labels.Password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.account_password.invalid && (ctx.FormCtrls.account_password.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 28, "labels.ConfirmPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.confirmPassword.invalid && (ctx.FormCtrls.confirmPassword.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 30, "auth.CreateAccount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 32, "auth.BackToLogin"), " ");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAlert, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 7727:
/*!*****************************************************!*\
  !*** ./src/app/auth/registration-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationRoutingModule": function() { return /* binding */ RegistrationRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _educational_details_educational_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./educational-details/educational-details.component */ 16912);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 67225);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ 24593);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login-page.component */ 73099);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 13866);
/* harmony import */ var app_shared_services_auth_Guards_auth_not_user_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/auth/Guards/auth/not-user.guard */ 88476);
/* harmony import */ var app_shared_services_auth_Guards_roles_is_student_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/auth/Guards/roles/is-student.guard */ 52536);
/* harmony import */ var app_shared_services_auth_Guards_auth_pending_changes_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/auth/Guards/auth/pending-changes.guard */ 15111);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ 85427);
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./access-denied/access-denied.component */ 46111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);















var routes = [{
  path: "",
  children: [{
    path: "not-found",
    component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent
  }, {
    path: "error",
    component: _error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent
  }, {
    path: "access-denied",
    component: _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_11__.AccessDeniedComponent
  }, {
    path: "login",
    component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__.LoginPageComponent,
    canActivate: [app_shared_services_auth_Guards_auth_not_user_guard__WEBPACK_IMPORTED_MODULE_7__.NotUserGuard]
  }, {
    path: "register",
    component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
    canActivate: [app_shared_services_auth_Guards_auth_not_user_guard__WEBPACK_IMPORTED_MODULE_7__.NotUserGuard]
  }, {
    path: "reset-password",
    component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__.ForgotPasswordComponent,
    canActivate: [app_shared_services_auth_Guards_auth_not_user_guard__WEBPACK_IMPORTED_MODULE_7__.NotUserGuard]
  }, {
    path: "educational-details",
    component: _educational_details_educational_details_component__WEBPACK_IMPORTED_MODULE_2__.EducationalDetailsComponent,
    canActivate: [app_shared_services_auth_Guards_roles_is_student_guard__WEBPACK_IMPORTED_MODULE_8__.IsStudentGuard],
    canDeactivate: [app_shared_services_auth_Guards_auth_pending_changes_guard__WEBPACK_IMPORTED_MODULE_9__.PendingChangesGuard]
  }]
}];
var RegistrationRoutingModule = /*#__PURE__*/(0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RegistrationRoutingModule() {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RegistrationRoutingModule);
});

RegistrationRoutingModule.ɵfac = function RegistrationRoutingModule_Factory(t) {
  return new (t || RegistrationRoutingModule)();
};

RegistrationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: RegistrationRoutingModule
});
RegistrationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 5051:
/*!*********************************************!*\
  !*** ./src/app/auth/registration.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationModule": function() { return /* binding */ RegistrationModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/material/material.module */ 793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-routing.module */ 7727);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ 24593);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login-page.component */ 73099);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ 67225);
/* harmony import */ var _educational_details_educational_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./educational-details/educational-details.component */ 16912);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 13866);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ 85427);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-lottie */ 78530);
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./access-denied/access-denied.component */ 46111);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);



















var RegistrationModule = /*#__PURE__*/(0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RegistrationModule() {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RegistrationModule);
});

RegistrationModule.ɵfac = function RegistrationModule_Factory(t) {
  return new (t || RegistrationModule)();
};

RegistrationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: RegistrationModule
});
RegistrationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__.RegistrationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_18__.LottieModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](RegistrationModule, {
    declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__.LoginPageComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent, _educational_details_educational_details_component__WEBPACK_IMPORTED_MODULE_7__.EducationalDetailsComponent, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__.ForgotPasswordComponent, _error_error_component__WEBPACK_IMPORTED_MODULE_9__.ErrorComponent, _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_10__.AccessDeniedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__.RegistrationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_18__.LottieModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule]
  });
})();

/***/ }),

/***/ 88476:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/auth/Guards/auth/not-user.guard.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotUserGuard": function() { return /* binding */ NotUserGuard; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-storage */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ 16256);






var NotUserGuard = /*#__PURE__*/function () {
  function NotUserGuard(route, authservice) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotUserGuard);

    this.route = route;
    this.authservice = authservice;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotUserGuard, [{
    key: "canActivate",
    value: function canActivate(route, state) {
      if (!app_shared_services_local_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.isUserLoggedIn()) {
        return true;
      } else {
        this.route.navigateByUrl("");
        return false;
      }
    }
  }]);

  return NotUserGuard;
}();

NotUserGuard.ɵfac = function NotUserGuard_Factory(t) {
  return new (t || NotUserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

NotUserGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NotUserGuard,
  factory: NotUserGuard.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=src_app_auth_registration_module_ts.js.map