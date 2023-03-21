"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["src_app_teacher_teacher_module_ts"],{

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
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






var AppDateAdapter = /*#__PURE__*/function (_NativeDateAdapter) {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppDateAdapter, _NativeDateAdapter);

  var _super = (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AppDateAdapter);

  function AppDateAdapter() {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppDateAdapter);

    return _super.apply(this, arguments);
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppDateAdapter, [{
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

/***/ 46129:
/*!************************************************************!*\
  !*** ./src/app/students/services/student-chats.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentChatService": function() { return /* binding */ StudentChatService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var StudentChatService = /*#__PURE__*/function () {
  function StudentChatService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentChatService);

    this.http = http;
  } // Return askTeacher Data


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentChatService, [{
    key: "askTeacher",
    value: function askTeacher(id) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "AJAX/askTeacher/" + id);
    } // Return Messages And replayes in msg

  }, {
    key: "getMsgReplaies",
    value: function getMsgReplaies(msgId) {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "MessageThreads/returnThreadReplies/" + msgId);
    } //Replay to Msg

  }, {
    key: "SendStudentMessage",
    value: function SendStudentMessage(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "AJAX/SendMessage", data);
    }
  }, {
    key: "getStudentScheduling",
    value: function getStudentScheduling() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AskTeacherSchedulings/GeTAskTeacherSchedulingForStudent"));
    }
  }, {
    key: "getCurrntThread",
    value: function getCurrntThread(threadId, SchedulId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "MessageThreads/").concat(threadId, "/").concat(SchedulId));
    }
  }, {
    key: "likeMsg",
    value: function likeMsg(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "UserLikes"), body);
    }
  }, {
    key: "unLikeMsg",
    value: function unLikeMsg(replyId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "UserLikes/").concat(replyId));
    }
  }]);

  return StudentChatService;
}();

StudentChatService.ɵfac = function StudentChatService_Factory(t) {
  return new (t || StudentChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

StudentChatService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StudentChatService,
  factory: StudentChatService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 21478:
/*!**********************************************************************!*\
  !*** ./src/app/teacher/pages/appreciation/appreciation.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppreciationComponent": function() { return /* binding */ AppreciationComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/teacher/services/teacher.service */ 36429);
/* harmony import */ var app_dashboard_services_setup_general_setup_appreciations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/general-setup/appreciations.service */ 79403);
/* harmony import */ var app_dashboard_services_setup_student_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/student/student.service */ 86717);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);






















function AppreciationComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var classroom_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", classroom_r6.AcademicClassRoomId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", classroom_r6.roomCode, " ");
  }
}

function AppreciationComponent_mat_hint_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function AppreciationComponent_mat_hint_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppreciationComponent_mat_hint_22_span_1_Template, 4, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.formCtrls == null ? null : ctx_r1.formCtrls.classroomId.errors == null ? null : ctx_r1.formCtrls.classroomId.errors.required);
  }
}

function AppreciationComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var student_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", student_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", student_r8.student_name, " ");
  }
}

function AppreciationComponent_mat_hint_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function AppreciationComponent_mat_hint_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppreciationComponent_mat_hint_30_span_1_Template, 4, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.formCtrls == null ? null : ctx_r3.formCtrls.studentIds.errors == null ? null : ctx_r3.formCtrls.studentIds.errors.required);
  }
}

function AppreciationComponent_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var expression_r10 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", expression_r10.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r4.currentLang == "ar" ? (tmp_1_0 = expression_r10.Ar_Name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : expression_r10.En_Name : (tmp_1_0 = expression_r10.En_Name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : expression_r10.Ar_Name, " ");
  }
}

function AppreciationComponent_mat_hint_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function AppreciationComponent_mat_hint_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppreciationComponent_mat_hint_41_span_1_Template, 4, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.formCtrls == null ? null : ctx_r5.formCtrls.AppreciationExpressionId.errors == null ? null : ctx_r5.formCtrls.AppreciationExpressionId.errors.required);
  }
}

var AppreciationComponent = /*#__PURE__*/function () {
  function AppreciationComponent(fb, teacherService, AppreciationExpressionServ, StudentServ, generalServ, translate, spinner, ToastrMsg, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppreciationComponent);

    this.fb = fb;
    this.teacherService = teacherService;
    this.AppreciationExpressionServ = AppreciationExpressionServ;
    this.StudentServ = StudentServ;
    this.generalServ = generalServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.route = route;
    this.authserv = authserv;
    this.submitted = false;
    this.classroomList = [];
    this.expressionsList = [];
    this.studentList = []; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppreciationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        // id: [0],
        classroomId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        studentIds: [{
          value: [],
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        expression: [""
        /* , [Validators.required, CustomeValidator.whiteSpace] */
        ],
        AppreciationExpressionId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
      });
      this.getAllClassroomsOfTeacher();
      this.getAllAppreciationExpressions();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllClassroomsOfTeacher();

        _this2.getAllAppreciationExpressions();
      });
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    } // get Classrooms >> dropDown

  }, {
    key: "getAllClassroomsOfTeacher",
    value: function getAllClassroomsOfTeacher() {
      var _this3 = this;

      this.spinner.show();
      this.teacherService.getClassesOfTeacher().subscribe(function (res) {
        if (res) _this3.classroomList = res;

        _this3.spinner.hide();
      });
    } // get Appreciation Expression >> dropDown

  }, {
    key: "getAllAppreciationExpressions",
    value: function getAllAppreciationExpressions() {
      var _this4 = this;

      this.spinner.show();
      this.AppreciationExpressionServ.getAllExpressionsDropDown().subscribe(function (res) {
        console.log("resss", res);
        if (res) _this4.expressionsList = res;

        _this4.spinner.hide();
      });
    } // get students in classroom

  }, {
    key: "onChangeClassroom",
    value: function onChangeClassroom(classroomId) {
      var _this5 = this;

      var _a, _b;

      console.log("cclll", classroomId);
      (_a = this.formCtrls) === null || _a === void 0 ? void 0 : _a.studentIds.setValue(null);

      if (classroomId) {
        this.spinner.show();
        this.StudentServ.GetAllStudentsByClassroomId(classroomId).subscribe(function (res) {
          var _a;

          if (res) {
            console.log("rrrrr", res);
            _this5.studentList = res;
            (_a = _this5.formCtrls) === null || _a === void 0 ? void 0 : _a.studentIds.enable();
          }

          _this5.spinner.hide();
        });
      } else (_b = this.formCtrls) === null || _b === void 0 ? void 0 : _b.studentIds.disable();
    } // send appreciation

  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this6 = this;

      var _a, _b, _c;

      this.submitted = true; // check to send each expression

      if (!((_a = this.formCtrls.AppreciationExpressionId) === null || _a === void 0 ? void 0 : _a.value)) {
        this.formCtrls.expression.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]);
        this.formCtrls.expression.updateValueAndValidity();
      } else {
        this.formCtrls.expression.clearValidators();
        this.formCtrls.expression.updateValueAndValidity();
      }

      if (this.myForm.valid) {
        var appreciation = {
          // eduCompId: this.EduCompId,
          ToUsers: (_b = this.formCtrls.studentIds) === null || _b === void 0 ? void 0 : _b.value,
          //FreeText: this.formCtrls.expression?.value,
          AppreciationExpressionId: (_c = this.formCtrls.AppreciationExpressionId) === null || _c === void 0 ? void 0 : _c.value
        };
        console.log("appreciation", appreciation);
        this.spinner.show();
        this.generalServ.sendAppreciation(appreciation).subscribe(function (res) {
          if (res.returnValue == 1) {
            _this6.ToastrMsg.error("General.SendSuccessfully");
          } else _this6.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this6.spinner.hide();
        });
      } else this.ToastrMsg.error("General.FormNotValid");
    }
  }]);

  return AppreciationComponent;
}();

AppreciationComponent.ɵfac = function AppreciationComponent_Factory(t) {
  return new (t || AppreciationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__.TeacherService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_dashboard_services_setup_general_setup_appreciations_service__WEBPACK_IMPORTED_MODULE_4__.AppreciationsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_dashboard_services_setup_student_student_service__WEBPACK_IMPORTED_MODULE_5__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_7__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
};

AppreciationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: AppreciationComponent,
  selectors: [["app-appreciation"]],
  decls: 47,
  vars: 28,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["formControlName", "classroomId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "studentIds", "multiple", ""], ["formControlName", "AppreciationExpressionId"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [3, "value"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"]],
  template: function AppreciationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function AppreciationComponent_Template_mat_select_selectionChange_17_listener() {
        return ctx.onChangeClassroom(ctx.formCtrls.classroomId.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, AppreciationComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, AppreciationComponent_mat_hint_22_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, AppreciationComponent_mat_option_29_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, AppreciationComponent_mat_hint_30_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, AppreciationComponent_mat_option_40_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, AppreciationComponent_mat_hint_41_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "mat-card-actions", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppreciationComponent_Template_button_click_43_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 14, "Teacher.Appreciation"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 16, "classes.classRoom"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 18, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.classroomList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.classroomId.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.classroomId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 20, "labels.Students"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.studentList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.studentIds.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.studentIds.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 22, "Teacher.Expression"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 24, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.expressionsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.AppreciationExpressionId.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.AppreciationExpressionId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 26, "General.Send"), " ");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByZWNpYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 12958:
/*!****************************************************************************!*\
  !*** ./src/app/teacher/pages/chat-scheduling/chat-scheduling.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatSchedulingComponent": function() { return /* binding */ ChatSchedulingComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_teacher_services_teacher_chats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/teacher/services/teacher-chats.service */ 65648);
/* harmony import */ var app_teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/teacher/services/teacher.service */ 36429);
/* harmony import */ var app_dashboard_services_educational_tabels_weekly_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/educational-tabels/weekly-table.service */ 95740);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);





















function ChatSchedulingComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var classroom_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", classroom_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", classroom_r6.roomCode, " ");
  }
}

function ChatSchedulingComponent_mat_hint_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function ChatSchedulingComponent_mat_hint_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatSchedulingComponent_mat_hint_22_span_1_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.formCtrls == null ? null : ctx_r1.formCtrls.classroomId.errors == null ? null : ctx_r1.formCtrls.classroomId.errors.required);
  }
}

function ChatSchedulingComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var day_r8 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", day_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.currentLang == "ar" ? day_r8.Ar_Name : day_r8.En_Name, " ");
  }
}

function ChatSchedulingComponent_mat_hint_33_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function ChatSchedulingComponent_mat_hint_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatSchedulingComponent_mat_hint_33_span_1_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formCtrls == null ? null : ctx_r3.formCtrls.weeklyDayId.errors == null ? null : ctx_r3.formCtrls.weeklyDayId.errors.required);
  }
}

function ChatSchedulingComponent_mat_hint_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function ChatSchedulingComponent_mat_hint_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatSchedulingComponent_mat_hint_40_span_1_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.formCtrls.From_Hour == null ? null : ctx_r4.formCtrls.From_Hour.errors == null ? null : ctx_r4.formCtrls.From_Hour.errors.required);
  }
}

function ChatSchedulingComponent_mat_hint_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function ChatSchedulingComponent_mat_hint_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatSchedulingComponent_mat_hint_47_span_1_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formCtrls.To_Hour == null ? null : ctx_r5.formCtrls.To_Hour.errors == null ? null : ctx_r5.formCtrls.To_Hour.errors.required);
  }
}

var ChatSchedulingComponent = /*#__PURE__*/function () {
  function ChatSchedulingComponent(fb, ChatServ, teacherService, WeeklyTableServ, translate, spinner, ToastrMsg, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatSchedulingComponent);

    this.fb = fb;
    this.ChatServ = ChatServ;
    this.teacherService = teacherService;
    this.WeeklyTableServ = WeeklyTableServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.route = route;
    this.authserv = authserv;
    this.submitted = false;
    this.classroomList = [];
    this.weeklyDays = []; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatSchedulingComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        // id: [0],
        classroomId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        weeklyDayId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        From_Hour: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        To_Hour: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
      this.getAllClassrooms();
      this.getAllWeeklyDays();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllClassrooms();

        _this2.getAllWeeklyDays();
      });
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    } // get Classrooms >> dropDown

  }, {
    key: "getAllClassrooms",
    value: function getAllClassrooms() {
      var _this3 = this;

      this.spinner.show();
      this.teacherService.getClassesOfTeacher().subscribe(function (res) {
        if (res) _this3.classroomList = res;

        _this3.spinner.hide();
      });
    } // get Weekly Day

  }, {
    key: "getAllWeeklyDays",
    value: function getAllWeeklyDays() {
      var _this4 = this;

      this.spinner.show();
      this.WeeklyTableServ.getAllWeeklyDays().subscribe(function (res) {
        if (res) _this4.weeklyDays = res;

        _this4.spinner.hide();
      });
    } // add chat scheduling

  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this5 = this;

      var _a, _b, _c, _d;

      this.submitted = true;

      if (this.myForm.valid) {
        if (this.formCtrls.To_Hour.value < this.formCtrls.From_Hour.value) {
          this.ToastrMsg.error("EducationalTabels.ToHourBeforeFromDHour");
          return;
        }

        var ChatScheduling = {
          // eduCompId: this.EduCompId,
          classroomId: (_a = this.formCtrls.classroomId) === null || _a === void 0 ? void 0 : _a.value,
          weeklyDayId: (_b = this.formCtrls.weeklyDayId) === null || _b === void 0 ? void 0 : _b.value,
          From_Hour: (_c = this.formCtrls.From_Hour) === null || _c === void 0 ? void 0 : _c.value,
          To_Hour: (_d = this.formCtrls.To_Hour) === null || _d === void 0 ? void 0 : _d.value
        }; // console.log("ChatScheduling", ChatScheduling);

        this.spinner.show();
        this.ChatServ.addChatScheduling(ChatScheduling).subscribe(function (res) {
          if (res.returnValue == 1) {
            _this5.ToastrMsg.error("General.AddSuccessfully");
          } else _this5.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this5.spinner.hide();
        });
      } else this.ToastrMsg.error("General.FormNotValid");
    }
  }]);

  return ChatSchedulingComponent;
}();

ChatSchedulingComponent.ɵfac = function ChatSchedulingComponent_Factory(t) {
  return new (t || ChatSchedulingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_teacher_services_teacher_chats_service__WEBPACK_IMPORTED_MODULE_2__.TeacherChatService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__.TeacherService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_educational_tabels_weekly_table_service__WEBPACK_IMPORTED_MODULE_4__.WeeklyTableService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
};

ChatSchedulingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ChatSchedulingComponent,
  selectors: [["app-chat-scheduling"]],
  decls: 53,
  vars: 31,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["formControlName", "classroomId"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "weeklyDayId"], ["matInput", "", "type", "time", "formControlName", "From_Hour"], ["matInput", "", "type", "time", "formControlName", "To_Hour"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [3, "value"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"]],
  template: function ChatSchedulingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ChatSchedulingComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ChatSchedulingComponent_mat_hint_22_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ChatSchedulingComponent_mat_option_32_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ChatSchedulingComponent_mat_hint_33_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ChatSchedulingComponent_mat_hint_40_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, ChatSchedulingComponent_mat_hint_47_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-card-actions", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatSchedulingComponent_Template_button_click_49_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](52, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 15, "Teacher.ChatScheduling"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 17, "classes.classRoom"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 19, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.classroomList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.classroomId.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.classroomId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 21, "EducationalTabels.Day"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 23, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.weeklyDays);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.weeklyDayId.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.weeklyDayId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 25, "EducationalTabels.FromHour"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls.From_Hour == null ? null : ctx.formCtrls.From_Hour.invalid) && ((ctx.formCtrls.From_Hour == null ? null : ctx.formCtrls.From_Hour.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 27, "EducationalTabels.ToHour"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls.To_Hour == null ? null : ctx.formCtrls.To_Hour.invalid) && ((ctx.formCtrls.To_Hour == null ? null : ctx.formCtrls.To_Hour.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](52, 29, "General.Add"), " ");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LXNjaGVkdWxpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 76062:
/*!****************************************************************************!*\
  !*** ./src/app/teacher/pages/chat-time-table/chat-time-table.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatTimeTableComponent": function() { return /* binding */ ChatTimeTableComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_teacher_services_teacher_chats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/teacher/services/teacher-chats.service */ 65648);
/* harmony import */ var app_shared_services_General_group_by_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/group-by.service */ 69965);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/Time.pipe */ 45318);













var _c0 = function _c0(a0) {
  return {
    ThreadId: a0
  };
};

var _c1 = function _c1(a0, a1, a2) {
  return {
    "border-ar": a0,
    "border-en": a1,
    "first-row": a2
  };
};

function ChatTimeTableComponent_ng_container_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var schedule_r4 = ctx.$implicit;
    var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "../chats/", schedule_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c0, schedule_r4.messageThread == null ? null : schedule_r4.messageThread.Id))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](13, _c1, ctx_r3.currentLang == "ar", ctx_r3.currentLang == "en", i_r2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", schedule_r4.teacherPicture.attach_path, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", schedule_r4.teacherName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 7, schedule_r4.FromHour), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 9, schedule_r4.ToHour), " ");
  }
}

function ChatTimeTableComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ChatTimeTableComponent_ng_container_10_ng_container_7_Template, 16, 17, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var day_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c1, ctx_r0.currentLang == "ar", ctx_r0.currentLang == "en", i_r2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](day_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", day_r1.List);
  }
}

var ChatTimeTableComponent = /*#__PURE__*/function () {
  function ChatTimeTableComponent(ChatServ, GroupByService, translate, spinner, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatTimeTableComponent);

    this.ChatServ = ChatServ;
    this.GroupByService = GroupByService;
    this.translate = translate;
    this.spinner = spinner;
    this.route = route;
    this.authserv = authserv; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatTimeTableComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getTecherScheduling();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getTecherScheduling();
      });
    }
  }, {
    key: "getTecherScheduling",
    value: function getTecherScheduling() {
      var _this3 = this;

      this.spinner.show();
      this.ChatServ.getTeacherChatScheduling().subscribe(function (res) {
        if (res) {
          console.log("res Groups", _this3.GroupByService.groupBy(res, "Day"));
          console.log("res", res);
          _this3.teacherTimeTable = _this3.GroupByService.groupBy(res, "Day");
        }

        _this3.spinner.hide();
      });
    }
  }]);

  return ChatTimeTableComponent;
}();

ChatTimeTableComponent.ɵfac = function ChatTimeTableComponent_Factory(t) {
  return new (t || ChatTimeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_teacher_services_teacher_chats_service__WEBPACK_IMPORTED_MODULE_2__.TeacherChatService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_General_group_by_service__WEBPACK_IMPORTED_MODULE_3__.GroupByService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};

ChatTimeTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ChatTimeTableComponent,
  selectors: [["app-chat-time-table"]],
  decls: 11,
  vars: 4,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "mb-2"], [1, "col-12", "table-container"], [4, "ngFor", "ngForOf"], [1, "col", "day-cell", 3, "ngClass"], [1, "col"], [1, "col", "schedule-card", 3, "routerLink", "queryParams", "ngClass"], [1, "card-cell"], ["alt", "", 1, "card-image", 3, "src"], [1, "schedule-title"], [1, "text-danger"], [1, "time-text"]],
  template: function ChatTimeTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ChatTimeTableComponent_ng_container_10_Template, 8, 7, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 2, "Teacher.ChatTimeTable"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.teacherTimeTable);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _shared_pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_5__.TimePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LXRpbWUtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 22805:
/*!************************************************************************!*\
  !*** ./src/app/teacher/pages/teacher-chats/teacher-chats.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherChatsComponent": function() { return /* binding */ TeacherChatsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_teacher_services_teacher_chats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/teacher/services/teacher-chats.service */ 65648);
/* harmony import */ var app_students_services_student_chats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/students/services/student-chats.service */ 46129);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/Time.pipe */ 45318);
/* harmony import */ var _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/slice-exam-pic.pipe */ 51033);
























function TeacherChatsComponent_span_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function TeacherChatsComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, TeacherChatsComponent_span_11_span_1_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r1.replyQueueAmountCtrl == null ? null : ctx_r1.replyQueueAmountCtrl.errors == null ? null : ctx_r1.replyQueueAmountCtrl.errors.required) || (ctx_r1.replyQueueAmountCtrl == null ? null : ctx_r1.replyQueueAmountCtrl.errors == null ? null : ctx_r1.replyQueueAmountCtrl.errors.bigZero));
  }
}

function TeacherChatsComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r8.createMessageThread();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function TeacherChatsComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r10.updateMessageThreads();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function TeacherChatsComponent_div_20_div_8_p_1_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 42);
  }

  if (rf & 2) {
    var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3).$implicit;
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r21.uploadFileService.previewPicture(msg_r12.ParentReply.Attach), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}

function TeacherChatsComponent_div_20_div_8_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, TeacherChatsComponent_div_20_div_8_p_1_img_7_Template, 1, 1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", msg_r12.ParentReply.Username, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", msg_r12.ParentReply.Message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", msg_r12.ParentReply.Attach);
  }
}

function TeacherChatsComponent_div_20_div_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, "labels.MsgDeleted"), " ");
  }
}

function TeacherChatsComponent_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, TeacherChatsComponent_div_20_div_8_p_1_Template, 8, 3, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, TeacherChatsComponent_div_20_div_8_p_2_Template, 5, 3, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !msg_r12.ParentReply.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", msg_r12.ParentReply.IsDelete);
  }
}

function TeacherChatsComponent_div_20_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", msg_r12.Message, " ");
  }
}

function TeacherChatsComponent_div_20_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, "labels.MsgDeleted"), " ");
  }
}

function TeacherChatsComponent_div_20_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "sliceExamPic");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "sliceExamPic");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", ctx_r16.uploadFileService.previewPicture(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, msg_r12.Attach)), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r16.uploadFileService.previewPicture(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, msg_r12.Attach)), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}

var _c0 = function _c0(a0) {
  return {
    danger: a0
  };
};

var _c1 = function _c1(a0, a1) {
  return {
    danger: a0,
    wieght: a1
  };
};

function TeacherChatsComponent_div_20_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](3, _c0, msg_r12.Likes > 0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](5, _c1, msg_r12.Likes > 0, msg_r12.Likes == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", msg_r12.Likes > 0 ? msg_r12.Likes : "", " ");
  }
}

function TeacherChatsComponent_div_20_span_19_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_div_20_span_19_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r28.openDeleteDialog(msg_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

var _c2 = function _c2(a0, a1, a2) {
  return {
    "chat-right": a0,
    "chat-left": a1,
    "msg-not-seen": a2
  };
};

var _c3 = function _c3(a0) {
  return {
    "bg-info": a0
  };
};

function TeacherChatsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, TeacherChatsComponent_div_20_div_8_Template, 3, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, TeacherChatsComponent_div_20_p_9_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, TeacherChatsComponent_div_20_p_10_Template, 5, 3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, TeacherChatsComponent_div_20_div_11_Template, 5, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, TeacherChatsComponent_div_20_span_18_Template, 3, 8, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, TeacherChatsComponent_div_20_span_19_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_div_20_Template_span_click_20_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r32);
      var msg_r12 = restoredCtx.$implicit;
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r31.getParentReplyId(msg_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r12 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "replay-", msg_r12.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](19, _c2, msg_r12.userId == ctx_r4.currentUserId, msg_r12.userId != ctx_r4.currentUserId, !msg_r12.isShown));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("alt", msg_r12.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r4.uploadFileService.previewPicture(msg_r12.UserprofilePicture), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](23, _c3, msg_r12.userId == ctx_r4.currentUserId));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", msg_r12.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", msg_r12.ParentReply.Id != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !msg_r12.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", msg_r12.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", msg_r12.Attach && !msg_r12.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](16, 14, msg_r12.Date, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 17, msg_r12.Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", msg_r12.isTeacher);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !msg_r12.IsDelete);
  }
}

function TeacherChatsComponent_section_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r33.uploadFileService.previewPicture(ctx_r33.attachecFilePath), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}

function TeacherChatsComponent_section_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("        ", ctx_r34.selectedMsgToReplay.Message, "\n        ");
  }
}

function TeacherChatsComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_section_21_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36);
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r35.closePreview();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, TeacherChatsComponent_section_21_div_5_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, TeacherChatsComponent_section_21_div_6_Template, 3, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.attachecFilePath != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.selectedMsgToReplay != null);
  }
}

function TeacherChatsComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "form", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_section_22_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);

      var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);

      return _r37.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function TeacherChatsComponent_section_22_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r40.attacheReplayPic($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_section_22_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r41.ReplayToMessage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r6.replayForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r6.FormCtrl.threadId.value == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 3, "General.Send"), " ");
  }
}

var _c4 = function _c4(a0) {
  return {
    show: a0
  };
};

var TeacherChatsComponent = /*#__PURE__*/function () {
  function TeacherChatsComponent(fb, teacherChatService, studentChatService, uploadFileService, GeneralServ, authService, toastr, route, router, dialog, spinner) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherChatsComponent);

    this.fb = fb;
    this.teacherChatService = teacherChatService;
    this.studentChatService = studentChatService;
    this.uploadFileService = uploadFileService;
    this.GeneralServ = GeneralServ;
    this.authService = authService;
    this.toastr = toastr;
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.spinner = spinner;
    this.MsgReplaies = []; //List of replaies For Msg

    this.selectedMsgToReplay = null;
    this.attachecFilePath = null;
    this.msgGroup = null;
    this.creatSubmitted = false;
    this.currentThreadId = null;
    this.isContentOverlay = false;
    this.route.paramMap.subscribe(function (params) {
      _this.schedulingId = params.get("SchedulingId");
      console.log("schedulingId:", _this.schedulingId);
    });
    this.route.queryParamMap.subscribe(function (params) {
      _this.currentThreadId = params.get("ThreadId");
      console.log("currentThreadId:", _this.currentThreadId);
    });
    this.currentUserId = authService.getUserId();
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherChatsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getTeacherSubjectIds();
      this.replayForm = this.fb.group({
        threadId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        TeacherSubjectIds: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        ParentReplyId: [null],
        Attach: [null],
        ReplyText: [""]
      });
      this.createThreadForm = this.fb.group({
        askTeacherSchedulingId: [this.schedulingId, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        replyQueueAmount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.bigZero]]
      });

      if (this.currentThreadId != null) {
        this.getMsgReplaies(this.currentThreadId);
        this.FormCtrl.threadId.setValue(this.currentThreadId);
        this.getCurrntThread();
      }
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.replayForm.controls;
    }
  }, {
    key: "replyQueueAmountCtrl",
    get: function get() {
      return this.createThreadForm.get("replyQueueAmount");
    }
  }, {
    key: "getTeacherSubjectIds",
    value: function getTeacherSubjectIds() {
      var _this2 = this;

      this.teacherChatService.getTeacherSubjectIds().subscribe(function (res) {
        if (res) {
          //  console.log("TeacherSubjectIds", res);
          _this2.FormCtrl.TeacherSubjectIds.setValue(res);
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "getMsgReplaies",
    value: function getMsgReplaies(msgId) {
      var _this3 = this;

      this.spinner.show();
      this.studentChatService.getMsgReplaies(msgId).subscribe(function (res) {
        _this3.MsgReplaies = res; // setTimeout(function () {
        //   $(".chat-box .chat-body").animate(
        //     { scrollTop: $(".chat-box .chat-body").prop("scrollHeight") },
        //     1000
        //   );
        // }, 1000);

        _this3.spinner.hide();
      });
    }
  }, {
    key: "ReplayToMessage",
    value: function ReplayToMessage() {
      var _this4 = this;

      this.spinner.show();

      if (this.replayForm.valid) {
        this.teacherChatService.SendTeacherMessage(this.replayForm.value).subscribe(function (res) {
          // console.log('ReplayToMessage', res);
          if (res.returnString == "Success") {
            _this4.getMsgReplaies(_this4.FormCtrl.threadId.value);

            _this4.FormCtrl.ReplyText.reset();

            _this4.FormCtrl.Attach.reset();

            _this4.closePreview(); // $(".chat-box .chat-body").animate(
            //   { scrollTop: $(".chat-box .chat-body").prop("scrollHeight") },
            //   1000
            // );

          } else {
            _this4.toastr.error(res.returnString);
          }

          _this4.spinner.hide();
        });
      }
    }
  }, {
    key: "getCurrntThread",
    value: function getCurrntThread() {
      var _this5 = this;

      this.studentChatService.getCurrntThread(this.currentThreadId, this.schedulingId).subscribe(function (res) {
        console.log("CurrntThread", res);
        _this5.msgGroup = res.messageThread; // this.createThreadForm.controls['Id'].setValue(this.currentThreadId);
        //this.enterNewThread(res.Id);
        //this.currentThreadId = res.Id;
      });
    }
  }, {
    key: "createMessageThread",
    value: function createMessageThread() {
      var _this6 = this;

      this.creatSubmitted = true;
      var valid = this.createThreadForm.valid;
      console.log(this.createThreadForm.value);

      if (valid) {
        this.spinner.show();
        this.teacherChatService.createMessageThreads(this.createThreadForm.value).subscribe(function (res) {
          console.log(res);

          _this6.router.navigate([], {
            relativeTo: _this6.route,
            queryParams: {
              ThreadId: res.Id
            },
            queryParamsHandling: "merge"
          });

          _this6.msgGroup = res;
          _this6.creatSubmitted = false;
          _this6.currentThreadId = res.Id;

          _this6.FormCtrl.threadId.setValue(res.Id);

          _this6.createThreadForm.controls["replyQueueAmount"].reset();

          _this6.getMsgReplaies(res.Id);

          _this6.toastr.success("General.AddSuccessfully");

          _this6.spinner.hide();
        });
      }
    }
  }, {
    key: "updateMessageThreads",
    value: function updateMessageThreads() {
      var _this7 = this;

      this.creatSubmitted = true;
      var valid = this.createThreadForm.valid;
      console.log(this.createThreadForm.value);

      if (valid) {
        this.spinner.show();
        this.teacherChatService.updateMessageThreads(this.createThreadForm.value, this.currentThreadId).subscribe(function (res) {
          console.log(res);

          if (res.Id == _this7.currentThreadId) {
            _this7.creatSubmitted = false;

            _this7.getMsgReplaies(res.Id);

            _this7.createThreadForm.controls["replyQueueAmount"].reset();

            _this7.toastr.success("General.UpdateSuccessfully");
          } // this.msgGroup = res;


          _this7.spinner.hide();
        });
      }
    }
  }, {
    key: "removeReply",
    value: function removeReply(msgId) {
      var _this8 = this;

      this.spinner.show();
      this.teacherChatService.removeReply(msgId).subscribe(function (res) {
        //  console.log('removeReply', res);
        if (res.returnValue == 1) {
          _this8.toastr.success("تم حذف الرسالة");

          _this8.getMsgReplaies(_this8.FormCtrl.threadId.value);
        }

        _this8.spinner.hide();
      });
    }
  }, {
    key: "getParentReplyId",
    value: function getParentReplyId(msg) {
      this.FormCtrl.ParentReplyId.setValue(msg.Id);
      this.selectedMsgToReplay = msg;

      if (msg) {
        console.log("ParentReplyIdMsg", msg);
      }

      console.log(this.replayForm.value);
    }
  }, {
    key: "closePreview",
    value: function closePreview() {
      this.FormCtrl.Attach.setValue(null);
      this.FormCtrl.ParentReplyId.setValue("");
      this.selectedMsgToReplay = null;
      this.attachecFilePath = null;
    } // attache Replay Pic

  }, {
    key: "attacheReplayPic",
    value: function attacheReplayPic(event) {
      var _this9 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          _this9.FormCtrl.Attach.setValue(file);

          _this9.attachecFilePath = file;
        }, 100);
      });
    }
  }, {
    key: "onSidebarToggle",
    value: function onSidebarToggle() {
      this.isContentOverlay = true;
    }
  }, {
    key: "onContentOverlay",
    value: function onContentOverlay() {
      this.isContentOverlay = false;
    }
  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog(msg) {
      var _this10 = this;

      var dialogRef = this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          title: "General.ConfirmDelete",
          msg: msg.Message
        }
      });
      dialogRef.afterClosed().subscribe(function (confirm) {
        if (confirm) _this10.removeReply(msg.Id);
      });
    }
  }]);

  return TeacherChatsComponent;
}();

TeacherChatsComponent.ɵfac = function TeacherChatsComponent_Factory(t) {
  return new (t || TeacherChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_teacher_services_teacher_chats_service__WEBPACK_IMPORTED_MODULE_4__.TeacherChatService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_students_services_student_chats_service__WEBPACK_IMPORTED_MODULE_5__.StudentChatService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_7__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_9__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerService));
};

TeacherChatsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: TeacherChatsComponent,
  selectors: [["app-chats"]],
  decls: 23,
  vars: 11,
  consts: [[1, "chat-application", "overflow-hidden", "p-1", "pb-2"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [1, "chat-name", "p-1"], [1, "chat-app-sidebar-toggle", "ft-menu", "font-medium-4", "mr-3", "d-block", "d-md-none", 3, "click"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-6"], [1, "d-inline-block", 3, "formGroup"], ["formControlName", "replyQueueAmount", "type", "number", "placeholder", "Students Numbers", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["class", "mr-1 ml-1", "mat-mini-fab", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "text-center", 3, "click"], ["role", "alert", 1, "alert", "alert-light", "m-0"], [1, "chat-app-window", "position-relative"], [1, "chats"], ["class", "chat", 3, "ngClass", "id", 4, "ngFor", "ngForOf"], ["class", "chat-app-form chat-replay-options bg-light-primary", 4, "ngIf"], ["class", "chat-app-form px-3 py-2", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], ["mat-mini-fab", "", "color", "warn", 1, "mr-1", "ml-1", 3, "click"], [1, "chat", 3, "ngClass", "id"], [1, "chat-avatar"], [1, "avatar", "avatar-md"], [3, "src", "alt"], [1, "chat-body"], [1, "chat-content", 3, "ngClass"], [1, "username"], ["class", "replay-box rounded bg-light-secondary", 4, "ngIf"], ["class", "content", 4, "ngIf"], ["class", "content", "class", "content replytext", 4, "ngIf"], [1, "msg-time"], ["class", "msg-opt-icons mr-1", 3, "ngClass", 4, "ngIf"], ["class", "cursor-pointer", 3, "click", 4, "ngIf"], [1, "cursor-pointer", 3, "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Reply To This Message", 1, "ft-repeat"], [1, "replay-box", "rounded", "bg-light-secondary"], ["class", "content replytext", 4, "ngIf"], [1, "content", "replytext"], [2, "display", "block"], [1, "ft-repeat"], ["style", "width: 50px; height: 50px", 3, "src", 4, "ngIf"], [2, "width", "50px", "height", "50px", 3, "src"], [1, "deleted-msg"], [1, "fa", "fa-ban"], [1, "content"], ["target", "_blank", "data-lightbox", "image-1", "data-title", "", 3, "href"], [1, "img-responsive", 3, "src"], [1, "msg-opt-icons", "mr-1", 3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-heart"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Delete This Message", 1, "ft-trash-2", "mr-1"], [1, "chat-app-form", "chat-replay-options", "bg-light-primary"], [1, "row"], ["mat-mini-fab", "", "color", "warn", 1, "escprev", 3, "click"], ["class", "col-4", "class", "img-responsive", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "img-responsive"], ["alt", "Photo attached", 1, "img-responsive", 3, "src"], [1, "col-6"], ["disabled", "", 1, "rplayedMsg"], [1, "chat-app-form", "px-3", "py-2"], [1, "d-flex", "align-items-center", 3, "formGroup"], ["formControlName", "ReplyText", "type", "text", "placeholder", "Type your replay here", 1, "form-control", "chat-message-send", "mr-2"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["hidden", "", "type", "file", "accept", "image/*", "id", "file", 3, "change"], ["fileInput", ""], ["type", "submit", 1, "btn", "btn-primary", "d-lg-flex", "align-items-center", 3, "disabled", "click"], [1, "ft-send"], [1, "d-none", "d-lg-block", "ml-1"]],
  template: function TeacherChatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_Template_div_click_2_listener() {
        return ctx.onContentOverlay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_Template_span_click_6_listener() {
        return ctx.onSidebarToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, TeacherChatsComponent_span_11_Template, 2, 1, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, TeacherChatsComponent_button_12_Template, 3, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, TeacherChatsComponent_button_13_Template, 3, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeacherChatsComponent_Template_a_click_15_listener() {
        return ctx.getMsgReplaies(ctx.msgGroup == null ? null : ctx.msgGroup.Id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "section", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, TeacherChatsComponent_div_20_Template, 22, 25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, TeacherChatsComponent_section_21_Template, 7, 2, "section", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, TeacherChatsComponent_section_22_Template, 13, 5, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](9, _c4, ctx.isContentOverlay));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.createThreadForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.replyQueueAmountCtrl == null ? null : ctx.replyQueueAmountCtrl.invalid) && ((ctx.replyQueueAmountCtrl == null ? null : ctx.replyQueueAmountCtrl.touched) || ctx.creatSubmitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currentThreadId == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currentThreadId != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.msgGroup == null ? null : ctx.msgGroup.ThreadText, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.MsgReplaies);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.attachecFilePath != null || ctx.selectedMsgToReplay != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.FormCtrl.threadId.value != null);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _shared_pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_10__.TimePipe, _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_11__.SliceExamPicPipe],
  styles: [".chat-application[_ngcontent-%COMP%]   .chat-app-window[_ngcontent-%COMP%], .chat-application[_ngcontent-%COMP%]   .chat-name[_ngcontent-%COMP%], .chat-application[_ngcontent-%COMP%]   .chat-app-form[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItY2hhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFNBQUE7QUFDRiIsImZpbGUiOiJ0ZWFjaGVyLWNoYXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtYXBwLXdpbmRvdyxcclxuLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtbmFtZSxcclxuLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtYXBwLWZvcm0ge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 65648:
/*!***********************************************************!*\
  !*** ./src/app/teacher/services/teacher-chats.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherChatService": function() { return /* binding */ TeacherChatService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var TeacherChatService = /*#__PURE__*/function () {
  function TeacherChatService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherChatService);

    this.http = http;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherChatService, [{
    key: "addChatScheduling",
    value: function addChatScheduling(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AskTeacherSchedulings"), data);
    } // get teacher chat time table

  }, {
    key: "getTeacherChatScheduling",
    value: function getTeacherChatScheduling() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AskTeacherSchedulings/GeTAskTeacherScheduling"));
    }
  }, {
    key: "getTeacherSubjectIds",
    value: function getTeacherSubjectIds() {
      return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "AJAX/returnTeacherSubjectIdsForAssistant");
    }
  }, {
    key: "SendTeacherMessage",
    value: function SendTeacherMessage(data) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "MessageThreads/SendMessage", data);
    }
  }, {
    key: "closeMsg",
    value: function closeMsg(msgId) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AJAX/CloseThread/").concat(msgId), null);
    }
  }, {
    key: "removeReply",
    value: function removeReply(msgId) {
      return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "AJAX/RemoveReply/" + msgId);
    }
  }, {
    key: "createMessageThreads",
    value: function createMessageThreads(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "MessageThreads", body);
    }
  }, {
    key: "updateMessageThreads",
    value: function updateMessageThreads(body, ThreadId) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "MessageThreads/").concat(ThreadId), body);
    }
  }]);

  return TeacherChatService;
}();

TeacherChatService.ɵfac = function TeacherChatService_Factory(t) {
  return new (t || TeacherChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

TeacherChatService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TeacherChatService,
  factory: TeacherChatService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 19927:
/*!***************************************************!*\
  !*** ./src/app/teacher/teacher-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherRoutingModule": function() { return /* binding */ TeacherRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_chat_scheduling_chat_scheduling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/chat-scheduling/chat-scheduling.component */ 12958);
/* harmony import */ var _pages_chat_time_table_chat_time_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/chat-time-table/chat-time-table.component */ 76062);
/* harmony import */ var app_shared_components_send_appreciation_send_appreciation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/components/send-appreciation/send-appreciation.component */ 58798);
/* harmony import */ var _pages_teacher_chats_teacher_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/teacher-chats/teacher-chats.component */ 22805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









var routes = [{
  path: "appreciation",
  component: app_shared_components_send_appreciation_send_appreciation_component__WEBPACK_IMPORTED_MODULE_4__.SendAppreciationComponent
}, {
  path: "chat-scheduling",
  component: _pages_chat_scheduling_chat_scheduling_component__WEBPACK_IMPORTED_MODULE_2__.ChatSchedulingComponent
}, {
  path: "chat-table",
  component: _pages_chat_time_table_chat_time_table_component__WEBPACK_IMPORTED_MODULE_3__.ChatTimeTableComponent
}, {
  path: "chats/:SchedulingId",
  component: _pages_teacher_chats_teacher_chats_component__WEBPACK_IMPORTED_MODULE_5__.TeacherChatsComponent
}];
var TeacherRoutingModule = /*#__PURE__*/(0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TeacherRoutingModule() {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TeacherRoutingModule);
});

TeacherRoutingModule.ɵfac = function TeacherRoutingModule_Factory(t) {
  return new (t || TeacherRoutingModule)();
};

TeacherRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: TeacherRoutingModule
});
TeacherRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TeacherRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 33042:
/*!*******************************************!*\
  !*** ./src/app/teacher/teacher.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherModule": function() { return /* binding */ TeacherModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-routing.module */ 19927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/validators/date.adapter */ 89778);
/* harmony import */ var _pages_appreciation_appreciation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/appreciation/appreciation.component */ 21478);
/* harmony import */ var _pages_chat_scheduling_chat_scheduling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/chat-scheduling/chat-scheduling.component */ 12958);
/* harmony import */ var _pages_chat_time_table_chat_time_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/chat-time-table/chat-time-table.component */ 76062);
/* harmony import */ var _pages_teacher_chats_teacher_chats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/teacher-chats/teacher-chats.component */ 22805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
















var TeacherModule = /*#__PURE__*/(0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TeacherModule() {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TeacherModule);
});

TeacherModule.ɵfac = function TeacherModule_Factory(t) {
  return new (t || TeacherModule)();
};

TeacherModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: TeacherModule
});
TeacherModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.DateAdapter,
    useClass: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_5__.AppDateAdapter
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_FORMATS,
    useValue: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_5__.APP_DATE_FORMATS
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerModule, _teacher_routing_module__WEBPACK_IMPORTED_MODULE_2__.TeacherRoutingModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](TeacherModule, {
    declarations: [_pages_appreciation_appreciation_component__WEBPACK_IMPORTED_MODULE_6__.AppreciationComponent, _pages_chat_scheduling_chat_scheduling_component__WEBPACK_IMPORTED_MODULE_7__.ChatSchedulingComponent, _pages_chat_time_table_chat_time_table_component__WEBPACK_IMPORTED_MODULE_8__.ChatTimeTableComponent, _pages_teacher_chats_teacher_chats_component__WEBPACK_IMPORTED_MODULE_9__.TeacherChatsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerModule, _teacher_routing_module__WEBPACK_IMPORTED_MODULE_2__.TeacherRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_teacher_teacher_module_ts.js.map