"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["src_app_dashboard_pages_setup_exams-setup_exams_module_ts"],{

/***/ 2249:
/*!********************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exam-correction/correction-dialog/correction-dialog.component.ts ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectionDialogComponent": function() { return /* binding */ CorrectionDialogComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function CorrectionDialogComponent_mat_hint_38_span_1_Template(rf, ctx) {
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

function CorrectionDialogComponent_mat_hint_38_span_2_Template(rf, ctx) {
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

function CorrectionDialogComponent_mat_hint_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CorrectionDialogComponent_mat_hint_38_span_1_Template, 3, 3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CorrectionDialogComponent_mat_hint_38_span_2_Template, 3, 3, "span", 18);
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

function CorrectionDialogComponent_mat_hint_45_span_1_Template(rf, ctx) {
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

function CorrectionDialogComponent_mat_hint_45_span_2_Template(rf, ctx) {
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

function CorrectionDialogComponent_mat_hint_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CorrectionDialogComponent_mat_hint_45_span_1_Template, 3, 3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CorrectionDialogComponent_mat_hint_45_span_2_Template, 3, 3, "span", 18);
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
  examService, spinner, dialog // private downloads: DownloadService
  ) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CorrectionDialogComponent);

    this.data = data;
    this.fb = fb;
    this.route = route;
    this.authserv = authserv;
    this.router = router;
    this.msg = msg;
    this.GeneralService = GeneralService;
    this.examService = examService;
    this.spinner = spinner;
    this.dialog = dialog;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CorrectionDialogComponent, [{
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
    key: "perfectAnswerCtrl",
    get: function get() {
      return this.myForm.get("perfectAnswer");
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
        questionName: [""],
        studentAnswer: [""],
        questionId: [],
        examStudentId: [],
        teacherComment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        teacherUserId: [],
        questionMark: [],
        //  perfectAnswer: [""],
        mark: [, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }); // this.downloadUrl = this.data.msg.perfectAnswerAttach;

      this.fileName = this.downloadUrl.substring(18);
      console.log("attach file", this.fileName);
      console.log("attach download", this.downloadUrl);
      this.questionNameCtrl.setValue(this.data.msg.questionName);
      this.questionNameCtrl.disable();
      this.questionIdCtrl.setValue(this.data.msg.questionId);
      this.examStudentIdCtrl.setValue(this.data.msg.examStudentId);
      this.teacherUserIdCtrl.setValue(this.data.msg.teacherUserId);
      this.questionMarkCtrl.setValue(this.data.msg.questionMark);
      this.FormCtrl.studentAnswer.setValue(this.data.msg.studentAnswer); // this.FormCtrl.perfectAnswer.setValue(this.data.msg.prefectAnswer);
    } //   DownloadAttach(): void {
    //     // this.downloads
    //     //   .download(this.downloadUrl)
    //     //   .subscribe(blob => {
    //     //     const a = document.createElement('a')
    //     //     const objectUrl = URL.createObjectURL(blob)
    //     //     a.href = objectUrl
    //     //     a.download = 'archive.zip';
    //     //     a.click();
    //     //     URL.revokeObjectURL(objectUrl);
    //     //   })
    //     console.log("id",this.data.msg.perfectAnswerAttach);
    //   }
    // //   DownloadAttach()
    // //   {
    // // console.log("id",this.data.msg.perfectAnswerAttach);
    // //   }

  }, {
    key: "CorrectQuestion",
    value: function CorrectQuestion() {
      var _this = this;

      var valid = this.myForm.valid;

      if (valid) {
        console.log("my form", this.myForm.value);

        if (this.markCtrl.value > this.questionMarkCtrl.value) {
          this.msg.error("يجب ادخال قيمة النتيجة أقل من القيمة النهائية");
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
  return new (t || CorrectionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_4__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
};

CorrectionDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CorrectionDialogComponent,
  selectors: [["app-correction-dialog"]],
  decls: 50,
  vars: 26,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-12", "col-12"], ["appearance", "legacy"], ["matInput", "", "cols", "20", "formControlName", "questionName", "readonly", ""], ["matInput", "", "cols", "20", "formControlName", "studentAnswer", "readonly", ""], [1, "question-img"], ["alt", "Question Image", 1, "img-fluid", 3, "src"], [1, "col-md-6", "col-12"], ["matInput", "", "formControlName", "teacherComment"], ["class", "danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "mark"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "danger"], [4, "ngIf"]],
  template: function CorrectionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, CorrectionDialogComponent_mat_hint_38_Template, 3, 2, "mat-hint", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CorrectionDialogComponent_mat_hint_45_Template, 3, 2, "mat-hint", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-card-actions", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrectionDialogComponent_Template_button_click_47_listener() {
        return ctx.CorrectQuestion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 12, "labels.Correct"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 14, "General.Close"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 16, "labels.\u064EQuestionContent"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 18, "labels.StudentAnswer"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.data.imageAttatch, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 20, "labels.TeacherComment"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.teacherCommentCtrl == null ? null : ctx.teacherCommentCtrl.invalid) && ((ctx.teacherCommentCtrl == null ? null : ctx.teacherCommentCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 22, "labels.Mark"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.markCtrl == null ? null : ctx.markCtrl.invalid) && ((ctx.markCtrl == null ? null : ctx.markCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 24, "General.Add"), " ");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".question-img[_ngcontent-%COMP%] {\r\n    overflow: hidden !important;\r\n    max-width: 100% !important;\r\n    max-height: 156px !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtFQUM5QiIsImZpbGUiOiJjb3JyZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uLWltZyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDE1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 35041:
/*!******************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exam-correction/correction-index/correction-index.component.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectionIndexComponent": function() { return /* binding */ CorrectionIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _correction_dialog_correction_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../correction-dialog/correction-dialog.component */ 2249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
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
























function CorrectionIndexComponent_th_41_Template(rf, ctx) {
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

function CorrectionIndexComponent_td_42_Template(rf, ctx) {
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

function CorrectionIndexComponent_th_44_Template(rf, ctx) {
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

function CorrectionIndexComponent_td_45_Template(rf, ctx) {
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

function CorrectionIndexComponent_th_47_Template(rf, ctx) {
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

function CorrectionIndexComponent_td_48_Template(rf, ctx) {
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

function CorrectionIndexComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CorrectionIndexComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrectionIndexComponent_td_51_Template_button_click_1_listener() {
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

function CorrectionIndexComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 28);
  }
}

function CorrectionIndexComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
  }
}

function CorrectionIndexComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37);

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

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CorrectionIndexComponent);

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

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CorrectionIndexComponent, [{
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
          console.log("quesions not corrected: ", response.examsList);
          _this2.correction = response.examsList.examQuestions;
          console.log("correct list", _this2.correction);
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(response.examsList);
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
  return new (t || CorrectionIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_3__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
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
  decls: 56,
  vars: 25,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right"], [1, "fa", "fa-search"], [1, "container-fluid"], [1, "form-container", 3, "formGroup"], [1, "col-md-12", "col-12"], ["formControlName", "CorrectedQuestions", 1, "row"], [1, "col-md-4", "col-12"], [3, "value", "change"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "examName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "questionName"], ["matColumnDef", "teacherName"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function CorrectionIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-radio-group", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-radio-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CorrectionIndexComponent_Template_mat_radio_button_change_19_listener() {
        return ctx.getAllQuestions(1, 0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-radio-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CorrectionIndexComponent_Template_mat_radio_button_change_23_listener() {
        return ctx.getAllQuestions(1, 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function CorrectionIndexComponent_Template_input_keyup_36_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](40, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, CorrectionIndexComponent_th_41_Template, 3, 3, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, CorrectionIndexComponent_td_42_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](43, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, CorrectionIndexComponent_th_44_Template, 3, 3, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CorrectionIndexComponent_td_45_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](46, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, CorrectionIndexComponent_th_47_Template, 3, 3, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, CorrectionIndexComponent_td_48_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](49, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, CorrectionIndexComponent_th_50_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, CorrectionIndexComponent_td_51_Template, 4, 0, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, CorrectionIndexComponent_tr_52_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, CorrectionIndexComponent_tr_53_Template, 1, 0, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, CorrectionIndexComponent_tr_54_Template, 3, 1, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-paginator", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function CorrectionIndexComponent_Template_mat_paginator_page_55_listener($event) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 14, "labels.ExamsCorrection"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 18, "labels.CorrectedQuestions"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 20, "labels.UnCorrectedQuestions"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 22, "labels.ExamsCorrection"), " ");
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
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZWN0aW9uLWluZGV4LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 21194:
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsRoutingModule": function() { return /* binding */ ExamsRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _templates_templates_custome_points_templates_custome_points_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/templates-custome-points/templates-custome-points.component */ 2208);
/* harmony import */ var _templates_add_template_add_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/add-template/add-template.component */ 57764);
/* harmony import */ var _questions_banck_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions-banck/add-question/add-question.component */ 74047);
/* harmony import */ var _questions_banck_questions_index_questions_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions-banck/questions-index/questions-index.component */ 18573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exams/add-exam/add-exam.component */ 92618);
/* harmony import */ var _exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exams/exams-index/exams-index.component */ 60198);
/* harmony import */ var _templates_templates_index_templates_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/templates-index/templates-index.component */ 90815);
/* harmony import */ var _exam_correction_correction_index_correction_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exam-correction/correction-index/correction-index.component */ 35041);
/* harmony import */ var _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exams/exam-preview/exam-preview.component */ 49544);
/* harmony import */ var _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exams/exams-custome-points/exams-custome-points.component */ 71736);
/* harmony import */ var _upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-exam-student-grades/upload-exam-student-grades.component */ 67015);
/* harmony import */ var _exams_whatsapp_exams_whatsapp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exams-whatsapp/exams-whatsapp.component */ 98965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);

















var routes = [{
  path: "",
  redirectTo: "exam",
  pathMatch: "full"
}, {
  path: "exam-preview/:examId",
  component: _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_10__.ExamPreviewComponent
}, {
  path: "exam-whatsapp-msgs/:examId",
  component: _exams_whatsapp_exams_whatsapp_component__WEBPACK_IMPORTED_MODULE_13__.ExamsWhatsappComponent
}, {
  path: "exam",
  children: [{
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  }, {
    path: "index",
    component: _exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_7__.ExamsIndexComponent
  }, {
    path: "add-exam",
    component: _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_6__.AddExamComponent
  }, {
    path: "exam-points/:examId",
    component: _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_11__.ExamsCustomePointsComponent
  }, {
    path: "upload-exam-student-grades/:examId",
    component: _upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_12__.UploadExamStudentGradesComponent
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
  }, {
    path: "upload-exam-student-grades/:templateId",
    component: _upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_12__.UploadExamStudentGradesComponent
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
var ExamsRoutingModule = /*#__PURE__*/(0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExamsRoutingModule() {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExamsRoutingModule);
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

/***/ 98965:
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams-whatsapp/exams-whatsapp.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsWhatsappComponent": function() { return /* binding */ ExamsWhatsappComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_dashboard_services_setup_whatsapp_setup_whatsApp_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/whatsapp-setup/whatsApp-setup.service */ 19609);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






























var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

function ExamsWhatsappComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c0, ctx_r0.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "General.Back"), " ");
  }
}

function ExamsWhatsappComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c0, ctx_r1.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "General.Back"), " ");
  }
}

function ExamsWhatsappComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", msg_r20.msgId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", msg_r20.msgTitle, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function ExamsWhatsappComponent_mat_hint_22_span_1_Template(rf, ctx) {
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

function ExamsWhatsappComponent_mat_hint_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamsWhatsappComponent_mat_hint_22_span_1_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.whats_app_msg_id.errors == null ? null : ctx_r3.FormCtrls.whats_app_msg_id.errors.required);
  }
}

function ExamsWhatsappComponent_mat_hint_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function ExamsWhatsappComponent_mat_hint_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamsWhatsappComponent_mat_hint_29_span_1_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r4.FormCtrls.FromGrade.errors == null ? null : ctx_r4.FormCtrls.FromGrade.errors.required) || (ctx_r4.FormCtrls.FromGrade.errors == null ? null : ctx_r4.FormCtrls.FromGrade.errors.minusNum));
  }
}

function ExamsWhatsappComponent_mat_hint_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function ExamsWhatsappComponent_mat_hint_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamsWhatsappComponent_mat_hint_36_span_1_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r5.FormCtrls.ToGrade.errors == null ? null : ctx_r5.FormCtrls.ToGrade.errors.required) || (ctx_r5.FormCtrls.ToGrade.errors == null ? null : ctx_r5.FormCtrls.ToGrade.errors.minusNum));
  }
}

function ExamsWhatsappComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "whatsApp.Title"), " ");
  }
}

function ExamsWhatsappComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ele_r24.msgTitle, " ");
  }
}

function ExamsWhatsappComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "whatsApp.Body"), " ");
  }
}

function ExamsWhatsappComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("content", ele_r25.msgBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ele_r25.msgBody, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"])("title", ele_r25.msgBody);
  }
}

function ExamsWhatsappComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "whatsApp.FromGrade"), " ");
  }
}

function ExamsWhatsappComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ele_r26.fromGrade, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function ExamsWhatsappComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "whatsApp.ToGrade"), " ");
  }
}

function ExamsWhatsappComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ele_r27.toGrade, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function ExamsWhatsappComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 38);
  }
}

function ExamsWhatsappComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamsWhatsappComponent_td_69_Template_button_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      var ele_r28 = restoredCtx.$implicit;
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r29.openDeleateDialog(ele_r28);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Delete"));
  }
}

function ExamsWhatsappComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 43);
  }
}

function ExamsWhatsappComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 44);
  }
}

function ExamsWhatsappComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](52);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r6.value, "\" ");
  }
}

var _c1 = function _c1() {
  return [5, 10];
};

var ExamsWhatsappComponent = /*#__PURE__*/function () {
  function ExamsWhatsappComponent(fb, msg, authService, route, dialog, whatsAppService, spinner) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamsWhatsappComponent);

    this.fb = fb;
    this.msg = msg;
    this.authService = authService;
    this.route = route;
    this.dialog = dialog;
    this.whatsAppService = whatsAppService;
    this.spinner = spinner;
    this.Submitted = false;
    this.availableWhatsAppMsg = [];
    this.displayedColumns = ["msgTitle", "FromGrade", "ToGrade", "msgBody", "actions"];
    route.paramMap.subscribe(function (params) {
      _this.examId = Number(params.get("examId"));
    });
    this.route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));
      _this.IsTemplate = params.get("IsTemplate");
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamsWhatsappComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = Number(this.authService.getEduCompId());
      this.myForm = this.fb.group({
        Id: [null],
        whats_app_msg_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        FromGrade: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]],
        ToGrade: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]]
      });
      this.getAvailableWhatsAppMsgToExam();
      this.getExamWhatsAppMsgs();
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authService.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;
      });
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "getAvailableWhatsAppMsgToExam",
    value: function getAvailableWhatsAppMsgToExam() {
      var _this3 = this;

      this.spinner.show();
      this.whatsAppService.getAvailableWhatsAppMsgToExam(this.EduCompId, this.examId).subscribe(function (res) {
        _this3.availableWhatsAppMsg = res; // console.log("AvailableWhatsAppMsg", res);

        _this3.spinner.hide();
      });
    }
  }, {
    key: "getExamWhatsAppMsgs",
    value: function getExamWhatsAppMsgs() {
      var _this4 = this;

      this.spinner.show();
      this.whatsAppService.getExamWhatsAppMsgs(this.examId).subscribe(function (res) {
        _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(res);
        console.log("getExamWhatsAppMsgs", res);

        _this4.spinner.hide();
      });
    }
  }, {
    key: "addEditWhatAppMsg",
    value: function addEditWhatAppMsg() {
      var _this5 = this;

      var _a, _b, _c, _d;

      this.Submitted = true;
      var body = {};
      body.Id = (_a = this.FormCtrls.Id) === null || _a === void 0 ? void 0 : _a.value;
      body.whats_app_msg_id = (_b = this.FormCtrls.whats_app_msg_id) === null || _b === void 0 ? void 0 : _b.value;
      body.exam_id = this.examId;
      body.FromGrade = (_c = this.FormCtrls.FromGrade) === null || _c === void 0 ? void 0 : _c.value;
      body.ToGrade = (_d = this.FormCtrls.ToGrade) === null || _d === void 0 ? void 0 : _d.value;
      body.IsTemplate = this.IsTemplate;

      if (this.myForm.valid) {
        this.spinner.show();
        this.whatsAppService.addEditExamWhatssAppMsg(body).subscribe(function (res) {
          _this5.Submitted = false;

          if (res.returnString == "Success") {
            _this5.getAvailableWhatsAppMsgToExam();

            _this5.getExamWhatsAppMsgs();

            body.Id == null ? _this5.msg.success("whatsApp.ExamMsgAdded") //add
            : _this5.msg.success("whatsApp.ExamMsgUpdated"); //update

            _this5.myForm.reset();

            _this5.FormCtrls.whats_app_msg_id.enable();
          } else _this5.msg.error(res.returnString);

          _this5.spinner.hide();
        });
      } else this.msg.warning("General.FormNotValid");
    }
  }, {
    key: "getMsgToEdit",
    value: function getMsgToEdit(whatsAppMsg) {
      this.myForm.patchValue(whatsAppMsg);
      this.FormCtrls.whats_app_msg_id.setValue(whatsAppMsg.whatsAppMsgId);
      this.FormCtrls.whats_app_msg_id.disable();
      this.FormCtrls.FromGrade.setValue(whatsAppMsg.fromGrade);
      this.FormCtrls.ToGrade.setValue(whatsAppMsg.toGrade);
      console.log(whatsAppMsg);
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(whatsAppMsg) {
      var _this6 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: whatsAppMsg.msgTitle
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this6.removeWhatsApp(whatsAppMsg);
      });
    }
  }, {
    key: "removeWhatsApp",
    value: function removeWhatsApp(whatsAppMsg) {
      var _this7 = this;

      this.whatsAppService.deleteExamWhatsAppMsgById(whatsAppMsg.Id).subscribe(function (response) {
        if (response.returnValue == 1) {
          //  console.log('deleted: ', response);
          var deletedIndex = _this7.dataSource.data.findIndex(function (e) {
            return e.Id == whatsAppMsg.Id;
          });

          _this7.dataSource.data.splice(deletedIndex, 1);

          _this7.dataSource.paginator = _this7.paginator;
          _this7.dataSource.sort = _this7.sort;

          _this7.getAvailableWhatsAppMsgToExam();

          _this7.msg.success("whatsApp.MsgDeleted");
        }
      });
    }
  }]);

  return ExamsWhatsappComponent;
}();

ExamsWhatsappComponent.ɵfac = function ExamsWhatsappComponent_Factory(t) {
  return new (t || ExamsWhatsappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_whatsapp_setup_whatsApp_setup_service__WEBPACK_IMPORTED_MODULE_6__.WhatsAppSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService));
};

ExamsWhatsappComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ExamsWhatsappComponent,
  selectors: [["app-exams-whatsapp"]],
  viewQuery: function ExamsWhatsappComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 74,
  vars: 34,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/exam/index", "class", "btn btn-info bg-light-warning float-right", 3, "queryParams", 4, "ngIf"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/templates/index", "class", "btn btn-info bg-light-warning float-right", 3, "queryParams", 4, "ngIf"], [1, "container-fluid"], [3, "formGroup"], [1, "col-lg-4", "col-12"], ["appearance", "legacy"], ["formControlName", "whats_app_msg_id"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "FromGrade"], ["matInput", "", "type", "number", "formControlName", "ToGrade"], ["align", "end"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "msgTitle"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "msgBody"], ["mat-cell", "", "class", "msgBody", 4, "matCellDef"], ["matColumnDef", "FromGrade"], ["matColumnDef", "ToGrade"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/exam/index", 1, "btn", "btn-info", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/templates/index", 1, "btn", "btn-info", "bg-light-warning", "float-right", 3, "queryParams"], [3, "value"], [3, "innerHTML"], [1, "text-danger"], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "msgBody"], ["data-toggle", "popover", "data-trigger", "hover", "data-original-title", "Hover Triggered", 1, "msgBody", "contetnt", 3, "innerHTML", "title", "content"], ["mat-mini-fab", "", "color", "warn", 1, "mr-2", 3, "matTooltip", "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function ExamsWhatsappComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamsWhatsappComponent_a_7_Template, 3, 6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamsWhatsappComponent_a_8_Template, 3, 6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ExamsWhatsappComponent_mat_option_21_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ExamsWhatsappComponent_mat_hint_22_Template, 2, 1, "mat-hint", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ExamsWhatsappComponent_mat_hint_29_Template, 2, 1, "mat-hint", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ExamsWhatsappComponent_mat_hint_36_Template, 2, 1, "mat-hint", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-card-actions", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamsWhatsappComponent_Template_button_click_38_listener() {
        return ctx.addEditWhatAppMsg();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-form-field", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ExamsWhatsappComponent_Template_input_keyup_51_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "table", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](55, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ExamsWhatsappComponent_th_56_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, ExamsWhatsappComponent_td_57_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](58, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, ExamsWhatsappComponent_th_59_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, ExamsWhatsappComponent_td_60_Template, 2, 3, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](61, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, ExamsWhatsappComponent_th_62_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, ExamsWhatsappComponent_td_63_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](64, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, ExamsWhatsappComponent_th_65_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, ExamsWhatsappComponent_td_66_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](67, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, ExamsWhatsappComponent_th_68_Template, 1, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, ExamsWhatsappComponent_td_69_Template, 5, 3, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, ExamsWhatsappComponent_tr_70_Template, 1, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, ExamsWhatsappComponent_tr_71_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, ExamsWhatsappComponent_tr_72_Template, 3, 1, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "mat-paginator", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 19, "whatsApp.whatsAppSettings"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.IsTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.IsTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 21, "whatsApp.Messages"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 23, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.availableWhatsAppMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.whats_app_msg_id.invalid && (ctx.FormCtrls.whats_app_msg_id.touched || ctx.Submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 25, "whatsApp.FromGrade"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.FromGrade.invalid && (ctx.FormCtrls.FromGrade.touched || ctx.Submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 27, "whatsApp.ToGrade"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ToGrade.invalid && (ctx.FormCtrls.ToGrade.touched || ctx.Submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 29, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 31, "whatsApp.WhatAppMsgs"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](33, _c1))("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: [".msgBody[_ngcontent-%COMP%] {\n  max-width: 600px;\n  line-height: 1.7;\n  overflow: hidden;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  width: 650px;\n  max-width: 650px;\n  overflow: hidden;\n  height: 50px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.contetnt[_ngcontent-%COMP%] {\n  display: block !important;\n  height: 50px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1zLXdoYXRzYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbXMtd2hhdHNhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNnQm9keSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCA6Zmlyc3Qtb2YtdHlwZSxcclxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcclxudGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jb250ZXRudCB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 54069:
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsModule": function() { return /* binding */ ExamsModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _exams_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exams-routing.module */ 21194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exams/add-exam/add-exam.component */ 92618);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _questions_banck_questions_index_questions_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-banck/questions-index/questions-index.component */ 18573);
/* harmony import */ var _questions_banck_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions-banck/add-question/add-question.component */ 74047);
/* harmony import */ var _exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exams/exams-index/exams-index.component */ 60198);
/* harmony import */ var _exams_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exams/add-sub-question/add-sub-question.component */ 31803);
/* harmony import */ var _templates_templates_index_templates_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/templates-index/templates-index.component */ 90815);
/* harmony import */ var _templates_add_template_add_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/add-template/add-template.component */ 57764);
/* harmony import */ var _exam_correction_correction_index_correction_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exam-correction/correction-index/correction-index.component */ 35041);
/* harmony import */ var _exam_correction_correction_dialog_correction_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exam-correction/correction-dialog/correction-dialog.component */ 2249);
/* harmony import */ var _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exams/exam-preview/exam-preview.component */ 49544);
/* harmony import */ var _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exams/exams-custome-points/exams-custome-points.component */ 71736);
/* harmony import */ var _templates_templates_custome_points_templates_custome_points_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/templates-custome-points/templates-custome-points.component */ 2208);
/* harmony import */ var _upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upload-exam-student-grades/upload-exam-student-grades.component */ 67015);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-quill */ 6506);
/* harmony import */ var _exams_whatsapp_exams_whatsapp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./exams-whatsapp/exams-whatsapp.component */ 98965);
/* harmony import */ var _templates_template_details_template_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templates/template-details/template-details.component */ 35388);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/shared/validators/date.adapter */ 89778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);

























 //import { QuillConfigModule } from 'ngx-quill/config';





var ExamsModule = /*#__PURE__*/(0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExamsModule() {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExamsModule);
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
    useClass: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_20__.AppDateAdapter
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS,
    useValue: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_20__.APP_DATE_FORMATS
  }],
  imports: [[_exams_routing_module__WEBPACK_IMPORTED_MODULE_2__.ExamsRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule, ngx_quill__WEBPACK_IMPORTED_MODULE_28__.QuillModule.forRoot({
    modules: {
      syntax: true // toolbar: [
      //   ["bold", "italic", "underline", "strike"], // toggled buttons
      //   ["blockquote", "code-block"],
      //   [{ header: 1 }, { header: 2 }], // custom button values
      //   [{ list: "ordered" }, { list: "bullet" }],
      //   [{ script: "sub" }, { script: "super" }], // superscript/subscript
      //   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      //   [{ direction: "rtl" }], // text direction
      //   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
      //   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      //   [{ font: [] }],
      //   [{ align: [] }],
      //   ["clean"], // remove formatting button
      //   //   ["link", "image", "video"], // link and image, video
      // ],

    }
  })]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](ExamsModule, {
    declarations: [_exams_exams_index_exams_index_component__WEBPACK_IMPORTED_MODULE_8__.ExamsIndexComponent, _exams_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_5__.AddExamComponent, _exams_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_9__.AddSubQuestionComponent, _questions_banck_questions_index_questions_index_component__WEBPACK_IMPORTED_MODULE_6__.QuestionsIndexComponent, _questions_banck_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_7__.AddQuestionComponent, _templates_templates_index_templates_index_component__WEBPACK_IMPORTED_MODULE_10__.TemplatesIndexComponent, _templates_add_template_add_template_component__WEBPACK_IMPORTED_MODULE_11__.AddTemplateComponent, _exam_correction_correction_index_correction_index_component__WEBPACK_IMPORTED_MODULE_12__.CorrectionIndexComponent, _exam_correction_correction_dialog_correction_dialog_component__WEBPACK_IMPORTED_MODULE_13__.CorrectionDialogComponent, _exams_exam_preview_exam_preview_component__WEBPACK_IMPORTED_MODULE_14__.ExamPreviewComponent, _exams_exams_custome_points_exams_custome_points_component__WEBPACK_IMPORTED_MODULE_15__.ExamsCustomePointsComponent, _templates_templates_custome_points_templates_custome_points_component__WEBPACK_IMPORTED_MODULE_16__.TemplatesCustomePointsComponent, _upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_17__.UploadExamStudentGradesComponent, _exams_whatsapp_exams_whatsapp_component__WEBPACK_IMPORTED_MODULE_18__.ExamsWhatsappComponent, _templates_template_details_template_details_component__WEBPACK_IMPORTED_MODULE_19__.TemplateDetailsComponent],
    imports: [_exams_routing_module__WEBPACK_IMPORTED_MODULE_2__.ExamsRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule, ngx_quill__WEBPACK_IMPORTED_MODULE_28__.QuillModule]
  });
})();

/***/ }),

/***/ 92618:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams/add-exam/add-exam.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddExamComponent": function() { return /* binding */ AddExamComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-sub-question/add-sub-question.component */ 31803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-stage-dropdown/educational-stage-dropdown.component */ 83722);
/* harmony import */ var _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-year-by-stage-dropdown/educational-year-dropdown.component */ 70414);
/* harmony import */ var _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/cources-by-year-dropdown/cources-dropdown.component */ 74889);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/units-dropdown/units-dropdown.component */ 24181);
/* harmony import */ var _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/lessons-dropdown/lessons-dropdown.component */ 75990);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 89461);








































function AddExamComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Navbar.newexam"), " ");
  }
}

function AddExamComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "labels.EditExam"), " - ", ctx_r1.exam_ar_name, " ");
  }
}

function AddExamComponent_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var type_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", type_r23.exam_type_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", type_r23.exam_ar_type_name, " ");
  }
}

function AddExamComponent_mat_hint_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddExamComponent_mat_hint_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_hint_31_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.examTypeIdCtrl == null ? null : ctx_r3.examTypeIdCtrl.errors == null ? null : ctx_r3.examTypeIdCtrl.errors.required);
  }
}

function AddExamComponent_mat_hint_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_mat_hint_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddExamComponent_mat_hint_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_hint_42_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddExamComponent_mat_hint_42_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.examNameCtrl == null ? null : ctx_r4.examNameCtrl.errors == null ? null : ctx_r4.examNameCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.examNameCtrl == null ? null : ctx_r4.examNameCtrl.errors == null ? null : ctx_r4.examNameCtrl.errors.whiteSpace);
  }
}

function AddExamComponent_mat_hint_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_mat_hint_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_hint_49_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.examHoursCtrl == null ? null : ctx_r5.examHoursCtrl.errors == null ? null : ctx_r5.examHoursCtrl.errors.required);
  }
}

function AddExamComponent_mat_hint_56_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_mat_hint_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_hint_56_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.examMinutesCtrl == null ? null : ctx_r6.examMinutesCtrl.errors == null ? null : ctx_r6.examMinutesCtrl.errors.required);
  }
}

function AddExamComponent_mat_hint_63_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_mat_hint_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_hint_63_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.examPriceCtrl == null ? null : ctx_r7.examPriceCtrl.errors == null ? null : ctx_r7.examPriceCtrl.errors.required);
  }
}

function AddExamComponent_ng_container_180_mat_hint_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_ng_container_180_mat_hint_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddExamComponent_ng_container_180_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_ng_container_180_mat_hint_7_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddExamComponent_ng_container_180_mat_hint_7_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r30.repeatNumbersCtrl == null ? null : ctx_r30.repeatNumbersCtrl.errors == null ? null : ctx_r30.repeatNumbersCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r30.repeatNumbersCtrl == null ? null : ctx_r30.repeatNumbersCtrl.errors == null ? null : ctx_r30.repeatNumbersCtrl.errors.bigZero);
  }
}

function AddExamComponent_ng_container_180_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_ng_container_180_mat_hint_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddExamComponent_ng_container_180_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_ng_container_180_mat_hint_14_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddExamComponent_ng_container_180_mat_hint_14_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r31.repeatingPriceCtrl == null ? null : ctx_r31.repeatingPriceCtrl.errors == null ? null : ctx_r31.repeatingPriceCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r31.repeatingPriceCtrl == null ? null : ctx_r31.repeatingPriceCtrl.errors == null ? null : ctx_r31.repeatingPriceCtrl.errors.minusNum);
  }
}

function AddExamComponent_ng_container_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddExamComponent_ng_container_180_mat_hint_7_Template, 3, 2, "mat-hint", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, AddExamComponent_ng_container_180_mat_hint_14_Template, 3, 2, "mat-hint", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "labels.repeatNumbers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r11.repeatNumbersCtrl == null ? null : ctx_r11.repeatNumbersCtrl.invalid) && ((ctx_r11.repeatNumbersCtrl == null ? null : ctx_r11.repeatNumbersCtrl.touched) || ctx_r11.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 6, "labels.repeatingPrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r11.repeatingPriceCtrl == null ? null : ctx_r11.repeatingPriceCtrl.invalid) && ((ctx_r11.repeatingPriceCtrl == null ? null : ctx_r11.repeatingPriceCtrl.touched) || ctx_r11.submitted));
  }
}

function AddExamComponent_mat_card_actions_181_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddExamComponent_mat_card_actions_181_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38);
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r37.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

function AddExamComponent_mat_card_actions_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-card-actions", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_card_actions_181_button_1_Template, 3, 3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r12.examId > 0);
  }
}

function AddExamComponent_mat_option_199_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var val_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", val_r39.question_group_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", val_r39.question_group_ar_name, " ");
  }
}

function AddExamComponent_mat_hint_201_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_mat_hint_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_hint_201_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r15.examGroupCtrl == null ? null : ctx_r15.examGroupCtrl.errors == null ? null : ctx_r15.examGroupCtrl.errors.required);
  }
}

function AddExamComponent_mat_option_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var val_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", val_r41.question_head_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", val_r41.question_head_ar_name, " ");
  }
}

function AddExamComponent_mat_hint_212_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddExamComponent_mat_hint_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-hint", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_mat_hint_212_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r18.examHeaderCtrl == null ? null : ctx_r18.examHeaderCtrl.errors == null ? null : ctx_r18.examHeaderCtrl.errors.required);
  }
}

function AddExamComponent_button_220_Template(rf, ctx) {
  if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddExamComponent_button_220_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r44);
      var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r43.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function AddExamComponent_button_221_Template(rf, ctx) {
  if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddExamComponent_button_221_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r46);
      var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r45.onAddExamGroupHeader();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.AddQuestion"), " ");
  }
}

function AddExamComponent_button_222_Template(rf, ctx) {
  if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddExamComponent_button_222_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r48);
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r47.editExamGroupHead();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.UpdateQuestion"), " ");
  }
}

function AddExamComponent_div_223_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AddExamComponent_div_223_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r62 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", i_r62 + 1, " ");
  }
}

function AddExamComponent_div_223_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.\u064EQuestionNumber"), " ");
  }
}

function AddExamComponent_div_223_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ele_r63.questionNumber, " ");
  }
}

function AddExamComponent_div_223_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.QuestionHeader"), " ");
  }
}

function AddExamComponent_div_223_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ele_r64.questionType, " ");
  }
}

function AddExamComponent_div_223_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "labels.\u064EQuestionContent"), " ");
  }
}

function AddExamComponent_div_223_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ele_r65.question_title, " ");
  }
}

function AddExamComponent_div_223_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AddExamComponent_div_223_td_25_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddExamComponent_div_223_td_25_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r74);
      var groupHeader_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r72.getExamHeadById(groupHeader_r66);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AddExamComponent_div_223_td_25_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddExamComponent_div_223_td_25_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r77);
      var groupHeader_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r75.openDeleateDialog(groupHeader_r66);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AddExamComponent_div_223_td_25_ng_container_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddExamComponent_div_223_td_25_ng_container_1_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80);
      var groupHeader_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r78.addSubQuestionDialog(groupHeader_r66);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AddExamComponent_div_223_td_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_div_223_td_25_ng_container_1_a_1_Template, 2, 0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddExamComponent_div_223_td_25_ng_container_1_a_2_Template, 2, 0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AddExamComponent_div_223_td_25_ng_container_1_a_3_Template, 2, 0, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", fun_r68.functionName === "EditGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", fun_r68.functionName === "DeleteGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", fun_r68.functionName === "addSubQuestion");
  }
}

function AddExamComponent_div_223_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddExamComponent_div_223_td_25_ng_container_1_Template, 4, 3, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r58.rowFunctions);
  }
}

function AddExamComponent_div_223_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 84);
  }
}

function AddExamComponent_div_223_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 85);
  }
}

function AddExamComponent_div_223_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" No data matching the filter \"", ctx_r61.input.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

function AddExamComponent_div_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "table", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](11, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, AddExamComponent_div_223_th_12_Template, 2, 0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, AddExamComponent_div_223_td_13_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](14, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, AddExamComponent_div_223_th_15_Template, 3, 3, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, AddExamComponent_div_223_td_16_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](17, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, AddExamComponent_div_223_th_18_Template, 3, 3, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, AddExamComponent_div_223_td_19_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](20, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, AddExamComponent_div_223_th_21_Template, 3, 3, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, AddExamComponent_div_223_td_22_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](23, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, AddExamComponent_div_223_th_24_Template, 2, 0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, AddExamComponent_div_223_td_25_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, AddExamComponent_div_223_tr_26_Template, 1, 0, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, AddExamComponent_div_223_tr_27_Template, 1, 0, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, AddExamComponent_div_223_tr_28_Template, 3, 1, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "mat-paginator", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 5, "labels.QuestionsGroup"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r22.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r22.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r22.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](7, _c0));
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

var AddExamComponent = /*#__PURE__*/function () {
  function AddExamComponent(location, fb, authserv, examService, // private dialog: MatDialog,
  route, router, msg, generalService, dialog, datePipe, spinner) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddExamComponent);

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
    this.spinner = spinner; //  rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "EditGroup"
    }, {
      functionName: "DeleteGroup"
    }, {
      functionName: "addSubQuestion"
    }];
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
    this.route.queryParamMap.subscribe(function (params) {
      _this.examId = Number(params.get("examId"));

      if (_this.examId > 0) {
        _this.getExamById();

        _this.getAllGroupHeaderByExamId();
      }

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

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddExamComponent, [{
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
      this.myForm = this.fb.group({
        countryId: [""],
        stageId: [""],
        educationYearId: [""],
        subjectId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        teacherUserId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        examTypeId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        unitId: [""],
        lessionId: [""],
        examName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        examHours: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        examMinutes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        examPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        discount: [""],
        discountType: [""],
        fromDate: [""],
        toDate: [""],
        formHour: [""],
        toHours: [""],
        resualtDate: [""],
        resualtTime: [""],
        canSellIndividually: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        isRepeatable: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        repeatNumbers: [""],
        repeatingPrice: [0],
        hasCustomDiscount: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        sendWhatsAppMsg: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        isPublish: [0]
      });
      this.GroupHeadersForm = this.fb.group({
        examGroup: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        examHeader: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        examContent: [""]
      });
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId(); // this.stageIdCtrl?.disable();
      // this.educationYearIdCtrl?.disable();
      // this.subjectIdCtrl?.disable();
      // this.teacherUserIdCtrl?.disable();
      // this.unitIdCtrl?.disable();
      // this.lessionIdCtrl?.disable();

      this.getAllExamTypes();
      this.getAllQuestionGroups();
      this.getAllQuestionHeaders();
      this.examTypeValidator();
      this.RepeatableValidator();
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

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16; // console.log("getExamById", response);


        if (response) {
          (_a = _this3.stageIdCtrl) === null || _a === void 0 ? void 0 : _a.enable();
          (_b = _this3.educationYearIdCtrl) === null || _b === void 0 ? void 0 : _b.enable();
          (_c = _this3.subjectIdCtrl) === null || _c === void 0 ? void 0 : _c.enable();
          (_d = _this3.teacherUserIdCtrl) === null || _d === void 0 ? void 0 : _d.enable();
          (_e = _this3.unitIdCtrl) === null || _e === void 0 ? void 0 : _e.enable();
          (_f = _this3.lessionIdCtrl) === null || _f === void 0 ? void 0 : _f.enable();
          (_g = _this3.toHoursCtrl) === null || _g === void 0 ? void 0 : _g.setValue(response === null || response === void 0 ? void 0 : response.toHour);
          (_h = _this3.isPublishCtrl) === null || _h === void 0 ? void 0 : _h.setValue(response === null || response === void 0 ? void 0 : response.isPublish);
          (_j = _this3.discountCtrl) === null || _j === void 0 ? void 0 : _j.setValue(response === null || response === void 0 ? void 0 : response.Discount);
          (_k = _this3.examNameCtrl) === null || _k === void 0 ? void 0 : _k.setValue(response === null || response === void 0 ? void 0 : response.exam_ar_name);
          _this3.exam_ar_name = response === null || response === void 0 ? void 0 : response.exam_ar_name;
          (_l = _this3.formHourCtrl) === null || _l === void 0 ? void 0 : _l.setValue(response === null || response === void 0 ? void 0 : response.fromHour);
          (_m = _this3.examPriceCtrl) === null || _m === void 0 ? void 0 : _m.setValue(response === null || response === void 0 ? void 0 : response.price);
          (_o = _this3.resualtTimeCtrl) === null || _o === void 0 ? void 0 : _o.setValue(response === null || response === void 0 ? void 0 : response.ResultTime);
          (_p = _this3.discountTypeCtrl) === null || _p === void 0 ? void 0 : _p.setValue(response === null || response === void 0 ? void 0 : response.DiscountType);
          (_q = _this3.isRepeatableCtrl) === null || _q === void 0 ? void 0 : _q.setValue(response === null || response === void 0 ? void 0 : response.repeatableExam);
          _this3.isRepeatableExam = response === null || response === void 0 ? void 0 : response.repeatableExam;
          (_r = _this3.repeatNumbersCtrl) === null || _r === void 0 ? void 0 : _r.setValue(response === null || response === void 0 ? void 0 : response.repeatableExam_Count);
          (_s = _this3.sendWhatsAppMsgCtrl) === null || _s === void 0 ? void 0 : _s.setValue(response === null || response === void 0 ? void 0 : response.SendWhatsApp);
          _this3.isSendWhats = response === null || response === void 0 ? void 0 : response.SendWhatsApp;
          (_t = _this3.hasCustomDiscountCtrl) === null || _t === void 0 ? void 0 : _t.setValue((response === null || response === void 0 ? void 0 : response.Discount) > 0);
          (_u = _this3.canSellIndividuallyCtrl) === null || _u === void 0 ? void 0 : _u.setValue(response === null || response === void 0 ? void 0 : response.Individually_Purchased);
          (_v = _this3.countryIdCtrl) === null || _v === void 0 ? void 0 : _v.setValue(response.countryId); // this.examTypeIdCtrl?.setValue(response.examTypeId);

          (_w = _this3.repeatingPriceCtrl) === null || _w === void 0 ? void 0 : _w.setValue(response.StudentRepeatExamCost);
          var exam_minute = response.exam_period_minute % 60;
          var exam_hour = (response.exam_period_minute - exam_minute) / 60;
          (_x = _this3.examMinutesCtrl) === null || _x === void 0 ? void 0 : _x.setValue(exam_minute);
          (_y = _this3.examHoursCtrl) === null || _y === void 0 ? void 0 : _y.setValue(exam_hour);
          if (response.Lesson_ID != null) (_z = _this3.examTypeIdCtrl) === null || _z === void 0 ? void 0 : _z.setValue(1);
          if ((response === null || response === void 0 ? void 0 : response.Unit_ID) != null && response.Lesson_ID == null) (_0 = _this3.examTypeIdCtrl) === null || _0 === void 0 ? void 0 : _0.setValue(2);
          if ((response === null || response === void 0 ? void 0 : response.Subject_ID) != null && (response === null || response === void 0 ? void 0 : response.Unit_ID) == null && response.Lesson_ID == null) (_1 = _this3.examTypeIdCtrl) === null || _1 === void 0 ? void 0 : _1.setValue(3);
          if ((response === null || response === void 0 ? void 0 : response.Subject_ID) == null && (response === null || response === void 0 ? void 0 : response.Unit_ID) == null && response.Lesson_ID == null && response.quiz == 1) (_2 = _this3.examTypeIdCtrl) === null || _2 === void 0 ? void 0 : _2.setValue(4);
          (_3 = _this3.fromDateCtrl) === null || _3 === void 0 ? void 0 : _3.setValue(response.Avilable_Date_From);
          (_4 = _this3.toDateCtrl) === null || _4 === void 0 ? void 0 : _4.setValue(response.Avilable_Date_To);
          (_5 = _this3.resualtDateCtrl) === null || _5 === void 0 ? void 0 : _5.setValue(response.ResultDate);
          (_6 = _this3.countryIdCtrl) === null || _6 === void 0 ? void 0 : _6.setValue(1);
          (_7 = _this3.stageIdCtrl) === null || _7 === void 0 ? void 0 : _7.setValue(response.stageId);
          (_8 = _this3.educationYearIdCtrl) === null || _8 === void 0 ? void 0 : _8.setValue(response.eduYearId);
          (_9 = _this3.subjectIdCtrl) === null || _9 === void 0 ? void 0 : _9.setValue(response === null || response === void 0 ? void 0 : response.main_subject_id);
          (_10 = _this3.teacherUserIdCtrl) === null || _10 === void 0 ? void 0 : _10.setValue(response === null || response === void 0 ? void 0 : response.teacherUserId);
          (_11 = _this3.unitIdCtrl) === null || _11 === void 0 ? void 0 : _11.setValue(response === null || response === void 0 ? void 0 : response.Unit_ID);
          (_12 = _this3.lessionIdCtrl) === null || _12 === void 0 ? void 0 : _12.setValue(response === null || response === void 0 ? void 0 : response.Lesson_ID);
          (_13 = _this3.stageIdCtrl) === null || _13 === void 0 ? void 0 : _13.setValue(response.stageId);
          (_14 = _this3.educationYearIdCtrl) === null || _14 === void 0 ? void 0 : _14.setValue(response.eduYearId);
          (_15 = _this3.teacherUserIdCtrl) === null || _15 === void 0 ? void 0 : _15.setValue(response === null || response === void 0 ? void 0 : response.teacherUserId);
          (_16 = _this3.unitIdCtrl) === null || _16 === void 0 ? void 0 : _16.setValue(response === null || response === void 0 ? void 0 : response.Unit_ID);
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
          _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(response);
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

          _this5.filteredExamGroups = _this5.examGroupCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(function (value) {
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
          _this6.filteredExamHeaders = _this6.examHeaderCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(function (value) {
            return _this6.filter_question_header(value || "");
          }));
        }
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      // todo .. check for mandatory firlds
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;

      var exam = {
        id: this.examId,
        Avilable_Date_From: this.datePipe.transform(this.fromDateCtrl.value),
        Avilable_Date_To: this.datePipe.transform(this.toDateCtrl.value),
        CustomDiscountApplied: (_a = this.hasCustomDiscountCtrl) === null || _a === void 0 ? void 0 : _a.value,
        Discount: (_b = this.discountCtrl) === null || _b === void 0 ? void 0 : _b.value,
        DiscountType: (_c = this.discountTypeCtrl) === null || _c === void 0 ? void 0 : _c.value,
        EduCompId: this.EduCompId,
        Individually_Purchased: (_d = this.canSellIndividuallyCtrl) === null || _d === void 0 ? void 0 : _d.value,
        ResultDate: this.datePipe.transform(this.resualtDateCtrl.value),
        ResultTime: (_e = this.resualtTimeCtrl) === null || _e === void 0 ? void 0 : _e.value,
        SendWhatsApp: (_f = this.sendWhatsAppMsgCtrl) === null || _f === void 0 ? void 0 : _f.value,
        StudentRepeatExamCost: (_g = this.repeatingPriceCtrl) === null || _g === void 0 ? void 0 : _g.value,
        exam_ar_name: (_h = this.examNameCtrl) === null || _h === void 0 ? void 0 : _h.value,
        fromHour: (_j = this.formHourCtrl) === null || _j === void 0 ? void 0 : _j.value,
        lesson_ID: (_k = this.lessionIdCtrl) === null || _k === void 0 ? void 0 : _k.value,
        price: (_l = this.examPriceCtrl) === null || _l === void 0 ? void 0 : _l.value,
        repeatableExam: (_m = this.isRepeatableCtrl) === null || _m === void 0 ? void 0 : _m.value,
        repeatableExam_Count: (_o = this.repeatNumbersCtrl) === null || _o === void 0 ? void 0 : _o.value,
        subject_ID: (_p = this.subjectIdCtrl) === null || _p === void 0 ? void 0 : _p.value,
        teacherUserId: (_q = this.teacherUserIdCtrl) === null || _q === void 0 ? void 0 : _q.value,
        teacher_subject_id: (_r = this.subjectIdCtrl) === null || _r === void 0 ? void 0 : _r.value,
        toHour: (_s = this.toHoursCtrl) === null || _s === void 0 ? void 0 : _s.value,
        unit_ID: (_t = this.unitIdCtrl) === null || _t === void 0 ? void 0 : _t.value,
        exam_hour: (_u = this.examHoursCtrl) === null || _u === void 0 ? void 0 : _u.value,
        exam_minute: (_v = this.examMinutesCtrl) === null || _v === void 0 ? void 0 : _v.value,
        isPublish: (_w = this.isPublishCtrl) === null || _w === void 0 ? void 0 : _w.value
      };
      var toAddEdit = {
        exam_hour: (_x = this.examHoursCtrl) === null || _x === void 0 ? void 0 : _x.value,
        exam_minute: (_y = this.examMinutesCtrl) === null || _y === void 0 ? void 0 : _y.value,
        exam_type_id: (_z = this.examTypeIdCtrl) === null || _z === void 0 ? void 0 : _z.value,
        exam: exam
      }; // console.log("toAdd ", toAddEdit);
      // if exam id = 0 the end point will add >> if the exam id > 0 the end point will edit

      this.addExam(toAddEdit);
    }
  }, {
    key: "addExam",
    value: function addExam(toAddEdit) {
      var _this7 = this;

      var _a, _b;

      var validGroupHeadersForm = this.GroupHeadersForm.valid;
      this.submitted = true;

      if (this.examId == 0 && !validGroupHeadersForm) {
        this.GroupHeadsubmitted = true;
      } else {
        if (((_a = this.hasCustomDiscountCtrl) === null || _a === void 0 ? void 0 : _a.value) == true && this.repeatNumbersCtrl.value <= 0) {
          this.msg.warning("يجب ادخال عدد مرات التكرار");
          return;
        }

        if (((_b = this.hasCustomDiscountCtrl) === null || _b === void 0 ? void 0 : _b.value) == true && this.repeatingPriceCtrl.value < 0) {
          this.msg.warning("يجب ادخال سعر تجديد الامتحان ");
          return;
        }

        if (this.myForm.valid) {
          this.spinner.show();
          this.examService.addExam(toAddEdit).subscribe(function (response) {
            //  console.log('addExam', response);
            if (response.returnValue == 200 && response.examId > 0) {
              //  console.log("addExam", response);
              _this7.examId = response.examId;

              _this7.router.navigate([], {
                queryParams: {
                  examId: response.examId
                },
                queryParamsHandling: "merge"
              });

              _this7.onAddExamGroupHeader();

              _this7.examId == 0 ? _this7.msg.success("General.AddSuccessfully") : _this7.msg.success("General.UpdateSuccessfully");
              _this7.submitted = false;
            }

            _this7.spinner.hide();
          });
        } else this.msg.error("General.FormNotValid");
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
            _this8.getAllGroupHeaderByExamId();

            _this8.msg.success("General.AddSuccessfully");

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
        if (this.examId == 0) this.msg.error("General.FormNotValid");
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

          _this9.msg.success("General.UpdateSuccessfully");
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
        if (deleteResponse.returnValue == 200) {
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
      this.dialog.open(_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_4__.AddSubQuestionComponent, {
        data: {
          examId: this.examId,
          examGroupHeaderId: groupHeader.id,
          subjectId: this.subjectIdCtrl.value
        },
        minHeight: "96vh",
        minWidth: "70vw"
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
    key: "examTypeValidator",
    value: function examTypeValidator() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      var examTypeId = (_a = this.examTypeIdCtrl) === null || _a === void 0 ? void 0 : _a.value;

      if (examTypeId == 1) {
        (_b = this.unitIdCtrl) === null || _b === void 0 ? void 0 : _b.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        (_c = this.lessionIdCtrl) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
      } else if (examTypeId == 2) {
        (_d = this.unitIdCtrl) === null || _d === void 0 ? void 0 : _d.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
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
        (_b = this.repeatNumbersCtrl) === null || _b === void 0 ? void 0 : _b.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        (_c = this.repeatingPriceCtrl) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
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

  return AddExamComponent;
}();

AddExamComponent.ɵfac = function AddExamComponent_Factory(t) {
  return new (t || AddExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_6__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_7__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_8__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerService));
};

AddExamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: AddExamComponent,
  selectors: [["app-add-exam"]],
  viewQuery: function AddExamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 224,
  vars: 153,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["mat-raised-button", "", "routerLink", "../", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "submitted", "control"], [3, "submitted", "control", "stageControl"], [3, "submitted", "control", "yearControl"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["formControlName", "examTypeId", 3, "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "danger", 4, "ngIf"], [3, "submitted", "control", "courceControl"], [3, "submitted", "control", "unitControl"], ["matInput", "", "formControlName", "examName"], ["matInput", "", "type", "number", "formControlName", "examHours"], ["matInput", "", "type", "number", "formControlName", "examMinutes"], ["matInput", "", "type", "number", "formControlName", "examPrice"], ["matInput", "", "type", "number", "formControlName", "discount"], ["formControlName", "discountType"], ["value", "1"], ["value", "2"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker"], ["toDate", ""], ["matInput", "", "type", "time", "formControlName", "formHour"], ["matInput", "", "type", "time", "formControlName", "toHours"], ["matInput", "", "formControlName", "resualtDate", 3, "matDatepicker"], ["resualtDate", ""], ["matInput", "", "type", "time", "formControlName", "resualtTime"], ["formControlName", "canSellIndividually", 1, "row"], [3, "value"], ["formControlName", "isRepeatable", 1, "row"], [3, "value", "change"], ["formControlName", "sendWhatsAppMsg", 1, "row"], ["formControlName", "hasCustomDiscount", 1, "row"], ["align", "end", 4, "ngIf"], [1, "form-horizontal", 3, "formGroup"], [1, "col-md-6", "col-12"], ["type", "text", "matInput", "", "formControlName", "examGroup", 3, "matAutocomplete"], ["autoExamGroup", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "examHeader", 3, "matAutocomplete"], ["autoExamHeader", "matAutocomplete"], ["matInput", "", "formControlName", "examContent", "cols", "20"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "danger"], ["matInput", "", "type", "number", "formControlName", "repeatNumbers"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "repeatingPrice"], [1, "text-danger"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "questionNumber"], ["matColumnDef", "questionType"], ["matColumnDef", "question_title"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], ["class", "success p-0", "matTooltip", "Edit Group", 3, "click", 4, "ngIf"], ["class", "danger p-0", "matTooltip", "Delete Group", 3, "click", 4, "ngIf"], ["class", "info p-0", "matTooltip", "Add sub question", 3, "click", 4, "ngIf"], ["matTooltip", "Edit Group", 1, "success", "p-0", 3, "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["matTooltip", "Delete Group", 1, "danger", "p-0", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["matTooltip", "Add sub question", 1, "info", "p-0", 3, "click"], [1, "ft-git-branch", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function AddExamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AddExamComponent_span_5_Template, 3, 3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddExamComponent_span_6_Template, 3, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "app-educational-stage-dropdown", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "educational-year-by-stage-dropdown", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "cources-by-year-dropdown", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selectionChange", function AddExamComponent_Template_mat_select_selectionChange_26_listener() {
        ctx.onSelectExamType();
        return ctx.examTypeValidator();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, AddExamComponent_mat_option_30_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, AddExamComponent_mat_hint_31_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](33, "units-by-course-dropdown", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](35, "lessons-by-unit-dropdown", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, AddExamComponent_mat_hint_42_Template, 3, 2, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](48, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, AddExamComponent_mat_hint_49_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](56, AddExamComponent_mat_hint_56_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](62, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, AddExamComponent_mat_hint_63_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](69, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](74, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "mat-select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](78, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80, "\u0639\u0627\u0645");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82, "\u062E\u0627\u0635");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](87, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](88, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](89, "mat-datepicker-toggle", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](90, "mat-datepicker", null, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](96, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](97, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](98, "mat-datepicker-toggle", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](99, "mat-datepicker", null, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](105, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](106, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](111, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](112, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](117, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](118, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](119, "mat-datepicker-toggle", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](120, "mat-datepicker", null, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](126, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](127, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](131, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "mat-radio-group", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](134, "mat-radio-button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](136, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](137, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "mat-radio-button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](139);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](140, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](143);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](144, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "mat-radio-group", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "mat-radio-button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AddExamComponent_Template_mat_radio_button_change_147_listener() {
        return ctx.RepeatableValidator();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](148);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](149, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "mat-radio-button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AddExamComponent_Template_mat_radio_button_change_151_listener() {
        return ctx.RepeatableValidator();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](153, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](154, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](155, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](156);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](157, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](158, "mat-radio-group", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](159, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](160, "mat-radio-button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](161);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](162, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](163, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "mat-radio-button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](165);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](166, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](168, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](169);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](170, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](171, "mat-radio-group", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](172, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "mat-radio-button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](174);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](175, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](177, "mat-radio-button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](178);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](179, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](180, AddExamComponent_ng_container_180_Template, 15, 8, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](181, AddExamComponent_mat_card_actions_181_Template, 2, 1, "mat-card-actions", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](182, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](184, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](185, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](186);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](187, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](188, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](189, "form", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](191, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](195, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](196, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](197, "mat-autocomplete", null, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](199, AddExamComponent_mat_option_199_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](200, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](201, AddExamComponent_mat_hint_201_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](202, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](203, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](204, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](205);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](206, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](207, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](208, "mat-autocomplete", null, 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](210, AddExamComponent_mat_option_210_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](211, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](212, AddExamComponent_mat_hint_212_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](213, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](214, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](215, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](216);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](217, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](218, "textarea", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](219, "mat-card-actions", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](220, AddExamComponent_button_220_Template, 3, 3, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](221, AddExamComponent_button_221_Template, 3, 3, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](222, AddExamComponent_button_222_Template, 3, 3, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](223, AddExamComponent_div_223_Template, 30, 8, "div", 52);
    }

    if (rf & 2) {
      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](91);

      var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](100);

      var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](121);

      var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](198);

      var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](209);

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.examId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](151, _c1, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 83, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("submitted", false)("control", ctx.stageIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("submitted", false)("control", ctx.educationYearIdCtrl)("stageControl", ctx.stageIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("submitted", false)("control", ctx.subjectIdCtrl)("yearControl", ctx.educationYearIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](25, 85, "Material.ExamType"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](29, 87, "Material.ExamType"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.examTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.examTypeIdCtrl == null ? null : ctx.examTypeIdCtrl.invalid) && ((ctx.examTypeIdCtrl == null ? null : ctx.examTypeIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.unitIdCtrl)("courceControl", ctx.subjectIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.lessionIdCtrl)("unitControl", ctx.unitIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](40, 89, "labels.ExamNm"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.lessionIdCtrl == null ? null : ctx.lessionIdCtrl.invalid) && ((ctx.lessionIdCtrl == null ? null : ctx.lessionIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](47, 91, "labels.ExamHours"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.examHoursCtrl == null ? null : ctx.examHoursCtrl.invalid) && ((ctx.examHoursCtrl == null ? null : ctx.examHoursCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](54, 93, "labels.ExamMinute"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.examMinutesCtrl == null ? null : ctx.examMinutesCtrl.invalid) && ((ctx.examMinutesCtrl == null ? null : ctx.examMinutesCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](61, 95, "labels.ExamPrice"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.examPriceCtrl == null ? null : ctx.examPriceCtrl.invalid) && ((ctx.examPriceCtrl == null ? null : ctx.examPriceCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](68, 97, "labels.Discount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](74, 99, "labels.DiscountType"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](78, 101, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](87, 103, "labels.FromDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](96, 105, "labels.ToDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](105, 107, "labels.FromTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](111, 109, "labels.ToTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](117, 111, "labels.ExamResultDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](126, 113, "labels.examResultTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](131, 115, "labels.SellExamOnly"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](136, 117, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](140, 119, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](144, 121, "labels.RepeatedExam"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](149, 123, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](153, 125, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](157, 127, "Navbar.SendWhatsappMsg"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](162, 129, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](166, 131, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](170, 133, "labels.CustomDiscount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](175, 135, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](179, 137, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.isRepeatableCtrl == null ? null : ctx.isRepeatableCtrl.value) == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](187, 139, "labels.addGxamGroups"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.GroupHeadersForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](195, 141, "labels.\u064EQuestionNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matAutocomplete", _r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](200, 143, ctx.filteredExamGroups));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.examGroupCtrl == null ? null : ctx.examGroupCtrl.invalid) && ((ctx.examGroupCtrl == null ? null : ctx.examGroupCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](206, 145, "labels.QuestionHeader"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matAutocomplete", _r16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](211, 147, ctx.filteredExamHeaders));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.examHeaderCtrl == null ? null : ctx.examHeaderCtrl.invalid) && ((ctx.examHeaderCtrl == null ? null : ctx.examHeaderCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](217, 149, "labels.\u064EQuestionContent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.examId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.GroupsHeadersList.length > 0 && !ctx.editGroupHeaderMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.editGroupHeaderMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.GroupsHeadersList.length > 0);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.EducationalStageDropdownComponent, _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.EducationalYearByStageDropdownComponent, _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.CourcesByYearDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.UnitsByCourseDropdownComponent, _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.LessonsByUnitDropdownComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepicker, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocomplete, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZXhhbS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 31803:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams/add-sub-question/add-sub-question.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSubQuestionComponent": function() { return /* binding */ AddSubQuestionComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/pipes/safe.pipe */ 88246);


























function AddSubQuestionComponent_mat_hint_12_span_1_Template(rf, ctx) {
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

function AddSubQuestionComponent_mat_hint_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSubQuestionComponent_mat_hint_12_span_1_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r0.mainQuestionCtrl == null ? null : ctx_r0.mainQuestionCtrl.errors == null ? null : ctx_r0.mainQuestionCtrl.errors.required) || (ctx_r0.mainQuestionCtrl == null ? null : ctx_r0.mainQuestionCtrl.errors == null ? null : ctx_r0.mainQuestionCtrl.errors.whiteSpace));
  }
}

function AddSubQuestionComponent_mat_hint_28_span_1_Template(rf, ctx) {
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

function AddSubQuestionComponent_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSubQuestionComponent_mat_hint_28_span_1_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.questionTypeIdCtrl == null ? null : ctx_r1.questionTypeIdCtrl.errors == null ? null : ctx_r1.questionTypeIdCtrl.errors.required);
  }
}

function AddSubQuestionComponent_mat_hint_35_span_1_Template(rf, ctx) {
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

function AddSubQuestionComponent_mat_hint_35_span_2_Template(rf, ctx) {
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

function AddSubQuestionComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSubQuestionComponent_mat_hint_35_span_1_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddSubQuestionComponent_mat_hint_35_span_2_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.questionMarkCtrl.errors == null ? null : ctx_r2.questionMarkCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.questionMarkCtrl.errors == null ? null : ctx_r2.questionMarkCtrl.errors.bigZero);
  }
}

function AddSubQuestionComponent_mat_checkbox_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_mat_hint_59_span_1_Template(rf, ctx) {
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

function AddSubQuestionComponent_mat_hint_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddSubQuestionComponent_mat_hint_59_span_1_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r4.questionPerfectAnswerCtrl == null ? null : ctx_r4.questionPerfectAnswerCtrl.errors == null ? null : ctx_r4.questionPerfectAnswerCtrl.errors.required) || (ctx_r4.questionPerfectAnswerCtrl == null ? null : ctx_r4.questionPerfectAnswerCtrl.errors == null ? null : ctx_r4.questionPerfectAnswerCtrl.errors.whiteSpace));
  }
}

function AddSubQuestionComponent_ng_container_72_mat_checkbox_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_72_mat_checkbox_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_72_mat_checkbox_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_72_mat_checkbox_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-radio-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-radio-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_72_Template_mat_radio_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r18.onSelectCorrect(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_72_Template_input_change_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r20.importOneFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, AddSubQuestionComponent_ng_container_72_mat_checkbox_25_Template, 2, 1, "mat-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-radio-group", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-radio-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_72_Template_mat_radio_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r21.onSelectCorrect(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_72_Template_input_change_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r22.importTwoFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, AddSubQuestionComponent_ng_container_72_mat_checkbox_53_Template, 2, 1, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "mat-radio-group", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-radio-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_72_Template_mat_radio_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r23.onSelectCorrect(2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_72_Template_input_change_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r24.importThreeFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, AddSubQuestionComponent_ng_container_72_mat_checkbox_80_Template, 2, 1, "mat-checkbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "mat-radio-group", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "mat-radio-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_72_Template_mat_radio_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r25.onSelectCorrect(3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](95, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](101, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](103, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_72_Template_input_change_104_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r26.importFourFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](107, AddSubQuestionComponent_ng_container_72_mat_checkbox_107_Template, 2, 1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](108, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0)("checked", ctx_r5.oneIsCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 28, "labels.AnswerNumber"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 30, "labels.AnswerText"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 32, "labels.AnswerPic"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.answerOneImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r5.answerOneImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1)("checked", ctx_r5.twoIsCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 34, "labels.AnswerNumber"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 36, "labels.AnswerText"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 38, "labels.AnswerPic"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.answerTwoImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r5.answerTwoImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2)("checked", ctx_r5.threeIsCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 40, "labels.AnswerNumber"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](67, 42, "labels.AnswerText"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](74, 44, "labels.AnswerPic"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.answerThreeImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r5.answerThreeImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 3)("checked", ctx_r5.fourIsCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](87, 46, "labels.AnswerNumber"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](94, 48, "labels.AnswerText"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](101, 50, "labels.AnswerPic"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.answerFourImageCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r5.answerFourImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

function AddSubQuestionComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r27.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function AddSubQuestionComponent_button_75_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_button_75_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r29.onSubmit();
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

function AddSubQuestionComponent_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_tr_92_Template_button_click_8_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      var ques_r31 = restoredCtx.$implicit;
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r32.getQuestionForEditByID(ques_r31.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_tr_92_Template_button_click_11_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      var ques_r31 = restoredCtx.$implicit;
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r34.removeExamQuestion(ques_r31.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ques_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ques_r31.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ques_r31.Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ques_r31.QuestionTypeAr);
  }
}

var AddSubQuestionComponent = /*#__PURE__*/function () {
  function AddSubQuestionComponent(fb, examService, authserv, toastr, spinner, uploadFileService, data) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddSubQuestionComponent);

    this.fb = fb;
    this.examService = examService;
    this.authserv = authserv;
    this.toastr = toastr;
    this.spinner = spinner;
    this.uploadFileService = uploadFileService;
    this.data = data; // @Input("examId") examId: any;
    // @Input("examGroupHeaderId") examGroupHeaderId: any = 0;
    // @Input("subjectId") subjectId: any = 0;

    this.unitId = 0;
    this.lessonId = 0;
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

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddSubQuestionComponent, [{
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
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        mainQuestion: [""],
        questionTypeId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        questionImage: [""],
        remove_image: [false],
        // unitId: [""],
        // lessionId: [""],
        exam_question_text: [""],
        questionPerfectAnswer: [""],
        perfect_answer_attach: [""],
        questionMark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]],
        answerOneId: [""],
        answerOne: [""],
        answerOneIsCorrect: [],
        answerOneImage: [""],
        answerTwoId: [""],
        answerTwo: [""],
        answerTwoIsCorrect: [],
        answerTwoImage: [""],
        answerThreeId: [""],
        answerThree: [""],
        answerThreeIsCorrect: [],
        answerThreeImage: [""],
        answerFourId: [""],
        answerFour: [""],
        answerFourIsCorrect: [],
        answerFourImage: [""],
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;

      this.submitted = true; // مقالي

      if (((_a = this.questionTypeIdCtrl) === null || _a === void 0 ? void 0 : _a.value) == 1) {
        var image = this.questionFile || null;
        var questionImagePath = this.questionImageCtrl;
        var toAddEdit = {
          exam_question_main_question: (_b = this.mainQuestionCtrl) === null || _b === void 0 ? void 0 : _b.value,
          exam_question_mark: (_c = this.questionMarkCtrl) === null || _c === void 0 ? void 0 : _c.value,
          exam_question_perfect_answer: (_d = this.questionPerfectAnswerCtrl) === null || _d === void 0 ? void 0 : _d.value,
          perfect_answer_attach: this.perfectAnswerAttach_preview,
          exam_question_text: (_e = this.questionTextCtrl) === null || _e === void 0 ? void 0 : _e.value,
          exam_question_type_id: (_f = this.questionTypeIdCtrl) === null || _f === void 0 ? void 0 : _f.value,
          exam_selected_question_head_id: this.examGroupHeaderId,
          exam_selected_subject_id: this.subjectId,
          exam_question_image: image,
          remove_image: (_g = this.questionImageRemove_imageCtrl) === null || _g === void 0 ? void 0 : _g.value,
          exam_question_id: this.questionId
        }; //   console.log("toAddEdit_Text_question=> ", toAddEdit);

        if (!((_h = this.questionTextCtrl) === null || _h === void 0 ? void 0 : _h.value) && image == null && questionImagePath == null) {
          this.toastr.warning("يجب ادخال نص السؤال او اختيار صوره السؤال");
          return;
        } else {
          if (this.questionId > 0) {
            this.editTextQuestion(toAddEdit);
          } else {
            this.addTextQuestion(toAddEdit);
          }
        }
      } // MCQ


      if (((_j = this.questionTypeIdCtrl) === null || _j === void 0 ? void 0 : _j.value) == 2) {
        var _image = this.questionFile || null;

        var _questionImagePath = this.questionImageCtrl;
        var imageOne = this.answerOneFile || null;
        var choice1 = {
          choice_id: (_l = (_k = this.answerOneIdCtrl) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : 0,
          choice_text: (_m = this.answerOneCtrl) === null || _m === void 0 ? void 0 : _m.value,
          is_correct: this.answerOneIsCorrectCtrl.value === 0 ? true : false,
          choice_image: imageOne,
          remove_image: (_o = this.answerOneRemove_imageCtrl) === null || _o === void 0 ? void 0 : _o.value,
          path: (_p = this.answerOneImageCtrl) === null || _p === void 0 ? void 0 : _p.value
        };
        var imageTwo = this.answerTwoFile || null;
        var choice2 = {
          choice_id: (_r = (_q = this.answerTwoIdCtrl) === null || _q === void 0 ? void 0 : _q.value) !== null && _r !== void 0 ? _r : 0,
          choice_text: (_s = this.answerTwoCtrl) === null || _s === void 0 ? void 0 : _s.value,
          is_correct: ((_t = this.answerTwoIsCorrectCtrl) === null || _t === void 0 ? void 0 : _t.value) ? true : false,
          choice_image: imageTwo,
          remove_image: (_u = this.answerTwoRemove_imageCtrl) === null || _u === void 0 ? void 0 : _u.value,
          path: (_v = this.answerTwoImageCtrl) === null || _v === void 0 ? void 0 : _v.value
        };
        var imageThree = this.answerThreeFile || null;
        var choice3 = {
          choice_id: (_x = (_w = this.answerThreeIdCtrl) === null || _w === void 0 ? void 0 : _w.value) !== null && _x !== void 0 ? _x : 0,
          choice_text: (_y = this.answerThreeCtrl) === null || _y === void 0 ? void 0 : _y.value,
          is_correct: ((_z = this.answerThreeIsCorrectCtrl) === null || _z === void 0 ? void 0 : _z.value) ? true : false,
          choice_image: imageThree,
          remove_image: (_0 = this.answerThreeRemove_imageCtrl) === null || _0 === void 0 ? void 0 : _0.value,
          path: (_1 = this.answerThreeImageCtrl) === null || _1 === void 0 ? void 0 : _1.value
        };
        var imageFour = this.answerFourFile || null;
        var choice4 = {
          choice_id: (_3 = (_2 = this.answerFourIdCtrl) === null || _2 === void 0 ? void 0 : _2.value) !== null && _3 !== void 0 ? _3 : 0,
          choice_text: (_4 = this.answerFourCtrl) === null || _4 === void 0 ? void 0 : _4.value,
          is_correct: ((_5 = this.answerFourIsCorrectCtrl) === null || _5 === void 0 ? void 0 : _5.value) ? true : false,
          choice_image: imageFour,
          remove_image: (_6 = this.answerFourRemove_imageCtrl) === null || _6 === void 0 ? void 0 : _6.value,
          path: (_7 = this.answerFourImageCtrl) === null || _7 === void 0 ? void 0 : _7.value
        };
        var _toAddEdit = {
          exam_question_main_question: (_8 = this.mainQuestionCtrl) === null || _8 === void 0 ? void 0 : _8.value,
          exam_question_mark: (_9 = this.questionMarkCtrl) === null || _9 === void 0 ? void 0 : _9.value,
          exam_question_perfect_answer: (_10 = this.questionPerfectAnswerCtrl) === null || _10 === void 0 ? void 0 : _10.value,
          perfect_answer_attach: this.perfectAnswerAttach_preview,
          exam_question_text: (_11 = this.questionTextCtrl) === null || _11 === void 0 ? void 0 : _11.value,
          exam_question_type_id: (_12 = this.questionTypeIdCtrl) === null || _12 === void 0 ? void 0 : _12.value,
          exam_selected_question_head_id: this.examGroupHeaderId,
          exam_selected_subject_id: this.subjectId,
          exam_question_image: _image,
          remove_image: (_13 = this.questionImageRemove_imageCtrl) === null || _13 === void 0 ? void 0 : _13.value,
          exam_question_id: this.questionId,
          mcq_choices: [choice1, choice2, choice3, choice4]
        };
        console.log("toAddEdit_mcq_question=> ", _toAddEdit); // if no question Text or img

        if (!((_14 = this.questionTextCtrl) === null || _14 === void 0 ? void 0 : _14.value) && _image == null && _questionImagePath == null) {
          this.toastr.warning("يجب ادخال نص السؤال او اختيار صوره السؤال");
          return;
        } // if no correct answer


        if (!choice1.is_correct && !choice2.is_correct && !choice3.is_correct && !choice4.is_correct) {
          this.toastr.warning("يجب اختيار الإجابة الصحيحة");
          return;
        } // if mcq 1 no text or img


        if (choice1.choice_text === "" && choice1.choice_image === null && choice1.path == null) {
          this.toastr.warning("يجب ادخال نص السؤال الأول او اختيار صورة ");
          return;
        } // if mcq 2 no text or img


        if (choice2.choice_text === "" && choice2.choice_image === null && choice2.path == null) {
          this.toastr.warning("يجب ادخال نص السؤال الثاني او اختيار صورة ");
          return;
        } // if mcq 3 no text or img


        if (choice3.choice_text === "" && choice3.choice_image === null && choice3.path == null) {
          this.toastr.warning("يجب ادخال نص السؤال الثالث او اختيار صورة ");
          return;
        } // if mcq 4 no text or img


        if (choice4.choice_text === "" && choice4.choice_image === null && choice4.path == null) {
          this.toastr.warning("يجب ادخال نص السؤال الرابع او اختيار صورة ");
          return;
        } else {
          if (this.questionId > 0) {
            this.editMcqQuestion(_toAddEdit);
          } else {
            this.addMcqQuestion(_toAddEdit);
          }
        }
      }
    }
  }, {
    key: "addTextQuestion",
    value: function addTextQuestion(toAddEdit) {
      var _this2 = this;

      //  console.log('on add ', toAddEdit);
      this.spinner.show();
      this.examService.addQuestion(toAddEdit).subscribe(function (response) {
        // console.log('respooooooonse', response);
        var _a, _b, _c, _d, _e, _f, _g;

        if (response.returnValue == 200) {
          _this2.getAllQuestionsByHeadId();

          (_a = _this2.mainQuestionCtrl) === null || _a === void 0 ? void 0 : _a.setValue(null);
          (_b = _this2.questionMarkCtrl) === null || _b === void 0 ? void 0 : _b.setValue(null);
          (_c = _this2.questionTypeIdCtrl) === null || _c === void 0 ? void 0 : _c.setValue(null);
          (_d = _this2.questionImageCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);
          (_e = _this2.questionTextCtrl) === null || _e === void 0 ? void 0 : _e.setValue(null);
          (_f = _this2.questionPerfectAnswerCtrl) === null || _f === void 0 ? void 0 : _f.setValue(null);
          (_g = _this2.perfect_answer_attachCtrl) === null || _g === void 0 ? void 0 : _g.setValue(null); //  this.unitIdCtrl?.setValue(null);
          // this.lessonIdCtrl?.setValue(null);

          _this2.myForm.reset();

          _this2.resetFileInputs();
        } else {
          _this2.toastr.error(response.returnString);
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "editTextQuestion",
    value: function editTextQuestion(toAddEdit) {
      var _this3 = this;

      //  console.log('tooEdiiiiiiit', toAddEdit);
      this.spinner.show();
      this.examService.editQuestion(toAddEdit).subscribe(function (response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j; //  console.log('ediiiiiitResponse', response);


        if (response) {
          var toEdit = _this3.questionsInGrid.find(function (q) {
            return q.Id == _this3.questionId;
          });

          if (toEdit) {
            toEdit.Text = (_a = _this3.questionTextCtrl) === null || _a === void 0 ? void 0 : _a.value;
            toEdit.QuestionTypeAr = "مقال";
            toEdit.Image = (_b = _this3.questionImageCtrl) === null || _b === void 0 ? void 0 : _b.value;
          }

          (_c = _this3.mainQuestionCtrl) === null || _c === void 0 ? void 0 : _c.setValue(null);
          (_d = _this3.questionMarkCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);
          (_e = _this3.questionTypeIdCtrl) === null || _e === void 0 ? void 0 : _e.setValue(null);
          (_f = _this3.questionImageCtrl) === null || _f === void 0 ? void 0 : _f.setValue(null);
          (_g = _this3.questionTextCtrl) === null || _g === void 0 ? void 0 : _g.setValue(null);
          (_h = _this3.questionPerfectAnswerCtrl) === null || _h === void 0 ? void 0 : _h.setValue(null);
          (_j = _this3.perfect_answer_attachCtrl) === null || _j === void 0 ? void 0 : _j.setValue(null); //   this.unitIdCtrl?.setValue(null);
          // this.lessonIdCtrl?.setValue(null);

          _this3.myForm.reset();

          _this3.resetFileInputs();

          _this3.questionId = 0; // return to add mode
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "addMcqQuestion",
    value: function addMcqQuestion(toAddEdit) {
      var _this4 = this;

      // console.log('on add ', toAddEdit);
      if (this.myForm.valid) {
        this.spinner.show();
        this.examService.addQuestion(toAddEdit).subscribe(function (response) {
          // console.log('respooooooonse', response);
          var _a, _b, _c, _d, _e, _f, _g;

          if (response.returnValue == 200) {
            _this4.getAllQuestionsByHeadId();

            (_a = _this4.mainQuestionCtrl) === null || _a === void 0 ? void 0 : _a.setValue(null);
            (_b = _this4.questionMarkCtrl) === null || _b === void 0 ? void 0 : _b.setValue(null);
            (_c = _this4.questionTypeIdCtrl) === null || _c === void 0 ? void 0 : _c.setValue(null);
            (_d = _this4.questionImageCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);
            (_e = _this4.questionTextCtrl) === null || _e === void 0 ? void 0 : _e.setValue(null);
            (_f = _this4.questionPerfectAnswerCtrl) === null || _f === void 0 ? void 0 : _f.setValue(null);
            (_g = _this4.perfect_answer_attachCtrl) === null || _g === void 0 ? void 0 : _g.setValue(null);

            _this4.myForm.reset();

            _this4.resetFileInputs();

            _this4.submitted = false;

            _this4.toastr.success("General.AddSuccessfully");
          } else {
            _this4.toastr.error(response.returnString);
          }

          _this4.spinner.hide();
        });
      }
    }
  }, {
    key: "editMcqQuestion",
    value: function editMcqQuestion(toAddEdit) {
      var _this5 = this;

      //  console.log("editMcqQuestion", toAddEdit);
      if (this.myForm.valid) {
        this.spinner.show();
        this.examService.editQuestion(toAddEdit).subscribe(function (response) {
          var _a, _b, _c, _d, _e, _f, _g; //  console.log("editMcqQuestion", response);


          if (response) {
            _this5.getAllQuestionsByHeadId();

            (_a = _this5.mainQuestionCtrl) === null || _a === void 0 ? void 0 : _a.setValue(null);
            (_b = _this5.questionMarkCtrl) === null || _b === void 0 ? void 0 : _b.setValue(null);
            (_c = _this5.questionTypeIdCtrl) === null || _c === void 0 ? void 0 : _c.setValue(null);
            (_d = _this5.questionImageCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);
            (_e = _this5.questionTextCtrl) === null || _e === void 0 ? void 0 : _e.setValue(null);
            (_f = _this5.questionPerfectAnswerCtrl) === null || _f === void 0 ? void 0 : _f.setValue(null);
            (_g = _this5.perfect_answer_attachCtrl) === null || _g === void 0 ? void 0 : _g.setValue(null);

            _this5.myForm.reset();

            _this5.resetFileInputs();

            _this5.submitted = false;

            _this5.toastr.success("General.UpdateSuccessfully");

            _this5.questionId = 0; // return to add mode
          }

          _this5.spinner.hide();
        });
      }
    }
  }, {
    key: "getQuestionForEditByID",
    value: function getQuestionForEditByID(questionId) {
      var _this6 = this;

      //  console.log('questionIddddddddddddddd', questionId);
      this.spinner.show();
      this.examService.getQuestionForEditByID(questionId).subscribe(function (response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22;

        console.log("getQuestionForEditByID", response);

        if (response) {
          (_a = _this6.mainQuestionCtrl) === null || _a === void 0 ? void 0 : _a.setValue(response.main_question);
          (_b = _this6.questionMarkCtrl) === null || _b === void 0 ? void 0 : _b.setValue(response.mark);
          (_c = _this6.questionTextCtrl) === null || _c === void 0 ? void 0 : _c.setValue(response.question_text);
          (_d = _this6.questionImageCtrl) === null || _d === void 0 ? void 0 : _d.setValue((response === null || response === void 0 ? void 0 : response.attach_path) != null ? "mozakretyapi" + (response === null || response === void 0 ? void 0 : response.attach_path) : null); // this.questionFile.FileAsBase64 = response.attach_path;

          (_e = _this6.questionTypeIdCtrl) === null || _e === void 0 ? void 0 : _e.setValue(response.question_type_id);
          _this6.questionId = questionId;
          (_f = _this6.questionPerfectAnswerCtrl) === null || _f === void 0 ? void 0 : _f.setValue(response.perfect_answer);
          (_g = _this6.perfect_answer_attachCtrl) === null || _g === void 0 ? void 0 : _g.setValue("mozakretyapi".concat(response === null || response === void 0 ? void 0 : response.prefect_answer_attach_path));

          if (response.question_type_id == 2) {
            (_h = _this6.answerOneIdCtrl) === null || _h === void 0 ? void 0 : _h.setValue((_j = response.MCQ_Choices[0]) === null || _j === void 0 ? void 0 : _j.Id);
            (_k = _this6.answerOneCtrl) === null || _k === void 0 ? void 0 : _k.setValue((_l = response.MCQ_Choices[0]) === null || _l === void 0 ? void 0 : _l.Text);
            (_m = _this6.answerOneImageCtrl) === null || _m === void 0 ? void 0 : _m.setValue(((_o = response === null || response === void 0 ? void 0 : response.MCQ_Choices[0]) === null || _o === void 0 ? void 0 : _o.Image) != null ? "mozakretyapi" + ((_p = response === null || response === void 0 ? void 0 : response.MCQ_Choices[0]) === null || _p === void 0 ? void 0 : _p.Image) : null); // this.answerOneImageCtrl?.setValue(response.MCQ_Choices[0].Image);
            //  this.answerOneFile.FileAsBase64 = response.MCQ_Choices[0].Image;

            (_q = _this6.answerOneIsCorrectCtrl) === null || _q === void 0 ? void 0 : _q.setValue((_r = response.MCQ_Choices[0]) === null || _r === void 0 ? void 0 : _r.Is_Correct);
            _this6.oneIsCorrect = (_s = response.MCQ_Choices[0]) === null || _s === void 0 ? void 0 : _s.Is_Correct;
            (_t = _this6.answerTwoIdCtrl) === null || _t === void 0 ? void 0 : _t.setValue((_u = response.MCQ_Choices[1]) === null || _u === void 0 ? void 0 : _u.Id);
            (_v = _this6.answerTwoCtrl) === null || _v === void 0 ? void 0 : _v.setValue((_w = response.MCQ_Choices[1]) === null || _w === void 0 ? void 0 : _w.Text);
            (_x = _this6.answerTwoImageCtrl) === null || _x === void 0 ? void 0 : _x.setValue(((_y = response === null || response === void 0 ? void 0 : response.MCQ_Choices[1]) === null || _y === void 0 ? void 0 : _y.Image) != null ? "mozakretyapi" + ((_z = response === null || response === void 0 ? void 0 : response.MCQ_Choices[1]) === null || _z === void 0 ? void 0 : _z.Image) : null); //  this.answerTwoImageCtrl?.setValue(response.MCQ_Choices[1].Image);
            // this.answerTwoFile.FileAsBase64 = response.MCQ_Choices[1].Image;

            (_0 = _this6.answerTwoIsCorrectCtrl) === null || _0 === void 0 ? void 0 : _0.setValue((_1 = response.MCQ_Choices[1]) === null || _1 === void 0 ? void 0 : _1.Is_Correct);
            _this6.twoIsCorrect = (_2 = response.MCQ_Choices[1]) === null || _2 === void 0 ? void 0 : _2.Is_Correct;
            (_3 = _this6.answerThreeIdCtrl) === null || _3 === void 0 ? void 0 : _3.setValue((_4 = response.MCQ_Choices[2]) === null || _4 === void 0 ? void 0 : _4.Id);
            (_5 = _this6.answerThreeCtrl) === null || _5 === void 0 ? void 0 : _5.setValue((_6 = response.MCQ_Choices[2]) === null || _6 === void 0 ? void 0 : _6.Text);
            (_7 = _this6.answerThreeImageCtrl) === null || _7 === void 0 ? void 0 : _7.setValue(((_8 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[2]) === null || _8 === void 0 ? void 0 : _8.Image) != null ? "mozakretyapi" + ((_9 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[2]) === null || _9 === void 0 ? void 0 : _9.Image) : null); // this.answerThreeImageCtrl?.setValue(response.MCQ_Choices[2].Image);
            //  this.answerThreeFile.FileAsBase64 = response.MCQ_Choices[2].Image;

            (_10 = _this6.answerThreeIsCorrectCtrl) === null || _10 === void 0 ? void 0 : _10.setValue((_11 = response.MCQ_Choices[2]) === null || _11 === void 0 ? void 0 : _11.Is_Correct);
            _this6.threeIsCorrect = (_12 = response.MCQ_Choices[2]) === null || _12 === void 0 ? void 0 : _12.Is_Correct;
            (_13 = _this6.answerFourIdCtrl) === null || _13 === void 0 ? void 0 : _13.setValue((_14 = response.MCQ_Choices[3]) === null || _14 === void 0 ? void 0 : _14.Id);
            (_15 = _this6.answerFourCtrl) === null || _15 === void 0 ? void 0 : _15.setValue((_16 = response.MCQ_Choices[3]) === null || _16 === void 0 ? void 0 : _16.Text);
            (_17 = _this6.answerFourImageCtrl) === null || _17 === void 0 ? void 0 : _17.setValue(((_18 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[3]) === null || _18 === void 0 ? void 0 : _18.Image) != null ? "mozakretyapi" + ((_19 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[3]) === null || _19 === void 0 ? void 0 : _19.Image) : null); //  this.answerFourImageCtrl?.setValue(response.MCQ_Choices[3].Image);
            //  this.answerFourFile.FileAsBase64 = response.MCQ_Choices[3].Image;

            (_20 = _this6.answerFourIsCorrectCtrl) === null || _20 === void 0 ? void 0 : _20.setValue((_21 = response.MCQ_Choices[3]) === null || _21 === void 0 ? void 0 : _21.Is_Correct);
            _this6.fourIsCorrect = (_22 = response.MCQ_Choices[3]) === null || _22 === void 0 ? void 0 : _22.Is_Correct;
          }
        }

        _this6.spinner.hide();
      });
    }
  }, {
    key: "removeExamQuestion",
    value: function removeExamQuestion(questionId) {
      var _this7 = this;

      var confirmed = confirm("هل انت متأكد من الحذف"); // console.log('questionId', questionId);

      if (confirmed) {
        this.spinner.show();
        this.examService.deleteExamQuestion(questionId).subscribe(function (response) {
          // console.log('deleteResponse', response);
          if (response.returnString === "Done") {
            var toDeleteIndex = _this7.questionsInGrid.findIndex(function (q) {
              return q.Id == questionId;
            });

            _this7.questionsInGrid.splice(toDeleteIndex, 1);
          } else _this7.toastr.info(response.returnString);

          _this7.spinner.hide();
        });
      }
    }
  }, {
    key: "importFile",
    value: function importFile(event) {
      var _this8 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this8.questionImageCtrl.setValue(file.FileAsBase64);

          _this8.questionFile = file;
        }, 100);
      });
    }
  }, {
    key: "importOneFile",
    value: function importOneFile(event) {
      var _this9 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this9.answerOneImageCtrl.setValue(file.FileAsBase64);

          _this9.answerOneFile = file;
        }, 100);
      });
    }
  }, {
    key: "importTwoFile",
    value: function importTwoFile(event) {
      var _this10 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this10.answerTwoImageCtrl.setValue(file.FileAsBase64);

          _this10.answerTwoFile = file;
        }, 100);
      });
    }
  }, {
    key: "importThreeFile",
    value: function importThreeFile(event) {
      var _this11 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this11.answerThreeImageCtrl.setValue(file.FileAsBase64);

          _this11.answerThreeFile = file;
        }, 100);
      });
    }
  }, {
    key: "importFourFile",
    value: function importFourFile(event) {
      var _this12 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this12.answerFourImageCtrl.setValue(file.FileAsBase64);

          _this12.answerFourFile = file;
        }, 100);
      });
    }
  }, {
    key: "perfectAnswerAttach",
    value: function perfectAnswerAttach(event) {
      var _this13 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this13.perfect_answer_attachCtrl.setValue(file.FileAsBase64);

          _this13.perfectAnswerAttach_preview = file;
        }, 1000);
      });
    }
  }, {
    key: "onSelectCorrect",
    value: function onSelectCorrect(answerNumber) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;

      console.log("answer is Correct", answerNumber);

      if (answerNumber === 0) {
        (_a = this.answerOneIsCorrectCtrl) === null || _a === void 0 ? void 0 : _a.setValue(0);
        (_b = this.answerTwoIsCorrectCtrl) === null || _b === void 0 ? void 0 : _b.setValue(null);
        (_c = this.answerThreeIsCorrectCtrl) === null || _c === void 0 ? void 0 : _c.setValue(null);
        (_d = this.answerFourIsCorrectCtrl) === null || _d === void 0 ? void 0 : _d.setValue(null);
      }

      if (answerNumber === 1) {
        (_e = this.answerOneIsCorrectCtrl) === null || _e === void 0 ? void 0 : _e.setValue(null);
        (_f = this.answerTwoIsCorrectCtrl) === null || _f === void 0 ? void 0 : _f.setValue(1);
        (_g = this.answerThreeIsCorrectCtrl) === null || _g === void 0 ? void 0 : _g.setValue(null);
        (_h = this.answerFourIsCorrectCtrl) === null || _h === void 0 ? void 0 : _h.setValue(null);
      }

      if (answerNumber === 2) {
        (_j = this.answerOneIsCorrectCtrl) === null || _j === void 0 ? void 0 : _j.setValue(null);
        (_k = this.answerTwoIsCorrectCtrl) === null || _k === void 0 ? void 0 : _k.setValue(null);
        (_l = this.answerThreeIsCorrectCtrl) === null || _l === void 0 ? void 0 : _l.setValue(2);
        (_m = this.answerFourIsCorrectCtrl) === null || _m === void 0 ? void 0 : _m.setValue(null);
      }

      if (answerNumber === 3) {
        (_o = this.answerOneIsCorrectCtrl) === null || _o === void 0 ? void 0 : _o.setValue(null);
        (_p = this.answerTwoIsCorrectCtrl) === null || _p === void 0 ? void 0 : _p.setValue(null);
        (_q = this.answerThreeIsCorrectCtrl) === null || _q === void 0 ? void 0 : _q.setValue(null);
        (_r = this.answerFourIsCorrectCtrl) === null || _r === void 0 ? void 0 : _r.setValue(3);
      }
    }
  }, {
    key: "resetFileInputs",
    value: function resetFileInputs() {
      var FileInputs = document.querySelectorAll('input[type="file"]');
      FileInputs.forEach(function (input) {
        input.value = null;
      });
      this.questionFile = null;
      this.answerOneFile = null;
      this.answerTwoFile = null;
      this.answerThreeFile = null;
      this.answerFourFile = null;
    }
  }]);

  return AddSubQuestionComponent;
}();

AddSubQuestionComponent.ɵfac = function AddSubQuestionComponent_Factory(t) {
  return new (t || AddSubQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_3__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
};

AddSubQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddSubQuestionComponent,
  selectors: [["app-add-sub-question"]],
  decls: 97,
  vars: 55,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], [1, "row"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "mainQuestion"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "questionTypeId"], [3, "value"], ["matInput", "", "type", "number", "formControlName", "questionMark"], [1, "col-md-8", "col-12"], ["matInput", "", "type", "text", "formControlName", "exam_question_text"], [1, "col-12"], ["type", "file", "name", "questionImage", "accept", "image/*", 1, "form-control", "font-dro", "clearInputs", 3, "change"], [1, "question-img"], ["formControlName", "remove_image", "class", "remove_image", 3, "value", 4, "ngIf"], [1, "img-fluid", 3, "src"], ["matInput", "", "type", "text", "formControlName", "questionPerfectAnswer"], ["type", "file", "accept", "xlsx,.xls,image/*,audio/*,.pdf", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["width", "100%", 1, "border-0", "img-fluid", 3, "src"], ["class", "row", 4, "ngIf"], ["mat-raised-button", "", "id", "examQuestionsButton", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "id", "editQuestionButton", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "col-md-12"], [1, "full-wid-table", 2, "overflow", "hidden !important"], ["id", "sotbmod", 1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], ["id", "addedExamQuestionsHolder"], ["id", "ExamQuestion-2626853", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "mat-dialog-close", "", 1, "btn-danger"], [1, "text-danger"], [4, "ngIf"], ["formControlName", "remove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerOneIsCorrect"], [3, "value", "checked", "click"], ["matInput", "", "type", "text", "formControlName", "answerOne"], ["for", "radio-0"], [1, "icon", "icon_radio"], ["type", "file", "accept", "image/*", "name", "answerOneImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerOneRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerTwoIsCorrect"], ["matInput", "", "type", "text", "formControlName", "answerTwo"], ["type", "file", "accept", "image/*", "name", "answerTwoImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerTwoRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerThreeIsCorrect"], ["matInput", "", "type", "text", "formControlName", "answerThree"], ["type", "file", "accept", "image/*", "name", "answerThreeImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerThreeRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerFourIsCorrect"], ["matInput", "", "type", "text", "formControlName", "answerFour"], ["type", "file", "accept", "image/*", "name", "answerFourImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerFourRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerOneRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerTwoRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerThreeRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerFourRemove_image", 1, "remove_image", 3, "value"], ["mat-raised-button", "", "id", "examQuestionsButton", 1, "btn", "btn-primary", 3, "click"], ["mat-raised-button", "", "id", "editQuestionButton", 1, "btn", "btn-primary", 3, "click"], ["id", "ExamQuestion-2626853"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "warn", 3, "click"]],
  template: function AddSubQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddSubQuestionComponent_mat_hint_12_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, AddSubQuestionComponent_mat_hint_28_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, AddSubQuestionComponent_mat_hint_35_Template, 3, 2, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_Template_input_change_48_listener($event) {
        return ctx.importFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, AddSubQuestionComponent_mat_checkbox_51_Template, 2, 1, "mat-checkbox", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, AddSubQuestionComponent_mat_hint_59_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_Template_input_change_66_listener($event) {
        return ctx.perfectAnswerAttach($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "iframe", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "safe");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, AddSubQuestionComponent_ng_container_72_Template, 109, 52, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "mat-card-actions", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, AddSubQuestionComponent_button_74_Template, 3, 3, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, AddSubQuestionComponent_button_75_Template, 3, 3, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "table", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](88, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "\xAD");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "tbody", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](92, AddSubQuestionComponent_tr_92_Template, 14, 3, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](96, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 27, "labels.addSubQuestion"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 29, "labels.mainQuestion"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.mainQuestionCtrl.invalid && (ctx.mainQuestionCtrl.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 31, "labels.QuestionType"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 33, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 35, "labels.Article"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 37, "labels.Mcq"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.questionTypeIdCtrl == null ? null : ctx.questionTypeIdCtrl.invalid) && ((ctx.questionTypeIdCtrl == null ? null : ctx.questionTypeIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 39, "labels.QuestionMark"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionMarkCtrl.invalid && (ctx.questionMarkCtrl.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 41, "labels.question_ar_text"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 43, "labels.QuestionImage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionImageCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.questionImageCtrl == null ? null : ctx.questionImageCtrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](57, 45, "labels.perfect_answer"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionPerfectAnswerCtrl.invalid && (ctx.questionPerfectAnswerCtrl.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 47, "labels.perfectAnswerAttach"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](70, 49, ctx.perfect_answer_attachCtrl.value), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.questionTypeIdCtrl == null ? null : ctx.questionTypeIdCtrl.value) == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 51, "labels.question_ar_text"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](88, 53, "labels.QuestionType"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.questionsInGrid);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogClose, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckbox, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipe],
  styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 80vh;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n\n.question-img[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  max-width: 100% !important;\n  max-height: 156px !important;\n}\n\n.remove_image[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdWItcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGIiwiZmlsZSI6ImFkZC1zdWItcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5xdWVzdGlvbi1pbWcge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAxNTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVtb3ZlX2ltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 49544:
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams/exam-preview/exam-preview.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamPreviewComponent": function() { return /* binding */ ExamPreviewComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/pipes/slice-exam-pic.pipe */ 51033);
















function ExamPreviewComponent_ng_container_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 2, "labels.TotalMark"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.examTotalMark);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "sliceExamPic");
  }

  if (rf & 2) {
    var Question_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "/mozakretyapi", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, Question_r7.QuestionDetails == null ? null : Question_r7.QuestionDetails.questionAttach), "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "sliceExamPic");
  }

  if (rf & 2) {
    var mcq_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "/mozakretyapi", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, mcq_r13.MCQAttach), "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-radio-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_img_4_Template, 2, 3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var mcq_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", mcq_r13.Id)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mcq_r13.MCQText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mcq_r13.MCQAttach);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_img_3_Template, 2, 3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-radio-group", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_div_7_Template, 5, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var Question_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", i_r8 + 1, ") ", Question_r7.QuestionDetails == null ? null : Question_r7.QuestionDetails.questionText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", Question_r7.QuestionDetails == null ? null : Question_r7.QuestionDetails.questionAttach);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "question-", Question_r7.QuestionDetails == null ? null : Question_r7.QuestionDetails.questionId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", Question_r7.MCQ);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_form_4_Template, 10, 5, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var head_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", head_r5.HeadName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", head_r5 == null ? null : head_r5.Questions);
  }
}

function ExamPreviewComponent_ng_container_0_mat_tab_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamPreviewComponent_ng_container_0_mat_tab_18_mat_card_1_Template, 5, 2, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("group-", group_r3.GroupId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", group_r3.GroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r3.Heads);
  }
}

function ExamPreviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExamPreviewComponent_ng_container_0_ng_container_12_Template, 11, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ExamPreviewComponent_ng_container_0_mat_tab_18_Template, 2, 5, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.ExamName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.TeacherName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.SubjectName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isSolved);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.ExamGroups);
  }
}

var ExamPreviewComponent = /*#__PURE__*/function () {
  function ExamPreviewComponent( //  private studentServ: StudentService,
  toastr, route, router, spinner, dialog, examsService) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamPreviewComponent);

    this.toastr = toastr;
    this.route = route;
    this.router = router;
    this.spinner = spinner;
    this.dialog = dialog;
    this.examsService = examsService; //Exams Lists

    this.ExamDetails = [];
    this.ExamGroups = null;
    this.solvedQuestionNumberArr = []; // previously Solved Question

    this.AnswerdQuestionsNumber = []; // Current Answerd Question

    this.IsAvaliable = true;
    this.exam_period_minute = 0; // Solved Exam

    this.isSolved = false;
    this.route.paramMap.subscribe(function (params) {
      _this.examId = params.get("examId");
      console.log("this.examId", _this.examId);
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamPreviewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.returnStudentExam(this.examId);
    }
  }, {
    key: "returnStudentExam",
    value: function returnStudentExam(examId) {
      var _this2 = this;

      this.spinner.show();
      this.examsService.getExamPreview(examId).subscribe(function (res) {
        console.log("exam: ", res);

        if (res.returnValue === -5) {
          _this2.spinner.hide(); // this.toastr.warning("تم حل الامتحان مسبقاً");


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
    }
  }]);

  return ExamPreviewComponent;
}();

ExamPreviewComponent.ɵfac = function ExamPreviewComponent_Factory(t) {
  return new (t || ExamPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_2__.ExamsService));
};

ExamPreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ExamPreviewComponent,
  selectors: [["app-exam-preview"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "row", "exam-container"], [1, "col-md-3", "col-12"], [1, "row"], [1, "col-12"], ["role", "alert", 1, "alert", "bg-light-primary", "mb-2"], [1, "badge", "bg-primary", "mb-1", "mr-2"], [1, "col-md-9", "col-12"], [3, "label", "class", 4, "ngFor", "ngForOf"], ["align", "end"], [1, "card", "card-inverse", "bg-info"], [1, "media"], [1, "media-body", "text-left"], [1, "card-text"], [3, "label"], [4, "ngFor", "ngForOf"], ["class", "examimage", 3, "src", 4, "ngIf"], [1, "exam-radio-group", 3, "id"], ["choice", ""], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "examimage", 3, "src"], [3, "value", "disabled"]],
  template: function ExamPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExamPreviewComponent_ng_container_0_Template, 20, 5, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ExamGroups);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_3__.SliceExamPicPipe],
  styles: [".alert.bg-light-primary[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LmJnLWxpZ2h0LXByaW1hcnkgLmJhZGdlIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 71736:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams/exams-custome-points/exams-custome-points.component.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsCustomePointsComponent": function() { return /* binding */ ExamsCustomePointsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_dashboard_services_setup_points_setup_points_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/points-setup/points.service */ 33843);
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























function ExamsCustomePointsComponent_ng_container_13_mat_hint_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ExamsCustomePointsComponent_ng_container_13_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamsCustomePointsComponent_ng_container_13_mat_hint_7_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.required) || (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.minusNum));
  }
}

function ExamsCustomePointsComponent_ng_container_13_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ExamsCustomePointsComponent_ng_container_13_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamsCustomePointsComponent_ng_container_13_mat_hint_14_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.required) || (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.minusNum));
  }
}

function ExamsCustomePointsComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamsCustomePointsComponent_ng_container_13_mat_hint_7_Template, 2, 1, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamsCustomePointsComponent_ng_container_13_mat_hint_14_Template, 2, 1, "mat-hint", 9);
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

function ExamsCustomePointsComponent_mat_hint_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ExamsCustomePointsComponent_mat_hint_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamsCustomePointsComponent_mat_hint_20_span_1_Template, 2, 0, "span", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 18);
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

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "pagination-controls", 19);
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

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamsCustomePointsComponent);

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

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamsCustomePointsComponent, [{
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
  return new (t || ExamsCustomePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_dashboard_services_setup_points_setup_points_service__WEBPACK_IMPORTED_MODULE_5__.PointsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

ExamsCustomePointsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ExamsCustomePointsComponent,
  selectors: [["app-exams-custome-points"]],
  decls: 47,
  vars: 39,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/exam/index", 1, "btn", "btn-info", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [4, "ngIf"], [1, "col-lg-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "number", "formControlName", "value"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "from"], ["matInput", "", "type", "number", "formControlName", "to"], [1, "text-danger"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"]],
  template: function ExamsCustomePointsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamsCustomePointsComponent_ng_container_13_Template, 15, 8, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ExamsCustomePointsComponent_mat_hint_20_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamsCustomePointsComponent_Template_button_click_22_listener() {
        return ctx.addExamCustomPoint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "table", 12);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ExamsCustomePointsComponent_tr_44_Template, 13, 5, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ExamsCustomePointsComponent_pagination_controls_46_Template, 1, 1, "pagination-controls", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 15, "labels.ExamPoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 17, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ByQuestion.value === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 19, "labels.pointsNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.value.invalid && (ctx.FormCtrls.value.touched || ctx.Submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
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
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcy1jdXN0b21lLXBvaW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 60198:
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/exams/exams-index/exams-index.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsIndexComponent": function() { return /* binding */ ExamsIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-stage-dropdown/educational-stage-dropdown.component */ 83722);
/* harmony import */ var _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-year-by-stage-dropdown/educational-year-dropdown.component */ 70414);
/* harmony import */ var _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/cources-by-year-dropdown/cources-dropdown.component */ 74889);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





























function ExamsIndexComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ExamsIndexComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r18 + 1);
  }
}

function ExamsIndexComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function ExamsIndexComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r19.Name);
  }
}

function ExamsIndexComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Subject"), " ");
  }
}

function ExamsIndexComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r20.Subject);
  }
}

function ExamsIndexComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Year"), " ");
  }
}

function ExamsIndexComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ele_r21.Year, " ");
  }
}

function ExamsIndexComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Teacher"), " ");
  }
}

function ExamsIndexComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r22.Teacher);
  }
}

function ExamsIndexComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.ThePublish"), " ");
  }
}

function ExamsIndexComponent_td_57_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "labels.Published"), " ");
  }
}

function ExamsIndexComponent_td_57_span_2_Template(rf, ctx) {
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

function ExamsIndexComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ExamsIndexComponent_td_57_span_1_Template, 4, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ExamsIndexComponent_td_57_span_2_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", exam_r23 == null ? null : exam_r23.IsPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(exam_r23 == null ? null : exam_r23.IsPublish));
  }
}

function ExamsIndexComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 30);
  }
}

function ExamsIndexComponent_td_60_ng_container_5_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.Publish"), " ");
  }
}

function ExamsIndexComponent_td_60_ng_container_5_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.Unpublish"), " ");
  }
}

function ExamsIndexComponent_td_60_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ExamsIndexComponent_td_60_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r38.onPublishExam(exam_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ExamsIndexComponent_td_60_ng_container_5_a_1_span_1_Template, 4, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ExamsIndexComponent_td_60_ng_container_5_a_1_span_2_Template, 4, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !exam_r26.IsPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", exam_r26.IsPublish);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    examId: a0,
    functionId: a1
  };
};

function ExamsIndexComponent_td_60_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c0, exam_r26.Id, ctx_r30.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "General.Edit"), " ");
  }
}

function ExamsIndexComponent_td_60_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ExamsIndexComponent_td_60_ng_container_5_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45);
      var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r43.openDeleateDialog(exam_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

function ExamsIndexComponent_td_60_ng_container_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/exams-setup/exam-preview/", exam_r26.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c1, ctx_r32.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "General.ExamPreview"), " ");
  }
}

var _c2 = function _c2(a0) {
  return {
    functionId: a0,
    IsTemplate: false
  };
};

function ExamsIndexComponent_td_60_ng_container_5_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/exams-setup/exam-whatsapp-msgs/", exam_r26.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c2, ctx_r33.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "whatsApp.whatsAppSettings"), " ");
  }
}

function ExamsIndexComponent_td_60_ng_container_5_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0627\u0644\u0646\u0642\u0627\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "../exam-points/", exam_r26.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c1, ctx_r34.functionId));
  }
}

function ExamsIndexComponent_td_60_ng_container_5_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/exams-setup/exam/upload-exam-student-grades/", exam_r26.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c1, ctx_r35.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "Exam.StudentGradesUploadExam"), " ");
  }
}

function ExamsIndexComponent_td_60_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ExamsIndexComponent_td_60_ng_container_5_a_1_Template, 3, 2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ExamsIndexComponent_td_60_ng_container_5_a_2_Template, 4, 7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ExamsIndexComponent_td_60_ng_container_5_a_3_Template, 4, 3, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ExamsIndexComponent_td_60_ng_container_5_a_4_Template, 4, 7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ExamsIndexComponent_td_60_ng_container_5_a_5_Template, 4, 7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ExamsIndexComponent_td_60_ng_container_5_a_6_Template, 3, 4, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ExamsIndexComponent_td_60_ng_container_5_a_7_Template, 4, 7, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r28.functionName === "publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r28.functionName === "whatsApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Grades");
  }
}

function ExamsIndexComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ExamsIndexComponent_td_60_ng_container_5_Template, 8, 7, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r14.rowFunctions);
  }
}

function ExamsIndexComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 54);
  }
}

function ExamsIndexComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 55);
  }

  if (rf & 2) {
    var row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-light-info", !(row_r50 == null ? null : row_r50.IsPublish));
  }
}

function ExamsIndexComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](37);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c3 = function _c3() {
  return [10];
};

var ExamsIndexComponent = /*#__PURE__*/function () {
  function ExamsIndexComponent(route, fb, authserv, examService, msg, spinner, dialog) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExamsIndexComponent);

    this.route = route;
    this.fb = fb;
    this.authserv = authserv;
    this.examService = examService;
    this.msg = msg;
    this.spinner = spinner;
    this.dialog = dialog; //exams: IExamViewModel[] = [];

    this.displayedColumns = ["#", "name", "subject", "year", "teacher", "publish", "actions"]; //rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "Publish"
    }, {
      functionName: "Edit"
    }, {
      functionName: "Show"
    }, {
      functionName: "whatsApp"
    }, {
      functionName: "Points"
    }, {
      functionName: "Grades"
    }, {
      functionName: "Delete"
    }];
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

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ExamsIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      this.myForm = this.fb.group({
        countryId: [""],
        stageId: [""],
        educationYearId: [""],
        subjectId: ["0"],
        teacherUserId: ["0"],
        page: [""],
        EduCompId: [this.EduCompId]
      }); // this.getAllExams(1);
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
    key: "page",
    get: function get() {
      return this.myForm.get("page");
    }
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

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "getAllExams",
    value: function getAllExams(p) {
      var _this3 = this;

      var _a, _b, _c;

      (_a = this.page) === null || _a === void 0 ? void 0 : _a.setValue(p);
      this.myForm.controls["EduCompId"].setValue(this.EduCompId);
      var data = {
        subjectId: (_b = this.subjectIdCtrl) === null || _b === void 0 ? void 0 : _b.value,
        teacherUserId: (_c = this.teacherUserIdCtrl) === null || _c === void 0 ? void 0 : _c.value,
        page: p,
        EduCompId: this.EduCompId
      }; // console.log(data);

      this.spinner.show();
      this.examService.getAllNormalExams(data).subscribe(function (response) {
        if (response) {
          //  console.log('EXAMS: ', response);
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(response.examList.reverse()); // this.exams = response.examList;

          _this3.totalItems = response.totalCount;
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "removeExam",
    value: function removeExam(exam) {
      var _this4 = this;

      this.examService.deleteExam(exam.Id).subscribe(function (response) {
        if (response.data == 1) {
          var deletedIndex = _this4.dataSource.data.findIndex(function (e) {
            return e === exam;
          });

          _this4.dataSource.data.splice(deletedIndex, 1);

          _this4.dataSource.paginator = _this4.paginator;

          _this4.msg.success("تم حذف الإمتحان");
        } else _this4.msg.warning(response.returnString);
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(exam) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: exam.Name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.removeExam(exam);
      });
    }
  }, {
    key: "onPublishExam",
    value: function onPublishExam(exam) {
      var _this6 = this;

      this.examService.publishExam(exam.Id).subscribe(function (response) {
        if (response) {
          //  console.log('published: ', response);
          var _iterator = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6.dataSource.data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var obj = _step.value;

              if (obj.Id === exam.Id) {
                obj.IsPublish = !obj.IsPublish;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this6.msg.success("Done");
        }
      });
    }
  }]);

  return ExamsIndexComponent;
}();

ExamsIndexComponent.ɵfac = function ExamsIndexComponent_Factory(t) {
  return new (t || ExamsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_5__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
};

ExamsIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ExamsIndexComponent,
  selectors: [["app-exams-index"]],
  viewQuery: function ExamsIndexComponent_Query(rf, ctx) {
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
  decls: 65,
  vars: 31,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "../add-exam", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "fa", "fa-plus-square"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "submitted", "control"], [3, "submitted", "control", "stageControl"], [3, "submitted", "control", "yearControl"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "subject"], ["matColumnDef", "year"], ["matColumnDef", "teacher"], ["matColumnDef", "publish"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "bg-light-info", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "success", "ml-1"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../add-exam", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-upload", "font-medium-3", "mr-2"], [1, "ft-download", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "routerLink", "../add-exam", 3, "queryParams"], [1, "fa", "fa-edit", "font-medium-3", "mr-2"], [1, "fa", "fa-times", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams"], [1, "fa", "fa-video-camera", "font-medium-3", "mr-2"], [1, "fa", "fa-whatsapp", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams"], [1, "fa", "fa-gift", "font-medium-3", "mr-2"], [1, "fa", "fa-upload", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function ExamsIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ExamsIndexComponent_Template_a_click_11_listener() {
        return ctx.getAllExams(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-card-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "app-educational-stage-dropdown", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "educational-year-by-stage-dropdown", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "cources-by-year-dropdown", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function ExamsIndexComponent_Template_input_keyup_36_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](40, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ExamsIndexComponent_th_41_Template, 2, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ExamsIndexComponent_td_42_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](43, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, ExamsIndexComponent_th_44_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, ExamsIndexComponent_td_45_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](46, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, ExamsIndexComponent_th_47_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ExamsIndexComponent_td_48_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](49, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, ExamsIndexComponent_th_50_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, ExamsIndexComponent_td_51_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](52, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, ExamsIndexComponent_th_53_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, ExamsIndexComponent_td_54_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](55, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, ExamsIndexComponent_th_56_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, ExamsIndexComponent_td_57_Template, 3, 2, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](58, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, ExamsIndexComponent_th_59_Template, 1, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, ExamsIndexComponent_td_60_Template, 6, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, ExamsIndexComponent_tr_61_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, ExamsIndexComponent_tr_62_Template, 1, 2, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, ExamsIndexComponent_tr_63_Template, 3, 1, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "mat-paginator", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function ExamsIndexComponent_Template_mat_paginator_page_64_listener($event) {
        return ctx.getAllExams($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 20, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](28, _c1, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 22, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 24, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("submitted", false)("control", ctx.stageIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("submitted", false)("control", ctx.educationYearIdCtrl)("stageControl", ctx.stageIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("submitted", false)("control", ctx.subjectIdCtrl)("yearControl", ctx.educationYearIdCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 26, "Navbar.Exams"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](30, _c3))("length", ctx.totalItems)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.EducationalStageDropdownComponent, _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.EducationalYearByStageDropdownComponent, _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.CourcesByYearDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcy1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 74047:
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/questions-banck/add-question/add-question.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddQuestionComponent": function() { return /* binding */ AddQuestionComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/all-cources-dropdown/all-cources-dropdown.component */ 70526);
/* harmony import */ var _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/units-dropdown/units-dropdown.component */ 24181);
/* harmony import */ var _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/lessons-dropdown/lessons-dropdown.component */ 75990);
/* harmony import */ var _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/topics-dropdown/topics-dropdown.component */ 3544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/pipes/safe.pipe */ 88246);





























function AddQuestionComponent_mat_hint_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddQuestionComponent_mat_hint_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_36_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.question_type_id == null ? null : ctx_r0.question_type_id.errors == null ? null : ctx_r0.question_type_id.errors.required);
  }
}

function AddQuestionComponent_mat_hint_66_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddQuestionComponent_mat_hint_66_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddQuestionComponent_mat_hint_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_66_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddQuestionComponent_mat_hint_66_span_2_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.mark == null ? null : ctx_r1.mark.errors == null ? null : ctx_r1.mark.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.mark == null ? null : ctx_r1.mark.errors == null ? null : ctx_r1.mark.errors.minusNum);
  }
}

function AddQuestionComponent_mat_hint_74_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddQuestionComponent_mat_hint_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_74_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r2.question_ar_text == null ? null : ctx_r2.question_ar_text.errors == null ? null : ctx_r2.question_ar_text.errors.required) || (ctx_r2.question_ar_text == null ? null : ctx_r2.question_ar_text.errors == null ? null : ctx_r2.question_ar_text.errors.whiteSpace));
  }
}

function AddQuestionComponent_mat_hint_92_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddQuestionComponent_mat_hint_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddQuestionComponent_mat_hint_92_span_1_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r3.perfect_answer == null ? null : ctx_r3.perfect_answer.errors == null ? null : ctx_r3.perfect_answer.errors.required) || (ctx_r3.perfect_answer == null ? null : ctx_r3.perfect_answer.errors == null ? null : ctx_r3.perfect_answer.errors.whiteSpace));
  }
}

function AddQuestionComponent_ng_container_106_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-card-content", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function AddQuestionComponent_ng_container_106_mat_card_1_Template_input_change_18_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      var questionIndex_r14 = restoredCtx.index;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r15.onChange($event, questionIndex_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var question_r13 = ctx.$implicit;
    var questionIndex_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 9, "labels.AnswerNumber"), "(", questionIndex_r14 + 1, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroupName", questionIndex_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 11, "labels.AnswerText"), "(", questionIndex_r14 + 1, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 13, "labels.AnswerPic"), " (", questionIndex_r14 + 1, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", question_r13.value == null ? null : question_r13.value.ChoiceAttachPath, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}

function AddQuestionComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddQuestionComponent_ng_container_106_mat_card_1_Template, 24, 15, "mat-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-radio-group", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r4.choices.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 10, "labels.ChooseCorrectAnswer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 12, "labels.AnswerOne"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 14, "labels.AnswerTwo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 16, "labels.AnswerThree"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](23, 18, "labels.AnswerFour"), " ");
  }
}

function AddQuestionComponent_button_108_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddQuestionComponent_button_108_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r17.addUpdateQuestion();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function AddQuestionComponent_button_109_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddQuestionComponent_button_109_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r19.addUpdateQuestion();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1(a0) {
  return {
    previousSearch: a0
  };
};

var AddQuestionComponent = /*#__PURE__*/function () {
  function AddQuestionComponent(router, route, fb, toastr, spinner, authService, examsService, datePipe, uploadFileService) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddQuestionComponent);

    this.router = router;
    this.route = route;
    this.fb = fb;
    this.toastr = toastr;
    this.spinner = spinner;
    this.authService = authService;
    this.examsService = examsService;
    this.datePipe = datePipe;
    this.uploadFileService = uploadFileService;
    this.questionID = null;
    this.submitted = false; //Images

    this.QuestionAttachPath = null;
    this.perfectAnswerAttach_preview = null;
    this.questionsInputs = [{
      choice_id: 0,
      choice_text: null,
      thumbnailPic: null,
      ChoiceAttachPath: null,
      //  IsCorrect: false,
      remove_image: false
    }, {
      choice_id: 1,
      choice_text: null,
      thumbnailPic: null,
      ChoiceAttachPath: null,
      // IsCorrect: false,
      remove_image: false
    }, {
      choice_id: 2,
      choice_text: null,
      thumbnailPic: null,
      ChoiceAttachPath: null,
      // IsCorrect: false,
      remove_image: false
    }, {
      choice_id: 3,
      choice_text: null,
      thumbnailPic: null,
      ChoiceAttachPath: null,
      // IsCorrect: false,
      remove_image: false
    }];
    this.route.queryParamMap.subscribe(function (params) {
      var _a;

      _this.questionID = params.get("questionId");
      _this.previousSearch = (_a = _this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.previousSearch;
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res;
          }
        });
      }

      if (_this.questionID) {
        _this.getQuestionByID(_this.questionID);
      }
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AddQuestionComponent, [{
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
    key: "Id",
    get: function get() {
      return this.myForm.get("questionBank.Id");
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
    key: "prefectAnswerAttach",
    get: function get() {
      return this.myForm.get("questionBank.question.prefectAnswerAttach");
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
      this.myForm = this.fb.group({
        questionBank: this.fb.group({
          Id: 0,
          main_subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
          unitId: [""],
          lessonId: [""],
          topicId: [""],
          mark: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]],
          difficulty_level: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
          question_id: [0],
          question: this.fb.group({
            id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            question_type_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            // teacherUserId: [""],
            question_ar_text: [null],
            perfect_answer: [""],
            prefectAnswerAttach: [null],
            remove_image: [false],
            thumbnailPic: [null]
          })
        }),
        picked_choice_index: [-1],
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
      });
      this.authService.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

        if (res.QuestionId != null) {
          (_a = _this4.QuestionBankId) === null || _a === void 0 ? void 0 : _a.setValue(res.QuestionBankId);
          (_b = _this4.QuestionId) === null || _b === void 0 ? void 0 : _b.setValue(res.QuestionId);
          (_c = _this4.question_id) === null || _c === void 0 ? void 0 : _c.setValue(res.QuestionId);
          (_d = _this4.main_subject_id) === null || _d === void 0 ? void 0 : _d.setValue(res.SubjectId);
          (_e = _this4.question_type_id) === null || _e === void 0 ? void 0 : _e.setValue(res.QuestionTypeId); //  this.teacherUserId?.setValue(res.TeacherUserId);

          (_f = _this4.unitId) === null || _f === void 0 ? void 0 : _f.setValue(res.UnitId);
          (_g = _this4.lessonId) === null || _g === void 0 ? void 0 : _g.setValue(res.LessonId);
          (_h = _this4.topicId) === null || _h === void 0 ? void 0 : _h.setValue(res.TopicId);
          (_j = _this4.difficulty_level) === null || _j === void 0 ? void 0 : _j.setValue(res.DifficultyLevel);
          (_k = _this4.question_ar_text) === null || _k === void 0 ? void 0 : _k.setValue(res.QuestionTextAr);
          (_l = _this4.perfect_answer) === null || _l === void 0 ? void 0 : _l.setValue(res.PerfectAnswer);
          (_m = _this4.prefectAnswerAttach) === null || _m === void 0 ? void 0 : _m.setValue("mozakretyapi".concat(res === null || res === void 0 ? void 0 : res.PrefectAnswerAttachPath));
          _this4.perfectAnswerAttach_preview = "mozakretyapi".concat(res === null || res === void 0 ? void 0 : res.PrefectAnswerAttachPath);
          (_o = _this4.mark) === null || _o === void 0 ? void 0 : _o.setValue(res.Mark);
          (_p = _this4.thumbnailPic) === null || _p === void 0 ? void 0 : _p.setValue(res.QuestionAttachId);
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


            var _iterator = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res.Choices),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var obj = _step.value;

                if (obj.IsCorrect == true) {
                  var i = res.Choices.findIndex(function (item) {
                    return item.IsCorrect === true;
                  });
                  (_q = _this4.picked_choice_index) === null || _q === void 0 ? void 0 : _q.setValue(i);
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

      this.submitted = true; //If MCQ Validation

      if (((_a = this.question_type_id) === null || _a === void 0 ? void 0 : _a.value) == 2 || ((_b = this.question_type_id) === null || _b === void 0 ? void 0 : _b.value) == 3) {
        if (this.question_ar_text.value == null && this.thumbnailPic.value == null) {
          this.toastr.warning("Must Enter question text or picture");
          return;
        } //answer 1


        if (this.choices.value[0].thumbnailPic == null && this.choices.value[0].choice_text == null) {
          this.toastr.warning("Must Enter answer 1 text or picture");
          return;
        } //answer 2
        else if (this.choices.value[1].thumbnailPic == null && this.choices.value[1].choice_text == null) {
          this.toastr.warning("Must Enter answer 2 text or picture");
          return;
        } //answer 3
        else if (this.choices.value[2].thumbnailPic == null && this.choices.value[2].choice_text == null) {
          this.toastr.warning("Must Enter answer 3 text or picture");
          return;
        } //answer 4
        else if (this.choices.value[3].thumbnailPic == null && this.choices.value[3].choice_text == null) {
          this.toastr.warning("Must Enter answer 4 text or picture");
          return;
        } //Correct answer
        else if (this.picked_choice_index.value < 0) {
          this.toastr.warning("Must Choose Correct answer ");
          return;
        } else {
          //  console.log("Call API");
          this.spinner.show();
          this.examsService.addEditQuestion(this.EduCompId, this.myForm.value).subscribe(function (res) {
            var _a;

            if (res.questionId != null) {
              if (_this5.Id.value == 0) {
                _this5.picked_choice_index.setValue(-1);

                _this5.question_ar_text.setValue(null);

                (_a = _this5.thumbnailPic) === null || _a === void 0 ? void 0 : _a.setValue(null);
                _this5.QuestionAttachPath = null; //  this.choices.clear();
                //this.setDefaultChoises();

                _this5.choices.value.forEach(function (e) {
                  e.thumbnailPic = null;
                  e.ChoiceAttachPath = null;
                }); //  console.log("choices", this.choices);


                _this5.toastr.success("General.AddSuccessfully");
              } else _this5.toastr.success("General.UpdateSuccessfully");

              _this5.question_id.setValue(res.questionId);

              _this5.questionID = res.questionId;
            }

            _this5.spinner.hide();
          });
        }
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
      var _a;

      (_a = this.question_type_id) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(function (data) {//  this.changeValidators();
      });
    } //OnChange Question Type Change Validators

  }, {
    key: "changeValidators",
    value: function changeValidators() {
      var _a;

      var question_type = (_a = this.question_type_id) === null || _a === void 0 ? void 0 : _a.value;

      if (question_type == 1) {// this.myForm.controls['slectans'].clearValidators();
        // this.perfect_answer.setValidators([
        //   Validators.required,
        //   CustomeValidator.whiteSpace,
        // ]);
      }

      if (question_type == 2 || question_type == 3) {
        this.perfect_answer.clearValidators();
        this.perfect_answer.reset(); //  this.myForm.controls['slectans'].setValidators([]);
      }

      this.perfect_answer.updateValueAndValidity(); // this.myForm.controls['slectans'].updateValueAndValidity();
    }
  }, {
    key: "clearMainQuestionImg",
    value: function clearMainQuestionImg() {
      var _a;

      (_a = this.thumbnailPic) === null || _a === void 0 ? void 0 : _a.setValue(null);
      this.QuestionAttachPath = null;
    } // Choose Question and answer Imgs

  }, {
    key: "onChange",
    value: function onChange(event, i) {
      var _this6 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          var _a; // if main question img


          if (i == -1) {
            (_a = _this6.thumbnailPic) === null || _a === void 0 ? void 0 : _a.setValue(file);
            _this6.QuestionAttachPath = file.FileAsBase64;
          } else {
            var _iterator2 = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6.choices.value),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var obj = _step2.value;

                var objIndex = _this6.choices.value.indexOf(obj);

                if (objIndex === i) {
                  obj.thumbnailPic = file;
                  obj.ChoiceAttachPath = file.FileAsBase64;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, 100);
      });
    }
  }, {
    key: "perfectAnswerAttach",
    value: function perfectAnswerAttach(event) {
      var _this7 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this7.prefectAnswerAttach.setValue(file);

          _this7.perfectAnswerAttach_preview = file.FileAsBase64;
        }, 1000);
      });
    }
  }]);

  return AddQuestionComponent;
}();

AddQuestionComponent.ɵfac = function AddQuestionComponent_Factory(t) {
  return new (t || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_6__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_7__.UploadFileService));
};

AddQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: AddQuestionComponent,
  selectors: [["app-add-question"]],
  decls: 110,
  vars: 78,
  consts: [[1, "col-12"], [1, "content-header"], [1, "row"], ["mat-raised-button", "", "routerLink", "../index", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams", "state"], [1, "container-fluid"], [1, "form-container", 3, "formGroup"], ["formGroupName", "questionBank"], ["formGroupName", "question"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["formControlName", "question_type_id", 3, "selectionChange"], [3, "value"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-4", "col-12"], [3, "submitted", "control"], [3, "submitted", "control", "courceControl"], [3, "submitted", "control", "unitControl"], [3, "submitted", "control", "lessonControl"], ["formControlName", "difficulty_level"], ["matInput", "", "type", "number", "formControlName", "mark"], ["matInput", "", "type", "text", "formControlName", "question_ar_text"], ["type", "file", "accept", "image/*", 1, "form-control", "font-dro", "clearInputs", 3, "change"], [1, "col-md-8", "col-12"], [1, "question-img"], ["formControlName", "remove_image", 1, "remove_image", 3, "value"], [1, "img-fluid", 3, "src"], ["matInput", "", "type", "text", "formControlName", "perfect_answer"], ["type", "file", "accept", "xlsx,.xls,image/*,audio/*,.pdf", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["width", "100%", "height", "250", 1, "border-0", "img-fluid", 3, "src"], [4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "text-danger"], ["formArrayName", "choices", "class", "card bg-light", 4, "ngFor", "ngForOf"], [1, "bg-light-info"], ["formControlName", "picked_choice_index", 1, "row"], [1, "col-3"], ["formArrayName", "choices", 1, "card", "bg-light"], [3, "formGroupName"], ["matInput", "", "type", "text", "formControlName", "choice_text"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"]],
  template: function AddQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](18, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](20, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function AddQuestionComponent_Template_mat_select_selectionChange_26_listener() {
        return ctx.changeQuestionType();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, AddQuestionComponent_mat_hint_36_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "all-cources-dropdown", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "units-by-course-dropdown", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "lessons-by-unit-dropdown", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "topics-by-lesson-dropdown", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "mat-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "\u0633\u0647\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, "\u0645\u062A\u0648\u0633\u0637");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "\u0635\u0639\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](64, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](65, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, AddQuestionComponent_mat_hint_66_Template, 3, 2, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](67, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](73, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](74, AddQuestionComponent_mat_hint_74_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](79, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function AddQuestionComponent_Template_input_change_80_listener($event) {
        return ctx.onChange($event, -1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "mat-checkbox", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, " Remove Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](85, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](90, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](91, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](92, AddQuestionComponent_mat_hint_92_Template, 2, 1, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](98, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function AddQuestionComponent_Template_input_change_99_listener($event) {
        return ctx.perfectAnswerAttach($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](102, "iframe", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](103, "safe");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](105, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](106, AddQuestionComponent_ng_container_106_Template, 24, 20, "ng-container", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "mat-card-actions", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](108, AddQuestionComponent_button_108_Template, 3, 3, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](109, AddQuestionComponent_button_109_Template, 3, 3, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 44, "Navbar.QuestionsBank"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 46, "labels.AddQuestion"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](74, _c0, ctx.functionId))("state", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](76, _c1, ctx.previousSearch));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 48, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](25, 50, "labels.QuestionType"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](29, 52, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](32, 54, "labels.Article"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](35, 56, "labels.Mcq"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx.question_type_id == null ? null : ctx.question_type_id.invalid) && ((ctx.question_type_id == null ? null : ctx.question_type_id.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", false)("control", ctx.main_subject_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", false)("control", ctx.unitId)("courceControl", ctx.main_subject_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", false)("control", ctx.lessonId)("unitControl", ctx.unitId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", false)("control", ctx.topicId)("lessonControl", ctx.lessonId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](49, 58, "labels.Level"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](53, 60, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](64, 62, "labels.QuestionMark"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mark.invalid && (ctx.mark.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](72, 64, "labels.question_ar_text"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.question_ar_text.invalid && (ctx.question_ar_text.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](79, 66, "labels.QuestionImage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx.QuestionAttachPath, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](90, 68, "labels.perfect_answer"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.perfect_answer.invalid && (ctx.perfect_answer.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](98, 70, "labels.perfectAnswerAttach"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](103, 72, ctx.perfectAnswerAttach_preview), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeResourceUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.perfectAnswerAttach_preview, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.question_type_id.value == 2 || ctx.question_type_id.value == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.QuestionId.value == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.QuestionId.value > 0);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.AllCourcesDropdownComponent, _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.UnitsByCourseDropdownComponent, _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.LessonsByUnitDropdownComponent, _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.TopicsByLessonDropdownComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArrayName, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe],
  styles: [".question-img[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  max-width: 100% !important;\n  max-height: 156px !important;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #33a7d5;\n}\n\n.remove_image[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUYiLCJmaWxlIjoiYWRkLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uLWltZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDE1NnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMzNhN2Q1O1xyXG59XHJcbi5yZW1vdmVfaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 18573:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/questions-banck/questions-index/questions-index.component.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsIndexComponent": function() { return /* binding */ QuestionsIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/cource-structure.service */ 21534);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/all-cources-dropdown/all-cources-dropdown.component */ 70526);
/* harmony import */ var _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/units-dropdown/units-dropdown.component */ 24181);
/* harmony import */ var _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/lessons-dropdown/lessons-dropdown.component */ 75990);
/* harmony import */ var _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/topics-dropdown/topics-dropdown.component */ 3544);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 89461);































function QuestionsIndexComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QuestionsIndexComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r26 + 1);
  }
}

function QuestionsIndexComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QuestionsIndexComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r27.questionID);
  }
}

function QuestionsIndexComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.question_ar_text"), " ");
  }
}

function QuestionsIndexComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r28.questionName);
  }
}

function QuestionsIndexComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.QuestionType"), " ");
  }
}

function QuestionsIndexComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ele_r29.questionTypeArabicName, " ");
  }
}

function QuestionsIndexComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.Subject"), " ");
  }
}

function QuestionsIndexComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r30.subjectName);
  }
}

function QuestionsIndexComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.Unit"), " ");
  }
}

function QuestionsIndexComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r31.unitName);
  }
}

function QuestionsIndexComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.Lesson"), " ");
  }
}

function QuestionsIndexComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r32.lessonName);
  }
}

function QuestionsIndexComponent_th_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.Topic"), " ");
  }
}

function QuestionsIndexComponent_td_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r33.topicName);
  }
}

function QuestionsIndexComponent_th_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.QuestionMark"), " ");
  }
}

function QuestionsIndexComponent_td_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r34.mark);
  }
}

function QuestionsIndexComponent_th_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.Level"), " ");
  }
}

function QuestionsIndexComponent_td_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ele_r35.levelName);
  }
}

function QuestionsIndexComponent_th_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 38);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    questionId: a0,
    functionId: a1
  };
};

var _c1 = function _c1(a0) {
  return {
    previousSearch: a0
  };
};

function QuestionsIndexComponent_td_83_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var question_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c0, question_r36.questionID, ctx_r39.functionId))("state", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](5, _c1, ctx_r39.myForm.value));
  }
}

function QuestionsIndexComponent_td_83_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuestionsIndexComponent_td_83_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44);
      var question_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r42.openDeleateDialog(question_r36);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QuestionsIndexComponent_td_83_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QuestionsIndexComponent_td_83_ng_container_1_a_1_Template, 2, 7, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QuestionsIndexComponent_td_83_ng_container_1_a_2_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", fun_r38.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", fun_r38.functionName === "Delete");
  }
}

function QuestionsIndexComponent_td_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QuestionsIndexComponent_td_83_ng_container_1_Template, 3, 2, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r22.rowFunctions);
  }
}

function QuestionsIndexComponent_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 47);
  }
}

function QuestionsIndexComponent_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 48);
  }
}

function QuestionsIndexComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](48);

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c2 = function _c2(a0) {
  return {
    functionId: a0
  };
};

var _c3 = function _c3() {
  return [10];
};

var QuestionsIndexComponent = /*#__PURE__*/function () {
  function QuestionsIndexComponent(fb, toastr, authService, examService, GeneralService, courceStructureService, spinner, dialog, route, router) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionsIndexComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.authService = authService;
    this.examService = examService;
    this.GeneralService = GeneralService;
    this.courceStructureService = courceStructureService;
    this.spinner = spinner;
    this.dialog = dialog;
    this.route = route;
    this.router = router; // rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "Edit"
    }, {
      functionName: "Delete"
    }];
    this.displayedColumns = ["#", "questionID", "questionText", "questionType", "subjectName", "unitName", "lessonName", "topicName", "mark", "levelName", "actions"];
    route.queryParamMap.subscribe(function (params) {
      var _a;

      _this.previousSearch = (_a = _this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.previousSearch;
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res;
          }
        });
      }
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionsIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        teacherUserId: [""],
        stageId: [""],
        yearId: [""],
        subjectId: [""],
        unitId: [""],
        lessonId: [""],
        topicId: [""],
        questionID: [""]
      });
      this.myForm.patchValue(this.previousSearch);
      this.EduCompId = this.authService.getEduCompId();
      this.branchId = this.authService.getBranchId();
      this.getQuestions(1);
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

        _this2.getQuestions(1);
      });
      this.authService.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
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
      this.examService.getQuestions(page, this.EduCompId, this.myForm.value).subscribe(function (res) {
        _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.returnModel);
        _this3.itemsCount = res.itemsCount;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "deleteQuestion",
    value: function deleteQuestion(question) {
      var _this4 = this;

      this.spinner.show();
      this.examService.deleteQuestion(this.EduCompId, question.questionID).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this4.dataSource.data.findIndex(function (e) {
            return e === question;
          });

          _this4.dataSource.data.splice(i, 1);

          _this4.dataSource.paginator = _this4.paginator;

          _this4.toastr.success("General.DeleteSuccessfully");
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
  return new (t || QuestionsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_5__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_7__.CourceStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router));
};

QuestionsIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: QuestionsIndexComponent,
  selectors: [["app-questions-index"]],
  viewQuery: function QuestionsIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 88,
  vars: 43,
  consts: [[1, "col-12"], [1, "content-header"], [1, "row"], ["mat-raised-button", "", "routerLink", "../add-question", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams", "state"], [1, "container-fluid"], [1, "form-container", 3, "formGroup"], [1, "col-md-4", "col-12"], [3, "submitted", "control"], [3, "submitted", "control", "courceControl"], [3, "submitted", "control", "unitControl"], [3, "submitted", "control", "lessonControl"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "questionID"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "questionID"], ["matColumnDef", "questionText"], ["matColumnDef", "questionType"], ["matColumnDef", "subjectName"], ["matColumnDef", "unitName"], ["matColumnDef", "lessonName"], ["matColumnDef", "topicName"], ["matColumnDef", "mark"], ["matColumnDef", "levelName"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], ["class", "success p-0", "matTooltip", "Edit", "routerLink", "../add-question", 3, "queryParams", "state", 4, "ngIf"], ["class", "danger p-0", "matTooltip", "Delete", 3, "click", 4, "ngIf"], ["matTooltip", "Edit", "routerLink", "../add-question", 1, "success", "p-0", 3, "queryParams", "state"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["matTooltip", "Delete", 1, "danger", "p-0", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function QuestionsIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "all-cources-dropdown", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "units-by-course-dropdown", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "lessons-by-unit-dropdown", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "topics-by-lesson-dropdown", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "mat-card-actions", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuestionsIndexComponent_Template_button_click_34_listener() {
        return ctx.getQuestions(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "mat-form-field", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function QuestionsIndexComponent_Template_input_keyup_47_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "table", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](51, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](52, QuestionsIndexComponent_th_52_Template, 2, 0, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, QuestionsIndexComponent_td_53_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](54, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, QuestionsIndexComponent_th_55_Template, 2, 0, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](56, QuestionsIndexComponent_td_56_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](57, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](58, QuestionsIndexComponent_th_58_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, QuestionsIndexComponent_td_59_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](60, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, QuestionsIndexComponent_th_61_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](62, QuestionsIndexComponent_td_62_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](63, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, QuestionsIndexComponent_th_64_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](65, QuestionsIndexComponent_td_65_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](66, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](67, QuestionsIndexComponent_th_67_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](68, QuestionsIndexComponent_td_68_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](69, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](70, QuestionsIndexComponent_th_70_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, QuestionsIndexComponent_td_71_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](72, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](73, QuestionsIndexComponent_th_73_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, QuestionsIndexComponent_td_74_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](75, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, QuestionsIndexComponent_th_76_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](77, QuestionsIndexComponent_td_77_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](78, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](79, QuestionsIndexComponent_th_79_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](80, QuestionsIndexComponent_td_80_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](81, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](82, QuestionsIndexComponent_th_82_Template, 1, 0, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](83, QuestionsIndexComponent_td_83_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](84, QuestionsIndexComponent_tr_84_Template, 1, 0, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](85, QuestionsIndexComponent_tr_85_Template, 1, 0, "tr", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](86, QuestionsIndexComponent_tr_86_Template, 3, 1, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "mat-paginator", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("page", function QuestionsIndexComponent_Template_mat_paginator_page_87_listener($event) {
        return ctx.getQuestions($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 26, "Navbar.QuestionsBank"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 28, "labels.QuestionsSearch"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](38, _c2, ctx.functionId))("state", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](40, _c1, ctx.myForm.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 30, "labels.AddQuestion"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("submitted", false)("control", ctx.FormCtrl.subjectId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("submitted", false)("control", ctx.FormCtrl.unitId)("courceControl", ctx.FormCtrl.subjectId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("submitted", false)("control", ctx.FormCtrl.lessonId)("unitControl", ctx.FormCtrl.unitId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("submitted", false)("control", ctx.FormCtrl.topicId)("lessonControl", ctx.FormCtrl.lessonId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](31, 32, "labels.QuestionID"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](36, 34, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](42, 36, "labels.Questions"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](42, _c3))("length", ctx.itemsCount)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.AllCourcesDropdownComponent, _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.UnitsByCourseDropdownComponent, _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.LessonsByUnitDropdownComponent, _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.TopicsByLessonDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbnMtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 57764:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/templates/add-template/add-template.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTemplateComponent": function() { return /* binding */ AddTemplateComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/templates.service */ 32978);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/all-cources-dropdown/all-cources-dropdown.component */ 70526);
/* harmony import */ var _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/units-dropdown/units-dropdown.component */ 24181);
/* harmony import */ var _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/lessons-dropdown/lessons-dropdown.component */ 75990);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _template_details_template_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../template-details/template-details.component */ 35388);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



























function AddTemplateComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.AddTemplate"), " ");
  }
}

function AddTemplateComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "labels.UpdateTemplate"), " - ", ctx_r1.templateName, " ");
  }
}

function AddTemplateComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var Preset_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", Preset_r13.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", Preset_r13.Name, " ");
  }
}

function AddTemplateComponent_mat_hint_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_36_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_36_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrl.Name == null ? null : ctx_r3.FormCtrl.Name.errors == null ? null : ctx_r3.FormCtrl.Name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrl.Name == null ? null : ctx_r3.FormCtrl.Name.errors == null ? null : ctx_r3.FormCtrl.Name.errors.whiteSpace);
  }
}

function AddTemplateComponent_mat_hint_43_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_43_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_43_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_43_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrl.exam_hour == null ? null : ctx_r4.FormCtrl.exam_hour.errors == null ? null : ctx_r4.FormCtrl.exam_hour.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.FormCtrl.exam_hour == null ? null : ctx_r4.FormCtrl.exam_hour.errors == null ? null : ctx_r4.FormCtrl.exam_hour.errors.minusNum);
  }
}

function AddTemplateComponent_mat_hint_50_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_50_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_50_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_50_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrl.exam_minute == null ? null : ctx_r5.FormCtrl.exam_minute.errors == null ? null : ctx_r5.FormCtrl.exam_minute.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrl.exam_minute == null ? null : ctx_r5.FormCtrl.exam_minute.errors == null ? null : ctx_r5.FormCtrl.exam_minute.errors.minusNum);
  }
}

function AddTemplateComponent_mat_hint_57_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_57_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_mat_hint_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddTemplateComponent_mat_hint_57_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddTemplateComponent_mat_hint_57_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.FormCtrl.price == null ? null : ctx_r6.FormCtrl.price.errors == null ? null : ctx_r6.FormCtrl.price.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.price == null ? null : ctx_r6.price.errors == null ? null : ctx_r6.price.errors.minusNum);
  }
}

function AddTemplateComponent_ng_container_174_mat_hint_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_ng_container_174_mat_hint_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_ng_container_174_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddTemplateComponent_ng_container_174_mat_hint_7_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddTemplateComponent_ng_container_174_mat_hint_7_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.FormCtrl.repeatableExam_Count == null ? null : ctx_r22.FormCtrl.repeatableExam_Count.errors == null ? null : ctx_r22.FormCtrl.repeatableExam_Count.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.FormCtrl.repeatableExam_Count == null ? null : ctx_r22.FormCtrl.repeatableExam_Count.errors == null ? null : ctx_r22.FormCtrl.repeatableExam_Count.errors.bigZero);
  }
}

function AddTemplateComponent_ng_container_174_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddTemplateComponent_ng_container_174_mat_hint_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddTemplateComponent_ng_container_174_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddTemplateComponent_ng_container_174_mat_hint_14_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddTemplateComponent_ng_container_174_mat_hint_14_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r23.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r23.FormCtrl.StudentRepeatExamCost.errors == null ? null : ctx_r23.FormCtrl.StudentRepeatExamCost.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r23.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r23.FormCtrl.StudentRepeatExamCost.errors == null ? null : ctx_r23.FormCtrl.StudentRepeatExamCost.errors.minusNum);
  }
}

function AddTemplateComponent_ng_container_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddTemplateComponent_ng_container_174_mat_hint_7_Template, 3, 2, "mat-hint", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AddTemplateComponent_ng_container_174_mat_hint_14_Template, 3, 2, "mat-hint", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, "labels.repeatNumbers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r10.FormCtrl.repeatableExam_Count == null ? null : ctx_r10.FormCtrl.repeatableExam_Count.invalid) && ((ctx_r10.FormCtrl.repeatableExam_Count == null ? null : ctx_r10.FormCtrl.repeatableExam_Count.touched) || ctx_r10.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 6, "labels.repeatingPrice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r10.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r10.FormCtrl.StudentRepeatExamCost.invalid) && ((ctx_r10.FormCtrl.StudentRepeatExamCost == null ? null : ctx_r10.FormCtrl.StudentRepeatExamCost.touched) || ctx_r10.submitted));
  }
}

function AddTemplateComponent_button_176_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddTemplateComponent_button_176_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r28.addUpdateTemplate();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function AddTemplateComponent_button_177_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddTemplateComponent_button_177_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r30.addUpdateTemplate();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var AddTemplateComponent = /*#__PURE__*/function () {
  function AddTemplateComponent(fb, route, toastr, spinner, authserv, TemplatesService, dialog, datePipe) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddTemplateComponent);

    this.fb = fb;
    this.route = route;
    this.toastr = toastr;
    this.spinner = spinner;
    this.authserv = authserv;
    this.TemplatesService = TemplatesService;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.Presets = [];
    this.submitted = false;
    this.templateId = null;
    route.queryParamMap.subscribe(function (params) {
      _this.templateId = params.get("templateId");
      _this.functionId = Number(params.get("functionId")); //  console.log("functionId", this.functionId);

      if (_this.templateId) {
        _this.getTemplateById();
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

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddTemplateComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        EduCompId: [this.EduCompId],
        Id: [this.templateId],
        presetTemplateId: [""],
        teacherUserId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        yearId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        stageId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        subjectId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        UnitRevisionID: [""],
        LessonID: [""],
        topicId: [""],
        Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        exam_minute: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        exam_hour: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
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
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
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
          if (res.returnValue) {
            _this3.templateId = res.returnValue;

            _this3.FormCtrl.Id.setValue(res.returnValue);

            _this3.submitted = false; // this.myForm.reset();

            _this3.toastr.success("General.AddSuccessfully"); // } else {
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
        _this4.FormCtrl.teacherUserId.setValue(res.teacherUserId);

        _this4.myForm.patchValue(res);

        _this4.FormCtrl.stageId.setValue(res.stage_id);

        _this4.FormCtrl.yearId.setValue(res.educational_year_id);

        _this4.FormCtrl.subjectId.setValue(res.subjectId);

        _this4.FormCtrl.UnitRevisionID.setValue(res.UnitRevisionID);

        _this4.FormCtrl.LessonID.setValue(res.LessonID);

        _this4.templateName = res.Name;
        var exam_minute = res.exam_period_minute % 60;
        var exam_hour = (res.exam_period_minute - exam_minute) / 60;

        _this4.FormCtrl.exam_minute.setValue(exam_minute);

        _this4.FormCtrl.exam_hour.setValue(exam_hour);

        _this4.FormCtrl.fromHour.setValue(res.fromHour);

        _this4.FormCtrl.toHour.setValue(res.toHour); // this.GetUnitsForDetails();


        _this4.spinner.hide();
      });
    }
  }, {
    key: "getPresets",
    value: function getPresets() {
      var _this5 = this;

      this.spinner.show();
      this.TemplatesService.getPresets(this.EduCompId).subscribe(function (res) {
        // console.log('getPresets', res);
        _this5.Presets = res;

        _this5.spinner.hide();
      });
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
    key: "repeatableExamValidators",
    value: function repeatableExamValidators() {
      var repeatableExam = this.FormCtrl.repeatableExam.value;

      if (repeatableExam == true) {
        this.FormCtrl.repeatableExam_Count.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]);
        this.FormCtrl.StudentRepeatExamCost.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]);
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
  return new (t || AddTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_5__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe));
};

AddTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AddTemplateComponent,
  selectors: [["app-add-template"]],
  decls: 179,
  vars: 119,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["mat-raised-button", "", "routerLink", "../", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-3", "col-12"], ["appearance", "legacy"], ["formControlName", "presetTemplateId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12"], [3, "submitted", "control"], [3, "submitted", "control", "courceControl"], [3, "submitted", "control", "unitControl"], ["matInput", "", "formControlName", "Name"], ["class", "danger", 4, "ngIf"], [1, "col-md-2", "col-12"], ["matInput", "", "type", "number", "formControlName", "exam_hour"], ["matInput", "", "type", "number", "formControlName", "exam_minute"], ["matInput", "", "type", "number", "formControlName", "price"], ["matInput", "", "type", "number", "formControlName", "priceDiscount"], ["formControlName", "priceDiscountType"], ["value", "1"], ["value", "2"], ["matInput", "", "formControlName", "Avilable_Date_From", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["matInput", "", "formControlName", "Avilable_Date_To", 3, "matDatepicker"], ["toDate", ""], ["matInput", "", "type", "time", "formControlName", "fromHour"], ["matInput", "", "type", "time", "formControlName", "toHour"], ["matInput", "", "formControlName", "ResultDate", 3, "matDatepicker"], ["resualtDate", ""], ["matInput", "", "type", "time", "formControlName", "ResultTime"], ["formControlName", "Individually_Purchased", 1, "row"], [3, "value"], ["formControlName", "repeatableExam", 1, "row"], [3, "value", "change"], ["formControlName", "SendWhatsApp", 1, "row"], ["formControlName", "CustomDiscountApplied", 1, "row"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "templateId", "subjectId"], [1, "danger"], ["matInput", "", "type", "number", "formControlName", "repeatableExam_Count"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "StudentRepeatExamCost"], [1, "text-danger"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"]],
  template: function AddTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AddTemplateComponent_span_5_Template, 3, 3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AddTemplateComponent_span_6_Template, 3, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Preset");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, AddTemplateComponent_mat_option_23_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "all-cources-dropdown", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "units-by-course-dropdown", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "lessons-by-unit-dropdown", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, AddTemplateComponent_mat_hint_36_Template, 3, 2, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, AddTemplateComponent_mat_hint_43_Template, 3, 2, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, AddTemplateComponent_mat_hint_50_Template, 3, 2, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, AddTemplateComponent_mat_hint_57_Template, 3, 2, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](62, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "mat-select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "mat-option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "\u0639\u0627\u0645");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "\u062E\u0627\u0635");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](81, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "mat-datepicker-toggle", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](84, "mat-datepicker", null, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](90, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](91, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "mat-datepicker-toggle", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](93, "mat-datepicker", null, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](99, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](100, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](105, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](111, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](112, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](113, "mat-datepicker-toggle", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](114, "mat-datepicker", null, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](120, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](121, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](125, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "mat-radio-group", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "mat-radio-button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](130, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "mat-radio-button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](134, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](138, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "mat-radio-group", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddTemplateComponent_Template_mat_radio_button_change_141_listener() {
        return ctx.repeatableExamValidators();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](143, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "mat-radio-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddTemplateComponent_Template_mat_radio_button_change_145_listener() {
        return ctx.repeatableExamValidators();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](146);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](147, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](151, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "mat-radio-group", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "mat-radio-button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](156, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "mat-radio-button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](160, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](164, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "mat-radio-group", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "mat-radio-button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](169, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "mat-radio-button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](173, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](174, AddTemplateComponent_ng_container_174_Template, 15, 8, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "mat-card-actions", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](176, AddTemplateComponent_button_176_Template, 3, 3, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](177, AddTemplateComponent_button_177_Template, 3, 3, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](178, "app-template-details", 43);
    }

    if (rf & 2) {
      var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](85);

      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](94);

      var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](115);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](117, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 63, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 65, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.Presets);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.subjectId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.UnitRevisionID)("courceControl", ctx.myForm.controls.subjectId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.LessonID)("unitControl", ctx.myForm.controls.UnitRevisionID);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 67, "labels.TemplateName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.Name == null ? null : ctx.FormCtrl.Name.invalid) && ((ctx.FormCtrl.Name == null ? null : ctx.FormCtrl.Name.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](41, 69, "labels.ExamHours"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.exam_hour == null ? null : ctx.FormCtrl.exam_hour.invalid) && ((ctx.FormCtrl.exam_hour == null ? null : ctx.FormCtrl.exam_hour.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](48, 71, "labels.ExamMinute"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.exam_minute == null ? null : ctx.FormCtrl.exam_minute.invalid) && ((ctx.FormCtrl.exam_minute == null ? null : ctx.FormCtrl.exam_minute.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](55, 73, "labels.ExamPrice"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.price == null ? null : ctx.FormCtrl.price.invalid) && ((ctx.FormCtrl.price == null ? null : ctx.FormCtrl.price.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](62, 75, "labels.Discount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](68, 77, "labels.DiscountType"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](72, 79, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](81, 81, "labels.FromDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](90, 83, "labels.ToDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](99, 85, "labels.FromTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](105, 87, "labels.ToTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](111, 89, "labels.ExamResultDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](120, 91, "labels.examResultTime"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](125, 93, "labels.SellExamOnly"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](130, 95, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](134, 97, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](138, 99, "labels.RepeatedExam"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](143, 101, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](147, 103, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](151, 105, "Navbar.SendWhatsappMsg"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](156, 107, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](160, 109, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](164, 111, "labels.CustomDiscount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](169, 113, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](173, 115, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.repeatableExam == null ? null : ctx.FormCtrl.repeatableExam.value) == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("templateId", ctx.templateId)("subjectId", ctx.FormCtrl.subjectId);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.AllCourcesDropdownComponent, _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.UnitsByCourseDropdownComponent, _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.LessonsByUnitDropdownComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepicker, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _template_details_template_details_component__WEBPACK_IMPORTED_MODULE_9__.TemplateDetailsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 35388:
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/templates/template-details/template-details.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateDetailsComponent": function() { return /* binding */ TemplateDetailsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/templates.service */ 32978);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/units-dropdown/units-dropdown.component */ 24181);
/* harmony import */ var _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/lessons-dropdown/lessons-dropdown.component */ 75990);
/* harmony import */ var _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/topics-dropdown/topics-dropdown.component */ 3544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




























function TemplateDetailsComponent_mat_hint_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function TemplateDetailsComponent_mat_hint_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " You must enter a correct value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function TemplateDetailsComponent_mat_hint_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TemplateDetailsComponent_mat_hint_18_span_1_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, TemplateDetailsComponent_mat_hint_18_span_2_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.DetailsCtrl.questionsCount.errors == null ? null : ctx_r0.DetailsCtrl.questionsCount.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.DetailsCtrl.questionsCount.errors == null ? null : ctx_r0.DetailsCtrl.questionsCount.errors.bigZero);
  }
}

function TemplateDetailsComponent_mat_hint_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function TemplateDetailsComponent_mat_hint_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " You must enter a correct value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function TemplateDetailsComponent_mat_hint_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TemplateDetailsComponent_mat_hint_40_span_1_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, TemplateDetailsComponent_mat_hint_40_span_2_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.DetailsCtrl.mark.errors == null ? null : ctx_r1.DetailsCtrl.mark.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.DetailsCtrl.mark.errors == null ? null : ctx_r1.DetailsCtrl.mark.errors.minusNum);
  }
}

function TemplateDetailsComponent_button_48_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TemplateDetailsComponent_button_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r9.addTemplateDetails();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function TemplateDetailsComponent_tr_88_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0633\u0647\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function TemplateDetailsComponent_tr_88_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0645\u062A\u0648\u0633\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function TemplateDetailsComponent_tr_88_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0635\u0639\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function TemplateDetailsComponent_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, TemplateDetailsComponent_tr_88_td_7_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, TemplateDetailsComponent_tr_88_td_8_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, TemplateDetailsComponent_tr_88_td_9_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TemplateDetailsComponent_tr_88_Template_button_click_19_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      var detail_r11 = restoredCtx.$implicit;
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r16.openDeleateDialog(detail_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var detail_r11 = ctx.$implicit;
    var i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](detail_r11 == null ? null : detail_r11.questionsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](detail_r11 == null ? null : detail_r11.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (detail_r11 == null ? null : detail_r11.questionsLevel) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (detail_r11 == null ? null : detail_r11.questionsLevel) == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (detail_r11 == null ? null : detail_r11.questionsLevel) == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](detail_r11 == null ? null : detail_r11.SubjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](detail_r11 == null ? null : detail_r11.UnitName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](detail_r11 == null ? null : detail_r11.LessonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](detail_r11 == null ? null : detail_r11.TopicName);
  }
}

function TemplateDetailsComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "pagination-controls", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function TemplateDetailsComponent_div_90_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r18.p = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("maxSize", ctx_r4.maxSize);
  }
}

var _c0 = function _c0(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2
  };
};

var TemplateDetailsComponent = /*#__PURE__*/function () {
  function TemplateDetailsComponent(fb, toastr, spinner, authserv, TemplatesService, dialog) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemplateDetailsComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.spinner = spinner;
    this.authserv = authserv;
    this.TemplatesService = TemplatesService;
    this.dialog = dialog;
    this.submitted = false;
    this.QuestionDetails = [];
    this.p = 1;
    this.maxSize = 9;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TemplateDetailsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        templateId: [this.templateId, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        questionsLevel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        mark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]],
        questionsCount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.bigZero]],
        unitRevisionID: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        lessonID: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        TopicID: [""]
      });
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      console.log("templateId", this.templateId);
      if (this.templateId > 0) this.getQuestionDetails();
    }
  }, {
    key: "DetailsCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "addTemplateDetails",
    value: function addTemplateDetails() {
      var _this = this;

      this.submitted = true;
      var valid = this.myForm.valid; // console.log(this.myForm.value);

      if (valid) {
        this.spinner.show();
        this.TemplatesService.addTemplateDetails(this.myForm.value).subscribe(function (res) {
          //     console.log("addDetails", res);
          if (res.returnValue == 1) {
            _this.submitted = false; // this.myForm.reset();

            _this.getQuestionDetails(); // this.DetailsCtrl.questionsCount.reset();
            // this.DetailsCtrl.unitRevisionID.setValue("");
            // this.DetailsCtrl.lessonID.setValue("");
            // this.DetailsCtrl.TopicID.setValue("");
            // this.DetailsCtrl.mark.reset();


            _this.toastr.success("General.AddSuccessfully");
          } else {
            _this.toastr.error(res.returnString);
          }

          _this.spinner.hide();
        });
      }
    }
  }, {
    key: "getQuestionDetails",
    value: function getQuestionDetails() {
      var _this2 = this;

      this.spinner.show();
      this.TemplatesService.getQuestionDetails(this.templateId).subscribe(function (res) {
        // console.log("getDetails", res);
        _this2.QuestionDetails = res;

        _this2.spinner.hide();
      });
    }
  }, {
    key: "DeleteDetails",
    value: function DeleteDetails(question) {
      var _this3 = this;

      this.spinner.show();
      this.TemplatesService.DeleteDetails(question.Id).subscribe(function (res) {
        //console.log('DeleteDetails', res);
        if (res.Id == question.Id) {
          var i = _this3.QuestionDetails.findIndex(function (e) {
            return e == question;
          });

          _this3.QuestionDetails.splice(i, 1);

          _this3.toastr.success("General.DeleteSuccessfully");
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(question) {
      var _this4 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: ""
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this4.DeleteDetails(question);
      });
    }
  }, {
    key: "track",
    value: function track(index, el) {
      return el.Id;
    }
  }]);

  return TemplateDetailsComponent;
}();

TemplateDetailsComponent.ɵfac = function TemplateDetailsComponent_Factory(t) {
  return new (t || TemplateDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_6__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
};

TemplateDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: TemplateDetailsComponent,
  selectors: [["app-template-details"]],
  inputs: {
    templateId: "templateId",
    subjectId: "subjectId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
  decls: 91,
  vars: 64,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "number", "formControlName", "questionsCount"], ["class", "rtl has-error pull-right", 4, "ngIf"], ["formControlName", "questionsLevel"], [3, "value"], ["matInput", "", "type", "number", "formControlName", "mark"], [3, "submitted", "control", "courceControl"], [3, "submitted", "control", "unitControl"], [3, "submitted", "control", "lessonControl"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "paginator-box", 4, "ngIf"], [1, "rtl", "has-error", "pull-right"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "text-center"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "delete questions", 3, "click"], [1, "paginator-box"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"]],
  template: function TemplateDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, TemplateDetailsComponent_mat_hint_18_Template, 3, 2, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\u0633\u0647\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "\u0645\u062A\u0648\u0633\u0637");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "\u0635\u0639\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, TemplateDetailsComponent_mat_hint_40_Template, 3, 2, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "units-by-course-dropdown", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "lessons-by-unit-dropdown", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "topics-by-lesson-dropdown", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "mat-card-actions", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, TemplateDetailsComponent_button_48_Template, 3, 3, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](66, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](78, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](81, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](84, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "\xAD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, TemplateDetailsComponent_tr_88_Template, 22, 10, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](89, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](90, TemplateDetailsComponent_div_90_Template, 2, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 32, "labels.QuestionData"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 34, "labels.questionsCount"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.DetailsCtrl.questionsCount.invalid && (ctx.DetailsCtrl.questionsCount.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 36, "labels.Level"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 38, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](38, 40, "labels.QuestionMark"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.DetailsCtrl.mark.invalid && (ctx.DetailsCtrl.mark.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.unitRevisionID)("courceControl", ctx.subjectId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.lessonID)("unitControl", ctx.myForm.controls.unitRevisionID);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.TopicID)("lessonControl", ctx.myForm.controls.lessonID);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.templateId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](55, 42, "labels.Questions"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](66, 44, "labels.questionsCount"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 46, "labels.QuestionMark"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](72, 48, "labels.Level"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](75, 50, "labels.Subject"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](78, 52, "labels.Unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](81, 54, "labels.Lesson"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](84, 56, "labels.Topic"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](89, 58, ctx.QuestionDetails, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](61, _c0, ctx.p, ctx.QuestionDetails.length)))("ngForTrackBy", ctx.track);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.QuestionDetails.length > 5);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.UnitsByCourseDropdownComponent, _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.LessonsByUnitDropdownComponent, _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.TopicsByLessonDropdownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, ngx_pagination__WEBPACK_IMPORTED_MODULE_23__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_23__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 2208:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/templates/templates-custome-points/templates-custome-points.component.ts ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesCustomePointsComponent": function() { return /* binding */ TemplatesCustomePointsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_dashboard_services_setup_points_setup_points_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/points-setup/points.service */ 33843);
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























function TemplatesCustomePointsComponent_ng_container_13_mat_hint_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TemplatesCustomePointsComponent_ng_container_13_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TemplatesCustomePointsComponent_ng_container_13_mat_hint_7_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.required) || (ctx_r4.FormCtrls.from.errors == null ? null : ctx_r4.FormCtrls.from.errors.minusNum));
  }
}

function TemplatesCustomePointsComponent_ng_container_13_mat_hint_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TemplatesCustomePointsComponent_ng_container_13_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TemplatesCustomePointsComponent_ng_container_13_mat_hint_14_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.required) || (ctx_r5.FormCtrls.to.errors == null ? null : ctx_r5.FormCtrls.to.errors.minusNum));
  }
}

function TemplatesCustomePointsComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TemplatesCustomePointsComponent_ng_container_13_mat_hint_7_Template, 2, 1, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, TemplatesCustomePointsComponent_ng_container_13_mat_hint_14_Template, 2, 1, "mat-hint", 9);
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

function TemplatesCustomePointsComponent_mat_hint_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TemplatesCustomePointsComponent_mat_hint_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TemplatesCustomePointsComponent_mat_hint_20_span_1_Template, 2, 0, "span", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 18);
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

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "pagination-controls", 19);
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

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemplatesCustomePointsComponent);

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

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TemplatesCustomePointsComponent, [{
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
  return new (t || TemplatesCustomePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_dashboard_services_setup_points_setup_points_service__WEBPACK_IMPORTED_MODULE_5__.PointsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

TemplatesCustomePointsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TemplatesCustomePointsComponent,
  selectors: [["app-templates-custome-points"]],
  decls: 47,
  vars: 39,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/templates/index", 1, "btn", "btn-info", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [4, "ngIf"], [1, "col-lg-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "number", "formControlName", "value"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "from"], ["matInput", "", "type", "number", "formControlName", "to"], [1, "text-danger"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"]],
  template: function TemplatesCustomePointsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, TemplatesCustomePointsComponent_ng_container_13_Template, 15, 8, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, TemplatesCustomePointsComponent_mat_hint_20_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TemplatesCustomePointsComponent_Template_button_click_22_listener() {
        return ctx.addTemplateCustomPoint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "table", 12);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, TemplatesCustomePointsComponent_tr_44_Template, 13, 5, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, TemplatesCustomePointsComponent_pagination_controls_46_Template, 1, 1, "pagination-controls", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 15, "labels.TemplatePoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 17, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ByQuestion.value === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 19, "labels.pointsNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.value.invalid && (ctx.FormCtrls.value.touched || ctx.Submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
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
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZXMtY3VzdG9tZS1wb2ludHMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 90815:
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/templates/templates-index/templates-index.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesIndexComponent": function() { return /* binding */ TemplatesIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/templates.service */ 32978);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-stage-dropdown/educational-stage-dropdown.component */ 83722);
/* harmony import */ var _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-year-by-stage-dropdown/educational-year-dropdown.component */ 70414);
/* harmony import */ var _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/cources-by-year-dropdown/cources-dropdown.component */ 74889);
/* harmony import */ var _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/units-dropdown/units-dropdown.component */ 24181);
/* harmony import */ var _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/lessons-dropdown/lessons-dropdown.component */ 75990);
/* harmony import */ var _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/topics-dropdown/topics-dropdown.component */ 3544);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
































function TemplatesIndexComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function TemplatesIndexComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ele_r16.Name);
  }
}

function TemplatesIndexComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.Materials"), " ");
  }
}

function TemplatesIndexComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ele_r17.Subject);
  }
}

function TemplatesIndexComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.EducationalYear"), " ");
  }
}

function TemplatesIndexComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ele_r18.Year);
  }
}

function TemplatesIndexComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.Teacher"), " ");
  }
}

function TemplatesIndexComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ele_r19.Teacher);
  }
}

function TemplatesIndexComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.ThePublish"), " ");
  }
}

function TemplatesIndexComponent_td_60_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.Published"), " ");
  }
}

function TemplatesIndexComponent_td_60_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.UnPublished"), " ");
  }
}

function TemplatesIndexComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, TemplatesIndexComponent_td_60_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, TemplatesIndexComponent_td_60_span_2_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ele_r20 == null ? null : ele_r20.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !(ele_r20 == null ? null : ele_r20.isPublish));
  }
}

function TemplatesIndexComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 32);
  }
}

function TemplatesIndexComponent_td_63_ng_container_5_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "labels.Publish"), " ");
  }
}

function TemplatesIndexComponent_td_63_ng_container_5_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "labels.Unpublish"), " ");
  }
}

function TemplatesIndexComponent_td_63_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TemplatesIndexComponent_td_63_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r37);
      var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r35.PublishDepublishTemplate(template_r23.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, TemplatesIndexComponent_td_63_ng_container_5_a_1_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, TemplatesIndexComponent_td_63_ng_container_5_a_1_span_2_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !template_r23.isPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", template_r23.isPublish);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    templateId: a0,
    functionId: a1
  };
};

function TemplatesIndexComponent_td_63_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](4, _c0, template_r23.Id, ctx_r27.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "General.Edit"), " ");
  }
}

function TemplatesIndexComponent_td_63_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TemplatesIndexComponent_td_63_ng_container_5_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r42);
      var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r40.GenerateExamFromTemplate(template_r23.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "General.ExamPreview"), " ");
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0,
    IsTemplate: true
  };
};

function TemplatesIndexComponent_td_63_ng_container_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/exams-setup/exam-whatsapp-msgs/", template_r23.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c1, ctx_r29.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "whatsApp.whatsAppSettings"), " ");
  }
}

var _c2 = function _c2(a0) {
  return {
    functionId: a0
  };
};

function TemplatesIndexComponent_td_63_ng_container_5_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u0627\u0644\u0646\u0642\u0627\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "../template-points/", template_r23.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](2, _c2, ctx_r30.functionId));
  }
}

function TemplatesIndexComponent_td_63_ng_container_5_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/exams-setup/templates/upload-exam-student-grades/", template_r23.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c2, ctx_r31.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "Exam.StudentGradesUploadTemplate"), " ");
  }
}

function TemplatesIndexComponent_td_63_ng_container_5_a_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TemplatesIndexComponent_td_63_ng_container_5_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r48);
      var template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r46.openDeleateDialog(template_r23);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

function TemplatesIndexComponent_td_63_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, TemplatesIndexComponent_td_63_ng_container_5_a_1_Template, 3, 2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, TemplatesIndexComponent_td_63_ng_container_5_a_2_Template, 4, 7, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, TemplatesIndexComponent_td_63_ng_container_5_a_3_Template, 4, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, TemplatesIndexComponent_td_63_ng_container_5_a_4_Template, 4, 7, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, TemplatesIndexComponent_td_63_ng_container_5_a_5_Template, 3, 4, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, TemplatesIndexComponent_td_63_ng_container_5_a_6_Template, 4, 7, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, TemplatesIndexComponent_td_63_ng_container_5_a_7_Template, 4, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", fun_r25.functionName === "Publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", fun_r25.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", fun_r25.functionName === "previewTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", fun_r25.functionName === "whatsApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", fun_r25.functionName === "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", fun_r25.functionName === "Grades");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", fun_r25.functionName === "Delete");
  }
}

function TemplatesIndexComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, TemplatesIndexComponent_td_63_ng_container_5_Template, 8, 7, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r12.rowFunctions);
  }
}

function TemplatesIndexComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 56);
  }
}

function TemplatesIndexComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 57);
  }

  if (rf & 2) {
    var row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("bg-light-info", !(row_r49 == null ? null : row_r49.isPublish));
  }
}

function TemplatesIndexComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](43);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c3 = function _c3() {
  return [10];
};

var TemplatesIndexComponent = /*#__PURE__*/function () {
  function TemplatesIndexComponent(toastr, dialog, route, authserv, fb, TemplatesService, spinner) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TemplatesIndexComponent);

    this.toastr = toastr;
    this.dialog = dialog;
    this.route = route;
    this.authserv = authserv;
    this.fb = fb;
    this.TemplatesService = TemplatesService;
    this.spinner = spinner;
    this.Templates = [];
    this.Teachers = [];
    this.stages = [];
    this.years = [];
    this.subjects = [];
    this.units = [];
    this.lessons = [];
    this.topics = [];
    this.submitted = false; // rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "Publish"
    }, {
      functionName: "Edit"
    }, {
      functionName: "previewTemplate"
    }, {
      functionName: "whatsApp"
    }, {
      functionName: "Points"
    }, {
      functionName: "Grades"
    }, {
      functionName: "Delete"
    }];
    this.displayedColumns = ["Name", "Teacher", "Subject", "Year", "publish", "actions"];
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res;
          }
        });
      }
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TemplatesIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.myForm = this.fb.group({
        yearId: [null],
        stageId: [null],
        subjectId: [],
        unitId: [],
        lessonId: [null],
        topicId: [null],
        page: [1]
      });
      this.getTemplates(1);
      this.myForm.valueChanges.subscribe(function (val) {
        console.log("valueChanges", val);
      });
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

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
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
      (_a = this.myForm.controls["page"]) === null || _a === void 0 ? void 0 : _a.setValue(p);
      this.TemplatesService.getTemplates(this.EduCompId, p, this.myForm.value).subscribe(function (res) {
        //  console.log('getTemplates',res);
        _this3.Templates = res.result;
        _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(res.result);
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
          var _iterator = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.Templates),
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

        _this6.toastr.success("General.DeleteSuccessfully");

        _this6.getTemplates(1);
      });
    }
  }, {
    key: "GenerateExamFromTemplate",
    value: function GenerateExamFromTemplate(templateId) {
      var _this7 = this;

      this.spinner.show();
      this.TemplatesService.GenerateExamFromTemplate(templateId).subscribe(function (res) {
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
          _this7.toastr.error(res.returnString);
        }

        _this7.spinner.hide();
      });
    }
  }]);

  return TemplatesIndexComponent;
}();

TemplatesIndexComponent.ɵfac = function TemplatesIndexComponent_Factory(t) {
  return new (t || TemplatesIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_6__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService));
};

TemplatesIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: TemplatesIndexComponent,
  selectors: [["app-templates-index"]],
  viewQuery: function TemplatesIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 68,
  vars: 40,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "../add-template", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "fa", "fa-plus-square"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search"], [1, "container-fluid"], [1, "form-container", 3, "formGroup"], [1, "col-md-4", "col-12"], [3, "submitted", "control"], [3, "submitted", "control", "stageControl"], [3, "submitted", "control", "yearControl"], [3, "submitted", "control", "courceControl"], [3, "submitted", "control", "unitControl"], [3, "submitted", "control", "lessonControl"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Subject"], ["matColumnDef", "Year"], ["matColumnDef", "Teacher"], ["matColumnDef", "publish"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "bg-light-info", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "success", "ml-1"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../add-template", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-upload", "font-medium-3", "mr-2"], [1, "ft-download", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", "routerLink", "../add-template", 3, "queryParams"], [1, "fa", "fa-edit", "mr-2"], [1, "fa", "fa-video-camera", "mr-2"], ["ngbDropdownItem", "", "target", "_blank", 3, "routerLink", "queryParams"], [1, "fa", "fa-whatsapp", "font-medium-3", "mr-2"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams"], [1, "fa", "fa-gift", "font-medium-3", "mr-2"], [1, "fa", "fa-upload", "font-medium-3", "mr-2"], [1, "fa", "fa-times", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function TemplatesIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TemplatesIndexComponent_Template_a_click_11_listener() {
        return ctx.getTemplates(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "mat-card-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "app-educational-stage-dropdown", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "educational-year-by-stage-dropdown", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "cources-by-year-dropdown", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "units-by-course-dropdown", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "lessons-by-unit-dropdown", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "topics-by-lesson-dropdown", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "mat-form-field", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function TemplatesIndexComponent_Template_input_keyup_42_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "table", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](46, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, TemplatesIndexComponent_th_47_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](48, TemplatesIndexComponent_td_48_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](49, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, TemplatesIndexComponent_th_50_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](51, TemplatesIndexComponent_td_51_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](52, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, TemplatesIndexComponent_th_53_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](54, TemplatesIndexComponent_td_54_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](55, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](56, TemplatesIndexComponent_th_56_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, TemplatesIndexComponent_td_57_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](58, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, TemplatesIndexComponent_th_59_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](60, TemplatesIndexComponent_td_60_Template, 3, 2, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](61, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, TemplatesIndexComponent_th_62_Template, 1, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, TemplatesIndexComponent_td_63_Template, 6, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, TemplatesIndexComponent_tr_64_Template, 1, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, TemplatesIndexComponent_tr_65_Template, 1, 2, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, TemplatesIndexComponent_tr_66_Template, 3, 1, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "mat-paginator", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("page", function TemplatesIndexComponent_Template_mat_paginator_page_67_listener($event) {
        return ctx.getTemplates($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 29, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](37, _c2, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 31, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](14, 33, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.stageId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.yearId)("stageControl", ctx.myForm.controls.stageId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.subjectId)("yearControl", ctx.myForm.controls.yearId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.unitId)("courceControl", ctx.myForm.controls.subjectId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.lessonId)("unitControl", ctx.myForm.controls.unitId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.myForm.controls.topicId)("lessonControl", ctx.myForm.controls.lessonId);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](37, 35, "Navbar.Templates"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](39, _c3))("length", ctx.itemsCount)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.EducationalStageDropdownComponent, _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.EducationalYearByStageDropdownComponent, _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.CourcesByYearDropdownComponent, _shared_components_dropdowns_units_dropdown_units_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.UnitsByCourseDropdownComponent, _shared_components_dropdowns_lessons_dropdown_lessons_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.LessonsByUnitDropdownComponent, _shared_components_dropdowns_topics_dropdown_topics_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.TopicsByLessonDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZXMtaW5kZXguY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 67015:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/exams-setup/upload-exam-student-grades/upload-exam-student-grades.component.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadExamStudentGradesComponent": function() { return /* binding */ UploadExamStudentGradesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/exams.service */ 68422);
/* harmony import */ var app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dashboard/services/setup/exams-setup/templates.service */ 32978);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
















function UploadExamStudentGradesComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "Exam.StudentGradesUploadExam"), " - ", ctx_r0.Exam == null ? null : ctx_r0.Exam.exam_ar_name, " ");
  }
}

function UploadExamStudentGradesComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "Exam.StudentGradesUploadTemplate"), " - ", ctx_r1.template == null ? null : ctx_r1.template.Name, " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

function UploadExamStudentGradesComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r2.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "General.Back"), " ");
  }
}

function UploadExamStudentGradesComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r3.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "General.Back"), " ");
  }
}

function UploadExamStudentGradesComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadExamStudentGradesComponent_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r8.UploadExamStudentGrades();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "General.Upload"), " ");
  }
}

function UploadExamStudentGradesComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadExamStudentGradesComponent_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r10.uploadTemplateStudentGrades();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "General.Upload"), " ");
  }
}

function UploadExamStudentGradesComponent_div_27_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var err_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", err_r13, " ");
  }
}

function UploadExamStudentGradesComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, UploadExamStudentGradesComponent_div_27_li_10_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "labels.StudentCodesFailureList"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.errors);
  }
} // import { IWhatsAppResponse } from "app/admin/models/whatsApp/whatsApp";


var UploadExamStudentGradesComponent = /*#__PURE__*/function () {
  function UploadExamStudentGradesComponent(route, toastr, ExamsService, TemplatesService, AuthService, spinner, translate) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UploadExamStudentGradesComponent);

    this.route = route;
    this.toastr = toastr;
    this.ExamsService = ExamsService;
    this.TemplatesService = TemplatesService;
    this.AuthService = AuthService;
    this.spinner = spinner;
    this.translate = translate;
    this.errorMsg = false;
    this.file = null;
    this.route.paramMap.subscribe(function (params) {
      _this.examId = Number(params.get("examId"));
      _this.templateId = Number(params.get("templateId"));
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));
    });
    console.log("examId", this.examId);
    console.log("templateId", this.templateId);
    if (this.examId > 0) this.getExamById(this.examId);
    if (this.templateId > 0) this.getTemplateById();
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadExamStudentGradesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = Number(this.AuthService.getEduCompId());
    }
  }, {
    key: "getExamById",
    value: function getExamById(examId) {
      var _this2 = this;

      this.spinner.show();
      this.ExamsService.getExamById(examId).subscribe(function (response) {
        //   console.log("getExamById: ", response);
        if (response) {
          _this2.Exam = response;
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "getTemplateById",
    value: function getTemplateById() {
      var _this3 = this;

      this.spinner.show();
      this.TemplatesService.getTemplateById(this.templateId).subscribe(function (res) {
        console.log("getTemplateById", res);
        _this3.template = res;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "UploadExamStudentGrades",
    value: function UploadExamStudentGrades() {
      var _this4 = this;

      var obj = {};
      obj.examId = this.examId;
      obj.file = this.file;
      obj.examGrade = this.Exam.examGrade; // console.log("obj: ", obj);
      // console.log("this.myForm.value: ", this.myForm.value);

      if (obj.file == null) {
        this.translate.get("UploadStudentGrades.fileErr").subscribe(function (msg) {
          _this4.toastr.warning(msg);
        });
        return;
      } else if (obj.examId == null) {
        this.translate.get("UploadStudentGrades.examIdErr").subscribe(function (msg) {
          _this4.toastr.warning(msg);
        });
        return;
      } else if (obj.examGrade == null) {
        this.translate.get("UploadStudentGrades.examGradeErr").subscribe(function (msg) {
          _this4.toastr.warning(msg);
        });
        return;
      } else {
        this.spinner.show();
        this.ExamsService.UploadExamStudentGrades(obj).subscribe(function (res) {
          if (res.isSendAllSuccess) {
            _this4.toastr.success("تم رفع الدرجات");
          } else if (!res.isSendAllSuccess) {
            _this4.toastr.error("لم يتم رفع جميع الدرجات");

            _this4.errors = res.errors;
          }

          _this4.spinner.hide();
        });
      }
    }
  }, {
    key: "uploadTemplateStudentGrades",
    value: function uploadTemplateStudentGrades() {
      var _this5 = this;

      var obj = {};
      obj.templateId = this.templateId;
      obj.file = this.file;
      obj.examGrade = this.template.TemplateGrade; // console.log("obj: ", obj);
      // console.log("this.myForm.value: ", this.myForm.value);

      if (obj.file == null) {
        this.translate.get("UploadStudentGrades.fileErr").subscribe(function (msg) {
          _this5.toastr.warning(msg);
        });
        return;
      } else if (obj.templateId == null) {
        this.translate.get("UploadStudentGrades.examIdErr").subscribe(function (msg) {
          _this5.toastr.warning(msg);
        });
        return;
      } else if (obj.examGrade == null) {
        this.translate.get("UploadStudentGrades.examGradeErr").subscribe(function (msg) {
          _this5.toastr.warning(msg);
        });
        return;
      } else {
        this.spinner.show();
        this.TemplatesService.uploadTemplateStudentGrade(obj).subscribe(function (res) {
          if (res.isSendAllSuccess) {
            _this5.toastr.success("تم رفع الدرجات");
          } else if (!res.isSendAllSuccess) {
            _this5.toastr.error("لم يتم رفع جميع الدرجات");

            _this5.errors = res.errors;
          }

          _this5.spinner.hide();
        });
      }
    } //Attache File

  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this6 = this;

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
          }; //console.log(data);

          _this6.file = data;
        };
      }
    }
  }]);

  return UploadExamStudentGradesComponent;
}();

UploadExamStudentGradesComponent.ɵfac = function UploadExamStudentGradesComponent_Factory(t) {
  return new (t || UploadExamStudentGradesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_exams_service__WEBPACK_IMPORTED_MODULE_2__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_dashboard_services_setup_exams_setup_templates_service__WEBPACK_IMPORTED_MODULE_3__.TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
};

UploadExamStudentGradesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UploadExamStudentGradesComponent,
  selectors: [["app-upload-exam-grades"]],
  decls: 28,
  vars: 11,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning bg-light-warning float-right", "routerLink", "/dashboard/exams-setup/exam/index", 3, "queryParams", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning bg-light-warning float-right", "routerLink", "/dashboard/exams-setup/templates/index", 3, "queryParams", 4, "ngIf"], [1, "form-container"], [1, "col-lg-6", "col-12"], ["accept", ".xlsx,.xls", "type", "file", 1, "form-control", 3, "change"], ["fileInput", ""], ["type", "number", "readonly", "", "disabled", "", 1, "form-control", 3, "value"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/exam/index", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", "routerLink", "/dashboard/exams-setup/templates/index", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "col-6"], [1, "list-group"], ["class", "list-group-item disabled", 4, "ngFor", "ngForOf"], [1, "list-group-item", "disabled"]],
  template: function UploadExamStudentGradesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UploadExamStudentGradesComponent_span_5_Template, 3, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UploadExamStudentGradesComponent_span_6_Template, 3, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UploadExamStudentGradesComponent_a_7_Template, 3, 6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UploadExamStudentGradesComponent_a_8_Template, 3, 6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Excel Sheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UploadExamStudentGradesComponent_Template_input_change_17_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, UploadExamStudentGradesComponent_button_25_Template, 3, 3, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, UploadExamStudentGradesComponent_button_26_Template, 3, 3, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, UploadExamStudentGradesComponent_div_27_Template, 11, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.templateId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.templateId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 9, "Exam.Grade"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.examId > 0 ? ctx.Exam == null ? null : ctx.Exam.examGrade : ctx.template == null ? null : ctx.template.TemplateGrade);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.templateId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.errors == null ? null : ctx.errors.length) > 0);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZXhhbS1zdHVkZW50LWdyYWRlcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 68422:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/services/setup/exams-setup/exams.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsService": function() { return /* binding */ ExamsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var ExamsService = /*#__PURE__*/function () {
  function ExamsService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamsService);

    this.http = http;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamsService, [{
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/QuestionsBank/").concat(EduCompId));
    }
  }, {
    key: "downloadQuestion",
    value: function downloadQuestion(Id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Exam/downloadAttachPerfectAnswer}/").concat(Id));
    }
  }, {
    key: "getQuestions",
    value: function getQuestions(page, EduCompId, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/QuestionsBankTable/").concat(page, "/").concat(EduCompId), data);
    }
  }, {
    key: "getQuestionByID",
    value: function getQuestionByID(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/get-question-bank/").concat(id));
    }
  }, {
    key: "addEditQuestion",
    value: function addEditQuestion(eduCompID, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/question-bank-add-edit/").concat(eduCompID), data);
    }
  }, {
    key: "updateQuestion",
    value: function updateQuestion(Id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/QuestionsBank/").concat(Id), data);
    }
  }, {
    key: "deleteQuestion",
    value: function deleteQuestion(eduCompID, id) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/removeQuestionBank/").concat(eduCompID, "/").concat(id), null);
    }
  }, {
    key: "getSubjectsByTeacherId",
    value: function getSubjectsByTeacherId(teacherId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/get-lectures-by-teacher-query"), teacherId);
    }
  }, {
    key: "getAllNormalExams",
    value: function getAllNormalExams(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/returnRecentlyAddedExams", obj);
    }
  }, {
    key: "publishExam",
    value: function publishExam(examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/publish-depublish-exam/").concat(examId));
    }
  }, {
    key: "deleteExam",
    value: function deleteExam(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/RemoveExam/").concat(id));
    }
  }, {
    key: "getAllCountries",
    value: function getAllCountries() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "country/return-countries");
    }
  }, {
    key: "getAllStages",
    value: function getAllStages(countryId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "stage/return-stages/").concat(countryId));
    }
  }, {
    key: "getAllEducationYears",
    value: function getAllEducationYears(stageId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "year/return-years/").concat(stageId));
    }
  }, {
    key: "getAllSubjects",
    value: function getAllSubjects(educationYearId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "subject/return-subjects/").concat(educationYearId));
    }
  }, {
    key: "getAllTeachersBySublectId",
    value: function getAllTeachersBySublectId(subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "teacher/return-teachers/").concat(subjectId));
    }
  }, {
    key: "getAllUnitsBySublectId",
    value: function getAllUnitsBySublectId(subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "unit/return-units/").concat(subjectId));
    }
  }, {
    key: "getAllLessonsByUnitId",
    value: function getAllLessonsByUnitId(unitId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "lesson/return-lesson/").concat(unitId));
    }
  }, {
    key: "getAllExamType",
    value: function getAllExamType() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/return-exam-types");
    }
  }, {
    key: "getExamById",
    value: function getExamById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/get-exam-by-id/").concat(id));
    }
  }, {
    key: "getExamDetailsById",
    value: function getExamDetailsById(examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Exam/Details/").concat(examId));
    }
  }, {
    key: "addExam",
    value: function addExam(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/add-exam", data);
    }
  }, {
    key: "getAllQuestionGroups",
    value: function getAllQuestionGroups() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/return-question-groups");
    }
  }, {
    key: "getAllQuestionHeaders",
    value: function getAllQuestionHeaders() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/return-question-heads");
    }
  }, {
    key: "addExamGroupHeader",
    value: function addExamGroupHeader(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/add-question-group-head"), data);
    }
  }, {
    key: "editExamGroupHeader",
    value: function editExamGroupHeader(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/EditQuestionHead", data);
    }
  }, {
    key: "deleteExamGroupHeader",
    value: function deleteExamGroupHeader(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/delete-exam-head-by-id/").concat(id));
    }
  }, {
    key: "getAllGroupHeaderByExamId",
    value: function getAllGroupHeaderByExamId(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/GetQuestionHeadGroupByExamId/").concat(id));
    }
  }, {
    key: "getAllQuestionsByHeadId",
    value: function getAllQuestionsByHeadId(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/GetExamQuestionsByQuestionHead/").concat(id));
    }
  }, {
    key: "addQuestion",
    value: function addQuestion(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/add-exam-questions", data);
    }
  }, {
    key: "getQuestionForEditByID",
    value: function getQuestionForEditByID(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/return-question-details/").concat(id));
    }
  }, {
    key: "editQuestion",
    value: function editQuestion(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/edit-exam-questions", data);
    }
  }, {
    key: "deleteExamQuestion",
    value: function deleteExamQuestion(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/RemoveExamQuestion/").concat(id));
    }
  }, {
    key: "getExamPoints",
    value: function getExamPoints(examId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/returnCustomPointExamByExamId/").concat(examId, "/").concat(page));
    }
  }, {
    key: "addExamPoint",
    value: function addExamPoint(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "exam/CustomExamPoint", body);
    }
  }, {
    key: "deleteExamPoint",
    value: function deleteExamPoint(pointId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "exam/DeleteCustomExamPoint/").concat(pointId));
    }
  }, {
    key: "UploadExamStudentGrades",
    value: function UploadExamStudentGrades(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Exam/postStudentsExamsGrades"), data);
    }
  }, {
    key: "getQuestionByCorrectionType",
    value: function getQuestionByCorrectionType(page, correctionStatus) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Exam/CorrectionIndexPaging/").concat(page, "/").concat(correctionStatus));
    }
  }, {
    key: "submitCorrection",
    value: function submitCorrection(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "/Exam/submitQuestionCorrection"), body);
    }
  }, {
    key: "getExamPreview",
    value: function getExamPreview(examId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "Exam/Details/" + examId);
    }
  }]);

  return ExamsService;
}();

ExamsService.ɵfac = function ExamsService_Factory(t) {
  return new (t || ExamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ExamsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ExamsService,
  factory: ExamsService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 32978:
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/exams-setup/templates.service.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesService": function() { return /* binding */ TemplatesService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var TemplatesService = /*#__PURE__*/function () {
  function TemplatesService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemplatesService);

    this.http = http;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TemplatesService, [{
    key: "getTemplates",
    value: function getTemplates(eduCompID, page, body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Admin/getTemplates/").concat(eduCompID, "/").concat(page), body);
    }
  }, {
    key: "getTemplateById",
    value: function getTemplateById(templateId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "template/returnTemplateById/").concat(templateId));
    }
  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "template/deleteTemplateById/").concat(id));
    }
  }, {
    key: "PublishDepublishTemplate",
    value: function PublishDepublishTemplate(id) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "template/PublishDepublishTemplate/").concat(id), null);
    }
  }, {
    key: "getPresets",
    value: function getPresets(eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "template/returnPresetsByEduCompId/").concat(eduCompId));
    }
  }, {
    key: "addUpdateTemplate",
    value: function addUpdateTemplate(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "template/addtemplate", data);
    }
  }, {
    key: "addTemplateDetails",
    value: function addTemplateDetails(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "AJAX/addTemplateDetail", data);
    }
  }, {
    key: "getQuestionDetails",
    value: function getQuestionDetails(templateId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AJAX/returnTemplateDetails/").concat(templateId));
    }
  }, {
    key: "DeleteDetails",
    value: function DeleteDetails(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "template/deleteTemplateDetailById/").concat(id));
    }
  }, {
    key: "uploadTemplateStudentGrade",
    value: function uploadTemplateStudentGrade(data) {
      var URL = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "Exam/postStudentsTemplatesGrades";
      return this.http.post(URL, data);
    }
  }, {
    key: "getTemplatePoints",
    value: function getTemplatePoints(templateId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "template/returnCustomPointTemplateByTemplateId/").concat(templateId, "/").concat(page));
    }
  }, {
    key: "addTemplatePoint",
    value: function addTemplatePoint(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "template/CustomTemplatePoint", body);
    }
  }, {
    key: "deleteTemplatePoint",
    value: function deleteTemplatePoint(pointId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "template/DeleteCustomTemplatePoint/").concat(pointId));
    }
  }, {
    key: "GenerateExamFromTemplate",
    value: function GenerateExamFromTemplate(templateId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "Exam/GenerateExamFromTemplate/" + templateId, null);
    }
  }]);

  return TemplatesService;
}();

TemplatesService.ɵfac = function TemplatesService_Factory(t) {
  return new (t || TemplatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

TemplatesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TemplatesService,
  factory: TemplatesService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 33843:
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/points-setup/points.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsService": function() { return /* binding */ PointsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var PointsService = /*#__PURE__*/function () {
  function PointsService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PointsService);

    this.http = http;
  } //  Points Setup


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PointsService, [{
    key: "addPoints",
    value: function addPoints(educompId, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/SetupPoints/").concat(educompId), data);
    }
  }, {
    key: "getPoints",
    value: function getPoints(teacherUserId, typeId, eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/returnPointSystemByResourceId/").concat(teacherUserId, "/").concat(typeId, "/").concat(eduCompId));
    }
  }, {
    key: "deletePoint",
    value: function deletePoint(pointId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/DeletePointSystemDetails/").concat(pointId), null);
    } //######################################################################
    // Custome
    //######################################################################
    // Lecture Custome

  }, {
    key: "addLectureCustomPoint",
    value: function addLectureCustomPoint(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/CustomMaterialPoint"), data);
    }
  }, {
    key: "getLectureCustomPoints",
    value: function getLectureCustomPoints(page, materialId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/returnCustomPointMaterialByMaterialId/").concat(materialId, "/").concat(page));
    }
  }, {
    key: "deleteLectureCustomPoint",
    value: function deleteLectureCustomPoint(pointId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/DeleteCustomMaterialPoint/").concat(pointId), null);
    } //######################################################################
    // Exam Custome

  }, {
    key: "addExamCustomPoint",
    value: function addExamCustomPoint(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "SetupPoints/CustomExamPoint", body);
    }
  }, {
    key: "getExamCustomPoints",
    value: function getExamCustomPoints(page, examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/returnCustomPointExamByExamId/").concat(examId, "/").concat(page));
    }
  }, {
    key: "deleteExamCustomPoint",
    value: function deleteExamCustomPoint(pointId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/DeleteCustomExamPoint/").concat(pointId), null);
    } //######################################################################
    // Template Custome

  }, {
    key: "addTemplateCustomPoint",
    value: function addTemplateCustomPoint(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "SetupPoints/CustomTemplatePoint", body);
    }
  }, {
    key: "getTemplateCustomPoints",
    value: function getTemplateCustomPoints(page, templateId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SetupPoints/returnCustomPointTemplateByTemplateId/").concat(templateId, "/").concat(page));
    }
  }]);

  return PointsService;
}();

PointsService.ɵfac = function PointsService_Factory(t) {
  return new (t || PointsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

PointsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PointsService,
  factory: PointsService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 19609:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/whatsapp-setup/whatsApp-setup.service.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsAppSetupService": function() { return /* binding */ WhatsAppSetupService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var WhatsAppSetupService = /*#__PURE__*/function () {
  function WhatsAppSetupService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WhatsAppSetupService);

    this.http = http;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WhatsAppSetupService, [{
    key: "sendSingularWhatsAppMsg",
    value: function sendSingularWhatsAppMsg(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/send-singular-message"), data);
    }
  }, {
    key: "sendWhatsAppMsg",
    value: function sendWhatsAppMsg(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/send-message"), data);
    }
  }, {
    key: "getAllWhatsAppMsg",
    value: function getAllWhatsAppMsg(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/GetAllWhatsAppSetups"), body);
    }
  }, {
    key: "RemoveWhatsAppMsg",
    value: function RemoveWhatsAppMsg(whatsAppId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/delete-by-Id/").concat(whatsAppId));
    }
  }, {
    key: "addEditWhatAppMsg",
    value: function addEditWhatAppMsg(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/addEditWhatAppMsg"), body);
    }
  }, {
    key: "GetAllWhatsAppVariables",
    value: function GetAllWhatsAppVariables() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/GetAllWhatsAppVariables"));
    }
  }, {
    key: "getWhatsMsgById",
    value: function getWhatsMsgById(msgId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/GetWhatsMsgById/").concat(msgId));
    }
  }, {
    key: "getAvailableWhatsAppMsgToExam",
    value: function getAvailableWhatsAppMsgToExam(EduCompId, examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/GetAvailableWhatsAppMsgToExam/").concat(EduCompId, "/").concat(examId));
    }
  }, {
    key: "addEditExamWhatssAppMsg",
    value: function addEditExamWhatssAppMsg(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/addEditExamWhatsAppMsg"), body);
    }
  }, {
    key: "getExamWhatsAppMsgs",
    value: function getExamWhatsAppMsgs(examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/GetExamWhatsAppMsgs/").concat(examId));
    }
  }, {
    key: "deleteExamWhatsAppMsgById",
    value: function deleteExamWhatsAppMsgById(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "whats-app/DeleteExamWhatsAppMsgById/").concat(id));
    }
  }]);

  return WhatsAppSetupService;
}();

WhatsAppSetupService.ɵfac = function WhatsAppSetupService_Factory(t) {
  return new (t || WhatsAppSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

WhatsAppSetupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: WhatsAppSetupService,
  factory: WhatsAppSetupService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 47784:
/*!****************************************************************!*\
  !*** ./node_modules/ngx-quill/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldIn": function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__values": function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ 6506:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUILL_CONFIG_TOKEN": function() { return /* binding */ QUILL_CONFIG_TOKEN; },
/* harmony export */   "QuillEditorBase": function() { return /* binding */ QuillEditorBase; },
/* harmony export */   "QuillEditorComponent": function() { return /* binding */ QuillEditorComponent; },
/* harmony export */   "QuillModule": function() { return /* binding */ QuillModule; },
/* harmony export */   "QuillService": function() { return /* binding */ QuillService; },
/* harmony export */   "QuillViewComponent": function() { return /* binding */ QuillViewComponent; },
/* harmony export */   "QuillViewHTMLComponent": function() { return /* binding */ QuillViewHTMLComponent; },
/* harmony export */   "defaultModules": function() { return /* binding */ defaultModules; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 10507);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 47784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);







function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var _c0 = [[["", "quill-editor-toolbar", ""]]];
var _c1 = ["[quill-editor-toolbar]"];
var defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

var getFormat = function getFormat(format, configFormat) {
  var passedFormat = format || configFormat;
  return passedFormat || 'html';
};

var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.InjectionToken('config', {
  providedIn: 'root',
  factory: function factory() {
    return {
      modules: defaultModules
    };
  }
});

var QuillService = /*#__PURE__*/function () {
  function QuillService(injector, config) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillService);

    this.config = config;
    this.count = 0;
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT);

    if (!this.config) {
      this.config = {
        modules: defaultModules
      };
    }
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillService, [{
    key: "getQuill",
    value: function getQuill() {
      var _this = this;

      this.count++;

      if (!this.Quill && this.count === 1) {
        this.$importPromise = new Promise(function (resolve) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var _a, _b, maybePatchedAddEventListener, quillImport;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
                    // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
                    // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
                    maybePatchedAddEventListener = this.document.addEventListener; // There're 2 types of Angular applications:
                    // 1) zone-full (by default)
                    // 2) zone-less
                    // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
                    // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
                    // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
                    // this means the `zone.js` is not imported.
                    // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
                    // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
                    // eslint-disable-next-line @typescript-eslint/dot-notation

                    this.document.addEventListener = this.document['__zone_symbol__addEventListener'] || this.document.addEventListener;
                    _context.next = 4;
                    return __webpack_require__.e(/*! import() */ "node_modules_quill_dist_quill_js").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 63786, 19));

                  case 4:
                    quillImport = _context.sent;
                    this.document.addEventListener = maybePatchedAddEventListener;
                    this.Quill = quillImport.default ? quillImport.default : quillImport; // Only register custom options and modules once

                    (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                      var newCustomOption = _this2.Quill.import(customOption.import);

                      newCustomOption.whitelist = customOption.whitelist;

                      _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                    });
                    (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                      var implementation = _ref.implementation,
                          path = _ref.path;

                      _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                    });
                    resolve(this.Quill);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      return this.$importPromise;
    }
  }]);

  return QuillService;
}();

QuillService.ɵfac = function QuillService_Factory(t) {
  return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](QUILL_CONFIG_TOKEN, 8));
};

QuillService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: QuillService,
  factory: QuillService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


var QuillEditorBase = /*#__PURE__*/function () {
  function QuillEditorBase(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    var _this3 = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillEditorBase);

    this.elementRef = elementRef;
    this.cd = cd;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.sanitize = false;
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */

    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit

    this.subscription = null;

    this.valueGetter = function (quillEditor, editorElement) {
      var html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = _this3.defaultEmptyValue;
      }

      var modelValue = html;
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'html') {
        if (_this3.sanitize) {
          value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_6__.SecurityContext.HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = function (range, oldRange, source) {
      var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

      if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
        return;
      }

      _this3.zone.run(function () {
        if (range === null) {
          _this3.onBlur.emit({
            editor: _this3.quillEditor,
            source: source
          });
        } else if (oldRange === null) {
          _this3.onFocus.emit({
            editor: _this3.quillEditor,
            source: source
          });
        }

        _this3.onSelectionChanged.emit({
          editor: _this3.quillEditor,
          oldRange: oldRange,
          range: range,
          source: source
        });

        if (shouldTriggerOnModelTouched) {
          _this3.onModelTouched();
        }

        _this3.cd.markForCheck();
      });
    };

    this.textChangeHandler = function (delta, oldDelta, source) {
      // only emit changes emitted by user interactions
      var text = _this3.quillEditor.getText();

      var content = _this3.quillEditor.getContents();

      var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = _this3.defaultEmptyValue;
      }

      var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
      var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

      if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
        return;
      }

      _this3.zone.run(function () {
        if (shouldTriggerOnModelChange) {
          _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
        }

        _this3.onContentChanged.emit({
          content: content,
          delta: delta,
          editor: _this3.quillEditor,
          html: html,
          oldDelta: oldDelta,
          source: source,
          text: text
        });

        _this3.cd.markForCheck();
      });
    }; // eslint-disable-next-line max-len


    this.editorChangeHandler = function (event, current, old, source) {
      // only emit changes when there's any listener
      if (!_this3.onEditorChanged.observers.length) {
        return;
      } // only emit changes emitted by user interactions


      if (event === 'text-change') {
        var text = _this3.quillEditor.getText();

        var content = _this3.quillEditor.getContents();

        var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = _this3.defaultEmptyValue;
        }

        _this3.zone.run(function () {
          _this3.onEditorChanged.emit({
            content: content,
            delta: current,
            editor: _this3.quillEditor,
            event: event,
            html: html,
            oldDelta: old,
            source: source,
            text: text
          });

          _this3.cd.markForCheck();
        });
      } else {
        _this3.zone.run(function () {
          _this3.onEditorChanged.emit({
            editor: _this3.quillEditor,
            event: event,
            oldRange: old,
            range: current,
            source: source
          });

          _this3.cd.markForCheck();
        });
      }
    };

    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT);
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillEditorBase, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this4 = this;

        var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, defaultEmptyValue, scrollingContainer, formats, format, newValue;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformServer)(this.platformId)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context2.sent;
                this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                modules = Object.assign({}, this.modules || this.service.config.modules);

                if (toolbarElem) {
                  modules.toolbar = toolbarElem;
                } else if (modules.toolbar === undefined) {
                  modules.toolbar = defaultModules.toolbar;
                }

                placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                if (placeholder === undefined) {
                  placeholder = 'Insert text here ...';
                }

                if (this.styles) {
                  Object.keys(this.styles).forEach(function (key) {
                    _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                  });
                }

                if (this.classes) {
                  this.addClasses(this.classes);
                }

                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref2) {
                  var implementation = _ref2.implementation,
                      path = _ref2.path;
                  Quill.register(path, implementation);
                });
                bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                if (!bounds) {
                  bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
                }

                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                readOnly = this.readOnly;

                if (!readOnly && this.readOnly !== false) {
                  readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                }

                defaultEmptyValue = this.defaultEmptyValue;

                if (this.service.config.hasOwnProperty('defaultEmptyValue')) {
                  defaultEmptyValue = this.service.config.defaultEmptyValue;
                }

                scrollingContainer = this.scrollingContainer;

                if (!scrollingContainer && this.scrollingContainer !== null) {
                  scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                this.zone.runOutsideAngular(function () {
                  var _a, _b, _c;

                  _this4.quillEditor = new Quill(_this4.editorElem, {
                    bounds: bounds,
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    placeholder: placeholder,
                    readOnly: readOnly,
                    defaultEmptyValue: defaultEmptyValue,
                    scrollingContainer: scrollingContainer,
                    strict: _this4.strict,
                    theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                  }); // Set optional link placeholder, Quill has no native API for it so using workaround

                  if (_this4.linkPlaceholder) {
                    var tooltip = (_b = (_a = _this4.quillEditor) === null || _a === void 0 ? void 0 : _a.theme) === null || _b === void 0 ? void 0 : _b.tooltip;
                    var input = (_c = tooltip === null || tooltip === void 0 ? void 0 : tooltip.root) === null || _c === void 0 ? void 0 : _c.querySelector('input[data-link]');

                    if (input === null || input === void 0 ? void 0 : input.dataset) {
                      input.dataset.link = _this4.linkPlaceholder;
                    }
                  }
                });

                if (this.content) {
                  format = getFormat(this.format, this.service.config.format);

                  if (format === 'text') {
                    this.quillEditor.setText(this.content, 'silent');
                  } else {
                    newValue = this.valueSetter(this.quillEditor, this.content);
                    this.quillEditor.setContents(newValue, 'silent');
                  }

                  this.quillEditor.getModule('history').clear();
                } // initialize disabled status based on this.disabled as default value


                this.setDisabledState();
                this.addQuillEventListeners(); // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
                // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.

                if (!(!this.onEditorCreated.observers.length && !this.onValidatorChanged)) {
                  _context2.next = 34;
                  break;
                }

                return _context2.abrupt("return");

              case 34:
                // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
                // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
                // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
                requestAnimationFrame(function () {
                  if (_this4.onValidatorChanged) {
                    _this4.onValidatorChanged();
                  }

                  _this4.onEditorCreated.emit(_this4.quillEditor);
                });

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.dispose();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this5 = this;

      if (!this.quillEditor) {
        return;
      }
      /* eslint-disable @typescript-eslint/dot-notation */


      if (changes.readOnly) {
        this.quillEditor.enable(!changes.readOnly.currentValue);
      }

      if (changes.placeholder) {
        this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
      }

      if (changes.defaultEmptyValue) {
        this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
      }

      if (changes.styles) {
        var currentStyling = changes.styles.currentValue;
        var previousStyling = changes.styles.previousValue;

        if (previousStyling) {
          Object.keys(previousStyling).forEach(function (key) {
            _this5.renderer.removeStyle(_this5.editorElem, key);
          });
        }

        if (currentStyling) {
          Object.keys(currentStyling).forEach(function (key) {
            _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
          });
        }
      }

      if (changes.classes) {
        var currentClasses = changes.classes.currentValue;
        var previousClasses = changes.classes.previousValue;

        if (previousClasses) {
          this.removeClasses(previousClasses);
        }

        if (currentClasses) {
          this.addClasses(currentClasses);
        }
      } // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
      // `debounceTime` operator or vice-versa remove it.


      if (changes.debounceTime) {
        this.addQuillEventListeners();
      }
      /* eslint-enable @typescript-eslint/dot-notation */

    }
  }, {
    key: "addClasses",
    value: function addClasses(classList) {
      var _this6 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this6.renderer.addClass(_this6.editorElem, c);
      });
    }
  }, {
    key: "removeClasses",
    value: function removeClasses(classList) {
      var _this7 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this7.renderer.removeClass(_this7.editorElem, c);
      });
    }
  }, {
    key: "writeValue",
    value: function writeValue(currentValue) {
      // optional fix for https://github.com/angular/angular/issues/14988
      if (this.filterNull && currentValue === null) {
        return;
      }

      this.content = currentValue;

      if (!this.quillEditor) {
        return;
      }

      var format = getFormat(this.format, this.service.config.format);
      var newValue = this.valueSetter(this.quillEditor, currentValue);

      if (this.compareValues) {
        var currentEditorValue = this.quillEditor.getContents();

        if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
          return;
        }
      }

      if (currentValue) {
        if (format === 'text') {
          this.quillEditor.setText(currentValue);
        } else {
          this.quillEditor.setContents(newValue);
        }

        return;
      }

      this.quillEditor.setText('');
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState() {
      var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
      // store initial value to set appropriate disabled status after ViewInit
      this.disabled = isDisabled;

      if (this.quillEditor) {
        if (isDisabled) {
          this.quillEditor.disable();
          this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
        } else {
          if (!this.readOnly) {
            this.quillEditor.enable();
          }

          this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
        }
      }
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onModelChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this.onValidatorChanged = fn;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.quillEditor) {
        return null;
      }

      var err = {};
      var valid = true;
      var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

      var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
      var deltaOperations = this.quillEditor.getContents().ops;
      var onlyEmptyOperation = deltaOperations && deltaOperations.length === 1 && ['\n', ''].includes(deltaOperations[0].insert);

      if (this.minLength && textLength && textLength < this.minLength) {
        err.minLengthError = {
          given: textLength,
          minLength: this.minLength
        };
        valid = false;
      }

      if (this.maxLength && textLength > this.maxLength) {
        err.maxLengthError = {
          given: textLength,
          maxLength: this.maxLength
        };
        valid = false;
      }

      if (this.required && !textLength && onlyEmptyOperation) {
        err.requiredError = {
          empty: true
        };
        valid = false;
      }

      return valid ? null : err;
    }
  }, {
    key: "addQuillEventListeners",
    value: function addQuillEventListeners() {
      var _this8 = this;

      this.dispose(); // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
      // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
      // `zone.run` when we emit an event to the parent component.

      this.zone.runOutsideAngular(function () {
        _this8.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();

        _this8.subscription.add( // mark model as touched if editor lost focus
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8.quillEditor, 'selection-change').subscribe(function (_ref3) {
          var _ref4 = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 3),
              range = _ref4[0],
              oldRange = _ref4[1],
              source = _ref4[2];

          _this8.selectionChangeHandler(range, oldRange, source);
        })); // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
        // will be invoked upon subscription and teardown.


        var textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8.quillEditor, 'text-change');
        var editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8.quillEditor, 'editor-change');

        if (typeof _this8.debounceTime === 'number') {
          textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(_this8.debounceTime));
          editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(_this8.debounceTime));
        }

        _this8.subscription.add( // update model if text changes
        textChange$.subscribe(function (_ref5) {
          var _ref6 = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, 3),
              delta = _ref6[0],
              oldDelta = _ref6[1],
              source = _ref6[2];

          _this8.textChangeHandler(delta, oldDelta, source);
        }));

        _this8.subscription.add( // triggered if selection or text changed
        editorChange$.subscribe(function (_ref7) {
          var _ref8 = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref7, 4),
              event = _ref8[0],
              current = _ref8[1],
              old = _ref8[2],
              source = _ref8[3];

          _this8.editorChangeHandler(event, current, old, source);
        }));
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.subscription !== null) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }
    }
  }], [{
    key: "normalizeClassNames",
    value: function normalizeClassNames(classes) {
      var classList = classes.trim().split(' ');
      return classList.reduce(function (prev, cur) {
        var trimmed = cur.trim();

        if (trimmed) {
          prev.push(trimmed);
        }

        return prev;
      }, []);
    }
  }]);

  return QuillEditorBase;
}();

QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
  return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: QuillEditorBase,
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    required: "required",
    formats: "formats",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    styles: "styles",
    strict: "strict",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    customOptions: "customOptions",
    customModules: "customModules",
    trackChanges: "trackChanges",
    preserveWhitespace: "preserveWhitespace",
    classes: "classes",
    trimOnValidation: "trimOnValidation",
    linkPlaceholder: "linkPlaceholder",
    compareValues: "compareValues",
    filterNull: "filterNull",
    debounceTime: "debounceTime",
    defaultEmptyValue: "defaultEmptyValue",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onEditorChanged: "onEditorChanged",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }, {
      type: QuillService
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  });
})();

var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__["default"])(QuillEditorComponent, _QuillEditorBase);

  var _super = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(QuillEditorComponent);

  function QuillEditorComponent(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillEditorComponent);

    return _super.call(this, injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service);
  }

  return (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillEditorComponent);
}(QuillEditorBase);

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
      return QuillEditorComponent;
    })
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
      return QuillEditorComponent;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0);
    }
  },
  styles: [":host{display:inline-block}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
          return QuillEditorComponent;
        })
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
          return QuillEditorComponent;
        })
      }],
      selector: 'quill-editor',
      template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n",
      styles: ["\n    :host {\n      display: inline-block;\n    }\n    "]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone]
      }]
    }, {
      type: QuillService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [QuillService]
      }]
    }];
  }, null);
})();

var QuillViewHTMLComponent = /*#__PURE__*/function () {
  function QuillViewHTMLComponent(sanitizer, service) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillViewHTMLComponent);

    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.sanitize = false;
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillViewHTMLComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.theme) {
        var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
        this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
      } else if (!this.theme) {
        var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

        this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
      }

      if (changes.content) {
        var content = changes.content.currentValue;
        this.innerHTML = this.sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
      }
    }
  }]);

  return QuillViewHTMLComponent;
}();

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService));
};

QuillViewHTMLComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    theme: "theme",
    sanitize: "sanitize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
      template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n"
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  });
})();

var QuillViewComponent = /*#__PURE__*/function () {
  function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
    var _this9 = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillViewComponent);

    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.sanitize = false;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this9.format, _this9.service.config.format);
      var content = value;

      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          if (_this9.sanitize) {
            value = _this9.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_6__.SecurityContext.HTML, value);
          }

          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }

        quillEditor.setContents(content);
      }
    };
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillViewComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this.quillEditor) {
        return;
      }

      if (changes.content) {
        this.valueSetter(this.quillEditor, changes.content.currentValue);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this10 = this;

        var Quill, modules, debug, formats, theme;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformServer)(this.platformId)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context3.sent;
                modules = Object.assign({}, this.modules || this.service.config.modules);
                modules.toolbar = false;
                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref9) {
                  var implementation = _ref9.implementation,
                      path = _ref9.path;
                  Quill.register(path, implementation);
                });
                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                this.zone.runOutsideAngular(function () {
                  _this10.quillEditor = new Quill(_this10.editorElem, {
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    readOnly: true,
                    strict: _this10.strict,
                    theme: theme
                  });
                });
                this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                if (this.content) {
                  this.valueSetter(this.quillEditor, this.content);
                } // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
                // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.


                if (this.onEditorCreated.observers.length) {
                  _context3.next = 21;
                  break;
                }

                return _context3.abrupt("return");

              case 21:
                // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
                // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
                // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
                requestAnimationFrame(function () {
                  _this10.onEditorCreated.emit(_this10.quillEditor);
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }]);

  return QuillViewComponent;
}();

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID));
};

QuillViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    sanitize: "sanitize",
    strict: "strict",
    content: "content",
    customModules: "customModules",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace"
  },
  outputs: {
    onEditorCreated: "onEditorCreated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function QuillViewComponent_Template(rf, ctx) {},
  styles: [".ql-container.ngx-quill-view{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      selector: 'quill-view',
      styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
      template: "\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
      }]
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  });
})();

var QuillModule = /*#__PURE__*/function () {
  function QuillModule() {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillModule);
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: QuillModule,
        providers: [{
          provide: QUILL_CONFIG_TOKEN,
          useValue: config
        }]
      };
    }
  }]);

  return QuillModule;
}();

QuillModule.ɵfac = function QuillModule_Factory(t) {
  return new (t || QuillModule)();
};

QuillModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: QuillModule
});
QuillModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule,
    args: [{
      declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-quill
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_pages_setup_exams-setup_exams_module_ts.js.map