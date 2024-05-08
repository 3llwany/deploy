"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["src_app_support_support_module_ts"],{

/***/ 72625:
/*!****************************************************************!*\
  !*** ./src/app/admin/services/Admin/generate-codes.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCodesService": function() { return /* binding */ GenerateCodesService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var GenerateCodesService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(GenerateCodesService, _AppClientService);

  var _super = (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(GenerateCodesService);

  function GenerateCodesService(http) {
    var _this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GenerateCodesService);

    _this = _super.call(this, http);
    _this.http = http;
    return _this;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GenerateCodesService, [{
    key: "GenerateCodes",
    value: function GenerateCodes(EduCompId, data) {
      return this.post("codes/GenerateCodes/" + EduCompId, data);
    }
  }, {
    key: "searchCodes",
    value: function searchCodes(code, counter) {
      return this.get("codes/MaterialCodes/" + code + "/" + counter);
    }
  }, {
    key: "GenerateBalanceCodes",
    value: function GenerateBalanceCodes(data) {
      return this.post("codes/GenerateCustomBalanceCodes", data);
    }
  }, {
    key: "applyBalanceCode",
    value: function applyBalanceCode(code) {
      return this.post("codes/applyCustomBalanceCode/" + code, null);
    }
  }]);

  return GenerateCodesService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

GenerateCodesService.ɵfac = function GenerateCodesService_Factory(t) {
  return new (t || GenerateCodesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

GenerateCodesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: GenerateCodesService,
  factory: GenerateCodesService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 75766:
/*!******************************************************************************!*\
  !*** ./src/app/support/pages/cowpay-reference/cowpay-reference.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CowpayReferenceComponent": function() { return /* binding */ CowpayReferenceComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_support_services_support_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/support/services/support.service */ 47596);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);













function CowpayReferenceComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.Results);
  }
}

var CowpayReferenceComponent = /*#__PURE__*/function () {
  function CowpayReferenceComponent(SupportService, spinner) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CowpayReferenceComponent);

    this.SupportService = SupportService;
    this.spinner = spinner;
    this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      cowPayId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]) //954386862

    });
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CowpayReferenceComponent, [{
    key: "CowpayReferenceSearch",
    value: function CowpayReferenceSearch() {
      var _this = this;

      this.Results = "";

      if (this.myForm.valid) {
        this.spinner.show();
        this.SupportService.CowpayReferenceSearch(this.myForm.controls["cowPayId"].value).subscribe(function (res) {
          _this.Results = res.returnString;

          _this.spinner.hide();
        });
      }
    }
  }]);

  return CowpayReferenceComponent;
}();

CowpayReferenceComponent.ɵfac = function CowpayReferenceComponent_Factory(t) {
  return new (t || CowpayReferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_support_services_support_service__WEBPACK_IMPORTED_MODULE_2__.SupportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService));
};

CowpayReferenceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CowpayReferenceComponent,
  selectors: [["app-cowpay-reference"]],
  decls: 16,
  vars: 3,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "container-fluid", 3, "formGroup"], [1, "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "cowPayId", "required", "", "placeholder", "Pleace Enter Id"], ["class", "alert bg-light-warning mb-2 text-center", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "alert", "bg-light-warning", "mb-2", "text-center"], [1, "mb-0"]],
  template: function CowpayReferenceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "CowPay");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "invoice number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CowpayReferenceComponent_div_10_Template, 3, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CowpayReferenceComponent_Template_button_click_14_listener() {
        return ctx.CowpayReferenceSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Results);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3dwYXktcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 45642:
/*!****************************************************************************************!*\
  !*** ./src/app/support/pages/generate-student-code/generate-student-code.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateStudentCodeComponent": function() { return /* binding */ GenerateStudentCodeComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_support_services_support_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/support/services/support.service */ 47596);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
















function GenerateStudentCodeComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", subject_r4.subject_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subject_r4.subject_ar_name, " ");
  }
}

function GenerateStudentCodeComponent_mat_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", teacher_r5.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", teacher_r5.Text, " ");
  }
}

function GenerateStudentCodeComponent_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lec_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lec_r6.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", lec_r6.Text, " ");
  }
}

function GenerateStudentCodeComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Results: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.Results, " ");
  }
}

var GenerateStudentCodeComponent = /*#__PURE__*/function () {
  function GenerateStudentCodeComponent(fb, route, SupportService, GeneralService, spinner) {
    var _this = this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GenerateStudentCodeComponent);

    this.fb = fb;
    this.route = route;
    this.SupportService = SupportService;
    this.GeneralService = GeneralService;
    this.spinner = spinner;
    route.paramMap.subscribe(function (params) {
      _this.userId = Number(params.get("userId"));
    });
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GenerateStudentCodeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getStudentDataGenerateCode();
      this.myForm = this.fb.group({
        subjectId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        teacherId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        materialId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        userId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getStudentDataGenerateCode",
    value: function getStudentDataGenerateCode() {
      var _this2 = this;

      this.spinner.show();
      this.SupportService.getStudentDataGenerateCode(this.userId).subscribe(function (res) {
        _this2.studentData = res;
        _this2.subjects = res.studentSubjects;

        _this2.spinner.hide();
      });
    }
  }, {
    key: "GenerateCode",
    value: function GenerateCode() {
      var _this3 = this;

      this.FormCtrls.userId.setValue(this.userId);

      if (this.myForm.valid) {
        this.spinner.show();
        this.SupportService.GenerateCode(this.myForm.value).subscribe(function (res) {
          _this3.Results = res.returnString;

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "getTeachersBySubjectId",
    value: function getTeachersBySubjectId(subjectId) {
      var _this4 = this;

      this.Teachers = [];
      this.Lectures = [];
      this.FormCtrls.teacherId.setValue("");
      this.FormCtrls.materialId.setValue("");

      if (subjectId) {
        this.GeneralService.getTeachersBySubjectId(subjectId).subscribe(function (res) {
          _this4.Teachers = res;
        });
      }
    }
  }, {
    key: "getTeachersMaterials",
    value: function getTeachersMaterials() {
      var _this5 = this;

      this.Lectures = [];
      this.FormCtrls.materialId.setValue("");

      if (this.FormCtrls.teacherId.value) {
        this.GeneralService.getTeachersMaterials(this.FormCtrls.subjectId.value, this.FormCtrls.teacherId.value).subscribe(function (res) {
          _this5.Lectures = res;
        });
      }
    }
  }]);

  return GenerateStudentCodeComponent;
}();

GenerateStudentCodeComponent.ɵfac = function GenerateStudentCodeComponent_Factory(t) {
  return new (t || GenerateStudentCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_support_services_support_service__WEBPACK_IMPORTED_MODULE_2__.SupportService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService));
};

GenerateStudentCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: GenerateStudentCodeComponent,
  selectors: [["app-generate-student-code"]],
  decls: 64,
  vars: 8,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "example-card"], [1, "form-horizontal"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label", "text-right"], [1, "col-sm-4"], ["disabled", "", 1, "form-control", "bg-light-primary", 3, "value"], [1, "container-fluid"], [3, "formGroup"], [1, "row", "f-w"], [1, "col"], ["appearance", "legacy"], ["formControlName", "subjectId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "teacherId", 3, "selectionChange"], ["formControlName", "materialId"], ["class", "row f-w", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "form-group", "col"], [1, "col-form-label"], ["role", "alert", 1, "alert", "bg-light-warning", "mb-2"]],
  template: function GenerateStudentCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Generate Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Student Data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " mobile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Generate Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-card-content", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function GenerateStudentCodeComponent_Template_mat_select_selectionChange_40_listener() {
        return ctx.getTeachersBySubjectId(ctx.FormCtrls.subjectId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, GenerateStudentCodeComponent_mat_option_43_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function GenerateStudentCodeComponent_Template_mat_select_selectionChange_48_listener() {
        return ctx.getTeachersMaterials();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, GenerateStudentCodeComponent_mat_option_51_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Lecture");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, GenerateStudentCodeComponent_mat_option_59_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, GenerateStudentCodeComponent_div_60_Template, 7, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-card-actions", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GenerateStudentCodeComponent_Template_button_click_62_listener() {
        return ctx.GenerateCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Generate ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.studentData == null ? null : ctx.studentData.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.studentData == null ? null : ctx.studentData.userEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.studentData == null ? null : ctx.studentData.userMobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Lectures);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Results);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0ZS1zdHVkZW50LWNvZGUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 83489:
/*!**************************************************************************!*\
  !*** ./src/app/support/pages/refund-balance/refund-balance.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundBalanceComponent": function() { return /* binding */ RefundBalanceComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_support_services_support_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/support/services/support.service */ 47596);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function RefundBalanceComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var eduComp_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", eduComp_r5.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", eduComp_r5.Name, " ");
  }
}

function RefundBalanceComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function RefundBalanceComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", teacher_r6.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", teacher_r6.teacher_ar_name, " ");
  }
}

function RefundBalanceComponent_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function RefundBalanceComponent_mat_hint_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function RefundBalanceComponent_mat_hint_49_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.MustEnterCorrectValue"), " ");
  }
}

function RefundBalanceComponent_mat_hint_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RefundBalanceComponent_mat_hint_49_span_1_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RefundBalanceComponent_mat_hint_49_span_2_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrls.withdraw.errors == null ? null : ctx_r4.FormCtrls.withdraw.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrls.withdraw.errors == null ? null : ctx_r4.FormCtrls.withdraw.errors.bigZero);
  }
}

var RefundBalanceComponent = /*#__PURE__*/function () {
  function RefundBalanceComponent(fb, route, SupportService, GeneralService, spinner, toastr) {
    var _this = this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RefundBalanceComponent);

    this.fb = fb;
    this.route = route;
    this.SupportService = SupportService;
    this.GeneralService = GeneralService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.Balance = 0;
    this.submitted = false;
    route.paramMap.subscribe(function (params) {
      _this.userId = Number(params.get("userId"));

      _this.getRefundBalanceData();
    });
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RefundBalanceComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        withdraw: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]],
        teacherUserId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        EduCompId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        user: this.fb.group({
          user_ID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        })
      });
      this.userIdCtrl.setValue(this.userId);
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "userIdCtrl",
    get: function get() {
      return this.myForm.get("user.user_ID");
    }
  }, {
    key: "getRefundBalanceData",
    value: function getRefundBalanceData() {
      var _this2 = this;

      if (this.userId) {
        this.spinner.show();
        this.SupportService.getRefundBalanceData(this.userId).subscribe(function (res) {
          _this2.EduComps = res.EduComps;
          _this2.user = res.user;

          _this2.spinner.hide();
        });
      }
    } //Get Teachers By EduCompID

  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId(EduCompId) {
      var _this3 = this;

      this.Teachers = [];
      this.FormCtrls.teacherUserId.setValue("");

      if (EduCompId) {
        this.GeneralService.getTeachersByEducompId(EduCompId).subscribe(function (res) {
          _this3.Teachers = res.lstTeachers;
        });
      }
    }
  }, {
    key: "getStudentBalanceForTeacher",
    value: function getStudentBalanceForTeacher() {
      var _this4 = this;

      this.SupportService.getStudentBalanceForTeacher(this.userId, this.FormCtrls.teacherUserId.value, this.FormCtrls.EduCompId.value).subscribe(function (res) {
        _this4.Balance = res.Credits;
      });
    }
  }, {
    key: "RefundBalance",
    value: function RefundBalance() {
      var _this5 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        this.spinner.show();
        this.SupportService.RefundBalance(this.myForm.value).subscribe(function (res) {
          if (res.returnString == "Success") {
            _this5.toastr.success("تم الخصم");

            _this5.getStudentBalanceForTeacher();
          } else _this5.toastr.warning(res.returnString);

          _this5.spinner.hide();

          _this5.submitted = false;
        });
      }
    }
  }]);

  return RefundBalanceComponent;
}();

RefundBalanceComponent.ɵfac = function RefundBalanceComponent_Factory(t) {
  return new (t || RefundBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_support_services_support_service__WEBPACK_IMPORTED_MODULE_3__.SupportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
};

RefundBalanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RefundBalanceComponent,
  selectors: [["app-refund-balance"]],
  decls: 54,
  vars: 10,
  consts: [[1, "row"], [1, "col-12"], [1, "example-card"], [1, "container-fluid", 3, "formGroup"], [1, "form-group", "row"], [1, "col-sm-4"], [1, "primary"], ["disabled", "", "readonly", "", 1, "form-control", "bg-light-primary", 3, "value"], [1, "row", "f-w"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["formControlName", "EduCompId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "teacherUserId", 3, "selectionChange"], ["appearance", "fill"], ["matInput", "", "type", "text", "readonly", "", 1, "readonly", 3, "value"], ["matInput", "", "type", "number", "formControlName", "withdraw", "placeholder", "Enter refund amount", 3, "value"], ["class", "danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "danger"]],
  template: function RefundBalanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Refund Balance ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function RefundBalanceComponent_Template_mat_select_selectionChange_25_listener() {
        return ctx.getTeachersByEducompId(ctx.FormCtrls.EduCompId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, RefundBalanceComponent_mat_option_28_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RefundBalanceComponent_mat_error_29_Template, 3, 3, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function RefundBalanceComponent_Template_mat_select_selectionChange_34_listener() {
        return ctx.getStudentBalanceForTeacher();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, RefundBalanceComponent_mat_option_37_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, RefundBalanceComponent_mat_error_38_Template, 3, 3, "mat-error", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Refund amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, RefundBalanceComponent_mat_hint_49_Template, 3, 2, "mat-hint", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-card-actions", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RefundBalanceComponent_Template_button_click_51_listener() {
        return ctx.RefundBalance();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Refund ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.ar_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.account_email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.EduComps);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.EduCompId.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.teacherUserId.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.Balance);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.withdraw.invalid && (ctx.FormCtrls.withdraw.touched || ctx.submitted));
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtYmFsYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 12834:
/*!**************************************************************************!*\
  !*** ./src/app/support/pages/reset-password/reset-password.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": function() { return /* binding */ ResetPasswordComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_support_services_support_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/support/services/support.service */ 47596);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);












function ResetPasswordComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " new Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.Results.newPassword);
  }
}

var ResetPasswordComponent = /*#__PURE__*/function () {
  function ResetPasswordComponent(fb, SupportService, spinner) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResetPasswordComponent);

    this.fb = fb;
    this.SupportService = SupportService;
    this.spinner = spinner;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ResetPasswordComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        account_email: [""],
        mobile: [""]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "resetPassword",
    value: function resetPassword() {
      var _this = this;

      if (this.FormCtrls.account_email.value || this.FormCtrls.mobile.value) {
        this.spinner.show();
        this.SupportService.resetPassword(this.myForm.value).subscribe(function (res) {
          _this.Results = res;

          _this.spinner.hide();
        });
      }
    }
  }]);

  return ResetPasswordComponent;
}();

ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
  return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_support_services_support_service__WEBPACK_IMPORTED_MODULE_2__.SupportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService));
};

ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ResetPasswordComponent,
  selectors: [["app-reset-password"]],
  decls: 22,
  vars: 3,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "container-fluid", 3, "formGroup"], [1, "row", "f-w"], [1, "col"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "account_email"], ["matInput", "", "type", "text", "formControlName", "mobile"], ["class", "form-horizontal", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "form-horizontal"], [1, "form-group", "row"], [1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["disabled", "", 1, "form-control", "bg-light-primary", 3, "value"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Student Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Student phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ResetPasswordComponent_div_16_Template, 6, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_20_listener() {
        return ctx.resetPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Results);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 5211:
/*!********************************************************************!*\
  !*** ./src/app/support/pages/search-code/search-code.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCodeComponent": function() { return /* binding */ SearchCodeComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _admin_services_Admin_generate_codes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../admin/services/Admin/generate-codes.service */ 72625);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);













function SearchCodeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Results:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " \u0627\u0644\u0633\u0631\u064A\u0627\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " \u0627\u0644\u0643\u0648\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " \u0627\u0644\u0645\u062F\u0631\u0633 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " \u0627\u0644\u0645\u062D\u0627\u0636\u0631\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " \u0643\u0648\u062F \u0627\u0644\u0637\u0627\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " \u0627\u0633\u0645 \u0627\u0644\u0637\u0627\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u064A\u0643\u062A\u0631\u0648\u0646\u0649 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.teacher_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.material_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.user_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.CodeDetails == null ? null : ctx_r0.CodeDetails.account_email);
  }
}

var SearchCodeComponent = /*#__PURE__*/function () {
  function SearchCodeComponent(fb, GenerateCodesService, spinner, toastr) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchCodeComponent);

    this.fb = fb;
    this.GenerateCodesService = GenerateCodesService;
    this.spinner = spinner;
    this.toastr = toastr;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchCodeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        code: [null],
        counter: [null]
      });
    }
  }, {
    key: "CodeCtrl",
    get: function get() {
      return this.myForm.controls["code"];
    }
  }, {
    key: "CounterCtrl",
    get: function get() {
      return this.myForm.controls["counter"];
    }
  }, {
    key: "searchCodes",
    value: function searchCodes() {
      var _this = this;

      var _a;

      this.CodeDetails = null;

      if (this.CodeCtrl.value || this.CounterCtrl.value) {
        this.spinner.show();
        this.GenerateCodesService.searchCodes(((_a = this.CodeCtrl) === null || _a === void 0 ? void 0 : _a.value) || "null", this.CounterCtrl.value || "null").subscribe(function (res) {
          _this.CodeDetails = res;
          if (res == null) _this.toastr.info("Code not found");
        });
        this.spinner.hide();
      } else this.toastr.warning("Please Enter Code or Serial ");
    }
  }]);

  return SearchCodeComponent;
}();

SearchCodeComponent.ɵfac = function SearchCodeComponent_Factory(t) {
  return new (t || SearchCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_Admin_generate_codes_service__WEBPACK_IMPORTED_MODULE_2__.GenerateCodesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
};

SearchCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SearchCodeComponent,
  selectors: [["app-search-code"]],
  decls: 23,
  vars: 2,
  consts: [[1, "row"], [1, "col-12"], [1, "example-card"], [1, "container-fluid", 3, "formGroup"], [1, "row", "f-w"], [1, "col"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "code"], ["matInput", "", "type", "text", "formControlName", "counter"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["class", "row", 4, "ngIf"], [1, "container-fluid"], [1, "form-horizontal"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label", "text-right"], [1, "col-sm-4"], ["disabled", "", 1, "form-control", "bg-light-primary", 3, "value"]],
  template: function SearchCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Search Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Serial");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-card-actions", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchCodeComponent_Template_button_click_20_listener() {
        return ctx.searchCodes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SearchCodeComponent_div_22_Template, 45, 8, "div", 11);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.CodeDetails);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtY29kZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 58726:
/*!**************************************************************************!*\
  !*** ./src/app/support/pages/search-student/search-student.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchStudentComponent": function() { return /* binding */ SearchStudentComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _cowpay_reference_cowpay_reference_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cowpay-reference/cowpay-reference.component */ 75766);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-password/reset-password.component */ 12834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_support_services_support_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/support/services/support.service */ 47596);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
















function SearchStudentComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u0627\u0633\u0645 \u0627\u0644\u0637\u0627\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u064A\u0643\u062A\u0631\u0648\u0646\u0649 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " \u0627\u0644\u0631\u0635\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062F\u0631\u0627\u0633\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.studentData == null ? null : ctx_r0.studentData.user == null ? null : ctx_r0.studentData.user.ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.studentData == null ? null : ctx_r0.studentData.user == null ? null : ctx_r0.studentData.user.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.studentData == null ? null : ctx_r0.studentData.user == null ? null : ctx_r0.studentData.user.account_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.studentData == null ? null : ctx_r0.studentData.user == null ? null : ctx_r0.studentData.user.credits);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.studentData == null ? null : ctx_r0.studentData.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.studentData == null ? null : ctx_r0.studentData.center_names);
  }
}

function SearchStudentComponent_a_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u0641\u062A\u062D \u062A\u0630\u0643\u0631\u0629 \u062F\u0639\u0645 \u0641\u0646\u0649 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/support/tickets/", ctx_r1.studentData == null ? null : ctx_r1.studentData.user == null ? null : ctx_r1.studentData.user.user_ID, "");
  }
}

function SearchStudentComponent_a_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u062E\u0635\u0645 \u0627\u0644\u0631\u0635\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/support/refund-balance/", ctx_r2.studentData == null ? null : ctx_r2.studentData.user == null ? null : ctx_r2.studentData.user.user_ID, "");
  }
}

function SearchStudentComponent_a_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0631\u0635\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/support/balance-details/", ctx_r3.studentData == null ? null : ctx_r3.studentData.user == null ? null : ctx_r3.studentData.user.user_ID, "");
  }
}

function SearchStudentComponent_a_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u0625\u0646\u0634\u0627\u0621 \u0643\u0648\u062F \u0644\u0644\u0637\u0627\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/support/generate-code/", ctx_r4.studentData == null ? null : ctx_r4.studentData.user == null ? null : ctx_r4.studentData.user.user_ID, "");
  }
}

function SearchStudentComponent_a_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u0625\u0633\u062A\u0631\u062C\u0627\u0639 \u0627\u0644\u0645\u062D\u0627\u0636\u0631\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/support/refund-lecture/", ctx_r5.studentData == null ? null : ctx_r5.studentData.user == null ? null : ctx_r5.studentData.user.user_ID, "");
  }
}

var SearchStudentComponent = /*#__PURE__*/function () {
  function SearchStudentComponent(fb, SupportService, spinner, dialog) {
    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchStudentComponent);

    this.fb = fb;
    this.SupportService = SupportService;
    this.spinner = spinner;
    this.dialog = dialog;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchStudentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        email: [""],
        mobile: [""]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "searchStudent",
    value: function searchStudent() {
      var _this = this;

      if (this.FormCtrls.email.value || this.FormCtrls.mobile.value) {
        this.spinner.show();
        this.SupportService.searchStudent(this.myForm.value).subscribe(function (res) {
          console.log(res);
          _this.studentData = res;

          _this.spinner.hide();
        });
      }
    }
  }, {
    key: "openCowpayDialog",
    value: function openCowpayDialog() {
      this.dialog.open(_cowpay_reference_cowpay_reference_component__WEBPACK_IMPORTED_MODULE_2__.CowpayReferenceComponent, {
        minWidth: "30vw"
      }).afterClosed().subscribe(function (confirm) {});
    }
  }, {
    key: "openResetPasswordDialog",
    value: function openResetPasswordDialog() {
      this.dialog.open(_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordComponent, {
        minWidth: "50vw"
      }).afterClosed().subscribe(function (confirm) {});
    }
  }]);

  return SearchStudentComponent;
}();

SearchStudentComponent.ɵfac = function SearchStudentComponent_Factory(t) {
  return new (t || SearchStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_support_services_support_service__WEBPACK_IMPORTED_MODULE_4__.SupportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
};

SearchStudentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SearchStudentComponent,
  selectors: [["app-search-student"]],
  decls: 47,
  vars: 7,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "example-card"], [1, "container-fluid", 3, "formGroup"], [1, "row", "f-w"], [1, "col"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "email"], ["matInput", "", "type", "text", "formControlName", "mobile"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "container-fluid"], ["class", "col-7", 4, "ngIf"], [1, "col-5", "problems"], ["target", "_blank", "mat-raised-button", "", "class", "btn btn-primary col-3", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", 1, "btn", "btn-secondary", "col-3", 3, "click"], ["mat-raised-button", "", "routerLink", "/support/search-code", "target", "_blank", 1, "btn", "btn-danger", "col-3"], ["mat-raised-button", "", 1, "btn", "btn-info", "col-3", 3, "click"], ["target", "_blank", "mat-raised-button", "", "class", "btn btn-warning col-3", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "mat-raised-button", "", "class", "btn btn-secondary col-3", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-danger col-3", "target", "_blank", 3, "routerLink", 4, "ngIf"], [1, "col-7"], [1, "form-horizontal"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-4"], ["disabled", "", 1, "form-control", "bg-light-primary", "font-dro", 3, "value"], ["target", "_blank", "mat-raised-button", "", 1, "btn", "btn-primary", "col-3", 3, "routerLink"], ["target", "_blank", "mat-raised-button", "", 1, "btn", "btn-warning", "col-3", 3, "routerLink"], ["target", "_blank", "mat-raised-button", "", 1, "btn", "btn-secondary", "col-3", 3, "routerLink"], ["mat-raised-button", "", "target", "_blank", 1, "btn", "btn-danger", "col-3", 3, "routerLink"]],
  template: function SearchStudentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Technical Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Search Student ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Student Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Student phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchStudentComponent_Template_button_click_24_listener() {
        return ctx.searchStudent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Results:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-card-content", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, SearchStudentComponent_div_33_Template, 29, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, SearchStudentComponent_a_36_Template, 2, 1, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchStudentComponent_Template_button_click_37_listener() {
        return ctx.openCowpayDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " \u0645\u0634\u0643\u0644\u0629 \u0643\u0627\u0648 \u0628\u0627\u0649 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " \u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u0643\u0648\u062F ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchStudentComponent_Template_button_click_41_listener() {
        return ctx.openResetPasswordDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, SearchStudentComponent_a_43_Template, 2, 1, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, SearchStudentComponent_a_44_Template, 2, 1, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, SearchStudentComponent_a_45_Template, 2, 1, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, SearchStudentComponent_a_46_Template, 2, 1, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.user == null ? null : ctx.studentData.user.user_ID);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.user == null ? null : ctx.studentData.user.user_ID);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.user == null ? null : ctx.studentData.user.user_ID);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.user == null ? null : ctx.studentData.user.user_ID);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.user == null ? null : ctx.studentData.user.user_ID);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.user == null ? null : ctx.studentData.user.user_ID);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: [".problems[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic2VhcmNoLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvYmxlbXMgLmJ0biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 5937:
/*!************************************************************!*\
  !*** ./src/app/support/pages/tickets/tickets.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsComponent": function() { return /* binding */ TicketsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_support_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/support.service */ 47596);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/NewDate.pipe */ 3865);

























function TicketsComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var source_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", source_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", source_r33.source_name, " ");
  }
}

function TicketsComponent_mat_error_22_Template(rf, ctx) {
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

function TicketsComponent_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var type_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", type_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", type_r34.CASE_TYPE1, " ");
  }
}

function TicketsComponent_mat_error_31_Template(rf, ctx) {
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

function TicketsComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function TicketsComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please Choose a Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var status_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", status_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", status_r35.CASE_STATUS1, " ");
  }
}

function TicketsComponent_mat_error_55_Template(rf, ctx) {
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

function TicketsComponent_th_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r36 + 1);
  }
}

function TicketsComponent_th_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ele_r37.CASE_USER_Name);
  }
}

function TicketsComponent_th_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ele_r38.CASE_Contact);
  }
}

function TicketsComponent_th_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ele_r39.CASE_TYPE_Name);
  }
}

function TicketsComponent_th_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ele_r40.CASE_source_Name);
  }
}

function TicketsComponent_th_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ele_r41.CASE_STATUS_Name);
  }
}

function TicketsComponent_th_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "NewDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ele_r42.CASE_Date), " ");
  }
}

function TicketsComponent_th_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ele_r43.CASE_Details);
  }
}

function TicketsComponent_th_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_td_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ele_r44.CASE_Comment);
  }
}

function TicketsComponent_th_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 44);
  }
}

function TicketsComponent_td_112_Template(rf, ctx) {
  if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TicketsComponent_td_112_Template_a_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      var ele_r45 = restoredCtx.$implicit;
      var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r46.getCaseById(ele_r45.Case_ID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TicketsComponent_tr_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 48);
  }
}

function TicketsComponent_tr_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 49);
  }
}

function TicketsComponent_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](80);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r9.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [5, 10, 25, 100];
};

var TicketsComponent = /*#__PURE__*/function () {
  function TicketsComponent(fb, route, SupportService, spinner) {
    var _this = this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TicketsComponent);

    this.fb = fb;
    this.route = route;
    this.SupportService = SupportService;
    this.spinner = spinner;
    this.userName = "";
    this.displayedColumns = ["#", "name", "contact", "type", "source", "status", "date", "details", "comment", "option"];
    route.paramMap.subscribe(function (params) {
      _this.userId = Number(params.get("userId"));

      _this.getCase(null);
    });
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TicketsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        CASE_USER_ID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        Case_ID: [null],
        CASE_TYPE_ID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        CASE_STATUS_ID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        CASE_source_ID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        CASE_Date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        CASE_Contact: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        CASE_Details: [""],
        CASE_Comment: [""]
      });
      this.FormCtrls.CASE_USER_ID.setValue(this.userId);
      this.getCaseTable();
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getCase",
    value: function getCase(Case_ID) {
      var _this2 = this;

      if (this.userId) {
        this.spinner.show();
        this.SupportService.getCase(this.userId, Case_ID).subscribe(function (res) {
          //console.log("getCase", res);
          _this2.caseType = res.caseType;
          _this2.caseStatus = res.caseStatus;
          _this2.caseSource = res.caseSource;
          _this2.userName = res.userName;

          _this2.spinner.hide();
        });
      }
    }
  }, {
    key: "getCaseTable",
    value: function getCaseTable() {
      var _this3 = this;

      if (this.userId) {
        this.spinner.show();
        this.SupportService.getCaseTable(this.userId).subscribe(function (res) {
          //  console.log("getCaseTable", res);
          _this3.cases = res;
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res);
          _this3.dataSource.paginator = _this3.paginator;
          _this3.dataSource.sort = _this3.sort;

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "AddEditCase",
    value: function AddEditCase() {
      var _this4 = this;

      if (this.myForm.valid) {
        this.spinner.show();
        this.SupportService.AddEditCase(this.myForm.value).subscribe(function (res) {
          //  console.log("add", res);
          _this4.myForm.reset();

          _this4.getCaseTable();

          _this4.spinner.hide();
        });
      }
    }
  }, {
    key: "getCaseById",
    value: function getCaseById(caseId) {
      var CurrentCase = this.cases.find(function (e) {
        return e.Case_ID == caseId;
      });
      this.myForm.patchValue(CurrentCase);
    }
  }]);

  return TicketsComponent;
}();

TicketsComponent.ɵfac = function TicketsComponent_Factory(t) {
  return new (t || TicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_support_service__WEBPACK_IMPORTED_MODULE_2__.SupportService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService));
};

TicketsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TicketsComponent,
  selectors: [["app-tickets"]],
  viewQuery: function TicketsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 117,
  vars: 17,
  consts: [[1, "row"], [1, "col-12"], [1, "example-card"], [1, "container-fluid", 3, "formGroup"], [1, "row", "f-w"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "readonly", "", 3, "value"], ["formControlName", "CASE_source_ID"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "CASE_TYPE_ID"], ["matInput", "", "type", "text", "formControlName", "CASE_Contact"], ["matInput", "", "formControlName", "CASE_Date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "CASE_STATUS_ID"], [1, "col-md-6", "col-12"], ["matInput", "", "formControlName", "CASE_Details"], ["matInput", "", "formControlName", "CASE_Comment"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["appearance", "standard"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "contact"], ["matColumnDef", "type"], ["matColumnDef", "source"], ["matColumnDef", "status"], ["matColumnDef", "date"], ["matColumnDef", "details"], ["matColumnDef", "comment"], ["matColumnDef", "option"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "success", "p-0", 3, "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function TicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Technical Support Ticket ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Source");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, TicketsComponent_mat_option_21_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TicketsComponent_mat_error_22_Template, 3, 3, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TicketsComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, TicketsComponent_mat_error_31_Template, 3, 3, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Contact Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, TicketsComponent_mat_error_37_Template, 3, 3, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Choose a date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "mat-datepicker-toggle", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "mat-datepicker", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, TicketsComponent_mat_error_46_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Choose");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, TicketsComponent_mat_option_54_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, TicketsComponent_mat_error_55_Template, 3, 3, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "textarea", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "textarea", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-card-actions", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TicketsComponent_Template_button_click_68_listener() {
        return ctx.AddEditCase();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " Results:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-form-field", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "input", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function TicketsComponent_Template_input_keyup_79_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "table", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](83, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, TicketsComponent_th_84_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, TicketsComponent_td_85_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](86, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, TicketsComponent_th_87_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, TicketsComponent_td_88_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](89, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, TicketsComponent_th_90_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, TicketsComponent_td_91_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](92, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, TicketsComponent_th_93_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, TicketsComponent_td_94_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](95, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](96, TicketsComponent_th_96_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](97, TicketsComponent_td_97_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](98, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](99, TicketsComponent_th_99_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](100, TicketsComponent_td_100_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](101, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, TicketsComponent_th_102_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, TicketsComponent_td_103_Template, 3, 3, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](104, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](105, TicketsComponent_th_105_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](106, TicketsComponent_td_106_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](107, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, TicketsComponent_th_108_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, TicketsComponent_td_109_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](110, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, TicketsComponent_th_111_Template, 1, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](112, TicketsComponent_td_112_Template, 3, 0, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](113, TicketsComponent_tr_113_Template, 1, 0, "tr", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, TicketsComponent_tr_114_Template, 1, 0, "tr", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](115, TicketsComponent_tr_115_Template, 3, 1, "tr", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "mat-paginator", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.caseSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.CASE_source_ID.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.caseType);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.CASE_TYPE_ID.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.CASE_Contact.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.CASE_Date.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.caseStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormCtrls.CASE_STATUS_ID.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0));
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _shared_pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_3__.NewDatePipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoidGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 47596:
/*!*****************************************************!*\
  !*** ./src/app/support/services/support.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportService": function() { return /* binding */ SupportService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var SupportService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SupportService, _AppClientService);

  var _super = (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(SupportService);

  function SupportService(http) {
    var _this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SupportService);

    _this = _super.call(this, http);
    _this.http = http;
    return _this;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SupportService, [{
    key: "searchStudent",
    value: function searchStudent(data) {
      return this.post("SearchUser/Index", data);
    }
  }, {
    key: "CowpayReferenceSearch",
    value: function CowpayReferenceSearch(cowPayId) {
      return this.get("CowPay/VerifyCowPayPayment/" + cowPayId);
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(data) {
      return this.post("ResetPassword/resetUserPassword", data);
    } //##########################################################################

  }, {
    key: "getCase",
    value: function getCase(userId, caseId) {
      return this.get("CaseScreen/returnCase/".concat(userId, "/").concat(caseId));
    }
  }, {
    key: "getCaseTable",
    value: function getCaseTable(userId) {
      return this.get("CaseScreen/CaseTable/".concat(userId));
    }
  }, {
    key: "AddEditCase",
    value: function AddEditCase(data) {
      return this.post("CaseScreen/AddEditCase", data);
    } //##########################################################################

  }, {
    key: "getRefundBalanceData",
    value: function getRefundBalanceData(userId) {
      return this.get("RefundBalance/Refund/" + userId);
    }
  }, {
    key: "RefundBalance",
    value: function RefundBalance(data) {
      return this.post("RefundBalance/Refund", data);
    }
  }, {
    key: "getStudentBalanceForTeacher",
    value: function getStudentBalanceForTeacher(userId, teacherId, EduCompId) {
      return this.get("RefundBalance/returnUserBalanceByTeacherEduCompId/".concat(userId, "/").concat(teacherId, "/").concat(EduCompId));
    }
  }, {
    key: "getStudentDataGenerateCode",
    value: function getStudentDataGenerateCode(userId) {
      return this.get("AJAX/GenerateStudentCode/".concat(userId));
    }
  }, {
    key: "GenerateCode",
    value: function GenerateCode(d) {
      return this.post("AJAX/GenerateStudentCode/".concat(d.teacherId, "/").concat(d.subjectId, "/").concat(d.materialId, "/").concat(d.userId), null);
    }
  }, {
    key: "getSubjects",
    value: function getSubjects() {
      return this.get("test");
    }
  }, {
    key: "getTeachersBySubjectId",
    value: function getTeachersBySubjectId(subjectId) {
      return this.get("test/" + subjectId);
    }
  }, {
    key: "getLectursByTeachersId",
    value: function getLectursByTeachersId(teacherId) {
      return this.get("test/" + teacherId);
    }
  }]);

  return SupportService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

SupportService.ɵfac = function SupportService_Factory(t) {
  return new (t || SupportService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

SupportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: SupportService,
  factory: SupportService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 10185:
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportRoutingModule": function() { return /* binding */ SupportRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _pages_search_student_search_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search-student/search-student.component */ 58726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_search_code_search_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search-code/search-code.component */ 5211);
/* harmony import */ var _pages_generate_student_code_generate_student_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/generate-student-code/generate-student-code.component */ 45642);
/* harmony import */ var _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tickets/tickets.component */ 5937);
/* harmony import */ var _pages_refund_balance_refund_balance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/refund-balance/refund-balance.component */ 83489);
/* harmony import */ var app_shared_components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/components/refund-lecture/refund-lecture.component */ 24133);
/* harmony import */ var app_shared_components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/components/user-balance-details/user-balance-details.component */ 15054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












var routes = [{
  path: "",
  redirectTo: "search",
  pathMatch: "full"
}, {
  path: "search",
  component: _pages_search_student_search_student_component__WEBPACK_IMPORTED_MODULE_2__.SearchStudentComponent
}, {
  path: "search-code",
  component: _pages_search_code_search_code_component__WEBPACK_IMPORTED_MODULE_3__.SearchCodeComponent
}, {
  path: "generate-code/:userId",
  component: _pages_generate_student_code_generate_student_code_component__WEBPACK_IMPORTED_MODULE_4__.GenerateStudentCodeComponent
}, {
  path: "tickets/:userId",
  component: _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_5__.TicketsComponent
}, {
  path: "refund-balance/:userId",
  component: _pages_refund_balance_refund_balance_component__WEBPACK_IMPORTED_MODULE_6__.RefundBalanceComponent
}, {
  path: "refund-lecture/:userId",
  component: app_shared_components_refund_lecture_refund_lecture_component__WEBPACK_IMPORTED_MODULE_7__.RefundLectureComponent
}, {
  path: "balance-details/:userId",
  component: app_shared_components_user_balance_details_user_balance_details_component__WEBPACK_IMPORTED_MODULE_8__.UserBalanceDetailsComponent
}];
var SupportRoutingModule = /*#__PURE__*/(0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SupportRoutingModule() {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SupportRoutingModule);
});

SupportRoutingModule.ɵfac = function SupportRoutingModule_Factory(t) {
  return new (t || SupportRoutingModule)();
};

SupportRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: SupportRoutingModule
});
SupportRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SupportRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 96758:
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportModule": function() { return /* binding */ SupportModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-routing.module */ 10185);
/* harmony import */ var _pages_search_student_search_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search-student/search-student.component */ 58726);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var _pages_cowpay_reference_cowpay_reference_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cowpay-reference/cowpay-reference.component */ 75766);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ 12834);
/* harmony import */ var _pages_search_code_search_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/search-code/search-code.component */ 5211);
/* harmony import */ var _pages_generate_student_code_generate_student_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/generate-student-code/generate-student-code.component */ 45642);
/* harmony import */ var _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/tickets/tickets.component */ 5937);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _pages_refund_balance_refund_balance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/refund-balance/refund-balance.component */ 83489);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/validators/date.adapter */ 89778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);



















var SupportModule = /*#__PURE__*/(0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SupportModule() {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SupportModule);
});

SupportModule.ɵfac = function SupportModule_Factory(t) {
  return new (t || SupportModule)();
};

SupportModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: SupportModule
});
SupportModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.DateAdapter,
    useClass: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_12__.AppDateAdapter
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_FORMATS,
    useValue: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_12__.APP_DATE_FORMATS
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_2__.SupportRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAlertModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SupportModule, {
    declarations: [_pages_search_student_search_student_component__WEBPACK_IMPORTED_MODULE_3__.SearchStudentComponent, _pages_cowpay_reference_cowpay_reference_component__WEBPACK_IMPORTED_MODULE_5__.CowpayReferenceComponent, _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordComponent, _pages_search_code_search_code_component__WEBPACK_IMPORTED_MODULE_7__.SearchCodeComponent, _pages_generate_student_code_generate_student_code_component__WEBPACK_IMPORTED_MODULE_8__.GenerateStudentCodeComponent, _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_9__.TicketsComponent, _pages_refund_balance_refund_balance_component__WEBPACK_IMPORTED_MODULE_11__.RefundBalanceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_2__.SupportRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAlertModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_support_support_module_ts.js.map