"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["default-src_app_admin_services_Admin_educational_service_ts-src_app_admin_services_Admin_setu-03f4b2"],{

/***/ 56471:
/*!*************************************************************!*\
  !*** ./src/app/admin/services/Admin/educational.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalService": function() { return /* binding */ EducationalService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var EducationalService = /*#__PURE__*/function () {
  function EducationalService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EducationalService);

    this.http = http; //General

    this.yearByStageURL = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/educationalYear/";
    this.matBySbjectURL = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/returnMaterialsByMainSubjectTeacherId/";
  } //Get Educational Entities


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EducationalService, [{
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

/***/ 96002:
/*!**************************************************************!*\
  !*** ./src/app/admin/services/Admin/setup/course.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseService": function() { return /* binding */ CourseService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var CourseService = /*#__PURE__*/function () {
  function CourseService(http) {
    (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseService);

    this.http = http;
  } ////// main course > diploma


  (0,F_Front_End_Egypt_Training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseService, [{
    key: "getAllDiplomasBySearch",
    value: function getAllDiplomasBySearch(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Course/SearchDiploma"), data);
    } // getAllDiplomas<T>(page: number) {
    //   return this.http.get<T>(
    //     `${environment.apiURL}Course/geAllCourses/${page}`
    //   );
    // }

  }, {
    key: "getDiplomaById",
    value: function getDiplomaById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Course/getCourseById/").concat(id));
    }
  }, {
    key: "addDiploma",
    value: function addDiploma(course) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Course/PostCourse"), course);
    }
  }, {
    key: "updateDiploma",
    value: function updateDiploma(id, course) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Course/PutCourses/").concat(id), course);
    }
  }, {
    key: "removeDiploma",
    value: function removeDiploma(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Course/DeleteCourses/").concat(id));
    }
  }, {
    key: "getAllDiplomasDropDown",
    value: function getAllDiplomasDropDown(eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Course/geCourses/").concat(eduCompId));
    } ////// sub course > course

  }, {
    key: "getAllCoursesBySearch",
    value: function getAllCoursesBySearch(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SubCourse/searchSubCourse"), data);
    } // getAllCourses<T>(page: number) {
    //   return this.http.get<T>(
    //     `${environment.apiURL}SubCourse/getAllSubCourse/${page}`
    //   );
    // }

  }, {
    key: "addCourse",
    value: function addCourse(course) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SubCourse/PostSubCourse"), course);
    }
  }, {
    key: "getCourseById",
    value: function getCourseById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SubCourse/getSubCourseById/").concat(id));
    }
  }, {
    key: "updateCourse",
    value: function updateCourse(id, course) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SubCourse/PutSubCourse/").concat(id), course);
    }
  }, {
    key: "removeCourse",
    value: function removeCourse(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SubCourse/DeleteSubCourses/").concat(id));
    }
  }, {
    key: "updateJobTitleCourse",
    value: function updateJobTitleCourse(id, dates) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SubCourse/EditSubCourseDepJob/").concat(id), dates);
    }
  }, {
    key: "removeJobTitleCourse",
    value: function removeJobTitleCourse(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SubCourse/DeleteJobTitleOfSubCourse/").concat(id));
    } // Start add users to course

  }, {
    key: "getAllUsers",
    value: function getAllUsers(page, subCourseID) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "UserSubject/geAllUserBySubId/").concat(page, "/").concat(subCourseID));
    }
  }, {
    key: "checkUser",
    value: function checkUser(body, eduCompId) {
      // console.log(body, eduCompId)
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "UserSubject/getUserSubjectByEduCompId/").concat(eduCompId), body);
    }
  }, {
    key: "addUser",
    value: function addUser(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "UserSubject/addUserSubject"), obj);
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(subUserID) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "UserSubject/DeleteUserSubject/").concat(subUserID));
    }
  }, {
    key: "uploadUsersByExcel",
    value: function uploadUsersByExcel(obj) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "UserSubject/addMultiUserSubject"), obj);
    }
  }, {
    key: "getMyCourses",
    value: function getMyCourses() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "UserSubject/getAllUserCourses");
    }
  }, {
    key: "getBasicAndRecommendedCourses",
    value: function getBasicAndRecommendedCourses() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "UserSubject/getBasicRecommendedCourses");
    } //#region ///////////////// course structure

  }, {
    key: "getAllUnitData",
    value: function getAllUnitData(unitId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/GetAllUnitDate/").concat(unitId));
    }
  }, {
    key: "getUnitAttachmentById",
    value: function getUnitAttachmentById(attachId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "FileEducationalUnitController/GetFileEduUnitById/").concat(attachId));
    }
  }, {
    key: "addEditUnitAttachment",
    value: function addEditUnitAttachment(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "FileEducationalUnitController/AddEditFileEduUnit"), data);
    }
  }, {
    key: "deleteUnitAttachment",
    value: function deleteUnitAttachment(attachId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "FileEducationalUnitController/deleteFileEduUnit/").concat(attachId));
    }
  }, {
    key: "getAllUnitAttachments",
    value: function getAllUnitAttachments(courseId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Admin/GetAllUnitFile/").concat(courseId));
    } //#endregion
    //#region ///////////////// course objectives

  }, {
    key: "getAllCourseObjectives",
    value: function getAllCourseObjectives(courseId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CourseObjective/getAllCourseObjectiveById/").concat(courseId, "/").concat(page));
    }
  }, {
    key: "addEditCourseObjective",
    value: function addEditCourseObjective(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CourseObjective/AddEditCourseObjective"), data);
    }
  }, {
    key: "deleteCourseObjective",
    value: function deleteCourseObjective(objective) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "CourseObjective/DeleteCourseObjective/").concat(objective));
    }
  }]);

  return CourseService;
}();

CourseService.ɵfac = function CourseService_Factory(t) {
  return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

CourseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CourseService,
  factory: CourseService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_services_Admin_educational_service_ts-src_app_admin_services_Admin_setu-03f4b2.js.map