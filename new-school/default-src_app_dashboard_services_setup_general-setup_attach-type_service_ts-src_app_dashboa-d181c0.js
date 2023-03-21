"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["default-src_app_dashboard_services_setup_general-setup_attach-type_service_ts-src_app_dashboa-d181c0"],{

/***/ 28473:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/general-setup/attach-type.service.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachTypeService": function() { return /* binding */ AttachTypeService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var AttachTypeService = /*#__PURE__*/function () {
  function AttachTypeService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttachTypeService);

    this.http = http;
  } // Return All  AttachTypes by page


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AttachTypeService, [{
    key: "getAllAttachTypes",
    value: function getAllAttachTypes(page, eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AttachType/getAttachTypeByEduCompId/").concat(eduCompId, "/").concat(page));
    } // Return All  AttachTypes > dropDown list

  }, {
    key: "getAttachTypesDropDown",
    value: function getAttachTypesDropDown(eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AttachType/getAllAttachType/").concat(eduCompId));
    } // Return All  AttachTypes > dropDown list

  }, {
    key: "getAttachTypesDropDownByUserId",
    value: function getAttachTypesDropDownByUserId(userId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AttachType/GetAttachmentByStudentUserId/").concat(userId));
    } //Add New AttachType

  }, {
    key: "addEditAttachType",
    value: function addEditAttachType(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AttachType/addEditAttachType"), data);
    } //Delete AttachType

  }, {
    key: "deleteAttachType",
    value: function deleteAttachType(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AttachType/deleteAttachType/").concat(id));
    } ////////// add user types to attachments
    // Return All  UserTypes

  }, {
    key: "getAllUserTypesByAttachId",
    value: function getAllUserTypesByAttachId(attachTypeId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "UserType/GetAllAttachUserTypeByAttachTypeId/").concat(attachTypeId));
    } //Add UserTypes

  }, {
    key: "addUserTypes",
    value: function addUserTypes(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AttachType/AddAttachUserType"), data);
    }
  }, {
    key: "EditUserTypes",
    value: function EditUserTypes(data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AttachType/EditAttachUserType"), data);
    } //Delete UserTypes

  }, {
    key: "deleteUserTypes",
    value: function deleteUserTypes(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Student/deleteAttachuserType/").concat(id));
    }
  }]);

  return AttachTypeService;
}();

AttachTypeService.ɵfac = function AttachTypeService_Factory(t) {
  return new (t || AttachTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

AttachTypeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AttachTypeService,
  factory: AttachTypeService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 86251:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/general-setup/bus-line.service.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusLineService": function() { return /* binding */ BusLineService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var BusLineService = /*#__PURE__*/function () {
  function BusLineService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BusLineService);

    this.http = http;
  } // Return All Bus Lines


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BusLineService, [{
    key: "getBusLines",
    value: function getBusLines(page, EduCompId) {
      console.log("ed", EduCompId);
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "BusLine/getBusLineByeduCompId/").concat(EduCompId, "/").concat(page));
    } // Return All Bus Lines

  }, {
    key: "getBusLinesDropDown",
    value: function getBusLinesDropDown(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "BusLine/getAllBusLine/").concat(EduCompId));
    } // Return All Bus Lines by Area id

  }, {
    key: "getBusLinesDropDownByAreaId",
    value: function getBusLinesDropDownByAreaId(AreaId, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "BusLine/getBusLineByAreaId/").concat(EduCompId, "/").concat(AreaId));
    } //Add and Edit New Bus Line

  }, {
    key: "addEditBusLine",
    value: function addEditBusLine(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "BusLine/addEditBusLine"), data);
    } //Delete Bus Line

  }, {
    key: "deleteBusLine",
    value: function deleteBusLine(BusLineId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "BusLine/deleteBusLine/").concat(BusLineId));
    }
  }]);

  return BusLineService;
}();

BusLineService.ɵfac = function BusLineService_Factory(t) {
  return new (t || BusLineService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

BusLineService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BusLineService,
  factory: BusLineService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 55260:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/general-setup/chronic-disease.service.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChronicDiseaseService": function() { return /* binding */ ChronicDiseaseService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var ChronicDiseaseService = /*#__PURE__*/function () {
  function ChronicDiseaseService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChronicDiseaseService);

    this.http = http;
  } // Return All  ChronicDiseases by page


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChronicDiseaseService, [{
    key: "getAllChronicDiseases",
    value: function getAllChronicDiseases(page, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "ChronicDisease/getAllChronicDiseaseByEduCompId/").concat(EduCompId, "/").concat(page));
    } // Return All  ChronicDiseases > Drop down list

  }, {
    key: "getAllChronicDiseasesDropDown",
    value: function getAllChronicDiseasesDropDown(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "ChronicDisease/getAllChronicDisease/").concat(EduCompId));
    } //Add and Edit New

  }, {
    key: "addEditChronicDisease",
    value: function addEditChronicDisease(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "ChronicDisease/addEditChronicDisease"), data);
    } //Delete ChronicDisease

  }, {
    key: "deleteChronicDisease",
    value: function deleteChronicDisease(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "ChronicDisease/deleteChronicDisease/").concat(id));
    }
  }]);

  return ChronicDiseaseService;
}();

ChronicDiseaseService.ɵfac = function ChronicDiseaseService_Factory(t) {
  return new (t || ChronicDiseaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ChronicDiseaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ChronicDiseaseService,
  factory: ChronicDiseaseService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 50360:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/general-setup/location/station.service.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StationService": function() { return /* binding */ StationService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var StationService = /*#__PURE__*/function () {
  function StationService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StationService);

    this.http = http;
  } // Return All  Stations by page


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StationService, [{
    key: "getAllStations",
    value: function getAllStations(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Station/getStationByPage/").concat(page));
    }
  }, {
    key: "getAllStationsDropDown",
    value: function getAllStationsDropDown() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Station/getAllStations"));
    } // Return All  Stations by streetId

  }, {
    key: "getAllStationsByStreetId",
    value: function getAllStationsByStreetId(streetId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Station/getAllStationByStreetId/").concat(streetId));
    } // Return All  Stations by busline

  }, {
    key: "getAllStationsByBuslineId",
    value: function getAllStationsByBuslineId(busline) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "BusLineDetails/getAllStationByBusId/").concat(busline));
    } //Add - edit New Station

  }, {
    key: "addEditStation",
    value: function addEditStation(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Station/addEditStation"), data);
    } //Delete Station

  }, {
    key: "deleteStation",
    value: function deleteStation(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Station/deleteStation/").concat(id));
    }
  }]);

  return StationService;
}();

StationService.ɵfac = function StationService_Factory(t) {
  return new (t || StationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

StationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StationService,
  factory: StationService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 90620:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/general-setup/vaccination.service.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaccinationService": function() { return /* binding */ VaccinationService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var VaccinationService = /*#__PURE__*/function () {
  function VaccinationService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VaccinationService);

    this.http = http;
  } // Return All  Vaccinations by page


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VaccinationService, [{
    key: "getAllVaccinations",
    value: function getAllVaccinations(page, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Vacination/getVacinationByPage/").concat(page));
    } // Return All  Vaccinations

  }, {
    key: "getAllVaccinationsDropDown",
    value: function getAllVaccinationsDropDown(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Vacination/getAllVacination"));
    } //Add and Edit Vaccination

  }, {
    key: "addEditVaccination",
    value: function addEditVaccination(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Vacination/addEditVacination"), data);
    } //Delete Vaccination

  }, {
    key: "deleteVaccination",
    value: function deleteVaccination(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Vacination/deleteVacination/").concat(id));
    }
  }]);

  return VaccinationService;
}();

VaccinationService.ɵfac = function VaccinationService_Factory(t) {
  return new (t || VaccinationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

VaccinationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: VaccinationService,
  factory: VaccinationService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_services_setup_general-setup_attach-type_service_ts-src_app_dashboa-d181c0.js.map