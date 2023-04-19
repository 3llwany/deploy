"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["common"],{

/***/ 1621:
/*!**************************************************************!*\
  !*** ./src/app/admin/services/Admin/announcement.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementService": function() { return /* binding */ AnnouncementService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var AnnouncementService = /*#__PURE__*/function () {
  function AnnouncementService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnnouncementService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AnnouncementService, [{
    key: "addAnnouncement",
    value: function addAnnouncement(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/AddAnnouncement", data);
    }
  }, {
    key: "getAnnounceById",
    value: function getAnnounceById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Announcement/get-announce-by-Id/").concat(id));
    }
  }, {
    key: "getAnnouncements",
    value: function getAnnouncements(teacherUserID) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Announcement/GetAnnouncement/").concat(teacherUserID));
    }
  }, {
    key: "getAllAnnouncements",
    value: function getAllAnnouncements(teacherUserID) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Announcement/GetAllAnnouncement/").concat(teacherUserID));
    }
  }]);

  return AnnouncementService;
}();

AnnouncementService.ɵfac = function AnnouncementService_Factory(t) {
  return new (t || AnnouncementService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

AnnouncementService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AnnouncementService,
  factory: AnnouncementService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 71511:
/*!****************************************************************!*\
  !*** ./src/app/admin/services/Admin/course-request.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseRequestService": function() { return /* binding */ CourseRequestService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var CourseRequestService = /*#__PURE__*/function () {
  function CourseRequestService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseRequestService);

    this.http = http;
  } // employee request


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseRequestService, [{
    key: "getAllCourses",
    value: function getAllCourses() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CourseRequest/getAllCourses"));
    }
  }, {
    key: "addCourseRequest",
    value: function addCourseRequest(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CourseRequest/addCourseRequest"), obj);
    }
  }, {
    key: "getAllUserRequests",
    value: function getAllUserRequests(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CourseRequest/getAllUserRequests/").concat(page));
    }
  }, {
    key: "deleteRequest",
    value: function deleteRequest(request) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/CourseRequest/deleteRequest/").concat(request.id));
    } // admin 

  }, {
    key: "getAllRequest",
    value: function getAllRequest(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/CourseRequest/getAllRequests"), obj);
    }
  }, {
    key: "ApproveRequest",
    value: function ApproveRequest(id, status) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/CourseRequest/ApproveReQuest/").concat(id, "/").concat(status));
    }
  }]);

  return CourseRequestService;
}();

CourseRequestService.ɵfac = function CourseRequestService_Factory(t) {
  return new (t || CourseRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

CourseRequestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CourseRequestService,
  factory: CourseRequestService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 72625:
/*!****************************************************************!*\
  !*** ./src/app/admin/services/Admin/generate-codes.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCodesService": function() { return /* binding */ GenerateCodesService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var GenerateCodesService = /*#__PURE__*/function () {
  function GenerateCodesService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GenerateCodesService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GenerateCodesService, [{
    key: "GenerateCodes",
    value: function GenerateCodes(EduCompId, data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/GenerateCodes/" + EduCompId, data);
    }
  }, {
    key: "searchCodes",
    value: function searchCodes(code, counter) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/MaterialCodes/" + code + "/" + counter);
    }
  }, {
    key: "GenerateBalanceCodes",
    value: function GenerateBalanceCodes(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/GenerateCustomBalanceCodes", data);
    }
  }, {
    key: "applyBalanceCode",
    value: function applyBalanceCode(code) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/applyCustomBalanceCode/" + code, null);
    }
  }]);

  return GenerateCodesService;
}();

GenerateCodesService.ɵfac = function GenerateCodesService_Factory(t) {
  return new (t || GenerateCodesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

GenerateCodesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GenerateCodesService,
  factory: GenerateCodesService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 94008:
/*!*************************************************************!*\
  !*** ./src/app/admin/services/Admin/reservation.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationService": function() { return /* binding */ ReservationService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var ReservationService = /*#__PURE__*/function () {
  function ReservationService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReservationService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReservationService, [{
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
    value: function getAvailableGroups(teacherId, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Reservations/returnAvailableStudyingGroupsByTeacherId/").concat(teacherId, "/").concat(EduCompId));
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

/***/ 15111:
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/auth/Guards/auth/pending-changes.guard.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingChangesGuard": function() { return /* binding */ PendingChangesGuard; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var PendingChangesGuard = /*#__PURE__*/function () {
  function PendingChangesGuard() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PendingChangesGuard);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PendingChangesGuard, [{
    key: "canDeactivate",
    value: function canDeactivate(component) {
      if (!component.canDeactivate()) {
        if (confirm("You have unsaved changes! If you leave, your changes will be lost.")) {
          return true;
        } else {
          return false;
        }
      }

      return true; // if there are no pending changes, just allow deactivation; else confirm first
      // return component.canDeactivate()
      //   ? true
      //   : confirm(
      //       "WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes."
      //     );
    }
  }]);

  return PendingChangesGuard;
}();

PendingChangesGuard.ɵfac = function PendingChangesGuard_Factory(t) {
  return new (t || PendingChangesGuard)();
};

PendingChangesGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PendingChangesGuard,
  factory: PendingChangesGuard.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 89778:
/*!***************************************************!*\
  !*** ./src/app/shared/validators/date.adapter.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_DATE_FORMATS": function() { return /* binding */ APP_DATE_FORMATS; },
/* harmony export */   "AppDateAdapter": function() { return /* binding */ AppDateAdapter; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






var AppDateAdapter = /*#__PURE__*/function (_NativeDateAdapter) {
  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppDateAdapter, _NativeDateAdapter);

  var _super = (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AppDateAdapter);

  function AppDateAdapter() {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppDateAdapter);

    return _super.apply(this, arguments);
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppDateAdapter, [{
    key: "parse",
    value: function parse(value) {
      if (typeof value === "string" && value.indexOf("/") > -1) {
        var str = value.split("/");
        var year = Number(str[2]);
        var month = Number(str[1]) - 1;
        var date = Number(str[0]);
        return new Date(year, month, date);
      }

      var timestamp = typeof value === "number" ? value : Date.parse(value);
      return isNaN(timestamp) ? null : new Date(timestamp);
    }
  }, {
    key: "format",
    value: function format(date, displayFormat) {
      if (displayFormat == "input") {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return this._to2digit(day) + "/" + this._to2digit(month) + "/" + year;
      } else if (displayFormat == "inputMonth") {
        var _month = date.getMonth() + 1;

        var _year = date.getFullYear();

        return this._to2digit(_month) + "/" + _year;
      } else {
        return date.toDateString();
      }
    }
  }, {
    key: "_to2digit",
    value: function _to2digit(n) {
      return ("00" + n).slice(-2);
    }
  }]);

  return AppDateAdapter;
}(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.NativeDateAdapter);

AppDateAdapter.ɵfac = /*@__PURE__*/function () {
  var ɵAppDateAdapter_BaseFactory;
  return function AppDateAdapter_Factory(t) {
    return (ɵAppDateAdapter_BaseFactory || (ɵAppDateAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](AppDateAdapter)))(t || AppDateAdapter);
  };
}();

AppDateAdapter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AppDateAdapter,
  factory: AppDateAdapter.ɵfac,
  providedIn: "root"
});
var APP_DATE_FORMATS = {
  parse: {
    dateInput: {
      month: "short",
      year: "numeric",
      day: "numeric"
    }
  },
  display: {
    // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    dateInput: "input",
    // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
    monthYearLabel: "inputMonth",
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};

/***/ }),

/***/ 76273:
/*!********************************************************!*\
  !*** ./src/app/student/services/AskTeacher.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AskTeacherService": function() { return /* binding */ AskTeacherService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var AskTeacherService = /*#__PURE__*/function () {
  function AskTeacherService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AskTeacherService);

    this.http = http;
  } // Return askTeacher Data


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AskTeacherService, [{
    key: "askTeacher",
    value: function askTeacher(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/askTeacher/" + id);
    }
  }, {
    key: "getOpenedMsgs",
    value: function getOpenedMsgs(page, TeacherSubId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnUserThreads/").concat(page, "/").concat(TeacherSubId, "/true"));
    }
  }, {
    key: "getClosedMsgs",
    value: function getClosedMsgs(page, TeacherSubId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnUserThreads/").concat(page, "/").concat(TeacherSubId, "/false"));
    } // Return Messages And replayes in msg

  }, {
    key: "getMsgReplaies",
    value: function getMsgReplaies(msgId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnUserThread/" + msgId);
    } // Create New Messages

  }, {
    key: "createNewMsg",
    value: function createNewMsg(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/StartThread", data);
    } //Replay to Msg

  }, {
    key: "SendMessage",
    value: function SendMessage(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/SendMessage", data);
    }
  }, {
    key: "getTeacherSubjectIds",
    value: function getTeacherSubjectIds() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnTeacherSubjectIdsForAssistant");
    } // Return Teacher Opend Msgs

  }, {
    key: "getTeacherOpenedClosedMsgs",
    value: function getTeacherOpenedClosedMsgs(p, isOpened, TeacherSubjectIds) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnUserThreadsForAssistant/").concat(p, "/").concat(isOpened), TeacherSubjectIds);
    }
  }, {
    key: "closeMsg",
    value: function closeMsg(msgId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/CloseThread/").concat(msgId), null);
    }
  }, {
    key: "removeReply",
    value: function removeReply(msgId) {
      return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/RemoveReply/" + msgId);
    } // Return Teacher Messages And replayes in msg

  }, {
    key: "getTeacherMsgReplaies",
    value: function getTeacherMsgReplaies(msgId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/returnUserThreadForAssistant/" + msgId);
    }
  }]);

  return AskTeacherService;
}();

AskTeacherService.ɵfac = function AskTeacherService_Factory(t) {
  return new (t || AskTeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

AskTeacherService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AskTeacherService,
  factory: AskTeacherService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=common.js.map