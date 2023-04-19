"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["default-src_app_admin_services_Admin_exams_service_ts-src_app_admin_services_Admin_points_ser-1e8f52"],{

/***/ 63938:
/*!*******************************************************!*\
  !*** ./src/app/admin/services/Admin/exams.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsService": function() { return /* binding */ ExamsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var ExamsService = /*#__PURE__*/function () {
  function ExamsService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamsService);

    this.http = http;
  }

  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamsService, [{
    key: "getTeachersByEducompId",
    value: function getTeachersByEducompId(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/QuestionsBank/").concat(EduCompId));
    }
  }, {
    key: "getQuestions",
    value: function getQuestions(page, EduCompId, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/QuestionsBankTable/").concat(page, "/").concat(EduCompId), data);
    }
  }, {
    key: "getQuestionByID",
    value: function getQuestionByID(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-question-bank/").concat(id));
    }
  }, {
    key: "addEditQuestion",
    value: function addEditQuestion(eduCompID, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/question-bank-add-edit/").concat(eduCompID), data);
    }
  }, {
    key: "updateQuestion",
    value: function updateQuestion(Id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/QuestionsBank/").concat(Id), data);
    }
  }, {
    key: "deleteQuestion",
    value: function deleteQuestion(eduCompID, id) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/removeQuestionBank/").concat(eduCompID, "/").concat(id), null);
    }
  }, {
    key: "getSubjectsByTeacherId",
    value: function getSubjectsByTeacherId(teacherId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/get-lectures-by-teacher-query"), teacherId);
    }
  }, {
    key: "getAllNormalExams",
    value: function getAllNormalExams(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/returnRecentlyAddedExams", obj);
    }
  }, {
    key: "publishExam",
    value: function publishExam(examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/publish-depublish-exam/").concat(examId));
    }
  }, {
    key: "deleteExam",
    value: function deleteExam(id) {
      console.log(id);
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/RemoveExam/").concat(id));
    }
  }, {
    key: "getAllCountries",
    value: function getAllCountries() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "country/return-countries");
    }
  }, {
    key: "getAllStages",
    value: function getAllStages(countryId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "stage/return-stages/").concat(countryId));
    }
  }, {
    key: "getAllEducationYears",
    value: function getAllEducationYears(stageId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "year/return-years/").concat(stageId));
    }
  }, {
    key: "getAllSubjects",
    value: function getAllSubjects(educationYearId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "subject/return-subjects/").concat(educationYearId));
    }
  }, {
    key: "getAllTeachersBySublectId",
    value: function getAllTeachersBySublectId(subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "teacher/return-teachers/").concat(subjectId));
    }
  }, {
    key: "getAllUnitsBySublectId",
    value: function getAllUnitsBySublectId(subjectId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "unit/return-units/").concat(subjectId));
    }
  }, {
    key: "getAllLessonsByUnitId",
    value: function getAllLessonsByUnitId(unitId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "lesson/return-lesson/").concat(unitId));
    }
  }, {
    key: "getAllExamType",
    value: function getAllExamType() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/return-exam-types");
    }
  }, {
    key: "getExamById",
    value: function getExamById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/get-exam-by-id/").concat(id));
    }
  }, {
    key: "getExamDetailsById",
    value: function getExamDetailsById(examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Exam/Details/").concat(examId));
    }
  }, {
    key: "addExam",
    value: function addExam(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/add-exam", data);
    }
  }, {
    key: "getAllQuestionGroups",
    value: function getAllQuestionGroups() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/return-question-groups");
    }
  }, {
    key: "getAllQuestionHeaders",
    value: function getAllQuestionHeaders() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/return-question-heads");
    }
  }, {
    key: "addExamGroupHeader",
    value: function addExamGroupHeader(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/add-question-group-head"), data);
    }
  }, {
    key: "editExamGroupHeader",
    value: function editExamGroupHeader(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/EditQuestionHead", data);
    }
  }, {
    key: "deleteExamGroupHeader",
    value: function deleteExamGroupHeader(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/deleteExamHeadGroupById/").concat(id));
    }
  }, {
    key: "getAllGroupHeaderByExamId",
    value: function getAllGroupHeaderByExamId(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/GetQuestionHeadGroupByExamId/").concat(id));
    }
  }, {
    key: "getAllQuestionsByHeadId",
    value: function getAllQuestionsByHeadId(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/GetExamQuestionsByQuestionHead/").concat(id));
    }
  }, {
    key: "addQuestion",
    value: function addQuestion(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/add-exam-questions", data);
    }
  }, {
    key: "addSurveyQuestion",
    value: function addSurveyQuestion(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/add-survey-questions", data);
    }
  }, {
    key: "getQuestionForEditByID",
    value: function getQuestionForEditByID(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/return-question-details/").concat(id));
    }
  }, {
    key: "editQuestion",
    value: function editQuestion(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/edit-exam-questions", data);
    }
  }, {
    key: "editSurveyQuestion",
    value: function editSurveyQuestion(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/edit-survey-questions", data);
    }
  }, {
    key: "deleteExamQuestion",
    value: function deleteExamQuestion(id) {
      console.log(id);
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/RemoveExamQuestion/").concat(id));
    }
  }, {
    key: "getExamPoints",
    value: function getExamPoints(examId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/returnCustomPointExamByExamId/").concat(examId, "/").concat(page));
    }
  }, {
    key: "addExamPoint",
    value: function addExamPoint(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "exam/CustomExamPoint", body);
    }
  }, {
    key: "deleteExamPoint",
    value: function deleteExamPoint(pointId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "exam/DeleteCustomExamPoint/").concat(pointId));
    }
  }, {
    key: "UploadExamStudentGrades",
    value: function UploadExamStudentGrades(data) {
      var URL = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Exam/postStudentsGrades";
      return this.http.post(URL, data);
    }
  }, {
    key: "getQuestionByCorrectionType",
    value: function getQuestionByCorrectionType(page, correctionStatus) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Exam/CorrectionIndexPaging/").concat(page, "/").concat(correctionStatus));
    }
  }, {
    key: "submitCorrection",
    value: function submitCorrection(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "/Exam/submitQuestionCorrection"), body);
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

/***/ 12397:
/*!********************************************************!*\
  !*** ./src/app/admin/services/Admin/points.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsService": function() { return /* binding */ PointsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var PointsService = /*#__PURE__*/function () {
  function PointsService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PointsService);

    this.http = http;
  } //  Points Setup


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PointsService, [{
    key: "addPoints",
    value: function addPoints(educompId, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/SetupPoints/").concat(educompId), data);
    }
  }, {
    key: "getPoints",
    value: function getPoints(courseId, typeId, eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/returnPointSystemByResourceId/").concat(courseId, "/").concat(typeId, "/").concat(eduCompId));
    }
  }, {
    key: "deletePoint",
    value: function deletePoint(pointId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/DeletePointSystemDetails/").concat(pointId), null);
    } //######################################################################
    // Custome
    //######################################################################
    // Lecture Custome

  }, {
    key: "addLectureCustomPoint",
    value: function addLectureCustomPoint(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/CustomMaterialPoint"), data);
    }
  }, {
    key: "getLectureCustomPoints",
    value: function getLectureCustomPoints(page, materialId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/returnCustomPointMaterialByMaterialId/").concat(materialId, "/").concat(page));
    }
  }, {
    key: "deleteLectureCustomPoint",
    value: function deleteLectureCustomPoint(pointId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/DeleteCustomMaterialPoint/").concat(pointId), null);
    } //######################################################################
    // Exam Custome

  }, {
    key: "addExamCustomPoint",
    value: function addExamCustomPoint(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "SetupPoints/CustomExamPoint", body);
    }
  }, {
    key: "getExamCustomPoints",
    value: function getExamCustomPoints(page, examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/returnCustomPointExamByExamId/").concat(examId, "/").concat(page));
    }
  }, {
    key: "deleteExamCustomPoint",
    value: function deleteExamCustomPoint(pointId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/DeleteCustomExamPoint/").concat(pointId), null);
    } //######################################################################
    // Template Custome

  }, {
    key: "addTemplateCustomPoint",
    value: function addTemplateCustomPoint(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "SetupPoints/CustomTemplatePoint", body);
    }
  }, {
    key: "getTemplateCustomPoints",
    value: function getTemplateCustomPoints(page, templateId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/returnCustomPointTemplateByTemplateId/").concat(templateId, "/").concat(page));
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

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_services_Admin_exams_service_ts-src_app_admin_services_Admin_points_ser-1e8f52.js.map