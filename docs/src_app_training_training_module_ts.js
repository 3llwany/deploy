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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






class CheckIsViewAllowedGuard {
    constructor(viewsService, router) {
        this.viewsService = viewsService;
        this.router = router;
        this.loadingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService);
        this.UserModules = viewsService.UserModules$.getValue();
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
CheckIsViewAllowedGuard.ɵfac = function CheckIsViewAllowedGuard_Factory(t) { return new (t || CheckIsViewAllowedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_auth_services_user_views_service__WEBPACK_IMPORTED_MODULE_1__.UserViewsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
CheckIsViewAllowedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CheckIsViewAllowedGuard, factory: CheckIsViewAllowedGuard.ɵfac, providedIn: "root" });


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
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);









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
            "penaletyPercentege",
            "threeMontheEvalution",
            "isFree",
            "sixMontheEvalution",
        ];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_training_mapper_course__WEBPACK_IMPORTED_MODULE_2__.courseToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
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
                this.errorList(res.message.messages);
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
CourseIndexComponent.ɵfac = function CourseIndexComponent_Factory(t) { return new (t || CourseIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService)); };
CourseIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CourseIndexComponent, selectors: [["app-course-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 8, consts: [[1, "index-card"], ["title", "courses", 1, "mb-10", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function CourseIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function CourseIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function CourseIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.courseService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/steps-footer/steps-footer.component */ 20957);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../implementation-general-data/implementation-general-data.component */ 99778);
/* harmony import */ var _implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../implementation-lectures/implementation-lectures.component */ 14162);
/* harmony import */ var _implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../implementation-expenses/implementation-expenses.component */ 66626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















const _c0 = ["stepper"];
function AddImplementationCoreComponent_app_add_new_btn_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-add-new-btn", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r0.moduleId, "/implementation/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
class AddImplementationCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.implementationId = 0;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.implementationId = Number(param.id ?? 0);
        });
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
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 32, consts: [[1, "title-no-margin", "title-section", "fixed-title"], ["title", "addImplementation"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "cards-no-shadow", "has-fixed-title"], [3, "linear", "selectionChange"], ["stepper", ""], [3, "label"], [1, "row"], [1, "col-12"], [1, "title-no-margin"], ["title", "generalInfo"], [1, "mt-2"], [1, "clearfix"], [3, "implementationId", "changeImplementationId", "updateEmployeeIndex"], [3, "implementationId"], [3, "stepper", "parentParam", "url", "pageParams"]], template: function AddImplementationCoreComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "mat-card")(15, "mat-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "page-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "mat-divider", 12)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "app-implementation-general-data", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changeImplementationId", function AddImplementationCoreComponent_Template_app_implementation_general_data_changeImplementationId_19_listener($event) { return ctx.getImplementationId($event); })("updateEmployeeIndex", function AddImplementationCoreComponent_Template_app_implementation_general_data_updateEmployeeIndex_19_listener() { return ctx.updateEmployeeIndex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "app-implementation-employees", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "app-implementation-lectures", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "app-implementation-expenses", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "steps-footer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.implementationId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/implementation/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("linear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 16, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 18, "general")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 20, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 22, "employees")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 24, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 26, "lectures")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 28, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 30, "expenses")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("implementationId", ctx.implementationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stepper", _r1)("parentParam", ctx.parentParam)("pageParams", ctx.pageParams);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_5__.StepsFooterComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepper, _implementation_general_data_implementation_general_data_component__WEBPACK_IMPORTED_MODULE_6__.ImplementationGeneralDataComponent, _implementation_employees_implementation_employees_component__WEBPACK_IMPORTED_MODULE_1__.ImplementationEmployeesComponent, _implementation_lectures_implementation_lectures_component__WEBPACK_IMPORTED_MODULE_7__.ImplementationLecturesComponent, _implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_8__.ImplementationExpensesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW1wbGVtZW50YXRpb24tY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_implementation_implementation_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/implementation/implementation-employee.service */ 94142);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);













class ImplementationEmployeesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationEmployeeService) {
        super();
        this.implementationEmployeeService = implementationEmployeeService;
        this.implementationId = 0;
        this.mandatoryColomns = [
            // "Ser",
            "code",
            "employee",
            "department",
            "job",
            "selectAll",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
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
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        }
        if (this.checkNoBusinessOrCompany() && this.implementationId > 0) {
            this.getAll();
        }
        else {
            this.isLoaded = true;
        }
    }
    getAll() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
        this.isLoaded = false;
        this.implementationEmployeeService
            .getAll(this.implementationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // display selected first
                res.data.sort((a, b) => a.isSelected === b.isSelected ? 0 : a.isSelected ? -1 : 1);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource((0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_2__.implementationEmployeeToDisplay)(res.data));
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
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
            }
            else {
                this.errorList(res.message.messages);
            }
            this.hideLoading();
        });
    }
}
ImplementationEmployeesComponent.ɵfac = function ImplementationEmployeesComponent_Factory(t) { return new (t || ImplementationEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_employee_service__WEBPACK_IMPORTED_MODULE_3__.ImplementationEmployeeService)); };
ImplementationEmployeesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ImplementationEmployeesComponent, selectors: [["app-implementation-employees"]], inputs: { implementationId: "implementationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 8, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "employees"], [1, "container-fluid", "mtop-45"], ["checkboxColumnName", "isSelected", 1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "showPaginator", "showSpaceTop"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "color", "disabled", "onClick"]], template: function ImplementationEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-material-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-card-actions", 6)(11, "submit-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function ImplementationEmployeesComponent_Template_submit_btn_onClick_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("showPaginator", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.btn.darkBlue)("disabled", !ctx.implementationId);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_implementation_implementation_expenses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/implementation/implementation-expenses.service */ 91781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_training_setup_expenses_dropdown_expenses_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/training-setup/expenses-dropdown/expenses-dropdown.component */ 85917);




















function ImplementationExpensesComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "app-material-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("deleteRow", function ImplementationExpensesComponent_ng_container_19_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class ImplementationExpensesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationExpensesService) {
        super();
        this.implementationExpensesService = implementationExpensesService;
        this.implementationId = 0;
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "expense",
            "value",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNallable: true }],
            expenseId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            budget: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.gte(0)]],
        });
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
                this.errorList(res.message.messages);
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
        this.showLoading();
        this.implementationExpensesService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.clearForm();
                this.getAll();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
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
        this.showLoading();
        this.implementationExpensesService
            .Delete(deleteParams)
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
        this.form.reset( /* { id: 0 } */);
        this.submitted = false;
    }
}
ImplementationExpensesComponent.ɵfac = function ImplementationExpensesComponent_Factory(t) { return new (t || ImplementationExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_expenses_service__WEBPACK_IMPORTED_MODULE_4__.ImplementationExpensesService)); };
ImplementationExpensesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ImplementationExpensesComponent, selectors: [["app-implementation-expenses"]], inputs: { implementationId: "implementationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 10, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "expenses"], [1, "container-fluid", "mtop-45"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], ["label", "budget", "type", "number", 3, "control", "submitted"], [1, "col-md-3", "col-12"], ["icon", "pi pi-plus-circle", 1, "btn-large", "mt-1", "line-height-3", 3, "disabled", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "w-75", "m-auto"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "deleteRow"]], template: function ImplementationExpensesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-card-content", 4)(9, "div", 0)(10, "div", 1)(11, "courseForm", 5)(12, "div", 0)(13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-expenses-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 9)(18, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function ImplementationExpensesComponent_Template_submit_btn_onClick_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ImplementationExpensesComponent_ng_container_19_Template, 4, 7, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.expenseId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.budget)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.implementationId)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.implementationId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _shared_components_dropdowns_training_setup_expenses_dropdown_expenses_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.ExpensesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1leHBlbnNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


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





















function ImplementationGeneralDataComponent_reset_form_btn_24_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ImplementationGeneralDataComponent_reset_form_btn_24_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "margin-bottom": "-15px" }; };
class ImplementationGeneralDataComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationService) {
        super();
        this.implementationService = implementationService;
        this.submitted = false;
        this.implementationId = 0;
        this.changeImplementationId = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.updateEmployeeIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter(); // after update
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
        if (this.implementation)
            this.form.patchValue(this.implementation);
        // edit after add if change company
        else {
            this.showLoading();
            this.implementationService
                .getById(this.implementationId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                    this.form.patchValue(res.data[0]);
                    this.formCtrls.plan_ID.setValue(res.data[0].trA_Plan_Course?.plan_ID);
                    this.formCtrls.plan_Course_ID.setValue(res.data[0].plan_Course_ID);
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
        }
    }
    create(data) {
        this.showLoading();
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
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(data) {
        this.showLoading();
        this.implementationService
            .update(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.closeAfterUpdate.emit(res.data);
                this.updateEmployeeIndex.emit();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
}
ImplementationGeneralDataComponent.ɵfac = function ImplementationGeneralDataComponent_Factory(t) { return new (t || ImplementationGeneralDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_4__.ImplementationService)); };
ImplementationGeneralDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ImplementationGeneralDataComponent, selectors: [["app-implementation-general-data"]], inputs: { implementationId: "implementationId", implementation: "implementation" }, outputs: { changeImplementationId: "changeImplementationId", updateEmployeeIndex: "updateEmployeeIndex", closeAfterUpdate: "closeAfterUpdate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 29, consts: [[1, "container-fluid", "mtop-40"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-4", "col-lg-3", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "planControl", "submitted", "filter"], ["label", "from_Date", 3, "control", "submitted"], ["label", "to_Date", 3, "control", "submitted"], ["label", "attendance_Percentage", "type", "number", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function ImplementationGeneralDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-card-content", 0)(2, "div", 1)(3, "div", 2)(4, "form", 3)(5, "div", 1)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "app-training-plan-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "app-course-by-training-plan-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "app-instructor-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "app-tsp-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-datepicker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-datepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-card-actions", 11)(23, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function ImplementationGeneralDataComponent_Template_submit_btn_onClick_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, ImplementationGeneralDataComponent_reset_form_btn_24_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ 88035);
























function ImplementationLecturesComponent_reset_form_btn_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "reset-form-btn", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImplementationLecturesComponent_reset_form_btn_34_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ImplementationLecturesComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "mat-divider", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "app-material-table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("editRow", function ImplementationLecturesComponent_ng_container_35_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r5.lectureToEdit($event)); })("deleteRow", function ImplementationLecturesComponent_ng_container_35_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isRowClickable", false)("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showFilter", false)("showPaginator", false);
} }
class ImplementationLecturesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(implementationLectureService) {
        super();
        this.implementationLectureService = implementationLectureService;
        this.implementationId = 0;
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "ar_Name",
            "en_Name",
            "dayDate",
            "startHour",
            "endHour",
            "location",
            "note",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
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
        this.implementationLectureService
            .getAll(this.implementationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource((0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_5__.implementationLectureToDisplay)(res.data));
                this.isLoaded = true;
                // this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
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
        this.showLoading();
        this.implementationLectureService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.clearForm();
                this.getAll();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.implementationLectureService
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.clearForm();
                this.getAll();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
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
        this.showLoading();
        this.implementationLectureService
            .Delete(lecture.id)
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
        this.form.reset({ id: 0, days: [] });
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
}
ImplementationLecturesComponent.ɵfac = function ImplementationLecturesComponent_Factory(t) { return new (t || ImplementationLecturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_lectures_service__WEBPACK_IMPORTED_MODULE_6__.ImplementationLecturesService)); };
ImplementationLecturesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ImplementationLecturesComponent, selectors: [["app-implementation-lectures"]], inputs: { implementationId: "implementationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 29, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "lectures"], [1, "container-fluid", "mtop-45"], [3, "formGroup"], [1, "col-md-4", "col-lg-3", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], [1, "col-md-4", "col-lg-3", "col-12", "checkbox-below-input"], ["label", "dayDate", 3, "control", "submitted"], ["label", "isRepeated", "labelPosition", "before", 1, "w-100", 3, "control", "onChange"], ["label", "repeatEndDate", 3, "control", "submitted", "disabled"], [1, "col-12", "pright-15", "pleft-15", "mbottom-15"], [3, "control", "submitted"], ["label", "startHour", 3, "control", "submitted"], ["label", "endHour", 3, "control", "submitted"], ["label", "location", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "disabled", "id", "color", "iconPositionBefore", "onClick"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "w-75", "m-auto"], [1, "table-in-forms", 3, "isRowClickable", "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showFilter", "showPaginator", "editRow", "deleteRow"]], template: function ImplementationLecturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "mat-card-content", 4)(9, "div", 0)(10, "div", 1)(11, "courseForm", 5)(12, "div", 0)(13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "app-check-box", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onChange", function ImplementationLecturesComponent_Template_app_check_box_onChange_19_listener($event) { return ctx.onChangeIsRepeated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "app-datepicker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "weekdays-checkboxes", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](25, "app-timepicker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "app-timepicker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](29, "app-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](31, "app-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "mat-card-actions", 19)(33, "submit-btn", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onClick", function ImplementationLecturesComponent_Template_submit_btn_onClick_33_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](34, ImplementationLecturesComponent_reset_form_btn_34_Template, 1, 0, "reset-form-btn", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, ImplementationLecturesComponent_ng_container_35_Template, 4, 8, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.day_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.isRepeated);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.repeatEndDate)("submitted", ctx.submitted)("disabled", !ctx.formCtrls.isRepeated.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("hidden", !ctx.formCtrls.isRepeated.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.days)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.start_Houre)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.end_Houre)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.location)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.implementationId)("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.implementationId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_10__.CheckBoxComponent, _shared_components_resources_dynamic_form_field_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__.TimepickerComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_12__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_13__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_14__.PageTitleComponent, _shared_components_checkbox_weekdays_checkboxes_weekdays_checkboxes_component__WEBPACK_IMPORTED_MODULE_15__.WeekdaysCheckboxesComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective], styles: [".mat-checkbox-inner-container {\n  margin-right: 2px !important;\n  margin-left: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcGxlbWVudGF0aW9uLWxlY3R1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQUNGIiwiZmlsZSI6ImltcGxlbWVudGF0aW9uLWxlY3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/training/mapper/implementation */ 34538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/implementation/implementation.service */ 51503);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);









class ImplementationIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(implementationService) {
        super();
        this.implementationService = implementationService;
        this.mandatoryColomns = [
            "Ser",
            "planName",
            "course",
            "from_Date",
            "to_Date",
            "count_Employees",
            "actions",
        ];
        this.optionalColomns = ["id"];
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource((0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_1__.implementationListToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
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
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
ImplementationIndexComponent.ɵfac = function ImplementationIndexComponent_Factory(t) { return new (t || ImplementationIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_training_services_implementation_implementation_service__WEBPACK_IMPORTED_MODULE_2__.ImplementationService)); };
ImplementationIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ImplementationIndexComponent, selectors: [["app-implementation-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "implementation", 3, "globalFunctions"], [3, "isRowClickable", "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "deleteRow"]], template: function ImplementationIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function ImplementationIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function ImplementationIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isRowClickable", true)("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.implementationService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_instructor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/instructor.service */ 37763);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);








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
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
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
                this.errorList(res.message.messages);
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
InstructorIndexComponent.ɵfac = function InstructorIndexComponent_Factory(t) { return new (t || InstructorIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_training_services_instructor_service__WEBPACK_IMPORTED_MODULE_2__.InstructorService)); };
InstructorIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InstructorIndexComponent, selectors: [["app-instructor-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 8, consts: [[1, "index-card"], ["title", "instructors", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function InstructorIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function InstructorIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function InstructorIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.instructorService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdG9yLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
                this.errorList(res.message.messages);
            //  this.hideLoading();
        });
    }
    returnToView(updatedPlan) {
        this.isUpdate = false;
        this.plan = updatedPlan;
    }
}
GeneralInfoPlanViewComponent.ɵfac = function GeneralInfoPlanViewComponent_Factory(t) { return new (t || GeneralInfoPlanViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_2__.TrainingPlanIndexService)); };
GeneralInfoPlanViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GeneralInfoPlanViewComponent, selectors: [["app-general-info-plan-view"]], inputs: { planId: "planId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 4, consts: [[1, "row"], [1, "col-12"], ["container", ""], [1, "title-no-margin"], ["title", "generalInfo"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], [1, "mt-2"], ["class", "mtop-30", 4, "ngIf", "ngIfElse"], ["form", ""], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "ft-edit-1", "font-medium-3"], [1, "ft-corner-up-left", "font-medium-3"], [1, "mtop-30"], ["class", "view-data-row-container", 4, "ngIf"], [4, "ngIf"], [1, "view-data-row-container"], ["label", "en_Name", 3, "value"], ["label", "ar_Name", 3, "value"], ["label", "froM_DATE", 3, "value", "isDate"], ["label", "tO_DATE", 3, "value", "isDate"], ["label", "budget", 3, "value"], ["label", "notes", 3, "value"], [3, "plan", "closeAfterUpdate"]], template: function GeneralInfoPlanViewComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
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
PlanViewCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PlanViewCoreComponent, selectors: [["app-plan-view-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 18, consts: [[1, "title-no-margin", "title-section"], ["title", "planViewcore"], [3, "url", "params"], [3, "planId"], [3, "id", "isView", "planId", "updateViewDisplay", "updateCourseDropdown"], [3, "id", "isView", "planId", "updateCourseDropdown", "updateViewDisplay"]], template: function PlanViewCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-add-new-btn", 2)(5, "app-back-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-general-info-plan-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-training-needs-analysis", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updateViewDisplay", function PlanViewCoreComponent_Template_app_training_needs_analysis_updateViewDisplay_7_listener($event) { ctx.showTna = $event; return ctx.scrollToSection(ctx.viewsManager.plan_tna); })("updateCourseDropdown", function PlanViewCoreComponent_Template_app_training_needs_analysis_updateCourseDropdown_7_listener() { return ctx.updateCourseDropdown = !ctx.updateCourseDropdown; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "app-plan-courses-and-expensis", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updateViewDisplay", function PlanViewCoreComponent_Template_app_plan_courses_and_expensis_updateViewDisplay_8_listener($event) { ctx.showCourses = $event; return ctx.scrollToSection(ctx.viewsManager.plan_course); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
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
    } }, dependencies: [_shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _add_paln_training_needs_analysis_training_needs_analysis_component__WEBPACK_IMPORTED_MODULE_5__.TrainingNeedsAnalysisComponent, _add_paln_plan_courses_and_expensis_plan_courses_and_expensis_component__WEBPACK_IMPORTED_MODULE_6__.PlanCoursesAndExpensisComponent, _general_info_plan_view_general_info_plan_view_component__WEBPACK_IMPORTED_MODULE_7__.GeneralInfoPlanViewComponent], styles: [".title-section[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4tdmlldy1jb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtBQUNGIiwiZmlsZSI6InBsYW4tdmlldy1jb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNlY3Rpb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/traning-plan/training-plan-index.service */ 84656);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);









class TrainingPlanIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(TrainingPlanIndexService) {
        super();
        this.TrainingPlanIndexService = TrainingPlanIndexService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "ar_Name",
            "en_Name",
            "from_Date",
            "to_Date",
            "budget",
            "count_Courses",
            "count_Persons",
            "actions",
        ];
        this.optionalColomns = ["note", "id"];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
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
                this.errorList(res.message.messages);
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
TrainingPlanIndexComponent.ɵfac = function TrainingPlanIndexComponent_Factory(t) { return new (t || TrainingPlanIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_3__.TrainingPlanIndexService)); };
TrainingPlanIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TrainingPlanIndexComponent, selectors: [["app-training-plan-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 9, consts: [[1, "index-card"], ["title", "trainingPlanIndex", 1, "mb-10", 3, "globalFunctions"], [3, "isRowClickable", "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function TrainingPlanIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function TrainingPlanIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TrainingPlanIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isRowClickable", true)("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.TrainingPlanIndexService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1wbGFuLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_training_setup_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training-setup/course-category-dropdown/course-category-dropdown.component */ 91621);
/* harmony import */ var _shared_components_dropdowns_training_course_course_by_course_category_dropdown_course_by_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training/course/course-by-course-category-dropdown/course-by-course-category-dropdown.component */ 92826);
/* harmony import */ var _shared_components_dropdowns_training_setup_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training-setup/reason-dropdown/reason-dropdown.component */ 16177);
/* harmony import */ var _shared_components_dropdowns_training_business_objective_dropdown_business_objective_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/training/business-objective-dropdown/business-objective-dropdown.component */ 8815);























function AddTrainingRequestComponent_app_add_new_btn_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-add-new-btn", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r1.moduleId, "/training-request/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("params", ctx_r1.parentParam);
} }
function AddTrainingRequestComponent_reset_form_btn_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "reset-form-btn", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddTrainingRequestComponent_reset_form_btn_32_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r3.clearForm()); });
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
            course_Category_ID: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            course_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            reason_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            from_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            to_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            note: [null],
            employee_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            SelectedBusinessObjectiveIDs: [],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates('from_Date', 'to_Date'),
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
            console.log(body);
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
            }
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
                console.log(this.form.value);
                console.log(res);
                console.log(url);
            }
            else {
                this.errorList(res.message.messages);
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
                this.errorList(res.message.messages);
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
AddTrainingRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: AddTrainingRequestComponent, selectors: [["app-add-training-request"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 35, consts: [[1, "row"], [1, "col-12", "cards-no-shadow"], [1, "form-card"], ["container", ""], [1, "title-no-margin"], ["title", "trainingRequest"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid", "mt-2"], [1, "col-12"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "employees", 3, "control", "submitted", "multi", "filter"], [3, "control", "submitted", "filter"], [3, "control", "courseCategoryControl", "submitted", "filter"], [1, "col-md-4", "col-12", "ptop-15"], [3, "control", "submitted", "filter", "multi", "change"], [3, "control", "submitted", "filter", "multi", "disable"], ["label", "froM_DATE", 3, "control", "submitted"], ["label", "tO_DATE", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [3, "click"]], template: function AddTrainingRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2, 3)(5, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "page-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, AddTrainingRequestComponent_app_add_new_btn_8_Template, 1, 2, "app-add-new-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "app-back-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "mat-card-content", 8)(11, "div", 0)(12, "div", 9)(13, "form", 10)(14, "div", 0)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](16, "app-employee-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "app-course-category-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "app-course-by-course-category-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "div", 15)(22, "app-reason-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddTrainingRequestComponent_Template_app_reason_dropdown_change_22_listener($event) { return ctx.onReasonChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "business-objective-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](26, "app-datepicker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](28, "app-datepicker", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "app-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "mat-card-actions", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](32, AddTrainingRequestComponent_reset_form_btn_32_Template, 1, 0, "reset-form-btn", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "submit-btn", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("onClick", function AddTrainingRequestComponent_Template_submit_btn_onClick_33_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_7__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_8__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _shared_components_dropdowns_personnel_setup_employees_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.EmployeeDropdownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerComponent, _shared_components_dropdowns_training_setup_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.CourseCategoryDropdownComponent, _shared_components_dropdowns_training_course_course_by_course_category_dropdown_course_by_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.CourseByCourseCategoryDropdownComponent, _shared_components_dropdowns_training_setup_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.ReasonDropdownComponent, _shared_components_dropdowns_training_business_objective_dropdown_business_objective_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.BusinessObjectiveDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdHJhaW5pbmctcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_training_mapper_training_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/mapper/training-request */ 34879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/services/training-request.service */ 24714);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);









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
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
        }
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_training_mapper_training_request__WEBPACK_IMPORTED_MODULE_2__.trainingRequestToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else {
                this.errorList(res.message.messages);
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
                this.errorList(res.message.messages);
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
TrainingRequestIndexComponent.ɵfac = function TrainingRequestIndexComponent_Factory(t) { return new (t || TrainingRequestIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_3__.TrainingRequestService)); };
TrainingRequestIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TrainingRequestIndexComponent, selectors: [["app-training-request-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 8, consts: [[1, "index-card"], ["title", "trainingRequest", 1, "mb-10", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function TrainingRequestIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function TrainingRequestIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TrainingRequestIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.trainingRequestService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1yZXF1ZXN0LWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);








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
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
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
                this.errorList(res.message.messages);
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
TspIndexComponent.ɵfac = function TspIndexComponent_Factory(t) { return new (t || TspIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_training_services_tsp_service__WEBPACK_IMPORTED_MODULE_2__.TspService)); };
TspIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TspIndexComponent, selectors: [["app-tsp-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 8, consts: [[1, "index-card"], ["title", "TSP", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function TspIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function TspIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TspIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.tspService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0c3AtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


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
            id: ele.id,
            plan: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_Plan_Course?.trA_PLan?.ar_Name, ele.trA_Plan_Course?.trA_PLan?.en_Name),
            course: ele.trA_Plan_Course?.name,
            from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.from_Date),
            to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.to_Date),
            attendance_Percentage: ele.attendance_Percentage,
            note: ele.note,
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
        };
    });
}


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
                $expand: app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.TRA_plan_course,
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);



















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
                component: _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_14__.AddImplementationCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_implementation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_15__.CheckIsViewAllowedGuard],
            },
        ],
    },
];
class TrainingRoutingModule {
}
TrainingRoutingModule.ɵfac = function TrainingRoutingModule_Factory(t) { return new (t || TrainingRoutingModule)(); };
TrainingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: TrainingRoutingModule });
TrainingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](TrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 94666);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 22560);
































class TrainingModule {
}
TrainingModule.ɵfac = function TrainingModule_Factory(t) { return new (t || TrainingModule)(); };
TrainingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: TrainingModule });
TrainingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](TrainingModule, { declarations: [_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_2__.CourseIndexComponent,
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
        _components_implementation_add_implementation_implementation_expenses_implementation_expenses_component__WEBPACK_IMPORTED_MODULE_29__.ImplementationExpensesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_training_training_module_ts.js.map