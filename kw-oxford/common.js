(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["common"],{

/***/ 1621:
/*!**************************************************************!*\
  !*** ./src/app/admin/services/Admin/announcement.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementService": function() { return /* binding */ AnnouncementService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var AnnouncementService = /*#__PURE__*/function () {
  function AnnouncementService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnnouncementService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AnnouncementService, [{
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
    value: function getAllAnnouncements(teacherUserID, pageId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Announcement/GetAllAnnouncement/").concat(teacherUserID, "/").concat(pageId));
    }
  }, {
    key: "deleteAttach",
    value: function deleteAttach(id) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "Announcement/delete-Attach-By-Id/").concat(id));
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
  providedIn: 'root'
});

/***/ }),

/***/ 72625:
/*!****************************************************************!*\
  !*** ./src/app/admin/services/Admin/generate-codes.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCodesService": function() { return /* binding */ GenerateCodesService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var GenerateCodesService = /*#__PURE__*/function () {
  function GenerateCodesService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GenerateCodesService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GenerateCodesService, [{
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
    key: "getCodeTypes",
    value: function getCodeTypes() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/CodesType");
    }
  }, {
    key: "applyBalanceCode",
    value: function applyBalanceCode(code) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "codes/applyCustomBalanceCode/" + code, null);
    }
  }, {
    key: "checkCodeReservationAmount",
    value: function checkCodeReservationAmount(code) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "codes/checkCodeEqualReservationValue/").concat(code));
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

/***/ 67665:
/*!*********************************************************!*\
  !*** ./src/app/admin/services/Admin/teacher.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherService": function() { return /* binding */ TeacherService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var TeacherService = /*#__PURE__*/function () {
  function TeacherService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherService, [{
    key: "getAllTeachers",
    value: function getAllTeachers(eduCompId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "usermanagement/returnUsersByEduComp/").concat(eduCompId, "/").concat(page));
    }
  }, {
    key: "addEditTeacher",
    value: function addEditTeacher(obj) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/initTeacher", obj);
    }
  }, {
    key: "assignSubjectToTeacher",
    value: function assignSubjectToTeacher(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "teacher-subject", body);
    }
  }, {
    key: "getTeacherByID",
    value: function getTeacherByID(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getTeacherByTeacherUserID/" + id);
    }
  }, {
    key: "getStudentByID",
    value: function getStudentByID(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "Admin/getStudentByStudentID/" + id);
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

/***/ }),

/***/ 15111:
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/auth/Guards/auth/pending-changes.guard.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingChangesGuard": function() { return /* binding */ PendingChangesGuard; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var PendingChangesGuard = /*#__PURE__*/function () {
  function PendingChangesGuard() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PendingChangesGuard);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PendingChangesGuard, [{
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

/***/ 59508:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/formValidation.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formValidationService": function() { return /* binding */ formValidationService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





var formValidationService = /*#__PURE__*/function () {
  function formValidationService(toastr, translate) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, formValidationService);

    this.toastr = toastr;
    this.translate = translate;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(formValidationService, [{
    key: "ResetForm",
    value: function ResetForm(form, exclude) {
      Object.keys(form.controls).forEach(function (key) {
        if (exclude.findIndex(function (q) {
          return q === key;
        }) === -1) {
          form.get(key).reset();
        }
      });
    }
  }, {
    key: "isFormEmpty",
    value: function isFormEmpty(form) {
      var Empty = true;

      for (var field in form.controls) {
        var control = form.get(field);
        if (control.value) Empty = false;
      }

      return Empty;
    }
  }]);

  return formValidationService;
}();

formValidationService.ɵfac = function formValidationService_Factory(t) {
  return new (t || formValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
};

formValidationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: formValidationService,
  factory: formValidationService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 76273:
/*!********************************************************!*\
  !*** ./src/app/student/services/AskTeacher.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AskTeacherService": function() { return /* binding */ AskTeacherService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var AskTeacherService = /*#__PURE__*/function () {
  function AskTeacherService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AskTeacherService);

    this.http = http;
  } // Return askTeacher Data


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AskTeacherService, [{
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

/***/ }),

/***/ 1660:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 40999);

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 12328);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 72102:
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ 5779);

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _get.apply(this, arguments);
}

module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5779:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 8861);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=common.js.map