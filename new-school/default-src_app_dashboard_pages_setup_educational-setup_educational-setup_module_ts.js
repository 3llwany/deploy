"use strict";
(self["webpackChunkmozakretyNew"] = self["webpackChunkmozakretyNew"] || []).push([["default-src_app_dashboard_pages_setup_educational-setup_educational-setup_module_ts"],{

/***/ 79499:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/academic-year/academic-year/academic-year.component.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcademicYearComponent": function() { return /* binding */ AcademicYearComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var app_dashboard_services_setup_educational_setup_academic_year_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/academic-year.service */ 77497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-stage-dropdown/educational-stage-dropdown.component */ 83722);
/* harmony import */ var _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-year-by-stage-dropdown/educational-year-dropdown.component */ 70414);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);





























function AcademicYearComponent_mat_hint_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function AcademicYearComponent_mat_hint_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AcademicYearComponent_mat_hint_21_span_1_Template, 4, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrls == null ? null : ctx_r1.FormCtrls.From_Date.errors == null ? null : ctx_r1.FormCtrls.From_Date.errors.required);
  }
}

function AcademicYearComponent_mat_hint_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function AcademicYearComponent_mat_hint_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AcademicYearComponent_mat_hint_31_span_1_Template, 4, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.To_Date.errors == null ? null : ctx_r3.FormCtrls.To_Date.errors.required);
  }
}

function AcademicYearComponent_i_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 39);
  }
}

function AcademicYearComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AcademicYearComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r21 + 1);
  }
}

function AcademicYearComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.FromDate"), " ");
  }
}

function AcademicYearComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, ele_r22.fromDate, "dd-MM-yyyy"), " ");
  }
}

function AcademicYearComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.ToDate"), " ");
  }
}

function AcademicYearComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, ele_r23.toDate, "dd-MM-yyyy"), " ");
  }
}

function AcademicYearComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "EducationalSetup.EducationalYears"), " ");
  }
}

function AcademicYearComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r24 = ctx.$implicit;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r13.curLang == "ar" ? ele_r24.eduYearArName : ele_r24.eduEnName, " ");
  }
}

function AcademicYearComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 42);
  }
}

function AcademicYearComponent_td_73_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AcademicYearComponent_td_73_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      var ele_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r32.editAcademicYear(ele_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Edit"), " ");
  }
}

function AcademicYearComponent_td_73_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AcademicYearComponent_td_73_ng_container_5_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      var ele_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r35.openDeleateDialog(ele_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

function AcademicYearComponent_td_73_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/academic-year/terms/", ele_r25.academicEduYearId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r30.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "EducationalSetup.Terms"), " ");
  }
}

function AcademicYearComponent_td_73_ng_container_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/academic-year/assign-class-rooms/", ele_r25.academicEduYearId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r31.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "classes.classRooms"), " ");
  }
}

function AcademicYearComponent_td_73_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AcademicYearComponent_td_73_ng_container_5_a_1_Template, 4, 3, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AcademicYearComponent_td_73_ng_container_5_a_2_Template, 4, 3, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AcademicYearComponent_td_73_ng_container_5_a_3_Template, 4, 7, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AcademicYearComponent_td_73_ng_container_5_a_4_Template, 4, 7, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r27.functionName === "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r27.functionName === "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r27.functionName === "Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r27.functionName === "Class-rooms");
  }
}

function AcademicYearComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AcademicYearComponent_td_73_ng_container_5_Template, 5, 4, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r15.rowFunctions);
  }
}

function AcademicYearComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 56);
  }
}

function AcademicYearComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 57);
  }
}

function AcademicYearComponent_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](56);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r5.value, "\" ");
  }
}

var _c1 = function _c1() {
  return [10];
}; // import { IEducationYear } from "app/dashboard/models/setup/educational-setup/education-year";
// import { EducationYearService } from "app/dashboard/services/setup/educational-setup/education-year.service";


var AcademicYearComponent = /*#__PURE__*/function () {
  function AcademicYearComponent(spinner, toastr, dialog, translate, fb, academicYearService, // private educationYearService: EducationYearService,
  route, authService, datePipe) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AcademicYearComponent);

    this.spinner = spinner;
    this.toastr = toastr;
    this.dialog = dialog;
    this.translate = translate;
    this.fb = fb;
    this.academicYearService = academicYearService;
    this.route = route;
    this.authService = authService;
    this.datePipe = datePipe;
    this.submitted = false;
    this.itemsCounts = 0; // rowFunctions: any = [
    //   { functionName: "Update" },
    //   { functionName: "Delete" },
    //   { functionName: "Terms" },
    //   { functionName: "Class-rooms" },
    // ];

    this.displayColumns = ["#", "fromDate", "toDate", "eduYear", "option"];
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            _this.rowFunctions = res;
          }
        });
      }
    });
    this.EduCompId = Number(authService.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AcademicYearComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.myForm = this.fb.group({
        id: [0],
        From_Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        To_Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        stageId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        eduYearId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
      });
      this.translate.onLangChange.subscribe(function (lang) {
        _this2.curLang = lang.lang;
      });
      this.returnAllAcademicYear(1); // this.getAllEducationalYear();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.startSortingTable();
      }

      this.authService.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;

        _this3.returnAllAcademicYear(1); // this.getAllEducationalYear();

      });
    }
  }, {
    key: "startSortingTable",
    value: function startSortingTable() {
      var _this4 = this;

      // custom sort
      this.dataSource.sortingDataAccessor = function (item, property) {
        switch (property) {
          case "eduYear":
            return _this4.curLang == "ar" ? item.eduYearArName : item.eduEnName;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort;
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    } // getAllEducationalYear() {
    //   this.spinner.show();
    //   this.educationYearService.getEducationalYearDropdown().subscribe((res) => {
    //     if (res) this.educationalYearList = res.eduYearList;
    //     this.spinner.hide();
    //   });
    // }

  }, {
    key: "editAcademicYear",
    value: function editAcademicYear(AcadYearData) {
      this.myForm.patchValue(AcadYearData);
      this.FormCtrls.id.setValue(AcadYearData.academicEduYearId);
      this.FormCtrls.From_Date.setValue(AcadYearData.fromDate);
      this.FormCtrls.To_Date.setValue(AcadYearData.toDate);
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } // Return All  Academic  Year

  }, {
    key: "returnAllAcademicYear",
    value: function returnAllAcademicYear(page) {
      var _this5 = this;

      this.spinner.show();
      this.academicYearService.getAcademicYears(page).subscribe(function (res) {
        if (res) {
          _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(res.eduYearList);
          _this5.itemsCounts = res.countItems;

          _this5.startSortingTable();
        }

        _this5.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this6 = this;

      this.submitted = true;

      if (new Date(this.FormCtrls.To_Date.value).getTime() < new Date(this.FormCtrls.From_Date.value).getTime()) {
        this.toastr.error("General.ToDateBeforeFromDate");
        return;
      }

      var AcademicYearData = {
        id: this.FormCtrls.id.value,
        From_Date: this.datePipe.transform(this.FormCtrls.From_Date.value),
        To_Date: this.datePipe.transform(this.FormCtrls.To_Date.value),
        eduYearId: this.FormCtrls.eduYearId.value,
        eduCompId: this.EduCompId
      }; // console.log(AcademicYearData);

      if (this.myForm.valid) {
        this.spinner.show();
        this.academicYearService.addEditAcademicYear(AcademicYearData).subscribe(function (res) {
          if (res.returnValue == 1) {
            var returnObject = res.academicEducationYear;
            var returnData = {
              academicEduYearId: returnObject.id,
              fromDate: returnObject.From_Date,
              toDate: returnObject.To_Date,
              stageId: returnObject.stageId,
              eduYearId: returnObject.eduYearId,
              eduYearArName: returnObject.eduYear_ar_name,
              eduEnName: returnObject.eduYear_en_name
            };
            AcademicYearData.id == 0 ? _this6.addAcademicYear(returnData) : _this6.updateAcademicYear(returnData);
            _this6.dataSource.sort = _this6.sort; // this.clearForm();

            _this6.submitted = false;
          } else _this6.toastr.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this6.spinner.hide();
        });
      } else this.toastr.error("General.FormNotValid");
    } // Add  Academic  Year

  }, {
    key: "addAcademicYear",
    value: function addAcademicYear(res) {
      this.dataSource.data.unshift(res);
      this.itemsCounts++;
      this.toastr.success("General.AddSuccessfully");
      this.FormCtrls.eduYearId.reset();
      this.submitted = false;
    } // Update  Academic  Year

  }, {
    key: "updateAcademicYear",
    value: function updateAcademicYear(res) {
      var i = this.dataSource.data.findIndex(function (e) {
        return e.academicEduYearId == res.academicEduYearId;
      });
      this.dataSource.data[i] = res;
      this.toastr.success("General.UpdateSuccessfully");
      this.clearForm();
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(AcadYearData) {
      var _this7 = this;

      var title = "".concat(this.datePipe.transform(AcadYearData.fromDate), " - ").concat(this.datePipe.transform(AcadYearData.toDate));
      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: title
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this7.deleteAcademicYear(AcadYearData);
      });
    } // Start:Delete  Academic  Year

  }, {
    key: "deleteAcademicYear",
    value: function deleteAcademicYear(AcadYearData) {
      var _this8 = this;

      this.academicYearService.deleteAcademicYear(AcadYearData.academicEduYearId).subscribe(function (res) {
        if (res.returnValue == 1) {
          var index = _this8.dataSource.data.findIndex(function (e) {
            return e == AcadYearData;
          });

          _this8.dataSource.data.splice(index, 1); // this.itemsCounts--;


          _this8.dataSource.sort = _this8.sort;
          if (AcadYearData.academicEduYearId == _this8.FormCtrls.id.value) _this8.clearForm();

          _this8.toastr.success("General.DeleteSuccessfully");
        } else {
          _this8.toastr.error("General.TosterErrorMessage");
        }
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.FormCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return AcademicYearComponent;
}();

AcademicYearComponent.ɵfac = function AcademicYearComponent_Factory(t) {
  return new (t || AcademicYearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_academic_year_service__WEBPACK_IMPORTED_MODULE_4__.AcademicYearService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe));
};

AcademicYearComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AcademicYearComponent,
  selectors: [["app-academic-year"]],
  viewQuery: function AcademicYearComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 78,
  vars: 41,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "formControlName", "From_Date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "To_Date", 3, "matDatepicker"], ["To_Date", ""], [3, "control", "submitted"], [3, "control", "submitted", "stageControl"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fromDate"], ["matColumnDef", "toDate"], ["matColumnDef", "eduYear"], ["matColumnDef", "option"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-plus"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "px-3", "actions"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-info", "bg-light-info"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-edit-2", "mr-2"], [1, "ft-trash", "mr-2"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams"], [1, "fa", "fa-sitemap", "mr-2"], [1, "fa", "fa-building-o", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function AcademicYearComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "mat-datepicker-toggle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "mat-datepicker", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, AcademicYearComponent_mat_hint_21_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "mat-datepicker-toggle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "mat-datepicker", null, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, AcademicYearComponent_mat_hint_31_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "app-educational-stage-dropdown", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "educational-year-by-stage-dropdown", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-card-actions", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AcademicYearComponent_Template_button_click_37_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, AcademicYearComponent_i_38_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AcademicYearComponent_Template_button_click_41_listener() {
        return ctx.clearForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "mat-form-field", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function AcademicYearComponent_Template_input_keyup_55_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](59, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, AcademicYearComponent_th_60_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, AcademicYearComponent_td_61_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](62, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, AcademicYearComponent_th_63_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, AcademicYearComponent_td_64_Template, 3, 4, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](65, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, AcademicYearComponent_th_66_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, AcademicYearComponent_td_67_Template, 3, 4, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](68, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, AcademicYearComponent_th_69_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, AcademicYearComponent_td_70_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](71, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, AcademicYearComponent_th_72_Template, 1, 0, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, AcademicYearComponent_td_73_Template, 6, 1, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, AcademicYearComponent_tr_74_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, AcademicYearComponent_tr_75_Template, 1, 0, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, AcademicYearComponent_tr_76_Template, 3, 1, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "mat-paginator", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function AcademicYearComponent_Template_mat_paginator_page_77_listener($event) {
        return ctx.returnAllAcademicYear($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](20);

      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 26, ctx.FormCtrls.id.value == 0 ? "EducationalSetup.AddAcademicYear" : "EducationalSetup.EditAcademicYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 28, "labels.FromDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrls == null ? null : ctx.FormCtrls.From_Date.invalid) && ((ctx.FormCtrls == null ? null : ctx.FormCtrls.From_Date.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 30, "labels.ToDate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.To_Date.invalid && (ctx.FormCtrls.To_Date.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrls.stageId)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrls.eduYearId)("submitted", ctx.submitted)("stageControl", ctx.FormCtrls.stageId);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 32, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](43, 34, "General.Reset"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 36, "EducationalSetup.AcademicYears"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](54, 38, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](40, _c1))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepicker, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.EducationalStageDropdownComponent, _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.EducationalYearByStageDropdownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownItem, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYWRlbWljLXllYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiYWNhZGVtaWMteWVhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zIHtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 3451:
/*!************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/academic-year/asign-class-rooms/asign-class-rooms.component.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignClassRoomsComponent": function() { return /* binding */ AsignClassRoomsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_educational_setup_asign_class_rooms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/asign-class-rooms.service */ 62585);
/* harmony import */ var app_dashboard_services_setup_educational_setup_education_year_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/education-year.service */ 80053);
/* harmony import */ var app_dashboard_services_setup_general_setup_classes_class_room_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/dashboard/services/setup/general-setup/classes/class-room.service */ 22957);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);






























function AsignClassRoomsComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ele_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ele_r14.roomCode, " ");
  }
}

function AsignClassRoomsComponent_mat_hint_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function AsignClassRoomsComponent_mat_hint_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AsignClassRoomsComponent_mat_hint_25_span_1_Template, 4, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrls.classRoomId.errors == null ? null : ctx_r1.FormCtrls.classRoomId.errors.required);
  }
}

function AsignClassRoomsComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 33);
  }
}

function AsignClassRoomsComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AsignClassRoomsComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r16.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function AsignClassRoomsComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AsignClassRoomsComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r18 + 1);
  }
}

function AsignClassRoomsComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "classes.classRoom"), " ");
  }
}

function AsignClassRoomsComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ele_r19.classRoomCode);
  }
}

function AsignClassRoomsComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 37);
  }
}

function AsignClassRoomsComponent_td_55_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AsignClassRoomsComponent_td_55_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      var ele_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r25.editAsignClassRoom(ele_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function AsignClassRoomsComponent_td_55_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AsignClassRoomsComponent_td_55_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      var ele_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r28.openDeleateDialog(ele_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function AsignClassRoomsComponent_td_55_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AsignClassRoomsComponent_td_55_ng_container_1_a_1_Template, 3, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AsignClassRoomsComponent_td_55_ng_container_1_a_2_Template, 3, 3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r22.functionName === "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r22.functionName === "Delete");
  }
}

function AsignClassRoomsComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AsignClassRoomsComponent_td_55_ng_container_1_Template, 3, 2, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r10.rowFunctions);
  }
}

function AsignClassRoomsComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 46);
  }
}

function AsignClassRoomsComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 47);
  }
}

function AsignClassRoomsComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](44);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r4.value, "\" ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1() {
  return [10];
};

var AsignClassRoomsComponent = /*#__PURE__*/function () {
  function AsignClassRoomsComponent(spinner, toastr, dialog, translate, fb, route, authService, asignClassRoomsService, educationYearService, classRoomService) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AsignClassRoomsComponent);

    this.spinner = spinner;
    this.toastr = toastr;
    this.dialog = dialog;
    this.translate = translate;
    this.fb = fb;
    this.route = route;
    this.authService = authService;
    this.asignClassRoomsService = asignClassRoomsService;
    this.educationYearService = educationYearService;
    this.classRoomService = classRoomService;
    this.submitted = false;
    this.itemsCounts = 0; // rowFunctions: any = [{ functionName: "Update" }, { functionName: "Delete" }];

    this.displayColumns = ["#", "ClassRoom", // "EducationalYear",
    "option"];
    this.route.paramMap.subscribe(function (pram) {
      return _this.academicEduYearId = Number(pram.get("yearId"));
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            _this.rowFunctions = res;
          }
        });
      }
    });
    this.EduCompId = Number(authService.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AsignClassRoomsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.myForm = this.fb.group({
        id: [0],
        // academicEduYearId: ["", Validators.required],
        classRoomId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
      this.translate.onLangChange.subscribe(function (lang) {
        _this2.curLang = lang.lang;
      });
      this.getAsignClassRoom(1); // this.getAllEducationalYear();

      this.getAllClassRooms();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.startSortingTable();
      }

      this.authService.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;

        _this3.getAsignClassRoom(1); // this.getAllEducationalYear();


        _this3.getAllClassRooms();
      });
    }
  }, {
    key: "startSortingTable",
    value: function startSortingTable() {
      // custom sort
      this.dataSource.sortingDataAccessor = function (item, property) {
        switch (property) {
          case "ClassRoom":
            return item.classRoomCode;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort;
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }, {
    key: "editAsignClassRoom",
    value: function editAsignClassRoom(AsignClassRoomData) {
      this.myForm.patchValue(AsignClassRoomData);
      this.FormCtrls.id.setValue(AsignClassRoomData.academicClassRoomId);
    } // Return ClassRooms

  }, {
    key: "getAllClassRooms",
    value: function getAllClassRooms() {
      var _this4 = this;

      this.classRoomService.getAllClassRoomsDropDown(this.EduCompId).subscribe(function (res) {
        if (res) _this4.classRoomList = res;
      });
    } // // Return Educational Years
    // getAllEducationalYear() {
    //   this.educationYearService.getEducationalYearDropdown().subscribe((res) => {
    //     this.educationalYearList = res.eduYearList;
    //   });
    // }
    // Return Asign ClassRoom

  }, {
    key: "getAsignClassRoom",
    value: function getAsignClassRoom(page) {
      var _this5 = this;

      this.spinner.show();
      this.asignClassRoomsService.getAsignClassRoomsByYearId(this.academicEduYearId, page).subscribe(function (res) {
        if (res) {
          _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(res.academicClassRoom);
          _this5.itemsCounts = res.countItems;

          _this5.startSortingTable();
        }

        _this5.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this6 = this;

      this.submitted = true;
      var AsignClassRoomData = {
        id: this.FormCtrls.id.value,
        academicEduYearId: this.academicEduYearId,
        classRoomId: this.FormCtrls.classRoomId.value,
        eduCompId: this.EduCompId
      };

      if (this.myForm.valid) {
        this.spinner.show();
        this.asignClassRoomsService.addEditAsignClassRoom(AsignClassRoomData).subscribe(function (res) {
          if (res.returnValue == 1) {
            // let returnObject = res.academic_ClassRoom;
            // let returnData: IAssignClassRoom = {
            //   academicClassRoomId: returnObject.id,
            //   academicEduYearId: returnObject.academicEduYearId,
            //   classRoomId: returnObject.classRoomId,
            //   classRoomCode: returnObject.classRoomCode,
            // };
            res.academic_ClassRoom.academicClassRoomId = res.academic_ClassRoom.id;
            AsignClassRoomData.id == 0 ? _this6.addAsignClassRoom(res.academic_ClassRoom) : _this6.updateAsignClassRoom(res.academic_ClassRoom);
            _this6.dataSource.sort = _this6.sort;

            _this6.clearForm();

            _this6.submitted = false;
          } else _this6.toastr.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this6.spinner.hide();
        });
      } else this.toastr.error("General.FormNotValid");
    } // add Asign ClassRoom

  }, {
    key: "addAsignClassRoom",
    value: function addAsignClassRoom(res) {
      this.dataSource.data.unshift(res);
      this.itemsCounts++;
      this.toastr.success("General.AddSuccessfully");
    } // Update Asign ClassRoom

  }, {
    key: "updateAsignClassRoom",
    value: function updateAsignClassRoom(res) {
      var i = this.dataSource.data.findIndex(function (e) {
        return e.academicClassRoomId == res.academicClassRoomId;
      });
      this.dataSource.data[i] = res;
      this.toastr.success("General.UpdateSuccessfully");
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(AsignClassRoomData) {
      var _this7 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: AsignClassRoomData.academicClassRoomId
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this7.deleteAsignClassRoom(AsignClassRoomData);
      });
    } // Delete  Asign ClassRoom

  }, {
    key: "deleteAsignClassRoom",
    value: function deleteAsignClassRoom(AsignClassRoomData) {
      var _this8 = this;

      this.asignClassRoomsService.deleteAsignClassRoom(AsignClassRoomData.academicClassRoomId).subscribe(function (res) {
        if (res.returnValue == 1) {
          var index = _this8.dataSource.data.findIndex(function (e) {
            return e == AsignClassRoomData;
          });

          _this8.dataSource.data.splice(index, 1); // this.itemsCounts--;


          _this8.dataSource.sort = _this8.sort;
          if (AsignClassRoomData.academicClassRoomId == _this8.FormCtrls.id.value) _this8.clearForm();

          _this8.toastr.success("General.DeleteSuccessfully");
        } else {
          _this8.toastr.error("General.TosterErrorMessage");
        }
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.FormCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return AsignClassRoomsComponent;
}();

AsignClassRoomsComponent.ɵfac = function AsignClassRoomsComponent_Factory(t) {
  return new (t || AsignClassRoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_asign_class_rooms_service__WEBPACK_IMPORTED_MODULE_5__.AsignClassRoomsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_education_year_service__WEBPACK_IMPORTED_MODULE_6__.EducationYearService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_general_setup_classes_class_room_service__WEBPACK_IMPORTED_MODULE_7__.ClassRoomService));
};

AsignClassRoomsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AsignClassRoomsComponent,
  selectors: [["app-class-rooms"]],
  viewQuery: function AsignClassRoomsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 60,
  vars: 36,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/educational-setup/academic-year/AcademicYear", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], ["appearance", "legacy"], ["formControlName", "classRoomId"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ClassRoom"], ["matColumnDef", "option"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [3, "value"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function AsignClassRoomsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, AsignClassRoomsComponent_mat_option_24_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, AsignClassRoomsComponent_mat_hint_25_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-card-actions", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AsignClassRoomsComponent_Template_button_click_27_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, AsignClassRoomsComponent_i_28_Template, 1, 0, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, AsignClassRoomsComponent_button_31_Template, 3, 3, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function AsignClassRoomsComponent_Template_input_keyup_43_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "table", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](47, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, AsignClassRoomsComponent_th_48_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, AsignClassRoomsComponent_td_49_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](50, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, AsignClassRoomsComponent_th_51_Template, 3, 3, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, AsignClassRoomsComponent_td_52_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](53, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, AsignClassRoomsComponent_th_54_Template, 1, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, AsignClassRoomsComponent_td_55_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, AsignClassRoomsComponent_tr_56_Template, 1, 0, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, AsignClassRoomsComponent_tr_57_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, AsignClassRoomsComponent_tr_58_Template, 3, 1, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "mat-paginator", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function AsignClassRoomsComponent_Template_mat_paginator_page_59_listener($event) {
        return ctx.getAsignClassRoom($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 19, ctx.FormCtrls.id.value == 0 ? "EducationalSetup.addAsignClassRoom" : "EducationalSetup.updateAsignClassRoom"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](33, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 21, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 23, "classes.classRoom"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 25, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.classRoomList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.classRoomId.invalid && (ctx.FormCtrls.classRoomId.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 27, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 29, "EducationalSetup.AsignClassRoom"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 31, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](35, _c1))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: [".actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWduLWNsYXNzLXJvb21zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImFzaWduLWNsYXNzLXJvb21zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xyXG4gIG1heC13aWR0aDogODBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 52841:
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/academic-year/term-detail/term-detail.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermDetailComponent": function() { return /* binding */ TermDetailComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var app_dashboard_services_setup_educational_setup_education_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/education-detail.service */ 1543);
/* harmony import */ var app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/course.service */ 98331);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/all-cources-dropdown/all-cources-dropdown.component */ 70526);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
































function TermDetailComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r22 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ele_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.curLang == "ar" ? (tmp_1_0 = ele_r22.Ar_Name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ele_r22.En_Name : (tmp_1_0 = ele_r22.En_Name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ele_r22.Ar_Name, " ");
  }
}

function TermDetailComponent_mat_hint_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function TermDetailComponent_mat_hint_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TermDetailComponent_mat_hint_25_span_1_Template, 4, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.FormCtrls.CoursesGroupId.errors == null ? null : ctx_r1.FormCtrls.CoursesGroupId.errors.required);
  }
}

function TermDetailComponent_mat_hint_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function TermDetailComponent_mat_hint_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function TermDetailComponent_mat_hint_34_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "EducationalSetup.maxPercentage"), " ");
  }
}

function TermDetailComponent_mat_hint_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TermDetailComponent_mat_hint_34_span_1_Template, 4, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, TermDetailComponent_mat_hint_34_span_2_Template, 4, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, TermDetailComponent_mat_hint_34_span_3_Template, 4, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.FormCtrls.CoursePercentage.errors == null ? null : ctx_r2.FormCtrls.CoursePercentage.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.FormCtrls.CoursePercentage.errors == null ? null : ctx_r2.FormCtrls.CoursePercentage.errors.minusNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.FormCtrls.CoursePercentage.errors == null ? null : ctx_r2.FormCtrls.CoursePercentage.errors.max);
  }
}

function TermDetailComponent_mat_hint_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function TermDetailComponent_mat_hint_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-hint", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TermDetailComponent_mat_hint_46_span_1_Template, 4, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.AddedToScores.errors == null ? null : ctx_r3.FormCtrls.AddedToScores.errors.required);
  }
}

function TermDetailComponent_i_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 43);
  }
}

function TermDetailComponent_button_52_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TermDetailComponent_button_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r28.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function TermDetailComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function TermDetailComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r30 + 1);
  }
}

function TermDetailComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "EducationalSetup.Course"), " ");
  }
}

function TermDetailComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r31 = ctx.$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r10.curLang == "ar" ? (tmp_0_0 = ele_r31.subject_ar_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ele_r31.subject_en_name : (tmp_0_0 = ele_r31.subject_en_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ele_r31.subject_ar_name, " ");
  }
}

function TermDetailComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "EducationalSetup.courseGroup"), " ");
  }
}

function TermDetailComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r32 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r12.curLang == "ar" ? (tmp_0_0 = ele_r32.courseGroup_arName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ele_r32.courseGroup_enName : (tmp_0_0 = ele_r32.courseGroup_enName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ele_r32.courseGroup_arName, " ");
  }
}

function TermDetailComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "EducationalSetup.CoursePercentage"), " ");
  }
}

function TermDetailComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r33.CoursePercentage);
  }
}

function TermDetailComponent_th_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "EducationalSetup.AddedToScores"), " ");
  }
}

function TermDetailComponent_td_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ele_r34.AddedToScores);
  }
}

function TermDetailComponent_th_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 47);
  }
}

function TermDetailComponent_td_85_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TermDetailComponent_td_85_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42);
      var ele_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r40.editeduYearDetail(ele_r35);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function TermDetailComponent_td_85_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TermDetailComponent_td_85_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45);
      var ele_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r43.openDeleateDialog(ele_r35);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function TermDetailComponent_td_85_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TermDetailComponent_td_85_ng_container_1_a_1_Template, 3, 3, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, TermDetailComponent_td_85_ng_container_1_a_2_Template, 3, 3, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r37.functionName === "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", fun_r37.functionName === "Delete");
  }
}

function TermDetailComponent_td_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TermDetailComponent_td_85_ng_container_1_Template, 3, 2, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r18.rowFunctions);
  }
}

function TermDetailComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 56);
  }
}

function TermDetailComponent_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 57);
  }
}

function TermDetailComponent_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](65);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r6.value, "\" ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1() {
  return [10];
};

var TermDetailComponent = /*#__PURE__*/function () {
  function TermDetailComponent(spinner, toastr, dialog, translate, fb, educationDetailService, CourseService, route, authService) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TermDetailComponent);

    this.spinner = spinner;
    this.toastr = toastr;
    this.dialog = dialog;
    this.translate = translate;
    this.fb = fb;
    this.educationDetailService = educationDetailService;
    this.CourseService = CourseService;
    this.route = route;
    this.authService = authService;
    this.submitted = false;
    this.itemsCounts = 0; // rowFunctions: any[] = [
    //   { functionName: "Update" },
    //   { functionName: "Delete" },
    // ];

    this.displayColumns = ["#", "Course", "CourseGroup", "CoursePercentage", "AddedToScores", "option"];
    this.route.paramMap.subscribe(function (pram) {
      _this.termId = Number(pram.get("termId"));
      _this.academicEduYearId = Number(pram.get("yearId"));
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            _this.rowFunctions = res;
          }
        });
      }
    });
    this.EduCompId = Number(authService.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TermDetailComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.myForm = this.fb.group({
        id: [0],
        SubjectId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        CoursesGroupId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        CoursePercentage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(99)]],
        AddedToScores: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
      });
      this.translate.onLangChange.subscribe(function (lang) {
        _this2.curLang = lang.lang;
      });
      this.returnEduYearDetails(1);
      this.getAllCoursesGroup();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.startSortingTable();
      }

      this.authService.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;

        _this3.returnEduYearDetails(1);

        _this3.getAllCoursesGroup();
      });
    }
  }, {
    key: "startSortingTable",
    value: function startSortingTable() {
      var _this4 = this;

      // custom sort
      this.dataSource.sortingDataAccessor = function (item, property) {
        var _a, _b, _c, _d;

        switch (property) {
          case "Course":
            return _this4.curLang == "ar" ? (_a = item.subject_ar_name) !== null && _a !== void 0 ? _a : item.subject_en_name : (_b = item.subject_en_name) !== null && _b !== void 0 ? _b : item.subject_ar_name;

          case "CourseGroup":
            return _this4.curLang == "ar" ? (_c = item.courseGroup_arName) !== null && _c !== void 0 ? _c : item.courseGroup_enName : (_d = item.courseGroup_enName) !== null && _d !== void 0 ? _d : item.courseGroup_arName;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort;
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "editeduYearDetail",
    value: function editeduYearDetail(eduYearDetailData) {
      this.myForm.patchValue(eduYearDetailData);
      this.FormCtrls.id.setValue(eduYearDetailData.edu_details_id);
      this.FormCtrls.SubjectId.setValue(eduYearDetailData.subject_id);
      this.FormCtrls.CoursesGroupId.setValue(eduYearDetailData.courseGroup_id);
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } // Return Courses Group

  }, {
    key: "getAllCoursesGroup",
    value: function getAllCoursesGroup() {
      var _this5 = this;

      this.CourseService.getAllCourseGroupsDropDown().subscribe(function (res) {
        if (res) _this5.CourseGroupList = res;
      });
    } // Return Educational Year Details

  }, {
    key: "returnEduYearDetails",
    value: function returnEduYearDetails(page) {
      var _this6 = this;

      this.spinner.show();
      this.educationDetailService.getAcademicEduYearDetailsByTermId(this.termId, page).subscribe(function (res) {
        if (res) {
          _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.edu_details_list);
          _this6.itemsCounts = res.countItems;

          _this6.startSortingTable();
        }

        _this6.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this7 = this;

      this.submitted = true;
      var eduYearDetailData = {
        id: this.FormCtrls.id.value,
        TermId: this.termId,
        SubjectId: this.FormCtrls.SubjectId.value,
        CoursesGroupId: this.FormCtrls.CoursesGroupId.value,
        CoursePercentage: this.FormCtrls.CoursePercentage.value,
        AddedToScores: this.FormCtrls.AddedToScores.value,
        eduCompId: this.EduCompId
      };
      console.log(eduYearDetailData);

      if (this.myForm.valid) {
        this.spinner.show();
        this.educationDetailService.AddEditAcademicYearDetail(eduYearDetailData).subscribe(function (res) {
          if (res.returnValue == 1) {
            var returnObject = res.academicEducationYearDetails;
            var returnData = {
              edu_details_id: returnObject.id,
              subject_id: returnObject.SubjectId,
              subject_ar_name: returnObject.subject_arName,
              subject_en_name: returnObject.subject_enName,
              courseGroup_id: returnObject.CoursesGroupId,
              courseGroup_arName: returnObject.courseGroup_arName,
              courseGroup_enName: returnObject.courseGroup_enName,
              CoursePercentage: returnObject.CoursePercentage,
              AddedToScores: returnObject.AddedToScores
            };
            console.log(res);
            eduYearDetailData.id == 0 ? _this7.addEduYearDetail(returnData) : _this7.updateEduYearDetail(returnData);
            _this7.dataSource.sort = _this7.sort;

            _this7.clearForm();
          } else _this7.toastr.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this7.spinner.hide();
        });
      } else this.toastr.error("General.FormNotValid");
    } // Add Educational Year Detail

  }, {
    key: "addEduYearDetail",
    value: function addEduYearDetail(res) {
      this.dataSource.data.unshift(res);
      this.itemsCounts++;
      this.toastr.success("General.AddSuccessfully");
    } // Update Educational Year Detail

  }, {
    key: "updateEduYearDetail",
    value: function updateEduYearDetail(res) {
      var i = this.dataSource.data.findIndex(function (e) {
        return e.edu_details_id == res.edu_details_id;
      });
      this.dataSource.data[i] = res;
      this.toastr.success("General.UpdateSuccessfully");
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(eduYearDetailData) {
      var _this8 = this;

      var _a, _b;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: this.curLang == "ar" ? (_a = eduYearDetailData.subject_ar_name) !== null && _a !== void 0 ? _a : eduYearDetailData.subject_en_name : (_b = eduYearDetailData.subject_en_name) !== null && _b !== void 0 ? _b : eduYearDetailData.subject_ar_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this8.deleteeduYearDetail(eduYearDetailData);
      });
    } // Start:Delete Educational Year Detail

  }, {
    key: "deleteeduYearDetail",
    value: function deleteeduYearDetail(eduYearDetailData) {
      var _this9 = this;

      this.educationDetailService.deleteAcademicEducationalYearDetail(eduYearDetailData.edu_details_id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var index = _this9.dataSource.data.findIndex(function (e) {
            return e == eduYearDetailData;
          });

          _this9.dataSource.data.splice(index, 1); // this.itemsCounts--;


          _this9.dataSource.sort = _this9.sort;
          if (eduYearDetailData.edu_details_id == _this9.FormCtrls.id.value) _this9.clearForm();

          _this9.toastr.success("General.DeleteSuccessfully");
        } else {
          _this9.toastr.error("General.TosterErrorMessage");
        }
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.FormCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return TermDetailComponent;
}();

TermDetailComponent.ɵfac = function TermDetailComponent_Factory(t) {
  return new (t || TermDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_education_detail_service__WEBPACK_IMPORTED_MODULE_5__.EducationDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
};

TermDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: TermDetailComponent,
  selectors: [["app-term-detail"]],
  viewQuery: function TermDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 90,
  vars: 55,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "routerLink", "queryParams"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["formControlName", "CoursesGroupId"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [3, "control", "submitted"], ["type", "number", "matInput", "", "formControlName", "CoursePercentage"], ["formControlName", "AddedToScores"], [1, "mx-2", 3, "value"], [3, "value"], ["class", "text-danger error mt-0", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Course"], ["matColumnDef", "CourseGroup"], ["matColumnDef", "CoursePercentage"], ["matColumnDef", "AddedToScores"], ["matColumnDef", "option"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], [1, "text-danger", "error", "mt-0"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function TermDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, TermDetailComponent_mat_option_24_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, TermDetailComponent_mat_hint_25_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "all-cources-dropdown", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, TermDetailComponent_mat_hint_34_Template, 4, 3, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "mat-radio-group", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "mat-radio-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "mat-radio-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, TermDetailComponent_mat_hint_46_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "mat-card-actions", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TermDetailComponent_Template_button_click_48_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, TermDetailComponent_i_49_Template, 1, 0, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, TermDetailComponent_button_52_Template, 3, 3, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "mat-form-field", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "input", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function TermDetailComponent_Template_input_keyup_64_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "table", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](68, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, TermDetailComponent_th_69_Template, 2, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, TermDetailComponent_td_70_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](71, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, TermDetailComponent_th_72_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, TermDetailComponent_td_73_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](74, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, TermDetailComponent_th_75_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](76, TermDetailComponent_td_76_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](77, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, TermDetailComponent_th_78_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, TermDetailComponent_td_79_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](80, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, TermDetailComponent_th_81_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, TermDetailComponent_td_82_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](83, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](84, TermDetailComponent_th_84_Template, 1, 0, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](85, TermDetailComponent_td_85_Template, 2, 1, "td", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, TermDetailComponent_tr_86_Template, 1, 0, "tr", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](87, TermDetailComponent_tr_87_Template, 1, 0, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, TermDetailComponent_tr_88_Template, 3, 1, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "mat-paginator", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function TermDetailComponent_Template_mat_paginator_page_89_listener($event) {
        return ctx.returnEduYearDetails($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 30, ctx.FormCtrls.id.value == 0 ? "EducationalSetup.AddEducationalDetail" : "EducationalSetup.EditEducationalDetail"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/academic-year/terms/", ctx.academicEduYearId, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](52, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 32, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 34, "EducationalSetup.CourseGroup"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 36, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.CourseGroupList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.FormCtrls.CoursesGroupId.invalid && (ctx.FormCtrls.CoursesGroupId.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.FormCtrls.SubjectId)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 38, "EducationalSetup.CoursePercentage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.FormCtrls.CoursePercentage.invalid && (ctx.FormCtrls.CoursePercentage.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 40, "EducationalSetup.IsAddedToTotal"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](42, 42, "labels.Yes"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 44, "labels.No"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.FormCtrls.AddedToScores.invalid && (ctx.FormCtrls.AddedToScores.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](51, 46, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.FormCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](58, 48, "EducationalSetup.EducationalDetailes"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](63, 50, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](54, _c1))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_components_dropdowns_all_cources_dropdown_all_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.AllCourcesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 75%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJ0ZXJtLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zIHtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 89246:
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/academic-year/terms/terms.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsComponent": function() { return /* binding */ TermsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_dashboard_services_setup_educational_setup_terms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/terms.service */ 49689);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);




























function TermsComponent_mat_hint_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function TermsComponent_mat_hint_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TermsComponent_mat_hint_21_span_1_Template, 4, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.FormCtrls.ar_name.errors == null ? null : ctx_r0.FormCtrls.ar_name.errors.required) || (ctx_r0.FormCtrls.ar_name.errors == null ? null : ctx_r0.FormCtrls.ar_name.errors.whiteSpace));
  }
}

function TermsComponent_mat_hint_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function TermsComponent_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TermsComponent_mat_hint_28_span_1_Template, 4, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.en_name.errors == null ? null : ctx_r1.FormCtrls.en_name.errors.required) || (ctx_r1.FormCtrls.en_name.errors == null ? null : ctx_r1.FormCtrls.en_name.errors.whiteSpace));
  }
}

function TermsComponent_mat_hint_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function TermsComponent_mat_hint_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TermsComponent_mat_hint_39_span_1_Template, 4, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.fromDate.errors == null ? null : ctx_r3.FormCtrls.fromDate.errors.required);
  }
}

function TermsComponent_mat_hint_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function TermsComponent_mat_hint_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TermsComponent_mat_hint_49_span_1_Template, 4, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.FormCtrls.toDate.errors == null ? null : ctx_r5.FormCtrls.toDate.errors.required);
  }
}

function TermsComponent_i_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 41);
  }
}

function TermsComponent_button_55_Template(rf, ctx) {
  if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TermsComponent_button_55_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r28.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function TermsComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function TermsComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r30 + 1);
  }
}

function TermsComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.arName"), " ");
  }
}

function TermsComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r31.ar_name);
  }
}

function TermsComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.enName"), " ");
  }
}

function TermsComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ele_r32.en_name);
  }
}

function TermsComponent_th_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.FromDate"), " ");
  }
}

function TermsComponent_td_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ele_r33.fromDate, "dd-MM-yyyy"), " ");
  }
}

function TermsComponent_th_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.ToDate"), " ");
  }
}

function TermsComponent_td_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ele_r34.toDate, "dd-MM-yyyy"), " ");
  }
}

function TermsComponent_th_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 45);
  }
}

function TermsComponent_td_88_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TermsComponent_td_88_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43);
      var ele_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r41.editTerm(ele_r35);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "General.Edit"), " ");
  }
}

function TermsComponent_td_88_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TermsComponent_td_88_ng_container_5_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46);
      var ele_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r44.openDeleateDialog(ele_r35);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

function TermsComponent_td_88_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("routerLink", "/dashboard/educational-setup/academic-year/term-details/", ctx_r40.academicEduYearId, "/", ele_r35.TermId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, ctx_r40.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, "EducationalSetup.EducationalDetailes"), " ");
  }
}

function TermsComponent_td_88_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TermsComponent_td_88_ng_container_5_a_1_Template, 4, 3, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TermsComponent_td_88_ng_container_5_a_2_Template, 4, 3, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TermsComponent_td_88_ng_container_5_a_3_Template, 4, 8, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r37.functionName === "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r37.functionName === "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r37.functionName === "Detail");
  }
}

function TermsComponent_td_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TermsComponent_td_88_ng_container_5_Template, 4, 3, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.rowFunctions);
  }
}

function TermsComponent_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 58);
  }
}

function TermsComponent_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 59);
  }
}

function TermsComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](68);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r8.value, "\" ");
  }
}

var _c1 = function _c1() {
  return [10];
};

var TermsComponent = /*#__PURE__*/function () {
  function TermsComponent(spinner, toastr, dialog, translate, fb, route, termsService, authService, datePipe) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TermsComponent);

    this.spinner = spinner;
    this.toastr = toastr;
    this.dialog = dialog;
    this.translate = translate;
    this.fb = fb;
    this.route = route;
    this.termsService = termsService;
    this.authService = authService;
    this.datePipe = datePipe;
    this.submitted = false;
    this.itemsCounts = 0; // rowFunctions: any[] = [
    //   { functionName: "Update" },
    //   { functionName: "Delete" },
    //   { functionName: "Detail" },
    // ];

    this.displayColumns = ["#", "ar_name", "en_name", "fromDate", "toDate", "option"];
    this.route.paramMap.subscribe(function (param) {
      return _this.academicEduYearId = Number(param.get("yearId"));
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            _this.rowFunctions = res;
          }
        });
      }
    });
    this.EduCompId = Number(authService.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TermsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.myForm = this.fb.group({
        id: [0],
        ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        en_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        fromDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        toDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      });
      this.translate.onLangChange.subscribe(function (lang) {
        _this2.curLang = lang.lang;
      });
      this.returnAllTermsByYearId(1);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

      this.authService.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;

        _this3.returnAllTermsByYearId(1);
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "editTerm",
    value: function editTerm(TermData) {
      this.myForm.patchValue(TermData);
      this.FormCtrls.id.setValue(TermData.TermId);
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } // Return All  Terms

  }, {
    key: "returnAllTermsByYearId",
    value: function returnAllTermsByYearId(page) {
      var _this4 = this;

      this.spinner.show();
      this.termsService.getTermsByYearId(this.academicEduYearId, page).subscribe(function (res) {
        if (res) {
          _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(res.TermList);
          _this4.itemsCounts = res.countItems;
          _this4.dataSource.sort = _this4.sort;
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this5 = this;

      this.submitted = true;

      if (new Date(this.FormCtrls.toDate.value).getTime() < new Date(this.FormCtrls.fromDate.value).getTime()) {
        this.toastr.error("General.ToDateBeforeFromDate");
        return;
      }

      var TermData = {
        id: this.FormCtrls.id.value,
        ar_name: this.FormCtrls.ar_name.value,
        en_name: this.FormCtrls.en_name.value,
        fromDate: this.datePipe.transform(this.FormCtrls.fromDate.value),
        toDate: this.datePipe.transform(this.FormCtrls.toDate.value),
        academicEduYearId: this.academicEduYearId,
        eduCompId: this.EduCompId
      }; // console.log(TermData);

      if (this.myForm.valid) {
        this.spinner.show();
        this.termsService.addEditTerm(TermData).subscribe(function (res) {
          if (res.returnValue == 1) {
            // let returnObject = res.academicTerm;
            // let returnData: ITermGetVM = {
            //   TermId: returnObject.id,
            //   ar_name: returnObject.ar_name,
            //   en_name: returnObject.en_name,
            //   fromDate: returnObject.fromDate,
            //   toDate: returnObject.toDate,
            // };
            res.academicTerm.TermId = res.academicTerm.id;
            TermData.id == 0 ? _this5.addTerm(res.academicTerm) : _this5.updateTerm(res.academicTerm);
            _this5.dataSource.sort = _this5.sort;

            _this5.clearForm();
          } else _this5.toastr.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this5.spinner.hide();
        });
      } else this.toastr.error("General.FormNotValid");
    } // Add Term

  }, {
    key: "addTerm",
    value: function addTerm(res) {
      this.dataSource.data.unshift(res);
      this.itemsCounts++;
      this.toastr.success("General.AddSuccessfully");
    } // Update Term

  }, {
    key: "updateTerm",
    value: function updateTerm(res) {
      console.log(res);
      var i = this.dataSource.data.findIndex(function (e) {
        return e.TermId == res.TermId;
      });
      this.dataSource.data[i] = res;
      this.toastr.success("General.AddSuccessfully");
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(TermData) {
      var _this6 = this;

      if (TermData.TermId == this.FormCtrls.id.value) this.clearForm();
      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: this.curLang == "ar" ? TermData.ar_name : TermData.en_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this6.deleteTerm(TermData);
      });
    } // Delete Term

  }, {
    key: "deleteTerm",
    value: function deleteTerm(TermData) {
      var _this7 = this;

      this.termsService.deleteTerm(TermData.TermId).subscribe(function (res) {
        if (res.returnValue == 1) {
          var index = _this7.dataSource.data.findIndex(function (e) {
            return e == TermData;
          });

          _this7.dataSource.data.splice(index, 1); // this.itemsCounts--;


          _this7.dataSource.sort = _this7.sort;
          if (TermData.TermId == _this7.FormCtrls.id.value) _this7.clearForm();

          _this7.toastr.success("General.DeleteSuccessfully");
        } else {
          _this7.toastr.error("General.TosterErrorMessage");
        }
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.FormCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return TermsComponent;
}();

TermsComponent.ɵfac = function TermsComponent_Factory(t) {
  return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_terms_service__WEBPACK_IMPORTED_MODULE_5__.TermsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe));
};

TermsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: TermsComponent,
  selectors: [["app-terms"]],
  viewQuery: function TermsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 93,
  vars: 48,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/educational-setup/academic-year/AcademicYear", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "ar_name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "en_name"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker"], ["toDate", ""], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ar_name"], ["matColumnDef", "en_name"], ["matColumnDef", "fromDate"], ["matColumnDef", "toDate"], ["matColumnDef", "option"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "px-3", "actions"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-info", "bg-light-info"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-edit-2", "mr-2"], [1, "ft-trash", "mr-2"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams"], [1, "fa", "fa-external-link", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function TermsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, TermsComponent_mat_hint_21_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, TermsComponent_mat_hint_28_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "mat-datepicker-toggle", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "mat-datepicker", null, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, TermsComponent_mat_hint_39_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "mat-datepicker-toggle", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "mat-datepicker", null, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, TermsComponent_mat_hint_49_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-card-actions", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_51_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, TermsComponent_i_52_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, TermsComponent_button_55_Template, 3, 3, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "mat-form-field", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](66, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function TermsComponent_Template_input_keyup_67_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "table", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](71, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, TermsComponent_th_72_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, TermsComponent_td_73_Template, 2, 1, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](74, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, TermsComponent_th_75_Template, 3, 3, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, TermsComponent_td_76_Template, 2, 1, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](77, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, TermsComponent_th_78_Template, 3, 3, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, TermsComponent_td_79_Template, 2, 1, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](80, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, TermsComponent_th_81_Template, 3, 3, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, TermsComponent_td_82_Template, 3, 4, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](83, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, TermsComponent_th_84_Template, 3, 3, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, TermsComponent_td_85_Template, 3, 4, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](86, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, TermsComponent_th_87_Template, 1, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, TermsComponent_td_88_Template, 6, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, TermsComponent_tr_89_Template, 1, 0, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, TermsComponent_tr_90_Template, 1, 0, "tr", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, TermsComponent_tr_91_Template, 3, 1, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "mat-paginator", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function TermsComponent_Template_mat_paginator_page_92_listener($event) {
        return ctx.returnAllTermsByYearId($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](38);

      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](48);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 27, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id.value) == 0 ? "EducationalSetup.AddTerm" : "EducationalSetup.EditTerm"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](45, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 29, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 31, "labels.arName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ar_name.invalid && (ctx.FormCtrls.ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 33, "labels.enName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.en_name.invalid && (ctx.FormCtrls.en_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 35, "labels.FromDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.fromDate.invalid && (ctx.FormCtrls.fromDate.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](44, 37, "labels.ToDate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.toDate.invalid && (ctx.FormCtrls.toDate.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](54, 39, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.FormCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 41, "EducationalSetup.Terms"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](66, 43, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](47, _c1))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepicker, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [".actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InRlcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xyXG4gIG1heC13aWR0aDogODBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 73160:
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/add-edit-course/add-edit-course.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditCourseComponent": function() { return /* binding */ AddEditCourseComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/course.service */ 98331);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _shared_components_dropdowns_academic_year_dropdown_academic_year_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/academic-year-dropdown/academic-year-dropdown.component */ 72851);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);





















function AddEditCourseComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "EducationalSetup.addCourse"), " ");
  }
}

function AddEditCourseComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "EducationalSetup.updateCourse"), " - ", ctx_r1.currentLang == "ar" ? ctx_r1.Course == null ? null : ctx_r1.Course.subject_ar_name : ctx_r1.Course == null ? null : ctx_r1.Course.subject_en_name, " ");
  }
}

function AddEditCourseComponent_mat_hint_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddEditCourseComponent_mat_hint_23_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r2.formCtrls.subject_ar_name.errors == null ? null : ctx_r2.formCtrls.subject_ar_name.errors.required) || (ctx_r2.formCtrls.subject_ar_name.errors == null ? null : ctx_r2.formCtrls.subject_ar_name.errors.whiteSpace));
  }
}

function AddEditCourseComponent_mat_hint_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddEditCourseComponent_mat_hint_30_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.formCtrls.subject_en_name.errors == null ? null : ctx_r3.formCtrls.subject_en_name.errors.required) || (ctx_r3.formCtrls.subject_en_name.errors == null ? null : ctx_r3.formCtrls.subject_en_name.errors.whiteSpace));
  }
}

function AddEditCourseComponent_a_44_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddEditCourseComponent_a_44_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r13.RemoveFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function AddEditCourseComponent_mat_hint_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddEditCourseComponent_mat_hint_51_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r6.formCtrls.subjectCode.errors == null ? null : ctx_r6.formCtrls.subjectCode.errors.required) || (ctx_r6.formCtrls.subjectCode.errors == null ? null : ctx_r6.formCtrls.subjectCode.errors.whiteSpace));
  }
}

function AddEditCourseComponent_mat_hint_58_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_58_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddEditCourseComponent_mat_hint_58_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddEditCourseComponent_mat_hint_58_span_2_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formCtrls == null ? null : ctx_r7.formCtrls.price.errors == null ? null : ctx_r7.formCtrls.price.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formCtrls == null ? null : ctx_r7.formCtrls.price.errors == null ? null : ctx_r7.formCtrls.price.errors.minusNum);
  }
}

function AddEditCourseComponent_mat_hint_65_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_65_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddEditCourseComponent_mat_hint_65_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddEditCourseComponent_mat_hint_65_span_2_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.formCtrls == null ? null : ctx_r8.formCtrls.MinScore.errors == null ? null : ctx_r8.formCtrls.MinScore.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.formCtrls == null ? null : ctx_r8.formCtrls.MinScore.errors == null ? null : ctx_r8.formCtrls.MinScore.errors.minusNum);
  }
}

function AddEditCourseComponent_mat_hint_72_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_72_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function AddEditCourseComponent_mat_hint_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddEditCourseComponent_mat_hint_72_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddEditCourseComponent_mat_hint_72_span_2_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formCtrls == null ? null : ctx_r9.formCtrls.MaxScore.errors == null ? null : ctx_r9.formCtrls.MaxScore.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formCtrls == null ? null : ctx_r9.formCtrls.MaxScore.errors == null ? null : ctx_r9.formCtrls.MaxScore.errors.minusNum);
  }
}

function AddEditCourseComponent_i_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 32);
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var AddEditCourseComponent = /*#__PURE__*/function () {
  function AddEditCourseComponent(fb, CourseServ, translate, spinner, ToastrMsg, uploadFileService, route, router, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddEditCourseComponent);

    this.fb = fb;
    this.CourseServ = CourseServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.uploadFileService = uploadFileService;
    this.route = route;
    this.router = router;
    this.authserv = authserv;
    this.courseId = 0;
    this.imageChange = false;
    this.removeImage = 0;
    this.submitted = false; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);
    });
    route.paramMap.subscribe(function (params) {
      var id = Number(params.get("courseId"));

      if (id) {
        _this.courseId = id; // console.log(id);

        CourseServ.getCourseById(id).subscribe(function (res) {
          _this.Course = res[0];

          _this.myForm.patchValue(_this.Course);
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddEditCourseComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        subject_ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        subject_en_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        subjectCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        academicEduYearId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        MaxScore: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        MinScore: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.minusNum]],
        course_attach: [null],
        PromoPath: [""],
        subjectDescription: [""]
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;
      });
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    } // select image

  }, {
    key: "onChangeImage",
    value: function onChangeImage(event) {
      var _this3 = this;

      this.removeImage = 0;
      this.uploadFileService.uploadFile(event).then(function (file) {
        var _a;

        (_a = _this3.formCtrls.course_attach) === null || _a === void 0 ? void 0 : _a.setValue(file);
        _this3.imageChange = true;
      });
    }
  }, {
    key: "imageUrl",
    value: function imageUrl() {
      var _a, _b, _c;

      var imageUrl = !this.imageChange ? (_a = this.Course) === null || _a === void 0 ? void 0 : _a.ImagePath : (_c = (_b = this.formCtrls) === null || _b === void 0 ? void 0 : _b.course_attach) === null || _c === void 0 ? void 0 : _c.value;
      this.uploadFileService.previewPicture(imageUrl);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this4 = this;

      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      this.submitted = true; // console.log(this.myForm.value);

      if (this.myForm.valid) {
        if (((_a = this.formCtrls.MinScore) === null || _a === void 0 ? void 0 : _a.value) > ((_b = this.formCtrls.MaxScore) === null || _b === void 0 ? void 0 : _b.value)) return this.ToastrMsg.error("EducationalSetup.maxScoreGreaterThanMin");
        var course = {
          eduCompId: this.EduCompId,
          id: this.courseId,
          subject_ar_name: (_c = this.formCtrls.subject_ar_name) === null || _c === void 0 ? void 0 : _c.value,
          subject_en_name: (_d = this.formCtrls.subject_en_name) === null || _d === void 0 ? void 0 : _d.value,
          price: (_e = this.formCtrls.price) === null || _e === void 0 ? void 0 : _e.value,
          subjectCode: (_f = this.formCtrls.subjectCode) === null || _f === void 0 ? void 0 : _f.value,
          MaxScore: (_g = this.formCtrls.MaxScore) === null || _g === void 0 ? void 0 : _g.value,
          MinScore: (_h = this.formCtrls.MinScore) === null || _h === void 0 ? void 0 : _h.value,
          PromoPath: (_j = this.formCtrls.PromoPath) === null || _j === void 0 ? void 0 : _j.value,
          course_attach: (_k = this.formCtrls.course_attach) === null || _k === void 0 ? void 0 : _k.value,
          subjectDescription: (_l = this.formCtrls.subjectDescription) === null || _l === void 0 ? void 0 : _l.value,
          academicEduYearId: (_m = this.formCtrls.academicEduYearId) === null || _m === void 0 ? void 0 : _m.value,
          remove_image: this.removeImage
        }; // if (
        //   this.formCtrls.course_attach.value == null &&
        //   this.imageChange == true
        // )
        //   course.remove_image = 1;

        console.log("Course", course);
        this.CourseServ.addEditCourse(course).subscribe(function (res) {
          if (res.returnValue == 1) {
            course.id == 0 ? _this4.ToastrMsg.success("General.AddSuccessfully") : _this4.ToastrMsg.success("General.UpdateSuccessfully");

            _this4.router.navigate(["dashboard/educational-setup/courses/index/"], {
              queryParams: {
                functionId: _this4.functionId
              }
            });
          } else _this4.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this4.spinner.hide();
        });
      } else this.ToastrMsg.error("General.FormNotValid");
    }
  }, {
    key: "RemoveFile",
    value: function RemoveFile() {
      // this.imageChange = true;
      this.removeImage = 1;
      if (this.Course) this.Course.ImagePath = null;
      this.formCtrls.course_attach.setValue(null);
    }
  }]);

  return AddEditCourseComponent;
}();

AddEditCourseComponent.ɵfac = function AddEditCourseComponent_Factory(t) {
  return new (t || AddEditCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_5__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
};

AddEditCourseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddEditCourseComponent,
  selectors: [["app-add-edit-course"]],
  decls: 90,
  vars: 59,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["mat-raised-button", "", "routerLink", "/dashboard/educational-setup/courses/index", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "subject_ar_name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "subject_en_name"], [3, "control", "submitted"], [1, "ImageDiv"], ["id", "input-file", "type", "file", "accept", "image/*", 3, "hidden", "change"], ["fileInput", ""], ["for", "input-file", "mat-raised-button", "", 1, "btn", "btn-primary", "float-right"], [1, "mt-1", "mr-1", "float-right"], [1, "coverPhoto", 3, "src", "alt"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], ["matInput", "", "formControlName", "subjectCode"], ["matInput", "", "type", "number", "formControlName", "price"], ["matInput", "", "type", "number", "formControlName", "MinScore"], ["matInput", "", "type", "number", "formControlName", "MaxScore"], ["matInput", "", "formControlName", "PromoPath"], ["matInput", "", "formControlName", "subjectDescription"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], [1, "text-danger"], [1, "ft-alert-circle", "align-middle"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], [1, "fa", "fa-plus"]],
  template: function AddEditCourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddEditCourseComponent_span_5_Template, 3, 3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddEditCourseComponent_span_6_Template, 3, 4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-card-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, AddEditCourseComponent_mat_hint_23_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, AddEditCourseComponent_mat_hint_30_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "app-academic-year-dropdown", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddEditCourseComponent_Template_input_change_35_listener($event) {
        return ctx.onChangeImage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, AddEditCourseComponent_a_44_Template, 3, 3, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, AddEditCourseComponent_mat_hint_51_Template, 2, 1, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, AddEditCourseComponent_mat_hint_58_Template, 3, 2, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, AddEditCourseComponent_mat_hint_65_Template, 3, 2, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, AddEditCourseComponent_mat_hint_72_Template, 3, 2, "mat-hint", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](77, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](83, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "textarea", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "mat-card-actions", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddEditCourseComponent_Template_button_click_86_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, AddEditCourseComponent_i_87_Template, 1, 0, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](89, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.courseId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.courseId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](57, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 31, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 33, "labels.arName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formCtrls.subject_ar_name.invalid && (ctx.formCtrls.subject_ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 35, "labels.enName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formCtrls.subject_en_name.invalid && (ctx.formCtrls.subject_en_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.academicEduYearId)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 37, "General.Upload"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 39, "EducationalSetup.Image"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hideImg", !(ctx.formCtrls == null ? null : ctx.formCtrls.course_attach == null ? null : ctx.formCtrls.course_attach.value) && !(ctx.Course == null ? null : ctx.Course.ImagePath));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](43, 41, "EducationalSetup.Image"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.imageUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.course_attach == null ? null : ctx.formCtrls.course_attach.value) || (ctx.Course == null ? null : ctx.Course.ImagePath));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 43, "EducationalSetup.subjectCode"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formCtrls.subjectCode.invalid && (ctx.formCtrls.subjectCode.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](56, 45, "labels.Price"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.price.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.price.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 47, "EducationalSetup.MinScore"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.MinScore.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.MinScore.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](70, 49, "EducationalSetup.MaxScore"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.MaxScore.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.MaxScore.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](77, 51, "EducationalSetup.Promo"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](83, 53, "labels.Description"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.courseId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](89, 55, ctx.courseId == 0 ? "General.Add" : "General.Update"), " ");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_components_dropdowns_academic_year_dropdown_academic_year_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.AcademicYearDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".hideImg[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.coverPhoto[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 10px;\n  margin: 5px 0;\n  border: 0.5px solid gray;\n}\n\n.ImageDiv[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJhZGQtZWRpdC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZUltZyB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY292ZXJQaG90byB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLkltYWdlRGl2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 64508:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-group/course-group.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseGroupComponent": function() { return /* binding */ CourseGroupComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/course.service */ 98331);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);



























function CourseGroupComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.addCourseGroup"), " ");
  }
}

function CourseGroupComponent_mat_card_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.updateCourseGroup"), " ");
  }
}

function CourseGroupComponent_mat_hint_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function CourseGroupComponent_mat_hint_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseGroupComponent_mat_hint_17_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r2.formCtrls.Ar_Name.errors == null ? null : ctx_r2.formCtrls.Ar_Name.errors.required) || (ctx_r2.formCtrls.Ar_Name.errors == null ? null : ctx_r2.formCtrls.Ar_Name.errors.whiteSpace));
  }
}

function CourseGroupComponent_mat_hint_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function CourseGroupComponent_mat_hint_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseGroupComponent_mat_hint_24_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.formCtrls.En_Name.errors == null ? null : ctx_r3.formCtrls.En_Name.errors.required) || (ctx_r3.formCtrls.En_Name.errors == null ? null : ctx_r3.formCtrls.En_Name.errors.whiteSpace));
  }
}

function CourseGroupComponent_mat_hint_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function CourseGroupComponent_mat_hint_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function CourseGroupComponent_mat_hint_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseGroupComponent_mat_hint_31_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CourseGroupComponent_mat_hint_31_span_2_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.formCtrls == null ? null : ctx_r4.formCtrls.Min_Sub_Num.errors == null ? null : ctx_r4.formCtrls.Min_Sub_Num.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.formCtrls == null ? null : ctx_r4.formCtrls.Min_Sub_Num.errors == null ? null : ctx_r4.formCtrls.Min_Sub_Num.errors.minusNum);
  }
}

function CourseGroupComponent_mat_hint_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function CourseGroupComponent_mat_hint_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function CourseGroupComponent_mat_hint_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseGroupComponent_mat_hint_38_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CourseGroupComponent_mat_hint_38_span_2_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formCtrls == null ? null : ctx_r5.formCtrls.Max_Sub_Num.errors == null ? null : ctx_r5.formCtrls.Max_Sub_Num.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formCtrls == null ? null : ctx_r5.formCtrls.Max_Sub_Num.errors == null ? null : ctx_r5.formCtrls.Max_Sub_Num.errors.minusNum);
  }
}

function CourseGroupComponent_i_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 37);
  }
}

function CourseGroupComponent_button_44_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CourseGroupComponent_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r30.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function CourseGroupComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CourseGroupComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r32 + 1, " ");
  }
}

function CourseGroupComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.arName"), " ");
  }
}

function CourseGroupComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var courseGroup_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", courseGroup_r33.Ar_Name, " ");
  }
}

function CourseGroupComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.enName"), " ");
  }
}

function CourseGroupComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var courseGroup_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", courseGroup_r34.En_Name, " ");
  }
}

function CourseGroupComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.MinSubNo"), " ");
  }
}

function CourseGroupComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var courseGroup_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", courseGroup_r35.Min_Sub_Num, " ");
  }
}

function CourseGroupComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.MaxSubNo"), " ");
  }
}

function CourseGroupComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var courseGroup_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", courseGroup_r36.Max_Sub_Num, " ");
  }
}

function CourseGroupComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 41);
  }
}

function CourseGroupComponent_td_76_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CourseGroupComponent_td_76_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      var courseGroup_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r42.toEditCourseGroup(courseGroup_r37);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function CourseGroupComponent_td_76_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CourseGroupComponent_td_76_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      var courseGroup_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r45.openDeleteDialog(courseGroup_r37);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function CourseGroupComponent_td_76_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseGroupComponent_td_76_ng_container_1_a_1_Template, 3, 3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CourseGroupComponent_td_76_ng_container_1_a_2_Template, 3, 3, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r39.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r39.functionName === "Delete");
  }
}

function CourseGroupComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseGroupComponent_td_76_ng_container_1_Template, 3, 2, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.rowFunctions);
  }
}

function CourseGroupComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 50);
  }
}

function CourseGroupComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 51);
  }
}

function CourseGroupComponent_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](56);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r8.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

var CourseGroupComponent = /*#__PURE__*/function () {
  function CourseGroupComponent(fb, courseServ, translate, spinner, ToastrMsg, dialog, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseGroupComponent);

    this.fb = fb;
    this.courseServ = courseServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.dialog = dialog;
    this.route = route;
    this.authserv = authserv;
    this.CourseGroups = [];
    this.submitted = false; // rowFunctions: any[] = [{ functionName: "Edit" }, { functionName: "Delete" }];
    // table

    this.displayedColumns = ["#", "Ar_Name", "En_Name", "Min_Sub_Num", "Max_Sub_Num", "actions"]; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            // console.log("rowFunctions", res);
            _this.rowFunctions = res;
          }
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseGroupComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        id: [0],
        Ar_Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        En_Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        Max_Sub_Num: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]],
        Min_Sub_Num: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]]
      });
      this.getAllCourseGroups(1);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllCourseGroups(1);
      });
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    } // get all course Groups

  }, {
    key: "getAllCourseGroups",
    value: function getAllCourseGroups(page) {
      var _this3 = this;

      // this.curPage = page;
      this.spinner.show();
      this.courseServ.getAllCourseGroups(page).subscribe(function (res) {
        if (res) {
          _this3.CourseGroups = res.courseGroupList;
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(_this3.CourseGroups);
          _this3.itemsCounts = res.countItems;
          _this3.dataSource.sort = _this3.sort;
        }

        _this3.spinner.hide();
      });
    } // get form values to update

  }, {
    key: "toEditCourseGroup",
    value: function toEditCourseGroup(courseGroup) {
      this.myForm.patchValue(courseGroup);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this4 = this;

      var _a, _b, _c, _d, _e, _f, _g;

      this.submitted = true;

      if (this.myForm.valid) {
        if (((_a = this.formCtrls.Min_Sub_Num) === null || _a === void 0 ? void 0 : _a.value) > ((_b = this.formCtrls.Max_Sub_Num) === null || _b === void 0 ? void 0 : _b.value)) return this.ToastrMsg.error("EducationalSetup.maxSubGreaterThanMin");
        var courseGroup = {
          id: (_c = this.formCtrls.id) === null || _c === void 0 ? void 0 : _c.value,
          EducationalComponentID: this.EduCompId,
          Ar_Name: (_d = this.formCtrls.Ar_Name) === null || _d === void 0 ? void 0 : _d.value,
          En_Name: (_e = this.formCtrls.En_Name) === null || _e === void 0 ? void 0 : _e.value,
          Max_Sub_Num: (_f = this.formCtrls.Max_Sub_Num) === null || _f === void 0 ? void 0 : _f.value,
          Min_Sub_Num: (_g = this.formCtrls.Min_Sub_Num) === null || _g === void 0 ? void 0 : _g.value
        };
        console.log("CourseGroup", courseGroup);
        this.courseServ.addEditCourseGroup(courseGroup).subscribe(function (res) {
          if (res.returnValue == 1) {
            // let returnObject = res.course_group;
            // let returnData: CourseGroupGetVM = {
            //   id: returnObject.id,
            //   Ar_Name: returnObject.Ar_Name,
            //   En_Name: returnObject.En_Name,
            //   Max_Sub_Num: returnObject.Max_Sub_Num,
            //   Min_Sub_Num: returnObject.Min_Sub_Num,
            // };
            courseGroup.id == 0 ? _this4.addCourseGroup(res.course_group) : _this4.updateCourseGroup(res.course_group);
            _this4.dataSource.sort = _this4.sort;

            _this4.clearForm();
          } else _this4.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this4.spinner.hide();
        });
      } else this.ToastrMsg.error("General.FormNotValid");
    } // add course Group

  }, {
    key: "addCourseGroup",
    value: function addCourseGroup(res) {
      this.dataSource.data.unshift(res);
      this.itemsCounts++;
      this.ToastrMsg.success("General.AddSuccessfully");
    } // update course Group

  }, {
    key: "updateCourseGroup",
    value: function updateCourseGroup(res) {
      var i = this.dataSource.data.findIndex(function (e) {
        return e.id == res.id;
      });
      this.dataSource.data[i] = res;
      this.ToastrMsg.success("General.UpdateSuccessfully");
    } // delete dialog

  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog(courseGroup) {
      var _this5 = this;

      var courseGroupName = this.currentLang == "ar" ? courseGroup.Ar_Name : courseGroup.En_Name;
      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: courseGroupName
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteCourseGroup(courseGroup);
      });
    } // delete course Group

  }, {
    key: "deleteCourseGroup",
    value: function deleteCourseGroup(courseGroup) {
      var _this6 = this;

      this.spinner.show();
      this.courseServ.deleteCourseGroup(courseGroup.id).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          var i = _this6.dataSource.data.findIndex(function (e) {
            return e == courseGroup;
          });

          _this6.dataSource.data.splice(i, 1); // this.itemsCounts--;


          _this6.dataSource.sort = _this6.sort;
          if (courseGroup.id == _this6.formCtrls.id.value) _this6.clearForm();

          _this6.ToastrMsg.success("General.DeleteSuccessfully");
        } else _this6.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

        _this6.spinner.hide();
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.formCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return CourseGroupComponent;
}();

CourseGroupComponent.ɵfac = function CourseGroupComponent_Factory(t) {
  return new (t || CourseGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_4__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
};

CourseGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CourseGroupComponent,
  selectors: [["app-course-courseGroup"]],
  viewQuery: function CourseGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 81,
  vars: 33,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "formControlName", "Ar_Name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "En_Name"], ["matInput", "", "type", "number", "formControlName", "Min_Sub_Num"], ["matInput", "", "type", "number", "formControlName", "Max_Sub_Num"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Ar_Name"], ["matColumnDef", "En_Name"], ["matColumnDef", "Min_Sub_Num"], ["matColumnDef", "Max_Sub_Num"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of courseGroups", 3, "pageSizeOptions", "length", "page"], [1, "text-danger"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "6", 1, "mat-cell"]],
  template: function CourseGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CourseGroupComponent_mat_card_title_4_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CourseGroupComponent_mat_card_title_5_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CourseGroupComponent_mat_hint_17_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CourseGroupComponent_mat_hint_24_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CourseGroupComponent_mat_hint_31_Template, 3, 2, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, CourseGroupComponent_mat_hint_38_Template, 3, 2, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-card-actions", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CourseGroupComponent_Template_button_click_40_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, CourseGroupComponent_i_41_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CourseGroupComponent_button_44_Template, 3, 3, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-form-field", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CourseGroupComponent_Template_input_keyup_55_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "table", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](59, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, CourseGroupComponent_th_60_Template, 2, 0, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, CourseGroupComponent_td_61_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](62, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, CourseGroupComponent_th_63_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, CourseGroupComponent_td_64_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](65, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, CourseGroupComponent_th_66_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, CourseGroupComponent_td_67_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](68, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, CourseGroupComponent_th_69_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, CourseGroupComponent_td_70_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](71, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, CourseGroupComponent_th_72_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, CourseGroupComponent_td_73_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](74, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, CourseGroupComponent_th_75_Template, 1, 0, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, CourseGroupComponent_td_76_Template, 2, 1, "td", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, CourseGroupComponent_tr_77_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, CourseGroupComponent_tr_78_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, CourseGroupComponent_tr_79_Template, 3, 1, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "mat-paginator", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function CourseGroupComponent_Template_mat_paginator_page_80_listener($event) {
        return ctx.getAllCourseGroups($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.id.value) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 20, "labels.arName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls.Ar_Name.invalid && (ctx.formCtrls.Ar_Name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 22, "labels.enName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls.En_Name.invalid && (ctx.formCtrls.En_Name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 24, "EducationalSetup.MinSubNo"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.Min_Sub_Num.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.Min_Sub_Num.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 26, "EducationalSetup.MaxSubNo"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.Max_Sub_Num.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.Max_Sub_Num.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.id == null ? null : ctx.formCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](43, 28, (ctx.formCtrls == null ? null : ctx.formCtrls.id == null ? null : ctx.formCtrls.id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 30, "EducationalSetup.courseGroups"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](32, _c0))("length", ctx.itemsCounts);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1Hcm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJjb3Vyc2UtR3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9ucyB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 22768:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-index/course-index.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseIndexComponent": function() { return /* binding */ CourseIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/course.service */ 98331);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);

























function CourseIndexComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CourseIndexComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r26 + 1, " ");
  }
}

function CourseIndexComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function CourseIndexComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r27 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.currentLang == "ar" ? (tmp_0_0 = course_r27.subject_ar_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : course_r27.subject_en_name : (tmp_0_0 = course_r27.subject_en_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : course_r27.subject_ar_name, " ");
  }
}

function CourseIndexComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.EducationalYear"), " ");
  }
}

function CourseIndexComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r28 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.currentLang == "ar" ? (tmp_0_0 = course_r28.eduYear_ar_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : course_r28.eduYear_en_name : (tmp_0_0 = course_r28.eduYear_en_name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : course_r28.eduYear_ar_name, " ");
  }
}

function CourseIndexComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.MaxScore"), " ");
  }
}

function CourseIndexComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", course_r29.MaxScore, " ");
  }
}

function CourseIndexComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.MinScore"), " ");
  }
}

function CourseIndexComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", course_r30.MinScore, " ");
  }
}

function CourseIndexComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Price"), " ");
  }
}

function CourseIndexComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", course_r31.price, " ");
  }
}

function CourseIndexComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.subjectCode"), " ");
  }
}

function CourseIndexComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", course_r32.subjectCode, " ");
  }
}

function CourseIndexComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.Description"), " ");
  }
}

function CourseIndexComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", course_r33.subjectDescription, " ");
  }
}

function CourseIndexComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.Image"), " ");
  }
}

function CourseIndexComponent_td_45_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r35.uploadFileService.previewPicture(course_r34.ImagePath), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, "EducationalSetup.Image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r35.uploadFileService.previewPicture(course_r34.ImagePath), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

function CourseIndexComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseIndexComponent_td_45_a_1_Template, 3, 5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", course_r34.ImagePath);
  }
}

function CourseIndexComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.Promo"), " ");
  }
}

function CourseIndexComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", course_r37.PromoPath, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", course_r37.PromoPath, " ");
  }
}

function CourseIndexComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 33);
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

function CourseIndexComponent_td_51_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/courses/edit-course/", course_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r41.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "General.Edit"), " ");
  }
}

function CourseIndexComponent_td_51_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CourseIndexComponent_td_51_ng_container_5_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49);
      var course_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r47.openDeleteDialog(course_r38);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

function CourseIndexComponent_td_51_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/educational-setup/courses/course-lectures/", course_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r43.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "EducationalSetup.CourseLectures"), " ");
  }
}

function CourseIndexComponent_td_51_ng_container_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "../course-structure/", course_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r44.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "labels.SubjectStructure"), " ");
  }
}

function CourseIndexComponent_td_51_ng_container_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CourseIndexComponent_td_51_ng_container_5_span_5_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
      var course_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r52.onUploadSyllabus($event, course_r38.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "EducationalSetup.UploadSyllabus"), " ");
  }
}

function CourseIndexComponent_td_51_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseIndexComponent_td_51_ng_container_5_a_1_Template, 4, 7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CourseIndexComponent_td_51_ng_container_5_a_2_Template, 4, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CourseIndexComponent_td_51_ng_container_5_a_3_Template, 4, 7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CourseIndexComponent_td_51_ng_container_5_a_4_Template, 4, 7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CourseIndexComponent_td_51_ng_container_5_span_5_Template, 6, 3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r40.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r40.functionName === "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r40.functionName === "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r40.functionName === "courseStructure");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r40.functionName === "UploadSyllabus");
  }
}

function CourseIndexComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CourseIndexComponent_td_51_ng_container_5_Template, 6, 5, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r22.rowFunctions);
  }
}

function CourseIndexComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 51);
  }
}

function CourseIndexComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 52);
  }
}

function CourseIndexComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c1 = function _c1() {
  return [10];
};

var CourseIndexComponent = /*#__PURE__*/function () {
  function CourseIndexComponent(CourseServ, translate, spinner, ToastrMsg, dialog, route, authserv, uploadFileService) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseIndexComponent);

    this.CourseServ = CourseServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.dialog = dialog;
    this.route = route;
    this.authserv = authserv;
    this.uploadFileService = uploadFileService;
    this.Courses = []; // rowFunctions: any[] = [
    //   { functionName: "Edit" },
    //   { functionName: "Delete" },
    //   { functionName: "Lecture" },
    //   { functionName: "courseStructure" },
    //   { functionName: "UploadSyllabus" },
    // ];
    // table

    this.displayedColumns = ["#", "subject_name", "eduYear", "MinScore", "MaxScore", "price", "subjectCode", "subjectDescription", "ImagePath", "PromoPath", "actions"]; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            // console.log("rowFunctions", res);
            _this.rowFunctions = res;
          }
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllCourses(1);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.startSortingTable();
      }

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllCourses(1);
      });
    }
  }, {
    key: "startSortingTable",
    value: function startSortingTable() {
      var _this3 = this;

      // custom sort
      this.dataSource.sortingDataAccessor = function (item, property) {
        var _a, _b, _c, _d;

        switch (property) {
          case "eduYear":
            return _this3.currentLang == "ar" ? (_a = item.eduYear_ar_name) !== null && _a !== void 0 ? _a : item.eduYear_en_name : (_b = item.eduYear_en_name) !== null && _b !== void 0 ? _b : item.eduYear_ar_name;

          case "subject_name":
            return _this3.currentLang == "ar" ? (_c = item.subject_ar_name) !== null && _c !== void 0 ? _c : item.subject_en_name : (_d = item.subject_en_name) !== null && _d !== void 0 ? _d : item.subject_ar_name;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort;
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    } // get all courses

  }, {
    key: "getAllCourses",
    value: function getAllCourses(page) {
      var _this4 = this;

      // this.curPage = page;
      this.spinner.show();
      this.CourseServ.getAllCoursesByEduCopmIdPage(this.EduCompId, page).subscribe(function (res) {
        if (res) {
          _this4.Courses = res.subjectList;
          _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(_this4.Courses);
          _this4.itemsCounts = res.countItems;

          _this4.startSortingTable();
        }

        _this4.spinner.hide();
      });
    } // delete dialog

  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog(course) {
      var _this5 = this;

      var courseName = this.currentLang == "ar" ? course.subject_ar_name : course.subject_en_name;
      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: courseName
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteCourse(course);
      });
    } // delete course

  }, {
    key: "deleteCourse",
    value: function deleteCourse(course) {
      var _this6 = this;

      this.spinner.show();
      this.CourseServ.deleteCourse(course.id).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          var i = _this6.dataSource.data.findIndex(function (e) {
            return e == course;
          });

          _this6.dataSource.data.splice(i, 1); // this.itemsCounts--;


          _this6.dataSource.sort = _this6.sort;

          _this6.ToastrMsg.success("General.DeleteSuccessfully");
        } else {
          _this6.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
        }

        _this6.spinner.hide();
      });
    }
  }, {
    key: "onUploadSyllabus",
    value: function onUploadSyllabus(event, subjectId) {
      var _this7 = this;

      this.uploadFileService.uploadFile(event).then(function (file) {
        setTimeout(function () {
          if (file.FileAsBase64) _this7.uploadSubjectSyllabus(file, subjectId);
        }, 1000);
      });
    }
  }, {
    key: "uploadSubjectSyllabus",
    value: function uploadSubjectSyllabus(file, subjectId) {
      var _this8 = this;

      var body = {};
      body.subjectId = subjectId;
      body.thumbnailFile = file;

      if (file) {
        this.spinner.show();
        this.CourseServ.uploadSubjectSyllabus(body).subscribe(function (res) {
          if (res.returnValue === 1) {
            _this8.ToastrMsg.success("General.UploadSuccessfully");
          }

          _this8.spinner.hide();
        });
      } else this.ToastrMsg.warning("labels.MustSelectFile");
    }
  }]);

  return CourseIndexComponent;
}();

CourseIndexComponent.ɵfac = function CourseIndexComponent_Factory(t) {
  return new (t || CourseIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_6__.UploadFileService));
};

CourseIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CourseIndexComponent,
  selectors: [["app-course-index"]],
  viewQuery: function CourseIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 56,
  vars: 15,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/educational-setup/courses/add-course", 1, "btn", "btn-info", "bg-light-info", "mb-2", "float-right", 3, "queryParams"], [1, "fa", "fa-plus"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subject_name"], ["matColumnDef", "eduYear"], ["matColumnDef", "MaxScore"], ["matColumnDef", "MinScore"], ["matColumnDef", "price"], ["matColumnDef", "subjectCode"], ["matColumnDef", "subjectDescription"], ["matColumnDef", "ImagePath"], ["matColumnDef", "PromoPath"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of courses", 3, "pageSizeOptions", "length", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "image", 3, "src", "alt"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "actions"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-info", "bg-light-info"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 4, "ngIf"], ["ngbDropdownItem", "", 3, "routerLink", "queryParams"], [1, "ft-edit-2", "mr-2"], ["ngbDropdownItem", "", 3, "click"], [1, "ft-trash", "mr-2"], [1, "ft-video", "mr-2"], [1, "ft-cpu", "mr-2"], ["ngbDropdownItem", ""], [1, "ft-upload", "mr-2"], ["type", "file", "accept", ".pdf", 1, "form-control", 3, "change"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "9", 1, "mat-cell"]],
  template: function CourseIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CourseIndexComponent_Template_input_keyup_15_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "table", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, CourseIndexComponent_th_20_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, CourseIndexComponent_td_21_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CourseIndexComponent_th_23_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CourseIndexComponent_td_24_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CourseIndexComponent_th_26_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, CourseIndexComponent_td_27_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, CourseIndexComponent_th_29_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CourseIndexComponent_td_30_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](31, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, CourseIndexComponent_th_32_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, CourseIndexComponent_td_33_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](34, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, CourseIndexComponent_th_35_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, CourseIndexComponent_td_36_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](37, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, CourseIndexComponent_th_38_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CourseIndexComponent_td_39_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](40, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, CourseIndexComponent_th_41_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, CourseIndexComponent_td_42_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](43, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CourseIndexComponent_th_44_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, CourseIndexComponent_td_45_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](46, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, CourseIndexComponent_th_47_Template, 3, 3, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, CourseIndexComponent_td_48_Template, 3, 2, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](49, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, CourseIndexComponent_th_50_Template, 1, 0, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, CourseIndexComponent_td_51_Template, 6, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, CourseIndexComponent_tr_52_Template, 1, 0, "tr", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, CourseIndexComponent_tr_53_Template, 1, 0, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, CourseIndexComponent_tr_54_Template, 3, 1, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "mat-paginator", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function CourseIndexComponent_Template_mat_paginator_page_55_listener($event) {
        return ctx.getAllCourses($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 8, "EducationalSetup.courses"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 10, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c1))("length", ctx.itemsCounts);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdownItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: [".image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 20%;\n  margin: 5px 5px 5px 1px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n\n.mat-column-PromoPath[_ngcontent-%COMP%] {\n  max-width: 80px !important;\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  -webkit-padding-end: 15px;\n          padding-inline-end: 15px;\n}\n\n.mat-column-subjectDescription[_ngcontent-%COMP%] {\n  max-width: 200px !important;\n  max-height: 200px !important;\n  overflow: hidden;\n}\n\nth[_ngcontent-%COMP%]:not:first-child {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFFQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FBSEYiLCJmaWxlIjoiY291cnNlLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gIG1hcmdpbjogNXB4IDVweCA1cHggMXB4O1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1Qcm9tb1BhdGgge1xyXG4gIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gIC8vIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNXB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdWJqZWN0RGVzY3JpcHRpb24ge1xyXG4gIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy8gd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgLy8gd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbnRoOm5vdDpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 35523:
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-lecture/course-lecture.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseLectureComponent": function() { return /* binding */ CourseLectureComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_educational_setup_course_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/course-lecture.service */ 56163);
/* harmony import */ var app_dashboard_services_educational_tabels_weekly_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/educational-tabels/weekly-table.service */ 95740);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);





















function CourseLectureComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r4 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ele_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.curLang == "ar" ? (tmp_1_0 = ele_r4.Ar_Name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ele_r4.En_Name : (tmp_1_0 = ele_r4.En_Name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ele_r4.Ar_Name, " ");
  }
}

function CourseLectureComponent_mat_hint_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function CourseLectureComponent_mat_hint_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CourseLectureComponent_mat_hint_25_span_1_Template, 4, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.WeeklyLecIDSCtrls.errors == null ? null : ctx_r1.WeeklyLecIDSCtrls.errors.required);
  }
}

function CourseLectureComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 17);
  }
}

function CourseLectureComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CourseLectureComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r6.openDeleteDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Delete"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var CourseLectureComponent = /*#__PURE__*/function () {
  function CourseLectureComponent(fb, CourseLectureServ, WeeklyTableServ, translate, spinner, ToastrMsg, dialog, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseLectureComponent);

    this.fb = fb;
    this.CourseLectureServ = CourseLectureServ;
    this.WeeklyTableServ = WeeklyTableServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.dialog = dialog;
    this.route = route;
    this.authserv = authserv;
    this.courseId = 0;
    this.IsAdd = true;
    this.submitted = false; // get course id

    route.paramMap.subscribe(function (params) {
      var id = Number(params.get("courseId"));

      if (id) {
        _this.courseId = id;

        _this.CourseLectureServ.getAllLecturesIdsByCourseId(_this.courseId).subscribe(function (res) {
          if (res) {
            if (res.length > 0) _this.IsAdd = false;

            _this.WeeklyLecIDSCtrls.setValue(res.map(function (lec) {
              return lec.Lecture_id;
            }));
          }
        });
      }
    }); //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseLectureComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        WeeklyLec_IDS: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
      this.getAllWeeklyLectures();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllWeeklyLectures();
      });
    }
  }, {
    key: "WeeklyLecIDSCtrls",
    get: function get() {
      return this.myForm.controls.WeeklyLec_IDS;
    }
  }, {
    key: "getAllWeeklyLectures",
    value: function getAllWeeklyLectures() {
      var _this3 = this;

      this.spinner.show();
      this.WeeklyTableServ.getAllWeeklyLectures().subscribe(function (res) {
        if (res) _this3.lecturesList = res;

        _this3.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.submitted = true;

      if (this.myForm.valid) {
        var courseLectures = {
          subject_id: this.courseId,
          WeeklyLec_IDS: this.WeeklyLecIDSCtrls.value
        }; // console.log("WeeklyLecIDS", courseLectures);

        this.spinner.show();
        this.IsAdd ? this.addcourseLectures(courseLectures) : this.updatecourseLectures(courseLectures, false);
      } else this.ToastrMsg.error("General.FormNotValid");
    } // add course Group

  }, {
    key: "addcourseLectures",
    value: function addcourseLectures(courseLectures) {
      var _this4 = this;

      this.CourseLectureServ.addCourseLectures(courseLectures).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this4.IsAdd = false; // get lectures ids from response after add

          _this4.WeeklyLecIDSCtrls.setValue(res.Course_Lecture.map(function (lec) {
            return lec.Lecture_id;
          }));

          _this4.ToastrMsg.success("General.AddSuccessfully");
        } else _this4.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

        _this4.spinner.hide();
      });
    } // update course Group

  }, {
    key: "updatecourseLectures",
    value: function updatecourseLectures(courseLectures, isDelete) {
      var _this5 = this;

      this.CourseLectureServ.editCourseLectures(courseLectures).subscribe(function (res) {
        if (res.returnValue == 1) {
          // get lectures ids from response after edit
          _this5.WeeklyLecIDSCtrls.setValue(res.Course_Lecture.map(function (lec) {
            return lec.Lecture_id;
          }));

          if (isDelete) {
            _this5.ToastrMsg.success("General.DeleteSuccessfully");

            _this5.IsAdd = true;
          } else _this5.ToastrMsg.success("General.UpdateSuccessfully");
        } else _this5.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

        _this5.spinner.hide();
      });
    } // delete dialog

  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog() {
      var _this6 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: this.courseId
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this6.deletecourseLectures();
      });
    } // delete course Group

  }, {
    key: "deletecourseLectures",
    value: function deletecourseLectures() {
      this.WeeklyLecIDSCtrls.setValue([]);
      this.submitted = false;
      var courseLectures = {
        subject_id: this.courseId,
        WeeklyLec_IDS: this.WeeklyLecIDSCtrls.value
      };
      console.log("WeeklyLecIDS", courseLectures);
      this.spinner.show();
      this.updatecourseLectures(courseLectures, true);
    }
  }]);

  return CourseLectureComponent;
}();

CourseLectureComponent.ɵfac = function CourseLectureComponent_Factory(t) {
  return new (t || CourseLectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_course_lecture_service__WEBPACK_IMPORTED_MODULE_3__.CourseLectureService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_educational_tabels_weekly_table_service__WEBPACK_IMPORTED_MODULE_4__.WeeklyTableService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
};

CourseLectureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CourseLectureComponent,
  selectors: [["app-course-lecture"]],
  decls: 32,
  vars: 23,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/dashboard/educational-setup/courses/index", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], ["appearance", "legacy"], ["formControlName", "WeeklyLec_IDS", "multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-danger bg-light-danger", 3, "click", 4, "ngIf"], [3, "value"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-danger", "bg-light-danger", 3, "click"]],
  template: function CourseLectureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CourseLectureComponent_mat_option_24_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CourseLectureComponent_mat_hint_25_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-card-actions", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CourseLectureComponent_Template_button_click_27_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, CourseLectureComponent_i_28_Template, 1, 0, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CourseLectureComponent_button_31_Template, 3, 3, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 11, ctx.IsAdd ? "EducationalSetup.addCourseLecture" : "EducationalSetup.updateCourseLecture"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 13, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 15, "Material.Lectures"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 17, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.lecturesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.WeeklyLecIDSCtrls == null ? null : ctx.WeeklyLecIDSCtrls.invalid) && ((ctx.WeeklyLecIDSCtrls == null ? null : ctx.WeeklyLecIDSCtrls.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.IsAdd);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 19, ctx.IsAdd ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.IsAdd);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtbGVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 36459:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-strcture/add-unit/add-unit.component.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUnitComponent": function() { return /* binding */ AddUnitComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/cource-structure.service */ 21534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function AddUnitComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "subjects.AddUnit"), " ");
  }
}

function AddUnitComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "subjects.UpdateUnit"), " - ", ctx_r1.unit_name, " ");
  }
}

function AddUnitComponent_mat_hint_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddUnitComponent_mat_hint_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddUnitComponent_mat_hint_21_span_1_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.FormCtrls.unit_ar_name.errors == null ? null : ctx_r3.FormCtrls.unit_ar_name.errors.required) && (ctx_r3.FormCtrls.unit_ar_name.errors == null ? null : ctx_r3.FormCtrls.unit_ar_name.errors.whiteSpace));
  }
}

function AddUnitComponent_mat_hint_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddUnitComponent_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddUnitComponent_mat_hint_28_span_1_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r4.FormCtrls.unit_en_name.errors == null ? null : ctx_r4.FormCtrls.unit_en_name.errors.required) && (ctx_r4.FormCtrls.unit_en_name.errors == null ? null : ctx_r4.FormCtrls.unit_en_name.errors.whiteSpace));
  }
}

function AddUnitComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddUnitComponent_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.addUpdateUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function AddUnitComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddUnitComponent_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.addUpdateUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

var AddUnitComponent = /*#__PURE__*/function () {
  function AddUnitComponent(fb, msg, route, spinner, courceStructureService, data, dialogRef) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddUnitComponent);

    this.fb = fb;
    this.msg = msg;
    this.route = route;
    this.spinner = spinner;
    this.courceStructureService = courceStructureService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.submitted = false;
    this.coverPath = "https://via.placeholder.com/150";
    this.subjectId = data.subjectId;
    console.log("subjectId", this.subjectId);
    this.unitId = data.unitId;
    if (this.unitId > 0) this.getUnitById();
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddUnitComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        id: [this.unitId],
        unit_ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        unit_en_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        unitDescription: [""],
        thumbnailPic: [null]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    } // get Unit ById

  }, {
    key: "getUnitById",
    value: function getUnitById() {
      var _this = this;

      this.spinner.show();
      this.courceStructureService.getUnitById(this.unitId).subscribe(function (res) {
        var _a;

        if (res.addedUnit) {
          _this.myForm.patchValue(res.addedUnit);

          _this.unit_name = res.addedUnit.unit_ar_name;
          _this.subjectId = res.addedUnit.subjectid;
          _this.coverPath = "mozakretyapi".concat((_a = res.addedUnit.unitThumb) === null || _a === void 0 ? void 0 : _a.attach_path);

          _this.spinner.hide();
        }
      });
    } // Start: add Unit

  }, {
    key: "addUpdateUnit",
    value: function addUpdateUnit() {
      var _this2 = this;

      var _a, _b, _c, _d, _e;

      this.submitted = true;
      var body = {};
      var addedUnit = {};
      var currentSubject = {};
      addedUnit.id = (_a = this.FormCtrls.id) === null || _a === void 0 ? void 0 : _a.value;
      addedUnit.unit_ar_name = (_b = this.FormCtrls.unit_ar_name) === null || _b === void 0 ? void 0 : _b.value;
      addedUnit.unit_en_name = (_c = this.FormCtrls.unit_en_name) === null || _c === void 0 ? void 0 : _c.value;
      addedUnit.unitDescription = (_d = this.FormCtrls.unitDescription) === null || _d === void 0 ? void 0 : _d.value;
      addedUnit.thumbnailPic = (_e = this.FormCtrls.thumbnailPic) === null || _e === void 0 ? void 0 : _e.value;
      currentSubject.subject_id = this.subjectId;
      body.addedUnit = addedUnit;
      body.currentSubject = currentSubject;

      if (this.myForm.valid) {
        this.spinner.show();
        this.courceStructureService.addUpdateUnit(body).subscribe(function (res) {
          console.log("addUpdateUnit", res);

          if (res) {
            _this2.spinner.hide();

            _this2.dialogRef.close(res);

            _this2.unitId == 0 ? _this2.msg.success("General.AddSuccessfully") : _this2.msg.success("General.UpdeteSuccessfully");
          }
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this3 = this;

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
          var data = {
            FileAsBase64: fileReder,
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };
          _this3.coverPath = fileReder;

          _this3.FormCtrls.thumbnailPic.setValue(data);
        };
      }
    }
  }]);

  return AddUnitComponent;
}();

AddUnitComponent.ɵfac = function AddUnitComponent_Factory(t) {
  return new (t || AddUnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_4__.CourceStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
};

AddUnitComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddUnitComponent,
  selectors: [["app-add-unit"]],
  decls: 43,
  vars: 24,
  consts: [["mat-dialog-title", "", 1, "primary-color"], [4, "ngIf"], ["mat-dialog-content", ""], [3, "formGroup"], [1, "row"], [1, "col-9"], [1, "media"], ["width", "70", "height", "70", "alt", "avatar", 1, "rounded", "mr-3", 3, "src"], [1, "col-3"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn-danger", 3, "click"], ["hidden", "", "type", "file", "accept", "image/*", "id", "file", 3, "change"], ["fileInput", ""], [1, "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "unit_ar_name"], ["class", "danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "unit_en_name"], ["matInput", "", "formControlName", "unitDescription"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], ["mat-raised-button", "", "cdkFocusInitial", "", "class", "btn btn-primary float-right", 3, "click", 4, "ngIf"], [1, "danger"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", "float-right", 3, "click"]],
  template: function AddUnitComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddUnitComponent_span_1_Template, 3, 3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddUnitComponent_span_2_Template, 3, 4, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddUnitComponent_Template_button_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);

        return _r2.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddUnitComponent_Template_input_change_13_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddUnitComponent_mat_hint_21_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddUnitComponent_mat_hint_28_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "textarea", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AddUnitComponent_button_40_Template, 3, 3, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AddUnitComponent_button_41_Template, 3, 3, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unitId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unitId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.coverPath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 14, "subjects.CoverPhoto"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 16, "General.ar_name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.unit_ar_name.invalid && (ctx.FormCtrls.unit_ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 18, "General.en_name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.unit_en_name.invalid && (ctx.FormCtrls.unit_en_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 20, "General.Description"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 22, "General.Close"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unitId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unitId > 0);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".primary-color[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC11bml0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRiIsImZpbGUiOiJhZGQtdW5pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWNvbG9yIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 89149:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-strcture/lessons/add-lesson/add-lesson.component.ts ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLessonComponent": function() { return /* binding */ AddLessonComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/cource-structure.service */ 21534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function AddLessonComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "subjects.AddLesson"), " ");
  }
}

function AddLessonComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "subjects.UpdateLesson"), " - ", ctx_r1.lesson_name, " ");
  }
}

function AddLessonComponent_mat_hint_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddLessonComponent_mat_hint_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddLessonComponent_mat_hint_21_span_1_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.FormCtrls.lesson_ar_name.errors == null ? null : ctx_r3.FormCtrls.lesson_ar_name.errors.required) && (ctx_r3.FormCtrls.lesson_ar_name.errors == null ? null : ctx_r3.FormCtrls.lesson_ar_name.errors.whiteSpace));
  }
}

function AddLessonComponent_mat_hint_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function AddLessonComponent_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddLessonComponent_mat_hint_28_span_1_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r4.FormCtrls.lesson_en_name.errors == null ? null : ctx_r4.FormCtrls.lesson_en_name.errors.required) && (ctx_r4.FormCtrls.lesson_en_name.errors == null ? null : ctx_r4.FormCtrls.lesson_en_name.errors.whiteSpace));
  }
}

function AddLessonComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddLessonComponent_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.addUpdateLesson();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function AddLessonComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddLessonComponent_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.addUpdateLesson();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

var AddLessonComponent = /*#__PURE__*/function () {
  function AddLessonComponent(fb, msg, route, spinner, courceStructureService, data, dialogRef) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddLessonComponent);

    this.fb = fb;
    this.msg = msg;
    this.route = route;
    this.spinner = spinner;
    this.courceStructureService = courceStructureService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.submitted = false;
    this.coverPath = "https://via.placeholder.com/150";
    this.unitId = data.unitId;
    this.lessonId = data.lesson.id;
    if (this.lessonId > 0) this.getLessonById();
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddLessonComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        id: [this.lessonId],
        lesson_ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        lesson_en_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        lessonDescription: [""],
        thumbnailPic: [null]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getLessonById",
    value: function getLessonById() {
      var _this = this;

      this.spinner.show();
      this.courceStructureService.getLessonById(this.lessonId).subscribe(function (res) {
        var _a;

        if (res.addedLesson) {
          _this.myForm.patchValue(res.addedLesson);

          _this.lesson_name = res.addedLesson.lesson_ar_name;
          _this.coverPath = "mozakretyapi".concat((_a = res.addedLesson.lessonThumb) === null || _a === void 0 ? void 0 : _a.attach_path);

          _this.spinner.hide();
        }
      });
    }
  }, {
    key: "addUpdateLesson",
    value: function addUpdateLesson() {
      var _this2 = this;

      var _a, _b, _c, _d, _e;

      this.submitted = true;
      var body = {};
      var addedLesson = {};
      addedLesson.id = (_a = this.FormCtrls.id) === null || _a === void 0 ? void 0 : _a.value;
      addedLesson.lesson_ar_name = (_b = this.FormCtrls.lesson_ar_name) === null || _b === void 0 ? void 0 : _b.value;
      addedLesson.lesson_en_name = (_c = this.FormCtrls.lesson_en_name) === null || _c === void 0 ? void 0 : _c.value;
      addedLesson.lessonDescription = (_d = this.FormCtrls.lessonDescription) === null || _d === void 0 ? void 0 : _d.value;
      addedLesson.thumbnailPic = (_e = this.FormCtrls.thumbnailPic) === null || _e === void 0 ? void 0 : _e.value;
      body.addedLesson = addedLesson;

      if (this.myForm.valid) {
        this.spinner.show();
        this.courceStructureService.addUpdateLesson(this.unitId, body).subscribe(function (res) {
          if (res) {
            _this2.dialogRef.close(res);

            _this2.spinner.hide();

            _this2.lessonId == 0 ? _this2.msg.success("General.AddSuccessfully") : _this2.msg.success("General.UpdeteSuccessfully");
          }
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this3 = this;

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
          var data = {
            FileAsBase64: fileReder,
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };
          _this3.coverPath = fileReder;

          _this3.FormCtrls.thumbnailPic.setValue(data);
        };
      }
    }
  }]);

  return AddLessonComponent;
}();

AddLessonComponent.ɵfac = function AddLessonComponent_Factory(t) {
  return new (t || AddLessonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_3__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_4__.CourceStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
};

AddLessonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddLessonComponent,
  selectors: [["app-add-lesson"]],
  decls: 43,
  vars: 24,
  consts: [["mat-dialog-title", "", 1, "primary-color"], [4, "ngIf"], ["mat-dialog-content", ""], [3, "formGroup"], [1, "row"], [1, "col-9"], [1, "media"], ["width", "70", "height", "70", "alt", "avatar", 1, "rounded", "mr-3", 3, "src"], [1, "col-3"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn-danger", 3, "click"], ["hidden", "", "type", "file", "accept", "image/*", "id", "file", 3, "change"], ["fileInput", ""], [1, "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "lesson_ar_name"], ["class", "danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "lesson_en_name"], ["matInput", "", "formControlName", "lessonDescription"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], ["mat-raised-button", "", "cdkFocusInitial", "", "class", "btn btn-primary float-right", 3, "click", 4, "ngIf"], [1, "danger"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", "float-right", 3, "click"]],
  template: function AddLessonComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddLessonComponent_span_1_Template, 3, 3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddLessonComponent_span_2_Template, 3, 4, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddLessonComponent_Template_button_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);

        return _r2.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddLessonComponent_Template_input_change_13_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddLessonComponent_mat_hint_21_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddLessonComponent_mat_hint_28_Template, 2, 1, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "textarea", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AddLessonComponent_button_40_Template, 3, 3, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AddLessonComponent_button_41_Template, 3, 3, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "ngx-spinner");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lessonId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lessonId > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.coverPath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 14, "subjects.CoverPhoto"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 16, "General.ar_name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.lesson_ar_name.invalid && (ctx.FormCtrls.lesson_ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 18, "General.en_name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FormCtrls.lesson_en_name.invalid && (ctx.FormCtrls.lesson_en_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 20, "General.Description"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 22, "General.Close"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lessonId == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lessonId > 0);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbGVzc29uLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 23845:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-strcture/lessons/lessons-index/lessons-index.component.ts ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonsIndexComponent": function() { return /* binding */ LessonsIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _add_lesson_add_lesson_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-lesson/add-lesson.component */ 89149);
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../topics/topics.component */ 41673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/cource-structure.service */ 21534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















function LessonsIndexComponent_ng_container_1_div_1_mat_card_actions_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LessonsIndexComponent_ng_container_1_div_1_mat_card_actions_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      var lesson_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r6.openAddTopicDialog(lesson_r4.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LessonsIndexComponent_ng_container_1_div_1_mat_card_actions_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      var lesson_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r9.openAddLessonDialog(lesson_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LessonsIndexComponent_ng_container_1_div_1_mat_card_actions_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      var lesson_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r11.openDeleateDialog(lesson_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "subjects.Topics"), " ");
  }
}

function LessonsIndexComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card-subtitle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, LessonsIndexComponent_ng_container_1_div_1_mat_card_actions_10_Template, 10, 3, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var lesson_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi", lesson_r4.lessonThumb == null ? null : lesson_r4.lessonThumb.attach_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", lesson_r4 == null ? null : lesson_r4.lesson_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", lesson_r4 == null ? null : lesson_r4.lesson_ar_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", lesson_r4 == null ? null : lesson_r4.lessonDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", lesson_r4 == null ? null : lesson_r4.lessonDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.canUpdate);
  }
}

function LessonsIndexComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LessonsIndexComponent_ng_container_1_div_1_Template, 11, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.lessons);
  }
}

function LessonsIndexComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, "subjects.LessonsIsEmpty"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 4, "subjects.clickToAddLesson"));
  }
}

var LessonsIndexComponent = /*#__PURE__*/function () {
  function LessonsIndexComponent(spinner, msg, dialog, courceStructureService) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonsIndexComponent);

    this.spinner = spinner;
    this.msg = msg;
    this.dialog = dialog;
    this.courceStructureService = courceStructureService;
    this.canUpdate = true;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonsIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this.unitId > 0 ? this.getLessons() : null; //  console.log("Added Lesson=>: ", this.AddedLesson);

      if (this.AddedLesson) this.lessons.push(this.AddedLesson);
    }
  }, {
    key: "getLessons",
    value: function getLessons() {
      var _this = this;

      this.spinner.show();
      this.courceStructureService.getLessons(this.unitId).subscribe(function (res) {
        _this.lessons = res;

        _this.spinner.hide();
      });
    }
  }, {
    key: "deleteLesson",
    value: function deleteLesson(lesson) {
      var _this2 = this;

      this.spinner.show();
      this.courceStructureService.deleteLesson(lesson.id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this2.lessons.indexOf(lesson);

          _this2.lessons.splice(i, 1);

          _this2.msg.success("General.DeleteSuccessfully");
        }

        _this2.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(lesson) {
      var _this3 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: lesson.lesson_ar_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this3.deleteLesson(lesson);
      });
    }
  }, {
    key: "openAddLessonDialog",
    value: function openAddLessonDialog(lesson) {
      var _this4 = this;

      this.dialog.open(_add_lesson_add_lesson_component__WEBPACK_IMPORTED_MODULE_3__.AddLessonComponent, {
        data: {
          unitId: this.unitId,
          lesson: lesson
        },
        minWidth: "60vw" //  minHeight: "60vh",

      }).afterClosed().subscribe(function (updatedLesson) {
        //console.log("updated Lesson=>: ", updatedLesson);
        var i = _this4.lessons.findIndex(function (e) {
          return e.id == updatedLesson.id;
        });

        _this4.lessons[i] = updatedLesson;
      });
    }
  }, {
    key: "openAddTopicDialog",
    value: function openAddTopicDialog(lessonId) {
      this.dialog.open(_topics_topics_component__WEBPACK_IMPORTED_MODULE_4__.TopicsComponent, {
        data: {
          lessonId: lessonId,
          lesson: null
        },
        minWidth: "85vw",
        maxHeight: "95vh"
      }).afterClosed().subscribe(function (topic) {});
    }
  }]);

  return LessonsIndexComponent;
}();

LessonsIndexComponent.ɵfac = function LessonsIndexComponent_Factory(t) {
  return new (t || LessonsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_6__.CourceStructureService));
};

LessonsIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: LessonsIndexComponent,
  selectors: [["app-lessons-index"]],
  inputs: {
    unitId: "unitId",
    AddedLesson: "AddedLesson",
    canUpdate: "canUpdate"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 2,
  consts: [[1, "row"], [4, "ngIf", "ngIfElse"], ["class", "text-center"], ["emptyLessons", ""], ["class", "col-md-3 col-12", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-12"], [1, "card-img"], ["alt", "lesson cover", 1, "img-fluid", 3, "src"], [3, "title"], [4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", 1, "mr-2", 3, "click"], ["color", "primary"], ["color", "warn"], [1, "col-4"], ["role", "alert", 1, "alert", "bg-light-warning", "alert-dismissible", "mb-2"], [1, "alert-heading", "mb-2"]],
  template: function LessonsIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LessonsIndexComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LessonsIndexComponent_ng_template_2_Template, 8, 6, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.lessons == null ? null : ctx.lessons.length) > 0)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".mat-card[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  max-height: 50px;\n  min-height: 20px;\n  overflow: hidden;\n  flex-direction: row;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  max-height: 50px;\n  height: 50px;\n  overflow: hidden;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  height: 180px !important;\n  max-height: 180px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3NvbnMtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7O0VBRUUsbUJBQUE7QUFHRiIsImZpbGUiOiJsZXNzb25zLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW1nLWZsdWlkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1jYXJkLXN1YnRpdGxlLFxyXG4ubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 27513:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-strcture/strcture-index/strcture-index.component.ts ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrctureIndexComponent": function() { return /* binding */ StrctureIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _lessons_add_lesson_add_lesson_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../lessons/add-lesson/add-lesson.component */ 89149);
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../add-unit/add-unit.component */ 36459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/cource-structure.service */ 21534);
/* harmony import */ var app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/course.service */ 98331);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/General/general.service */ 65086);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _lessons_lessons_index_lessons_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lessons/lessons-index/lessons-index.component */ 23845);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);






















function StrctureIndexComponent_ng_container_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "GeneralSetup.ForStudent"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r5.userData == null ? null : ctx_r5.userData.ar_name, " ");
  }
}

function StrctureIndexComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, StrctureIndexComponent_ng_container_7_span_1_Template, 5, 4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StrctureIndexComponent_ng_container_7_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r6.back();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isParent);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 2, "General.Back"), " ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

function StrctureIndexComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StrctureIndexComponent_ng_container_8_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r8.openAddUnitDialog(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, ctx_r1.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, "General.Back"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 5, "subjects.AddUnit"), " ");
  }
}

function StrctureIndexComponent_ng_container_11_div_1_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StrctureIndexComponent_ng_container_11_div_1_div_13_div_1_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      var unit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r14.openDeleateDialog(unit_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StrctureIndexComponent_ng_container_11_div_1_div_13_div_1_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      var unit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r17.openAddUnitDialog(unit_r11.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 2, "General.Delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 4, "General.Edit"), " ");
  }
}

function StrctureIndexComponent_ng_container_11_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, StrctureIndexComponent_ng_container_11_div_1_div_13_div_1_Template, 13, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r12.rowFunctions == null ? null : ctx_r12.rowFunctions.length) > 0);
  }
}

var _c1 = function _c1(a0) {
  return {
    "bg-light-info": a0
  };
};

function StrctureIndexComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StrctureIndexComponent_ng_container_11_div_1_Template_a_click_4_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      var unit_r11 = restoredCtx.$implicit;
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r19.SelectUnitId(unit_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-card-subtitle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, StrctureIndexComponent_ng_container_11_div_1_div_13_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var unit_r11 = ctx.$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](8, _c1, ctx_r10.selectedUnitId == unit_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("src", "mozakretyapi", unit_r11.unitThumb == null ? null : unit_r11.unitThumb.attach_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", unit_r11.unit_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", unit_r11.unit_ar_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", unit_r11.unitDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](unit_r11.unitDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r10.canUpdate);
  }
}

function StrctureIndexComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, StrctureIndexComponent_ng_container_11_div_1_Template, 14, 10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.units)("ngForTrackBy", ctx_r2.track);
  }
}

function StrctureIndexComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "subjects.emptyUnits"), " ");
  }
}

function StrctureIndexComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StrctureIndexComponent_a_17_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r21.openAddLessonDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "subjects.AddLesson"), " ");
  }
}

var StrctureIndexComponent = /*#__PURE__*/function () {
  function StrctureIndexComponent(spinner, route, courceStructureService, courseServ, router, fb, authserv, msg, dialog, generalService, translate) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StrctureIndexComponent);

    this.spinner = spinner;
    this.route = route;
    this.courceStructureService = courceStructureService;
    this.courseServ = courseServ;
    this.router = router;
    this.fb = fb;
    this.authserv = authserv;
    this.msg = msg;
    this.dialog = dialog;
    this.generalService = generalService;
    this.translate = translate;
    this.units = [];
    this.canUpdate = true; // if (true) current user is (admin), if (false) current user is (parent or student)

    this.isParent = false; // current user is parent

    this.isStudent = false; //current user is student

    route.paramMap.subscribe(function (params) {
      _this.subjectId = Number(params.get("subjectId"));
      _this.userId = Number(params.get("userId")); // get userId if parent or student

      if (router.url.search("/parent/") >= 0) _this.isParent = true; // current user is parent

      if (router.url.search("/student/") >= 0) _this.isStudent = true; // current user is student

      console.log("isStudent", _this.isStudent);
      console.log("isParent", _this.isParent);

      if (_this.userId) {
        generalService.getUser(_this.userId).subscribe(function (res) {
          _this.userData = res.user;
        });
      }
    });
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res;
          }
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    courseServ.getCourseById(this.subjectId).subscribe(function (res) {
      _this.course = res[0];
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StrctureIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log("canUpdate", this.canUpdate);
      this.getUnits();
    } //Get Subject Structre

  }, {
    key: "getUnits",
    value: function getUnits() {
      var _this2 = this;

      this.spinner.show();
      this.courceStructureService.getUnits(this.subjectId).subscribe(function (res) {
        _this2.units = res;
        _this2.selectedUnitId = res[0].id;
        _this2.selectedUnitName = res[0].unit_ar_name;

        _this2.spinner.hide();
      });
    }
  }, {
    key: "SelectUnitId",
    value: function SelectUnitId(unit) {
      this.selectedUnitId = unit.id;
      this.selectedUnitName = unit.unit_ar_name;
    }
  }, {
    key: "deleteUnit",
    value: function deleteUnit(unit) {
      var _this3 = this;

      this.spinner.show();
      this.courceStructureService.deleteUnit(unit.id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var i = _this3.units.indexOf(unit);

          _this3.units.splice(i, 1);

          _this3.msg.success("General.DeleteSuccessfully");
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(unit) {
      var _this4 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: unit.unit_ar_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this4.deleteUnit(unit);
      });
    }
  }, {
    key: "openAddUnitDialog",
    value: function openAddUnitDialog(unitId) {
      var _this5 = this;

      this.dialog.open(_add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_4__.AddUnitComponent, {
        data: {
          unitId: unitId > 0 ? unitId : 0,
          subjectId: this.subjectId,
          canUpdate: this.canUpdate
        },
        minWidth: "60vw" // minHeight: "60vh",

      }).afterClosed().subscribe(function (unit) {
        if ((unit === null || unit === void 0 ? void 0 : unit.id) > 0) {
          var i = _this5.units.findIndex(function (e) {
            return e.id == unit.id;
          });

          i < 0 ? _this5.units.push(unit) : _this5.units[i] = unit;
        }
      });
    }
  }, {
    key: "openAddLessonDialog",
    value: function openAddLessonDialog() {
      var _this6 = this;

      this.dialog.open(_lessons_add_lesson_add_lesson_component__WEBPACK_IMPORTED_MODULE_3__.AddLessonComponent, {
        data: {
          unitId: this.selectedUnitId,
          lesson: {
            id: 0
          }
        },
        minWidth: "60vw" //minHeight: "60vh",

      }).afterClosed().subscribe(function (lesson) {
        if ((lesson === null || lesson === void 0 ? void 0 : lesson.id) > 0) _this6.AddedLesson = lesson;
      });
    }
  }, {
    key: "back",
    value: function back() {
      if (this.isParent) this.router.navigateByUrl("/parent/child-evaluation/".concat(this.userId));
      if (this.isStudent) this.router.navigateByUrl("/student/mySpace");
    }
  }, {
    key: "track",
    value: function track(index, el) {
      return el.id;
    }
  }]);

  return StrctureIndexComponent;
}();

StrctureIndexComponent.ɵfac = function StrctureIndexComponent_Factory(t) {
  return new (t || StrctureIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_5__.CourceStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_8__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_shared_services_General_general_service__WEBPACK_IMPORTED_MODULE_9__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService));
};

StrctureIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: StrctureIndexComponent,
  selectors: [["app-strcture-index"]],
  inputs: {
    canUpdate: "canUpdate"
  },
  decls: 20,
  vars: 13,
  consts: [[1, "row"], [1, "col-12"], [1, "warning"], [4, "ngIf"], [1, "col-md-3", "mt-3"], [1, "col-md-9"], ["mat-raised-button", "", "class", "btn btn-primary bg-light-primary float-right", 3, "click", 4, "ngIf"], [3, "unitId", "AddedLesson", "canUpdate"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-warning", "float-right", 3, "click"], ["mat-raised-button", "", "routerLink", "/dashboard/educational-setup/courses/index", 1, "btn", "btn-warning", "bg-light-warning", "float-right", 3, "queryParams"], ["mat-raised-button", "", 1, "btn", "btn-primary", "bg-light-primary", "float-right", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-0"], [1, "col-10", "p-0"], [1, "media", 3, "click"], ["alt", "profile-img", "height", "64", "width", "64", 1, "rounded", "mr-3", 3, "src"], [1, "media-body"], [1, "col-12", "d-flex", "flex-sm-row", "flex-column", "justify-content-start", "px-0", "mb-sm-2"], [3, "title"], [1, "text-muted", "mb-0", "mt-1", "mt-sm-0", "unitDescription"], ["class", "col-2 p-0", 4, "ngIf"], [1, "col-2", "p-0"], ["class", "dropdown btn-group mr-1 mb-1", "ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown", "btn-group", "mr-1", "mb-1"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-icon", "round", "mr-1", "mb-1", "dropdown-toggle", "btn-dropdown"], [1, "fa", "fa-cog", "font-medium-3"], ["ngbDropdownMenu", "", "role", "menu", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"], [1, "ft-edit-2", "font-medium-3", "mr-2"]],
  template: function StrctureIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, StrctureIndexComponent_ng_container_7_Template, 5, 4, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, StrctureIndexComponent_ng_container_8_Template, 7, 9, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, StrctureIndexComponent_ng_container_11_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, StrctureIndexComponent_div_12_Template, 4, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, StrctureIndexComponent_a_17_Template, 3, 3, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "app-lessons-index", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 11, "labels.SubjectStructure"), " - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.currentLang == "ar" ? (tmp_1_0 = ctx.course == null ? null : ctx.course.subject_ar_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx.course == null ? null : ctx.course.subject_en_name : (tmp_1_0 = ctx.course == null ? null : ctx.course.subject_en_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx.course == null ? null : ctx.course.subject_ar_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.canUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.canUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.units == null ? null : ctx.units.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.units == null ? null : ctx.units.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.selectedUnitName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.canUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("unitId", ctx.selectedUnitId)("AddedLesson", ctx.AddedLesson)("canUpdate", ctx.canUpdate);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _lessons_lessons_index_lessons_index_component__WEBPACK_IMPORTED_MODULE_10__.LessonsIndexComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardSubtitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdownMenu],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".btn-icon[_ngcontent-%COMP%], .btn-dropdown[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  max-width: 30px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.content-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.unitDescription[_ngcontent-%COMP%] {\n  max-height: 50px;\n  min-height: 20px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmN0dXJlLWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGIiwiZmlsZSI6InN0cmN0dXJlLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1pY29uLFxyXG4uYnRuLWRyb3Bkb3duOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG1heC13aWR0aDogMzBweDtcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udW5pdERlc2NyaXB0aW9uIHtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 41673:
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/course-strcture/topics/topics.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicsComponent": function() { return /* binding */ TopicsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/cource-structure.service */ 21534);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function TopicsComponent_mat_hint_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function TopicsComponent_mat_hint_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TopicsComponent_mat_hint_12_span_1_Template, 3, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.FormCtrls.topic_ar_name.errors == null ? null : ctx_r0.FormCtrls.topic_ar_name.errors.required) && (ctx_r0.FormCtrls.topic_ar_name.errors == null ? null : ctx_r0.FormCtrls.topic_ar_name.errors.whiteSpace));
  }
}

function TopicsComponent_mat_hint_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function TopicsComponent_mat_hint_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TopicsComponent_mat_hint_19_span_1_Template, 3, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.topic_en_name.errors == null ? null : ctx_r1.FormCtrls.topic_en_name.errors.required) && (ctx_r1.FormCtrls.topic_en_name.errors == null ? null : ctx_r1.FormCtrls.topic_en_name.errors.whiteSpace));
  }
}

function TopicsComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopicsComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r9.addUpdateTopic();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function TopicsComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopicsComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r11.addUpdateTopic();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

function TopicsComponent_div_24_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopicsComponent_div_24_tr_15_Template_button_click_8_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      var topic_r15 = restoredCtx.$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r17.getTopicById(topic_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopicsComponent_div_24_tr_15_Template_button_click_11_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      var topic_r15 = restoredCtx.$implicit;
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r19.openDeleateDialog(topic_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var topic_r15 = ctx.$implicit;
    var i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](topic_r15.topic_ar_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](topic_r15.topic_en_name);
  }
}

function TopicsComponent_div_24_pagination_controls_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "pagination-controls", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function TopicsComponent_div_24_pagination_controls_17_Template_pagination_controls_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r20.p = $event;
      return ctx_r20.getTopicsByLessonId();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxSize", ctx_r14.maxSize);
  }
}

var _c0 = function _c0(a1, a2) {
  return {
    itemsPerPage: 10,
    currentPage: a1,
    totalItems: a2
  };
};

function TopicsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "actions\xAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "tbody", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, TopicsComponent_div_24_tr_15_Template, 14, 3, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, TopicsComponent_div_24_pagination_controls_17_Template, 1, 1, "pagination-controls", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 5, "General.ar_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, "General.en_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 9, ctx_r4.topics, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](12, _c0, ctx_r4.p, ctx_r4.itemsCount)))("ngForTrackBy", ctx_r4.track);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.topics == null ? null : ctx_r4.topics.length) > 0);
  }
}

function TopicsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, "subjects.TopicsIsEmpty"), " ");
  }
}

var TopicsComponent = /*#__PURE__*/function () {
  function TopicsComponent(spinner, msg, dialog, fb, courceStructureService, data, dialogRef) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopicsComponent);

    this.spinner = spinner;
    this.msg = msg;
    this.dialog = dialog;
    this.fb = fb;
    this.courceStructureService = courceStructureService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.submitted = false;
    this.p = 1;
    this.maxSize = 9;
    this.lessonId = data.lessonId;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopicsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getTopicsByLessonId();
      this.myForm = this.fb.group({
        id: [0],
        topic_ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100), app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        topic_en_name: [""]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getTopicsByLessonId",
    value: function getTopicsByLessonId() {
      var _this = this;

      this.spinner.show();
      this.courceStructureService.getTopicsByLessonId(this.p, this.lessonId).subscribe(function (res) {
        //  console.log("getTopicsByLessonId", res);
        _this.topics = res.edu_topic;
        _this.itemsCount = res.topicsSize;

        _this.spinner.hide();
      });
    }
  }, {
    key: "getTopicById",
    value: function getTopicById(topic) {
      this.myForm.patchValue(topic); // console.log(topic);
    }
  }, {
    key: "getTopicByIds",
    value: function getTopicByIds(id) {
      var _this2 = this;

      this.spinner.show();
      this.courceStructureService.getTopicById(this.lessonId, id).subscribe(function (res) {
        if (res.id != null) {
          _this2.myForm.patchValue(res); // this.myForm.controls["id"].setValue(res.LessonID);
          // this.myForm.controls["id"].setValue(res.id);
          // this.myForm.controls["topic_ar_name"].setValue(res.topic_ar_name);
          // this.myForm.controls["topic_en_name"].setValue(res.topic_en_name);


          _this2.spinner.hide();
        }
      });
    }
  }, {
    key: "addUpdateTopic",
    value: function addUpdateTopic() {
      var _this3 = this;

      var _a;

      this.submitted = true;
      var body = {};
      body.LessonID = this.lessonId;
      body.id = (_a = this.FormCtrls.id) === null || _a === void 0 ? void 0 : _a.value;
      body.topic_ar_name = this.FormCtrls.topic_ar_name.value;
      body.topic_en_name = this.FormCtrls.topic_en_name.value;
      body.state = true;

      if (this.myForm.valid) {
        this.spinner.show();
        this.courceStructureService.addUpdateTopic(body).subscribe(function (res) {
          var _a; // console.log("addUpdateTopic", res);


          if (res.returnValue == 1) {
            _this3.submitted = false;

            _this3.myForm.reset();

            (_a = _this3.FormCtrls.id) === null || _a === void 0 ? void 0 : _a.setValue(0);

            _this3.getTopicsByLessonId();

            body.id == 0 ? _this3.msg.success("General.AddSuccessfully") : _this3.msg.success("General.UpdeteSuccessfully");
          }

          _this3.spinner.hide();
        });
      }
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(topic) {
      var _this4 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: topic.topic_ar_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this4.deleteTopic(topic);
      });
    }
  }, {
    key: "deleteTopic",
    value: function deleteTopic(topic) {
      var _this5 = this;

      this.spinner.show();
      this.courceStructureService.deleteTopic(topic.id).subscribe(function (res) {
        if (res.returnValue == 1) {
          _this5.msg.success("General.DeleteSuccessfully");

          var i = _this5.topics.indexOf(topic);

          _this5.topics.splice(i, 1);
        }

        _this5.spinner.hide();
      });
    }
  }, {
    key: "track",
    value: function track(index, el) {
      return el.id;
    }
  }]);

  return TopicsComponent;
}();

TopicsComponent.ɵfac = function TopicsComponent_Factory(t) {
  return new (t || TopicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_cource_structure_service__WEBPACK_IMPORTED_MODULE_5__.CourceStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
};

TopicsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TopicsComponent,
  selectors: [["app-topics"]],
  decls: 32,
  vars: 20,
  consts: [["mat-dialog-title", "", 1, "primary-color"], ["mat-dialog-content", ""], [3, "formGroup"], [1, "row"], [1, "col-6"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "topic_ar_name"], ["class", "danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "topic_en_name"], [1, "col-12"], ["mat-raised-button", "", "cdkFocusInitial", "", "class", "btn btn-primary float-right", 3, "click", 4, "ngIf"], ["class", "full-wid-table", "style", "overflow: hidden !important", 4, "ngIf", "ngIfElse"], ["class", "text-center"], ["topicsEmpty", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "btn", "btn-danger", "float-right", 3, "mat-dialog-close"], [1, "danger"], [4, "ngIf"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", "float-right", 3, "click"], [1, "full-wid-table", 2, "overflow", "hidden !important"], ["id", "sotbmod", 1, "table", "table-striped", "table-hover", "table-full-width", "rtl"], ["id", "addedExamQuestionsHolder"], ["id", "ExamQuestion-2626853", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange", 4, "ngIf"], ["id", "ExamQuestion-2626853"], ["mat-mini-fab", "", "color", "primary", 1, "mr-1", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "mr-1", 3, "click"], ["dir", "ltr", "previousLabel", "", "nextLabel", "", 3, "maxSize", "pageChange"], [1, "col-4"], ["role", "alert", 1, "alert", "bg-light-warning", "alert-dismissible", "mb-2"], [1, "alert-heading", "mb-2"]],
  template: function TopicsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, TopicsComponent_mat_hint_12_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, TopicsComponent_mat_hint_19_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, TopicsComponent_button_21_Template, 3, 3, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, TopicsComponent_button_22_Template, 3, 3, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TopicsComponent_div_24_Template, 18, 15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TopicsComponent_ng_template_25_Template, 5, 3, "ng-template", 12, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "ngx-spinner");
    }

    if (rf & 2) {
      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 12, "subjects.Topics"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 14, "General.ar_name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.topic_ar_name.invalid && (ctx.FormCtrls.topic_ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 16, "General.en_name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.FormCtrls.topic_en_name.invalid && (ctx.FormCtrls.topic_en_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.topics == null ? null : ctx.topics.length) > 0)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 18, "General.Close"), " ");
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Dir],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 76vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoidG9waWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogNzZ2aDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 44711:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/courses/exam-night/exam-night.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamNightComponent": function() { return /* binding */ ExamNightComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/General/upload-file.service */ 75013);
/* harmony import */ var app_dashboard_services_setup_educational_setup_exam_night_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/exam-night.service */ 54811);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-stage-dropdown/educational-stage-dropdown.component */ 83722);
/* harmony import */ var _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/educational-year-by-stage-dropdown/educational-year-dropdown.component */ 70414);
/* harmony import */ var _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/cources-by-year-dropdown/cources-dropdown.component */ 74889);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);






























function ExamNightComponent_mat_hint_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function ExamNightComponent_mat_hint_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.mustEnterValue"), " ");
  }
}

function ExamNightComponent_mat_hint_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ExamNightComponent_mat_hint_24_span_1_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ExamNightComponent_mat_hint_24_span_2_Template, 3, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrls.name.errors == null ? null : ctx_r0.FormCtrls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.FormCtrls.name.errors == null ? null : ctx_r0.FormCtrls.name.errors.whiteSpace);
  }
}

function ExamNightComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ExamNightComponent_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r18.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function ExamNightComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ExamNightComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r20 + 1);
  }
}

function ExamNightComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function ExamNightComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ele_r21.name);
  }
}

function ExamNightComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "labels.Subject"), " ");
  }
}

function ExamNightComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ele_r22.subject);
  }
}

function ExamNightComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "General.Download"), " ");
  }
}

function ExamNightComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ele_r23.path);
  }
}

function ExamNightComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 36);
  }
}

function ExamNightComponent_td_61_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ExamNightComponent_td_61_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);
      var file_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r29.editUser(file_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ExamNightComponent_td_61_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ExamNightComponent_td_61_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      var file_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r32.openDeleateDialog(file_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ExamNightComponent_td_61_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ExamNightComponent_td_61_ng_container_1_a_1_Template, 2, 0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ExamNightComponent_td_61_ng_container_1_a_2_Template, 2, 0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r26.functionName === "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r26.functionName === "Delete");
  }
}

function ExamNightComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ExamNightComponent_td_61_ng_container_1_Template, 3, 2, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.rowFunctions);
  }
}

function ExamNightComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 45);
  }
}

function ExamNightComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 46);
  }
}

function ExamNightComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](44);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r2.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

var ExamNightComponent = /*#__PURE__*/function () {
  function ExamNightComponent(fb, route, uploadFileService, examNightService, authService, spinner, dialog, translate, toastr) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamNightComponent);

    this.fb = fb;
    this.route = route;
    this.uploadFileService = uploadFileService;
    this.examNightService = examNightService;
    this.authService = authService;
    this.spinner = spinner;
    this.dialog = dialog;
    this.translate = translate;
    this.toastr = toastr;
    this.submitted = false;
    this.Filepath = null;
    this.itemsCounts = 0;
    this.displayedColumns = ["#", "name", "subject", "download", "actions"]; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            _this.rowFunctions = res;
          }
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authService.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamNightComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllExamNight(1);
      this.myForm = this.fb.group({
        id: [0],
        countryId: [""],
        stageId: [""],
        educationYearId: [""],
        subjectId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
      }

      this.authService.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId; //   this.getAllExamNight(1);
      });
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
        this.dataSource.sort = this.sort;
      }
    }
  }, {
    key: "getAllExamNight",
    value: function getAllExamNight(page) {
      var _this3 = this;

      this.spinner.show();
      this.examNightService.getAllExamNight(page).subscribe(function (res) {
        if (res) {
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(res.list);
          _this3.itemsCounts = res.itemsCounts;
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "addExamNight",
    value: function addExamNight() {
      var _this4 = this;

      this.submitted = true;
      var body = {
        id: this.FormCtrls.id.value,
        subjectId: this.FormCtrls.subjectId.value,
        name: this.FormCtrls.name.value,
        file: this.FormCtrls.file.value
      };

      if (this.myForm.valid) {
        this.examNightService.addExamNight(body).subscribe(function (response) {
          if (response) {
            _this4.clearForm();

            _this4.getAllExamNight(1);

            _this4.toastr.success("General.AddSuccessfully");

            console.log("EXAM NIGHT: ", response);
          }
        });
      } else this.toastr.error("General.FormNotValid");
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(file) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: file.name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteFile(file);
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(file) {
      var _this6 = this;

      this.examNightService.deleteFile(file.id).subscribe(function (response) {
        if (response) {
          var i = _this6.dataSource.data.findIndex(function (e) {
            return e == file;
          });

          _this6.dataSource.data.splice(i, 1);

          _this6.itemsCounts--;
          _this6.dataSource.sort = _this6.sort;

          _this6.toastr.success("General.DeleteSuccessfully");
        } else {
          _this6.toastr.error("General.TosterErrorMessage");
        }
      });
    } //Attache File

  }, {
    key: "onChange",
    value: function onChange($event) {
      var _this7 = this;

      this.uploadFileService.uploadFile($event).then(function (file) {
        var _a;

        console.log("file", file);
        (_a = _this7.FormCtrls.file) === null || _a === void 0 ? void 0 : _a.setValue(file); // this.fileType = file.type;
        // this.Filepath = file.FileAsBase64?.replace(
        //   "data:application/pdf;base64,",
        //   ""
        // );
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.FormCtrls.id.setValue(0);
      this.submitted = false;
      var FileInputs = document.querySelectorAll('input[type="file"]');
      FileInputs.forEach(function (input) {
        input.value = null;
      });
    }
  }]);

  return ExamNightComponent;
}();

ExamNightComponent.ɵfac = function ExamNightComponent_Factory(t) {
  return new (t || ExamNightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_General_upload_file_service__WEBPACK_IMPORTED_MODULE_3__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_exam_night_service__WEBPACK_IMPORTED_MODULE_4__.ExamNightService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_6__.MessagesService));
};

ExamNightComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ExamNightComponent,
  selectors: [["app-exam-night"]],
  viewQuery: function ExamNightComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 66,
  vars: 30,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "submitted", "control"], [3, "submitted", "control", "stageControl"], [3, "submitted", "control", "yearControl"], [1, "col-md-4", "col-6"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "name"], ["class", "text-danger", 4, "ngIf"], ["type", "file", 3, "change"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-info", 3, "click"], [1, "fa", "fa-plus-square"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "subject"], ["matColumnDef", "download"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [1, "text-danger"], [4, "ngIf"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], ["class", "success p-0", "matTooltip", "Edit", 3, "click", 4, "ngIf"], ["class", "danger p-0", "matTooltip", "Delete", 3, "click", 4, "ngIf"], ["matTooltip", "Edit", 1, "success", "p-0", 3, "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["matTooltip", "Delete", 1, "danger", "p-0", 3, "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function ExamNightComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-educational-stage-dropdown", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "educational-year-by-stage-dropdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "cources-by-year-dropdown", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ExamNightComponent_mat_hint_24_Template, 3, 2, "mat-hint", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ExamNightComponent_Template_input_change_26_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-card-actions", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ExamNightComponent_Template_a_click_28_listener() {
        return ctx.addExamNight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, ExamNightComponent_button_32_Template, 3, 3, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "mat-form-field", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function ExamNightComponent_Template_input_keyup_43_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "table", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](47, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ExamNightComponent_th_48_Template, 2, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, ExamNightComponent_td_49_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](50, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, ExamNightComponent_th_51_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, ExamNightComponent_td_52_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](53, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, ExamNightComponent_th_54_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, ExamNightComponent_td_55_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](56, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, ExamNightComponent_th_57_Template, 3, 3, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, ExamNightComponent_td_58_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](59, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, ExamNightComponent_th_60_Template, 1, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](61, ExamNightComponent_td_61_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, ExamNightComponent_tr_62_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, ExamNightComponent_tr_63_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, ExamNightComponent_tr_64_Template, 3, 1, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "mat-paginator", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("page", function ExamNightComponent_Template_mat_paginator_page_65_listener($event) {
        return ctx.getAllExamNight($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 21, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", false)("control", ctx.FormCtrls.stageId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", false)("control", ctx.FormCtrls.educationYearId)("stageControl", ctx.FormCtrls.stageId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", false)("control", ctx.FormCtrls.subjectId)("yearControl", ctx.FormCtrls.educationYearId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 23, "labels.Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.FormCtrls.name.invalid && (ctx.FormCtrls.name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 25, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.FormCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](38, 27, "EducationalSetup.examNight"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](29, _c0))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.EducationalStageDropdownComponent, _shared_components_dropdowns_educational_year_by_stage_dropdown_educational_year_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.EducationalYearByStageDropdownComponent, _shared_components_dropdowns_cources_by_year_dropdown_cources_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.CourcesByYearDropdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatAnchor, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLW5pZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 72432:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/department/department.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentComponent": function() { return /* binding */ DepartmentComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_educational_setup_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/department.service */ 87740);
/* harmony import */ var app_dashboard_services_setup_general_setup_educational_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/dashboard/services/setup/general-setup/educational-group.service */ 68977);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);






























function DepartmentComponent_mat_hint_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function DepartmentComponent_mat_hint_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DepartmentComponent_mat_hint_18_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r0.FormCtrls.ar_name.errors == null ? null : ctx_r0.FormCtrls.ar_name.errors.required) || (ctx_r0.FormCtrls.ar_name.errors == null ? null : ctx_r0.FormCtrls.ar_name.errors.whiteSpace));
  }
}

function DepartmentComponent_mat_hint_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function DepartmentComponent_mat_hint_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DepartmentComponent_mat_hint_25_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.en_name.errors == null ? null : ctx_r1.FormCtrls.en_name.errors.required) || (ctx_r1.FormCtrls.en_name.errors == null ? null : ctx_r1.FormCtrls.en_name.errors.whiteSpace));
  }
}

function DepartmentComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r22 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ele_r22.eduGroup_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.curLang == "ar" ? ele_r22.ar_name : ele_r22.en_name, " ");
  }
}

function DepartmentComponent_mat_hint_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function DepartmentComponent_mat_hint_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DepartmentComponent_mat_hint_36_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.FormCtrls.eduGroupId == null ? null : ctx_r3.FormCtrls.eduGroupId.errors == null ? null : ctx_r3.FormCtrls.eduGroupId.errors.required);
  }
}

function DepartmentComponent_i_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 37);
  }
}

function DepartmentComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DepartmentComponent_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r24.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function DepartmentComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function DepartmentComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r26 + 1);
  }
}

function DepartmentComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.arName"), " ");
  }
}

function DepartmentComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ele_r27.ar_name);
  }
}

function DepartmentComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.enName"), " ");
  }
}

function DepartmentComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ele_r28.en_name);
  }
}

function DepartmentComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "GeneralSetup.EducationGroup"), " ");
  }
}

function DepartmentComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r29 = ctx.$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r14.curLang == "ar" ? ele_r29.eduGroupArName : ele_r29.eduGroupEnName, " ");
  }
}

function DepartmentComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 41);
  }
}

function DepartmentComponent_td_72_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DepartmentComponent_td_72_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      var ele_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r35.editDepartment(ele_r30);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function DepartmentComponent_td_72_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DepartmentComponent_td_72_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      var ele_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r38.openDeleateDialog(ele_r30);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function DepartmentComponent_td_72_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DepartmentComponent_td_72_ng_container_1_a_1_Template, 3, 3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DepartmentComponent_td_72_ng_container_1_a_2_Template, 3, 3, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r32.functionName === "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r32.functionName === "Delete");
  }
}

function DepartmentComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DepartmentComponent_td_72_ng_container_1_Template, 3, 2, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r16.rowFunctions);
  }
}

function DepartmentComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 50);
  }
}

function DepartmentComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 51);
  }
}

function DepartmentComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](55);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r6.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

var DepartmentComponent = /*#__PURE__*/function () {
  function DepartmentComponent(spinner, toastr, dialog, translate, fb, route, authService, departmentService, EducationalGroupServ) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DepartmentComponent);

    this.spinner = spinner;
    this.toastr = toastr;
    this.dialog = dialog;
    this.translate = translate;
    this.fb = fb;
    this.route = route;
    this.authService = authService;
    this.departmentService = departmentService;
    this.EducationalGroupServ = EducationalGroupServ;
    this.submitted = false;
    this.itemsCounts = 0;
    this.EduGroups = []; // rowFunctions: any[] = [
    //   { functionName: "Update" },
    //   { functionName: "Delete" },
    // ];

    this.displayColumns = ["#", "ar_name", "en_name", // "stage",
    // "EducationalYear",
    "educationGroup", "option"];
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            _this.rowFunctions = res;
          }
        });
      }
    });
    this.EduCompId = Number(authService.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DepartmentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.myForm = this.fb.group({
        id: [0],
        ar_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        en_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        eduGroupId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]] // stageId: ["", Validators.required],
        // eduYearId: ["", Validators.required],

      });
      this.translate.onLangChange.subscribe(function (lang) {
        _this2.curLang = lang.lang;
      });
      this.returnAllDepartments(1);
      this.getAllEducationalGroups();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.startSortingTable();
      }

      this.authService.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;

        _this3.returnAllDepartments(1);

        _this3.getAllEducationalGroups();
      });
    }
  }, {
    key: "startSortingTable",
    value: function startSortingTable() {
      var _this4 = this;

      // custom sort
      this.dataSource.sortingDataAccessor = function (item, property) {
        switch (property) {
          case "educationGroup":
            return _this4.curLang == "ar" ? item.eduGroupArName : item.eduGroupEnName;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort;
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "editDepartment",
    value: function editDepartment(DepartmentData) {
      this.myForm.patchValue(DepartmentData);
      this.FormCtrls.id.setValue(DepartmentData.Dep_id);
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } // get all educational groups

  }, {
    key: "getAllEducationalGroups",
    value: function getAllEducationalGroups() {
      var _this5 = this;

      this.spinner.show();
      this.EducationalGroupServ.getEducationalGroupDropdown().subscribe(function (res) {
        if (res) _this5.EduGroups = res;

        _this5.spinner.hide();
      });
    } // Return All Departments

  }, {
    key: "returnAllDepartments",
    value: function returnAllDepartments(page) {
      var _this6 = this;

      this.spinner.show();
      this.departmentService.getDepartment(page).subscribe(function (res) {
        if (res) {
          _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(res.DepList);
          _this6.itemsCounts = res.countItems;

          _this6.startSortingTable();
        }

        _this6.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this7 = this;

      this.submitted = true;
      var departmentData = {
        id: this.FormCtrls.id.value,
        // stageId: this.FormCtrls.stageId.value,
        // eduYearId: this.FormCtrls.eduYearId.value,
        ar_name: this.FormCtrls.ar_name.value,
        en_name: this.FormCtrls.en_name.value,
        eduGroupId: this.FormCtrls.eduGroupId.value
      };

      if (this.myForm.valid) {
        this.spinner.show();
        this.departmentService.addEditDepartment(departmentData).subscribe(function (res) {
          if (res.returnValue == 1) {
            var returnObject = res.Department;
            var returnData = {
              Dep_id: returnObject.id,
              ar_name: returnObject.ar_name,
              en_name: returnObject.en_name,
              eduGroupId: returnObject.eduGroupId,
              eduGroupArName: returnObject.eduGroup_ar_name,
              eduGroupEnName: returnObject.eduGroup_en_name
            };
            departmentData.id == 0 ? _this7.addDepartment(returnData) : _this7.updateDepartment(returnData);
            _this7.dataSource.sort = _this7.sort;

            _this7.clearForm();
          } else _this7.toastr.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this7.spinner.hide();
        });
      } else this.toastr.error("General.FormNotValid");
    } // Add Department

  }, {
    key: "addDepartment",
    value: function addDepartment(res) {
      this.dataSource.data.unshift(res);
      this.itemsCounts++;
      this.toastr.success("General.AddSuccessfully");
    } // Update Department

  }, {
    key: "updateDepartment",
    value: function updateDepartment(res) {
      var index = this.dataSource.data.findIndex(function (e) {
        return e.Dep_id == res.Dep_id;
      });
      this.dataSource.data[index] = res;
      this.toastr.success("General.UpdateSuccessfully");
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(DepartmentData) {
      var _this8 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: this.curLang == "ar" ? DepartmentData.ar_name : DepartmentData.en_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this8.deleteDepartment(DepartmentData);
      });
    } // Start:Delete Department

  }, {
    key: "deleteDepartment",
    value: function deleteDepartment(DepartmentData) {
      var _this9 = this;

      this.departmentService.deleteDepartment(DepartmentData.Dep_id).subscribe(function (res) {
        if (res.returnValue == 1) {
          var index = _this9.dataSource.data.findIndex(function (e) {
            return e == DepartmentData;
          });

          _this9.dataSource.data.splice(index, 1); // this.itemsCounts--;


          _this9.dataSource.sort = _this9.sort;
          if (DepartmentData.Dep_id == _this9.FormCtrls.id.value) _this9.clearForm();

          _this9.toastr.success("General.DeleteSuccessfully");
        } else {
          _this9.toastr.error("General.TosterErrorMessage");
        }
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.FormCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return DepartmentComponent;
}();

DepartmentComponent.ɵfac = function DepartmentComponent_Factory(t) {
  return new (t || DepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_department_service__WEBPACK_IMPORTED_MODULE_6__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_general_setup_educational_group_service__WEBPACK_IMPORTED_MODULE_7__.EducationalGroupService));
};

DepartmentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: DepartmentComponent,
  selectors: [["app-department"]],
  viewQuery: function DepartmentComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 77,
  vars: 38,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "ar_name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "en_name"], ["formControlName", "eduGroupId"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ar_name"], ["matColumnDef", "en_name"], ["matColumnDef", "educationGroup"], ["matColumnDef", "option"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of users", 3, "pageSizeOptions", "length", "pageSize", "page"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], [3, "value"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "5", 1, "mat-cell"]],
  template: function DepartmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, DepartmentComponent_mat_hint_18_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, DepartmentComponent_mat_hint_25_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, DepartmentComponent_mat_option_35_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, DepartmentComponent_mat_hint_36_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-card-actions", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DepartmentComponent_Template_button_click_38_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, DepartmentComponent_i_39_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, DepartmentComponent_button_42_Template, 3, 3, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-form-field", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function DepartmentComponent_Template_input_keyup_54_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "table", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](58, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, DepartmentComponent_th_59_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, DepartmentComponent_td_60_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](61, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, DepartmentComponent_th_62_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, DepartmentComponent_td_63_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](64, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, DepartmentComponent_th_65_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, DepartmentComponent_td_66_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](67, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, DepartmentComponent_th_68_Template, 3, 3, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, DepartmentComponent_td_69_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](70, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, DepartmentComponent_th_71_Template, 1, 0, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, DepartmentComponent_td_72_Template, 2, 1, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, DepartmentComponent_tr_73_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, DepartmentComponent_tr_74_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, DepartmentComponent_tr_75_Template, 3, 1, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "mat-paginator", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function DepartmentComponent_Template_mat_paginator_page_76_listener($event) {
        return ctx.returnAllDepartments($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 21, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0 ? "EducationalSetup.AddDepartment" : "EducationalSetup.EditDepartment"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 23, "labels.arName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.ar_name.invalid && (ctx.FormCtrls.ar_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 25, "labels.enName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.en_name.invalid && (ctx.FormCtrls.en_name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 27, "GeneralSetup.EducationGroup"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 29, "General.Choose"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.EduGroups);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrls.eduGroupId == null ? null : ctx.FormCtrls.eduGroupId.invalid) && ((ctx.FormCtrls.eduGroupId == null ? null : ctx.FormCtrls.eduGroupId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 31, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](48, 33, "EducationalSetup.Departments"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](53, 35, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](37, _c0))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: [".actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiZGVwYXJ0bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zIHtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 47193:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/education-year/education-year.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationYearComponent": function() { return /* binding */ EducationYearComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var app_dashboard_services_setup_educational_setup_education_year_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/education-year.service */ 80053);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/educational-stage-dropdown/educational-stage-dropdown.component */ 83722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);




























function EducationYearComponent_mat_hint_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function EducationYearComponent_mat_hint_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EducationYearComponent_mat_hint_18_span_1_Template, 4, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r0.FormCtrls.eduYear_ar_ame.errors == null ? null : ctx_r0.FormCtrls.eduYear_ar_ame.errors.required) || (ctx_r0.FormCtrls.eduYear_ar_ame.errors == null ? null : ctx_r0.FormCtrls.eduYear_ar_ame.errors.whiteSpace));
  }
}

function EducationYearComponent_mat_hint_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function EducationYearComponent_mat_hint_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EducationYearComponent_mat_hint_25_span_1_Template, 4, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.FormCtrls.eduYear_en_ame.errors == null ? null : ctx_r1.FormCtrls.eduYear_en_ame.errors.required) || (ctx_r1.FormCtrls.eduYear_en_ame.errors == null ? null : ctx_r1.FormCtrls.eduYear_en_ame.errors.whiteSpace));
  }
}

function EducationYearComponent_i_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 35);
  }
}

function EducationYearComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EducationYearComponent_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r20.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function EducationYearComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function EducationYearComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r22 + 1, " ");
  }
}

function EducationYearComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.arName"), " ");
  }
}

function EducationYearComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ele_r23.ar_name);
  }
}

function EducationYearComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.enName"), " ");
  }
}

function EducationYearComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ele_r24.en_name);
  }
}

function EducationYearComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Stage"), " ");
  }
}

function EducationYearComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ele_r25 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r12.curLang == "ar" ? ele_r25.stageArName : ele_r25.stageEnName, " ");
  }
}

function EducationYearComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 39);
  }
}

function EducationYearComponent_td_63_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EducationYearComponent_td_63_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      var ele_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r31.editEduYear(ele_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function EducationYearComponent_td_63_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EducationYearComponent_td_63_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      var ele_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r34.openDeleateDialog(ele_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function EducationYearComponent_td_63_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EducationYearComponent_td_63_ng_container_1_a_1_Template, 3, 3, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EducationYearComponent_td_63_ng_container_1_a_2_Template, 3, 3, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r28.functionName === "Delete");
  }
}

function EducationYearComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EducationYearComponent_td_63_ng_container_1_Template, 3, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r14.rowFunctions);
  }
}

function EducationYearComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 48);
  }
}

function EducationYearComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 49);
  }
}

function EducationYearComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](46);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r4.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

var EducationYearComponent = /*#__PURE__*/function () {
  function EducationYearComponent(spinner, toastr, dialog, translate, fb, route, authService, educationYearService) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EducationYearComponent);

    this.spinner = spinner;
    this.toastr = toastr;
    this.dialog = dialog;
    this.translate = translate;
    this.fb = fb;
    this.route = route;
    this.authService = authService;
    this.educationYearService = educationYearService;
    this.submitted = false;
    this.itemsCounts = 0;
    this.displayColumns = ["#", "ar_name", "en_name", "stage", "option"];
    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId"));

      if (_this.functionId) {
        _this.authService.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            _this.rowFunctions = res;
          }
        });
      }
    });
    this.EduCompId = Number(authService.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EducationYearComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.myForm = this.fb.group({
        id: [0],
        eduYear_ar_ame: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        eduYear_en_ame: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_2__.CustomeValidator.whiteSpace]],
        stageID: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
      });
      this.translate.onLangChange.subscribe(function (lang) {
        _this2.curLang = lang.lang;
      });
      this.returnEduYears(1);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.startSortingTable();
      }

      this.authService.EduCompId.subscribe(function (e) {
        _this3.EduCompId = e.EduCompId;

        _this3.returnEduYears(1);
      });
    }
  }, {
    key: "startSortingTable",
    value: function startSortingTable() {
      var _this4 = this;

      // custom sort
      this.dataSource.sortingDataAccessor = function (item, property) {
        switch (property) {
          case "stage":
            return _this4.curLang == "ar" ? item.stageArName : item.stageEnName;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort;
    }
  }, {
    key: "FormCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "editEduYear",
    value: function editEduYear(EduYearData) {
      // this.myForm.patchValue(EduYearData);
      this.FormCtrls.id.setValue(EduYearData.eduYearId);
      this.FormCtrls.eduYear_ar_ame.setValue(EduYearData.ar_name);
      this.FormCtrls.eduYear_en_ame.setValue(EduYearData.en_name);
      this.FormCtrls.stageID.setValue(EduYearData.stageId);
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } // Return All Edu Years

  }, {
    key: "returnEduYears",
    value: function returnEduYears(page) {
      var _this5 = this;

      this.spinner.show();
      this.educationYearService.getAllEducationalYears(page).subscribe(function (res) {
        if (res) {
          _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(res.eduYearList);
          _this5.itemsCounts = res.countItems;

          _this5.startSortingTable();
        }

        _this5.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this6 = this;

      this.submitted = true;
      var EduYearData = {
        id: this.FormCtrls.id.value,
        stageID: this.FormCtrls.stageID.value,
        eduYear_ar_ame: this.FormCtrls.eduYear_ar_ame.value,
        eduYear_en_ame: this.FormCtrls.eduYear_en_ame.value,
        eduCompId: this.EduCompId
      };

      if (this.myForm.valid) {
        this.spinner.show();
        this.educationYearService.addEditEducationalYear(EduYearData).subscribe(function (res) {
          if (res.returnValue == 1) {
            var returnObject = res.new_eduYear;
            var returnData = {
              eduYearId: returnObject.id,
              ar_name: returnObject.ar_name,
              en_name: returnObject.en_name,
              stageId: returnObject.stageID,
              stageArName: returnObject.stage_ar_name,
              stageEnName: returnObject.group_en_name
            };
            EduYearData.id == 0 ? _this6.addEduYear(returnData) : _this6.updateEduYear(returnData);
            _this6.dataSource.sort = _this6.sort;

            _this6.clearForm();
          } else _this6.toastr.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this6.spinner.hide();
        });
      } else this.toastr.error("General.FormNotValid");
    } // Add Edu Year

  }, {
    key: "addEduYear",
    value: function addEduYear(res) {
      this.dataSource.data.unshift(res);
      this.itemsCounts++;
      this.toastr.success("General.AddSuccessfully");
    } // Update Edu Year

  }, {
    key: "updateEduYear",
    value: function updateEduYear(res) {
      var index = this.dataSource.data.findIndex(function (e) {
        return e.eduYearId == res.eduYearId;
      });
      this.dataSource.data[index] = res;
      this.toastr.success("General.UpdateSuccessfully");
    }
  }, {
    key: "openDeleateDialog",
    value: function openDeleateDialog(EduYearData) {
      var _this7 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent, {
        data: {
          msg: this.curLang == "ar" ? EduYearData.ar_name : EduYearData.en_name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this7.deleteEduYear(EduYearData);
      });
    } // Start:Delete Edu Year

  }, {
    key: "deleteEduYear",
    value: function deleteEduYear(EduYearData) {
      var _this8 = this;

      this.educationYearService.deleteEducationalYear(EduYearData.eduYearId).subscribe(function (res) {
        if (res.returnValue == 1) {
          var index = _this8.dataSource.data.findIndex(function (e) {
            return e == EduYearData;
          });

          _this8.dataSource.data.splice(index, 1); // this.itemsCounts--;


          _this8.dataSource.sort = _this8.sort;
          if (EduYearData.eduYearId == _this8.FormCtrls.id.value) _this8.clearForm();

          _this8.toastr.success("General.DeleteSuccessfully");
        } else {
          _this8.toastr.error("General.TosterErrorMessage");
        }
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.FormCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return EducationYearComponent;
}();

EducationYearComponent.ɵfac = function EducationYearComponent_Factory(t) {
  return new (t || EducationYearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_4__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_education_year_service__WEBPACK_IMPORTED_MODULE_6__.EducationYearService));
};

EducationYearComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: EducationYearComponent,
  selectors: [["app-education-year"]],
  viewQuery: function EducationYearComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 68,
  vars: 32,
  consts: [[1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "eduYear_ar_ame"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "eduYear_en_ame"], [3, "control", "submitted"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ar_name"], ["matColumnDef", "en_name"], ["matColumnDef", "stage"], ["matColumnDef", "option"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of Educational Years", 3, "pageSizeOptions", "length", "pageSize", "page"], [1, "text-danger"], [4, "ngIf"], [1, "ft-alert-circle", "align-middle"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "5", 1, "mat-cell"]],
  template: function EducationYearComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, EducationYearComponent_mat_hint_18_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, EducationYearComponent_mat_hint_25_Template, 2, 1, "mat-hint", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "app-educational-stage-dropdown", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EducationYearComponent_Template_button_click_29_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, EducationYearComponent_i_30_Template, 1, 0, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, EducationYearComponent_button_33_Template, 3, 3, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-form-field", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function EducationYearComponent_Template_input_keyup_45_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "table", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](49, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, EducationYearComponent_th_50_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, EducationYearComponent_td_51_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](52, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, EducationYearComponent_th_53_Template, 3, 3, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, EducationYearComponent_td_54_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](55, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, EducationYearComponent_th_56_Template, 3, 3, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, EducationYearComponent_td_57_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](58, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, EducationYearComponent_th_59_Template, 3, 3, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, EducationYearComponent_td_60_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](61, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, EducationYearComponent_th_62_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, EducationYearComponent_td_63_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, EducationYearComponent_tr_64_Template, 1, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, EducationYearComponent_tr_65_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, EducationYearComponent_tr_66_Template, 3, 1, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "mat-paginator", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function EducationYearComponent_Template_mat_paginator_page_67_listener($event) {
        return ctx.returnEduYears($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 19, ctx.FormCtrls.id.value == 0 ? "EducationalSetup.AddEducationalYear" : "EducationalSetup.EditEducationalYear"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 21, "labels.arName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.eduYear_ar_ame.invalid && (ctx.FormCtrls.eduYear_ar_ame.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 23, "labels.enName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.eduYear_en_ame.invalid && (ctx.FormCtrls.eduYear_en_ame.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.FormCtrls.stageID)("submitted", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 25, (ctx.FormCtrls == null ? null : ctx.FormCtrls.id == null ? null : ctx.FormCtrls.id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.FormCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 27, "EducationalSetup.EducationalYears"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 29, "General.Search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](31, _c0))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _shared_components_dropdowns_educational_stage_dropdown_educational_stage_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.EducationalStageDropdownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: [".actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi15ZWFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImVkdWNhdGlvbi15ZWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xyXG4gIG1heC13aWR0aDogODBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 84804:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/educational-setup-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalSetupRoutingModule": function() { return /* binding */ EducationalSetupRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _academic_year_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./academic-year/academic-year/academic-year.component */ 79499);
/* harmony import */ var _academic_year_asign_class_rooms_asign_class_rooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic-year/asign-class-rooms/asign-class-rooms.component */ 3451);
/* harmony import */ var _academic_year_term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-year/term-detail/term-detail.component */ 52841);
/* harmony import */ var _academic_year_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./academic-year/terms/terms.component */ 89246);
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./department/department.component */ 72432);
/* harmony import */ var _education_year_education_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education-year/education-year.component */ 47193);
/* harmony import */ var _groups_subgroups_subgroups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/subgroups/subgroups.component */ 33521);
/* harmony import */ var _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./groups/groups/groups.component */ 46919);
/* harmony import */ var _courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses/course-index/course-index.component */ 22768);
/* harmony import */ var _courses_add_edit_course_add_edit_course_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./courses/add-edit-course/add-edit-course.component */ 73160);
/* harmony import */ var _courses_course_group_course_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses/course-group/course-group.component */ 64508);
/* harmony import */ var _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student-groups/student-group-index/student-group-index.component */ 85952);
/* harmony import */ var _student_groups_add_student_to_group_add_student_to_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student-groups/add-student-to-group/add-student-to-group.component */ 39703);
/* harmony import */ var _courses_course_strcture_strcture_index_strcture_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./courses/course-strcture/strcture-index/strcture-index.component */ 27513);
/* harmony import */ var _courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./courses/course-lecture/course-lecture.component */ 35523);
/* harmony import */ var _courses_exam_night_exam_night_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./courses/exam-night/exam-night.component */ 44711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);





















var routes = [{
  path: "educational-year",
  component: _education_year_education_year_component__WEBPACK_IMPORTED_MODULE_7__.EducationYearComponent
}, {
  path: "department",
  component: _department_department_component__WEBPACK_IMPORTED_MODULE_6__.DepartmentComponent
}, {
  path: "academic-year",
  children: [{
    path: "",
    redirectTo: "AcademicYear",
    pathMatch: "full"
  }, {
    path: "AcademicYear",
    component: _academic_year_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_2__.AcademicYearComponent
  }, {
    path: "terms/:yearId",
    component: _academic_year_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__.TermsComponent
  }, {
    path: "term-details/:yearId/:termId",
    component: _academic_year_term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_4__.TermDetailComponent
  }, {
    path: "assign-class-rooms/:yearId",
    component: _academic_year_asign_class_rooms_asign_class_rooms_component__WEBPACK_IMPORTED_MODULE_3__.AsignClassRoomsComponent
  }]
}, {
  path: "groups",
  component: _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_9__.GroupsComponent
}, {
  path: "subgroups",
  component: _groups_subgroups_subgroups_component__WEBPACK_IMPORTED_MODULE_8__.SubgroupsComponent
}, {
  path: "courses",
  children: [{
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  }, {
    path: "index",
    component: _courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_10__.CourseIndexComponent
  }, {
    path: "edit-course/:courseId",
    component: _courses_add_edit_course_add_edit_course_component__WEBPACK_IMPORTED_MODULE_11__.AddEditCourseComponent
  }, {
    path: "add-course",
    component: _courses_add_edit_course_add_edit_course_component__WEBPACK_IMPORTED_MODULE_11__.AddEditCourseComponent
  }, {
    path: "course-lectures/:courseId",
    component: _courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_16__.CourseLectureComponent
  }, {
    path: "course-group",
    component: _courses_course_group_course_group_component__WEBPACK_IMPORTED_MODULE_12__.CourseGroupComponent
  }, {
    path: "course-structure/:subjectId",
    component: _courses_course_strcture_strcture_index_strcture_index_component__WEBPACK_IMPORTED_MODULE_15__.StrctureIndexComponent
  }, {
    path: "exam-night",
    component: _courses_exam_night_exam_night_component__WEBPACK_IMPORTED_MODULE_17__.ExamNightComponent
  }]
}, {
  path: "student-group",
  component: _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_13__.StudentGroupIndexComponent
}, {
  path: "add-student-to-group",
  component: _student_groups_add_student_to_group_add_student_to_group_component__WEBPACK_IMPORTED_MODULE_14__.AddStudentToGroupComponent
}];
var EducationalSetupRoutingModule = /*#__PURE__*/(0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EducationalSetupRoutingModule() {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EducationalSetupRoutingModule);
});

EducationalSetupRoutingModule.ɵfac = function EducationalSetupRoutingModule_Factory(t) {
  return new (t || EducationalSetupRoutingModule)();
};

EducationalSetupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: EducationalSetupRoutingModule
});
EducationalSetupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](EducationalSetupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

/***/ }),

/***/ 43961:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/educational-setup.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalSetupModule": function() { return /* binding */ EducationalSetupModule; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/material/material.module */ 793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _educational_setup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./educational-setup-routing.module */ 84804);
/* harmony import */ var _education_year_education_year_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education-year/education-year.component */ 47193);
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./department/department.component */ 72432);
/* harmony import */ var _academic_year_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./academic-year/academic-year/academic-year.component */ 79499);
/* harmony import */ var _academic_year_term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./academic-year/term-detail/term-detail.component */ 52841);
/* harmony import */ var _academic_year_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./academic-year/terms/terms.component */ 89246);
/* harmony import */ var _academic_year_asign_class_rooms_asign_class_rooms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./academic-year/asign-class-rooms/asign-class-rooms.component */ 3451);
/* harmony import */ var _groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./groups/groups/groups.component */ 46919);
/* harmony import */ var _groups_subgroups_subgroups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./groups/subgroups/subgroups.component */ 33521);
/* harmony import */ var _courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./courses/course-index/course-index.component */ 22768);
/* harmony import */ var _courses_course_group_course_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./courses/course-group/course-group.component */ 64508);
/* harmony import */ var _courses_add_edit_course_add_edit_course_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./courses/add-edit-course/add-edit-course.component */ 73160);
/* harmony import */ var _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student-groups/student-group-index/student-group-index.component */ 85952);
/* harmony import */ var _student_groups_add_student_to_group_add_student_to_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student-groups/add-student-to-group/add-student-to-group.component */ 39703);
/* harmony import */ var _courses_course_strcture_add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./courses/course-strcture/add-unit/add-unit.component */ 36459);
/* harmony import */ var _courses_course_strcture_lessons_add_lesson_add_lesson_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./courses/course-strcture/lessons/add-lesson/add-lesson.component */ 89149);
/* harmony import */ var _courses_course_strcture_lessons_lessons_index_lessons_index_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./courses/course-strcture/lessons/lessons-index/lessons-index.component */ 23845);
/* harmony import */ var _courses_course_strcture_strcture_index_strcture_index_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./courses/course-strcture/strcture-index/strcture-index.component */ 27513);
/* harmony import */ var _courses_course_strcture_topics_topics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./courses/course-strcture/topics/topics.component */ 41673);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/shared/validators/date.adapter */ 89778);
/* harmony import */ var _courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./courses/course-lecture/course-lecture.component */ 35523);
/* harmony import */ var _courses_exam_night_exam_night_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./courses/exam-night/exam-night.component */ 44711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);































var EducationalSetupModule = /*#__PURE__*/(0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EducationalSetupModule() {
  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EducationalSetupModule);
});

EducationalSetupModule.ɵfac = function EducationalSetupModule_Factory(t) {
  return new (t || EducationalSetupModule)();
};

EducationalSetupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
  type: EducationalSetupModule
});
EducationalSetupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.DateAdapter,
    useClass: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_23__.AppDateAdapter
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MAT_DATE_FORMATS,
    useValue: app_shared_validators_date_adapter__WEBPACK_IMPORTED_MODULE_23__.APP_DATE_FORMATS
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _educational_setup_routing_module__WEBPACK_IMPORTED_MODULE_4__.EducationalSetupRoutingModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](EducationalSetupModule, {
    declarations: [_groups_groups_groups_component__WEBPACK_IMPORTED_MODULE_11__.GroupsComponent, _groups_subgroups_subgroups_component__WEBPACK_IMPORTED_MODULE_12__.SubgroupsComponent, _courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_13__.CourseIndexComponent, _courses_course_group_course_group_component__WEBPACK_IMPORTED_MODULE_14__.CourseGroupComponent, _courses_add_edit_course_add_edit_course_component__WEBPACK_IMPORTED_MODULE_15__.AddEditCourseComponent, _education_year_education_year_component__WEBPACK_IMPORTED_MODULE_5__.EducationYearComponent, _department_department_component__WEBPACK_IMPORTED_MODULE_6__.DepartmentComponent, _academic_year_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_7__.AcademicYearComponent, _academic_year_term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_8__.TermDetailComponent, _academic_year_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__.TermsComponent, _academic_year_asign_class_rooms_asign_class_rooms_component__WEBPACK_IMPORTED_MODULE_10__.AsignClassRoomsComponent, _student_groups_student_group_index_student_group_index_component__WEBPACK_IMPORTED_MODULE_16__.StudentGroupIndexComponent, _student_groups_add_student_to_group_add_student_to_group_component__WEBPACK_IMPORTED_MODULE_17__.AddStudentToGroupComponent, _courses_course_strcture_strcture_index_strcture_index_component__WEBPACK_IMPORTED_MODULE_21__.StrctureIndexComponent, _courses_course_strcture_lessons_lessons_index_lessons_index_component__WEBPACK_IMPORTED_MODULE_20__.LessonsIndexComponent, _courses_course_strcture_lessons_add_lesson_add_lesson_component__WEBPACK_IMPORTED_MODULE_19__.AddLessonComponent, _courses_course_strcture_add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_18__.AddUnitComponent, _courses_course_strcture_topics_topics_component__WEBPACK_IMPORTED_MODULE_22__.TopicsComponent, _courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_24__.CourseLectureComponent, _courses_exam_night_exam_night_component__WEBPACK_IMPORTED_MODULE_25__.ExamNightComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule, app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _educational_setup_routing_module__WEBPACK_IMPORTED_MODULE_4__.EducationalSetupRoutingModule],
    exports: [_courses_course_strcture_strcture_index_strcture_index_component__WEBPACK_IMPORTED_MODULE_21__.StrctureIndexComponent, _courses_course_strcture_lessons_lessons_index_lessons_index_component__WEBPACK_IMPORTED_MODULE_20__.LessonsIndexComponent, _courses_course_strcture_lessons_add_lesson_add_lesson_component__WEBPACK_IMPORTED_MODULE_19__.AddLessonComponent, _courses_course_strcture_add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_18__.AddUnitComponent, _courses_course_strcture_topics_topics_component__WEBPACK_IMPORTED_MODULE_22__.TopicsComponent]
  });
})();

/***/ }),

/***/ 46919:
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/groups/groups/groups.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsComponent": function() { return /* binding */ GroupsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_educational_setup_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/group.service */ 92097);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);



























function GroupsComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.addGroup"), " ");
  }
}

function GroupsComponent_mat_card_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.updateGroup"), " ");
  }
}

function GroupsComponent_mat_hint_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function GroupsComponent_mat_hint_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GroupsComponent_mat_hint_17_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r2.formCtrls.Ar_Name.errors == null ? null : ctx_r2.formCtrls.Ar_Name.errors.required) || (ctx_r2.formCtrls.Ar_Name.errors == null ? null : ctx_r2.formCtrls.Ar_Name.errors.whiteSpace));
  }
}

function GroupsComponent_mat_hint_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function GroupsComponent_mat_hint_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GroupsComponent_mat_hint_24_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.formCtrls.En_Name.errors == null ? null : ctx_r3.formCtrls.En_Name.errors.required) || (ctx_r3.formCtrls.En_Name.errors == null ? null : ctx_r3.formCtrls.En_Name.errors.whiteSpace));
  }
}

function GroupsComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GroupsComponent_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r21.addGroup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function GroupsComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GroupsComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r23.myForm.reset();
      return ctx_r23.submitted = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Cancel"), " ");
  }
}

function GroupsComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GroupsComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r25.updateGroup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

function GroupsComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function GroupsComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r27 + 1, " ");
  }
}

function GroupsComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.arName"), " ");
  }
}

function GroupsComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", group_r28.Ar_Name, " ");
  }
}

function GroupsComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.enName"), " ");
  }
}

function GroupsComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", group_r29.En_Name, " ");
  }
}

function GroupsComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 40);
  }
}

function GroupsComponent_td_54_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GroupsComponent_td_54_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);
      var group_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r35.toEditGroup(group_r30);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function GroupsComponent_td_54_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GroupsComponent_td_54_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      var group_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r38.openDeleteDialog(group_r30);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function GroupsComponent_td_54_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GroupsComponent_td_54_ng_container_1_a_1_Template, 3, 3, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, GroupsComponent_td_54_ng_container_1_a_2_Template, 3, 3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r32.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r32.functionName === "Delete");
  }
}

function GroupsComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GroupsComponent_td_54_ng_container_1_Template, 3, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r15.rowFunctions);
  }
}

function GroupsComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 49);
  }
}

function GroupsComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 50);
  }
}

function GroupsComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](40);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r7.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

var GroupsComponent = /*#__PURE__*/function () {
  function GroupsComponent(fb, GroupServ, translate, spinner, ToastrMsg, dialog, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GroupsComponent);

    this.fb = fb;
    this.GroupServ = GroupServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.dialog = dialog;
    this.route = route;
    this.authserv = authserv;
    this.Groups = [{
      Id: 1,
      Ar_Name: "لل",
      En_Name: "ff"
    }, {
      Id: 2,
      Ar_Name: "ت",
      En_Name: "kk"
    }];
    this.submitted = false;
    this.curPage = 1; // rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "Edit"
    }, {
      functionName: "Delete"
    }]; // table

    this.displayedColumns = ["#", "Ar_Name", "En_Name", "actions"]; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            // console.log("rowFunctions", res);
            _this.rowFunctions = res;
          }
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GroupsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllGroups(1);
      this.myForm = this.fb.group({
        Id: [null],
        Ar_Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        En_Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]]
      }); // test data

      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.Groups);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    } // get all groups

  }, {
    key: "getAllGroups",
    value: function getAllGroups(page) {
      var _this2 = this;

      this.curPage = page;
      this.spinner.show();
      this.GroupServ.getAllGroups(page).subscribe(function (res) {
        if (res) {
          _this2.Groups = res.GroupList;
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(_this2.Groups);
          _this2.itemsCounts = res.countItems;
          console.log("Groups: >> ", res);
        }

        _this2.spinner.hide();
      });
    } // add group

  }, {
    key: "addGroup",
    value: function addGroup() {
      var _this3 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        var group = this.myForm.value;
        delete group.Id;
        console.log("Group", group);
        this.spinner.show();
        this.GroupServ.addGroup(group).subscribe(function (res) {
          if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
            _this3.getAllGroups(_this3.curPage);

            _this3.ToastrMsg.success("General.AddSuccessfully");

            _this3.myForm.reset();

            _this3.submitted = false;
          } else {
            _this3.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
          }

          _this3.spinner.hide();
        });
      }
    } // get form values to update

  }, {
    key: "toEditGroup",
    value: function toEditGroup(group) {
      this.myForm.patchValue(group);
    } // update group

  }, {
    key: "updateGroup",
    value: function updateGroup() {
      var _this4 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        var id = this.formCtrls.Id.value;
        var group = this.myForm.value;
        delete group.Id;
        console.log("Group", group);
        this.spinner.show();
        this.GroupServ.updateGroup(id, group).subscribe(function (res) {
          if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
            _this4.getAllGroups(_this4.curPage);

            _this4.ToastrMsg.success("General.UpdateSuccessfully");

            _this4.myForm.reset();

            _this4.submitted = false;
          } else {
            _this4.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
          }

          _this4.spinner.hide();
        });
      }
    } // delete dialog

  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog(group) {
      var _this5 = this;

      var groupName = this.currentLang == "ar" ? group.Ar_Name : group.En_Name;
      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: groupName
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteGroup(group.Id);
      });
    } // delete group

  }, {
    key: "deleteGroup",
    value: function deleteGroup(id) {
      var _this6 = this;

      var index = this.Groups.indexOf(id);
      this.spinner.show();
      this.GroupServ.deleteGroup(id).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          _this6.Groups.splice(index, 1);

          _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(_this6.Groups);

          _this6.ToastrMsg.info("General.DeleteSuccessfully");
        } else {
          _this6.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
        }

        _this6.spinner.hide();
      });
    }
  }]);

  return GroupsComponent;
}();

GroupsComponent.ɵfac = function GroupsComponent_Factory(t) {
  return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_group_service__WEBPACK_IMPORTED_MODULE_4__.GroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
};

GroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: GroupsComponent,
  selectors: [["app-groups"]],
  viewQuery: function GroupsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 59,
  vars: 23,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "Ar_Name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "En_Name"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-info mb-1", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-info bg-light-info mb-1", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Example", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "class", "firstCol", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "firstCol", 4, "matCellDef"], ["matColumnDef", "Ar_Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "En_Name"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of groups", 3, "pageSizeOptions", "length", "page"], [1, "text-danger"], [1, "ft-alert-circle", "align-middle"], ["mat-raised-button", "", 1, "btn", "btn-info", "mb-1", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", "mb-1", 3, "click"], ["mat-header-cell", "", 1, "firstCol"], ["mat-cell", "", 1, "firstCol"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "actions"], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function GroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, GroupsComponent_mat_card_title_4_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, GroupsComponent_mat_card_title_5_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, GroupsComponent_mat_hint_17_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, GroupsComponent_mat_hint_24_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-card-actions", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, GroupsComponent_button_26_Template, 3, 3, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, GroupsComponent_button_27_Template, 3, 3, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, GroupsComponent_button_28_Template, 3, 3, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-form-field", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function GroupsComponent_Template_input_keyup_39_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "table", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](43, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, GroupsComponent_th_44_Template, 2, 0, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, GroupsComponent_td_45_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](46, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, GroupsComponent_th_47_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, GroupsComponent_td_48_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](49, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, GroupsComponent_th_50_Template, 3, 3, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, GroupsComponent_td_51_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](52, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, GroupsComponent_th_53_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, GroupsComponent_td_54_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, GroupsComponent_tr_55_Template, 1, 0, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, GroupsComponent_tr_56_Template, 1, 0, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, GroupsComponent_tr_57_Template, 3, 1, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-paginator", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function GroupsComponent_Template_mat_paginator_page_58_listener($event) {
        return ctx.getAllGroups($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.formCtrls == null ? null : ctx.formCtrls.Id.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls == null ? null : ctx.formCtrls.Id.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 16, "labels.arName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls.Ar_Name.invalid && (ctx.formCtrls.Ar_Name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 18, "labels.enName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls.En_Name.invalid && (ctx.formCtrls.En_Name.touched || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.formCtrls == null ? null : ctx.formCtrls.Id.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls == null ? null : ctx.formCtrls.Id.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls == null ? null : ctx.formCtrls.Id.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 20, "EducationalSetup.groups"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c0))("length", ctx.itemsCounts);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.firstCol[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  padding: 0 10px !important;\n  text-align: start;\n}\n\n.actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3Vwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUVFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGIiwiZmlsZSI6Imdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maXJzdENvbCB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 33521:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/groups/subgroups/subgroups.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubgroupsComponent": function() { return /* binding */ SubgroupsComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_educational_setup_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/group.service */ 92097);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);





























function SubgroupsComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.addSubgroup"), " ");
  }
}

function SubgroupsComponent_mat_card_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.updateSubgroup"), " ");
  }
}

function SubgroupsComponent_mat_hint_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function SubgroupsComponent_mat_hint_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubgroupsComponent_mat_hint_17_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r2.formCtrls == null ? null : ctx_r2.formCtrls.Ar_Name.errors == null ? null : ctx_r2.formCtrls.Ar_Name.errors.required) || (ctx_r2.formCtrls == null ? null : ctx_r2.formCtrls.Ar_Name.errors == null ? null : ctx_r2.formCtrls.Ar_Name.errors.whiteSpace));
  }
}

function SubgroupsComponent_mat_hint_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function SubgroupsComponent_mat_hint_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubgroupsComponent_mat_hint_24_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.formCtrls == null ? null : ctx_r3.formCtrls.En_Name.errors == null ? null : ctx_r3.formCtrls.En_Name.errors.required) || (ctx_r3.formCtrls == null ? null : ctx_r3.formCtrls.En_Name.errors == null ? null : ctx_r3.formCtrls.En_Name.errors.whiteSpace));
  }
}

function SubgroupsComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r25 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", group_r25.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.currentLang == "ar" ? group_r25.Ar_Name : group_r25.En_Name, " ");
  }
}

function SubgroupsComponent_mat_hint_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function SubgroupsComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubgroupsComponent_mat_hint_35_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formCtrls == null ? null : ctx_r5.formCtrls.GroupId.errors == null ? null : ctx_r5.formCtrls.GroupId.errors.required);
  }
}

function SubgroupsComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubgroupsComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r27.addSubgroup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Add"), " ");
  }
}

function SubgroupsComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubgroupsComponent_button_38_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r29.myForm.reset();
      return ctx_r29.submitted = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Cancel"), " ");
  }
}

function SubgroupsComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubgroupsComponent_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r31.updateSubgroup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "General.Update"), " ");
  }
}

function SubgroupsComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function SubgroupsComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r33 + 1, " ");
  }
}

function SubgroupsComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.arName"), " ");
  }
}

function SubgroupsComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subgroup_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subgroup_r34.Ar_Name, " ");
  }
}

function SubgroupsComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "labels.enName"), " ");
  }
}

function SubgroupsComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subgroup_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", subgroup_r35.En_Name, " ");
  }
}

function SubgroupsComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EducationalSetup.group"), " ");
  }
}

function SubgroupsComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var subgroup_r36 = ctx.$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r17.currentLang == "ar" ? subgroup_r36 == null ? null : subgroup_r36.Group.Ar_Name : subgroup_r36 == null ? null : subgroup_r36.Group.En_Name, " ");
  }
}

function SubgroupsComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 44);
  }
}

function SubgroupsComponent_td_68_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubgroupsComponent_td_68_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      var subgroup_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r42.toEditSubgroup(subgroup_r37);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "General.Edit"));
  }
}

function SubgroupsComponent_td_68_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubgroupsComponent_td_68_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      var subgroup_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r45.openDeleteDialog(subgroup_r37);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function SubgroupsComponent_td_68_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubgroupsComponent_td_68_ng_container_1_a_1_Template, 3, 3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SubgroupsComponent_td_68_ng_container_1_a_2_Template, 3, 3, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r39.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fun_r39.functionName === "Delete");
  }
}

function SubgroupsComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubgroupsComponent_td_68_ng_container_1_Template, 3, 2, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r19.rowFunctions);
  }
}

function SubgroupsComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 53);
  }
}

function SubgroupsComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 54);
  }
}

function SubgroupsComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](51);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r9.value, "\" ");
  }
}

var _c0 = function _c0() {
  return [10];
};

var SubgroupsComponent = /*#__PURE__*/function () {
  function SubgroupsComponent(fb, GroupServ, translate, spinner, ToastrMsg, dialog, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubgroupsComponent);

    this.fb = fb;
    this.GroupServ = GroupServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.dialog = dialog;
    this.route = route;
    this.authserv = authserv;
    this.Subgroups = [{
      Id: 1,
      Ar_Name: "لل",
      En_Name: "ff",
      Group: {
        Id: 1,
        Ar_Name: "لل",
        En_Name: "df"
      }
    }, {
      Id: 2,
      Ar_Name: "لل",
      En_Name: "ee",
      Group: {
        Id: 2,
        Ar_Name: "لل",
        En_Name: "aa"
      }
    }];
    this.submitted = false;
    this.curPage = 1;
    this.groups = [{
      Id: 1,
      Ar_Name: "لل",
      En_Name: "ff"
    }, {
      Id: 2,
      Ar_Name: "لل",
      En_Name: "kk"
    }]; // rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "Edit"
    }, {
      functionName: "Delete"
    }]; // table

    this.displayedColumns = ["#", "Ar_Name", "En_Name", "Group", "actions"]; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            // console.log("rowFunctions", res);
            _this.rowFunctions = res;
          }
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubgroupsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllSubgroups(1);
      this.myForm = this.fb.group({
        Id: [null],
        Ar_Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        En_Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        GroupId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      }); // get groups

      this.getAllGroups(); // test data

      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.Subgroups);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.dataSource.paginator = this.paginator; // custom sort

      this.dataSource.sortingDataAccessor = function (item, property) {
        var _a, _b;

        switch (property) {
          case "Group":
            return _this2.currentLang == "ar" ? (_a = item.Group) === null || _a === void 0 ? void 0 : _a.Ar_Name : (_b = item.Group) === null || _b === void 0 ? void 0 : _b.En_Name;

          default:
            return item[property];
        }
      };

      this.dataSource.sort = this.sort; // custom filter

      this.dataSource.filterPredicate = function (data, filter) {
        return _this2.currentLang == "ar" ? data.Group.Ar_Name.toLocaleLowerCase().indexOf(filter) != -1 : data.Group.En_Name.toLocaleLowerCase().indexOf(filter) != -1;
      };
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    } // get groups >> dropDown

  }, {
    key: "getAllGroups",
    value: function getAllGroups() {
      var _this3 = this;

      this.spinner.show();
      this.GroupServ.getAllGroupsDropDown().subscribe(function (res) {
        if (res) _this3.groups = res;

        _this3.spinner.hide();
      });
    } // get all subgroups

  }, {
    key: "getAllSubgroups",
    value: function getAllSubgroups(page) {
      var _this4 = this;

      this.curPage = page;
      this.spinner.show();
      this.GroupServ.getAllSubgroups(page).subscribe(function (res) {
        if (res) {
          _this4.Subgroups = res.SubgroupList;
          _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(_this4.Subgroups);
          _this4.itemsCounts = res.countItems;
          console.log("Subgroups: >> ", res);
        }

        _this4.spinner.hide();
      });
    } // add subgroup

  }, {
    key: "addSubgroup",
    value: function addSubgroup() {
      var _this5 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        var subgroup = this.myForm.value;
        delete subgroup.Id;
        console.log("Subgroup", subgroup);
        this.spinner.show();
        this.GroupServ.addSubgroup(subgroup).subscribe(function (res) {
          if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
            _this5.getAllSubgroups(_this5.curPage);

            _this5.ToastrMsg.success("General.AddSuccessfully");

            _this5.myForm.reset();

            _this5.submitted = false;
          } else {
            _this5.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
          }

          _this5.spinner.hide();
        });
      }
    } // get form values to update

  }, {
    key: "toEditSubgroup",
    value: function toEditSubgroup(subgroup) {
      var _a;

      this.myForm.patchValue(subgroup);
      (_a = this.formCtrls.GroupId) === null || _a === void 0 ? void 0 : _a.setValue(subgroup.Group.Id);
    } // update subgroup

  }, {
    key: "updateSubgroup",
    value: function updateSubgroup() {
      var _this6 = this;

      this.submitted = true;

      if (this.myForm.valid) {
        var id = this.formCtrls.Id.value;
        var subgroup = this.myForm.value;
        delete subgroup.Id;
        console.log("Subgroup", subgroup);
        this.spinner.show();
        this.GroupServ.updateSubgroup(id, subgroup).subscribe(function (res) {
          if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
            _this6.getAllSubgroups(_this6.curPage);

            _this6.ToastrMsg.success("General.UpdateSuccessfully");

            _this6.myForm.reset();

            _this6.submitted = false;
          } else {
            _this6.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
          }

          _this6.spinner.hide();
        });
      }
    } // delete dialog

  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog(subgroup) {
      var _this7 = this;

      var subgroupName = this.currentLang == "ar" ? subgroup.Ar_Name : subgroup.En_Name;
      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: subgroupName
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this7.deleteSubgroup(subgroup.Id);
      });
    } // delete subgroup

  }, {
    key: "deleteSubgroup",
    value: function deleteSubgroup(id) {
      var _this8 = this;

      var index = this.Subgroups.indexOf(id);
      this.spinner.show();
      this.GroupServ.deleteSubgroup(id).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          _this8.Subgroups.splice(index, 1);

          _this8.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(_this8.Subgroups);

          _this8.ToastrMsg.info("General.DeleteSuccessfully");
        } else {
          _this8.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
        }

        _this8.spinner.hide();
      });
    }
  }]);

  return SubgroupsComponent;
}();

SubgroupsComponent.ɵfac = function SubgroupsComponent_Factory(t) {
  return new (t || SubgroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_group_service__WEBPACK_IMPORTED_MODULE_4__.GroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
};

SubgroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SubgroupsComponent,
  selectors: [["app-subgroups"]],
  viewQuery: function SubgroupsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 73,
  vars: 31,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "Ar_Name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "En_Name"], ["formControlName", "GroupId"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "class", "btn btn-info mb-1", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-info bg-light-info mb-1", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Example", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "class", "firstCol", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "firstCol", 4, "matCellDef"], ["matColumnDef", "Ar_Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "En_Name"], ["matColumnDef", "Group"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of subgroups", 3, "pageSizeOptions", "length", "page"], [1, "text-danger"], [1, "ft-alert-circle", "align-middle"], [3, "value"], ["mat-raised-button", "", 1, "btn", "btn-info", "mb-1", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", "mb-1", 3, "click"], ["mat-header-cell", "", 1, "firstCol"], ["mat-cell", "", 1, "firstCol"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "actions"], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "success p-0", 3, "matTooltip", "click", 4, "ngIf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "success", "p-0", 3, "matTooltip", "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
  template: function SubgroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SubgroupsComponent_mat_card_title_4_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SubgroupsComponent_mat_card_title_5_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SubgroupsComponent_mat_hint_17_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, SubgroupsComponent_mat_hint_24_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, SubgroupsComponent_mat_option_34_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, SubgroupsComponent_mat_hint_35_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-card-actions", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, SubgroupsComponent_button_37_Template, 3, 3, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, SubgroupsComponent_button_38_Template, 3, 3, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, SubgroupsComponent_button_39_Template, 3, 3, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-form-field", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function SubgroupsComponent_Template_input_keyup_50_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "table", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](54, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, SubgroupsComponent_th_55_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, SubgroupsComponent_td_56_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](57, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, SubgroupsComponent_th_58_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, SubgroupsComponent_td_59_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](60, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, SubgroupsComponent_th_61_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, SubgroupsComponent_td_62_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](63, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, SubgroupsComponent_th_64_Template, 3, 3, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, SubgroupsComponent_td_65_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](66, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, SubgroupsComponent_th_67_Template, 1, 0, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, SubgroupsComponent_td_68_Template, 2, 1, "td", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, SubgroupsComponent_tr_69_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, SubgroupsComponent_tr_70_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, SubgroupsComponent_tr_71_Template, 3, 1, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "mat-paginator", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function SubgroupsComponent_Template_mat_paginator_page_72_listener($event) {
        return ctx.getAllSubgroups($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.formCtrls == null ? null : ctx.formCtrls.Id.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls == null ? null : ctx.formCtrls.Id.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 20, "labels.arName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.Ar_Name.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.Ar_Name.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 22, "labels.enName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.En_Name.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.En_Name.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 24, "EducationalSetup.group"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 26, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.groups);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.GroupId.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.GroupId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.formCtrls == null ? null : ctx.formCtrls.Id.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls == null ? null : ctx.formCtrls.Id.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formCtrls == null ? null : ctx.formCtrls.Id.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 28, "EducationalSetup.subgroups"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](30, _c0))("length", ctx.itemsCounts);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.firstCol[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  padding: 0 10px !important;\n  text-align: start;\n}\n\n.actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ymdyb3Vwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUVFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGIiwiZmlsZSI6InN1Ymdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maXJzdENvbCB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 39703:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/student-groups/add-student-to-group/add-student-to-group.component.ts ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentToGroupComponent": function() { return /* binding */ AddStudentToGroupComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var app_dashboard_services_setup_educational_setup_student_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/student-group.service */ 25537);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

























function AddStudentToGroupComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddStudentToGroupComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r14 + 1, " ");
  }
}

function AddStudentToGroupComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function AddStudentToGroupComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var student_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](student_r15.Name);
  }
}

function AddStudentToGroupComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.Email"), " ");
  }
}

function AddStudentToGroupComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var student_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](student_r16.Email);
  }
}

function AddStudentToGroupComponent_th_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "labels.MobileNo"), " ");
  }
}

function AddStudentToGroupComponent_td_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var student_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](student_r17.Mobile);
  }
}

function AddStudentToGroupComponent_th_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 44);
  }
}

function AddStudentToGroupComponent_td_78_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudentToGroupComponent_td_78_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      var student_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r22.openDeleteDialog(student_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, "General.Delete"));
  }
}

function AddStudentToGroupComponent_td_78_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddStudentToGroupComponent_td_78_ng_container_1_a_1_Template, 3, 3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fun_r20.functionName === "Delete");
  }
}

function AddStudentToGroupComponent_td_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddStudentToGroupComponent_td_78_ng_container_1_Template, 2, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.rowFunctions);
  }
}

function AddStudentToGroupComponent_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 50);
  }
}

function AddStudentToGroupComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 51);
  }
}

function AddStudentToGroupComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](61);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r0.value, "\" ");
  }
}

var _c0 = function _c0(a0) {
  return {
    functionId: a0
  };
};

var _c1 = function _c1() {
  return [10];
};

var AddStudentToGroupComponent = /*#__PURE__*/function () {
  function AddStudentToGroupComponent(route, authserv, router, fb, studentGroupServ, toastrMsg, dialog, spinner) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddStudentToGroupComponent);

    this.route = route;
    this.authserv = authserv;
    this.router = router;
    this.fb = fb;
    this.studentGroupServ = studentGroupServ;
    this.toastrMsg = toastrMsg;
    this.dialog = dialog;
    this.spinner = spinner;
    this.students = [];
    this.groupId = 0;
    this.itemsCounts = 0;
    this.curPage = 1;
    this.ExcelFile = null; // rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "Delete"
    }];
    this.displayedColumns = ["#", "Name", "Email", "Mobile", "actions"];
    this.route.queryParamMap.subscribe(function (params) {
      _this.groupId = Number(params.get("groupId"));
      _this.functionId = Number(params.get("functionId")); //  console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res) {
            _this.rowFunctions = res; //  console.log(`RowFunctions for"${this.functionId}": `, res);
          }
        });
      }
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddStudentToGroupComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.myForm = this.fb.group({
        Email: [""],
        Mobile: [""]
      });
      this.getAllStudentsInGroup(1);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllStudentsInGroup(1);
      }); // this.authserv.branchId.subscribe((e) => {
      //   this.getAllStudentsInGroup(1);
      // });
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getAllStudentsInGroup",
    value: function getAllStudentsInGroup(page) {
      var _this3 = this;

      var _a, _b, _c, _d, _e, _f;

      this.curPage = page;
      var searchData = {
        Mobile: (_c = (_b = (_a = this.formCtrls) === null || _a === void 0 ? void 0 : _a.Mobile) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.trim(),
        Email: (_f = (_e = (_d = this.formCtrls) === null || _d === void 0 ? void 0 : _d.Email) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.trim(),
        Page: page,
        GroupId: this.groupId,
        EduCompId: this.EduCompId
      };
      this.spinner.show();
      this.studentGroupServ.getAllStudentsInGroup(searchData).subscribe(function (res) {
        if (res) {
          _this3.students = res.StudentList;
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(_this3.students);
          _this3.itemsCounts = res.countItems; // console.log("students", this.students);
        }

        _this3.spinner.hide();
      });
    }
  }, {
    key: "addStudent",
    value: function addStudent() {
      var _this4 = this;

      var _a, _b, _c, _d;

      var searchData = {
        Mobile: (_b = (_a = this.formCtrls) === null || _a === void 0 ? void 0 : _a.Mobile) === null || _b === void 0 ? void 0 : _b.value,
        Email: (_d = (_c = this.formCtrls) === null || _c === void 0 ? void 0 : _c.Email) === null || _d === void 0 ? void 0 : _d.value,
        Page: 1,
        GroupId: this.groupId,
        EduCompId: this.EduCompId
      };
      this.spinner.show();
      console.log("search data", searchData);
      this.studentGroupServ.checkStudent(searchData).subscribe(function (student) {
        var _a; // console.log("check student", student);


        if (student.InGroup) {
          _this4.toastrMsg.info("EducationalSetup.studentExistInGroup");

          return;
        } else {
          _this4.spinner.show(); // console.log("student", student);


          _this4.studentGroupServ.addStudent((_a = student.student) === null || _a === void 0 ? void 0 : _a.userId, _this4.groupId).subscribe(function (res) {
            // console.log('addStudent', res);
            // if (
            //   res?.returnString ==
            //   "Student already exists in a group with the same teacher and subject"
            // )
            //   this.toastrMsg.info("EducationalSetup.studentExistInGroup");
            if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
              _this4.getAllStudentsInGroup(_this4.curPage);

              _this4.toastrMsg.success("General.AddSuccessfully");
            } else _this4.toastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

            _this4.spinner.hide();
          });
        }
      });
    }
  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog(student) {
      var _this5 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: student.Name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this5.deleteStudent(student);
      });
    }
  }, {
    key: "deleteStudent",
    value: function deleteStudent(student) {
      var _this6 = this;

      this.spinner.show();
      this.studentGroupServ.deleteStudent(student.userId, this.groupId).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          var i = _this6.dataSource.data.findIndex(function (e) {
            return e = student;
          });

          _this6.dataSource.data.splice(i, 1); // this.dataSource.paginator = this.paginator;


          _this6.toastrMsg.success("General.DeleteSuccessfully");
        } else _this6.toastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

        _this6.spinner.hide();
      });
    }
  }, {
    key: "uploadStudentsByExcel",
    value: function uploadStudentsByExcel() {
      var _this7 = this;

      if (this.ExcelFile == null) this.toastrMsg.warning("UploadStudentGrades.fileErr");else {
        this.spinner.show();
        this.studentGroupServ.uploadStudentsByExcel({
          ExcelFile: this.ExcelFile,
          groupId: this.groupId
        }).subscribe(function (res) {
          if (res.returnValue == 1) _this7.toastrMsg.success("General.UploadSuccessfully");else _this7.toastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

          _this7.spinner.hide();
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this8 = this;

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
          var data = {
            FileAsBase64: fileReder.replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", ""),
            name: fileName,
            size: fileSize,
            type: fileType,
            LastModified: LastModified,
            LastModifiedDate: LastModifiedDate
          };
          _this8.ExcelFile = data;
        };
      }
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.myForm.reset();
      this.getAllStudentsInGroup(1);
    }
  }]);

  return AddStudentToGroupComponent;
}();

AddStudentToGroupComponent.ɵfac = function AddStudentToGroupComponent_Factory(t) {
  return new (t || AddStudentToGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_student_group_service__WEBPACK_IMPORTED_MODULE_4__.StudentGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_5__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService));
};

AddStudentToGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddStudentToGroupComponent,
  selectors: [["app-add-student-to-group"]],
  viewQuery: function AddStudentToGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 83,
  vars: 41,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "../student-group", 1, "btn", "btn-info", "bg-light-info", "float-right", 3, "queryParams"], ["mat-raised-button", "", 1, "btn", "btn-info", "float-right", 3, "click"], [1, "fa", "fa-search"], ["mat-raised-button", "", 1, "btn", "btn-warning", "float-right", 3, "click"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "formControlName", "Email"], ["matInput", "", "formControlName", "Mobile"], ["type", "file", "name", "uploadedFile", 1, "file-upload", 3, "change"], [1, "col-md-6", "col-12", "p-0"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], [1, "fa", "fa-plus"], [1, "fa", "fa-plus-square"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-upload"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "class", "firstCol", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "firstCol", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Mobile"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of students", 3, "pageSizeOptions", "length", "pageSize", "page"], ["mat-header-cell", "", 1, "firstCol"], ["mat-cell", "", 1, "firstCol"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "actions"], ["mat-cell", "", 1, "text-center", "px-3", "actions"], [4, "ngFor", "ngForOf"], ["class", "danger p-0", 3, "matTooltip", "click", 4, "ngIf"], [1, "danger", "p-0", 3, "matTooltip", "click"], [1, "ft-trash", "font-medium-3", "mr-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "5", 1, "mat-cell"]],
  template: function AddStudentToGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudentToGroupComponent_Template_a_click_10_listener() {
        return ctx.getAllStudentsInGroup(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudentToGroupComponent_Template_button_click_14_listener() {
        return ctx.clearSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-card-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddStudentToGroupComponent_Template_input_change_38_listener($event) {
        return ctx.onChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-card-actions", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudentToGroupComponent_Template_a_click_41_listener() {
        return ctx.addStudent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudentToGroupComponent_Template_a_click_46_listener() {
        return ctx.uploadStudentsByExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-form-field", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "input", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AddStudentToGroupComponent_Template_input_keyup_60_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "table", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](64, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, AddStudentToGroupComponent_th_65_Template, 2, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, AddStudentToGroupComponent_td_66_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](67, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AddStudentToGroupComponent_th_68_Template, 3, 3, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, AddStudentToGroupComponent_td_69_Template, 2, 1, "td", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](70, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AddStudentToGroupComponent_th_71_Template, 3, 3, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, AddStudentToGroupComponent_td_72_Template, 2, 1, "td", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](73, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, AddStudentToGroupComponent_th_74_Template, 3, 3, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, AddStudentToGroupComponent_td_75_Template, 2, 1, "td", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](76, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, AddStudentToGroupComponent_th_77_Template, 1, 0, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, AddStudentToGroupComponent_td_78_Template, 2, 1, "td", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, AddStudentToGroupComponent_tr_79_Template, 1, 0, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, AddStudentToGroupComponent_tr_80_Template, 1, 0, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, AddStudentToGroupComponent_tr_81_Template, 3, 1, "tr", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "mat-paginator", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function AddStudentToGroupComponent_Template_mat_paginator_page_82_listener($event) {
        return ctx.getAllStudentsInGroup($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 18, "labels.AssignStudentToGroup"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](38, _c0, ctx.functionId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 20, "General.Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 22, "General.Search"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 24, "General.Reset"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 26, "labels.Email"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 28, "labels.MobileNo"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 30, "labels.ExcelSheet"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](44, 32, "General.Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 34, "General.Upload"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 36, "labels.Students"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](40, _c1))("length", ctx.itemsCounts)("pageSize", 10);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.firstCol[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  padding: 0 10px !important;\n  text-align: start;\n}\n\n.actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdHVkZW50LXRvLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBRUUsV0FBQTtBQUFGOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoiYWRkLXN0dWRlbnQtdG8tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlyc3RDb2wge1xyXG4gIG1heC13aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 85952:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/setup/educational-setup/student-groups/student-group-index/student-group-index.component.ts ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentGroupIndexComponent": function() { return /* binding */ StudentGroupIndexComponent; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/dialogs/delete-dialog/delete-dialog.component */ 41069);
/* harmony import */ var app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/customeValid.validator */ 84330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_dashboard_services_setup_educational_setup_student_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/student-group.service */ 25537);
/* harmony import */ var app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/dashboard/services/setup/educational-setup/course.service */ 98331);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/messages.service */ 29430);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);






























function StudentGroupIndexComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "EducationalSetup.addGroup"), " ");
  }
}

function StudentGroupIndexComponent_mat_card_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "EducationalSetup.updateGroup"), " ");
  }
}

function StudentGroupIndexComponent_mat_hint_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function StudentGroupIndexComponent_mat_hint_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StudentGroupIndexComponent_mat_hint_17_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r2.formCtrls.Name.errors == null ? null : ctx_r2.formCtrls.Name.errors.required) || (ctx_r2.formCtrls.Name.errors == null ? null : ctx_r2.formCtrls.Name.errors.whiteSpace));
  }
}

function StudentGroupIndexComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var teacher_r27 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", teacher_r27.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.currentLang == "ar" ? teacher_r27.Ar_Name : teacher_r27.En_Name, " ");
  }
}

function StudentGroupIndexComponent_mat_hint_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function StudentGroupIndexComponent_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StudentGroupIndexComponent_mat_hint_28_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.formCtrls == null ? null : ctx_r4.formCtrls.TeacherId.errors == null ? null : ctx_r4.formCtrls.TeacherId.errors.required);
  }
}

function StudentGroupIndexComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var course_r29 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", course_r29.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.currentLang == "ar" ? course_r29.Ar_Name : course_r29.En_Name, " ");
  }
}

function StudentGroupIndexComponent_mat_hint_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.MustChoosevalue"), " ");
  }
}

function StudentGroupIndexComponent_mat_hint_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StudentGroupIndexComponent_mat_hint_39_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formCtrls == null ? null : ctx_r6.formCtrls.CourseId.errors == null ? null : ctx_r6.formCtrls.CourseId.errors.required);
  }
}

function StudentGroupIndexComponent_mat_hint_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterValue"), " ");
  }
}

function StudentGroupIndexComponent_mat_hint_46_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "labels.mustEnterCorrectValue"), " ");
  }
}

function StudentGroupIndexComponent_mat_hint_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StudentGroupIndexComponent_mat_hint_46_span_1_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StudentGroupIndexComponent_mat_hint_46_span_2_Template, 4, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formCtrls == null ? null : ctx_r7.formCtrls.MaxLimit.errors == null ? null : ctx_r7.formCtrls.MaxLimit.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formCtrls == null ? null : ctx_r7.formCtrls.MaxLimit.errors == null ? null : ctx_r7.formCtrls.MaxLimit.errors.minusNum);
  }
}

function StudentGroupIndexComponent_i_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 41);
  }
}

function StudentGroupIndexComponent_button_52_Template(rf, ctx) {
  if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StudentGroupIndexComponent_button_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r33.clearForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "General.Reset"), " ");
  }
}

function StudentGroupIndexComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StudentGroupIndexComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r35 + 1, " ");
  }
}

function StudentGroupIndexComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Name"), " ");
  }
}

function StudentGroupIndexComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var studentGroup_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", studentGroup_r36.Name, " ");
  }
}

function StudentGroupIndexComponent_th_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Teacher"), " ");
  }
}

function StudentGroupIndexComponent_td_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var studentGroup_r37 = ctx.$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r16.currentLang == "ar" ? studentGroup_r37.Teacher.Ar_Name : studentGroup_r37.Teacher.En_Name, " ");
  }
}

function StudentGroupIndexComponent_th_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "labels.Course"), " ");
  }
}

function StudentGroupIndexComponent_td_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var studentGroup_r38 = ctx.$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r18.currentLang == "ar" ? studentGroup_r38.Course.Ar_Name : studentGroup_r38.Course.En_Name, " ");
  }
}

function StudentGroupIndexComponent_th_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "EducationalSetup.MaxLimit"), " ");
  }
}

function StudentGroupIndexComponent_td_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var studentGroup_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", studentGroup_r39.MaxLimit, " ");
  }
}

function StudentGroupIndexComponent_th_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 47);
  }
}

function StudentGroupIndexComponent_td_84_ng_container_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StudentGroupIndexComponent_td_84_ng_container_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      var studentGroup_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r46.toEditStudentGroup(studentGroup_r40);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Edit"), " ");
  }
}

function StudentGroupIndexComponent_td_84_ng_container_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StudentGroupIndexComponent_td_84_ng_container_5_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      var studentGroup_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r49.openDeleteDialog(studentGroup_r40);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "General.Delete"), " ");
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    groupId: a0,
    functionId: a1
  };
};

function StudentGroupIndexComponent_td_84_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var studentGroup_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c0, studentGroup_r40.Id, ctx_r45.functionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "labels.AssignStudentToGroup"), " ");
  }
}

function StudentGroupIndexComponent_td_84_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StudentGroupIndexComponent_td_84_ng_container_5_a_1_Template, 4, 3, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StudentGroupIndexComponent_td_84_ng_container_5_a_2_Template, 4, 3, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, StudentGroupIndexComponent_td_84_ng_container_5_a_3_Template, 4, 7, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var fun_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r42.functionName === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r42.functionName === "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fun_r42.functionName === "AddStudentToGroup");
  }
}

function StudentGroupIndexComponent_td_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StudentGroupIndexComponent_td_84_ng_container_5_Template, 4, 3, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r22.rowFunctions);
  }
}

function StudentGroupIndexComponent_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 59);
  }
}

function StudentGroupIndexComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 60);
  }
}

function StudentGroupIndexComponent_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](64);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r10.value, "\" ");
  }
}

var _c1 = function _c1() {
  return [10];
};

var StudentGroupIndexComponent = /*#__PURE__*/function () {
  function StudentGroupIndexComponent(fb, studentGroupServ, courseServ, translate, spinner, ToastrMsg, dialog, route, authserv) {
    var _this = this;

    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentGroupIndexComponent);

    this.fb = fb;
    this.studentGroupServ = studentGroupServ;
    this.courseServ = courseServ;
    this.translate = translate;
    this.spinner = spinner;
    this.ToastrMsg = ToastrMsg;
    this.dialog = dialog;
    this.route = route;
    this.authserv = authserv;
    this.StudentGroups = [];
    this.submitted = false;
    this.curPage = 1; // rowFunctions: IRowFunctionVM[];

    this.rowFunctions = [{
      functionName: "Edit"
    }, {
      functionName: "Delete"
    }, {
      functionName: "AddStudentToGroup"
    }]; // table

    this.displayedColumns = ["#", "Name", "Teacher", "Course", "MaxLimit", "actions"]; //use after auth for function id and row functions

    route.queryParamMap.subscribe(function (params) {
      _this.functionId = Number(params.get("functionId")); // console.log("functionId", this.functionId);

      if (_this.functionId) {
        _this.authserv.getUserRowFunctions(_this.functionId).subscribe(function (res) {
          if (res.length > 0) {
            // console.log("rowFunctions", res);
            _this.rowFunctions = res;
          }
        });
      }
    }); // current language

    this.translate.onLangChange.subscribe(function (lang) {
      _this.currentLang = lang.lang;
    });
    this.EduCompId = Number(authserv.getEduCompId());
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentGroupIndexComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllStudentGroups(1);
      this.getAllTeachers();
      this.getAllCourses();
      this.myForm = this.fb.group({
        Id: [0],
        Name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.whiteSpace]],
        TeacherId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        CourseId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        MaxLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, app_shared_validators_customeValid_validator__WEBPACK_IMPORTED_MODULE_3__.CustomeValidator.minusNum]]
      }); // test data

      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.StudentGroups);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

      this.authserv.EduCompId.subscribe(function (e) {
        _this2.EduCompId = e.EduCompId;

        _this2.getAllStudentGroups(1);

        _this2.getAllTeachers();

        _this2.getAllCourses();
      });
    }
  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }, {
    key: "formCtrls",
    get: function get() {
      return this.myForm.controls;
    }
  }, {
    key: "getAllTeachers",
    value: function getAllTeachers() {}
  }, {
    key: "getAllCourses",
    value: function getAllCourses() {
      var _this3 = this;

      this.spinner.show();
      this.courseServ.getAllCoursesDropDown().subscribe(function (res) {
        if (res) _this3.courses = res;

        _this3.spinner.hide();
      });
    } // get all course Groups

  }, {
    key: "getAllStudentGroups",
    value: function getAllStudentGroups(page) {
      var _this4 = this;

      this.curPage = page;
      this.spinner.show();
      this.studentGroupServ.getAllStudentGroups(page).subscribe(function (res) {
        if (res) {
          _this4.StudentGroups = res.StudentGroupList;
          _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(_this4.StudentGroups);
          _this4.itemsCounts = res.countItems;
          console.log("StudentGroups: >> ", res);
        }

        _this4.spinner.hide();
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _a, _b, _c, _d, _e;

      this.submitted = true;

      if (this.myForm.valid) {
        var studentGroup = {};
        studentGroup.EduCompId = this.EduCompId;
        studentGroup.Name = (_a = this.formCtrls.Name) === null || _a === void 0 ? void 0 : _a.value;
        studentGroup.TeacherId = (_b = this.formCtrls.TeacherId) === null || _b === void 0 ? void 0 : _b.value;
        studentGroup.CourseId = (_c = this.formCtrls.CourseId) === null || _c === void 0 ? void 0 : _c.value;
        studentGroup.MaxLimit = (_d = this.formCtrls.MaxLimit) === null || _d === void 0 ? void 0 : _d.value;
        console.log("StudentGroup", studentGroup);
        ((_e = this.formCtrls.Id) === null || _e === void 0 ? void 0 : _e.value) ? this.updateStudentGroup(studentGroup) : this.addStudentGroup(studentGroup);
      } else this.ToastrMsg.error("General.FormNotValid");
    } // add course Group

  }, {
    key: "addStudentGroup",
    value: function addStudentGroup(studentGroup) {
      var _this5 = this;

      this.spinner.show();
      this.studentGroupServ.addStudentGroup(studentGroup).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          _this5.getAllStudentGroups(_this5.curPage);

          _this5.ToastrMsg.success("General.AddSuccessfully");

          _this5.myForm.reset();

          _this5.formCtrls.id.setValue(0);

          _this5.submitted = false;
        } else {
          _this5.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
        }

        _this5.spinner.hide();
      });
    } // get form values to update

  }, {
    key: "toEditStudentGroup",
    value: function toEditStudentGroup(studentGroup) {
      var _a, _b;

      this.myForm.patchValue(studentGroup);
      (_a = this.formCtrls.TeacherId) === null || _a === void 0 ? void 0 : _a.setValue(studentGroup.Teacher.Id);
      (_b = this.formCtrls.CourseId) === null || _b === void 0 ? void 0 : _b.setValue(studentGroup.Course.id);
    } // update course Group

  }, {
    key: "updateStudentGroup",
    value: function updateStudentGroup(studentGroup) {
      var _this6 = this;

      this.spinner.show();
      this.studentGroupServ.updateStudentGroup(this.formCtrls.Id.value, studentGroup).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          var i = _this6.dataSource.data.findIndex(function (e) {
            return e.Id == _this6.formCtrls.Id.value;
          });

          _this6.dataSource.data[i] = res;

          _this6.ToastrMsg.success("General.UpdateSuccessfully");

          _this6.myForm.reset();

          _this6.submitted = false;
        } else {
          _this6.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);
        }

        _this6.spinner.hide();
      });
    } // delete dialog

  }, {
    key: "openDeleteDialog",
    value: function openDeleteDialog(studentGroup) {
      var _this7 = this;

      this.dialog.open(app_shared_components_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
        data: {
          msg: studentGroup.Name
        }
      }).afterClosed().subscribe(function (confirm) {
        if (confirm) _this7.deleteStudentGroup(studentGroup);
      });
    } // delete course Group

  }, {
    key: "deleteStudentGroup",
    value: function deleteStudentGroup(studentGroup) {
      var _this8 = this;

      this.spinner.show();
      this.studentGroupServ.deleteStudentGroup(studentGroup.Id).subscribe(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.returnValue) == 1) {
          var i = _this8.dataSource.data.findIndex(function (e) {
            return e == studentGroup;
          });

          _this8.dataSource.data.splice(i, 1);

          _this8.ToastrMsg.success("General.DeleteSuccessfully");
        } else _this8.ToastrMsg.error(res === null || res === void 0 ? void 0 : res.returnString);

        _this8.spinner.hide();
      });
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.myForm.reset();
      this.formCtrls.id.setValue(0);
      this.submitted = false;
    }
  }]);

  return StudentGroupIndexComponent;
}();

StudentGroupIndexComponent.ɵfac = function StudentGroupIndexComponent_Factory(t) {
  return new (t || StudentGroupIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_student_group_service__WEBPACK_IMPORTED_MODULE_4__.StudentGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_dashboard_services_setup_educational_setup_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_messages_service__WEBPACK_IMPORTED_MODULE_6__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
};

StudentGroupIndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: StudentGroupIndexComponent,
  selectors: [["app-student-group-index"]],
  viewQuery: function StudentGroupIndexComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 89,
  vars: 41,
  consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], [1, "container-fluid"], [1, "container-fluid", 3, "formGroup"], [1, "col-md-6", "col-12"], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "Name"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "TeacherId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "CourseId"], ["matInput", "", "type", "number", "formControlName", "MaxLimit"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], ["class", "fa fa-plus", 4, "ngIf"], ["mat-raised-button", "", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "f-w"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "#"], ["mat-header-cell", "", "class", "firstCol", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "firstCol", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Teacher"], ["matColumnDef", "Course"], ["matColumnDef", "MaxLimit"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center px-3 actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of studentGroups", 3, "pageSizeOptions", "length", "page"], [1, "text-danger"], [1, "ft-alert-circle", "align-middle"], [3, "value"], [1, "fa", "fa-plus"], ["mat-raised-button", "", 1, "btn", "btn-warning", 3, "click"], ["mat-header-cell", "", 1, "firstCol"], ["mat-cell", "", 1, "firstCol"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "actions"], ["mat-cell", "", 1, "text-center", "px-3", "actions"], ["ngbDropdown", "", 1, "d-inline-block"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-info", "bg-light-info"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "routerLink", "../add-student-to-group", 3, "queryParams", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "fa", "fa-edit", "mr-2"], [1, "ft-trash", "mr-2"], ["ngbDropdownItem", "", "routerLink", "../add-student-to-group", 3, "queryParams"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "6", 1, "mat-cell"]],
  template: function StudentGroupIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StudentGroupIndexComponent_mat_card_title_4_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StudentGroupIndexComponent_mat_card_title_5_Template, 3, 3, "mat-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, StudentGroupIndexComponent_mat_hint_17_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, StudentGroupIndexComponent_mat_option_27_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, StudentGroupIndexComponent_mat_hint_28_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, StudentGroupIndexComponent_mat_option_38_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, StudentGroupIndexComponent_mat_hint_39_Template, 2, 1, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, StudentGroupIndexComponent_mat_hint_46_Template, 3, 2, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-card-actions", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StudentGroupIndexComponent_Template_button_click_48_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, StudentGroupIndexComponent_i_49_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, StudentGroupIndexComponent_button_52_Template, 3, 3, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-form-field", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function StudentGroupIndexComponent_Template_input_keyup_63_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "table", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](67, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, StudentGroupIndexComponent_th_68_Template, 2, 0, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, StudentGroupIndexComponent_td_69_Template, 2, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](70, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, StudentGroupIndexComponent_th_71_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, StudentGroupIndexComponent_td_72_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](73, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, StudentGroupIndexComponent_th_74_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, StudentGroupIndexComponent_td_75_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](76, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, StudentGroupIndexComponent_th_77_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, StudentGroupIndexComponent_td_78_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](79, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, StudentGroupIndexComponent_th_80_Template, 3, 3, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, StudentGroupIndexComponent_td_81_Template, 2, 1, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](82, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, StudentGroupIndexComponent_th_83_Template, 1, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, StudentGroupIndexComponent_td_84_Template, 6, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](85, StudentGroupIndexComponent_tr_85_Template, 1, 0, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, StudentGroupIndexComponent_tr_86_Template, 1, 0, "tr", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, StudentGroupIndexComponent_tr_87_Template, 3, 1, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "mat-paginator", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function StudentGroupIndexComponent_Template_mat_paginator_page_88_listener($event) {
        return ctx.getAllStudentGroups($event.pageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx.formCtrls == null ? null : ctx.formCtrls.Id == null ? null : ctx.formCtrls.Id.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formCtrls == null ? null : ctx.formCtrls.Id == null ? null : ctx.formCtrls.Id.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 24, "labels.Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls.Name == null ? null : ctx.formCtrls.Name.invalid) && ((ctx.formCtrls.Name == null ? null : ctx.formCtrls.Name.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 26, "labels.Teacher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 28, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.teachers);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.TeacherId.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.TeacherId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 30, "EducationalSetup.course"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 32, "General.Choose"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.courses);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.CourseId.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.CourseId.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 34, "EducationalSetup.MaxLimit"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.MaxLimit == null ? null : ctx.formCtrls.MaxLimit.invalid) && ((ctx.formCtrls == null ? null : ctx.formCtrls.MaxLimit == null ? null : ctx.formCtrls.MaxLimit.touched) || ctx.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formCtrls == null ? null : ctx.formCtrls.Id == null ? null : ctx.formCtrls.Id.value) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 36, (ctx.formCtrls == null ? null : ctx.formCtrls.Id == null ? null : ctx.formCtrls.Id.value) == 0 ? "General.Add" : "General.Update"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formCtrls.Id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 38, "EducationalSetup.groups"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](40, _c1))("length", ctx.itemsCounts);
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownItem, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.firstCol[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  padding: 0 10px !important;\n  text-align: start;\n}\n\n.actions[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZ3JvdXAtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFFRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJzdHVkZW50LWdyb3VwLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIC8vIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpcnN0Q29sIHtcclxuICBtYXgtd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIG1heC13aWR0aDogODBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 62585:
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/educational-setup/asign-class-rooms.service.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignClassRoomsService": function() { return /* binding */ AsignClassRoomsService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var AsignClassRoomsService = /*#__PURE__*/function () {
  function AsignClassRoomsService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AsignClassRoomsService);

    this.http = http;
  } // Return Class rooms


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AsignClassRoomsService, [{
    key: "getAsignClassRoomsByYearId",
    value: function getAsignClassRoomsByYearId(yearId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AssignClassRoom/getAssignClassRoomByAcademicEduYearId/").concat(yearId, "/").concat(page));
    } // getAsignClassRooms(page: number) {
    //   return this.http.get<IAssignClassRoomList>(
    //     `${environment.baseUrl}AssignClassRoom/getAssignClassRoomPage/${page}`
    //   );
    // }
    // getAsignClassRoomsDropDown(page: number) {
    //   return this.http.get<IAssignClassRoom[]>(
    //     `${environment.baseUrl}AssignClassRoom/getAllAssignClassRoom/${page}`
    //   );
    // }
    //Add New Class room

  }, {
    key: "addEditAsignClassRoom",
    value: function addEditAsignClassRoom(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AssignClassRoom/addEditAssignClassRoom"), data);
    } //Delete Class room

  }, {
    key: "deleteAsignClassRoom",
    value: function deleteAsignClassRoom(ClassRoomId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AssignClassRoom/deleteAssignClassRoom/").concat(ClassRoomId));
    }
  }]);

  return AsignClassRoomsService;
}();

AsignClassRoomsService.ɵfac = function AsignClassRoomsService_Factory(t) {
  return new (t || AsignClassRoomsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

AsignClassRoomsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AsignClassRoomsService,
  factory: AsignClassRoomsService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 87740:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/educational-setup/department.service.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentService": function() { return /* binding */ DepartmentService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var DepartmentService = /*#__PURE__*/function () {
  function DepartmentService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DepartmentService);

    this.http = http;
  } // Return All Departments


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DepartmentService, [{
    key: "getDepartment",
    value: function getDepartment(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Department/getDepartmentByPage/").concat(page));
    }
  }, {
    key: "getDepartmentDropdown",
    value: function getDepartmentDropdown() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Department/getAllDepartment"));
    } //Add - edit New Department

  }, {
    key: "addEditDepartment",
    value: function addEditDepartment(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Department/addEditDepartment"), data);
    } //Delete Department

  }, {
    key: "deleteDepartment",
    value: function deleteDepartment(DepartmentId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Department/deleteDepartment/").concat(DepartmentId));
    }
  }]);

  return DepartmentService;
}();

DepartmentService.ɵfac = function DepartmentService_Factory(t) {
  return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

DepartmentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DepartmentService,
  factory: DepartmentService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 1543:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/educational-setup/education-detail.service.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationDetailService": function() { return /* binding */ EducationDetailService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var EducationDetailService = /*#__PURE__*/function () {
  function EducationDetailService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EducationDetailService);

    this.http = http;
  } // Return All Academic Educational Year Detail


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EducationDetailService, [{
    key: "getAcademicEduYearDetailsByTermId",
    value: function getAcademicEduYearDetailsByTermId(TermId, page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AcademicEduYearDetails/getEducationDetailsByTermIdByPage/").concat(TermId, "/").concat(page));
    }
  }, {
    key: "getAcademicEduYearDetailsByPage",
    value: function getAcademicEduYearDetailsByPage(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AcademicEduYearDetails/getEducationDetailsByPage/").concat(page));
    } //Add New Academic Educational Year Detail

  }, {
    key: "AddEditAcademicYearDetail",
    value: function AddEditAcademicYearDetail(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AcademicEduYearDetails/addEditEducationDetails"), data);
    } //Delete Academic Educational Year Detail

  }, {
    key: "deleteAcademicEducationalYearDetail",
    value: function deleteAcademicEducationalYearDetail(AcademicEduYearDetailId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AcademicEduYearDetails/deleteEducationDetails/").concat(AcademicEduYearDetailId));
    }
  }]);

  return EducationDetailService;
}();

EducationDetailService.ɵfac = function EducationDetailService_Factory(t) {
  return new (t || EducationDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

EducationDetailService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EducationDetailService,
  factory: EducationDetailService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 54811:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/educational-setup/exam-night.service.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamNightService": function() { return /* binding */ ExamNightService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var ExamNightService = /*#__PURE__*/function () {
  function ExamNightService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExamNightService);

    this.http = http;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExamNightService, [{
    key: "getAllExamNight",
    value: function getAllExamNight(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AssignClassRoom").concat(page));
    }
  }, {
    key: "addExamNight",
    value: function addExamNight(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AssignClassRoom"), body);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "AssignClassRoom").concat(id));
    }
  }]);

  return ExamNightService;
}();

ExamNightService.ɵfac = function ExamNightService_Factory(t) {
  return new (t || ExamNightService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ExamNightService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ExamNightService,
  factory: ExamNightService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 92097:
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/educational-setup/group.service.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupService": function() { return /* binding */ GroupService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var GroupService = /*#__PURE__*/function () {
  function GroupService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GroupService);

    this.http = http;
  } //#region >> groups
  // Return All  Groups by page


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GroupService, [{
    key: "getAllGroups",
    value: function getAllGroups(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Groups/getAllGroups/").concat(page));
    } // Return All Groups > dropDown list

  }, {
    key: "getAllGroupsDropDown",
    value: function getAllGroupsDropDown() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Groups/getAllGroupsDropDown"));
    } // Add New Group

  }, {
    key: "addGroup",
    value: function addGroup(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Groups/addGroup"), data);
    } // Update Group

  }, {
    key: "updateGroup",
    value: function updateGroup(id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Groups/updateGroup").concat(id), data);
    } // Delete Group

  }, {
    key: "deleteGroup",
    value: function deleteGroup(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Groups/deleteGroup/").concat(id));
    } //#endregion
    //#region >> subgroups
    // Return All Subgroup by page

  }, {
    key: "getAllSubgroups",
    value: function getAllSubgroups(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Subgroups/getAllSubgroups/").concat(page));
    } // Add New Subgroup

  }, {
    key: "addSubgroup",
    value: function addSubgroup(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Subgroups/addSubgroup"), data);
    } // Update Subgroup

  }, {
    key: "updateSubgroup",
    value: function updateSubgroup(id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Subgroups/updateSubgroup").concat(id), data);
    } // Delete Subgroup

  }, {
    key: "deleteSubgroup",
    value: function deleteSubgroup(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "Subgroups/deleteSubgroup/").concat(id));
    }
  }]);

  return GroupService;
}();

GroupService.ɵfac = function GroupService_Factory(t) {
  return new (t || GroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

GroupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GroupService,
  factory: GroupService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 25537:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/educational-setup/student-group.service.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentGroupService": function() { return /* binding */ StudentGroupService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var StudentGroupService = /*#__PURE__*/function () {
  function StudentGroupService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentGroupService);

    this.http = http;
  } //#region >> groups
  // Return All  StudentGroups by page


  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentGroupService, [{
    key: "getAllStudentGroups",
    value: function getAllStudentGroups(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "StudentGroups/getAllStudentGroups/").concat(page));
    } // Return All StudentGroups > dropDown list

  }, {
    key: "getAllStudentGroupsDropDown",
    value: function getAllStudentGroupsDropDown() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "StudentGroups/getAllStudentGroupsDropDown"));
    } // Add New StudentGroup

  }, {
    key: "addStudentGroup",
    value: function addStudentGroup(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "StudentGroups/addStudentGroup"), data);
    } // Update StudentGroup

  }, {
    key: "updateStudentGroup",
    value: function updateStudentGroup(id, data) {
      return this.http.put("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "StudentGroups/updateStudentGroup").concat(id), data);
    } // Delete StudentGroup

  }, {
    key: "deleteStudentGroup",
    value: function deleteStudentGroup(id) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "StudentGroups/deleteStudentGroup/").concat(id));
    } //#endregion
    //#region assign student to group

  }, {
    key: "getAllStudentsInGroup",
    value: function getAllStudentsInGroup(body) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "studyinggroup/search-student-groups"), body);
    }
  }, {
    key: "checkStudent",
    value: function checkStudent(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "studyinggroup/search-student-in-group", body);
    }
  }, {
    key: "addStudent",
    value: function addStudent(studentId, groupId) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "studyinggroup/add-student-groups/").concat(studentId, "/").concat(groupId));
    }
  }, {
    key: "deleteStudent",
    value: function deleteStudent(studentId, groupId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "studyinggroup/remove-student-groups/").concat(studentId, "/").concat(groupId));
    }
  }, {
    key: "uploadStudentsByExcel",
    value: function uploadStudentsByExcel(body) {
      return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + "studyinggroup/upload-excel-student-groups", body);
    }
  }]);

  return StudentGroupService;
}();

StudentGroupService.ɵfac = function StudentGroupService_Factory(t) {
  return new (t || StudentGroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

StudentGroupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StudentGroupService,
  factory: StudentGroupService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 68977:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/services/setup/general-setup/educational-group.service.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationalGroupService": function() { return /* binding */ EducationalGroupService; }
/* harmony export */ });
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





var EducationalGroupService = /*#__PURE__*/function () {
  function EducationalGroupService(http) {
    (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EducationalGroupService);

    this.http = http;
  }

  (0,F_Front_End_new_schools_managment_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EducationalGroupService, [{
    key: "getEducationalGroup",
    value: function getEducationalGroup(page) {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "EducationGroup/getEduGroupByPage/").concat(page));
    }
  }, {
    key: "getEducationalGroupDropdown",
    value: function getEducationalGroupDropdown() {
      return this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "EducationGroup/getAllEduGroup"));
    }
  }, {
    key: "addupdateEduGroup",
    value: function addupdateEduGroup(data) {
      return this.http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "EducationGroup/addEditEduGroup"), data);
    }
  }, {
    key: "deleteEducationalGroup",
    value: function deleteEducationalGroup(EduGroupId) {
      return this.http.delete("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl, "EducationGroup/deleteEduGroup/").concat(EduGroupId));
    }
  }]);

  return EducationalGroupService;
}();

EducationalGroupService.ɵfac = function EducationalGroupService_Factory(t) {
  return new (t || EducationalGroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

EducationalGroupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EducationalGroupService,
  factory: EducationalGroupService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_pages_setup_educational-setup_educational-setup_module_ts.js.map