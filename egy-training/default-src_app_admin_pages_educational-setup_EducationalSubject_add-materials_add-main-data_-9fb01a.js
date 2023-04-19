"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["default-src_app_admin_pages_educational-setup_EducationalSubject_add-materials_add-main-data_-9fb01a"],{

/***/ 61803:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/add-materials/add-main-data/add-main-data.component.ts ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMaterialMainDataComponent": function() { return /* binding */ AddMaterialMainDataComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/subjects.service */ 74423);
/* harmony import */ var app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/subjectMaterials.service */ 24159);
/* harmony import */ var app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/admin/services/Admin/setup/course.service */ 96002);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/data/app-strings */ 57834);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/radio-button/radio-button.component */ 24724);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _add_material_parts_add_material_parts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../add-material-parts/add-material-parts.component */ 28974);


























function AddMaterialMainDataComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 16);
  }
}

var AddMaterialMainDataComponent = /*#__PURE__*/function () {
  function AddMaterialMainDataComponent(route, router, fb, toastr, SubjectsService, SubjectMaterialsService, courseService, authserv, spinner, datePipe, translate, appStrings, data, dialogRef) {
    var _this = this;

    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddMaterialMainDataComponent);

    this.route = route;
    this.router = router;
    this.fb = fb;
    this.toastr = toastr;
    this.SubjectsService = SubjectsService;
    this.SubjectMaterialsService = SubjectMaterialsService;
    this.courseService = courseService;
    this.authserv = authserv;
    this.spinner = spinner;
    this.datePipe = datePipe;
    this.translate = translate;
    this.appStrings = appStrings;
    this.data = data;
    this.dialogRef = dialogRef;
    this.submitted = false;
    this.Teachers = [];
    this.getGroupsValue = []; //onlyCode Validators
    // onlyCodeValidators() {
    //   let online = this.FormCtrl.codePrice.value;
    //   if (online == false) {
    //     this.FormCtrl.codePrice.reset();
    //     this.FormCtrl.codePrice.clearValidators();
    //     this.FormCtrl.materialPrice.setValidators([
    //       Validators.required,
    //       CustomeValidator.minusNum,
    //     ]);
    //   }
    //   if (online == true) {
    //     this.FormCtrl.materialPrice.reset();
    //     this.FormCtrl.materialPrice.clearValidators();
    //     this.FormCtrl.codePrice.setValidators([
    //       Validators.required,
    //       CustomeValidator.minusNum,
    //     ]);
    //   }
    //   this.FormCtrl.materialPrice.updateValueAndValidity();
    //   this.FormCtrl.codePrice.updateValueAndValidity();
    // }

    this.isMandatoryRadioList = [{
      label: "labels.Yes",
      value: true
    }, {
      label: "labels.No",
      value: false
    }];
    this.subjectId = data.subjectId;
    this.unitId = data.unitId;
    this.materialId = data.materialId;
    this.route.queryParamMap.subscribe(function (params) {
      // this.materialId = params.get("materialId");
      // this.subjectId = params.get("courseId");
      _this.functionId = Number(params.get("functionId")); // this.parentId = Number(params.get("parentId"));
      // this.courseName = params.get("courseName");

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res;
          }
        });
      } // this.returnSearchedUnitsBySubjectId();

    });
    this.translate.onLangChange.subscribe(function (lang) {
      _this.curLang = lang.lang;
    }); // this.getSubjectByID(this.subjectId);
    // on closing dialog by clicking outside dialog

    this.dialogRef.backdropClick().subscribe(function (ele) {
      _this.onCloseDialog();
    });
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddMaterialMainDataComponent, [{
    key: "onCloseDialog",
    value: function onCloseDialog() {
      var data = null;

      if (this.materialId) {
        data = {
          id: this.materialId,
          ar_name: this.materialName,
          type: this.appStrings.stageLecture,
          order: this.order,
          isMandatory: this.isMandatory
        };
      }

      this.dialogRef.close(data);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      //get Current EduCompId
      this.EduCompId = this.authserv.getEduCompId();
      this.branchId = this.authserv.getBranchId(); // this.getTeacherByEduCompId();
      // this.getGroupsByEduCompId();

      this.myForm = this.fb.group({
        subjectId: [this.subjectId, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
        EditedMaterialId: [this.materialId],
        //  teacherUserId: [""], // Validators.required
        //  selectedItemType: [1], // Validators.required
        // selectedItemId: [""], // Validators.required
        materialName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        // onlyCode: [false, Validators.required],
        //  CustomDiscountApplied: [false, Validators.required],
        //  CodeIsPurchasable: [false, Validators.required],
        IsOnline: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
        num_views: [0],
        // attachFile: [null], //+
        // studentGroupIDs: [], //ofline
        // address: [""], //ofline
        // materialPrice: [0], //onlyCode=false
        // priceDiscount: [""], //onlyCode=false
        // codePrice: [""], //onlyCode=true
        // priceDiscountType: ["null", [CustomeValidator.minusNum]],
        fromDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
        toDate: [""],
        //  unitId: [""],
        // lessonId: [""],
        orderNum: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.bigZero]],
        isMandatory: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]]
      }, {
        validator: app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.dateBefore("fromDate", "toDate")
      }); //this.onlyCodeValidators();
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
        _this2.EduCompId = e.EduCompId; //   this.getTeacherByEduCompId();
        //   this.getGroupsByEduCompId();
      });
      this.authserv.branchId.subscribe(function (e) {
        _this2.branchId = e.branchId;
      });

      if (this.materialId != null) {
        this.getMaterialById();
      }
    } //add Material Form

  }, {
    key: "addEditMaterial",
    value: function addEditMaterial() {
      var _this3 = this;

      var _a, _b, _c, _d, _e, _f;

      this.submitted = true; // let type = this.FormCtrl.selectedItemType?.value;
      // let selectedItemId;
      // if (type == 1) selectedItemId = this.subjectId;
      // else if (type == 2) selectedItemId = this.FormCtrl.unitId?.value;
      // else if (type == 3) selectedItemId = this.FormCtrl.lessonId?.value;
      // this.FormCtrl.selectedItemId?.setValue(selectedItemId);
      // if (
      //   this.FormCtrl.IsOnline.value == 2 &&
      //   !this.FormCtrl.studentGroupIDs?.value?.length
      // ) {
      //   this.toastr.warning("Must Choose Group!");
      //   return;
      // }

      if (this.FormCtrl.IsOnline.value == 1 && Number((_a = this.FormCtrl.num_views) === null || _a === void 0 ? void 0 : _a.value) < 0) {
        this.toastr.warning("Material.noOfViesMsgError");
        return;
      } // console.log(this.myForm);


      var data = {
        EditedMaterialId: this.materialId,
        isOnline: (_b = this.FormCtrl.IsOnline) === null || _b === void 0 ? void 0 : _b.value,
        // attachFile: this.FormCtrl.attachFile?.value,
        subjectId: this.subjectId,
        unitID: this.unitId,
        num_views: (_c = this.FormCtrl.num_views) === null || _c === void 0 ? void 0 : _c.value,
        materialName: (_d = this.FormCtrl.materialName) === null || _d === void 0 ? void 0 : _d.value,
        toDate: this.datePipe.transform((_e = this.FormCtrl.toDate) === null || _e === void 0 ? void 0 : _e.value),
        fromDate: this.datePipe.transform((_f = this.FormCtrl.fromDate) === null || _f === void 0 ? void 0 : _f.value),
        orderNum: this.FormCtrl.orderNum.value,
        isMandatory: this.FormCtrl.isMandatory.value
      };

      if (this.myForm.valid) {
        this.spinner.show();
        this.SubjectMaterialsService.addEditMaterial(data).subscribe(function (res) {
          if (res.returnValue == 1) {
            //console.log(res);
            _this3.materialId == null ? _this3.toastr.success("General.AddSuccessfully") : _this3.toastr.success("General.UpdeteSuccessfully");
            _this3.materialName = data.materialName;
            _this3.order = data.orderNum;
            _this3.isMandatory = data.isMandatory;
            _this3.submitted = false;
            _this3.materialId = res.Id;

            _this3.router.navigate([], {
              queryParams: {
                materialId: res.Id
              },
              queryParamsHandling: "merge"
            });
          } else _this3.toastr.error(res.returnString);

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "getMaterialById",
    value: function getMaterialById() {
      var _this4 = this;

      this.spinner.show();
      this.SubjectMaterialsService.getMaterialById(this.subjectId, this.materialId).subscribe(function (res) {
        //  console.log(res);
        if (res.retunValue == 1) {
          _this4.myForm.patchValue(res.model);

          _this4.FormCtrl.num_views.setValue(0);

          _this4.materialName = res.model.materialName; // this.attachFile = res.model?.videoPath;
          // this.FormCtrl.attachFile.setValue(res.model?.videoPath);
          // this.FormCtrl.CustomDiscountApplied.setValue(
          //   res.model.CustomDiscountApplied || false
          // );
          // if (res.model?.selectedItemType == 2)
          //   this.FormCtrl.unitId.setValue(res.model.selectedItemId);
          // else if (res.model.selectedItemType == 3) {
          //   //this.returnSearchedLessonsByUnitId()
          //   this.FormCtrl.lessonId.setValue(res.model.selectedItemId);
          // }
        }

        _this4.spinner.hide();
      });
    } // imageUrl() {
    //   if (!this.FormCtrl.attachFile?.value?.FileAsBase64)
    //     return `${environment.apiURL.replace("/api/", "")}${
    //       this.FormCtrl.attachFile?.value
    //     }`;
    //   else return this.FormCtrl.attachFile?.value.FileAsBase64;
    // }
    //Attache File
    // onChange(event: any) {
    //   let fileName = <string>event.target.files[0].name;
    //   let fileSize = <number>event.target.files[0].size;
    //   let fileType = <File>event.target.files[0].type;
    //   let LastModified = <number>event.target.files[0].lastModified;
    //   let LastModifiedDate = <Date>event.target.files[0].lastModifiedDate;
    //   if (event.target.files) {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(event.target.files[0]);
    //     reader.onload = (event: any) => {
    //       let fileReder = event.target.result;
    //       let data = {
    //         FileAsBase64: fileReder,
    //         name: fileName,
    //         size: fileSize,
    //         type: fileType,
    //         LastModified: LastModified,
    //         LastModifiedDate: LastModifiedDate,
    //       };
    //       console.log(data);
    //       if (fileSize < 5000000) {
    //         this.FormCtrl.attachFile.setValue(data);
    //       } else this.toastr.warning("File is to large, accept Max 5mb");
    //     };
    //   }
    // }

  }, {
    key: "getGroupsByEduCompId",
    value: function getGroupsByEduCompId() {
      var _this5 = this;

      this.SubjectMaterialsService.getGroupsByEduCompId(this.EduCompId).subscribe(function (res) {
        if (res.retunValue == 1) {
          _this5.groups = res.lstEduCompGroups;
        }
      });
    } // getSubjectByID(id: any) {
    //   this.courseService.getCourseById(id).subscribe((res: ICourseGetVM) => {
    //     if (res.id != null) {
    //       this.subject_ar_name =
    //         this.curLang == "ar" ? res.subCourse_ar_name : res.subCourse_en_name;
    //     }
    //   });
    // }

  }, {
    key: "getTeacherByEduCompId",
    value: function getTeacherByEduCompId() {
      var _this6 = this;

      this.spinner.show();
      this.SubjectsService.getTeacherBySubjectAndEduCompId(this.EduCompId, this.subjectId).subscribe(function (res) {
        if (res.retunValue == 1) {
          _this6.Teachers = res.teachers;
        }

        _this6.spinner.hide();
      });
    }
  }, {
    key: "returnSearchedUnitsBySubjectId",
    value: function returnSearchedUnitsBySubjectId() {
      var _this7 = this;

      this.SubjectMaterialsService.returnSearchedUnitsBySubjectId(this.subjectId).subscribe(function (res) {
        _this7.units = res;
      });
    }
  }, {
    key: "returnSearchedLessonsByUnitId",
    value: function returnSearchedLessonsByUnitId(unitId) {
      var _this8 = this;

      this.SubjectMaterialsService.returnSearchedLessonsByUnitId(unitId).subscribe(function (res) {
        _this8.Lessons = res;
      });
    }
  }]);

  return AddMaterialMainDataComponent;
}();

AddMaterialMainDataComponent.ɵfac = function AddMaterialMainDataComponent_Factory(t) {
  return new (t || AddMaterialMainDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_admin_services_Admin_subjects_service__WEBPACK_IMPORTED_MODULE_4__.SubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_5__.SubjectMaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_admin_services_Admin_setup_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_shared_data_app_strings__WEBPACK_IMPORTED_MODULE_8__.AppStrings), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef));
};

AddMaterialMainDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: AddMaterialMainDataComponent,
  selectors: [["app-add-material-main-data"]],
  decls: 37,
  vars: 34,
  consts: [["mat-dialog-title", "", 1, "mb-1"], ["mat-align-tabs", "start", 1, "no-margin-tab"], [3, "label"], [3, "formGroup"], [1, "row"], [1, "col-md-4", "col-12"], ["label", "labels.Name", "type", "text", 3, "control", "submitted"], ["label", "labels.FromDate", 3, "control", "submitted"], ["label", "labels.ToDate", 3, "control", "submitted"], ["label", "labels.Order", "type", "number", 3, "control", "submitted"], ["label", "labels.IsMandatory", 3, "control", "radioList"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], [3, "materialId", "closeDialog"], [1, "fa", "fa-plus"]],
  template: function AddMaterialMainDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-dialog-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mat-tab-group", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-tab", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "app-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "app-datepicker", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "app-datepicker", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "app-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "app-radio-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "mat-card-actions", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddMaterialMainDataComponent_Template_button_click_24_listener() {
        return ctx.onCloseDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddMaterialMainDataComponent_Template_button_click_27_listener() {
        return ctx.addEditMaterial();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, AddMaterialMainDataComponent_i_28_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "mat-tab", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "app-add-material-parts", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeDialog", function AddMaterialMainDataComponent_Template_app_add_material_parts_closeDialog_36_listener() {
        return ctx.onCloseDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 20, ctx.materialId > 0 ? "course.UpdateLecture" : "course.AddLecture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 22, "labels.Step1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 24, "labels.MainData"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.materialName)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.fromDate)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.toDate)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.orderNum)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.FormCtrl.isMandatory)("radioList", ctx.isMandatoryRadioList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](26, 26, "General.Close"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.materialId == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](30, 28, ctx.materialId == null ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](32, 30, "labels.Step2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](35, 32, "labels.MaterialParts"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("materialId", ctx.materialId);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_9__.InputComponent, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__.DatepickerComponent, _shared_components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__.RadioButtonComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _add_material_parts_add_material_parts_component__WEBPACK_IMPORTED_MODULE_12__.AddMaterialPartsComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: [".mat-tab-group[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 10px !important;\n}\n\n.mat-card-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.mat-radio-group[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0 10px !important;\n  display: flex;\n  justify-content: space-around;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tYWluLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBVkY7O0FBWUE7RUFDRSwyQkFBQTtBQVRGOztBQVlBO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQVRGOztBQVdBO0VBQ0UseUJBQUE7QUFSRiIsImZpbGUiOiJhZGQtbWFpbi1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1hdC1yYWRpby1idXR0b24ge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcbi8vIC5jZW50ZXIge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG4vLyBlbWJlZCB7XHJcbi8vICAgd2lkdGg6IDUwMHB4O1xyXG4vLyAgIGhlaWdodDogNTAwcHg7XHJcbi8vIH1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLmlzLW1hbmRhdG9yeSB7XHJcbi8vICAgbWFyZ2luOiAxMnB4IDAgMnB4O1xyXG4vLyB9XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 28974:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/educational-setup/EducationalSubject/add-materials/add-material-parts/add-material-parts.component.ts ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMaterialPartsComponent": function() { return /* binding */ AddMaterialPartsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/services/Admin/subjectMaterials.service */ 24159);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input-validation-msg/input-validation-msg.component */ 90530);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function AddMaterialPartsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r0.FormCtrl.SecondaryPath)("submitted", ctx_r0.submitted);
  }
}

function AddMaterialPartsComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaterialPartsComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r4.closeDialog.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Close"), " ");
  }
}

function AddMaterialPartsComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 18);
  }
}

function AddMaterialPartsComponent_ng_container_32_tr_16_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "VideoCipher");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddMaterialPartsComponent_ng_container_32_tr_16_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Vimeo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddMaterialPartsComponent_ng_container_32_tr_16_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Sprout Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AddMaterialPartsComponent_ng_container_32_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddMaterialPartsComponent_ng_container_32_tr_16_td_3_Template, 2, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AddMaterialPartsComponent_ng_container_32_tr_16_td_4_Template, 2, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddMaterialPartsComponent_ng_container_32_tr_16_td_5_Template, 2, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaterialPartsComponent_ng_container_32_tr_16_Template_a_click_9_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      var part_r7 = restoredCtx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r11.getPartById(part_r7.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaterialPartsComponent_ng_container_32_tr_16_Template_a_click_11_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      var part_r7 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r13.openDeleateDialog(part_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var part_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", part_r7.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](part_r7.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", part_r7.videoTypeId == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", part_r7.videoTypeId == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", part_r7.videoTypeId == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](part_r7.view_percentage);
  }
}

function AddMaterialPartsComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, AddMaterialPartsComponent_ng_container_32_tr_16_Template, 13, 6, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-dialog-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaterialPartsComponent_ng_container_32_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r14.closeDialog.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, "labels.Name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 8, "labels.Type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 10, "labels.ConfirmViewPercentage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.parts);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 12, "General.Close"), " ");
  }
}

var AddMaterialPartsComponent = /*#__PURE__*/function () {
  function AddMaterialPartsComponent(fb, toastr, SubjectMaterialsService, spinner, dialog) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddMaterialPartsComponent);

    this.fb = fb;
    this.toastr = toastr;
    this.SubjectMaterialsService = SubjectMaterialsService;
    this.spinner = spinner;
    this.dialog = dialog;
    this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.parts = [];
    this.submitted = false;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddMaterialPartsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a;

      this.myForm = this.fb.group({
        materialId: [this.materialId, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        Id: [0],
        videoTypeId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        Path: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        SecondaryPath: [""],
        view_percentage: [90, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]]
      });

      if (this.materialId != null || this.materialId != undefined) {
        (_a = this.FormCtrl.materialId) === null || _a === void 0 ? void 0 : _a.setValue(this.materialId);
        this.getMaterialParts();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      var _a, _b;

      if (this.materialId != null || this.materialId != undefined) {
        (_b = (_a = this.FormCtrl) === null || _a === void 0 ? void 0 : _a.materialId) === null || _b === void 0 ? void 0 : _b.setValue(this.materialId);
        this.getMaterialParts();
      }
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      var _a;

      return (_a = this.myForm) === null || _a === void 0 ? void 0 : _a.controls;
    } // get Material Parts

  }, {
    key: "getMaterialParts",
    value: function getMaterialParts() {
      var _this = this;

      this.spinner.show();
      this.SubjectMaterialsService.getMaterialParts(this.materialId).subscribe(function (res) {
        if (res.returnValue == 1) {
          //  console.log("Parts", res);
          _this.parts = res.MaterialParts;
        }

        _this.spinner.hide();
      });
    } // get Part ById

  }, {
    key: "getPartById",
    value: function getPartById(id) {
      var _this2 = this;

      this.spinner.show();
      this.SubjectMaterialsService.getPartById(id).subscribe(function (res) {
        // console.log("Part", res);
        _this2.myForm.patchValue(res.MaterialPart);

        _this2.spinner.hide();
      });
    } // Start: add Subject

  }, {
    key: "addPart",
    value: function addPart() {
      var _this3 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        this.spinner.show();
        this.SubjectMaterialsService.addPart(this.myForm.value).subscribe(function (res) {
          var _a, _b, _c, _d; // console.log(res);


          if (res.returnValue == 1) {
            _this3.getMaterialParts();

            if (_this3.FormCtrl.Id.value == 0) _this3.toastr.success("General.AddSuccessfully");else _this3.toastr.success("General.UpdeteSuccessfully");

            _this3.myForm.reset();

            (_a = _this3.FormCtrl.Id) === null || _a === void 0 ? void 0 : _a.setValue(0);
            (_b = _this3.FormCtrl.videoTypeId) === null || _b === void 0 ? void 0 : _b.setValue("");
            (_c = _this3.FormCtrl.materialId) === null || _c === void 0 ? void 0 : _c.setValue(_this3.materialId);
            (_d = _this3.FormCtrl.view_percentage) === null || _d === void 0 ? void 0 : _d.setValue(90);
            _this3.submitted = false;
          }

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "deletePart",
    value: function deletePart(part) {
      var _this4 = this;

      this.spinner.show();
      this.SubjectMaterialsService.deletePart(part.Id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this4.parts.indexOf(part);

          _this4.parts.splice(i, 1);

          _this4.toastr.success("General.DeleteSuccessfully");

          _this4.spinner.hide();
        }
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(part) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: part.Name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deletePart(part);
      });
    }
  }]);

  return AddMaterialPartsComponent;
}();

AddMaterialPartsComponent.ɵfac = function AddMaterialPartsComponent_Factory(t) {
  return new (t || AddMaterialPartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_admin_services_Admin_subjectMaterials_service__WEBPACK_IMPORTED_MODULE_5__.SubjectMaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};

AddMaterialPartsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddMaterialPartsComponent,
  selectors: [["app-add-material-parts"]],
  inputs: {
    materialId: "materialId"
  },
  outputs: {
    closeDialog: "closeDialog"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 33,
  vars: 27,
  consts: [[1, "container-fluid", 3, "formGroup"], [1, "row"], [1, "col-md-6", "col-6"], ["label", "labels.Name", "type", "text", 3, "control", "submitted"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["formControlName", "videoTypeId"], [3, "value"], [3, "control", "submitted", "isSelect"], ["label", "labels.Link", "type", "text", 3, "control", "submitted"], ["class", "col-md-6 col-6", 4, "ngIf"], ["label", "labels.ConfirmViewPercentage", "type", "number", 3, "control", "submitted"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-warning bg-light-warning", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "disabled", "click"], ["class", "fa fa-plus", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", 3, "click"], [1, "fa", "fa-plus"], [1, "table-responsive"], [1, "table", "table-striped", "m-0"], [3, "id", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", 3, "mat-dialog-close", "click"], [3, "id"], [4, "ngIf"], ["matTooltip", "Edit", 1, "success", "p-0", 3, "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["matTooltip", "Delete", 1, "danger", "p-0", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"]],
  template: function AddMaterialPartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "VideoCipher");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Vimeo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "SproutVideo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input-validation-msg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "app-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, AddMaterialPartsComponent_div_23_Template, 2, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-card-actions", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, AddMaterialPartsComponent_button_27_Template, 3, 3, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaterialPartsComponent_Template_button_click_28_listener() {
        return ctx.addPart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, AddMaterialPartsComponent_i_29_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, AddMaterialPartsComponent_ng_container_32_Template, 21, 14, "ng-container", 16);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrl.Name)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 21, "labels.Type"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 23, "General.Choose"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrl.videoTypeId)("submitted", ctx.submitted)("isSelect", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrl.Path)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.videoTypeId.value == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrl.view_percentage)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.parts.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.FormCtrl.materialId.value == undefined || ctx.FormCtrl.materialId.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.Id.value == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 25, ctx.FormCtrl.Id.value == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.parts.length > 0);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _shared_components_dynamic_form_field_input_validation_msg_input_validation_msg_component__WEBPACK_IMPORTED_MODULE_7__.InputValidationMsgComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogClose, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
  styles: [".mat-card-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tYXRlcmlhbC1wYXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLW1hdGVyaWFsLXBhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 74423:
/*!**********************************************************!*\
  !*** ./src/app/admin/services/Admin/subjects.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectsService": function() { return /* binding */ SubjectsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var SubjectsService = /*#__PURE__*/function () {
  function SubjectsService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubjectsService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubjectsService, [{
    key: "getSubjects",
    value: function getSubjects(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/subject", data);
    }
  }, {
    key: "getMainSubject",
    value: function getMainSubject() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getAllSubjects");
    }
  }, {
    key: "getSubjectByID",
    value: function getSubjectByID(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getSubjectByID/" + id);
    }
  }, {
    key: "addEditSubject",
    value: function addEditSubject(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/EducationalSubject"), data);
    }
  }, {
    key: "deleteSubject",
    value: function deleteSubject(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/subject/").concat(id));
    }
  }, {
    key: "getTeacherBySubjectAndEduCompId",
    value: function getTeacherBySubjectAndEduCompId(EduCompId, subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/getTeachersByEduCompID/").concat(EduCompId, "/").concat(subjectId));
    }
  }, {
    key: "addQuestionSettings",
    value: function addQuestionSettings(EdueCompId, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/subjectStudentQuestionSettings/").concat(EdueCompId), data);
    }
  }, {
    key: "addTemplateSettings",
    value: function addTemplateSettings(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/subjectStudentTemplateSettings/", data);
    }
  }, {
    key: "getSubjectStructre",
    value: function getSubjectStructre(subjectId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/subjectStructure/" + subjectId);
    } //#region  ///////////////////// course structure units

  }, {
    key: "getUnits",
    value: function getUnits(subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/returnSearchedUnitsBySubjectId/").concat(subjectId));
    }
  }, {
    key: "getUnitById",
    value: function getUnitById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/EditUnitView/").concat(id));
    }
  }, {
    key: "addUpdateUnit",
    value: function addUpdateUnit(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/AddSubjectUnitPost"), data);
    }
  }, {
    key: "deleteUnit",
    value: function deleteUnit(unitId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/RemoveUnit/").concat(unitId), null);
    } //#endregion

  }, {
    key: "getLessonById",
    value: function getLessonById(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/EditLessonView/" + id);
    }
  }, {
    key: "addUpdateLesson",
    value: function addUpdateLesson(unitId, data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/AddSubjectLessonPost/" + unitId, data);
    }
  }, {
    key: "deleteLesson",
    value: function deleteLesson(id) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/RemoveLesson/" + id, null);
    }
  }, {
    key: "getTopicsByLessonId",
    value: function getTopicsByLessonId(page, LessonId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/GetTopicsByLessonIdTable/").concat(page, "/").concat(LessonId));
    }
  }, {
    key: "getTopicById",
    value: function getTopicById(LessonId, id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getTopicById/" + LessonId + "/" + id);
    }
  }, {
    key: "addUpdateTopic",
    value: function addUpdateTopic(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/SubmitTopic", data);
    }
  }, {
    key: "deleteTopic",
    value: function deleteTopic(id) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/RemoveTopic/" + id, null);
    }
  }]);

  return SubjectsService;
}();

SubjectsService.ɵfac = function SubjectsService_Factory(t) {
  return new (t || SubjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

SubjectsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SubjectsService,
  factory: SubjectsService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_pages_educational-setup_EducationalSubject_add-materials_add-main-data_-9fb01a.js.map