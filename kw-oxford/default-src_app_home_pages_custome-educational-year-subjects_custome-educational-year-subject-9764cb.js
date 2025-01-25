"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["default-src_app_home_pages_custome-educational-year-subjects_custome-educational-year-subject-9764cb"],{

/***/ 94008:
/*!*************************************************************!*\
  !*** ./src/app/admin/services/Admin/reservation.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationService": function() { return /* binding */ ReservationService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var ReservationService = /*#__PURE__*/function () {
  function ReservationService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReservationService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReservationService, [{
    key: "InputSettings",
    value: function InputSettings(viewId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/InputSettings/").concat(viewId));
    }
  }, {
    key: "SubmitInputsSettings",
    value: function SubmitInputsSettings(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/InputSettings", data);
    }
  }, {
    key: "returnBranchesByEduCompId",
    value: function returnBranchesByEduCompId(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnBranchesByEduCompId/").concat(EduCompId));
    }
  }, {
    key: "GetAvaliableDatesByBranchId",
    value: function GetAvaliableDatesByBranchId(BranchId, MustHaveStudents, DontShowMaxed) {
      return this.http.get("".concat("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/GetAvaliableDatesByBranchId/").concat(BranchId), "/", MustHaveStudents, "/").concat(DontShowMaxed));
    }
  }, {
    key: "returnCities",
    value: function returnCities() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnCities");
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnArea");
    }
  }, {
    key: "returnStatus",
    value: function returnStatus() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnStatus");
    }
  }, {
    key: "getReservationsList",
    value: function getReservationsList(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnReservations", data);
    }
  }, {
    key: "ReservationDetails",
    value: function ReservationDetails(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/ReservationDetails/").concat(id));
    }
  }, {
    key: "getReservationEdit",
    value: function getReservationEdit(id, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/ReservationEdit/").concat(id, "/").concat(EduCompId));
    }
  }, {
    key: "SubmitReservationEdit",
    value: function SubmitReservationEdit(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/ReservationEdit", data);
    }
  }, {
    key: "GetStudentStatus",
    value: function GetStudentStatus(Id, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/ReservationStatus/").concat(Id, "/").concat(EduCompId));
    }
  }, {
    key: "SubmitReservationStatus",
    value: function SubmitReservationStatus(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/ReservationStatus", data);
    }
  }, {
    key: "ReservationStatusPaging",
    value: function ReservationStatusPaging(page, EduCompUserId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/ReservationStatusPaging/").concat(page, "/").concat(EduCompUserId));
    }
  }, {
    key: "getReasonsByStatusId",
    value: function getReasonsByStatusId(StatusId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/returnReasonsByStatusId/").concat(StatusId));
    }
  }, {
    key: "updateStudentCustomDiscount",
    value: function updateStudentCustomDiscount(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "CustomDiscountsUsers/SaveCustomDiscountUser", body);
    }
  }, {
    key: "getStudentCustomDiscount",
    value: function getStudentCustomDiscount(userId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CustomDiscountsUsers/returnUserCustomDiscountDetails/").concat(userId));
    }
  }, {
    key: "getCustomDiscount",
    value: function getCustomDiscount(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CustomDiscountsUsers/returnCustomDiscountsByEduCompId/").concat(EduCompId));
    }
  }, {
    key: "getStudentCustomDiscountsList",
    value: function getStudentCustomDiscountsList(userId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CustomDiscountsUsers/returnUserCustomDiscountsByUserId/").concat(userId));
    }
  }, {
    key: "getCustomReservation",
    value: function getCustomReservation(EduCompId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Reservations/CustomReservation/" + EduCompId);
    }
  }, {
    key: "returnBranchesByEducTypeId",
    value: function returnBranchesByEducTypeId(typeId, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Reservations/returnCenterBranchesByEducationalTypeId/").concat(typeId, "/").concat(EduCompId));
    }
  }, {
    key: "addReservationDate",
    value: function addReservationDate(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "reservation/add-date"), data);
    }
  }, {
    key: "getAllReservationDate",
    value: function getAllReservationDate(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "reservation/get-all/").concat(page));
    }
  }, {
    key: "downloadTemplate",
    value: function downloadTemplate() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "reservation/download-date-template");
    }
  }, {
    key: "getAvailableGroups",
    value: function getAvailableGroups(teacherId, EduCompId, isOnline) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Reservations/returnAvailableStudyingGroupsByTeacherId/").concat(teacherId, "/").concat(EduCompId, "/").concat(isOnline));
    }
  }, {
    key: "CompletaReservation",
    value: function CompletaReservation(data) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Reservations/reservationPaymentAndAddStudentToGroup/").concat(data.groupId, "/").concat(data.teacherUserId, "/").concat(data.eduCompId));
    }
  }, {
    key: "getReservationInfo",
    value: function getReservationInfo(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Reservations/returnReservationInfo/").concat(EduCompId));
    }
  }, {
    key: "checkUserBalance",
    value: function checkUserBalance(EduCompId, teacherId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Reservations/isUserHasBalanceForCustomTeacher/").concat(EduCompId, "/").concat(teacherId));
    }
  }]);

  return ReservationService;
}();

ReservationService.ɵfac = function ReservationService_Factory(t) {
  return new (t || ReservationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ReservationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ReservationService,
  factory: ReservationService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 3483:
/*!*************************************************************************************************************!*\
  !*** ./src/app/home/pages/custome-educational-year-subjects/custome-educational-year-subjects.component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomEducationalYearSubjectsComponent": function() { return /* binding */ CustomEducationalYearSubjectsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/language.service */ 75531);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);















function CustomEducationalYearSubjectsComponent_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var subject_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    var tmp_3_0;
    var tmp_4_0;
    var tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("card-link", ctx_r3.authService.isStudent());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r3.navigationToSubject(subject_r4.teacher_user_id, subject_r4.teacher_subject_id, subject_r4 == null ? null : subject_r4.subject_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r3.imageUrl(subject_r4 == null ? null : subject_r4.subjectImage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r3.languageService.isArabic ? (tmp_3_0 = subject_r4 == null ? null : subject_r4.subject_ar_name) !== null && tmp_3_0 !== undefined ? tmp_3_0 : subject_r4 == null ? null : subject_r4.subject_en_name : (tmp_3_0 = subject_r4 == null ? null : subject_r4.subject_en_name) !== null && tmp_3_0 !== undefined ? tmp_3_0 : subject_r4 == null ? null : subject_r4.subject_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.languageService.isArabic ? (tmp_4_0 = subject_r4 == null ? null : subject_r4.subject_ar_name) !== null && tmp_4_0 !== undefined ? tmp_4_0 : subject_r4 == null ? null : subject_r4.subject_en_name : (tmp_4_0 = subject_r4 == null ? null : subject_r4.subject_en_name) !== null && tmp_4_0 !== undefined ? tmp_4_0 : subject_r4 == null ? null : subject_r4.subject_ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.languageService.isArabic == "ar" ? (tmp_5_0 = subject_r4 == null ? null : subject_r4.teacher_ar__name) !== null && tmp_5_0 !== undefined ? tmp_5_0 : subject_r4 == null ? null : subject_r4.teacher_en__name : (tmp_5_0 = subject_r4 == null ? null : subject_r4.teacher_en__name) !== null && tmp_5_0 !== undefined ? tmp_5_0 : subject_r4 == null ? null : subject_r4.teacher_ar__name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subject_r4 == null ? null : subject_r4.eduYear_ar_name, " ");
  }
}

function CustomEducationalYearSubjectsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomEducationalYearSubjectsComponent_div_8_ng_container_1_Template, 12, 8, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.Subjects);
  }
}

function CustomEducationalYearSubjectsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.appAssets.coursesNotFound, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 2, "subjects.noSubjects"), " ");
  }
}

var CustomEducationalYearSubjectsComponent = /*#__PURE__*/function () {
  function CustomEducationalYearSubjectsComponent(route, spinner, fileService, authService, GeneralService, languageService, appAssets) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomEducationalYearSubjectsComponent);

    this.route = route;
    this.spinner = spinner;
    this.fileService = fileService;
    this.authService = authService;
    this.GeneralService = GeneralService;
    this.languageService = languageService;
    this.appAssets = appAssets;
    this.Subjects = [];
    this.route.paramMap.subscribe(function (params) {
      return _this.yearId = Number(params.get("customYearId"));
    });
    this.route.paramMap.subscribe(function (params) {
      return _this.stageId = Number(params.get("stageId"));
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomEducationalYearSubjectsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      var _a;

      this.languageService.changeLanguage((_a = localStorage.getItem("currentLang")) !== null && _a !== void 0 ? _a : "ar");
      this.spinner.show();
      this.GeneralService.getAllSubjectByCustomEducationalYear(this.yearId).subscribe(function (res) {
        if (res) {
          _this2.Subjects = res.subjectEducationalYears.filter(function (subject) {
            return subject.teacher_user_id > 0;
          });
          console.log(_this2.Subjects);

          _this2.spinner.hide();
        }
      });
    }
  }, {
    key: "imageUrl",
    value: function imageUrl(url) {
      return url ? this.fileService.previewPicture(url) : "assets/img/lectureBackground.jpeg";
    }
  }, {
    key: "navigationToSubject",
    value: function navigationToSubject(teacher_user_id, teacherSubjectId, subjectId) {
      // let url = `/student/subject-lectures/${this.yearId}/${subjectId}`;
      var url = "/student/teacher/".concat(teacher_user_id, "/teacher-subject/").concat(teacherSubjectId, "/").concat(subjectId);

      if (this.authService.isUser()) {
        if (this.authService.isStudent()) return url;else return null;
      } else return "/auth/login";
    }
  }]);

  return CustomEducationalYearSubjectsComponent;
}();

CustomEducationalYearSubjectsComponent.ɵfac = function CustomEducationalYearSubjectsComponent_Factory(t) {
  return new (t || CustomEducationalYearSubjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_6__.AppAssets));
};

CustomEducationalYearSubjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CustomEducationalYearSubjectsComponent,
  selectors: [["app-educational-year-teacher-index"]],
  decls: 12,
  vars: 9,
  consts: [[1, "container-fluid"], ["mat-raised-button", "", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "routerLink"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-md-6", "col-lg-3", "text-center"], [3, "routerLink"], ["mat-card-image", "", 1, "p-1", 3, "src", "alt"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-12", "text-center"], ["height", "300", "width", "400", 1, "img-fluid", "error-img", 3, "src"], [1, "mt-4"]],
  template: function CustomEducationalYearSubjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, CustomEducationalYearSubjectsComponent_div_8_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CustomEducationalYearSubjectsComponent_ng_template_9_Template, 9, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ngx-spinner");
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 5, "Material.Subjects"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/student/educational-year/", ctx.stageId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Subjects.length > 0)("ngIfElse", _r1);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardImage],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: [".card-link .mat-card {\n  padding: 22px !important;\n  cursor: pointer !important;\n  transition: all 0.2s ease-in-out !important;\n}\n\n.card-link[_ngcontent-%COMP%]:hover   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: -8px 8px 14px 10px rgba(25, 42, 70, 0.11), 8px 8px 14px 0 rgba(25, 42, 70, 0.11) !important;\n  transform: scale(1.01);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWUtZWR1Y2F0aW9uYWwteWVhci1zdWJqZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVFO0VBQ0UsdUdBQUE7RUFFQSxzQkFBQTtBQUFKIiwiZmlsZSI6ImN1c3RvbWUtZWR1Y2F0aW9uYWwteWVhci1zdWJqZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY2FyZC1saW5rIC5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMjJweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtbGluazpob3ZlciB7XHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IC04cHggOHB4IDE0cHggMTBweCByZ2IoMjUgNDIgNzAgLyAxMSUpLFxyXG4gICAgICA4cHggOHB4IDE0cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 62814:
/*!***************************************************************************************!*\
  !*** ./src/app/home/pages/home-educational-years/home-educational-years.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeEducationalYearsComponent": function() { return /* binding */ HomeEducationalYearsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/data/app-assets */ 8843);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












function HomeEducationalYearsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var year_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("routerLink", "/student/custom-year-subjects/", ctx_r3.stageId, "/", year_r4.educational_year_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", year_r4.educational_year_name, " ");
  }
}

function HomeEducationalYearsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeEducationalYearsComponent_div_6_div_1_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.years);
  }
}

function HomeEducationalYearsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.appAssets.coursesNotFound, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 2, "subjects.noYears"), " ");
  }
}

var HomeEducationalYearsComponent = /*#__PURE__*/function () {
  function HomeEducationalYearsComponent(generalServ, route, spinner, appAssets) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeEducationalYearsComponent);

    this.generalServ = generalServ;
    this.route = route;
    this.spinner = spinner;
    this.appAssets = appAssets;
    this.years = [];
    this.route.paramMap.subscribe(function (param) {
      return _this.stageId = Number(param.get("stageId"));
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeEducationalYearsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getEduYearByStageId();
    }
  }, {
    key: "getEduYearByStageId",
    value: function getEduYearByStageId() {
      var _this2 = this;

      this.spinner.show();
      this.generalServ.getEduYearByStageId(this.stageId).subscribe(function (res) {
        _this2.years = res;

        _this2.spinner.hide();
      });
    }
  }]);

  return HomeEducationalYearsComponent;
}();

HomeEducationalYearsComponent.ɵfac = function HomeEducationalYearsComponent_Factory(t) {
  return new (t || HomeEducationalYearsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_data_app_assets__WEBPACK_IMPORTED_MODULE_3__.AppAssets));
};

HomeEducationalYearsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HomeEducationalYearsComponent,
  selectors: [["app-home-educational-years"]],
  decls: 10,
  vars: 5,
  consts: [[1, "container-fluid"], [1, "row", "mb-3", "mx-0", "float-right"], ["mat-raised-button", "", "routerLink", "/home", 1, "btn", "btn-warning", "bg-light-warning"], [1, "clearfix"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "routerLink"], ["mat-card-image", "", "src", "../../../../assets/newhome/img/08.jpg", 1, "p-1", 2, "height", "250px"], [1, "text-center"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-12", "text-center"], ["height", "300", "width", "400", 1, "img-fluid", "error-img", 3, "src"], [1, "mt-4"]],
  template: function HomeEducationalYearsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HomeEducationalYearsComponent_div_6_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HomeEducationalYearsComponent_ng_template_7_Template, 9, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ngx-spinner");
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.years.length > 0)("ngIfElse", _r1);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWVkdWNhdGlvbmFsLXllYXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 11366:
/*!***************************************************************************************!*\
  !*** ./src/app/home/pages/teacher-subjects-index/teacher-subjects-index.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSubjectsIndexComponent": function() { return /* binding */ TeacherSubjectsIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_teacherSubjects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/student/services/teacherSubjects.service */ 89591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_admin_services_Admin_reservation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/admin/services/Admin/reservation.service */ 94008);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















function TeacherSubjectsIndexComponent_ng_container_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subject_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("card-link", ctx_r2.authService.isStudent());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r2.navigationToSubject(ctx_r2.teacherSubjects.userId, subject_r1 == null ? null : subject_r1.teacher_subject_id, subject_r1 == null ? null : subject_r1.subject_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.imageUrl(subject_r1 == null ? null : subject_r1.subject_picture, subject_r1.teacher_id), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", subject_r1 == null ? null : subject_r1.subject_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subject_r1 == null ? null : subject_r1.subject_ar_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subject_r1 == null ? null : subject_r1.subject_year_name, " ");
  }
}

function TeacherSubjectsIndexComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TeacherSubjectsIndexComponent_ng_container_20_div_1_Template, 8, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var subject_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", subject_r1.teacher_subject_id > 0);
  }
}

var TeacherSubjectsIndexComponent = /*#__PURE__*/function () {
  function TeacherSubjectsIndexComponent(TeacherSubServ, router, route, toaster, authService, ReservationService, spinner, GeneralService, fileService) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherSubjectsIndexComponent);

    this.TeacherSubServ = TeacherSubServ;
    this.router = router;
    this.route = route;
    this.toaster = toaster;
    this.authService = authService;
    this.ReservationService = ReservationService;
    this.spinner = spinner;
    this.GeneralService = GeneralService;
    this.fileService = fileService;
    this.route.paramMap.subscribe(function (params) {
      return _this.teacherUserId = Number(params.get("teacherId"));
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherSubjectsIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // this.getReservationInfo();
      this.getSubjectByTeacherId();
    }
  }, {
    key: "getSubjectByTeacherId",
    value: function getSubjectByTeacherId() {
      var _this2 = this;

      this.spinner.show();
      this.GeneralService.getSubjectByTeacherId(this.teacherUserId).subscribe(function (res) {
        if (res) {
          _this2.teacherSubjects = res;
          console.log(_this2.teacherSubjects);

          _this2.spinner.hide();
        }
      });
    }
  }, {
    key: "imageUrl",
    value: function imageUrl(path, teacherId) {
      var imagePath = null;

      if (path != null) {
        imagePath = path;
        return this.fileService.previewPicture(imagePath);
      } else if (teacherId == 22) {
        imagePath = "assets/img/licpic.jpeg";
      } else {
        imagePath = "assets/img/lectureBackground.jpeg";
      }

      console.log("path", path);
      console.log("img", imagePath);
      console.log("id", teacherId);
      return imagePath;
    }
  }, {
    key: "getReservationInfo",
    value: function getReservationInfo() {
      var _this3 = this;

      this.ReservationService.getReservationInfo(2).subscribe(function (res) {
        _this3.Reservations = res;
      });
    }
  }, {
    key: "navigationToSubject",
    value: function navigationToSubject(teacherUserId, teacherSubjectId, subjectId) {
      var url = "/student/teacher/".concat(teacherUserId, "/teacher-subject/").concat(teacherSubjectId, "/").concat(subjectId);

      if (this.authService.isUser()) {
        if (this.authService.isStudent()) return url;else return null;
      } else return '/auth/login';
    }
  }]);

  return TeacherSubjectsIndexComponent;
}();

TeacherSubjectsIndexComponent.ɵfac = function TeacherSubjectsIndexComponent_Factory(t) {
  return new (t || TeacherSubjectsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_student_services_teacherSubjects_service__WEBPACK_IMPORTED_MODULE_2__.TeacherSubjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_admin_services_Admin_reservation_service__WEBPACK_IMPORTED_MODULE_4__.ReservationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__.FileService));
};

TeacherSubjectsIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: TeacherSubjectsIndexComponent,
  selectors: [["app-teacher-subjects-index"]],
  decls: 21,
  vars: 10,
  consts: [[1, "container-fluid", "pl-5", "pr-5"], [1, "row"], ["mat-raised-button", "", "routerLink", "/home", 1, "btn", "btn-warning", "bg-light-warning", "float-right"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-lg-3", "col-xl-3", "m-3"], [1, "card-content"], ["alt", "avatar", "width", "200", "height", "400", 1, "card-img-top", "img-fluid", "material-card-img", 3, "src"], [1, "card-body"], [1, "col-12", "col-md-12", "col-lg-8", "col-xl-8"], [4, "ngFor", "ngForOf"], ["class", "col-xs-12 col-md-6 col-lg-4", 4, "ngIf"], [1, "col-xs-12", "col-md-6", "col-lg-4"], [3, "routerLink"], ["mat-card-image", "", 3, "src", "alt"]],
  template: function TeacherSubjectsIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, TeacherSubjectsIndexComponent_ng_container_20_Template, 2, 1, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 6, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.imageUrl(ctx.teacherSubjects == null ? null : ctx.teacherSubjects.teacher_image, ctx.teacherSubjects == null ? null : ctx.teacherSubjects.userId), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.teacherSubjects == null ? null : ctx.teacherSubjects.teacher_name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.teacherSubjects == null ? null : ctx.teacherSubjects.teacher_descreption, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 8, "Material.Subjects"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.teacherSubjects == null ? null : ctx.teacherSubjects.subjects);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardImage],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".card-link .mat-card {\n  padding: 22px !important;\n  cursor: pointer !important;\n  transition: all 0.2s ease-in-out !important;\n}\n\n.card-link[_ngcontent-%COMP%]:hover   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: -8px 8px 14px 10px rgba(25, 42, 70, 0.11), 8px 8px 14px 0 rgba(25, 42, 70, 0.11) !important;\n  transform: scale(1.01);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItc3ViamVjdHMtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFRTtFQUNFLHVHQUFBO0VBRUEsc0JBQUE7QUFBSiIsImZpbGUiOiJ0ZWFjaGVyLXN1YmplY3RzLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYXJkLWxpbmsgLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1saW5rOmhvdmVyIHtcclxuICAubWF0LWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogLThweCA4cHggMTRweCAxMHB4IHJnYigyNSA0MiA3MCAvIDExJSksXHJcbiAgICAgIDhweCA4cHggMTRweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 89591:
/*!*************************************************************!*\
  !*** ./src/app/student/services/teacherSubjects.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSubjectsService": function() { return /* binding */ TeacherSubjectsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);






var TeacherSubjectsService = /*#__PURE__*/function () {
  function TeacherSubjectsService() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherSubjectsService);

    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
  } //constructor(private http: HttpClient) {}
  //Return Home Teachers


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherSubjectsService, [{
    key: "ReturnHomeTeachers",
    value: function ReturnHomeTeachers() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/HomeTeachers");
    }
  }, {
    key: "getMyTeachers",
    value: function getMyTeachers() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/Teachers/returnStudentTeachers");
    } //Return Teachers Payments By EduCompId

  }, {
    key: "TeachersPayments",
    value: function TeachersPayments() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/returnTeacherPaymentsTest");
    } //Return Center By User

  }, {
    key: "returnCenterByUser",
    value: function returnCenterByUser() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnCentersByUser");
    }
  }, {
    key: "ReturnTeacherSubjects",
    value: function ReturnTeacherSubjects(id) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/selectedTeacher", id);
    }
  }, {
    key: "ReturnTeacherData",
    value: function ReturnTeacherData(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/getTeacherSummary", data);
    }
  }, {
    key: "ReturnSubjectChapters",
    value: function ReturnSubjectChapters(id) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/TeacherSubjectData", id);
    } //Live Lectures

  }, {
    key: "ReturnLiveLectures",
    value: function ReturnLiveLectures(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/LiveLectures", data);
    } //Lectures List

  }, {
    key: "ReturneLecturesList",
    value: function ReturneLecturesList(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/materialsByEntID", data);
    } // Offline Lectures List

  }, {
    key: "ReturneofflineLectures",
    value: function ReturneofflineLectures(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnOfflineMaterialsByEntId", data);
    } // Exams List

  }, {
    key: "ReturneExamsList",
    value: function ReturneExamsList(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/materialsByExamsID", data);
    } //Files List

  }, {
    key: "ReturneFilesList",
    value: function ReturneFilesList(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/getDocumentFiles", data);
    } // Return LTeacher Subject Evaluation

  }, {
    key: "LoadTeacherSubjectEvaluation",
    value: function LoadTeacherSubjectEvaluation(teacher_sub_id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/LoadTeacherSubjectEvaluation/" + teacher_sub_id);
    } // Return Teacher Subjects By SubjectId

  }, {
    key: "returnTeacherSubjectsBySubjectId",
    value: function returnTeacherSubjectsBySubjectId(pageId, SubjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnTeacherSubjectsBySubjectId/").concat(pageId, "/").concat(SubjectId));
    } // Return Subject Structure

  }, {
    key: "returnSubjectStructure",
    value: function returnSubjectStructure(SubjectId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/viewSubjectPartialBySubjectId/" + SubjectId);
    } // Unit List by teacher subject id

  }, {
    key: "ReturnUnitList",
    value: function ReturnUnitList(teacherSubjectId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/SubjectData", {
        teacherSubjectId: teacherSubjectId
      });
    } // Unit List by subject id

  }, {
    key: "ReturnUnitListBySubjectId",
    value: function ReturnUnitListBySubjectId(subjectId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/SubjectDataBySubjectId", {
        id: subjectId
      });
    } // lesson List by teacher subject id

  }, {
    key: "ReturnLessonList",
    value: function ReturnLessonList(unitId, teacherSubjectId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/UnitData/".concat(unitId, "/").concat(teacherSubjectId));
    } // lesson List by subject id

  }, {
    key: "ReturnLessonListBySubjectId",
    value: function ReturnLessonListBySubjectId(unitId, subjectId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Teachers/UnitDataBySubjectId/".concat(unitId, "/").concat(subjectId));
    }
  }]);

  return TeacherSubjectsService;
}();

TeacherSubjectsService.ɵfac = function TeacherSubjectsService_Factory(t) {
  return new (t || TeacherSubjectsService)();
};

TeacherSubjectsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TeacherSubjectsService,
  factory: TeacherSubjectsService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 39045:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": function() { return /* binding */ reduce; }
/* harmony export */ });
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan */ 32647);
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ 52160);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ 9701);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/pipe */ 36800);




function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)(accumulator, seed), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1), (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__.defaultIfEmpty)(seed))(source);
    };
  }

  return function reduceOperatorFunction(source) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)(function (acc, value, index) {
      return accumulator(acc, value, index + 1);
    }), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1))(source);
  };
}

/***/ }),

/***/ 19878:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/toArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toArray": function() { return /* binding */ toArray; }
/* harmony export */ });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ 39045);


function toArrayReducer(arr, item, index) {
  if (index === 0) {
    return [item];
  }

  arr.push(item);
  return arr;
}

function toArray() {
  return (0,_reduce__WEBPACK_IMPORTED_MODULE_0__.reduce)(toArrayReducer, []);
}

/***/ }),

/***/ 14978:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": function() { return /* binding */ CarouselComponent; },
/* harmony export */   "CarouselModule": function() { return /* binding */ CarouselModule; },
/* harmony export */   "CarouselSlideDirective": function() { return /* binding */ CarouselSlideDirective; },
/* harmony export */   "OwlRouterLinkDirective": function() { return /* binding */ OwlRouterLinkDirective; },
/* harmony export */   "OwlRouterLinkWithHrefDirective": function() { return /* binding */ OwlRouterLinkWithHrefDirective; },
/* harmony export */   "SlideModel": function() { return /* binding */ SlideModel; },
/* harmony export */   "SlidesOutputData": function() { return /* binding */ SlidesOutputData; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 16276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 19878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ 31631);














/**
 * Defaults value of options
 */

function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

var _c0 = function _c0(a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};

function StageComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var slide_r1 = ctx_r5.$implicit;
    var i_r2 = ctx_r5.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", slide_r1.tplRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c0, ctx_r3.preparePublicSlide(slide_r1), i_r2));
  }
}

var _c1 = function _c1(a0, a1, a2, a3) {
  return {
    "width": a0,
    "margin-left": a1,
    "margin-right": a2,
    "left": a3
  };
};

function StageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      var slide_r1 = restoredCtx.$implicit;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r6.clear(slide_r1.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageComponent_ng_container_2_2_Template, 1, 5, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", slide_r1.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](4, _c1, slide_r1.width + "px", slide_r1.marginL ? slide_r1.marginL + "px" : "", slide_r1.marginR ? slide_r1.marginR + "px" : "", slide_r1.left))("@autoHeight", slide_r1.heightState);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", slide_r1.load);
  }
}

var _c2 = function _c2(a0, a1, a2, a3, a4) {
  return {
    "width": a0,
    "transform": a1,
    "transition": a2,
    "padding-left": a3,
    "padding-right": a4
  };
};

var _c3 = function _c3(a0, a1) {
  return {
    "isMouseDragable": a0,
    "isTouchDragable": a1
  };
};

function CarouselComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "owl-stage", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("owlDraggable", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c3, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
  }
}

var _c4 = function _c4(a0, a1) {
  return {
    "active": a0,
    "owl-dot-text": a1
  };
};

function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      var dot_r4 = restoredCtx.$implicit;
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r5.moveByDot(dot_r4.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var dot_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c4, dot_r4.active, dot_r4.showInnerContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", dot_r4.innerContent, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

var _c5 = function _c5(a0) {
  return {
    "disabled": a0
  };
};

function CarouselComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r7.prev();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r9.next();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c5, ctx_r2.navData == null ? null : ctx_r2.navData.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c5, ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c5, ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c5, ctx_r2.dotsData == null ? null : ctx_r2.dotsData.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.dotsData == null ? null : ctx_r2.dotsData.dots);
  }
}

var _c6 = function _c6(a0, a1, a2, a3, a4) {
  return {
    "owl-rtl": a0,
    "owl-loaded": a1,
    "owl-responsive": a2,
    "owl-drag": a3,
    "owl-grab": a4
  };
};

var OwlCarouselOConfig = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function OwlCarouselOConfig() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, OwlCarouselOConfig);

  this.items = 3;
  this.skip_validateItems = false;
  this.loop = false;
  this.center = false;
  this.rewind = false;
  this.mouseDrag = true;
  this.touchDrag = true;
  this.pullDrag = true;
  this.freeDrag = false;
  this.margin = 0;
  this.stagePadding = 0;
  this.merge = false;
  this.mergeFit = true;
  this.autoWidth = false;
  this.startPosition = 0;
  this.rtl = false;
  this.smartSpeed = 250;
  this.fluidSpeed = false;
  this.dragEndSpeed = false;
  this.responsive = {};
  this.responsiveRefreshRate = 200; // defaults to Navigation

  this.nav = false;
  this.navText = ['prev', 'next'];
  this.navSpeed = false;
  this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

  this.dots = true;
  this.dotsEach = false;
  this.dotsData = false;
  this.dotsSpeed = false; // defaults to Autoplay

  this.autoplay = false;
  this.autoplayTimeout = 5000;
  this.autoplayHoverPause = false;
  this.autoplaySpeed = false;
  this.autoplayMouseleaveTimeout = 1; // defaults to LazyLoading

  this.lazyLoad = false;
  this.lazyLoadEager = 0; // defaults to Animate

  this.slideTransition = '';
  this.animateOut = false;
  this.animateIn = false; // defaults to AutoHeight

  this.autoHeight = false; // defaults to Hash

  this.URLhashListener = false;
});
/**
 * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
 * class below is copy of OwlOptions but its all props have string value showing certain type;
 * this is class is being used just in method _validateOptions() of CarouselService;
 */


var OwlOptionsMockedTypes = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function OwlOptionsMockedTypes() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, OwlOptionsMockedTypes);

  this.items = 'number';
  this.skip_validateItems = 'boolean';
  this.loop = 'boolean';
  this.center = 'boolean';
  this.rewind = 'boolean';
  this.mouseDrag = 'boolean';
  this.touchDrag = 'boolean';
  this.pullDrag = 'boolean';
  this.freeDrag = 'boolean';
  this.margin = 'number';
  this.stagePadding = 'number';
  this.merge = 'boolean';
  this.mergeFit = 'boolean';
  this.autoWidth = 'boolean';
  this.startPosition = 'number|string';
  this.rtl = 'boolean';
  this.smartSpeed = 'number';
  this.fluidSpeed = 'boolean';
  this.dragEndSpeed = 'number|boolean';
  this.responsive = {};
  this.responsiveRefreshRate = 'number'; // defaults to Navigation

  this.nav = 'boolean';
  this.navText = 'string[]';
  this.navSpeed = 'number|boolean';
  this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

  this.dots = 'boolean';
  this.dotsEach = 'number|boolean';
  this.dotsData = 'boolean';
  this.dotsSpeed = 'number|boolean'; // defaults to Autoplay

  this.autoplay = 'boolean';
  this.autoplayTimeout = 'number';
  this.autoplayHoverPause = 'boolean';
  this.autoplaySpeed = 'number|boolean';
  this.autoplayMouseleaveTimeout = 'number'; // defaults to LazyLoading

  this.lazyLoad = 'boolean';
  this.lazyLoadEager = 'number'; // defaults to Animate

  this.slideTransition = 'string';
  this.animateOut = 'string|boolean';
  this.animateIn = 'string|boolean'; // defaults to AutoHeight

  this.autoHeight = 'boolean'; // defaults to Hash

  this.URLhashListener = "boolean";
});

var OwlLogger = /*#__PURE__*/function () {
  function OwlLogger(errorHandler) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, OwlLogger);

    this.errorHandler = errorHandler;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(OwlLogger, [{
    key: "log",
    value: function log(value) {
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.isDevMode)()) {
        var _console;

        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        (_console = console).log.apply(_console, [value].concat(rest));
      }
    }
  }, {
    key: "error",
    value: function error(_error) {
      this.errorHandler.handleError(_error);
    }
  }, {
    key: "warn",
    value: function warn(value) {
      var _console2;

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      (_console2 = console).warn.apply(_console2, [value].concat(rest));
    }
  }]);

  return OwlLogger;
}();

OwlLogger.ɵfac = function OwlLogger_Factory(t) {
  return new (t || OwlLogger)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler));
};

OwlLogger.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: OwlLogger,
  factory: OwlLogger.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](OwlLogger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler
    }];
  }, null);
})();
/**
 * Current state information and their tags.
 */


var States = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function States() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, States);
});
/**
 * Enumeration for types.
 * @enum {String}
 */


var Type;

(function (Type) {
  Type["Event"] = "event";
  Type["State"] = "state";
})(Type || (Type = {}));

;
/**
 * Enumeration for width.
 * @enum {String}
 */

var Width;

(function (Width) {
  Width["Default"] = "default";
  Width["Inner"] = "inner";
  Width["Outer"] = "outer";
})(Width || (Width = {}));

;
/**
 * Model for coords of .owl-stage
 */

var Coords = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function Coords() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Coords);
});
/**
 * Model for all current data of carousel
 */


var CarouselCurrentData = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function CarouselCurrentData() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CarouselCurrentData);
});

var CarouselService = /*#__PURE__*/function () {
  function CarouselService(logger) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CarouselService);

    this.logger = logger;
    /**
    * Subject for passing data needed for managing View
    */

    this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the carousel got initializes
    */

    this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the carousel's settings start changinf
    */

    this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the carousel's settings have changed
    */

    this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the carousel starts translating or moving
    */

    this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the carousel stopped translating or moving
    */

    this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
    */

    this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
    */

    this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the refresh of carousel starts
    */

    this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the refresh of carousel is ended
    */

    this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the dragging of carousel starts
    */

    this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
    * Subject for notification when the dragging of carousel is ended
    */

    this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * Current settings for the carousel.
     */

    this.settings = {
      items: 0
    };
    /**
    * Initial data for setting classes to element .owl-carousel
    */

    this.owlDOMData = {
      rtl: false,
      isResponsive: false,
      isRefreshed: false,
      isLoaded: false,
      isLoading: false,
      isMouseDragable: false,
      isGrab: false,
      isTouchDragable: false
    };
    /**
    * Initial data of .owl-stage
    */

    this.stageData = {
      transform: 'translate3d(0px,0px,0px)',
      transition: '0s',
      width: 0,
      paddingL: 0,
      paddingR: 0
    };
    /**
     * All real items.
     */

    this._items = []; // is equal to this.slides

    /**
    * Array with width of every slide.
    */

    this._widths = [];
    /**
    * Currently suppressed events to prevent them from beeing retriggered.
    */

    this._supress = {};
    /**
     * References to the running plugins of this carousel.
     */

    this._plugins = {};
    /**
    * Absolute current position.
    */

    this._current = null;
    /**
    * All cloned items.
    */

    this._clones = [];
    /**
     * Merge values of all items.
     * @todo Maybe this could be part of a plugin.
     */

    this._mergers = [];
    /**
    * Animation speed in milliseconds.
    */

    this._speed = null;
    /**
    * Coordinates of all items in pixel.
    * @todo The name of this member is missleading.
    */

    this._coordinates = [];
    /**
    * Current breakpoint.
    * @todo Real media queries would be nice.
    */

    this._breakpoint = null;
    /**
     * Prefix for id of cloned slides
     */

    this.clonedIdPrefix = 'cloned-';
    /**
     * Current options set by the caller including defaults.
     */

    this._options = {};
    /**
     * Invalidated parts within the update process.
     */

    this._invalidated = {};
    /**
     * Current state information and their tags.
     */

    this._states = {
      current: {},
      tags: {
        initializing: ['busy'],
        animating: ['busy'],
        dragging: ['interacting']
      }
    };
    /**
     * Ordered list of workers for the update process.
    */

    this._pipe = [// {
    //   filter: ['width', 'settings'],
    //   run: () => {
    //     this._width = this.carouselWindowWidth;
    //   }
    // },
    {
      filter: ['width', 'items', 'settings'],
      run: function run(cache) {
        cache.current = _this._items && _this._items[_this.relative(_this._current)].id;
      }
    }, // {
    //   filter: ['items', 'settings'],
    //   run: function() {
    //     // this.$stage.children('.cloned').remove();
    //   }
    // },
    {
      filter: ['width', 'items', 'settings'],
      run: function run(cache) {
        var margin = _this.settings.margin || '',
            grid = !_this.settings.autoWidth,
            rtl = _this.settings.rtl,
            css = {
          'margin-left': rtl ? margin : '',
          'margin-right': rtl ? '' : margin
        };

        if (!grid) {
          _this.slidesData.forEach(function (slide) {
            slide.marginL = css['margin-left'];
            slide.marginR = css['margin-right'];
          });
        }

        cache.css = css;
      }
    }, {
      filter: ['width', 'items', 'settings'],
      run: function run(cache) {
        var width = +(_this.width() / _this.settings.items).toFixed(3) - _this.settings.margin,
            grid = !_this.settings.autoWidth,
            widths = [];
        var merge = null,
            iterator = _this._items.length;
        cache.items = {
          merge: false,
          width: width
        };

        while (iterator-- > 0) {
          merge = _this._mergers[iterator];
          merge = _this.settings.mergeFit && Math.min(merge, _this.settings.items) || merge;
          cache.items.merge = merge > 1 || cache.items.merge;
          widths[iterator] = !grid ? _this._items[iterator].width ? _this._items[iterator].width : width : width * merge;
        }

        _this._widths = widths;

        _this.slidesData.forEach(function (slide, i) {
          slide.width = _this._widths[i];
          slide.marginR = cache.css['margin-right'];
          slide.marginL = cache.css['margin-left'];
        });
      }
    }, {
      filter: ['items', 'settings'],
      run: function run() {
        var clones = [],
            items = _this._items,
            settings = _this.settings,
            // TODO: Should be computed from number of min width items in stage
        view = Math.max(settings.items * 2, 4),
            size = Math.ceil(items.length / 2) * 2;
        var append = [],
            prepend = [],
            repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
        repeat /= 2;

        while (repeat-- > 0) {
          // Switch to only using appended clones
          clones.push(_this.normalize(clones.length / 2, true));
          append.push(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
          clones.push(_this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
          prepend.unshift(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
        }

        _this._clones = clones;
        append = append.map(function (slide) {
          slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        prepend = prepend.map(function (slide) {
          slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        _this.slidesData = prepend.concat(_this.slidesData).concat(append);
      }
    }, {
      filter: ['width', 'items', 'settings'],
      run: function run() {
        var rtl = _this.settings.rtl ? 1 : -1,
            size = _this._clones.length + _this._items.length,
            coordinates = [];
        var iterator = -1,
            previous = 0,
            current = 0;

        while (++iterator < size) {
          previous = coordinates[iterator - 1] || 0;
          current = _this._widths[_this.relative(iterator)] + _this.settings.margin;
          coordinates.push(previous + current * rtl);
        }

        _this._coordinates = coordinates;
      }
    }, {
      filter: ['width', 'items', 'settings'],
      run: function run() {
        var padding = _this.settings.stagePadding,
            coordinates = _this._coordinates,
            css = {
          'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          'padding-left': padding || '',
          'padding-right': padding || ''
        };
        _this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element

        _this.stageData.paddingL = css['padding-left'];
        _this.stageData.paddingR = css['padding-right'];
      }
    }, {
      //   filter: [ 'width', 'items', 'settings' ],
      //   run: cache => {
      // 		// this method sets the width for every slide, but I set it in different way earlier
      // 		const grid = !this.settings.autoWidth,
      // 		items = this.$stage.children(); // use this.slidesData
      //     let iterator = this._coordinates.length;
      //     if (grid && cache.items.merge) {
      //       while (iterator--) {
      //         cache.css.width = this._widths[this.relative(iterator)];
      //         items.eq(iterator).css(cache.css);
      //       }
      //     } else if (grid) {
      //       cache.css.width = cache.items.width;
      //       items.css(cache.css);
      //     }
      //   }
      // }, {
      //   filter: [ 'items' ],
      //   run: function() {
      //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
      //   }
      // }, {
      filter: ['width', 'items', 'settings'],
      run: function run(cache) {
        var current = cache.current ? _this.slidesData.findIndex(function (slide) {
          return slide.id === cache.current;
        }) : 0;
        current = Math.max(_this.minimum(), Math.min(_this.maximum(), current));

        _this.reset(current);
      }
    }, {
      filter: ['position'],
      run: function run() {
        _this.animate(_this.coordinates(_this._current));
      }
    }, {
      filter: ['width', 'position', 'items', 'settings'],
      run: function run() {
        var rtl = _this.settings.rtl ? 1 : -1,
            padding = _this.settings.stagePadding * 2,
            matches = [];
        var begin, end, inner, outer, i, n;
        begin = _this.coordinates(_this.current());

        if (typeof begin === 'number') {
          begin += padding;
        } else {
          begin = 0;
        }

        end = begin + _this.width() * rtl;

        if (rtl === -1 && _this.settings.center) {
          var result = _this._coordinates.filter(function (element) {
            return _this.settings.items % 2 === 1 ? element >= begin : element > begin;
          });

          begin = result.length ? result[result.length - 1] : begin;
        }

        for (i = 0, n = _this._coordinates.length; i < n; i++) {
          inner = Math.ceil(_this._coordinates[i - 1] || 0);
          outer = Math.ceil(Math.abs(_this._coordinates[i]) + padding * rtl);

          if (_this._op(inner, '<=', begin) && _this._op(inner, '>', end) || _this._op(outer, '<', begin) && _this._op(outer, '>', end)) {
            matches.push(i);
          }
        }

        _this.slidesData.forEach(function (slide) {
          slide.isActive = false;
          return slide;
        });

        matches.forEach(function (item) {
          _this.slidesData[item].isActive = true;
        });

        if (_this.settings.center) {
          _this.slidesData.forEach(function (slide) {
            slide.isCentered = false;
            return slide;
          });

          _this.slidesData[_this.current()].isCentered = true;
        }
      }
    }];
  } // Is needed for tests


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CarouselService, [{
    key: "invalidated",
    get: function get() {
      return this._invalidated;
    } // is needed for tests

  }, {
    key: "states",
    get: function get() {
      return this._states;
    }
    /**
     * Makes _viewSettingsShipper$ Subject become Observable
     * @returns Observable of _viewSettingsShipper$ Subject
     */

  }, {
    key: "getViewCurSettings",
    value: function getViewCurSettings() {
      return this._viewSettingsShipper$.asObservable();
    }
    /**
     * Makes _initializedCarousel$ Subject become Observable
     * @returns Observable of _initializedCarousel$ Subject
     */

  }, {
    key: "getInitializedState",
    value: function getInitializedState() {
      return this._initializedCarousel$.asObservable();
    }
    /**
     * Makes _changeSettingsCarousel$ Subject become Observable
     * @returns Observable of _changeSettingsCarousel$ Subject
     */

  }, {
    key: "getChangeState",
    value: function getChangeState() {
      return this._changeSettingsCarousel$.asObservable();
    }
    /**
     * Makes _changedSettingsCarousel$ Subject become Observable
     * @returns Observable of _changedSettingsCarousel$ Subject
     */

  }, {
    key: "getChangedState",
    value: function getChangedState() {
      return this._changedSettingsCarousel$.asObservable();
    }
    /**
     * Makes _translateCarousel$ Subject become Observable
     * @returns Observable of _translateCarousel$ Subject
     */

  }, {
    key: "getTranslateState",
    value: function getTranslateState() {
      return this._translateCarousel$.asObservable();
    }
    /**
     * Makes _translatedCarousel$ Subject become Observable
     * @returns Observable of _translatedCarousel$ Subject
     */

  }, {
    key: "getTranslatedState",
    value: function getTranslatedState() {
      return this._translatedCarousel$.asObservable();
    }
    /**
     * Makes _resizeCarousel$ Subject become Observable
     * @returns Observable of _resizeCarousel$ Subject
     */

  }, {
    key: "getResizeState",
    value: function getResizeState() {
      return this._resizeCarousel$.asObservable();
    }
    /**
     * Makes _resizedCarousel$ Subject become Observable
     * @returns Observable of _resizedCarousel$ Subject
     */

  }, {
    key: "getResizedState",
    value: function getResizedState() {
      return this._resizedCarousel$.asObservable();
    }
    /**
     * Makes _refreshCarousel$ Subject become Observable
     * @returns Observable of _refreshCarousel$ Subject
     */

  }, {
    key: "getRefreshState",
    value: function getRefreshState() {
      return this._refreshCarousel$.asObservable();
    }
    /**
     * Makes _refreshedCarousel$ Subject become Observable
     * @returns Observable of _refreshedCarousel$ Subject
     */

  }, {
    key: "getRefreshedState",
    value: function getRefreshedState() {
      return this._refreshedCarousel$.asObservable();
    }
    /**
     * Makes _dragCarousel$ Subject become Observable
     * @returns Observable of _dragCarousel$ Subject
     */

  }, {
    key: "getDragState",
    value: function getDragState() {
      return this._dragCarousel$.asObservable();
    }
    /**
     * Makes _draggedCarousel$ Subject become Observable
     * @returns Observable of _draggedCarousel$ Subject
     */

  }, {
    key: "getDraggedState",
    value: function getDraggedState() {
      return this._draggedCarousel$.asObservable();
    }
    /**
     * Setups custom options expanding default options
     * @param options custom options
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var configOptions = new OwlCarouselOConfig();

      var checkedOptions = this._validateOptions(options, configOptions);

      this._options = Object.assign(Object.assign({}, configOptions), checkedOptions);
    }
    /**
     * Checks whether user's option are set properly. Cheking is based on typings;
     * @param options options set by user
     * @param configOptions default options
     * @returns checked and modified (if it's needed) user's options
     *
     * Notes:
     * 	- if user set option with wrong type, it'll be written in console
     */

  }, {
    key: "_validateOptions",
    value: function _validateOptions(options, configOptions) {
      var _this2 = this;

      var checkedOptions = Object.assign({}, options);
      var mockedTypes = new OwlOptionsMockedTypes();

      var setRightOption = function setRightOption(type, key) {
        _this2.logger.log("options.".concat(key, " must be type of ").concat(type, "; ").concat(key, "=").concat(options[key], " skipped to defaults: ").concat(key, "=").concat(configOptions[key]));

        return configOptions[key];
      };

      for (var key in checkedOptions) {
        if (checkedOptions.hasOwnProperty(key)) {
          // condition could be shortened but it gets harder for understanding
          if (mockedTypes[key] === 'number') {
            if (this._isNumeric(checkedOptions[key])) {
              checkedOptions[key] = +checkedOptions[key];
              checkedOptions[key] = key === 'items' ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
            } else {
              checkedOptions[key] = setRightOption(mockedTypes[key], key);
            }
          } else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          } else if (mockedTypes[key] === 'number|boolean' && !this._isNumberOrBoolean(checkedOptions[key])) {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          } else if (mockedTypes[key] === 'number|string' && !this._isNumberOrString(checkedOptions[key])) {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          } else if (mockedTypes[key] === 'string|boolean' && !this._isStringOrBoolean(checkedOptions[key])) {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          } else if (mockedTypes[key] === 'string[]') {
            if (Array.isArray(checkedOptions[key])) {
              var isString = false;
              checkedOptions[key].forEach(function (element) {
                isString = typeof element === 'string' ? true : false;
              });

              if (!isString) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              }

              ;
            } else {
              checkedOptions[key] = setRightOption(mockedTypes[key], key);
            }
          }
        }
      }

      return checkedOptions;
    }
    /**
     * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
     * @param items option items set by user
     * @param skip_validateItems option `skip_validateItems` set by user
     * @returns right number of items
     */

  }, {
    key: "_validateItems",
    value: function _validateItems(items, skip_validateItems) {
      var result = items;

      if (items > this._items.length) {
        if (skip_validateItems) {
          this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
        } else {
          result = this._items.length;
          this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
        }
      } else {
        if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
          this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
        }
      }

      return result;
    }
    /**
     * Set current width of carousel
     * @param width width of carousel Window
     */

  }, {
    key: "setCarouselWidth",
    value: function setCarouselWidth(width) {
      this._width = width;
    }
    /**
       * Setups the current settings.
       * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
       * @todo Support for media queries by using `matchMedia` would be nice.
       * @param carouselWidth width of carousel
       * @param slides array of slides
       * @param options options set by user
       */

  }, {
    key: "setup",
    value: function setup(carouselWidth, slides, options) {
      this.setCarouselWidth(carouselWidth);
      this.setItems(slides);

      this._defineSlidesData();

      this.setOptions(options);
      this.settings = Object.assign({}, this._options);
      this.setOptionsForViewport();

      this._trigger('change', {
        property: {
          name: 'settings',
          value: this.settings
        }
      });

      this.invalidate('settings'); // must be call of this function;

      this._trigger('changed', {
        property: {
          name: 'settings',
          value: this.settings
        }
      });
    }
    /**
     * Set options for current viewport
     */

  }, {
    key: "setOptionsForViewport",
    value: function setOptionsForViewport() {
      var _this3 = this;

      var viewport = this._width,
          overwrites = this._options.responsive;
      var match = -1;

      if (!Object.keys(overwrites).length) {
        return;
      }

      if (!viewport) {
        this.settings.items = 1;
        return;
      }

      for (var key in overwrites) {
        if (overwrites.hasOwnProperty(key)) {
          if (+key <= viewport && +key > match) {
            match = Number(key);
          }
        }
      }

      this.settings = Object.assign(Object.assign(Object.assign({}, this._options), overwrites[match]), {
        items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
      }); // if (typeof this.settings.stagePadding === 'function') {
      // 	this.settings.stagePadding = this.settings.stagePadding();
      // }

      delete this.settings.responsive;
      this.owlDOMData.isResponsive = true;
      this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
      this.owlDOMData.isTouchDragable = this.settings.touchDrag;
      var mergers = [];

      this._items.forEach(function (item) {
        var mergeN = _this3.settings.merge ? item.dataMerge : 1;
        mergers.push(mergeN);
      });

      this._mergers = mergers;
      this._breakpoint = match;
      this.invalidate('settings');
    }
    /**
     * Initializes the carousel.
     * @param slides array of CarouselSlideDirective
     */

  }, {
    key: "initialize",
    value: function initialize(slides) {
      var _this4 = this;

      this.enter('initializing'); // this.trigger('initialize');

      this.owlDOMData.rtl = this.settings.rtl;

      if (this._mergers.length) {
        this._mergers = [];
      }

      slides.forEach(function (item) {
        var mergeN = _this4.settings.merge ? item.dataMerge : 1;

        _this4._mergers.push(mergeN);
      });
      this._clones = [];
      this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
      this.invalidate('items');
      this.refresh();
      this.owlDOMData.isLoaded = true;
      this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
      this.owlDOMData.isTouchDragable = this.settings.touchDrag;
      this.sendChanges();
      this.leave('initializing');

      this._trigger('initialized');
    }
  }, {
    key: "sendChanges",
    value:
    /**
     * Sends all data needed for View
     */
    function sendChanges() {
      this._viewSettingsShipper$.next({
        owlDOMData: this.owlDOMData,
        stageData: this.stageData,
        slidesData: this.slidesData,
        navData: this.navData,
        dotsData: this.dotsData
      });
    }
    /**
       * Updates option logic if necessery
       */

  }, {
    key: "_optionsLogic",
    value: function _optionsLogic() {
      if (this.settings.autoWidth) {
        this.settings.stagePadding = 0;
        this.settings.merge = false;
      }
    }
    /**
     * Updates the view
     */

  }, {
    key: "update",
    value: function update() {
      var _this5 = this;

      var i = 0;

      var n = this._pipe.length,
          filter = function filter(item) {
        return _this5._invalidated[item];
      },
          cache = {};

      while (i < n) {
        var filteredPipe = this._pipe[i].filter.filter(filter);

        if (this._invalidated.all || filteredPipe.length > 0) {
          this._pipe[i].run(cache);
        }

        i++;
      }

      this.slidesData.forEach(function (slide) {
        return slide.classes = _this5.setCurSlideClasses(slide);
      });
      this.sendChanges();
      this._invalidated = {};

      if (!this.is('valid')) {
        this.enter('valid');
      }
    }
    /**
       * Gets the width of the view.
       * @param [dimension=Width.Default] The dimension to return
       * @returns The width of the view in pixel.
       */

  }, {
    key: "width",
    value: function width(dimension) {
      dimension = dimension || Width.Default;

      switch (dimension) {
        case Width.Inner:
        case Width.Outer:
          return this._width;

        default:
          return this._width - this.settings.stagePadding * 2 + this.settings.margin;
      }
    }
    /**
       * Refreshes the carousel primarily for adaptive purposes.
       */

  }, {
    key: "refresh",
    value: function refresh() {
      this.enter('refreshing');

      this._trigger('refresh');

      this._defineSlidesData();

      this.setOptionsForViewport();

      this._optionsLogic(); // this.$element.addClass(this.options.refreshClass);


      this.update(); // this.$element.removeClass(this.options.refreshClass);

      this.leave('refreshing');

      this._trigger('refreshed');
    }
    /**
       * Checks window `resize` event.
       * @param curWidth width of .owl-carousel
       */

  }, {
    key: "onResize",
    value: function onResize(curWidth) {
      if (!this._items.length) {
        return false;
      }

      this.setCarouselWidth(curWidth);
      this.enter('resizing'); // if (this.trigger('resize').isDefaultPrevented()) {
      // 	this.leave('resizing');
      // 	return false;
      // }

      this._trigger('resize');

      this.invalidate('width');
      this.refresh();
      this.leave('resizing');

      this._trigger('resized');
    }
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */

  }, {
    key: "prepareDragging",
    value: function prepareDragging(event) {
      var stage = null,
          transformArr; // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
      // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
      // stage = {
      //   x: stage[stage.length === 16 ? 12 : 4],
      //   y: stage[stage.length === 16 ? 13 : 5]
      // };

      transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
      stage = {
        x: +transformArr[0],
        y: +transformArr[1]
      };

      if (this.is('animating')) {
        this.invalidate('position');
      }

      if (event.type === 'mousedown') {
        this.owlDOMData.isGrab = true;
      }

      this.speed(0);
      return stage;
    }
    /**
     * Enters into a 'dragging' state
     */

  }, {
    key: "enterDragging",
    value: function enterDragging() {
      this.enter('dragging');

      this._trigger('drag');
    }
    /**
       * Defines new coords for .owl-stage while dragging it
       * @todo #261
       * @param event the event arguments.
       * @param dragData initial data got after starting dragging
       * @returns coords or false
       */

  }, {
    key: "defineNewCoordsDrag",
    value: function defineNewCoordsDrag(event, dragData) {
      var minimum = null,
          maximum = null,
          pull = null;
      var delta = this.difference(dragData.pointer, this.pointer(event)),
          stage = this.difference(dragData.stage.start, delta);

      if (!this.is('dragging')) {
        return false;
      }

      if (this.settings.loop) {
        minimum = this.coordinates(this.minimum());
        maximum = +this.coordinates(this.maximum() + 1) - minimum;
        stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
      } else {
        minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
        maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
        pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
        stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
      }

      return stage;
    }
    /**
       * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
       * @todo #261
       * @todo Threshold for click event
       * @param event the event arguments.
       * @param dragObj the object with dragging settings and states
       * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
       */

  }, {
    key: "finishDragging",
    value: function finishDragging(event, dragObj, clickAttacher) {
      var directions = ['right', 'left'],
          delta = this.difference(dragObj.pointer, this.pointer(event)),
          stage = dragObj.stage.current,
          direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
      var currentSlideI, current, newCurrent;

      if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
        this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
        currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
        current = this.current();
        newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);

        if (current !== newCurrent) {
          this.invalidate('position');
          this.update();
        }

        dragObj.direction = direction;

        if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
          clickAttacher();
        }
      }

      if (!this.is('dragging')) {
        return;
      }

      this.leave('dragging');

      this._trigger('dragged');
    }
    /**
       * Gets absolute position of the closest item for a coordinate.
       * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
       * @param coordinate The coordinate in pixel.
       * @param direction The direction to check for the closest item. Ether `left` or `right`.
       * @returns The absolute position of the closest item.
       */

  }, {
    key: "closest",
    value: function closest(coordinate, direction) {
      var pull = 30,
          width = this.width();
      var coordinates = this.coordinates(),
          position = -1;

      if (this.settings.center) {
        coordinates = coordinates.map(function (item) {
          if (item === 0) {
            item += 0.000001;
          }

          return item;
        });
      } // option 'freeDrag' doesn't have realization and using it here creates problem:
      // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
      // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
      // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
      // if (!this.settings.freeDrag) {
      // check closest item


      for (var i = 0; i < coordinates.length; i++) {
        if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
          position = i; // on a right pull, check on previous index
          // to do so, subtract width from value and set position = index + 1
        } else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
          position = i + 1;
        } else if (this._op(coordinate, '<', coordinates[i]) && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
          position = direction === 'left' ? i + 1 : i;
        } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
          position = i;
        }

        if (position !== -1) {
          break;
        }

        ;
      } // }


      if (!this.settings.loop) {
        // non loop boundries
        if (this._op(coordinate, '>', coordinates[this.minimum()])) {
          position = coordinate = this.minimum();
        } else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
          position = coordinate = this.maximum();
        }
      }

      return position;
    }
    /**
       * Animates the stage.
       * @todo #270
       * @param coordinate The coordinate in pixels.
       */

  }, {
    key: "animate",
    value: function animate(coordinate) {
      var animate = this.speed() > 0;

      if (this.is('animating')) {
        this.onTransitionEnd();
      }

      if (animate) {
        this.enter('animating');

        this._trigger('translate');
      }

      this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
      this.stageData.transition = this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''); // also there was transition by means of JQuery.animate or css-changing property left
    }
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param state The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */

  }, {
    key: "is",
    value: function is(state) {
      return this._states.current[state] && this._states.current[state] > 0;
    }
  }, {
    key: "current",
    value:
    /**
       * Sets the absolute position of the current item.
       * @param position The new absolute position or nothing to leave it unchanged.
       * @returns The absolute position of the current item.
       */
    function current(position) {
      if (position === undefined) {
        return this._current;
      }

      if (this._items.length === 0) {
        return undefined;
      }

      position = this.normalize(position);

      if (this._current !== position) {
        var event = this._trigger('change', {
          property: {
            name: 'position',
            value: position
          }
        }); // if (event.data !== undefined) {
        // 	position = this.normalize(event.data);
        // }


        this._current = position;
        this.invalidate('position');

        this._trigger('changed', {
          property: {
            name: 'position',
            value: this._current
          }
        });
      }

      return this._current;
    }
    /**
       * Invalidates the given part of the update routine.
       * @param part The part to invalidate.
       * @returns The invalidated parts.
       */

  }, {
    key: "invalidate",
    value: function invalidate(part) {
      if (typeof part === 'string') {
        this._invalidated[part] = true;

        if (this.is('valid')) {
          this.leave('valid');
        }
      }

      return Object.keys(this._invalidated);
    }
  }, {
    key: "reset",
    value:
    /**
     * Resets the absolute position of the current item.
     * @param position the absolute position of the new item.
     */
    function reset(position) {
      position = this.normalize(position);

      if (position === undefined) {
        return;
      }

      this._speed = 0;
      this._current = position;

      this._suppress(['translate', 'translated']);

      this.animate(this.coordinates(position));

      this._release(['translate', 'translated']);
    }
    /**
       * Normalizes an absolute or a relative position of an item.
       * @param position The absolute or relative position to normalize.
       * @param relative Whether the given position is relative or not.
       * @returns The normalized position.
       */

  }, {
    key: "normalize",
    value: function normalize(position, relative) {
      var n = this._items.length,
          m = relative ? 0 : this._clones.length;

      if (!this._isNumeric(position) || n < 1) {
        position = undefined;
      } else if (position < 0 || position >= n + m) {
        position = ((position - m / 2) % n + n) % n + m / 2;
      }

      return position;
    }
    /**
       * Converts an absolute position of an item into a relative one.
       * @param position The absolute position to convert.
       * @returns The converted position.
       */

  }, {
    key: "relative",
    value: function relative(position) {
      position -= this._clones.length / 2;
      return this.normalize(position, true);
    }
    /**
       * Gets the maximum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of maximum position
       */

  }, {
    key: "maximum",
    value: function maximum() {
      var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var settings = this.settings;
      var maximum = this._coordinates.length,
          iterator,
          reciprocalItemsWidth,
          elementWidth;

      if (settings.loop) {
        maximum = this._clones.length / 2 + this._items.length - 1;
      } else if (settings.autoWidth || settings.merge) {
        iterator = this._items.length;
        reciprocalItemsWidth = this.slidesData[--iterator].width;
        elementWidth = this._width;

        while (iterator-- > 0) {
          // it could be use this._items instead of this.slidesData;
          reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;

          if (reciprocalItemsWidth > elementWidth) {
            break;
          }
        }

        maximum = iterator + 1;
      } else if (settings.center) {
        maximum = this._items.length - 1;
      } else {
        maximum = this._items.length - settings.items;
      }

      if (relative) {
        maximum -= this._clones.length / 2;
      }

      return Math.max(maximum, 0);
    }
    /**
       * Gets the minimum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of minimum position
       */

  }, {
    key: "minimum",
    value: function minimum() {
      var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return relative ? 0 : this._clones.length / 2;
    }
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */

  }, {
    key: "items",
    value: function items(position) {
      if (position === undefined) {
        return this._items.slice();
      }

      position = this.normalize(position, true);
      return [this._items[position]];
    }
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */

  }, {
    key: "mergers",
    value: function mergers(position) {
      if (position === undefined) {
        return this._mergers.slice();
      }

      position = this.normalize(position, true);
      return this._mergers[position];
    }
    /**
       * Gets the absolute positions of clones for an item.
       * @param position The relative position of the item.
       * @returns The absolute positions of clones for the item or all if no position was given.
       */

  }, {
    key: "clones",
    value: function clones(position) {
      var odd = this._clones.length / 2,
          even = odd + this._items.length,
          map = function map(index) {
        return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
      };

      if (position === undefined) {
        return this._clones.map(function (v, i) {
          return map(i);
        });
      }

      return this._clones.map(function (v, i) {
        return v === position ? map(i) : null;
      }).filter(function (item) {
        return item;
      });
    }
    /**
       * Sets the current animation speed.
       * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
       * @returns The current animation speed in milliseconds.
       */

  }, {
    key: "speed",
    value: function speed(_speed) {
      if (_speed !== undefined) {
        this._speed = _speed;
      }

      return this._speed;
    }
    /**
       * Gets the coordinate of an item.
       * @todo The name of this method is missleanding.
       * @param position The absolute position of the item within `minimum()` and `maximum()`.
       * @returns The coordinate of the item in pixel or all coordinates.
       */

  }, {
    key: "coordinates",
    value: function coordinates(position) {
      var _this6 = this;

      var multiplier = 1,
          newPosition = position - 1,
          coordinate,
          result;

      if (position === undefined) {
        result = this._coordinates.map(function (item, index) {
          return _this6.coordinates(index);
        });
        return result;
      }

      if (this.settings.center) {
        if (this.settings.rtl) {
          multiplier = -1;
          newPosition = position + 1;
        }

        coordinate = this._coordinates[position];
        coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
      } else {
        coordinate = this._coordinates[newPosition] || 0;
      }

      coordinate = Math.ceil(coordinate);
      return coordinate;
    }
    /**
       * Calculates the speed for a translation.
       * @param from The absolute position of the start item.
       * @param to The absolute position of the target item.
       * @param factor [factor=undefined] - The time factor in milliseconds.
       * @returns The time in milliseconds for the translation.
       */

  }, {
    key: "_duration",
    value: function _duration(from, to, factor) {
      if (factor === 0) {
        return 0;
      }

      return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
    }
    /**
       * Slides to the specified item.
       * @param position The position of the item.
       * @param speed The time in milliseconds for the transition.
       */

  }, {
    key: "to",
    value: function to(position, speed) {
      var _this7 = this;

      var current = this.current(),
          revert = null,
          distance = position - this.relative(current),
          maximum = this.maximum(),
          delayForLoop = 0;
      var direction = +(distance > 0) - +(distance < 0),
          items = this._items.length,
          minimum = this.minimum();

      if (this.settings.loop) {
        if (!this.settings.rewind && Math.abs(distance) > items / 2) {
          distance += direction * -1 * items;
        }

        position = current + distance;
        revert = ((position - minimum) % items + items) % items + minimum;

        if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
          current = revert - distance;
          position = revert;
          delayForLoop = 30;
          this.reset(current);
          this.sendChanges();
        }
      } else if (this.settings.rewind) {
        maximum += 1;
        position = (position % maximum + maximum) % maximum;
      } else {
        position = Math.max(minimum, Math.min(maximum, position));
      }

      setTimeout(function () {
        _this7.speed(_this7._duration(current, position, speed));

        _this7.current(position);

        _this7.update();
      }, delayForLoop);
    }
    /**
       * Slides to the next item.
       * @param speed The time in milliseconds for the transition.
       */

  }, {
    key: "next",
    value: function next(speed) {
      speed = speed || false;
      this.to(this.relative(this.current()) + 1, speed);
    }
    /**
       * Slides to the previous item.
       * @param speed The time in milliseconds for the transition.
       */

  }, {
    key: "prev",
    value: function prev(speed) {
      speed = speed || false;
      this.to(this.relative(this.current()) - 1, speed);
    }
    /**
       * Handles the end of an animation.
       * @param event - The event arguments.
       */

  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd(event) {
      // if css2 animation then event object is undefined
      if (event !== undefined) {
        // event.stopPropagation();
        // // Catch only owl-stage transitionEnd event
        // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
        // 	return false;
        // }
        return false;
      }

      this.leave('animating');

      this._trigger('translated');
    }
    /**
       * Gets viewport width.
       * @returns - The width in pixel.
       */

  }, {
    key: "_viewport",
    value: function _viewport() {
      var width;

      if (this._width) {
        width = this._width;
      } else {
        this.logger.log('Can not detect viewport width.');
      }

      return width;
    }
    /**
       * Sets _items
       * @param content The list of slides put into CarouselSlideDirectives.
       */

  }, {
    key: "setItems",
    value: function setItems(content) {
      this._items = content;
    }
    /**
     * Sets slidesData using this._items
     */

  }, {
    key: "_defineSlidesData",
    value: function _defineSlidesData() {
      // Maybe creating and using loadMap would be better in LazyLoadService.
      // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
      // Thus it would be needed to add that content into DOM again.
      // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
      var loadMap;

      if (this.slidesData && this.slidesData.length) {
        loadMap = new Map();
        this.slidesData.forEach(function (item) {
          if (item.load) {
            loadMap.set(item.id, item.load);
          }
        });
      }

      this.slidesData = this._items.map(function (slide) {
        return {
          id: "".concat(slide.id),
          isActive: false,
          tplRef: slide.tplRef,
          dataMerge: slide.dataMerge,
          width: 0,
          isCloned: false,
          load: loadMap ? loadMap.get(slide.id) : false,
          hashFragment: slide.dataHash
        };
      });
    }
    /**
     * Sets current classes for slide
     * @param slide Slide of carousel
     * @returns object with names of css-classes which are keys and true/false values
     */

  }, {
    key: "setCurSlideClasses",
    value: function setCurSlideClasses(slide) {
      // CSS classes: added/removed per current state of component properties
      var currentClasses = {
        'active': slide.isActive,
        'center': slide.isCentered,
        'cloned': slide.isCloned,
        'animated': slide.isAnimated,
        'owl-animated-in': slide.isDefAnimatedIn,
        'owl-animated-out': slide.isDefAnimatedOut
      };

      if (this.settings.animateIn) {
        currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
      }

      if (this.settings.animateOut) {
        currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
      }

      return currentClasses;
    }
    /**
       * Operators to calculate right-to-left and left-to-right.
       * @param a - The left side operand.
       * @param o - The operator.
       * @param b - The right side operand.
       * @returns true/false meaning right-to-left or left-to-right
       */

  }, {
    key: "_op",
    value: function _op(a, o, b) {
      var rtl = this.settings.rtl;

      switch (o) {
        case '<':
          return rtl ? a > b : a < b;

        case '>':
          return rtl ? a < b : a > b;

        case '>=':
          return rtl ? a <= b : a >= b;

        case '<=':
          return rtl ? a >= b : a <= b;

        default:
          break;
      }
    }
    /**
       * Triggers a public event.
       * @todo Remove `status`, `relatedTarget` should be used instead.
       * @param name The event name.
       * @param data The event data.
       * @param namespace The event namespace.
       * @param state The state which is associated with the event.
       * @param enter Indicates if the call enters the specified state or not.
       */

  }, {
    key: "_trigger",
    value: function _trigger(name, data, namespace, state, enter) {
      switch (name) {
        case 'initialized':
          this._initializedCarousel$.next(name);

          break;

        case 'change':
          this._changeSettingsCarousel$.next(data);

          break;

        case 'changed':
          this._changedSettingsCarousel$.next(data);

          break;

        case 'drag':
          this._dragCarousel$.next(name);

          break;

        case 'dragged':
          this._draggedCarousel$.next(name);

          break;

        case 'resize':
          this._resizeCarousel$.next(name);

          break;

        case 'resized':
          this._resizedCarousel$.next(name);

          break;

        case 'refresh':
          this._refreshCarousel$.next(name);

          break;

        case 'refreshed':
          this._refreshedCarousel$.next(name);

          break;

        case 'translate':
          this._translateCarousel$.next(name);

          break;

        case 'translated':
          this._translatedCarousel$.next(name);

          break;

        default:
          break;
      }
    }
    /**
     * Enters a state.
     * @param name - The state name.
     */

  }, {
    key: "enter",
    value: function enter(name) {
      var _this8 = this;

      [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
        if (_this8._states.current[stateName] === undefined) {
          _this8._states.current[stateName] = 0;
        }

        _this8._states.current[stateName]++;
      });
    }
  }, {
    key: "leave",
    value:
    /**
       * Leaves a state.
       * @param name - The state name.
       */
    function leave(name) {
      var _this9 = this;

      [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
        if (_this9._states.current[stateName] === 0 || !!_this9._states.current[stateName]) {
          _this9._states.current[stateName]--;
        }
      });
    }
  }, {
    key: "register",
    value:
    /**
       * Registers an event or state.
       * @param object - The event or state to register.
       */
    function register(object) {
      var _this10 = this;

      if (object.type === Type.State) {
        if (!this._states.tags[object.name]) {
          this._states.tags[object.name] = object.tags;
        } else {
          this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
        }

        this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
          return _this10._states.tags[object.name].indexOf(tag) === i;
        });
      }
    }
    /**
       * Suppresses events.
       * @param events The events to suppress.
       */

  }, {
    key: "_suppress",
    value: function _suppress(events) {
      var _this11 = this;

      events.forEach(function (event) {
        _this11._supress[event] = true;
      });
    }
    /**
       * Releases suppressed events.
       * @param events The events to release.
       */

  }, {
    key: "_release",
    value: function _release(events) {
      var _this12 = this;

      events.forEach(function (event) {
        delete _this12._supress[event];
      });
    }
    /**
       * Gets unified pointer coordinates from event.
       * @todo #261
       * @param event The `mousedown` or `touchstart` event.
       * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
       */

  }, {
    key: "pointer",
    value: function pointer(event) {
      var result = {
        x: null,
        y: null
      };
      event = event.originalEvent || event || window.event;
      event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

      if (event.pageX) {
        result.x = event.pageX;
        result.y = event.pageY;
      } else {
        result.x = event.clientX;
        result.y = event.clientY;
      }

      return result;
    }
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param number The input to be tested
       * @returns An indication if the input is a Number or can be coerced to a Number
       */

  }, {
    key: "_isNumeric",
    value: function _isNumeric(number) {
      return !isNaN(parseFloat(number));
    }
    /**
     * Determines whether value is number or boolean type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
     */

  }, {
    key: "_isNumberOrBoolean",
    value: function _isNumberOrBoolean(value) {
      return this._isNumeric(value) || typeof value === 'boolean';
    }
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */

  }, {
    key: "_isNumberOrString",
    value: function _isNumberOrString(value) {
      return this._isNumeric(value) || typeof value === 'string';
    }
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */

  }, {
    key: "_isStringOrBoolean",
    value: function _isStringOrBoolean(value) {
      return typeof value === 'string' || typeof value === 'boolean';
    }
    /**
       * Gets the difference of two vectors.
       * @todo #261
       * @param first The first vector.
       * @param second The second vector.
       * @returns The difference.
       */

  }, {
    key: "difference",
    value: function difference(first, second) {
      if (null === first || null === second) {
        return {
          x: 0,
          y: 0
        };
      }

      return {
        x: first.x - second.x,
        y: first.y - second.y
      };
    }
  }]);

  return CarouselService;
}();

CarouselService.ɵfac = function CarouselService_Factory(t) {
  return new (t || CarouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](OwlLogger));
};

CarouselService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CarouselService,
  factory: CarouselService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CarouselService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: OwlLogger
    }];
  }, null);
})();

var NavigationService = /*#__PURE__*/function () {
  function NavigationService(carouselService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, NavigationService);

    this.carouselService = carouselService;
    /**
     * Indicates whether the plugin is initialized or not.
     */

    this._initialized = false;
    /**
     * The current paging indexes.
     */

    this._pages = [];
    /**
     * Data for navigation elements of the user interface.
     */

    this._navData = {
      disabled: false,
      prev: {
        disabled: false,
        htmlText: ''
      },
      next: {
        disabled: false,
        htmlText: ''
      }
    };
    /**
     * Data for dot elements of the user interface.
     */

    this._dotsData = {
      disabled: false,
      dots: []
    };
    this.spyDataStreams();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NavigationService, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.navSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */

  }, {
    key: "spyDataStreams",
    value: function spyDataStreams() {
      var _this13 = this;

      var initializedCarousel$ = this.carouselService.getInitializedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (state) {
        _this13.initialize();

        _this13._updateNavPages();

        _this13.draw();

        _this13.update();

        _this13.carouselService.sendChanges();
      })); // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
      // Thus this method by calling carouselService.current(position) notifies about changes

      var changedSettings$ = this.carouselService.getChangedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (data) {
        return data.property.name === 'position';
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        _this13.update(); // should be the call of the function written at the end of comment
        // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
        // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
        // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
        // carouselService.current(position) is being calling earlier than carouselServive.update();
        // this.carouselService.sendChanges();

      }));
      var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        _this13._updateNavPages();

        _this13.draw();

        _this13.update();

        _this13.carouselService.sendChanges();
      }));
      var navMerge$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(initializedCarousel$, changedSettings$, refreshedCarousel$);
      this.navSubscription = navMerge$.subscribe(function () {});
    }
    /**
       * Initializes the layout of the plugin and extends the carousel.
       */

  }, {
    key: "initialize",
    value: function initialize() {
      this._navData.disabled = true;
      this._navData.prev.htmlText = this.carouselService.settings.navText[0];
      this._navData.next.htmlText = this.carouselService.settings.navText[1];
      this._dotsData.disabled = true;
      this.carouselService.navData = this._navData;
      this.carouselService.dotsData = this._dotsData;
    }
    /**
     * Calculates internal states and updates prop _pages
     */

  }, {
    key: "_updateNavPages",
    value: function _updateNavPages() {
      var i, j, k;
      var lower = this.carouselService.clones().length / 2,
          upper = lower + this.carouselService.items().length,
          maximum = this.carouselService.maximum(true),
          pages = [],
          settings = this.carouselService.settings;
      var size = settings.center || settings.autoWidth || settings.dotsData ? 1 : Math.floor(Number(settings.dotsEach)) || Math.floor(settings.items);
      size = +size;

      if (settings.slideBy !== 'page') {
        settings.slideBy = Math.min(+settings.slideBy, settings.items);
      }

      if (settings.dots || settings.slideBy === 'page') {
        for (i = lower, j = 0, k = 0; i < upper; i++) {
          if (j >= size || j === 0) {
            pages.push({
              start: Math.min(maximum, i - lower),
              end: i - lower + size - 1
            });

            if (Math.min(maximum, i - lower) === maximum) {
              break;
            }

            j = 0, ++k;
          }

          j += this.carouselService.mergers(this.carouselService.relative(i));
        }
      }

      this._pages = pages;
    }
    /**
       * Draws the user interface.
       * @todo The option `dotsData` wont work.
       */

  }, {
    key: "draw",
    value: function draw() {
      var _this14 = this;

      var difference;
      var settings = this.carouselService.settings,
          items = this.carouselService.items(),
          disabled = items.length <= settings.items;
      this._navData.disabled = !settings.nav || disabled;
      this._dotsData.disabled = !settings.dots || disabled;

      if (settings.dots) {
        difference = this._pages.length - this._dotsData.dots.length;

        if (settings.dotsData && difference !== 0) {
          this._dotsData.dots = [];
          items.forEach(function (item) {
            _this14._dotsData.dots.push({
              active: false,
              id: "dot-".concat(item.id),
              innerContent: item.dotContent,
              showInnerContent: true
            });
          });
        } else if (difference > 0) {
          var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;

          for (var i = 0; i < difference; i++) {
            this._dotsData.dots.push({
              active: false,
              id: "dot-".concat(i + startI),
              innerContent: '',
              showInnerContent: false
            });
          }
        } else if (difference < 0) {
          this._dotsData.dots.splice(difference, Math.abs(difference));
        }
      }

      this.carouselService.navData = this._navData;
      this.carouselService.dotsData = this._dotsData;
    }
  }, {
    key: "update",
    value:
    /**
     * Updates navigation buttons's and dots's states
     */
    function update() {
      this._updateNavButtons();

      this._updateDots();
    }
    /**
     * Changes state of nav buttons (disabled, enabled)
     */

  }, {
    key: "_updateNavButtons",
    value: function _updateNavButtons() {
      var settings = this.carouselService.settings,
          loop = settings.loop || settings.rewind,
          index = this.carouselService.relative(this.carouselService.current());

      if (settings.nav) {
        this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
        this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
      }

      this.carouselService.navData = this._navData;
    }
    /**
     * Changes active dot if page becomes changed
     */

  }, {
    key: "_updateDots",
    value: function _updateDots() {
      var curActiveDotI;

      if (!this.carouselService.settings.dots) {
        return;
      }

      this._dotsData.dots.forEach(function (item) {
        if (item.active === true) {
          item.active = false;
        }
      });

      curActiveDotI = this._current();

      if (this._dotsData.dots.length) {
        this._dotsData.dots[curActiveDotI].active = true;
      }

      this.carouselService.dotsData = this._dotsData;
    }
    /**
       * Gets the current page position of the carousel.
       * @returns the current page position of the carousel
       */

  }, {
    key: "_current",
    value: function _current() {
      var current = this.carouselService.relative(this.carouselService.current());
      var finalCurrent;

      var pages = this._pages.filter(function (page, index) {
        return page.start <= current && page.end >= current;
      }).pop();

      finalCurrent = this._pages.findIndex(function (page) {
        return page.start === pages.start && page.end === pages.end;
      });
      return finalCurrent;
    }
  }, {
    key: "_getPosition",
    value:
    /**
       * Gets the current succesor/predecessor position.
     * @param sussessor position of slide
       * @returns the current succesor/predecessor position
       */
    function _getPosition(successor) {
      var position, length;
      var settings = this.carouselService.settings;

      if (settings.slideBy === 'page') {
        position = this._current();
        length = this._pages.length;
        successor ? ++position : --position;
        position = this._pages[(position % length + length) % length].start;
      } else {
        position = this.carouselService.relative(this.carouselService.current());
        length = this.carouselService.items().length;
        successor ? position += +settings.slideBy : position -= +settings.slideBy;
      }

      return position;
    }
  }, {
    key: "next",
    value:
    /**
       * Slides to the next item or page.
       * @param speed The time in milliseconds for the transition.
       */
    function next(speed) {
      this.carouselService.to(this._getPosition(true), speed);
    }
  }, {
    key: "prev",
    value:
    /**
     * Slides to the previous item or page.
     * @param speed The time in milliseconds for the transition.
     */
    function prev(speed) {
      this.carouselService.to(this._getPosition(false), speed);
    }
  }, {
    key: "to",
    value:
    /**
     * Slides to the specified item or page.
     * @param position - The position of the item or page.
     * @param speed - The time in milliseconds for the transition.
     * @param standard - Whether to use the standard behaviour or not. Default meaning false
     */
    function to(position, speed, standard) {
      var length;

      if (!standard && this._pages.length) {
        length = this._pages.length;
        this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
      } else {
        this.carouselService.to(position, speed);
      }
    }
  }, {
    key: "moveByDot",
    value:
    /**
     * Moves carousel after user's clicking on any dots
     */
    function moveByDot(dotId) {
      var index = this._dotsData.dots.findIndex(function (dot) {
        return dotId === dot.id;
      });

      this.to(index, this.carouselService.settings.dotsSpeed);
    }
    /**
     * rewinds carousel to slide with needed id
     * @param id id of slide
     */

  }, {
    key: "toSlideById",
    value: function toSlideById(id) {
      var position = this.carouselService.slidesData.findIndex(function (slide) {
        return slide.id === id && slide.isCloned === false;
      });

      if (position === -1 || position === this.carouselService.current()) {
        return;
      }

      this.carouselService.to(this.carouselService.relative(position), false);
    }
  }]);

  return NavigationService;
}();

NavigationService.ɵfac = function NavigationService_Factory(t) {
  return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CarouselService));
};

NavigationService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NavigationService,
  factory: NavigationService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NavigationService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: CarouselService
    }];
  }, null);
})(); // import { Injectable } from '@angular/core';

/**
 * Create a new injection token for injecting the window into a component.
 */


var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('WindowToken');
/**
 * Define abstract class for obtaining reference to the global window object.
 */

var WindowRef = /*#__PURE__*/function () {
  function WindowRef() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WindowRef);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(WindowRef, [{
    key: "nativeWindow",
    get: function get() {
      throw new Error('Not implemented.');
    }
  }]);

  return WindowRef;
}();
/**
 * Define class that implements the abstract class and returns the native window object.
 */


var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BrowserWindowRef, _WindowRef);

  var _super = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserWindowRef);

  function BrowserWindowRef() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, BrowserWindowRef);

    return _super.call(this);
  }
  /**
   * @returns window object
   */


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BrowserWindowRef, [{
    key: "nativeWindow",
    get: function get() {
      return window;
    }
  }]);

  return BrowserWindowRef;
}(WindowRef);

BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
  return new (t || BrowserWindowRef)();
};

BrowserWindowRef.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: BrowserWindowRef,
  factory: BrowserWindowRef.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](BrowserWindowRef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [];
  }, null);
})();
/**
 * Create an factory function that returns the native window object.
 * @param browserWindowRef Native window object
 * @param platformId id of platform
 * @returns type of platform of empty object
 */


function windowFactory(browserWindowRef, platformId) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(platformId)) {
    return browserWindowRef.nativeWindow;
  }

  var obj = {
    setTimeout: function setTimeout(func, time) {},
    clearTimeout: function clearTimeout(a) {}
  };
  return obj;
}
/**
 * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
 */


var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
/**
 * Create an injectable provider that uses the windowFactory function for returning the native window object.
 */

var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
};
/**
 * Create an array of providers.
 */

var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
/**
 * Create a new injection token for injecting the Document into a component.
 */

var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('DocumentToken');
/**
 * Define abstract class for obtaining reference to the global Document object.
 */

var DocumentRef = /*#__PURE__*/function () {
  function DocumentRef() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DocumentRef);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DocumentRef, [{
    key: "nativeDocument",
    get: function get() {
      throw new Error('Not implemented.');
    }
  }]);

  return DocumentRef;
}();
/**
 * Define class that implements the abstract class and returns the native Document object.
 */


var BrowserDocumentRef = /*#__PURE__*/function (_DocumentRef) {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BrowserDocumentRef, _DocumentRef);

  var _super2 = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserDocumentRef);

  function BrowserDocumentRef() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, BrowserDocumentRef);

    return _super2.call(this);
  }
  /**
   * @returns Document object
   */


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BrowserDocumentRef, [{
    key: "nativeDocument",
    get: function get() {
      return document;
    }
  }]);

  return BrowserDocumentRef;
}(DocumentRef);

BrowserDocumentRef.ɵfac = function BrowserDocumentRef_Factory(t) {
  return new (t || BrowserDocumentRef)();
};

BrowserDocumentRef.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: BrowserDocumentRef,
  factory: BrowserDocumentRef.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](BrowserDocumentRef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [];
  }, null);
})();
/**
 * Create an factory function that returns the native Document object.
 * @param browserDocumentRef Native Document object
 * @param platformId id of platform
 * @returns type of platform of empty object
 */


function documentFactory(browserDocumentRef, platformId) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(platformId)) {
    return browserDocumentRef.nativeDocument;
  }

  var doc = {
    hidden: false,
    visibilityState: 'visible'
  };
  return doc;
}
/**
 * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
 */


var browserDocumentProvider = {
  provide: DocumentRef,
  useClass: BrowserDocumentRef
};
/**
 * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
 */

var documentProvider = {
  provide: DOCUMENT,
  useFactory: documentFactory,
  deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
};
/**
 * Create an array of providers.
 */

var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

var AutoplayService = /*#__PURE__*/function () {
  function AutoplayService(carouselService, winRef, docRef, ngZone) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoplayService);

    this.carouselService = carouselService;
    this.ngZone = ngZone;
    /**
     * The autoplay timeout.
     */

    this._timeout = null;
    /**
     * Indicates whenever the autoplay is paused.
     */

    this._paused = false;
    /**
     * Shows whether the autoplay is paused for unlimited time by the developer.
     * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
     */

    this._isAutoplayStopped = false;
    this.winRef = winRef;
    this.docRef = docRef;
    this.spyDataStreams();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AutoplayService, [{
    key: "isAutoplayStopped",
    get: function get() {
      return this._isAutoplayStopped;
    },
    set: function set(value) {
      this._isAutoplayStopped = value;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.autoplaySubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */

  }, {
    key: "spyDataStreams",
    value: function spyDataStreams() {
      var _this15 = this;

      var initializedCarousel$ = this.carouselService.getInitializedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        if (_this15.carouselService.settings.autoplay) {
          _this15.play();
        }
      }));
      var changedSettings$ = this.carouselService.getChangedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        _this15._handleChangeObservable(data);
      }));
      var resized$ = this.carouselService.getResizedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        if (_this15.carouselService.settings.autoplay && !_this15._isAutoplayStopped) {
          _this15.play();
        } else {
          _this15.stop();
        }
      })); // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
      // They are triggered by Video Plugin

      var autoplayMerge$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(initializedCarousel$, changedSettings$, resized$);
      this.autoplaySubscription = autoplayMerge$.subscribe(function () {});
    }
    /**
       * Starts the autoplay.
       * @param timeout The interval before the next animation starts.
       * @param speed The animation speed for the animations.
       */

  }, {
    key: "play",
    value: function play(timeout, speed) {
      if (this._paused) {
        this._paused = false;

        this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
      }

      if (this.carouselService.is('rotating')) {
        return;
      }

      this.carouselService.enter('rotating');

      this._setAutoPlayInterval();
    }
  }, {
    key: "_getNextTimeout",
    value:
    /**
       * Gets a new timeout
       * @param timeout - The interval before the next animation starts.
       * @param speed - The animation speed for the animations.
       * @return
       */
    function _getNextTimeout(timeout, speed) {
      var _this16 = this;

      if (this._timeout) {
        this.winRef.clearTimeout(this._timeout);
      }

      this._isArtificialAutoplayTimeout = timeout ? true : false;
      return this.ngZone.runOutsideAngular(function () {
        return _this16.winRef.setTimeout(function () {
          _this16.ngZone.run(function () {
            if (_this16._paused || _this16.carouselService.is('busy') || _this16.carouselService.is('interacting') || _this16.docRef.hidden) {
              return;
            }

            _this16.carouselService.next(speed || _this16.carouselService.settings.autoplaySpeed);
          });
        }, timeout || _this16.carouselService.settings.autoplayTimeout);
      });
    }
  }, {
    key: "_setAutoPlayInterval",
    value:
    /**
       * Sets autoplay in motion.
       */
    function _setAutoPlayInterval(timeout) {
      this._timeout = this._getNextTimeout(timeout);
    }
  }, {
    key: "stop",
    value:
    /**
     * Stops the autoplay.
     */
    function stop() {
      if (!this.carouselService.is('rotating')) {
        return;
      }

      this._paused = true;
      this.winRef.clearTimeout(this._timeout);
      this.carouselService.leave('rotating');
    }
  }, {
    key: "pause",
    value:
    /**
       * Stops the autoplay.
       */
    function pause() {
      if (!this.carouselService.is('rotating')) {
        return;
      }

      this._paused = true;
    }
  }, {
    key: "_handleChangeObservable",
    value:
    /**
     * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
     * @param data object with current position of carousel and type of change
     */
    function _handleChangeObservable(data) {
      if (data.property.name === 'settings') {
        if (this.carouselService.settings.autoplay) {
          this.play();
        } else {
          this.stop();
        }
      } else if (data.property.name === 'position') {
        //console.log('play?', e);
        if (this.carouselService.settings.autoplay) {
          this._setAutoPlayInterval();
        }
      }
    }
    /**
     * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
     */

  }, {
    key: "_playAfterTranslated",
    value: function _playAfterTranslated() {
      var _this17 = this;

      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)('translated').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(function (data) {
        return _this17.carouselService.getTranslatedState();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function () {
        return _this17._isArtificialAutoplayTimeout;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        return _this17._setAutoPlayInterval();
      })).subscribe(function () {});
    }
    /**
     * Starts pausing
     */

  }, {
    key: "startPausing",
    value: function startPausing() {
      if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
        this.pause();
      }
    }
    /**
     * Starts playing after mouse leaves carousel
     */

  }, {
    key: "startPlayingMouseLeave",
    value: function startPlayingMouseLeave() {
      if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
        this.play();

        this._playAfterTranslated();
      }
    }
    /**
     * Starts playing after touch ends
     */

  }, {
    key: "startPlayingTouchEnd",
    value: function startPlayingTouchEnd() {
      if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
        this.play();

        this._playAfterTranslated();
      }
    }
  }]);

  return AutoplayService;
}();

AutoplayService.ɵfac = function AutoplayService_Factory(t) {
  return new (t || AutoplayService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
};

AutoplayService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AutoplayService,
  factory: AutoplayService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AutoplayService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: CarouselService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [WINDOW]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
    }];
  }, null);
})();

var LazyLoadService = /*#__PURE__*/function () {
  function LazyLoadService(carouselService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LazyLoadService);

    this.carouselService = carouselService;
    this.spyDataStreams();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LazyLoadService, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.lazyLoadSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */

  }, {
    key: "spyDataStreams",
    value: function spyDataStreams() {
      var _this18 = this;

      var initializedCarousel$ = this.carouselService.getInitializedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        var isLazyLoad = _this18.carouselService.settings && !_this18.carouselService.settings.lazyLoad;

        _this18.carouselService.slidesData.forEach(function (item) {
          return item.load = isLazyLoad ? true : false;
        });
      }));
      var changeSettings$ = this.carouselService.getChangeState();
      var resizedCarousel$ = this.carouselService.getResizedState();
      var lazyLoadMerge$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(initializedCarousel$, changeSettings$, resizedCarousel$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        return _this18._defineLazyLoadSlides(data);
      }));
      this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () {});
    }
  }, {
    key: "_defineLazyLoadSlides",
    value: function _defineLazyLoadSlides(data) {
      var _this19 = this;

      if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
        return;
      }

      if (data.property && data.property.name === 'position' || data === 'initialized' || data === "resized") {
        var settings = this.carouselService.settings,
            clones = this.carouselService.clones().length;
        var n = settings.center && Math.ceil(settings.items / 2) || settings.items,
            i = settings.center && n * -1 || 0,
            position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i; // load = $.proxy(function(i, v) { this.load(v) }, this);
        //TODO: Need documentation for this new option

        if (settings.lazyLoadEager > 0) {
          n += settings.lazyLoadEager; // If the carousel is looping also preload images that are to the "left"

          if (settings.loop) {
            position -= settings.lazyLoadEager;
            n++;
          }
        }

        while (i++ < n) {
          this._load(clones / 2 + this.carouselService.relative(position));

          if (clones) {
            this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) {
              return _this19._load(value);
            });
          }

          position++;
        }
      }
    }
    /**
       * Loads all resources of an item at the specified position.
       * @param position - The absolute position of the item.
       */

  }, {
    key: "_load",
    value: function _load(position) {
      if (this.carouselService.slidesData[position].load) {
        return;
      }

      this.carouselService.slidesData[position].load = true;
    }
  }]);

  return LazyLoadService;
}();

LazyLoadService.ɵfac = function LazyLoadService_Factory(t) {
  return new (t || LazyLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CarouselService));
};

LazyLoadService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: LazyLoadService,
  factory: LazyLoadService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](LazyLoadService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: CarouselService
    }];
  }, null);
})();

var AnimateService = /*#__PURE__*/function () {
  function AnimateService(carouselService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AnimateService);

    this.carouselService = carouselService;
    /**
     * s
     */

    this.swapping = true;
    /**
     * active slide before translating
     */

    this.previous = undefined;
    /**
     * new active slide after translating
     */

    this.next = undefined;
    this.spyDataStreams();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimateService, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.animateSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */

  }, {
    key: "spyDataStreams",
    value: function spyDataStreams() {
      var _this20 = this;

      var changeSettings$ = this.carouselService.getChangeState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        if (data.property.name === 'position') {
          _this20.previous = _this20.carouselService.current();
          _this20.next = data.property.value;
        }
      }));
      var dragCarousel$ = this.carouselService.getDragState();
      var draggedCarousel$ = this.carouselService.getDraggedState();
      var translatedCarousel$ = this.carouselService.getTranslatedState();
      var dragTranslatedMerge$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        return _this20.swapping = data === 'translated';
      }));
      var translateCarousel$ = this.carouselService.getTranslateState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        if (_this20.swapping && (_this20.carouselService._options.animateOut || _this20.carouselService._options.animateIn)) {
          _this20._swap();
        }
      }));
      var animateMerge$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
      this.animateSubscription = animateMerge$.subscribe(function () {});
    }
    /**
       * Toggles the animation classes whenever an translations starts.
       * @returns
       */

  }, {
    key: "_swap",
    value: function _swap() {
      if (this.carouselService.settings.items !== 1) {
        return;
      } // if (!$.support.animation || !$.support.transition) {
      // 	return;
      // }


      this.carouselService.speed(0);
      var left;
      var previous = this.carouselService.slidesData[this.previous],
          next = this.carouselService.slidesData[this.next],
          incoming = this.carouselService.settings.animateIn,
          outgoing = this.carouselService.settings.animateOut;

      if (this.carouselService.current() === this.previous) {
        return;
      }

      if (outgoing) {
        left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
        this.carouselService.slidesData.forEach(function (slide) {
          if (slide.id === previous.id) {
            slide.left = "".concat(left, "px");
            slide.isAnimated = true;
            slide.isDefAnimatedOut = true;
            slide.isCustomAnimatedOut = true;
          }
        });
      }

      if (incoming) {
        this.carouselService.slidesData.forEach(function (slide) {
          if (slide.id === next.id) {
            slide.isAnimated = true;
            slide.isDefAnimatedIn = true;
            slide.isCustomAnimatedIn = true;
          }
        });
      }
    }
  }, {
    key: "clear",
    value:
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */
    function clear(id) {
      var _this21 = this;

      this.carouselService.slidesData.forEach(function (slide) {
        if (slide.id === id) {
          slide.left = '';
          slide.isAnimated = false;
          slide.isDefAnimatedOut = false;
          slide.isCustomAnimatedOut = false;
          slide.isDefAnimatedIn = false;
          slide.isCustomAnimatedIn = false;
          slide.classes = _this21.carouselService.setCurSlideClasses(slide);
        }
      });
      this.carouselService.onTransitionEnd();
    }
  }]);

  return AnimateService;
}();

AnimateService.ɵfac = function AnimateService_Factory(t) {
  return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CarouselService));
};

AnimateService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AnimateService,
  factory: AnimateService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AnimateService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: CarouselService
    }];
  }, null);
})();

var AutoHeightService = /*#__PURE__*/function () {
  function AutoHeightService(carouselService) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoHeightService);

    this.carouselService = carouselService;
    this.spyDataStreams();
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AutoHeightService, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.autoHeightSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */

  }, {
    key: "spyDataStreams",
    value: function spyDataStreams() {
      var _this22 = this;

      var initializedCarousel$ = this.carouselService.getInitializedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        if (_this22.carouselService.settings.autoHeight) {
          _this22.update();
        } else {
          _this22.carouselService.slidesData.forEach(function (slide) {
            return slide.heightState = 'full';
          });
        }
      }));
      var changedSettings$ = this.carouselService.getChangedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        if (_this22.carouselService.settings.autoHeight && data.property.name === 'position') {
          _this22.update();
        }
      }));
      var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        if (_this22.carouselService.settings.autoHeight) {
          _this22.update();
        }
      }));
      var autoHeight$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(initializedCarousel$, changedSettings$, refreshedCarousel$);
      this.autoHeightSubscription = autoHeight$.subscribe(function () {});
    }
    /**
     * Updates the prop 'heightState' of slides
     */

  }, {
    key: "update",
    value: function update() {
      var items = this.carouselService.settings.items;
      var start = this.carouselService.current(),
          end = start + items;

      if (this.carouselService.settings.center) {
        start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
        end = items % 2 === 1 ? start + items : start + items + 1;
      }

      this.carouselService.slidesData.forEach(function (slide, i) {
        slide.heightState = i >= start && i < end ? 'full' : 'nulled';
      });
    }
  }]);

  return AutoHeightService;
}();

AutoHeightService.ɵfac = function AutoHeightService_Factory(t) {
  return new (t || AutoHeightService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CarouselService));
};

AutoHeightService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AutoHeightService,
  factory: AutoHeightService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AutoHeightService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: CarouselService
    }];
  }, null);
})();

var HashService = /*#__PURE__*/function () {
  function HashService(carouselService, route, router) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, HashService);

    this.carouselService = carouselService;
    this.route = route;
    this.router = router;
    this.spyDataStreams();

    if (!this.route) {
      this.route = {
        fragment: (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)('no route').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1))
      };
    }

    ;

    if (!this.router) {
      this.router = {
        navigate: function navigate(commands, extras) {
          return;
        }
      };
    }
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(HashService, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.hashSubscription.unsubscribe();
    }
    /**
     * Defines Observables which service must observe
     */

  }, {
    key: "spyDataStreams",
    value: function spyDataStreams() {
      var _this23 = this;

      var initializedCarousel$ = this.carouselService.getInitializedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        return _this23.listenToRoute();
      }));
      var changedSettings$ = this.carouselService.getChangedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        if (_this23.carouselService.settings.URLhashListener && data.property.name === 'position') {
          var newCurSlide = _this23.carouselService.current();

          var newCurFragment = _this23.carouselService.slidesData[newCurSlide].hashFragment;

          if (!newCurFragment || newCurFragment === _this23.currentHashFragment) {
            return;
          }

          _this23.router.navigate(['./'], {
            fragment: newCurFragment,
            relativeTo: _this23.route
          });
        }
      }));
      var hashFragment$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(initializedCarousel$, changedSettings$);
      this.hashSubscription = hashFragment$.subscribe(function () {});
    }
    /**
     * rewinds carousel to slide which has the same hashFragment as fragment of current url
     * @param fragment fragment of url
     */

  }, {
    key: "rewind",
    value: function rewind(fragment) {
      var position = this.carouselService.slidesData.findIndex(function (slide) {
        return slide.hashFragment === fragment && slide.isCloned === false;
      });

      if (position === -1 || position === this.carouselService.current()) {
        return;
      }

      this.carouselService.to(this.carouselService.relative(position), false);
    }
    /**
     * Initiate listening to ActivatedRoute.fragment
     */

  }, {
    key: "listenToRoute",
    value: function listenToRoute() {
      var _this24 = this;

      var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
      this.route.fragment.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.skip)(count)).subscribe(function (fragment) {
        _this24.currentHashFragment = fragment;

        _this24.rewind(fragment);
      });
    }
  }]);

  return HashService;
}();

HashService.ɵfac = function HashService_Factory(t) {
  return new (t || HashService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router, 8));
};

HashService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HashService,
  factory: HashService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HashService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: CarouselService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }];
  }, null);
})();

var nextId = 0;

var CarouselSlideDirective = /*#__PURE__*/function () {
  function CarouselSlideDirective(tplRef) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CarouselSlideDirective);

    this.tplRef = tplRef;
    /**
     * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
     * Will be auto-generated if not provided.
     */

    this.id = "owl-slide-".concat(nextId++);
    /**
     * Defines how much widths of common slide will current slide have
     * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
     */

    this._dataMerge = 1;
    /**
     * Width of slide
     */

    this.width = 0;
    /**
     * Inner content of dot for certain slide; can be html-markup
     */

    this.dotContent = '';
    /**
     * Hash (fragment) of url which corresponds to certain slide
     */

    this.dataHash = '';
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CarouselSlideDirective, [{
    key: "dataMerge",
    get: function get() {
      return this._dataMerge;
    }
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param - The input to be tested
       * @returns - An indication if the input is a Number or can be coerced to a Number
       */
    ,
    set: function set(data) {
      this._dataMerge = this.isNumeric(data) ? data : 1;
    }
  }, {
    key: "isNumeric",
    value: function isNumeric(number) {
      return !isNaN(parseFloat(number));
    }
  }]);

  return CarouselSlideDirective;
}();

CarouselSlideDirective.ɵfac = function CarouselSlideDirective_Factory(t) {
  return new (t || CarouselSlideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef));
};

CarouselSlideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CarouselSlideDirective,
  selectors: [["ng-template", "carouselSlide", ""]],
  inputs: {
    id: "id",
    dataMerge: "dataMerge",
    width: "width",
    dotContent: "dotContent",
    dataHash: "dataHash"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CarouselSlideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'ng-template[carouselSlide]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dataMerge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dotContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dataHash: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();

var ResizeService = /*#__PURE__*/function () {
  function ResizeService(eventManager) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ResizeService);

    this.eventManager = eventManager;
    this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
  }
  /**
   * Makes resizeSubject become Observable
   * @returns Observable of resizeSubject
   */


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ResizeService, [{
    key: "onResize$",
    get: function get() {
      return this.resizeSubject.asObservable();
    }
    /**
     * Handler of 'resize' event. Passes data throw resizeSubject
     * @param event Event Object of 'resize' event
     */

  }, {
    key: "onResize",
    value: function onResize(event) {
      this.resizeSubject.next(event.target);
    }
    /**
     * Handler of 'onload' event. Defines the width of window
     * @param event Event Object of 'onload' event
     */

  }, {
    key: "onLoaded",
    value: function onLoaded(event) {
      this.windowWidth = event.target;
    }
  }]);

  return ResizeService;
}();

ResizeService.ɵfac = function ResizeService_Factory(t) {
  return new (t || ResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.EventManager));
};

ResizeService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ResizeService,
  factory: ResizeService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ResizeService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.EventManager
    }];
  }, null);
})();

var StageComponent = /*#__PURE__*/function () {
  function StageComponent(zone, el, renderer, carouselService, animateService) {
    var _this25 = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, StageComponent);

    this.zone = zone;
    this.el = el;
    this.renderer = renderer;
    this.carouselService = carouselService;
    this.animateService = animateService;
    /**
     * Object with data needed for dragging
     */

    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null,
      active: false,
      moving: false
    };
    /**
     * Subject for notification when the carousel's rebuilding caused by resize event starts
     */

    this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();

    this.preparePublicSlide = function (slide) {
      var newSlide = Object.assign({}, slide);
      delete newSlide.tplRef;
      return newSlide;
    };
    /**
     * Passes this to _oneMouseTouchMove();
     */


    this.bindOneMouseTouchMove = function (ev) {
      _this25._oneMouseTouchMove(ev);
    };
    /**
     * Passes this to _onDragMove();
     */


    this.bindOnDragMove = function (ev) {
      _this25._onDragMove(ev);
    };
    /**
     * Passes this to _onDragMove();
     */


    this.bindOnDragEnd = function (ev) {
      // this.zone.run(() => {
      _this25._onDragEnd(ev); // });

    };
    /**
     * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
     */


    this._oneClickHandler = function () {
      _this25.listenerOneClick = _this25.renderer.listen(_this25._drag.target, 'click', function () {
        return false;
      });

      _this25.listenerOneClick();
    };
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(StageComponent, [{
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (this.owlDraggable.isMouseDragable) {
        this._onDragStart(event);
      }
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      if (event.targetTouches.length >= 2) {
        return false;
      }

      if (this.owlDraggable.isTouchDragable) {
        this._onDragStart(event);
      }
    }
  }, {
    key: "onTouchCancel",
    value: function onTouchCancel(event) {
      this._onDragEnd(event);
    }
  }, {
    key: "onDragStart",
    value: function onDragStart() {
      if (this.owlDraggable.isMouseDragable) {
        return false;
      }
    }
  }, {
    key: "onSelectStart",
    value: function onSelectStart() {
      if (this.owlDraggable.isMouseDragable) {
        return false;
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this26 = this;

      this._oneMoveSubsription = this._oneDragMove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.first)()).subscribe(function () {
        _this26._sendChanges();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._oneMoveSubsription.unsubscribe();
    }
    /**
       * Handles `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       */

  }, {
    key: "_onDragStart",
    value: function _onDragStart(event) {
      var _this27 = this;

      var stage = null;

      if (event.which === 3) {
        return;
      }

      stage = this._prepareDragging(event);
      this._drag.time = new Date().getTime();
      this._drag.target = event.target;
      this._drag.stage.start = stage;
      this._drag.stage.current = stage;
      this._drag.pointer = this._pointer(event);
      this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
      this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
      this.zone.runOutsideAngular(function () {
        _this27.listenerOneMouseMove = _this27.renderer.listen(document, 'mousemove', _this27.bindOneMouseTouchMove);
        _this27.listenerOneTouchMove = _this27.renderer.listen(document, 'touchmove', _this27.bindOneMouseTouchMove);
      });
    }
    /**
     * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
     * @param event event objech of mouse or touch event
     */

  }, {
    key: "_oneMouseTouchMove",
    value: function _oneMouseTouchMove(event) {
      var delta = this._difference(this._drag.pointer, this._pointer(event));

      if (this.listenerATag) {
        this.listenerATag();
      }

      if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
        return;
      }

      if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is('valid')) {
        return;
      }

      this.listenerOneMouseMove();
      this.listenerOneTouchMove();
      this._drag.moving = true;
      this.blockClickAnchorInDragging(event);
      this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
      this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
      event.preventDefault();

      this._enterDragging();

      this._oneDragMove$.next(event); // this._sendChanges();

    }
    /**
     * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
     * @param event event object
     */

  }, {
    key: "blockClickAnchorInDragging",
    value: function blockClickAnchorInDragging(event) {
      var target = event.target;

      while (target && !(target instanceof HTMLAnchorElement)) {
        target = target.parentElement;
      }

      if (target instanceof HTMLAnchorElement) {
        this.listenerATag = this.renderer.listen(target, 'click', function () {
          return false;
        });
      }
    }
    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @param event - The event arguments.
     */

  }, {
    key: "_onDragMove",
    value: function _onDragMove(event) {
      var stage;
      var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);

      if (stageOrExit === false) {
        return;
      }

      stage = stageOrExit;
      event.preventDefault();
      this._drag.stage.current = stage;

      this._animate(stage.x - this._drag.stage.start.x);
    }
  }, {
    key: "_animate",
    value:
    /**
     * Moves .owl-stage left-right
     * @param coordinate coordinate to be set to .owl-stage
     */
    function _animate(coordinate) {
      this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(".concat(coordinate, "px,0px,0px"));
      this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
    }
    /**
       * Handles the `touchend` and `mouseup` events.
       * @todo #261
       * @todo Threshold for click event
       * @param event - The event arguments.
       */

  }, {
    key: "_onDragEnd",
    value: function _onDragEnd(event) {
      this.carouselService.owlDOMData.isGrab = false;
      this.listenerOneMouseMove();
      this.listenerOneTouchMove();

      if (this._drag.moving) {
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');

        this._finishDragging(event);

        this.listenerMouseMove();
        this.listenerTouchMove();
      }

      this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
          start: null,
          current: null
        },
        direction: null,
        active: false,
        moving: false
      }; // this.carouselService.trigger('dragged');

      this.listenerMouseUp();
      this.listenerTouchEnd();
    }
  }, {
    key: "_prepareDragging",
    value:
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */
    function _prepareDragging(event) {
      return this.carouselService.prepareDragging(event);
    }
    /**
     * Finishes dragging
     * @param event object event of 'mouseUp' of 'touchend' events
     */

  }, {
    key: "_finishDragging",
    value: function _finishDragging(event) {
      this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
    }
    /**
       * Gets unified pointer coordinates from event.
       * @param event The `mousedown` or `touchstart` event.
       * @returns Contains `x` and `y` coordinates of current pointer position.
       */

  }, {
    key: "_pointer",
    value: function _pointer(event) {
      return this.carouselService.pointer(event);
    }
    /**
       * Gets the difference of two vectors.
       * @param first The first vector.
       * @param second The second vector.
       * @returns The difference.
       */

  }, {
    key: "_difference",
    value: function _difference(firstC, second) {
      return this.carouselService.difference(firstC, second);
    }
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param specificState The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */

  }, {
    key: "_is",
    value: function _is(specificState) {
      return this.carouselService.is(specificState);
    }
    /**
    * Enters a state.
    * @param name The state name.
    */

  }, {
    key: "_enter",
    value: function _enter(name) {
      this.carouselService.enter(name);
    }
    /**
       * Sends all data needed for View.
       */

  }, {
    key: "_sendChanges",
    value: function _sendChanges() {
      this.carouselService.sendChanges();
    }
    /**
     * Handler for transitioend event
     */

  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      this.carouselService.onTransitionEnd();
    }
    /**
       * Enters into a 'dragging' state
       */

  }, {
    key: "_enterDragging",
    value: function _enterDragging() {
      this.carouselService.enterDragging();
    }
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */

  }, {
    key: "clear",
    value: function clear(id) {
      this.animateService.clear(id);
    }
  }]);

  return StageComponent;
}();

StageComponent.ɵfac = function StageComponent_Factory(t) {
  return new (t || StageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AnimateService));
};

StageComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StageComponent,
  selectors: [["owl-stage"]],
  hostBindings: function StageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
        return ctx.onTouchStart($event);
      })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
        return ctx.onTouchCancel($event);
      })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
        return ctx.onDragStart();
      })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
        return ctx.onSelectStart();
      });
    }
  },
  inputs: {
    owlDraggable: "owlDraggable",
    stageData: "stageData",
    slidesData: "slidesData"
  },
  decls: 3,
  vars: 8,
  consts: [[1, "owl-stage", 3, "ngStyle", "transitionend"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "ngClass", "ngStyle", "animationend"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function StageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
        return ctx.onTransitionEnd();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction5"](2, _c2, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.slidesData);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('autoHeight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('nulled', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
      height: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('full', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('full => nulled', [// style({height: '*'}),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('700ms 350ms')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('nulled => full', [// style({height: 0}),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)(350)])])]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](StageComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'owl-stage',
      template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',\n                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',\n                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\" [ngTemplateOutletContext]=\"{ $implicit: preparePublicSlide(slide), index: i }\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('autoHeight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('nulled', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
        height: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('full', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('full => nulled', [// style({height: '*'}),
      (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('700ms 350ms')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('nulled => full', [// style({height: 0}),
      (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)(350)])])]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2
    }, {
      type: CarouselService
    }, {
      type: AnimateService
    }];
  }, {
    owlDraggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    stageData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    slidesData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    onTouchStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['touchstart', ['$event']]
    }],
    onTouchCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['touchcancel', ['$event']]
    }],
    onDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['dragstart']
    }],
    onSelectStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['selectstart']
    }]
  });
})();

var CarouselComponent = /*#__PURE__*/function () {
  function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CarouselComponent);

    this.el = el;
    this.resizeService = resizeService;
    this.carouselService = carouselService;
    this.navigationService = navigationService;
    this.autoplayService = autoplayService;
    this.lazyLoadService = lazyLoadService;
    this.animateService = animateService;
    this.autoHeightService = autoHeightService;
    this.hashService = hashService;
    this.logger = logger;
    this.changeDetectorRef = changeDetectorRef;
    this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    /**
       *  Data of every slide
       */

    this.slidesData = [];
    /**
     * Shows whether carousel is loaded of not.
     */

    this.carouselLoaded = false;
    this.docRef = docRef;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CarouselComponent, [{
    key: "onVisibilityChange",
    value: function onVisibilityChange(ev) {
      if (!this.carouselService.settings.autoplay) return;

      switch (this.docRef.visibilityState) {
        case 'visible':
          !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
          break;

        case 'hidden':
          this.autoplayService.pause();
          break;

        default:
          break;
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.spyDataStreams();
      this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      var _a, _b;

      if (this.prevOptions !== this.options) {
        if (this.prevOptions && ((_a = this.slides) === null || _a === void 0 ? void 0 : _a.toArray().length)) {
          this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
          this.carouselService.initialize(this.slides.toArray());
        } else if (this.prevOptions && !((_b = this.slides) === null || _b === void 0 ? void 0 : _b.toArray().length)) {
          this.carouselLoaded = false;
          this.logger.log("There are no slides to show. So the carousel won't be re-rendered...");
        } else {
          this.carouselLoaded = false;
        }

        this.prevOptions = this.options;
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this28 = this;

      if (this.slides.toArray().length) {
        this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
        this.carouselService.initialize(this.slides.toArray());

        this._winResizeWatcher();
      } else {
        this.logger.log("There are no slides to show. So the carousel won't be rendered");
      }

      this._slidesChangesSubscription = this.slides.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (slides) {
        if (slides.toArray().length) {
          // this.carouselService.setItems(slides.toArray());
          _this28.carouselService.setup(_this28.carouselWindowWidth, slides.toArray(), _this28.options);

          _this28.carouselService.initialize(slides.toArray());
        } else {
          _this28.carouselLoaded = false;

          _this28.logger.log("There are no slides to show. So the carousel won't be re-rendered");
        }
      })).subscribe(function () {});
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.resizeSubscription) {
        this.resizeSubscription.unsubscribe();
      }

      if (this._slidesChangesSubscription) {
        this._slidesChangesSubscription.unsubscribe();
      }

      if (this._allObservSubscription) {
        this._allObservSubscription.unsubscribe();
      }
    }
    /**
     * Joins the observable login in one place: sets values to some observables, merges this observables and
     * subcribes to merge func
     */

  }, {
    key: "spyDataStreams",
    value: function spyDataStreams() {
      var _this29 = this;

      this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (data) {
        _this29.owlDOMData = data.owlDOMData;
        _this29.stageData = data.stageData;
        _this29.slidesData = data.slidesData;

        if (!_this29.carouselLoaded) {
          _this29.carouselLoaded = true;
        }

        _this29.navData = data.navData;
        _this29.dotsData = data.dotsData;

        _this29.changeDetectorRef.markForCheck();
      }));
      this._initializedCarousel$ = this.carouselService.getInitializedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        _this29.gatherTranslatedData();

        _this29.initialized.emit(_this29.slidesOutputData); // this.slidesOutputData = {};

      }));
      this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        _this29.gatherTranslatedData();

        _this29.translated.emit(_this29.slidesOutputData); // this.slidesOutputData = {};

      }));
      this._changeCarousel$ = this.carouselService.getChangeState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        _this29.gatherTranslatedData();

        _this29.change.emit(_this29.slidesOutputData); // this.slidesOutputData = {};

      }));
      this._changedCarousel$ = this.carouselService.getChangeState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(function (value) {
        var changedPosition = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function () {
          return value.property.name === 'position';
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(function () {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.from)(_this29.slidesData);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.skip)(value.property.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(_this29.carouselService.settings.items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(function (slide) {
          var clonedIdPrefix = _this29.carouselService.clonedIdPrefix;
          var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
          return Object.assign(Object.assign({}, slide), {
            id: id,
            isActive: true
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.toArray)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(function (slides) {
          return {
            slides: slides,
            startPosition: _this29.carouselService.relative(value.property.value)
          };
        })); // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
        //   filter(() => value.property.name === 'settings'),
        //   map(() => {
        //     return {
        //       slides: [],
        //       startPosition: this.carouselService.relative(value.property.value)
        //     }
        //   })
        // )

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(changedPosition);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (slidesData) {
        _this29.gatherTranslatedData();

        _this29.changed.emit(slidesData.slides.length ? slidesData : _this29.slidesOutputData); // console.log(this.slidesOutputData);
        // this.slidesOutputData = {};

      }));
      this._draggingCarousel$ = this.carouselService.getDragState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        _this29.gatherTranslatedData();

        _this29.dragging.emit({
          dragging: true,
          data: _this29.slidesOutputData
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(function () {
        return _this29.carouselService.getDraggedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(function () {
          return !!_this29.carouselService.is('animating');
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(function (anim) {
        if (anim) {
          return _this29.carouselService.getTranslatedState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.first)());
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)('not animating');
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function () {
        _this29.dragging.emit({
          dragging: false,
          data: _this29.slidesOutputData
        });
      }));
      this._carouselMerge$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
      this._allObservSubscription = this._carouselMerge$.subscribe(function () {});
    }
    /**
     * Init subscription to resize event and attaches handler for this event
     */

  }, {
    key: "_winResizeWatcher",
    value: function _winResizeWatcher() {
      var _this30 = this;

      if (Object.keys(this.carouselService._options.responsive).length) {
        this.resizeSubscription = this.resizeService.onResize$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function () {
          return _this30.carouselWindowWidth !== _this30.el.nativeElement.querySelector('.owl-carousel').clientWidth;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.delay)(this.carouselService.settings.responsiveRefreshRate)).subscribe(function () {
          _this30.carouselService.onResize(_this30.el.nativeElement.querySelector('.owl-carousel').clientWidth);

          _this30.carouselWindowWidth = _this30.el.nativeElement.querySelector('.owl-carousel').clientWidth;
        });
      }
    }
    /**
     * Handler for transitioend event
     */

  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      this.carouselService.onTransitionEnd();
    }
    /**
     * Handler for click event, attached to next button
     */

  }, {
    key: "next",
    value: function next() {
      if (!this.carouselLoaded) return;
      this.navigationService.next(this.carouselService.settings.navSpeed);
    }
    /**
     * Handler for click event, attached to prev button
     */

  }, {
    key: "prev",
    value: function prev() {
      if (!this.carouselLoaded) return;
      this.navigationService.prev(this.carouselService.settings.navSpeed);
    }
    /**
     * Handler for click event, attached to dots
     */

  }, {
    key: "moveByDot",
    value: function moveByDot(dotId) {
      if (!this.carouselLoaded) return;
      this.navigationService.moveByDot(dotId);
    }
    /**
     * rewinds carousel to slide with needed id
     * @param id fragment of url
     */

  }, {
    key: "to",
    value: function to(id) {
      // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
      if (!this.carouselLoaded) return;
      this.navigationService.toSlideById(id);
    }
    /**
     * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
     */

  }, {
    key: "gatherTranslatedData",
    value: function gatherTranslatedData() {
      var startPosition;
      var clonedIdPrefix = this.carouselService.clonedIdPrefix;
      var activeSlides = this.slidesData.filter(function (slide) {
        return slide.isActive === true;
      }).map(function (slide) {
        var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
        return {
          id: id,
          width: slide.width,
          marginL: slide.marginL,
          marginR: slide.marginR,
          center: slide.isCentered
        };
      });
      startPosition = this.carouselService.relative(this.carouselService.current());
      this.slidesOutputData = {
        startPosition: startPosition,
        slides: activeSlides
      };
    }
    /**
     * Starts pausing
     */

  }, {
    key: "startPausing",
    value: function startPausing() {
      this.autoplayService.startPausing();
    }
    /**
     * Starts playing after mouse leaves carousel
     */

  }, {
    key: "startPlayML",
    value: function startPlayML() {
      this.autoplayService.startPlayingMouseLeave();
    }
    /**
     * Starts playing after touch ends
     */

  }, {
    key: "startPlayTE",
    value: function startPlayTE() {
      this.autoplayService.startPlayingTouchEnd();
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      this.autoplayService.isAutoplayStopped = true;
      this.autoplayService.stop();
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      this.autoplayService.isAutoplayStopped = false;
      this.autoplayService.play();
    }
  }]);

  return CarouselComponent;
}();

CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AutoplayService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](LazyLoadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AnimateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AutoHeightService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](HashService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](OwlLogger), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DOCUMENT));
};

CarouselComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CarouselComponent,
  selectors: [["owl-carousel-o"]],
  contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CarouselSlideDirective, 4);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    }
  },
  hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
        return ctx.onVisibilityChange($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    options: "options"
  },
  outputs: {
    translated: "translated",
    dragging: "dragging",
    change: "change",
    changed: "changed",
    initialized: "initialized"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 9,
  consts: [[1, "owl-carousel", "owl-theme", 3, "ngClass", "mouseover", "mouseleave", "touchstart", "touchend"], ["owlCarousel", ""], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "ngClass", "innerHTML", "click"], [1, "owl-next", 3, "ngClass", "innerHTML", "click"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "ngClass", "click"], [3, "innerHTML"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
        return ctx.startPausing();
      })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
        return ctx.startPlayML();
      })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
        return ctx.startPausing();
      })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
        return ctx.startPlayTE();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CarouselComponent_div_2_Template, 2, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction5"](3, _c6, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.carouselLoaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.slides.toArray().length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, StageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
  styles: [".owl-theme[_ngcontent-%COMP%]{display:block}"],
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'owl-carousel-o',
      template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
      styles: [".owl-theme { display: block; }"],
      providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: ResizeService
    }, {
      type: CarouselService
    }, {
      type: NavigationService
    }, {
      type: AutoplayService
    }, {
      type: LazyLoadService
    }, {
      type: AnimateService
    }, {
      type: AutoHeightService
    }, {
      type: HashService
    }, {
      type: OwlLogger
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    slides: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [CarouselSlideDirective]
    }],
    translated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    changed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    initialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    onVisibilityChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['document:visibilitychange', ['$event']]
    }]
  });
})();

var OwlRouterLinkDirective = /*#__PURE__*/function () {
  function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, OwlRouterLinkDirective);

    this.router = router;
    this.route = route;
    this.stopLink = false;
    this.commands = [];

    if (tabIndex == null) {
      renderer.setAttribute(el.nativeElement, 'tabindex', '0');
    }
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(OwlRouterLinkDirective, [{
    key: "owlRouterLink",
    set: function set(commands) {
      if (commands != null) {
        this.commands = Array.isArray(commands) ? commands : [commands];
      } else {
        this.commands = [];
      }
    }
    /**
     * @deprecated 4.0.0 use `queryParamsHandling` instead.
     */

  }, {
    key: "preserveQueryParams",
    set: function set(value) {
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.isDevMode)() && console && console.warn) {
        console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
      }

      this.preserve = value;
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var extras = {
        skipLocationChange: attrBoolValue(this.skipLocationChange),
        replaceUrl: attrBoolValue(this.replaceUrl)
      };

      if (this.stopLink) {
        return false;
      }

      this.router.navigateByUrl(this.urlTree, extras);
      return true;
    }
  }, {
    key: "urlTree",
    get: function get() {
      return this.router.createUrlTree(this.commands, {
        relativeTo: this.route,
        queryParams: this.queryParams,
        fragment: this.fragment,
        queryParamsHandling: this.queryParamsHandling,
        preserveFragment: attrBoolValue(this.preserveFragment)
      });
    }
  }]);

  return OwlRouterLinkDirective;
}();

OwlRouterLinkDirective.ɵfac = function OwlRouterLinkDirective_Factory(t) {
  return new (t || OwlRouterLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
};

OwlRouterLinkDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: OwlRouterLinkDirective,
  selectors: [["", "owlRouterLink", "", 5, "a"]],
  hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    queryParams: "queryParams",
    fragment: "fragment",
    queryParamsHandling: "queryParamsHandling",
    preserveFragment: "preserveFragment",
    skipLocationChange: "skipLocationChange",
    replaceUrl: "replaceUrl",
    stopLink: "stopLink",
    owlRouterLink: "owlRouterLink",
    preserveQueryParams: "preserveQueryParams"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](OwlRouterLinkDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: ':not(a)[owlRouterLink]'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }];
  }, {
    queryParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    fragment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    queryParamsHandling: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    preserveFragment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    skipLocationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    replaceUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    stopLink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    owlRouterLink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    preserveQueryParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['click']
    }]
  });
})();
/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */


var OwlRouterLinkWithHrefDirective = /*#__PURE__*/function () {
  function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
    var _this31 = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, OwlRouterLinkWithHrefDirective);

    this.router = router;
    this.route = route;
    this.locationStrategy = locationStrategy;
    this.stopLink = false;
    this.commands = [];
    this.subscription = router.events.subscribe(function (s) {
      if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_15__.NavigationEnd) {
        _this31.updateTargetUrlAndHref();
      }
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(OwlRouterLinkWithHrefDirective, [{
    key: "owlRouterLink",
    set: function set(commands) {
      if (commands != null) {
        this.commands = Array.isArray(commands) ? commands : [commands];
      } else {
        this.commands = [];
      }
    }
  }, {
    key: "preserveQueryParams",
    set: function set(value) {
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.isDevMode)() && console && console.warn) {
        console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
      }

      this.preserve = value;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.updateTargetUrlAndHref();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }, {
    key: "onClick",
    value: function onClick(button, ctrlKey, metaKey, shiftKey) {
      if (button !== 0 || ctrlKey || metaKey || shiftKey) {
        return true;
      }

      if (typeof this.target === 'string' && this.target !== '_self') {
        return true;
      }

      if (this.stopLink) {
        return false;
      }

      var extras = {
        skipLocationChange: attrBoolValue(this.skipLocationChange),
        replaceUrl: attrBoolValue(this.replaceUrl)
      };
      this.router.navigateByUrl(this.urlTree, extras);
      return false;
    }
  }, {
    key: "updateTargetUrlAndHref",
    value: function updateTargetUrlAndHref() {
      this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    }
  }, {
    key: "urlTree",
    get: function get() {
      return this.router.createUrlTree(this.commands, {
        relativeTo: this.route,
        queryParams: this.queryParams,
        fragment: this.fragment,
        queryParamsHandling: this.queryParamsHandling,
        preserveFragment: attrBoolValue(this.preserveFragment)
      });
    }
  }]);

  return OwlRouterLinkWithHrefDirective;
}();

OwlRouterLinkWithHrefDirective.ɵfac = function OwlRouterLinkWithHrefDirective_Factory(t) {
  return new (t || OwlRouterLinkWithHrefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy));
};

OwlRouterLinkWithHrefDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: OwlRouterLinkWithHrefDirective,
  selectors: [["a", "owlRouterLink", ""]],
  hostVars: 2,
  hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("target", ctx.target);
    }
  },
  inputs: {
    target: "target",
    queryParams: "queryParams",
    fragment: "fragment",
    queryParamsHandling: "queryParamsHandling",
    preserveFragment: "preserveFragment",
    skipLocationChange: "skipLocationChange",
    replaceUrl: "replaceUrl",
    stopLink: "stopLink",
    owlRouterLink: "owlRouterLink",
    preserveQueryParams: "preserveQueryParams"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](OwlRouterLinkWithHrefDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'a[owlRouterLink]'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy
    }];
  }, {
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding,
      args: ['attr.target']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    queryParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    fragment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    queryParamsHandling: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    preserveFragment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    skipLocationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    replaceUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    stopLink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    href: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding
    }],
    owlRouterLink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    preserveQueryParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']]
    }]
  });
})();

function attrBoolValue(s) {
  return s === '' || !!s;
}
/**
 * Data which will be passed out after ending of transition of carousel
 */


var SlidesOutputData = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function SlidesOutputData() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SlidesOutputData);
});

;
var routes = [];

var CarouselModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function CarouselModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CarouselModule);
});

CarouselModule.ɵfac = function CarouselModule_Factory(t) {
  return new (t || CarouselModule)();
};

CarouselModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CarouselModule
});
CarouselModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
  // RouterModule.forChild(routes)
  ]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
      // RouterModule.forChild(routes)
      ],
      declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
    }]
  }], null, null);
})();

var SlideModel = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function SlideModel() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SlideModel);
});
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_home_pages_custome-educational-year-subjects_custome-educational-year-subject-9764cb.js.map