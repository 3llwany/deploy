"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["src_app_admin_pages_exams-setup_exams_module_ts"],{

/***/ 80216:
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exam-correction/correction-dialog/correction-dialog.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectionDialogComponent": function() { return /* binding */ CorrectionDialogComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function CorrectionDialogComponent_mat_hint_36_span_1_Template(rf, ctx) {
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

function CorrectionDialogComponent_mat_hint_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function CorrectionDialogComponent_mat_hint_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CorrectionDialogComponent_mat_hint_36_span_1_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CorrectionDialogComponent_mat_hint_36_span_2_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.teacherCommentCtrl == null ? null : ctx_r0.teacherCommentCtrl.errors == null ? null : ctx_r0.teacherCommentCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.teacherCommentCtrl == null ? null : ctx_r0.teacherCommentCtrl.errors == null ? null : ctx_r0.teacherCommentCtrl.errors.whiteSpace);
  }
}

function CorrectionDialogComponent_mat_hint_43_span_1_Template(rf, ctx) {
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

function CorrectionDialogComponent_mat_hint_43_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function CorrectionDialogComponent_mat_hint_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CorrectionDialogComponent_mat_hint_43_span_1_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CorrectionDialogComponent_mat_hint_43_span_2_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.markCtrl == null ? null : ctx_r1.markCtrl.errors == null ? null : ctx_r1.markCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.markCtrl == null ? null : ctx_r1.markCtrl.errors == null ? null : ctx_r1.markCtrl.errors.whiteSpace);
  }
}

var CorrectionDialogComponent = /*#__PURE__*/function () {
  function CorrectionDialogComponent(data, fb, route, authserv, router, msg, GeneralService, // private toastr: ToastrService,
  examService, spinner, dialog) {
    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CorrectionDialogComponent);

    // this.route.queryParamMap.subscribe((params) => {
    //   this.groupId = Number(params.get("groupId"));
    this.data = data;
    this.fb = fb;
    this.route = route;
    this.authserv = authserv;
    this.router = router;
    this.msg = msg;
    this.GeneralService = GeneralService;
    this.examService = examService;
    this.spinner = spinner;
    this.dialog = dialog; //   this.functionId = Number(params.get("functionId"));
    //   //  console.log("functionId", this.functionId);
    //   if (this.functionId) {
    //     this.authserv
    //       .getUserRowFunctions(this.functionId)
    //       .subscribe((res: any) => {
    //         if (res) {
    //           this.rowFunctions = res;
    //           //  console.log(`RowFunctions for"${this.functionId}": `, res);
    //         }
    //       });
    //   }
    // });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CorrectionDialogComponent, [{
    key: "questionNameCtrl",
    get: function get() {
      return this.myForm.get("questionName");
    }
  }, {
    key: "questionAnswerCtrl",
    get: function get() {
      return this.myForm.get("studentAnswer");
    }
  }, {
    key: "markCtrl",
    get: function get() {
      return this.myForm.get("mark");
    }
  }, {
    key: "teacherCommentCtrl",
    get: function get() {
      return this.myForm.get("teacherComment");
    }
  }, {
    key: "questionIdCtrl",
    get: function get() {
      return this.myForm.get("questionId");
    }
  }, {
    key: "examStudentIdCtrl",
    get: function get() {
      return this.myForm.get("examStudentId");
    }
  }, {
    key: "teacherUserIdCtrl",
    get: function get() {
      return this.myForm.get("teacherUserId");
    }
  }, {
    key: "questionMarkCtrl",
    get: function get() {
      return this.myForm.get("questionMark");
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log("data", this.data);
      this.EduCompId = this.authserv.getEduCompId();
      this.myForm = this.fb.group({
        questionName: [''],
        studentAnswer: [''],
        questionId: [],
        examStudentId: [],
        teacherComment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        teacherUserId: [],
        questionMark: [],
        mark: [, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      });
      this.questionNameCtrl.setValue(this.data.msg.questionName);
      this.questionNameCtrl.disable();
      this.questionIdCtrl.setValue(this.data.msg.questionId);
      this.examStudentIdCtrl.setValue(this.data.msg.examStudentId);
      this.teacherUserIdCtrl.setValue(this.data.msg.teacherUserId);
      this.questionMarkCtrl.setValue(this.data.msg.questionMark);
      this.FormCtrl.studentAnswer.setValue(this.data.msg.studentAnswer);
    }
  }, {
    key: "CorrectQuestion",
    value: function CorrectQuestion() {
      var _this = this;

      var valid = this.myForm.valid;

      if (valid) {
        console.log("my form", this.myForm.value);

        if (this.markCtrl.value > this.questionMarkCtrl.value) {
          this.msg.error("يجب ادخال قيمة النتيجة أقل من القية النهائية");
          return;
        } else {
          this.spinner.show(); // console.log("form data", this.myForm.value);

          this.examService.submitCorrection(this.myForm.value).subscribe(function (res) {
            if (res.returnValue == 1) {
              _this.msg.success("تم تصحيح السؤال");

              _this.dialog.closeAll();
            } else _this.msg.error(res.returnString);

            _this.spinner.hide();
          });
        }
      }
    }
  }]);

  return CorrectionDialogComponent;
}();

CorrectionDialogComponent.ɵfac = function CorrectionDialogComponent_Factory(t) {
  return new (t || CorrectionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
};

CorrectionDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CorrectionDialogComponent,
  selectors: [["app-correction-dialog"]],
  decls: 49,
  vars: 26,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-12", "col-12"], ["appearance", "legacy"], ["matInput", "", "cols", "20", "formControlName", "questionName", "readonly", ""], ["matInput", "", "cols", "20", "formControlName", "studentAnswer", "readonly", ""], [1, "question-img"], ["alt", "Question Image", 1, "img-fluid", 3, "src"], [1, "col-md-6", "col-12"], ["matInput", "", "formControlName", "teacherComment"], ["class", "danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "mark"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [1, "danger"], [4, "ngIf"]],
  template: function CorrectionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CorrectionDialogComponent_mat_hint_36_Template, 3, 2, "mat-hint", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, CorrectionDialogComponent_mat_hint_43_Template, 3, 2, "mat-hint", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-card-actions", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrectionDialogComponent_Template_button_click_45_listener() {
        return ctx.CorrectQuestion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 12, "labels.Correct"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 14, "General.Close"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 16, "labels.\u064EQuestionContent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 18, "labels.\u064EQuestionContent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.data.imageAttatch, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 20, "labels.TeacherComment"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.teacherCommentCtrl == null ? null : ctx.teacherCommentCtrl.invalid) && ((ctx.teacherCommentCtrl == null ? null : ctx.teacherCommentCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 22, "labels.Mark"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.markCtrl == null ? null : ctx.markCtrl.invalid) && ((ctx.markCtrl == null ? null : ctx.markCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 24, "General.Add"), " ");
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".question-img[_ngcontent-%COMP%] {\r\n    overflow: hidden !important;\r\n    max-width: 100% !important;\r\n    max-height: 156px !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtFQUM5QiIsImZpbGUiOiJjb3JyZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uLWltZyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDE1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 96864:
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exam-correction/correction-index/correction-index.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectionIndexComponent": function() { return /* binding */ CorrectionIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _correction_dialog_correction_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../correction-dialog/correction-dialog.component */ 80216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
























function CorrectionIndexComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.ExamNm"), " ");
  }
}

function CorrectionIndexComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r12.examName);
  }
}

function CorrectionIndexComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.\u064EQuestionContent"), " ");
  }
}

function CorrectionIndexComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r13.questionName);
  }
}

function CorrectionIndexComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Teacher"), " ");
  }
}

function CorrectionIndexComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r14.teacherName);
  }
}

function CorrectionIndexComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CorrectionIndexComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrectionIndexComponent_td_50_Template_button_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var question_r15 = restoredCtx.$implicit;
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r16.openCorrectDialog(question_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CorrectionIndexComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 28);
  }
}

function CorrectionIndexComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
  }
}

function CorrectionIndexComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

var CorrectionIndexComponent = /*#__PURE__*/function () {
  function CorrectionIndexComponent(examService, route, authserv, fb, spinner, dialog) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CorrectionIndexComponent);

    this.examService = examService;
    this.route = route;
    this.authserv = authserv;
    this.fb = fb;
    this.spinner = spinner;
    this.dialog = dialog;
    this.correction = [];
    this.displayedColumns = ["examName", "questionName", "teacherName", "actions"];
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); //  console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CorrectionIndexComponent, [{
    key: "page",
    get: function get() {
      return this.myForm.get("page");
    }
  }, {
    key: "CorrectedQuestionsIdCtrl",
    get: function get() {
      return this.myForm.get("CorrectedQuestions");
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.myForm = this.fb.group({
        page: [""],
        EduCompId: [this.EduCompId],
        CorrectedQuestions: [1]
      }); //this.openCorrectDialog();

      this.getAllQuestions(1, 1);
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "getAllQuestions",
    value: function getAllQuestions(p, CorrectedQuestions) {
      var _this2 = this;

      var _a;

      (_a = this.myForm.controls["page"]) === null || _a === void 0 ? void 0 : _a.setValue(p); // this.myForm.controls["CorrectedQuestions"].value;

      this.spinner.show();
      this.examService.getQuestionByCorrectionType(p, CorrectedQuestions).subscribe(function (response) {
        if (response) {
          console.log('quesions not corrected: ', response.examsList);
          _this2.correction = response.examsList.examQuestions;
          console.log("correct list", _this2.correction); //   this.question=response.examsList.examQuestions;

          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(response.examsList); // this.correction = response.examList;

          _this2.itemsCount = response.itemsCount;

          _this2.spinner.hide();
        }
      });
    }
  }, {
    key: "openCorrectDialog",
    value: function openCorrectDialog(item) {
      this.dialog.open(_correction_dialog_correction_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CorrectionDialogComponent, {
        data: {
          msg: item
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) console.log("dialog");
      });
    }
  }]);

  return CorrectionIndexComponent;
}();

CorrectionIndexComponent.ɵfac = function CorrectionIndexComponent_Factory(t) {
  return new (t || CorrectionIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_3__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};

CorrectionIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CorrectionIndexComponent,
  selectors: [["app-correction-index"]],
  viewQuery: function CorrectionIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 55,
  vars: 25,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right"], [1, "fa", "fa-search", "mr-1"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-12", "col-12"], ["formControlName", "CorrectedQuestions", 1, "row"], [1, "col-md-4", "col-12"], [3, "value", "change"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "examName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "questionName"], ["matColumnDef", "teacherName"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function CorrectionIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-radio-group", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-radio-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CorrectionIndexComponent_Template_mat_radio_button_change_18_listener() {
        return ctx.getAllQuestions(1, 0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-radio-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CorrectionIndexComponent_Template_mat_radio_button_change_22_listener() {
        return ctx.getAllQuestions(1, 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function CorrectionIndexComponent_Template_input_keyup_35_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](39, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CorrectionIndexComponent_th_40_Template, 3, 3, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, CorrectionIndexComponent_td_41_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](42, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, CorrectionIndexComponent_th_43_Template, 3, 3, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, CorrectionIndexComponent_td_44_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](45, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CorrectionIndexComponent_th_46_Template, 3, 3, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, CorrectionIndexComponent_td_47_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](48, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, CorrectionIndexComponent_th_49_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, CorrectionIndexComponent_td_50_Template, 4, 0, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, CorrectionIndexComponent_tr_51_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, CorrectionIndexComponent_tr_52_Template, 1, 0, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, CorrectionIndexComponent_tr_53_Template, 3, 1, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-paginator", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function CorrectionIndexComponent_Template_mat_paginator_page_54_listener($event) {
        return ctx.getAllQuestions($event.pageIndex + 1, ctx.CorrectedQuestionsIdCtrl.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 14, "labels.ExamsCorrection"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 16, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 18, "labels.CorrectedQuestions"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 20, "labels.UnCorrectedQuestions"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 22, "labels.ExamsCorrection"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c0))("length", 0)("pageSize", 10);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZWN0aW9uLWluZGV4LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 40669:
/*!*****************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exams-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsRoutingModule": function() { return /* binding */ ExamsRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _templates_templates_custome_points_templates_custome_points_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/templates-custome-points/templates-custome-points.component */ 33442);
/* harmony import */ var _templates_add_template_add_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/add-template/add-template.component */ 20533);
/* harmony import */ var _questions_banck_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions-banck/add-question/add-question.component */ 52708);
/* harmony import */ var _questions_banck_questions_index_questions_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions-banck/questions-index/questions-index.component */ 37466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exams/add-exam/add-exam.component */ 38285);
/* harmony import */ var _exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exams/exams-index/exams-index.component */ 74660);
/* harmony import */ var _templates_templates_index_templates_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/templates-index/templates-index.component */ 71383);
/* harmony import */ var _exam_correction_correction_index_correction_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exam-correction/correction-index/correction-index.component */ 96864);
/* harmony import */ var _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exams/exam-preview/exam-preview.component */ 12083);
/* harmony import */ var _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exams/exams-custome-points/exams-custome-points.component */ 47062);
/* harmony import */ var _surveys_surveys_index_surveys_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./surveys/surveys-index/surveys-index.component */ 15572);
/* harmony import */ var _surveys_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./surveys/add-survey/add-survey.component */ 29246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);

















var routes = [{
  path: "",
  redirectTo: "exam",
  pathMatch: "full"
}, {
  path: "exam-preview/:examId/:type",
  component: _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_10__.ExamPreviewComponent
}, {
  path: "exam/:courseId/:typeId",
  children: [{
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  }, {
    //http://localhost:4200/dashboard/exams-setup/exam/add-exam/3?functionId=23
    path: "index",
    component: _exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_7__.ExamsIndexComponent
  }, {
    path: "add-exam",
    component: _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_6__.AddExamComponent
  }, {
    path: "exam-points/:examId",
    component: _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_11__.ExamsCustomePointsComponent
  }]
}, {
  path: "survey/:courseId/:typeId",
  data: {
    breadcrumb: "Navbar.Surveys",
    view: "survey"
  },
  children: [{
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  }, {
    path: "index",
    component: _surveys_surveys_index_surveys_index_component__WEBPACK_IMPORTED_MODULE_12__.SurveysIndexComponent,
    data: {
      breadcrumb: "Navbar.SurveyList",
      view: "survey-index"
    }
  }, {
    path: "add-survey",
    component: _surveys_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_13__.AddSurveyComponent,
    data: {
      breadcrumb: "Navbar.newesurvay",
      view: "add-survey"
    }
  }]
}, {
  path: "question-bank",
  children: [{
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  }, {
    path: "index",
    component: _questions_banck_questions_index_questions_index_component__WEBPACK_IMPORTED_MODULE_5__.QuestionsIndexComponent
  }, {
    path: "add-question",
    component: _questions_banck_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__.AddQuestionComponent
  }]
}, {
  path: "templates",
  children: [{
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  }, {
    path: "index",
    component: _templates_templates_index_templates_index_component__WEBPACK_IMPORTED_MODULE_8__.TemplatesIndexComponent
  }, {
    path: "add-template",
    component: _templates_add_template_add_template_component__WEBPACK_IMPORTED_MODULE_3__.AddTemplateComponent
  }, {
    path: "template-points/:templateId",
    component: _templates_templates_custome_points_templates_custome_points_component__WEBPACK_IMPORTED_MODULE_2__.TemplatesCustomePointsComponent
  }]
}, {
  path: "exam-correction",
  children: [{
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  }, {
    path: "index",
    component: _exam_correction_correction_index_correction_index_component__WEBPACK_IMPORTED_MODULE_9__.CorrectionIndexComponent
  } // { path: "add-template", component: AddTemplateComponent },
  ]
} // { path: "templates-index", component: TemplatesIndexComponent },
];
var ExamsRoutingModule = /*#__PURE__*/(0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExamsRoutingModule() {
  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExamsRoutingModule);
});

ExamsRoutingModule.ɵfac = function ExamsRoutingModule_Factory(t) {
  return new (t || ExamsRoutingModule)();
};

ExamsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: ExamsRoutingModule
});
ExamsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ExamsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 61094:
/*!*********************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exams.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsModule": function() { return /* binding */ ExamsModule; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _exams_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exams-routing.module */ 40669);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exams/add-exam/add-exam.component */ 38285);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _questions_banck_questions_index_questions_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-banck/questions-index/questions-index.component */ 37466);
/* harmony import */ var _questions_banck_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions-banck/add-question/add-question.component */ 52708);
/* harmony import */ var _exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exams/exams-index/exams-index.component */ 74660);
/* harmony import */ var _exams_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exams/add-sub-question/add-sub-question.component */ 69981);
/* harmony import */ var _templates_templates_index_templates_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/templates-index/templates-index.component */ 71383);
/* harmony import */ var _templates_add_template_add_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/add-template/add-template.component */ 20533);
/* harmony import */ var _exam_correction_correction_index_correction_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exam-correction/correction-index/correction-index.component */ 96864);
/* harmony import */ var _exam_correction_correction_dialog_correction_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exam-correction/correction-dialog/correction-dialog.component */ 80216);
/* harmony import */ var _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exams/exam-preview/exam-preview.component */ 12083);
/* harmony import */ var _templates_templates_custome_points_templates_custome_points_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/templates-custome-points/templates-custome-points.component */ 33442);
/* harmony import */ var _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exams/exams-custome-points/exams-custome-points.component */ 47062);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/validators/date.adapter */ 89778);
/* harmony import */ var _surveys_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./surveys/add-survey/add-survey.component */ 29246);
/* harmony import */ var _surveys_surveys_index_surveys_index_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./surveys/surveys-index/surveys-index.component */ 15572);
/* harmony import */ var _surveys_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./surveys/add-sub-question/add-sub-question.component */ 86380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);




























var ExamsModule = /*#__PURE__*/(0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExamsModule() {
  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExamsModule);
});

ExamsModule.ɵfac = function ExamsModule_Factory(t) {
  return new (t || ExamsModule)();
};

ExamsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
  type: ExamsModule
});
ExamsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.DateAdapter,
    useClass: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_17__.AppDateAdapter
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS,
    useValue: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_17__.APP_DATE_FORMATS
  }],
  imports: [[_exams_routing_module__WEBPACK_IMPORTED_MODULE_2__.ExamsRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](ExamsModule, {
    declarations: [_exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_8__.ExamsIndexComponent, _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_5__.AddExamComponent, _exams_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_9__.AddSubQuestionComponent, _questions_banck_questions_index_questions_index_component__WEBPACK_IMPORTED_MODULE_6__.QuestionsIndexComponent, _questions_banck_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_7__.AddQuestionComponent, _templates_templates_index_templates_index_component__WEBPACK_IMPORTED_MODULE_10__.TemplatesIndexComponent, _templates_add_template_add_template_component__WEBPACK_IMPORTED_MODULE_11__.AddTemplateComponent, _exam_correction_correction_index_correction_index_component__WEBPACK_IMPORTED_MODULE_12__.CorrectionIndexComponent, _exam_correction_correction_dialog_correction_dialog_component__WEBPACK_IMPORTED_MODULE_13__.CorrectionDialogComponent, _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_14__.ExamPreviewComponent, _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_16__.ExamsCustomePointsComponent, _templates_templates_custome_points_templates_custome_points_component__WEBPACK_IMPORTED_MODULE_15__.TemplatesCustomePointsComponent, _surveys_surveys_index_surveys_index_component__WEBPACK_IMPORTED_MODULE_19__.SurveysIndexComponent, _surveys_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_18__.AddSurveyComponent, _surveys_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_20__.AddSurvaySubQuestionComponent],
    imports: [_exams_routing_module__WEBPACK_IMPORTED_MODULE_2__.ExamsRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 12083:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exams/exam-preview/exam-preview.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamPreviewComponent": function() { return /* binding */ ExamPreviewComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/save-exam-dialog/save-exam-dialog.component */ 53483);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/pipes/slice-exam-pic.pipe */ 51033);


















function ExamPreviewComponent_ng_container_0_ng_container_12_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, "labels.TotalMark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.examTotalMark);
  }
}

function ExamPreviewComponent_ng_container_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ExamPreviewComponent_ng_container_0_ng_container_12_mat_card_2_Template, 9, 4, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.type == 3);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "sliceExamPic");
  }

  if (rf & 2) {
    var Question_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "https://schoolsystem.cloudiax.com", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, Question_r8.QuestionDetails == null ? null : Question_r8.QuestionDetails.questionAttach), "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "sliceExamPic");
  }

  if (rf & 2) {
    var mcq_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "https://schoolsystem.cloudiax.com", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, mcq_r14.MCQAttach), "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_img_4_Template, 2, 3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var mcq_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", mcq_r14.Id)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mcq_r14.MCQText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", mcq_r14.MCQAttach);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_img_3_Template, 2, 3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-radio-group", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_Template, 5, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var Question_r8 = ctx.$implicit;
    var i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", i_r9 + 1, ") ", Question_r8.QuestionDetails == null ? null : Question_r8.QuestionDetails.questionText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", Question_r8.QuestionDetails == null ? null : Question_r8.QuestionDetails.questionAttach);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "question-", Question_r8.QuestionDetails == null ? null : Question_r8.QuestionDetails.questionId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", Question_r8.MCQ);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_Template, 10, 5, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var head_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", head_r6.HeadName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", head_r6 == null ? null : head_r6.Questions);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_Template, 5, 2, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("group-", group_r4.GroupId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", group_r4.GroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", group_r4.Heads);
  }
}

function ExamPreviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ExamPreviewComponent_ng_container_0_ng_container_12_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ExamPreviewComponent_ng_container_0_mat_tab_18_Template, 2, 5, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.ExamName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.TeacherName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.SubjectName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isSolved);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.ExamGroups);
  }
}

var ExamPreviewComponent = /*#__PURE__*/function () {
  function ExamPreviewComponent(studentServ, toastr, route, router, spinner, dialog) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamPreviewComponent);

    this.studentServ = studentServ;
    this.toastr = toastr;
    this.route = route;
    this.router = router;
    this.spinner = spinner;
    this.dialog = dialog; //Exams Lists

    this.ExamDetails = [];
    this.ExamGroups = null;
    this.solvedQuestionNumberArr = []; // previously Solved Question

    this.AnswerdQuestionsNumber = []; // Current Answerd Question

    this.IsAvaliable = true;
    this.exam_period_minute = 0; // Solved Exam

    this.isSolved = false;
    this.PickedChoiceId = [];
    this.route.paramMap.subscribe(function (params) {
      _this.examId = params.get("examId");
      _this.type = Number(params.get("type"));
      console.log("this.examId", _this.examId);
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamPreviewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.returnStudentExam(this.examId);
    }
  }, {
    key: "returnStudentExam",
    value: function returnStudentExam(examId) {
      var _this2 = this;

      this.spinner.show();
      this.studentServ.returnStudentExam(examId).subscribe(function (res) {
        console.log("exam: ", res);

        if (res.returnValue === -5) {
          _this2.spinner.hide();

          _this2.returnExamResults(res.examId); // this.toastr.warning("تم حل الامتحان مسبقاً");


          return;
        }

        if (res.returnValue === 505) {
          _this2.toastr.warning("يجب شراء المحاضرة اولا");

          _this2.router.navigateByUrl("/home");

          _this2.spinner.hide();

          return;
        } else if (res.returnValue === 200) {
          _this2.isSolved = false;
          _this2.ExamGroups = res.exam.groups;
          _this2.ExamName = res.exam.details.exam_ar_name;
          _this2.IsAvaliable = res.mv.IsAvailable;
          _this2.TeacherName = res.teacherName;
          _this2.SubjectName = res.mv.subject.subject_ar_name;
          _this2.studentUserId = res.mv.exam_student.studentUserId;
          _this2.examTotalMark = res.mv.examTotalMark;
          _this2.exam_period_minute = res.exam.details.exam_period_minute;
          _this2.solvedExamStudent_ID = res.mv.solvedExamStudent_ID;
          _this2.student_grade = res.mv.exam_student.student_grade; // this.questionNumber = res.exam.groups[0].Heads[0].Questions.length;

          var GL = res.exam.groups.length,
              // length of Groups
          num = 0;

          for (var k = 0; k < GL; k++) {
            var HL = res.exam.groups[k].Heads.length; // length of Heads

            if (HL != 0) {
              for (var m = 0; m < HL; m++) {
                var QL = res.exam.groups[k].Heads[m].Questions.length; //Length of Questions

                num = num + QL;
              }
            }

            _this2.questionNumber = num;
          } // if  Exam Have Time Run Timer


          if (res.exam.details.exam_period_minute != 0 && res.exam.details.exam_period_minute != null) {
            _this2.timer(res.exam.details.exam_period_minute);
          } // get Exam  Start Time


          var currentTime = new Date();
          var hh = currentTime.getHours();
          var mm = currentTime.getMinutes();
          var ss = currentTime.getSeconds();
          _this2.ExamStarTime = hh + ":" + mm + ":" + ss; // If Repeated Exam get number of solved questions

          var j = res.exam.groups[0].Heads[0].Questions.length,
              i;

          for (i = 0; i <= j; i++) {
            if (res.exam.groups[0].Heads[0].Questions[i] && res.exam.groups[0].Heads[0].Questions[i].QuestionDetails && res.exam.groups[0].Heads[0].Questions[i].QuestionDetails.StudentChoice) {
              if (res.exam.groups[0].Heads[0].Questions[i].QuestionDetails.StudentChoice.RESULT == "T") {
                // console.log(i)
                _this2.solvedQuestionNumberArr.push({
                  id: i
                });
              }
            }

            _this2.spinner.hide();
          }

          _this2.spinner.hide();
        }
      });
    } // Exam Results

  }, {
    key: "returnExamResults",
    value: function returnExamResults(examId) {
      var _this3 = this;

      this.spinner.show();
      this.studentServ.returnStudentExamResults(examId).subscribe(function (res) {
        var _a; //  console.log("resultes: ", res);


        _this3.isSolved = true;
        _this3.ExamGroups = res.item.groups;
        _this3.ExamName = res.item.details.exam_ar_name;
        _this3.TeacherName = res.teacherName;
        _this3.SubjectName = res.SubjectName; //this.studentId = res.ex.exam_student.student_id;
        //this.IsAvaliable = res.item.details.IsAvaliable;

        _this3.examTotalMark = res.ex.total_mark;
        _this3.student_grade = (_a = res.ex.exam_student) === null || _a === void 0 ? void 0 : _a.student_grade;
        _this3.studentMark = res.ex.exam_result;
        _this3.examDuration = res.ex.examDuration;
        _this3.examResultDate = res.ex.examResultDate;
        _this3.examResultTime = res.ex.examResultTime;
        _this3.IsResultAvalable = res.ex.IsResultAvalable;
        _this3.isSolviedResultsOff = !res.ex.IsResultAvalable;
        _this3.showResult = res.ex.showResult;
        _this3.PointsGained = res.ex.PointsGained;
        _this3.repeatable = res.ex.repeatable;
        _this3.repeatableExam_Count = res.ex.repeatableExam_Count;
        _this3.solvidResults = [];

        _this3.spinner.hide(); // $('.closeMod').hide();
        // $('#resultsMV').hide();
        // $('.modal-backdrop').removeClass('fade show in');

      });
    }
  }, {
    key: "onRadioChange",
    value: function onRadioChange(event, questionID) {
      // this.PickedChoices = event.value;
      var answer = {
        questionId: questionID,
        choiceId: event.value
      };
      var question = this.PickedChoiceId.findIndex(function (e) {
        return e.questionId === questionID;
      });
      console.log(question);
      if (question >= 0) this.PickedChoiceId[question] = answer;else this.PickedChoiceId.push(answer); //  console.log("PickedChoiceId", this.PickedChoiceId);
    }
  }, {
    key: "SingleQuestionForm",
    value: function SingleQuestionForm(questionId) {
      var _this4 = this;

      var answer = this.PickedChoiceId.find(function (e) {
        return e.questionId === questionId;
      }); // console.log("answerFromSigleQ", answer);

      if ((answer === null || answer === void 0 ? void 0 : answer.choiceId) == null || (answer === null || answer === void 0 ? void 0 : answer.choiceId) == undefined) {
        this.toastr.warning("من فضلك اختر إجابة");
        return;
      } else {
        var data = {
          examId: this.examId,
          studentUserId: this.studentUserId,
          PickedChoiceId: answer.choiceId,
          questionId: questionId // AnswerText: AnswerText,

        }; // console.log("SingleQuestionData: ", data);

        this.studentServ.SubmitSingleQuestion(data).subscribe(function (res) {
          //    console.log("SubmitSingleQuestion", res);
          if (res.returnValue == 200) {
            //this.PickedChoiceId = null;
            document.getElementById("alert-".concat(questionId)).style.display = "none";
            var element = document.querySelector("#btn-" + questionId);
            element.classList.remove("btn-primary");
            element.classList.add("btn-success");
            element.innerHTML = "تم حفظ الإجابة";
            var ansMsg = document.getElementById("stu-cho-".concat(questionId));
            ansMsg.style.display = "block";
            ansMsg.innerHTML = "\u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 : (\"".concat(res.returnedChoice, "\")");

            var founded = _this4.AnswerdQuestionsNumber.find(function (x) {
              return x.questionId === questionId;
            });

            if (!founded) {
              _this4.AnswerdQuestionsNumber.push({
                questionId: questionId
              });
            }
          }

          if (res.returnValue == 505) {
            document.querySelector("#alert-" + questionId).innerHTML = "من فضلك تأكد من إختيار إجابه";

            _this4.toastr.error("من فضلك تأكد من إختيار إجابه", "خطأ");
          }
        });
      }
    }
  }, {
    key: "SubmitExam",
    value: function SubmitExam() {
      var _this5 = this;

      //let confirmed = confirm('هل انت متأكد من حفظ الإمتحان والخروج؟');
      if (this.questionNumber - this.solvedQuestionNumberArr.length > this.AnswerdQuestionsNumber.length) {
        var msg = ' لم يتم إجابة جميع الاسئله، عدد الاسئله التي لم يتم إجابتها "' + (this.questionNumber - this.solvedQuestionNumberArr.length - this.AnswerdQuestionsNumber.length) + '" سؤال';
        this.toastr.error(msg);
      } else {
        this.spinner.show();
        var data = {
          examId: this.examId,
          studentUserId: this.studentUserId,
          solvedExamStudent_ID: this.solvedExamStudent_ID,
          ExamStarTime: this.ExamStarTime
        };
        this.studentServ.SubmitExam(data).subscribe(function (res) {
          //   console.log("submited", res);
          if (res.returnValue == 0) {
            _this5.toastr.warning(" تم حل الإمتحان من قبل", "خطأ");

            _this5.spinner.hide();
          } else {
            //console.log(res);
            _this5.solvidResults = res;

            _this5.openDialog(res);

            _this5.spinner.hide();
          }
        });
      }
    }
  }, {
    key: "timer",
    value: function timer(Examtime) {
      var _this6 = this;

      // Exam Timer
      //let countDown: any;
      var time = Examtime * 60;
      var counter = time;
      var tick = 1000; //this.oberserableTimer()

      var countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(0, tick).subscribe(function () {
        if (counter > 0) {
          if (counter == time / 2) {
            var msg = 'باقي من وقت الإمتحان  " ' + Examtime / 2 + '" دقيقه';

            _this6.toastr.warning(msg);
          }

          if (counter == time / 4) {
            var _msg = 'باقي من وقت الإمتحان  " ' + Examtime / 4 + '" دقيقه';

            _this6.toastr.warning(_msg);
          }

          --counter;
          _this6.counter = counter;
        } else if (counter == 0) {
          _this6.toastr.error("تم إنتهاء الوقت ");

          countDown == null;
          counter = null;

          _this6.spinner.show();

          var data = {
            examId: _this6.examId,
            studentUserId: _this6.studentUserId,
            solvedExamStudent_ID: _this6.solvedExamStudent_ID,
            ExamStarTime: _this6.ExamStarTime
          };

          _this6.studentServ.SubmitExam(data).subscribe(function (res) {
            if (res.returnValue == 0) {
              _this6.toastr.error(" تم حل الإمتحان من قبل", "خطأ");

              _this6.spinner.hide();
            } else {
              // console.log(res);
              _this6.solvidResults = res;

              _this6.openDialog(res);

              _this6.spinner.hide();
            }
          });
        }
      });
    }
  }, {
    key: "openDialog",
    value: function openDialog(solvidResults) {
      var _this7 = this;

      var dialogRef = this.dialog.open(app_shared_components_dialogs_save_exam_dialog_save_exam_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SaveExamDialogComponent, {
        data: {
          solvidResults: solvidResults
        }
      });
      dialogRef.afterClosed().subscribe(function (repeatable) {
        if (repeatable) _this7.refresh();else _this7.router.navigateByUrl("/home");
      });
    } // Refresh Page

  }, {
    key: "refresh",
    value: function refresh() {
      window.location.reload();
    }
  }]);

  return ExamPreviewComponent;
}();

ExamPreviewComponent.ɵfac = function ExamPreviewComponent_Factory(t) {
  return new (t || ExamPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_3__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};

ExamPreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ExamPreviewComponent,
  selectors: [["app-exam-preview"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "row", "exam-container"], [1, "col-md-3", "col-12"], [1, "row"], [1, "col-12"], ["role", "alert", 1, "alert", "bg-light-primary", "mb-2"], [1, "badge", "bg-primary", "mb-1", "mr-2"], [1, "col-md-9", "col-12"], [3, "label", "class", 4, "ngFor", "ngForOf"], ["align", "end"], ["class", "card card-inverse bg-info", 4, "ngIf"], [1, "card", "card-inverse", "bg-info"], [1, "media"], [1, "media-body", "text-left"], [1, "card-text"], [3, "label"], [4, "ngFor", "ngForOf"], ["class", "examimage", 3, "src", 4, "ngIf"], [1, "exam-radio-group", 3, "id"], ["choice", ""], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "examimage", 3, "src"], [3, "value", "disabled"]],
  template: function ExamPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ExamPreviewComponent_ng_container_0_Template, 20, 5, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ExamGroups);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_4__.SliceExamPicPipe],
  styles: [".alert.bg-light-primary[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LmJnLWxpZ2h0LXByaW1hcnkgLmJhZGdlIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 47062:
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exams/exams-custome-points/exams-custome-points.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsCustomePointsComponent": function() { return /* binding */ ExamsCustomePointsComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_admin_services_Admin_points_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/points.service */ 12397);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function ExamsCustomePointsComponent_ng_container_12_mat_hint_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ExamsCustomePointsComponent_ng_container_12_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamsCustomePointsComponent_ng_container_12_mat_hint_7_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.required) || (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.minusNum));
  }
}

function ExamsCustomePointsComponent_ng_container_12_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ExamsCustomePointsComponent_ng_container_12_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamsCustomePointsComponent_ng_container_12_mat_hint_14_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.required) || (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.minusNum));
  }
}

function ExamsCustomePointsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamsCustomePointsComponent_ng_container_12_mat_hint_7_Template, 2, 1, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamsCustomePointsComponent_ng_container_12_mat_hint_14_Template, 2, 1, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "labels.From"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrls.from.invalid && (ctx_r0.FormCtrls.from.touched || ctx_r0.Submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 6, "labels.To"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrls.to.invalid && (ctx_r0.FormCtrls.to.touched || ctx_r0.Submitted));
  }
}

function ExamsCustomePointsComponent_mat_hint_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ExamsCustomePointsComponent_mat_hint_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamsCustomePointsComponent_mat_hint_19_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.value.errors == null ? null : ctx_r1.FormCtrls.value.errors.required) || (ctx_r1.FormCtrls.value.errors == null ? null : ctx_r1.FormCtrls.value.errors.minusNum));
  }
}

function ExamsCustomePointsComponent_tr_44_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.ByQuestion"), " ");
  }
}

function ExamsCustomePointsComponent_tr_44_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.ByExam"), " ");
  }
}

function ExamsCustomePointsComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamsCustomePointsComponent_tr_44_td_1_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamsCustomePointsComponent_tr_44_td_2_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamsCustomePointsComponent_tr_44_Template_button_click_10_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      var point_r9 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r13.openDeleateExamPointDialog(point_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var point_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", point_r9.ByQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !point_r9.ByQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](point_r9.FromValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](point_r9.ToValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](point_r9.Value);
  }
}

function ExamsCustomePointsComponent_pagination_controls_46_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "pagination-controls", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ExamsCustomePointsComponent_pagination_controls_46_Template_pagination_controls_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r15.p = $event;
      return ctx_r15.getExamCustomPoints($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxSize", ctx_r3.maxSize);
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2
  };
};

var ExamsCustomePointsComponent = /*#__PURE__*/function () {
  function ExamsCustomePointsComponent(fb, toastr, authserv, route, PointsService, dialog, spinner) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamsCustomePointsComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.authserv = authserv;
    this.route = route;
    this.PointsService = PointsService;
    this.dialog = dialog;
    this.spinner = spinner;
    this.Submitted = false;
    this.p = 1;
    this.maxSize = 9;
    route.paramMap.subscribe(function (params) {
      _this.examId = Number(params.get("examId"));
    });
    this.route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamsCustomePointsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getExamCustomPoints(1);
      this.myForm = this.fb.group({
        ByQuestion: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        from: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        to: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        value: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]]
      });
      this.ByQuestionValidators(false);
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "addExamCustomPoint",
    value: function addExamCustomPoint() {
      var _this2 = this;

      var _a, _b, _c, _d;

      this.Submitted = true;
      var data = {
        itemId: this.examId,
        ByQuestion: (_a = this.FormCtrls) === null || _a === void 0 ? void 0 : _a.ByQuestion.value,
        from: (_b = this.FormCtrls) === null || _b === void 0 ? void 0 : _b.from.value,
        to: (_c = this.FormCtrls) === null || _c === void 0 ? void 0 : _c.to.value,
        value: (_d = this.FormCtrls) === null || _d === void 0 ? void 0 : _d.value.value
      };

      if (this.myForm.valid) {
        this.spinner.show();
        this.PointsService.addExamCustomPoint(data).subscribe(function (res) {
          var _a;

          if (res.returnValue == 1) {
            _this2.getExamCustomPoints(1);

            _this2.toastr.success("تم إاضافة النقاط");

            _this2.Submitted = false;

            _this2.myForm.reset();

            (_a = _this2.FormCtrls) === null || _a === void 0 ? void 0 : _a.ByQuestion.setValue(false);
          }

          _this2.spinner.hide();
        });
      }
    }
  }, {
    key: "getExamCustomPoints",
    value: function getExamCustomPoints(p) {
      var _this3 = this;

      this.spinner.show();
      this.PointsService.getExamCustomPoints(p, this.examId).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this3.ItemsCount = res.itemsCount;
          _this3.Points = res.points;
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "deleteExamCustomPoint",
    value: function deleteExamCustomPoint(point) {
      var _this4 = this;

      this.spinner.show();
      this.PointsService.deleteExamCustomPoint(point.Id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this4.Points.findIndex(function (e) {
            return e == point;
          });

          _this4.Points.splice(i, 1);

          _this4.toastr.success("تم الحذف");
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "openDeleateExamPointDialog",
    value: function openDeleateExamPointDialog(point) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: "".concat(point.Value, ": points")
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteExamCustomPoint(point);
      });
    }
  }, {
    key: "track",
    value: function track(index, point) {
      return point.Id;
    }
  }, {
    key: "ByQuestionValidators",
    value: function ByQuestionValidators(ByQuestion) {
      if (ByQuestion == true) {
        this.FormCtrls.from.reset();
        this.FormCtrls.from.clearValidators();
        this.FormCtrls.to.reset();
        this.FormCtrls.to.clearValidators();
      } else {
        this.FormCtrls.from.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]);
        this.FormCtrls.to.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]);
      }

      this.FormCtrls.from.updateValueAndValidity();
      this.FormCtrls.to.updateValueAndValidity();
    }
  }]);

  return ExamsCustomePointsComponent;
}();

ExamsCustomePointsComponent.ɵfac = function ExamsCustomePointsComponent_Factory(t) {
  return new (t || ExamsCustomePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_admin_services_Admin_points_service__WEBPACK_IMPORTED_MODULE_5__.PointsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

ExamsCustomePointsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ExamsCustomePointsComponent,
  selectors: [["app-exams-custome-points"]],
  decls: 47,
  vars: 39,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/exam/index", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [4, "ngIf"], [1, "col-lg-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "number", "formControlName", "value"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "from"], ["matInput", "", "type", "number", "formControlName", "to"], [1, "text-danger"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"]],
  template: function ExamsCustomePointsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ExamsCustomePointsComponent_ng_container_12_Template, 15, 8, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamsCustomePointsComponent_mat_hint_19_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamsCustomePointsComponent_Template_button_click_21_listener() {
        return ctx.addExamCustomPoint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ExamsCustomePointsComponent_tr_44_Template, 13, 5, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ExamsCustomePointsComponent_pagination_controls_46_Template, 1, 1, "pagination-controls", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 15, "labels.ExamPoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 17, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ByQuestion.value === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 19, "labels.pointsNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.value.invalid && (ctx.FormCtrls.value.touched || ctx.Submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 21, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 23, "labels.ByQuestion"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 25, "labels.From"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 27, "labels.To"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 29, "labels.pointsNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](45, 31, ctx.Points, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](36, _c1, ctx.p, ctx.ItemsCount)))("ngForTrackBy", ctx.track);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.Points == null ? null : ctx.Points.length) > 5);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcy1jdXN0b21lLXBvaW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 74660:
/*!************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exams/exams-index/exams-index.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsIndexComponent": function() { return /* binding */ ExamsIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/Admin/setup/course.service */ 96002);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);




























function ExamsIndexComponent_mat_label_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.ExamName"));
  }
}

function ExamsIndexComponent_mat_label_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.SurveyName"));
  }
}

function ExamsIndexComponent_mat_hint_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function ExamsIndexComponent_mat_hint_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamsIndexComponent_mat_hint_23_span_1_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.myForm.examNameCtrl == null ? null : ctx_r2.myForm.examNameCtrl.errors == null ? null : ctx_r2.myForm.examNameCtrl.errors.required);
  }
}

function ExamsIndexComponent_mat_card_title_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Navbar.Exams"), "");
  }
}

function ExamsIndexComponent_mat_card_title_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Navbar.Surveys"), "");
  }
}

function ExamsIndexComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ExamsIndexComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r20 + 1);
  }
}

function ExamsIndexComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function ExamsIndexComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r21.exam_ar_name);
  }
}

function ExamsIndexComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.CourseName"), " ");
  }
}

function ExamsIndexComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r22 = ctx.$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r11.curLang == "ar" ? ele_r22.course_ar_name : ele_r22.course_en_name, " ");
  }
}

function ExamsIndexComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.ThePublish"), " ");
  }
}

function ExamsIndexComponent_td_53_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Published"), " ");
  }
}

function ExamsIndexComponent_td_53_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.UnPublished"), " ");
  }
}

function ExamsIndexComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamsIndexComponent_td_53_span_1_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamsIndexComponent_td_53_span_2_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", exam_r23 == null ? null : exam_r23.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(exam_r23 == null ? null : exam_r23.isPublish));
  }
}

function ExamsIndexComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 34);
  }
}

function ExamsIndexComponent_td_56_ng_container_5_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.Publish"), " ");
  }
}

function ExamsIndexComponent_td_56_ng_container_5_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.Unpublish"), " ");
  }
}

function ExamsIndexComponent_td_56_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamsIndexComponent_td_56_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);
      var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r35.onPublishExam(exam_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamsIndexComponent_td_56_ng_container_5_a_1_span_1_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamsIndexComponent_td_56_ng_container_5_a_1_span_2_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !exam_r26.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", exam_r26.isPublish);
  }
}

var _c0 = function _c0(a0, a1, a2) {
  return {
    examId: a0,
    functionId: a1,
    parentId: a2
  };
};

function ExamsIndexComponent_td_56_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](4, _c0, exam_r26.id, ctx_r30.functionId, ctx_r30.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "General.Edit"), " ");
  }
}

function ExamsIndexComponent_td_56_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamsIndexComponent_td_56_ng_container_5_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);
      var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r40.openDeleateDialog(exam_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

function ExamsIndexComponent_td_56_ng_container_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("routerLink", "/dashboard/exams-setup/exam-preview/", exam_r26.id, "/", ctx_r32.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c1, ctx_r32.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, "General.ExamPreview"), " ");
  }
}

function ExamsIndexComponent_td_56_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamsIndexComponent_td_56_ng_container_5_a_1_Template, 3, 2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamsIndexComponent_td_56_ng_container_5_a_2_Template, 4, 8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamsIndexComponent_td_56_ng_container_5_a_3_Template, 4, 3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamsIndexComponent_td_56_ng_container_5_a_4_Template, 4, 8, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r28.functionName === "publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Show");
  }
}

function ExamsIndexComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamsIndexComponent_td_56_ng_container_5_Template, 5, 4, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r15.rowFunctions);
  }
}

function ExamsIndexComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 52);
  }
}

function ExamsIndexComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 53);
  }

  if (rf & 2) {
    var row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-light-info", !(row_r44 == null ? null : row_r44.isPublish));
  }
}

function ExamsIndexComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r5.value, "\" ");
  }
}

var _c2 = function _c2(a0, a1) {
  return {
    functionId: a0,
    parentId: a1
  };
};

var _c3 = function _c3() {
  return [10];
};

var ExamsIndexComponent = /*#__PURE__*/function () {
  function ExamsIndexComponent(route, fb, authserv, examService, msg, spinner, generalService, dialog, courseser, translate) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamsIndexComponent);

    this.route = route;
    this.fb = fb;
    this.authserv = authserv;
    this.examService = examService;
    this.msg = msg;
    this.spinner = spinner;
    this.generalService = generalService;
    this.dialog = dialog;
    this.courseser = courseser;
    this.translate = translate;
    this.exams = [];
    this.countries = [];
    this.stages = [];
    this.educationYears = [];
    this.subjects = [];
    this.exms = [];
    this.exam = [];
    this.displayedColumns = ["#", "name", "course", "publish", "actions"];
    route.paramMap.subscribe(function (params) {
      _this.type = Number(params.get("typeId"));
    });
    route.paramMap.subscribe(function (params) {
      _this.subId = Number(params.get("courseId"));
    });
    this.translate.onLangChange.subscribe(function (lang) {
      _this.curLang = lang.lang;
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));
      _this.parentId = Number(params.get("parentId")); //  console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamsIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      this.myForm = this.fb.group({
        examName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] //   countryId: [""],
        //   stageId: [""],
        //   educationYearId: [""],
        //   subjectId: ["0"],
        //   teacherUserId: ["0"],
        //   page: [""],
        //   EduCompId: [this.EduCompId],

      }); //  this.stageIdCtrl?.disable();
      //  this.educationYearIdCtrl?.disable();
      //  this.subjectIdCtrl?.disable();
      //this.teacherIdCtrl?.disable();
      // this.getAllCountieres();

      this.getAllExams(1);
    }
  }, {
    key: "examNameCtrl",
    get: function get() {
      return this.myForm.get("examName");
    } // get countryIdCtrl() {
    //   return this.myForm.get("countryId");
    // }
    // get stageIdCtrl() {
    //   return this.myForm.get("stageId");
    // }
    // get educationYearIdCtrl() {
    //   return this.myForm.get("educationYearId");
    // }
    // get subjectIdCtrl() {
    //   return this.myForm.get("subjectId");
    // }
    // get teacherUserIdCtrl() {
    //   return this.myForm.get("teacherUserId");
    // }
    // get page() {
    //   return this.myForm.get("page");
    // }

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllExams(1);
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } //   getcoursebyId(){
    // this.courseser.getMainCourseById(this.subId).subscribe((res:any)=>{
    //   if(res){
    //     return res;
    //   }
    // })
    //   }

  }, {
    key: "getAllExams",
    value: function getAllExams(p) {
      var _this3 = this;

      var _a; // this.page?.setValue(p);
      // this.myForm.controls["EduCompId"].setValue(this.EduCompId);


      var data = {
        typeId: this.type,
        page: p,
        EduCompId: this.EduCompId,
        subjectId: this.subId,
        examName: (_a = this.examNameCtrl) === null || _a === void 0 ? void 0 : _a.value
      };
      this.spinner.show();
      this.examService.getAllNormalExams(data).subscribe(function (response) {
        if (response) {
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(response.examList);
          _this3.exams = response.examList;
          _this3.totalItems = response.totalCount;
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "removeExam",
    value: function removeExam(exam) {
      var _this4 = this;

      this.examService.deleteExam(exam.id).subscribe(function (response) {
        if (response) {
          //  console.log('deleted: ', response);
          var deletedIndex = _this4.dataSource.data.findIndex(function (gh) {
            return gh == exam;
          });

          _this4.dataSource.data.splice(deletedIndex, 1);

          _this4.exams.splice(deletedIndex, 1);

          _this4.msg.success("تم حذف الإمتحان");
        }
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(exam) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: exam.exam_ar_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) {
          _this5.removeExam(exam);
        }
      });
    }
  }, {
    key: "onPublishExam",
    value: function onPublishExam(exam) {
      var _this6 = this;

      this.examService.publishExam(exam.id).subscribe(function (response) {
        if (response) {
          var i = _this6.exams.findIndex(function (e) {
            return e === exam;
          });

          _this6.exams[i].isPublish = !_this6.exams[i].isPublish; // for (const obj of this.exms) {
          //   if (obj.id === exam.id) {
          //     obj.isPublish = !obj.isPublish;
          //     break;
          //   }
          // }

          _this6.msg.success("Done");
        }
      });
    } // getAllCountieres() {
    //   this.examService
    //     .getAllCountries<ICountrieDropModel[]>()
    //     .subscribe((response) => {
    //       if (response) {
    //         //console.log("COUNTIRES: ", response);
    //         this.countries = response;
    //       }
    //     });
    // }
    // onSelectCountry() {
    //   this.stageIdCtrl?.setValue("");
    //   this.educationYearIdCtrl?.setValue("");
    //   this.subjectIdCtrl?.setValue("");
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.countryIdCtrl?.value) {
    //     //  console.log('SELECTED country: ', this.countryIdCtrl?.value);
    //     this.examService
    //       .getAllStages<IStageDropModel[]>(this.countryIdCtrl?.value)
    //       .subscribe((response) => {
    //         if (response) {
    //           this.stages = response;
    //           //console.log("STAGES:", response);
    //           this.stageIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.stageIdCtrl?.disable();
    //     this.educationYearIdCtrl?.disable();
    //     this.subjectIdCtrl?.disable();
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }
    // onSelectStages() {
    //   this.educationYearIdCtrl?.setValue("");
    //   this.subjectIdCtrl?.setValue("");
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.stageIdCtrl?.value) {
    //     //console.log("SELECTED stages: ", this.stageIdCtrl?.value);
    //     this.examService
    //       .getAllEducationYears<IEducationYearDropModel[]>(
    //         this.stageIdCtrl?.value
    //       )
    //       .subscribe((response) => {
    //         if (response) {
    //           this.educationYears = response;
    //           //console.log("YEARS:", response);
    //           this.educationYearIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.educationYearIdCtrl?.disable();
    //     this.subjectIdCtrl?.disable();
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }
    // onSelectEducationYears() {
    //   this.subjectIdCtrl?.setValue("");
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.educationYearIdCtrl?.value) {
    //     //console.log("SELECTED YEARS: ", this.stageIdCtrl?.value);
    //     this.examService
    //       .getAllSubjects<ISubjectDropModel[]>(this.educationYearIdCtrl?.value)
    //       .subscribe((response) => {
    //         if (response) {
    //           this.subjects = response;
    //           //console.log("SUBJECTS:", response);
    //           this.subjectIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.subjectIdCtrl?.disable();
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }
    // onSelectSubjects() {
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.subjectIdCtrl?.value) {
    //     //console.log("SELECTED subject: ", this.stageIdCtrl?.value);
    //     this.generalService
    //       .getTeacherBySubjectAndEduCompId(
    //         this.EduCompId,
    //         this.subjectIdCtrl?.value
    //       )
    //       .subscribe((response: any) => {
    //         if (response) {
    //           this.teachers = response.teachers;
    //           console.log("teachers:", response);
    //           this.teacherUserIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }

  }, {
    key: "track",
    value: function track(index, el) {
      return el.Id;
    }
  }]);

  return ExamsIndexComponent;
}();

ExamsIndexComponent.ɵfac = function ExamsIndexComponent_Factory(t) {
  return new (t || ExamsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
};

ExamsIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ExamsIndexComponent,
  selectors: [["app-exams-index"]],
  viewQuery: function ExamsIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 61,
  vars: 32,
  consts: [[1, "row"], [1, "col-12", "mb-3"], [1, ""], ["mat-raised-button", "", "routerLink", "/dashboard/setup/course/sub-course", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", "routerLink", "../add-exam", 1, "btn", "btn-info", "bg-light-info", "float-right", "mb-2", 3, "queryParams"], [1, "fa", "fa-plus"], [1, "container-fluid"], [1, "col-12"], [3, "formGroup"], [1, "col-md-12", "col-12"], ["appearance", "legacy"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "examName"], ["class", "danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search", "mr-1"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "course"], ["matColumnDef", "publish"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "bg-light-info", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [1, "danger"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "success", "ml-1"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../add-exam", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-upload", "font-medium-3", "mr-2"], [1, "ft-download", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "routerLink", "../add-exam", 3, "queryParams"], [1, "fa", "fa-edit", "font-medium-3", "mr-2"], [1, "fa", "fa-times", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams"], [1, "fa", "fa-video-camera", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function ExamsIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-card-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ExamsIndexComponent_mat_label_20_Template, 3, 3, "mat-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ExamsIndexComponent_mat_label_21_Template, 3, 3, "mat-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ExamsIndexComponent_mat_hint_23_Template, 2, 1, "mat-hint", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-card-actions", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamsIndexComponent_Template_a_click_25_listener() {
        return ctx.getAllExams(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ExamsIndexComponent_mat_card_title_32_Template, 3, 3, "mat-card-title", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ExamsIndexComponent_mat_card_title_33_Template, 3, 3, "mat-card-title", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-form-field", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ExamsIndexComponent_Template_input_keyup_38_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "table", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](42, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, ExamsIndexComponent_th_43_Template, 2, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ExamsIndexComponent_td_44_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](45, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, ExamsIndexComponent_th_46_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, ExamsIndexComponent_td_47_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](48, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, ExamsIndexComponent_th_49_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ExamsIndexComponent_td_50_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](51, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, ExamsIndexComponent_th_52_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, ExamsIndexComponent_td_53_Template, 3, 2, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](54, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ExamsIndexComponent_th_55_Template, 1, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ExamsIndexComponent_td_56_Template, 6, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, ExamsIndexComponent_tr_57_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ExamsIndexComponent_tr_58_Template, 1, 2, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, ExamsIndexComponent_tr_59_Template, 3, 1, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-paginator", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function ExamsIndexComponent_Template_mat_paginator_page_60_listener($event) {
        return ctx.getAllExams($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 18, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c1, ctx.parentId));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 20, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](28, _c2, ctx.functionId, ctx.parentId));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 22, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.examNameCtrl == null ? null : ctx.examNameCtrl.invalid) && (ctx.examNameCtrl == null ? null : ctx.examNameCtrl.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 24, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](31, _c3))("length", ctx.totalItems)("pageSize", 10);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcy1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 52708:
/*!************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/questions-banck/add-question/add-question.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddQuestionComponent": function() { return /* binding */ AddQuestionComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/admin/services/Admin/educational.service */ 56471);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

























function AddQuestionComponent_mat_hint_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddQuestionComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_35_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.question_type_id == null ? null : ctx_r0.question_type_id.errors == null ? null : ctx_r0.question_type_id.errors.required);
  }
}

function AddQuestionComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", teacher_r16.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", teacher_r16.teacher_ar_name, " ");
  }
}

function AddQuestionComponent_mat_hint_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddQuestionComponent_mat_hint_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_46_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.teacherUserId == null ? null : ctx_r2.teacherUserId.errors == null ? null : ctx_r2.teacherUserId.errors.required);
  }
}

function AddQuestionComponent_mat_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", subject_r18.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", subject_r18.Text, " ");
  }
}

function AddQuestionComponent_mat_hint_57_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddQuestionComponent_mat_hint_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_57_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.main_subject_id == null ? null : ctx_r4.main_subject_id.errors == null ? null : ctx_r4.main_subject_id.errors.required);
  }
}

function AddQuestionComponent_mat_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var unit_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", unit_r20.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", unit_r20.Text, " ");
  }
}

function AddQuestionComponent_mat_option_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lesson_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", lesson_r21.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", lesson_r21.Text, " ");
  }
}

function AddQuestionComponent_mat_option_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var topic_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", topic_r22.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", topic_r22.Text, " ");
  }
}

function AddQuestionComponent_mat_hint_109_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddQuestionComponent_mat_hint_109_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddQuestionComponent_mat_hint_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_109_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddQuestionComponent_mat_hint_109_span_2_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.mark == null ? null : ctx_r8.mark.errors == null ? null : ctx_r8.mark.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.mark == null ? null : ctx_r8.mark.errors == null ? null : ctx_r8.mark.errors.minusNum);
  }
}

function AddQuestionComponent_mat_hint_117_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddQuestionComponent_mat_hint_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_117_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r9.question_ar_text == null ? null : ctx_r9.question_ar_text.errors == null ? null : ctx_r9.question_ar_text.errors.required) || (ctx_r9.question_ar_text == null ? null : ctx_r9.question_ar_text.errors == null ? null : ctx_r9.question_ar_text.errors.whiteSpace));
  }
}

function AddQuestionComponent_mat_checkbox_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddQuestionComponent_div_128_mat_hint_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddQuestionComponent_div_128_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddQuestionComponent_div_128_mat_hint_6_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r26.perfect_answer == null ? null : ctx_r26.perfect_answer.errors == null ? null : ctx_r26.perfect_answer.errors.required) || (ctx_r26.perfect_answer == null ? null : ctx_r26.perfect_answer.errors == null ? null : ctx_r26.perfect_answer.errors.whiteSpace));
  }
}

function AddQuestionComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddQuestionComponent_div_128_mat_hint_6_Template, 2, 1, "mat-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "labels.perfect_answer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.perfect_answer.invalid && (ctx_r11.perfect_answer.touched || ctx_r11.submitted));
  }
}

function AddQuestionComponent_ng_container_130_mat_card_1_mat_checkbox_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddQuestionComponent_ng_container_130_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-content", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddQuestionComponent_ng_container_130_mat_card_1_Template_input_change_18_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      var questionIndex_r30 = restoredCtx.index;
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r32.onChange($event, questionIndex_r30);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, AddQuestionComponent_ng_container_130_mat_card_1_mat_checkbox_21_Template, 2, 1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var question_r29 = ctx.$implicit;
    var questionIndex_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 9, "labels.AnswerNumber"), "(", questionIndex_r30 + 1, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", questionIndex_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 11, "labels.AnswerText"), "(", questionIndex_r30 + 1, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 13, "labels.AnswerPic"), " (", questionIndex_r30 + 1, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (question_r29.value == null ? null : question_r29.value.ChoiceAttachPath) !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", question_r29.value == null ? null : question_r29.value.ChoiceAttachPath, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

function AddQuestionComponent_ng_container_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddQuestionComponent_ng_container_130_mat_card_1_Template, 23, 15, "mat-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-radio-group", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r12.choices.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 10, "labels.ChooseCorrectAnswer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 12, "labels.AnswerOne"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 14, "labels.AnswerTwo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 16, "labels.AnswerThree"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 18, "labels.AnswerFour"), " ");
  }
}

function AddQuestionComponent_button_132_Template(rf, ctx) {
  if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddQuestionComponent_button_132_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r34.addUpdateQuestion();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Add"), " ");
  }
}

function AddQuestionComponent_button_133_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddQuestionComponent_button_133_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r36.addUpdateQuestion();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var AddQuestionComponent = /*#__PURE__*/function () {
  function AddQuestionComponent(router, route, fb, toastr, spinner, authService, examsService, GeneralService, datePipe, EducationalService) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddQuestionComponent);

    this.router = router;
    this.route = route;
    this.fb = fb;
    this.toastr = toastr;
    this.spinner = spinner;
    this.authService = authService;
    this.examsService = examsService;
    this.GeneralService = GeneralService;
    this.datePipe = datePipe;
    this.EducationalService = EducationalService;
    this.questionID = null;
    this.submitted = false; //Images

    this.QuestionAttachPath = null;
    this.questionsInputs = [{
      choice_id: 0,
      choice_text: "",
      thumbnailPic: "",
      ChoiceAttachPath: "",
      //  IsCorrect: false,
      remove_image: false
    }, {
      choice_id: 1,
      choice_text: "",
      thumbnailPic: "",
      ChoiceAttachPath: "",
      // IsCorrect: false,
      remove_image: false
    }, {
      choice_id: 2,
      choice_text: "",
      thumbnailPic: "",
      ChoiceAttachPath: "",
      // IsCorrect: false,
      remove_image: false
    }, {
      choice_id: 3,
      choice_text: "",
      thumbnailPic: "",
      ChoiceAttachPath: "",
      // IsCorrect: false,
      remove_image: false
    }];
    this.route.queryParamMap.subscribe(function (params) {
      _this.questionID = params.get("questionId");
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }

      if (_this.questionID) {
        _this.getQuestionByID(_this.questionID);
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AddQuestionComponent, [{
    key: "choices",
    get: function get() {
      return this.myForm.get("choices");
    }
  }, {
    key: "QuestionId",
    get: function get() {
      return this.myForm.get("questionBank.question.id");
    }
  }, {
    key: "question_type_id",
    get: function get() {
      return this.myForm.get("questionBank.question.question_type_id");
    }
  }, {
    key: "teacherUserId",
    get: function get() {
      return this.myForm.get("questionBank.question.teacherUserId");
    }
  }, {
    key: "picked_choice_index",
    get: function get() {
      return this.myForm.get("picked_choice_index");
    }
  }, {
    key: "QuestionBankId",
    get: function get() {
      return this.myForm.get("questionBank.Id");
    }
  }, {
    key: "main_subject_id",
    get: function get() {
      return this.myForm.get("questionBank.main_subject_id");
    }
  }, {
    key: "question_id",
    get: function get() {
      return this.myForm.get("questionBank.question_id");
    }
  }, {
    key: "unitId",
    get: function get() {
      return this.myForm.get("questionBank.unitId");
    }
  }, {
    key: "lessonId",
    get: function get() {
      return this.myForm.get("questionBank.lessonId");
    }
  }, {
    key: "topicId",
    get: function get() {
      return this.myForm.get("questionBank.topicId");
    }
  }, {
    key: "difficulty_level",
    get: function get() {
      return this.myForm.get("questionBank.difficulty_level");
    }
  }, {
    key: "question_ar_text",
    get: function get() {
      return this.myForm.get("questionBank.question.question_ar_text");
    }
  }, {
    key: "perfect_answer",
    get: function get() {
      return this.myForm.get("questionBank.question.perfect_answer");
    }
  }, {
    key: "mark",
    get: function get() {
      return this.myForm.get("questionBank.mark");
    }
  }, {
    key: "remove_image",
    get: function get() {
      return this.myForm.get("questionBank.question.remove_image");
    }
  }, {
    key: "thumbnailPic",
    get: function get() {
      return this.myForm.get("questionBank.question.thumbnailPic");
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      //get Current EduCompId
      this.EduCompId = this.authService.getEduCompId();
      this.branchId = this.authService.getBranchId();
      this.getTeachersByEducompId(this.EduCompId);
      this.myForm = this.fb.group({
        questionBank: this.fb.group({
          Id: [0],
          main_subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
          unitId: [""],
          lessonId: [""],
          topicId: [""],
          mark: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]],
          difficulty_level: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
          question_id: [0],
          question: this.fb.group({
            id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            question_type_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            teacherUserId: [""],
            question_ar_text: [""],
            perfect_answer: [],
            remove_image: [false],
            thumbnailPic: [null]
          })
        }),
        picked_choice_index: [null],
        choices: this.fb.array([])
      });
      this.changeQuestionType();
      this.setDefaultChoises();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authService.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getTeachersByEducompId(e.EduCompId);
      });
      this.authService.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      }); //console.log("choices ", this.choices.value);
      //  console.log("choices controls ", this.choices.controls);
    }
  }, {
    key: "setDefaultChoises",
    value: function setDefaultChoises() {
      var _this3 = this;

      this.questionsInputs.map(function (d) {
        return _this3.choices.push(_this3.fb.group({
          choice_id: d.choice_id,
          choice_text: d.choice_text,
          thumbnailPic: d.thumbnailPic,
          remove_image: d.remove_image //IsCorrect: d.IsCorrect,

        }));
      });
    }
  }, {
    key: "getQuestionByID",
    value: function getQuestionByID(id) {
      var _this4 = this;

      this.spinner.show();
      this.examsService.getQuestionByID(id).subscribe(function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s; //console.log("getQuestionByID: ", res);


        if (res.QuestionId != null) {
          (_a = _this4.teacherUserId) === null || _a === void 0 ? void 0 : _a.enable();
          (_b = _this4.main_subject_id) === null || _b === void 0 ? void 0 : _b.enable();

          _this4.getSubjectByTeacherId(res.TeacherUserId);

          _this4.GetUnits(res.SubjectId);

          _this4.GetLessons(res.UnitId);

          _this4.GetTopics(res.LessonId);

          (_c = _this4.QuestionBankId) === null || _c === void 0 ? void 0 : _c.setValue(res.QuestionBankId);
          (_d = _this4.QuestionId) === null || _d === void 0 ? void 0 : _d.setValue(res.QuestionId);
          (_e = _this4.question_id) === null || _e === void 0 ? void 0 : _e.setValue(res.QuestionId);
          (_f = _this4.main_subject_id) === null || _f === void 0 ? void 0 : _f.setValue(String(res.SubjectId));
          (_g = _this4.question_type_id) === null || _g === void 0 ? void 0 : _g.setValue(res.QuestionTypeId);
          (_h = _this4.teacherUserId) === null || _h === void 0 ? void 0 : _h.setValue(res.TeacherUserId);
          (_j = _this4.unitId) === null || _j === void 0 ? void 0 : _j.setValue(String(res.UnitId));
          (_k = _this4.lessonId) === null || _k === void 0 ? void 0 : _k.setValue(String(res.LessonId));
          (_l = _this4.topicId) === null || _l === void 0 ? void 0 : _l.setValue(String(res.TopicId));
          (_m = _this4.difficulty_level) === null || _m === void 0 ? void 0 : _m.setValue(res.DifficultyLevel);
          (_o = _this4.question_ar_text) === null || _o === void 0 ? void 0 : _o.setValue(res.QuestionTextAr);
          (_p = _this4.perfect_answer) === null || _p === void 0 ? void 0 : _p.setValue(res.PerfectAnswer);
          (_q = _this4.mark) === null || _q === void 0 ? void 0 : _q.setValue(res.Mark);
          (_r = _this4.thumbnailPic) === null || _r === void 0 ? void 0 : _r.setValue(res.QuestionAttachId);
          _this4.QuestionAttachPath = res.QuestionAttachPath != null ? "mozakretyapi" + res.QuestionAttachPath : null;

          if (res.Choices.length != 0) {
            var d = res.Choices;

            _this4.choices.clear();

            _this4.questionsInputs = res.Choices;

            _this4.questionsInputs.map(function (d) {
              return _this4.choices.push(_this4.fb.group({
                choice_id: d.ChoiceId,
                choice_text: d.ChoiceText,
                thumbnailPic: d.thumbnailPic,
                ChoiceAttachPath: d.ChoiceAttachPath != null ? "mozakretyapi" + d.ChoiceAttachPath : null,
                //  IsCorrect: d.IsCorrect,
                remove_image: d.remove_image || false
              }));
            }); // console.log("this.questionsInputs", this.questionsInputs);
            // console.log("this.Choices", this.choices.value);


            var _iterator = (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res.Choices),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var obj = _step.value;

                if (obj.IsCorrect == true) {
                  var i = res.Choices.findIndex(function (item) {
                    return item.IsCorrect === true;
                  });
                  (_s = _this4.picked_choice_index) === null || _s === void 0 ? void 0 : _s.setValue(i);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            _this4.setDefaultChoises();
          }
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "addUpdateQuestion",
    value: function addUpdateQuestion() {
      var _this5 = this;

      var _a, _b;

      this.submitted = true; // console.log("valid?: ", this.myForm.valid);
      //If MCQ Validation

      if (((_a = this.question_type_id) === null || _a === void 0 ? void 0 : _a.value) == 2 || ((_b = this.question_type_id) === null || _b === void 0 ? void 0 : _b.value) == 3) {
        //answer 1
        if (!this.choices.value[0].thumbnailPic && !this.choices.value[0].choice_text) {
          this.toastr.warning("Must Enter answer 1 text or picture");
          return;
        } //answer 2


        if (!this.choices.value[1].thumbnailPic && !this.choices.value[1].choice_text) {
          this.toastr.warning("Must Enter answer 2 text or picture");
          return;
        } //answer 3


        if (!this.choices.value[2].thumbnailPic && !this.choices.value[2].choice_text) {
          this.toastr.warning("Must Enter answer 3 text or picture");
          return;
        } //answer 4


        if (!this.choices.value[3].thumbnailPic && !this.choices.value[3].choice_text) {
          this.toastr.warning("Must Enter answer 4 text or picture");
          return;
        } //Correct answer


        if (this.FormCtrl.picked_choice_index.value < 0) {
          this.toastr.warning("Must Choose Correct answer ");
          return;
        }
      }

      console.log("myFormValue ", this.myForm.value);

      if (this.myForm.valid) {
        //  console.log("Call API");
        this.spinner.show();
        this.examsService.addEditQuestion(this.EduCompId, this.myForm.value).subscribe(function (res) {
          if (res.questionId != null) {
            _this5.question_id.setValue(res.questionId);

            _this5.questionID = res.questionId;

            _this5.toastr.success("Question Added Successful");
          }

          _this5.spinner.hide();
        });
      }
    }
  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId(EduCompId) {
      var _this6 = this;

      var _a, _b, _c, _d, _e, _f; // this.main_subject_id?.setValue("");
      // this.unitId?.setValue("");
      // this.lessonId?.setValue("");
      // this.topicId?.setValue("");


      if (EduCompId != null) {
        this.GeneralService.getTeachersByEducompId(EduCompId).subscribe(function (res) {
          var _a;

          _this6.Teachers = res.lstTeachers;
          (_a = _this6.teacherUserId) === null || _a === void 0 ? void 0 : _a.enable();
        });
      } else {
        (_a = this.teacherUserId) === null || _a === void 0 ? void 0 : _a.setValue("");
        (_b = this.teacherUserId) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.main_subject_id) === null || _c === void 0 ? void 0 : _c.disable();
        (_d = this.unitId) === null || _d === void 0 ? void 0 : _d.disable();
        (_e = this.lessonId) === null || _e === void 0 ? void 0 : _e.disable();
        (_f = this.topicId) === null || _f === void 0 ? void 0 : _f.disable();
      }
    }
  }, {
    key: "getSubjectByTeacherId",
    value: function getSubjectByTeacherId(teacherId) {
      var _this7 = this;

      if (teacherId != null) {
        this.GeneralService.getSubjectByTeacherId(teacherId).subscribe(function (res) {
          _this7.subjects = res.lsts;
        });
      }
    }
  }, {
    key: "GetUnits",
    value: function GetUnits(SubjectId) {
      var _this8 = this;

      var _a, _b, _c, _d; // this.unitId?.setValue("");
      // this.lessonId?.setValue("");
      // this.topicId?.setValue("");


      if (SubjectId != "") {
        this.EducationalService.GetUnits(SubjectId).subscribe(function (res) {
          var _a;

          _this8.units = res;
          (_a = _this8.unitId) === null || _a === void 0 ? void 0 : _a.enable();
        });
      } else {
        (_a = this.unitId) === null || _a === void 0 ? void 0 : _a.setValue("");
        (_b = this.unitId) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.lessonId) === null || _c === void 0 ? void 0 : _c.disable();
        (_d = this.topicId) === null || _d === void 0 ? void 0 : _d.disable();
      }
    }
  }, {
    key: "GetLessons",
    value: function GetLessons(unitId) {
      var _this9 = this;

      var _a, _b, _c; // this.lessonId?.setValue("");
      // this.topicId?.setValue("");


      if (unitId != "") {
        this.EducationalService.GetLessons(unitId).subscribe(function (res) {
          var _a;

          _this9.lessons = res;
          (_a = _this9.lessonId) === null || _a === void 0 ? void 0 : _a.enable();
        });
      } else {
        (_a = this.lessonId) === null || _a === void 0 ? void 0 : _a.setValue("");
        (_b = this.lessonId) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.topicId) === null || _c === void 0 ? void 0 : _c.disable();
      }
    }
  }, {
    key: "GetTopics",
    value: function GetTopics(LessonId) {
      var _this10 = this;

      var _a, _b; //  this.topicId?.setValue("");


      if (LessonId != "") {
        this.EducationalService.GetTopics(LessonId).subscribe(function (res) {
          var _a;

          _this10.topics = res;
          (_a = _this10.topicId) === null || _a === void 0 ? void 0 : _a.enable();
        });
      } else {
        (_a = this.topicId) === null || _a === void 0 ? void 0 : _a.setValue("");
        (_b = this.topicId) === null || _b === void 0 ? void 0 : _b.disable();
      }
    }
  }, {
    key: "setMainSubjectToForm",
    value: function setMainSubjectToForm(SubjectId) {
      var _a;

      (_a = this.main_subject_id) === null || _a === void 0 ? void 0 : _a.setValue(SubjectId);
    } //OnChange Question Type

  }, {
    key: "changeQuestionType",
    value: function changeQuestionType() {
      var _this11 = this;

      var _a;

      (_a = this.question_type_id) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(function (data) {
        _this11.changeValidators();
      });
    } //OnChange Question Type Change Validators

  }, {
    key: "changeValidators",
    value: function changeValidators() {
      var _a;

      var question_type = (_a = this.question_type_id) === null || _a === void 0 ? void 0 : _a.value;

      if (question_type == 1) {
        // this.myForm.controls['slectans'].clearValidators();
        this.perfect_answer.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]);
      }

      if (question_type == 2 || question_type == 3) {
        this.perfect_answer.clearValidators();
        this.perfect_answer.reset(); //  this.myForm.controls['slectans'].setValidators([]);
      }

      this.perfect_answer.updateValueAndValidity(); // this.myForm.controls['slectans'].updateValueAndValidity();
    }
  }, {
    key: "resetManual",
    value: function resetManual() {
      this.myForm.reset();
      this.submitted = false; //this.myForm.controls['Year_to_join'].setValue('');
    } // Choose Question and answer Imgs

  }, {
    key: "onChange",
    value: function onChange(event, i) {
      var _this12 = this;

      var fileName = event.target.files[0].name;
      var fileSize = event.target.files[0].size;
      var fileType = event.target.files[0].type;
      var LastModified = event.target.files[0].lastModified;
      var LastModifiedDate = event.target.files[0].lastModifiedDate;

      if (event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = function (event) {
          var _a;

          var fileReder = event.target.result;
          var data = {
            FileAsBase64: fileReder,
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          }; // if main question img

          if (i == -1) {
            (_a = _this12.thumbnailPic) === null || _a === void 0 ? void 0 : _a.setValue(data);
            _this12.QuestionAttachPath = fileReder;
          } else {
            var _iterator2 = (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this12.choices.value),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var obj = _step2.value;

                var objIndex = _this12.choices.value.indexOf(obj);

                if (objIndex === i) {
                  obj.thumbnailPic = data;
                  obj.ChoiceAttachPath = fileReder;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } //  console.log("questionsInputs: ", this.questionsInputs);
          // console.log("choices.value: ", this.choices.value);

        };
      }
    }
  }]);

  return AddQuestionComponent;
}();

AddQuestionComponent.ɵfac = function AddQuestionComponent_Factory(t) {
  return new (t || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_5__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_7__.EducationalService));
};

AddQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddQuestionComponent,
  selectors: [["app-add-question"]],
  decls: 134,
  vars: 91,
  consts: [[1, "col-12"], [1, "content-header"], [1, "row"], ["mat-raised-button", "", "routerLink", "../index", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], ["formGroupName", "questionBank"], ["formGroupName", "question"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["formControlName", "question_type_id", 3, "selectionChange"], [3, "value"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "teacherUserId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "main_subject_id", 3, "selectionChange"], ["formControlName", "unitId", 3, "selectionChange"], ["formControlName", "lessonId", 3, "selectionChange"], ["formControlName", "topicId"], ["formControlName", "difficulty_level"], ["matInput", "", "type", "number", "formControlName", "mark"], ["matInput", "", "type", "text", "formControlName", "question_ar_text"], [1, "col-md-4", "col-12"], ["type", "file", "accept", "image/*", 1, "form-control", "font-dro", "clearInputs", 3, "change"], [1, "col-md-8", "col-12"], [1, "question-img"], ["formControlName", "remove_image", "class", "remove_image", 3, "value", 4, "ngIf"], [1, "img-fluid", 3, "src"], ["class", "col-12", 4, "ngIf"], [4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary bg-light-info", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "text-danger"], ["formControlName", "remove_image", 1, "remove_image", 3, "value"], ["matInput", "", "type", "text", "formControlName", "perfect_answer"], ["formArrayName", "choices", "class", "card bg-light", 4, "ngFor", "ngForOf"], [1, "bg-light-info"], ["formControlName", "picked_choice_index", 1, "row"], [1, "col-3"], ["formArrayName", "choices", 1, "card", "bg-light"], [3, "formGroupName"], ["matInput", "", "type", "text", "formControlName", "choice_text"], ["mat-raised-button", "", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"]],
  template: function AddQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](17, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](19, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddQuestionComponent_Template_mat_select_selectionChange_25_listener() {
        return ctx.changeQuestionType();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, AddQuestionComponent_mat_hint_35_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddQuestionComponent_Template_mat_select_selectionChange_41_listener() {
        return ctx.getSubjectByTeacherId(ctx.teacherUserId == null ? null : ctx.teacherUserId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, AddQuestionComponent_mat_option_45_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, AddQuestionComponent_mat_hint_46_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddQuestionComponent_Template_mat_select_selectionChange_52_listener() {
        return ctx.GetUnits(ctx.main_subject_id == null ? null : ctx.main_subject_id.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, AddQuestionComponent_mat_option_56_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, AddQuestionComponent_mat_hint_57_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](62, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddQuestionComponent_Template_mat_select_selectionChange_63_listener() {
        return ctx.GetLessons(ctx.unitId == null ? null : ctx.unitId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, AddQuestionComponent_mat_option_67_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddQuestionComponent_Template_mat_select_selectionChange_73_listener() {
        return ctx.GetTopics(ctx.lessonId == null ? null : ctx.lessonId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](76, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, AddQuestionComponent_mat_option_77_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "mat-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](86, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, AddQuestionComponent_mat_option_87_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](92, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "mat-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](96, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "\u0633\u0647\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "\u0645\u062A\u0648\u0633\u0637");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "\u0635\u0639\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](107, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](108, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](109, AddQuestionComponent_mat_hint_109_Template, 3, 2, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](110, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](115, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](116, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](117, AddQuestionComponent_mat_hint_117_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](118);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](122, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddQuestionComponent_Template_input_change_123_listener($event) {
        return ctx.onChange($event, -1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](126, AddQuestionComponent_mat_checkbox_126_Template, 2, 1, "mat-checkbox", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](127, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](128, AddQuestionComponent_div_128_Template, 7, 4, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](129, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](130, AddQuestionComponent_ng_container_130_Template, 24, 20, "ng-container", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "mat-card-actions", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](132, AddQuestionComponent_button_132_Template, 4, 3, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](133, AddQuestionComponent_button_133_Template, 3, 3, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 45, "Navbar.QuestionsBank"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 47, "labels.AddQuestion"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](89, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 49, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 51, "labels.QuestionType"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 53, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 55, "labels.Article"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 57, "labels.Mcq"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.question_type_id == null ? null : ctx.question_type_id.invalid) && ((ctx.question_type_id == null ? null : ctx.question_type_id.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 59, "labels.Teacher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 61, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.teacherUserId == null ? null : ctx.teacherUserId.invalid) && ((ctx.teacherUserId == null ? null : ctx.teacherUserId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 63, "labels.Subject"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](55, 65, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.main_subject_id == null ? null : ctx.main_subject_id.invalid) && ((ctx.main_subject_id == null ? null : ctx.main_subject_id.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](62, 67, "labels.Unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 69, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.units);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 71, "labels.Lesson"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](76, 73, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.lessons);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](82, 75, "labels.Topic"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](86, 77, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.topics);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](92, 79, "labels.Level"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](96, 81, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](107, 83, "labels.QuestionMark"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.mark.invalid && (ctx.mark.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](115, 85, "labels.question_ar_text"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.question_ar_text.invalid && (ctx.question_ar_text.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](122, 87, "labels.QuestionImage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.QuestionAttachPath);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.QuestionAttachPath, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.question_type_id.value == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.question_type_id.value == 2 || ctx.question_type_id.value == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.QuestionId.value == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.QuestionId.value > 0);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
  styles: [".question-img[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  max-width: 100% !important;\n  max-height: 156px !important;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #33a7d5;\n}\n\n.remove_image[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRiIsImZpbGUiOiJhZGQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb24taW1nIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogMTU2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMzM2E3ZDU7XHJcbn1cclxuLnJlbW92ZV9pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 37466:
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/questions-banck/questions-index/questions-index.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsIndexComponent": function() { return /* binding */ QuestionsIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/admin/services/Admin/educational.service */ 56471);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





























function QuestionsIndexComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", teacher_r33.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", teacher_r33.teacher_ar_name, " ");
  }
}

function QuestionsIndexComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var stage_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", stage_r34.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", stage_r34.Text, " ");
  }
}

function QuestionsIndexComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var year_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", year_r35.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", year_r35.Text_Ar, " ");
  }
}

function QuestionsIndexComponent_mat_option_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", subject_r36.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subject_r36.Text, " ");
  }
}

function QuestionsIndexComponent_mat_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var unit_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", unit_r37.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", unit_r37.Text, " ");
  }
}

function QuestionsIndexComponent_mat_option_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lesson_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", lesson_r38.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", lesson_r38.Text, " ");
  }
}

function QuestionsIndexComponent_mat_option_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var topic_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", topic_r39.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", topic_r39.Text, " ");
  }
}

function QuestionsIndexComponent_th_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function QuestionsIndexComponent_td_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r40 + 1);
  }
}

function QuestionsIndexComponent_th_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function QuestionsIndexComponent_td_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r41.questionID);
  }
}

function QuestionsIndexComponent_th_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.question_ar_text"), " ");
  }
}

function QuestionsIndexComponent_td_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r42.questionName);
  }
}

function QuestionsIndexComponent_th_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.QuestionType"), " ");
  }
}

function QuestionsIndexComponent_td_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ele_r43.questionTypeArabicName, " ");
  }
}

function QuestionsIndexComponent_th_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Subject"), " ");
  }
}

function QuestionsIndexComponent_td_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r44.subjectName);
  }
}

function QuestionsIndexComponent_th_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Unit"), " ");
  }
}

function QuestionsIndexComponent_td_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r45.unitName);
  }
}

function QuestionsIndexComponent_th_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Lesson"), " ");
  }
}

function QuestionsIndexComponent_td_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r46.lessonName);
  }
}

function QuestionsIndexComponent_th_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Topic"), " ");
  }
}

function QuestionsIndexComponent_td_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r47.topicName);
  }
}

function QuestionsIndexComponent_th_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.QuestionMark"), " ");
  }
}

function QuestionsIndexComponent_td_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r48.mark);
  }
}

function QuestionsIndexComponent_th_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Level"), " ");
  }
}

function QuestionsIndexComponent_td_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r49.levelName);
  }
}

function QuestionsIndexComponent_th_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 41);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    questionId: a0,
    functionId: a1
  };
};

function QuestionsIndexComponent_td_138_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var question_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](1, _c0, question_r50.questionID, ctx_r53.functionId));
  }
}

function QuestionsIndexComponent_td_138_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuestionsIndexComponent_td_138_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58);
      var question_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r56.openDeleateDialog(question_r50);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function QuestionsIndexComponent_td_138_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QuestionsIndexComponent_td_138_ng_container_1_a_1_Template, 2, 4, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QuestionsIndexComponent_td_138_ng_container_1_a_2_Template, 2, 0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r52.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r52.functionName === "Delete");
  }
}

function QuestionsIndexComponent_td_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QuestionsIndexComponent_td_138_ng_container_1_Template, 3, 2, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r29.rowFunctions);
  }
}

function QuestionsIndexComponent_tr_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 50);
  }
}

function QuestionsIndexComponent_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 51);
  }
}

function QuestionsIndexComponent_tr_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](103);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r7.value, "\" ");
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

var _c2 = function _c2() {
  return [10];
};

var QuestionsIndexComponent = /*#__PURE__*/function () {
  function QuestionsIndexComponent(fb, toastr, authService, examServ, GeneralService, EducationalService, spinner, dialog, route) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionsIndexComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.authService = authService;
    this.examServ = examServ;
    this.GeneralService = GeneralService;
    this.EducationalService = EducationalService;
    this.spinner = spinner;
    this.dialog = dialog;
    this.route = route;
    this.displayedColumns = ["#", "questionID", "questionText", "questionType", "subjectName", "unitName", "lessonName", "topicName", "mark", "levelName", "actions"];
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); //  console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionsIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        teacherUserId: [""],
        stageId: [""],
        yearId: [""],
        subjectId: [""],
        unitId: [""],
        lessonId: [""],
        topicId: [""]
      });
      this.EduCompId = this.authService.getEduCompId();
      this.branchId = this.authService.getBranchId();
      this.getTeachersByEducompId(this.EduCompId);
      this.getQuestions(1);
      this.FormCtrl.stageId.disable();
      this.FormCtrl.yearId.disable();
      this.FormCtrl.subjectId.disable();
      this.FormCtrl.unitId.disable();
      this.FormCtrl.lessonId.disable();
      this.FormCtrl.topicId.disable();
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authService.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getTeachersByEducompId(e.EduCompId);

        _this2.getQuestions(1);
      });
      this.authService.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "getQuestions",
    value: function getQuestions(page) {
      var _this3 = this;

      this.spinner.show();
      this.examServ.getQuestions(page, this.EduCompId, this.myForm.value).subscribe(function (res) {
        _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(res.returnModel);
        _this3.itemsCount = res.itemsCount;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "deleteQuestion",
    value: function deleteQuestion(question) {
      var _this4 = this;

      this.spinner.show();
      this.examServ.deleteQuestion(this.EduCompId, question.questionID).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this4.dataSource.data.findIndex(function (e) {
            return e === question;
          });

          _this4.dataSource.data.splice(i, 1);

          _this4.dataSource.paginator = _this4.paginator;

          _this4.toastr.success("Done");
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(question) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: "".concat(question.questionID, " - ").concat(question.questionTypeEnglishName)
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteQuestion(question);
      });
    }
  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId(EduCompId) {
      var _this6 = this;

      this.GeneralService.getTeachersByEducompId(EduCompId).subscribe(function (res) {
        _this6.Teachers = res.lstTeachers;
      });
    }
  }, {
    key: "getStageByTeacherId",
    value: function getStageByTeacherId(teacherId) {
      var _this7 = this;

      this.FormCtrl.stageId.setValue("");
      this.FormCtrl.yearId.setValue("");
      this.FormCtrl.subjectId.setValue("");
      this.FormCtrl.unitId.setValue("");
      this.FormCtrl.lessonId.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (teacherId != "") {
        this.EducationalService.getStageByTeacherId(teacherId).subscribe(function (res) {
          _this7.stages = res;

          _this7.FormCtrl.stageId.enable(); //console.log(res);

        });
      } else {
        this.FormCtrl.stageId.setValue("");
        this.FormCtrl.stageId.disable();
        this.FormCtrl.yearId.disable();
        this.FormCtrl.subjectId.disable();
        this.FormCtrl.unitId.disable();
        this.FormCtrl.lessonId.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "getYearsByStageId",
    value: function getYearsByStageId(stageId) {
      var _this8 = this;

      this.FormCtrl.yearId.setValue("");
      this.FormCtrl.subjectId.setValue("");
      this.FormCtrl.unitId.setValue("");
      this.FormCtrl.lessonId.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (stageId != "") {
        this.EducationalService.returnYears(stageId).subscribe(function (res) {
          _this8.years = res;

          _this8.FormCtrl.yearId.enable();
        });
      } else {
        this.FormCtrl.yearId.setValue("");
        this.FormCtrl.yearId.disable();
        this.FormCtrl.subjectId.disable();
        this.FormCtrl.unitId.disable();
        this.FormCtrl.lessonId.disable();
        this.FormCtrl.topicId.disable();
      }
    } //return Teacher Subjects   //{ "yearId" : 36, "teacherId" : 17}

  }, {
    key: "getSubjectsByYearId",
    value: function getSubjectsByYearId(yearId) {
      var _this9 = this;

      var _a;

      this.FormCtrl.subjectId.setValue("");
      this.FormCtrl.unitId.setValue("");
      this.FormCtrl.lessonId.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (yearId != "") {
        var data = {
          yearId: yearId,
          teacherUserId: (_a = this.FormCtrl.teacherUserId) === null || _a === void 0 ? void 0 : _a.value
        };
        this.EducationalService.returnTeacherSubjects(data).subscribe(function (res) {
          _this9.subjects = res;

          _this9.FormCtrl.subjectId.enable();
        });
      } else {
        this.FormCtrl.subjectId.setValue("");
        this.FormCtrl.subjectId.disable();
        this.FormCtrl.unitId.disable();
        this.FormCtrl.lessonId.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "getUnitsBySubjectId",
    value: function getUnitsBySubjectId(SubjectId) {
      var _this10 = this;

      this.FormCtrl.unitId.setValue("");
      this.FormCtrl.lessonId.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (SubjectId != "") {
        this.EducationalService.GetUnits(SubjectId).subscribe(function (res) {
          _this10.units = res;

          _this10.FormCtrl.unitId.enable();
        });
      } else {
        this.FormCtrl.unitId.setValue("");
        this.FormCtrl.unitId.disable();
        this.FormCtrl.lessonId.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "getLessonsByUnitId",
    value: function getLessonsByUnitId(unitId) {
      var _this11 = this;

      this.FormCtrl.lessonId.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (unitId != "") {
        this.EducationalService.GetLessons(unitId).subscribe(function (res) {
          _this11.lessons = res;

          _this11.FormCtrl.lessonId.enable();
        });
      } else {
        this.FormCtrl.lessonId.setValue("");
        this.FormCtrl.lessonId.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "GetTopicsByLessonId",
    value: function GetTopicsByLessonId(LessonId) {
      var _this12 = this;

      this.FormCtrl.topicId.setValue("");

      if (this.FormCtrl.lessonId.value) {
        this.EducationalService.GetTopics(LessonId).subscribe(function (res) {
          _this12.topics = res;

          _this12.FormCtrl.topicId.enable();
        });
      } else {
        this.FormCtrl.topicId.setValue("");
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "resetManual",
    value: function resetManual() {
      this.myForm.controls["teacherUserId"].setValue("");
      this.myForm.controls["yearId"].setValue("");
      this.myForm.controls["stageId"].setValue("");
      this.myForm.controls["subjectId"].setValue("");
      this.myForm.controls["unitId"].setValue("");
      this.myForm.controls["lessonId"].setValue("");
      this.myForm.controls["topicId"].setValue("");
    }
  }]);

  return QuestionsIndexComponent;
}();

QuestionsIndexComponent.ɵfac = function QuestionsIndexComponent_Factory(t) {
  return new (t || QuestionsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_6__.EducationalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute));
};

QuestionsIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: QuestionsIndexComponent,
  selectors: [["app-questions-index"]],
  viewQuery: function QuestionsIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 143,
  vars: 75,
  consts: [[1, "col-12"], [1, "content-header"], [1, "row"], ["mat-raised-button", "", "routerLink", "../add-question", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["formControlName", "teacherUserId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "stageId", 3, "selectionChange"], ["formControlName", "yearId", 3, "selectionChange"], ["formControlName", "subjectId", 3, "selectionChange"], ["formControlName", "unitId", 3, "selectionChange"], ["formControlName", "lessonId", 3, "selectionChange"], ["formControlName", "topicId"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "questionID"], ["matColumnDef", "questionText"], ["matColumnDef", "questionType"], ["matColumnDef", "subjectName"], ["matColumnDef", "unitName"], ["matColumnDef", "lessonName"], ["matColumnDef", "topicName"], ["matColumnDef", "mark"], ["matColumnDef", "levelName"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], ["class", "success p-0", "matTooltip", "Edit", "routerLink", "../add-question", 3, "queryParams", 4, "ngIf"], ["class", "danger p-0", "matTooltip", "Delete", 3, "click", 4, "ngIf"], ["matTooltip", "Edit", "routerLink", "../add-question", 1, "success", "p-0", 3, "queryParams"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["matTooltip", "Delete", 1, "danger", "p-0", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function QuestionsIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QuestionsIndexComponent_Template_mat_select_selectionChange_23_listener() {
        return ctx.getStageByTeacherId(ctx.FormCtrl.teacherUserId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, QuestionsIndexComponent_mat_option_27_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QuestionsIndexComponent_Template_mat_select_selectionChange_33_listener() {
        return ctx.getYearsByStageId(ctx.FormCtrl.stageId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, QuestionsIndexComponent_mat_option_37_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QuestionsIndexComponent_Template_mat_select_selectionChange_43_listener() {
        return ctx.getSubjectsByYearId(ctx.FormCtrl.yearId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, QuestionsIndexComponent_mat_option_47_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](52, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QuestionsIndexComponent_Template_mat_select_selectionChange_53_listener() {
        return ctx.getUnitsBySubjectId(ctx.FormCtrl.subjectId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, QuestionsIndexComponent_mat_option_57_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](62, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QuestionsIndexComponent_Template_mat_select_selectionChange_63_listener() {
        return ctx.getLessonsByUnitId(ctx.FormCtrl.unitId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](66, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, QuestionsIndexComponent_mat_option_67_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QuestionsIndexComponent_Template_mat_select_selectionChange_73_listener() {
        return ctx.GetTopicsByLessonId(ctx.FormCtrl.lessonId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](76, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, QuestionsIndexComponent_mat_option_77_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](86, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, QuestionsIndexComponent_mat_option_87_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "mat-card-actions", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuestionsIndexComponent_Template_button_click_89_listener() {
        return ctx.getQuestions(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](91, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](97, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function QuestionsIndexComponent_Template_input_keyup_102_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](106, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](107, QuestionsIndexComponent_th_107_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, QuestionsIndexComponent_td_108_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](109, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, QuestionsIndexComponent_th_110_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, QuestionsIndexComponent_td_111_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](112, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, QuestionsIndexComponent_th_113_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](114, QuestionsIndexComponent_td_114_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](115, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](116, QuestionsIndexComponent_th_116_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, QuestionsIndexComponent_td_117_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](118, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](119, QuestionsIndexComponent_th_119_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](120, QuestionsIndexComponent_td_120_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](121, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](122, QuestionsIndexComponent_th_122_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](123, QuestionsIndexComponent_td_123_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](124, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, QuestionsIndexComponent_th_125_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](126, QuestionsIndexComponent_td_126_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](127, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, QuestionsIndexComponent_th_128_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](129, QuestionsIndexComponent_td_129_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](130, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](131, QuestionsIndexComponent_th_131_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](132, QuestionsIndexComponent_td_132_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](133, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](134, QuestionsIndexComponent_th_134_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](135, QuestionsIndexComponent_td_135_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](136, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](137, QuestionsIndexComponent_th_137_Template, 1, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](138, QuestionsIndexComponent_td_138_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](139, QuestionsIndexComponent_tr_139_Template, 1, 0, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](140, QuestionsIndexComponent_tr_140_Template, 1, 0, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](141, QuestionsIndexComponent_tr_141_Template, 3, 1, "tr", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "mat-paginator", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function QuestionsIndexComponent_Template_mat_paginator_page_142_listener($event) {
        return ctx.getQuestions($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 34, "Navbar.QuestionsBank"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 36, "labels.QuestionsSearch"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](72, _c1, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 38, "labels.AddQuestion"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 40, "labels.Teacher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 42, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 44, "labels.Stage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 46, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.stages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 48, "labels.Year"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 50, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.years);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](52, 52, "labels.Subject"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](56, 54, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](62, 56, "labels.Unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](66, 58, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.units);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](72, 60, "labels.Lesson"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](76, 62, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.lessons);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](82, 64, "labels.Topic"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](86, 66, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.topics);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](91, 68, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](97, 70, "labels.Questions"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](74, _c2))("length", ctx.itemsCount)("pageSize", 10);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbnMtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 86380:
/*!************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/surveys/add-sub-question/add-sub-question.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSurvaySubQuestionComponent": function() { return /* binding */ AddSurvaySubQuestionComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















function AddSurvaySubQuestionComponent_mat_checkbox_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", true);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_13_span_1_Template(rf, ctx) {
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

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_13_span_1_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_13_span_2_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.answerOneMarkCtrl.errors == null ? null : ctx_r5.answerOneMarkCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.answerOneMarkCtrl.errors == null ? null : ctx_r5.answerOneMarkCtrl.errors.bigZero);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", true);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_45_span_1_Template(rf, ctx) {
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

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_45_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_45_span_1_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_45_span_2_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.answerTwoMarkCtrl.errors == null ? null : ctx_r7.answerTwoMarkCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.answerTwoMarkCtrl.errors == null ? null : ctx_r7.answerTwoMarkCtrl.errors.bigZero);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", true);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_77_span_1_Template(rf, ctx) {
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

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_77_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_77_span_1_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_77_span_2_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.answerThreeMarkCtrl.errors == null ? null : ctx_r9.answerThreeMarkCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.answerThreeMarkCtrl.errors == null ? null : ctx_r9.answerThreeMarkCtrl.errors.bigZero);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", true);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_109_span_1_Template(rf, ctx) {
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

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_109_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_hint_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_109_span_1_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_109_span_2_Template, 3, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.answerFourMarkCtrl.errors == null ? null : ctx_r11.answerFourMarkCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.answerFourMarkCtrl.errors == null ? null : ctx_r11.answerFourMarkCtrl.errors.bigZero);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", true);
  }
}

function AddSurvaySubQuestionComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_13_Template, 3, 2, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSurvaySubQuestionComponent_ng_container_24_Template_input_change_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r21.importOneFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_30_Template, 2, 1, "mat-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_45_Template, 3, 2, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSurvaySubQuestionComponent_ng_container_24_Template_input_change_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r23.importTwoFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_63_Template, 2, 1, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_77_Template, 3, 2, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSurvaySubQuestionComponent_ng_container_24_Template_input_change_92_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r24.importThreeFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_95_Template, 2, 1, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, AddSurvaySubQuestionComponent_ng_container_24_mat_hint_109_Template, 3, 2, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](114, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](121, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSurvaySubQuestionComponent_ng_container_24_Template_input_change_124_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r25.importFourFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, AddSurvaySubQuestionComponent_ng_container_24_mat_checkbox_127_Template, 2, 1, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](128, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 28, "labels.AnswerNumber"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 30, "labels.answerMark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerOneMarkCtrl.invalid && (ctx_r1.answerOneMarkCtrl.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 32, "labels.AnswerText"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 34, "labels.AnswerPic"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerOneImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.answerOneImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 36, "labels.AnswerNumber"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 38, "labels.answerMark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerTwoMarkCtrl.invalid && (ctx_r1.answerTwoMarkCtrl.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 40, "labels.AnswerText"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 42, "labels.AnswerPic"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerTwoImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.answerTwoImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](68, 44, "labels.AnswerNumber"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](75, 46, "labels.answerMark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerThreeMarkCtrl.invalid && (ctx_r1.answerThreeMarkCtrl.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](82, 48, "labels.AnswerText"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 50, "labels.AnswerPic"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerThreeImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.answerThreeImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](100, 52, "labels.AnswerNumber"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](107, 54, "labels.answerMark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerFourMarkCtrl.invalid && ctx_r1.answerFourMarkCtrl.invalid && (ctx_r1.answerFourMarkCtrl.touched || ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](114, 56, "labels.AnswerText"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](121, 58, "labels.AnswerPic"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerFourImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.answerFourImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function AddSurvaySubQuestionComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSurvaySubQuestionComponent_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r26.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "General.Add"), " ");
  }
}

function AddSurvaySubQuestionComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSurvaySubQuestionComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r28.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

function AddSurvaySubQuestionComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSurvaySubQuestionComponent_tr_44_Template_button_click_8_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      var ques_r30 = restoredCtx.$implicit;
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r31.getQuestionForEditByID(ques_r30.ExamQuestId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSurvaySubQuestionComponent_tr_44_Template_button_click_11_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      var ques_r30 = restoredCtx.$implicit;
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r33.removeExamQuestion(ques_r30.ExamQuestId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ques_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ques_r30.ExamQuestId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ques_r30.Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ques_r30.QuestionTypeAr);
  }
}

var AddSurvaySubQuestionComponent = /*#__PURE__*/function () {
  function AddSurvaySubQuestionComponent(fb, examService, authserv, toastr, spinner, fileService, data) {
    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddSurvaySubQuestionComponent);

    this.fb = fb;
    this.examService = examService;
    this.authserv = authserv;
    this.toastr = toastr;
    this.spinner = spinner;
    this.fileService = fileService;
    this.data = data; // @Input("examId") examId: any;
    // @Input("examGroupHeaderId") examGroupHeaderId: any = 0;
    // @Input("subjectId") subjectId: any = 0;

    this.unitId = 0;
    this.lessonId = 0;
    this.units = [];
    this.lessions = [];
    this.questionsInGrid = [];
    this.questionId = 0;
    this.submitted = false;
    this.oneIsCorrect = false;
    this.twoIsCorrect = false;
    this.threeIsCorrect = false;
    this.fourIsCorrect = false;
    this.questionFile = null;
    this.answerOneFile = null;
    this.answerTwoFile = null;
    this.answerThreeFile = null;
    this.answerFourFile = null;
    this.perfectAnswerAttach_preview = null;
    this.examId = data.examId;
    this.examGroupHeaderId = data.examGroupHeaderId;
    this.subjectId = data.subjectId;
    if (this.examGroupHeaderId != 0) this.getAllQuestionsByHeadId();
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddSurvaySubQuestionComponent, [{
    key: "mainQuestionCtrl",
    get: function get() {
      return this.myForm.get("mainQuestion");
    }
  }, {
    key: "questionTypeIdCtrl",
    get: function get() {
      return this.myForm.get("questionTypeId");
    }
  }, {
    key: "questionImageCtrl",
    get: function get() {
      return this.myForm.get("questionImage");
    }
  }, {
    key: "unitIdCtrl",
    get: function get() {
      return this.myForm.get("unitId");
    }
  }, {
    key: "lessonIdCtrl",
    get: function get() {
      return this.myForm.get("lessonId");
    }
  }, {
    key: "questionTextCtrl",
    get: function get() {
      return this.myForm.get("exam_question_text");
    }
  }, {
    key: "questionPerfectAnswerCtrl",
    get: function get() {
      return this.myForm.get("questionPerfectAnswer");
    }
  }, {
    key: "perfect_answer_attachCtrl",
    get: function get() {
      return this.myForm.get("perfect_answer_attach");
    }
  }, {
    key: "questionMarkCtrl",
    get: function get() {
      return this.myForm.get("questionMark");
    }
  }, {
    key: "answerOneIdCtrl",
    get: function get() {
      return this.myForm.get("answerOneId");
    }
  }, {
    key: "answerOneCtrl",
    get: function get() {
      return this.myForm.get("answerOne");
    }
  }, {
    key: "answerOneIsCorrectCtrl",
    get: function get() {
      return this.myForm.get("answerOneIsCorrect");
    }
  }, {
    key: "answerOneImageCtrl",
    get: function get() {
      return this.myForm.get("answerOneImage");
    }
  }, {
    key: "answerTwoIdCtrl",
    get: function get() {
      return this.myForm.get("answerTwoId");
    }
  }, {
    key: "answerTwoCtrl",
    get: function get() {
      return this.myForm.get("answerTwo");
    }
  }, {
    key: "answerTwoIsCorrectCtrl",
    get: function get() {
      return this.myForm.get("answerTwoIsCorrect");
    }
  }, {
    key: "answerTwoImageCtrl",
    get: function get() {
      return this.myForm.get("answerTwoImage");
    }
  }, {
    key: "answerThreeIdCtrl",
    get: function get() {
      return this.myForm.get("answerThreeId");
    }
  }, {
    key: "answerThreeCtrl",
    get: function get() {
      return this.myForm.get("answerThree");
    }
  }, {
    key: "answerThreeIsCorrectCtrl",
    get: function get() {
      return this.myForm.get("answerThreeIsCorrect");
    }
  }, {
    key: "answerThreeImageCtrl",
    get: function get() {
      return this.myForm.get("answerThreeImage");
    }
  }, {
    key: "answerFourIdCtrl",
    get: function get() {
      return this.myForm.get("answerFourId");
    }
  }, {
    key: "answerFourCtrl",
    get: function get() {
      return this.myForm.get("answerFour");
    }
  }, {
    key: "answerFourIsCorrectCtrl",
    get: function get() {
      return this.myForm.get("answerFourIsCorrect");
    }
  }, {
    key: "answerFourImageCtrl",
    get: function get() {
      return this.myForm.get("answerFourImage");
    }
  }, {
    key: "answerOneRemove_imageCtrl",
    get: function get() {
      return this.myForm.get("answerOneRemove_image");
    }
  }, {
    key: "answerTwoRemove_imageCtrl",
    get: function get() {
      return this.myForm.get("answerTwoRemove_image");
    }
  }, {
    key: "answerThreeRemove_imageCtrl",
    get: function get() {
      return this.myForm.get("answerThreeRemove_image");
    }
  }, {
    key: "answerFourRemove_imageCtrl",
    get: function get() {
      return this.myForm.get("answerFourRemove_image");
    }
  }, {
    key: "questionImageRemove_imageCtrl",
    get: function get() {
      return this.myForm.get("remove_image");
    }
  }, {
    key: "answerOneMarkCtrl",
    get: function get() {
      return this.myForm.get("answerOneMark");
    }
  }, {
    key: "answerTwoMarkCtrl",
    get: function get() {
      return this.myForm.get("answerTwoMark");
    }
  }, {
    key: "answerThreeMarkCtrl",
    get: function get() {
      return this.myForm.get("answerThreeMark");
    }
  }, {
    key: "answerFourMarkCtrl",
    get: function get() {
      return this.myForm.get("answerFourMark");
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        mainQuestion: [null],
        questionTypeId: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        questionImage: [null],
        remove_image: [false],
        unitId: [null],
        lessionId: [null],
        exam_question_text: [null],
        questionPerfectAnswer: [null],
        perfect_answer_attach: [null],
        questionMark: [0],
        answerOneId: [null],
        answerOne: [null],
        answerOneMark: [null],
        answerTwoMark: [null],
        answerThreeMark: [null],
        answerFourMark: [null],
        answerOneIsCorrect: [],
        answerOneImage: [null],
        answerTwoId: [null],
        answerTwo: [null],
        answerTwoIsCorrect: [],
        answerTwoImage: [null],
        answerThreeId: [null],
        answerThree: [null],
        answerThreeIsCorrect: [],
        answerThreeImage: [null],
        answerFourId: [null],
        answerFour: [null],
        answerFourIsCorrect: [],
        answerFourImage: [null],
        answerOneRemove_image: [false],
        answerTwoRemove_image: [false],
        answerThreeRemove_image: [false],
        answerFourRemove_image: [false]
      }); //remove_image: d.remove_image,

      this.educationCompanyId = this.authserv.getEduCompId();
    } //get all question for this header

  }, {
    key: "getAllQuestionsByHeadId",
    value: function getAllQuestionsByHeadId() {
      var _this = this;

      this.spinner.show();
      this.examService.getAllQuestionsByHeadId(this.examGroupHeaderId).subscribe(function (response) {
        if (response) {
          console.log("getAllQuestionsByHeadId", response);
          _this.questionsInGrid = [];
          _this.questionsInGrid = response;

          _this.spinner.hide();
        }
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this2 = this;

      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;

      this.submitted = true; // MCQ

      if (((_a = this.questionTypeIdCtrl) === null || _a === void 0 ? void 0 : _a.value) == 2) {
        var image = this.questionFile || null;
        var questionImagePath = this.questionImageCtrl;
        var imageOne = this.answerOneFile || null;
        var choice1 = {
          choice_id: (_c = (_b = this.answerOneIdCtrl) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 0,
          choice_text: (_d = this.answerOneCtrl) === null || _d === void 0 ? void 0 : _d.value,
          mark: (_e = this.answerOneMarkCtrl) === null || _e === void 0 ? void 0 : _e.value,
          is_correct: this.answerOneIsCorrectCtrl.value === 0 ? true : false,
          choice_image: imageOne,
          remove_image: (_f = this.answerOneRemove_imageCtrl) === null || _f === void 0 ? void 0 : _f.value,
          path: (_g = this.answerOneImageCtrl) === null || _g === void 0 ? void 0 : _g.value
        };
        var imageTwo = this.answerTwoFile || null;
        var choice2 = {
          choice_id: (_j = (_h = this.answerTwoIdCtrl) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : 0,
          choice_text: (_k = this.answerTwoCtrl) === null || _k === void 0 ? void 0 : _k.value,
          mark: (_l = this.answerTwoMarkCtrl) === null || _l === void 0 ? void 0 : _l.value,
          is_correct: ((_m = this.answerTwoIsCorrectCtrl) === null || _m === void 0 ? void 0 : _m.value) ? true : false,
          choice_image: imageTwo,
          remove_image: (_o = this.answerTwoRemove_imageCtrl) === null || _o === void 0 ? void 0 : _o.value,
          path: (_p = this.answerTwoImageCtrl) === null || _p === void 0 ? void 0 : _p.value
        };
        var imageThree = this.answerThreeFile || null;
        var choice3 = {
          choice_id: (_r = (_q = this.answerThreeIdCtrl) === null || _q === void 0 ? void 0 : _q.value) !== null && _r !== void 0 ? _r : 0,
          choice_text: (_s = this.answerThreeCtrl) === null || _s === void 0 ? void 0 : _s.value,
          mark: (_t = this.answerThreeMarkCtrl) === null || _t === void 0 ? void 0 : _t.value,
          is_correct: ((_u = this.answerThreeIsCorrectCtrl) === null || _u === void 0 ? void 0 : _u.value) ? true : false,
          choice_image: imageThree,
          remove_image: (_v = this.answerThreeRemove_imageCtrl) === null || _v === void 0 ? void 0 : _v.value,
          path: (_w = this.answerThreeImageCtrl) === null || _w === void 0 ? void 0 : _w.value
        };
        var imageFour = this.answerFourFile || null;
        var choice4 = {
          choice_id: (_y = (_x = this.answerFourIdCtrl) === null || _x === void 0 ? void 0 : _x.value) !== null && _y !== void 0 ? _y : 0,
          choice_text: (_z = this.answerFourCtrl) === null || _z === void 0 ? void 0 : _z.value,
          mark: (_0 = this.answerFourMarkCtrl) === null || _0 === void 0 ? void 0 : _0.value,
          is_correct: ((_1 = this.answerFourIsCorrectCtrl) === null || _1 === void 0 ? void 0 : _1.value) ? true : false,
          choice_image: imageFour,
          remove_image: (_2 = this.answerFourRemove_imageCtrl) === null || _2 === void 0 ? void 0 : _2.value,
          path: (_3 = this.answerFourImageCtrl) === null || _3 === void 0 ? void 0 : _3.value
        };
        var toAddEdit = {
          exam_question_main_question: (_4 = this.mainQuestionCtrl) === null || _4 === void 0 ? void 0 : _4.value,
          exam_question_mark: (_5 = this.questionMarkCtrl) === null || _5 === void 0 ? void 0 : _5.value,
          exam_question_perfect_answer: (_6 = this.questionPerfectAnswerCtrl) === null || _6 === void 0 ? void 0 : _6.value,
          //perfect_answer_attach: this.perfectAnswerAttach_preview,
          exam_question_text: (_7 = this.questionTextCtrl) === null || _7 === void 0 ? void 0 : _7.value,
          exam_question_type_id: (_8 = this.questionTypeIdCtrl) === null || _8 === void 0 ? void 0 : _8.value,
          exam_selected_question_head_id: this.examGroupHeaderId,
          exam_selected_subject_id: this.subjectId,
          exam_question_image: image,
          remove_image: (_9 = this.questionImageRemove_imageCtrl) === null || _9 === void 0 ? void 0 : _9.value,
          exam_question_id: this.questionId,
          mcq_choices: [choice1, choice2, choice3, choice4]
        }; // if no question Text or img

        if (toAddEdit.exam_question_text == null && toAddEdit.exam_question_image == null) {
          this.toastr.warning("يجب ادخال نص السؤال او اختيار صوره السؤال");
          return;
        } // if mcq 1 no text or img


        if (choice1.choice_text === null && choice1.choice_image === null && choice1.path == null) {
          this.toastr.warning("يجب ادخال نص السؤال الأول او اختيار صورة ");
          return;
        } // if mcq 2 no text or img


        if (choice2.choice_text === null && choice2.choice_image === null && choice2.path == null) {
          this.toastr.warning("يجب ادخال نص السؤال الثاني او اختيار صورة ");
          return;
        }

        var mark1 = true;
        var mark2 = true;
        var mark3 = true;
        var mark4 = true;
        toAddEdit.mcq_choices.forEach(function (mcq, index) {
          var _a, _b, _c, _d, _e, _f, _g, _h;

          if ((mcq.choice_text != null || mcq.choice_image != null) && mcq.mark == null) {
            _this2.toastr.warning("pleace enter mark for mcq: " + (index + 1));

            if (index == 0) {
              mark1 = false;
              (_a = _this2.answerOneMarkCtrl) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            } else {
              mark1 = true;
              (_b = _this2.answerOneMarkCtrl) === null || _b === void 0 ? void 0 : _b.clearValidators();
            }

            if (index == 1) {
              mark2 = false;
              (_c = _this2.answerTwoMarkCtrl) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            } else {
              mark2 = true;
              (_d = _this2.answerTwoMarkCtrl) === null || _d === void 0 ? void 0 : _d.clearValidators();
            }

            if (index == 2) {
              mark3 = false;
              (_e = _this2.answerThreeMarkCtrl) === null || _e === void 0 ? void 0 : _e.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            } else {
              mark3 = true;
              (_f = _this2.answerThreeMarkCtrl) === null || _f === void 0 ? void 0 : _f.clearValidators();
            }

            if (index == 3) {
              mark4 = false;
              (_g = _this2.answerFourMarkCtrl) === null || _g === void 0 ? void 0 : _g.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            } else {
              mark4 = true;
              (_h = _this2.answerFourMarkCtrl) === null || _h === void 0 ? void 0 : _h.clearValidators();
            }

            return;
          }
        }); // console.log("toAddEdit", toAddEdit);
        // console.log("myForm", this.myForm);

        if (mark1 && mark2 && mark3 && mark4) {
          if (this.questionId > 0) {
            this.editMcqQuestion(toAddEdit);
          } else {
            this.addMcqQuestion(toAddEdit);
          }
        }
      }
    }
  }, {
    key: "addMcqQuestion",
    value: function addMcqQuestion(toAddEdit) {
      var _this3 = this;

      if (this.myForm.valid) {
        this.spinner.show();
        this.examService.addSurveyQuestion(toAddEdit).subscribe(function (response) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j; //     console.log("respooooooonse", response);


          if (response.returnValue == 200) {
            _this3.getAllQuestionsByHeadId();

            (_a = _this3.mainQuestionCtrl) === null || _a === void 0 ? void 0 : _a.setValue(null);
            (_b = _this3.questionMarkCtrl) === null || _b === void 0 ? void 0 : _b.setValue(null);
            (_c = _this3.questionTypeIdCtrl) === null || _c === void 0 ? void 0 : _c.setValue(null);
            (_d = _this3.questionImageCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);
            (_e = _this3.questionTextCtrl) === null || _e === void 0 ? void 0 : _e.setValue(null);
            (_f = _this3.questionPerfectAnswerCtrl) === null || _f === void 0 ? void 0 : _f.setValue(null);
            (_g = _this3.perfect_answer_attachCtrl) === null || _g === void 0 ? void 0 : _g.setValue(null);
            (_h = _this3.unitIdCtrl) === null || _h === void 0 ? void 0 : _h.setValue(null);
            (_j = _this3.lessonIdCtrl) === null || _j === void 0 ? void 0 : _j.setValue(null);

            _this3.myForm.reset();

            _this3.questionTypeIdCtrl.setValue(2);

            _this3.resetFileInputs();

            _this3.submitted = false;
          } else {
            _this3.toastr.error(response.returnString);
          }

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "editMcqQuestion",
    value: function editMcqQuestion(toAddEdit) {
      var _this4 = this;

      //console.log("editMcqQuestion", toAddEdit);
      if (this.myForm.valid) {
        this.spinner.show();
        this.examService.editSurveyQuestion(toAddEdit).subscribe(function (response) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j; //  console.log("editMcqQuestion", response);


          if (response) {
            _this4.getAllQuestionsByHeadId();

            (_a = _this4.mainQuestionCtrl) === null || _a === void 0 ? void 0 : _a.setValue(null);
            (_b = _this4.questionMarkCtrl) === null || _b === void 0 ? void 0 : _b.setValue(null);
            (_c = _this4.questionTypeIdCtrl) === null || _c === void 0 ? void 0 : _c.setValue(null);
            (_d = _this4.questionImageCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);
            (_e = _this4.questionTextCtrl) === null || _e === void 0 ? void 0 : _e.setValue(null);
            (_f = _this4.questionPerfectAnswerCtrl) === null || _f === void 0 ? void 0 : _f.setValue(null);
            (_g = _this4.perfect_answer_attachCtrl) === null || _g === void 0 ? void 0 : _g.setValue(null);
            (_h = _this4.unitIdCtrl) === null || _h === void 0 ? void 0 : _h.setValue(null);
            (_j = _this4.lessonIdCtrl) === null || _j === void 0 ? void 0 : _j.setValue(null);

            _this4.myForm.reset();

            _this4.questionTypeIdCtrl.setValue(2);

            _this4.resetFileInputs();

            _this4.submitted = false;
            _this4.questionId = 0; // return to add mode
          }

          _this4.spinner.hide();
        });
      }
    }
  }, {
    key: "getQuestionForEditByID",
    value: function getQuestionForEditByID(questionId) {
      var _this5 = this;

      //  console.log('questionIddddddddddddddd', questionId);
      this.spinner.show();
      this.examService.getQuestionForEditByID(questionId).subscribe(function (response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28; //console.log("getQuestionForEditByID", response);


        if (response) {
          (_a = _this5.mainQuestionCtrl) === null || _a === void 0 ? void 0 : _a.setValue(response.main_question);
          (_b = _this5.questionMarkCtrl) === null || _b === void 0 ? void 0 : _b.setValue(response.mark);
          (_c = _this5.questionTextCtrl) === null || _c === void 0 ? void 0 : _c.setValue(response.question_text);
          (_d = _this5.questionImageCtrl) === null || _d === void 0 ? void 0 : _d.setValue((response === null || response === void 0 ? void 0 : response.attach_path) != null ? _this5.fileService.previewPicture(response === null || response === void 0 ? void 0 : response.attach_path) : null); // this.questionFile.FileAsBase64 = response.attach_path;

          (_e = _this5.questionTypeIdCtrl) === null || _e === void 0 ? void 0 : _e.setValue(response.question_type_id);
          _this5.questionId = questionId; //Mcq

          if (response.question_type_id == 2) {
            (_f = _this5.answerOneIdCtrl) === null || _f === void 0 ? void 0 : _f.setValue((_g = response.MCQ_Choices[0]) === null || _g === void 0 ? void 0 : _g.Id);
            (_h = _this5.answerOneCtrl) === null || _h === void 0 ? void 0 : _h.setValue((_j = response.MCQ_Choices[0]) === null || _j === void 0 ? void 0 : _j.Text);
            (_k = _this5.answerOneMarkCtrl) === null || _k === void 0 ? void 0 : _k.setValue((_l = response.MCQ_Choices[0]) === null || _l === void 0 ? void 0 : _l.Mark);
            (_m = _this5.answerOneImageCtrl) === null || _m === void 0 ? void 0 : _m.setValue(((_o = response === null || response === void 0 ? void 0 : response.MCQ_Choices[0]) === null || _o === void 0 ? void 0 : _o.Image) != null ? _this5.fileService.previewPicture((_p = response === null || response === void 0 ? void 0 : response.MCQ_Choices[0]) === null || _p === void 0 ? void 0 : _p.Image) : null);
            (_q = _this5.answerOneIsCorrectCtrl) === null || _q === void 0 ? void 0 : _q.setValue((_r = response.MCQ_Choices[0]) === null || _r === void 0 ? void 0 : _r.Is_Correct);
            _this5.oneIsCorrect = (_s = response.MCQ_Choices[0]) === null || _s === void 0 ? void 0 : _s.Is_Correct;
            (_t = _this5.answerTwoIdCtrl) === null || _t === void 0 ? void 0 : _t.setValue((_u = response.MCQ_Choices[1]) === null || _u === void 0 ? void 0 : _u.Id);
            (_v = _this5.answerTwoCtrl) === null || _v === void 0 ? void 0 : _v.setValue((_w = response.MCQ_Choices[1]) === null || _w === void 0 ? void 0 : _w.Text);
            (_x = _this5.answerTwoMarkCtrl) === null || _x === void 0 ? void 0 : _x.setValue((_y = response.MCQ_Choices[1]) === null || _y === void 0 ? void 0 : _y.Mark);
            (_z = _this5.answerTwoImageCtrl) === null || _z === void 0 ? void 0 : _z.setValue(((_0 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[1]) === null || _0 === void 0 ? void 0 : _0.Image) != null ? _this5.fileService.previewPicture((_1 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[1]) === null || _1 === void 0 ? void 0 : _1.Image) : null); //  this.answerTwoImageCtrl?.setValue(response.MCQ_Choices[1].Image);
            // this.answerTwoFile.FileAsBase64 = response.MCQ_Choices[1].Image;

            (_2 = _this5.answerTwoIsCorrectCtrl) === null || _2 === void 0 ? void 0 : _2.setValue((_3 = response.MCQ_Choices[1]) === null || _3 === void 0 ? void 0 : _3.Is_Correct);
            _this5.twoIsCorrect = (_4 = response.MCQ_Choices[1]) === null || _4 === void 0 ? void 0 : _4.Is_Correct;
            (_5 = _this5.answerThreeIdCtrl) === null || _5 === void 0 ? void 0 : _5.setValue((_6 = response.MCQ_Choices[2]) === null || _6 === void 0 ? void 0 : _6.Id);
            (_7 = _this5.answerThreeCtrl) === null || _7 === void 0 ? void 0 : _7.setValue((_8 = response.MCQ_Choices[2]) === null || _8 === void 0 ? void 0 : _8.Text);
            (_9 = _this5.answerThreeMarkCtrl) === null || _9 === void 0 ? void 0 : _9.setValue((_10 = response.MCQ_Choices[2]) === null || _10 === void 0 ? void 0 : _10.Mark);
            (_11 = _this5.answerThreeImageCtrl) === null || _11 === void 0 ? void 0 : _11.setValue(((_12 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[2]) === null || _12 === void 0 ? void 0 : _12.Image) != null ? _this5.fileService.previewPicture((_13 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[2]) === null || _13 === void 0 ? void 0 : _13.Image) : null); // this.answerThreeImageCtrl?.setValue(response.MCQ_Choices[2].Image);
            //  this.answerThreeFile.FileAsBase64 = response.MCQ_Choices[2].Image;

            (_14 = _this5.answerThreeIsCorrectCtrl) === null || _14 === void 0 ? void 0 : _14.setValue((_15 = response.MCQ_Choices[2]) === null || _15 === void 0 ? void 0 : _15.Is_Correct);
            _this5.threeIsCorrect = (_16 = response.MCQ_Choices[2]) === null || _16 === void 0 ? void 0 : _16.Is_Correct;
            (_17 = _this5.answerFourIdCtrl) === null || _17 === void 0 ? void 0 : _17.setValue((_18 = response.MCQ_Choices[3]) === null || _18 === void 0 ? void 0 : _18.Id);
            (_19 = _this5.answerFourCtrl) === null || _19 === void 0 ? void 0 : _19.setValue((_20 = response.MCQ_Choices[3]) === null || _20 === void 0 ? void 0 : _20.Text);
            (_21 = _this5.answerFourMarkCtrl) === null || _21 === void 0 ? void 0 : _21.setValue((_22 = response.MCQ_Choices[3]) === null || _22 === void 0 ? void 0 : _22.Mark);
            (_23 = _this5.answerFourImageCtrl) === null || _23 === void 0 ? void 0 : _23.setValue(((_24 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[3]) === null || _24 === void 0 ? void 0 : _24.Image) != null ? _this5.fileService.previewPicture((_25 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[3]) === null || _25 === void 0 ? void 0 : _25.Image) : null); //  this.answerFourImageCtrl?.setValue(response.MCQ_Choices[3].Image);
            //  this.answerFourFile.FileAsBase64 = response.MCQ_Choices[3].Image;

            (_26 = _this5.answerFourIsCorrectCtrl) === null || _26 === void 0 ? void 0 : _26.setValue((_27 = response.MCQ_Choices[3]) === null || _27 === void 0 ? void 0 : _27.Is_Correct);
            _this5.fourIsCorrect = (_28 = response.MCQ_Choices[3]) === null || _28 === void 0 ? void 0 : _28.Is_Correct;
          } // console.log("answer 1", this.oneIsCorrect);
          // console.log("answer 2", this.twoIsCorrect);
          // console.log("answer 3", this.threeIsCorrect);
          // console.log("answer 4", this.fourIsCorrect);

        }

        _this5.spinner.hide();
      });
    }
  }, {
    key: "removeExamQuestion",
    value: function removeExamQuestion(questionId) {
      var _this6 = this;

      var confirmed = confirm("هل انت متأكد من الحذف"); // console.log('questionId', questionId);

      if (confirmed) {
        this.spinner.show();
        this.examService.deleteExamQuestion(questionId).subscribe(function (response) {
          // console.log('deleteResponse', response);
          if (response.returnString === "Done") {
            var toDeleteIndex = _this6.questionsInGrid.findIndex(function (q) {
              return q.Id == questionId;
            });

            _this6.questionsInGrid.splice(toDeleteIndex, 1);
          } else _this6.toastr.info(response.returnString);

          _this6.spinner.hide();
        });
      }
    }
  }, {
    key: "importFile",
    value: function importFile(event) {
      var _this7 = this;

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

          _this7.questionImageCtrl.setValue(fileReder);

          _this7.questionFile = data; //  console.log("file selected", this.questionFile);
        };
      }
    }
  }, {
    key: "importOneFile",
    value: function importOneFile(event) {
      var _this8 = this;

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
          _this8.answerOneFile = data;

          _this8.answerOneImageCtrl.setValue(fileReder); //  console.log("file selected", this.answerOneFile);

        };
      }
    }
  }, {
    key: "importTwoFile",
    value: function importTwoFile(event) {
      var _this9 = this;

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
          _this9.answerTwoFile = data;

          _this9.answerTwoImageCtrl.setValue(fileReder); //  console.log("file selected", this.answerTwoFile);

        };
      }
    }
  }, {
    key: "importThreeFile",
    value: function importThreeFile(event) {
      var _this10 = this;

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
          _this10.answerThreeFile = data;

          _this10.answerThreeImageCtrl.setValue(fileReder); //  console.log("file selected", this.answerThreeFile);

        };
      }
    }
  }, {
    key: "importFourFile",
    value: function importFourFile(event) {
      var _this11 = this;

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
          _this11.answerFourFile = data;

          _this11.answerFourImageCtrl.setValue(fileReder); //  console.log("file selected", this.answerFourFile);

        };
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
  }]);

  return AddSurvaySubQuestionComponent;
}();

AddSurvaySubQuestionComponent.ɵfac = function AddSurvaySubQuestionComponent_Factory(t) {
  return new (t || AddSurvaySubQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_2__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_4__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
};

AddSurvaySubQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddSurvaySubQuestionComponent,
  selectors: [["app-add-sub-question"]],
  decls: 48,
  vars: 22,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "exam-model-box"], [1, "container-fluid", 3, "formGroup"], [1, "row"], [1, "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "exam_question_text"], [1, "col-md-4", "col-12"], ["type", "file", "name", "questionImage", "accept", "image/*", 1, "form-control", "font-dro", "clearInputs", 3, "change"], [1, "col-md-8", "col-12"], [1, "question-img"], ["formControlName", "remove_image", "class", "remove_image", 3, "value", 4, "ngIf"], [1, "img-fluid", 3, "src"], ["class", "row", 4, "ngIf"], ["mat-raised-button", "", "id", "examQuestionsButton", "class", "btn btn-primary bg-light-info", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "id", "editQuestionButton", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "col-md-12"], [1, "full-wid-table", 2, "overflow", "hidden !important"], ["id", "sotbmod", 1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], ["id", "addedExamQuestionsHolder"], ["id", "ExamQuestion-2626853", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "mat-dialog-close", "", 1, "btn-danger"], ["formControlName", "remove_image", 1, "remove_image", 3, "value"], ["matInput", "", "type", "number", "formControlName", "answerOneMark"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "answerOne"], ["for", "radio-0"], [1, "icon", "icon_radio"], ["type", "file", "accept", "image/*", "name", "answerOneImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerOneRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "answerTwoMark"], ["matInput", "", "type", "text", "formControlName", "answerTwo"], ["type", "file", "accept", "image/*", "name", "answerTwoImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerTwoRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "answerThreeMark"], ["matInput", "", "type", "text", "formControlName", "answerThree"], ["type", "file", "accept", "image/*", "name", "answerThreeImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerThreeRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "answerFourMark"], ["matInput", "", "type", "text", "formControlName", "answerFour"], ["type", "file", "accept", "image/*", "name", "answerFourImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerFourRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], ["formControlName", "answerOneRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerTwoRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerThreeRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerFourRemove_image", 1, "remove_image", 3, "value"], ["mat-raised-button", "", "id", "examQuestionsButton", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], ["mat-raised-button", "", "id", "editQuestionButton", 1, "btn", "btn-primary", 3, "click"], ["id", "ExamQuestion-2626853"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "warn", 3, "click"]],
  template: function AddSurvaySubQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSurvaySubQuestionComponent_Template_input_change_18_listener($event) {
        return ctx.importFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddSurvaySubQuestionComponent_mat_checkbox_21_Template, 2, 1, "mat-checkbox", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AddSurvaySubQuestionComponent_ng_container_24_Template, 129, 60, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-card-actions", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AddSurvaySubQuestionComponent_button_26_Template, 4, 3, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AddSurvaySubQuestionComponent_button_27_Template, 3, 3, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "table", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\xAD");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "tbody", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, AddSurvaySubQuestionComponent_tr_44_Template, 14, 3, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 12, "labels.addSubQuestion"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 14, "labels.question_ar_text"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 16, "labels.QuestionImage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.questionImageCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.questionImageCtrl == null ? null : ctx.questionImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.questionTypeIdCtrl == null ? null : ctx.questionTypeIdCtrl.value) == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.questionId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.questionId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 18, "labels.question_ar_text"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 20, "labels.QuestionType"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.questionsInGrid);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 80vh;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n\n.question-img[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  max-width: 100% !important;\n  max-height: 156px !important;\n}\n\n.remove_image[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdWItcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGIiwiZmlsZSI6ImFkZC1zdWItcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5xdWVzdGlvbi1pbWcge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAxNTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVtb3ZlX2ltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 29246:
/*!************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/surveys/add-survey/add-survey.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSurveyComponent": function() { return /* binding */ AddSurveyComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-sub-question/add-sub-question.component */ 86380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/auth/auth.service */ 16256);
/* harmony import */ var _services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/Admin/exams.service */ 63938);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


































function AddSurveyComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Navbar.newesurvay"), " ");
  }
}

function AddSurveyComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "labels.EditSurvey"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" - ", ctx_r1.exam_ar_name, " ");
  }
}

function AddSurveyComponent_mat_hint_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddSurveyComponent_mat_hint_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_mat_hint_20_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r2.examNameCtrl == null ? null : ctx_r2.examNameCtrl.errors == null ? null : ctx_r2.examNameCtrl.errors.required) || (ctx_r2.examNameCtrl == null ? null : ctx_r2.examNameCtrl.errors == null ? null : ctx_r2.examNameCtrl.errors.whiteSpace));
  }
}

function AddSurveyComponent_mat_hint_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddSurveyComponent_mat_hint_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_mat_hint_27_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.examHoursCtrl == null ? null : ctx_r3.examHoursCtrl.errors == null ? null : ctx_r3.examHoursCtrl.errors.required);
  }
}

function AddSurveyComponent_mat_hint_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddSurveyComponent_mat_hint_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_mat_hint_34_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.examMinutesCtrl == null ? null : ctx_r4.examMinutesCtrl.errors == null ? null : ctx_r4.examMinutesCtrl.errors.required);
  }
}

function AddSurveyComponent_mat_card_actions_65_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSurveyComponent_mat_card_actions_65_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r22.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

function AddSurveyComponent_mat_card_actions_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-actions", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_mat_card_actions_65_button_1_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.examId > 0);
  }
}

function AddSurveyComponent_mat_option_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var val_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", val_r24.question_group_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", val_r24.question_group_ar_name, " ");
  }
}

function AddSurveyComponent_mat_hint_86_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddSurveyComponent_mat_hint_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_mat_hint_86_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.examGroupCtrl == null ? null : ctx_r10.examGroupCtrl.errors == null ? null : ctx_r10.examGroupCtrl.errors.required);
  }
}

function AddSurveyComponent_mat_option_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var val_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", val_r26.question_head_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", val_r26.question_head_ar_name, " ");
  }
}

function AddSurveyComponent_mat_hint_97_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddSurveyComponent_mat_hint_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_mat_hint_97_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r13.examHeaderCtrl == null ? null : ctx_r13.examHeaderCtrl.errors == null ? null : ctx_r13.examHeaderCtrl.errors.required);
  }
}

function AddSurveyComponent_button_105_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSurveyComponent_button_105_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r28.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Add"), " ");
  }
}

function AddSurveyComponent_button_106_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSurveyComponent_button_106_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r30.onAddExamGroupHeader();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.AddQuestion"), " ");
  }
}

function AddSurveyComponent_button_107_Template(rf, ctx) {
  if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSurveyComponent_button_107_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r32.editExamGroupHead();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.UpdateQuestion"), " ");
  }
}

function AddSurveyComponent_div_108_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddSurveyComponent_div_108_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r47 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r47 + 1, " ");
  }
}

function AddSurveyComponent_div_108_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.\u064EQuestionNumber"), " ");
  }
}

function AddSurveyComponent_div_108_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ele_r48.questionNumber, " ");
  }
}

function AddSurveyComponent_div_108_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.QuestionHeader"), " ");
  }
}

function AddSurveyComponent_div_108_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ele_r49.questionType, " ");
  }
}

function AddSurveyComponent_div_108_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.\u064EQuestionContent"), " ");
  }
}

function AddSurveyComponent_div_108_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ele_r50.question_title, " ");
  }
}

function AddSurveyComponent_div_108_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddSurveyComponent_div_108_td_25_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSurveyComponent_div_108_td_25_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      var groupHeader_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r57.getExamHeadById(groupHeader_r51);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function AddSurveyComponent_div_108_td_25_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSurveyComponent_div_108_td_25_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62);
      var groupHeader_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r60.openDeleateDialog(groupHeader_r51);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function AddSurveyComponent_div_108_td_25_ng_container_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSurveyComponent_div_108_td_25_ng_container_1_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r65);
      var groupHeader_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r63.addSubQuestionDialog(groupHeader_r51);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddSurveyComponent_div_108_td_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_div_108_td_25_ng_container_1_a_1_Template, 3, 3, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddSurveyComponent_div_108_td_25_ng_container_1_a_2_Template, 3, 3, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddSurveyComponent_div_108_td_25_ng_container_1_a_3_Template, 2, 0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r53.functionName === "EditGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r53.functionName === "DeleteGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r53.functionName === "addSubQuestion");
  }
}

function AddSurveyComponent_div_108_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSurveyComponent_div_108_td_25_ng_container_1_Template, 4, 3, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r43.rowFunctions);
  }
}

function AddSurveyComponent_div_108_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 62);
  }
}

function AddSurveyComponent_div_108_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 63);
  }
}

function AddSurveyComponent_div_108_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r46.input.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

function AddSurveyComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](11, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddSurveyComponent_div_108_th_12_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, AddSurveyComponent_div_108_td_13_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](14, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AddSurveyComponent_div_108_th_15_Template, 3, 3, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, AddSurveyComponent_div_108_td_16_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](17, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, AddSurveyComponent_div_108_th_18_Template, 3, 3, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, AddSurveyComponent_div_108_td_19_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](20, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, AddSurveyComponent_div_108_th_21_Template, 3, 3, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, AddSurveyComponent_div_108_td_22_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](23, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, AddSurveyComponent_div_108_th_24_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, AddSurveyComponent_div_108_td_25_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, AddSurveyComponent_div_108_tr_26_Template, 1, 0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, AddSurveyComponent_div_108_tr_27_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, AddSurveyComponent_div_108_tr_28_Template, 3, 1, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "mat-paginator", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "labels.QuestionsGroup"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r17.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r17.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r17.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
  }
}

var _c1 = function _c1(a0, a1) {
  return {
    functionId: a0,
    parentId: a1
  };
};

var AddSurveyComponent = /*#__PURE__*/function () {
  function AddSurveyComponent(location, fb, authserv, examService, // private dialog: MatDialog,
  route, router, msg, generalService, dialog, datePipe, spinner) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddSurveyComponent);

    this.location = location;
    this.fb = fb;
    this.authserv = authserv;
    this.examService = examService;
    this.route = route;
    this.router = router;
    this.msg = msg;
    this.generalService = generalService;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.spinner = spinner;
    this.countries = [];
    this.stages = [];
    this.educationYears = [];
    this.subjects = [];
    this.examTypes = [];
    this.units = [];
    this.lessions = [];
    this.discountTypes = [];
    this.examGroups = [];
    this.examHeaders = [];
    this.GroupsHeadersList = [];
    this.examGroupHeaderIdToEdit = 0;
    this.displayedColumns = ["#", "questionNumber", "questionType", "question_title", "actions"];
    this.submitted = false;
    this.GroupHeadsubmitted = false;
    this.examId = 0;
    this.editGroupHeaderMode = false;
    this.isRepeatableExam = false;
    this.isSendWhats = false;
    this.examGroupHeaderId = 0;
    route.paramMap.subscribe(function (params) {
      _this.type = Number(params.get("typeId"));
    });
    route.paramMap.subscribe(function (params) {
      _this.subId = Number(params.get("courseId"));
    });
    this.route.queryParamMap.subscribe(function (params) {
      _this.examId = Number(params.get("examId"));

      if (_this.examId > 0) {
        _this.getExamById();

        _this.getAllGroupHeaderByExamId();
      }

      _this.functionId = Number(params.get("functionId"));
      _this.parentId = Number(params.get("parentId")); //  console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddSurveyComponent, [{
    key: "countryIdCtrl",
    get: function get() {
      return this.myForm.get("countryId");
    }
  }, {
    key: "stageIdCtrl",
    get: function get() {
      return this.myForm.get("stageId");
    }
  }, {
    key: "educationYearIdCtrl",
    get: function get() {
      return this.myForm.get("educationYearId");
    }
  }, {
    key: "subjectIdCtrl",
    get: function get() {
      return this.myForm.get("subjectId");
    }
  }, {
    key: "teacherUserIdCtrl",
    get: function get() {
      return this.myForm.get("teacherUserId");
    }
  }, {
    key: "examTypeIdCtrl",
    get: function get() {
      return this.myForm.get("examTypeId");
    }
  }, {
    key: "unitIdCtrl",
    get: function get() {
      return this.myForm.get("unitId");
    }
  }, {
    key: "lessionIdCtrl",
    get: function get() {
      return this.myForm.get("lessionId");
    }
  }, {
    key: "examNameCtrl",
    get: function get() {
      return this.myForm.get("examName");
    }
  }, {
    key: "examHoursCtrl",
    get: function get() {
      return this.myForm.get("examHours");
    }
  }, {
    key: "examMinutesCtrl",
    get: function get() {
      return this.myForm.get("examMinutes");
    }
  }, {
    key: "examPriceCtrl",
    get: function get() {
      return this.myForm.get("examPrice");
    }
  }, {
    key: "discountCtrl",
    get: function get() {
      return this.myForm.get("discount");
    }
  }, {
    key: "discountTypeCtrl",
    get: function get() {
      return this.myForm.get("discountType");
    }
  }, {
    key: "fromDateCtrl",
    get: function get() {
      return this.myForm.get("fromDate");
    }
  }, {
    key: "toDateCtrl",
    get: function get() {
      return this.myForm.get("toDate");
    }
  }, {
    key: "formHourCtrl",
    get: function get() {
      return this.myForm.get("formHour");
    }
  }, {
    key: "toHoursCtrl",
    get: function get() {
      return this.myForm.get("toHours");
    }
  }, {
    key: "resualtDateCtrl",
    get: function get() {
      return this.myForm.get("resualtDate");
    }
  }, {
    key: "resualtTimeCtrl",
    get: function get() {
      return this.myForm.get("resualtTime");
    }
  }, {
    key: "canSellIndividuallyCtrl",
    get: function get() {
      return this.myForm.get("canSellIndividually");
    }
  }, {
    key: "isRepeatableCtrl",
    get: function get() {
      return this.myForm.get("isRepeatable");
    }
  }, {
    key: "repeatNumbersCtrl",
    get: function get() {
      return this.myForm.get("repeatNumbers");
    }
  }, {
    key: "repeatingPriceCtrl",
    get: function get() {
      return this.myForm.get("repeatingPrice");
    }
  }, {
    key: "hasCustomDiscountCtrl",
    get: function get() {
      return this.myForm.get("hasCustomDiscount");
    }
  }, {
    key: "sendWhatsAppMsgCtrl",
    get: function get() {
      return this.myForm.get("sendWhatsAppMsg");
    }
  }, {
    key: "examGroupCtrl",
    get: function get() {
      return this.GroupHeadersForm.get("examGroup");
    }
  }, {
    key: "examHeaderCtrl",
    get: function get() {
      return this.GroupHeadersForm.get("examHeader");
    }
  }, {
    key: "examContentCtrl",
    get: function get() {
      return this.GroupHeadersForm.get("examContent");
    }
  }, {
    key: "isPublishCtrl",
    get: function get() {
      return this.myForm.get("isPublish");
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a, _b, _c, _d, _e, _f;

      this.myForm = this.fb.group({
        // countryId: [""],
        // stageId: [""],
        // educationYearId: [""],
        // subjectId: ["", [Validators.required]],
        // teacherUserId: ["", [Validators.required]],
        //  examTypeId: ["", [Validators.required]],
        // unitId: [""],
        // lessionId: [""],
        examName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        examHours: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        examMinutes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        // examPrice: [0, [Validators.required, CustomeValidator.minusNum]],
        // discount: [""],
        // discountType: [""],
        fromDate: [""],
        toDate: [""],
        formHour: [""],
        toHours: [""] // resualtDate: [""],
        // resualtTime: [""],
        // canSellIndividually: [true, Validators.required],
        // isRepeatable: [false, Validators.required],
        // repeatNumbers: [""],
        // repeatingPrice: [0],
        // hasCustomDiscount: [false, Validators.required],
        // sendWhatsAppMsg: [false, Validators.required],
        // isPublish: [0],

      });
      this.GroupHeadersForm = this.fb.group({
        examGroup: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        examHeader: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        examContent: [""]
      });
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      (_a = this.stageIdCtrl) === null || _a === void 0 ? void 0 : _a.disable();
      (_b = this.educationYearIdCtrl) === null || _b === void 0 ? void 0 : _b.disable();
      (_c = this.subjectIdCtrl) === null || _c === void 0 ? void 0 : _c.disable();
      (_d = this.teacherUserIdCtrl) === null || _d === void 0 ? void 0 : _d.disable();
      (_e = this.unitIdCtrl) === null || _e === void 0 ? void 0 : _e.disable();
      (_f = this.lessionIdCtrl) === null || _f === void 0 ? void 0 : _f.disable();
      this.getAllCountieres();
      this.getAllExamTypes();
      this.getAllQuestionGroups();
      this.getAllQuestionHeaders();
      this.examTypeValidator();
      this.RepeatableValidator();
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });
      if (this.examId > 0) this.getExamById();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } // filter question group

  }, {
    key: "filter_question_group",
    value: function filter_question_group(value) {
      var filterValue = value.toLowerCase();
      return this.examGroups.filter(function (option) {
        return option.question_group_ar_name.toLowerCase().includes(filterValue);
      });
    } // filter question header

  }, {
    key: "filter_question_header",
    value: function filter_question_header(value) {
      var filterValue = value.toLowerCase();
      return this.examHeaders.filter(function (option) {
        return option.question_head_ar_name.toLowerCase().includes(filterValue);
      });
    }
  }, {
    key: "getExamById",
    value: function getExamById() {
      var _this3 = this;

      this.spinner.show();
      this.examService.getExamById(this.examId).subscribe(function (response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j; // console.log("getExamById", response);


        if (response) {
          // this.stageIdCtrl?.enable();
          // this.educationYearIdCtrl?.enable();
          // this.subjectIdCtrl?.enable();
          // this.teacherUserIdCtrl?.enable();
          // this.unitIdCtrl?.enable();
          // this.lessionIdCtrl?.enable();
          (_a = _this3.toHoursCtrl) === null || _a === void 0 ? void 0 : _a.setValue(response === null || response === void 0 ? void 0 : response.toHour); // this.isPublishCtrl?.setValue(response?.isPublish);
          // this.discountCtrl?.setValue(response?.Discount);

          (_b = _this3.examNameCtrl) === null || _b === void 0 ? void 0 : _b.setValue(response === null || response === void 0 ? void 0 : response.exam_ar_name);
          _this3.exam_ar_name = response === null || response === void 0 ? void 0 : response.exam_ar_name;
          (_c = _this3.formHourCtrl) === null || _c === void 0 ? void 0 : _c.setValue(response === null || response === void 0 ? void 0 : response.fromHour); // this.examPriceCtrl?.setValue(response?.price);
          // this.resualtTimeCtrl?.setValue(response?.ResultTime);
          // this.discountTypeCtrl?.setValue(response?.DiscountType);
          // this.isRepeatableCtrl?.setValue(response?.repeatableExam);
          // this.isRepeatableExam = response?.repeatableExam;
          // this.repeatNumbersCtrl?.setValue(response?.repeatableExam_Count);
          // this.sendWhatsAppMsgCtrl?.setValue(response?.SendWhatsApp);
          // this.isSendWhats = response?.SendWhatsApp;
          // this.hasCustomDiscountCtrl?.setValue(response?.Discount > 0);

          (_d = _this3.canSellIndividuallyCtrl) === null || _d === void 0 ? void 0 : _d.setValue(response === null || response === void 0 ? void 0 : response.Individually_Purchased); // this.countryIdCtrl?.setValue(response.countryId);
          //  this.examTypeIdCtrl?.setValue(response.examTypeId);
          // this.repeatingPriceCtrl?.setValue(response.StudentRepeatExamCost);

          var exam_minute = response.exam_period_minute % 60;
          var exam_hour = (response.exam_period_minute - exam_minute) / 60;
          (_e = _this3.examMinutesCtrl) === null || _e === void 0 ? void 0 : _e.setValue(exam_minute);
          (_f = _this3.examHoursCtrl) === null || _f === void 0 ? void 0 : _f.setValue(exam_hour); // if (response.Lesson_ID != null) this.examTypeIdCtrl?.setValue(1);
          // if (response?.Unit_ID != null && response.Lesson_ID == null)
          //   this.examTypeIdCtrl?.setValue(2);

          if ((response === null || response === void 0 ? void 0 : response.Subject_ID) != null // response?.Unit_ID == null &&
          // response.Lesson_ID == null
          ) if ((response === null || response === void 0 ? void 0 : response.Subject_ID) == null && // response?.Unit_ID == null &&
          // response.Lesson_ID == null &&
          response.quiz == 1) // this.examTypeIdCtrl?.setValue(3);
            (_g = _this3.examTypeIdCtrl) === null || _g === void 0 ? void 0 : _g.setValue(4);
          (_h = _this3.fromDateCtrl) === null || _h === void 0 ? void 0 : _h.setValue(response.Avilable_Date_From);
          (_j = _this3.toDateCtrl) === null || _j === void 0 ? void 0 : _j.setValue(response.Avilable_Date_To); // this.resualtDateCtrl?.setValue(response.ResultDate);
          // this.countryIdCtrl?.setValue(1);
          // this.onSelectCountry();
          // this.stageIdCtrl?.setValue(response.stageId);
          // this.onSelectStages();
          // this.educationYearIdCtrl?.setValue(response.eduYearId);
          // this.onSelectEducationYears();
          // this.subjectIdCtrl?.setValue(response?.main_subject_id);
          // this.onSelectSubjects();
          // this.teacherUserIdCtrl?.setValue(response?.teacherUserId);
          // this.unitIdCtrl?.setValue(response?.Unit_ID);
          // this.onSelectUnit();
          // this.lessionIdCtrl?.setValue(response?.Lesson_ID);
          // this.stageIdCtrl?.setValue(response.stageId);
          // this.educationYearIdCtrl?.setValue(response.eduYearId);
          // this.teacherUserIdCtrl?.setValue(response?.teacherUserId);
          // this.unitIdCtrl?.setValue(response?.Unit_ID);
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "getAllGroupHeaderByExamId",
    value: function getAllGroupHeaderByExamId() {
      var _this4 = this;

      this.examService.getAllGroupHeaderByExamId(this.examId).subscribe(function (response) {
        if (response) {
          //  console.log("groupsHeadersLit : ", response);
          _this4.GroupsHeadersList = response;
          _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(response);
          _this4.itemsCount = response.length;
        }
      });
    }
  }, {
    key: "getAllQuestionGroups",
    value: function getAllQuestionGroups() {
      var _this5 = this;

      this.examService.getAllQuestionGroups().subscribe(function (response) {
        if (response) {
          _this5.examGroups = response; //  console.log("examGroups", this.examGroups);

          _this5.filteredExamGroups = _this5.examGroupCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (value) {
            return _this5.filter_question_group(value || "");
          }));
        }
      });
    }
  }, {
    key: "getAllQuestionHeaders",
    value: function getAllQuestionHeaders() {
      var _this6 = this;

      this.examService.getAllQuestionHeaders().subscribe(function (response) {
        if (response) {
          _this6.examHeaders = response;
          _this6.filteredExamHeaders = _this6.examHeaderCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (value) {
            return _this6.filter_question_header(value || "");
          }));
        }
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _a, _b, _c, _d, _e, _f; // todo .. check for mandatory firlds


      var exam = {
        id: this.examId,
        Avilable_Date_From: this.datePipe.transform((_a = this.fromDateCtrl) === null || _a === void 0 ? void 0 : _a.value),
        Avilable_Date_To: this.datePipe.transform(this.toDateCtrl.value),
        // CustomDiscountApplied: this.hasCustomDiscountCtrl?.value,
        // Discount: this.discountCtrl?.value,
        // DiscountType: this.discountTypeCtrl?.value,
        EduCompId: this.EduCompId,
        // Individually_Purchased: this.canSellIndividuallyCtrl?.value,
        // ResultDate: this.datePipe.transform(this.resualtDateCtrl.value),
        // ResultTime: this.resualtTimeCtrl?.value,
        // SendWhatsApp: this.sendWhatsAppMsgCtrl?.value,
        // StudentRepeatExamCost: this.repeatingPriceCtrl?.value,
        exam_ar_name: (_b = this.examNameCtrl) === null || _b === void 0 ? void 0 : _b.value,
        fromHour: (_c = this.formHourCtrl) === null || _c === void 0 ? void 0 : _c.value,
        // lesson_ID: this.lessionIdCtrl?.value,
        // price: this.examPriceCtrl?.value,
        // repeatableExam: this.isRepeatableCtrl?.value,
        // repeatableExam_Count: this.repeatNumbersCtrl?.value,
        Subject_ID: this.subId,
        // teacherUserId: this.teacherUserIdCtrl?.value,
        // teacher_subject_id: this.subjectIdCtrl?.value,
        toHour: (_d = this.toHoursCtrl) === null || _d === void 0 ? void 0 : _d.value,
        // unit_ID: this.unitIdCtrl?.value,
        // exam_hour: this.examHoursCtrl?.value,
        // exam_minute: this.examMinutesCtrl?.value,
        // isPublish: this.isPublishCtrl?.value,
        exam_type_id: this.type
      };
      var toAddEdit = {
        exam_hour: (_e = this.examHoursCtrl) === null || _e === void 0 ? void 0 : _e.value,
        exam_minute: (_f = this.examMinutesCtrl) === null || _f === void 0 ? void 0 : _f.value,
        // exam_type_id: this.type,
        exam: exam
      };
      console.log("toAdd ", toAddEdit); // if exam id = 0 the end point will add >> if the exam id > 0 the end point will edit

      this.addExam(toAddEdit);
    }
  }, {
    key: "addExam",
    value: function addExam(toAddEdit) {
      var _this7 = this;

      var validGroupHeadersForm = this.GroupHeadersForm.valid;
      this.submitted = true;

      if (this.examId == 0 && !validGroupHeadersForm) {
        this.GroupHeadsubmitted = true;
      } else {
        // if (
        //   this.hasCustomDiscountCtrl?.value == true &&
        //   this.repeatNumbersCtrl.value <= 0
        // ) {
        //   this.msg.warning("يجب ادخال عدد مرات التكرار");
        //   return;
        // }
        // if (
        //   this.hasCustomDiscountCtrl?.value == true &&
        //   this.repeatingPriceCtrl.value < 0
        // ) {
        //   this.msg.warning("يجب ادخال سعر تجديد الامتحان ");
        //   return;
        // }
        if (this.myForm.valid) {
          this.spinner.show();
          this.examService.addExam(toAddEdit).subscribe(function (response) {
            if (response.returnValue == 1 && response.examId > 0) {
              console.log("addExam", response);
              _this7.examId = response.examId;

              _this7.router.navigate([], {
                queryParams: {
                  examId: response.examId
                },
                queryParamsHandling: "merge"
              });

              _this7.onAddExamGroupHeader();

              _this7.msg.success("Done");

              _this7.submitted = false; // this.examId=0;
              // this.myForm.reset();
            }

            _this7.spinner.hide();
          });
        } else this.msg.error("Check your inputs");
      }
    }
  }, {
    key: "onAddExamGroupHeader",
    value: function onAddExamGroupHeader() {
      var _this8 = this;

      var _a, _b, _c, _d, _e; // let sameGroupWithSameHeader = this.GroupsHeadersList.find(
      //   (gh) =>
      //     gh.group_name == this.examGroupCtrl?.value &&
      //     gh.head_name == this.examHeaderCtrl?.value
      // );


      var sameGroupWithSameHeader = (_b = (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.find(function (gh) {
        var _a, _b;

        return gh.group_name == ((_a = _this8.examGroupCtrl) === null || _a === void 0 ? void 0 : _a.value) && gh.head_name == ((_b = _this8.examHeaderCtrl) === null || _b === void 0 ? void 0 : _b.value);
      });

      if (sameGroupWithSameHeader) {
        this.msg.info("Cannot add the same header with same group");
        return;
      }

      var tempExam = {
        id: this.examId
      };
      var ToAddExamGroupHeader = {
        exam_question_group_text: (_c = this.examGroupCtrl) === null || _c === void 0 ? void 0 : _c.value,
        exam_question_head_title: (_d = this.examContentCtrl) === null || _d === void 0 ? void 0 : _d.value,
        exam_question_head_text: (_e = this.examHeaderCtrl) === null || _e === void 0 ? void 0 : _e.value,
        exam: tempExam
      };

      if (this.GroupHeadersForm.valid) {
        this.spinner.show();
        this.examService.addExamGroupHeader(ToAddExamGroupHeader).subscribe(function (headerResponse) {
          var _a, _b, _c, _d;

          if (headerResponse) {
            //  console.log('addExamGroupHeader', headerResponse);
            _this8.getAllGroupHeaderByExamId(); //   this.msg.success("تم الإضافة");


            var tempExcamGroupHeader = {
              Id: headerResponse.exam_question_head_id,
              group_name: (_a = _this8.examGroupCtrl) === null || _a === void 0 ? void 0 : _a.value,
              head_name: (_b = _this8.examHeaderCtrl) === null || _b === void 0 ? void 0 : _b.value,
              question_title: (_c = _this8.examContentCtrl) === null || _c === void 0 ? void 0 : _c.value
            }; //   this.GroupsHeadersList.push(tempExcamGroupHeader);
            // console.log("this.GroupsHeadersList", this.GroupsHeadersList);

            (_d = _this8.examContentCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);

            _this8.spinner.hide();
          }
        });
      } else {
        if (this.examId == 0) this.msg.error("Check your inputs");
      }
    }
  }, {
    key: "getExamHeadById",
    value: function getExamHeadById(examGroupHeader) {
      var _a, _b, _c;

      this.editGroupHeaderMode = true;
      this.examGroupHeaderIdToEdit = examGroupHeader.id;
      (_a = this.examGroupCtrl) === null || _a === void 0 ? void 0 : _a.setValue(examGroupHeader === null || examGroupHeader === void 0 ? void 0 : examGroupHeader.questionNumber);
      (_b = this.examContentCtrl) === null || _b === void 0 ? void 0 : _b.setValue(examGroupHeader === null || examGroupHeader === void 0 ? void 0 : examGroupHeader.question_title);
      (_c = this.examHeaderCtrl) === null || _c === void 0 ? void 0 : _c.setValue(examGroupHeader === null || examGroupHeader === void 0 ? void 0 : examGroupHeader.questionType);
    }
  }, {
    key: "editExamGroupHead",
    value: function editExamGroupHead() {
      var _this9 = this;

      var _a, _b, _c;

      var toEdit = {
        exam_question_head_id: this.examGroupHeaderIdToEdit,
        group: (_a = this.examGroupCtrl) === null || _a === void 0 ? void 0 : _a.value,
        head: (_b = this.examHeaderCtrl) === null || _b === void 0 ? void 0 : _b.value,
        title: (_c = this.examContentCtrl) === null || _c === void 0 ? void 0 : _c.value
      }; // console.log('toEdit', toEdit);

      this.spinner.show();
      this.examService.editExamGroupHeader(toEdit).subscribe(function (editResponse) {
        var _a, _b;

        if (editResponse) {
          //   console.log('editResponse', editResponse);
          var toReplace = _this9.dataSource.data.find(function (gh) {
            return gh.id == _this9.examGroupHeaderIdToEdit;
          });

          if (toReplace) {
            toReplace.questionNumber = toEdit.group;
            toReplace.questionType = toEdit.head;
            toReplace.question_title = (_a = _this9.examContentCtrl) === null || _a === void 0 ? void 0 : _a.value;
          }

          _this9.editGroupHeaderMode = false;
          (_b = _this9.examContentCtrl) === null || _b === void 0 ? void 0 : _b.setValue(null);

          _this9.msg.success("تم التعديل بنجاح");
        }

        _this9.spinner.hide();
      });
    }
  }, {
    key: "removeExamGroupHead",
    value: function removeExamGroupHead(examGroupHeader) {
      var _this10 = this;

      this.spinner.show();
      this.examService.deleteExamGroupHeader(examGroupHeader.id).subscribe(function (deleteResponse) {
        // console.log('deleteResponse', deleteResponse);
        if (deleteResponse.returnValue == 1) {
          var todeleteIndex = _this10.dataSource.data.findIndex(function (gh) {
            return gh == examGroupHeader;
          });

          _this10.dataSource.data.splice(todeleteIndex, 1);

          _this10.dataSource.paginator = _this10.paginator;

          _this10.msg.success("تم الحذف");
        } else _this10.msg.error(deleteResponse.returnString);

        _this10.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(examGroupHeader) {
      var _this11 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: examGroupHeader.questionNumber
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this11.removeExamGroupHead(examGroupHeader);
      });
    }
  }, {
    key: "addSubQuestionDialog",
    value: function addSubQuestionDialog(groupHeader) {
      console.log(groupHeader);
      this.dialog.open(_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_4__.AddSurvaySubQuestionComponent, {
        data: {
          examId: this.examId,
          examGroupHeaderId: groupHeader.id,
          subjectId: this.subId
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) {}
      });
    }
  }, {
    key: "addSubQuestion",
    value: function addSubQuestion(examGroupHeaderId) {
      var _a, _b, _c;

      this.examGroupHeaderId = examGroupHeaderId;
      var obj = {
        examGroupHeaderId: examGroupHeaderId,
        subjectId: (_a = this.subjectIdCtrl) === null || _a === void 0 ? void 0 : _a.value,
        unitId: (_b = this.unitIdCtrl) === null || _b === void 0 ? void 0 : _b.value,
        lessonId: (_c = this.lessionIdCtrl) === null || _c === void 0 ? void 0 : _c.value
      };
    }
  }, {
    key: "getAllExamTypes",
    value: function getAllExamTypes() {
      var _this12 = this;

      this.examService.getAllExamType().subscribe(function (response) {
        if (response) {
          _this12.examTypes = response;
        }
      });
    }
  }, {
    key: "onSelectExamType",
    value: function onSelectExamType() {
      //  console.log('exam type: ', this.examTypeIdCtrl?.value);
      var _a, _b, _c, _d, _e, _f, _g, _h;

      if (((_a = this.examTypeIdCtrl) === null || _a === void 0 ? void 0 : _a.value) == 1) {
        (_b = this.unitIdCtrl) === null || _b === void 0 ? void 0 : _b.enable();
        (_c = this.lessionIdCtrl) === null || _c === void 0 ? void 0 : _c.enable();
      } else if (((_d = this.examTypeIdCtrl) === null || _d === void 0 ? void 0 : _d.value) == 2) {
        (_e = this.unitIdCtrl) === null || _e === void 0 ? void 0 : _e.enable();
        (_f = this.lessionIdCtrl) === null || _f === void 0 ? void 0 : _f.disable();
      } else {
        (_g = this.unitIdCtrl) === null || _g === void 0 ? void 0 : _g.disable();
        (_h = this.lessionIdCtrl) === null || _h === void 0 ? void 0 : _h.disable();
      }
    }
  }, {
    key: "getAllCountieres",
    value: function getAllCountieres() {
      var _this13 = this;

      this.examService.getAllCountries().subscribe(function (response) {
        if (response) {
          //console.log("COUNTIRES: ", response);
          _this13.countries = response;
        }
      });
    }
  }, {
    key: "onSelectCountry",
    value: function onSelectCountry() {
      var _this14 = this;

      var _a, _b, _c, _d, _e, _f; // this.stageIdCtrl?.setValue("");
      // this.educationYearIdCtrl?.setValue("");
      // this.subjectIdCtrl?.setValue("");
      // this.teacherUserIdCtrl?.setValue("");


      if ((_a = this.countryIdCtrl) === null || _a === void 0 ? void 0 : _a.value) {
        //   console.log('SELECTED country: ', this.countryIdCtrl?.value);
        this.examService.getAllStages((_b = this.countryIdCtrl) === null || _b === void 0 ? void 0 : _b.value).subscribe(function (response) {
          var _a;

          if (response) {
            _this14.stages = response; //console.log("STAGES:", response);

            (_a = _this14.stageIdCtrl) === null || _a === void 0 ? void 0 : _a.enable();
          }
        });
      } else {
        (_c = this.stageIdCtrl) === null || _c === void 0 ? void 0 : _c.disable();
        (_d = this.educationYearIdCtrl) === null || _d === void 0 ? void 0 : _d.disable();
        (_e = this.subjectIdCtrl) === null || _e === void 0 ? void 0 : _e.disable();
        (_f = this.teacherUserIdCtrl) === null || _f === void 0 ? void 0 : _f.disable();
      }
    }
  }, {
    key: "onSelectStages",
    value: function onSelectStages() {
      var _this15 = this;

      var _a, _b, _c, _d, _e, _f, _g, _h; // console.log('onSelectStages: ', this.stageIdCtrl?.value);


      (_a = this.educationYearIdCtrl) === null || _a === void 0 ? void 0 : _a.setValue("");
      (_b = this.subjectIdCtrl) === null || _b === void 0 ? void 0 : _b.setValue("");
      (_c = this.teacherUserIdCtrl) === null || _c === void 0 ? void 0 : _c.setValue("");

      if ((_d = this.stageIdCtrl) === null || _d === void 0 ? void 0 : _d.value) {
        this.examService.getAllEducationYears((_e = this.stageIdCtrl) === null || _e === void 0 ? void 0 : _e.value).subscribe(function (response) {
          var _a;

          if (response) {
            _this15.educationYears = response; //console.log("YEARS:", response);

            (_a = _this15.educationYearIdCtrl) === null || _a === void 0 ? void 0 : _a.enable();
          }
        });
      } else {
        (_f = this.educationYearIdCtrl) === null || _f === void 0 ? void 0 : _f.disable();
        (_g = this.subjectIdCtrl) === null || _g === void 0 ? void 0 : _g.disable();
        (_h = this.teacherUserIdCtrl) === null || _h === void 0 ? void 0 : _h.disable();
      }
    }
  }, {
    key: "onSelectEducationYears",
    value: function onSelectEducationYears() {
      var _this16 = this;

      var _a, _b, _c, _d, _e, _f; //   console.log('onSelectEducationYears: ', this.educationYearIdCtrl?.value);


      (_a = this.subjectIdCtrl) === null || _a === void 0 ? void 0 : _a.setValue("");
      (_b = this.teacherUserIdCtrl) === null || _b === void 0 ? void 0 : _b.setValue("");

      if ((_c = this.educationYearIdCtrl) === null || _c === void 0 ? void 0 : _c.value) {
        this.examService.getAllSubjects((_d = this.educationYearIdCtrl) === null || _d === void 0 ? void 0 : _d.value).subscribe(function (response) {
          var _a;

          if (response) {
            _this16.subjects = response; //console.log("SUBJECTS:", response);

            (_a = _this16.subjectIdCtrl) === null || _a === void 0 ? void 0 : _a.enable();
          }
        });
      } else {
        (_e = this.subjectIdCtrl) === null || _e === void 0 ? void 0 : _e.disable();
        (_f = this.teacherUserIdCtrl) === null || _f === void 0 ? void 0 : _f.disable();
      }
    }
  }, {
    key: "onSelectSubjects",
    value: function onSelectSubjects() {
      var _this17 = this;

      var _a, _b, _c, _d; // console.log('onSelectSubjects: ', this.subjectIdCtrl?.value);
      //   this.teacherUserIdCtrl?.setValue("");


      if ((_a = this.subjectIdCtrl) === null || _a === void 0 ? void 0 : _a.value) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.forkJoin)([this.generalService.getTeacherBySubjectAndEduCompId(this.EduCompId, (_b = this.subjectIdCtrl) === null || _b === void 0 ? void 0 : _b.value), this.examService.getAllUnitsBySublectId((_c = this.subjectIdCtrl) === null || _c === void 0 ? void 0 : _c.value)]).subscribe(function (results) {
          var _a;

          _this17.teachers = results[0].teachers;
          _this17.units = results[1];
          (_a = _this17.teacherUserIdCtrl) === null || _a === void 0 ? void 0 : _a.enable();
        });
      } else {
        (_d = this.teacherUserIdCtrl) === null || _d === void 0 ? void 0 : _d.disable();
      }
    }
  }, {
    key: "onSelectUnit",
    value: function onSelectUnit() {
      var _this18 = this;

      var _a, _b;

      if (((_a = this.unitIdCtrl) === null || _a === void 0 ? void 0 : _a.value) != null) {
        this.examService.getAllLessonsByUnitId((_b = this.unitIdCtrl) === null || _b === void 0 ? void 0 : _b.value).subscribe(function (response) {
          if (response) {
            _this18.lessions = response;
          }
        });
      }
    }
  }, {
    key: "examTypeValidator",
    value: function examTypeValidator() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      var examTypeId = (_a = this.examTypeIdCtrl) === null || _a === void 0 ? void 0 : _a.value;

      if (examTypeId == 1) {
        (_b = this.unitIdCtrl) === null || _b === void 0 ? void 0 : _b.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
        (_c = this.lessionIdCtrl) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      } else if (examTypeId == 2) {
        (_d = this.unitIdCtrl) === null || _d === void 0 ? void 0 : _d.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
        (_e = this.lessionIdCtrl) === null || _e === void 0 ? void 0 : _e.clearValidators();
        (_f = this.lessionIdCtrl) === null || _f === void 0 ? void 0 : _f.reset();
      } else {
        (_g = this.unitIdCtrl) === null || _g === void 0 ? void 0 : _g.clearValidators();
        (_h = this.unitIdCtrl) === null || _h === void 0 ? void 0 : _h.reset();
        (_j = this.lessionIdCtrl) === null || _j === void 0 ? void 0 : _j.clearValidators();
        (_k = this.lessionIdCtrl) === null || _k === void 0 ? void 0 : _k.reset();
      }

      (_l = this.unitIdCtrl) === null || _l === void 0 ? void 0 : _l.updateValueAndValidity();
      (_m = this.lessionIdCtrl) === null || _m === void 0 ? void 0 : _m.updateValueAndValidity();
    }
  }, {
    key: "RepeatableValidator",
    value: function RepeatableValidator() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;

      var CustomDiscount = (_a = this.hasCustomDiscountCtrl) === null || _a === void 0 ? void 0 : _a.value;

      if (CustomDiscount == true) {
        (_b = this.repeatNumbersCtrl) === null || _b === void 0 ? void 0 : _b.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
        (_c = this.repeatingPriceCtrl) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      } else if (CustomDiscount == false) {
        (_d = this.repeatNumbersCtrl) === null || _d === void 0 ? void 0 : _d.clearValidators();
        (_e = this.repeatingPriceCtrl) === null || _e === void 0 ? void 0 : _e.clearValidators();
        (_f = this.repeatNumbersCtrl) === null || _f === void 0 ? void 0 : _f.reset();
        (_g = this.repeatingPriceCtrl) === null || _g === void 0 ? void 0 : _g.reset();
      }

      (_h = this.repeatNumbersCtrl) === null || _h === void 0 ? void 0 : _h.updateValueAndValidity();
      (_j = this.repeatingPriceCtrl) === null || _j === void 0 ? void 0 : _j.updateValueAndValidity();
    }
  }]);

  return AddSurveyComponent;
}();

AddSurveyComponent.ɵfac = function AddSurveyComponent_Factory(t) {
  return new (t || AddSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_6__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_7__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService));
};

AddSurveyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddSurveyComponent,
  selectors: [["app-add-survey"]],
  viewQuery: function AddSurveyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 109,
  vars: 66,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["mat-raised-button", "", "routerLink", "../", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["matInput", "", "formControlName", "examName"], ["class", "danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "examHours"], ["matInput", "", "type", "number", "formControlName", "examMinutes"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker"], ["toDate", ""], ["matInput", "", "type", "time", "formControlName", "formHour"], ["matInput", "", "type", "time", "formControlName", "toHours"], ["align", "end", 4, "ngIf"], [1, "form-horizontal", 3, "formGroup"], [1, "col-md-6", "col-12"], ["type", "text", "matInput", "", "formControlName", "examGroup", 3, "matAutocomplete"], ["autoExamGroup", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", "formControlName", "examHeader", 3, "matAutocomplete"], ["autoExamHeader", "matAutocomplete"], ["matInput", "", "formControlName", "examContent", "cols", "20"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary bg-light-info", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "danger"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [3, "value"], ["mat-raised-button", "", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "questionNumber"], ["matColumnDef", "questionType"], ["matColumnDef", "question_title"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "info p-0", "matTooltip", "Add sub question", 3, "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["matTooltip", "Add sub question", 1, "info", "p-0", 3, "click"], [1, "ft-git-branch", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function AddSurveyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AddSurveyComponent_span_4_Template, 3, 3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddSurveyComponent_span_5_Template, 5, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, AddSurveyComponent_mat_hint_20_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, AddSurveyComponent_mat_hint_27_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AddSurveyComponent_mat_hint_34_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "mat-datepicker-toggle", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "mat-datepicker", null, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "mat-datepicker-toggle", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "mat-datepicker", null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, AddSurveyComponent_mat_card_actions_65_Template, 2, 1, "mat-card-actions", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "form", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "mat-autocomplete", null, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, AddSurveyComponent_mat_option_84_Template, 2, 2, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, AddSurveyComponent_mat_hint_86_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](91, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](92, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "mat-autocomplete", null, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](95, AddSurveyComponent_mat_option_95_Template, 2, 2, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](96, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](97, AddSurveyComponent_mat_hint_97_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](102, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](103, "textarea", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "mat-card-actions", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](105, AddSurveyComponent_button_105_Template, 4, 3, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](106, AddSurveyComponent_button_106_Template, 3, 3, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](107, AddSurveyComponent_button_107_Template, 3, 3, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](108, AddSurveyComponent_div_108_Template, 30, 8, "div", 31);
    }

    if (rf & 2) {
      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](43);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](52);

      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](83);

      var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](94);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.examId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](63, _c1, ctx.functionId, ctx.parentId));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 35, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 37, "labels.SurveyName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.examNameCtrl == null ? null : ctx.examNameCtrl.invalid) && ((ctx.examNameCtrl == null ? null : ctx.examNameCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 39, "labels.SurveyHours"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.examHoursCtrl == null ? null : ctx.examHoursCtrl.invalid) && ((ctx.examHoursCtrl == null ? null : ctx.examHoursCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 41, "labels.SurveyMinute"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.examMinutesCtrl == null ? null : ctx.examMinutesCtrl.invalid) && ((ctx.examMinutesCtrl == null ? null : ctx.examMinutesCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 43, "labels.FromDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](48, 45, "labels.ToDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](57, 47, "labels.FromTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 49, "labels.ToTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 51, "labels.addGxamGroups"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.GroupHeadersForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 53, "labels.\u064EQuestionNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 55, ctx.filteredExamGroups));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.examGroupCtrl == null ? null : ctx.examGroupCtrl.invalid) && ((ctx.examGroupCtrl == null ? null : ctx.examGroupCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](91, 57, "labels.QuestionHeader"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](96, 59, ctx.filteredExamHeaders));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.examHeaderCtrl == null ? null : ctx.examHeaderCtrl.invalid) && ((ctx.examHeaderCtrl == null ? null : ctx.examHeaderCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](102, 61, "labels.\u064EQuestionContent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.examId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.GroupsHeadersList.length > 0 && !ctx.editGroupHeaderMode && ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editGroupHeaderMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.GroupsHeadersList.length > 0);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepicker, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3VydmV5LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 15572:
/*!******************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/surveys/surveys-index/surveys-index.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveysIndexComponent": function() { return /* binding */ SurveysIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/admin/services/Admin/setup/course.service */ 96002);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






























function SurveysIndexComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function SurveysIndexComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r14 + 1);
  }
}

function SurveysIndexComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function SurveysIndexComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ele_r15.exam_ar_name);
  }
}

function SurveysIndexComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.CourseName"), " ");
  }
}

function SurveysIndexComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r16 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.languageService.isArabic ? ele_r16.course_ar_name : ele_r16.course_en_name, " ");
  }
}

function SurveysIndexComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.ThePublish"), " ");
  }
}

function SurveysIndexComponent_td_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.Published"), " ");
  }
}

function SurveysIndexComponent_td_51_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.UnPublished"), " ");
  }
}

function SurveysIndexComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveysIndexComponent_td_51_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveysIndexComponent_td_51_span_2_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", exam_r17 == null ? null : exam_r17.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(exam_r17 == null ? null : exam_r17.isPublish));
  }
}

function SurveysIndexComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 33);
  }
}

function SurveysIndexComponent_td_54_ng_container_5_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "labels.Publish"), " ");
  }
}

function SurveysIndexComponent_td_54_ng_container_5_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "labels.Unpublish"), " ");
  }
}

function SurveysIndexComponent_td_54_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveysIndexComponent_td_54_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);
      var exam_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r29.onPublishExam(exam_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveysIndexComponent_td_54_ng_container_5_a_1_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveysIndexComponent_td_54_ng_container_5_a_1_span_2_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !exam_r20.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", exam_r20.isPublish);
  }
}

var _c0 = function _c0(a0, a1, a2) {
  return {
    examId: a0,
    functionId: a1,
    parentId: a2
  };
};

function SurveysIndexComponent_td_54_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](4, _c0, exam_r20.id, ctx_r24.functionId, ctx_r24.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "General.Edit"), " ");
  }
}

function SurveysIndexComponent_td_54_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveysIndexComponent_td_54_ng_container_5_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      var exam_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r34.openDeleateDialog(exam_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

function SurveysIndexComponent_td_54_ng_container_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("routerLink", "/dashboard/exams-setup/exam-preview/", exam_r20.id, "/", ctx_r26.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c1, ctx_r26.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, "General.SurveyPreview"), " ");
  }
}

function SurveysIndexComponent_td_54_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveysIndexComponent_td_54_ng_container_5_a_1_Template, 3, 2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveysIndexComponent_td_54_ng_container_5_a_2_Template, 4, 8, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SurveysIndexComponent_td_54_ng_container_5_a_3_Template, 4, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, SurveysIndexComponent_td_54_ng_container_5_a_4_Template, 4, 8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r22.functionName === "publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r22.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r22.functionName === "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r22.functionName === "Show");
  }
}

function SurveysIndexComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, SurveysIndexComponent_td_54_ng_container_5_Template, 5, 4, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.rowFunctions);
  }
}

function SurveysIndexComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 51);
  }
}

function SurveysIndexComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 52);
  }

  if (rf & 2) {
    var row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("bg-light-info", !(row_r38 == null ? null : row_r38.isPublish));
  }
}

function SurveysIndexComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](37);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c2 = function _c2(a0, a1) {
  return {
    functionId: a0,
    parentId: a1
  };
};

var _c3 = function _c3() {
  return [10];
};

var SurveysIndexComponent = /*#__PURE__*/function () {
  function SurveysIndexComponent(route, fb, authserv, examService, toastr, spinner, generalService, dialog, courseser, languageService) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SurveysIndexComponent);

    this.route = route;
    this.fb = fb;
    this.authserv = authserv;
    this.examService = examService;
    this.toastr = toastr;
    this.spinner = spinner;
    this.generalService = generalService;
    this.dialog = dialog;
    this.courseser = courseser;
    this.languageService = languageService;
    this.exams = [];
    this.countries = [];
    this.stages = [];
    this.educationYears = [];
    this.subjects = [];
    this.exms = [];
    this.exam = [];
    this.displayedColumns = ["#", "exam_ar_name", "course", "isPublish", "actions"];
    this.curPage = 1;
    route.paramMap.subscribe(function (params) {
      _this.type = Number(params.get("typeId"));
    });
    route.paramMap.subscribe(function (params) {
      _this.subId = Number(params.get("courseId"));
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));
      _this.parentId = Number(params.get("parentId")); //  console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SurveysIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      this.myForm = this.fb.group({
        examName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required] //   countryId: [""],
        //   stageId: [""],
        //   educationYearId: [""],
        //   subjectId: ["0"],
        //   teacherUserId: ["0"],
        //   page: [""],
        //   EduCompId: [this.EduCompId],

      }); //  this.stageIdCtrl?.disable();
      //  this.educationYearIdCtrl?.disable();
      //  this.subjectIdCtrl?.disable();
      //this.teacherIdCtrl?.disable();
      // this.getAllCountieres();

      this.getAllExams(1);
    }
  }, {
    key: "examNameCtrl",
    get: function get() {
      return this.myForm.get("examName");
    } // get countryIdCtrl() {
    //   return this.myForm.get("countryId");
    // }
    // get stageIdCtrl() {
    //   return this.myForm.get("stageId");
    // }
    // get educationYearIdCtrl() {
    //   return this.myForm.get("educationYearId");
    // }
    // get subjectIdCtrl() {
    //   return this.myForm.get("subjectId");
    // }
    // get teacherUserIdCtrl() {
    //   return this.myForm.get("teacherUserId");
    // }
    // get page() {
    //   return this.myForm.get("page");
    // }

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllExams(1);
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });
      this.dataSource.paginator = this.paginator;
      this.startSortingTable();
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } //   getcoursebyId(){
    // this.courseser.getMainCourseById(this.subId).subscribe((res:any)=>{
    //   if(res){
    //     return res;
    //   }
    // })
    //   }

  }, {
    key: "getAllExams",
    value: function getAllExams(p) {
      var _this3 = this;

      var _a;

      this.curPage = p;
      this.spinner.show(); // this.page?.setValue(p);
      // this.myForm.controls["EduCompId"].setValue(this.EduCompId);

      var data = {
        typeId: this.type,
        page: p,
        EduCompId: this.EduCompId,
        subjectId: this.subId,
        examName: (_a = this.examNameCtrl) === null || _a === void 0 ? void 0 : _a.value
      };
      this.examService.getAllNormalExams(data).subscribe(function (response) {
        if (response) {
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(response.examList);
          _this3.exams = response.examList;
          _this3.totalItems = response.totalCount;

          _this3.startSortingTable();
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "removeExam",
    value: function removeExam(exam) {
      var _this4 = this;

      this.examService.deleteExam(exam.id).subscribe(function (response) {
        if (response) {
          _this4.toastr.success("General.DeleteSuccessfully");

          if (_this4.dataSource.data.length == 1 && _this4.curPage > 1) {
            // if last item in list: get previous page
            _this4.getAllExams(_this4.curPage - 1);

            _this4.paginator.pageIndex = _this4.curPage - 1;
          } else {
            // if not last item in list: get current page
            _this4.getAllExams(_this4.curPage);
          }
        }
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(exam) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: exam.exam_ar_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) {
          _this5.removeExam(exam);
        }
      });
    }
  }, {
    key: "onPublishExam",
    value: function onPublishExam(exam) {
      var _this6 = this;

      this.examService.publishExam(exam.id).subscribe(function (response) {
        if (response) {
          var i = _this6.exams.findIndex(function (e) {
            return e === exam;
          });

          _this6.exams[i].isPublish = !_this6.exams[i].isPublish; // for (const obj of this.exms) {
          //   if (obj.id === exam.id) {
          //     obj.isPublish = !obj.isPublish;
          //     break;
          //   }
          // }

          _this6.toastr.success("General.Done");
        }
      });
    } // getAllCountieres() {
    //   this.examService
    //     .getAllCountries<ICountrieDropModel[]>()
    //     .subscribe((response) => {
    //       if (response) {
    //         //console.log("COUNTIRES: ", response);
    //         this.countries = response;
    //       }
    //     });
    // }
    // onSelectCountry() {
    //   this.stageIdCtrl?.setValue("");
    //   this.educationYearIdCtrl?.setValue("");
    //   this.subjectIdCtrl?.setValue("");
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.countryIdCtrl?.value) {
    //     //  console.log('SELECTED country: ', this.countryIdCtrl?.value);
    //     this.examService
    //       .getAllStages<IStageDropModel[]>(this.countryIdCtrl?.value)
    //       .subscribe((response) => {
    //         if (response) {
    //           this.stages = response;
    //           //console.log("STAGES:", response);
    //           this.stageIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.stageIdCtrl?.disable();
    //     this.educationYearIdCtrl?.disable();
    //     this.subjectIdCtrl?.disable();
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }
    // onSelectStages() {
    //   this.educationYearIdCtrl?.setValue("");
    //   this.subjectIdCtrl?.setValue("");
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.stageIdCtrl?.value) {
    //     //console.log("SELECTED stages: ", this.stageIdCtrl?.value);
    //     this.examService
    //       .getAllEducationYears<IEducationYearDropModel[]>(
    //         this.stageIdCtrl?.value
    //       )
    //       .subscribe((response) => {
    //         if (response) {
    //           this.educationYears = response;
    //           //console.log("YEARS:", response);
    //           this.educationYearIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.educationYearIdCtrl?.disable();
    //     this.subjectIdCtrl?.disable();
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }
    // onSelectEducationYears() {
    //   this.subjectIdCtrl?.setValue("");
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.educationYearIdCtrl?.value) {
    //     //console.log("SELECTED YEARS: ", this.stageIdCtrl?.value);
    //     this.examService
    //       .getAllSubjects<ISubjectDropModel[]>(this.educationYearIdCtrl?.value)
    //       .subscribe((response) => {
    //         if (response) {
    //           this.subjects = response;
    //           //console.log("SUBJECTS:", response);
    //           this.subjectIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.subjectIdCtrl?.disable();
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }
    // onSelectSubjects() {
    //   this.teacherUserIdCtrl?.setValue("");
    //   if (this.subjectIdCtrl?.value) {
    //     //console.log("SELECTED subject: ", this.stageIdCtrl?.value);
    //     this.generalService
    //       .getTeacherBySubjectAndEduCompId(
    //         this.EduCompId,
    //         this.subjectIdCtrl?.value
    //       )
    //       .subscribe((response: any) => {
    //         if (response) {
    //           this.teachers = response.teachers;
    //           console.log("teachers:", response);
    //           this.teacherUserIdCtrl?.enable();
    //         }
    //       });
    //   } else {
    //     this.teacherUserIdCtrl?.disable();
    //   }
    // }

  }, {
    key: "track",
    value: function track(index, el) {
      return el.Id;
    }
  }, {
    key: "startSortingTable",
    value: function startSortingTable() {
      var _this7 = this;

      // custom sort
      this.dataSource.sortingDataAccessor = function (item, property) {
        switch (property) {
          case "course":
            return _this7.languageService.isArabic ? item.course_ar_name : item.course_en_name;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort;
    }
  }]);

  return SurveysIndexComponent;
}();

SurveysIndexComponent.ɵfac = function SurveysIndexComponent_Factory(t) {
  return new (t || SurveysIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService));
};

SurveysIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: SurveysIndexComponent,
  selectors: [["app-surveys-index"]],
  viewQuery: function SurveysIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 59,
  vars: 34,
  consts: [[1, "row"], [1, "col-12", "mb-3"], [1, ""], ["mat-raised-button", "", "routerLink", "/dashboard/setup/course/index", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", "routerLink", "../add-survey", 1, "btn", "btn-info", "bg-light-info", "float-right", "mb-2", 3, "queryParams"], [1, "fa", "fa-plus"], [1, "container-fluid"], [1, "col-12"], [3, "formGroup"], [1, "col-md-12", "col-12"], ["label", "labels.SurveyName", 3, "control"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search", "mr-1"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "exam_ar_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "course"], ["matColumnDef", "isPublish"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "bg-light-info", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "success", "ml-1"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../add-survey", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-upload", "font-medium-3", "mr-2"], [1, "ft-download", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "routerLink", "../add-survey", 3, "queryParams"], [1, "fa", "fa-edit", "font-medium-3", "mr-2"], [1, "fa", "fa-times", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams"], [1, "fa", "fa-video-camera", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function SurveysIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-card-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "app-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-card-actions", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveysIndexComponent_Template_a_click_21_listener() {
        return ctx.getAllExams(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-form-field", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function SurveysIndexComponent_Template_input_keyup_36_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "table", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](40, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, SurveysIndexComponent_th_41_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, SurveysIndexComponent_td_42_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](43, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, SurveysIndexComponent_th_44_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, SurveysIndexComponent_td_45_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](46, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, SurveysIndexComponent_th_47_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, SurveysIndexComponent_td_48_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](49, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, SurveysIndexComponent_th_50_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, SurveysIndexComponent_td_51_Template, 3, 2, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](52, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, SurveysIndexComponent_th_53_Template, 1, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, SurveysIndexComponent_td_54_Template, 6, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, SurveysIndexComponent_tr_55_Template, 1, 0, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, SurveysIndexComponent_tr_56_Template, 1, 2, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, SurveysIndexComponent_tr_57_Template, 3, 1, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-paginator", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("page", function SurveysIndexComponent_Template_mat_paginator_page_58_listener($event) {
        return ctx.getAllExams($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 16, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](28, _c1, ctx.parentId));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 18, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](30, _c2, ctx.functionId, ctx.parentId));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 20, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.examNameCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 22, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 24, "Navbar.Surveys"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 26, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](33, _c3))("length", ctx.totalItems)("pageSize", 10);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_9__.InputComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXJ2ZXlzLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 20533:
/*!******************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/templates/add-template/add-template.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTemplateComponent": function() { return /* binding */ AddTemplateComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_teacher_services_templates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/teacher/services/templates.service */ 64064);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/admin/services/Admin/educational.service */ 56471);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






























function AddTemplateComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.AddTemplate"), " ");
  }
}

function AddTemplateComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "labels.UpdateTemplate"), " - ", ctx_r1.templateName, " ");
  }
}

function AddTemplateComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var Preset_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", Preset_r27.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", Preset_r27.Name, " ");
  }
}

function AddTemplateComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", teacher_r28.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", teacher_r28.teacher_ar_name, " ");
  }
}

function AddTemplateComponent_mat_hint_33_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddTemplateComponent_mat_hint_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_33_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrl.teacherUserIdCtrl == null ? null : ctx_r4.FormCtrl.teacherUserIdCtrl.errors == null ? null : ctx_r4.FormCtrl.teacherUserIdCtrl.errors.required);
  }
}

function AddTemplateComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var stage_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", stage_r30.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", stage_r30.Text, " ");
  }
}

function AddTemplateComponent_mat_hint_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddTemplateComponent_mat_hint_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_44_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.FormCtrl.stageId == null ? null : ctx_r6.FormCtrl.stageId.errors == null ? null : ctx_r6.FormCtrl.stageId.errors.required);
  }
}

function AddTemplateComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var year_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", year_r32.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", year_r32.Text_Ar, " ");
  }
}

function AddTemplateComponent_mat_hint_55_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddTemplateComponent_mat_hint_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_55_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.FormCtrl.yearId.errors == null ? null : ctx_r8.FormCtrl.yearId.errors.required);
  }
}

function AddTemplateComponent_mat_option_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", subject_r34.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", subject_r34.Text, " ");
  }
}

function AddTemplateComponent_mat_hint_66_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddTemplateComponent_mat_hint_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_66_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.FormCtrl.subjectId == null ? null : ctx_r10.FormCtrl.subjectId.errors == null ? null : ctx_r10.FormCtrl.subjectId.errors.required);
  }
}

function AddTemplateComponent_mat_option_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var unit_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", unit_r36.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", unit_r36.Text, " ");
  }
}

function AddTemplateComponent_mat_hint_77_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_77_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.FormCtrl.UnitRevisionID == null ? null : ctx_r12.FormCtrl.UnitRevisionID.errors == null ? null : ctx_r12.FormCtrl.UnitRevisionID.errors.required);
  }
}

function AddTemplateComponent_mat_option_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lesson_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", lesson_r38.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", lesson_r38.Text, " ");
  }
}

function AddTemplateComponent_mat_hint_88_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_88_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.FormCtrl.LessonID == null ? null : ctx_r14.FormCtrl.LessonID.errors == null ? null : ctx_r14.FormCtrl.LessonID.errors.required);
  }
}

function AddTemplateComponent_mat_hint_95_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_95_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_95_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_95_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.FormCtrl.Name == null ? null : ctx_r15.FormCtrl.Name.errors == null ? null : ctx_r15.FormCtrl.Name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.FormCtrl.Name == null ? null : ctx_r15.FormCtrl.Name.errors == null ? null : ctx_r15.FormCtrl.Name.errors.whiteSpace);
  }
}

function AddTemplateComponent_mat_hint_102_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_102_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_102_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_102_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.FormCtrl.exam_hour == null ? null : ctx_r16.FormCtrl.exam_hour.errors == null ? null : ctx_r16.FormCtrl.exam_hour.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.FormCtrl.exam_hour == null ? null : ctx_r16.FormCtrl.exam_hour.errors == null ? null : ctx_r16.FormCtrl.exam_hour.errors.minusNum);
  }
}

function AddTemplateComponent_mat_hint_109_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_109_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_109_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_109_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.FormCtrl.exam_minute == null ? null : ctx_r17.FormCtrl.exam_minute.errors == null ? null : ctx_r17.FormCtrl.exam_minute.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.FormCtrl.exam_minute == null ? null : ctx_r17.FormCtrl.exam_minute.errors == null ? null : ctx_r17.FormCtrl.exam_minute.errors.minusNum);
  }
}

function AddTemplateComponent_mat_hint_116_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_116_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_116_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_116_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r18.FormCtrl.price == null ? null : ctx_r18.FormCtrl.price.errors == null ? null : ctx_r18.FormCtrl.price.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r18.price == null ? null : ctx_r18.price.errors == null ? null : ctx_r18.price.errors.minusNum);
  }
}

function AddTemplateComponent_ng_container_233_mat_hint_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_ng_container_233_mat_hint_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_ng_container_233_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_ng_container_233_mat_hint_7_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_ng_container_233_mat_hint_7_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r48.FormCtrl.repeatableExam_Count == null ? null : ctx_r48.FormCtrl.repeatableExam_Count.errors == null ? null : ctx_r48.FormCtrl.repeatableExam_Count.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r48.FormCtrl.repeatableExam_Count == null ? null : ctx_r48.FormCtrl.repeatableExam_Count.errors == null ? null : ctx_r48.FormCtrl.repeatableExam_Count.errors.bigZero);
  }
}

function AddTemplateComponent_ng_container_233_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_ng_container_233_mat_hint_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_ng_container_233_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_ng_container_233_mat_hint_14_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_ng_container_233_mat_hint_14_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r49.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r49.FormCtrl.StudentRepeatExamCost.errors == null ? null : ctx_r49.FormCtrl.StudentRepeatExamCost.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r49.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r49.FormCtrl.StudentRepeatExamCost.errors == null ? null : ctx_r49.FormCtrl.StudentRepeatExamCost.errors.minusNum);
  }
}

function AddTemplateComponent_ng_container_233_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AddTemplateComponent_ng_container_233_mat_hint_7_Template, 3, 2, "mat-hint", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, AddTemplateComponent_ng_container_233_mat_hint_14_Template, 3, 2, "mat-hint", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "labels.repeatNumbers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r22.FormCtrl.repeatableExam_Count == null ? null : ctx_r22.FormCtrl.repeatableExam_Count.invalid) && ((ctx_r22.FormCtrl.repeatableExam_Count == null ? null : ctx_r22.FormCtrl.repeatableExam_Count.touched) || ctx_r22.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 6, "labels.repeatingPrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r22.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r22.FormCtrl.StudentRepeatExamCost.invalid) && ((ctx_r22.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r22.FormCtrl.StudentRepeatExamCost.touched) || ctx_r22.submitted));
  }
}

function AddTemplateComponent_button_235_Template(rf, ctx) {
  if (rf & 1) {
    var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddTemplateComponent_button_235_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55);
      var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r54.addUpdateTemplate();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Add"), " ");
  }
}

function AddTemplateComponent_button_236_Template(rf, ctx) {
  if (rf & 1) {
    var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddTemplateComponent_button_236_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r56.addUpdateTemplate();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

function AddTemplateComponent_div_237_mat_hint_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddTemplateComponent_div_237_mat_hint_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " You must enter a correct value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddTemplateComponent_div_237_mat_hint_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_div_237_mat_hint_18_span_1_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_div_237_mat_hint_18_span_2_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r58.DetailsCtrl.questionsCount.errors == null ? null : ctx_r58.DetailsCtrl.questionsCount.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r58.DetailsCtrl.questionsCount.errors == null ? null : ctx_r58.DetailsCtrl.questionsCount.errors.bigZero);
  }
}

function AddTemplateComponent_div_237_mat_hint_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddTemplateComponent_div_237_mat_hint_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " You must enter a correct value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddTemplateComponent_div_237_mat_hint_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_div_237_mat_hint_40_span_1_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddTemplateComponent_div_237_mat_hint_40_span_2_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r59.DetailsCtrl.mark.errors == null ? null : ctx_r59.DetailsCtrl.mark.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r59.DetailsCtrl.mark.errors == null ? null : ctx_r59.DetailsCtrl.mark.errors.minusNum);
  }
}

function AddTemplateComponent_div_237_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var unit_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", unit_r70.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", unit_r70.Text, " ");
  }
}

function AddTemplateComponent_div_237_mat_hint_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_div_237_mat_hint_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_div_237_mat_hint_51_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r61.DetailsCtrl.unitRevisionID == null ? null : ctx_r61.DetailsCtrl.unitRevisionID.errors == null ? null : ctx_r61.DetailsCtrl.unitRevisionID.errors.required);
  }
}

function AddTemplateComponent_div_237_mat_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lesson_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", lesson_r72.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", lesson_r72.Text, " ");
  }
}

function AddTemplateComponent_div_237_mat_hint_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_div_237_mat_hint_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddTemplateComponent_div_237_mat_hint_62_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r63.DetailsCtrl.LessonID == null ? null : ctx_r63.DetailsCtrl.LessonID.errors == null ? null : ctx_r63.DetailsCtrl.LessonID.errors.required);
  }
}

function AddTemplateComponent_div_237_mat_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var topic_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", topic_r74.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", topic_r74.Text, " ");
  }
}

function AddTemplateComponent_div_237_button_74_Template(rf, ctx) {
  if (rf & 1) {
    var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddTemplateComponent_div_237_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r75.addTemplateDetails();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Add"), " ");
  }
}

function AddTemplateComponent_div_237_Template(rf, ctx) {
  if (rf & 1) {
    var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, AddTemplateComponent_div_237_mat_hint_18_Template, 3, 2, "mat-hint", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\u0633\u0647\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "\u0645\u062A\u0648\u0633\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "\u0635\u0639\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, AddTemplateComponent_div_237_mat_hint_40_Template, 3, 2, "mat-hint", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddTemplateComponent_div_237_Template_mat_select_selectionChange_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78);
      var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r77.GetLessonsForDetails(ctx_r77.DetailsCtrl.unitRevisionID == null ? null : ctx_r77.DetailsCtrl.unitRevisionID.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, AddTemplateComponent_div_237_mat_option_50_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, AddTemplateComponent_div_237_mat_hint_51_Template, 2, 1, "mat-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddTemplateComponent_div_237_Template_mat_select_selectionChange_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78);
      var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r79.GetTopicsForDetails(ctx_r79.DetailsCtrl.lessonID == null ? null : ctx_r79.DetailsCtrl.lessonID.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, AddTemplateComponent_div_237_mat_option_61_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, AddTemplateComponent_div_237_mat_hint_62_Template, 2, 1, "mat-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, AddTemplateComponent_div_237_mat_option_72_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "mat-card-actions", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, AddTemplateComponent_div_237_button_74_Template, 4, 3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 23, "labels.QuestionData"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r25.DetailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 25, "labels.questionsCount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r25.DetailsCtrl.questionsCount.invalid && (ctx_r25.DetailsCtrl.questionsCount.touched || ctx_r25.DetailSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 27, "labels.Level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 29, "General.Choose"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 31, "labels.QuestionMark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r25.DetailsCtrl.mark.invalid && (ctx_r25.DetailsCtrl.mark.touched || ctx_r25.DetailSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](45, 33, "labels.Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 35, "General.Choose"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r25.unitsForDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r25.DetailsCtrl.unitRevisionID == null ? null : ctx_r25.DetailsCtrl.unitRevisionID.invalid) && ((ctx_r25.DetailsCtrl.unitRevisionID == null ? null : ctx_r25.DetailsCtrl.unitRevisionID.touched) || ctx_r25.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](56, 37, "labels.Lesson"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 39, "General.Choose"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r25.lessonsForDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r25.DetailsCtrl.LessonID == null ? null : ctx_r25.DetailsCtrl.LessonID.invalid) && ((ctx_r25.DetailsCtrl.LessonID == null ? null : ctx_r25.DetailsCtrl.LessonID.touched) || ctx_r25.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](67, 41, "labels.Topic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](71, 43, "General.Choose"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r25.topicsForDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r25.FormCtrl.Id.value != null);
  }
}

function AddTemplateComponent_div_238_tr_39_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u0633\u0647\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddTemplateComponent_div_238_tr_39_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u0645\u062A\u0648\u0633\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddTemplateComponent_div_238_tr_39_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u0635\u0639\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddTemplateComponent_div_238_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AddTemplateComponent_div_238_tr_39_td_7_Template, 2, 0, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AddTemplateComponent_div_238_tr_39_td_8_Template, 2, 0, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AddTemplateComponent_div_238_tr_39_td_9_Template, 2, 0, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddTemplateComponent_div_238_tr_39_Template_button_click_19_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r88);
      var detail_r82 = restoredCtx.$implicit;
      var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r87.openDeleateDialog(detail_r82);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var detail_r82 = ctx.$implicit;
    var i_r83 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r83 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](detail_r82 == null ? null : detail_r82.questionsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](detail_r82 == null ? null : detail_r82.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (detail_r82 == null ? null : detail_r82.questionsLevel) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (detail_r82 == null ? null : detail_r82.questionsLevel) == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (detail_r82 == null ? null : detail_r82.questionsLevel) == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](detail_r82 == null ? null : detail_r82.SubjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](detail_r82 == null ? null : detail_r82.UnitName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](detail_r82 == null ? null : detail_r82.LessonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](detail_r82 == null ? null : detail_r82.TopicName);
  }
}

function AddTemplateComponent_div_238_div_41_Template(rf, ctx) {
  if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pagination-controls", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function AddTemplateComponent_div_238_div_41_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r90);
      var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r89.p = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("maxSize", ctx_r81.maxSize);
  }
}

var _c0 = function _c0(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2
  };
};

function AddTemplateComponent_div_238_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\xAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, AddTemplateComponent_div_238_tr_39_Template, 22, 10, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, AddTemplateComponent_div_238_div_41_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 11, "labels.Questions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 13, "labels.questionsCount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 15, "labels.QuestionMark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 17, "labels.Level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 19, "labels.Subject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 21, "labels.Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 23, "labels.Lesson"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 25, "labels.Topic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](40, 27, ctx_r26.QuestionDetails, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](30, _c0, ctx_r26.p, ctx_r26.QuestionDetails.length)))("ngForTrackBy", ctx_r26.track);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r26.QuestionDetails.length > 5);
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

var AddTemplateComponent = /*#__PURE__*/function () {
  function AddTemplateComponent(fb, route, toastr, spinner, authserv, TemplatesService, dialog, GeneralService, datePipe, EducationalService) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddTemplateComponent);

    this.fb = fb;
    this.route = route;
    this.toastr = toastr;
    this.spinner = spinner;
    this.authserv = authserv;
    this.TemplatesService = TemplatesService;
    this.dialog = dialog;
    this.GeneralService = GeneralService;
    this.datePipe = datePipe;
    this.EducationalService = EducationalService;
    this.p = 1;
    this.maxSize = 9;
    this.Teachers = [];
    this.QuestionDetails = [];
    this.Presets = [];
    this.stages = [];
    this.years = [];
    this.subjects = [];
    this.units = [];
    this.lessons = [];
    this.topics = [];
    this.submitted = false;
    this.DetailSubmitted = false;
    this.templateId = null;
    route.queryParamMap.subscribe(function (params) {
      _this.templateId = params.get("templateId");
      _this.functionId = Number(params.get("functionId")); //  console.log("functionId", this.functionId);

      if (_this.templateId) {
        _this.getTemplateById();

        _this.getQuestionDetails(_this.templateId);
      }

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddTemplateComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        EduCompId: [this.EduCompId],
        Id: [this.templateId],
        presetTemplateId: [""],
        teacherUserId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        yearId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        stageId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        subjectId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        UnitRevisionID: [""],
        LessonID: [""],
        topicId: [""],
        Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        exam_minute: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        exam_hour: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        priceDiscount: [""],
        Avilable_Date_From: [""],
        priceDiscountType: [0],
        Avilable_Date_To: [""],
        fromHour: [""],
        toHour: [""],
        ResultDate: [""],
        ResultTime: [""],
        Individually_Purchased: [false],
        repeatableExam: [false],
        repeatableExam_Count: [false],
        SendWhatsApp: [false],
        CustomDiscountApplied: [false],
        StudentRepeatExamCost: [""],
        Publish: [false]
      });
      this.DetailForm = this.fb.group({
        templateId: [this.templateId, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        questionsLevel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        mark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        questionsCount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]],
        unitRevisionID: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        lessonID: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        TopicID: [""]
      });

      if (this.templateId != null) {//  this.FormCtrl.Id.setValue(this.templateId);
        //  this.DetailsCtrl.templateId.setValue(this.templateId);
        //  this.getQuestionDetails(this.templateId);
      } else {
        this.FormCtrl.stageId.disable();
        this.FormCtrl.yearId.disable();
        this.FormCtrl.subjectId.disable();
        this.FormCtrl.UnitRevisionID.disable();
        this.FormCtrl.LessonID.disable();
        this.FormCtrl.topicId.disable();
        this.DetailsCtrl.questionsCount.disable();
        this.DetailsCtrl.unitRevisionID.disable();
        this.DetailsCtrl.lessonID.disable();
        this.DetailsCtrl.TopicID.disable();
        this.DetailsCtrl.mark.disable();
      }

      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      this.getTeachersByEducompId(this.EduCompId);
      this.getPresets();
      this.FormCtrl.EduCompId.setValue(this.EduCompId);
      this.repeatableExamValidators();
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "DetailsCtrl",
    get: function get() {
      return this.DetailForm.controls;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });
    }
  }, {
    key: "addUpdateTemplate",
    value: function addUpdateTemplate() {
      var _this3 = this;

      this.submitted = true; //this.datePipe.transform(this.resualtDateCtrl.value),

      var obj = this.myForm.value;
      obj.Avilable_Date_From = this.datePipe.transform(this.FormCtrl.Avilable_Date_From.value);
      obj.Avilable_Date_To = this.datePipe.transform(this.FormCtrl.Avilable_Date_To.value);
      obj.ResultDate = this.datePipe.transform(this.FormCtrl.ResultDate.value);

      if (this.myForm.valid) {
        this.spinner.show();
        this.TemplatesService.addUpdateTemplate({
          presetTemplateId: obj.presetTemplateId,
          template: obj
        }).subscribe(function (res) {
          console.log("createTemplate", res);

          if (res.returnValue) {
            _this3.DetailsCtrl.templateId.setValue(res.returnValue);

            _this3.FormCtrl.Id.setValue(res.returnValue);

            _this3.getQuestionDetails(res.returnValue);

            _this3.submitted = false; // this.myForm.reset();

            _this3.DetailsCtrl.questionsCount.enable();

            _this3.DetailsCtrl.unitRevisionID.enable();

            _this3.DetailsCtrl.lessonID.enable();

            _this3.DetailsCtrl.TopicID.enable();

            _this3.DetailsCtrl.mark.enable();

            _this3.toastr.success("Done"); // } else {
            //this.toastr.error(res.returnString);

          }

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "getTemplateById",
    value: function getTemplateById() {
      var _this4 = this;

      this.spinner.show();
      this.TemplatesService.getTemplateById(this.templateId).subscribe(function (res) {
        //   console.log("getTemplateById", res);
        _this4.getStageByTeacherId(res.teacherUserId);

        _this4.FormCtrl.teacherUserId.setValue(res.teacherUserId);

        _this4.returnYears(res.stage_id);

        _this4.returnTeacherSubjects(res.educational_year_id);

        _this4.GetUnits(res.subjectId);

        _this4.GetLessons(res.UnitRevisionID);

        _this4.GetTopics(res.LessonID);

        _this4.myForm.patchValue(res);

        _this4.myForm.patchValue(res);

        _this4.FormCtrl.stageId.setValue(String(res.stage_id));

        _this4.FormCtrl.yearId.setValue(String(res.educational_year_id));

        _this4.FormCtrl.subjectId.setValue(String(res.subjectId));

        _this4.FormCtrl.UnitRevisionID.setValue(String(res.UnitRevisionID));

        _this4.FormCtrl.LessonID.setValue(String(res.LessonID));

        _this4.templateName = res.Name;
        var exam_minute = res.exam_period_minute % 60;
        var exam_hour = (res.exam_period_minute - exam_minute) / 60;

        _this4.FormCtrl.exam_minute.setValue(exam_minute);

        _this4.FormCtrl.exam_hour.setValue(exam_hour);

        _this4.FormCtrl.fromHour.setValue(res.fromHour);

        _this4.FormCtrl.toHour.setValue(res.toHour);

        _this4.GetUnitsForDetails();

        _this4.spinner.hide();
      });
    }
  }, {
    key: "addTemplateDetails",
    value: function addTemplateDetails() {
      var _this5 = this;

      this.DetailSubmitted = true;
      var valid = this.DetailForm.valid; // console.log(this.DetailForm.value);

      if (valid) {
        this.spinner.show();
        this.TemplatesService.addTemplateDetails(this.DetailForm.value).subscribe(function (res) {
          //     console.log("addDetails", res);
          if (res.returnValue == 1) {
            _this5.DetailSubmitted = false; // this.DetailForm.reset();

            _this5.getQuestionDetails(_this5.DetailsCtrl.templateId.value);

            _this5.DetailsCtrl.questionsCount.reset();

            _this5.DetailsCtrl.unitRevisionID.setValue("");

            _this5.DetailsCtrl.lessonID.setValue("");

            _this5.DetailsCtrl.TopicID.setValue("");

            _this5.DetailsCtrl.mark.reset();

            _this5.toastr.success("Questiopn added");
          } else {
            _this5.toastr.error(res.returnString);
          }

          _this5.spinner.hide();
        });
      }
    }
  }, {
    key: "getQuestionDetails",
    value: function getQuestionDetails(templateId) {
      var _this6 = this;

      this.spinner.show();
      this.TemplatesService.getQuestionDetails(templateId).subscribe(function (res) {
        // console.log("getDetails", res);
        _this6.QuestionDetails = res;

        _this6.spinner.hide();
      });
    }
  }, {
    key: "getPresets",
    value: function getPresets() {
      var _this7 = this;

      this.spinner.show();
      this.TemplatesService.getPresets(this.EduCompId).subscribe(function (res) {
        // console.log('getPresets', res);
        _this7.Presets = res;

        _this7.spinner.hide();
      });
    }
  }, {
    key: "DeleteDetails",
    value: function DeleteDetails(question) {
      var _this8 = this;

      this.spinner.show();
      this.TemplatesService.DeleteDetails(question.Id).subscribe(function (res) {
        //console.log('DeleteDetails', res);
        if (res.Id == question.Id) {
          var i = _this8.QuestionDetails.findIndex(function (e) {
            return e == question;
          });

          _this8.QuestionDetails.splice(i, 1);

          _this8.toastr.success(" Deleted");
        }

        _this8.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(question) {
      var _this9 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: ""
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this9.DeleteDetails(question);
      });
    }
  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId(EduCompId) {
      var _this10 = this;

      this.GeneralService.getTeachersByEducompId(EduCompId).subscribe(function (res) {
        _this10.Teachers = res.lstTeachers;
      });
    }
  }, {
    key: "getStageByTeacherId",
    value: function getStageByTeacherId(teacherId) {
      var _this11 = this;

      this.FormCtrl.stageId.setValue("");
      this.FormCtrl.yearId.setValue("");
      this.FormCtrl.subjectId.setValue("");
      this.FormCtrl.UnitRevisionID.setValue("");
      this.FormCtrl.LessonID.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (teacherId != "") {
        this.EducationalService.getStageByTeacherId(teacherId).subscribe(function (res) {
          _this11.stages = res;

          _this11.FormCtrl.stageId.enable(); //console.log(res);

        });
      } else {
        this.FormCtrl.stageId.setValue("");
        this.FormCtrl.stageId.disable();
        this.FormCtrl.yearId.disable();
        this.FormCtrl.subjectId.disable();
        this.FormCtrl.UnitRevisionID.disable();
        this.FormCtrl.LessonID.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "returnYears",
    value: function returnYears(stageId) {
      var _this12 = this;

      this.FormCtrl.yearId.setValue("");
      this.FormCtrl.subjectId.setValue("");
      this.FormCtrl.UnitRevisionID.setValue("");
      this.FormCtrl.LessonID.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (stageId != "") {
        this.EducationalService.returnYears(stageId).subscribe(function (res) {
          _this12.years = res;

          _this12.FormCtrl.yearId.enable();
        });
      } else {
        this.FormCtrl.yearId.setValue("");
        this.FormCtrl.yearId.disable();
        this.FormCtrl.subjectId.disable();
        this.FormCtrl.UnitRevisionID.disable();
        this.FormCtrl.LessonID.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "returnTeacherSubjects",
    value: function returnTeacherSubjects(yearId) {
      var _this13 = this;

      this.FormCtrl.subjectId.setValue("");
      this.FormCtrl.UnitRevisionID.setValue("");
      this.FormCtrl.LessonID.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (yearId != "") {
        var data = {
          yearId: yearId,
          teacherUserId: this.FormCtrl.teacherUserId.value
        };
        this.EducationalService.returnTeacherSubjects(data).subscribe(function (res) {
          _this13.subjects = res;

          _this13.FormCtrl.subjectId.enable();
        });
      } else {
        this.FormCtrl.subjectId.setValue("");
        this.FormCtrl.subjectId.disable();
        this.FormCtrl.UnitRevisionID.disable();
        this.FormCtrl.LessonID.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "GetUnits",
    value: function GetUnits(SubjectId) {
      var _this14 = this;

      this.FormCtrl.UnitRevisionID.setValue("");
      this.FormCtrl.LessonID.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (SubjectId != "") {
        this.EducationalService.GetUnits(SubjectId).subscribe(function (res) {
          _this14.units = res;

          _this14.FormCtrl.UnitRevisionID.enable();
        });
      } else {
        this.FormCtrl.UnitRevisionID.setValue("");
        this.FormCtrl.UnitRevisionID.disable();
        this.FormCtrl.LessonID.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "GetLessons",
    value: function GetLessons(UnitRevisionID) {
      var _this15 = this;

      this.FormCtrl.LessonID.setValue("");
      this.FormCtrl.topicId.setValue("");

      if (UnitRevisionID != "") {
        this.EducationalService.GetLessons(UnitRevisionID).subscribe(function (res) {
          _this15.lessons = res;

          _this15.FormCtrl.LessonID.enable();
        });
      } else {
        this.FormCtrl.LessonID.setValue("");
        this.FormCtrl.LessonID.disable();
        this.FormCtrl.topicId.disable();
      }
    }
  }, {
    key: "GetTopics",
    value: function GetTopics(LessonId) {
      var _this16 = this;

      this.FormCtrl.topicId.setValue("");

      if (LessonId != "") {
        this.EducationalService.GetTopics(LessonId).subscribe(function (res) {
          _this16.topics = res;

          _this16.FormCtrl.topicId.enable();
        });
      } else {
        this.FormCtrl.topicId.setValue("");
        this.FormCtrl.topicId.disable();
      }
    } //#####################################################################

  }, {
    key: "GetUnitsForDetails",
    value: function GetUnitsForDetails() {
      var _this17 = this;

      var _a, _b;

      this.DetailsCtrl.unitRevisionID.setValue("");
      this.DetailsCtrl.lessonID.setValue("");
      this.DetailsCtrl.TopicID.setValue("");

      if ((_a = this.FormCtrl.subjectId) === null || _a === void 0 ? void 0 : _a.value) {
        this.EducationalService.GetUnits((_b = this.FormCtrl.subjectId) === null || _b === void 0 ? void 0 : _b.value).subscribe(function (res) {
          _this17.unitsForDetails = res;

          _this17.DetailsCtrl.unitRevisionID.enable();
        });
      } else {
        this.DetailsCtrl.unitRevisionID.setValue("");
        this.DetailsCtrl.UnitRevisionID.disable();
        this.DetailsCtrl.lessonID.disable();
        this.DetailsCtrl.TopicID.disable();
      }
    }
  }, {
    key: "GetLessonsForDetails",
    value: function GetLessonsForDetails(unitRevisionID) {
      var _this18 = this;

      this.DetailsCtrl.lessonID.setValue("");
      this.DetailsCtrl.TopicID.setValue("");

      if (unitRevisionID != "") {
        this.EducationalService.GetLessons(unitRevisionID).subscribe(function (res) {
          _this18.lessonsForDetails = res;

          _this18.DetailsCtrl.lessonID.enable();
        });
      } else {
        this.DetailsCtrl.lessonID.setValue("");
        this.DetailsCtrl.lessonID.disable();
        this.DetailsCtrl.TopicID.disable();
      }
    }
  }, {
    key: "GetTopicsForDetails",
    value: function GetTopicsForDetails(LessonId) {
      var _this19 = this;

      this.DetailsCtrl.TopicID.setValue("");

      if (LessonId != "") {
        this.EducationalService.GetTopics(LessonId).subscribe(function (res) {
          _this19.topicsForDetails = res;

          _this19.DetailsCtrl.TopicID.enable();
        });
      } else {
        this.DetailsCtrl.TopicID.setValue("");
        this.DetailsCtrl.TopicID.disable();
      }
    }
  }, {
    key: "resetManual",
    value: function resetManual() {
      this.myForm.controls["teacherUserId"].setValue("");
      this.myForm.controls["yearId"].setValue("");
      this.myForm.controls["stageId"].setValue("");
      this.myForm.controls["subjectId"].setValue("");
      this.myForm.controls["UnitRevisionID"].setValue("");
      this.myForm.controls["lessonId"].setValue("");
      this.myForm.controls["topicId"].setValue("");
    }
  }, {
    key: "track",
    value: function track(index, el) {
      return el.Id;
    }
  }, {
    key: "repeatableExamValidators",
    value: function repeatableExamValidators() {
      var repeatableExam = this.FormCtrl.repeatableExam.value;

      if (repeatableExam == true) {
        this.FormCtrl.repeatableExam_Count.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]);
        this.FormCtrl.StudentRepeatExamCost.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]);
      } else {
        this.FormCtrl.repeatableExam_Count.clearValidators();
        this.FormCtrl.repeatableExam_Count.reset();
        this.FormCtrl.StudentRepeatExamCost.clearValidators();
        this.FormCtrl.StudentRepeatExamCost.reset();
      }

      this.FormCtrl.repeatableExam_Count.updateValueAndValidity();
      this.FormCtrl.StudentRepeatExamCost.updateValueAndValidity();
    }
  }]);

  return AddTemplateComponent;
}();

AddTemplateComponent.ɵfac = function AddTemplateComponent_Factory(t) {
  return new (t || AddTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_teacher_services_templates_service__WEBPACK_IMPORTED_MODULE_5__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_7__.EducationalService));
};

AddTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddTemplateComponent,
  selectors: [["app-add-template"]],
  decls: 239,
  vars: 159,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["mat-raised-button", "", "routerLink", "../", 1, "btn", "bbtn-warning", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["formControlName", "presetTemplateId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "teacherUserId", 3, "selectionChange"], ["class", "danger", 4, "ngIf"], ["formControlName", "stageId", 3, "selectionChange"], ["formControlName", "yearId", 3, "selectionChange"], ["formControlName", "subjectId", 3, "selectionChange"], ["formControlName", "UnitRevisionID", 3, "selectionChange"], ["formControlName", "LessonID"], ["matInput", "", "formControlName", "Name"], [1, "col-md-2", "col-12"], ["matInput", "", "type", "number", "formControlName", "exam_hour"], ["matInput", "", "type", "number", "formControlName", "exam_minute"], ["matInput", "", "type", "number", "formControlName", "price"], ["matInput", "", "type", "number", "formControlName", "priceDiscount"], ["formControlName", "priceDiscountType"], ["value", "1"], ["value", "2"], ["matInput", "", "formControlName", "Avilable_Date_From", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["matInput", "", "formControlName", "Avilable_Date_To", 3, "matDatepicker"], ["toDate", ""], ["matInput", "", "type", "time", "formControlName", "fromHour"], ["matInput", "", "type", "time", "formControlName", "toHour"], ["matInput", "", "formControlName", "ResultDate", 3, "matDatepicker"], ["resualtDate", ""], ["matInput", "", "type", "time", "formControlName", "ResultTime"], ["formControlName", "Individually_Purchased", 1, "row"], [3, "value"], ["formControlName", "repeatableExam", 1, "row"], [3, "value", "change"], ["formControlName", "SendWhatsApp", 1, "row"], ["formControlName", "CustomDiscountApplied", 1, "row"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary bg-light-info", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "danger"], ["matInput", "", "type", "number", "formControlName", "repeatableExam_Count"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "StudentRepeatExamCost"], [1, "text-danger"], ["mat-raised-button", "", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-4", "col-12"], ["matInput", "", "type", "number", "formControlName", "questionsCount"], ["class", "rtl has-error pull-right", 4, "ngIf"], ["formControlName", "questionsLevel"], ["matInput", "", "type", "number", "formControlName", "mark"], ["formControlName", "unitRevisionID", 3, "selectionChange"], ["formControlName", "lessonID", 3, "selectionChange"], ["formControlName", "TopicID"], [1, "rtl", "has-error", "pull-right"], [1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "paginator-box", 4, "ngIf"], [1, "text-center"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "delete questions", 3, "click"], [1, "paginator-box"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"]],
  template: function AddTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AddTemplateComponent_span_4_Template, 3, 3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddTemplateComponent_span_5_Template, 3, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Preset");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, AddTemplateComponent_mat_option_22_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddTemplateComponent_Template_mat_select_selectionChange_28_listener() {
        return ctx.getStageByTeacherId(ctx.FormCtrl.teacherUserId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, AddTemplateComponent_mat_option_32_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, AddTemplateComponent_mat_hint_33_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddTemplateComponent_Template_mat_select_selectionChange_39_listener() {
        return ctx.returnYears(ctx.FormCtrl.stageId == null ? null : ctx.FormCtrl.stageId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, AddTemplateComponent_mat_option_43_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, AddTemplateComponent_mat_hint_44_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddTemplateComponent_Template_mat_select_selectionChange_50_listener() {
        return ctx.returnTeacherSubjects(ctx.FormCtrl.yearId == null ? null : ctx.FormCtrl.yearId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, AddTemplateComponent_mat_option_54_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, AddTemplateComponent_mat_hint_55_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddTemplateComponent_Template_mat_select_selectionChange_61_listener() {
        ctx.GetUnits(ctx.FormCtrl.subjectId == null ? null : ctx.FormCtrl.subjectId.value);
        return ctx.GetUnitsForDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](64, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, AddTemplateComponent_mat_option_65_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, AddTemplateComponent_mat_hint_66_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](71, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function AddTemplateComponent_Template_mat_select_selectionChange_72_listener() {
        return ctx.GetLessons(ctx.FormCtrl.UnitRevisionID == null ? null : ctx.FormCtrl.UnitRevisionID.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, AddTemplateComponent_mat_option_76_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, AddTemplateComponent_mat_hint_77_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](86, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, AddTemplateComponent_mat_option_87_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, AddTemplateComponent_mat_hint_88_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](93, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](94, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](95, AddTemplateComponent_mat_hint_95_Template, 3, 2, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](100, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](101, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, AddTemplateComponent_mat_hint_102_Template, 3, 2, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](107, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](108, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](109, AddTemplateComponent_mat_hint_109_Template, 3, 2, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](114, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](115, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](116, AddTemplateComponent_mat_hint_116_Template, 3, 2, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](121, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](122, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](127, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "mat-select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](131, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "\u0639\u0627\u0645");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "mat-option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, "\u062E\u0627\u0635");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](140, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](141, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](142, "mat-datepicker-toggle", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](143, "mat-datepicker", null, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](149, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](150, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](151, "mat-datepicker-toggle", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](152, "mat-datepicker", null, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](157);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](158, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](159, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](164, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](165, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](169);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](170, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](171, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](172, "mat-datepicker-toggle", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](173, "mat-datepicker", null, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](179, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](180, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](184, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "mat-radio-group", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](189, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](192);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](193, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](197, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "mat-radio-group", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "mat-radio-button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddTemplateComponent_Template_mat_radio_button_change_200_listener() {
        return ctx.repeatableExamValidators();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](202, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "mat-radio-button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddTemplateComponent_Template_mat_radio_button_change_204_listener() {
        return ctx.repeatableExamValidators();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](205);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](206, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](210, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "mat-radio-group", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](212, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](214);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](215, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](218);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](219, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](223, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](224, "mat-radio-group", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](227);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](228, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](232, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](233, AddTemplateComponent_ng_container_233_Template, 15, 8, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "mat-card-actions", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](235, AddTemplateComponent_button_235_Template, 4, 3, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](236, AddTemplateComponent_button_236_Template, 3, 3, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](237, AddTemplateComponent_div_237_Template, 75, 45, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](238, AddTemplateComponent_div_238_Template, 42, 33, "div", 46);
    }

    if (rf & 2) {
      var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](144);

      var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](153);

      var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](174);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](157, _c1, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 79, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 81, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.Presets);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 83, "Material.Teacher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 85, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.teacherUserIdCtrl == null ? null : ctx.FormCtrl.teacherUserIdCtrl.invalid) && ((ctx.FormCtrl.teacherUserIdCtrl == null ? null : ctx.FormCtrl.teacherUserIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 87, "Navbar.EducationalStage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 89, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.stages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.stageId == null ? null : ctx.FormCtrl.stageId.invalid) && ((ctx.FormCtrl.stageId == null ? null : ctx.FormCtrl.stageId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 91, "labels.EducationalYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](53, 93, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.years);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.yearId == null ? null : ctx.FormCtrl.yearId.invalid) && ((ctx.FormCtrl.yearId == null ? null : ctx.FormCtrl.yearId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 95, "Material.Subjects"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](64, 97, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.subjectId == null ? null : ctx.FormCtrl.subjectId.invalid) && ((ctx.FormCtrl.subjectId == null ? null : ctx.FormCtrl.subjectId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](71, 99, "labels.Unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](75, 101, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.units);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.UnitRevisionID == null ? null : ctx.FormCtrl.UnitRevisionID.invalid) && ((ctx.FormCtrl.UnitRevisionID == null ? null : ctx.FormCtrl.UnitRevisionID.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](82, 103, "labels.Lesson"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](86, 105, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.lessons);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.LessonID == null ? null : ctx.FormCtrl.LessonID.invalid) && ((ctx.FormCtrl.LessonID == null ? null : ctx.FormCtrl.LessonID.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](93, 107, "labels.TemplateName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.Name == null ? null : ctx.FormCtrl.Name.invalid) && ((ctx.FormCtrl.Name == null ? null : ctx.FormCtrl.Name.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](100, 109, "labels.ExamHours"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.exam_hour == null ? null : ctx.FormCtrl.exam_hour.invalid) && ((ctx.FormCtrl.exam_hour == null ? null : ctx.FormCtrl.exam_hour.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](107, 111, "labels.ExamMinute"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.exam_minute == null ? null : ctx.FormCtrl.exam_minute.invalid) && ((ctx.FormCtrl.exam_minute == null ? null : ctx.FormCtrl.exam_minute.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](114, 113, "labels.ExamPrice"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.price == null ? null : ctx.FormCtrl.price.invalid) && ((ctx.FormCtrl.price == null ? null : ctx.FormCtrl.price.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](121, 115, "labels.Discount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](127, 117, "labels.DiscountType"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](131, 119, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](140, 121, "labels.FromDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](149, 123, "labels.ToDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](158, 125, "labels.FromTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](164, 127, "labels.ToTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](170, 129, "labels.ExamResultDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](179, 131, "labels.examResultTime"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](184, 133, "labels.SellExamOnly"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](189, 135, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](193, 137, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](197, 139, "labels.RepeatedExam"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](202, 141, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](206, 143, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](210, 145, "Navbar.SendWhatsappMsg"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](215, 147, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](219, 149, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](223, 151, "labels.CustomDiscount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](228, 153, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](232, 155, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.repeatableExam == null ? null : ctx.FormCtrl.repeatableExam.value) == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value != null);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepicker, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, ngx_pagination__WEBPACK_IMPORTED_MODULE_25__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_25__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 33442:
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/templates/templates-custome-points/templates-custome-points.component.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesCustomePointsComponent": function() { return /* binding */ TemplatesCustomePointsComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_admin_services_Admin_points_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/points.service */ 12397);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function TemplatesCustomePointsComponent_ng_container_12_mat_hint_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TemplatesCustomePointsComponent_ng_container_12_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TemplatesCustomePointsComponent_ng_container_12_mat_hint_7_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.required) || (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.minusNum));
  }
}

function TemplatesCustomePointsComponent_ng_container_12_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TemplatesCustomePointsComponent_ng_container_12_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TemplatesCustomePointsComponent_ng_container_12_mat_hint_14_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.required) || (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.minusNum));
  }
}

function TemplatesCustomePointsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TemplatesCustomePointsComponent_ng_container_12_mat_hint_7_Template, 2, 1, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, TemplatesCustomePointsComponent_ng_container_12_mat_hint_14_Template, 2, 1, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "labels.From"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrls.from.invalid && (ctx_r0.FormCtrls.from.touched || ctx_r0.Submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 6, "labels.To"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrls.to.invalid && (ctx_r0.FormCtrls.to.touched || ctx_r0.Submitted));
  }
}

function TemplatesCustomePointsComponent_mat_hint_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TemplatesCustomePointsComponent_mat_hint_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TemplatesCustomePointsComponent_mat_hint_19_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.value.errors == null ? null : ctx_r1.FormCtrls.value.errors.required) || (ctx_r1.FormCtrls.value.errors == null ? null : ctx_r1.FormCtrls.value.errors.minusNum));
  }
}

function TemplatesCustomePointsComponent_tr_44_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.ByQuestion"), " ");
  }
}

function TemplatesCustomePointsComponent_tr_44_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.ByExam"), " ");
  }
}

function TemplatesCustomePointsComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TemplatesCustomePointsComponent_tr_44_td_1_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TemplatesCustomePointsComponent_tr_44_td_2_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TemplatesCustomePointsComponent_tr_44_Template_button_click_10_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      var point_r9 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r13.openDeleateExamPointDialog(point_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var point_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", point_r9.ByQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !point_r9.ByQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](point_r9.FromValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](point_r9.ToValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](point_r9.Value);
  }
}

function TemplatesCustomePointsComponent_pagination_controls_46_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "pagination-controls", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function TemplatesCustomePointsComponent_pagination_controls_46_Template_pagination_controls_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r15.p = $event;
      return ctx_r15.getExamCustomPoints($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxSize", ctx_r3.maxSize);
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2
  };
};

var TemplatesCustomePointsComponent = /*#__PURE__*/function () {
  function TemplatesCustomePointsComponent(fb, toastr, authserv, route, PointsService, dialog, spinner) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemplatesCustomePointsComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.authserv = authserv;
    this.route = route;
    this.PointsService = PointsService;
    this.dialog = dialog;
    this.spinner = spinner;
    this.Submitted = false;
    this.p = 1;
    this.maxSize = 9;
    route.paramMap.subscribe(function (params) {
      _this.templateId = Number(params.get("templateId"));
    });
    this.route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TemplatesCustomePointsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getTemplateCustomPoints(1);
      this.myForm = this.fb.group({
        ByQuestion: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        from: [""],
        to: [""],
        value: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]]
      });
      this.ByQuestionValidators(false);
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "addTemplateCustomPoint",
    value: function addTemplateCustomPoint() {
      var _this2 = this;

      var _a, _b, _c, _d;

      this.Submitted = true;
      var data = {
        itemId: this.templateId,
        ByQuestion: (_a = this.FormCtrls) === null || _a === void 0 ? void 0 : _a.ByQuestion.value,
        from: (_b = this.FormCtrls) === null || _b === void 0 ? void 0 : _b.from.value,
        to: (_c = this.FormCtrls) === null || _c === void 0 ? void 0 : _c.to.value,
        value: (_d = this.FormCtrls) === null || _d === void 0 ? void 0 : _d.value.value
      };

      if (this.myForm.valid) {
        this.spinner.show();
        this.PointsService.addTemplateCustomPoint(data).subscribe(function (res) {
          var _a;

          if (res.returnValue == 1) {
            _this2.getTemplateCustomPoints(1);

            _this2.toastr.success("تم إاضافة النقاط");

            _this2.Submitted = false;

            _this2.myForm.reset();

            (_a = _this2.FormCtrls) === null || _a === void 0 ? void 0 : _a.ByQuestion.setValue(true);
          }

          _this2.spinner.hide();
        });
      }
    }
  }, {
    key: "getTemplateCustomPoints",
    value: function getTemplateCustomPoints(p) {
      var _this3 = this;

      this.spinner.show();
      this.PointsService.getTemplateCustomPoints(p, this.templateId).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this3.ItemsCount = res.itemsCount;
          _this3.Points = res.points;
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "deleteExamCustomPoint",
    value: function deleteExamCustomPoint(point) {
      var _this4 = this;

      this.spinner.show();
      this.PointsService.deleteExamCustomPoint(point.Id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this4.Points.findIndex(function (e) {
            return e == point;
          });

          _this4.Points.splice(i, 1);

          _this4.toastr.success("تم الحذف");
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "openDeleateExamPointDialog",
    value: function openDeleateExamPointDialog(point) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: "".concat(point.Value, ": points")
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteExamCustomPoint(point);
      });
    }
  }, {
    key: "track",
    value: function track(index, point) {
      return point.Id;
    }
  }, {
    key: "ByQuestionValidators",
    value: function ByQuestionValidators(ByQuestion) {
      if (ByQuestion == true) {
        this.FormCtrls.from.reset();
        this.FormCtrls.from.clearValidators();
        this.FormCtrls.to.reset();
        this.FormCtrls.to.clearValidators();
      } else {
        this.FormCtrls.from.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]);
        this.FormCtrls.to.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]);
      }

      this.FormCtrls.from.updateValueAndValidity();
      this.FormCtrls.to.updateValueAndValidity();
    }
  }]);

  return TemplatesCustomePointsComponent;
}();

TemplatesCustomePointsComponent.ɵfac = function TemplatesCustomePointsComponent_Factory(t) {
  return new (t || TemplatesCustomePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_admin_services_Admin_points_service__WEBPACK_IMPORTED_MODULE_5__.PointsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

TemplatesCustomePointsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TemplatesCustomePointsComponent,
  selectors: [["app-templates-custome-points"]],
  decls: 47,
  vars: 39,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/templates/index", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [4, "ngIf"], [1, "col-lg-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "number", "formControlName", "value"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "from"], ["matInput", "", "type", "number", "formControlName", "to"], [1, "text-danger"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"]],
  template: function TemplatesCustomePointsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, TemplatesCustomePointsComponent_ng_container_12_Template, 15, 8, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, TemplatesCustomePointsComponent_mat_hint_19_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TemplatesCustomePointsComponent_Template_button_click_21_listener() {
        return ctx.addTemplateCustomPoint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, TemplatesCustomePointsComponent_tr_44_Template, 13, 5, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, TemplatesCustomePointsComponent_pagination_controls_46_Template, 1, 1, "pagination-controls", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 15, "labels.TemplatePoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 17, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ByQuestion.value === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 19, "labels.pointsNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.value.invalid && (ctx.FormCtrls.value.touched || ctx.Submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 21, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 23, "labels.ByQuestion"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 25, "labels.From"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 27, "labels.To"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 29, "labels.pointsNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](45, 31, ctx.Points, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](36, _c1, ctx.p, ctx.ItemsCount)))("ngForTrackBy", ctx.track);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.Points == null ? null : ctx.Points.length) > 5);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZXMtY3VzdG9tZS1wb2ludHMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 71383:
/*!************************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/templates/templates-index/templates-index.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesIndexComponent": function() { return /* binding */ TemplatesIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/admin/services/Admin/educational.service */ 56471);
/* harmony import */ var app_student_services_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/student/services/student.service */ 45130);
/* harmony import */ var app_teacher_services_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/teacher/services/templates.service */ 64064);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 89461);































function TemplatesIndexComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teach_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", teach_r29.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", teach_r29.teacher_ar_name, " ");
  }
}

function TemplatesIndexComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var stage_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", stage_r30.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", stage_r30.Text, " ");
  }
}

function TemplatesIndexComponent_mat_hint_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function TemplatesIndexComponent_mat_hint_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_mat_hint_39_span_1_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.myForm.stageIdCtrl == null ? null : ctx_r2.myForm.stageIdCtrl.errors == null ? null : ctx_r2.myForm.stageIdCtrl.errors.required);
  }
}

function TemplatesIndexComponent_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var year_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", year_r32.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", year_r32.Text_Ar, " ");
  }
}

function TemplatesIndexComponent_mat_hint_50_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function TemplatesIndexComponent_mat_hint_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_mat_hint_50_span_1_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.educationYearIdCtrl == null ? null : ctx_r4.educationYearIdCtrl.errors == null ? null : ctx_r4.educationYearIdCtrl.errors.required);
  }
}

function TemplatesIndexComponent_mat_option_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var sub_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", sub_r34.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", sub_r34.Text, " ");
  }
}

function TemplatesIndexComponent_mat_hint_61_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function TemplatesIndexComponent_mat_hint_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_mat_hint_61_span_1_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.subjectIdCtrl == null ? null : ctx_r6.subjectIdCtrl.errors == null ? null : ctx_r6.subjectIdCtrl.errors.required);
  }
}

function TemplatesIndexComponent_mat_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var unit_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", unit_r36.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", unit_r36.Text, " ");
  }
}

function TemplatesIndexComponent_mat_hint_72_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function TemplatesIndexComponent_mat_hint_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_mat_hint_72_span_1_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.unitIdCtrl == null ? null : ctx_r8.unitIdCtrl.errors == null ? null : ctx_r8.unitIdCtrl.errors.required);
  }
}

function TemplatesIndexComponent_mat_option_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lession_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", lession_r38.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", lession_r38.Text, " ");
  }
}

function TemplatesIndexComponent_mat_hint_83_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function TemplatesIndexComponent_mat_hint_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_mat_hint_83_span_1_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.lessionIdCtrl == null ? null : ctx_r10.lessionIdCtrl.errors == null ? null : ctx_r10.lessionIdCtrl.errors.required);
  }
}

function TemplatesIndexComponent_mat_option_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var topic_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", topic_r40.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", topic_r40.Text, " ");
  }
}

function TemplatesIndexComponent_mat_hint_94_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function TemplatesIndexComponent_mat_hint_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_mat_hint_94_span_1_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.lessionIdCtrl == null ? null : ctx_r12.lessionIdCtrl.errors == null ? null : ctx_r12.lessionIdCtrl.errors.required);
  }
}

function TemplatesIndexComponent_th_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function TemplatesIndexComponent_td_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r42.Name);
  }
}

function TemplatesIndexComponent_th_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Materials"), " ");
  }
}

function TemplatesIndexComponent_td_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r43.Subject);
  }
}

function TemplatesIndexComponent_th_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.EducationalYear"), " ");
  }
}

function TemplatesIndexComponent_td_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r44.Year);
  }
}

function TemplatesIndexComponent_th_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Teacher"), " ");
  }
}

function TemplatesIndexComponent_td_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r45.Teacher);
  }
}

function TemplatesIndexComponent_th_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.ThePublish"), " ");
  }
}

function TemplatesIndexComponent_td_123_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Published"), " ");
  }
}

function TemplatesIndexComponent_td_123_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.UnPublished"), " ");
  }
}

function TemplatesIndexComponent_td_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_td_123_span_1_Template, 4, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, TemplatesIndexComponent_td_123_span_2_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ele_r46 == null ? null : ele_r46.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ele_r46 == null ? null : ele_r46.isPublish));
  }
}

function TemplatesIndexComponent_th_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 40);
  }
}

function TemplatesIndexComponent_td_126_ng_container_5_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.Publish"), " ");
  }
}

function TemplatesIndexComponent_td_126_ng_container_5_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.Unpublish"), " ");
  }
}

function TemplatesIndexComponent_td_126_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TemplatesIndexComponent_td_126_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r61);
      var template_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r59.PublishDepublishTemplate(template_r49.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_td_126_ng_container_5_a_1_span_1_Template, 4, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, TemplatesIndexComponent_td_126_ng_container_5_a_1_span_2_Template, 4, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !template_r49.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", template_r49.isPublish);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    templateId: a0,
    functionId: a1
  };
};

function TemplatesIndexComponent_td_126_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c0, template_r49.Id, ctx_r53.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "General.Edit"), " ");
  }
}

function TemplatesIndexComponent_td_126_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TemplatesIndexComponent_td_126_ng_container_5_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      var template_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r64.GenerateExamFromTemplate(template_r49.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "General.ExamPreview"), " ");
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

function TemplatesIndexComponent_td_126_ng_container_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0627\u0644\u0646\u0642\u0627\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "../template-points/", template_r49.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c1, ctx_r55.functionId));
  }
}

function TemplatesIndexComponent_td_126_ng_container_5_a_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TemplatesIndexComponent_td_126_ng_container_5_a_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r70);
      var template_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r68.openDeleateDialog(template_r49);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

function TemplatesIndexComponent_td_126_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TemplatesIndexComponent_td_126_ng_container_5_a_1_Template, 3, 2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, TemplatesIndexComponent_td_126_ng_container_5_a_2_Template, 4, 7, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, TemplatesIndexComponent_td_126_ng_container_5_a_3_Template, 4, 3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, TemplatesIndexComponent_td_126_ng_container_5_a_4_Template, 3, 4, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, TemplatesIndexComponent_td_126_ng_container_5_a_5_Template, 4, 3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r51.functionName === "Publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r51.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r51.functionName === "previewTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r51.functionName === "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r51.functionName === "Delete");
  }
}

function TemplatesIndexComponent_td_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, TemplatesIndexComponent_td_126_ng_container_5_Template, 6, 5, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r25.rowFunctions);
  }
}

function TemplatesIndexComponent_tr_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 59);
  }
}

function TemplatesIndexComponent_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 60);
  }

  if (rf & 2) {
    var row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-light-info", !(row_r71 == null ? null : row_r71.isPublish));
  }
}

function TemplatesIndexComponent_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](106);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r13.value, "\" ");
  }
}

var _c2 = function _c2() {
  return [10];
};

var TemplatesIndexComponent = /*#__PURE__*/function () {
  function TemplatesIndexComponent(toastr, dialog, route, router, GeneralService, authserv, fb, EducationalService, StudentService, TemplatesService, spinner) {
    var _this = this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TemplatesIndexComponent);

    this.toastr = toastr;
    this.dialog = dialog;
    this.route = route;
    this.router = router;
    this.GeneralService = GeneralService;
    this.authserv = authserv;
    this.fb = fb;
    this.EducationalService = EducationalService;
    this.StudentService = StudentService;
    this.TemplatesService = TemplatesService;
    this.spinner = spinner;
    this.Templates = [];
    this.Teachers = [];
    this.stages = [];
    this.years = [];
    this.educationYears = [];
    this.subjects = [];
    this.units = [];
    this.lessons = [];
    this.topics = [];
    this.submitted = false;
    this.displayedColumns = ["Name", "Teacher", "Subject", "Year", "publish", "actions"];
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); //  console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TemplatesIndexComponent, [{
    key: "stageIdCtrl",
    get: function get() {
      return this.myForm.get("stageId");
    }
  }, {
    key: "teacherUserIdCtrl",
    get: function get() {
      return this.myForm.get("teacherUserId");
    }
  }, {
    key: "educationYearIdCtrl",
    get: function get() {
      return this.myForm.get("yearId");
    }
  }, {
    key: "subjectIdCtrl",
    get: function get() {
      return this.myForm.get("subjectId");
    }
  }, {
    key: "unitIdCtrl",
    get: function get() {
      return this.myForm.get("unitId");
    }
  }, {
    key: "lessonIdCtrl",
    get: function get() {
      return this.myForm.get("lessonId");
    }
  }, {
    key: "topicIdCtrl",
    get: function get() {
      return this.myForm.get("topicId");
    }
  }, {
    key: "page",
    get: function get() {
      return this.myForm.get("page");
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.myForm = this.fb.group({
        teacherUserId: [""],
        yearId: [""],
        stageId: [""],
        subjectId: [""],
        unitId: [""],
        lessonId: [""],
        topicId: [""],
        page: [""]
      });
      this.getTeachersByEducompId();
      this.getTemplates(1);
      this.getTeachersByEducompId();
      this.stageIdCtrl.disable();
      this.educationYearIdCtrl.disable();
      this.subjectIdCtrl.disable();
      this.unitIdCtrl.disable();
      this.lessonIdCtrl.disable();
      this.topicIdCtrl.disable();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getTemplates(1);
      });
      this.authserv.branchId.subscribe(function (e) {//this.branchId = e.branchId;
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "getTemplates",
    value: function getTemplates(p) {
      var _this3 = this;

      var _a;

      this.spinner.show();
      (_a = this.page) === null || _a === void 0 ? void 0 : _a.setValue(p);
      this.TemplatesService.getTemplates(this.EduCompId, p, this.myForm.value).subscribe(function (res) {
        //  console.log('getTemplates',res);
        _this3.Templates = res.result;
        _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(res.result);
        _this3.itemsCount = res.TotalItemCount;

        _this3.spinner.hide();

        _this3.spinner.hide();
      });
    }
  }, {
    key: "PublishDepublishTemplate",
    value: function PublishDepublishTemplate(templateId) {
      var _this4 = this;

      this.spinner.show();
      this.TemplatesService.PublishDepublishTemplate(templateId).subscribe(function (res) {
        if (res.returnString == "Done") {
          var _iterator = (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.Templates),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var obj = _step.value;

              if (obj.Id === templateId) {
                obj.isPublish = !obj.isPublish;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          _this4.toastr.error(res.returnString);
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(template) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: template.Name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteTemplate(template);
      });
    }
  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(template) {
      var _this6 = this;

      this.TemplatesService.deleteTemplate(template.Id).subscribe(function (res) {
        var deletedIndex = _this6.Templates.findIndex(function (e) {
          return e.Id == template.Id;
        });

        _this6.Templates.splice(deletedIndex, 1);

        _this6.toastr.success(" Deleted");

        _this6.getTemplates(1);
      });
    }
  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId() {
      var _this7 = this;

      this.GeneralService.getTeachersByEducompId(this.EduCompId).subscribe(function (res) {
        _this7.Teachers = res.lstTeachers; //console.log("lst",this.Teachers);
      });
      this.getStageByTeacherId();
    }
  }, {
    key: "getStageByTeacherId",
    value: function getStageByTeacherId() {
      var _this8 = this;

      this.stageIdCtrl.setValue("");
      this.educationYearIdCtrl.setValue("");
      this.subjectIdCtrl.setValue("");
      this.unitIdCtrl.setValue("");
      this.lessonIdCtrl.setValue("");
      this.topicIdCtrl.setValue("");

      if (this.teacherUserIdCtrl.value != "") {
        console.log("teacher", this.teacherUserIdCtrl.value);
        this.EducationalService.getStageByTeacherId(this.teacherUserIdCtrl.value).subscribe(function (res) {
          console.log(res);
          _this8.stages = res;

          _this8.stageIdCtrl.enable(); //console.log(res);

        });
      } else {
        this.stageIdCtrl.setValue("");
        this.stageIdCtrl.disable();
        this.educationYearIdCtrl.disable();
        this.subjectIdCtrl.disable();
        this.unitIdCtrl.disable();
        this.lessonIdCtrl.disable();
        this.topicIdCtrl.disable();
      }
    }
  }, {
    key: "returnYears",
    value: function returnYears() {
      var _this9 = this;

      this.educationYearIdCtrl.setValue("");
      this.subjectIdCtrl.setValue("");
      this.unitIdCtrl.setValue("");
      this.lessonIdCtrl.setValue("");
      this.topicIdCtrl.setValue("");

      if (this.stageIdCtrl.value != "") {
        this.EducationalService.returnYears(this.stageIdCtrl.value).subscribe(function (res) {
          console.log(res);
          _this9.years = res;

          _this9.educationYearIdCtrl.enable();
        });
      } else {
        this.educationYearIdCtrl.setValue("");
        this.educationYearIdCtrl.disable();
        this.subjectIdCtrl.disable();
        this.unitIdCtrl.disable();
        this.lessonIdCtrl.disable();
        this.topicIdCtrl.disable();
      }
    }
  }, {
    key: "returnTeacherSubjects",
    value: function returnTeacherSubjects() {
      var _this10 = this;

      this.subjectIdCtrl.setValue("");
      this.unitIdCtrl.setValue("");
      this.lessonIdCtrl.setValue("");
      this.topicIdCtrl.setValue("");

      if (this.educationYearIdCtrl.value != "") {
        var data = {
          yearId: this.educationYearIdCtrl.value,
          teacherUserId: this.myForm.controls["teacherUserId"].value
        };
        console.log(data);
        this.EducationalService.returnTeacherSubjects(data).subscribe(function (res) {
          console.log("subjects", res);
          _this10.subjects = res;

          _this10.subjectIdCtrl.enable();
        });
      } else {
        this.subjectIdCtrl.setValue("");
        this.subjectIdCtrl.disable();
        this.unitIdCtrl.disable();
        this.lessonIdCtrl.disable();
        this.topicIdCtrl.disable();
      }
    }
  }, {
    key: "GetUnits",
    value: function GetUnits() {
      var _this11 = this;

      this.unitIdCtrl.setValue("");
      this.lessonIdCtrl.setValue("");
      this.topicIdCtrl.setValue("");

      if (this.subjectIdCtrl.value != "") {
        this.EducationalService.GetUnits(this.subjectIdCtrl.value).subscribe(function (res) {
          console.log("unit", res);
          _this11.units = res;

          _this11.unitIdCtrl.enable();
        });
      } else {
        this.unitIdCtrl.setValue("");
        this.unitIdCtrl.disable();
        this.lessonIdCtrl.disable();
        this.topicIdCtrl.disable();
      }
    }
  }, {
    key: "GetLessons",
    value: function GetLessons() {
      var _this12 = this;

      this.lessonIdCtrl.setValue("");
      this.topicIdCtrl.setValue("");

      if (this.unitIdCtrl.value != "") {
        this.EducationalService.GetLessons(this.unitIdCtrl.value).subscribe(function (res) {
          console.log("lesson", res);
          _this12.lessons = res;

          _this12.lessonIdCtrl.enable();
        });
      } else {
        this.lessonIdCtrl.setValue("");
        this.lessonIdCtrl.disable();
        this.topicIdCtrl.disable();
      }
    }
  }, {
    key: "GetTopics",
    value: function GetTopics() {
      var _this13 = this;

      this.topicIdCtrl.setValue("");

      if (this.lessonIdCtrl.value != "") {
        this.EducationalService.GetTopics(this.lessonIdCtrl.value).subscribe(function (res) {
          console.log(res);
          _this13.topics = res;

          _this13.topicIdCtrl.enable();
        });
      } else {
        this.topicIdCtrl.setValue("");
        this.topicIdCtrl.disable();
      }
    }
  }, {
    key: "GenerateExamFromTemplate",
    value: function GenerateExamFromTemplate(templateId) {
      var _this14 = this;

      this.spinner.show();
      this.StudentService.GenerateExamFromTemplate(templateId).subscribe(function (res) {
        if (res.returnValue =  true && res.examId) {
          var url = "/dashboard/exams-setup/exam-preview/".concat(res.examId, "?templateId=").concat(templateId);
          window.open(url, "_blank"); // this.router
          //   .navigate([`/dashboard/exams-setup/exam-preview/${res.examId}`], {
          //     queryParams: { templateId: templateId },
          //   })
          //   .then((result) => {
          //     window.open(url, "_blank");
          //   });
        } else {
          _this14.toastr.error(res.returnString);
        }

        _this14.spinner.hide();
      });
    }
  }]);

  return TemplatesIndexComponent;
}();

TemplatesIndexComponent.ɵfac = function TemplatesIndexComponent_Factory(t) {
  return new (t || TemplatesIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_6__.EducationalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_student_services_student_service__WEBPACK_IMPORTED_MODULE_7__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_teacher_services_templates_service__WEBPACK_IMPORTED_MODULE_8__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService));
};

TemplatesIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: TemplatesIndexComponent,
  selectors: [["app-templates-index"]],
  viewQuery: function TemplatesIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 131,
  vars: 78,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "../add-template", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search", "mr-1"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["formControlName", "teacherUserId", 3, "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "stageId", 3, "selectionChange"], ["class", "danger", 4, "ngIf"], ["formControlName", "yearId", 3, "selectionChange"], ["formControlName", "subjectId", 3, "selectionChange"], ["formControlName", "unitId", 3, "selectionChange"], ["formControlName", "lessonId", 3, "selectionChange"], ["formControlName", "topicId"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Subject"], ["matColumnDef", "Year"], ["matColumnDef", "Teacher"], ["matColumnDef", "publish"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "bg-light-info", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [3, "value"], [1, "danger"], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "success", "ml-1"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../add-template", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-upload", "font-medium-3", "mr-2"], [1, "ft-download", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "routerLink", "../add-template", 3, "queryParams"], [1, "fa", "fa-edit", "mr-2"], [1, "fa", "fa-video-camera", "mr-2"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams"], [1, "fa", "fa-gift", "font-medium-3", "mr-2"], [1, "fa", "fa-times", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function TemplatesIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TemplatesIndexComponent_Template_a_click_10_listener() {
        return ctx.getTemplates(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-card-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function TemplatesIndexComponent_Template_mat_select_selectionChange_24_listener() {
        return ctx.getStageByTeacherId();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, TemplatesIndexComponent_mat_option_28_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function TemplatesIndexComponent_Template_mat_select_selectionChange_34_listener() {
        return ctx.returnYears();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, TemplatesIndexComponent_mat_option_38_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, TemplatesIndexComponent_mat_hint_39_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function TemplatesIndexComponent_Template_mat_select_selectionChange_45_listener() {
        return ctx.returnTeacherSubjects();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, TemplatesIndexComponent_mat_option_49_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, TemplatesIndexComponent_mat_hint_50_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function TemplatesIndexComponent_Template_mat_select_selectionChange_56_listener() {
        return ctx.GetUnits();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](59, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, TemplatesIndexComponent_mat_option_60_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, TemplatesIndexComponent_mat_hint_61_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](66, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function TemplatesIndexComponent_Template_mat_select_selectionChange_67_listener() {
        return ctx.GetLessons();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](70, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, TemplatesIndexComponent_mat_option_71_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, TemplatesIndexComponent_mat_hint_72_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](77, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "mat-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function TemplatesIndexComponent_Template_mat_select_selectionChange_78_listener() {
        return ctx.GetTopics();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](81, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, TemplatesIndexComponent_mat_option_82_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](83, TemplatesIndexComponent_mat_hint_83_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](88, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "mat-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](92, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](93, TemplatesIndexComponent_mat_option_93_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](94, TemplatesIndexComponent_mat_hint_94_Template, 2, 1, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](100, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "mat-form-field", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "input", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function TemplatesIndexComponent_Template_input_keyup_105_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "table", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](109, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](110, TemplatesIndexComponent_th_110_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](111, TemplatesIndexComponent_td_111_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](112, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, TemplatesIndexComponent_th_113_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](114, TemplatesIndexComponent_td_114_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](115, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, TemplatesIndexComponent_th_116_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](117, TemplatesIndexComponent_td_117_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](118, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](119, TemplatesIndexComponent_th_119_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](120, TemplatesIndexComponent_td_120_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](121, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](122, TemplatesIndexComponent_th_122_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](123, TemplatesIndexComponent_td_123_Template, 3, 2, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](124, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](125, TemplatesIndexComponent_th_125_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, TemplatesIndexComponent_td_126_Template, 6, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](127, TemplatesIndexComponent_tr_127_Template, 1, 0, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](128, TemplatesIndexComponent_tr_128_Template, 1, 2, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](129, TemplatesIndexComponent_tr_129_Template, 3, 1, "tr", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "mat-paginator", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function TemplatesIndexComponent_Template_mat_paginator_page_130_listener($event) {
        return ctx.getTemplates($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 39, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](75, _c1, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 41, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 43, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 45, "Material.Teacher"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 47, "Material.Teacher"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 49, "Navbar.EducationalStage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](37, 51, "Navbar.EducationalStage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.stages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.stageIdCtrl == null ? null : ctx.stageIdCtrl.invalid) && ((ctx.stageIdCtrl == null ? null : ctx.stageIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](44, 53, "labels.EducationalYear"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](48, 55, "labels.EducationalYear"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.years);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.educationYearIdCtrl == null ? null : ctx.educationYearIdCtrl.invalid) && ((ctx.educationYearIdCtrl == null ? null : ctx.educationYearIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 57, "Material.Subjects"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](59, 59, "Material.Subjects"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.subjectIdCtrl == null ? null : ctx.subjectIdCtrl.invalid) && ((ctx.subjectIdCtrl == null ? null : ctx.subjectIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](66, 61, "labels.Unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](70, 63, "labels.Unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.units);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.unitIdCtrl == null ? null : ctx.unitIdCtrl.invalid) && ((ctx.unitIdCtrl == null ? null : ctx.unitIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](77, 65, "labels.Lesson"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](81, 67, "labels.Lesson"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.lessons);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.lessonIdCtrl == null ? null : ctx.lessonIdCtrl.invalid) && ((ctx.lessonIdCtrl == null ? null : ctx.lessonIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](88, 69, "labels.Topic"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](92, 71, "labels.Topic"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.topics);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.lessonIdCtrl == null ? null : ctx.lessonIdCtrl.invalid) && ((ctx.lessonIdCtrl == null ? null : ctx.lessonIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](100, 73, "Navbar.Templates"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](77, _c2))("length", ctx.itemsCount)("pageSize", 10);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZXMtaW5kZXguY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 64064:
/*!*******************************************************!*\
  !*** ./src/app/teacher/services/templates.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesService": function() { return /* binding */ TemplatesService; }
/* harmony export */ });
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var TemplatesService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TemplatesService, _AppClientService);

  var _super = (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(TemplatesService);

  function TemplatesService(http) {
    var _this;

    (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemplatesService);

    _this = _super.call(this, http);
    _this.http = http;
    return _this;
  }

  (0,F_Mashura_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TemplatesService, [{
    key: "getTemplates",
    value: function getTemplates(eduCompID, page, body) {
      return this.post("Admin/getTemplates/".concat(eduCompID, "/").concat(page), body);
    }
  }, {
    key: "getTemplateById",
    value: function getTemplateById(templateId) {
      return this.get("template/returnTemplateById/".concat(templateId));
    }
  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(id) {
      return this.get("template/deleteTemplateById/".concat(id));
    }
  }, {
    key: "PublishDepublishTemplate",
    value: function PublishDepublishTemplate(id) {
      return this.post("template/PublishDepublishTemplate/".concat(id), null);
    }
  }, {
    key: "getPresets",
    value: function getPresets(eduCompId) {
      return this.get("template/returnPresetsByEduCompId/".concat(eduCompId));
    }
  }, {
    key: "addUpdateTemplate",
    value: function addUpdateTemplate(data) {
      return this.post("template/addtemplate", data);
    }
  }, {
    key: "addTemplateDetails",
    value: function addTemplateDetails(data) {
      return this.post("AJAX/addTemplateDetail", data);
    }
  }, {
    key: "getQuestionDetails",
    value: function getQuestionDetails(templateId) {
      return this.get("AJAX/returnTemplateDetails/".concat(templateId));
    }
  }, {
    key: "DeleteDetails",
    value: function DeleteDetails(id) {
      return this.get("template/deleteTemplateDetailById/".concat(id));
    }
  }, {
    key: "getTemplatePoints",
    value: function getTemplatePoints(templateId, page) {
      return this.get("template/returnCustomPointTemplateByTemplateId/".concat(templateId, "/").concat(page));
    }
  }, {
    key: "addTemplatePoint",
    value: function addTemplatePoint(body) {
      return this.post("template/CustomTemplatePoint", body);
    }
  }, {
    key: "deleteTemplatePoint",
    value: function deleteTemplatePoint(pointId) {
      return this.delete("template/DeleteCustomTemplatePoint/".concat(pointId));
    }
  }]);

  return TemplatesService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

TemplatesService.ɵfac = function TemplatesService_Factory(t) {
  return new (t || TemplatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

TemplatesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: TemplatesService,
  factory: TemplatesService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_exams-setup_exams_module_ts.js.map