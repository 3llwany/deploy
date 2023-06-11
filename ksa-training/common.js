"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["common"],{

/***/ 15111:
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/auth/Guards/auth/pending-changes.guard.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingChangesGuard": function() { return /* binding */ PendingChangesGuard; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var PendingChangesGuard = /*#__PURE__*/function () {
  function PendingChangesGuard() {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PendingChangesGuard);
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PendingChangesGuard, [{
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
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






var AppDateAdapter = /*#__PURE__*/function (_NativeDateAdapter) {
  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppDateAdapter, _NativeDateAdapter);

  var _super = (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AppDateAdapter);

  function AppDateAdapter() {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppDateAdapter);

    return _super.apply(this, arguments);
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppDateAdapter, [{
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
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);







var AskTeacherService = /*#__PURE__*/function (_AppClientService) {
  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AskTeacherService, _AppClientService);

  var _super = (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AskTeacherService);

  function AskTeacherService(http) {
    var _this;

    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AskTeacherService);

    _this = _super.call(this, http);
    _this.http = http;
    return _this;
  } // Return askTeacher Data


  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AskTeacherService, [{
    key: "askTeacher",
    value: function askTeacher(id) {
      return this.get("AJAX/askTeacher/" + id);
    }
  }, {
    key: "getOpenedMsgs",
    value: function getOpenedMsgs(page, TeacherSubId) {
      return this.get("AJAX/returnUserThreads/".concat(page, "/").concat(TeacherSubId, "/true"));
    }
  }, {
    key: "getClosedMsgs",
    value: function getClosedMsgs(page, TeacherSubId) {
      return this.get("AJAX/returnUserThreads/".concat(page, "/").concat(TeacherSubId, "/false"));
    } // Return Messages And replayes in msg

  }, {
    key: "getMsgReplaies",
    value: function getMsgReplaies(msgId) {
      return this.get("AJAX/returnUserThread/" + msgId);
    } // Create New Messages

  }, {
    key: "createNewMsg",
    value: function createNewMsg(data) {
      return this.post("AJAX/StartThread", data);
    } //Replay to Msg

  }, {
    key: "SendMessage",
    value: function SendMessage(data) {
      return this.post("AJAX/SendMessage", data);
    }
  }, {
    key: "getTeacherSubjectIds",
    value: function getTeacherSubjectIds() {
      return this.get("AJAX/returnTeacherSubjectIdsForAssistant");
    } // Return Teacher Opend Msgs

  }, {
    key: "getTeacherOpenedClosedMsgs",
    value: function getTeacherOpenedClosedMsgs(p, isOpened, TeacherSubjectIds) {
      return this.post("AJAX/returnUserThreadsForAssistant/".concat(p, "/").concat(isOpened), TeacherSubjectIds);
    }
  }, {
    key: "closeMsg",
    value: function closeMsg(msgId) {
      return this.post("AJAX/CloseThread/".concat(msgId), null);
    }
  }, {
    key: "removeReply",
    value: function removeReply(msgId) {
      return this.delete("AJAX/RemoveReply/" + msgId);
    } // Return Teacher Messages And replayes in msg

  }, {
    key: "getTeacherMsgReplaies",
    value: function getTeacherMsgReplaies(msgId) {
      return this.get("AJAX/returnUserThreadForAssistant/" + msgId);
    }
  }]);

  return AskTeacherService;
}(app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_4__.AppClientService);

AskTeacherService.ɵfac = function AskTeacherService_Factory(t) {
  return new (t || AskTeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

AskTeacherService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AskTeacherService,
  factory: AskTeacherService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=common.js.map