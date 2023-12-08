"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_training_training_module_ts"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/buttons/button/button.component */ 37671);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/steps */ 72420);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/general.component */ 93919);
/* harmony import */ var _course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-competence/course-competence.component */ 20246);
/* harmony import */ var _course_review_course_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-review/course-review.component */ 51188);
/* harmony import */ var _course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../course-outline/course-outline.component */ 32320);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












function AddCourseComponent_app_general_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-general");
} }
function AddCourseComponent_app_course_competence_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-course-competence", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("courseId", ctx_r1.courseId);
} }
function AddCourseComponent_app_course_outline_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-course-outline", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("courseId", ctx_r2.courseId);
} }
function AddCourseComponent_app_course_review_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-course-review");
} }
function AddCourseComponent_app_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_app_button_13_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.back()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r4.languageService.isArabic ? "ft-chevron-right font-size-20" : "ft-chevron-left font-size-20")("color", ctx_r4.btn.light)("decreasePaddingWithIcon", true)("params", ctx_r4.parantParam);
} }
function AddCourseComponent_app_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_app_button_14_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r5.languageService.isArabic ? "ft-chevron-left font-size-20" : "ft-chevron-right font-size-20")("iconPositionBefore", false)("color", ctx_r5.btn.darkBlue)("decreasePaddingWithIcon", true)("params", ctx_r5.parantParam);
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
            },
            {
                label: "Course Competence",
            },
            {
                label: "Outline & Attachments",
            },
            {
                label: "Review",
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
AddCourseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AddCourseComponent, selectors: [["app-add-course"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 18, consts: [[3, "url", "params"], [3, "model", "activeIndex", "styleClass", "activeIndexChange"], [4, "ngIf"], [3, "courseId", 4, "ngIf"], ["align", "end", 1, "border"], ["label", "General.back", 3, "icon", "color", "decreasePaddingWithIcon", "params", "click", 4, "ngIf"], ["label", "General.next", 3, "icon", "iconPositionBefore", "color", "decreasePaddingWithIcon", "params", "click", 4, "ngIf"], [3, "courseId"], ["label", "General.back", 3, "icon", "color", "decreasePaddingWithIcon", "params", "click"], ["label", "General.next", 3, "icon", "iconPositionBefore", "color", "decreasePaddingWithIcon", "params", "click"]], template: function AddCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-back-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content")(7, "p-steps", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("activeIndexChange", function AddCourseComponent_Template_p_steps_activeIndexChange_7_listener($event) { return ctx.activeIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AddCourseComponent_app_general_8_Template, 1, 0, "app-general", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AddCourseComponent_app_course_competence_9_Template, 1, 1, "app-course-competence", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AddCourseComponent_app_course_outline_10_Template, 1, 1, "app-course-outline", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AddCourseComponent_app_course_review_11_Template, 1, 0, "app-course-review", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AddCourseComponent_app_button_13_Template, 1, 4, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AddCourseComponent_app_button_14_Template, 1, 5, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 16, "addCourse")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/course/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("styleClass", "completed-" + ctx.activeIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeIndex == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeIndex == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", "#FFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeIndex > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeIndex < ctx.items.length - 1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__.BackBtnComponent, _shared_components_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, primeng_steps__WEBPACK_IMPORTED_MODULE_10__.Steps, _general_general_component__WEBPACK_IMPORTED_MODULE_3__.GeneralComponent, _course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_4__.CourseCompetenceComponent, _course_review_course_review_component__WEBPACK_IMPORTED_MODULE_5__.CourseReviewComponent, _course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_6__.CourseOutlineComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".mat-card-title {\n  margin: 0 !important;\n}\n  .mat-card-title #back_btn {\n  margin-top: -3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7RUFDRSwyQkFBQTtBQUVKIiwiZmlsZSI6ImFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAjYmFja19idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _shared_components_dropdowns_attachment_dropdown_attachment_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/attachment-dropdown/attachment-dropdown.component */ 58042);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
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
    }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNullable: true }],
            attachmentTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            attachment: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
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
                // this.form.patchValue(res.data);
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
                attachmentTypeId: this.formCtrls.attachmentTypeId.value,
                attachment: this.formCtrls.attachment.value,
                courseID: this.courseId,
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.courseAttachmentService
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
    onDelete(courseAttachment) {
        let msg = this.msgTranslate(courseAttachment.attachmentType);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(courseAttachment);
        });
    }
    delete(courseAttachment) {
        // let params: ICourseAttachmentDeleteRequest = {
        //   CourseId: this.courseId,
        //   ComDetailsId: courseAttachment.competencE_Detail_ID,
        // };
        this.showLoading();
        this.courseAttachmentService
            .Delete(courseAttachment.id)
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
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
CourseAttachmentsComponent.ɵfac = function CourseAttachmentsComponent_Factory(t) { return new (t || CourseAttachmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_course_course_attachment_service__WEBPACK_IMPORTED_MODULE_2__.CourseAttachmentService)); };
CourseAttachmentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CourseAttachmentsComponent, selectors: [["app-course-attachments"]], inputs: { courseId: "courseId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 8, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "attachments"], [1, "container-fluid", "mtop-35"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "formGroup"], ["label", "attachment_types", 3, "control", "submitted", "filter", "appendTo"], [1, "col-md-8", "col-sm-6", "col-12"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "disabled", "color", "iconPositionBefore", "onClick"]], template: function CourseAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-card-content", 4)(9, "div", 0)(10, "div", 5)(11, "form", 6)(12, "div", 0)(13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "app-attachment-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-card-actions", 9)(17, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function CourseAttachmentsComponent_Template_submit_btn_onClick_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formCtrls.attachmentTypeId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.courseId)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
    } }, dependencies: [_shared_components_dropdowns_attachment_dropdown_attachment_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.AttachmentDropdownComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_4__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective], styles: [".p-overlay {\n  top: 52px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoiY291cnNlLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5wLW92ZXJsYXkge1xyXG4gIHRvcDogNTJweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/course */ 98949);
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource((0,app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__.courseCompetenceToDisplay)(res.data));
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _shared_components_dropdowns_competence_dropdown_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.CompetenceDropdownComponent, _shared_components_dropdowns_competence_level_by_competence_dropdown_competence_level_by_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.CompetenceLevelByCompetenceDropdownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtY29tcGV0ZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_course_course_outline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/course/course-outline.service */ 37216);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dynamic_form_field_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/text-editor/text-editor.component */ 27861);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../course-attachments/course-attachments.component */ 10352);













class CourseOutlineComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseOutlineService) {
        super();
        this.courseOutlineService = courseOutlineService;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNullable: true }],
            outline: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            outlinedesc: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.courseId > 0)
            this.getAll();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.courseOutlineService
            .getAllByCourseId(this.courseId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.form.patchValue(res.data);
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
                outline: this.form.value.outline,
                outlinedesc: this.form.value.outlinedesc,
                courseID: this.courseId,
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.courseOutlineService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
CourseOutlineComponent.ɵfac = function CourseOutlineComponent_Factory(t) { return new (t || CourseOutlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_training_services_course_course_outline_service__WEBPACK_IMPORTED_MODULE_2__.CourseOutlineService)); };
CourseOutlineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CourseOutlineComponent, selectors: [["app-course-outline"]], inputs: { courseId: "courseId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 11, consts: [[1, "row", "mbottom-30"], ["editorContainer", ""], [1, "col-12"], ["title", "outLine"], [1, "container-fluid", "mtop-35"], [1, "row"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "description", 3, "control", "submitted", "bounds"], ["label", "outLine", 3, "control", "submitted", "bounds"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "disabled", "color", "iconPositionBefore", "onClick"], [3, "courseId"]], template: function CourseOutlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0, 1)(3, "div", 2)(4, "mat-card")(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-card-content", 4)(9, "div", 5)(10, "div", 2)(11, "form", 6)(12, "div", 5)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-text-editor", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-text-editor", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-card-actions", 10)(18, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function CourseOutlineComponent_Template_submit_btn_onClick_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-course-attachments", 12);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.outlinedesc)("submitted", ctx.submitted)("bounds", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.outline)("submitted", ctx.submitted)("bounds", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.courseId)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("courseId", ctx.courseId);
    } }, dependencies: [_shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_3__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_dynamic_form_field_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_5__.TextEditorComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_6__.CourseAttachmentsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2Utb3V0bGluZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 51188:
/*!*************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/course-review/course-review.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseReviewComponent": () => (/* binding */ CourseReviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CourseReviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourseReviewComponent.ɵfac = function CourseReviewComponent_Factory(t) { return new (t || CourseReviewComponent)(); };
CourseReviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseReviewComponent, selectors: [["app-course-review"]], decls: 2, vars: 0, template: function CourseReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "course-review works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course-general.service */ 94343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dynamic_form_field_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/slide-toggle/slide-toggle.component */ 48839);
/* harmony import */ var _shared_components_dynamic_form_field_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dynamic-form-field/slider/slider.component */ 20945);
/* harmony import */ var _shared_components_dropdowns_course_type_dropdown_course_type_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/course-type-dropdown/course-type-dropdown.component */ 8329);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function GeneralComponent_div_55_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TRACourseHoldingYears_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", TRACourseHoldingYears_r2.controls.Percentage)("submitted", ctx_r1.submitted)("label", "year " + (i_r3 + 1));
} }
function GeneralComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 26)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, GeneralComponent_div_55_div_6_Template, 2, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 4, "holdingYear")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.TRACourseHoldingYears.controls);
} }
const _c0 = function (a0, a1) { return { rightFree: a0, leftFree: a1 }; };
class GeneralComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseGeneralService) {
        super();
        this.courseGeneralService = courseGeneralService;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            Ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            En_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            Code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            Abbrevation: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.Length(10),
                ],
            ],
            Course_Category_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            Course_Type_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            IsFree: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            IsHolding: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            CourseValue: [null],
            HoldingYears: [null],
            Penalty: [null],
            SixMontheEvalution: [false],
            ThreeMontheEvalution: [false],
            Note: [""],
            TRA_Course_Holding_Years: this.fb.array([]),
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    get TRACourseHoldingYears() {
        return this.form.controls["TRA_Course_Holding_Years"];
    }
    getTRACourseHoldingYearsList(event) {
        let length = event;
        this.TRACourseHoldingYears.clear();
        for (var i = 0; i < length; i++) {
            let TRACourseHoldingYear = this.fb.group({
                Holding_Year: [i + 1],
                Percentage: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            });
            this.TRACourseHoldingYears.push(TRACourseHoldingYear);
        }
        console.log(this.TRACourseHoldingYears.controls);
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            let data = {};
            data.Ar_Name = this.formCtrls.Ar_Name.value;
            data.En_Name = this.formCtrls.En_Name.value;
            data.Course_Type_ID = this.formCtrls.Course_Type_ID.value;
            data.Course_Category_ID = this.formCtrls.Course_Category_ID.value;
            data.Code = this.formCtrls.Code.value;
            data.Note = this.formCtrls.Note.value;
            data.Abbrevation = this.formCtrls.Abbrevation.value;
            data.IsFree = this.formCtrls.IsFree.value == true ? 1 : 2;
            data.CourseValue = this.formCtrls.CourseValue.value;
            data.IsHolding = this.formCtrls.IsHolding.value == true ? 2 : 1;
            data.HoldingYears = this.formCtrls.HoldingYears.value;
            data.Penalty = this.formCtrls.Penalty.value;
            data.ThreeMontheEvalution = this.formCtrls.ThreeMontheEvalution.value;
            data.SixMontheEvalution = this.formCtrls.SixMontheEvalution.value;
            data.TRA_Course_Holding_Years = [];
            if (data.Penalty != null) {
                this.totalPrecentage = 0;
                this.TRACourseHoldingYears.controls.forEach((e) => {
                    let Holding_Year = {};
                    Holding_Year.Holding_Year = e.value.Holding_Year;
                    Holding_Year.Percentage = e.value.Percentage;
                    data.TRA_Course_Holding_Years.push(Holding_Year);
                    this.totalPrecentage += e.value.Percentage;
                });
                console.log('totalPrecentage', this.totalPrecentage);
                if (this.totalPrecentage != data.Penalty) {
                    document.getElementById("persentageMessage").innerText =
                        "total of percentage must be equal penalety persentage";
                    return;
                }
            }
            this.create(data);
        }
    }
    create(model) {
        this.showLoading();
        this.courseGeneralService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
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
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onHoldingchange() {
        if (this.formCtrls.IsHolding.value) {
            this.formCtrls.HoldingYears.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.formCtrls.Penalty.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
        }
        else {
            this.formCtrls.HoldingYears.setValidators(null);
            this.formCtrls.Penalty.setValidators(null);
            this.formCtrls.HoldingYears.setValue(null);
            this.formCtrls.Penalty.setValue(null);
            this.TRACourseHoldingYears.clear();
        }
    }
    onFreechange() {
        if (!this.formCtrls.IsFree.value) {
            this.formCtrls.CourseValue.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.formCtrls.CourseValue.setValue(null);
        }
        else {
            this.formCtrls.CourseValue.clearValidators();
        }
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_3__.CourseGeneralService)); };
GeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 72, vars: 55, consts: [[1, "row"], [1, "col-12"], [3, "formGroup"], ["title", "generalInfo"], [1, "container-fluid"], [1, "col-md-4", "col-12"], ["label", "courseCode", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], ["label", "abbreviation", 3, "control", "submitted"], ["label", "courseCategory", "filter", "true", 3, "control", "submitted"], ["label", "courseType", "filter", "true", 3, "control", "submitted"], [1, "row", "mt-3"], ["title", "pricingAndholding"], [1, "col-md-3", "col-12", 3, "ngClass"], [1, "mb-3", 3, "control", "onChange"], [3, "control", "disabled", "submitted"], [1, "col-md-3", "col-12"], ["label", "holdingYear", "type", "number", 3, "control", "submitted", "disabled", "keyUp", "change"], ["class", "col-md-6 col-12 division", 4, "ngIf"], ["title", "evaluation"], ["label", "evreyThreeMonths", 3, "control"], ["label", "evreySixMonths", 3, "control"], ["label", "note", 3, "control", "submitted"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "color", "iconPositionBefore", "onClick"], [1, "col-md-6", "col-12", "division"], ["class", "col-md-6 col-12", 4, "ngFor", "ngForOf"], ["id", "persentageMessage", 1, "text-danger", "m-2"], [1, "col-md-6", "col-12"], ["type", "number", 3, "control", "submitted", "label"]], template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "form", 2)(4, "div", 0)(5, "div", 1)(6, "mat-card")(7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "page-title", 3)(9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-card-content", 4)(11, "div", 0)(12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "app-course-type-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "app-course-type-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 12)(25, "div", 1)(26, "mat-card")(27, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "page-title", 13)(29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "mat-card-content", 4)(31, "div", 0)(32, "div", 14)(33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "slide-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChange", function GeneralComponent_Template_slide_toggle_onChange_37_listener() { return ctx.onFreechange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 17)(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](46, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "slide-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChange", function GeneralComponent_Template_slide_toggle_onChange_48_listener() { return ctx.onHoldingchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "app-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyUp", function GeneralComponent_Template_app_input_keyUp_49_listener($event) { return ctx.getTRACourseHoldingYearsList($event); })("change", function GeneralComponent_Template_app_input_change_49_listener($event) { return ctx.getTRACourseHoldingYearsList($event == null ? null : $event.target == null ? null : $event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](52, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, GeneralComponent_div_55_Template, 8, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "div", 12)(57, "div", 1)(58, "mat-card")(59, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "page-title", 20)(61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "mat-card-content", 4)(63, "div", 0)(64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "app-check-box", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](67, "app-check-box", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](69, "app-input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "mat-card-actions", 24)(71, "submit-btn", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function GeneralComponent_Template_submit_btn_onClick_71_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Code)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.En_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Abbrevation)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Course_Category_ID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Course_Type_ID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](52, _c0, ctx.languageService.isEnglish, ctx.languageService.isArabic));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 36, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](36, 38, "free")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.IsFree);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 40, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](41, 42, "coursePercentege")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.CourseValue)("disabled", ctx.formCtrls.IsFree.value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](46, 44, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](47, 46, "holding")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.IsHolding);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.HoldingYears)("submitted", ctx.submitted)("disabled", !ctx.formCtrls.IsHolding.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](52, 48, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](53, 50, "penaletyPercentege")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Penalty)("disabled", !ctx.formCtrls.IsHolding.value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.HoldingYears.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.ThreeMontheEvalution);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.SixMontheEvalution);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx.btn.darkBlue)("iconPositionBefore", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__.CheckBoxComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _shared_components_dynamic_form_field_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_8__.SlideToggleComponent, _shared_components_dynamic_form_field_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__.SliderComponent, _shared_components_dropdowns_course_type_dropdown_course_type_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.CourseTypeDropdownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".division[_ngcontent-%COMP%] {\n  border: 1px dotted #b9b4b4;\n  border-radius: 20px;\n}\n\n.rightFree[_ngcontent-%COMP%] {\n  border-right: 1px solid #b9b4b4;\n}\n\n.leftFree[_ngcontent-%COMP%] {\n  border-left: 1px solid #b9b4b4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kaXZpc2lvbntcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgICAjYjliNGI0O1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxufVxyXG4ucmlnaHRGcmVle1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiOWI0YjQ7XHJcblxyXG59XHJcbi5sZWZ0RnJlZXtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiOWI0YjQ7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });


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
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/bank-dropdown/bank-dropdown.component */ 75968);
/* harmony import */ var _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/buttons/add-new-btn/add-new-btn.component */ 18825);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dynamic_form_field_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/slide-toggle/slide-toggle.component */ 48839);
/* harmony import */ var _shared_components_dynamic_form_field_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/slider/slider.component */ 20945);













class CourseIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        console.log(this.globalFunctions);
    }
    ngOnInit() {
        this.form = this.fb.group({
            name2: [, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,],
            name: [, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,],
            bankId: [, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    clearForm() {
        this.form.reset();
    }
}
CourseIndexComponent.ɵfac = function CourseIndexComponent_Factory(t) { return new (t || CourseIndexComponent)(); };
CourseIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: CourseIndexComponent, selectors: [["app-course-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 12, consts: [["title", "bankInfo"], ["addTitle", "nationality", "editTitle", "editNationality", 3, "id", "globalFunctions"], ["label", "label 1", "type", "number", 3, "control"], [3, "control"], [3, "url", "params"], ["label", "addCourse", 3, "url", "params"], ["label", "Next", 3, "color"], [3, "click"], ["filter", "true", 3, "control"]], template: function CourseIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "page-title", 0)(1, "page-title", 1)(2, "app-input", 2)(3, "app-check-box", 3)(4, "app-back-btn", 4)(5, "app-add-new-btn", 5)(6, "submit-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "reset-form-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CourseIndexComponent_Template_reset_form_btn_click_7_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "app-bank-dropdown", 8)(9, "slider", 3)(10, "slide-toggle", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", 1)("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.name2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/course/bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/course/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", ctx.parantParam);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx.btn.darkBlue);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.bankId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.bankId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.bankId);
    } }, dependencies: [_shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_2__.CheckBoxComponent, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_3__.BackBtnComponent, _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.BankDropdownComponent, _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_5__.AddNewBtnComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _shared_components_dynamic_form_field_slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_9__.SlideToggleComponent, _shared_components_dynamic_form_field_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__.SliderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 98949:
/*!*******************************************!*\
  !*** ./src/app/training/mapper/course.ts ***!
  \*******************************************/
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
    create(data) {
        return this.post("Training/Course/Create", data);
    }
    getAllByCourseId(courseId) {
        return this.get("Training/Course/GetAll", {
            params: {
                $filter: `courseId eq ${courseId}`,
            },
        });
    }
    Delete(id) {
        return this.delete("Training/Course/Delete", {
            params: { id: id },
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

/***/ 37216:
/*!********************************************************************!*\
  !*** ./src/app/training/services/course/course-outline.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseOutlineService": () => (/* binding */ CourseOutlineService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CourseOutlineService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Training/CourseOutline/Create", data);
    }
    getAllByCourseId(courseId) {
        return this.get("Training/CourseOutline/GetAll", {
            params: {
                $filter: `courseID eq ${courseId}`,
            },
        });
    }
}
CourseOutlineService.ɵfac = function CourseOutlineService_Factory(t) { return new (t || CourseOutlineService)(); };
CourseOutlineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CourseOutlineService, factory: CourseOutlineService.ɵfac, providedIn: "root" });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/training/components/courses/course-index/course-index.component */ 45052);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/courses/add-course/add-course-index/add-course.component */ 51103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







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
];
class TrainingRoutingModule {
}
TrainingRoutingModule.ɵfac = function TrainingRoutingModule_Factory(t) { return new (t || TrainingRoutingModule)(); };
TrainingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TrainingRoutingModule });
TrainingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-routing.module */ 11436);
/* harmony import */ var _components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/courses/course-index/course-index.component */ 45052);
/* harmony import */ var _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/courses/add-course/add-course-index/add-course.component */ 51103);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_courses_add_course_general_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/courses/add-course/general/general.component */ 93919);
/* harmony import */ var _components_courses_add_course_course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/courses/add-course/course-competence/course-competence.component */ 20246);
/* harmony import */ var _components_courses_add_course_course_review_course_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/courses/add-course/course-review/course-review.component */ 51188);
/* harmony import */ var _components_courses_add_course_course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/courses/add-course/course-outline/course-outline.component */ 32320);
/* harmony import */ var _components_courses_add_course_course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/courses/add-course/course-attachments/course-attachments.component */ 10352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);











class TrainingModule {
}
TrainingModule.ɵfac = function TrainingModule_Factory(t) { return new (t || TrainingModule)(); };
TrainingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TrainingModule });
TrainingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TrainingModule, { declarations: [_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__.CourseIndexComponent,
        _components_courses_add_course_add_course_index_add_course_component__WEBPACK_IMPORTED_MODULE_2__.AddCourseComponent,
        _components_courses_add_course_general_general_component__WEBPACK_IMPORTED_MODULE_4__.GeneralComponent,
        _components_courses_add_course_course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_5__.CourseCompetenceComponent,
        _components_courses_add_course_course_review_course_review_component__WEBPACK_IMPORTED_MODULE_6__.CourseReviewComponent,
        _components_courses_add_course_course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_7__.CourseOutlineComponent,
        _components_courses_add_course_course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_8__.CourseAttachmentsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_training_training_module_ts.js.map