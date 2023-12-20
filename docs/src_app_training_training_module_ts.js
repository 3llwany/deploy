"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_training_training_module_ts"],{

/***/ 159:
/*!*****************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/add-course-form/add-course-form.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCourseFormComponent": () => (/* binding */ AddCourseFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course-general.service */ 94343);
/* harmony import */ var app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/course/course.service */ 15881);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dynamic_form_field_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/text-editor/text-editor.component */ 27861);
/* harmony import */ var _shared_components_dynamic_form_field_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/slide-toggle/slide-toggle.component */ 48839);
/* harmony import */ var _shared_components_dynamic_form_field_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/slider/slider.component */ 20945);
/* harmony import */ var _shared_components_dropdowns_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/course-category-dropdown/course-category-dropdown.component */ 42518);
/* harmony import */ var _shared_components_dropdowns_course_type_dropdown_course_type_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/course-type-dropdown/course-type-dropdown.component */ 8329);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../course-attachments/course-attachments.component */ 10352);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
























function AddCourseFormComponent_ng_container_4_div_52_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TRACourseHoldingYears_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", TRACourseHoldingYears_r5.controls.percentage)("submitted", ctx_r3.submitted)("label", "year " + (i_r6 + 1));
} }
function AddCourseFormComponent_ng_container_4_div_52_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "total of percentage must be equal penalety persentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function AddCourseFormComponent_ng_container_4_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 26)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, AddCourseFormComponent_ng_container_4_div_52_div_6_Template, 2, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, AddCourseFormComponent_ng_container_4_div_52_span_7_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 5, "holdingDivision")));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.TRACourseHoldingYears.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.totalPrecentage != ctx_r2.formCtrls.penalty.value && ctx_r2.submitted);
} }
const _c0 = function (a0, a1) { return { rightFree: a0, leftFree: a1 }; };
const _c1 = function (a0, a1) { return { holdingright: a0, holdingleft: a1 }; };
function AddCourseFormComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "page-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "mat-divider", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "mat-card-content", 8)(8, "div", 0)(9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "app-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "app-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "app-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "app-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "app-course-category-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "app-course-type-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 15)(22, "div", 1)(23, "mat-card")(24, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "page-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](26, "mat-divider", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "mat-card-content", 8)(28, "div", 0)(29, "div", 17)(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](32, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "slide-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChange", function AddCourseFormComponent_ng_container_4_Template_slide_toggle_onChange_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.onFreechange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](37, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "slider", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 17)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](43, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "slide-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChange", function AddCourseFormComponent_ng_container_4_Template_slide_toggle_onChange_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.onHoldingchange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "app-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyUp", function AddCourseFormComponent_ng_container_4_Template_app_input_keyUp_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.getTRACourseHoldingYearsList($event)); })("change", function AddCourseFormComponent_ng_container_4_Template_app_input_change_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r11.getTRACourseHoldingYearsList($event == null ? null : $event.target == null ? null : $event.target.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](49, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](51, "slider", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, AddCourseFormComponent_ng_container_4_div_52_Template, 8, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 15)(54, "div", 1)(55, "mat-card")(56, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](57, "page-title", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "mat-divider", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "mat-card-content", 8)(60, "div", 0)(61, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](62, "app-check-box", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](64, "app-check-box", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](66, "app-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.code)("submitted", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.ar_Name)("submitted", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.en_Name)("submitted", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.abbrevation)("submitted", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.course_Category_ID)("submitted", ctx_r0.submitted)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.course_Type_ID)("submitted", ctx_r0.submitted)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](52, _c0, ctx_r0.languageService.isEnglish, ctx_r0.languageService.isArabic));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](32, 36, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](33, 38, "free")));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.isFree);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](37, 40, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](38, 42, "coursePercentege")));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.courseValue)("disabled", ctx_r0.formCtrls.isFree.value)("submitted", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](55, _c1, ctx_r0.languageService.isEnglish, ctx_r0.languageService.isArabic));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](43, 44, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](44, 46, "holding")));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.isHolding);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.holdingYears)("submitted", ctx_r0.submitted)("disabled", !ctx_r0.formCtrls.isHolding.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](49, 48, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](50, 50, "penaletyPercentege")));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.penalty)("disabled", !ctx_r0.formCtrls.isHolding.value)("submitted", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.formCtrls.holdingYears.value && ctx_r0.TRACourseHoldingYears.controls.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.threeMontheEvalution);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.sixMontheEvalution);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.note)("submitted", ctx_r0.submitted);
} }
function AddCourseFormComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 31, 32)(3, "div", 1)(4, "mat-card")(5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "page-title", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "mat-card-content", 8)(9, "div", 0)(10, "div", 1)(11, "div", 0)(12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "app-text-editor", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "app-text-editor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "mat-card-actions", 4)(17, "submit-btn", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClick", function AddCourseFormComponent_ng_container_5_Template_submit_btn_onClick_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "app-course-attachments", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r1.formCtrls.outlineDesc)("submitted", ctx_r1.submitted)("bounds", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r1.formCtrls.outLine)("submitted", ctx_r1.submitted)("bounds", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r1.courseId)("color", ctx_r1.btn.darkBlue)("iconPositionBefore", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("courseId", ctx_r1.courseId);
} }
class AddCourseFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseGeneralService, courseService) {
        super();
        this.courseGeneralService = courseGeneralService;
        this.courseService = courseService;
        this.changeCourseId = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.isGeneral = false;
        this.isOutline = false;
        this.submitted = false;
        this.courseId = 0;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.courseId, { nonNullable: true }],
            ar_Name: [null, [app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_Name: [null, [app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            code: [null, [app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            abbrevation: [
                null,
                [app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.Length(10)],
            ],
            course_Category_ID: [null],
            course_Type_ID: [null],
            isFree: [true],
            isHolding: [false],
            courseValue: [null],
            holdingYears: [null],
            penalty: [null],
            sixMontheEvalution: [false],
            threeMontheEvalution: [false],
            note: [""],
            trA_Course_Holding_Years: this.fb.array([]),
            outLine: [null],
            outlineDesc: [null],
        });
        this.activatedRoute.params.subscribe((params) => {
            this.courseId = Number(params.id);
        });
        if (this.isGeneral) {
            this.formCtrls.ar_Name.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.formCtrls.en_Name.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.formCtrls.code.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.formCtrls.isFree.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.courseId > 0 && this.checkNoBusinessOrCompany)
            this.getCourseById();
    }
    get TRACourseHoldingYears() {
        return this.form.controls["trA_Course_Holding_Years"];
    }
    getTRACourseHoldingYearsList(event) {
        let length = event;
        this.TRACourseHoldingYears.clear();
        for (var i = 0; i < length; i++) {
            let TRACourseHoldingYear = this.fb.group({
                holding_Year: [i + 1],
                percentage: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            });
            this.TRACourseHoldingYears.push(TRACourseHoldingYear);
        }
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            let data = {};
            data.Id = this.formCtrls.id.value;
            data.Ar_Name = this.formCtrls.ar_Name.value;
            data.En_Name = this.formCtrls.en_Name.value;
            data.Course_Type_ID = this.formCtrls.course_Type_ID.value;
            data.Course_Category_ID = this.formCtrls.course_Category_ID.value;
            data.Code = this.formCtrls.code.value;
            data.Note = this.formCtrls.note.value;
            data.Abbrevation = this.formCtrls.abbrevation.value;
            data.IsFree = this.formCtrls.isFree.value == true ? 1 : 2;
            data.CourseValue = this.formCtrls.courseValue.value;
            data.IsHolding = this.formCtrls.isHolding.value == true ? 2 : 1;
            data.HoldingYears = this.formCtrls.holdingYears.value;
            data.Penalty = this.formCtrls.penalty.value;
            data.ThreeMontheEvalution = this.formCtrls.threeMontheEvalution.value;
            data.SixMontheEvalution = this.formCtrls.sixMontheEvalution.value;
            data.outline = this.formCtrls.outLine.value;
            data.outlinedesc = this.formCtrls.outlineDesc.value;
            data.TRA_Course_Holding_Years = [];
            if (data.Penalty != null) {
                this.totalPrecentage = 0;
                this.TRACourseHoldingYears.controls.forEach((e) => {
                    let Holding_Year = {};
                    Holding_Year.holding_Year = e.value.holding_Year;
                    Holding_Year.percentage = e.value.percentage;
                    data.TRA_Course_Holding_Years.push(Holding_Year);
                    this.totalPrecentage += e.value.percentage;
                });
                if (this.totalPrecentage != data.Penalty) {
                    return;
                }
            }
            if (data.Id == 0)
                this.create(data);
            else
                this.update(data);
        }
    }
    create(model) {
        this.showLoading();
        let url;
        this.courseGeneralService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.courseId = res.data.id;
                this.formCtrls.id.setValue(this.courseId);
                url = `/training/${this.moduleId}/course/edit/${this.courseId}`;
                this.navigateTo(url);
                this.changeCourseId.emit(this.courseId);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.courseGeneralService.update(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    getCourseById() {
        this.showLoading();
        this.courseService
            .getById(this.courseId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                let course = res.data[0];
                this.form.patchValue(course);
                this.formCtrls.isHolding.setValue(course.isHolding == 2 ? true : false);
                this.formCtrls.isFree.setValue(course.isFree == 1 ? true : false);
                if (course.trA_Course_Holding_Years.length > 0) {
                    course.trA_Course_Holding_Years.forEach((el, i) => {
                        let TRACourseHoldingYear = this.fb.group({
                            holding_Year: [el.holding_Year],
                            percentage: [el.percentage],
                        });
                        this.TRACourseHoldingYears.push(TRACourseHoldingYear);
                    });
                }
            }
            this.hideLoading();
        });
    }
    onHoldingchange() {
        if (this.formCtrls.isHolding.value == 2) {
            this.formCtrls.holdingYears.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.formCtrls.penalty.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.formCtrls.holdingYears.setValidators(null);
            this.formCtrls.penalty.setValidators(null);
            this.formCtrls.holdingYears.setValue(null);
            this.formCtrls.penalty.setValue(null);
            this.TRACourseHoldingYears.clear();
        }
    }
    onFreechange() {
        if (this.formCtrls.isFree.value != 1) {
            this.formCtrls.courseValue.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.formCtrls.courseValue.setValue(null);
        }
        else {
            this.formCtrls.courseValue.clearValidators();
        }
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
}
AddCourseFormComponent.ɵfac = function AddCourseFormComponent_Factory(t) { return new (t || AddCourseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_3__.CourseGeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_4__.CourseService)); };
AddCourseFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: AddCourseFormComponent, selectors: [["app-add-course-form"]], inputs: { isGeneral: "isGeneral", isOutline: "isOutline" }, outputs: { changeCourseId: "changeCourseId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "row"], [1, "col-12"], [3, "formGroup"], [4, "ngIf"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "color", "iconPositionBefore", "onClick"], ["title", "generalInfo"], [1, "mt-2"], [1, "container-fluid", "mtop-35"], [1, "col-md-4", "col-12"], ["label", "courseCode", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], ["label", "abbreviation", 3, "control", "submitted"], [3, "control", "submitted", "filter"], [1, "row", "mt-3"], ["title", "pricingAndholding"], [1, "col-12", "col-md-4", "col-lg-3", 3, "ngClass"], [1, "mb-3", 3, "control", "onChange"], [3, "control", "disabled", "submitted"], ["label", "holdingYear", "type", "number", 3, "control", "submitted", "disabled", "keyUp", "change"], ["class", "col-12 col-md-8 offset-md-1 offset-lg-0 col-lg-4 offset-xl-0 col-xl-5 division", 4, "ngIf"], ["title", "evaluation"], ["label", "evreyThreeMonths", 3, "control"], ["label", "evreySixMonths", 3, "control"], ["label", "note", 3, "control", "submitted"], [1, "col-12", "col-md-8", "offset-md-1", "offset-lg-0", "col-lg-4", "offset-xl-0", "col-xl-5", "division"], ["class", "col-md-4 col-12", 4, "ngFor", "ngForOf"], ["id", "persentageMessage", "class", "text-danger m-2", 4, "ngIf"], ["type", "number", 3, "control", "submitted", "label"], ["id", "persentageMessage", 1, "text-danger", "m-2"], [1, "row", "mbottom-30"], ["editorContainer", ""], ["title", "outLine"], [1, "col-md-6", "col-12"], ["label", "description", 3, "control", "submitted", "bounds"], ["label", "outLine", 3, "control", "submitted", "bounds"], ["icon", "pi pi-plus-circle", 3, "disabled", "color", "iconPositionBefore", "onClick"], [3, "courseId"]], template: function AddCourseFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, AddCourseFormComponent_ng_container_4_Template, 67, 58, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, AddCourseFormComponent_ng_container_5_Template, 19, 10, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "mat-card-actions", 4)(7, "submit-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClick", function AddCourseFormComponent_Template_submit_btn_onClick_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isGeneral);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isOutline);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("color", ctx.btn.darkBlue)("iconPositionBefore", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_6__.CheckBoxComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _shared_components_dynamic_form_field_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_9__.TextEditorComponent, _shared_components_dynamic_form_field_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_10__.SlideToggleComponent, _shared_components_dynamic_form_field_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__.SliderComponent, _shared_components_dropdowns_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.CourseCategoryDropdownComponent, _shared_components_dropdowns_course_type_dropdown_course_type_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.CourseTypeDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_14__.CourseAttachmentsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: [".division[_ngcontent-%COMP%] {\n  border: 1px dotted #b9b4b4;\n  border-radius: 20px;\n  padding: 20px;\n}\n\n.holdingright[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n\n.holdingleft[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.rightFree[_ngcontent-%COMP%] {\n  border-right: 1px solid #b9b4b4;\n  padding-right: 67px;\n  margin-right: 67px;\n}\n\n.leftFree[_ngcontent-%COMP%] {\n  border-left: 1px solid #b9b4b4;\n  padding-left: 67px;\n  margin-left: 67px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb3Vyc2UtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxrQkFBQTtBQUNGOztBQUNBO0VBRUUsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoiYWRkLWNvdXJzZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlzaW9uIHtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgI2I5YjRiNDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmhvbGRpbmdyaWdodCB7XHJcblxyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG4uaG9sZGluZ2xlZnQge1xyXG5cclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLnJpZ2h0RnJlZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I5YjRiNDtcclxuICBwYWRkaW5nLXJpZ2h0OiA2N3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNjdweDtcclxufVxyXG4ubGVmdEZyZWUge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2I5YjRiNDtcclxuICBwYWRkaW5nLWxlZnQ6IDY3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 51103:
/*!*************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/add-course-index/add-course.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCourseComponent": () => (/* binding */ AddCourseComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/buttons/add-new-btn/add-new-btn.component */ 18825);
/* harmony import */ var _shared_components_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/buttons/button/button.component */ 37671);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/steps */ 72420);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general/general.component */ 93919);
/* harmony import */ var _course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-competence/course-competence.component */ 20246);
/* harmony import */ var _course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../course-outline/course-outline.component */ 32320);
/* harmony import */ var _course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-tsp-and-instructor/course-tsp-and-instructor.component */ 15894);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);













function AddCourseComponent_app_add_new_btn_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-add-new-btn", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r0.moduleId, "/course/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx_r0.parantParam);
} }
function AddCourseComponent_app_general_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-general", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changeCourseId", function AddCourseComponent_app_general_9_Template_app_general_changeCourseId_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.courseId = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddCourseComponent_app_course_tsp_and_instructor_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-course-tsp-and-instructor");
} }
function AddCourseComponent_app_course_competence_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-course-competence", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("courseId", ctx_r3.courseId);
} }
function AddCourseComponent_app_course_outline_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-course-outline", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("courseId", ctx_r4.courseId);
} }
function AddCourseComponent_app_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddCourseComponent_app_button_14_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.back()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r5.languageService.isArabic ? "ft-chevron-right font-size-20" : "ft-chevron-left font-size-20")("color", ctx_r5.btn.light)("decreasePaddingWithIcon", true)("params", ctx_r5.parantParam);
} }
function AddCourseComponent_app_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddCourseComponent_app_button_15_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r6.languageService.isArabic ? "ft-chevron-left font-size-20" : "ft-chevron-right font-size-20")("iconPositionBefore", false)("color", ctx_r6.btn.darkBlue)("decreasePaddingWithIcon", true)("params", ctx_r6.parantParam);
} }
class AddCourseComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.activeIndex = 0;
        this.courseId = 0;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.courseId = Number(params.get("id")) ?? 0;
        });
        this.items = [
            {
                label: "General",
            }, {
                label: "TSP & Instructor",
            },
            {
                label: "Course Competence",
            },
            {
                label: "Outline & Attachments",
            },
        ];
    }
    next() {
        if (this.activeIndex < this.items.length - 1) {
            this.activeIndex++;
        }
    }
    back() {
        if (this.activeIndex > 0) {
            this.activeIndex--;
        }
    }
}
AddCourseComponent.ɵfac = function AddCourseComponent_Factory(t) { return new (t || AddCourseComponent)(); };
AddCourseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddCourseComponent, selectors: [["app-add-course"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 19, consts: [[1, "title-header"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [3, "model", "activeIndex", "styleClass", "activeIndexChange"], [3, "changeCourseId", 4, "ngIf"], [4, "ngIf"], [3, "courseId", 4, "ngIf"], ["align", "end", 1, "border"], ["label", "General.back", 3, "icon", "color", "decreasePaddingWithIcon", "params", "click", 4, "ngIf"], ["label", "General.next", 3, "icon", "iconPositionBefore", "color", "decreasePaddingWithIcon", "params", "click", 4, "ngIf"], [3, "changeCourseId"], [3, "courseId"], ["label", "General.back", 3, "icon", "color", "decreasePaddingWithIcon", "params", "click"], ["label", "General.next", 3, "icon", "iconPositionBefore", "color", "decreasePaddingWithIcon", "params", "click"]], template: function AddCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddCourseComponent_app_add_new_btn_5_Template, 1, 2, "app-add-new-btn", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-back-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content")(8, "p-steps", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeIndexChange", function AddCourseComponent_Template_p_steps_activeIndexChange_8_listener($event) { return ctx.activeIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AddCourseComponent_app_general_9_Template, 1, 0, "app-general", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AddCourseComponent_app_course_tsp_and_instructor_10_Template, 1, 0, "app-course-tsp-and-instructor", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, AddCourseComponent_app_course_competence_11_Template, 1, 1, "app-course-competence", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddCourseComponent_app_course_outline_12_Template, 1, 1, "app-course-outline", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, AddCourseComponent_app_button_14_Template, 1, 4, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AddCourseComponent_app_button_15_Template, 1, 5, "app-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 17, "addCourse")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.courseId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/course/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("styleClass", "completed-" + ctx.activeIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeIndex == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeIndex == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", "#FFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeIndex > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeIndex < ctx.items.length - 1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__.BackBtnComponent, _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__.AddNewBtnComponent, _shared_components_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, primeng_steps__WEBPACK_IMPORTED_MODULE_11__.Steps, _general_general_component__WEBPACK_IMPORTED_MODULE_4__.GeneralComponent, _course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_5__.CourseCompetenceComponent, _course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_6__.CourseOutlineComponent, _course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_7__.CourseTspAndInstructorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".title-header {\n  margin: 0 !important;\n}\n  .title-header #back_btn,   .title-header #add_new_btn {\n  margin-top: -3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7O0VBRUUsMkJBQUE7QUFFSiIsImZpbGUiOiJhZGQtY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50aXRsZS1oZWFkZXIge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICNiYWNrX2J0bixcclxuICAjYWRkX25ld19idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 10352:
/*!***********************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/course-attachments/course-attachments.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseAttachmentsComponent": () => (/* binding */ CourseAttachmentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_course_course_attachment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/course/course-attachment.service */ 48294);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/prime-ng/file-upload/file-upload.component */ 22193);
/* harmony import */ var _shared_components_dropdowns_attachment_dropdown_attachment_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/attachment-dropdown/attachment-dropdown.component */ 58042);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);












class CourseAttachmentsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseAttachmentService) {
        super();
        this.courseAttachmentService = courseAttachmentService;
        this.submitted = false;
        this.isLoaded = false;
        // existingAttachments: ICourseAttachmentModel[] = [];
        this.files = [];
        this.removeFiles = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            attachmentTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            file: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.courseId > 0)
            this.getAll();
        else
            this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.courseAttachmentService
            .getAllByCourseId(this.courseId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // this.existingAttachments = res.data;
                this.files = [];
                res.data.forEach((attach) => {
                    this.files.push({
                        id: attach.id,
                        name: attach.en_Name,
                        path: "/" + attach.path,
                        size: attach.size,
                        type: attach.mime,
                    });
                });
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        this.removeFiles = false;
        // if (this.form.valid) {
        //   const model: ICourseAttachmentRequest = {
        //     files: this.formCtrls.file.value,
        //   };
        //   // console.log(model);
        //   const formData = HelpersFunctions.objectToFormData(model);
        //   let params: ICourseAttachmentParamsRequest = {
        //     courseID: this.courseId,
        //     AttachmentTypeID: this.formCtrls.attachmentTypeId.value,
        //   };
        //   this.create(formData, params);
        // } // else this.toastr.error("General.formNotValid");
    }
    // create(model: FormData, params: ICourseAttachmentParamsRequest) {
    //   this.showLoading();
    //   this.courseAttachmentService
    //     .create(model, params)
    //     .subscribe((res: IResponse<ICourseAttachmentModel>) => {
    //       if (res?.message?.messageType == MessageTypes.Success) {
    //         this.clearForm();
    //         this.addSuccessfullyMsg(res?.message?.messageTypeName);
    //         this.getAll();
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    afterCreate() {
        this.clearForm();
        this.getAll();
    }
    // onDelete(courseAttachment: ICourseAttachmentModel): void {
    //   console.log(courseAttachment);
    //   let msg = courseAttachment.en_Name;
    //   this.deleateDialog(msg).subscribe((confirm) => {
    //     if (confirm) this.delete(courseAttachment);
    //   });
    // }
    delete(attach) {
        if (attach.id) {
            this.showLoading();
            this.courseAttachmentService
                .Delete(attach.id)
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                    this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                    this.getAll();
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
        }
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
        this.removeFiles = true;
    }
    changeAddParams() {
        this.addAttachParams = {
            courseID: this.courseId,
            AttachmentTypeID: this.formCtrls.attachmentTypeId.value,
        };
    }
}
CourseAttachmentsComponent.ɵfac = function CourseAttachmentsComponent_Factory(t) { return new (t || CourseAttachmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_course_course_attachment_service__WEBPACK_IMPORTED_MODULE_2__.CourseAttachmentService)); };
CourseAttachmentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CourseAttachmentsComponent, selectors: [["app-course-attachments"]], inputs: { courseId: "courseId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 13, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "attachments"], [1, "container-fluid", "mtop-35"], [3, "formGroup"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "attachment_types", 3, "control", "submitted", "filter", "appendTo", "change"], ["url", "Training/Course/AddCourseAttachments", 3, "control", "submitted", "multiple", "existingFiles", "removeFiles", "params", "isFormValid", "disabled", "onsubmit", "afterupload", "ondelete"], [1, "col-md-8", "col-sm-6", "col-12"]], template: function CourseAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-card-content", 4)(9, "div", 0)(10, "div", 1)(11, "form", 5)(12, "div", 0)(13, "div", 6)(14, "app-attachment-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CourseAttachmentsComponent_Template_app_attachment_dropdown_change_14_listener() { return ctx.changeAddParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 1)(16, "primeng-file-upload", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onsubmit", function CourseAttachmentsComponent_Template_primeng_file_upload_onsubmit_16_listener() { return ctx.submit(); })("afterupload", function CourseAttachmentsComponent_Template_primeng_file_upload_afterupload_16_listener() { return ctx.afterCreate(); })("ondelete", function CourseAttachmentsComponent_Template_primeng_file_upload_ondelete_16_listener($event) { return ctx.delete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formCtrls.attachmentTypeId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formCtrls.file)("submitted", ctx.submitted)("multiple", false)("existingFiles", ctx.files)("removeFiles", ctx.removeFiles)("params", ctx.addAttachParams)("isFormValid", ctx.form.valid)("disabled", !ctx.courseId);
    } }, dependencies: [_shared_components_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__.FileUploadComponent, _shared_components_dropdowns_attachment_dropdown_attachment_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.AttachmentDropdownComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective], styles: [".p-overlay {\n  top: 52px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoiY291cnNlLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5wLW92ZXJsYXkge1xyXG4gIHRvcDogNTJweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 20246:
/*!*********************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/course-competence/course-competence.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseCompetenceComponent": () => (/* binding */ CourseCompetenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_training_mapper_course_competence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/course-competence */ 7128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_course_course_competence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course-competence.service */ 25711);
/* harmony import */ var app_org_management_services_competence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/competence.service */ 70410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_competence_dropdown_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/competence-dropdown/competence-dropdown.component */ 30094);
/* harmony import */ var _shared_components_dropdowns_competence_level_by_competence_dropdown_competence_level_by_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/competence-level-by-competence-dropdown/competence-level-by-competence-dropdown.component */ 63489);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);


















function CourseCompetenceComponent_app_material_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("deleteRow", function CourseCompetenceComponent_app_material_table_18_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r0.isLoaded)("dataSource", ctx_r0.dataSource)("mandatoryColomns", ctx_r0.mandatoryColomns)("optionalColomns", ctx_r0.optionalColomns)("actions", ctx_r0.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CourseCompetenceComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseCompetenceService, competenceService) {
        super();
        this.courseCompetenceService = courseCompetenceService;
        this.competenceService = competenceService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "competence",
            "competenceLevel",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            competenceId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            competenceLevelId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.courseId > 0)
            this.getAll();
        else
            this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.courseCompetenceService
            .getAllByCourseId(this.courseId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource((0,app_training_mapper_course_competence__WEBPACK_IMPORTED_MODULE_2__.courseCompetenceToDisplay)(res.data));
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                course_ID: this.courseId,
                competence_Detail_ID: 0,
            };
            this.getCompetenceDetailsId(model);
        } // else this.toastr.error("General.formNotValid");
    }
    getCompetenceDetailsId(model) {
        this.showLoading();
        this.competenceService
            .getDetailsByCompetenceAndLevelIds(this.form.value.competenceId, this.form.value.competenceLevelId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                // [this.levelDetails] = res.data.slice(-1);
                model.competence_Detail_ID = res.data[0].id;
                if (model.competence_Detail_ID > 0)
                    this.create(model);
            }
            else
                this.errorList(res.message.messages);
        });
    }
    create(model) {
        this.courseCompetenceService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onDelete(competence) {
        let msg = competence.competence + " - " + competence.competenceLevel;
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(competence);
        });
    }
    delete(competence) {
        let params = {
            CourseId: this.courseId,
            CompetenceDetailId: competence.competence_Detail_ID,
        };
        this.showLoading();
        this.courseCompetenceService.Delete(params).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
CourseCompetenceComponent.ɵfac = function CourseCompetenceComponent_Factory(t) { return new (t || CourseCompetenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_training_services_course_course_competence_service__WEBPACK_IMPORTED_MODULE_3__.CourseCompetenceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_org_management_services_competence_service__WEBPACK_IMPORTED_MODULE_4__.CompetenceService)); };
CourseCompetenceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CourseCompetenceComponent, selectors: [["app-course-competence"]], inputs: { courseId: "courseId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 12, consts: [[1, "row"], [1, "col-12"], ["title", "courseCompetence"], [1, "container-fluid", "mtop-35"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "competenceControl", "submitted", "filter"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "disabled", "color", "iconPositionBefore", "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "deleteRow", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "deleteRow"]], template: function CourseCompetenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-card-content", 3)(8, "div", 0)(9, "div", 1)(10, "form", 4)(11, "div", 0)(12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-competence-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "app-competence-level-by-competence-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-card-actions", 8)(17, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function CourseCompetenceComponent_Template_submit_btn_onClick_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CourseCompetenceComponent_app_material_table_18_Template, 1, 7, "app-material-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.competenceId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.competenceLevelId)("competenceControl", ctx.formCtrls.competenceId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.courseId)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.courseId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _shared_components_dropdowns_competence_dropdown_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.CompetenceDropdownComponent, _shared_components_dropdowns_competence_level_by_competence_dropdown_competence_level_by_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.CompetenceLevelByCompetenceDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtY29tcGV0ZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 32320:
/*!***************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/course-outline/course-outline.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseOutlineComponent": () => (/* binding */ CourseOutlineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-course-form/add-course-form.component */ 159);


class CourseOutlineComponent {
    constructor() { }
    ngOnInit() { }
}
CourseOutlineComponent.ɵfac = function CourseOutlineComponent_Factory(t) { return new (t || CourseOutlineComponent)(); };
CourseOutlineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseOutlineComponent, selectors: [["app-course-outline"]], inputs: { courseId: "courseId" }, decls: 1, vars: 1, consts: [[3, "isOutline"]], template: function CourseOutlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-add-course-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOutline", true);
    } }, dependencies: [_add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_0__.AddCourseFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2Utb3V0bGluZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 15894:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/course-tsp-and-instructor/course-tsp-and-instructor.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseTspAndInstructorComponent": () => (/* binding */ CourseTspAndInstructorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/tsp-dropdown/tsp-dropdown.component */ 30928);
/* harmony import */ var _shared_components_dropdowns_istructor_dropdown_istructor_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/istructor-dropdown/istructor-dropdown.component */ 63953);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);











class CourseTspAndInstructorComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            tsp_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            intstrucor_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
    }
}
CourseTspAndInstructorComponent.ɵfac = function CourseTspAndInstructorComponent_Factory(t) { return new (t || CourseTspAndInstructorComponent)(); };
CourseTspAndInstructorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CourseTspAndInstructorComponent, selectors: [["app-course-tsp-and-instructor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 11, consts: [[1, "row"], [1, "col-12"], [3, "formGroup"], ["title", "TSP"], [1, "mt-2"], [1, "container-fluid", "mtop-35"], [1, "col-md-4", "col-12"], [3, "control", "multi", "filter", "submitted"], [1, "row", "mt-3"], ["title", "instructors"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "color", "iconPositionBefore", "onClick"]], template: function CourseTspAndInstructorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "form", 2)(4, "div", 0)(5, "div", 1)(6, "mat-card")(7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card-content", 5)(11, "div", 0)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "app-tsp-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8)(15, "div", 1)(16, "mat-card")(17, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "page-title", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-card-content", 5)(21, "div", 0)(22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-istructor-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-card-actions", 10)(25, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function CourseTspAndInstructorComponent_Template_submit_btn_onClick_25_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.formCtrls.tsp_id)("multi", true)("filter", true)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.formCtrls.tsp_id)("multi", true)("filter", true)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx.btn.darkBlue)("iconPositionBefore", false);
    } }, dependencies: [_shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _shared_components_dropdowns_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.TspDropdownComponent, _shared_components_dropdowns_istructor_dropdown_istructor_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.IstructorDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtdHNwLWFuZC1pbnN0cnVjdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93919:
/*!*************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/general/general.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralComponent": () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-course-form/add-course-form.component */ 159);


class GeneralComponent {
    constructor() {
        this.courseId = 0;
    }
    ngOnInit() { }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(); };
GeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 1, vars: 1, consts: [[3, "isGeneral", "changeCourseId"]], template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-add-course-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeCourseId", function GeneralComponent_Template_app_add_course_form_changeCourseId_0_listener() { return ctx.courseId; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isGeneral", true);
    } }, dependencies: [_add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_0__.AddCourseFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45052:
/*!************************************************************************************!*\
  !*** ./src/app/training/components/courses/course-index/course-index.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseIndexComponent": () => (/* binding */ CourseIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/course */ 98949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course.service */ 15881);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);










class CourseIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseService) {
        super();
        this.courseService = courseService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "courseCode",
            "ar_Name",
            "en_Name",
            "abbrevation",
            "courseCategory",
            "courseType",
            "actions",
        ];
        this.optionalColomns = [
            "id",
            "isFree",
            "courseValue",
            "isHolding",
            "holdingYears",
            "courseValue",
            "penalty",
            "threeMontheEvalution",
            "isFree",
            "sixMontheEvalution",
        ];
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.courseService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__.courseToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    delete(course) {
        this.courseService.Delete(course.id).subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                this.deleteSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onDelete(course) {
        let msg = this.msgTranslate(course.ar_Name, course.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(course);
        });
    }
}
CourseIndexComponent.ɵfac = function CourseIndexComponent_Factory(t) { return new (t || CourseIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService)); };
CourseIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CourseIndexComponent, selectors: [["app-course-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [["title", "courses", 1, "mb-10", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function CourseIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-content")(5, "app-material-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function CourseIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function CourseIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.courseService);
    } }, dependencies: [_shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 73507:
/*!**************************************************************************!*\
  !*** ./src/app/training/components/tsp/tsp-index/tsp-index.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TspIndexComponent": () => (/* binding */ TspIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_tsp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/tsp.service */ 82223);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);









class TspIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(tspService) {
        super();
        this.tspService = tspService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "ar_Name",
            "en_Name",
            "email",
            "mobile",
            "actions",
        ];
        this.optionalColomns = [
            "breif_Name",
            "address",
            "location",
            "webSite_URL",
            "phone",
            "fax",
            "contactPersonName",
            "contactPersonEmail",
            "contactPersonMobile",
            "contactPersonPhone",
            "i_M_C_Code",
            "note",
        ];
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.tspService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    delete(model) {
        this.tspService.Delete(model.id).subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                this.deleteSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onDelete(model) {
        let msg = this.msgTranslate(model.ar_Name, model.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(model);
        });
    }
}
TspIndexComponent.ɵfac = function TspIndexComponent_Factory(t) { return new (t || TspIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_training_services_tsp_service__WEBPACK_IMPORTED_MODULE_2__.TspService)); };
TspIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TspIndexComponent, selectors: [["app-tsp-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [["title", "TSP", 1, "mb-10", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function TspIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-content")(5, "app-material-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function TspIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TspIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.tspService);
    } }, dependencies: [_shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0c3AtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7128:
/*!******************************************************!*\
  !*** ./src/app/training/mapper/course-competence.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "courseCompetenceToDisplay": () => (/* binding */ courseCompetenceToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function courseCompetenceToDisplay(jobCareers) {
    return jobCareers.map((courseCompetence) => {
        return {
            ...courseCompetence,
            competence: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(courseCompetence.core_Competence_Detail?.core_Competence?.ar_Name, courseCompetence.core_Competence_Detail?.core_Competence?.en_Name),
            competenceLevel: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(courseCompetence.core_Competence_Detail?.core_Competence_Level?.ar_Name, courseCompetence.core_Competence_Detail?.core_Competence_Level?.en_Name),
        };
    });
}


/***/ }),

/***/ 48294:
/*!***********************************************************************!*\
  !*** ./src/app/training/services/course/course-attachment.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseAttachmentService": () => (/* binding */ CourseAttachmentService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CourseAttachmentService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    // FormData > ICourseAttachmentRequest
    create(data, params) {
        return this.post("Training/Course/AddCourseAttachments", data, {
            params: params,
        });
    }
    getAllByCourseId(courseId) {
        return this.get("Training/Course/GetAllCourseAttachments", {
            params: {
                courseID: courseId,
            },
        });
    }
    Delete(id) {
        return this.delete("Training/Course/DeleteCourseAttachments", {
            params: { AttachmentID: id },
        });
    }
}
CourseAttachmentService.ɵfac = function CourseAttachmentService_Factory(t) { return new (t || CourseAttachmentService)(); };
CourseAttachmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CourseAttachmentService, factory: CourseAttachmentService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 25711:
/*!***********************************************************************!*\
  !*** ./src/app/training/services/course/course-competence.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseCompetenceService": () => (/* binding */ CourseCompetenceService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class CourseCompetenceService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Training/course/AddCompetenceDetailToCourse", data);
    }
    getAllByCourseId(courseId) {
        return this.get("Training/Course/GetAllCourseCompetenceData", {
            params: {
                $filter: `course_id eq ${courseId}`,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Competence_Detail}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Competence},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Competence_Detail}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Competence_Level}`,
            },
        });
    }
    Delete(params) {
        return this.delete("Training/Course/DeleteCourseCompetenceDetail", {
            params: params,
        });
    }
}
CourseCompetenceService.ɵfac = function CourseCompetenceService_Factory(t) { return new (t || CourseCompetenceService)(); };
CourseCompetenceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CourseCompetenceService, factory: CourseCompetenceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 94343:
/*!********************************************************************!*\
  !*** ./src/app/training/services/course/course-general.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseGeneralService": () => (/* binding */ CourseGeneralService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CourseGeneralService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Training/Course/Create", data);
    }
    update(data) {
        return this.post("Training/Course/Edit", data);
    }
}
CourseGeneralService.ɵfac = function CourseGeneralService_Factory(t) { return new (t || CourseGeneralService)(); };
CourseGeneralService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CourseGeneralService, factory: CourseGeneralService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 11436:
/*!*****************************************************!*\
  !*** ./src/app/training/training-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingRoutingModule": () => (/* binding */ TrainingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/training/components/courses/course-index/course-index.component */ 45052);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/courses/add-course/add-course-index/add-course.component */ 51103);
/* harmony import */ var _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tsp/tsp-index/tsp-index.component */ 73507);
/* harmony import */ var _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tsp/add-tsp/add-tsp.component */ 25646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.course,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.course },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: app_training_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__.CourseIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.course_index },
            },
            {
                path: "add",
                component: _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_3__.AddCourseComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_course },
            },
            {
                path: "edit/:id",
                component: _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_3__.AddCourseComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_course },
            },
        ],
    },
    {
        path: "tsp",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.tsp_index },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_4__.TspIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.tsp_index },
            },
            {
                path: "add",
                component: _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_5__.AddTspComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_tsp },
            },
            {
                path: "edit/:id",
                component: _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_5__.AddTspComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_tsp },
            },
        ],
    },
];
class TrainingRoutingModule {
}
TrainingRoutingModule.ɵfac = function TrainingRoutingModule_Factory(t) { return new (t || TrainingRoutingModule)(); };
TrainingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TrainingRoutingModule });
TrainingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 447:
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingModule": () => (/* binding */ TrainingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-routing.module */ 11436);
/* harmony import */ var _components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/courses/course-index/course-index.component */ 45052);
/* harmony import */ var _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/courses/add-course/add-course-index/add-course.component */ 51103);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_courses_add_course_general_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/courses/add-course/general/general.component */ 93919);
/* harmony import */ var _components_courses_add_course_course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/courses/add-course/course-competence/course-competence.component */ 20246);
/* harmony import */ var _components_courses_add_course_course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/courses/add-course/course-outline/course-outline.component */ 32320);
/* harmony import */ var _components_courses_add_course_course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/courses/add-course/course-attachments/course-attachments.component */ 10352);
/* harmony import */ var _components_courses_add_course_course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/courses/add-course/course-tsp-and-instructor/course-tsp-and-instructor.component */ 15894);
/* harmony import */ var _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tsp/add-tsp/add-tsp.component */ 25646);
/* harmony import */ var _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tsp/tsp-index/tsp-index.component */ 73507);
/* harmony import */ var _components_courses_add_course_add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/courses/add-course/add-course-form/add-course-form.component */ 159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);














class TrainingModule {
}
TrainingModule.ɵfac = function TrainingModule_Factory(t) { return new (t || TrainingModule)(); };
TrainingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: TrainingModule });
TrainingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](TrainingModule, { declarations: [_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__.CourseIndexComponent,
        _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_2__.AddCourseComponent,
        _components_courses_add_course_general_general_component__WEBPACK_IMPORTED_MODULE_4__.GeneralComponent,
        _components_courses_add_course_course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_5__.CourseCompetenceComponent,
        _components_courses_add_course_course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_6__.CourseOutlineComponent,
        _components_courses_add_course_course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_7__.CourseAttachmentsComponent,
        _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_9__.AddTspComponent,
        _components_courses_add_course_course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_8__.CourseTspAndInstructorComponent,
        _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_10__.TspIndexComponent,
        _components_courses_add_course_add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_11__.AddCourseFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_training_training_module_ts.js.map