"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_training_training_module_ts"],{

/***/ 3710:
/*!********************************************************!*\
  !*** ./src/app/shared/Guards/check-is-allowd.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckIsViewAllowedGuard": () => (/* binding */ CheckIsViewAllowedGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/loading.service */ 67579);
/* harmony import */ var app_auth_services_user_views_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/auth/services/user-views.service */ 24280);





class CheckIsViewAllowedGuard {
    constructor(viewsService) {
        this.viewsService = viewsService;
        this.loadingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService);
        this.UserModules = this.viewsService.UserModules$.getValue();
        this.loading = document.getElementById("page-loading");
    }
    canActivate(route, state) {
        return true;
        // un comment code for used
        // let view = route.data?.view;
        // this.showLoading();
        // if (this.UserModules?.length > 0) {
        //   if (!this.viewsService.isViewAllowed(view)) {
        //     this.router.navigateByUrl("/auth/access-denied");
        //     this.hideLoading();
        //   }
        //   else {
        //     this.hideLoading();
        //     return true;
        //   }
        // }
        //
        // else {
        //   this.viewsService.UserModules$.subscribe((val) => {
        //     if (val?.length > 0) {
        //       if (!this.viewsService.isViewAllowed(view)) {
        //         this.router.navigateByUrl("/auth/access-denied");
        //         this.hideLoading();
        //       }
        //       else {
        //         this.hideLoading();
        //         return true;
        //       }
        //     }
        //   });
        // }
    }
    showLoading() {
        this.loading.style.display = "block";
        this.loading.style.opacity = "1";
        this.loading.style.zIndex = "998";
    }
    hideLoading() {
        this.loading.style.display = "none";
        this.loading.style.opacity = "0";
        this.loading.style.zIndex = "0";
    }
}
CheckIsViewAllowedGuard.ɵfac = function CheckIsViewAllowedGuard_Factory(t) { return new (t || CheckIsViewAllowedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_auth_services_user_views_service__WEBPACK_IMPORTED_MODULE_1__.UserViewsService)); };
CheckIsViewAllowedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CheckIsViewAllowedGuard, factory: CheckIsViewAllowedGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 87078:
/*!************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/add-course-core/add-course.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCourseComponent": () => (/* binding */ AddCourseComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/course */ 98949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course.service */ 15881);
/* harmony import */ var app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/course/course-general.service */ 94343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/steps-footer/steps-footer.component */ 20957);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course-competence/course-competence.component */ 20246);
/* harmony import */ var _course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../course-tsp-and-instructor/course-tsp-and-instructor.component */ 15894);
/* harmony import */ var _add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-course-form/add-course-form.component */ 159);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















const _c0 = ["stepper"];
function AddCourseComponent_app_add_new_btn_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-add-new-btn", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r0.moduleId, "/course/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddCourseComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 14);
} }
function AddCourseComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 14);
} }
function AddCourseComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 14);
} }
function AddCourseComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 14);
} }
class AddCourseComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseService, courseGeneralService) {
        super();
        this.courseService = courseService;
        this.courseGeneralService = courseGeneralService;
        this.courseId = 0;
        this.isloaded = false;
        this.isGeneraCompleted = false;
        this.isTspInstructor = false;
        this.isCompetence = false;
        this.isOutline = false;
        this.courseGeneralService.course$.next(null);
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.courseId = Number(params.get("id")) ?? 0;
        });
        // this.loadStepItems();
        // this.translateService.onLangChange.subscribe((lang) =>
        //   this.loadStepItems()
        // );
        if (this.courseId > 0 && this.checkNoBusinessOrCompany()) {
            this.getCourseById();
        }
        else
            this.isloaded = true;
    }
    // ngAfterViewInit() {
    //   this.stepper._getIndicatorType = () => "number";
    // }
    // loadStepItems() {
    //   this.items = [
    //     {
    //       label: this.translateService.instant("general"),
    //     },
    //     {
    //       label: this.translateService.instant("tspAndInstructor"),
    //     },
    //     {
    //       label: this.translateService.instant("courseCompetence"),
    //     },
    //     {
    //       label: this.translateService.instant("outlineAndAttachments"),
    //     },
    //   ];
    // }
    getCourseById() {
        this.showLoading("core");
        this.courseService
            .getById(this.courseId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.course = (0,app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__.courseToDisplay)(res.data)[0];
                this.courseGeneralService.course$.next(this.course);
                this.isloaded = true;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("core");
        });
    }
    getCourseId(value) {
        this.courseId = value;
    }
    OnDestroy() {
        this.courseGeneralService.course$.next(null);
    }
    // onCloseDialog() {
    //   this.dialogRef.close();
    // }
    stepChanged() {
        // prevent inputs to be invalid after next & back
        this.stepper.selected.interacted = false;
    }
}
AddCourseComponent.ɵfac = function AddCourseComponent_Factory(t) { return new (t || AddCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_4__.CourseGeneralService)); };
AddCourseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: AddCourseComponent, selectors: [["app-add-course"]], viewQuery: function AddCourseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 39, consts: [[3, "name"], [1, "title-no-margin", "title-section", "fixed-title"], ["title", "addCourse"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "has-fixed-title"], [3, "linear", "disableRipple", "selectionChange"], ["stepper", ""], [3, "label", "completed"], ["matStepperIcon", "edit"], [3, "isGeneral", "changeCourseId", "completed"], [3, "courseId", "completed"], [3, "isOutline", "courseId", "completed"], [3, "stepper", "parentParam", "url", "pageParams"], [1, "fas", "fa-check"]], template: function AddCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AddCourseComponent_app_add_new_btn_3_Template, 1, 2, "app-add-new-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-card-content", 5)(7, "mat-stepper", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function AddCourseComponent_Template_mat_stepper_selectionChange_7_listener() { return ctx.stepChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AddCourseComponent_ng_template_12_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "app-add-course-form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("changeCourseId", function AddCourseComponent_Template_app_add_course_form_changeCourseId_13_listener($event) { return ctx.getCourseId($event); })("completed", function AddCourseComponent_Template_app_add_course_form_completed_13_listener($event) { return ctx.isGeneraCompleted = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, AddCourseComponent_ng_template_17_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "app-course-tsp-and-instructor", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("completed", function AddCourseComponent_Template_app_course_tsp_and_instructor_completed_18_listener($event) { return ctx.isTspInstructor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, AddCourseComponent_ng_template_22_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "app-course-competence", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("completed", function AddCourseComponent_Template_app_course_competence_completed_23_listener($event) { return ctx.isCompetence = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, AddCourseComponent_ng_template_27_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "app-add-course-form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("completed", function AddCourseComponent_Template_app_add_course_form_completed_28_listener($event) { return ctx.isOutline = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "steps-footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("name", "core");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.courseId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/course/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("linear", false)("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 23, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 25, "general")));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("completed", ctx.isGeneraCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isGeneral", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 27, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 29, "tspAndInstructor")));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("completed", ctx.isTspInstructor);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("courseId", ctx.courseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 31, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 33, "courseCompetence")));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("completed", ctx.isCompetence);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("courseId", ctx.courseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](25, 35, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 37, "outlineAndAttachments")));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("completed", ctx.isOutline);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isOutline", true)("courseId", ctx.courseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/course");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("stepper", _r1)("parentParam", ctx.parentParam)("pageParams", ctx.pageParams);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_8__.StepsFooterComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperIcon, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_9__.CourseCompetenceComponent, _course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_10__.CourseTspAndInstructorComponent, _add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_11__.AddCourseFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_course_competence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/course-competence */ 7128);
/* harmony import */ var app_training_services_course_course_competence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course-competence.service */ 25711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_org_management_competence_dropdown_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management/competence-dropdown/competence-dropdown.component */ 18969);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_competence_level_by_competence_dropdown_competence_level_by_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management-setup/competence-level-by-competence-dropdown/competence-level-by-competence-dropdown.component */ 52945);


















function CourseCompetenceComponent_app_material_table_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("deleteRow", function CourseCompetenceComponent_app_material_table_19_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false)("showSpaceTop", false);
} }
class CourseCompetenceComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseCompetenceService) {
        super();
        this.courseCompetenceService = courseCompetenceService;
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(); // complete step to change icon
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
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
            competenceId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            competenceLevelId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.courseId > 0)
            this.getAll();
        else
            this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        this.isLoaded = false;
        this.courseCompetenceService
            .getAllByCourseId(this.courseId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource((0,app_training_mapper_course_competence__WEBPACK_IMPORTED_MODULE_2__.courseCompetenceToDisplay)(res.data));
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                course_ID: this.courseId,
                competence_ID: this.form.value.competenceId,
                competence_Level_ID: this.form.value.competenceLevelId,
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading("competence");
        this.courseCompetenceService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.completed.emit(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("competence");
        });
    }
    onDelete(competence) {
        let msg = competence.competence + " - " + competence.competenceLevel;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(competence);
        });
    }
    delete(competence) {
        let params = {
            CourseId: this.courseId,
            CompetenceDetailId: competence.competence_Detail_ID,
        };
        this.showLoading("competence");
        this.courseCompetenceService.Delete(params).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("competence");
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
CourseCompetenceComponent.ɵfac = function CourseCompetenceComponent_Factory(t) { return new (t || CourseCompetenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_training_services_course_course_competence_service__WEBPACK_IMPORTED_MODULE_3__.CourseCompetenceService)); };
CourseCompetenceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CourseCompetenceComponent, selectors: [["app-course-competence"]], inputs: { courseId: "courseId" }, outputs: { completed: "completed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 13, consts: [[3, "name"], [1, "row"], [1, "col-12"], ["container", ""], ["title", "courseCompetence"], [1, "container-fluid", "mtop-40"], [3, "formGroup"], [1, "row", "justify-content-between"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "competenceControl", "submitted", "filter"], [1, "col-md-3", "col-12"], ["icon", "pi pi-plus-circle", 1, "btn-large", "mt-1", "line-height-3", 3, "disabled", "color", "iconPositionBefore", "onClick"], ["class", "table-in-forms small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "showSpaceTop", "deleteRow", 4, "ngIf"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "showSpaceTop", "deleteRow"]], template: function CourseCompetenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "mat-card", null, 3)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-card-content", 5)(9, "div", 1)(10, "div", 2)(11, "form", 6)(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-competence-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "app-competence-level-by-competence-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 11)(18, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function CourseCompetenceComponent_Template_submit_btn_onClick_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, CourseCompetenceComponent_app_material_table_19_Template, 1, 8, "app-material-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "competence");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.competenceId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.competenceLevelId)("competenceControl", ctx.formCtrls.competenceId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.courseId)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.courseId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _shared_components_dropdowns_org_management_competence_dropdown_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.CompetenceDropdownComponent, _shared_components_dropdowns_org_management_setup_competence_level_by_competence_dropdown_competence_level_by_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.CompetenceLevelByCompetenceDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtY29tcGV0ZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 44140:
/*!*************************************************************************************************************!*\
  !*** ./src/app/training/components/courses/add-course/course-general-data/course-general-data.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseGeneralDataComponent": () => (/* binding */ CourseGeneralDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-course-form/add-course-form.component */ 159);



class CourseGeneralDataComponent {
    constructor() {
        this.courseId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    getCourseId(value) {
        this.courseId.emit(value);
    }
}
CourseGeneralDataComponent.ɵfac = function CourseGeneralDataComponent_Factory(t) { return new (t || CourseGeneralDataComponent)(); };
CourseGeneralDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseGeneralDataComponent, selectors: [["course-general-data"]], outputs: { courseId: "courseId" }, decls: 1, vars: 1, consts: [[3, "isGeneral", "changeCourseId"]], template: function CourseGeneralDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-add-course-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeCourseId", function CourseGeneralDataComponent_Template_app_add_course_form_changeCourseId_0_listener($event) { return ctx.getCourseId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isGeneral", true);
    } }, dependencies: [_add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_0__.AddCourseFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtZ2VuZXJhbC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
    ngOnInit() {
    }
}
CourseOutlineComponent.ɵfac = function CourseOutlineComponent_Factory(t) { return new (t || CourseOutlineComponent)(); };
CourseOutlineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseOutlineComponent, selectors: [["app-course-outline"]], inputs: { courseId: "courseId" }, decls: 1, vars: 2, consts: [[3, "isOutline", "courseId"]], template: function CourseOutlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-add-course-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOutline", true)("courseId", ctx.courseId);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/course */ 98949);
/* harmony import */ var app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course.service */ 15881);
/* harmony import */ var app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/course/course-general.service */ 94343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_training_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training/tsp-dropdown/tsp-dropdown.component */ 47941);
/* harmony import */ var _shared_components_dropdowns_training_instructor_dropdown_instructor_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training/instructor-dropdown/instructor-dropdown.component */ 19822);



















function CourseTspAndInstructorComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.tspDataSource)("mandatoryColomns", ctx_r1.mandatoryTspColomns)("optionalColomns", ctx_r1.optionalTspColomns)("showPaginator", false)("showFilter", false)("showSpaceTop", false);
} }
function CourseTspAndInstructorComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.instructorDataSource)("mandatoryColomns", ctx_r2.mandatoryIsnstructorColomns)("optionalColomns", ctx_r2.optionalIsnstructorColomns)("showPaginator", false)("showFilter", false)("showSpaceTop", false);
} }
class CourseTspAndInstructorComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseService, courseGeneralService) {
        super();
        this.courseService = courseService;
        this.courseGeneralService = courseGeneralService;
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(); // complete step to change icon
        this.isLoaded = true;
        this.submitted = false;
        this.mandatoryTspColomns = [
            // "Ser",
            "Name",
            "location",
        ];
        this.optionalTspColomns = [];
        this.mandatoryIsnstructorColomns = [
            // "Ser",
            "Name",
            "jobTitle",
        ];
        this.optionalIsnstructorColomns = [];
        this.course = this.courseGeneralService.course$.getValue();
        // this.courseGeneralService.course$.subscribe((course) => {
        //   this.course = course;
        //   if (this.course != null) this.getFormData();
        // });
    }
    ngOnInit() {
        this.tspform = this.fb.group({
            tsP_IDs: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
        this.intstrucorForm = this.fb.group({
            instructor_IDs: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.tspDataSource?.data?.length > 0)
            this.tspDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.instructorDataSource?.data?.length > 0)
            this.instructorDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.courseId > 0)
            this.getCourseById();
        else
            this.isLoaded = true;
    }
    // getFormData() {
    //   this.tspform.controls.tsP_IDs.setValue(
    //     this.course.trA_TSP_Course?.map((r) => {
    //       return r.tsP_ID;
    //     })
    //   );
    //   this.tspDataSource = new MatTableDataSource(this.course.trA_TSP_Course);
    //   this.intstrucorForm.controls.instructor_IDs.setValue(
    //     this.course.trA_Instructor_Course?.map((r) => {
    //       return r.instructor_ID;
    //     })
    //   );
    //   this.instructorDataSource = new MatTableDataSource(
    //     this.course.trA_Instructor_Course
    //   );
    // }
    submitTsp() {
        this.submitted = true;
        if (this.tspform.valid) {
            let data = {};
            data.Course_ID = this.courseId;
            data.TSP_IDs = this.tspform.controls.tsP_IDs.value;
            this.showLoading("tsp");
            this.courseService.addTSPToCourse(data).subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                    this.addSuccessfullyMsg(res.message.messageTypeName);
                    this.getCourseById();
                    this.submitted = false;
                    this.completed.emit(true);
                }
                else
                    this.errorList(res?.message?.messages);
                this.hideLoading("tsp");
            });
        }
    }
    submitInstructor() {
        this.submitted = true;
        if (this.intstrucorForm.valid) {
            let data = {};
            data.Course_ID = this.courseId;
            data.Instructor_IDs = this.intstrucorForm.controls.instructor_IDs.value;
            this.showLoading("tsp");
            this.courseService.addInstructorToCourse(data).subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                    this.addSuccessfullyMsg(res.message.messageTypeName);
                    this.getCourseById();
                    this.completed.emit(true);
                    this.submitted = false;
                }
                else
                    this.errorList(res?.message?.messages);
                this.hideLoading("tsp");
            });
        }
    }
    getCourseById() {
        this.tspDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        this.instructorDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        this.isLoaded = false;
        // this.showLoading("tsp");
        this.courseService
            .getById(this.courseId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.course = (0,app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__.courseToDisplay)(res.data)[0];
                // this.courseGeneralService.course$.next(courseToDisplay(res.data)[0]);
                this.instructorDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.course.trA_Instructor_Course);
                this.tspDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(this.course.trA_TSP_Course);
            }
            else
                this.errorList(res?.message?.messages);
            // this.hideLoading("tsp");
        });
    }
}
CourseTspAndInstructorComponent.ɵfac = function CourseTspAndInstructorComponent_Factory(t) { return new (t || CourseTspAndInstructorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_training_services_course_course_general_service__WEBPACK_IMPORTED_MODULE_4__.CourseGeneralService)); };
CourseTspAndInstructorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CourseTspAndInstructorComponent, selectors: [["app-course-tsp-and-instructor"]], inputs: { courseId: "courseId" }, outputs: { completed: "completed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 19, consts: [[3, "name"], [1, "row"], [1, "col-12"], ["tspContainer", ""], ["title", "TSP"], [3, "formGroup"], [1, "container-fluid", "mtop-25"], [1, "row", "justify-content-between"], [1, "col-md-4", "col-12"], [3, "control", "multi", "filter", "submitted"], ["icon", "pi pi-plus-circle", 1, "btn-large", "mt-1", "line-height-3", 3, "color", "disabled", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "col-12", "mt-3"], ["title", "instructors"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "showPaginator", "showFilter", "showSpaceTop"]], template: function CourseTspAndInstructorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "mat-card", null, 3)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "form", 5)(11, "mat-card-content", 6)(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-tsp-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 8)(16, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function CourseTspAndInstructorComponent_Template_submit_btn_onClick_16_listener() { return ctx.submitTsp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CourseTspAndInstructorComponent_ng_container_17_Template, 2, 7, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 12)(19, "mat-card")(20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "page-title", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 1)(24, "div", 2)(25, "form", 5)(26, "mat-card-content", 6)(27, "div", 7)(28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "app-instructor-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 8)(31, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function CourseTspAndInstructorComponent_Template_submit_btn_onClick_31_listener() { return ctx.submitInstructor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, CourseTspAndInstructorComponent_ng_container_32_Template, 2, 7, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", "tsp");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.tspform);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.tspform.controls.tsP_IDs)("multi", true)("filter", true)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx.btn.darkBlue)("disabled", !ctx.courseId)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.courseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.intstrucorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.intstrucorForm.controls.instructor_IDs)("multi", true)("filter", true)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx.btn.darkBlue)("disabled", !ctx.courseId)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.courseId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _shared_components_dropdowns_training_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.TspDropdownComponent, _shared_components_dropdowns_training_instructor_dropdown_instructor_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.IstructorDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtdHNwLWFuZC1pbnN0cnVjdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/course */ 98949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/course/course.service */ 15881);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












class CourseIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(courseService) {
        super();
        this.courseService = courseService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "courseCode",
            "ar_Name",
            "en_Name",
            "abbrevation",
            "courseCategory",
            "courseType",
            "actions",
        ];
        this.optionalColomns = [
            "isFree",
            "courseValue",
            "isHolding",
            "holdingYears",
            "penaletyPercentege",
            "threeMontheEvalution",
            "sixMontheEvalution",
        ];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        this.isLoaded = false;
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource((0,app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__.courseToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    delete(course) {
        this.showLoading();
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(course) {
        let msg = this.msgTranslate(course.ar_Name, course.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(course);
        });
    }
}
CourseIndexComponent.ɵfac = function CourseIndexComponent_Factory(t) { return new (t || CourseIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService)); };
CourseIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CourseIndexComponent, selectors: [["app-course-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 12, consts: [[1, "index-card"], ["title", "courses", 1, "mb-10", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function CourseIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function CourseIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function CourseIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "side-helping-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-dashboard-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.courseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 69706:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/add-implementation/add-implementation-core/add-implementation-core.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddImplementationCoreComponent": () => (/* binding */ AddImplementationCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../implementation-employees/implementation-employees.component */ 30338);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/steps-footer/steps-footer.component */ 20957);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../implementation-general-data/implementation-general-data.component */ 99778);
/* harmony import */ var _implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../implementation-lectures/implementation-lectures.component */ 14162);
/* harmony import */ var _implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../implementation-expenses/implementation-expenses.component */ 66626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















const _c0 = ["stepper"];
function AddImplementationCoreComponent_app_add_new_btn_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-add-new-btn", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r0.moduleId, "/implementation/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddImplementationCoreComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 18);
} }
function AddImplementationCoreComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 18);
} }
function AddImplementationCoreComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 18);
} }
function AddImplementationCoreComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 18);
} }
class AddImplementationCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.implementationId = 0;
        this.isGeneraCompleted = false;
        this.isEmployeesCompleted = false;
        this.isLecturesCompleted = false;
        this.isExpensesCompleted = false;
        this.PRINT_SCREEN = _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.PRINT_SCREEN;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.implementationId = Number(param.id ?? 0);
        });
    }
    pr() {
        console.log("isGeneraCompleted", this.isGeneraCompleted);
    }
    stepChanged() {
        // prevent inputs to be invalid after next & back
        this.stepper.selected.interacted = false;
    }
    getImplementationId(value) {
        this.implementationId = value;
    }
    updateEmployeeIndex() {
        this.implementationEmployeesComponent.getAll();
    }
}
AddImplementationCoreComponent.ɵfac = function AddImplementationCoreComponent_Factory(t) { return new (t || AddImplementationCoreComponent)(); };
AddImplementationCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AddImplementationCoreComponent, selectors: [["app-add-implementation-core"]], viewQuery: function AddImplementationCoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_1__.ImplementationEmployeesComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.implementationEmployeesComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 38, consts: [[1, "title-no-margin", "title-section", "fixed-title"], ["addTitle", "addImplementation", "editTitle", "editImplementation", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "has-fixed-title"], [3, "linear", "disableRipple", "selectionChange"], ["stepper", ""], [3, "label", "completed"], ["matStepperIcon", "edit"], [1, "row"], [1, "col-12"], [1, "title-no-margin"], ["title", "generalInfo", 1, "stepper-section-title"], [1, "mt-2"], [1, "clearfix"], [3, "implementationId", "changeImplementationId", "updateEmployeeIndex", "completed"], [3, "implementationId", "completed"], [3, "stepper", "parentParam", "url", "pageParams"], [1, "fas", "fa-check"]], template: function AddImplementationCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AddImplementationCoreComponent_app_add_new_btn_3_Template, 1, 2, "app-add-new-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-back-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "mat-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function AddImplementationCoreComponent_Template_mat_stepper_selectionChange_7_listener() { return ctx.stepChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, AddImplementationCoreComponent_ng_template_12_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "mat-card")(16, "mat-card-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "page-title", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "mat-divider", 13)(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "app-implementation-general-data", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changeImplementationId", function AddImplementationCoreComponent_Template_app_implementation_general_data_changeImplementationId_20_listener($event) { return ctx.getImplementationId($event); })("updateEmployeeIndex", function AddImplementationCoreComponent_Template_app_implementation_general_data_updateEmployeeIndex_20_listener() { return ctx.updateEmployeeIndex(); })("completed", function AddImplementationCoreComponent_Template_app_implementation_general_data_completed_20_listener($event) { return ctx.isGeneraCompleted = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, AddImplementationCoreComponent_ng_template_24_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "app-implementation-employees", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("completed", function AddImplementationCoreComponent_Template_app_implementation_employees_completed_25_listener($event) { return ctx.isEmployeesCompleted = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, AddImplementationCoreComponent_ng_template_29_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "app-implementation-lectures", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("completed", function AddImplementationCoreComponent_Template_app_implementation_lectures_completed_30_listener($event) { return ctx.isLecturesCompleted = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, AddImplementationCoreComponent_ng_template_34_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "app-implementation-expenses", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("completed", function AddImplementationCoreComponent_Template_app_implementation_expenses_completed_35_listener($event) { return ctx.isExpensesCompleted = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "steps-footer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.implementationId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/implementation/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("linear", false)("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 22, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 24, "general")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("completed", ctx.isGeneraCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 26, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 28, "employees")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("completed", ctx.isEmployeesCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 30, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 32, "courses")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("completed", ctx.isLecturesCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 34, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 36, "expenses")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("completed", ctx.isExpensesCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stepper", _r1)("parentParam", ctx.parentParam)("pageParams", ctx.pageParams);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_5__.StepsFooterComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperIcon, _implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_6__.ImplementationGeneralDataComponent, _implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_1__.ImplementationEmployeesComponent, _implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_7__.ImplementationLecturesComponent, _implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_8__.ImplementationExpensesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW1wbGVtZW50YXRpb24tY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 30338:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/add-implementation/implementation-employees/implementation-employees.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationEmployeesComponent": () => (/* binding */ ImplementationEmployeesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var app_training_services_implementation_implementation_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/implementation/implementation-employee.service */ 94142);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/button/button.component */ 71812);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
















function ImplementationEmployeesComponent_ng_container_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImplementationEmployeesComponent_ng_container_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.isViewUpdate = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ImplementationEmployeesComponent_ng_container_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImplementationEmployeesComponent_ng_container_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.isViewUpdate = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ImplementationEmployeesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ImplementationEmployeesComponent_ng_container_6_button_1_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ImplementationEmployeesComponent_ng_container_6_button_2_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isViewUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isViewUpdate);
} }
function ImplementationEmployeesComponent_app_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function ImplementationEmployeesComponent_app_button_11_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.onClearAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r2.btn.darkBlueBorder)("disabled", !ctx_r2.isLoaded || !ctx_r2.dataSourceSelected || (ctx_r2.dataSourceSelected == null ? null : ctx_r2.dataSourceSelected.data == null ? null : ctx_r2.dataSourceSelected.data.length) == 0);
} }
function ImplementationEmployeesComponent_submit_btn_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "submit-btn", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function ImplementationEmployeesComponent_submit_btn_12_Template_submit_btn_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r3.btn.darkBlue)("disabled", !ctx_r3.implementationId);
} }
class ImplementationEmployeesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationEmployeeService) {
        super();
        this.implementationEmployeeService = implementationEmployeeService;
        this.implementationId = 0;
        this.isView = false;
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(); // complete step to change icon
        this.mandatoryColomns = [
            // "Ser",
            "code",
            "employee",
            "department",
            "job",
            "selectAll",
        ];
        this.mandatoryColomnsView = [
            // "Ser",
            "code",
            "employee",
            "department",
            "job",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
        // use in view to detect update in view (not update after add)
        this.isViewUpdate = true;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        // after add implementation general data
        if (changes.implementationId.currentValue > 0 &&
            !changes.implementationId.previousValue &&
            !changes.implementationId.firstChange && // first time will be 0
            this.checkNoBusinessOrCompany()) {
            this.getAll();
        }
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(null);
        }
        if (this.checkNoBusinessOrCompany() && this.implementationId > 0) {
            this.getAll();
        }
        else {
            this.isLoaded = true;
        }
    }
    onModulesChanged() {
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.implementation_employees);
    }
    getAll() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(null);
        this.dataSourceSelected = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(null);
        this.isLoaded = false;
        this.implementationEmployeeService
            .getAll(this.implementationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // display selected first
                res.data.sort((a, b) => a.isSelected === b.isSelected ? 0 : a.isSelected ? -1 : 1);
                let data = (0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_3__.implementationEmployeeToDisplay)(res.data);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(data);
                this.dataSourceSelected = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(data.filter((ele) => ele.isSelected));
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    submit() {
        const model = {
            Implementation_ID: this.implementationId,
            SelectedEmployees: [],
        };
        this.dataSource.data
            .filter((ele) => ele.isSelected)
            .forEach((selected) => {
            model.SelectedEmployees.push(selected.person.core_Person_Instance[0].id);
        });
        if (model.SelectedEmployees.length == 0) {
            this.warning("selectOneEmployee");
            return;
        }
        this.create(model);
    }
    create(model) {
        this.showLoading();
        this.implementationEmployeeService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (this.isView)
                    this.isViewUpdate = false;
                this.completed.emit(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(employee) {
        let msg = employee.employee;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(employee);
            }
        });
    }
    delete(employee) {
        let params = {
            implementation_id: this.implementationId,
            person_instance_id: employee.person.id,
        };
        this.showLoading();
        this.implementationEmployeeService
            .Delete(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onClearAll() {
        let msg = this.translate("allEmployees");
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.clearAll();
            }
        });
    }
    clearAll() {
        this.showLoading();
        this.implementationEmployeeService
            .DeleteAll(this.implementationId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.dataSourceSelected = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource([]);
                this.dataSource.data.map((ele) => (ele.isSelected = false));
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
ImplementationEmployeesComponent.ɵfac = function ImplementationEmployeesComponent_Factory(t) { return new (t || ImplementationEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_employee_service__WEBPACK_IMPORTED_MODULE_4__.ImplementationEmployeeService)); };
ImplementationEmployeesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ImplementationEmployeesComponent, selectors: [["app-implementation-employees"]], inputs: { implementationId: "implementationId", isView: "isView" }, outputs: { completed: "completed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 10, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "employees", 1, "stepper-section-title"], [4, "ngIf"], [1, "container-fluid", "mtop-45", "p-0"], ["checkboxColumnName", "isSelected", 1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showSpaceTop", "deleteRow"], ["align", "end"], ["label", "clearAll", 3, "color", "disabled", "onClick", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "color", "disabled", "onClick", 4, "ngIf"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "fas", "fa-pen", "font-size-15"], [1, "ft-corner-up-left", "font-size-18"], ["label", "clearAll", 3, "color", "disabled", "onClick"], ["icon", "pi pi-plus-circle", 3, "color", "disabled", "onClick"]], template: function ImplementationEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", null, 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ImplementationEmployeesComponent_ng_container_6_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-card-content", 5)(9, "app-material-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("deleteRow", function ImplementationEmployeesComponent_Template_app_material_table_deleteRow_9_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ImplementationEmployeesComponent_app_button_11_Template, 1, 2, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ImplementationEmployeesComponent_submit_btn_12_Template, 1, 2, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.isViewUpdate ? ctx.dataSource : ctx.dataSourceSelected)("mandatoryColomns", ctx.isViewUpdate ? ctx.mandatoryColomns : ctx.mandatoryColomnsView)("optionalColomns", ctx.optionalColomns)("actions", ctx.rowFunctions)("showPaginator", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isView && !(ctx.isLoaded && (ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length) == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isViewUpdate);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_8__.ButtonComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 66626:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/add-implementation/implementation-expenses/implementation-expenses.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationExpensesComponent": () => (/* binding */ ImplementationExpensesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_training_services_implementation_implementation_expenses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/implementation/implementation-expenses.service */ 91781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_training_setup_expenses_dropdown_expenses_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training-setup/expenses-dropdown/expenses-dropdown.component */ 85917);





















function ImplementationExpensesComponent_ng_container_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ImplementationExpensesComponent_ng_container_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.changeIsViewUpdate(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ImplementationExpensesComponent_ng_container_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ImplementationExpensesComponent_ng_container_7_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.changeIsViewUpdate(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ImplementationExpensesComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ImplementationExpensesComponent_ng_container_7_button_1_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ImplementationExpensesComponent_ng_container_7_button_2_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.isViewUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isViewUpdate);
} }
function ImplementationExpensesComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content", 10)(2, "div", 1)(3, "div", 2)(4, "courseForm", 11)(5, "div", 1)(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-expenses-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 15)(11, "submit-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function ImplementationExpensesComponent_ng_container_9_Template_submit_btn_onClick_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx_r2.formCtrls.expenseId)("submitted", ctx_r2.submitted)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx_r2.formCtrls.budget)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r2.implementationId)("color", ctx_r2.btn.darkBlue)("iconPositionBefore", false);
} }
function ImplementationExpensesComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-divider", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "app-material-table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("deleteRow", function ImplementationExpensesComponent_ng_container_10_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r3.isLoaded)("dataSource", ctx_r3.dataSource)("mandatoryColomns", ctx_r3.mandatoryColomns)("optionalColomns", ctx_r3.optionalColomns)("actions", ctx_r3.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class ImplementationExpensesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationExpensesService) {
        super();
        this.implementationExpensesService = implementationExpensesService;
        this.implementationId = 0;
        this.isView = false;
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(); // complete step to change icon
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "expense",
            "value",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        // use in view to detect update in view (not update after add)
        this.isViewUpdate = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNallable: true }],
            expenseId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            budget: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.gte(0)]],
        });
        if (this.isView)
            this.changeIsViewUpdate(false);
    }
    ngOnChanges(changes) {
        if (changes.implementationId?.currentValue > 0 &&
            this.checkNoBusinessOrCompany())
            this.getAll();
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.implementationId > 0)
            this.getAll();
        else
            this.isLoaded = true;
    }
    onModulesChanged() {
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.implementation_expense);
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        this.isLoaded = false;
        this.implementationExpensesService
            .getAll(this.implementationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource((0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_3__.implementationExpenseToDisplay)(res.data));
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                implementation_ID: this.implementationId,
                expense_ID: this.form.value.expenseId,
                expense_Value: this.form.value.budget,
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading("expenses");
        this.implementationExpensesService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.clearForm();
                this.getAll();
                this.completed.emit(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("expenses");
        });
    }
    onDelete(expense) {
        let msg = expense.expense + " - " + expense.value;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(expense);
        });
    }
    delete(expense) {
        let deleteParams = {
            implementation_id: expense.implementation_ID,
            expense_id: expense.expense_ID,
        };
        this.showLoading("expenses");
        this.implementationExpensesService
            .Delete(deleteParams)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("expenses");
        });
    }
    clearForm() {
        this.form.reset( /* { id: 0 } */);
        this.submitted = false;
    }
    changeIsViewUpdate(value) {
        this.isViewUpdate = value;
        let actionsIndex = this.mandatoryColomns.findIndex((col) => col == "actions");
        let cols = this.mandatoryColomns.slice();
        if (value && actionsIndex < 0)
            cols.push("actions");
        else if (!value && actionsIndex >= 0)
            cols.pop();
        this.mandatoryColomns = cols;
    }
}
ImplementationExpensesComponent.ɵfac = function ImplementationExpensesComponent_Factory(t) { return new (t || ImplementationExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_expenses_service__WEBPACK_IMPORTED_MODULE_4__.ImplementationExpensesService)); };
ImplementationExpensesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ImplementationExpensesComponent, selectors: [["app-implementation-expenses"]], inputs: { implementationId: "implementationId", isView: "isView" }, outputs: { completed: "completed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 4, consts: [[3, "name"], [1, "row"], [1, "col-12"], ["container", ""], ["title", "expenses", 1, "stepper-section-title"], [4, "ngIf"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "fas", "fa-pen", "font-size-15"], [1, "ft-corner-up-left", "font-size-18"], [1, "container-fluid", "mtop-45"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], ["label", "budget", "type", "number", 3, "control", "submitted"], [1, "col-md-3", "col-12"], ["icon", "pi pi-plus-circle", 1, "btn-large", "mt-1", "line-height-3", 3, "disabled", "color", "iconPositionBefore", "onClick"], [1, "w-75", "m-auto"], [1, "table-in-forms", "small-table", "no-margin", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "deleteRow"]], template: function ImplementationExpensesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "mat-card", null, 3)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ImplementationExpensesComponent_ng_container_7_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ImplementationExpensesComponent_ng_container_9_Template, 12, 9, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ImplementationExpensesComponent_ng_container_10_Template, 4, 7, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", "expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isView || ctx.isViewUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.implementationId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _shared_components_dropdowns_training_setup_expenses_dropdown_expenses_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.ExpensesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1leHBlbnNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 99778:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/add-implementation/implementation-general-data/implementation-general-data.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationGeneralDataComponent": () => (/* binding */ ImplementationGeneralDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/implementation/implementation.service */ 51503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_training_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training/tsp-dropdown/tsp-dropdown.component */ 47941);
/* harmony import */ var _shared_components_dropdowns_training_instructor_dropdown_instructor_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training/instructor-dropdown/instructor-dropdown.component */ 19822);
/* harmony import */ var _shared_components_dropdowns_training_training_plan_dropdown_training_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training/training-plan-dropdown/training-plan-dropdown.component */ 48036);
/* harmony import */ var _shared_components_dropdowns_training_course_course_by_training_plan_dropdown_course_by_training_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training/course/course-by-training-plan-dropdown/course-by-training-plan-dropdown.component */ 44221);





















function ImplementationGeneralDataComponent_reset_form_btn_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "reset-form-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ImplementationGeneralDataComponent_reset_form_btn_23_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
class ImplementationGeneralDataComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationService) {
        super();
        this.implementationService = implementationService;
        this.submitted = false;
        this.implementationId = 0;
        this.changeImplementationId = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.updateEmployeeIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter(); // after update
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter(); // complete step to change icon
        this.closeAfterUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    }
    onChangeBusinessAndCompanyId() {
        if (this.implementationId > 0 && this.checkNoBusinessOrCompany())
            this.getImplementationById();
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.implementationId, { nonNullable: true }],
            plan_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            plan_Course_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            instructor_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            tsP_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            from_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            to_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            attendance_Percentage: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_15__.CustomValidators.gte(0),
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_15__.CustomValidators.lte(100),
                ],
            ],
            note: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("from_Date", "to_Date"),
        });
        if (this.implementation)
            this.implementationId = this.implementation.id;
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            let model = {
                id: this.formCtrls.id.value,
                plan_Course_ID: this.formCtrls.plan_Course_ID.value,
                instructor_ID: this.formCtrls.instructor_ID.value,
                tsP_ID: this.formCtrls.tsP_ID.value,
                from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.formCtrls.from_Date.value),
                to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.formCtrls.to_Date.value),
                attendance_Percentage: this.formCtrls.attendance_Percentage.value,
                note: this.formCtrls.note.value,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    getImplementationById() {
        // edit in view
        if (this.implementation) {
            this.formCtrls.plan_ID.setValue(this.implementation.trA_Plan_Course.plan_ID);
            this.form.patchValue(this.implementation);
        }
        // edit after add if change company
        else {
            this.showLoading("general");
            this.implementationService
                .getById(this.implementationId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                    this.form.patchValue(res.data[0]);
                    this.formCtrls.plan_ID.setValue(res.data[0].trA_Plan_Course?.plan_ID);
                    this.formCtrls.plan_Course_ID.setValue(res.data[0].plan_Course_ID);
                }
                else
                    this.errorList(res?.message?.messages);
                this.hideLoading("general");
            });
        }
    }
    create(data) {
        this.showLoading("general");
        this.implementationService
            .create(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.implementationId = res.data.id;
                this.formCtrls.id.setValue(this.implementationId);
                let url = `/training/${this.moduleId}/implementation/edit/${this.implementationId}`;
                this.navigateTo(url);
                this.changeImplementationId.emit(this.implementationId);
                this.completed.emit(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("general");
        });
    }
    update(data) {
        this.showLoading("general");
        this.implementationService
            .update(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.closeAfterUpdate.emit(true);
                this.updateEmployeeIndex.emit();
                this.completed.emit(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("general");
        });
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
}
ImplementationGeneralDataComponent.ɵfac = function ImplementationGeneralDataComponent_Factory(t) { return new (t || ImplementationGeneralDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_4__.ImplementationService)); };
ImplementationGeneralDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ImplementationGeneralDataComponent, selectors: [["app-implementation-general-data"]], inputs: { implementationId: "implementationId", implementation: "implementation" }, outputs: { changeImplementationId: "changeImplementationId", updateEmployeeIndex: "updateEmployeeIndex", completed: "completed", closeAfterUpdate: "closeAfterUpdate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 27, consts: [[3, "name"], [1, "container-fluid", "mtop-40"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-4", "col-lg-3", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "planControl", "submitted", "filter"], ["label", "from_Date", 3, "control", "submitted"], ["label", "to_Date", 3, "control", "submitted"], ["label", "attendance_Percentage", "type", "number", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end", 1, "mb-0"], [3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [1, "clearfix"], [3, "click"]], template: function ImplementationGeneralDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-card-content", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4)(5, "div", 2)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "app-training-plan-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "app-course-by-training-plan-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "app-instructor-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "app-tsp-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-datepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-datepicker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-card-actions", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, ImplementationGeneralDataComponent_reset_form_btn_23_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function ImplementationGeneralDataComponent_Template_submit_btn_onClick_24_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", "general");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.plan_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.plan_Course_ID)("planControl", ctx.formCtrls.plan_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.instructor_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.tsP_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.attendance_Percentage)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _shared_components_dropdowns_training_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.TspDropdownComponent, _shared_components_dropdowns_training_instructor_dropdown_instructor_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.IstructorDropdownComponent, _shared_components_dropdowns_training_training_plan_dropdown_training_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.TrainingPlanDropdownComponent, _shared_components_dropdowns_training_course_course_by_training_plan_dropdown_course_by_training_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.CourseByTrainingPlanDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1nZW5lcmFsLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 14162:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/add-implementation/implementation-lectures/implementation-lectures.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationLecturesComponent": () => (/* binding */ ImplementationLecturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var app_training_services_implementation_implementation_lectures_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/training/services/implementation/implementation-lectures.service */ 52829);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_dynamic_form_field_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/timepicker/timepicker.component */ 47383);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_checkbox_weekdays_checkboxes_weekdays_checkboxes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/checkbox/weekdays-checkboxes/weekdays-checkboxes.component */ 93054);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ 88035);


























function ImplementationLecturesComponent_ng_container_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImplementationLecturesComponent_ng_container_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r6.changeIsViewUpdate(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ImplementationLecturesComponent_ng_container_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImplementationLecturesComponent_ng_container_7_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r8.changeIsViewUpdate(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ImplementationLecturesComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ImplementationLecturesComponent_ng_container_7_button_1_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ImplementationLecturesComponent_ng_container_7_button_2_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.isViewUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.isViewUpdate);
} }
function ImplementationLecturesComponent_ng_container_9_reset_form_btn_27_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "reset-form-btn", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImplementationLecturesComponent_ng_container_9_reset_form_btn_27_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r11.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ImplementationLecturesComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-card-content", 10)(2, "div", 1)(3, "div", 2)(4, "courseForm", 11)(5, "div", 1)(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "app-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "app-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 15)(11, "app-datepicker", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](12, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "app-check-box", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "app-datepicker", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "weekdays-checkboxes", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "app-timepicker", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "app-timepicker", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "app-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](25, "app-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "mat-card-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, ImplementationLecturesComponent_ng_container_9_reset_form_btn_27_Template, 1, 0, "reset-form-btn", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "submit-btn", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onClick", function ImplementationLecturesComponent_ng_container_9_Template_submit_btn_onClick_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r13.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.ar_Name)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.en_Name)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.day_Date)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.isRepeated);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.repeatEndDate)("submitted", ctx_r2.submitted)("disabled", !ctx_r2.formCtrls.isRepeated.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("hidden", !ctx_r2.formCtrls.isRepeated.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.days)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.start_Houre)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.end_Houre)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.location)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx_r2.formCtrls.note)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.formCtrls.id.value > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r2.implementationId)("id", ctx_r2.formCtrls.id.value)("color", ctx_r2.btn.darkBlue)("iconPositionBefore", false);
} }
function ImplementationLecturesComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "mat-divider", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "app-material-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("editRow", function ImplementationLecturesComponent_ng_container_10_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r15.lectureToEdit($event)); })("deleteRow", function ImplementationLecturesComponent_ng_container_10_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r17.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isRowClickable", false)("isLoaded", ctx_r3.isLoaded)("dataSource", ctx_r3.dataSource)("mandatoryColomns", ctx_r3.mandatoryColomns)("optionalColomns", ctx_r3.optionalColomns)("actions", ctx_r3.rowFunctions)("showFilter", false)("showPaginator", false);
} }
class ImplementationLecturesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationLectureService) {
        super();
        this.implementationLectureService = implementationLectureService;
        this.implementationId = 0;
        this.isView = false;
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter(); // complete step to change icon
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "ar_Name",
            "en_Name",
            "dayDate",
            "startHour",
            "endHour",
            "location",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        // use in view to detect update in view (not update after add)
        this.isViewUpdate = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            day_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            start_Houre: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            end_Houre: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            location: [null],
            note: [null],
            isRepeated: [null],
            repeatEndDate: [null],
            days: [[]],
        }, {
            validator: [
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.timeBefore("start_Houre", "end_Houre"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.compareDates("day_Date", "repeatEndDate"),
            ],
        });
        this.formCtrls.isRepeated.valueChanges.subscribe((isRepeated) => this.onChangeIsRepeated(isRepeated));
        if (this.isView)
            this.changeIsViewUpdate(false);
    }
    // ngOnChanges(changes: SimpleChanges): void {
    //   if (
    //     changes.implementationId?.currentValue > 0 &&
    //     this.checkNoBusinessOrCompany()
    //   )
    //     this.getAll(this.firstPage);
    // }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.implementationId > 0)
            this.getAll();
        else
            this.isLoaded = true;
    }
    onModulesChanged() {
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__.ViewsManager.implementation_lecture);
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(null);
        this.isLoaded = false;
        this.implementationLectureService
            .getAll(this.implementationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource((0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_5__.implementationLectureToDisplay)(res.data));
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                implementation_ID: this.implementationId,
                id: this.form.value.id,
                ar_Name: this.form.value.ar_Name,
                en_Name: this.form.value.en_Name,
                day_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.day_Date),
                start_Houre: this.form.value.start_Houre,
                end_Houre: this.form.value.end_Houre,
                location: this.form.value.location,
                note: this.form.value.note,
                isRepeated: this.form.value.isRepeated ?? false,
                repeatEndDate: null,
                weekDays: [],
            };
            if (model.isRepeated) {
                model.repeatEndDate = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.repeatEndDate);
                model.weekDays = this.form.value.days ?? [];
            }
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading("lecture");
        this.implementationLectureService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.clearForm();
                this.getAll();
                // if (this.isView) this.changeIsViewUpdate(false);
                this.completed.emit(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("lecture");
        });
    }
    update(model) {
        this.showLoading("lecture");
        this.implementationLectureService
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.clearForm();
                this.getAll();
                // if (this.isView) this.changeIsViewUpdate(false);
                this.completed.emit(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("lecture");
        });
    }
    lectureToEdit(lecture) {
        this.form.patchValue(lecture);
        // console.log(this.form);
    }
    onDelete(lecture) {
        let msg = this.msgTranslate(lecture.ar_Name, lecture.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(lecture);
        });
    }
    delete(lecture) {
        this.showLoading("lecture");
        this.implementationLectureService
            .Delete(lecture.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("lecture");
        });
    }
    clearForm() {
        this.form.reset({ id: 0, days: [], isRepeated: false });
        this.submitted = false;
    }
    onChangeIsRepeated(value) {
        // console.log(value);
        if (value) {
            this.formCtrls.repeatEndDate.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]);
            this.formCtrls.days.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]);
        }
        else {
            this.formCtrls.repeatEndDate.clearValidators();
            this.formCtrls.days.clearValidators();
        }
        this.formCtrls.repeatEndDate.updateValueAndValidity();
        this.formCtrls.days.updateValueAndValidity();
    }
    changeIsViewUpdate(value) {
        this.isViewUpdate = value;
        let actionsIndex = this.mandatoryColomns.findIndex((col) => col == "actions");
        let cols = this.mandatoryColomns.slice();
        if (value && actionsIndex < 0)
            cols.push("actions");
        else if (!value && actionsIndex >= 0)
            cols.pop();
        this.mandatoryColomns = cols;
    }
}
ImplementationLecturesComponent.ɵfac = function ImplementationLecturesComponent_Factory(t) { return new (t || ImplementationLecturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_lectures_service__WEBPACK_IMPORTED_MODULE_6__.ImplementationLecturesService)); };
ImplementationLecturesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ImplementationLecturesComponent, selectors: [["app-implementation-lectures"]], inputs: { implementationId: "implementationId", isView: "isView" }, outputs: { completed: "completed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 4, consts: [[3, "name"], [1, "row"], [1, "col-12"], ["container", ""], ["title", "lectures", 1, "stepper-section-title"], [4, "ngIf"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "fas", "fa-pen", "font-size-15"], [1, "ft-corner-up-left", "font-size-18"], [1, "container-fluid", "mtop-45"], [3, "formGroup"], [1, "col-md-4", "col-lg-3", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], [1, "col-md-4", "col-lg-3", "col-12", "mb-2"], ["label", "dayDate", 1, "display-in-msg", 3, "control", "submitted"], [1, "msg"], ["label", "isRepeated", "labelPosition", "before", 1, "p-0", "m-0", 3, "control"], ["label", "repeatEndDate", 3, "control", "submitted", "disabled"], [1, "col-12", "pright-15", "pleft-15", "mbottom-15", "mt-2"], [3, "control", "submitted"], ["label", "startHour", 3, "control", "submitted"], ["label", "endHour", 3, "control", "submitted"], ["label", "location", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "disabled", "id", "color", "iconPositionBefore", "onClick"], [3, "click"], [1, "w-75", "m-auto"], [1, "table-in-forms", 3, "isRowClickable", "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showFilter", "showPaginator", "editRow", "deleteRow"]], template: function ImplementationLecturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "mat-card", null, 3)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, ImplementationLecturesComponent_ng_container_7_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, ImplementationLecturesComponent_ng_container_9_Template, 29, 28, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, ImplementationLecturesComponent_ng_container_10_Template, 4, 8, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("name", "lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isView || ctx.isViewUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.implementationId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_10__.CheckBoxComponent, _shared_components_resources_dynamic_form_field_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__.TimepickerComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_12__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_13__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_14__.PageTitleComponent, _shared_components_checkbox_weekdays_checkboxes_weekdays_checkboxes_component__WEBPACK_IMPORTED_MODULE_15__.WeekdaysCheckboxesComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_23__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective], styles: [".mat-checkbox-inner-container {\n  margin-right: 2px !important;\n  margin-left: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcGxlbWVudGF0aW9uLWxlY3R1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQUNGIiwiZmlsZSI6ImltcGxlbWVudGF0aW9uLWxlY3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 60480:
/*!***********************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/implementation-index/implementation-index.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationIndexComponent": () => (/* binding */ ImplementationIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/implementation/implementation.service */ 51503);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











class ImplementationIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(implementationService) {
        super();
        this.implementationService = implementationService;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "planName",
            "course",
            "from_Date",
            "to_Date",
            "count_Employees",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        this.isLoaded = false;
        this.removePageParams();
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.implementationService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == 1) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource((0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_1__.implementationListToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(implementation) {
        let msg = implementation.planName + " - " + implementation.course;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(implementation);
        });
    }
    delete(implementation) {
        this.showLoading();
        this.implementationService
            .Delete(implementation.id)
            .subscribe((res) => {
            if (res.message.messageType == 1) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    // if last item in list: get previous page
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    // if not last item in list: get current page
                    this.getList(this.currentPage, this.page.pageSize);
                }
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
ImplementationIndexComponent.ɵfac = function ImplementationIndexComponent_Factory(t) { return new (t || ImplementationIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_2__.ImplementationService)); };
ImplementationIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ImplementationIndexComponent, selectors: [["app-implementation-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 13, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "implementation", 3, "globalFunctions"], [3, "isRowClickable", "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function ImplementationIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChangePage", function ImplementationIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function ImplementationIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "side-helping-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-dashboard-display", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isRowClickable", true)("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.implementationService);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 11, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 90109:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/implementation-view/implementation-general-data-view/implementation-general-data-view.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationGeneralDataViewComponent": () => (/* binding */ ImplementationGeneralDataViewComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/implementation/implementation.service */ 51503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _shared_skeletons_view_card_row_skeleton_view_card_row_skeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/skeletons/view-card-row-skeleton/view-card-row-skeleton.component */ 38368);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _add_implementation_implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../add-implementation/implementation-general-data/implementation-general-data.component */ 99778);













function ImplementationGeneralDataViewComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ImplementationGeneralDataViewComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.isView = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ImplementationGeneralDataViewComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ImplementationGeneralDataViewComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.isView = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ImplementationGeneralDataViewComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-view-data-row-item", 17)(2, "app-view-data-row-item", 18)(3, "app-view-data-row-item", 19)(4, "app-view-data-row-item", 20)(5, "app-view-data-row-item", 21)(6, "app-view-data-row-item", 22)(7, "app-view-data-row-item", 23)(8, "app-view-data-row-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.plan);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.instructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.tsp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.attendance_Percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.fromDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r10.implementation == null ? null : ctx_r10.implementation.note);
} }
function ImplementationGeneralDataViewComponent_div_10_app_view_card_row_skeleton_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-view-card-row-skeleton");
} }
function ImplementationGeneralDataViewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ImplementationGeneralDataViewComponent_div_10_div_1_Template, 9, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ImplementationGeneralDataViewComponent_div_10_app_view_card_row_skeleton_2_Template, 1, 0, "app-view-card-row-skeleton", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.isLoaded);
} }
function ImplementationGeneralDataViewComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-implementation-general-data", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closeAfterUpdate", function ImplementationGeneralDataViewComponent_ng_template_11_Template_app_implementation_general_data_closeAfterUpdate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.returnToView($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("implementation", ctx_r5.implementation);
} }
class ImplementationGeneralDataViewComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationService) {
        super();
        this.implementationService = implementationService;
        this.isView = true;
        this.implementationId = 0;
        this.isLoaded = false;
    }
    onChangeBusinessAndCompanyId() {
        if (this.implementationId > 0 && this.checkNoBusinessOrCompany())
            this.getImplementationById();
    }
    ngOnInit() { }
    getImplementationById() {
        this.isLoaded = false;
        this.implementationService
            .getById(this.implementationId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.implementation = (0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_2__.implementationToDisplay)(res.data)[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    returnToView(updated) {
        this.isView = true;
        if (updated)
            this.getImplementationById();
    }
}
ImplementationGeneralDataViewComponent.ɵfac = function ImplementationGeneralDataViewComponent_Factory(t) { return new (t || ImplementationGeneralDataViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_3__.ImplementationService)); };
ImplementationGeneralDataViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ImplementationGeneralDataViewComponent, selectors: [["app-implementation-general-data-view"]], inputs: { implementationId: "implementationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 4, consts: [[1, "row"], [1, "col-12"], [1, "pb-0"], ["container", ""], [1, "title-no-margin"], ["title", "generalInfo", 1, "stepper-section-title"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], [1, "mt-2"], ["class", "mtop-30", 4, "ngIf", "ngIfElse"], ["form", ""], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "fas", "fa-pen", "font-size-15"], [1, "ft-corner-up-left", "font-size-18"], [1, "mtop-30"], ["class", "view-data-row-container", "style", "margin: 0 -15px", 4, "ngIf"], [4, "ngIf"], [1, "view-data-row-container", 2, "margin", "0 -15px"], ["label", "plan", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], ["label", "planCourse", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], ["label", "instructor", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], ["label", "tsp", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], ["label", "attendance_Percentage", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], ["label", "from_Date", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], ["label", "to_Date", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], ["label", "notes", 1, "col-md-2_4", "col-md-3", "col-sm-4", "col-6", "mbottom-20", "p-0", 3, "value"], [3, "implementation", "closeAfterUpdate"]], template: function ImplementationGeneralDataViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2, 3)(4, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "page-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ImplementationGeneralDataViewComponent_button_6_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ImplementationGeneralDataViewComponent_button_7_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ImplementationGeneralDataViewComponent_div_10_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ImplementationGeneralDataViewComponent_ng_template_11_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isView)("ngIfElse", _r4);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, _shared_skeletons_view_card_row_skeleton_view_card_row_skeleton_component__WEBPACK_IMPORTED_MODULE_6__.ViewCardRowSkeletonComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _add_implementation_implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_7__.ImplementationGeneralDataComponent], styles: ["@media (min-width: 991px) {\n  .col-md-2_4[_ngcontent-%COMP%] {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcGxlbWVudGF0aW9uLWdlbmVyYWwtZGF0YS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaW1wbGVtZW50YXRpb24tZ2VuZXJhbC1kYXRhLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAuY29sLW1kLTJfNCB7XHJcbiAgICBmbGV4OiAwIDAgMjAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7287:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/training/components/implementation/implementation-view/implementation-view-core/implementation-view-core.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationViewCoreComponent": () => (/* binding */ ImplementationViewCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _add_implementation_implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../add-implementation/implementation-employees/implementation-employees.component */ 30338);
/* harmony import */ var _add_implementation_implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../add-implementation/implementation-lectures/implementation-lectures.component */ 14162);
/* harmony import */ var _add_implementation_implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../add-implementation/implementation-expenses/implementation-expenses.component */ 66626);
/* harmony import */ var _implementation_general_data_view_implementation_general_data_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../implementation-general-data-view/implementation-general-data-view.component */ 90109);











class ImplementationViewCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.implementationId = Number(param.id) ?? 0;
        });
    }
}
ImplementationViewCoreComponent.ɵfac = function ImplementationViewCoreComponent_Factory(t) { return new (t || ImplementationViewCoreComponent)(); };
ImplementationViewCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ImplementationViewCoreComponent, selectors: [["app-implementation-view-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 11, consts: [[1, "title-no-margin", "title-section"], ["title", "implementationViewcore"], [3, "url", "params"], [3, "implementationId"], [1, "mtop-20"], [3, "isView", "implementationId"]], template: function ImplementationViewCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 1)(3, "app-add-new-btn", 2)(4, "app-back-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-implementation-general-data-view", 3)(6, "div", 4)(7, "app-implementation-employees", 5)(8, "div", 4)(9, "app-implementation-lectures", 5)(10, "div", 4)(11, "app-implementation-expenses", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/implementation/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx.parentParam);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/implementation/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isView", true)("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isView", true)("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isView", true)("implementationId", ctx.implementationId);
    } }, dependencies: [_shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _add_implementation_implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_4__.ImplementationEmployeesComponent, _add_implementation_implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_5__.ImplementationLecturesComponent, _add_implementation_implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_6__.ImplementationExpensesComponent, _implementation_general_data_view_implementation_general_data_view_component__WEBPACK_IMPORTED_MODULE_7__.ImplementationGeneralDataViewComponent], styles: [".title-section[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcGxlbWVudGF0aW9uLXZpZXctY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7QUFDRiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi12aWV3LWNvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtc2VjdGlvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 45484:
/*!***********************************************************************************************!*\
  !*** ./src/app/training/components/instructor/instructor-index/instructor-index.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstructorIndexComponent": () => (/* binding */ InstructorIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_instructor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/instructor.service */ 37763);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











class InstructorIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(instructorService) {
        super();
        this.instructorService = instructorService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "en_Name",
            "ar_Name",
            "job",
            "is_TOT",
            "mobile",
            "actions",
        ];
        this.optionalColomns = [
            // "id",
            "code",
            "phone",
            "email",
            "qualification",
            "note",
        ];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.instructorService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    delete(model) {
        this.showLoading();
        this.instructorService.Delete(model.id).subscribe((res) => {
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(model) {
        let msg = this.msgTranslate(model.ar_Name, model.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(model);
        });
    }
}
InstructorIndexComponent.ɵfac = function InstructorIndexComponent_Factory(t) { return new (t || InstructorIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_training_services_instructor_service__WEBPACK_IMPORTED_MODULE_2__.InstructorService)); };
InstructorIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: InstructorIndexComponent, selectors: [["app-instructor-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 12, consts: [[1, "index-card"], ["title", "instructors", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function InstructorIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChangePage", function InstructorIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function InstructorIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "side-helping-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-dashboard-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.instructorService);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdG9yLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 25983:
/*!************************************************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/plan-view/general-info-plan-view/general-info-plan-view.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralInfoPlanViewComponent": () => (/* binding */ GeneralInfoPlanViewComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/traning-plan/training-plan-index.service */ 84656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _shared_skeletons_view_card_row_skeleton_view_card_row_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/skeletons/view-card-row-skeleton/view-card-row-skeleton.component */ 38368);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _add_paln_plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../add-paln/plan-general-data/plan-general-data.component */ 84724);












function GeneralInfoPlanViewComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GeneralInfoPlanViewComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.isUpdate = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GeneralInfoPlanViewComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GeneralInfoPlanViewComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.isUpdate = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GeneralInfoPlanViewComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-view-data-row-item", 16)(2, "app-view-data-row-item", 17)(3, "app-view-data-row-item", 18)(4, "app-view-data-row-item", 19)(5, "app-view-data-row-item", 20)(6, "app-view-data-row-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r10.plan == null ? null : ctx_r10.plan.en_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r10.plan == null ? null : ctx_r10.plan.ar_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r10.plan == null ? null : ctx_r10.plan.from_Date)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r10.plan == null ? null : ctx_r10.plan.to_Date)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r10.plan == null ? null : ctx_r10.plan.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r10.plan == null ? null : ctx_r10.plan.note);
} }
function GeneralInfoPlanViewComponent_div_10_app_view_card_row_skeleton_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-view-card-row-skeleton");
} }
function GeneralInfoPlanViewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GeneralInfoPlanViewComponent_div_10_div_1_Template, 7, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, GeneralInfoPlanViewComponent_div_10_app_view_card_row_skeleton_2_Template, 1, 0, "app-view-card-row-skeleton", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.isLoaded);
} }
function GeneralInfoPlanViewComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-plan-general-data", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closeAfterUpdate", function GeneralInfoPlanViewComponent_ng_template_11_Template_app_plan_general_data_closeAfterUpdate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.returnToView($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("plan", ctx_r5.plan);
} }
class GeneralInfoPlanViewComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(trainingPlanIndexService) {
        super();
        this.trainingPlanIndexService = trainingPlanIndexService;
        this.isUpdate = false;
        this.planId = 0;
        this.isLoaded = false;
    }
    onChangeBusinessAndCompanyId() {
        if (this.planId > 0 && this.checkNoBusinessOrCompany())
            this.getPlanById();
    }
    ngOnInit() { }
    getPlanById() {
        this.isLoaded = false;
        // this.showLoading();
        this.trainingPlanIndexService
            .getById(this.planId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.plan = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
            //  this.hideLoading();
        });
    }
    returnToView(updatedPlan) {
        this.isUpdate = false;
        this.plan = updatedPlan;
    }
}
GeneralInfoPlanViewComponent.ɵfac = function GeneralInfoPlanViewComponent_Factory(t) { return new (t || GeneralInfoPlanViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_2__.TrainingPlanIndexService)); };
GeneralInfoPlanViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GeneralInfoPlanViewComponent, selectors: [["app-general-info-plan-view"]], inputs: { planId: "planId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 4, consts: [[1, "row"], [1, "col-12"], ["container", ""], [1, "title-no-margin"], ["title", "generalInfo", 1, "stepper-section-title"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], [1, "mt-2"], ["class", "mtop-30", 4, "ngIf", "ngIfElse"], ["form", ""], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "ft-edit-1", "font-medium-3"], [1, "ft-corner-up-left", "font-medium-3"], [1, "mtop-30"], ["class", "view-data-row-container", 4, "ngIf"], [4, "ngIf"], [1, "view-data-row-container"], ["label", "en_Name", 1, "col-4", "col-md", 3, "value"], ["label", "ar_Name", 1, "col-4", "col-md", 3, "value"], ["label", "froM_DATE", 1, "col-4", "col-md", 3, "value", "isDate"], ["label", "tO_DATE", 1, "col-4", "col-md", 3, "value", "isDate"], ["label", "budget", 1, "col-4", "col-md", 3, "value"], ["label", "notes", 1, "col-4", "col-md", 3, "value"], [3, "plan", "closeAfterUpdate"]], template: function GeneralInfoPlanViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", null, 2)(4, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, GeneralInfoPlanViewComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, GeneralInfoPlanViewComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, GeneralInfoPlanViewComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, GeneralInfoPlanViewComponent_ng_template_11_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isUpdate)("ngIfElse", _r4);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_4__.ViewDataRowItemComponent, _shared_skeletons_view_card_row_skeleton_view_card_row_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.ViewCardRowSkeletonComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _add_paln_plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_6__.PlanGeneralDataComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtaW5mby1wbGFuLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6ImdlbmVyYWwtaW5mby1wbGFuLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAudGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ 3203:
/*!********************************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/plan-view/plan-view-core/plan-view-core.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanViewCoreComponent": () => (/* binding */ PlanViewCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _add_paln_training_needs_analysis_training_needs_analysis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../add-paln/training-needs-analysis/training-needs-analysis.component */ 91649);
/* harmony import */ var _add_paln_plan_courses_and_expensis_plan_courses_and_expensis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../add-paln/plan-courses-and-expensis/plan-courses-and-expensis.component */ 62625);
/* harmony import */ var _general_info_plan_view_general_info_plan_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-info-plan-view/general-info-plan-view.component */ 25983);










class PlanViewCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.showTna = false;
        this.showCourses = false;
        this.updateCourseDropdown = false;
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.planId = Number(param.id) ?? 0;
        });
    }
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}
PlanViewCoreComponent.ɵfac = function PlanViewCoreComponent_Factory(t) { return new (t || PlanViewCoreComponent)(); };
PlanViewCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PlanViewCoreComponent, selectors: [["app-plan-view-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 18, consts: [[1, "title-no-margin", "title-section"], ["title", "planViewcore"], [3, "url", "params"], [3, "planId"], [3, "id", "isView", "planId", "updateViewDisplay", "updateCourseDropdown"], [3, "id", "isView", "planId", "updateCourseDropdown", "updateViewDisplay"]], template: function PlanViewCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-add-new-btn", 2)(4, "app-back-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-general-info-plan-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "app-training-needs-analysis", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updateViewDisplay", function PlanViewCoreComponent_Template_app_training_needs_analysis_updateViewDisplay_6_listener($event) { ctx.showTna = $event; return ctx.scrollToSection(ctx.viewsManager.plan_tna); })("updateCourseDropdown", function PlanViewCoreComponent_Template_app_training_needs_analysis_updateCourseDropdown_6_listener() { return ctx.updateCourseDropdown = !ctx.updateCourseDropdown; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-plan-courses-and-expensis", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updateViewDisplay", function PlanViewCoreComponent_Template_app_plan_courses_and_expensis_updateViewDisplay_7_listener($event) { ctx.showCourses = $event; return ctx.scrollToSection(ctx.viewsManager.plan_course); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/training-plan/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx.parentParam);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/training-plan/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", ctx.showCourses || ctx.showTna);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("planId", ctx.planId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", ctx.showCourses);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.viewsManager.plan_tna)("isView", true)("planId", ctx.planId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", ctx.showTna);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.viewsManager.plan_course)("isView", true)("planId", ctx.planId)("updateCourseDropdown", ctx.updateCourseDropdown);
    } }, dependencies: [_shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _add_paln_training_needs_analysis_training_needs_analysis_component__WEBPACK_IMPORTED_MODULE_5__.TrainingNeedsAnalysisComponent, _add_paln_plan_courses_and_expensis_plan_courses_and_expensis_component__WEBPACK_IMPORTED_MODULE_6__.PlanCoursesAndExpensisComponent, _general_info_plan_view_general_info_plan_view_component__WEBPACK_IMPORTED_MODULE_7__.GeneralInfoPlanViewComponent], styles: [".title-section[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4tdmlldy1jb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtBQUNGIiwiZmlsZSI6InBsYW4tdmlldy1jb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNlY3Rpb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 99407:
/*!********************************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/training-plan-index/training-plan-index.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanIndexComponent": () => (/* binding */ TrainingPlanIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/traning-plan/training-plan-index.service */ 84656);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












class TrainingPlanIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(TrainingPlanIndexService) {
        super();
        this.TrainingPlanIndexService = TrainingPlanIndexService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "ar_Name",
            "en_Name",
            "from_Date",
            "to_Date",
            "budget",
            "count_Courses",
            "count_Persons",
            "actions",
        ];
        this.optionalColomns = ["note"];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.TrainingPlanIndexService.getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                res.data.map((e) => {
                    (e.id = e.plan_ID),
                        (e.from_Date = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDate(e.from_Date));
                    e.to_Date = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDate(e.to_Date);
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    delete(model) {
        this.showLoading();
        this.TrainingPlanIndexService.Delete(model.id).subscribe((res) => {
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(model) {
        let msg = this.msgTranslate(model.ar_Name, model.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(model);
        });
    }
}
TrainingPlanIndexComponent.ɵfac = function TrainingPlanIndexComponent_Factory(t) { return new (t || TrainingPlanIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_3__.TrainingPlanIndexService)); };
TrainingPlanIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: TrainingPlanIndexComponent, selectors: [["app-training-plan-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 13, consts: [[1, "index-card"], ["title", "trainingPlanIndex", 1, "mb-10", 3, "globalFunctions"], [3, "isRowClickable", "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function TrainingPlanIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function TrainingPlanIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TrainingPlanIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "side-helping-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-dashboard-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isRowClickable", true)("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.TrainingPlanIndexService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 11, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1wbGFuLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86878:
/*!**************************************************************************************************************!*\
  !*** ./src/app/training/components/training-requests/add-training-request/add-training-request.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTrainingRequestComponent": () => (/* binding */ AddTrainingRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/training-request.service */ 24714);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_personnel_setup_employees_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/personnel-setup/employees/employee-dropdown/employee-dropdown.component */ 70502);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _shared_components_dropdowns_training_setup_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training-setup/course-category-dropdown/course-category-dropdown.component */ 91621);
/* harmony import */ var _shared_components_dropdowns_training_course_course_by_course_category_dropdown_course_by_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training/course/course-by-course-category-dropdown/course-by-course-category-dropdown.component */ 92826);
/* harmony import */ var _shared_components_dropdowns_training_setup_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training-setup/reason-dropdown/reason-dropdown.component */ 16177);
/* harmony import */ var _shared_components_dropdowns_training_business_objective_dropdown_business_objective_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training/business-objective-dropdown/business-objective-dropdown.component */ 8815);






















function AddTrainingRequestComponent_app_add_new_btn_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-add-new-btn", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r1.moduleId, "/training-request/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("params", ctx_r1.parentParam);
} }
function AddTrainingRequestComponent_reset_form_btn_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "reset-form-btn", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddTrainingRequestComponent_reset_form_btn_31_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
class AddTrainingRequestComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(trainingRequestService) {
        super();
        this.trainingRequestService = trainingRequestService;
        this.trainingRequestId = 0;
        this.submitted = false;
        this.allowBusinessObjective = false;
        this.activatedRoute.params.subscribe((param) => {
            this.trainingRequestId = Number(param.id ?? 0);
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.trainingRequestId > 0 && this.checkNoBusinessOrCompany()) {
            this.getTrainingRequestById();
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.trainingRequestId, { nonNullable: true }],
            course_Category_ID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            course_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            reason_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            from_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            to_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            note: [null],
            employee_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            SelectedBusinessObjectiveIDs: [],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("from_Date", "to_Date"),
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            let body = {
                training_request: {
                    id: this.formCtrls.id.value,
                    course_ID: this.formCtrls.course_ID.value,
                    reason_ID: this.formCtrls.reason_ID.value,
                    from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.formCtrls.from_Date.value),
                    to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.formCtrls.to_Date.value),
                    note: this.formCtrls.note.value,
                },
                SelectedSubOrdenateEmployeeInstanceIDs: this.formCtrls.employee_id.value,
                SelectedBusinessObjectiveIDs: this.formCtrls.SelectedBusinessObjectiveIDs.value
            };
            // console.log(body)
            body.training_request.id > 0 ? this.update(body) : this.create(body);
        }
    }
    getTrainingRequestById() {
        this.showLoading();
        this.trainingRequestService
            .getById(this.trainingRequestId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.formCtrls.course_Category_ID.setValue(res.data.training_request.trA_Course.course_Category_ID);
                this.form.patchValue(res.data.training_request);
                this.formCtrls.SelectedBusinessObjectiveIDs.setValue(res.data.selectedBusinessObjectiveIDs);
                this.formCtrls.employee_id.setValue(res.data.selectedSubOrdenateEmployeeInstanceIDs);
                this.onReasonChange([res.data.training_request.trA_Reason]);
            }
            this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    create(data) {
        this.showLoading();
        this.trainingRequestService
            .create(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.trainingRequestId = res.data.training_request.id;
                this.formCtrls.id.setValue(this.trainingRequestId);
                let url = `/training/${this.moduleId}/training-request/edit/${this.trainingRequestId}`;
                this.navigateTo(url);
                // console.log(this.form.value)
                // console.log(res)
                // console.log(url)
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    update(data) {
        this.showLoading();
        this.trainingRequestService
            .update(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    onReasonChange(model) {
        if (model[0]?.hasBusinessObjectives) {
            this.allowBusinessObjective = true;
            this.formCtrls?.SelectedBusinessObjectiveIDs.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        }
        else {
            this.allowBusinessObjective = false;
            this.formCtrls?.SelectedBusinessObjectiveIDs.setValue([]);
            this.formCtrls?.SelectedBusinessObjectiveIDs.removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        }
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
}
AddTrainingRequestComponent.ɵfac = function AddTrainingRequestComponent_Factory(t) { return new (t || AddTrainingRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_4__.TrainingRequestService)); };
AddTrainingRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: AddTrainingRequestComponent, selectors: [["app-add-training-request"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 35, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["container", ""], [1, "title-no-margin"], ["title", "trainingRequest"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid", "mt-2"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "employees", 3, "control", "submitted", "multi", "filter"], [3, "control", "submitted", "filter"], [3, "control", "courseCategoryControl", "submitted", "filter"], [1, "col-md-4", "col-12", "ptop-15"], [3, "control", "submitted", "filter", "multi", "change"], [3, "control", "submitted", "filter", "multi", "disable"], ["label", "froM_DATE", 3, "control", "submitted"], ["label", "tO_DATE", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [3, "click"]], template: function AddTrainingRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2, 3)(4, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "page-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, AddTrainingRequestComponent_app_add_new_btn_7_Template, 1, 2, "app-add-new-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "app-back-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "mat-card-content", 8)(10, "div", 0)(11, "div", 1)(12, "form", 9)(13, "div", 0)(14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "app-employee-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "app-course-category-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](19, "app-course-by-course-category-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 14)(21, "app-reason-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddTrainingRequestComponent_Template_app_reason_dropdown_change_21_listener($event) { return ctx.onReasonChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "business-objective-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "app-datepicker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "app-datepicker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](29, "app-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "mat-card-actions", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, AddTrainingRequestComponent_reset_form_btn_31_Template, 1, 0, "reset-form-btn", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "submit-btn", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("onClick", function AddTrainingRequestComponent_Template_submit_btn_onClick_32_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.trainingRequestId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/training-request/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.employee_id)("submitted", ctx.submitted)("multi", true)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.course_Category_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.course_ID)("courseCategoryControl", ctx.formCtrls.course_Category_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.reason_ID)("submitted", ctx.submitted)("filter", true)("multi", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.SelectedBusinessObjectiveIDs)("submitted", ctx.submitted)("filter", true)("multi", true)("disable", !ctx.allowBusinessObjective);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false)("id", ctx.formCtrls.id.value);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_7__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_8__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _shared_components_dropdowns_personnel_setup_employees_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.EmployeeDropdownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, _shared_components_dropdowns_training_setup_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.CourseCategoryDropdownComponent, _shared_components_dropdowns_training_course_course_by_course_category_dropdown_course_by_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.CourseByCourseCategoryDropdownComponent, _shared_components_dropdowns_training_setup_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.ReasonDropdownComponent, _shared_components_dropdowns_training_business_objective_dropdown_business_objective_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.BusinessObjectiveDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdHJhaW5pbmctcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 53745:
/*!******************************************************************************************************************!*\
  !*** ./src/app/training/components/training-requests/training-request-index/training-request-index.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingRequestIndexComponent": () => (/* binding */ TrainingRequestIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_training_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/training-request */ 34879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/training-request.service */ 24714);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












class TrainingRequestIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(trainingRequestService) {
        super();
        this.trainingRequestService = trainingRequestService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "course_name",
            "reason",
            "fromDate",
            "toDate",
            "actions",
        ];
        this.optionalColomns = ["note"];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
        }
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize) {
            this.page.pageSize = pageSize;
        }
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.trainingRequestService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource((0,app_training_mapper_training_request__WEBPACK_IMPORTED_MODULE_2__.trainingRequestToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else {
                this.errorList(res?.message?.messages);
            }
        });
    }
    delete(model) {
        this.showLoading();
        this.trainingRequestService.Delete(model.id).subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                this.deleteSuccessfullyMsg(res.message.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    onDelete(model) {
        let msg = this.msgTranslate(model.course_name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(model);
            }
        });
    }
}
TrainingRequestIndexComponent.ɵfac = function TrainingRequestIndexComponent_Factory(t) { return new (t || TrainingRequestIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_3__.TrainingRequestService)); };
TrainingRequestIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: TrainingRequestIndexComponent, selectors: [["app-training-request-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 12, consts: [[1, "index-card"], ["title", "trainingRequest", 1, "mb-10", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function TrainingRequestIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function TrainingRequestIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TrainingRequestIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "side-helping-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-dashboard-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.trainingRequestService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1yZXF1ZXN0LWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_tsp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/tsp.service */ 82223);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











class TspIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(tspService) {
        super();
        this.tspService = tspService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "breif_Name",
            "en_Name",
            "ar_Name",
            "location",
            "webSite_URL",
            "actions",
        ];
        this.optionalColomns = [
            "address",
            "email",
            "mobile",
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
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        this.isLoaded = false;
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    delete(model) {
        this.showLoading();
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(model) {
        let msg = this.msgTranslate(model.ar_Name, model.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(model);
        });
    }
}
TspIndexComponent.ɵfac = function TspIndexComponent_Factory(t) { return new (t || TspIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_training_services_tsp_service__WEBPACK_IMPORTED_MODULE_2__.TspService)); };
TspIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TspIndexComponent, selectors: [["app-tsp-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 12, consts: [[1, "index-card"], ["title", "TSP", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function TspIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChangePage", function TspIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TspIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "side-helping-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-dashboard-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.tspService);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0c3AtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


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

/***/ 34538:
/*!***************************************************!*\
  !*** ./src/app/training/mapper/implementation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "implementationEmployeeToDisplay": () => (/* binding */ implementationEmployeeToDisplay),
/* harmony export */   "implementationExpenseToDisplay": () => (/* binding */ implementationExpenseToDisplay),
/* harmony export */   "implementationLectureToDisplay": () => (/* binding */ implementationLectureToDisplay),
/* harmony export */   "implementationListToDisplay": () => (/* binding */ implementationListToDisplay),
/* harmony export */   "implementationToDisplay": () => (/* binding */ implementationToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function implementationToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            plan: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_Plan_Course?.trA_PLan?.ar_Name, ele.trA_Plan_Course?.trA_PLan?.en_Name),
            course: ele.trA_Plan_Course?.name,
            fromDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.from_Date),
            toDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.to_Date),
            instructor: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_Instructor?.ar_Name, ele.trA_Instructor?.en_Name),
            tsp: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_TSP?.ar_Name, ele.trA_TSP?.en_Name),
        };
    });
}
function implementationListToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            id: ele.impelementation_ID,
            planName: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.plan?.ar_Name, ele.plan?.en_Name),
            course: ele.plan_Course?.name,
            from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.from_Date),
            to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.to_Date),
        };
    });
}
function implementationExpenseToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            expense: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_Expense?.ar_Name, ele.trA_Expense?.en_Name),
            value: ele.expense_Value,
        };
    });
}
function implementationEmployeeToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            code: ele.person?.code,
            employee: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.person?.ar_Name, ele.person?.en_Name),
            department: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.org?.ar_Name, ele.org?.en_Name),
            job: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.job_Title?.ar_Name, ele.job_Title?.en_Name),
        };
    });
}
function implementationLectureToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            dayDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.day_Date),
            startHour: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(ele.start_Houre),
            endHour: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(ele.end_Houre),
            notes: ele.note,
        };
    });
}


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

/***/ 94142:
/*!*************************************************************************************!*\
  !*** ./src/app/training/services/implementation/implementation-employee.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationEmployeeService": () => (/* binding */ ImplementationEmployeeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ImplementationEmployeeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("training/ImplementationEmployees/Create", data);
    }
    getAll(implementationId) {
        return this.get("Training/ImplementationEmployees/GetEmployees", {
            params: {
                Implementation_ID: implementationId,
            },
        });
    }
    Delete(params) {
        return this.delete("Training/ImplementationEmployees/Delete", {
            params: params,
        });
    }
    DeleteAll(implementationId) {
        return this.delete("Training/ImplementationEmployees/DeleteAll", {
            params: { implementation_id: implementationId },
        });
    }
}
ImplementationEmployeeService.ɵfac = function ImplementationEmployeeService_Factory(t) { return new (t || ImplementationEmployeeService)(); };
ImplementationEmployeeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImplementationEmployeeService, factory: ImplementationEmployeeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 91781:
/*!*************************************************************************************!*\
  !*** ./src/app/training/services/implementation/implementation-expenses.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationExpensesService": () => (/* binding */ ImplementationExpensesService)
/* harmony export */ });
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class ImplementationExpensesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService {
    constructor() {
        super();
    }
    getAll(implementationId) {
        return this.get("Training/ImplementationExpenses/GetAll", {
            params: {
                $filter: `Implementation_ID eq ${implementationId}`,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.TRA_expense}`,
            },
        });
    }
    create(data) {
        return this.post("Training/ImplementationExpenses/Create", data);
    }
    Delete(params) {
        return this.delete("Training/ImplementationExpenses/Delete", {
            params: params,
        });
    }
}
ImplementationExpensesService.ɵfac = function ImplementationExpensesService_Factory(t) { return new (t || ImplementationExpensesService)(); };
ImplementationExpensesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ImplementationExpensesService, factory: ImplementationExpensesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 52829:
/*!*************************************************************************************!*\
  !*** ./src/app/training/services/implementation/implementation-lectures.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationLecturesService": () => (/* binding */ ImplementationLecturesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ImplementationLecturesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    // getList(implementationId: number, params: IPageParams) {
    //   return this.get<IResponse<IImplementationLectureModel[]>>(
    //     "Training/ImplementationLecture/GetAll",
    //     {
    //       params: {
    //         ...params,
    //         $filter: `Implementation_ID eq ${implementationId}`,
    //       },
    //     }
    //   );
    // }
    getAll(implementationId) {
        return this.get("Training/ImplementationLecture/GetAll", {
            params: {
                $filter: `Implementation_ID eq ${implementationId}`,
            },
        });
    }
    create(data) {
        return this.post("Training/ImplementationLecture/Create", data);
    }
    update(data) {
        return this.post("Training/ImplementationLecture/Edit", data);
    }
    Delete(id) {
        return this.delete("Training/ImplementationLecture/Delete", {
            params: { lecture_id: id },
        });
    }
}
ImplementationLecturesService.ɵfac = function ImplementationLecturesService_Factory(t) { return new (t || ImplementationLecturesService)(); };
ImplementationLecturesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImplementationLecturesService, factory: ImplementationLecturesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 51503:
/*!****************************************************************************!*\
  !*** ./src/app/training/services/implementation/implementation.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplementationService": () => (/* binding */ ImplementationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class ImplementationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("training/Implementation/Create", data);
    }
    update(data) {
        return this.post("training/Implementation/Edit", data);
    }
    getAll() {
        return this.get("training/Implementation/GetAll", {
            params: {
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.TRA_plan_course}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.trA_PLan},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.TRA_plan_course}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.TRA_Course}`,
            },
        });
    }
    getById(id) {
        return this.get("Training/Implementation/GetAll", {
            params: {
                $filter: `ID eq ${id}`,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.TRA_plan_course}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.trA_PLan},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Tra_Instructor},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.TRA_TSP}`,
            },
        });
    }
    getList(params) {
        return this.get("training/Implementation/GetList", {
            params: params,
        });
    }
    Delete(Id) {
        return this.delete("training/Implementation/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        return this.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            res.data = (0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_2__.implementationToDisplay)(res.data);
            return res;
        }));
    }
}
ImplementationService.ɵfac = function ImplementationService_Factory(t) { return new (t || ImplementationService)(); };
ImplementationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ImplementationService, factory: ImplementationService.ɵfac, providedIn: "root" });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/training/components/courses/course-index/course-index.component */ 45052);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tsp/tsp-index/tsp-index.component */ 73507);
/* harmony import */ var _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tsp/add-tsp/add-tsp.component */ 25646);
/* harmony import */ var _components_instructor_instructor_index_instructor_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/instructor/instructor-index/instructor-index.component */ 45484);
/* harmony import */ var _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/instructor/add-instructor/add-instructor.component */ 91523);
/* harmony import */ var app_training_components_courses_add_course_add_course_core_add_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/training/components/courses/add-course/add-course-core/add-course.component */ 87078);
/* harmony import */ var _components_training_requests_training_request_index_training_request_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/training-requests/training-request-index/training-request-index.component */ 53745);
/* harmony import */ var _components_training_requests_add_training_request_add_training_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/training-requests/add-training-request/add-training-request.component */ 86878);
/* harmony import */ var _components_training_plan_training_plan_index_training_plan_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/training-plan/training-plan-index/training-plan-index.component */ 99407);
/* harmony import */ var _components_training_plan_add_paln_plan_core_plan_core_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/training-plan/add-paln/plan-core/plan-core.component */ 20430);
/* harmony import */ var _components_training_plan_plan_view_plan_view_core_plan_view_core_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/training-plan/plan-view/plan-view-core/plan-view-core.component */ 3203);
/* harmony import */ var _components_implementation_implementation_index_implementation_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/implementation/implementation-index/implementation-index.component */ 60480);
/* harmony import */ var _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/implementation/add-implementation/add-implementation-core/add-implementation-core.component */ 69706);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _components_implementation_implementation_view_implementation_view_core_implementation_view_core_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/implementation/implementation-view/implementation-view-core/implementation-view-core.component */ 7287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);




















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
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: app_training_components_courses_add_course_add_course_core_add_course_component__WEBPACK_IMPORTED_MODULE_7__.AddCourseComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_course },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: app_training_components_courses_add_course_add_course_core_add_course_component__WEBPACK_IMPORTED_MODULE_7__.AddCourseComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_course },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "tsp",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.tsp },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_3__.TspIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.tsp_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_4__.AddTspComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_tsp },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_4__.AddTspComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_tsp },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "instructor",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.instructor },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_instructor_instructor_index_instructor_index_component__WEBPACK_IMPORTED_MODULE_5__.InstructorIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.instructor_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_6__.AddInstructorComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_instructor },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_6__.AddInstructorComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_instructor },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "training-request",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.training_request },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_training_requests_training_request_index_training_request_index_component__WEBPACK_IMPORTED_MODULE_8__.TrainingRequestIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.training_request_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_training_requests_add_training_request_add_training_request_component__WEBPACK_IMPORTED_MODULE_9__.AddTrainingRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_request },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_training_requests_add_training_request_add_training_request_component__WEBPACK_IMPORTED_MODULE_9__.AddTrainingRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_request },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "training-plan",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.training_plan },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_training_plan_training_plan_index_training_plan_index_component__WEBPACK_IMPORTED_MODULE_10__.TrainingPlanIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.training_plan_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_training_plan_add_paln_plan_core_plan_core_component__WEBPACK_IMPORTED_MODULE_11__.PlanCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_plan },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_training_plan_plan_view_plan_view_core_plan_view_core_component__WEBPACK_IMPORTED_MODULE_12__.PlanViewCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_plan },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "implementation",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.implementation },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_implementation_implementation_index_implementation_index_component__WEBPACK_IMPORTED_MODULE_13__.ImplementationIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.implementation_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_14__.AddImplementationCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_implementation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_implementation_implementation_view_implementation_view_core_implementation_view_core_component__WEBPACK_IMPORTED_MODULE_16__.ImplementationViewCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_implementation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
        ],
    },
];
class TrainingRoutingModule {
}
TrainingRoutingModule.ɵfac = function TrainingRoutingModule_Factory(t) { return new (t || TrainingRoutingModule)(); };
TrainingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: TrainingRoutingModule });
TrainingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](TrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


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
/* harmony import */ var _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/implementation/add-implementation/add-implementation-core/add-implementation-core.component */ 69706);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-routing.module */ 11436);
/* harmony import */ var _components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/courses/course-index/course-index.component */ 45052);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_courses_add_course_course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/courses/add-course/course-competence/course-competence.component */ 20246);
/* harmony import */ var _components_courses_add_course_course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/courses/add-course/course-outline/course-outline.component */ 32320);
/* harmony import */ var _components_courses_add_course_course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/courses/add-course/course-attachments/course-attachments.component */ 10352);
/* harmony import */ var _components_courses_add_course_course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/courses/add-course/course-tsp-and-instructor/course-tsp-and-instructor.component */ 15894);
/* harmony import */ var _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tsp/add-tsp/add-tsp.component */ 25646);
/* harmony import */ var _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tsp/tsp-index/tsp-index.component */ 73507);
/* harmony import */ var _components_courses_add_course_add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/courses/add-course/add-course-form/add-course-form.component */ 159);
/* harmony import */ var _components_instructor_instructor_index_instructor_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/instructor/instructor-index/instructor-index.component */ 45484);
/* harmony import */ var _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/instructor/add-instructor/add-instructor.component */ 91523);
/* harmony import */ var app_training_components_courses_add_course_course_general_data_course_general_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/training/components/courses/add-course/course-general-data/course-general-data.component */ 44140);
/* harmony import */ var app_training_components_courses_add_course_add_course_core_add_course_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/training/components/courses/add-course/add-course-core/add-course.component */ 87078);
/* harmony import */ var _components_training_requests_training_request_index_training_request_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/training-requests/training-request-index/training-request-index.component */ 53745);
/* harmony import */ var _components_training_requests_add_training_request_add_training_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/training-requests/add-training-request/add-training-request.component */ 86878);
/* harmony import */ var _components_training_plan_training_plan_index_training_plan_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/training-plan/training-plan-index/training-plan-index.component */ 99407);
/* harmony import */ var _components_training_plan_add_paln_plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/training-plan/add-paln/plan-general-data/plan-general-data.component */ 84724);
/* harmony import */ var _components_training_plan_add_paln_training_needs_analysis_training_needs_analysis_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/training-plan/add-paln/training-needs-analysis/training-needs-analysis.component */ 91649);
/* harmony import */ var _components_training_plan_add_paln_plan_courses_and_expensis_plan_courses_and_expensis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/training-plan/add-paln/plan-courses-and-expensis/plan-courses-and-expensis.component */ 62625);
/* harmony import */ var _components_training_plan_add_paln_plan_core_plan_core_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/training-plan/add-paln/plan-core/plan-core.component */ 20430);
/* harmony import */ var _components_training_plan_plan_view_general_info_plan_view_general_info_plan_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/training-plan/plan-view/general-info-plan-view/general-info-plan-view.component */ 25983);
/* harmony import */ var _components_training_plan_plan_view_plan_view_core_plan_view_core_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/training-plan/plan-view/plan-view-core/plan-view-core.component */ 3203);
/* harmony import */ var _components_training_plan_add_paln_plan_expenses_plan_expenses_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/training-plan/add-paln/plan-expenses/plan-expenses.component */ 7296);
/* harmony import */ var _components_implementation_implementation_index_implementation_index_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/implementation/implementation-index/implementation-index.component */ 60480);
/* harmony import */ var _components_implementation_add_implementation_implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/implementation/add-implementation/implementation-general-data/implementation-general-data.component */ 99778);
/* harmony import */ var _components_implementation_add_implementation_implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/implementation/add-implementation/implementation-employees/implementation-employees.component */ 30338);
/* harmony import */ var _components_implementation_add_implementation_implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/implementation/add-implementation/implementation-lectures/implementation-lectures.component */ 14162);
/* harmony import */ var _components_implementation_add_implementation_implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/implementation/add-implementation/implementation-expenses/implementation-expenses.component */ 66626);
/* harmony import */ var _components_implementation_implementation_view_implementation_view_core_implementation_view_core_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/implementation/implementation-view/implementation-view-core/implementation-view-core.component */ 7287);
/* harmony import */ var _components_implementation_implementation_view_implementation_general_data_view_implementation_general_data_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/implementation/implementation-view/implementation-general-data-view/implementation-general-data-view.component */ 90109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 22560);


































class TrainingModule {
}
TrainingModule.ɵfac = function TrainingModule_Factory(t) { return new (t || TrainingModule)(); };
TrainingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: TrainingModule });
TrainingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](TrainingModule, { declarations: [_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_2__.CourseIndexComponent,
        app_training_components_courses_add_course_add_course_core_add_course_component__WEBPACK_IMPORTED_MODULE_14__.AddCourseComponent,
        app_training_components_courses_add_course_course_general_data_course_general_data_component__WEBPACK_IMPORTED_MODULE_13__.CourseGeneralDataComponent,
        _components_courses_add_course_course_competence_course_competence_component__WEBPACK_IMPORTED_MODULE_4__.CourseCompetenceComponent,
        _components_courses_add_course_course_outline_course_outline_component__WEBPACK_IMPORTED_MODULE_5__.CourseOutlineComponent,
        _components_courses_add_course_course_attachments_course_attachments_component__WEBPACK_IMPORTED_MODULE_6__.CourseAttachmentsComponent,
        _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_8__.AddTspComponent,
        _components_courses_add_course_course_tsp_and_instructor_course_tsp_and_instructor_component__WEBPACK_IMPORTED_MODULE_7__.CourseTspAndInstructorComponent,
        _components_tsp_tsp_index_tsp_index_component__WEBPACK_IMPORTED_MODULE_9__.TspIndexComponent,
        _components_courses_add_course_add_course_form_add_course_form_component__WEBPACK_IMPORTED_MODULE_10__.AddCourseFormComponent,
        _components_instructor_instructor_index_instructor_index_component__WEBPACK_IMPORTED_MODULE_11__.InstructorIndexComponent,
        _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_12__.AddInstructorComponent,
        _components_training_requests_training_request_index_training_request_index_component__WEBPACK_IMPORTED_MODULE_15__.TrainingRequestIndexComponent,
        _components_training_requests_add_training_request_add_training_request_component__WEBPACK_IMPORTED_MODULE_16__.AddTrainingRequestComponent,
        _components_training_plan_training_plan_index_training_plan_index_component__WEBPACK_IMPORTED_MODULE_17__.TrainingPlanIndexComponent,
        _components_training_plan_add_paln_plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_18__.PlanGeneralDataComponent,
        _components_training_plan_add_paln_training_needs_analysis_training_needs_analysis_component__WEBPACK_IMPORTED_MODULE_19__.TrainingNeedsAnalysisComponent,
        _components_training_plan_add_paln_plan_courses_and_expensis_plan_courses_and_expensis_component__WEBPACK_IMPORTED_MODULE_20__.PlanCoursesAndExpensisComponent,
        _components_training_plan_add_paln_plan_core_plan_core_component__WEBPACK_IMPORTED_MODULE_21__.PlanCoreComponent,
        _components_training_plan_plan_view_general_info_plan_view_general_info_plan_view_component__WEBPACK_IMPORTED_MODULE_22__.GeneralInfoPlanViewComponent,
        _components_training_plan_plan_view_plan_view_core_plan_view_core_component__WEBPACK_IMPORTED_MODULE_23__.PlanViewCoreComponent,
        _components_training_plan_add_paln_plan_expenses_plan_expenses_component__WEBPACK_IMPORTED_MODULE_24__.PlanExpensesComponent,
        _components_implementation_implementation_index_implementation_index_component__WEBPACK_IMPORTED_MODULE_25__.ImplementationIndexComponent,
        _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_0__.AddImplementationCoreComponent,
        _components_implementation_add_implementation_implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_26__.ImplementationGeneralDataComponent,
        _components_implementation_add_implementation_implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_27__.ImplementationEmployeesComponent,
        _components_implementation_add_implementation_implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_28__.ImplementationLecturesComponent,
        _components_implementation_add_implementation_implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_29__.ImplementationExpensesComponent,
        _components_implementation_implementation_view_implementation_view_core_implementation_view_core_component__WEBPACK_IMPORTED_MODULE_30__.ImplementationViewCoreComponent,
        _components_implementation_implementation_view_implementation_general_data_view_implementation_general_data_view_component__WEBPACK_IMPORTED_MODULE_31__.ImplementationGeneralDataViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_33__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_training_training_module_ts.js.map