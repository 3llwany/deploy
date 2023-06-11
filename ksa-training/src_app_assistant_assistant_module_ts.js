"use strict";
(self["webpackChunkegyTrainingNew"] = self["webpackChunkegyTrainingNew"] || []).push([["src_app_assistant_assistant_module_ts"],{

/***/ 2248:
/*!*******************************************************!*\
  !*** ./src/app/assistant/assistant-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssistantRoutingModule": function() { return /* binding */ AssistantRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _pages_chats_chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/chats/chats.component */ 18489);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: "chat",
  component: _pages_chats_chats_component__WEBPACK_IMPORTED_MODULE_2__.ChatsComponent
}];
var AssistantRoutingModule = /*#__PURE__*/(0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AssistantRoutingModule() {
  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AssistantRoutingModule);
});

AssistantRoutingModule.ɵfac = function AssistantRoutingModule_Factory(t) {
  return new (t || AssistantRoutingModule)();
};

AssistantRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AssistantRoutingModule
});
AssistantRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AssistantRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 1168:
/*!***********************************************!*\
  !*** ./src/app/assistant/assistant.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssistantModule": function() { return /* binding */ AssistantModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/material/material.module */ 793);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _assistant_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assistant-routing.module */ 2248);
/* harmony import */ var _pages_chats_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/chats/chats.component */ 18489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












var AssistantModule = /*#__PURE__*/(0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AssistantModule() {
  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AssistantModule);
});

AssistantModule.ɵfac = function AssistantModule_Factory(t) {
  return new (t || AssistantModule)();
};

AssistantModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AssistantModule
});
AssistantModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _assistant_routing_module__WEBPACK_IMPORTED_MODULE_4__.AssistantRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AssistantModule, {
    declarations: [_pages_chats_chats_component__WEBPACK_IMPORTED_MODULE_5__.ChatsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _assistant_routing_module__WEBPACK_IMPORTED_MODULE_4__.AssistantRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
  });
})();

/***/ }),

/***/ 18489:
/*!**********************************************************!*\
  !*** ./src/app/assistant/pages/chats/chats.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsComponent": function() { return /* binding */ ChatsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/confirm-dialog/confirm-dialog.component */ 89782);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_student_services_AskTeacher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/student/services/AskTeacher.service */ 76273);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ 27043);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/Time.pipe */ 45318);
/* harmony import */ var _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/slice-exam-pic.pipe */ 51033);























var _c0 = function _c0(a0) {
  return {
    "selected-chat": a0
  };
};

function ChatsComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_a_14_Template_a_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      var msg_r10 = restoredCtx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r11.selectMsg(msg_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r10 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "msg-", msg_r10.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c0, msg_r10.Id == ctx_r2.FormCtrl.threadId.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi/", ctx_r2.currentUserPicPath, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", msg_r10.ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 7, msg_r10.ThreadUpdateDate, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 10, msg_r10.ThreadUpdateDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](msg_r10.ThreadText);
  }
}

function ChatsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pagination-controls", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function ChatsComponent_div_16_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r13.p = $event;
      return ctx_r13.getOpenedMsgs(ctx_r13.p, ctx_r13.TeacherSubjectId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ChatsComponent_a_21_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_a_21_Template_a_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      var msg_r15 = restoredCtx.$implicit;
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r16.selectMsg(msg_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r15 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "msg-", msg_r15.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c0, msg_r15.Id == ctx_r4.FormCtrl.threadId.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi/", ctx_r4.currentUserPicPath, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](msg_r15.ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 7, msg_r15.ThreadUpdateDate, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 10, msg_r15.ThreadUpdateDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](msg_r15.ThreadText);
  }
}

function ChatsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pagination-controls", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function ChatsComponent_div_23_Template_pagination_controls_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r18.p = $event;
      return ctx_r18.getClosedMsgs(ctx_r18.p, ctx_r18.TeacherSubjectId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ChatsComponent_ng_container_27_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Opend"), " ");
  }
}

function ChatsComponent_ng_container_27_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Closed"), " ");
  }
}

function ChatsComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ChatsComponent_ng_container_27_span_10_Template, 3, 3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ChatsComponent_ng_container_27_span_11_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_ng_container_27_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r22.openConfirmDialog(ctx_r22.currentMsgUserData == null ? null : ctx_r22.currentMsgUserData.Id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r6.currentMsgUserData == null ? null : ctx_r6.currentMsgUserData.attach_path, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.currentMsgUserData == null ? null : ctx_r6.currentMsgUserData.ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.currentMsgUserData == null ? null : ctx_r6.currentMsgUserData.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.currentMsgUserData == null ? null : ctx_r6.currentMsgUserData.subject_ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.currentMsgUserData == null ? null : ctx_r6.currentMsgUserData.Opened);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx_r6.currentMsgUserData == null ? null : ctx_r6.currentMsgUserData.Opened));
  }
}

function ChatsComponent_div_30_div_8_p_1_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 61);
  }

  if (rf & 2) {
    var msg_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi/", msg_r24.ParentReply.Attach, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

function ChatsComponent_div_30_div_8_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ChatsComponent_div_30_div_8_p_1_img_7_Template, 1, 1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", msg_r24.ParentReply.Username, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", msg_r24.ParentReply.Message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", msg_r24.ParentReply.Attach);
  }
}

function ChatsComponent_div_30_div_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "labels.MsgDeleted"), " ");
  }
}

function ChatsComponent_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ChatsComponent_div_30_div_8_p_1_Template, 8, 3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ChatsComponent_div_30_div_8_p_2_Template, 5, 3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !msg_r24.ParentReply.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", msg_r24.ParentReply.IsDelete);
  }
}

function ChatsComponent_div_30_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", msg_r24.Message, " ");
  }
}

function ChatsComponent_div_30_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "labels.MsgDeleted"), " ");
  }
}

function ChatsComponent_div_30_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "sliceExamPic");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "sliceExamPic");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "mozakretyapi/", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, msg_r24.Attach), "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi/", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, msg_r24.Attach), "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

function ChatsComponent_div_30_span_18_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_div_30_span_18_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      var msg_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r38.openDeleteDialog(msg_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

var _c1 = function _c1(a0, a1, a2) {
  return {
    "chat-right": a0,
    "chat-left": a1,
    "msg-not-seen": a2
  };
};

function ChatsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ChatsComponent_div_30_div_8_Template, 3, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ChatsComponent_div_30_p_9_Template, 2, 1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ChatsComponent_div_30_p_10_Template, 5, 3, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ChatsComponent_div_30_div_11_Template, 5, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ChatsComponent_div_30_span_18_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_div_30_Template_span_click_19_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      var msg_r24 = restoredCtx.$implicit;
      var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r41.getParentReplyId(msg_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var msg_r24 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "replay-", msg_r24.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](16, _c1, msg_r24.userId == ctx_r7.currentUserId, msg_r24.userId != ctx_r7.currentUserId, !msg_r24.isShown));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi/", msg_r24.UserprofilePicture, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", msg_r24.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", msg_r24.ParentReply.Id != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !msg_r24.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", msg_r24.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", msg_r24.Attach && !msg_r24.IsDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](16, 11, msg_r24.Date, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 14, msg_r24.Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !msg_r24.IsDelete);
  }
}

function ChatsComponent_section_31_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi/", ctx_r43.attachecFilePath, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

function ChatsComponent_section_31_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("        ", ctx_r44.selectedMsgToReplay.Message, "\n        ");
  }
}

function ChatsComponent_section_31_Template(rf, ctx) {
  if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_section_31_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r45.escpreview();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ChatsComponent_section_31_div_5_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ChatsComponent_section_31_div_6_Template, 3, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.attachecFilePath != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.selectedMsgToReplay != null);
  }
}

function ChatsComponent_section_32_Template(rf, ctx) {
  if (rf & 1) {
    var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_section_32_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);

      var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

      return _r47.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ChatsComponent_section_32_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r50.attacheReplayPic($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_section_32_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r51.ReplayToMessage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r9.myForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r9.FormCtrl.threadId.value == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 3, "General.Send"), " ");
  }
}

var _c2 = function _c2(a0) {
  return {
    show: a0
  };
};

var _c3 = function _c3(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "opend"
  };
};

var _c4 = function _c4(a1, a2) {
  return {
    itemsPerPage: 5,
    currentPage: a1,
    totalItems: a2,
    id: "closed"
  };
};

var ChatsComponent = /*#__PURE__*/function () {
  function ChatsComponent(fb, AskTeacherServ, GeneralServ, toaster, route, router, dialog, spinner) {
    (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatsComponent);

    this.fb = fb;
    this.AskTeacherServ = AskTeacherServ;
    this.GeneralServ = GeneralServ;
    this.toaster = toaster;
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.spinner = spinner; //Pagination vars

    this.openPages = 1;
    this.closedPages = 1;
    this.maxsize = 5; //Opend Msgs List

    this.opendMsgs = []; // Closed Msgs List

    this.closedMsgs = [];
    this.MsgReplaies = []; //List of replaies For an Msg

    this.selectedMsgToReplay = null;
    this.attachecFilePath = null;
    this.isContentOverlay = false;
  }

  (0,F_Front_End_ksa_training_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        threadId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        TeacherSubjectIds: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        ParentReplyId: [null],
        Attach: [null],
        ReplyText: [""]
      });
      this.getTeacherSubjectIds();
      this.returnProfile();
    }
  }, {
    key: "FormCtrl",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getTeacherSubjectIds",
    value: function getTeacherSubjectIds() {
      var _this = this;

      this.AskTeacherServ.getTeacherSubjectIds().subscribe(function (res) {
        if (res) {
          //  console.log("TeacherSubjectIds", res);
          _this.FormCtrl.TeacherSubjectIds.setValue(res);

          _this.getOpenedMsgs();

          _this.getClosedMsgs();
        }

        _this.spinner.hide();
      });
    } // Return opend msgs

  }, {
    key: "getOpenedMsgs",
    value: function getOpenedMsgs() {
      var _this2 = this;

      this.spinner.show();
      this.AskTeacherServ.getTeacherOpenedClosedMsgs(this.openPages, true, this.FormCtrl.TeacherSubjectIds.value).subscribe(function (res) {
        // console.log("OpenedMsgs", res);
        _this2.opendMsgs = res.messageThreads;
        _this2.openMsgsCount = res.itemsCount;

        _this2.spinner.hide();
      });
    } // Return Closed msgs

  }, {
    key: "getClosedMsgs",
    value: function getClosedMsgs() {
      var _this3 = this;

      this.spinner.show();
      this.AskTeacherServ.getTeacherOpenedClosedMsgs(this.closedPages, false, this.FormCtrl.TeacherSubjectIds.value).subscribe(function (res) {
        //console.log("ClosedMsgs", res);
        _this3.closedMsgs = res.messageThreads;
        _this3.closedMgsCount = res.itemsCount;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "getMsgReplaies",
    value: function getMsgReplaies(msgId) {
      var _this4 = this;

      this.spinner.show();
      this.AskTeacherServ.getTeacherMsgReplaies(msgId).subscribe(function (res) {
        _this4.MsgReplaies = res.replies; // console.log('getMsgReplaies', res);
        // setTimeout(function () {
        //   $(".chat-box .chat-body").animate(
        //     { scrollTop: $(".chat-box .chat-body").prop("scrollHeight") },
        //     1000
        //   );
        // }, 1000);

        _this4.spinner.hide();
      });
    }
  }, {
    key: "ReplayToMessage",
    value: function ReplayToMessage() {
      var _this5 = this;

      this.spinner.show();

      if (this.myForm.valid) {
        this.AskTeacherServ.SendMessage(this.myForm.value).subscribe(function (res) {
          // console.log('ReplayToMessage', res);
          if (res.returnString == "Success") {
            _this5.getMsgReplaies(_this5.FormCtrl.threadId.value);

            _this5.FormCtrl.ReplyText.reset();

            _this5.FormCtrl.Attach.reset();

            _this5.escpreview(); // $(".chat-box .chat-body").animate(
            //   { scrollTop: $(".chat-box .chat-body").prop("scrollHeight") },
            //   1000
            // );

          } else {
            _this5.toaster.error(res.returnString);
          }

          _this5.spinner.hide();
        });
      }
    }
  }, {
    key: "closeMsg",
    value: function closeMsg(msgId) {
      var _this6 = this;

      this.spinner.show();
      this.AskTeacherServ.closeMsg(msgId).subscribe(function (res) {
        //  console.log('closeMsg', res);
        if (res.returnValue == 1) {
          _this6.toaster.success("تم اغلاق الرسالة");

          _this6.currentMsgUserData.Opened = !_this6.currentMsgUserData.Opened;

          _this6.getOpenedMsgs();

          _this6.getClosedMsgs();
        }

        _this6.spinner.hide();
      });
    }
  }, {
    key: "removeReply",
    value: function removeReply(msgId) {
      var _this7 = this;

      this.spinner.show();
      this.AskTeacherServ.removeReply(msgId).subscribe(function (res) {
        //  console.log('removeReply', res);
        if (res.returnValue == 1) {
          _this7.toaster.success("تم حذف الرسالة");

          _this7.getMsgReplaies(_this7.FormCtrl.threadId.value);
        }

        _this7.spinner.hide();
      });
    }
  }, {
    key: "selectMsg",
    value: function selectMsg(msg) {
      if (this.FormCtrl.threadId.value != msg.Id) {
        this.MsgReplaies = [];
      }

      this.getMsgReplaies(msg.Id);
      this.currentMsgUserData = msg;
      console.log("selectMsg", msg);
      this.FormCtrl.threadId.setValue(msg.Id); // $(".chat-box .chat-body").animate(
      //   { scrollTop: $(".chat-box .chat-body").prop("scrollHeight") },
      //   1000
      // );
    }
  }, {
    key: "getParentReplyId",
    value: function getParentReplyId(msg) {
      this.FormCtrl.ParentReplyId.setValue(msg.Id);
      this.selectedMsgToReplay = msg;

      if (msg) {
        console.log("ParentReplyIdMsg", msg);
      }

      console.log(this.myForm.value);
    } //Start: Return Profile Data

  }, {
    key: "returnProfile",
    value: function returnProfile() {
      var _this8 = this;

      this.spinner.show();
      this.GeneralServ.returnProfile().subscribe(function (res) {
        _this8.currentUserId = res.user.user_ID;
        _this8.ar_name = res.user.ar_name;
        _this8.currentUserPicPath = res.picturePath;

        _this8.spinner.hide();
      });
    }
  }, {
    key: "escpreview",
    value: function escpreview() {
      this.FormCtrl.Attach.setValue(null);
      this.FormCtrl.ParentReplyId.setValue("");
      this.selectedMsgToReplay = null;
      this.attachecFilePath = null;
    }
  }, {
    key: "track",
    value: function track(index, el) {
      return el.Id;
    }
  }, {
    key: "attacheReplayPic",
    value: function attacheReplayPic(event) {
      var _this9 = this;

      var fileName = event.target.files[0].name;
      var fileSize = event.target.files[0].size;
      var fileType = event.target.files[0].type;
      var LastModified = event.target.files[0].lastModified;
      var LastModifiedDate = event.target.files[0].lastModifiedDate;

      if (event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = function (event) {
          var fileReder = event.target.result;
          _this9.attachecFilePath = fileReder;
          var data = {
            FileAsBase64: fileReder,
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };

          _this9.FormCtrl.Attach.setValue(data);
        };
      }
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

      var dialogRef = this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          title: "General.ConfirmDelete",
          msg: msg.Message
        }
      });
      dialogRef.afterClosed().subscribe(function (confirm) {
        if (confirm) _this10.removeReply(msg.Id);
      });
    }
  }, {
    key: "openConfirmDialog",
    value: function openConfirmDialog(msgId) {
      var _this11 = this;

      var dialogRef = this.dialog.open(app_shared_components_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
        data: {
          title: "General.ConfirmCloseMsg",
          btn: "General.Confirm"
        }
      });
      dialogRef.afterClosed().subscribe(function (confirm) {
        if (confirm) _this11.closeMsg(msgId);
      });
    }
  }]);

  return ChatsComponent;
}();

ChatsComponent.ɵfac = function ChatsComponent_Factory(t) {
  return new (t || ChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_student_services_AskTeacher_service__WEBPACK_IMPORTED_MODULE_4__.AskTeacherService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService));
};

ChatsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ChatsComponent,
  selectors: [["app-chats"]],
  decls: 33,
  vars: 29,
  consts: [[1, "chat-application", "overflow-hidden"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [1, "chat-sidebar", "d-md-block"], ["chatSidebar", ""], [1, "sidebar-close-icon", "d-md-none", 3, "click"], [1, "ft-x"], [1, "chat-sidebar-content"], [3, "label"], ["id", "users-list", 1, "list-group"], [1, "users-list-padding", "position-relative"], ["class", "list-group-item", 3, "id", "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "pagination-box", 4, "ngIf"], [1, "chat-name", "p-2"], [1, "media", "p-1", "align-items-center"], [1, "chat-app-sidebar-toggle", "ft-menu", "font-medium-4", "mr-3", "d-block", "d-md-none", 3, "click"], [4, "ngIf"], [1, "chat-app-window", "position-relative"], [1, "chats"], ["class", "chat", 3, "ngClass", "id", 4, "ngFor", "ngForOf"], ["class", "chat-app-form chat-replay-options bg-light-primary", 4, "ngIf"], ["class", "chat-app-form px-3 py-2", 4, "ngIf"], [1, "list-group-item", 3, "id", "ngClass", "click"], [1, "media", "align-items-center", "py-1"], [1, "avatar", "avatar-md", "mr-2"], ["alt", "Avatar", 3, "src"], [1, "media-body"], [1, "list-group-item-heading", "mb-1"], [1, "font-small-2", "float-right", "grey", "darken-1"], [1, "list-group-item-text", "grey", "darken-2", "m-0"], [1, "pagination-box"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", "id", "opend", 3, "pageChange"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", "id", "closed", 3, "pageChange"], ["width", "37", "alt", "avatar", 1, "avatar", "mr-1", 3, "src"], [1, "badge", "bg-light-primary", "mb-1", "mr-2"], [1, "position-relative", "float-right"], ["class", "badge bg-light-success mb-1 mr-2", 4, "ngIf"], ["class", "badge bg-light-danger mb-1 mr-2", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", 1, "escprev", 3, "click"], [1, "badge", "bg-light-success", "mb-1", "mr-2"], [1, "badge", "bg-light-danger", "mb-1", "mr-2"], [1, "chat", 3, "ngClass", "id"], [1, "chat-avatar"], [1, "avatar", "avatar-md"], ["alt", "avatar", 3, "src"], [1, "chat-body"], [1, "chat-content"], [1, "username"], ["class", "replay-box rounded bg-light-secondary", 4, "ngIf"], ["class", "content", 4, "ngIf"], ["class", "content", "class", "content replytext", 4, "ngIf"], [1, "msg-time"], ["class", "cursor-pointer", 3, "click", 4, "ngIf"], [1, "cursor-pointer", 3, "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Reply To This Message", 1, "ft-repeat"], [1, "replay-box", "rounded", "bg-light-secondary"], ["class", "content replytext", 4, "ngIf"], [1, "content", "replytext"], [2, "display", "block"], [1, "ft-repeat"], ["style", "width: 50px; height: 50px", 3, "src", 4, "ngIf"], [2, "width", "50px", "height", "50px", 3, "src"], [1, "deleted-msg"], [1, "fa", "fa-ban"], [1, "content"], ["target", "_blank", "data-lightbox", "image-1", "data-title", "", 3, "href"], [1, "img-responsive", 3, "src"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Delete This Message", 1, "ft-trash-2", "mr-1"], [1, "chat-app-form", "chat-replay-options", "bg-light-primary"], [1, "row"], ["class", "col-4", "class", "img-responsive", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "img-responsive"], ["alt", "Photo attached", 1, "img-responsive", 3, "src"], [1, "col-6"], ["disabled", "", 1, "rplayedMsg"], [1, "chat-app-form", "px-3", "py-2"], [1, "d-flex", "align-items-center", 3, "formGroup"], ["formControlName", "ReplyText", "type", "text", "placeholder", "Type your replay here", 1, "form-control", "chat-message-send", "mr-2"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["hidden", "", "type", "file", "accept", "image/*", "id", "file", 3, "change"], ["fileInput", ""], ["type", "submit", 1, "btn", "btn-primary", "d-lg-flex", "align-items-center", 3, "disabled", "click"], [1, "ft-send"], [1, "d-none", "d-lg-block", "ml-1"]],
  template: function ChatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_2_listener() {
        return ctx.onContentOverlay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_6_listener() {
        return ctx.isContentOverlay = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-tab-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-tab", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ChatsComponent_a_14_Template, 14, 14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, ChatsComponent_div_16_Template, 2, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-tab", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ChatsComponent_a_21_Template, 15, 14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ChatsComponent_div_23_Template, 2, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_26_listener() {
        return ctx.onSidebarToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ChatsComponent_ng_container_27_Template, 15, 6, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ChatsComponent_div_30_Template, 21, 20, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, ChatsComponent_section_31_Template, 7, 2, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, ChatsComponent_section_32_Template, 13, 5, "section", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c2, ctx.isContentOverlay));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 11, "labels.Opend"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 13, ctx.opendMsgs, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](23, _c3, ctx.openPages, ctx.openMsgsCount)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.opendMsgs == null ? null : ctx.opendMsgs.length) > 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 16, "labels.Closed"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](22, 18, ctx.closedMsgs, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](26, _c4, ctx.closedPages, ctx.openMsgsCount)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.closedMsgs == null ? null : ctx.closedMsgs.length) > 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.threadId.value != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.MsgReplaies);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.attachecFilePath != null || ctx.selectedMsgToReplay != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrl.threadId.value != null);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_16__.PaginationControlsComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Dir, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_16__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _shared_pipes_Time_pipe__WEBPACK_IMPORTED_MODULE_6__.TimePipe, _shared_pipes_slice_exam_pic_pipe__WEBPACK_IMPORTED_MODULE_7__.SliceExamPicPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_assistant_assistant_module_ts.js.map