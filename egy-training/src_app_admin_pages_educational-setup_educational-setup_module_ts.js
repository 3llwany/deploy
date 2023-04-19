"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["src_app_admin_pages_educational-setup_educational-setup_module_ts"],{

/***/ 82289:
/*!********************************************!*\
  !*** ./src/app/admin/models/admin/exam.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamViewModel": function() { return /* binding */ ExamViewModel; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);


var ExamViewModel = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExamViewModel() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExamViewModel);
});

/***/ }),

/***/ 8544:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/add-materials/add-exams/add-material-exam/add-material-exam.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMaterialExamComponent": function() { return /* binding */ AddMaterialExamComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../../shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/subjectMaterials.service */ 24159);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function AddMaterialExamComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", exam_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", exam_r3.exam_ar_name, " ");
  }
}

function AddMaterialExamComponent_mat_hint_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddMaterialExamComponent_mat_hint_18_span_2_Template(rf, ctx) {
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

function AddMaterialExamComponent_mat_hint_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddMaterialExamComponent_mat_hint_18_span_1_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddMaterialExamComponent_mat_hint_18_span_2_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrl.percentageToPass.errors == null ? null : ctx_r1.FormCtrl.percentageToPass.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrl.percentageToPass.errors == null ? null : ctx_r1.FormCtrl.percentageToPass.errors.minusNum);
  }
}

function AddMaterialExamComponent_ng_container_23_tr_13_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var quiz_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "labels.Exam"), " - ", quiz_r7.examDetails.exam_ar_name, " ");
  }
}

function AddMaterialExamComponent_ng_container_23_tr_13_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var quiz_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "labels.Template"), " - ", quiz_r7.TemplateDetails.Name, " ");
  }
}

function AddMaterialExamComponent_ng_container_23_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddMaterialExamComponent_ng_container_23_tr_13_td_1_Template, 3, 4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddMaterialExamComponent_ng_container_23_tr_13_td_2_Template, 3, 4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddMaterialExamComponent_ng_container_23_tr_13_Template_a_click_6_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      var quiz_r7 = restoredCtx.$implicit;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r12.openDeleateDialog(quiz_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var quiz_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", quiz_r7.examId != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", quiz_r7.templateId != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](quiz_r7 == null ? null : quiz_r7.percentageToPass);
  }
}

function AddMaterialExamComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AddMaterialExamComponent_ng_container_23_tr_13_Template, 8, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "labels.Exam"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 5, "labels.percentageToPass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.AttachedQuiz);
  }
}

var AddMaterialExamComponent = /*#__PURE__*/function () {
  function AddMaterialExamComponent(fb, route, toastr, spinner, AuthService, SubjectMaterialsService, dialog) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddMaterialExamComponent);

    this.fb = fb;
    this.route = route;
    this.toastr = toastr;
    this.spinner = spinner;
    this.AuthService = AuthService;
    this.SubjectMaterialsService = SubjectMaterialsService;
    this.dialog = dialog;
    this.submitted = false;
    this.noExamerr = false;
    this.route.queryParamMap.subscribe(function (params) {
      _this.subjectId = params.get("courseId");
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddMaterialExamComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a;

      this.EduCompId = this.AuthService.getEduCompId();
      this.myForm = this.fb.group({
        materialId: [this.materialId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        examId: [null],
        templateId: [null],
        percentageToPass: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]]
      });

      if (this.materialId != null || this.materialId != undefined) {
        (_a = this.FormCtrl.materialId) === null || _a === void 0 ? void 0 : _a.setValue(this.materialId);
        this.getExamsAndTemplates();
        this.getMaterialQuizes();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      var _a;

      if (this.materialId != null || this.materialId != undefined) {
        (_a = this.FormCtrl.materialId) === null || _a === void 0 ? void 0 : _a.setValue(this.materialId);
        this.getExamsAndTemplates();
        this.getMaterialQuizes();
      }
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getExamsAndTemplates",
    value: function getExamsAndTemplates() {
      var _this2 = this;

      this.spinner.show();
      this.SubjectMaterialsService.getExamsAndTemplates(this.subjectId).subscribe(function (res) {
        _this2.exams = res; // this.templates = res.templatesList;

        _this2.spinner.hide();
      });
    }
  }, {
    key: "getMaterialQuizes",
    value: function getMaterialQuizes() {
      var _this3 = this;

      this.spinner.show();
      this.SubjectMaterialsService.getMaterialQuizes(this.materialId).subscribe(function (res) {
        // console.log(res);
        _this3.AttachedQuiz = res;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "addMaterialQuiz",
    value: function addMaterialQuiz() {
      var _this4 = this;

      this.submitted = true;

      if (!this.FormCtrl.examId.value && !this.FormCtrl.templateId.value) {
        this.toastr.warning("Must Choose Exam or Template");
        return;
      }

      if (this.myForm.valid) {
        this.spinner.show();
        this.SubjectMaterialsService.addMaterialQuiz(this.materialId, this.myForm.value).subscribe(function (res) {
          var _a;

          if (res.returnValue = 1) {
            _this4.myForm.reset();

            (_a = _this4.FormCtrl.materialId) === null || _a === void 0 ? void 0 : _a.setValue(_this4.materialId);
            _this4.submitted = false;

            _this4.getMaterialQuizes();

            _this4.toastr.success("Exam Added successfully");
          }

          _this4.spinner.hide();
        });
      }
    }
  }, {
    key: "deleteMaterialQuiz",
    value: function deleteMaterialQuiz(Quiz) {
      var _this5 = this;

      this.spinner.show();
      this.SubjectMaterialsService.deleteMaterialQuiz(Quiz.Id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this5.AttachedQuiz.indexOf(Quiz);

          _this5.AttachedQuiz.splice(i, 1);

          _this5.toastr.success("تم الحذف");
        }

        _this5.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(Quiz) {
      var _this6 = this;

      var _a, _b;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: ((_a = Quiz.TemplateDetails) === null || _a === void 0 ? void 0 : _a.Name) || ((_b = Quiz.examDetails) === null || _b === void 0 ? void 0 : _b.exam_ar_name)
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this6.deleteMaterialQuiz(Quiz);
      });
    } //Cahnge Exam and Template Validators

  }, {
    key: "examValidator",
    value: function examValidator() {
      var exam = this.myForm.controls["examId"].value;

      if (exam != null) {
        this.myForm.controls["templateId"].setValue(null);
      }
    } //Cahnge Exam and Template Validators

  }, {
    key: "TemplateValidator",
    value: function TemplateValidator() {
      var template = this.myForm.controls["templateId"].value;
      if (template != null) this.myForm.controls["examId"].setValue(null);
    }
  }]);

  return AddMaterialExamComponent;
}();

AddMaterialExamComponent.ɵfac = function AddMaterialExamComponent_Factory(t) {
  return new (t || AddMaterialExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_5__.SubjectMaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};

AddMaterialExamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddMaterialExamComponent,
  selectors: [["app-add-material-exam"]],
  inputs: {
    materialId: "materialId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 24,
  vars: 17,
  consts: [[1, "container-fluid", 3, "formGroup"], [1, "row"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["formControlName", "examId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-6"], ["matInput", "", "type", "number", "formControlName", "percentageToPass"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "table-responsive", 4, "ngIf"], [3, "value"], [1, "text-danger"], [4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped", "m-0"], [4, "ngFor", "ngForOf"], ["matTooltip", "Delete", 1, "danger", "p-0", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"]],
  template: function AddMaterialExamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function AddMaterialExamComponent_Template_mat_select_selectionChange_7_listener() {
        return ctx.examValidator();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AddMaterialExamComponent_mat_option_11_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AddMaterialExamComponent_mat_hint_18_Template, 3, 2, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-card-actions", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddMaterialExamComponent_Template_button_click_20_listener() {
        return ctx.addMaterialQuiz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AddMaterialExamComponent_ng_container_23_Template, 14, 7, "ng-container", 11);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 9, "labels.Exam"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 11, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.exams);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 13, "labels.percentageToPass"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrl.percentageToPass.invalid && (ctx.FormCtrl.percentageToPass.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.FormCtrl.materialId.value == undefined || ctx.FormCtrl.materialId.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 15, "General.Save"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.AttachedQuiz == null ? null : ctx.AttachedQuiz.length) > 0);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWF0ZXJpYWwtZXhhbS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 79067:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/add-materials/add-exams/add-pop-question/add-pop-question.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPopQuestionComponent": function() { return /* binding */ AddPopQuestionComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AddPopQuestionComponent = /*#__PURE__*/function () {
  function AddPopQuestionComponent() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddPopQuestionComponent);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddPopQuestionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AddPopQuestionComponent;
}();

AddPopQuestionComponent.ɵfac = function AddPopQuestionComponent_Factory(t) {
  return new (t || AddPopQuestionComponent)();
};

AddPopQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddPopQuestionComponent,
  selectors: [["app-add-pop-question"]],
  inputs: {
    materialId: "materialId"
  },
  decls: 2,
  vars: 0,
  template: function AddPopQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "add-pop-question works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcG9wLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 22313:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/add-materials/add-material-files/add-material-files.component.ts ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMaterialFilesComponent": function() { return /* binding */ AddMaterialFilesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/subjectMaterials.service */ 24159);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/pipes/safe.pipe */ 88246);




















function AddMaterialFilesComponent_mat_hint_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddMaterialFilesComponent_mat_hint_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddMaterialFilesComponent_mat_hint_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddMaterialFilesComponent_mat_hint_8_span_1_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddMaterialFilesComponent_mat_hint_8_span_2_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrl.materialName.errors == null ? null : ctx_r0.FormCtrl.materialName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrl.materialName.errors == null ? null : ctx_r0.FormCtrl.materialName.errors.whiteSpace);
  }
}

function AddMaterialFilesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "embed", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r2.type)("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx_r2.Filepath), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"]);
  }
}

function AddMaterialFilesComponent_ng_container_20_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddMaterialFilesComponent_ng_container_20_tr_10_Template_a_click_5_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      var attach_r7 = restoredCtx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r8.openDeleateDialog(attach_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var attach_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", attach_r7.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", attach_r7.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](attach_r7.materialName);
  }
}

function AddMaterialFilesComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AddMaterialFilesComponent_ng_container_20_tr_10_Template, 7, 3, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 2, "labels.Name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.Attaches);
  }
}

var AddMaterialFilesComponent = /*#__PURE__*/function () {
  function AddMaterialFilesComponent(fb, toastr, SubjectMaterialsService, spinner, dialog) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddMaterialFilesComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.SubjectMaterialsService = SubjectMaterialsService;
    this.spinner = spinner;
    this.dialog = dialog;
    this.Attaches = [];
    this.submitted = false;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddMaterialFilesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a, _b;

      this.myForm = this.fb.group({
        materialId: [this.materialId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        materialName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        fileBase64: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });

      if (this.materialId != null || this.materialId != undefined) {
        (_b = (_a = this.FormCtrl) === null || _a === void 0 ? void 0 : _a.materialId) === null || _b === void 0 ? void 0 : _b.setValue(this.materialId);
        this.getMaterialAttaches();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      var _a, _b;

      if (this.materialId != null || this.materialId != undefined) {
        (_b = (_a = this.FormCtrl) === null || _a === void 0 ? void 0 : _a.materialId) === null || _b === void 0 ? void 0 : _b.setValue(this.materialId);
        this.getMaterialAttaches();
      }
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      var _a;

      return (_a = this.myForm) === null || _a === void 0 ? void 0 : _a.controls;
    }
  }, {
    key: "getMaterialAttaches",
    value: function getMaterialAttaches() {
      var _this = this;

      this.spinner.show();
      this.SubjectMaterialsService.getMaterialAttaches(this.materialId).subscribe(function (res) {
        if (res.returnValue == 1) {
          //    console.log("Attaches", res);
          _this.Attaches = res.MaterialAttachs;
        }

        _this.spinner.hide();
      });
    }
  }, {
    key: "addAttach",
    value: function addAttach() {
      var _this2 = this;

      var _a;

      this.submitted = true;

      if (!((_a = this.FormCtrl.fileBase64) === null || _a === void 0 ? void 0 : _a.value)) {
        this.toastr.warning("Must Choose File");
        return;
      }

      if (this.myForm.valid) {
        this.spinner.show();
        var data = {
          mat_attach: this.myForm.value
        };
        this.SubjectMaterialsService.addAttach(data).subscribe(function (res) {
          var _a;

          _this2.myForm.reset();

          (_a = _this2.FormCtrl.materialId) === null || _a === void 0 ? void 0 : _a.setValue(_this2.materialId);

          _this2.getMaterialAttaches();

          _this2.toastr.success("Attach Added successfully");

          _this2.submitted = false;
          _this2.Filepath = null;

          _this2.spinner.hide();
        });
      }
    }
  }, {
    key: "deleteAttach",
    value: function deleteAttach(Attache) {
      var _this3 = this;

      this.spinner.show();
      this.SubjectMaterialsService.deleteAttach(Attache.Id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this3.Attaches.indexOf(Attache);

          _this3.Attaches.splice(i, 1);

          _this3.toastr.success("تم الحذف");
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(Attache) {
      var _this4 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: Attache.materialName
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this4.deleteAttach(Attache);
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this5 = this;

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
          var file = {
            FileAsBase64: fileReder.replace("data:application/pdf;base64,", ""),
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };
          _this5.Filepath = fileReder;
          _this5.type = fileType;

          _this5.FormCtrl.fileBase64.setValue(file);
        };
      }
    }
  }]);

  return AddMaterialFilesComponent;
}();

AddMaterialFilesComponent.ɵfac = function AddMaterialFilesComponent_Factory(t) {
  return new (t || AddMaterialFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_4__.SubjectMaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};

AddMaterialFilesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddMaterialFilesComponent,
  selectors: [["app-add-material-files"]],
  inputs: {
    materialId: "materialId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 21,
  vars: 14,
  consts: [[1, "container-fluid", 3, "formGroup"], [1, "row"], [1, "col-md-6", "col-6"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "materialName"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-2", "col-12"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn-danger", 3, "click"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "col-12", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "table-responsive", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], [1, "col-12"], [1, "media"], ["width", "300", "height", "300", 3, "type", "src"], [1, "table-responsive"], [1, "table", "table-striped", "m-0"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["target", "_blank", 3, "href"], ["matTooltip", "Delete", 1, "danger", "p-0", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"]],
  template: function AddMaterialFilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AddMaterialFilesComponent_mat_hint_8_Template, 3, 2, "mat-hint", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddMaterialFilesComponent_Template_button_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);

        return _r1.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddMaterialFilesComponent_Template_input_change_13_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AddMaterialFilesComponent_div_15_Template, 4, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-card-actions", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddMaterialFilesComponent_Template_button_click_17_listener() {
        return ctx.addAttach();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AddMaterialFilesComponent_ng_container_20_Template, 11, 4, "ng-container", 13);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 8, "labels.Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrl.materialName.invalid && (ctx.FormCtrl.materialName.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 10, "labels.UploadFile"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Filepath);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.FormCtrl.materialId.value == undefined || ctx.FormCtrl.materialId.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 12, "General.Save"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Attaches.length > 0);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWF0ZXJpYWwtZmlsZXMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 71323:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/manually-attendance/manually-attendance.component.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManuallyAttendanceComponent": function() { return /* binding */ ManuallyAttendanceComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/Admin/subjectMaterials.service */ 24159);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















function ManuallyAttendanceComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-radio-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-radio-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-radio-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "labels.Attended"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "labels.NotAttended"), " ");
  }
}

function ManuallyAttendanceComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManuallyAttendanceComponent_button_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r5.resetForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function ManuallyAttendanceComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManuallyAttendanceComponent_button_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r7.searchAttendanceManual();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "General.Search"), " ");
  }
}

function ManuallyAttendanceComponent_button_48_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManuallyAttendanceComponent_button_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r9.updateAttendanceManual();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "General.Save"), " ");
  }
}

function ManuallyAttendanceComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 16, "labels.Name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 18, "labels.LectureName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 20, "labels.Group"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 22, "labels.Attendance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 24, "labels.Exception"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 26, "labels.refundBalance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 28, "Balance.Amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 30, "labels.Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.lectureName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.didAttend);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.isException);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.didRefund);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.amountRefunded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.studentSearched.dateRefunded);
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var ManuallyAttendanceComponent = /*#__PURE__*/function () {
  function ManuallyAttendanceComponent(fb, route, toastr, SubjectMaterialsService, spinner) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ManuallyAttendanceComponent);

    this.fb = fb;
    this.route = route;
    this.toastr = toastr;
    this.SubjectMaterialsService = SubjectMaterialsService;
    this.spinner = spinner;
    this.studentSearched = null;
    this.route.queryParamMap.subscribe(function (params) {
      _this.subjectId = params.get("subjectId");

      _this.route.queryParamMap.subscribe(function (params) {
        _this.functionId = Number(params.get("functionId"));
      });
    });
    this.route.paramMap.subscribe(function (params) {
      _this.lectureID = params.get("materialId");
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ManuallyAttendanceComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        lectureID: [this.lectureID],
        studentName: [""],
        studentEmail: [""],
        studentMobile: [""],
        studentCode: [""],
        attendBool: [true]
      });
    } //search student to Attendance Manual

  }, {
    key: "searchAttendanceManual",
    value: function searchAttendanceManual() {
      var _this2 = this;

      this.spinner.show();
      this.SubjectMaterialsService.searchAttendanceManual(this.myForm.value).subscribe(function (res) {
        var _a;

        _this2.studentSearched = res.studentSearched;
        if (!res.studentSearched) _this2.toastr.info("لم يتم العثور علي الطالب");

        _this2.myForm.controls["studentName"].setValue((_a = res.studentSearched) === null || _a === void 0 ? void 0 : _a.username);

        _this2.spinner.hide();
      });
    } //update student tAttendance Manual

  }, {
    key: "updateAttendanceManual",
    value: function updateAttendanceManual() {
      var _this3 = this;

      this.spinner.show();
      this.SubjectMaterialsService.updateAttendanceManual(this.myForm.value).subscribe(function (res) {
        console.log(res);

        if (res.returnValue == 1) {
          _this3.toastr.success(res.returnString);
        } else {
          _this3.toastr.error(res.returnString);
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.myForm.reset();
      this.studentSearched = null;
    }
  }]);

  return ManuallyAttendanceComponent;
}();

ManuallyAttendanceComponent.ɵfac = function ManuallyAttendanceComponent_Factory(t) {
  return new (t || ManuallyAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_2__.SubjectMaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService));
};

ManuallyAttendanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ManuallyAttendanceComponent,
  selectors: [["app-manually-attendance"]],
  decls: 50,
  vars: 37,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "container-fluid"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "routerLink", "queryParams"], [3, "formGroup"], [1, "row", "f-w"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "studentName"], ["matInput", "", "type", "text", "formControlName", "studentEmail"], ["matInput", "", "type", "text", "formControlName", "studentMobile"], ["matInput", "", "type", "text", "formControlName", "studentCode"], ["class", "col-md-8 col-6", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-md-8", "col-6"], ["formControlName", "attendBool", 1, "row"], [1, "col-md-3", "col-12"], [3, "value"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "example-card"], [1, "table", "table-striped", "m-0"]],
  template: function ManuallyAttendanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ManuallyAttendanceComponent_div_44_Template, 10, 8, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-card-actions", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ManuallyAttendanceComponent_button_46_Template, 3, 3, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ManuallyAttendanceComponent_button_47_Template, 3, 3, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ManuallyAttendanceComponent_button_48_Template, 3, 3, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ManuallyAttendanceComponent_div_49_Template, 48, 32, "div", 17);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 17, "Navbar.EducationalSubjects"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 19, "labels.Materials"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 21, "labels.updateAttendanceManually"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 23, "labels.updateAttendanceManually"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/subjects/material-search/", ctx.subjectId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](35, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 25, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 27, "labels.Name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 29, "labels.Email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 31, "labels.Mobile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 33, "labels.Code"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.studentSearched != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.studentSearched != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.studentSearched == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.studentSearched != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.studentSearched != null);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51YWxseS1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 49568:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/material-custome-points/material-custome-points.component.ts ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialCustomePointsComponent": function() { return /* binding */ MaterialCustomePointsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_admin_services_Admin_points_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/points.service */ 12397);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function MaterialCustomePointsComponent_mat_hint_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialCustomePointsComponent_mat_hint_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MaterialCustomePointsComponent_mat_hint_19_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r0.FormCtrl.attendancevalue.errors == null ? null : ctx_r0.FormCtrl.attendancevalue.errors.required) || (ctx_r0.FormCtrl.attendancevalue.errors == null ? null : ctx_r0.FormCtrl.attendancevalue.errors.minusNum));
  }
}

function MaterialCustomePointsComponent_mat_hint_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You must enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialCustomePointsComponent_mat_hint_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MaterialCustomePointsComponent_mat_hint_26_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrl.absencevalue.errors == null ? null : ctx_r1.FormCtrl.absencevalue.errors.required) || (ctx_r1.FormCtrl.absencevalue.errors == null ? null : ctx_r1.FormCtrl.absencevalue.errors.minusNum));
  }
}

function MaterialCustomePointsComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialCustomePointsComponent_tr_45_Template_button_click_6_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      var point_r6 = restoredCtx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r8.DeleateLecturePointDialog(point_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](point_r6.AttendanceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](point_r6.AbsenceValue);
  }
}

function MaterialCustomePointsComponent_pagination_controls_47_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "pagination-controls", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function MaterialCustomePointsComponent_pagination_controls_47_Template_pagination_controls_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r10.LecturePage = $event;
      return ctx_r10.getLectureCustomPoints($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxSize", ctx_r3.maxSize);
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

var MaterialCustomePointsComponent = /*#__PURE__*/function () {
  function MaterialCustomePointsComponent(route, fb, toastr, PointsService, dialog, spinner) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MaterialCustomePointsComponent);

    this.route = route;
    this.fb = fb;
    this.toastr = toastr;
    this.PointsService = PointsService;
    this.dialog = dialog;
    this.spinner = spinner;
    this.submitted = false;
    this.p = 1;
    this.maxSize = 9;
    this.route.queryParamMap.subscribe(function (params) {
      _this.subjectId = params.get("subjectId");
    });
    this.route.paramMap.subscribe(function (params) {
      _this.materialId = params.get("materialId");
    });
    this.route.queryParamMap.subscribe(function (params) {
      _this.subjectId = params.get("subjectId");

      _this.route.queryParamMap.subscribe(function (params) {
        _this.functionId = Number(params.get("functionId"));
      });
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MaterialCustomePointsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getLectureCustomPoints(1);
      this.myForm = this.fb.group({
        itemId: [this.materialId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        ByQuestion: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        questionAttempt: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        value: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        questionAttempts: [0, [app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        attendancevalue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        absencevalue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]]
      });
      this.changeQuestionAttemptsValidation(true);
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    } //Add Custom Material Point

  }, {
    key: "addLectureCustomPoint",
    value: function addLectureCustomPoint() {
      var _this2 = this;

      var _a, _b, _c, _d, _e, _f, _g;

      this.submitted = true;
      var data = {
        itemId: (_a = this.FormCtrl) === null || _a === void 0 ? void 0 : _a.itemId.value,
        ByQuestion: (_b = this.FormCtrl) === null || _b === void 0 ? void 0 : _b.ByQuestion.value,
        absencevalue: (_c = this.FormCtrl) === null || _c === void 0 ? void 0 : _c.absencevalue.value,
        attendancevalue: (_d = this.FormCtrl) === null || _d === void 0 ? void 0 : _d.attendancevalue.value,
        questionAttempts: (_e = this.FormCtrl) === null || _e === void 0 ? void 0 : _e.questionAttempts.value,
        questionAttempt: (_f = this.FormCtrl) === null || _f === void 0 ? void 0 : _f.questionAttempt.value,
        value: (_g = this.FormCtrl) === null || _g === void 0 ? void 0 : _g.value.value
      };

      if (this.myForm.valid) {
        this.spinner.show();
        this.PointsService.addLectureCustomPoint(data).subscribe(function (res) {
          var _a, _b;

          if (res.returnValue == 1) {
            _this2.getLectureCustomPoints(1);

            _this2.toastr.success("تم إاضافة النقاط");

            _this2.submitted = false;

            _this2.myForm.reset();

            (_a = _this2.FormCtrl) === null || _a === void 0 ? void 0 : _a.ByQuestion.setValue(true);
            (_b = _this2.FormCtrl) === null || _b === void 0 ? void 0 : _b.questionAttempt.setValue(true);
          }

          _this2.spinner.hide();
        });
      }
    } //Add Custom Material Point

  }, {
    key: "getLectureCustomPoints",
    value: function getLectureCustomPoints(p) {
      var _this3 = this;

      this.spinner.show();
      this.PointsService.getLectureCustomPoints(p, this.materialId).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this3.itemsCount = res.itemsCount;
          _this3.Points = res.points;
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "deleteLectureCustomPoint",
    value: function deleteLectureCustomPoint(point) {
      var _this4 = this;

      this.spinner.show();
      this.PointsService.deleteLectureCustomPoint(point.Id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this4.Points.findIndex(function (e) {
            return e === point;
          });

          _this4.Points.splice(i, 1);

          _this4.toastr.success("تم الحذف");
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "DeleateLecturePointDialog",
    value: function DeleateLecturePointDialog(point) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: "".concat(point.Value, ": points")
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteLectureCustomPoint(point);
      });
    }
  }, {
    key: "track",
    value: function track(index, point) {
      return point.Id;
    }
  }, {
    key: "changeQuestionAttemptsValidation",
    value: function changeQuestionAttemptsValidation(questionAttempt) {
      if (questionAttempt == true) {
        this.myForm.controls["questionAttempts"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]);
      }

      if (questionAttempt == false) {
        this.myForm.controls["questionAttempts"].reset();
        this.myForm.controls["questionAttempts"].clearValidators();
      }

      this.FormCtrl.questionAttempts.updateValueAndValidity();
    }
  }]);

  return MaterialCustomePointsComponent;
}();

MaterialCustomePointsComponent.ɵfac = function MaterialCustomePointsComponent_Factory(t) {
  return new (t || MaterialCustomePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_points_service__WEBPACK_IMPORTED_MODULE_4__.PointsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService));
};

MaterialCustomePointsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MaterialCustomePointsComponent,
  selectors: [["app-material-custome-points"]],
  decls: 48,
  vars: 37,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "routerLink", "queryParams"], [3, "formGroup"], [1, "col-lg-4", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "number", "formControlName", "attendancevalue"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "absencevalue"], ["align", "end"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [1, "table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"]],
  template: function MaterialCustomePointsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, MaterialCustomePointsComponent_mat_hint_19_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, MaterialCustomePointsComponent_mat_hint_26_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialCustomePointsComponent_Template_button_click_28_listener() {
        return ctx.addLectureCustomPoint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, MaterialCustomePointsComponent_tr_45_Template, 9, 2, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, MaterialCustomePointsComponent_pagination_controls_47_Template, 1, 1, "pagination-controls", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 15, "labels.LecturePoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/subjects/material-search/", ctx.subjectId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 17, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 19, "labels.AttendancePoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrl.attendancevalue.invalid && (ctx.FormCtrl.attendancevalue.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 21, "labels.AbsencePoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrl.absencevalue.invalid && (ctx.FormCtrl.absencevalue.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 23, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 25, "labels.AttendancePoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 27, "labels.AbsencePoints"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](46, 29, ctx.Points, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](34, _c1, ctx.p, ctx.itemsCount)))("ngForTrackBy", ctx.track);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.Points == null ? null : ctx.Points.length) > 5);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC1jdXN0b21lLXBvaW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 1340:
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/material-search/material-search.component.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialSearchComponent": function() { return /* binding */ MaterialSearchComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/subjects.service */ 74423);
/* harmony import */ var app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/admin/services/Admin/subjectMaterials.service */ 24159);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




























function MaterialSearchComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function MaterialSearchComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r17 + 1, " ");
  }
}

function MaterialSearchComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function MaterialSearchComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", material_r18.material_name, " ");
  }
}

function MaterialSearchComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Price"), " ");
  }
}

function MaterialSearchComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "Material-", material_r19.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", material_r19.price, " ");
  }
}

function MaterialSearchComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Type"), " ");
  }
}

function MaterialSearchComponent_td_59_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Video"), " ");
  }
}

function MaterialSearchComponent_td_59_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Offline"), " ");
  }
}

function MaterialSearchComponent_td_59_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Malzem"), " ");
  }
}

function MaterialSearchComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialSearchComponent_td_59_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MaterialSearchComponent_td_59_span_2_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MaterialSearchComponent_td_59_span_3_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (material_r20 == null ? null : material_r20.attach_type_id) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (material_r20 == null ? null : material_r20.attach_type_id) == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (material_r20 == null ? null : material_r20.attach_type_id) == 3);
  }
}

function MaterialSearchComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.ThePublish"), " ");
  }
}

function MaterialSearchComponent_td_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Published"), " ");
  }
}

function MaterialSearchComponent_td_62_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.UnPublished"), " ");
  }
}

function MaterialSearchComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialSearchComponent_td_62_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MaterialSearchComponent_td_62_span_2_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", material_r24 == null ? null : material_r24.IsPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(material_r24 == null ? null : material_r24.IsPublish));
  }
}

function MaterialSearchComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function MaterialSearchComponent_td_65_div_5_ng_container_1_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.Publish"), " ");
  }
}

function MaterialSearchComponent_td_65_div_5_ng_container_1_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.Unpublish"), " ");
  }
}

function MaterialSearchComponent_td_65_div_5_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialSearchComponent_td_65_div_5_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      var material_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r36.publishMaterial(material_r27.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialSearchComponent_td_65_div_5_ng_container_1_a_1_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MaterialSearchComponent_td_65_div_5_ng_container_1_a_1_span_2_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !material_r27.IsPublish);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", material_r27.IsPublish);
  }
}

var _c0 = function _c0(a0, a1, a2, a3) {
  return {
    courseId: a0,
    materialId: a1,
    functionId: a2,
    parentId: a3
  };
};

function MaterialSearchComponent_td_65_div_5_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var material_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction4"](4, _c0, ctx_r32.subjectId, material_r27 == null ? null : material_r27.id, ctx_r32.functionId, ctx_r32.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "General.Edit"), " ");
  }
}

function MaterialSearchComponent_td_65_div_5_ng_container_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialSearchComponent_td_65_div_5_ng_container_1_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      var material_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
      var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r41.openDeleateDialog(material_r27);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

function MaterialSearchComponent_td_65_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialSearchComponent_td_65_div_5_ng_container_1_a_1_Template, 3, 2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MaterialSearchComponent_td_65_div_5_ng_container_1_a_2_Template, 4, 9, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MaterialSearchComponent_td_65_div_5_ng_container_1_a_3_Template, 4, 3, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r30.functionName === "publishMaterial");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r30.functionName === "EditMaterial");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r30.functionName === "DeleteMaterial");
  }
}

function MaterialSearchComponent_td_65_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialSearchComponent_td_65_div_5_ng_container_1_Template, 4, 3, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r28.rowFunctions);
  }
}

function MaterialSearchComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MaterialSearchComponent_td_65_div_5_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.rowFunctions.length > 0);
  }
}

function MaterialSearchComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 53);
  }
}

function MaterialSearchComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 54);
  }

  if (rf & 2) {
    var row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-light-info", !(row_r44 == null ? null : row_r44.IsPublish));
  }
}

function MaterialSearchComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](45);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c1 = function _c1(a0) {
  return {
    functionId: a0
  };
};

var _c2 = function _c2(a0, a1, a2) {
  return {
    courseId: a0,
    functionId: a1,
    parentId: a2
  };
};

var _c3 = function _c3() {
  return [5, 10, 20];
};

var MaterialSearchComponent = /*#__PURE__*/function () {
  function MaterialSearchComponent(route, fb, toastr, SubjectsService, SubjectMaterialsService, authserv, spinner, dialog) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MaterialSearchComponent);

    this.route = route;
    this.fb = fb;
    this.toastr = toastr;
    this.SubjectsService = SubjectsService;
    this.SubjectMaterialsService = SubjectMaterialsService;
    this.authserv = authserv;
    this.spinner = spinner;
    this.dialog = dialog;
    this.checked = 1;
    this.updatePublish = false;
    this.submitted = false;
    this.displayedColumns = ["#", "lecName", "price", "type", "publish", "actions"];
    this.route.paramMap.subscribe(function (params) {
      _this.subjectId = params.get("subjectId");
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));
      _this.parentId = Number(params.get("parentId"));
      _this.courseName = params.get("courseName");

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res;
          }
        });
      }
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MaterialSearchComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      //get Current EduCompId
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      this.myForm = this.fb.group({
        // searchedTeacherId: ["", Validators.required],
        // searchedItemType: [1, Validators.required],
        Name: [null] // unitId: [""],
        /// lessonId: [""],

      });
      this.searcheMaterial(1); // this.getTeacherByEduCompId();
      // this.returnSearchedUnitsBySubjectId();
      // this.getSubjectByID(this.subjectId);
    }
  }, {
    key: "FomCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId; //  this.FomCtrls?.select_Education_Component.setValue(e.EduCompId);

        _this2.getTeacherByEduCompId();
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
    }
  }, {
    key: "searcheMaterial",
    value: function searcheMaterial(page) {
      var _this3 = this;

      // let type = this.FomCtrls?.searchedItemType?.value;
      // let searchedItemId;
      // if (type == 1) searchedItemId = this.subjectId;
      // if (type == 2) searchedItemId = this.FomCtrls?.unitId?.value;
      // if (type == 3) searchedItemId = this.FomCtrls?.lessonId?.value;
      // if (
      //   searchedItemId == null ||
      //   searchedItemId == "" ||
      //   this.FomCtrls?.searchedTeacherId.value == ""
      // ) {
      //   this.toastr.error("تأكد من إدخال بيانات صحيحة", "خطأ");
      //   return;
      // }
      var _a;

      this.spinner.show();
      var data = {
        page: page,
        subCourseId: this.subjectId,
        Name: (_a = this.FomCtrls.Name) === null || _a === void 0 ? void 0 : _a.value
      };
      this.SubjectMaterialsService.searcheMaterial(data).subscribe(function (res) {
        if (res) {
          _this3.materialsList = res.MaterialsAttachList;
          _this3.countItems = res.countItems;
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(res.MaterialsAttachList);
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "deleteMaterial",
    value: function deleteMaterial(material) {
      var _this4 = this;

      this.spinner.show();
      this.SubjectMaterialsService.deleteMaterial(material.id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this4.dataSource.data.findIndex(function (e) {
            return e === material;
          });

          _this4.dataSource.data.splice(i, 1);

          _this4.dataSource.paginator = _this4.paginator;

          _this4.toastr.success("تم الحذف");
        }

        if (res.returnValue == 0) {
          _this4.toastr.error(res.errorMsg, "Error");
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(material) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.DeleteDialogComponent, {
        data: {
          msg: material.material_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteMaterial(material);
      });
    } // Publish Depublishh Material

  }, {
    key: "publishMaterial",
    value: function publishMaterial(MaterialId) {
      var _this6 = this;

      this.spinner.show();
      this.SubjectMaterialsService.publishMaterial(MaterialId).subscribe(function (res) {
        if (res.returnValue == 1) {
          var _iterator = (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6.materialsList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var obj = _step.value;

              if (obj.id === MaterialId) {
                obj.IsPublish = !obj.IsPublish;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (res.returnValue == 0) {
          _this6.toastr.error(res.errorMsg);
        }

        _this6.spinner.hide();
      });
    } // Publish Depublishh Material

  }, {
    key: "showVideoByMaterialId",
    value: function showVideoByMaterialId(MaterialId) {
      var _this7 = this;

      this.SubjectMaterialsService.showVideoByMaterialId(MaterialId).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this7.showMaterial = res.material.attach_path; // $("#VideoPreviewModal").show();
        }
      });
    }
  }, {
    key: "dawnloadLectureAttendees",
    value: function dawnloadLectureAttendees(materialId) {
      var _this8 = this;

      this.spinner.show();
      this.SubjectMaterialsService.dawnloadLectureAttendees(materialId).subscribe(function (res) {
        if (res.returnValue == 1) {
          window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL.replace("/api/", "") + res.path, "_blank");
        }

        _this8.spinner.hide();
      }); //let url = `${environment.apiURL}MaterialsAttach/offline-lecture-attendees/${materialId}`;
      //  window.open(url, "_target");
    }
  }, {
    key: "getTeacherByEduCompId",
    value: function getTeacherByEduCompId() {
      var _this9 = this;

      this.spinner.show();
      this.SubjectsService.getTeacherBySubjectAndEduCompId(this.EduCompId, this.subjectId).subscribe(function (res) {
        if (res.retunValue == 1) {
          _this9.Teachers = res.teachers;
        }

        _this9.spinner.hide();
      });
    }
  }, {
    key: "returnSearchedUnitsBySubjectId",
    value: function returnSearchedUnitsBySubjectId() {
      var _this10 = this;

      this.SubjectMaterialsService.returnSearchedUnitsBySubjectId(this.subjectId).subscribe(function (res) {
        _this10.units = res;
      });
    }
  }, {
    key: "returnSearchedLessonsByUnitId",
    value: function returnSearchedLessonsByUnitId(unitId) {
      var _this11 = this;

      this.SubjectMaterialsService.returnSearchedLessonsByUnitId(unitId).subscribe(function (res) {
        _this11.Lessons = res;
      });
    }
  }, {
    key: "getSubjectByID",
    value: function getSubjectByID(id) {
      var _this12 = this;

      this.SubjectsService.getSubjectByID(id).subscribe(function (res) {
        if (res.subject_id != null) {
          _this12.subject_ar_name = res.subject_ar_name;
        }
      });
    }
  }]);

  return MaterialSearchComponent;
}();

MaterialSearchComponent.ɵfac = function MaterialSearchComponent_Factory(t) {
  return new (t || MaterialSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_5__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_6__.SubjectMaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog));
};

MaterialSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MaterialSearchComponent,
  selectors: [["app-material-search"]],
  viewQuery: function MaterialSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 70,
  vars: 38,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "container-fluid"], ["mat-raised-button", "", "routerLink", "/dashboard/setup/course/sub-course", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", "routerLink", "/dashboard/educational-setup/subjects/add-material", 1, "btn", "btn-primary", "bg-light-info", "float-right", 3, "queryParams"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "formControlName", "Name"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lecName"], ["matColumnDef", "price"], ["mat-cell", "", 3, "id", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "publish"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "bg-light-info", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "id"], [4, "ngIf"], [1, "ft-play-circle", "danger", "ml-1"], [1, "fa-book", "info", "ml-1"], [1, "fa", "fa-book", "info", "ml-1"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "success", "ml-1"], ["ngbDropdown", "", 1, "dropdown", "btn-group", "mr-1", "mb-1"], ["mat-raised-button", "", "type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "bg-light-primary", "dropdown-toggle"], [1, "caret"], ["ngbDropdownMenu", "", "class", "dropdown-menu", "role", "menu", 4, "ngIf"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], ["routerLink", "/dashboard/educational-setup/subjects/add-material", "class", "dropdown-item", 3, "queryParams", 4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "ft-upload", "font-medium-3", "mr-2"], [1, "ft-download", "font-medium-3", "mr-2"], ["routerLink", "/dashboard/educational-setup/subjects/add-material", 1, "dropdown-item", 3, "queryParams"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function MaterialSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialSearchComponent_Template_button_click_19_listener() {
        return ctx.searcheMaterial(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 12);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function MaterialSearchComponent_Template_input_keyup_44_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "table", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](48, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, MaterialSearchComponent_th_49_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, MaterialSearchComponent_td_50_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](51, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, MaterialSearchComponent_th_52_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, MaterialSearchComponent_td_53_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](54, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, MaterialSearchComponent_th_55_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, MaterialSearchComponent_td_56_Template, 2, 2, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](57, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, MaterialSearchComponent_th_58_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, MaterialSearchComponent_td_59_Template, 4, 3, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](60, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, MaterialSearchComponent_th_61_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, MaterialSearchComponent_td_62_Template, 3, 2, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](63, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, MaterialSearchComponent_th_64_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, MaterialSearchComponent_td_65_Template, 6, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, MaterialSearchComponent_tr_66_Template, 1, 0, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, MaterialSearchComponent_tr_67_Template, 1, 2, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, MaterialSearchComponent_tr_68_Template, 3, 1, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-paginator", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function MaterialSearchComponent_Template_mat_paginator_page_69_listener($event) {
        return ctx.searcheMaterial($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 17, "course.LectureOfCourse"), " ", ctx.courseName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 19, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](31, _c1, ctx.parentId));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 21, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](33, _c2, ctx.subjectId, ctx.functionId, ctx.parentId));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 23, "General.AddMaterial"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 25, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 27, "labels.Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 29, "Material.Lectures"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](37, _c3))("length", ctx.countItems)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 46172:
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/subject-index/subject-index.component.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectIndexComponent": function() { return /* binding */ SubjectIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/subjects.service */ 74423);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/admin/services/Admin/educational.service */ 56471);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






























function SubjectIndexComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var country_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", country_r17.country_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", country_r17.country_ar_name, " ");
  }
}

function SubjectIndexComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var stage_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", stage_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", stage_r18.stage_ar_name, " ");
  }
}

function SubjectIndexComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var year_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", year_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", year_r19.Educational_year_ar_name, " ");
  }
}

function SubjectIndexComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function SubjectIndexComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r20 + 1);
  }
}

function SubjectIndexComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Navbar.EducationalStage"), " ");
  }
}

function SubjectIndexComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r21.stage_name);
  }
}

function SubjectIndexComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.EducationalYear"), " ");
  }
}

function SubjectIndexComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r22.educational_year);
  }
}

function SubjectIndexComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.SubjectName"), " ");
  }
}

function SubjectIndexComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r23.subject_ar_name);
  }
}

function SubjectIndexComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    functionId: a0,
    parentId: a1
  };
};

function SubjectIndexComponent_td_79_div_1_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var fun_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var subject_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/subjects/material-search/", subject_r24 == null ? null : subject_r24.subject_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](5, _c0, fun_r27 == null ? null : fun_r27.Id, ctx_r28.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "labels.Materials"), " ");
  }
}

function SubjectIndexComponent_td_79_div_1_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubjectIndexComponent_td_79_div_1_ng_container_5_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      var subject_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r32.openDeleateDialog(subject_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

function SubjectIndexComponent_td_79_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubjectIndexComponent_td_79_div_1_ng_container_5_a_1_Template, 4, 8, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SubjectIndexComponent_td_79_div_1_ng_container_5_a_2_Template, 4, 3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r27.functionName === "Materials");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r27.functionName === "Delete");
  }
}

function SubjectIndexComponent_td_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SubjectIndexComponent_td_79_div_1_ng_container_5_Template, 3, 2, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r25.rowFunctions);
  }
}

function SubjectIndexComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubjectIndexComponent_td_79_div_1_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.rowFunctions.length > 0);
  }
}

function SubjectIndexComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 44);
  }
}

function SubjectIndexComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 45);
  }
}

function SubjectIndexComponent_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](62);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r3.value, "\" ");
  }
}

var _c1 = function _c1() {
  return [10];
};

var SubjectIndexComponent = /*#__PURE__*/function () {
  function SubjectIndexComponent(fb, authserv, SubjectsService, generlServ, eduServ, toaster, spinner, route, dialog) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubjectIndexComponent);

    this.fb = fb;
    this.authserv = authserv;
    this.SubjectsService = SubjectsService;
    this.generlServ = generlServ;
    this.eduServ = eduServ;
    this.toaster = toaster;
    this.spinner = spinner;
    this.route = route;
    this.dialog = dialog;
    this.subjects = [];
    this.countriesList = [];
    this.stagesList = [];
    this.Years = [];
    this.submitted = false;
    this.displayedColumns = ["#", "stage", "year", "subject", "actions"];
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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubjectIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      this.myForm = this.fb.group({
        select_Education_Component: [this.EduCompId, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        countryID: [""],
        stageID: [""],
        eduYearID: [""],
        page: [1]
      });
      this.getAllCountriesList();
      this.getSubjects(1);
    }
  }, {
    key: "FomCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        var _a;

        _this2.EduCompId = e.EduCompId;
        (_a = _this2.FomCtrls) === null || _a === void 0 ? void 0 : _a.select_Education_Component.setValue(e.EduCompId);

        _this2.getSubjects(1);
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId; //this.FomCtrls?.branchId.setValue(e.branchId);
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
    key: "getSubjects",
    value: function getSubjects(page) {
      var _this3 = this;

      var _a;

      if (((_a = this.FomCtrls) === null || _a === void 0 ? void 0 : _a.select_Education_Component.value) == "null") {
        this.toaster.warning("Please Choose Center!");
        return;
      }

      if (this.myForm.valid) {
        this.spinner.show();
        this.FomCtrls.page.setValue(page);
        this.SubjectsService.getSubjects(this.myForm.value).subscribe(function (res) {
          //this.subjects = res.subjects;
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(res.subjects);
          _this3.totalItems = res.TotalItemCount;

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(subject) {
      var _this4 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: subject.subject_ar_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this4.deleteSubject(subject);
      });
    }
  }, {
    key: "deleteSubject",
    value: function deleteSubject(subject) {
      var _this5 = this;

      this.spinner.show();
      this.SubjectsService.deleteSubject(subject.subject_id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this5.dataSource.data.indexOf(subject);

          _this5.dataSource.data.splice(i, 1);

          _this5.toaster.success("تم الحذف");

          _this5.spinner.hide();
        }
      });
    }
  }, {
    key: "getAllCountriesList",
    value: function getAllCountriesList() {
      var _this6 = this;

      this.generlServ.getAllCountriesList().subscribe(function (res) {
        _this6.countriesList = res;
      });
    }
  }, {
    key: "getEducationalStageByCountryID",
    value: function getEducationalStageByCountryID(countryId) {
      var _this7 = this;

      if (countryId != "") {
        this.eduServ.getEducationalStageByCountryID(countryId).subscribe(function (res) {
          _this7.stagesList = res.eduYearsList;
        });
      }
    }
  }, {
    key: "getYearbyStageID",
    value: function getYearbyStageID(StageId) {
      var _this8 = this;

      if (StageId != "") {
        this.eduServ.getYearbyStageID(StageId).subscribe(function (res) {
          _this8.Years = res.eduYearsList;
        });
      }
    }
  }]);

  return SubjectIndexComponent;
}();

SubjectIndexComponent.ɵfac = function SubjectIndexComponent_Factory(t) {
  return new (t || SubjectIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_4__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_admin_services_Admin_educational_service__WEBPACK_IMPORTED_MODULE_6__.EducationalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
};

SubjectIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SubjectIndexComponent,
  selectors: [["app-subject-index"]],
  viewQuery: function SubjectIndexComponent_Query(rf, ctx) {
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
  decls: 84,
  vars: 41,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["formControlName", "countryID", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "stageID", 3, "selectionChange"], ["formControlName", "eduYearID"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "stage"], ["matColumnDef", "year"], ["matColumnDef", "subject"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["class", "dropdown btn-group mr-1 mb-1", "ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown", "btn-group", "mr-1", "mb-1"], ["mat-raised-button", "", "type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "bg-light-primary", "dropdown-toggle"], [1, "caret"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["class", "dropdown-item", 3, "routerLink", "queryParams", 4, "ngIf"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item", 3, "routerLink", "queryParams"], [1, "icon-notebook", "font-medium-3", "mr-2"], [1, "dropdown-item", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function SubjectIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function SubjectIndexComponent_Template_mat_select_selectionChange_22_listener() {
        return ctx.getEducationalStageByCountryID(ctx.FomCtrls == null ? null : ctx.FomCtrls.countryID == null ? null : ctx.FomCtrls.countryID.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, SubjectIndexComponent_mat_option_26_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function SubjectIndexComponent_Template_mat_select_selectionChange_32_listener() {
        return ctx.getYearbyStageID(ctx.FomCtrls == null ? null : ctx.FomCtrls.stageID == null ? null : ctx.FomCtrls.stageID.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, SubjectIndexComponent_mat_option_36_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, SubjectIndexComponent_mat_option_46_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-card-actions", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubjectIndexComponent_Template_button_click_48_listener() {
        return ctx.getSubjects(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function SubjectIndexComponent_Template_input_keyup_61_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "table", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](65, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, SubjectIndexComponent_th_66_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, SubjectIndexComponent_td_67_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](68, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, SubjectIndexComponent_th_69_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, SubjectIndexComponent_td_70_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](71, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, SubjectIndexComponent_th_72_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, SubjectIndexComponent_td_73_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](74, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, SubjectIndexComponent_th_75_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, SubjectIndexComponent_td_76_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](77, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, SubjectIndexComponent_th_78_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, SubjectIndexComponent_td_79_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, SubjectIndexComponent_tr_80_Template, 1, 0, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, SubjectIndexComponent_tr_81_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, SubjectIndexComponent_tr_82_Template, 3, 1, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "mat-paginator", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function SubjectIndexComponent_Template_mat_paginator_page_83_listener($event) {
        return ctx.getSubjects($event.pageIndex + 1);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 20, "Navbar.EducationalSubjects"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 22, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 24, "labels.Country"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 26, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.countriesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 28, "Navbar.EducationalStage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 30, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.stagesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 32, "labels.EducationalYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 34, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.Years);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 36, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](56, 38, "Material.Subjects"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](40, _c1))("length", ctx.totalItems)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJqZWN0LWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 51813:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/upload-attendance/upload-attendance.component.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadAttendanceComponent": function() { return /* binding */ UploadAttendanceComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/Admin/subjectMaterials.service */ 24159);
/* harmony import */ var app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/Admin/subjects.service */ 74423);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/pipes/NewDate.pipe */ 3865);
























function UploadAttendanceComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UploadAttendanceComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r23 + 1);
  }
}

function UploadAttendanceComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function UploadAttendanceComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r24 == null ? null : ele_r24.username);
  }
}

function UploadAttendanceComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.LectureName"), " ");
  }
}

function UploadAttendanceComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r25 == null ? null : ele_r25.lectureName);
  }
}

function UploadAttendanceComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Group"), " ");
  }
}

function UploadAttendanceComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r26 == null ? null : ele_r26.groupName);
  }
}

function UploadAttendanceComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Attendance"), " ");
  }
}

function UploadAttendanceComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r27 == null ? null : ele_r27.didAttend);
  }
}

function UploadAttendanceComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Exception"), " ");
  }
}

function UploadAttendanceComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r28 == null ? null : ele_r28.isException);
  }
}

function UploadAttendanceComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.refundBalance"), " ");
  }
}

function UploadAttendanceComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r29 == null ? null : ele_r29.didRefund);
  }
}

function UploadAttendanceComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Balance.Amount"), " ");
  }
}

function UploadAttendanceComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ele_r30 == null ? null : ele_r30.amountRefunded, " ");
  }
}

function UploadAttendanceComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Date"), " ");
  }
}

function UploadAttendanceComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "NewDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ele_r31 == null ? null : ele_r31.dateRefunded), " ");
  }
}

function UploadAttendanceComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 34);
  }
}

function UploadAttendanceComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 35);
  }
}

function UploadAttendanceComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](43);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r1.value, "\" ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1() {
  return [10];
};

var UploadAttendanceComponent = /*#__PURE__*/function () {
  function UploadAttendanceComponent(route, fb, toastr, spinner, SubjectMaterialsService, SubjectsService) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UploadAttendanceComponent);

    this.route = route;
    this.fb = fb;
    this.toastr = toastr;
    this.spinner = spinner;
    this.SubjectMaterialsService = SubjectMaterialsService;
    this.SubjectsService = SubjectsService;
    this.students = [];
    this.displayedColumns = ["#", "name", "lecture", "group", "attendance", "outGroup", "refundBalance", "amount", "date"];
    this.itemsCount = 0;
    this.route.queryParamMap.subscribe(function (params) {
      _this.subjectId = params.get("subjectId");
      _this.functionId = Number(params.get("functionId"));
    });
    this.route.paramMap.subscribe(function (params) {
      _this.materialId = params.get("materialId");
    });
    this.getSubjectByID();
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadAttendanceComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.offlineLectureAttendeesTable(1);
      this.myForm = this.fb.group({
        attendance: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        uploadedFile: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
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
    key: "UploadStudentAttendance",
    value: function UploadStudentAttendance() {
      var _this2 = this;

      if (!this.myForm.controls["uploadedFile"].value) {
        this.toastr.warning("Must Choose File");
        return;
      } else {
        //this.errorMsg = false;
        this.spinner.show();
        this.SubjectMaterialsService.UploadStudentAttendance(this.materialId, this.myForm.controls["attendance"].value, this.myForm.controls["uploadedFile"].value).subscribe(function (res) {
          if (res.returnString == "Success") {
            _this2.offlineLectureAttendeesTable(1);

            _this2.toastr.success("تم رفع الحضور");

            _this2.myForm.reset();
          }

          _this2.spinner.hide();
        });
      }
    }
  }, {
    key: "offlineLectureAttendeesTable",
    value: function offlineLectureAttendeesTable(p) {
      var _this3 = this;

      this.spinner.show();
      this.SubjectMaterialsService.offlineLectureAttendeesTable(this.materialId, p).subscribe(function (res) {
        console.log("offlineLectureAttendeesTable", res);
        _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(res.model);
        _this3.itemsCount = res.itemsCount;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "getSubjectByID",
    value: function getSubjectByID() {
      var _this4 = this;

      this.SubjectsService.getSubjectByID(this.subjectId).subscribe(function (res) {
        if (res.subject_id != null) {
          _this4.subjectName = res.subject_ar_name;
        }
      });
    } //Attache File

  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this5 = this;

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
            FileAsBase64: fileReder.replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", ""),
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };
          console.log(data);

          _this5.myForm.controls["uploadedFile"].setValue(data);
        };
      }
    }
  }]);

  return UploadAttendanceComponent;
}();

UploadAttendanceComponent.ɵfac = function UploadAttendanceComponent_Factory(t) {
  return new (t || UploadAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_2__.SubjectMaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_3__.SubjectsService));
};

UploadAttendanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UploadAttendanceComponent,
  selectors: [["app-upload-attendance"]],
  viewQuery: function UploadAttendanceComponent_Query(rf, ctx) {
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
  decls: 77,
  vars: 35,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header"], [1, "container-fluid"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "routerLink", "queryParams"], [3, "formGroup"], ["accept", ".xlsx,.xls", "type", "file", 1, "form-control", 3, "change"], ["fileInput", ""], [1, "col-2"], ["formControlName", "attendance", 3, "value"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "lecture"], ["matColumnDef", "group"], ["matColumnDef", "attendance"], ["matColumnDef", "outGroup"], ["matColumnDef", "refundBalance"], ["matColumnDef", "amount"], ["matColumnDef", "date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function UploadAttendanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UploadAttendanceComponent_Template_input_change_23_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " \u062A\u0633\u062C\u064A\u0644 \u0628\u0627\u0642\u064A \u063A\u064A\u0627\u0628 \u0627\u0644\u0637\u0644\u0627\u0628 \u0645\u0646 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u062D\u0635\u0629 \u062E\u0627\u0631\u062C \u0627\u0644\u0645\u0644\u0641 \u0631\u0641\u0639 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadAttendanceComponent_Template_button_click_29_listener() {
        return ctx.UploadStudentAttendance();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function UploadAttendanceComponent_Template_input_keyup_42_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](46, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, UploadAttendanceComponent_th_47_Template, 2, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, UploadAttendanceComponent_td_48_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](49, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, UploadAttendanceComponent_th_50_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, UploadAttendanceComponent_td_51_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](52, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, UploadAttendanceComponent_th_53_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, UploadAttendanceComponent_td_54_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](55, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, UploadAttendanceComponent_th_56_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, UploadAttendanceComponent_td_57_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](58, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, UploadAttendanceComponent_th_59_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, UploadAttendanceComponent_td_60_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](61, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, UploadAttendanceComponent_th_62_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, UploadAttendanceComponent_td_63_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](64, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, UploadAttendanceComponent_th_65_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, UploadAttendanceComponent_td_66_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](67, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, UploadAttendanceComponent_th_68_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, UploadAttendanceComponent_td_69_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](70, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, UploadAttendanceComponent_th_71_Template, 3, 3, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, UploadAttendanceComponent_td_72_Template, 3, 3, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, UploadAttendanceComponent_tr_73_Template, 1, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, UploadAttendanceComponent_tr_74_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, UploadAttendanceComponent_tr_75_Template, 3, 1, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "mat-paginator", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function UploadAttendanceComponent_Template_mat_paginator_page_76_listener($event) {
        return ctx.offlineLectureAttendeesTable($event.pageIndex + 1);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 18, "Navbar.EducationalSubjects"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 20, "labels.Materials"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 22, "labels.UploadAttendance"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 24, "labels.UploadAttendance"), " - ", ctx.subjectName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/subjects/material-search/", ctx.subjectId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 26, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 28, "General.Upload"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 30, "labels.LectureAttendees"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](34, _c1))("length", ctx.itemsCount)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_pipes_NewDate_pipe__WEBPACK_IMPORTED_MODULE_4__.NewDatePipe],
  styles: [".mat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InVwbG9hZC1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jaGVja2JveCB7XHJcbiAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 37696:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/upload-exam-student-grades/upload-exam-student-grades.component.ts ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadExamStudentGradesComponent": function() { return /* binding */ UploadExamStudentGradesComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_admin_models_admin_exam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/models/admin/exam */ 82289);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



















function UploadExamStudentGradesComponent_div_30_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var err_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", err_r3, " ");
  }
}

function UploadExamStudentGradesComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, UploadExamStudentGradesComponent_div_30_li_10_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "labels.StudentCodesFailureList"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.errors);
  }
} // import { IWhatsAppResponse } from "app/admin/models/whatsApp/whatsApp";


var UploadExamStudentGradesComponent = /*#__PURE__*/function () {
  function UploadExamStudentGradesComponent(route, fb, location, toastr, ExamsService, AuthService, spinner) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UploadExamStudentGradesComponent);

    this.route = route;
    this.fb = fb;
    this.location = location;
    this.toastr = toastr;
    this.ExamsService = ExamsService;
    this.AuthService = AuthService;
    this.spinner = spinner;
    this.errorMsg = false;
    this.Exam = new app_admin_models_admin_exam__WEBPACK_IMPORTED_MODULE_2__.ExamViewModel();
    this.route.paramMap.subscribe(function (params) {
      _this.Exam.id = parseInt(params.get("examId"));
    });
    this.getExamById(this.Exam.id);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadExamStudentGradesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.Exam.EduCompId = this.AuthService.getEduCompId();
      this.myForm = this.fb.group({
        examId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        file: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        examGrade: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]]
      });
    }
  }, {
    key: "getExamById",
    value: function getExamById(examId) {
      var _this2 = this;

      this.spinner.show();
      this.ExamsService.getExamById(examId).subscribe(function (response) {
        console.log("getExamById: ", response);

        if (response) {
          _this2.Exam = response;
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "UploadExamStudentGrades",
    value: function UploadExamStudentGrades() {
      var _this3 = this;

      if (this.myForm.valid) {
        this.spinner.show();
        this.ExamsService.UploadExamStudentGrades(this.myForm.value).subscribe(function (res) {
          if (res.isSendAllSuccess) {
            _this3.toastr.success("تم رفع الدرجات");
          } else if (!res.isSendAllSuccess) {
            _this3.toastr.error("لم يتم رفع جميع الدرجات");

            _this3.errors = res.errors;
          }

          _this3.spinner.hide();
        });
      }
    } //Attache File

  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this4 = this;

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
          console.log(data);

          _this4.myForm.controls["file"].setValue(data);
        };
      }
    }
  }]);

  return UploadExamStudentGradesComponent;
}();

UploadExamStudentGradesComponent.ɵfac = function UploadExamStudentGradesComponent_Factory(t) {
  return new (t || UploadExamStudentGradesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_4__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

UploadExamStudentGradesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UploadExamStudentGradesComponent,
  selectors: [["app-upload-exam-grades"]],
  decls: 31,
  vars: 16,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/exams/exams-index", 1, "btn", "btn-warning", "bg-light-warning", "float-right"], [1, "container-fluid", 3, "formGroup"], ["type", "hidden", "id", "examId", "formControlName", "examId", 3, "ngModel"], [1, "col-4"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "examGrade"], ["accept", ".xlsx,.xls", "type", "file", 1, "form-control", 3, "change"], ["fileInput", ""], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["class", "row", 4, "ngIf"], [1, "col-6"], [1, "list-group"], ["class", "list-group-item disabled", 4, "ngFor", "ngForOf"], [1, "list-group-item", "disabled"]],
  template: function UploadExamStudentGradesComponent_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UploadExamStudentGradesComponent_Template_input_change_24_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadExamStudentGradesComponent_Template_button_click_27_listener() {
        return ctx.UploadExamStudentGrades();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UploadExamStudentGradesComponent_div_30_Template, 11, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 8, "Exam.StudentGradesUpload"), " - ", ctx.Exam.exam_ar_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 10, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.Exam.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 12, "Exam.Grade"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 14, "General.Upload"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.errors == null ? null : ctx.errors.length) > 0);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZXhhbS1zdHVkZW50LWdyYWRlcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 55935:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/educational-setup-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalSetupRoutingModule": function() { return /* binding */ EducationalSetupRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _EducationalSubject_add_materials_add_main_data_add_main_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EducationalSubject/add-materials/add-main-data/add-main-data.component */ 61803);
/* harmony import */ var _EducationalSubject_manually_attendance_manually_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EducationalSubject/manually-attendance/manually-attendance.component */ 71323);
/* harmony import */ var _EducationalSubject_material_search_material_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EducationalSubject/material-search/material-search.component */ 1340);
/* harmony import */ var _EducationalSubject_subject_index_subject_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EducationalSubject/subject-index/subject-index.component */ 46172);
/* harmony import */ var _EducationalSubject_upload_attendance_upload_attendance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EducationalSubject/upload-attendance/upload-attendance.component */ 51813);
/* harmony import */ var _EducationalSubject_upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EducationalSubject/upload-exam-student-grades/upload-exam-student-grades.component */ 37696);
/* harmony import */ var _student_groups_add_student_group_add_student_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-groups/add-student-group/add-student-group.component */ 24542);
/* harmony import */ var _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-groups/student-group-index/student-group-index.component */ 37556);
/* harmony import */ var _student_groups_assign_student_to_group_assign_student_to_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-groups/assign-student-to-group/assign-student-to-group.component */ 17729);
/* harmony import */ var _EducationalSubject_material_custome_points_material_custome_points_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EducationalSubject/material-custome-points/material-custome-points.component */ 49568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);















var routes = [{
  path: "",
  redirectTo: "subjects"
}, {
  path: "subjects",
  children: [{
    path: "",
    redirectTo: "index"
  }, {
    path: "index",
    component: _EducationalSubject_subject_index_subject_index_component__WEBPACK_IMPORTED_MODULE_5__.SubjectIndexComponent
  }, {
    path: "material-search/:subjectId",
    component: _EducationalSubject_material_search_material_search_component__WEBPACK_IMPORTED_MODULE_4__.MaterialSearchComponent
  }, {
    path: "upload-attendance/:materialId",
    component: _EducationalSubject_upload_attendance_upload_attendance_component__WEBPACK_IMPORTED_MODULE_6__.UploadAttendanceComponent
  }, {
    path: "upload-exam-student-grades/:examId",
    component: _EducationalSubject_upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_7__.UploadExamStudentGradesComponent
  }, {
    path: "add-material",
    component: _EducationalSubject_add_materials_add_main_data_add_main_data_component__WEBPACK_IMPORTED_MODULE_2__.AddMaterialMainDataComponent
  }, {
    path: "manually-attendance/:materialId",
    component: _EducationalSubject_manually_attendance_manually_attendance_component__WEBPACK_IMPORTED_MODULE_3__.ManuallyAttendanceComponent
  }, {
    path: "material-points/:materialId",
    component: _EducationalSubject_material_custome_points_material_custome_points_component__WEBPACK_IMPORTED_MODULE_11__.MaterialCustomePointsComponent
  }]
}, {
  path: "student-group",
  component: _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_9__.StudentGroupIndexComponent
}, {
  path: "add-group",
  component: _student_groups_add_student_group_add_student_group_component__WEBPACK_IMPORTED_MODULE_8__.AddStudentGroupComponent
}, {
  path: "assign-student-to-group",
  component: _student_groups_assign_student_to_group_assign_student_to_group_component__WEBPACK_IMPORTED_MODULE_10__.AssignStudentToGroupComponent
}];
var EducationalSetupRoutingModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EducationalSetupRoutingModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EducationalSetupRoutingModule);
});

EducationalSetupRoutingModule.ɵfac = function EducationalSetupRoutingModule_Factory(t) {
  return new (t || EducationalSetupRoutingModule)();
};

EducationalSetupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: EducationalSetupRoutingModule
});
EducationalSetupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](EducationalSetupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 43208:
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/educational-setup.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalSetupModule": function() { return /* binding */ EducationalSetupModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _educational_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./educational-setup-routing.module */ 55935);
/* harmony import */ var _EducationalSubject_subject_index_subject_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EducationalSubject/subject-index/subject-index.component */ 46172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _EducationalSubject_material_search_material_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EducationalSubject/material-search/material-search.component */ 1340);
/* harmony import */ var _EducationalSubject_upload_attendance_upload_attendance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EducationalSubject/upload-attendance/upload-attendance.component */ 51813);
/* harmony import */ var _EducationalSubject_add_materials_add_main_data_add_main_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EducationalSubject/add-materials/add-main-data/add-main-data.component */ 61803);
/* harmony import */ var _EducationalSubject_manually_attendance_manually_attendance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EducationalSubject/manually-attendance/manually-attendance.component */ 71323);
/* harmony import */ var _EducationalSubject_add_materials_add_material_parts_add_material_parts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EducationalSubject/add-materials/add-material-parts/add-material-parts.component */ 28974);
/* harmony import */ var _EducationalSubject_add_materials_add_material_files_add_material_files_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EducationalSubject/add-materials/add-material-files/add-material-files.component */ 22313);
/* harmony import */ var _EducationalSubject_add_materials_add_exams_add_material_exam_add_material_exam_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EducationalSubject/add-materials/add-exams/add-material-exam/add-material-exam.component */ 8544);
/* harmony import */ var _EducationalSubject_add_materials_add_exams_add_pop_question_add_pop_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EducationalSubject/add-materials/add-exams/add-pop-question/add-pop-question.component */ 79067);
/* harmony import */ var _EducationalSubject_upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EducationalSubject/upload-exam-student-grades/upload-exam-student-grades.component */ 37696);
/* harmony import */ var _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student-groups/student-group-index/student-group-index.component */ 37556);
/* harmony import */ var _student_groups_add_student_group_add_student_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student-groups/add-student-group/add-student-group.component */ 24542);
/* harmony import */ var _student_groups_assign_student_to_group_assign_student_to_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student-groups/assign-student-to-group/assign-student-to-group.component */ 17729);
/* harmony import */ var _EducationalSubject_material_custome_points_material_custome_points_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EducationalSubject/material-custome-points/material-custome-points.component */ 49568);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/shared/validators/date.adapter */ 89778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);



























var EducationalSetupModule = /*#__PURE__*/(0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EducationalSetupModule() {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EducationalSetupModule);
});

EducationalSetupModule.ɵfac = function EducationalSetupModule_Factory(t) {
  return new (t || EducationalSetupModule)();
};

EducationalSetupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: EducationalSetupModule
});
EducationalSetupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.DateAdapter,
    useClass: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_19__.AppDateAdapter
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_FORMATS,
    useValue: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_19__.APP_DATE_FORMATS
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _educational_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__.EducationalSetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_25__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_26__.NgxPaginationModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](EducationalSetupModule, {
    declarations: [_EducationalSubject_subject_index_subject_index_component__WEBPACK_IMPORTED_MODULE_3__.SubjectIndexComponent, _EducationalSubject_material_search_material_search_component__WEBPACK_IMPORTED_MODULE_6__.MaterialSearchComponent, _EducationalSubject_upload_attendance_upload_attendance_component__WEBPACK_IMPORTED_MODULE_7__.UploadAttendanceComponent, _EducationalSubject_add_materials_add_main_data_add_main_data_component__WEBPACK_IMPORTED_MODULE_8__.AddMaterialMainDataComponent, _EducationalSubject_manually_attendance_manually_attendance_component__WEBPACK_IMPORTED_MODULE_9__.ManuallyAttendanceComponent, _EducationalSubject_add_materials_add_material_parts_add_material_parts_component__WEBPACK_IMPORTED_MODULE_10__.AddMaterialPartsComponent, _EducationalSubject_add_materials_add_material_files_add_material_files_component__WEBPACK_IMPORTED_MODULE_11__.AddMaterialFilesComponent, _EducationalSubject_add_materials_add_exams_add_material_exam_add_material_exam_component__WEBPACK_IMPORTED_MODULE_12__.AddMaterialExamComponent, _EducationalSubject_add_materials_add_exams_add_pop_question_add_pop_question_component__WEBPACK_IMPORTED_MODULE_13__.AddPopQuestionComponent, _EducationalSubject_upload_exam_student_grades_upload_exam_student_grades_component__WEBPACK_IMPORTED_MODULE_14__.UploadExamStudentGradesComponent, _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_15__.StudentGroupIndexComponent, _student_groups_add_student_group_add_student_group_component__WEBPACK_IMPORTED_MODULE_16__.AddStudentGroupComponent, _student_groups_assign_student_to_group_assign_student_to_group_component__WEBPACK_IMPORTED_MODULE_17__.AssignStudentToGroupComponent, _EducationalSubject_material_custome_points_material_custome_points_component__WEBPACK_IMPORTED_MODULE_18__.MaterialCustomePointsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _educational_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__.EducationalSetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_25__.NgxSpinnerModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_26__.NgxPaginationModule],
    exports: [_EducationalSubject_subject_index_subject_index_component__WEBPACK_IMPORTED_MODULE_3__.SubjectIndexComponent]
  });
})();

/***/ }),

/***/ 24542:
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/student-groups/add-student-group/add-student-group.component.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentGroupComponent": function() { return /* binding */ AddStudentGroupComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_admin_services_Admin_studentsGroups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/studentsGroups.service */ 95262);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















function AddStudentGroupComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.AddGroup"), " ");
  }
}

function AddStudentGroupComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "labels.AddGroup"), " - ", ctx_r1.groupName, " ");
  }
}

function AddStudentGroupComponent_mat_hint_21_span_1_Template(rf, ctx) {
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

function AddStudentGroupComponent_mat_hint_21_span_2_Template(rf, ctx) {
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

function AddStudentGroupComponent_mat_hint_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddStudentGroupComponent_mat_hint_21_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddStudentGroupComponent_mat_hint_21_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.groupNameCtrl == null ? null : ctx_r2.groupNameCtrl.errors == null ? null : ctx_r2.groupNameCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.groupNameCtrl == null ? null : ctx_r2.groupNameCtrl.errors == null ? null : ctx_r2.groupNameCtrl.errors.whiteSpace);
  }
}

function AddStudentGroupComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teach_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", teach_r12.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", teach_r12.teacher_ar_name, " ");
  }
}

function AddStudentGroupComponent_mat_hint_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddStudentGroupComponent_mat_hint_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddStudentGroupComponent_mat_hint_32_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.teacherIdCtrl == null ? null : ctx_r4.teacherIdCtrl.errors == null ? null : ctx_r4.teacherIdCtrl.errors.required);
  }
}

function AddStudentGroupComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", subject_r14.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", subject_r14.Text, " ");
  }
}

function AddStudentGroupComponent_mat_hint_43_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.MustChoosevalue"), " ");
  }
}

function AddStudentGroupComponent_mat_hint_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddStudentGroupComponent_mat_hint_43_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.subjectIdCtrl == null ? null : ctx_r6.subjectIdCtrl.errors == null ? null : ctx_r6.subjectIdCtrl.errors.required);
  }
}

function AddStudentGroupComponent_mat_hint_50_span_1_Template(rf, ctx) {
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

function AddStudentGroupComponent_mat_hint_50_span_2_Template(rf, ctx) {
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

function AddStudentGroupComponent_mat_hint_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddStudentGroupComponent_mat_hint_50_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddStudentGroupComponent_mat_hint_50_span_2_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.maxLimitCtrl == null ? null : ctx_r7.maxLimitCtrl.errors == null ? null : ctx_r7.maxLimitCtrl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.maxLimitCtrl == null ? null : ctx_r7.maxLimitCtrl.errors == null ? null : ctx_r7.maxLimitCtrl.errors.whiteSpace);
  }
}

function AddStudentGroupComponent_mat_card_actions_65_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddStudentGroupComponent_mat_card_actions_65_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r19.OnEdit();
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

function AddStudentGroupComponent_mat_card_actions_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-actions", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddStudentGroupComponent_mat_card_actions_65_button_1_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.groupId > 0);
  }
}

function AddStudentGroupComponent_button_67_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddStudentGroupComponent_button_67_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r21.addStudyingGroup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "General.Add"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var AddStudentGroupComponent = /*#__PURE__*/function () {
  function AddStudentGroupComponent(fb, route, authserv, router, msg, GeneralService, // private toastr: ToastrService,
  StudentsGroupsService, spinner) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddStudentGroupComponent);

    this.fb = fb;
    this.route = route;
    this.authserv = authserv;
    this.router = router;
    this.msg = msg;
    this.GeneralService = GeneralService;
    this.StudentsGroupsService = StudentsGroupsService;
    this.spinner = spinner;
    this.groupId = 0; //teachers: ITeacherDropModel[] = [];

    this.Teachers = [];
    this.subjects = [];
    this.submitted = false;
    this.route.queryParamMap.subscribe(function (params) {
      _this.groupId = Number(params.get("groupId"));

      if (_this.groupId > 0) {
        _this.getGroupById(_this.groupId);
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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddStudentGroupComponent, [{
    key: "teacherIdCtrl",
    get: function get() {
      return this.myForm.get("teacherUserId");
    }
  }, {
    key: "groupNameCtrl",
    get: function get() {
      return this.myForm.get("groupName");
    }
  }, {
    key: "maxLimitCtrl",
    get: function get() {
      return this.myForm.get("maxLimit");
    }
  }, {
    key: "subjectIdCtrl",
    get: function get() {
      return this.myForm.get("subjectId");
    }
  }, {
    key: "currentYearCtrl",
    get: function get() {
      return this.myForm.get("currentYear");
    }
  }, {
    key: "IdCtrl",
    get: function get() {
      return this.myForm.get("Id");
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.myForm = this.fb.group({
        Id: "",
        groupName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        teacherUserId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        subjectId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        maxLimit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        currentYear: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        EducompId: this.EduCompId,
        Publish: [1],
        IsHidden: [0]
      });
      this.getTeachersByEducompId();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getTeachersByEducompId();
      }); // this.authserv.branchId.subscribe((e) => {
      //   this.branchId = e.branchId;
      // });
    }
  }, {
    key: "getGroupById",
    value: function getGroupById(groupId) {
      var _this3 = this;

      this.StudentsGroupsService.getGroupById(groupId).subscribe(function (res) {
        var _a, _b, _c, _d; // console.log("getGroupById", res);


        (_a = _this3.teacherIdCtrl) === null || _a === void 0 ? void 0 : _a.setValue(res.teacherId);

        _this3.getSubjectByTeacherId();

        _this3.groupId = res.Id;

        _this3.IdCtrl.setValue(res.Id);

        _this3.groupName = res === null || res === void 0 ? void 0 : res.Name;
        (_b = _this3.groupNameCtrl) === null || _b === void 0 ? void 0 : _b.setValue(res.Name);
        (_c = _this3.maxLimitCtrl) === null || _c === void 0 ? void 0 : _c.setValue(res.maxLimit);
        (_d = _this3.currentYearCtrl) === null || _d === void 0 ? void 0 : _d.setValue(res.currentYear);

        _this3.subjectIdCtrl.setValue(String(res === null || res === void 0 ? void 0 : res.subjectId));
      });
    }
  }, {
    key: "addStudyingGroup",
    value: function addStudyingGroup() {
      var _this4 = this;

      this.submitted = true; // if (this.groupId != null) this.FormCtrls.Id.setValue(this.groupId);

      var valid = this.myForm.valid;

      if (valid) {
        this.spinner.show(); // console.log("form data", this.myForm.value);

        this.StudentsGroupsService.addStudyingGroup(this.myForm.value).subscribe(function (res) {
          console.log("group added", res);

          if (res.returnValue == 1) {
            _this4.msg.success("تم إضافة المجموعة");
          } else _this4.msg.error(res.returnString);

          _this4.spinner.hide();
        });
      }
    }
  }, {
    key: "OnEdit",
    value: function OnEdit() {
      var _this5 = this;

      if (this.myForm.valid) {
        if (this.groupId > 0) {
          this.myForm.controls["Id"].setValue(this.groupId);
        } // console.log("update form values", this.myForm.value);


        this.spinner.show();
        this.StudentsGroupsService.addStudyingGroup(this.myForm.value).subscribe(function (response) {
          if (response.returnValue == 1) {
            //  console.log("update group", response);
            _this5.msg.success("تم تعديل المجموعة ");

            _this5.submitted = false;
          }

          _this5.spinner.hide();
        });
      }
    }
  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId() {
      var _this6 = this;

      this.GeneralService.getTeachersByEducompId(this.EduCompId).subscribe(function (res) {
        _this6.Teachers = res.lstTeachers; // console.log("lst",this.Teachers);
      });
    }
  }, {
    key: "getSubjectByTeacherId",
    value: function getSubjectByTeacherId() {
      var _this7 = this;

      var _a;

      if ((_a = this.teacherIdCtrl) === null || _a === void 0 ? void 0 : _a.value) {
        this.GeneralService.getSubjectByTeacherId(this.teacherIdCtrl.value).subscribe(function (res) {
          // console.log("subject", res);
          _this7.subjects = res.lsts;
        });
      }
    }
  }]);

  return AddStudentGroupComponent;
}();

AddStudentGroupComponent.ɵfac = function AddStudentGroupComponent_Factory(t) {
  return new (t || AddStudentGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_studentsGroups_service__WEBPACK_IMPORTED_MODULE_4__.StudentsGroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService));
};

AddStudentGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddStudentGroupComponent,
  selectors: [["app-add-student-group"]],
  decls: 68,
  vars: 46,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["mat-raised-button", "", "routerLink", "../student-group", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "formControlName", "groupName"], ["class", "danger", 4, "ngIf"], ["formControlName", "teacherUserId", 3, "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subjectId"], ["matInput", "", "type", "number", "formControlName", "maxLimit"], [1, "col-md-12", "col-12"], ["formControlName", "currentYear", 1, "row"], [1, "col-4"], [3, "value"], ["align", "end", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-primary bg-light-info", 3, "click", 4, "ngIf"], [1, "danger"], ["mat-raised-button", "", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-primary", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"]],
  template: function AddStudentGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddStudentGroupComponent_span_5_Template, 3, 3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddStudentGroupComponent_span_6_Template, 3, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 3);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddStudentGroupComponent_mat_hint_21_Template, 3, 2, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function AddStudentGroupComponent_Template_mat_select_selectionChange_27_listener() {
        return ctx.getSubjectByTeacherId();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AddStudentGroupComponent_mat_option_31_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AddStudentGroupComponent_mat_hint_32_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, AddStudentGroupComponent_mat_option_42_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, AddStudentGroupComponent_mat_hint_43_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, AddStudentGroupComponent_mat_hint_50_Template, 3, 2, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "mat-radio-group", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-radio-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](60, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-radio-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](64, "translate");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, AddStudentGroupComponent_mat_card_actions_65_Template, 2, 1, "mat-card-actions", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-card-actions", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, AddStudentGroupComponent_button_67_Template, 4, 3, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.groupId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.groupId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](44, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 24, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 26, "labels.GroupName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.groupNameCtrl == null ? null : ctx.groupNameCtrl.invalid) && ((ctx.groupNameCtrl == null ? null : ctx.groupNameCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 28, "Material.Teacher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 30, "Material.Teacher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.teacherIdCtrl == null ? null : ctx.teacherIdCtrl.invalid) && ((ctx.teacherIdCtrl == null ? null : ctx.teacherIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 32, "Material.Subjects"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 34, "Material.Subjects"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.subjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.subjectIdCtrl == null ? null : ctx.subjectIdCtrl.invalid) && ((ctx.subjectIdCtrl == null ? null : ctx.subjectIdCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 36, "labels.MaxLimit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.maxLimitCtrl == null ? null : ctx.maxLimitCtrl.invalid) && ((ctx.maxLimitCtrl == null ? null : ctx.maxLimitCtrl.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 38, "labels.EducationalYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](60, 40, "labels.CurrentYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](64, 42, "labels.NextYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.groupId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.groupId == 0);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3R1ZGVudC1ncm91cC5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 17729:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/student-groups/assign-student-to-group/assign-student-to-group.component.ts ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignStudentToGroupComponent": function() { return /* binding */ AssignStudentToGroupComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_admin_services_Admin_studentsGroups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/studentsGroups.service */ 95262);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

























function AssignStudentToGroupComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function AssignStudentToGroupComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r12.Name);
  }
}

function AssignStudentToGroupComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.Email"), " ");
  }
}

function AssignStudentToGroupComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r13.Email);
  }
}

function AssignStudentToGroupComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.MobileNo"), " ");
  }
}

function AssignStudentToGroupComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ele_r14.Mobile);
  }
}

function AssignStudentToGroupComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AssignStudentToGroupComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssignStudentToGroupComponent_td_68_Template_button_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var ele_r15 = restoredCtx.$implicit;
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r16.openDeleateDialog(ele_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AssignStudentToGroupComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 34);
  }
}

function AssignStudentToGroupComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 35);
  }
}

function AssignStudentToGroupComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](54);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1() {
  return [10];
};

var AssignStudentToGroupComponent = /*#__PURE__*/function () {
  function AssignStudentToGroupComponent(route, authserv, router, fb, StudentsGroupsService, toastr, dialog, spinner) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssignStudentToGroupComponent);

    this.route = route;
    this.authserv = authserv;
    this.router = router;
    this.fb = fb;
    this.StudentsGroupsService = StudentsGroupsService;
    this.toastr = toastr;
    this.dialog = dialog;
    this.spinner = spinner;
    this.groupId = 0;
    this.p = 1;
    this.groupMaxCount = 0;
    this.groupCount = 0;
    this.ExcelFile = null;
    this.students = [];
    this.displayedColumns = ["Name", "Email", "Mobile", "actions"];
    this.route.queryParamMap.subscribe(function (params) {
      _this.groupId = Number(params.get("groupId"));
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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AssignStudentToGroupComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId();
      this.myForm = this.fb.group({
        page: [1],
        groupId: [this.groupId],
        EduCompId: [this.EduCompId],
        emailQuery: [""],
        mobileQuery: [""]
      });
      this.searchStudents(1);
    }
  }, {
    key: "EduCompIdCtrl",
    get: function get() {
      return this.myForm.get("EduCompId");
    }
  }, {
    key: "groupIdCtrl",
    get: function get() {
      return this.myForm.get("groupId");
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.EduCompIdCtrl.setValue(e.EduCompId);

        _this2.searchStudents(1);
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.searchStudents(1);
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
    key: "searchStudents",
    value: function searchStudents(p) {
      var _this3 = this;

      var _a;

      (_a = this.myForm.controls["page"]) === null || _a === void 0 ? void 0 : _a.setValue(p);
      this.p = p;
      this.spinner.show();
      this.p = p;
      this.StudentsGroupsService.searchStudents(this.myForm.value).subscribe(function (res) {
        _this3.students = res.List; // console.log("students", this.students);

        _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res.List); // this.groupMaxCount = res.List.TotalItemCount;

        _this3.groupCount = res.Count;
        console.log("Count", res.Count);

        _this3.spinner.hide();
      });
    }
  }, {
    key: "addStudent",
    value: function addStudent() {
      var _this4 = this;

      this.spinner.show();
      console.log("form values add", this.myForm.value);
      this.StudentsGroupsService.checkStudent(this.myForm.value).subscribe(function (student) {
        var _a; // console.log("check student", student);


        if (student.InGroup) {
          _this4.toastr.info("هذا الطالب موجود مسبقاَ داخل المجموعة");

          return;
        } else {
          _this4.spinner.show(); // console.log("student", student);


          _this4.StudentsGroupsService.addStudent((_a = student.student) === null || _a === void 0 ? void 0 : _a.userId, _this4.groupId).subscribe(function (res) {
            // console.log('addStudent', res);
            if (res.returnString == "Student already exists in a group with the same teacher and subject") _this4.toastr.info("هذا الطالب موجود مسبقاَ داخل مجموعة لنفس المادة ونفس المدرس");else {
              _this4.toastr.success("تم إضافة الطالب بنجاح");

              _this4.searchStudents(1);
            }

            _this4.spinner.hide();
          });
        }
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(student) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: student.Name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteStudent(student);
      });
    }
  }, {
    key: "deleteStudent",
    value: function deleteStudent(student) {
      var _this6 = this;

      this.spinner.show();
      this.StudentsGroupsService.deleteStudent(student.userId, this.groupId).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this6.dataSource.data.findIndex(function (e) {
            return e = student;
          });

          _this6.dataSource.data.splice(i, 1);

          _this6.dataSource.paginator = _this6.paginator;

          _this6.toastr.success("تم حذف الطالب من المجموعة");
        } else _this6.toastr.warning(res);

        _this6.spinner.hide();
      });
    }
  }, {
    key: "uploadStudentsByExcel",
    value: function uploadStudentsByExcel() {
      var _this7 = this;

      if (this.ExcelFile == null) this.toastr.info("يجب إرفاق Excel File");else {
        this.spinner.show();
        this.StudentsGroupsService.uploadStudentsByExcel({
          ExcelFile: this.ExcelFile,
          groupId: this.groupId
        }).subscribe(function (res) {
          if (res.returnValue == 1) _this7.toastr.success("تم رفع الملف بنجاح ");else console.log("ExcelFile", res);

          _this7.spinner.hide();
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
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
            FileAsBase64: fileReder.replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", ""),
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };
          _this8.ExcelFile = data;
        };
      }
    }
  }]);

  return AssignStudentToGroupComponent;
}();

AssignStudentToGroupComponent.ɵfac = function AssignStudentToGroupComponent_Factory(t) {
  return new (t || AssignStudentToGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_Admin_studentsGroups_service__WEBPACK_IMPORTED_MODULE_4__.StudentsGroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

AssignStudentToGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AssignStudentToGroupComponent,
  selectors: [["app-assign-student-to-group"]],
  viewQuery: function AssignStudentToGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 73,
  vars: 35,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "../student-group", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", 1, "btn", "btn-warning", "float-right", 3, "click"], [1, "fa", "fa-search"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "click"], [1, "fa", "fa-plus"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "emailQuery"], ["matInput", "", "type", "text", "formControlName", "mobileQuery"], ["type", "file", "name", "uploadedFile", 1, "file-upload", 3, "change"], ["type", "button", 1, "btn", "btn-primary", "pull-left", "ad-qus", "font-dro", 3, "click"], [1, "fa", "fa-upload"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Mobile"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-mini-fab", "", "color", "warn", "matTooltip", "delete student", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function AssignStudentToGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssignStudentToGroupComponent_Template_a_click_10_listener() {
        return ctx.searchStudents(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssignStudentToGroupComponent_Template_a_click_14_listener() {
        return ctx.addStudent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-card-content", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AssignStudentToGroupComponent_Template_input_change_40_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssignStudentToGroupComponent_Template_button_click_42_listener() {
        return ctx.uploadStudentsByExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-form-field", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AssignStudentToGroupComponent_Template_input_keyup_53_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "table", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](57, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, AssignStudentToGroupComponent_th_58_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, AssignStudentToGroupComponent_td_59_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](60, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, AssignStudentToGroupComponent_th_61_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, AssignStudentToGroupComponent_td_62_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](63, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, AssignStudentToGroupComponent_th_64_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, AssignStudentToGroupComponent_td_65_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](66, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, AssignStudentToGroupComponent_th_67_Template, 2, 0, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, AssignStudentToGroupComponent_td_68_Template, 4, 0, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, AssignStudentToGroupComponent_tr_69_Template, 1, 0, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, AssignStudentToGroupComponent_tr_70_Template, 1, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, AssignStudentToGroupComponent_tr_71_Template, 3, 1, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "mat-paginator", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function AssignStudentToGroupComponent_Template_mat_paginator_page_72_listener($event) {
        return ctx.searchStudents($event.pageIndex + 1);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 16, "labels.AssignStudentToGroup"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 18, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 20, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 22, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 24, "labels.Email"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 26, "labels.MobileNo"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 28, "labels.ExcelSheet"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 30, "General.Upload"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](34, _c1))("length", ctx.groupCount)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ24tc3R1ZGVudC10by1ncm91cC5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 37556:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/student-groups/student-group-index/student-group-index.component.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentGroupIndexComponent": function() { return /* binding */ StudentGroupIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_admin_services_Admin_studentsGroups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/Admin/studentsGroups.service */ 95262);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





























function StudentGroupIndexComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teach_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", teach_r15.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", teach_r15.teacher_ar_name, " ");
  }
}

function StudentGroupIndexComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function StudentGroupIndexComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ele_r16.Name);
  }
}

function StudentGroupIndexComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.Teacher"), " ");
  }
}

function StudentGroupIndexComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ele_r17.Teacher);
  }
}

function StudentGroupIndexComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.Materials"), " ");
  }
}

function StudentGroupIndexComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ele_r18.Subject);
  }
}

function StudentGroupIndexComponent_th_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.MaxLimit"), " ");
  }
}

function StudentGroupIndexComponent_td_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ele_r19.maxLimit);
  }
}

function StudentGroupIndexComponent_th_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 34);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    groupId: a0,
    functionId: a1
  };
};

function StudentGroupIndexComponent_td_78_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, group_r20.Id, ctx_r23.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "labels.AssignStudentToGroup"), " ");
  }
}

function StudentGroupIndexComponent_td_78_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, group_r20.Id, ctx_r24.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "General.Edit"), " ");
  }
}

function StudentGroupIndexComponent_td_78_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StudentGroupIndexComponent_td_78_ng_container_5_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      var group_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r28.openDeleateDialog(group_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

function StudentGroupIndexComponent_td_78_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StudentGroupIndexComponent_td_78_ng_container_5_a_1_Template, 4, 7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, StudentGroupIndexComponent_td_78_ng_container_5_a_2_Template, 4, 7, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, StudentGroupIndexComponent_td_78_ng_container_5_a_3_Template, 4, 3, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fun_r22.functionName === "AssignStudentToGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fun_r22.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fun_r22.functionName === "Delete");
  }
}

function StudentGroupIndexComponent_td_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, StudentGroupIndexComponent_td_78_ng_container_5_Template, 4, 3, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.rowFunctions);
  }
}

function StudentGroupIndexComponent_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 48);
  }
}

function StudentGroupIndexComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 49);
  }
}

function StudentGroupIndexComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](61);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r1.value, "\" ");
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

var StudentGroupIndexComponent = /*#__PURE__*/function () {
  function StudentGroupIndexComponent(route, fb, StudentsGroupsService, toastr, authserv, dialog, GeneralService, spinner) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentGroupIndexComponent);

    this.route = route;
    this.fb = fb;
    this.StudentsGroupsService = StudentsGroupsService;
    this.toastr = toastr;
    this.authserv = authserv;
    this.dialog = dialog;
    this.GeneralService = GeneralService;
    this.spinner = spinner;
    this.p = 1;
    this.maxSize = 9;
    this.Teachers = [];
    this.groups = [];
    this.displayedColumns = ["name", "teacher", "material", "maxno", "actions"];
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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentGroupIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId(); // console.log("teachers",this.Teachers);

      this.myForm = this.fb.group({
        nameQuery: [""],
        teacherUserId: [""],
        EduCompId: [this.EduCompId],
        currentYear: [1],
        page: [""]
      });
      this.getTeachersByEducompId();
      this.getStudentsGroups(1);
    }
  }, {
    key: "EduCompIdCtrl",
    get: function get() {
      return this.myForm.get("EduCompId");
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.EduCompIdCtrl.setValue(e.EduCompId);

        _this2.getStudentsGroups(1);

        _this2.getTeachersByEducompId();
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.getStudentsGroups(1);

        _this2.getTeachersByEducompId();
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }, {
    key: "getStudentsGroups",
    value: function getStudentsGroups(p) {
      var _this3 = this;

      var _a;

      (_a = this.myForm.controls["page"]) === null || _a === void 0 ? void 0 : _a.setValue(p);
      this.p = p;
      this.spinner.show(); //console.log("form value",this.myForm.value);

      this.StudentsGroupsService.getStudentsGroups(this.myForm.value).subscribe(function (res) {
        _this3.groups = res.List; // console.log("groups", res);

        _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(res.List);
        _this3.itemsCount = res.TotalItemCount;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(group) {
      var _this4 = this;

      this.StudentsGroupsService.RemoveStudentGroup(group.Id).subscribe(function (response) {
        if (response) {
          //  console.log('deleted: ', response);
          var deletedIndex = _this4.dataSource.data.findIndex(function (e) {
            return e.Id == group.Id;
          });

          _this4.dataSource.data.splice(deletedIndex, 1);

          _this4.dataSource.paginator = _this4.paginator;
          _this4.dataSource.sort = _this4.sort;

          _this4.toastr.success("تم حذف المجموعة");
        }
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(group) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: group.Name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.removeGroup(group);
      });
    }
  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId() {
      var _this6 = this;

      this.GeneralService.getTeachersByEducompId(this.EduCompId).subscribe(function (res) {
        _this6.Teachers = res.lstTeachers;
      });
    }
  }]);

  return StudentGroupIndexComponent;
}();

StudentGroupIndexComponent.ɵfac = function StudentGroupIndexComponent_Factory(t) {
  return new (t || StudentGroupIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_admin_services_Admin_studentsGroups_service__WEBPACK_IMPORTED_MODULE_3__.StudentsGroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService));
};

StudentGroupIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: StudentGroupIndexComponent,
  selectors: [["app-student-group-index"]],
  viewQuery: function StudentGroupIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 83,
  vars: 44,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "../add-group", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["formControlName", "teacherUserId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "nameQuery"], [1, "col-md-12", "col-12"], ["formControlName", "currentYear", 1, "row"], [1, "col-4"], [3, "value"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "teacher"], ["matColumnDef", "material"], ["matColumnDef", "maxno"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", "routerLink", "../assign-student-to-group", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../add-group", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../assign-student-to-group", 3, "queryParams"], [1, "fa", "fa-edit", "mr-2"], ["ngbDropdownItem", "", "routerLink", "../add-group", 3, "queryParams"], ["ngbDropdownItem", "", 3, "click"], [1, "fa", "fa-times", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function StudentGroupIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StudentGroupIndexComponent_Template_a_click_11_listener() {
        return ctx.getStudentsGroups(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-card-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, StudentGroupIndexComponent_mat_option_29_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-radio-group", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-radio-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-radio-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "translate");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function StudentGroupIndexComponent_Template_input_keyup_60_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](64, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, StudentGroupIndexComponent_th_65_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, StudentGroupIndexComponent_td_66_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](67, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, StudentGroupIndexComponent_th_68_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, StudentGroupIndexComponent_td_69_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](70, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, StudentGroupIndexComponent_th_71_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, StudentGroupIndexComponent_td_72_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](73, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, StudentGroupIndexComponent_th_74_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, StudentGroupIndexComponent_td_75_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](76, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, StudentGroupIndexComponent_th_77_Template, 1, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, StudentGroupIndexComponent_td_78_Template, 6, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, StudentGroupIndexComponent_tr_79_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, StudentGroupIndexComponent_tr_80_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, StudentGroupIndexComponent_tr_81_Template, 3, 1, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "mat-paginator", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function StudentGroupIndexComponent_Template_mat_paginator_page_82_listener($event) {
        return ctx.getStudentsGroups($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 21, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](41, _c1, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 23, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 25, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 27, "Material.Teacher"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 29, "Material.Teacher"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.Teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 31, "labels.Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 33, "labels.EducationalYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](45, 35, "labels.CurrentYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 37, "labels.NextYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 39, "Material.Groups"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](43, _c2))("length", ctx.itemsCount)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWdyb3VwLWluZGV4LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 95262:
/*!****************************************************************!*\
  !*** ./src/app/admin/services/Admin/studentsGroups.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsGroupsService": function() { return /* binding */ StudentsGroupsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var StudentsGroupsService = /*#__PURE__*/function () {
  function StudentsGroupsService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentsGroupsService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentsGroupsService, [{
    key: "addStudyingGroup",
    value: function addStudyingGroup(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "studyinggroup/save-studying-groups"), body);
    }
  }, {
    key: "getStudentsGroups",
    value: function getStudentsGroups(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "studyinggroup/return-studying-groups"), body);
    }
  }, {
    key: "getGroupById",
    value: function getGroupById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "studyinggroup/get-group-by-Id/").concat(id));
    }
  }, {
    key: "RemoveStudentGroup",
    value: function RemoveStudentGroup(groupId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "studyinggroup/delete-by-Id/").concat(groupId));
    }
  }, {
    key: "searchStudents",
    value: function searchStudents(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "studyinggroup/search-student-groups"), body);
    }
  }, {
    key: "checkStudent",
    value: function checkStudent(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "studyinggroup/search-student-in-group", body);
    }
  }, {
    key: "addStudent",
    value: function addStudent(studentId, groupId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "studyinggroup/add-student-groups/").concat(studentId, "/").concat(groupId));
    }
  }, {
    key: "deleteStudent",
    value: function deleteStudent(studentId, groupId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "studyinggroup/remove-student-groups/").concat(studentId, "/").concat(groupId));
    }
  }, {
    key: "uploadStudentsByExcel",
    value: function uploadStudentsByExcel(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "studyinggroup/upload-excel-student-groups", body);
    }
  }]);

  return StudentsGroupsService;
}();

StudentsGroupsService.ɵfac = function StudentsGroupsService_Factory(t) {
  return new (t || StudentsGroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

StudentsGroupsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StudentsGroupsService,
  factory: StudentsGroupsService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_educational-setup_educational-setup_module_ts.js.map