"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["default-src_app_admin_services_Admin_points_service_ts-src_app_admin_services_whatsApp_whatsA-92138c"],{

/***/ 12397:
/*!********************************************************!*\
  !*** ./src/app/admin/services/Admin/points.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsService": function() { return /* binding */ PointsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var PointsService = /*#__PURE__*/function () {
  function PointsService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PointsService);

    this.http = http;
  } //  Points Setup


  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PointsService, [{
    key: "addPoints",
    value: function addPoints(educompId, data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/SetupPoints/").concat(educompId), data);
    }
  }, {
    key: "getPoints",
    value: function getPoints(teacherUserId, typeId, eduCompId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "SetupPoints/returnPointSystemByResourceId/").concat(teacherUserId, "/").concat(typeId, "/").concat(eduCompId));
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

/***/ }),

/***/ 64578:
/*!*******************************************************************!*\
  !*** ./src/app/admin/services/whatsApp/whatsApp-setup.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsAppSetupService": function() { return /* binding */ WhatsAppSetupService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var WhatsAppSetupService = /*#__PURE__*/function () {
  function WhatsAppSetupService(http) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WhatsAppSetupService);

    this.http = http;
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WhatsAppSetupService, [{
    key: "sendSingularWhatsAppMsg",
    value: function sendSingularWhatsAppMsg(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/send-singular-message"), data);
    }
  }, {
    key: "sendWhatsAppMsg",
    value: function sendWhatsAppMsg(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/send-message"), data);
    }
  }, {
    key: "getAllWhatsAppMsg",
    value: function getAllWhatsAppMsg(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/GetAllWhatsAppSetups"), body);
    }
  }, {
    key: "RemoveWhatsAppMsg",
    value: function RemoveWhatsAppMsg(whatsAppId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/delete-by-Id/").concat(whatsAppId));
    }
  }, {
    key: "addEditWhatAppMsg",
    value: function addEditWhatAppMsg(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/addEditWhatAppMsg"), body);
    }
  }, {
    key: "GetAllWhatsAppVariables",
    value: function GetAllWhatsAppVariables() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/GetAllWhatsAppVariables"));
    }
  }, {
    key: "getWhatsMsgById",
    value: function getWhatsMsgById(msgId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/GetWhatsMsgById/").concat(msgId));
    }
  }, {
    key: "getAvailableWhatsAppMsgToExam",
    value: function getAvailableWhatsAppMsgToExam(EduCompId, examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/GetAvailableWhatsAppMsgToExam/").concat(EduCompId, "/").concat(examId));
    }
  }, {
    key: "addEditExamWhatssAppMsg",
    value: function addEditExamWhatssAppMsg(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/addEditExamWhatsAppMsg"), body);
    }
  }, {
    key: "getExamWhatsAppMsgs",
    value: function getExamWhatsAppMsgs(examId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/GetExamWhatsAppMsgs/").concat(examId));
    }
  }, {
    key: "deleteExamWhatsAppMsgById",
    value: function deleteExamWhatsAppMsgById(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL, "whats-app/DeleteExamWhatsAppMsgById/").concat(id));
    }
  }]);

  return WhatsAppSetupService;
}();

WhatsAppSetupService.ɵfac = function WhatsAppSetupService_Factory(t) {
  return new (t || WhatsAppSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

WhatsAppSetupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: WhatsAppSetupService,
  factory: WhatsAppSetupService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 47784:
/*!****************************************************************!*\
  !*** ./node_modules/ngx-quill/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldIn": function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__values": function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ 6506:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUILL_CONFIG_TOKEN": function() { return /* binding */ QUILL_CONFIG_TOKEN; },
/* harmony export */   "QuillEditorBase": function() { return /* binding */ QuillEditorBase; },
/* harmony export */   "QuillEditorComponent": function() { return /* binding */ QuillEditorComponent; },
/* harmony export */   "QuillModule": function() { return /* binding */ QuillModule; },
/* harmony export */   "QuillService": function() { return /* binding */ QuillService; },
/* harmony export */   "QuillViewComponent": function() { return /* binding */ QuillViewComponent; },
/* harmony export */   "QuillViewHTMLComponent": function() { return /* binding */ QuillViewHTMLComponent; },
/* harmony export */   "defaultModules": function() { return /* binding */ defaultModules; }
/* harmony export */ });
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 10507);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 47784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);







function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var _c0 = [[["", "quill-editor-toolbar", ""]]];
var _c1 = ["[quill-editor-toolbar]"];
var defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

var getFormat = function getFormat(format, configFormat) {
  var passedFormat = format || configFormat;
  return passedFormat || 'html';
};

var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.InjectionToken('config', {
  providedIn: 'root',
  factory: function factory() {
    return {
      modules: defaultModules
    };
  }
});

var QuillService = /*#__PURE__*/function () {
  function QuillService(injector, config) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillService);

    this.config = config;
    this.count = 0;
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT);

    if (!this.config) {
      this.config = {
        modules: defaultModules
      };
    }
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillService, [{
    key: "getQuill",
    value: function getQuill() {
      var _this = this;

      this.count++;

      if (!this.Quill && this.count === 1) {
        this.$importPromise = new Promise(function (resolve) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var _a, _b, maybePatchedAddEventListener, quillImport;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
                    // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
                    // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
                    maybePatchedAddEventListener = this.document.addEventListener; // There're 2 types of Angular applications:
                    // 1) zone-full (by default)
                    // 2) zone-less
                    // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
                    // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
                    // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
                    // this means the `zone.js` is not imported.
                    // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
                    // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
                    // eslint-disable-next-line @typescript-eslint/dot-notation

                    this.document.addEventListener = this.document['__zone_symbol__addEventListener'] || this.document.addEventListener;
                    _context.next = 4;
                    return __webpack_require__.e(/*! import() */ "node_modules_quill_dist_quill_js").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 63786, 19));

                  case 4:
                    quillImport = _context.sent;
                    this.document.addEventListener = maybePatchedAddEventListener;
                    this.Quill = quillImport.default ? quillImport.default : quillImport; // Only register custom options and modules once

                    (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                      var newCustomOption = _this2.Quill.import(customOption.import);

                      newCustomOption.whitelist = customOption.whitelist;

                      _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                    });
                    (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                      var implementation = _ref.implementation,
                          path = _ref.path;

                      _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                    });
                    resolve(this.Quill);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      return this.$importPromise;
    }
  }]);

  return QuillService;
}();

QuillService.ɵfac = function QuillService_Factory(t) {
  return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](QUILL_CONFIG_TOKEN, 8));
};

QuillService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: QuillService,
  factory: QuillService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


var QuillEditorBase = /*#__PURE__*/function () {
  function QuillEditorBase(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    var _this3 = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillEditorBase);

    this.elementRef = elementRef;
    this.cd = cd;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.sanitize = false;
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */

    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit

    this.subscription = null;

    this.valueGetter = function (quillEditor, editorElement) {
      var html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = _this3.defaultEmptyValue;
      }

      var modelValue = html;
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'html') {
        if (_this3.sanitize) {
          value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_6__.SecurityContext.HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = function (range, oldRange, source) {
      var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

      if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
        return;
      }

      _this3.zone.run(function () {
        if (range === null) {
          _this3.onBlur.emit({
            editor: _this3.quillEditor,
            source: source
          });
        } else if (oldRange === null) {
          _this3.onFocus.emit({
            editor: _this3.quillEditor,
            source: source
          });
        }

        _this3.onSelectionChanged.emit({
          editor: _this3.quillEditor,
          oldRange: oldRange,
          range: range,
          source: source
        });

        if (shouldTriggerOnModelTouched) {
          _this3.onModelTouched();
        }

        _this3.cd.markForCheck();
      });
    };

    this.textChangeHandler = function (delta, oldDelta, source) {
      // only emit changes emitted by user interactions
      var text = _this3.quillEditor.getText();

      var content = _this3.quillEditor.getContents();

      var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = _this3.defaultEmptyValue;
      }

      var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
      var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

      if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
        return;
      }

      _this3.zone.run(function () {
        if (shouldTriggerOnModelChange) {
          _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
        }

        _this3.onContentChanged.emit({
          content: content,
          delta: delta,
          editor: _this3.quillEditor,
          html: html,
          oldDelta: oldDelta,
          source: source,
          text: text
        });

        _this3.cd.markForCheck();
      });
    }; // eslint-disable-next-line max-len


    this.editorChangeHandler = function (event, current, old, source) {
      // only emit changes when there's any listener
      if (!_this3.onEditorChanged.observers.length) {
        return;
      } // only emit changes emitted by user interactions


      if (event === 'text-change') {
        var text = _this3.quillEditor.getText();

        var content = _this3.quillEditor.getContents();

        var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = _this3.defaultEmptyValue;
        }

        _this3.zone.run(function () {
          _this3.onEditorChanged.emit({
            content: content,
            delta: current,
            editor: _this3.quillEditor,
            event: event,
            html: html,
            oldDelta: old,
            source: source,
            text: text
          });

          _this3.cd.markForCheck();
        });
      } else {
        _this3.zone.run(function () {
          _this3.onEditorChanged.emit({
            editor: _this3.quillEditor,
            event: event,
            oldRange: old,
            range: current,
            source: source
          });

          _this3.cd.markForCheck();
        });
      }
    };

    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillEditorBase, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this4 = this;

        var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, defaultEmptyValue, scrollingContainer, formats, format, newValue;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformServer)(this.platformId)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context2.sent;
                this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                modules = Object.assign({}, this.modules || this.service.config.modules);

                if (toolbarElem) {
                  modules.toolbar = toolbarElem;
                } else if (modules.toolbar === undefined) {
                  modules.toolbar = defaultModules.toolbar;
                }

                placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                if (placeholder === undefined) {
                  placeholder = 'Insert text here ...';
                }

                if (this.styles) {
                  Object.keys(this.styles).forEach(function (key) {
                    _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                  });
                }

                if (this.classes) {
                  this.addClasses(this.classes);
                }

                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref2) {
                  var implementation = _ref2.implementation,
                      path = _ref2.path;
                  Quill.register(path, implementation);
                });
                bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                if (!bounds) {
                  bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
                }

                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                readOnly = this.readOnly;

                if (!readOnly && this.readOnly !== false) {
                  readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                }

                defaultEmptyValue = this.defaultEmptyValue;

                if (this.service.config.hasOwnProperty('defaultEmptyValue')) {
                  defaultEmptyValue = this.service.config.defaultEmptyValue;
                }

                scrollingContainer = this.scrollingContainer;

                if (!scrollingContainer && this.scrollingContainer !== null) {
                  scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                this.zone.runOutsideAngular(function () {
                  var _a, _b, _c;

                  _this4.quillEditor = new Quill(_this4.editorElem, {
                    bounds: bounds,
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    placeholder: placeholder,
                    readOnly: readOnly,
                    defaultEmptyValue: defaultEmptyValue,
                    scrollingContainer: scrollingContainer,
                    strict: _this4.strict,
                    theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                  }); // Set optional link placeholder, Quill has no native API for it so using workaround

                  if (_this4.linkPlaceholder) {
                    var tooltip = (_b = (_a = _this4.quillEditor) === null || _a === void 0 ? void 0 : _a.theme) === null || _b === void 0 ? void 0 : _b.tooltip;
                    var input = (_c = tooltip === null || tooltip === void 0 ? void 0 : tooltip.root) === null || _c === void 0 ? void 0 : _c.querySelector('input[data-link]');

                    if (input === null || input === void 0 ? void 0 : input.dataset) {
                      input.dataset.link = _this4.linkPlaceholder;
                    }
                  }
                });

                if (this.content) {
                  format = getFormat(this.format, this.service.config.format);

                  if (format === 'text') {
                    this.quillEditor.setText(this.content, 'silent');
                  } else {
                    newValue = this.valueSetter(this.quillEditor, this.content);
                    this.quillEditor.setContents(newValue, 'silent');
                  }

                  this.quillEditor.getModule('history').clear();
                } // initialize disabled status based on this.disabled as default value


                this.setDisabledState();
                this.addQuillEventListeners(); // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
                // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.

                if (!(!this.onEditorCreated.observers.length && !this.onValidatorChanged)) {
                  _context2.next = 34;
                  break;
                }

                return _context2.abrupt("return");

              case 34:
                // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
                // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
                // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
                requestAnimationFrame(function () {
                  if (_this4.onValidatorChanged) {
                    _this4.onValidatorChanged();
                  }

                  _this4.onEditorCreated.emit(_this4.quillEditor);
                });

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.dispose();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this5 = this;

      if (!this.quillEditor) {
        return;
      }
      /* eslint-disable @typescript-eslint/dot-notation */


      if (changes.readOnly) {
        this.quillEditor.enable(!changes.readOnly.currentValue);
      }

      if (changes.placeholder) {
        this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
      }

      if (changes.defaultEmptyValue) {
        this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
      }

      if (changes.styles) {
        var currentStyling = changes.styles.currentValue;
        var previousStyling = changes.styles.previousValue;

        if (previousStyling) {
          Object.keys(previousStyling).forEach(function (key) {
            _this5.renderer.removeStyle(_this5.editorElem, key);
          });
        }

        if (currentStyling) {
          Object.keys(currentStyling).forEach(function (key) {
            _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
          });
        }
      }

      if (changes.classes) {
        var currentClasses = changes.classes.currentValue;
        var previousClasses = changes.classes.previousValue;

        if (previousClasses) {
          this.removeClasses(previousClasses);
        }

        if (currentClasses) {
          this.addClasses(currentClasses);
        }
      } // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
      // `debounceTime` operator or vice-versa remove it.


      if (changes.debounceTime) {
        this.addQuillEventListeners();
      }
      /* eslint-enable @typescript-eslint/dot-notation */

    }
  }, {
    key: "addClasses",
    value: function addClasses(classList) {
      var _this6 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this6.renderer.addClass(_this6.editorElem, c);
      });
    }
  }, {
    key: "removeClasses",
    value: function removeClasses(classList) {
      var _this7 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this7.renderer.removeClass(_this7.editorElem, c);
      });
    }
  }, {
    key: "writeValue",
    value: function writeValue(currentValue) {
      // optional fix for https://github.com/angular/angular/issues/14988
      if (this.filterNull && currentValue === null) {
        return;
      }

      this.content = currentValue;

      if (!this.quillEditor) {
        return;
      }

      var format = getFormat(this.format, this.service.config.format);
      var newValue = this.valueSetter(this.quillEditor, currentValue);

      if (this.compareValues) {
        var currentEditorValue = this.quillEditor.getContents();

        if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
          return;
        }
      }

      if (currentValue) {
        if (format === 'text') {
          this.quillEditor.setText(currentValue);
        } else {
          this.quillEditor.setContents(newValue);
        }

        return;
      }

      this.quillEditor.setText('');
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState() {
      var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
      // store initial value to set appropriate disabled status after ViewInit
      this.disabled = isDisabled;

      if (this.quillEditor) {
        if (isDisabled) {
          this.quillEditor.disable();
          this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
        } else {
          if (!this.readOnly) {
            this.quillEditor.enable();
          }

          this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
        }
      }
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onModelChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this.onValidatorChanged = fn;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.quillEditor) {
        return null;
      }

      var err = {};
      var valid = true;
      var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

      var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
      var deltaOperations = this.quillEditor.getContents().ops;
      var onlyEmptyOperation = deltaOperations && deltaOperations.length === 1 && ['\n', ''].includes(deltaOperations[0].insert);

      if (this.minLength && textLength && textLength < this.minLength) {
        err.minLengthError = {
          given: textLength,
          minLength: this.minLength
        };
        valid = false;
      }

      if (this.maxLength && textLength > this.maxLength) {
        err.maxLengthError = {
          given: textLength,
          maxLength: this.maxLength
        };
        valid = false;
      }

      if (this.required && !textLength && onlyEmptyOperation) {
        err.requiredError = {
          empty: true
        };
        valid = false;
      }

      return valid ? null : err;
    }
  }, {
    key: "addQuillEventListeners",
    value: function addQuillEventListeners() {
      var _this8 = this;

      this.dispose(); // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
      // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
      // `zone.run` when we emit an event to the parent component.

      this.zone.runOutsideAngular(function () {
        _this8.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();

        _this8.subscription.add( // mark model as touched if editor lost focus
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8.quillEditor, 'selection-change').subscribe(function (_ref3) {
          var _ref4 = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 3),
              range = _ref4[0],
              oldRange = _ref4[1],
              source = _ref4[2];

          _this8.selectionChangeHandler(range, oldRange, source);
        })); // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
        // will be invoked upon subscription and teardown.


        var textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8.quillEditor, 'text-change');
        var editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8.quillEditor, 'editor-change');

        if (typeof _this8.debounceTime === 'number') {
          textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(_this8.debounceTime));
          editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(_this8.debounceTime));
        }

        _this8.subscription.add( // update model if text changes
        textChange$.subscribe(function (_ref5) {
          var _ref6 = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, 3),
              delta = _ref6[0],
              oldDelta = _ref6[1],
              source = _ref6[2];

          _this8.textChangeHandler(delta, oldDelta, source);
        }));

        _this8.subscription.add( // triggered if selection or text changed
        editorChange$.subscribe(function (_ref7) {
          var _ref8 = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref7, 4),
              event = _ref8[0],
              current = _ref8[1],
              old = _ref8[2],
              source = _ref8[3];

          _this8.editorChangeHandler(event, current, old, source);
        }));
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.subscription !== null) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }
    }
  }], [{
    key: "normalizeClassNames",
    value: function normalizeClassNames(classes) {
      var classList = classes.trim().split(' ');
      return classList.reduce(function (prev, cur) {
        var trimmed = cur.trim();

        if (trimmed) {
          prev.push(trimmed);
        }

        return prev;
      }, []);
    }
  }]);

  return QuillEditorBase;
}();

QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
  return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: QuillEditorBase,
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    required: "required",
    formats: "formats",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    styles: "styles",
    strict: "strict",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    customOptions: "customOptions",
    customModules: "customModules",
    trackChanges: "trackChanges",
    preserveWhitespace: "preserveWhitespace",
    classes: "classes",
    trimOnValidation: "trimOnValidation",
    linkPlaceholder: "linkPlaceholder",
    compareValues: "compareValues",
    filterNull: "filterNull",
    debounceTime: "debounceTime",
    defaultEmptyValue: "defaultEmptyValue",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onEditorChanged: "onEditorChanged",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }, {
      type: QuillService
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  });
})();

var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__["default"])(QuillEditorComponent, _QuillEditorBase);

  var _super = (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(QuillEditorComponent);

  function QuillEditorComponent(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillEditorComponent);

    return _super.call(this, injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service);
  }

  return (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillEditorComponent);
}(QuillEditorBase);

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
      return QuillEditorComponent;
    })
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
      return QuillEditorComponent;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0);
    }
  },
  styles: [":host{display:inline-block}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
          return QuillEditorComponent;
        })
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
          return QuillEditorComponent;
        })
      }],
      selector: 'quill-editor',
      template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n",
      styles: ["\n    :host {\n      display: inline-block;\n    }\n    "]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone]
      }]
    }, {
      type: QuillService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [QuillService]
      }]
    }];
  }, null);
})();

var QuillViewHTMLComponent = /*#__PURE__*/function () {
  function QuillViewHTMLComponent(sanitizer, service) {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillViewHTMLComponent);

    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.sanitize = false;
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillViewHTMLComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.theme) {
        var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
        this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
      } else if (!this.theme) {
        var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

        this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
      }

      if (changes.content) {
        var content = changes.content.currentValue;
        this.innerHTML = this.sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
      }
    }
  }]);

  return QuillViewHTMLComponent;
}();

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService));
};

QuillViewHTMLComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    theme: "theme",
    sanitize: "sanitize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
      template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n"
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  });
})();

var QuillViewComponent = /*#__PURE__*/function () {
  function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
    var _this9 = this;

    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillViewComponent);

    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.sanitize = false;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this9.format, _this9.service.config.format);
      var content = value;

      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          if (_this9.sanitize) {
            value = _this9.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_6__.SecurityContext.HTML, value);
          }

          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }

        quillEditor.setContents(content);
      }
    };
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillViewComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this.quillEditor) {
        return;
      }

      if (changes.content) {
        this.valueSetter(this.quillEditor, changes.content.currentValue);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this10 = this;

        var Quill, modules, debug, formats, theme;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformServer)(this.platformId)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context3.sent;
                modules = Object.assign({}, this.modules || this.service.config.modules);
                modules.toolbar = false;
                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref9) {
                  var implementation = _ref9.implementation,
                      path = _ref9.path;
                  Quill.register(path, implementation);
                });
                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                this.zone.runOutsideAngular(function () {
                  _this10.quillEditor = new Quill(_this10.editorElem, {
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    readOnly: true,
                    strict: _this10.strict,
                    theme: theme
                  });
                });
                this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                if (this.content) {
                  this.valueSetter(this.quillEditor, this.content);
                } // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
                // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.


                if (this.onEditorCreated.observers.length) {
                  _context3.next = 21;
                  break;
                }

                return _context3.abrupt("return");

              case 21:
                // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
                // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
                // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
                requestAnimationFrame(function () {
                  _this10.onEditorCreated.emit(_this10.quillEditor);
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }]);

  return QuillViewComponent;
}();

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID));
};

QuillViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    sanitize: "sanitize",
    strict: "strict",
    content: "content",
    customModules: "customModules",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace"
  },
  outputs: {
    onEditorCreated: "onEditorCreated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function QuillViewComponent_Template(rf, ctx) {},
  styles: [".ql-container.ngx-quill-view{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      selector: 'quill-view',
      styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
      template: "\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
      }]
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  });
})();

var QuillModule = /*#__PURE__*/function () {
  function QuillModule() {
    (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillModule);
  }

  (0,F_Front_End_kuwait_mozakrety_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: QuillModule,
        providers: [{
          provide: QUILL_CONFIG_TOKEN,
          useValue: config
        }]
      };
    }
  }]);

  return QuillModule;
}();

QuillModule.ɵfac = function QuillModule_Factory(t) {
  return new (t || QuillModule)();
};

QuillModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: QuillModule
});
QuillModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule,
    args: [{
      declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-quill
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_services_Admin_points_service_ts-src_app_admin_services_whatsApp_whatsA-92138c.js.map