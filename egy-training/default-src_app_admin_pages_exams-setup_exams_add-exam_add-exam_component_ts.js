"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["default-src_app_admin_pages_exams-setup_exams_add-exam_add-exam_component_ts"],{

/***/ 38285:
/*!******************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exams/add-exam/add-exam.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddExamComponent": function() { return /* binding */ AddExamComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-sub-question/add-sub-question.component */ 69981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/auth/auth.service */ 16256);
/* harmony import */ var _services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/Admin/exams.service */ 63938);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/radio-button/radio-button.component */ 24724);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
































function AddExamComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "Navbar.newexam"), " ");
  }
}

function AddExamComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "Navbar.newesurvay"), " ");
  }
}

function AddExamComponent_span_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.EditExam"));
  }
}

function AddExamComponent_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "labels.EditSurvey"));
  }
}

function AddExamComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddExamComponent_span_4_span_1_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddExamComponent_span_4_span_2_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.type == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r2.exam_ar_name, " ");
  }
}

function AddExamComponent_i_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 23);
  }
}

var AddExamComponent = /*#__PURE__*/function () {
  function AddExamComponent(location, fb, authserv, examService, // private dialog: MatDialog,
  route, router, msg, generalService, dialog, datePipe, spinner, appStrings, data, dialogRef) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddExamComponent);

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
    this.appStrings = appStrings;
    this.data = data;
    this.dialogRef = dialogRef;
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
    this.isMandatoryRadioList = [{
      label: "labels.Yes",
      value: true
    }, {
      label: "labels.No",
      value: false
    }];
    this.type = data.type;
    this.subId = data.subjectId;
    this.unitId = data.unitId; // route.paramMap.subscribe((params) => {
    //   this.type = Number(params.get("typeId"));
    // });
    // route.paramMap.subscribe((params) => {
    //   this.subId = Number(params.get("courseId"));
    // });

    this.examId = data.examId;

    if (this.examId > 0) {
      this.getExamById();
      this.getAllGroupHeaderByExamId();
    }

    this.route.queryParamMap.subscribe(function (params) {
      // this.examId = Number(params.get("examId"));
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

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddExamComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      var _a, _b, _c, _d, _e, _f;

      this.myForm = this.fb.group({
        // countryId: [""],
        // stageId: [""],
        // educationYearId: [""],
        // subjectId: ["", [Validators.required]],
        // teacherUserId: ["", [Validators.required]],
        // examTypeId: ["", [Validators.required]],
        // unitId: [""],
        // lessionId: [""],
        examName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        examHours: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        examMinutes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        // examPrice: [0, [Validators.required, CustomeValidator.minusNum]],
        // discount: [""],
        // discountType: [""],
        fromDate: [""],
        toDate: [""],
        formHour: [""],
        toHours: [""],
        // resualtDate: [""],
        // resualtTime: [""],
        // canSellIndividually: [true, Validators.required],
        isRepeatable: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
        repeatNumbers: [1000],
        // repeatingPrice: [0],
        // hasCustomDiscount: [false, Validators.required],
        // sendWhatsAppMsg: [false, Validators.required],
        // isPublish: [0],
        degreeToPass: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        order: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]],
        isMandatory: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]]
      }, {
        validator: app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.dateBefore("fromDate", "toDate")
      });
      this.GroupHeadersForm = this.fb.group({
        examGroup: ["السؤال الاول", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
        examHeader: ["اختر  الإجابة الصحيحة", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
        examContent: [null]
      });
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId();
      (_a = this.FormCtrl.stageId) === null || _a === void 0 ? void 0 : _a.disable();
      (_b = this.FormCtrl.educationYearId) === null || _b === void 0 ? void 0 : _b.disable();
      (_c = this.FormCtrl.subjectId) === null || _c === void 0 ? void 0 : _c.disable();
      (_d = this.FormCtrl.teacherUserId) === null || _d === void 0 ? void 0 : _d.disable();
      (_e = this.FormCtrl.unitId) === null || _e === void 0 ? void 0 : _e.disable();
      (_f = this.FormCtrl.lessionId) === null || _f === void 0 ? void 0 : _f.disable();
      this.getAllCountieres();
      this.getAllExamTypes();
      this.getAllQuestionGroups();
      this.getAllQuestionHeaders();
      this.examTypeValidator();
      this.RepeatableValidator(); // on closing dialog by clicking outside dialog

      this.dialogRef.backdropClick().subscribe(function (ele) {
        _this2.onCloseDialog();
      });
    }
  }, {
    key: "onCloseDialog",
    value: function onCloseDialog() {
      var data = null;

      if (this.examId) {
        data = {
          id: this.examId,
          ar_name: this.exam_ar_name,
          type: this.appStrings.stageExam,
          order: this.order,
          isMandatory: this.isMandatory
        };
      }

      this.dialogRef.close(data);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;
      });
      this.authserv.branchId.subscribe(function (e) {
        _this3.branchId = e.branchId;
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
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "GroupHeadersFormCtrl",
    get: function get() {
      return this.GroupHeadersForm.controls;
    }
  }, {
    key: "getExamById",
    value: function getExamById() {
      var _this4 = this;

      this.spinner.show();
      this.examService.getExamById(this.examId).subscribe(function (response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m; // console.log("getExamById", response);


        if (response) {
          // this.FormCtrl.stageId?.enable();
          // this.FormCtrl.educationYearId?.enable();
          // this.FormCtrl.subjectId?.enable();
          // this.FormCtrl.teacherUserId?.enable();
          // this.FormCtrl.unitId?.enable();
          // this.FormCtrl.lessionId?.enable();
          (_a = _this4.FormCtrl.toHours) === null || _a === void 0 ? void 0 : _a.setValue(response === null || response === void 0 ? void 0 : response.toHour); // this.FormCtrl.isPublish?.setValue(response?.isPublish);
          // this.FormCtrl.discount?.setValue(response?.Discount);

          (_b = _this4.FormCtrl.examName) === null || _b === void 0 ? void 0 : _b.setValue(response === null || response === void 0 ? void 0 : response.exam_ar_name);
          _this4.exam_ar_name = response === null || response === void 0 ? void 0 : response.exam_ar_name;
          (_c = _this4.FormCtrl.formHour) === null || _c === void 0 ? void 0 : _c.setValue(response === null || response === void 0 ? void 0 : response.fromHour); // this.FormCtrl.examPrice?.setValue(response?.price);
          // this.FormCtrl.resualtTime?.setValue(response?.ResultTime);
          // this.FormCtrl.discountType?.setValue(response?.DiscountType);
          // this.FormCtrl.isRepeatable?.setValue(response?.repeatableExam);
          // this.isRepeatableExam = response?.repeatableExam;
          // this.FormCtrl.repeatNumbers?.setValue(response?.repeatableExam_Count);
          // this.FormCtrl.sendWhatsAppMsg?.setValue(response?.SendWhatsApp);
          // this.isSendWhats = response?.SendWhatsApp;
          // this.FormCtrl.hasCustomDiscount?.setValue(response?.Discount > 0);

          (_d = _this4.FormCtrl.canSellIndividually) === null || _d === void 0 ? void 0 : _d.setValue(response === null || response === void 0 ? void 0 : response.Individually_Purchased); // this.FormCtrl.countryId?.setValue(response.countryId);
          //  this.FormCtrl.examTypeId?.setValue(response.examTypeId);
          // this.FormCtrl.repeatingPrice?.setValue(response.StudentRepeatExamCost);

          var exam_minute = response.exam_period_minute % 60;
          var exam_hour = (response.exam_period_minute - exam_minute) / 60;
          (_e = _this4.FormCtrl.examMinutes) === null || _e === void 0 ? void 0 : _e.setValue(exam_minute);
          (_f = _this4.FormCtrl.examHours) === null || _f === void 0 ? void 0 : _f.setValue(exam_hour); // if (response.Lesson_ID != null) this.FormCtrl.examTypeId?.setValue(1);
          // if (response?.Unit_ID != null && response.Lesson_ID == null)
          //   this.FormCtrl.examTypeId?.setValue(2);

          if ((response === null || response === void 0 ? void 0 : response.Subject_ID) != null // response?.Unit_ID == null &&
          // response.Lesson_ID == null
          ) if ((response === null || response === void 0 ? void 0 : response.Subject_ID) == null && // response?.Unit_ID == null &&
          // response.Lesson_ID == null &&
          response.quiz == 1) // this.FormCtrl.examTypeId?.setValue(3);
            (_g = _this4.FormCtrl.examTypeId) === null || _g === void 0 ? void 0 : _g.setValue(4);
          (_h = _this4.FormCtrl.fromDate) === null || _h === void 0 ? void 0 : _h.setValue(response.Avilable_Date_From);
          (_j = _this4.FormCtrl.toDate) === null || _j === void 0 ? void 0 : _j.setValue(response.Avilable_Date_To); // this.FormCtrl.resualtDate?.setValue(response.ResultDate);
          // this.FormCtrl.countryId?.setValue(1);
          // this.onSelectCountry();
          // this.FormCtrl.stageId?.setValue(response.stageId);
          // this.onSelectStages();
          // this.FormCtrl.educationYearId?.setValue(response.eduYearId);
          // this.onSelectEducationYears();
          // this.FormCtrl.subjectId?.setValue(response?.main_subject_id);
          // this.onSelectSubjects();
          // this.FormCtrl.teacherUserId?.setValue(response?.teacherUserId);
          // this.FormCtrl.unitId?.setValue(response?.Unit_ID);
          // this.onSelectUnit();
          // this.FormCtrl.lessionId?.setValue(response?.Lesson_ID);
          // this.FormCtrl.stageId?.setValue(response.stageId);
          // this.FormCtrl.educationYearId?.setValue(response.eduYearId);
          // this.FormCtrl.teacherUserId?.setValue(response?.teacherUserId);
          // this.FormCtrl.unitId?.setValue(response?.Unit_ID);

          (_k = _this4.FormCtrl.degreeToPass) === null || _k === void 0 ? void 0 : _k.setValue(response.percentageToPass);
          (_l = _this4.FormCtrl.order) === null || _l === void 0 ? void 0 : _l.setValue(response.orderNum);
          _this4.order = response.orderNum;
          (_m = _this4.FormCtrl.isMandatory) === null || _m === void 0 ? void 0 : _m.setValue(response.isMandatory);
          _this4.isMandatory = response.isMandatory;
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "getAllGroupHeaderByExamId",
    value: function getAllGroupHeaderByExamId() {
      var _this5 = this;

      this.examService.getAllGroupHeaderByExamId(this.examId).subscribe(function (response) {
        if (response) {
          //  console.log("groupsHeadersLit : ", response);
          _this5.GroupsHeadersList = response;
          _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(response);
          _this5.itemsCount = response.length;
        }
      });
    }
  }, {
    key: "getAllQuestionGroups",
    value: function getAllQuestionGroups() {
      var _this6 = this;

      this.examService.getAllQuestionGroups().subscribe(function (response) {
        var _a;

        if (response) {
          _this6.examGroups = response; //  console.log("examGroups", this.examGroups);

          _this6.filteredExamGroups = (_a = _this6.GroupHeadersFormCtrl.examGroup) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (value) {
            return _this6.filter_question_group(value || "");
          }));
        }
      });
    }
  }, {
    key: "getAllQuestionHeaders",
    value: function getAllQuestionHeaders() {
      var _this7 = this;

      this.examService.getAllQuestionHeaders().subscribe(function (response) {
        var _a;

        if (response) {
          _this7.examHeaders = response;
          _this7.filteredExamHeaders = (_a = _this7.GroupHeadersFormCtrl.examHeader) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(function (value) {
            return _this7.filter_question_header(value || "");
          }));
        }
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _a, _b, _c, _d, _e, _f, _g, _h; // todo .. check for mandatory firlds


      var exam = {
        id: this.examId,
        Avilable_Date_From: this.datePipe.transform((_a = this.FormCtrl.fromDate) === null || _a === void 0 ? void 0 : _a.value),
        Avilable_Date_To: this.datePipe.transform(this.FormCtrl.toDate.value),
        // CustomDiscountApplied: this.FormCtrl.hasCustomDiscount?.value,
        // Discount: this.FormCtrl.discount?.value,
        // DiscountType: this.FormCtrl.discountType?.value,
        EduCompId: this.EduCompId,
        // Individually_Purchased: this.FormCtrl.canSellIndividually?.value,
        // ResultDate: this.datePipe.transform(this.FormCtrl.resualtDate.value),
        // ResultTime: this.FormCtrl.resualtTime?.value,
        // SendWhatsApp: this.FormCtrl.sendWhatsAppMsg?.value,
        // StudentRepeatExamCost: this.FormCtrl.repeatingPrice?.value,
        exam_ar_name: (_b = this.FormCtrl.examName) === null || _b === void 0 ? void 0 : _b.value,
        fromHour: (_c = this.FormCtrl.formHour) === null || _c === void 0 ? void 0 : _c.value,
        // lesson_ID: this.FormCtrl.lessionId?.value,
        // price: this.FormCtrl.examPrice?.value,
        repeatableExam: (_d = this.FormCtrl.isRepeatable) === null || _d === void 0 ? void 0 : _d.value,
        repeatableExam_Count: (_e = this.FormCtrl.repeatNumbers) === null || _e === void 0 ? void 0 : _e.value,
        Subject_ID: this.subId,
        Unit_ID: this.unitId,
        // teacherUserId: this.FormCtrl.teacherUserId?.value,
        // teacher_subject_id: this.FormCtrl.subjectId?.value,
        toHour: (_f = this.FormCtrl.toHours) === null || _f === void 0 ? void 0 : _f.value,
        // unit_ID: this.FormCtrl.unitId?.value,
        // exam_hour: this.FormCtrl.examHours?.value,
        // exam_minute: this.FormCtrl.examMinutes?.value,
        // isPublish: this.FormCtrl.isPublish?.value,
        percentageToPass: this.FormCtrl.degreeToPass.value,
        orderNum: this.FormCtrl.order.value,
        isMandatory: this.FormCtrl.isMandatory.value,
        exam_type_id: this.type
      };
      var toAddEdit = {
        exam_hour: (_g = this.FormCtrl.examHours) === null || _g === void 0 ? void 0 : _g.value,
        exam_minute: (_h = this.FormCtrl.examMinutes) === null || _h === void 0 ? void 0 : _h.value,
        // exam_type_id: this.type,
        exam: exam
      };
      console.log("toAdd ", toAddEdit); // if exam id = 0 the end point will add >> if the exam id > 0 the end point will edit

      this.addExam(toAddEdit);
    }
  }, {
    key: "addExam",
    value: function addExam(toAddEdit) {
      var _this8 = this;

      var validGroupHeadersForm = this.GroupHeadersForm.valid;
      this.submitted = true;

      if (this.examId == 0 && !validGroupHeadersForm) {
        this.GroupHeadsubmitted = true;
      } else {
        // if (
        //   this.FormCtrl.hasCustomDiscount?.value == true &&
        //   this.FormCtrl.repeatNumbers.value <= 0
        // ) {
        //   this.msg.warning("يجب ادخال عدد مرات التكرار");
        //   return;
        // }
        // if (
        //   this.FormCtrl.hasCustomDiscount?.value == true &&
        //   this.FormCtrl.repeatingPrice.value < 0
        // ) {
        //   this.msg.warning("يجب ادخال سعر تجديد الامتحان ");
        //   return;
        // }
        if (this.myForm.valid) {
          this.spinner.show();
          this.examService.addExam(toAddEdit).subscribe(function (response) {
            if (response.returnValue == 1 && response.examId > 0) {
              console.log("addExam", response);
              _this8.examId == 0 ? _this8.msg.success("General.AddSuccessfully") : _this8.msg.success("General.UpdeteSuccessfully");
              _this8.exam_ar_name = toAddEdit.exam.exam_ar_name;
              _this8.order = toAddEdit.exam.orderNum;
              _this8.isMandatory = toAddEdit.exam.isMandatory;
              _this8.examId = response.examId;

              _this8.router.navigate([], {
                queryParams: {
                  examId: response.examId
                },
                queryParamsHandling: "merge"
              });

              _this8.onAddExamGroupHeader();

              _this8.submitted = false; // this.examId=0;
              // this.myForm.reset();
            } else _this8.msg.error(response === null || response === void 0 ? void 0 : response.returnString);

            _this8.spinner.hide();
          });
        } else this.msg.error("General.FormNotValid");
      }
    }
  }, {
    key: "onAddExamGroupHeader",
    value: function onAddExamGroupHeader() {
      var _this9 = this;

      var _a, _b, _c, _d, _e; // let sameGroupWithSameHeader = this.GroupsHeadersList.find(
      //   (gh) =>
      //     gh.group_name == this.GroupHeadersFormCtrl.examGroup?.value &&
      //     gh.head_name == this.GroupHeadersFormCtrl.examHeader?.value
      // );


      var sameGroupWithSameHeader = (_b = (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.find(function (gh) {
        var _a, _b;

        return gh.group_name == ((_a = _this9.GroupHeadersFormCtrl.examGroup) === null || _a === void 0 ? void 0 : _a.value) && gh.head_name == ((_b = _this9.GroupHeadersFormCtrl.examHeader) === null || _b === void 0 ? void 0 : _b.value);
      });

      if (sameGroupWithSameHeader) {
        this.msg.info("Cannot add the same header with same group");
        return;
      }

      var tempExam = {
        id: this.examId
      };
      var ToAddExamGroupHeader = {
        exam_question_group_text: (_c = this.GroupHeadersFormCtrl.examGroup) === null || _c === void 0 ? void 0 : _c.value,
        exam_question_head_title: (_d = this.GroupHeadersFormCtrl.examContent) === null || _d === void 0 ? void 0 : _d.value,
        exam_question_head_text: (_e = this.GroupHeadersFormCtrl.examHeader) === null || _e === void 0 ? void 0 : _e.value,
        exam: tempExam
      };

      if (this.GroupHeadersForm.valid) {
        this.spinner.show();
        this.examService.addExamGroupHeader(ToAddExamGroupHeader).subscribe(function (headerResponse) {
          var _a, _b, _c, _d;

          if (headerResponse) {
            //  console.log('addExamGroupHeader', headerResponse);
            _this9.getAllGroupHeaderByExamId(); //   this.msg.success("General.AddSuccessfully");


            var tempExcamGroupHeader = {
              Id: headerResponse.exam_question_head_id,
              group_name: (_a = _this9.GroupHeadersFormCtrl.examGroup) === null || _a === void 0 ? void 0 : _a.value,
              head_name: (_b = _this9.GroupHeadersFormCtrl.examHeader) === null || _b === void 0 ? void 0 : _b.value,
              question_title: (_c = _this9.GroupHeadersFormCtrl.examContent) === null || _c === void 0 ? void 0 : _c.value
            }; //   this.GroupsHeadersList.push(tempExcamGroupHeader);
            // console.log("this.GroupsHeadersList", this.GroupsHeadersList);

            (_d = _this9.GroupHeadersFormCtrl.examContent) === null || _d === void 0 ? void 0 : _d.setValue(null);

            _this9.spinner.hide();
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
      (_a = this.GroupHeadersFormCtrl.examGroup) === null || _a === void 0 ? void 0 : _a.setValue(examGroupHeader === null || examGroupHeader === void 0 ? void 0 : examGroupHeader.questionNumber);
      (_b = this.GroupHeadersFormCtrl.examContent) === null || _b === void 0 ? void 0 : _b.setValue(examGroupHeader === null || examGroupHeader === void 0 ? void 0 : examGroupHeader.question_title);
      (_c = this.GroupHeadersFormCtrl.examHeader) === null || _c === void 0 ? void 0 : _c.setValue(examGroupHeader === null || examGroupHeader === void 0 ? void 0 : examGroupHeader.questionType);
    }
  }, {
    key: "editExamGroupHead",
    value: function editExamGroupHead() {
      var _this10 = this;

      var _a, _b, _c;

      var toEdit = {
        exam_question_head_id: this.examGroupHeaderIdToEdit,
        group: (_a = this.GroupHeadersFormCtrl.examGroup) === null || _a === void 0 ? void 0 : _a.value,
        head: (_b = this.GroupHeadersFormCtrl.examHeader) === null || _b === void 0 ? void 0 : _b.value,
        title: (_c = this.GroupHeadersFormCtrl.examContent) === null || _c === void 0 ? void 0 : _c.value
      }; // console.log('toEdit', toEdit);

      this.spinner.show();
      this.examService.editExamGroupHeader(toEdit).subscribe(function (editResponse) {
        var _a, _b;

        if (editResponse) {
          //   console.log('editResponse', editResponse);
          var toReplace = _this10.dataSource.data.find(function (gh) {
            return gh.id == _this10.examGroupHeaderIdToEdit;
          });

          if (toReplace) {
            toReplace.questionNumber = toEdit.group;
            toReplace.questionType = toEdit.head;
            toReplace.question_title = (_a = _this10.GroupHeadersFormCtrl.examContent) === null || _a === void 0 ? void 0 : _a.value;
          }

          _this10.editGroupHeaderMode = false;
          (_b = _this10.GroupHeadersFormCtrl.examContent) === null || _b === void 0 ? void 0 : _b.setValue(null);

          _this10.msg.success("General.UpdeteSuccessfully");
        }

        _this10.spinner.hide();
      });
    }
  }, {
    key: "removeExamGroupHead",
    value: function removeExamGroupHead(examGroupHeader) {
      var _this11 = this;

      this.spinner.show();
      this.examService.deleteExamGroupHeader(examGroupHeader.id).subscribe(function (deleteResponse) {
        // console.log('deleteResponse', deleteResponse);
        if (deleteResponse.returnValue == 1) {
          var todeleteIndex = _this11.dataSource.data.findIndex(function (gh) {
            return gh == examGroupHeader;
          });

          _this11.dataSource.data.splice(todeleteIndex, 1);

          _this11.dataSource.paginator = _this11.paginator;

          _this11.msg.success("General.DeleteSuccessfully");
        } else _this11.msg.error(deleteResponse.returnString);

        _this11.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(examGroupHeader) {
      var _this12 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: examGroupHeader.questionNumber
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this12.removeExamGroupHead(examGroupHeader);
      });
    }
  }, {
    key: "addSubQuestionDialog",
    value: function addSubQuestionDialog(groupHeader) {
      console.log(groupHeader);
      this.dialog.open(_add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_4__.AddSubQuestionComponent, {
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
        subjectId: (_a = this.FormCtrl.subjectId) === null || _a === void 0 ? void 0 : _a.value,
        unitId: (_b = this.FormCtrl.unitId) === null || _b === void 0 ? void 0 : _b.value,
        lessonId: (_c = this.FormCtrl.lessionId) === null || _c === void 0 ? void 0 : _c.value
      };
    }
  }, {
    key: "getAllExamTypes",
    value: function getAllExamTypes() {
      var _this13 = this;

      this.examService.getAllExamType().subscribe(function (response) {
        if (response) {
          _this13.examTypes = response;
        }
      });
    }
  }, {
    key: "onSelectExamType",
    value: function onSelectExamType() {
      //  console.log('exam type: ', this.FormCtrl.examTypeId?.value);
      var _a, _b, _c, _d, _e, _f, _g, _h;

      if (((_a = this.FormCtrl.examTypeId) === null || _a === void 0 ? void 0 : _a.value) == 1) {
        (_b = this.FormCtrl.unitId) === null || _b === void 0 ? void 0 : _b.enable();
        (_c = this.FormCtrl.lessionId) === null || _c === void 0 ? void 0 : _c.enable();
      } else if (((_d = this.FormCtrl.examTypeId) === null || _d === void 0 ? void 0 : _d.value) == 2) {
        (_e = this.FormCtrl.unitId) === null || _e === void 0 ? void 0 : _e.enable();
        (_f = this.FormCtrl.lessionId) === null || _f === void 0 ? void 0 : _f.disable();
      } else {
        (_g = this.FormCtrl.unitId) === null || _g === void 0 ? void 0 : _g.disable();
        (_h = this.FormCtrl.lessionId) === null || _h === void 0 ? void 0 : _h.disable();
      }
    }
  }, {
    key: "getAllCountieres",
    value: function getAllCountieres() {
      var _this14 = this;

      this.examService.getAllCountries().subscribe(function (response) {
        if (response) {
          //console.log("COUNTIRES: ", response);
          _this14.countries = response;
        }
      });
    }
  }, {
    key: "onSelectCountry",
    value: function onSelectCountry() {
      var _this15 = this;

      var _a, _b, _c, _d, _e, _f; // this.FormCtrl.stageId?.setValue("");
      // this.FormCtrl.educationYearId?.setValue("");
      // this.FormCtrl.subjectId?.setValue("");
      // this.FormCtrl.teacherUserId?.setValue("");


      if ((_a = this.FormCtrl.countryId) === null || _a === void 0 ? void 0 : _a.value) {
        //   console.log('SELECTED country: ', this.FormCtrl.countryId?.value);
        this.examService.getAllStages((_b = this.FormCtrl.countryId) === null || _b === void 0 ? void 0 : _b.value).subscribe(function (response) {
          var _a;

          if (response) {
            _this15.stages = response; //console.log("STAGES:", response);

            (_a = _this15.FormCtrl.stageId) === null || _a === void 0 ? void 0 : _a.enable();
          }
        });
      } else {
        (_c = this.FormCtrl.stageId) === null || _c === void 0 ? void 0 : _c.disable();
        (_d = this.FormCtrl.educationYearId) === null || _d === void 0 ? void 0 : _d.disable();
        (_e = this.FormCtrl.subjectId) === null || _e === void 0 ? void 0 : _e.disable();
        (_f = this.FormCtrl.teacherUserId) === null || _f === void 0 ? void 0 : _f.disable();
      }
    }
  }, {
    key: "onSelectStages",
    value: function onSelectStages() {
      var _this16 = this;

      var _a, _b, _c, _d, _e, _f, _g, _h; // console.log('onSelectStages: ', this.FormCtrl.stageId?.value);


      (_a = this.FormCtrl.educationYearId) === null || _a === void 0 ? void 0 : _a.setValue("");
      (_b = this.FormCtrl.subjectId) === null || _b === void 0 ? void 0 : _b.setValue("");
      (_c = this.FormCtrl.teacherUserId) === null || _c === void 0 ? void 0 : _c.setValue("");

      if ((_d = this.FormCtrl.stageId) === null || _d === void 0 ? void 0 : _d.value) {
        this.examService.getAllEducationYears((_e = this.FormCtrl.stageId) === null || _e === void 0 ? void 0 : _e.value).subscribe(function (response) {
          var _a;

          if (response) {
            _this16.educationYears = response; //console.log("YEARS:", response);

            (_a = _this16.FormCtrl.educationYearId) === null || _a === void 0 ? void 0 : _a.enable();
          }
        });
      } else {
        (_f = this.FormCtrl.educationYearId) === null || _f === void 0 ? void 0 : _f.disable();
        (_g = this.FormCtrl.subjectId) === null || _g === void 0 ? void 0 : _g.disable();
        (_h = this.FormCtrl.teacherUserId) === null || _h === void 0 ? void 0 : _h.disable();
      }
    }
  }, {
    key: "onSelectEducationYears",
    value: function onSelectEducationYears() {
      var _this17 = this;

      var _a, _b, _c, _d, _e, _f; //   console.log('onSelectEducationYears: ', this.FormCtrl.educationYearId?.value);


      (_a = this.FormCtrl.subjectId) === null || _a === void 0 ? void 0 : _a.setValue("");
      (_b = this.FormCtrl.teacherUserId) === null || _b === void 0 ? void 0 : _b.setValue("");

      if ((_c = this.FormCtrl.educationYearId) === null || _c === void 0 ? void 0 : _c.value) {
        this.examService.getAllSubjects((_d = this.FormCtrl.educationYearId) === null || _d === void 0 ? void 0 : _d.value).subscribe(function (response) {
          var _a;

          if (response) {
            _this17.subjects = response; //console.log("SUBJECTS:", response);

            (_a = _this17.FormCtrl.subjectId) === null || _a === void 0 ? void 0 : _a.enable();
          }
        });
      } else {
        (_e = this.FormCtrl.subjectId) === null || _e === void 0 ? void 0 : _e.disable();
        (_f = this.FormCtrl.teacherUserId) === null || _f === void 0 ? void 0 : _f.disable();
      }
    }
  }, {
    key: "onSelectSubjects",
    value: function onSelectSubjects() {
      var _this18 = this;

      var _a, _b, _c, _d; // console.log('onSelectSubjects: ', this.FormCtrl.subjectId?.value);
      //   this.FormCtrl.teacherUserId?.setValue("");


      if ((_a = this.FormCtrl.subjectId) === null || _a === void 0 ? void 0 : _a.value) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([this.generalService.getTeacherBySubjectAndEduCompId(this.EduCompId, (_b = this.FormCtrl.subjectId) === null || _b === void 0 ? void 0 : _b.value), this.examService.getAllUnitsBySublectId((_c = this.FormCtrl.subjectId) === null || _c === void 0 ? void 0 : _c.value)]).subscribe(function (results) {
          var _a;

          _this18.teachers = results[0].teachers;
          _this18.units = results[1];
          (_a = _this18.FormCtrl.teacherUserId) === null || _a === void 0 ? void 0 : _a.enable();
        });
      } else {
        (_d = this.FormCtrl.teacherUserId) === null || _d === void 0 ? void 0 : _d.disable();
      }
    }
  }, {
    key: "onSelectUnit",
    value: function onSelectUnit() {
      var _this19 = this;

      var _a, _b;

      if (((_a = this.FormCtrl.unitId) === null || _a === void 0 ? void 0 : _a.value) != null) {
        this.examService.getAllLessonsByUnitId((_b = this.FormCtrl.unitId) === null || _b === void 0 ? void 0 : _b.value).subscribe(function (response) {
          if (response) {
            _this19.lessions = response;
          }
        });
      }
    }
  }, {
    key: "examTypeValidator",
    value: function examTypeValidator() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      var examTypeId = (_a = this.FormCtrl.examTypeId) === null || _a === void 0 ? void 0 : _a.value;

      if (examTypeId == 1) {
        (_b = this.FormCtrl.unitId) === null || _b === void 0 ? void 0 : _b.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
        (_c = this.FormCtrl.lessionId) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
      } else if (examTypeId == 2) {
        (_d = this.FormCtrl.unitId) === null || _d === void 0 ? void 0 : _d.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
        (_e = this.FormCtrl.lessionId) === null || _e === void 0 ? void 0 : _e.clearValidators();
        (_f = this.FormCtrl.lessionId) === null || _f === void 0 ? void 0 : _f.reset();
      } else {
        (_g = this.FormCtrl.unitId) === null || _g === void 0 ? void 0 : _g.clearValidators();
        (_h = this.FormCtrl.unitId) === null || _h === void 0 ? void 0 : _h.reset();
        (_j = this.FormCtrl.lessionId) === null || _j === void 0 ? void 0 : _j.clearValidators();
        (_k = this.FormCtrl.lessionId) === null || _k === void 0 ? void 0 : _k.reset();
      }

      (_l = this.FormCtrl.unitId) === null || _l === void 0 ? void 0 : _l.updateValueAndValidity();
      (_m = this.FormCtrl.lessionId) === null || _m === void 0 ? void 0 : _m.updateValueAndValidity();
    }
  }, {
    key: "RepeatableValidator",
    value: function RepeatableValidator() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;

      var CustomDiscount = (_a = this.FormCtrl.hasCustomDiscount) === null || _a === void 0 ? void 0 : _a.value;

      if (CustomDiscount == true) {
        (_b = this.FormCtrl.repeatNumbers) === null || _b === void 0 ? void 0 : _b.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
        (_c = this.FormCtrl.repeatingPrice) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]);
      } else if (CustomDiscount == false) {
        (_d = this.FormCtrl.repeatNumbers) === null || _d === void 0 ? void 0 : _d.clearValidators();
        (_e = this.FormCtrl.repeatingPrice) === null || _e === void 0 ? void 0 : _e.clearValidators();
        (_f = this.FormCtrl.repeatNumbers) === null || _f === void 0 ? void 0 : _f.reset();
        (_g = this.FormCtrl.repeatingPrice) === null || _g === void 0 ? void 0 : _g.reset();
      }

      (_h = this.FormCtrl.repeatNumbers) === null || _h === void 0 ? void 0 : _h.updateValueAndValidity();
      (_j = this.FormCtrl.repeatingPrice) === null || _j === void 0 ? void 0 : _j.updateValueAndValidity();
    }
  }]);

  return AddExamComponent;
}();

AddExamComponent.ɵfac = function AddExamComponent_Factory(t) {
  return new (t || AddExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_6__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_7__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_8__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_9__.AppStrings), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogRef));
};

AddExamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: AddExamComponent,
  selectors: [["app-add-exam"]],
  viewQuery: function AddExamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 45,
  vars: 43,
  consts: [["mat-dialog-title", "", 1, "mb-1"], [4, "ngIf"], ["mat-align-tabs", "start", 1, "no-margin-tab"], [3, "label"], [3, "formGroup"], [1, "row"], [1, "col-md-4", "col-12"], ["label", "labels.ExamNm", "type", "text", 3, "control", "submitted"], ["label", "labels.ExamHours", "type", "number", 3, "control", "submitted"], ["label", "labels.ExamMinute", "type", "number", 3, "control", "submitted"], [1, "col-md-3", "col-12"], ["label", "labels.FromDate", 3, "control", "submitted"], ["label", "labels.ToDate", 3, "control", "submitted"], ["label", "labels.FromTime", "type", "time", 3, "control", "submitted"], ["label", "labels.ToTime", "type", "time", 3, "control", "submitted"], ["label", "labels.percentageToPass", "type", "number", 3, "control", "submitted"], ["label", "labels.Order", "type", "number", 3, "control", "submitted"], ["label", "labels.IsMandatory", 3, "control", "radioList"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], [3, "examId", "examGroupHeaderId", "subjectId", "closeDialog"], [1, "fa", "fa-plus"]],
  template: function AddExamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddExamComponent_span_2_Template, 3, 3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, AddExamComponent_span_3_Template, 3, 3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, AddExamComponent_span_4_Template, 4, 3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mat-dialog-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-tab-group", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-tab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "app-datepicker", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "app-datepicker", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "app-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "app-input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "app-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "app-input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](33, "app-radio-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "mat-card-actions", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddExamComponent_Template_button_click_35_listener() {
        return ctx.onCloseDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddExamComponent_Template_button_click_38_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, AddExamComponent_i_39_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "mat-tab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "app-add-edit-sub-question", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeDialog", function AddExamComponent_Template_app_add_edit_sub_question_closeDialog_44_listener() {
        return ctx.onCloseDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.examId == 0 && ctx.type == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.examId == 0 && ctx.type == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.examId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 33, "labels.Step1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 35, "labels.MainData"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.examName)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.examHours)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.examMinutes)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.fromDate)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.toDate)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.formHour)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.toHours)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.degreeToPass)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.order)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.isMandatory)("radioList", ctx.isMandatoryRadioList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](37, 37, "General.Close"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.examId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](41, 39, ctx.examId == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](43, 41, "labels.Step2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("examId", ctx.examId)("examGroupHeaderId", (ctx.GroupsHeadersList[0] == null ? null : ctx.GroupsHeadersList[0].id) || 0)("subjectId", ctx.subId);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogTitle, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_10__.InputComponent, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_11__.DatepickerComponent, _shared_components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_12__.RadioButtonComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _add_sub_question_add_sub_question_component__WEBPACK_IMPORTED_MODULE_4__.AddSubQuestionComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslatePipe],
  styles: [".mat-tab-group[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 10px !important;\n}\n\n.mat-card-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.mat-radio-group[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0 10px !important;\n  display: flex;\n  justify-content: space-around;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 5px !important;\n}\n\n.is-mandatory[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.mat-mini-fab[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  border-radius: 50%;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1leGFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUlGIiwiZmlsZSI6ImFkZC1leGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pcy1tYW5kYXRvcnkge1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcblxyXG4ubWF0LW1pbmktZmFiIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 69981:
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/pages/exams-setup/exams/add-sub-question/add-sub-question.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSubQuestionComponent": function() { return /* binding */ AddSubQuestionComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/Admin/exams.service */ 63938);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function AddSubQuestionComponent_mat_checkbox_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_25_mat_checkbox_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_25_mat_checkbox_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_25_mat_checkbox_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_25_mat_checkbox_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
  }
}

function AddSubQuestionComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-radio-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-radio-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_25_Template_mat_radio_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10.onSelectCorrect(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_25_Template_input_change_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r12.importOneFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, AddSubQuestionComponent_ng_container_25_mat_checkbox_21_Template, 2, 1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-radio-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-radio-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_25_Template_mat_radio_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r13.onSelectCorrect(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "app-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_25_Template_input_change_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r14.importTwoFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, AddSubQuestionComponent_ng_container_25_mat_checkbox_45_Template, 2, 1, "mat-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-radio-group", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-radio-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_25_Template_mat_radio_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r15.onSelectCorrect(2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "app-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_25_Template_input_change_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r16.importThreeFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, AddSubQuestionComponent_ng_container_25_mat_checkbox_68_Template, 2, 1, "mat-checkbox", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "mat-radio-group", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "mat-radio-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_ng_container_25_Template_mat_radio_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r17.onSelectCorrect(3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](79, "app-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](87, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_ng_container_25_Template_input_change_88_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r18.importFourFile($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](91, AddSubQuestionComponent_ng_container_25_mat_checkbox_91_Template, 2, 1, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](92, "img", 13);
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
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0)("checked", ctx_r1.FormCtrl.answerOneIsCorrect.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 32, "labels.AnswerNumber"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r1.FormCtrl.answerOne)("submitted", ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 34, "labels.AnswerPic"), " (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrl.answerOneImage.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.FormCtrl.answerOneImage.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1)("checked", ctx_r1.FormCtrl.answerTwoIsCorrect.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 36, "labels.AnswerNumber"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r1.FormCtrl.answerTwo)("submitted", ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 38, "labels.AnswerPic"), " (2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrl.answerTwoImage.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.FormCtrl.answerTwoImage.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2)("checked", ctx_r1.FormCtrl.answerThreeIsCorrect.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](52, 40, "labels.AnswerNumber"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r1.FormCtrl.answerThree)("submitted", ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](62, 42, "labels.AnswerPic"), " (3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrl.answerThreeImage.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.FormCtrl.answerThreeImage.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 3)("checked", ctx_r1.FormCtrl.answerFourIsCorrect.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](75, 44, "labels.AnswerNumber"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r1.FormCtrl.answerFour)("submitted", ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 46, "labels.AnswerPic"), " (4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrl.answerFourImage.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.FormCtrl.answerFourImage.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

function AddSubQuestionComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r19.myForm.reset();
      ctx_r19.questionId = 0;
      return ctx_r19.FormCtrl.questionTypeId.setValue(2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function AddSubQuestionComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r21.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r3.examGroupHeaderId == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "General.Add"), " ");
  }
}

function AddSubQuestionComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r23.onSubmit();
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

function AddSubQuestionComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 50);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_tr_46_Template_button_click_8_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      var ques_r25 = restoredCtx.$implicit;
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r26.getQuestionForEditByID(ques_r25.ExamQuestId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_tr_46_Template_button_click_11_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      var ques_r25 = restoredCtx.$implicit;
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r28.removeExamQuestion(ques_r25.ExamQuestId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ques_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ques_r25.ExamQuestId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ques_r25.Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ques_r25.QuestionTypeAr);
  }
}

var AddSubQuestionComponent = /*#__PURE__*/function () {
  function AddSubQuestionComponent(fb, examService, authserv, toastr, spinner, uploadFileService // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddSubQuestionComponent);

    this.fb = fb;
    this.examService = examService;
    this.authserv = authserv;
    this.toastr = toastr;
    this.spinner = spinner;
    this.uploadFileService = uploadFileService;
    this.examGroupHeaderId = 0;
    this.subjectId = 0;
    this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
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
    this.perfectAnswerAttach_preview = null; // this.examId = data.examId;
    // this.examGroupHeaderId = data.examGroupHeaderId;
    // this.subjectId = data.subjectId;

    if (this.examGroupHeaderId != 0) this.getAllQuestionsByHeadId(); // if (this.subjectId != 0) this.getAllUnitsBySublectId();
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddSubQuestionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        mainQuestion: [null],
        questionTypeId: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        questionImage: [null],
        remove_image: [false],
        // unitId: [null],
        // lessionId: [null],
        exam_question_text: [null],
        questionPerfectAnswer: [null],
        perfect_answer_attach: [null],
        questionMark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]],
        answerOneId: [null],
        answerOne: [null],
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
      this.questionTypeValidation();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _a;

      if (((_a = changes.examGroupHeaderId) === null || _a === void 0 ? void 0 : _a.currentValue) > 0) this.getAllQuestionsByHeadId();
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
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
    key: "questionTypeValidation",
    value: function questionTypeValidation() {
      var _a, _b, _c, _d;

      if (((_a = this.FormCtrl.questionTypeId) === null || _a === void 0 ? void 0 : _a.value) === 1) {// console.log("PerfectAnswer is required");
        // this.FormCtrl.questionPerfectAnswer?.setValidators(Validators.required);
      } else {
        // console.log("PerfectAnswer is not required");
        (_b = this.FormCtrl.questionPerfectAnswer) === null || _b === void 0 ? void 0 : _b.clearAsyncValidators();
        (_c = this.FormCtrl.questionPerfectAnswer) === null || _c === void 0 ? void 0 : _c.reset();
      }

      (_d = this.FormCtrl.questionPerfectAnswer) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;

      this.submitted = true; // if (this.FormCtrl.questionTypeId?.value == 1) {
      //   // مقالي
      //   let image: examQuestionImage = this.questionFile || null;
      //   // let image: examQuestionImage = this.questionFile || null {
      //   //   FileAsBase64: this.questionFile.FileAsBase64 || null,
      //   //   name: this.questionFile.name,
      //   //   size: this.questionFile.size,
      //   //   type: this.questionFile.type,
      //   // };
      //   let questionImagePath = this.FormCtrl.questionImage;
      //   let toAddEdit: IAddEditQuestionTextModel = {
      //     exam_question_main_question: this.FormCtrl.mainQuestion?.value,
      //     exam_question_mark: this.FormCtrl.questionMark?.value,
      //     exam_question_perfect_answer:
      //       this.FormCtrl.questionPerfectAnswer?.value,
      //     //   perfect_answer_attach: this.perfectAnswerAttach_preview,
      //     exam_question_text: this.FormCtrl.exam_question_text?.value,
      //     exam_question_type_id: this.FormCtrl.questionTypeId?.value,
      //     exam_selected_question_head_id: this.examGroupHeaderId,
      //     exam_selected_subject_id: this.subjectId,
      //     exam_question_image: image,
      //     remove_image: this.FormCtrl.remove_image?.value,
      //     exam_question_id: this.questionId,
      //   };
      //   console.log("toAddEdit_Text_question=> ", toAddEdit);
      //   if (
      //     !this.FormCtrl.exam_question_text?.value &&
      //     image == null &&
      //     questionImagePath == null
      //   ) {
      //     this.toastr.warning("Exam.QuestionMsgError");
      //     return;
      //   } else {
      //     if (this.questionId > 0) {
      //       this.editTextQuestion(toAddEdit);
      //     } else {
      //       this.addTextQuestion(toAddEdit);
      //     }
      //   }
      // }
      // MCQ

      if (((_a = this.FormCtrl.questionTypeId) === null || _a === void 0 ? void 0 : _a.value) == 2) {
        var image = this.questionFile || null;
        var questionImagePath = this.FormCtrl.questionImage.value; // let image: examQuestionImage = {
        //   FileAsBase64: this.questionFile.FileAsBase64 || null,
        //   name: this.questionFile.name,
        //   size: this.questionFile.size,
        //   type: this.questionFile.type,
        // };

        var imageOne = this.answerOneFile || null; // let imageOne: examQuestionImage = {
        //   FileAsBase64: this.answerOneFile.FileAsBase64 || null,
        //   name: this.answerOneFile.name,
        //   size: this.answerOneFile.size,
        //   type: this.answerOneFile.type,
        // };

        var choice1 = {
          choice_id: (_c = (_b = this.FormCtrl.answerOneId) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 0,
          choice_text: (_d = this.FormCtrl.answerOne) === null || _d === void 0 ? void 0 : _d.value,
          is_correct: this.FormCtrl.answerOneIsCorrect.value === 0 || this.FormCtrl.answerOneIsCorrect.value ? true : false,
          choice_image: imageOne,
          remove_image: (_e = this.FormCtrl.answerOneRemove_image) === null || _e === void 0 ? void 0 : _e.value,
          path: (_f = this.FormCtrl.answerOneImage) === null || _f === void 0 ? void 0 : _f.value
        };
        var imageTwo = this.answerTwoFile || null; // let imageTwo: examQuestionImage = {
        //   FileAsBase64: this.answerTwoFile.FileAsBase64 || null,
        //   name: this.answerTwoFile.name,
        //   size: this.answerTwoFile.size,
        //   type: this.answerTwoFile.type,
        // };

        var choice2 = {
          choice_id: (_h = (_g = this.FormCtrl.answerTwoId) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 0,
          choice_text: (_j = this.FormCtrl.answerTwo) === null || _j === void 0 ? void 0 : _j.value,
          is_correct: ((_k = this.FormCtrl.answerTwoIsCorrect) === null || _k === void 0 ? void 0 : _k.value) ? true : false,
          choice_image: imageTwo,
          remove_image: (_l = this.FormCtrl.answerTwoRemove_image) === null || _l === void 0 ? void 0 : _l.value,
          path: (_m = this.FormCtrl.answerTwoImage) === null || _m === void 0 ? void 0 : _m.value
        };
        var imageThree = this.answerThreeFile || null; // let imageThree: examQuestionImage = {
        //   FileAsBase64: this.answerThreeFile.FileAsBase64 || null,
        //   name: this.answerThreeFile.name,
        //   size: this.answerThreeFile.size,
        //   type: this.answerThreeFile.type,
        // };

        var choice3 = {
          choice_id: (_p = (_o = this.FormCtrl.answerThreeId) === null || _o === void 0 ? void 0 : _o.value) !== null && _p !== void 0 ? _p : 0,
          choice_text: (_q = this.FormCtrl.answerThree) === null || _q === void 0 ? void 0 : _q.value,
          is_correct: ((_r = this.FormCtrl.answerThreeIsCorrect) === null || _r === void 0 ? void 0 : _r.value) ? true : false,
          choice_image: imageThree,
          remove_image: (_s = this.FormCtrl.answerThreeRemove_image) === null || _s === void 0 ? void 0 : _s.value,
          path: (_t = this.FormCtrl.answerThreeImage) === null || _t === void 0 ? void 0 : _t.value
        };
        var imageFour = this.answerFourFile || null; // let imageFour: examQuestionImage = {
        //   FileAsBase64: this.answerFourFile.FileAsBase64 || null,
        //   name: this.answerFourFile.name,
        //   size: this.answerFourFile.size,
        //   type: this.answerFourFile.type,
        // };

        var choice4 = {
          choice_id: (_v = (_u = this.FormCtrl.answerFourId) === null || _u === void 0 ? void 0 : _u.value) !== null && _v !== void 0 ? _v : 0,
          choice_text: (_w = this.FormCtrl.answerFour) === null || _w === void 0 ? void 0 : _w.value,
          is_correct: ((_x = this.FormCtrl.answerFourIsCorrect) === null || _x === void 0 ? void 0 : _x.value) ? true : false,
          choice_image: imageFour,
          remove_image: (_y = this.FormCtrl.answerFourRemove_image) === null || _y === void 0 ? void 0 : _y.value,
          path: (_z = this.FormCtrl.answerFourImage) === null || _z === void 0 ? void 0 : _z.value
        };
        var toAddEdit = {
          exam_question_main_question: (_0 = this.FormCtrl.mainQuestion) === null || _0 === void 0 ? void 0 : _0.value,
          exam_question_mark: (_1 = this.FormCtrl.questionMark) === null || _1 === void 0 ? void 0 : _1.value,
          exam_question_perfect_answer: (_2 = this.FormCtrl.questionPerfectAnswer) === null || _2 === void 0 ? void 0 : _2.value,
          //perfect_answer_attach: this.perfectAnswerAttach_preview,
          exam_question_text: (_3 = this.FormCtrl.exam_question_text) === null || _3 === void 0 ? void 0 : _3.value,
          exam_question_type_id: (_4 = this.FormCtrl.questionTypeId) === null || _4 === void 0 ? void 0 : _4.value,
          exam_selected_question_head_id: this.examGroupHeaderId,
          exam_selected_subject_id: this.subjectId,
          exam_question_image: image,
          remove_image: (_5 = this.FormCtrl.remove_image) === null || _5 === void 0 ? void 0 : _5.value,
          exam_question_id: this.questionId,
          mcq_choices: [choice1, choice2, choice3, choice4]
        };
        console.log("toAddEdit_mcq_question=> ", toAddEdit); // if no question Text or img

        if (toAddEdit.exam_question_text === null && toAddEdit.exam_question_image === null && questionImagePath === null) {
          this.toastr.warning("Exam.QuestionMsgError");
          return;
        } // if no correct answer


        if (!choice1.is_correct && !choice2.is_correct && !choice3.is_correct && !choice4.is_correct) {
          this.toastr.warning("Exam.MustChooseCorrectAnswer");
          return;
        } // if mcq 1 no text or img


        if (choice1.choice_text === null && choice1.choice_image === null && choice1.path == null) {
          this.toastr.warning("Exam.QuestionOneMsgError");
          return;
        } // if mcq 2 no text or img


        if (choice2.choice_text === null && choice2.choice_image === null && choice2.path == null) {
          this.toastr.warning("Exam.QuestionTwoMsgError");
          return;
        } // if mcq 3 no text or img


        if (choice3.choice_text === null && choice3.choice_image === null && choice3.path == null) {
          this.toastr.warning("Exam.QuestionThreeMsgError");
          return;
        } // if mcq 4 no text or img


        if (choice4.choice_text === null && choice4.choice_image === null && choice4.path == null) {
          this.toastr.warning("Exam.QuestionFourMsgError");
          return;
        } else {
          if (this.questionId > 0) {
            this.editMcqQuestion(toAddEdit);
          } else {
            this.addMcqQuestion(toAddEdit);
          }
        }
      }
    } // addTextQuestion(toAddEdit: IAddEditQuestionTextModel) {
    //   //  console.log('on add ', toAddEdit);
    //   this.spinner.show();
    //   this.examService
    //     .addQuestion<IAddedTextExamResponse>(toAddEdit)
    //     .subscribe((response: any) => {
    //       // console.log('respooooooonse', response);
    //       if (response.returnValue == 200) {
    //         this.getAllQuestionsByHeadId();
    //         this.FormCtrl.mainQuestion?.setValue(null);
    //         this.FormCtrl.questionMark?.setValue(null);
    //         this.FormCtrl.questionTypeId?.setValue(null);
    //         this.FormCtrl.questionImage?.setValue(null);
    //         this.FormCtrl.exam_question_text?.setValue(null);
    //         this.FormCtrl.questionPerfectAnswer?.setValue(null);
    //         this.FormCtrl.perfect_answer_attach?.setValue(null);
    //         this.FormCtrl.unitId?.setValue(null);
    //         this.FormCtrl.lessonId?.setValue(null);
    //         this.myForm.reset();
    //         this.resetFileInputs();
    //       } else {
    //         this.toastr.error(response.returnString);
    //       }
    //       this.spinner.hide();
    //     });
    // }
    // editTextQuestion(toAddEdit: IAddEditQuestionTextModel) {
    //   //  console.log('tooEdiiiiiiit', toAddEdit);
    //   this.spinner.show();
    //   this.examService
    //     .editQuestion<IQuestionDetailsForEditModel>(toAddEdit)
    //     .subscribe((response) => {
    //       //  console.log('ediiiiiitResponse', response);
    //       if (response) {
    //         let toEdit = this.questionsInGrid.find(
    //           (q: any) => q.Id == this.questionId
    //         );
    //         if (toEdit) {
    //           toEdit.Text = this.FormCtrl.exam_question_text?.value;
    //           toEdit.QuestionTypeAr = "مقال";
    //           toEdit.Image = this.FormCtrl.questionImage?.value;
    //         }
    //         this.FormCtrl.mainQuestion?.setValue(null);
    //         this.FormCtrl.questionMark?.setValue(null);
    //         this.FormCtrl.questionTypeId?.setValue(null);
    //         this.FormCtrl.questionImage?.setValue(null);
    //         this.FormCtrl.exam_question_text?.setValue(null);
    //         this.FormCtrl.questionPerfectAnswer?.setValue(null);
    //         this.FormCtrl.perfect_answer_attach?.setValue(null);
    //         this.FormCtrl.unitId?.setValue(null);
    //         this.FormCtrl.lessonId?.setValue(null);
    //         this.myForm.reset();
    //         this.resetFileInputs();
    //         this.questionId = 0; // return to add mode
    //       }
    //       this.spinner.hide();
    //     });
    // }

  }, {
    key: "addMcqQuestion",
    value: function addMcqQuestion(toAddEdit) {
      var _this2 = this;

      // console.log('on add ', toAddEdit);
      if (this.myForm.valid) {
        this.spinner.show();
        this.examService.addQuestion(toAddEdit).subscribe(function (response) {
          // console.log('respooooooonse', response);
          var _a, _b, _c, _d, _e, _f, _g;

          if (response.returnValue == 200) {
            _this2.getAllQuestionsByHeadId();

            (_a = _this2.FormCtrl.mainQuestion) === null || _a === void 0 ? void 0 : _a.setValue(null);
            (_b = _this2.FormCtrl.questionMark) === null || _b === void 0 ? void 0 : _b.setValue(null);
            (_c = _this2.FormCtrl.questionTypeId) === null || _c === void 0 ? void 0 : _c.setValue(null);
            (_d = _this2.FormCtrl.questionImage) === null || _d === void 0 ? void 0 : _d.setValue(null);
            (_e = _this2.FormCtrl.exam_question_text) === null || _e === void 0 ? void 0 : _e.setValue(null);
            (_f = _this2.FormCtrl.questionPerfectAnswer) === null || _f === void 0 ? void 0 : _f.setValue(null);
            (_g = _this2.FormCtrl.perfect_answer_attach) === null || _g === void 0 ? void 0 : _g.setValue(null); // this.FormCtrl.unitId?.setValue(null);
            // this.FormCtrl.lessonId?.setValue(null);

            _this2.myForm.reset(); // set type msq


            _this2.FormCtrl.questionTypeId.setValue(2);

            _this2.resetFileInputs();

            _this2.submitted = false;

            _this2.toastr.success("General.AddSuccessfully");
          } else {
            _this2.toastr.error(response.returnString);
          }

          _this2.spinner.hide();
        });
      }
    }
  }, {
    key: "editMcqQuestion",
    value: function editMcqQuestion(toAddEdit) {
      var _this3 = this;

      //console.log("editMcqQuestion", toAddEdit);
      if (this.myForm.valid) {
        this.spinner.show();
        this.examService.editQuestion(toAddEdit).subscribe(function (response) {
          var _a, _b, _c, _d, _e, _f, _g; //  console.log("editMcqQuestion", response);


          if (response) {
            _this3.getAllQuestionsByHeadId();

            (_a = _this3.FormCtrl.mainQuestion) === null || _a === void 0 ? void 0 : _a.setValue(null);
            (_b = _this3.FormCtrl.questionMark) === null || _b === void 0 ? void 0 : _b.setValue(null);
            (_c = _this3.FormCtrl.questionTypeId) === null || _c === void 0 ? void 0 : _c.setValue(null);
            (_d = _this3.FormCtrl.questionImage) === null || _d === void 0 ? void 0 : _d.setValue(null);
            (_e = _this3.FormCtrl.exam_question_text) === null || _e === void 0 ? void 0 : _e.setValue(null);
            (_f = _this3.FormCtrl.questionPerfectAnswer) === null || _f === void 0 ? void 0 : _f.setValue(null);
            (_g = _this3.FormCtrl.perfect_answer_attach) === null || _g === void 0 ? void 0 : _g.setValue(null);
            _this3.oneIsCorrect = false;
            _this3.twoIsCorrect = false;
            _this3.threeIsCorrect = false;
            _this3.fourIsCorrect = false; // this.FormCtrl.unitId?.setValue(null);
            // this.FormCtrl.lessonId?.setValue(null);

            _this3.myForm.reset(); // set type msq


            _this3.FormCtrl.questionTypeId.setValue(2);

            _this3.resetFileInputs();

            _this3.toastr.success("General.UpdateSuccessfully");

            _this3.submitted = false;
            _this3.questionId = 0; // return to add mode
          }

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "getQuestionForEditByID",
    value: function getQuestionForEditByID(questionId) {
      var _this4 = this;

      //  console.log('questionIddddddddddddddd', questionId);
      this.spinner.show();
      this.examService.getQuestionForEditByID(questionId).subscribe(function (response) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20;

        console.log("getQuestionForEditByID", response);

        if (response) {
          (_a = _this4.FormCtrl.mainQuestion) === null || _a === void 0 ? void 0 : _a.setValue(response.main_question);
          (_b = _this4.FormCtrl.questionMark) === null || _b === void 0 ? void 0 : _b.setValue(response.mark);
          (_c = _this4.FormCtrl.exam_question_text) === null || _c === void 0 ? void 0 : _c.setValue(response.question_text);
          (_d = _this4.FormCtrl.questionImage) === null || _d === void 0 ? void 0 : _d.setValue((response === null || response === void 0 ? void 0 : response.attach_path) != null ? _this4.uploadFileService.previewPicture(response === null || response === void 0 ? void 0 : response.attach_path) : null); // this.questionFile.FileAsBase64 = response.attach_path;

          (_e = _this4.FormCtrl.questionTypeId) === null || _e === void 0 ? void 0 : _e.setValue(response.question_type_id);
          _this4.questionId = questionId; // this.FormCtrl.questionPerfectAnswer?.setValue(
          //   response.perfect_answer
          // );
          // this.FormCtrl.perfect_answer_attach?.setValue(
          //   `mozakretyapi${response?.prefect_answer_attach_path}`
          // );

          if (response.question_type_id == 2) {
            (_f = _this4.FormCtrl.answerOneId) === null || _f === void 0 ? void 0 : _f.setValue((_g = response.MCQ_Choices[0]) === null || _g === void 0 ? void 0 : _g.Id);
            (_h = _this4.FormCtrl.answerOne) === null || _h === void 0 ? void 0 : _h.setValue((_j = response.MCQ_Choices[0]) === null || _j === void 0 ? void 0 : _j.Text);
            (_k = _this4.FormCtrl.answerOneImage) === null || _k === void 0 ? void 0 : _k.setValue(((_l = response === null || response === void 0 ? void 0 : response.MCQ_Choices[0]) === null || _l === void 0 ? void 0 : _l.Image) != null ? _this4.uploadFileService.previewPicture((_m = response === null || response === void 0 ? void 0 : response.MCQ_Choices[0]) === null || _m === void 0 ? void 0 : _m.Image) : null); // this.FormCtrl.answerOneImage?.setValue(response.MCQ_Choices[0].Image);
            //  this.answerOneFile.FileAsBase64 = response.MCQ_Choices[0].Image;

            (_o = _this4.FormCtrl.answerOneIsCorrect) === null || _o === void 0 ? void 0 : _o.setValue((_p = response.MCQ_Choices[0]) === null || _p === void 0 ? void 0 : _p.Is_Correct);
            _this4.oneIsCorrect = (_q = response.MCQ_Choices[0]) === null || _q === void 0 ? void 0 : _q.Is_Correct;
            (_r = _this4.FormCtrl.answerTwoId) === null || _r === void 0 ? void 0 : _r.setValue((_s = response.MCQ_Choices[1]) === null || _s === void 0 ? void 0 : _s.Id);
            (_t = _this4.FormCtrl.answerTwo) === null || _t === void 0 ? void 0 : _t.setValue((_u = response.MCQ_Choices[1]) === null || _u === void 0 ? void 0 : _u.Text);
            (_v = _this4.FormCtrl.answerTwoImage) === null || _v === void 0 ? void 0 : _v.setValue(((_w = response === null || response === void 0 ? void 0 : response.MCQ_Choices[1]) === null || _w === void 0 ? void 0 : _w.Image) != null ? _this4.uploadFileService.previewPicture((_x = response === null || response === void 0 ? void 0 : response.MCQ_Choices[1]) === null || _x === void 0 ? void 0 : _x.Image) : null); //  this.FormCtrl.answerTwoImage?.setValue(response.MCQ_Choices[1].Image);
            // this.answerTwoFile.FileAsBase64 = response.MCQ_Choices[1].Image;

            (_y = _this4.FormCtrl.answerTwoIsCorrect) === null || _y === void 0 ? void 0 : _y.setValue((_z = response.MCQ_Choices[1]) === null || _z === void 0 ? void 0 : _z.Is_Correct);
            _this4.twoIsCorrect = (_0 = response.MCQ_Choices[1]) === null || _0 === void 0 ? void 0 : _0.Is_Correct;
            (_1 = _this4.FormCtrl.answerThreeId) === null || _1 === void 0 ? void 0 : _1.setValue((_2 = response.MCQ_Choices[2]) === null || _2 === void 0 ? void 0 : _2.Id);
            (_3 = _this4.FormCtrl.answerThree) === null || _3 === void 0 ? void 0 : _3.setValue((_4 = response.MCQ_Choices[2]) === null || _4 === void 0 ? void 0 : _4.Text);
            (_5 = _this4.FormCtrl.answerThreeImage) === null || _5 === void 0 ? void 0 : _5.setValue(((_6 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[2]) === null || _6 === void 0 ? void 0 : _6.Image) != null ? _this4.uploadFileService.previewPicture((_7 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[2]) === null || _7 === void 0 ? void 0 : _7.Image) : null); // this.FormCtrl.answerThreeImage?.setValue(response.MCQ_Choices[2].Image);
            //  this.answerThreeFile.FileAsBase64 = response.MCQ_Choices[2].Image;

            (_8 = _this4.FormCtrl.answerThreeIsCorrect) === null || _8 === void 0 ? void 0 : _8.setValue((_9 = response.MCQ_Choices[2]) === null || _9 === void 0 ? void 0 : _9.Is_Correct);
            _this4.threeIsCorrect = (_10 = response.MCQ_Choices[2]) === null || _10 === void 0 ? void 0 : _10.Is_Correct;
            (_11 = _this4.FormCtrl.answerFourId) === null || _11 === void 0 ? void 0 : _11.setValue((_12 = response.MCQ_Choices[3]) === null || _12 === void 0 ? void 0 : _12.Id);
            (_13 = _this4.FormCtrl.answerFour) === null || _13 === void 0 ? void 0 : _13.setValue((_14 = response.MCQ_Choices[3]) === null || _14 === void 0 ? void 0 : _14.Text);
            (_15 = _this4.FormCtrl.answerFourImage) === null || _15 === void 0 ? void 0 : _15.setValue(((_16 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[3]) === null || _16 === void 0 ? void 0 : _16.Image) != null ? _this4.uploadFileService.previewPicture((_17 = response === null || response === void 0 ? void 0 : response.MCQ_Choices[3]) === null || _17 === void 0 ? void 0 : _17.Image) : null); //  this.FormCtrl.answerFourImage?.setValue(response.MCQ_Choices[3].Image);
            //  this.answerFourFile.FileAsBase64 = response.MCQ_Choices[3].Image;

            (_18 = _this4.FormCtrl.answerFourIsCorrect) === null || _18 === void 0 ? void 0 : _18.setValue((_19 = response.MCQ_Choices[3]) === null || _19 === void 0 ? void 0 : _19.Is_Correct);
            _this4.fourIsCorrect = (_20 = response.MCQ_Choices[3]) === null || _20 === void 0 ? void 0 : _20.Is_Correct;
          } // console.log("answer 1", this.oneIsCorrect);
          // console.log("answer 2", this.twoIsCorrect);
          // console.log("answer 3", this.threeIsCorrect);
          // console.log("answer 4", this.fourIsCorrect);

        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "removeExamQuestion",
    value: function removeExamQuestion(questionId) {
      var _this5 = this;

      var confirmed = confirm("هل انت متأكد من الحذف"); // console.log('questionId', questionId);

      if (confirmed) {
        this.spinner.show();
        this.examService.deleteExamQuestion(questionId).subscribe(function (response) {
          // console.log('deleteResponse', response);
          if (response.returnString === "Done") {
            var toDeleteIndex = _this5.questionsInGrid.findIndex(function (q) {
              return q.Id == questionId;
            });

            _this5.questionsInGrid.splice(toDeleteIndex, 1);
          } else _this5.toastr.info(response.returnString);

          _this5.spinner.hide();
        });
      }
    }
  }, {
    key: "importFile",
    value: function importFile(event) {
      var _this6 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this6.FormCtrl.questionImage.setValue(file.FileAsBase64);

          _this6.questionFile = file;
        }, 100);
      });
    }
  }, {
    key: "importOneFile",
    value: function importOneFile(event) {
      var _this7 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this7.answerOneFile = file;

          _this7.FormCtrl.answerOneImage.setValue(file.FileAsBase64);
        }, 100);
      });
    }
  }, {
    key: "importTwoFile",
    value: function importTwoFile(event) {
      var _this8 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this8.answerTwoFile = file;

          _this8.FormCtrl.answerTwoImage.setValue(file.FileAsBase64);
        }, 100);
      });
    }
  }, {
    key: "importThreeFile",
    value: function importThreeFile(event) {
      var _this9 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this9.answerThreeFile = file;

          _this9.FormCtrl.answerThreeImage.setValue(file.FileAsBase64);
        }, 100);
      });
    }
  }, {
    key: "importFourFile",
    value: function importFourFile(event) {
      var _this10 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this10.answerFourFile = file;

          _this10.FormCtrl.answerFourImage.setValue(file.FileAsBase64);
        }, 100);
      });
    } // perfectAnswerAttach(event: any) {
    //   this.uploadFileService.uploadFile(event).then((file) => {
    //     setTimeout(() => {
    //       this.perfectAnswerAttach_preview = file;
    //       this.FormCtrl.perfect_answer_attach.setValue(file);
    //     }, 100);
    //   });
    // }
    // getAllUnitsBySublectId() {
    //   this.examService
    //     .getAllUnitsBySublectId<any[]>(this.subjectId)
    //     .subscribe((results) => {
    //       this.units = results;
    //       // console.log('this.units', this.units);
    //     });
    // }
    // getAllLessonsByUnitId() {
    //   this.examService
    //     .getAllLessonsByUnitId<any>(this.FormCtrl.unitId?.value)
    //     .subscribe((response) => {
    //       if (response) {
    //         this.lessions = response;
    //       }
    //     });
    // }

  }, {
    key: "onSelectCorrect",
    value: function onSelectCorrect(answerNumber) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;

      console.log("answer is Correct", answerNumber);

      if (answerNumber === 0) {
        (_a = this.FormCtrl.answerOneIsCorrect) === null || _a === void 0 ? void 0 : _a.setValue(0);
        (_b = this.FormCtrl.answerTwoIsCorrect) === null || _b === void 0 ? void 0 : _b.setValue(null);
        (_c = this.FormCtrl.answerThreeIsCorrect) === null || _c === void 0 ? void 0 : _c.setValue(null);
        (_d = this.FormCtrl.answerFourIsCorrect) === null || _d === void 0 ? void 0 : _d.setValue(null);
      }

      if (answerNumber === 1) {
        (_e = this.FormCtrl.answerOneIsCorrect) === null || _e === void 0 ? void 0 : _e.setValue(null);
        (_f = this.FormCtrl.answerTwoIsCorrect) === null || _f === void 0 ? void 0 : _f.setValue(1);
        (_g = this.FormCtrl.answerThreeIsCorrect) === null || _g === void 0 ? void 0 : _g.setValue(null);
        (_h = this.FormCtrl.answerFourIsCorrect) === null || _h === void 0 ? void 0 : _h.setValue(null);
      }

      if (answerNumber === 2) {
        (_j = this.FormCtrl.answerOneIsCorrect) === null || _j === void 0 ? void 0 : _j.setValue(null);
        (_k = this.FormCtrl.answerTwoIsCorrect) === null || _k === void 0 ? void 0 : _k.setValue(null);
        (_l = this.FormCtrl.answerThreeIsCorrect) === null || _l === void 0 ? void 0 : _l.setValue(2);
        (_m = this.FormCtrl.answerFourIsCorrect) === null || _m === void 0 ? void 0 : _m.setValue(null);
      }

      if (answerNumber === 3) {
        (_o = this.FormCtrl.answerOneIsCorrect) === null || _o === void 0 ? void 0 : _o.setValue(null);
        (_p = this.FormCtrl.answerTwoIsCorrect) === null || _p === void 0 ? void 0 : _p.setValue(null);
        (_q = this.FormCtrl.answerThreeIsCorrect) === null || _q === void 0 ? void 0 : _q.setValue(null);
        (_r = this.FormCtrl.answerFourIsCorrect) === null || _r === void 0 ? void 0 : _r.setValue(3);
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
  return new (t || AddSubQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_Admin_exams_service__WEBPACK_IMPORTED_MODULE_3__.ExamsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__.UploadFileService));
};

AddSubQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddSubQuestionComponent,
  selectors: [["app-add-edit-sub-question"]],
  inputs: {
    examId: "examId",
    examGroupHeaderId: "examGroupHeaderId",
    subjectId: "subjectId"
  },
  outputs: {
    closeDialog: "closeDialog"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 52,
  vars: 29,
  consts: [["mat-dialog-content", "", 1, "exam-model-box"], [1, "container-fluid", 3, "formGroup"], [1, "row"], [1, "col-md-6", "col-12"], ["label", "labels.mainQuestion", "type", "text", 3, "control", "submitted"], ["label", "labels.QuestionMark", "type", "number", 3, "control", "submitted"], [1, "col-12"], ["label", "labels.question_ar_text", "type", "text", 3, "control", "submitted"], [1, "col-md-4", "col-12"], ["type", "file", "name", "questionImage", "accept", "image/*", 1, "form-control", "font-dro", "clearInputs", 3, "change"], [1, "col-md-8", "col-12"], [1, "question-img"], ["formControlName", "remove_image", "class", "remove_image", 3, "value", 4, "ngIf"], [1, "img-fluid", 3, "src"], ["class", "row", 4, "ngIf"], ["align", "end", 1, "col-12"], ["mat-raised-button", "", "class", "btn btn-warning bg-light-warning", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "id", "examQuestionsButton", "class", "btn btn-info bg-light-info", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "id", "editQuestionButton", "class", "btn btn-info bg-light-info", 3, "click", 4, "ngIf"], [1, "col-md-12"], [1, "full-wid-table", 2, "overflow", "hidden !important"], ["id", "sotbmod", 1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], ["id", "addedExamQuestionsHolder"], ["id", "ExamQuestion-2626853", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", 3, "click"], ["formControlName", "remove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerOneIsCorrect"], [3, "value", "checked", "click"], ["label", "labels.AnswerText", "type", "text", 3, "control", "submitted"], ["for", "radio-0"], [1, "icon", "icon_radio"], ["type", "file", "accept", "image/*", "name", "answerOneImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerOneRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerTwoIsCorrect"], ["type", "file", "accept", "image/*", "name", "answerTwoImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerTwoRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerThreeIsCorrect"], ["type", "file", "accept", "image/*", "name", "answerThreeImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerThreeRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerFourIsCorrect"], ["type", "file", "accept", "image/*", "name", "answerFourImage", 1, "form-control", "font-dro", "clearInputs", 3, "change"], ["formControlName", "answerFourRemove_image", "class", "remove_image", 3, "value", 4, "ngIf"], ["formControlName", "answerOneRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerTwoRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerThreeRemove_image", 1, "remove_image", 3, "value"], ["formControlName", "answerFourRemove_image", 1, "remove_image", 3, "value"], ["mat-raised-button", "", "id", "examQuestionsButton", 1, "btn", "btn-info", "bg-light-info", 3, "disabled", "click"], [1, "fa", "fa-plus"], ["mat-raised-button", "", "id", "editQuestionButton", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["id", "ExamQuestion-2626853"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "warn", 3, "click"]],
  template: function AddSubQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddSubQuestionComponent_Template_input_change_19_listener($event) {
        return ctx.importFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, AddSubQuestionComponent_mat_checkbox_22_Template, 2, 1, "mat-checkbox", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, AddSubQuestionComponent_ng_container_25_Template, 93, 48, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-card-actions", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, AddSubQuestionComponent_button_27_Template, 3, 3, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, AddSubQuestionComponent_button_28_Template, 4, 4, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, AddSubQuestionComponent_button_29_Template, 3, 3, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "table", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "\xAD");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "tbody", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, AddSubQuestionComponent_tr_46_Template, 14, 3, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-dialog-actions", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddSubQuestionComponent_Template_button_click_48_listener() {
        return ctx.closeDialog.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 19, "labels.AddQuestion"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrl.mainQuestion)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrl.questionMark)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrl.exam_question_text)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 21, "labels.QuestionImage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.questionImage.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.FormCtrl.questionImage == null ? null : ctx.FormCtrl.questionImage.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrl.questionTypeId == null ? null : ctx.FormCtrl.questionTypeId.value) == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.questionId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 23, "labels.question_ar_text"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 25, "labels.QuestionType"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.questionsInGrid);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 27, "General.Close"), " ");
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
  styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 80vh;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n\n.question-img[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  max-width: 100% !important;\n  max-height: 156px !important;\n}\n\n.remove_image[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdWItcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtBQUVGIiwiZmlsZSI6ImFkZC1zdWItcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5xdWVzdGlvbi1pbWcge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAxNTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVtb3ZlX2ltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_pages_exams-setup_exams_add-exam_add-exam_component_ts.js.map