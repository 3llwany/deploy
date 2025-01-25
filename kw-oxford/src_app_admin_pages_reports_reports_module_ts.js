"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["src_app_admin_pages_reports_reports_module_ts"],{

/***/ 57321:
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/financial-detailed-report/financial-detailed-report.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialDetailedReportComponent": function() { return /* binding */ FinancialDetailedReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









var FinancialDetailedReportComponent = /*#__PURE__*/function () {
  function FinancialDetailedReportComponent(reportsService, fb, msg, router, route, datePipe) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FinancialDetailedReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.route = route;
    this.datePipe = datePipe;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FinancialDetailedReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      //console.log("NOW CALL SERVER YA BEH: ", this.reportObj);
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.FromDate = this.datePipe.transform(this.reportObj.FromDate, 'yyyy-MM-dd');
      obj.ToDate = this.datePipe.transform(this.reportObj.ToDate, 'yyyy-MM-dd');
      this.reportsService.getFinancialDetailsReportExcel(obj).subscribe(function (response) {
        if (response) {
          //console.log("report lectures: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //  window.open(response as any, "_blank")?.focus();

          _this.msg.success("Report has been downloaded successfully");
        }
      });
    }
  }]);

  return FinancialDetailedReportComponent;
}();

FinancialDetailedReportComponent.ɵfac = function FinancialDetailedReportComponent_Factory(t) {
  return new (t || FinancialDetailedReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};

FinancialDetailedReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FinancialDetailedReportComponent,
  selectors: [["app-financial-detailed-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 0,
  vars: 0,
  template: function FinancialDetailedReportComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNpYWwtZGV0YWlsZWQtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 24051:
/*!************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/financial-report/financial-report.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialReportComponent": function() { return /* binding */ FinancialReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









var FinancialReportComponent = /*#__PURE__*/function () {
  function FinancialReportComponent(reportsService, fb, msg, router, route, datePipe) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FinancialReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.route = route;
    this.datePipe = datePipe;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FinancialReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // console.log("NOW CALL SERVER YA BEH: ", this.reportObj);
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.FromDate = this.datePipe.transform(this.reportObj.FromDate, 'yyyy-MM-dd');
      obj.ToDate = this.datePipe.transform(this.reportObj.ToDate, 'yyyy-MM-dd');
      this.reportsService.getFinancialReportExcel(obj).subscribe(function (response) {
        if (response) {
          // console.log("report lectures: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); // window.open(response as any, "_blank")?.focus();

          _this.msg.success("Report has been downloaded successfully");
        }
      });
    }
  }]);

  return FinancialReportComponent;
}();

FinancialReportComponent.ɵfac = function FinancialReportComponent_Factory(t) {
  return new (t || FinancialReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};

FinancialReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FinancialReportComponent,
  selectors: [["app-financial-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 0,
  vars: 0,
  template: function FinancialReportComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNpYWwtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 50717:
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/financial-summary-report/financial-summary-report.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialSummaryReportComponent": function() { return /* binding */ FinancialSummaryReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









var FinancialSummaryReportComponent = /*#__PURE__*/function () {
  function FinancialSummaryReportComponent(reportsService, fb, msg, router, route, datePipe) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FinancialSummaryReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.route = route;
    this.datePipe = datePipe;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FinancialSummaryReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      //console.log("NOW CALL SERVER YA BEH: ", this.reportObj);
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.FromDate = this.datePipe.transform(this.reportObj.FromDate, 'yyyy-MM-dd');
      obj.ToDate = this.datePipe.transform(this.reportObj.ToDate, 'yyyy-MM-dd');
      this.reportsService.getFinancialSummaryReportExcel(obj).subscribe(function (response) {
        if (response) {
          //   console.log("report lectures: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //   window.open(response as any, "_blank")?.focus();

          _this.msg.success("Report has been downloaded successfully");
        }
      });
    }
  }]);

  return FinancialSummaryReportComponent;
}();

FinancialSummaryReportComponent.ɵfac = function FinancialSummaryReportComponent_Factory(t) {
  return new (t || FinancialSummaryReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};

FinancialSummaryReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FinancialSummaryReportComponent,
  selectors: [["app-financial-summary-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 0,
  vars: 0,
  template: function FinancialSummaryReportComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNpYWwtc3VtbWFyeS1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 22933:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/lectures-exams-views-count-report/lectures-exams-views-count-report.component.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LecturesExamsViewsCountReportComponent": function() { return /* binding */ LecturesExamsViewsCountReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);















function LecturesExamsViewsCountReportComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_32_Template_a_click_10_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var center_r8 = restoredCtx.$implicit;
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r10.onDownLoadLectureAbsence(center_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_32_Template_a_click_13_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var center_r8 = restoredCtx.$implicit;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r12.onDownLoadLecturePresent(center_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_32_Template_a_click_16_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var center_r8 = restoredCtx.$implicit;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r13.onDownLoadLectureGuests(center_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var center_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](center_r8.MaterialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](center_r8.Count);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](center_r8.InsideCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](center_r8.OutsideCount);
  }
}

function LecturesExamsViewsCountReportComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "pagination-controls", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function LecturesExamsViewsCountReportComponent_div_34_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r14.pCeLec = $event;
      return ctx_r14.getreportCenterLectureDetails(ctx_r14.pCeLec);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxSize", ctx_r1.maxSizeCeLec);
  }
}

function LecturesExamsViewsCountReportComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_67_Template_a_click_10_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      var lec_r16 = restoredCtx.$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r18.onDownLoadCenterLectureAbsence(lec_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_67_Template_a_click_13_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      var lec_r16 = restoredCtx.$implicit;
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r20.onDownLoadCenterLecturePresent(lec_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_67_Template_a_click_16_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      var lec_r16 = restoredCtx.$implicit;
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r21.onDownLoadCenterLectureGuests(lec_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lec_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](lec_r16.MaterialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](lec_r16.Count);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](lec_r16.InsideCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](lec_r16.OutsideCount);
  }
}

function LecturesExamsViewsCountReportComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "pagination-controls", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function LecturesExamsViewsCountReportComponent_div_69_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r22.pLec = $event;
      return ctx_r22.getreportLectureDetails(ctx_r22.pLec);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxSize", ctx_r3.maxSizeLec);
  }
}

function LecturesExamsViewsCountReportComponent_tr_102_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_102_Template_a_click_10_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      var exam_r24 = restoredCtx.$implicit;
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r26.onDownLoadExamAbsence(exam_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_102_Template_a_click_13_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      var exam_r24 = restoredCtx.$implicit;
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r28.onDownLoadExamPresent(exam_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_102_Template_a_click_16_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      var exam_r24 = restoredCtx.$implicit;
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r29.onDownLoadExamGuests(exam_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r24.MaterialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r24.Count);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r24.InsideCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r24.OutsideCount);
  }
}

function LecturesExamsViewsCountReportComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "pagination-controls", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function LecturesExamsViewsCountReportComponent_div_104_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r30.pEx = $event;
      return ctx_r30.getreportExamsDetails(ctx_r30.pEx);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxSize", ctx_r5.maxSizeEx);
  }
}

function LecturesExamsViewsCountReportComponent_tr_137_Template(rf, ctx) {
  if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_137_Template_a_click_10_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      var exam_r32 = restoredCtx.$implicit;
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r34.onDownLoadExamAbsence(exam_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_137_Template_a_click_13_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      var exam_r32 = restoredCtx.$implicit;
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r36.onDownLoadExamPresent(exam_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LecturesExamsViewsCountReportComponent_tr_137_Template_a_click_16_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      var exam_r32 = restoredCtx.$implicit;
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r37.onDownLoadExamGuests(exam_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r32.MaterialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r32.Count);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r32.InsideCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](exam_r32.OutsideCount);
  }
}

function LecturesExamsViewsCountReportComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "pagination-controls", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function LecturesExamsViewsCountReportComponent_div_139_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r38.pQ = $event;
      return ctx_r38.getreportQuizsDetails(ctx_r38.pQ);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxSize", ctx_r7.maxSizeEx);
  }
}

var _c0 = function _c0(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "sami"
  };
};

var _c1 = function _c1(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "samy"
  };
};

var _c2 = function _c2(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "sam"
  };
};

var _c3 = function _c3(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "samm"
  };
};

var LecturesExamsViewsCountReportComponent = /*#__PURE__*/function () {
  function LecturesExamsViewsCountReportComponent(reportsService, fb, msg, spinner, authserv) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LecturesExamsViewsCountReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.spinner = spinner;
    this.authserv = authserv;
    this.pLec = 1;
    this.maxSizeLec = 5;
    this.reportLectureDetails = [];
    this.pEx = 1;
    this.pQ = 1;
    this.maxSizeEx = 5;
    this.reportExamsDetails = [];
    this.reportQuizsDetails = [];
    this.pCeLec = 1;
    this.maxSizeCeLec = 5;
    this.reportCenterLectureDetails = [];
    this.pLiLec = 1;
    this.maxSizeLiLec = 5;
    this.reportLiveLectureDetails = [];
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LecturesExamsViewsCountReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.EduCompId = this.authserv.getEduCompId(); //console.log("NOW CALL SERVER YA BEH: ", this.reportObj);

      this.getreportLectureDetails(1);
      this.getreportExamsDetails(1);
      this.getreportQuizsDetails(1);
      this.getreportCenterLectureDetails(1);
      this.getreportLiveLectureDetails(1);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this.EduCompId = e.EduCompId;
      });
    }
  }, {
    key: "getreportLectureDetails",
    value: function getreportLectureDetails(pageNumber) {
      var _this2 = this;

      this.spinner.show();
      this.pLec = pageNumber;
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.Page = pageNumber;
      obj.EduCompId = this.EduCompId;
      this.reportsService.lecturesExamsViewsCountLectureReport(obj).subscribe(function (response) {
        if (response) {
          //   console.log("report lectures: ", response);
          _this2.reportLectureDetails = response.data;
          _this2.totalItemsLec = response.totalItems;
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "trackLecture",
    value: function trackLecture(index, el) {
      return el.MaterialName;
    }
  }, {
    key: "onDownLoadLectureAbsence",
    value: function onDownLoadLectureAbsence(obj) {
      var _this3 = this;

      this.spinner.show();
      var typeId = 6;
      this.reportsService.getStudentAbsenceReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          //  console.log("onDownLoadLectureAbsence ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank");
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "onDownLoadLecturePresent",
    value: function onDownLoadLecturePresent(obj) {
      var _this4 = this;

      this.spinner.show();
      var typeId = 6;
      this.reportsService.getStudentPresentReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          //  console.log("onDownLoadLecturePresent ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //window.open(response as any, "_blank")?.focus();
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "onDownLoadLectureGuests",
    value: function onDownLoadLectureGuests(obj) {
      var _this5 = this;

      this.spinner.show();
      var typeId = 6;
      console.log("hello guest");
      this.reportsService.getGuestStudentPresentReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          // console.log("onDownLoadLectureGuests ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //   window.open(response as any, "_blank")?.focus();
        }

        _this5.spinner.hide();
      });
    }
  }, {
    key: "getreportExamsDetails",
    value: function getreportExamsDetails(pageNumber) {
      var _this6 = this;

      this.pEx = pageNumber;
      this.spinner.show();
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.Page = pageNumber;
      obj.EduCompId = this.EduCompId;
      this.reportsService.lecturesExamsViewsCountExamReport(obj).subscribe(function (response) {
        if (response) {
          console.log("getreportExamsDetails ", response);
          _this6.reportExamsDetails = response.data;
          _this6.totalItemsEx = response.totalItems;
        }

        _this6.spinner.hide();
      });
    }
  }, {
    key: "getreportQuizsDetails",
    value: function getreportQuizsDetails(pageNumber) {
      var _this7 = this;

      this.pQ = pageNumber;
      this.spinner.show();
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.Page = pageNumber;
      obj.EduCompId = this.EduCompId;
      this.reportsService.lecturesExamsViewsCountQuizReport(obj).subscribe(function (response) {
        if (response) {
          //  console.log("getreportQuizsDetails ", response);
          _this7.reportQuizsDetails = response.data;
          _this7.totalItemsQ = response.totalItems;
        }

        _this7.spinner.hide();
      });
    }
  }, {
    key: "trackExam",
    value: function trackExam(index, el) {
      return el.MaterialName;
    }
  }, {
    key: "onDownLoadExamAbsence",
    value: function onDownLoadExamAbsence(obj) {
      var _this8 = this;

      var typeId = 11;
      this.spinner.show();
      this.reportsService.getStudentAbsenceReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          // console.log("onDownLoadExamAbsence ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //  window.open(response as any, "_blank")?.focus();
        }

        _this8.spinner.hide();
      });
    }
  }, {
    key: "onDownLoadExamPresent",
    value: function onDownLoadExamPresent(obj) {
      var _this9 = this;

      var typeId = 11;
      console.log("educo", this.EduCompId);
      this.spinner.show();
      this.reportsService.getStudentPresentReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          //     console.log("onDownLoadExamPresent ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //   window.open(response as any, "_blank")?.focus();
        }

        _this9.spinner.hide();
      });
    }
  }, {
    key: "onDownLoadExamGuests",
    value: function onDownLoadExamGuests(obj) {
      var _this10 = this;

      var typeId = 11;
      this.spinner.show();
      this.reportsService.getGuestStudentPresentReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          // console.log("onDownLoadExamGuests ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //   window.open(response as any, "_blank")?.focus();
        }

        _this10.spinner.hide();
      });
    }
  }, {
    key: "getreportCenterLectureDetails",
    value: function getreportCenterLectureDetails(pageNumber) {
      var _this11 = this;

      this.pCeLec = pageNumber;
      this.spinner.show();
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.Page = pageNumber;
      obj.EduCompId = this.EduCompId;
      this.reportsService.lecturesExamsViewsCountCenterLectureReport(obj).subscribe(function (response) {
        if (response) {
          console.log("report center lectures: ", response);
          _this11.reportCenterLectureDetails = response.data;
          _this11.totalItemsCeLec = response.totalItems;
        }

        _this11.spinner.hide();
      });
    }
  }, {
    key: "trackCenterLecture",
    value: function trackCenterLecture(index, el) {
      return el.LectureName;
    } /////video

  }, {
    key: "onDownLoadCenterLectureAbsence",
    value: function onDownLoadCenterLectureAbsence(obj) {
      var _this12 = this;

      this.spinner.show();
      var typeId = 6;
      console.log(obj);
      this.reportsService.getStudentAbsenceReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          // console.log("onDownLoadCenterLectureAbsence: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //window.open(response as any, "_blank")?.focus();
        }

        _this12.spinner.hide();
      });
    } /////Video

  }, {
    key: "onDownLoadCenterLecturePresent",
    value: function onDownLoadCenterLecturePresent(obj) {
      var _this13 = this;

      this.spinner.show();
      var typeId = 20;
      this.reportsService.getStudentPresentReportExcel(obj.MaterialId, this.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          // console.log("onDownLoadCenterLecturePresent: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); //  window.open(response as any, "_blank")?.focus();
        }

        _this13.spinner.hide();
      });
    }
  }, {
    key: "getreportLiveLectureDetails",
    value: function getreportLiveLectureDetails(pageNumber) {
      var _this14 = this;

      this.spinner.show();
      this.pLiLec = pageNumber;
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.Page = pageNumber;
      this.reportsService.lecturesExamsViewsCountLiveLectureReport(obj).subscribe(function (response) {
        if (response) {
          // console.log("report live lectures: ", response);
          _this14.reportLiveLectureDetails = response.data;
          _this14.totalItemsLiLec = response.totalItems;
        }

        _this14.spinner.hide();
      });
    }
  }, {
    key: "trackLiveEcture",
    value: function trackLiveEcture(index, el) {
      return el.LectureName;
    }
  }, {
    key: "onDownLoadLiveLectureAbsence",
    value: function onDownLoadLiveLectureAbsence(obj) {
      var _this15 = this;

      this.spinner.show();
      var typeId = 4;
      this.reportsService.getStudentAbsenceReportExcel(obj.MaterialId, obj.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          //  console.log("onDownLoadLiveLectureAbsence: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); // window.open(response as any, "_blank")?.focus();
        }

        _this15.spinner.hide();
      });
    }
  }, {
    key: "onDownLoadLiveLecturePresent",
    value: function onDownLoadLiveLecturePresent(obj) {
      var _this16 = this;

      this.spinner.show();
      var typeId = 4;
      this.reportsService.getStudentPresentReportExcel(obj.MaterialId, obj.EduCompId, typeId, this.reportObj.teacherUserId).subscribe(function (response) {
        if (response) {
          //  console.log("onDownLoadLiveLecturePresent: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank"); // window.open(response as any, "_blank")?.focus();
        }

        _this16.spinner.hide();
      });
    }
  }]);

  return LecturesExamsViewsCountReportComponent;
}();

LecturesExamsViewsCountReportComponent.ɵfac = function LecturesExamsViewsCountReportComponent_Factory(t) {
  return new (t || LecturesExamsViewsCountReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};

LecturesExamsViewsCountReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LecturesExamsViewsCountReportComponent,
  selectors: [["app-lectures-exams-views-count-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 140,
  vars: 132,
  consts: [[1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "paginator-box", 4, "ngIf"], ["target", "_blank", 1, "sh-btn", "rediu", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "paginator-box"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", "id", "sami", 3, "maxSize", "pageChange"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", "id", "samy", 3, "maxSize", "pageChange"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", "id", "sam", 3, "maxSize", "pageChange"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", "id", "samm", 3, "maxSize", "pageChange"]],
  template: function LecturesExamsViewsCountReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, LecturesExamsViewsCountReportComponent_tr_32_Template, 18, 4, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, LecturesExamsViewsCountReportComponent_div_34_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](59, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](62, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](65, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, LecturesExamsViewsCountReportComponent_tr_67_Template, 18, 4, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](68, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, LecturesExamsViewsCountReportComponent_div_69_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](85, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](88, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](91, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](94, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](97, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, LecturesExamsViewsCountReportComponent_tr_102_Template, 18, 4, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](103, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, LecturesExamsViewsCountReportComponent_div_104_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](110, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](120, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](123, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](126, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](129, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](132, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](135, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](137, LecturesExamsViewsCountReportComponent_tr_137_Template, 18, 4, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](138, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](139, LecturesExamsViewsCountReportComponent_div_139_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 44, "reports.LecturesSubscriptions"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 46, "labels.LectureName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 48, "reports.NumberOfStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 50, "reports.StudentsAcademy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 52, "reports.NumberOfGuestsStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 54, "reports.Absent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 56, "reports.attendees"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 58, "reports.Guests"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](33, 60, ctx.reportCenterLectureDetails, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](120, _c0, ctx.pCeLec, ctx.totalItemsCeLec)))("ngForTrackBy", ctx.trackCenterLecture);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalItemsCeLec > 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 63, "reports.OfflineSubscriptions"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 65, "labels.LectureName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 67, "reports.NumberOfStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 69, "reports.StudentsAcademy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 71, "reports.NumberOfGuestsStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](59, 73, "reports.Absent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](62, 75, "reports.attendees"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](65, 77, "reports.Guests"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](68, 79, ctx.reportLectureDetails, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](123, _c1, ctx.pLec, ctx.totalItemsLec)))("ngForTrackBy", ctx.trackLecture);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalItemsLec > 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](75, 82, "reports.ExamsSubscriptions"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](82, 84, "labels.ExamNm"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](85, 86, "reports.NumberOfStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](88, 88, "reports.StudentsAcademy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](91, 90, "reports.NumberOfGuestsStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](94, 92, "reports.Absent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](97, 94, "reports.attendees"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](100, 96, "reports.Guests"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](103, 98, ctx.reportExamsDetails, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](126, _c2, ctx.pEx, ctx.totalItemsEx)))("ngForTrackBy", ctx.trackExam);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalItemsEx > 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](110, 101, "reports.QuizsSubscriptions"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](117, 103, "reports.QuizName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](120, 105, "reports.NumberOfStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](123, 107, "reports.StudentsAcademy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](126, 109, "reports.NumberOfGuestsStudents"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](129, 111, "reports.Absent"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](132, 113, "reports.attendees"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](135, 115, "reports.Guests"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](138, 117, ctx.reportQuizsDetails, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](129, _c3, ctx.pQ, ctx.totalItemsQ)))("ngForTrackBy", ctx.trackExam);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalItemsQ > 5);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginatePipe],
  styles: [".rediu[_ngcontent-%COMP%] {\r\n    border-radius: 7px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlY3R1cmVzLWV4YW1zLXZpZXdzLWNvdW50LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJsZWN0dXJlcy1leGFtcy12aWV3cy1jb3VudC1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmVkaXUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH0iXX0= */"]
});

/***/ }),

/***/ 10255:
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/lectures-sales-report/lectures-sales-report.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LecturesSalesReportComponent": function() { return /* binding */ LecturesSalesReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









var LecturesSalesReportComponent = /*#__PURE__*/function () {
  function LecturesSalesReportComponent(reportsService, fb, msg, router, route, datePipe) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LecturesSalesReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.route = route;
    this.datePipe = datePipe;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LecturesSalesReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // console.log("NOW CALL SERVER YA BEH: ", this.reportObj);
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.teacherUserId = this.reportObj.teacherUserId;
      obj.FromDate = this.datePipe.transform(this.reportObj.FromDate, 'yyyy-MM-dd');
      obj.ToDate = this.datePipe.transform(this.reportObj.ToDate, 'yyyy-MM-dd');
      this.reportsService.getLecturesSalesReportExcel(obj).subscribe(function (response) {
        if (response) {
          console.log("report lectures: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank");

          _this.msg.success("Report has been downloaded successfully");
        }
      });
    }
  }]);

  return LecturesSalesReportComponent;
}();

LecturesSalesReportComponent.ɵfac = function LecturesSalesReportComponent_Factory(t) {
  return new (t || LecturesSalesReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};

LecturesSalesReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LecturesSalesReportComponent,
  selectors: [["app-lectures-sales-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 0,
  vars: 0,
  template: function LecturesSalesReportComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWN0dXJlcy1zYWxlcy1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 91839:
/*!************************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/manual-payments-report/manual-payments-report.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualPaymentsReportComponent": function() { return /* binding */ ManualPaymentsReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









var ManualPaymentsReportComponent = /*#__PURE__*/function () {
  function ManualPaymentsReportComponent(reportsService, fb, msg, router, route, datePipe) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ManualPaymentsReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.route = route;
    this.datePipe = datePipe;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ManualPaymentsReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // console.log("NOW CALL SERVER: ", this.reportObj);
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.FromDate = this.datePipe.transform(this.reportObj.FromDate, 'yyyy-MM-dd');
      obj.ToDate = this.datePipe.transform(this.reportObj.ToDate, 'yyyy-MM-dd');
      this.reportsService.getManualPaymentReportExcel(obj).subscribe(function (response) {
        if (response) {
          //  console.log("report lectures: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank");

          _this.msg.success("Report has been downloaded successfully");
        }
      });
    }
  }]);

  return ManualPaymentsReportComponent;
}();

ManualPaymentsReportComponent.ɵfac = function ManualPaymentsReportComponent_Factory(t) {
  return new (t || ManualPaymentsReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};

ManualPaymentsReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ManualPaymentsReportComponent,
  selectors: [["app-manual-payments-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 0,
  vars: 0,
  template: function ManualPaymentsReportComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51YWwtcGF5bWVudHMtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 75197:
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/material-codes-report/material-codes-report.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialCodesReportComponent": function() { return /* binding */ MaterialCodesReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);








var MaterialCodesReportComponent = /*#__PURE__*/function () {
  function MaterialCodesReportComponent(reportsService, fb, msg, router, route) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MaterialCodesReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.route = route;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MaterialCodesReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // console.log("NOW CALL SERVER YA BEH: ", this.reportObj);
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.TeacherId = this.reportObj.teacherUserId;
      this.reportsService.getMaterialCodesReportExcel(obj).subscribe(function (response) {
        if (response) {
          // console.log("report lectures: ", response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank");

          _this.msg.success("Report has been downloaded successfully");
        }
      });
    }
  }]);

  return MaterialCodesReportComponent;
}();

MaterialCodesReportComponent.ɵfac = function MaterialCodesReportComponent_Factory(t) {
  return new (t || MaterialCodesReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};

MaterialCodesReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MaterialCodesReportComponent,
  selectors: [["app-material-codes-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 0,
  vars: 0,
  template: function MaterialCodesReportComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC1jb2Rlcy1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 4565:
/*!********************************************************************************!*\
  !*** ./src/app/admin/pages/reports/report-details/report-details.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDetailsComponent": function() { return /* binding */ ReportDetailsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var app_admin_services_Admin_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/Admin/teacher.service */ 67665);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _lectures_exams_views_count_report_lectures_exams_views_count_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lectures-exams-views-count-report/lectures-exams-views-count-report.component */ 22933);
/* harmony import */ var _students_follow_up_report_students_follow_up_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../students-follow-up-report/students-follow-up-report.component */ 91771);
/* harmony import */ var _manual_payments_report_manual_payments_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manual-payments-report/manual-payments-report.component */ 91839);
/* harmony import */ var _reservation_report_reservation_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reservation-report/reservation-report.component */ 76939);
/* harmony import */ var _financial_summary_report_financial_summary_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../financial-summary-report/financial-summary-report.component */ 50717);
/* harmony import */ var _financial_detailed_report_financial_detailed_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../financial-detailed-report/financial-detailed-report.component */ 57321);
/* harmony import */ var _lectures_sales_report_lectures_sales_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lectures-sales-report/lectures-sales-report.component */ 10255);
/* harmony import */ var _financial_report_financial_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../financial-report/financial-report.component */ 24051);
/* harmony import */ var _material_codes_report_material_codes_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../material-codes-report/material-codes-report.component */ 75197);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






























function ReportDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-lectures-exams-views-count-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r0.obj);
  }
}

function ReportDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-students-follow-up-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r1.obj);
  }
}

function ReportDetailsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-manual-payments-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r2.obj);
  }
}

function ReportDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-reservation-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r3.obj);
  }
}

function ReportDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-financial-summary-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r4.obj);
  }
}

function ReportDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-financial-detailed-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r5.obj);
  }
}

function ReportDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-lectures-sales-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r6.obj);
  }
}

function ReportDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-financial-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r7.obj);
  }
}

function ReportDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-material-codes-report", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reportObj", ctx_r8.obj);
  }
}

function ReportDetailsComponent_div_15_form_4_div_2_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", teacher_r16.teacherUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", teacher_r16.teacher_ar_name, " ");
  }
}

function ReportDetailsComponent_div_15_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ReportDetailsComponent_div_15_form_4_div_2_mat_option_9_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "labels.Teacher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 5, "General.Choose"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r11.teachers);
  }
}

function ReportDetailsComponent_div_15_form_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "mat-datepicker-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "mat-datepicker", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "labels.FromDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matDatepicker", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("for", _r17);
  }
}

function ReportDetailsComponent_div_15_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "mat-datepicker-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "mat-datepicker", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "labels.ToDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matDatepicker", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("for", _r18);
  }
}

function ReportDetailsComponent_div_15_form_4_div_5_mat_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "labels.SearchStudent"));
  }
}

function ReportDetailsComponent_div_15_form_4_div_5_mat_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r20.studentName);
  }
}

function ReportDetailsComponent_div_15_form_4_div_5_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var student_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", student_r23.StudentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", student_r23.StudentName, " ");
  }
}

function ReportDetailsComponent_div_15_form_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ReportDetailsComponent_div_15_form_4_div_5_mat_label_2_Template, 3, 3, "mat-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ReportDetailsComponent_div_15_form_4_div_5_mat_label_3_Template, 2, 1, "mat-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup", function ReportDetailsComponent_div_15_form_4_div_5_Template_input_keyup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return ctx_r24.onStudentSearch();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "mat-autocomplete", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("optionSelected", function ReportDetailsComponent_div_15_form_4_div_5_Template_mat_autocomplete_optionSelected_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return ctx_r26.onSelectStudent($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ReportDetailsComponent_div_15_form_4_div_5_mat_option_7_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](6);

    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.studentName === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.studentName !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matAutocomplete", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r14.students);
  }
}

function ReportDetailsComponent_div_15_form_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ReportDetailsComponent_div_15_form_4_div_2_Template, 10, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ReportDetailsComponent_div_15_form_4_div_3_Template, 9, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ReportDetailsComponent_div_15_form_4_div_4_Template, 9, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ReportDetailsComponent_div_15_form_4_div_5_Template, 8, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r10.myForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r10.reportParamters.IsTeacherParameter);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r10.reportParamters.IsFromDateParameter);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r10.reportParamters.IsFromToParameter);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r10.reportParamters.IsStudentParameter);
  }
}

function ReportDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ReportDetailsComponent_div_15_form_4_Template, 6, 5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportDetailsComponent_div_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r27.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r9.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 2, "General.CreateReport"), " ");
  }
}

var ReportDetailsComponent = /*#__PURE__*/function () {
  function ReportDetailsComponent(reportsService, teacherService, router, route, fb, authserv, msg, generalService) {
    var _this = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReportDetailsComponent);

    this.reportsService = reportsService;
    this.teacherService = teacherService;
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.authserv = authserv;
    this.msg = msg;
    this.generalService = generalService;
    this.reportParamters = {};
    this.centers = [];
    this.teachers = [];
    this.students = [];
    this.obj = {};
    this.isSubmitted = false;
    this.lecturesExamsViewsCountReportMode = false;
    this.studentsFollowUpReportMode = false;
    this.manualPaymentsReportMode = false;
    this.reservationReportMode = false;
    this.financialSummaryReportMode = false;
    this.financialDetailedReportMode = false;
    this.lecturesSalesReportMode = false;
    this.financialReportMode = false;
    this.materialCodesReportMode = false;
    route.paramMap.subscribe(function (param) {
      _this.reportId = param.get("reportId");
    });
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReportDetailsComponent, [{
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
    key: "centerIdCtrl",
    get: function get() {
      return this.myForm.get("centerId");
    }
  }, {
    key: "teacherUserIdCtrl",
    get: function get() {
      return this.myForm.get("teacherUserId");
    }
  }, {
    key: "studentIdCtrl",
    get: function get() {
      return this.myForm.get("studentId");
    }
  }, {
    key: "studentNameCtrl",
    get: function get() {
      return this.myForm.get("studentName");
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.EduCompId = Number(this.authserv.getEduCompId());
      this.studentName = "";
      this.reportsService.getReportParameters(this.reportId).subscribe(function (response) {
        if (response) {
          //  console.log("report paramters: ", response);
          _this2.reportParamters = response;
        }
      });
      this.myForm = this.fb.group({
        fromDate: [null],
        toDate: [null],
        centerId: [null],
        teacherUserId: [null],
        studentId: [null],
        studentName: [null]
      });
      this.getTeachersByEducompId(); //   this.returnEduCompByUser();

      this.centerIdCtrl.setValue(this.EduCompId); // this.onSelectCenter();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;

        _this3.centerIdCtrl.setValue(_this3.EduCompId);
      });
    }
  }, {
    key: "getStudentNameById",
    value: function getStudentNameById(studentId) {
      var _this4 = this;

      this.teacherService.getStudentByID(studentId).subscribe(function (response) {
        if (response) {
          _this4.studentName = response;
          console.log("Student Name: ", _this4.studentName); // this.studentName=response.ar_name;
        }
      });
    }
  }, {
    key: "onSelectStudent",
    value: function onSelectStudent(event) {
      this.studentIdCtrl.setValue(event.option.value);
      this.getStudentNameById(event.option.value);
    }
    /*
    returnEduCompByUser() {
      this.generalService.getEduCompByUser().subscribe((res: any) => {
        // console.log("CENTERS: ", res);
        this.centers = res;
      });
    }
        onSelectCenter() {
      let obj = {} as ICenterIdsSearchModel;
      obj.CenterIds = [];
      obj.CenterIds.push(this.centerIdCtrl?.value);
          if (this.reportParamters.IsTeacherParameter) {
        this.reportsService
          .getTeachersByCenters<ICenterIdsSearchModel, ITeacherDropModel[]>(obj)
          .subscribe((response) => {
            if (response) {
              //   console.log("TEACHERS: ", response);
              this.teachers = response;
            }
          });
      }
    }
    */

  }, {
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId() {
      var _this5 = this;

      this.generalService.getTeachersByEducompId(this.EduCompId).subscribe(function (res) {
        var _a;

        _this5.teachers = res.lstTeachers;

        _this5.teacherUserIdCtrl.setValue((_a = res.lstTeachers[0]) === null || _a === void 0 ? void 0 : _a.teacherUserId);
      });
    }
  }, {
    key: "onSelectTeacher",
    value: function onSelectTeacher() {
      var _a;

      this.obj.teacherUserId = (_a = this.teacherUserIdCtrl) === null || _a === void 0 ? void 0 : _a.value;
    }
  }, {
    key: "onStudentSearch",
    value: function onStudentSearch() {
      var _this6 = this;

      var _a, _b;

      var obj = {};
      obj.CenterIds = [];
      obj.CenterIds.push((_a = this.centerIdCtrl) === null || _a === void 0 ? void 0 : _a.value);
      obj.Search = (_b = this.studentNameCtrl) === null || _b === void 0 ? void 0 : _b.value; // if (!this.studentNameCtrl?.value) {
      //   this.msg.warning("يرجي البحث بإسم او رقم هاتف او البريد الإلكتروني للطالب");
      //   return;
      // }

      if (this.reportParamters.IsStudentParameter) {
        this.reportsService.getStudentsByCenters(obj).subscribe(function (response) {
          if (response) {
            //  console.log("STUDENTS: ", response);
            _this6.students = response;
          }
        });
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this7 = this;

      var _a, _b, _c, _d, _e, _f, _g, _h;

      if (this.myForm.valid) {
        this.obj.ReportId = this.reportId;
        this.obj.FromDate = (_a = this.fromDateCtrl) === null || _a === void 0 ? void 0 : _a.value;
        this.obj.ToDate = (_b = this.toDateCtrl) === null || _b === void 0 ? void 0 : _b.value;
        this.obj.CenterIds = [];
        this.obj.CenterIds.push((_c = this.centerIdCtrl) === null || _c === void 0 ? void 0 : _c.value);
        this.obj.teacherUserId = (_d = this.teacherUserIdCtrl) === null || _d === void 0 ? void 0 : _d.value;
        this.obj.StudentId = (_e = this.studentIdCtrl) === null || _e === void 0 ? void 0 : _e.value;
        console.log("onSubmit", this.obj); //#1) lecturesExamsViewsCountReport

        if (this.reportId == 3) {
          this.lecturesExamsViewsCountReportMode = true;
        } //#2) StudentsFollowUpReport
        else if (this.reportId == 1) {
          if (!((_f = this.centerIdCtrl) === null || _f === void 0 ? void 0 : _f.value)) {
            this.msg.warning("برجاء إختيار المركز");
            return;
          }

          if (!((_g = this.teacherUserIdCtrl) === null || _g === void 0 ? void 0 : _g.value)) {
            this.msg.warning("برجاء إختيار المدرس");
            return;
          } else {
            this.teacherService.getTeacherByID(this.teacherUserIdCtrl.value).subscribe(function (response) {
              if (response) {
                console.log("Teacher Name: ", response);
                _this7.reportParamters.ReportNameAr = _this7.reportParamters.ReportNameAr + "/" + response;
              }
            });
          }

          if (!((_h = this.studentIdCtrl) === null || _h === void 0 ? void 0 : _h.value)) {
            this.msg.warning("يرجي اخيار طالب حيث يمكنك عرض الطلاب من خلال بإستخدام زر البحث");
            return;
          }

          this.studentsFollowUpReportMode = true;
        } //#3) ManualPaymentsReport
        else if (this.reportId == 12) {
          this.manualPaymentsReportMode = true;
        } //#4) ReservationReport
        else if (this.reportId == 13) {
          this.reservationReportMode = true;
        } //#5) FinancialSummaryReport
        else if (this.reportId == 16) {
          this.financialSummaryReportMode = true;
        } //#6) FinancialDetailedReport
        else if (this.reportId == 17) {
          this.financialDetailedReportMode = true;
        } //#7) LecturesSalesReport
        else if (this.reportId == 4) {
          this.lecturesSalesReportMode = true;
        } //#8) FinancialReport
        else if (this.reportId == 6) {
          this.financialReportMode = true;
        } //#9) MaterialCodesReport
        else if (this.reportId == 10) {
          this.materialCodesReportMode = true;
        }

        this.isSubmitted = true;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.studentName = "";
      window.location.reload();
    }
  }]);

  return ReportDetailsComponent;
}();

ReportDetailsComponent.ɵfac = function ReportDetailsComponent_Factory(t) {
  return new (t || ReportDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_admin_services_Admin_teacher_service__WEBPACK_IMPORTED_MODULE_3__.TeacherService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService));
};

ReportDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ReportDetailsComponent,
  selectors: [["app-report-details"]],
  decls: 16,
  vars: 11,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header", "primary"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "click"], ["class", "form-conainer", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "form-conainer"], [1, "modal-body"], [3, "reportObj"], ["class", "form-conainer", 3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "form-conainer", 3, "formGroup"], ["class", "col-md-4 col-12", 4, "ngIf"], [1, "col-md-4", "col-12"], ["appearance", "legacy"], ["formControlName", "teacherUserId"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker"], ["toDate", ""], [4, "ngIf"], ["type", "text", "placeholder", "\u0627\u062F\u062E\u0644 \u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0648 \u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644", "matInput", "", "formControlName", "studentName", 3, "matAutocomplete", "keyup"], ["autoActiveFirstOption", "", 3, "optionSelected"], ["auto", "matAutocomplete"]],
  template: function ReportDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportDetailsComponent_Template_button_click_4_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ReportDetailsComponent_div_6_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ReportDetailsComponent_div_7_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ReportDetailsComponent_div_8_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ReportDetailsComponent_div_9_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, ReportDetailsComponent_div_10_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, ReportDetailsComponent_div_11_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, ReportDetailsComponent_div_12_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, ReportDetailsComponent_div_13_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, ReportDetailsComponent_div_14_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, ReportDetailsComponent_div_15_Template, 9, 4, "div", 5);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.reportParamters.ReportNameAr, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.lecturesExamsViewsCountReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.studentsFollowUpReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.manualPaymentsReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.reservationReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.financialSummaryReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.financialDetailedReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.lecturesSalesReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.financialReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.materialCodesReportMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isSubmitted);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _lectures_exams_views_count_report_lectures_exams_views_count_report_component__WEBPACK_IMPORTED_MODULE_6__.LecturesExamsViewsCountReportComponent, _students_follow_up_report_students_follow_up_report_component__WEBPACK_IMPORTED_MODULE_7__.StudentsFollowUpReportComponent, _manual_payments_report_manual_payments_report_component__WEBPACK_IMPORTED_MODULE_8__.ManualPaymentsReportComponent, _reservation_report_reservation_report_component__WEBPACK_IMPORTED_MODULE_9__.ReservationReportComponent, _financial_summary_report_financial_summary_report_component__WEBPACK_IMPORTED_MODULE_10__.FinancialSummaryReportComponent, _financial_detailed_report_financial_detailed_report_component__WEBPACK_IMPORTED_MODULE_11__.FinancialDetailedReportComponent, _lectures_sales_report_lectures_sales_report_component__WEBPACK_IMPORTED_MODULE_12__.LecturesSalesReportComponent, _financial_report_financial_report_component__WEBPACK_IMPORTED_MODULE_13__.FinancialReportComponent, _material_codes_report_material_codes_report_component__WEBPACK_IMPORTED_MODULE_14__.MaterialCodesReportComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepicker, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocomplete],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 27976:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/reports/report-index/reports-index.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsIndexComponent": function() { return /* binding */ ReportsIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);









var _c0 = function _c0(a1) {
  return ["/dashboard/reports/report-details/", a1];
};

function ReportsIndexComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var report_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, report_r1.ReportId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", report_r1.ReportNameAr, " ");
  }
}

var ReportsIndexComponent = /*#__PURE__*/function () {
  function ReportsIndexComponent(reportsService, router, route) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReportsIndexComponent);

    this.reportsService = reportsService;
    this.router = router;
    this.route = route;
    this.reports = [];
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReportsIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.reportsService.getAllReportsIndex().subscribe(function (response) {
        if (response) {
          //  console.log("reports: ", response);
          _this.reports = response;
        }
      });
    }
  }, {
    key: "onClick",
    value: function onClick(report) {
      this.router.navigateByUrl("/dashboard/report-details/" + report.ReportId);
    }
  }]);

  return ReportsIndexComponent;
}();

ReportsIndexComponent.ɵfac = function ReportsIndexComponent_Factory(t) {
  return new (t || ReportsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};

ReportsIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReportsIndexComponent,
  selectors: [["app-reports-index"]],
  decls: 9,
  vars: 4,
  consts: [[1, "row"], [1, "col-12"], ["class", "col-md-4 col-12", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12"], ["target", "_blank", 1, "media-body", "text-left", 3, "routerLink"], [1, "card", "card-inverse", "bg-info"], [1, "media"], [1, "card-text"]],
  template: function ReportsIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ReportsIndexComponent_div_8_Template, 8, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, "Navbar.Reports"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.reports);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".reportw.widget_categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-family: Droid !important;\r\n    font-size: 16px;\r\n    color: #666;\r\n    background-color: #fff;\r\n    padding: 20px 15px;\r\n    margin-bottom: 25px;\r\n    line-height: 1.6em;\r\n    border-radius: 5px;\r\n}\r\n\r\n.reportw.widget_categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ef4036;\r\n    color: #FFF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMtaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2YiLCJmaWxlIjoicmVwb3J0cy1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yZXBvcnR3LndpZGdldF9jYXRlZ29yaWVzIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogRHJvaWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yZXBvcnR3LndpZGdldF9jYXRlZ29yaWVzIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDAzNjtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59Il19 */"]
});

/***/ }),

/***/ 94092:
/*!***************************************************************!*\
  !*** ./src/app/admin/pages/reports/reports-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsRoutingModule": function() { return /* binding */ ReportsRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-details/report-details.component */ 4565);
/* harmony import */ var _report_index_reports_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-index/reports-index.component */ 27976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var routes = [{
  path: "",
  redirectTo: "index",
  pathMatch: "full"
}, {
  path: "index",
  component: _report_index_reports_index_component__WEBPACK_IMPORTED_MODULE_3__.ReportsIndexComponent
}, {
  path: "report-details/:reportId",
  component: _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_2__.ReportDetailsComponent
}];
var ReportsRoutingModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ReportsRoutingModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReportsRoutingModule);
});

ReportsRoutingModule.ɵfac = function ReportsRoutingModule_Factory(t) {
  return new (t || ReportsRoutingModule)();
};

ReportsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ReportsRoutingModule
});
ReportsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReportsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 80190:
/*!*******************************************************!*\
  !*** ./src/app/admin/pages/reports/reports.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": function() { return /* binding */ ReportsModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/material/material.module */ 793);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ 94092);
/* harmony import */ var _financial_detailed_report_financial_detailed_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./financial-detailed-report/financial-detailed-report.component */ 57321);
/* harmony import */ var _financial_report_financial_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financial-report/financial-report.component */ 24051);
/* harmony import */ var _financial_summary_report_financial_summary_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./financial-summary-report/financial-summary-report.component */ 50717);
/* harmony import */ var _lectures_exams_views_count_report_lectures_exams_views_count_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lectures-exams-views-count-report/lectures-exams-views-count-report.component */ 22933);
/* harmony import */ var _lectures_sales_report_lectures_sales_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lectures-sales-report/lectures-sales-report.component */ 10255);
/* harmony import */ var _manual_payments_report_manual_payments_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manual-payments-report/manual-payments-report.component */ 91839);
/* harmony import */ var _material_codes_report_material_codes_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-codes-report/material-codes-report.component */ 75197);
/* harmony import */ var _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report-details/report-details.component */ 4565);
/* harmony import */ var _report_index_reports_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report-index/reports-index.component */ 27976);
/* harmony import */ var _reservation_report_reservation_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reservation-report/reservation-report.component */ 76939);
/* harmony import */ var _students_follow_up_report_students_follow_up_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./students-follow-up-report/students-follow-up-report.component */ 91771);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);




















var ReportsModule = /*#__PURE__*/(0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ReportsModule() {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReportsModule);
});

ReportsModule.ɵfac = function ReportsModule_Factory(t) {
  return new (t || ReportsModule)();
};

ReportsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: ReportsModule
});
ReportsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__.ReportsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_19__.NgxPaginationModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ReportsModule, {
    declarations: [_report_index_reports_index_component__WEBPACK_IMPORTED_MODULE_12__.ReportsIndexComponent, _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_11__.ReportDetailsComponent, _lectures_exams_views_count_report_lectures_exams_views_count_report_component__WEBPACK_IMPORTED_MODULE_7__.LecturesExamsViewsCountReportComponent, _students_follow_up_report_students_follow_up_report_component__WEBPACK_IMPORTED_MODULE_14__.StudentsFollowUpReportComponent, _manual_payments_report_manual_payments_report_component__WEBPACK_IMPORTED_MODULE_9__.ManualPaymentsReportComponent, _reservation_report_reservation_report_component__WEBPACK_IMPORTED_MODULE_13__.ReservationReportComponent, _financial_summary_report_financial_summary_report_component__WEBPACK_IMPORTED_MODULE_6__.FinancialSummaryReportComponent, _financial_detailed_report_financial_detailed_report_component__WEBPACK_IMPORTED_MODULE_4__.FinancialDetailedReportComponent, _lectures_sales_report_lectures_sales_report_component__WEBPACK_IMPORTED_MODULE_8__.LecturesSalesReportComponent, _financial_report_financial_report_component__WEBPACK_IMPORTED_MODULE_5__.FinancialReportComponent, _material_codes_report_material_codes_report_component__WEBPACK_IMPORTED_MODULE_10__.MaterialCodesReportComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__.ReportsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_19__.NgxPaginationModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
  });
})();

/***/ }),

/***/ 76939:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/reservation-report/reservation-report.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationReportComponent": function() { return /* binding */ ReservationReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);









var ReservationReportComponent = /*#__PURE__*/function () {
  function ReservationReportComponent(reportsService, fb, msg, router, spinner, route) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReservationReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.msg = msg;
    this.router = router;
    this.spinner = spinner;
    this.route = route;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReservationReportComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      //console.log('NOW CALL SERVER YA BEH: ', this.reportObj);
      this.spinner.show();
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds[0];
      obj.teacherUserId = this.reportObj.teacherUserId;
      this.reportsService.getReservationReportExcel(obj).subscribe(function (response) {
        if (response === null || response === void 0 ? void 0 : response.path) {
          // console.log('report lectures: ', response);
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL.replace("/api/", "") + response.path, "_blank");

          _this.msg.success("Report has been downloaded successfully");
        } else _this.msg.warning(response);

        _this.spinner.hide();
      });
    }
  }]);

  return ReservationReportComponent;
}();

ReservationReportComponent.ɵfac = function ReservationReportComponent_Factory(t) {
  return new (t || ReservationReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};

ReservationReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ReservationReportComponent,
  selectors: [["app-reservation-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 0,
  vars: 0,
  template: function ReservationReportComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZhdGlvbi1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 91771:
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/pages/reports/students-follow-up-report/students-follow-up-report.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsFollowUpReportComponent": function() { return /* binding */ StudentsFollowUpReportComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/admin/services/reports/reports.service */ 53261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 27043);













function StudentsFollowUpReportComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var exam_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r2.MaterialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r2.PurchaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r2.ViewsNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r2.LastViewDate);
  }
}

function StudentsFollowUpReportComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lec_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](lec_r4.ExamName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](lec_r4.ExamGrade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](lec_r4.StudentGrade);
  }
}

var _c0 = function _c0(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "sam"
  };
};

var _c1 = function _c1() {
  return [5];
};

var _c2 = function _c2(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "samy"
  };
};

var StudentsFollowUpReportComponent = /*#__PURE__*/function () {
  function StudentsFollowUpReportComponent(reportsService, fb, authserv, msg) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentsFollowUpReportComponent);

    this.reportsService = reportsService;
    this.fb = fb;
    this.authserv = authserv;
    this.msg = msg;
    this.pEx = 1;
    this.maxSizeEx = 5;
    this.reportExamStudentDetails = [];
    this.pMat = 1;
    this.maxSizeMat = 5;
    this.reportMaterialStudentDetails = [];
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentsFollowUpReportComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this.EduCompId = e.EduCompId;
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      console.log("NOW CALL SERVER YA BEH: ", this.reportObj);
      this.EduCompId = this.authserv.getEduCompId();
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.TeacherUserId = this.reportObj.teacherUserId;
      obj.StudentUserId = this.reportObj.StudentId;
      console.log("obj From Report", obj);
      this.reportsService.examStudentNameReport(obj).subscribe(function (response) {
        if (response) {
          console.log("report student name: ", response);
          _this2.studentName = response.StudentName;
        }
      }, function (error) {
        console.log("ERROR: ", error);
      });
      this.getReportExamStudentDetails(1);
      this.getReportMaterialStudentDetails(1);
    }
  }, {
    key: "getReportExamStudentDetails",
    value: function getReportExamStudentDetails(pageNumber) {
      var _this3 = this;

      this.pEx = pageNumber;
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.StudentUserId = this.reportObj.StudentId;
      obj.TeacherUserId = this.reportObj.teacherUserId;
      obj.Page = pageNumber;
      obj.EduCompId = this.EduCompId;
      this.reportsService.examStudentReport(obj).subscribe(function (response) {
        if (response) {
          console.log("report exam: ", response);
          _this3.reportExamStudentDetails = response.data;
          _this3.totalItemsEx = response.totalItems;
        }
      }, function (error) {
        console.log("ERROR: ", error);
      });
    }
  }, {
    key: "trackExam",
    value: function trackExam(index, el) {
      return el.MaterialName;
    }
  }, {
    key: "getReportMaterialStudentDetails",
    value: function getReportMaterialStudentDetails(pageNumber) {
      var _this4 = this;

      console.log("Hello world");
      this.pMat = pageNumber;
      var obj = {};
      obj.CenterIds = this.reportObj.CenterIds;
      obj.StudentUserId = this.reportObj.StudentId;
      obj.TeacherUserId = this.reportObj.teacherUserId;
      obj.EduCompId = this.EduCompId;
      obj.Page = pageNumber;
      this.reportsService.materialStudenReport(obj).subscribe(function (response) {
        if (response) {
          console.log("report material: ", response);
          _this4.reportMaterialStudentDetails = response.data;
          _this4.totalItemsMat = response.totalItems;
        }
      }, function (error) {
        console.log("ERROR: ", error);
      });
    }
  }, {
    key: "trackMaterial",
    value: function trackMaterial(index, el) {
      return el.MaterialName;
    }
  }]);

  return StudentsFollowUpReportComponent;
}();

StudentsFollowUpReportComponent.ɵfac = function StudentsFollowUpReportComponent_Factory(t) {
  return new (t || StudentsFollowUpReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_admin_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
};

StudentsFollowUpReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StudentsFollowUpReportComponent,
  selectors: [["app-students-follow-up-report"]],
  inputs: {
    reportObj: "reportObj"
  },
  decls: 54,
  vars: 55,
  consts: [[1, "row"], [1, "col-12"], [1, "content-header", "primary"], [1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"]],
  template: function StudentsFollowUpReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, StudentsFollowUpReportComponent_tr_28_Template, 9, 4, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-paginator", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function StudentsFollowUpReportComponent_Template_mat_paginator_page_30_listener($event) {
        return ctx.getReportMaterialStudentDetails($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, StudentsFollowUpReportComponent_tr_51_Template, 7, 3, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-paginator", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function StudentsFollowUpReportComponent_Template_mat_paginator_page_53_listener($event) {
        return ctx.getReportExamStudentDetails($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 21, "labels.Student"), " : ", ctx.studentName !== null ? ctx.studentName : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 23, "Material.Lectures"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 25, "labels.LectureName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 27, "labels.buyDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 29, "labels.NumberViews"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 31, "labels.LastViewDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](29, 33, ctx.reportMaterialStudentDetails, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](47, _c0, ctx.pMat, ctx.totalItemsMat)))("ngForTrackBy", ctx.trackMaterial);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](50, _c1))("length", ctx.totalItemsMat)("pageSize", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 36, "Navbar.Exams"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 38, "labels.Exam"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 40, "labels.TotalMark"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 42, "labels.StudentMark"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](52, 44, ctx.reportExamStudentDetails, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](51, _c2, ctx.pEx, ctx.totalItemsEx)))("ngForTrackBy", ctx.trackExam);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](54, _c1))("length", ctx.totalItemsEx)("pageSize", 5);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50cy1mb2xsb3ctdXAtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 53261:
/*!***********************************************************!*\
  !*** ./src/app/admin/services/reports/reports.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsService": function() { return /* binding */ ReportsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var ReportsService = /*#__PURE__*/function () {
  function ReportsService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReportsService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReportsService, [{
    key: "getAllReportsIndex",
    value: function getAllReportsIndex() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-all-reports-index");
    }
  }, {
    key: "getReportParameters",
    value: function getReportParameters(reportId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-report-paramters/").concat(reportId));
    }
  }, {
    key: "getTeachersByCenters",
    value: function getTeachersByCenters(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-teachers-by-centers"), obj);
    }
  }, {
    key: "getStudentsByCenters",
    value: function getStudentsByCenters(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-students-by-centers", obj);
    } // -----------------------------------------------------

  }, {
    key: "lecturesExamsViewsCountLectureReport",
    value: function lecturesExamsViewsCountLectureReport(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-lectures-exams-views-count-lecture", obj);
    }
  }, {
    key: "lecturesExamsViewsCountExamReport",
    value: function lecturesExamsViewsCountExamReport(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-lectures-exams-views-count-exam"), obj);
    }
  }, {
    key: "lecturesExamsViewsCountQuizReport",
    value: function lecturesExamsViewsCountQuizReport(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-lectures-exams-views-count-quiz"), obj);
    }
  }, {
    key: "lecturesExamsViewsCountCenterLectureReport",
    value: function lecturesExamsViewsCountCenterLectureReport(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-lectures-exams-views-count--center-lecture"), obj);
    }
  }, {
    key: "lecturesExamsViewsCountLiveLectureReport",
    value: function lecturesExamsViewsCountLiveLectureReport(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-lectures-exams-views-count-live-lecture", obj);
    }
  }, {
    key: "getStudentAbsenceReportExcel",
    value: function getStudentAbsenceReportExcel(selectId, eduCompId, typeId, teacherUserId) {
      return this.http.get("".concat("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-student-absence-report-excel"), "/", selectId, "/").concat(eduCompId, "/").concat(typeId, "/").concat(teacherUserId));
    }
  }, {
    key: "getStudentPresentReportExcel",
    value: function getStudentPresentReportExcel(selectId, eduCompId, typeId, teacherUserId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-student-present-report-excel/").concat(selectId, "/").concat(eduCompId, "/").concat(typeId, "/").concat(teacherUserId));
    }
  }, {
    key: "getGuestStudentPresentReportExcel",
    value: function getGuestStudentPresentReportExcel(selectId, eduCompId, typeId, teacherUserId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-student-guest-present-report-excel/").concat(selectId, "/").concat(eduCompId, "/").concat(typeId, "/").concat(teacherUserId));
    } // -----------------------------------------------------

  }, {
    key: "examStudentNameReport",
    value: function examStudentNameReport(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-exam-student-name", obj);
    }
  }, {
    key: "examStudentReport",
    value: function examStudentReport(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-exam-student-lecture", obj);
    }
  }, {
    key: "materialStudenReport",
    value: function materialStudenReport(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-material-student-lecture", obj);
    } // -----------------------------------------------------

  }, {
    key: "getManualPaymentReportExcel",
    value: function getManualPaymentReportExcel(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-manual-payment-report-excel", obj);
    } // -----------------------------------------------------

  }, {
    key: "getReservationReportExcel",
    value: function getReservationReportExcel(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-reservation-report-excel", obj);
    } // -----------------------------------------------------

  }, {
    key: "getFinancialSummaryReportExcel",
    value: function getFinancialSummaryReportExcel(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-financial-summary-report-excel", obj);
    } // -----------------------------------------------------

  }, {
    key: "getFinancialDetailsReportExcel",
    value: function getFinancialDetailsReportExcel(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-financial-details-report-excel", obj);
    } // -----------------------------------------------------

  }, {
    key: "getLecturesSalesReportExcel",
    value: function getLecturesSalesReportExcel(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-lecture-sales-report-excel", obj);
    } // -----------------------------------------------------

  }, {
    key: "getFinancialReportExcel",
    value: function getFinancialReportExcel(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-financial-report-excel", obj);
    } // -----------------------------------------------------

  }, {
    key: "getMaterialCodesReportExcel",
    value: function getMaterialCodesReportExcel(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/get-material-codes-report-excel", obj);
    }
  }]);

  return ReportsService;
}();

ReportsService.ɵfac = function ReportsService_Factory(t) {
  return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ReportsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ReportsService,
  factory: ReportsService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_reports_reports_module_ts.js.map