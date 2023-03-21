"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["common"],{

/***/ 87181:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/services/Financial/discount-type.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscountTypeService": function() { return /* binding */ DiscountTypeService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var DiscountTypeService = /*#__PURE__*/function () {
  function DiscountTypeService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DiscountTypeService);

    this.http = http;
  } // Return All Discount Types


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DiscountTypeService, [{
    key: "getDiscountTypes",
    value: function getDiscountTypes(page, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "DiscountType/getAllDiscountTypes/").concat(EduCompId, "/").concat(page));
    }
  }, {
    key: "getDiscountTypeDropdown",
    value: function getDiscountTypeDropdown(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "DiscountType/getAllDiscountType/").concat(EduCompId));
    } //Add New Discount Type

  }, {
    key: "addEditDiscountType",
    value: function addEditDiscountType(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "DiscountType/addEditDiscountType"), data);
    } //Delete Discount Type

  }, {
    key: "deleteDiscountType",
    value: function deleteDiscountType(Id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "DiscountType/deleteDiscountType/").concat(Id));
    }
  }]);

  return DiscountTypeService;
}();

DiscountTypeService.ɵfac = function DiscountTypeService_Factory(t) {
  return new (t || DiscountTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

DiscountTypeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DiscountTypeService,
  factory: DiscountTypeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 25066:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/services/employees/employee.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": function() { return /* binding */ EmployeeService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var EmployeeService = /*#__PURE__*/function () {
  function EmployeeService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmployeeService);

    this.http = http;
  } // Return All Countries


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EmployeeService, [{
    key: "getAllCountries",
    value: function getAllCountries() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Employees/getAllCountries"));
    } //#region employees
    // Return All Employees

  }, {
    key: "getAllEmployees",
    value: function getAllEmployees(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Employees/GetAllEmployees/").concat(page));
    } // Return All Employees > dropdown

  }, {
    key: "getEmployeeEmployeesDropDown",
    value: function getEmployeeEmployeesDropDown() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Employees/GetAllEmployees"));
    } // Return Employee ById

  }, {
    key: "getEmployeeById",
    value: function getEmployeeById(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Employees/getEmployeeById/").concat(id));
    } // add Employee

  }, {
    key: "addEmployee",
    value: function addEmployee(employee) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Employees/addEmployee"), employee);
    } // update Employee

  }, {
    key: "updateEmployee",
    value: function updateEmployee(id, employee) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Employees/updateEmployee/").concat(id), employee);
    } // delete Employee

  }, {
    key: "deleteEmployee",
    value: function deleteEmployee(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Employees/deleteEmployee/").concat(id));
    }
  }]);

  return EmployeeService;
}();

EmployeeService.ɵfac = function EmployeeService_Factory(t) {
  return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

EmployeeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EmployeeService,
  factory: EmployeeService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 84064:
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/financial-setup/salary-item.service.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaryItemService": function() { return /* binding */ SalaryItemService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var SalaryItemService = /*#__PURE__*/function () {
  function SalaryItemService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SalaryItemService);

    this.http = http;
  } // Return All Salary Items


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SalaryItemService, [{
    key: "getSalaryItems",
    value: function getSalaryItems(page, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SalaryItems/getAllSalaryItem/").concat(EduCompId, "/").concat(page));
    }
  }, {
    key: "getSalaryItemsDropdownMenu",
    value: function getSalaryItemsDropdownMenu(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SalaryItems/getAllSalaryItem/").concat(EduCompId));
    } //Add New || UpdateSalary Item

  }, {
    key: "addEditSalaryItem",
    value: function addEditSalaryItem(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SalaryItems/addEditSalaryItem"), data);
    } //Delete Salary Item

  }, {
    key: "deleteSalaryItem",
    value: function deleteSalaryItem(SalaryItemId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "SalaryItems/deleteSalaryItem/").concat(SalaryItemId));
    }
  }]);

  return SalaryItemService;
}();

SalaryItemService.ɵfac = function SalaryItemService_Factory(t) {
  return new (t || SalaryItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

SalaryItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SalaryItemService,
  factory: SalaryItemService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 3942:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/financial-setup/suppliers-and-customers.service.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliersAndCustomersService": function() { return /* binding */ SuppliersAndCustomersService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var SuppliersAndCustomersService = /*#__PURE__*/function () {
  function SuppliersAndCustomersService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SuppliersAndCustomersService);

    this.http = http;
  } //Return All External Orgnizations


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SuppliersAndCustomersService, [{
    key: "getExternalOrgnizations",
    value: function getExternalOrgnizations(page, EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "ExternalOrg/getAllExternalOrg//").concat(EduCompId, "/").concat(page));
    } //Return All External Orgnizations dropdown

  }, {
    key: "getExternalOrgnizationsDropDown",
    value: function getExternalOrgnizationsDropDown(EduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "ExternalOrg/getAllExternalOrg/").concat(EduCompId));
    } //Add Edit External Orgnization

  }, {
    key: "addEditExternalOrgnization",
    value: function addEditExternalOrgnization(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "ExternalOrg/addEditExternalOrg"), data);
    } //Delete External Orgnization

  }, {
    key: "deleteExternalOrgnization",
    value: function deleteExternalOrgnization(Id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "/ExternalOrg/deleteExternalOrg/").concat(Id));
    }
  }]);

  return SuppliersAndCustomersService;
}();

SuppliersAndCustomersService.ɵfac = function SuppliersAndCustomersService_Factory(t) {
  return new (t || SuppliersAndCustomersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

SuppliersAndCustomersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SuppliersAndCustomersService,
  factory: SuppliersAndCustomersService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 56718:
/*!*************************************************************!*\
  !*** ./src/app/dashboard/services/users/teacher.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherService": function() { return /* binding */ TeacherService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var TeacherService = /*#__PURE__*/function () {
  function TeacherService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherService);

    this.http = http;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherService, [{
    key: "addUpdateTeacher",
    value: function addUpdateTeacher(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Parent/RegisterParent"), body);
    }
  }, {
    key: "getTeachers",
    value: function getTeachers(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Parent/return-all/").concat(page));
    }
  }, {
    key: "getTeacherById",
    value: function getTeacherById(parentId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Parent/GetParentById/").concat(parentId));
    }
  }, {
    key: "deleteTeacher",
    value: function deleteTeacher(parentId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Parent/DeleteParentById/").concat(parentId));
    }
  }, {
    key: "getAllTeacherCourses",
    value: function getAllTeacherCourses(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Parent/RegisterParent/").concat(page));
    }
  }, {
    key: "addTeacherCourse",
    value: function addTeacherCourse(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Parent/RegisterParent"), body);
    }
  }, {
    key: "deleteTeacherCourse",
    value: function deleteTeacherCourse(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Parent/RegisterParent/").concat(id));
    }
  }]);

  return TeacherService;
}();

TeacherService.ɵfac = function TeacherService_Factory(t) {
  return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

TeacherService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TeacherService,
  factory: TeacherService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=common.js.map