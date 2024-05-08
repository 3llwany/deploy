"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["default-src_app_admin_services_Admin_announcement_service_ts-src_app_admin_services_Admin_edu-12da75"],{

/***/ 1621:
/*!**************************************************************!*\
  !*** ./src/app/admin/services/Admin/announcement.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementService": function() { return /* binding */ AnnouncementService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var AnnouncementService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AnnouncementService, _AppClientService);

  var _super = (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AnnouncementService);

  function AnnouncementService(http) {
    var _this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnnouncementService);

    _this = _super.call(this, http);
    _this.http = http;
    return _this;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AnnouncementService, [{
    key: "addAnnouncement",
    value: function addAnnouncement(data) {
      return this.post("AJAX/AddAnnouncement", data);
    }
  }, {
    key: "getAnnounceById",
    value: function getAnnounceById(id) {
      return this.get("Announcement/get-announce-by-Id/".concat(id));
    }
  }, {
    key: "getAnnouncements",
    value: function getAnnouncements(teacherUserID) {
      return this.get("Announcement/GetAnnouncement/".concat(teacherUserID));
    }
  }, {
    key: "getAllAnnouncements",
    value: function getAllAnnouncements(teacherUserID) {
      return this.get("Announcement/GetAllAnnouncement/".concat(teacherUserID));
    }
  }]);

  return AnnouncementService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

AnnouncementService.ɵfac = function AnnouncementService_Factory(t) {
  return new (t || AnnouncementService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

AnnouncementService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AnnouncementService,
  factory: AnnouncementService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 56471:
/*!*************************************************************!*\
  !*** ./src/app/admin/services/Admin/educational.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalService": function() { return /* binding */ EducationalService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var EducationalService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EducationalService, _AppClientService);

  var _super = (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(EducationalService);

  function EducationalService(http) {
    var _this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EducationalService);

    _this = _super.call(this, http);
    _this.http = http;
    _this.matBySbjectURL = "codes/returnMaterialsByMainSubjectTeacherId/";
    return _this;
  } //Get Educational Entities


  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EducationalService, [{
    key: "getEducationalEntities",
    value: function getEducationalEntities() {
      return this.get("Admin/getEducationalEntities");
    } //Add New Educational Entities

  }, {
    key: "addNewEducationalEntity",
    value: function addNewEducationalEntity(data) {
      return this.post("Admin/addNewEducationalEntity", data);
    } //Remove Educational Entities

  }, {
    key: "removeEducationalEntity",
    value: function removeEducationalEntity(id) {
      return this.post("Admin/removeEducationalEntity/" + id, null);
    } ///////////////////////////////////////////////////////////////
    //Get Educationa Stage

  }, {
    key: "getEducationaStages",
    value: function getEducationaStages() {
      return this.get("Admin/getEducationaStages");
    } //Add New Educational Stage

  }, {
    key: "AddEducationalStage",
    value: function AddEducationalStage(countryID, stageName) {
      //stageID
      return this.post("Admin/AddEducationalStage/".concat(countryID, "/").concat(stageName), null);
    } //Edit Educational Stage

  }, {
    key: "EditEducationalStage",
    value: function EditEducationalStage(StageID, countryID, stageName) {
      //stageID
      return this.post("Admin/EditEducationalStage/".concat(StageID, "/").concat(countryID, "/").concat(stageName), null);
    } //Delete Educational Stage

  }, {
    key: "DeleteEducationalStage",
    value: function DeleteEducationalStage(StageID) {
      //stageID
      return this.post("Admin/RemoveEducationalStage/".concat(StageID), null);
    } //return Stages By teacherId

  }, {
    key: "getStageByTeacherId",
    value: function getStageByTeacherId(teacherId) {
      return this.get("AJAX/returnStages/".concat(teacherId));
    } ///////////////////////////////////////////////////////////////
    //Get Educationa Years

  }, {
    key: "getEducationalYear",
    value: function getEducationalYear() {
      return this.get("Admin/educationalYear");
    } //Add New Educational Year

  }, {
    key: "AddEducationalYear",
    value: function AddEducationalYear(data) {
      //eduYearID, stageID, eduYearName
      return this.post("Admin/educationalYear", data);
    } //delete Educational Year

  }, {
    key: "deleteEducationalYear",
    value: function deleteEducationalYear(id) {
      return this.delete("Admin/educationalYear/".concat(id));
    } //Get Educationa  Stage By CountryID

  }, {
    key: "getEducationalStageByCountryID",
    value: function getEducationalStageByCountryID(countryID) {
      return this.get("Admin/stages/".concat(countryID));
    } //return Years BY stageId

  }, {
    key: "returnYears",
    value: function returnYears(stageId) {
      return this.get("AJAX/GetEducationalYearOfStudents/".concat(stageId));
    } //return Teacher Subjects   //{ "yearId" : 36, "teacherId" : 17}

  }, {
    key: "returnTeacherSubjects",
    value: function returnTeacherSubjects(data) {
      return this.post("AJAX/returnSubjectsByYearTeacherIDs", data);
    } //return Units BY SubjectId

  }, {
    key: "GetUnits",
    value: function GetUnits(SubjectId) {
      return this.get("AJAX/GetUnits/" + SubjectId);
    } //return Lessons BY unitId

  }, {
    key: "GetLessons",
    value: function GetLessons(unitId) {
      return this.get("AJAX/GetLessons/".concat(unitId));
    } //return Topics BY LessonId

  }, {
    key: "GetTopics",
    value: function GetTopics(LessonId) {
      return this.get("AJAX/GetTopics/" + LessonId);
    } //get Year by StageID

  }, {
    key: "getYearbyStageID",
    value: function getYearbyStageID(stageID) {
      return this.get("Admin/educationalYear/".concat(stageID));
    }
  }, {
    key: "GetMaterialsBySubject",
    value: function GetMaterialsBySubject(subjectId, teacherId, EduCompId) {
      return this.get("".concat("codes/returnMaterialsByMainSubjectTeacherId/".concat(subjectId), "/", teacherId, "/").concat(EduCompId));
    }
  }]);

  return EducationalService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

EducationalService.ɵfac = function EducationalService_Factory(t) {
  return new (t || EducationalService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

EducationalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: EducationalService,
  factory: EducationalService.ɵfac,
  providedIn: "root"
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

/***/ 94008:
/*!*************************************************************!*\
  !*** ./src/app/admin/services/Admin/reservation.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationService": function() { return /* binding */ ReservationService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var ReservationService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ReservationService, _AppClientService);

  var _super = (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ReservationService);

  function ReservationService(http) {
    var _this;

    (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReservationService);

    _this = _super.call(this, http);
    _this.http = http;
    return _this;
  }

  (0,F_Front_End_new_egypt_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReservationService, [{
    key: "InputSettings",
    value: function InputSettings(viewId) {
      return this.get("AJAX/InputSettings/".concat(viewId));
    }
  }, {
    key: "SubmitInputsSettings",
    value: function SubmitInputsSettings(data) {
      return this.post("AJAX/InputSettings", data);
    }
  }, {
    key: "returnBranchesByEduCompId",
    value: function returnBranchesByEduCompId(EduCompId) {
      return this.get("AJAX/returnBranchesByEduCompId/".concat(EduCompId));
    }
  }, {
    key: "GetAvaliableDatesByBranchId",
    value: function GetAvaliableDatesByBranchId(BranchId, MustHaveStudents, DontShowMaxed) {
      return this.get("".concat("AJAX/GetAvaliableDatesByBranchId/".concat(BranchId), "/", MustHaveStudents, "/").concat(DontShowMaxed));
    }
  }, {
    key: "returnCities",
    value: function returnCities() {
      return this.get("AJAX/returnCities");
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return this.get("AJAX/returnArea");
    }
  }, {
    key: "returnStatus",
    value: function returnStatus() {
      return this.get("AJAX/returnStatus");
    }
  }, {
    key: "getReservationsList",
    value: function getReservationsList(data) {
      return this.post("AJAX/returnReservations", data);
    }
  }, {
    key: "ReservationDetails",
    value: function ReservationDetails(id) {
      return this.get("AJAX/ReservationDetails/".concat(id));
    }
  }, {
    key: "getReservationEdit",
    value: function getReservationEdit(id, EduCompId) {
      return this.get("AJAX/ReservationEdit/".concat(id, "/").concat(EduCompId));
    }
  }, {
    key: "SubmitReservationEdit",
    value: function SubmitReservationEdit(data) {
      return this.post("AJAX/ReservationEdit", data);
    }
  }, {
    key: "GetStudentStatus",
    value: function GetStudentStatus(Id, EduCompId) {
      return this.get("AJAX/ReservationStatus/".concat(Id, "/").concat(EduCompId));
    }
  }, {
    key: "SubmitReservationStatus",
    value: function SubmitReservationStatus(data) {
      return this.post("AJAX/ReservationStatus", data);
    }
  }, {
    key: "ReservationStatusPaging",
    value: function ReservationStatusPaging(page, EduCompUserId) {
      return this.get("AJAX/ReservationStatusPaging/".concat(page, "/").concat(EduCompUserId));
    }
  }, {
    key: "getReasonsByStatusId",
    value: function getReasonsByStatusId(StatusId) {
      return this.get("Admin/returnReasonsByStatusId/".concat(StatusId));
    }
  }, {
    key: "updateStudentCustomDiscount",
    value: function updateStudentCustomDiscount(body) {
      return this.post("CustomDiscountsUsers/SaveCustomDiscountUser", body);
    }
  }, {
    key: "getStudentCustomDiscount",
    value: function getStudentCustomDiscount(userId) {
      return this.get("CustomDiscountsUsers/returnUserCustomDiscountDetails/".concat(userId));
    }
  }, {
    key: "getCustomDiscount",
    value: function getCustomDiscount(EduCompId) {
      return this.get("CustomDiscountsUsers/returnCustomDiscountsByEduCompId/".concat(EduCompId));
    }
  }, {
    key: "getStudentCustomDiscountsList",
    value: function getStudentCustomDiscountsList(userId) {
      return this.get("CustomDiscountsUsers/returnUserCustomDiscountsByUserId/".concat(userId));
    }
  }, {
    key: "getCustomReservation",
    value: function getCustomReservation(EduCompId) {
      return this.get("Reservations/CustomReservation/" + EduCompId);
    }
  }, {
    key: "returnBranchesByEducTypeId",
    value: function returnBranchesByEducTypeId(typeId, EduCompId) {
      return this.get("Reservations/returnCenterBranchesByEducationalTypeId/".concat(typeId, "/").concat(EduCompId));
    }
  }, {
    key: "addReservationDate",
    value: function addReservationDate(data) {
      return this.post("reservation/add-date", data);
    }
  }, {
    key: "getAllReservationDate",
    value: function getAllReservationDate(page) {
      return this.get("reservation/get-all/".concat(page));
    }
  }, {
    key: "downloadTemplate",
    value: function downloadTemplate() {
      return this.get("reservation/download-date-template");
    }
  }, {
    key: "getAvailableGroups",
    value: function getAvailableGroups(teacherId, EduCompId) {
      return this.get("Reservations/returnAvailableStudyingGroupsByTeacherId/".concat(teacherId, "/").concat(EduCompId));
    }
  }, {
    key: "CompletaReservation",
    value: function CompletaReservation(data) {
      return this.get("Reservations/reservationPaymentAndAddStudentToGroup/".concat(data.groupId, "/").concat(data.teacherUserId, "/").concat(data.eduCompId));
    }
  }, {
    key: "getReservationInfo",
    value: function getReservationInfo(EduCompId) {
      return this.get("Reservations/returnReservationInfo/".concat(EduCompId));
    }
  }, {
    key: "checkUserBalance",
    value: function checkUserBalance(EduCompId, teacherId) {
      return this.get("Reservations/isUserHasBalanceForCustomTeacher/".concat(EduCompId, "/").concat(teacherId));
    }
  }]);

  return ReservationService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

ReservationService.ɵfac = function ReservationService_Factory(t) {
  return new (t || ReservationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

ReservationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ReservationService,
  factory: ReservationService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_services_Admin_announcement_service_ts-src_app_admin_services_Admin_edu-12da75.js.map