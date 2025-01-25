"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["default-src_app_admin_services_Admin_educational_service_ts-src_app_admin_services_Admin_subj-47c40a"],{

/***/ 56471:
/*!*************************************************************!*\
  !*** ./src/app/admin/services/Admin/educational.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalService": function() { return /* binding */ EducationalService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var EducationalService = /*#__PURE__*/function () {
  function EducationalService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EducationalService);

    this.http = http; //General

    this.yearByStageURL = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/educationalYear/";
    this.matBySbjectURL = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/returnMaterialsByMainSubjectTeacherId/";
  } //Get Educational Entities


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EducationalService, [{
    key: "getEducationalEntities",
    value: function getEducationalEntities() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getEducationalEntities");
    } //Add New Educational Entities

  }, {
    key: "addNewEducationalEntity",
    value: function addNewEducationalEntity(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/addNewEducationalEntity", data);
    } //Remove Educational Entities

  }, {
    key: "removeEducationalEntity",
    value: function removeEducationalEntity(id) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/removeEducationalEntity/" + id, null);
    } ///////////////////////////////////////////////////////////////
    //Get Educationa Stage

  }, {
    key: "getEducationaStages",
    value: function getEducationaStages() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getEducationaStages");
    } //Add New Educational Stage

  }, {
    key: "AddEducationalStage",
    value: function AddEducationalStage(countryID, stageName) {
      //stageID
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/AddEducationalStage/").concat(countryID, "/").concat(stageName), null);
    } //Edit Educational Stage

  }, {
    key: "EditEducationalStage",
    value: function EditEducationalStage(StageID, countryID, stageName) {
      //stageID
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/EditEducationalStage/").concat(StageID, "/").concat(countryID, "/").concat(stageName), null);
    } //Delete Educational Stage

  }, {
    key: "DeleteEducationalStage",
    value: function DeleteEducationalStage(StageID) {
      //stageID
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/RemoveEducationalStage/").concat(StageID), null);
    } //return Stages By teacherId

  }, {
    key: "getStageByTeacherId",
    value: function getStageByTeacherId(teacherId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnStages/").concat(teacherId));
    } ///////////////////////////////////////////////////////////////
    //Get Educationa Years

  }, {
    key: "getEducationalYear",
    value: function getEducationalYear() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/educationalYear");
    } //Add New Educational Year

  }, {
    key: "AddEducationalYear",
    value: function AddEducationalYear(data) {
      //eduYearID, stageID, eduYearName
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/educationalYear", data);
    } //delete Educational Year

  }, {
    key: "deleteEducationalYear",
    value: function deleteEducationalYear(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/educationalYear/").concat(id));
    } //Get Educationa  Stage By CountryID

  }, {
    key: "getEducationalStageByCountryID",
    value: function getEducationalStageByCountryID(countryID) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/stages/").concat(countryID));
    } //return Years BY stageId

  }, {
    key: "returnYears",
    value: function returnYears(stageId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/GetEducationalYearOfStudents/").concat(stageId));
    } //return Teacher Subjects   //{ "yearId" : 36, "teacherId" : 17}

  }, {
    key: "returnTeacherSubjects",
    value: function returnTeacherSubjects(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/returnSubjectsByYearTeacherIDs"), data);
    } //return Units BY SubjectId

  }, {
    key: "GetUnits",
    value: function GetUnits(SubjectId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/GetUnits/" + SubjectId);
    } //return Lessons BY unitId

  }, {
    key: "GetLessons",
    value: function GetLessons(unitId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "AJAX/GetLessons/").concat(unitId));
    } //return Topics BY LessonId

  }, {
    key: "GetTopics",
    value: function GetTopics(LessonId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "AJAX/GetTopics/" + LessonId);
    } //get Year by StageID

  }, {
    key: "getYearbyStageID",
    value: function getYearbyStageID(stageID) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/educationalYear/").concat(stageID));
    }
  }, {
    key: "GetMaterialsBySubject",
    value: function GetMaterialsBySubject(subjectId, teacherId, EduCompId) {
      return this.http.get("".concat("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "codes/returnMaterialsByMainSubjectTeacherId/").concat(subjectId), "/", teacherId, "/").concat(EduCompId));
    }
  }]);

  return EducationalService;
}();

EducationalService.ɵfac = function EducationalService_Factory(t) {
  return new (t || EducationalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

EducationalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EducationalService,
  factory: EducationalService.ɵfac,
  providedIn: "root"
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
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var SubjectsService = /*#__PURE__*/function () {
  function SubjectsService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubjectsService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubjectsService, [{
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
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/subjectStructure/").concat(subjectId));
    }
  }, {
    key: "getUnits",
    value: function getUnits(subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/returnSearchedUnitsBySubjectId/").concat(subjectId));
    }
  }, {
    key: "getUnitById",
    value: function getUnitById(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/EditUnitView/" + id);
    }
  }, {
    key: "addUpdateUnit",
    value: function addUpdateUnit(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/AddSubjectUnitPost", data);
    }
  }, {
    key: "deleteUnit",
    value: function deleteUnit(unitId) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/RemoveUnit/" + unitId, null);
    }
  }, {
    key: "getLessons",
    value: function getLessons(unitId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/returnSearchedLessonsByUnitId/" + unitId);
    }
  }, {
    key: "getLessonById",
    value: function getLessonById(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/EditLessonView/" + id);
    }
  }, {
    key: "addUpdateLesson",
    value: function addUpdateLesson(unitId, body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/AddSubjectLessonPost/" + unitId, body);
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
//# sourceMappingURL=default-src_app_admin_services_Admin_educational_service_ts-src_app_admin_services_Admin_subj-47c40a.js.map