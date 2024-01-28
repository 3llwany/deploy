"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_training_training_module_ts"],{

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
            "penaletyPercentege",
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
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AddImplementationCoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddImplementationCoreComponent.ɵfac = function AddImplementationCoreComponent_Factory(t) { return new (t || AddImplementationCoreComponent)(); };
AddImplementationCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddImplementationCoreComponent, selectors: [["app-add-implementation-core"]], decls: 2, vars: 0, template: function AddImplementationCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " add-implementation-core works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW1wbGVtZW50YXRpb24tY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class ImplementationIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(implementationService) {
        super();
        this.implementationService = implementationService;
        this.mandatoryColomns = [
            "Ser",
            "title",
            "en_Name",
            "from_Date",
            "to_Date",
            "noOfEmployees",
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource((0,app_training_mapper_implementation__WEBPACK_IMPORTED_MODULE_1__.implementationToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(implementation) {
        let msg = implementation.id;
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
ImplementationIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ImplementationIndexComponent, selectors: [["app-implementation-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 9, consts: [[1, "row"], [1, "col-12"], ["title", "implementation", 3, "globalFunctions"], [3, "isRowClickable", "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "deleteRow"]], template: function ImplementationIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function ImplementationIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function ImplementationIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isRowClickable", false)("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.implementationService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBsZW1lbnRhdGlvbi1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);









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
InstructorIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InstructorIndexComponent, selectors: [["app-instructor-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [["title", "instructors", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function InstructorIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-content")(5, "app-material-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function InstructorIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function InstructorIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.instructorService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdG9yLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 20430:
/*!*********************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/add-paln/plan-core/plan-core.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanCoreComponent": () => (/* binding */ PlanCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/steps-footer/steps-footer.component */ 20957);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plan-general-data/plan-general-data.component */ 84724);
/* harmony import */ var _training_needs_analysis_training_needs_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../training-needs-analysis/training-needs-analysis.component */ 91649);
/* harmony import */ var _plan_courses_and_expensis_plan_courses_and_expensis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plan-courses-and-expensis/plan-courses-and-expensis.component */ 62625);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














const _c0 = ["stepper"];
function PlanCoreComponent_app_add_new_btn_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-add-new-btn", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r0.moduleId, "/training-plan/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
class PlanCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.planId = 0;
        this.updateCourseDropdown = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.planId = Number(param.id) ?? 0;
        });
    }
    stepChanged() {
        // prevent inputs to be invalid after next & back
        this.stepper.selected.interacted = false;
    }
    getPlanId(value) {
        this.planId = value;
    }
}
PlanCoreComponent.ɵfac = function PlanCoreComponent_Factory(t) { return new (t || PlanCoreComponent)(); };
PlanCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PlanCoreComponent, selectors: [["app-plan-core"]], viewQuery: function PlanCoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 24, consts: [[1, "title-no-margin", "title-section", "fixed-title"], ["title", "addPlan"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "cards-no-shadow", "has-fixed-title"], [3, "linear", "selectionChange"], ["stepper", ""], [3, "label"], [1, "row"], [1, "col-12"], [1, "title-no-margin"], ["title", "generalInfo"], [1, "mt-2"], [1, "clearfix"], [3, "changePlanId"], [3, "planId", "updateCourseDropdown"], [3, "stepper", "parentParam"]], template: function PlanCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PlanCoreComponent_app_add_new_btn_3_Template, 1, 2, "app-add-new-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-back-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "mat-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function PlanCoreComponent_Template_mat_stepper_selectionChange_7_listener() { return ctx.stepChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "mat-card")(15, "mat-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "page-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "mat-divider", 12)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "app-plan-general-data", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changePlanId", function PlanCoreComponent_Template_app_plan_general_data_changePlanId_19_listener($event) { return ctx.getPlanId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "app-training-needs-analysis", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updateCourseDropdown", function PlanCoreComponent_Template_app_training_needs_analysis_updateCourseDropdown_23_listener() { return ctx.updateCourseDropdown = !ctx.updateCourseDropdown; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "app-plan-courses-and-expensis", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "steps-footer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.planId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/training-plan/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("linear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 14, "general")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 18, "trainingNeedsAnalysis")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("planId", ctx.planId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 20, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 22, "planCoursesExpensis")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("planId", ctx.planId)("updateCourseDropdown", ctx.updateCourseDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("stepper", _r1)("parentParam", ctx.parentParam);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_4__.StepsFooterComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepper, _plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_5__.PlanGeneralDataComponent, _training_needs_analysis_training_needs_analysis_component__WEBPACK_IMPORTED_MODULE_6__.TrainingNeedsAnalysisComponent, _plan_courses_and_expensis_plan_courses_and_expensis_component__WEBPACK_IMPORTED_MODULE_7__.PlanCoursesAndExpensisComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".title-section[_ngcontent-%COMP%] {\n  background: #FFF;\n  border-radius: 4px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4tY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoicGxhbi1jb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDE1cHhcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 62625:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/add-paln/plan-courses-and-expensis/plan-courses-and-expensis.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanCoursesAndExpensisComponent": () => (/* binding */ PlanCoursesAndExpensisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/mapper/training-plan */ 55939);
/* harmony import */ var _plan_expenses_plan_expenses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plan-expenses/plan-expenses.component */ 7296);
/* harmony import */ var app_training_services_traning_plan_plan_courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/training/services/traning-plan/plan-courses.service */ 71205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/button/button.component */ 71812);
/* harmony import */ var _shared_components_dropdowns_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/tsp-dropdown/tsp-dropdown.component */ 30928);
/* harmony import */ var _shared_components_dropdowns_instructor_dropdown_instructor_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/instructor-dropdown/instructor-dropdown.component */ 84907);
/* harmony import */ var _shared_components_dropdowns_course_by_plan_dropdown_course_by_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/course-by-plan-dropdown/course-by-plan-dropdown.component */ 82798);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-spinner */ 88035);





























function PlanCoursesAndExpensisComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PlanCoursesAndExpensisComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r7.returnToView()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function PlanCoursesAndExpensisComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "mat-divider", 27)(3, "app-material-table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("isLoaded", ctx_r2.isLoadedSearch)("dataSource", ctx_r2.dataSourceSearch)("mandatoryColomns", ctx_r2.mandatoryColomnsSearch)("optionalColomns", ctx_r2.optionalColomns)("showPaginator", false)("showFilter", false);
} }
function PlanCoursesAndExpensisComponent_reset_form_btn_35_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "reset-form-btn", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PlanCoursesAndExpensisComponent_reset_form_btn_35_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r9.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function PlanCoursesAndExpensisComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 21)(1, "div", 1)(2, "mat-card", null, 2)(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "page-title", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "mat-divider", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "app-material-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteRow", function PlanCoursesAndExpensisComponent_div_36_Template_app_material_table_deleteRow_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r12.onDeleteEmployee($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "mat-card-actions", 17)(11, "app-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PlanCoursesAndExpensisComponent_div_36_Template_app_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r14.clearAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("isLoaded", ctx_r4.isLoadedEmployee)("dataSource", ctx_r4.dataSourceEmployee)("mandatoryColomns", ctx_r4.mandatoryColomnsEmployee)("optionalColomns", ctx_r4.optionalColomns)("actions", ctx_r4.rowFunctionsSelectedEmployees)("showPaginator", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r4.planId)("color", ctx_r4.btn.darkBlueBorder);
} }
function PlanCoursesAndExpensisComponent_div_45_app_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PlanCoursesAndExpensisComponent_div_45_app_button_8_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r17.showAddInsideView()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r16.planId)("iconPositionBefore", false)("color", ctx_r16.btn.darkBlue);
} }
function PlanCoursesAndExpensisComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 21)(1, "div", 1)(2, "mat-card", null, 2)(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "page-title", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "mat-card-content", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, PlanCoursesAndExpensisComponent_div_45_app_button_8_Template, 1, 3, "app-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "app-material-table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onChangePage", function PlanCoursesAndExpensisComponent_div_45_Template_app_material_table_onChangePage_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r19.getList($event.pageIndex + 1, $event.pageSize)); })("deleteRow", function PlanCoursesAndExpensisComponent_div_45_Template_app_material_table_deleteRow_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r21.onDelete($event)); })("editRow", function PlanCoursesAndExpensisComponent_div_45_Template_app_material_table_editRow_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r22.courseAndExpensesToEdit($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r6.showOnlyIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("isLoaded", ctx_r6.isLoadedCourses)("dataSource", ctx_r6.dataSourceCourses)("mandatoryColomns", ctx_r6.mandatoryColomnsCourses)("optionalColomns", ctx_r6.optionalColomns)("page", ctx_r6.page)("actions", ctx_r6.rowFunctions)("showPaginator", false)("showSpaceTop", false);
} }
class PlanCoursesAndExpensisComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(planCoursesService) {
        super();
        this.planCoursesService = planCoursesService;
        this.planId = 0;
        this.isView = false;
        this.showOnlyIndex = false;
        this.updateViewDisplay = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomnsSearch = [
            // "Ser",
            "code",
            "employeeNameEn",
            "employeeNameAr",
            "job",
            "selectAll",
        ];
        this.isLoadedSearch = false;
        this.mandatoryColomnsEmployee = [
            // "Ser",
            "code",
            "employeeNameEn",
            "employeeNameAr",
            "job",
            "actions",
        ];
        this.isLoadedEmployee = false;
        this.mandatoryColomnsCourses = [
            // "Ser",
            "title",
            "plan",
            "course",
            "fromDate",
            "toDate",
            "online",
            "budget",
            "actions",
        ];
        this.isLoadedCourses = false;
        this.optionalColomns = [];
        this.showIndexAfterSubmit = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            course_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            planCourseTitle: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            from_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            to_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            instructor_ID: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            note: [null],
            isOnline: [true],
            tsP_ID: [null],
        });
        this.formCtrls.course_ID.valueChanges.subscribe((courseId) => {
            if (courseId > 0)
                this.searchEmployees(courseId);
        });
        if (this.isView)
            this.showOnlyIndex = true;
    }
    onChangeBusinessAndCompanyId() {
        // if (this.dataSourceSearch?.data?.length > 0)
        //   this.dataSourceSearch = new MatTableDataSource(null);
        if (this.dataSourceCourses?.data?.length > 0)
            this.dataSourceCourses = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.planId > 0) {
            this.getList(this.firstPage);
        }
        else {
            this.isLoadedCourses = true;
        }
    }
    onModulesChanged() {
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__.ViewsManager.plan_course);
        this.rowFunctionsSelectedEmployees = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__.ViewsManager.plan_course_general_data);
    }
    ngOnChanges(changes) {
        if (changes.updateCourseDropdown) {
            this.searchEmployees(this.formCtrls?.course_ID.value);
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    // //////////////// section 1 >> course & employees //////////////// //
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                plan_Course: {
                    id: this.form.value.id,
                    Plan_ID: this.planId,
                    Course_ID: this.form.value.course_ID,
                    Name: this.form.value.planCourseTitle,
                    From_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.from_Date),
                    To_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.to_Date),
                    TSP_ID: this.form.value.tsP_ID,
                    Instructor_ID: this.form.value.instructor_ID,
                    Note: this.form.value.note,
                },
                IsOnline: this.form.value.isOnline ?? false,
                SelectedEmployeeInstanceIDs: [], // get from datasource employees
            };
            if (model.IsOnline)
                model.plan_Course.TSP_ID = null;
            this.dataSourceSearch?.data
                ?.filter((ele) => ele.isSelected)
                .forEach((selected) => {
                model.SelectedEmployeeInstanceIDs.push(selected.person_Instance_ID);
            });
            // employees added before
            this.dataSourceEmployee?.data?.forEach((emp) => {
                model.SelectedEmployeeInstanceIDs.push(emp.person_Instance_ID);
            });
            if (model.SelectedEmployeeInstanceIDs.length == 0) {
                this.warning("selectOneEmployee");
                return;
            }
            model.plan_Course.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    // add course and employees
    create(model) {
        this.showLoading();
        this.planCoursesService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.formCtrls.id.setValue(res.data.plan_Course.id);
                if (this.isView)
                    this.getList(this.currentPage);
                // update employees tables
                this.searchEmployees(model.plan_Course.Course_ID);
                this.getSelectedEmployees(model.plan_Course.Course_ID);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.planCoursesService
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.isView)
                    this.getList(this.currentPage);
                if (model.SelectedEmployeeInstanceIDs.length !=
                    this.dataSourceEmployee?.data?.length) {
                    // update employees tables
                    this.searchEmployees(model.plan_Course.Course_ID);
                    this.getSelectedEmployees(model.plan_Course.Course_ID);
                }
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    // get employees when select course
    searchEmployees(courseId) {
        this.dataSourceSearch = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource(null);
        if (courseId > 0) {
            this.isLoadedSearch = false;
            let searchParams = {
                planId: this.planId,
                Course_ID: courseId,
            };
            this.planCoursesService
                .getPlanEmployees(searchParams)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                    this.dataSourceSearch = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource((0,app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_4__.planCourseEmployeeToDisplay)(res.data));
                    this.isLoadedSearch = true;
                }
                else
                    this.errorList(res.message.messages);
            });
        }
    }
    // get employees selected >> in edit course
    getSelectedEmployees(courseId) {
        this.dataSourceEmployee = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource(null);
        if (courseId > 0) {
            this.isLoadedEmployee = false;
            let searchParams = {
                planId: this.planId,
                Course_ID: courseId,
            };
            this.planCoursesService
                .getSelectedEmployees(searchParams)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                    this.dataSourceEmployee = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource((0,app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_4__.planCourseEmployeeToDisplay)(res.data));
                    this.isLoadedEmployee = true;
                }
                else
                    this.errorList(res.message.messages);
            });
        }
    }
    changeIsOnline(value) {
        if (value)
            this.formCtrls.tsP_ID.clearValidators();
        else
            this.formCtrls.tsP_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]);
        this.formCtrls.tsP_ID.updateValueAndValidity();
    }
    onDeleteEmployee(employee) {
        let msg = this.msgTranslate(employee.employeeNameAr, employee.employeeNameEn);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.deleteEmployee(employee);
        });
    }
    deleteEmployee(employee) {
        let deleteParams = {
            person_instance_id: employee.person_Instance_ID,
            plan_course_id: this.formCtrls.id.value,
        };
        this.showLoading();
        this.planCoursesService
            .DeleteEmployee(deleteParams)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                // update employees tables
                this.searchEmployees(this.formCtrls.course_ID.value);
                this.getSelectedEmployees(this.formCtrls.course_ID.value);
            }
            else
                this.errorList(res.message.messages);
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
        this.planCoursesService
            .DeleteAllEmployees(this.formCtrls.id.value)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                // update employees tables
                this.searchEmployees(this.formCtrls.course_ID.value);
                this.dataSourceEmployee = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource([]);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset({ id: 0, isOnline: true });
        this.submitted = false;
        this.dataSourceEmployee = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource(null);
    }
    // //////////////// section 3 > index //////////////// //
    getList(page, pageSize) {
        this.dataSourceCourses = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource(null);
        this.isLoadedCourses = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.planCoursesService
            .getList(this.planId, params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSourceCourses = new _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableDataSource((0,app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_4__.planCourseToDisplay)(res.data));
                this.isLoadedCourses = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    courseAndExpensesToEdit(course) {
        this.form.patchValue(course);
        // this.formCtrls.course_ID.setValue(course.course_ID);
        this.formCtrls.planCourseTitle.setValue(course.name);
        this.formCtrls.isOnline.setValue(course.tsP_ID ? false : true);
        if (this.isView)
            this.showAddInsideView();
        this.getSelectedEmployees(course.course_ID);
    }
    onDelete(course) {
        let msg = course.title + " - " + course.course;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(course);
        });
    }
    delete(course) {
        this.showLoading();
        this.planCoursesService.Delete(course.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSourceCourses.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    // //////////////// submit all //////////////// //
    submitAll() {
        this.getList(this.currentPage);
        if (this.isView)
            this.returnToView();
        else {
            this.clearForm();
            this.expenseComponent.clearForm();
            this.showIndexAfterSubmit = true;
        }
    }
    // //////////////// view //////////////// //
    showAddInsideView() {
        this.updateViewDisplay.emit(true);
        this.showOnlyIndex = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    returnToView() {
        this.updateViewDisplay.emit(false);
        this.showOnlyIndex = true;
        this.clearForm();
        this.expenseComponent.clearForm();
    }
}
PlanCoursesAndExpensisComponent.ɵfac = function PlanCoursesAndExpensisComponent_Factory(t) { return new (t || PlanCoursesAndExpensisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](app_training_services_traning_plan_plan_courses_service__WEBPACK_IMPORTED_MODULE_6__.PlanCoursesService)); };
PlanCoursesAndExpensisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: PlanCoursesAndExpensisComponent, selectors: [["app-plan-courses-and-expensis"]], viewQuery: function PlanCoursesAndExpensisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_plan_expenses_plan_expenses_component__WEBPACK_IMPORTED_MODULE_5__.PlanExpensesComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.expenseComponent = _t.first);
    } }, inputs: { planId: "planId", isView: "isView", updateCourseDropdown: "updateCourseDropdown" }, outputs: { updateViewDisplay: "updateViewDisplay" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵNgOnChangesFeature"]], decls: 46, vars: 40, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "generalInformationAboutPlanCourse"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], [1, "container-fluid", "mtop-45"], [3, "formGroup"], [1, "col-md-4", "col-lg-3", "col-12"], [3, "control", "planId", "submitted", "filter", "changeList"], ["label", "planCourseTitle", 3, "control", "submitted"], ["label", "fromDate", 3, "control", "submitted"], ["label", "toDate", 3, "control", "submitted"], [3, "control", "submitted", "filter"], ["label", "notes", 3, "control", "submitted"], [1, "col-md-4", "col-lg-3", "col-12", "mbottom-20", "mtop-14"], ["label", "online", "labelPosition", "before", 1, "w-100", 3, "control", "onChange"], [4, "ngIf"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "disabled", "id", "color", "iconPositionBefore", "onClick"], [3, "click", 4, "ngIf"], ["class", "row mtop-26", 4, "ngIf"], [1, "row", "mtop-26"], [3, "planId", "planCourseId"], ["label", "saveAndSubmitPlan", 3, "disabled", "color", "click"], [1, "clearfix"], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "ft-corner-up-left", "font-medium-3"], [1, "w-75", "m-auto"], ["checkboxColumnName", "isSelected", 1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "showPaginator", "showFilter"], [3, "click"], ["title", "selectedEmployees"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "deleteRow"], ["label", "clearAll", 3, "disabled", "color", "click"], ["title", "planCoursesIndex"], [1, "container-fluid", "mtop-35"], ["label", "addPlan", "class", "float-right mb-1", "icon", "pi pi-plus-circle", 3, "disabled", "iconPositionBefore", "color", "click", 4, "ngIf"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "showPaginator", "showSpaceTop", "onChangePage", "deleteRow", "editRow"], ["label", "addPlan", "icon", "pi pi-plus-circle", 1, "float-right", "mb-1", 3, "disabled", "iconPositionBefore", "color", "click"]], template: function PlanCoursesAndExpensisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, " 1/2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, PlanCoursesAndExpensisComponent_button_9_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "mat-card-content", 5)(12, "div", 0)(13, "div", 1)(14, "form", 6)(15, "div", 0)(16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "app-course-by-plan-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](23, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](25, "app-instructor-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](27, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "div", 14)(29, "app-check-box", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onChange", function PlanCoursesAndExpensisComponent_Template_app_check_box_onChange_29_listener($event) { return ctx.changeIsOnline($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "app-tsp-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, PlanCoursesAndExpensisComponent_ng_container_32_Template, 4, 6, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "mat-card-actions", 17)(34, "submit-btn", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onClick", function PlanCoursesAndExpensisComponent_Template_submit_btn_onClick_34_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, PlanCoursesAndExpensisComponent_reset_form_btn_35_Template, 1, 0, "reset-form-btn", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, PlanCoursesAndExpensisComponent_div_36_Template, 12, 8, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "div", 21)(38, "div", 1)(39, "mat-card", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](41, "app-plan-expenses", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "mat-card-actions", 17)(43, "app-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PlanCoursesAndExpensisComponent_Template_app_button_click_43_listener() { return ctx.submitAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](45, PlanCoursesAndExpensisComponent_div_45_Template, 10, 9, "div", 20);
    } if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("hidden", ctx.showOnlyIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.showOnlyIndex && ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.course_ID)("planId", (tmp_4_0 = ctx.planId) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0)("submitted", ctx.submitted)("filter", true)("changeList", ctx.updateCourseDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.planCourseTitle)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.instructor_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.isOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("hidden", ctx.formCtrls.isOnline.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.tsP_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formCtrls.course_ID.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.planId)("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0 && (ctx.isView || ctx.showIndexAfterSubmit));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("hidden", ctx.showOnlyIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("planId", ctx.planId)("planCourseId", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.planId || ctx.formCtrls.id.value == 0)("color", ctx.btn.darkBlue);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.planId > 0 && (ctx.isView || ctx.showIndexAfterSubmit));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_10__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__.PageTitleComponent, _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_14__.ButtonComponent, _shared_components_dropdowns_tsp_dropdown_tsp_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.TspDropdownComponent, _shared_components_dropdowns_instructor_dropdown_instructor_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.IstructorDropdownComponent, _shared_components_dropdowns_course_by_plan_dropdown_course_by_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.CourseByPlanDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_25__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _plan_expenses_plan_expenses_component__WEBPACK_IMPORTED_MODULE_5__.PlanExpensesComponent], styles: [".mat-divider.w-75.m-auto[_ngcontent-%COMP%] {\n  border-top-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4tY291cnNlcy1hbmQtZXhwZW5zaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InBsYW4tY291cnNlcy1hbmQtZXhwZW5zaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpdmlkZXIudy03NS5tLWF1dG8ge1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7296:
/*!*****************************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/add-paln/plan-expenses/plan-expenses.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanExpensesComponent": () => (/* binding */ PlanExpensesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/mapper/training-plan */ 55939);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_traning_plan_plan_expenses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/traning-plan/plan-expenses.service */ 77534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_expenses_dropdown_expenses_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/expenses-dropdown/expenses-dropdown.component */ 56602);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);



















function PlanExpensesComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "app-material-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("deleteRow", function PlanExpensesComponent_ng_container_16_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r0.isLoaded)("dataSource", ctx_r0.dataSource)("mandatoryColomns", ctx_r0.mandatoryColomns)("optionalColomns", ctx_r0.optionalColomns)("actions", ctx_r0.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class PlanExpensesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(planExpensesService) {
        super();
        this.planExpensesService = planExpensesService;
        this.planId = 0;
        this.planCourseId = 0;
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
        if (changes.planCourseId?.currentValue > 0 &&
            this.checkNoBusinessOrCompany())
            this.getAll();
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.planCourseId > 0)
            this.getAll();
        else
            this.isLoaded = true;
    }
    onModulesChanged() {
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.plan_course_expense);
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        this.isLoaded = false;
        this.planExpensesService
            .getAll(this.planCourseId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource((0,app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_3__.planCourseExpenseToDisplay)(res.data));
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
                plan_Course_ID: this.planCourseId,
                expense_ID: this.form.value.expenseId,
                expense_Value: this.form.value.budget,
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.planExpensesService
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
            plan_course_id: expense.plan_Course_ID,
            expense_id: expense.expense_ID,
        };
        this.showLoading();
        this.planExpensesService
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
PlanExpensesComponent.ɵfac = function PlanExpensesComponent_Factory(t) { return new (t || PlanExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_training_services_traning_plan_plan_expenses_service__WEBPACK_IMPORTED_MODULE_4__.PlanExpensesService)); };
PlanExpensesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: PlanExpensesComponent, selectors: [["app-plan-expenses"]], inputs: { planId: "planId", planCourseId: "planCourseId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 10, consts: [["title", "planCourseExpenses"], [1, "container-fluid", "mtop-45"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], ["label", "budget", "type", "number", 3, "control", "submitted"], [1, "col-md-3", "col-12"], ["icon", "pi pi-plus-circle", 1, "btn-large", "mt-1", "line-height-3", 3, "disabled", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "w-75", "m-auto"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "deleteRow"]], template: function PlanExpensesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " 2/2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-card-content", 1)(6, "div", 2)(7, "div", 3)(8, "courseForm", 4)(9, "div", 2)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-expenses-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 8)(15, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function PlanExpensesComponent_Template_submit_btn_onClick_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, PlanExpensesComponent_ng_container_16_Template, 4, 7, "ng-container", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.expenseId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.budget)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.planCourseId)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.planCourseId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _shared_components_dropdowns_expenses_dropdown_expenses_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.ExpensesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLWV4cGVuc2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 84724:
/*!*************************************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/add-paln/plan-general-data/plan-general-data.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanGeneralDataComponent": () => (/* binding */ PlanGeneralDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/traning-plan/training-plan-index.service */ 84656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function PlanGeneralDataComponent_reset_form_btn_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PlanGeneralDataComponent_reset_form_btn_20_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "margin-bottom": "-15px" }; };
class PlanGeneralDataComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(trainingPlanIndexService) {
        super();
        this.trainingPlanIndexService = trainingPlanIndexService;
        this.submitted = false;
        this.planId = 0;
        this.changePlanId = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.closeAfterUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    }
    onChangeBusinessAndCompanyId() {
        if (this.planId > 0 && this.checkNoBusinessOrCompany)
            this.getPlanById();
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.planId, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            from_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            to_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            note: [null],
            budget: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gte(0)]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("from_Date", "to_Date"),
        });
        if (this.plan)
            this.planId = this.plan.id;
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            let data = {};
            data.id = this.formCtrls.id.value;
            data.ar_Name = this.formCtrls.ar_Name.value;
            data.en_Name = this.formCtrls.en_Name.value;
            data.from_Date = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.formCtrls.from_Date.value);
            data.to_Date = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.formCtrls.to_Date.value);
            data.budget = this.formCtrls.budget.value;
            data.note = this.formCtrls.note.value;
            if (data.id == 0)
                this.create(data);
            else
                this.update(data);
        }
    }
    getPlanById() {
        // edit in view
        if (this.plan)
            this.form.patchValue(this.plan);
        // edit after add if change company
        else {
            this.showLoading();
            this.trainingPlanIndexService
                .getById(this.planId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                    this.form.patchValue(res.data[0]);
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
        }
    }
    create(data) {
        this.showLoading();
        this.trainingPlanIndexService
            .create(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.planId = res.data.id;
                this.formCtrls.id.setValue(this.planId);
                let url = `/training/${this.moduleId}/training-plan/edit/${this.planId}`;
                this.navigateTo(url);
                this.changePlanId.emit(this.planId);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(data) {
        this.showLoading();
        this.trainingPlanIndexService
            .update(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.closeAfterUpdate.emit(res.data);
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
PlanGeneralDataComponent.ɵfac = function PlanGeneralDataComponent_Factory(t) { return new (t || PlanGeneralDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_4__.TrainingPlanIndexService)); };
PlanGeneralDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PlanGeneralDataComponent, selectors: [["app-plan-general-data"]], inputs: { plan: "plan" }, outputs: { changePlanId: "changePlanId", closeAfterUpdate: "closeAfterUpdate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 20, consts: [[1, "container-fluid", "mtop-40"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], ["label", "budget", "type", "number", 3, "control", "submitted"], ["label", "froM_DATE", 3, "control", "submitted"], ["label", "tO_DATE", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function PlanGeneralDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-card-content", 0)(2, "div", 1)(3, "div", 2)(4, "form", 3)(5, "div", 1)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-datepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-datepicker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-card-actions", 11)(19, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function PlanGeneralDataComponent_Template_submit_btn_onClick_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, PlanGeneralDataComponent_reset_form_btn_20_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.budget)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLWdlbmVyYWwtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 91649:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/training/components/training-plan/add-paln/training-needs-analysis/training-needs-analysis.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingNeedsAnalysisComponent": () => (/* binding */ TrainingNeedsAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/training/mapper/training-plan */ 55939);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_training_services_traning_plan_training_needs_analysis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/services/traning-plan/training-needs-analysis.service */ 80827);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_competence_dropdown_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/competence-dropdown/competence-dropdown.component */ 30094);
/* harmony import */ var _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/button/button.component */ 71812);
/* harmony import */ var _shared_components_dropdowns_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/reason-dropdown/reason-dropdown.component */ 53155);
/* harmony import */ var _shared_components_priorities_checkboxs_priorities_checkboxs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/priorities-checkboxs/priorities-checkboxs.component */ 89654);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



























function TrainingNeedsAnalysisComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrainingNeedsAnalysisComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.returnToView()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "font-size": "11px" }; };
function TrainingNeedsAnalysisComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "selectOnePriority"), " ");
} }
function TrainingNeedsAnalysisComponent_div_44_app_material_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-material-table", 35);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isLoaded", ctx_r8.isLoadedSearch)("dataSource", ctx_r8.dataSourceSearch)("mandatoryColomns", ctx_r8.mandatoryColomnsSearch)("optionalColomns", ctx_r8.optionalColomns)("showPaginator", false)("showSpaceTop", false);
} }
function TrainingNeedsAnalysisComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 31)(1, "div", 1)(2, "mat-card", null, 2)(4, "mat-card-title")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "page-title", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, TrainingNeedsAnalysisComponent_div_44_app_material_table_10_Template, 1, 6, "app-material-table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "mat-card-actions", 25)(12, "submit-btn", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClick", function TrainingNeedsAnalysisComponent_div_44_Template_submit_btn_onClick_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r3.dataSourceSearch == null ? null : ctx_r3.dataSourceSearch.data == null ? null : ctx_r3.dataSourceSearch.data.length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.planId > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("color", ctx_r3.btn.darkBlue)("disabled", !ctx_r3.planId);
} }
function TrainingNeedsAnalysisComponent_div_45_app_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrainingNeedsAnalysisComponent_div_45_app_button_10_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.showAddInsideView()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r12.planId)("iconPositionBefore", false)("color", ctx_r12.btn.darkBlue);
} }
function TrainingNeedsAnalysisComponent_div_45_app_material_table_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-material-table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("deleteRow", function TrainingNeedsAnalysisComponent_div_45_app_material_table_11_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isLoaded", ctx_r13.isLoadedEmployees)("dataSource", ctx_r13.dataSourceEmployees)("mandatoryColomns", ctx_r13.mandatoryColomnsEmployees)("optionalColomns", ctx_r13.optionalColomns)("actions", ctx_r13.rowFunctions)("showPaginator", false)("showSpaceTop", false);
} }
function TrainingNeedsAnalysisComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 31)(1, "div", 1)(2, "mat-card", null, 2)(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "page-title", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " (TNA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "mat-card-content", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, TrainingNeedsAnalysisComponent_div_45_app_button_10_Template, 1, 3, "app-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, TrainingNeedsAnalysisComponent_div_45_app_material_table_11_Template, 1, 7, "app-material-table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "mat-card-actions", 25)(13, "app-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrainingNeedsAnalysisComponent_div_45_Template_app_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.clearAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r4.showOnlyIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r4.planId > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r4.planId)("color", ctx_r4.btn.darkBlueBorder);
} }
class TrainingNeedsAnalysisComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(tNAService) {
        super();
        this.tNAService = tNAService;
        this.planId = 0;
        this.isView = false;
        this.showOnlyIndex = false;
        this.updateViewDisplay = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.updateCourseDropdown = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomnsSearch = [
            // "Ser",
            "code",
            "employee",
            "department",
            "job",
            "noOfTakenCourses",
            "selectAll",
        ];
        this.isLoadedSearch = false;
        this.showSearchSection = false;
        this.mandatoryColomnsEmployees = [
            // "Ser",
            "code",
            "employee",
            "department",
            "job",
            "noOfTakenCourses",
            "actions",
        ];
        this.isLoadedEmployees = false;
        this.optionalColomns = [];
        this.showIndexAfterAdd = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            // training path
            trainingPath: [false],
            TrainhgPathPrioritySelected: [[]],
            // training requests
            trainingRequests: [false],
            reasonId: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            selfServiceRequest: [true],
            // pms
            pms: [false],
            appraisalFrom: [null],
            appraisalTo: [null],
            PMS_Grade: [0, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.gte(0)]],
            competenceId: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            // with implementation
            withImplementation: [false],
        });
        if (this.isView)
            this.showOnlyIndex = true;
    }
    onChangeBusinessAndCompanyId() {
        // if (this.dataSourceEmployees?.data?.length > 0) {
        //   this.dataSourceEmployees = new MatTableDataSource(null);
        // }
        if (this.dataSourceSearch?.data?.length > 0) {
            this.dataSourceSearch = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(null);
        }
        if (this.checkNoBusinessOrCompany() && this.planId > 0) {
            this.getAll();
        }
        else {
            this.isLoadedEmployees = true;
        }
    }
    onModulesChanged() {
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.plan_tna);
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.dataSourceEmployees = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(null);
        this.isLoadedEmployees = false;
        let searchModel = {
            Plan_ID: this.planId,
            IsEditMode: true,
            TrainingPath: false,
            TrainhgPathPrioritySelected: [],
            TrainingRequest: false,
            TrainingRequestReasonsSelected: [],
            TrainingRequestFromSelfService: false,
            PMS: false,
            AppraisalFromDate: null,
            AppraisalToDate: null,
            PMS_Grade: 0,
            PMS_competenciesSelected: [],
            WithImplementation: false,
        };
        this.tNAService
            .searchEmployees(searchModel)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSourceEmployees = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource((0,app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_3__.planTnaToDisplay)(res.data.filter((emp) => emp.isSelected)));
                this.isLoadedEmployees = true;
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
                Plan_ID: this.planId,
                person_Courses: [],
            };
            this.dataSourceSearch.data
                .filter((ele) => ele.isSelected)
                .forEach((selected) => {
                model.person_Courses.push({
                    Course_ID: selected.course_ID,
                    Person_Instance_ID: selected.person_Instance_ID,
                });
            });
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.tNAService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (this.isView)
                    this.returnToView();
                else {
                    this.showIndexAfterAdd = true;
                }
                // update course list in next tab
                this.updateCourseDropdown.emit();
            }
            else {
                this.errorList(res.message.messages);
            }
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
            plan_id: this.planId,
            course_id: employee.course_ID,
            person_instance_id: employee.person_Instance_ID,
        };
        this.showLoading();
        this.tNAService.Delete(params).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.searchEmployees(this.lastSearchModel);
            }
            else
                this.errorList(res.message.messages);
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
        this.tNAService.DeleteAll(this.planId).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.dataSourceEmployees = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource([]);
                if (this.lastSearchModel)
                    this.searchEmployees(this.lastSearchModel);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onSubmitSearchEmployees() {
        this.submitted = true;
        if (this.form.valid) {
            // if no filter box checked
            if (!this.formCtrls.trainingPath.value &&
                !this.formCtrls.trainingRequests.value &&
                !this.formCtrls.pms.value &&
                !this.formCtrls.withImplementation.value) {
                this.warning("selectAnyFilter");
                return;
            }
            // if no priority selected in training path
            if (this.formCtrls.trainingPath.value &&
                this.formCtrls.TrainhgPathPrioritySelected.value.length == 0)
                return;
            this.showSearchSection = true;
            let searchModel = {
                Plan_ID: this.planId,
                IsEditMode: false,
                TrainingPath: this.form.value.trainingPath,
                TrainhgPathPrioritySelected: this.form.value.TrainhgPathPrioritySelected ?? [],
                TrainingRequest: this.form.value.trainingRequests,
                TrainingRequestReasonsSelected: this.form.value.reasonId ?? [],
                TrainingRequestFromSelfService: this.form.value.selfServiceRequest ?? false,
                PMS: this.form.value.pms,
                AppraisalFromDate: this.form.value.appraisalFrom,
                AppraisalToDate: this.form.value.appraisalTo,
                PMS_Grade: this.form.value.PMS_Grade ?? 0,
                PMS_competenciesSelected: this.form.value.competenceId ?? [],
                WithImplementation: this.form.value.withImplementation,
            };
            if (!searchModel.TrainingPath)
                searchModel.TrainhgPathPrioritySelected = [];
            // console.log("search", searchModel);
            this.searchEmployees(searchModel);
        }
    }
    searchEmployees(searchModel) {
        this.dataSourceSearch = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(null);
        this.isLoadedSearch = false;
        this.tNAService
            .searchEmployees(searchModel)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSourceSearch = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource((0,app_training_mapper_training_plan__WEBPACK_IMPORTED_MODULE_3__.planTnaToDisplay)(res.data));
                this.isLoadedSearch = true;
                this.lastSearchModel = searchModel;
            }
            else {
                this.errorList(res.message.messages);
            }
        });
    }
    clearForm() {
        this.form.reset({
            id: 0,
            selfServiceRequest: true,
            PMS_Grade: 0,
            trainingPath: false,
            trainingRequests: false,
            pms: false,
            withImplementation: false,
            TrainhgPathPrioritySelected: [],
            reasonId: [],
            competenceId: [],
        });
        this.submitted = false;
    }
    showAddInsideView() {
        this.updateViewDisplay.emit(true);
        this.showOnlyIndex = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    returnToView() {
        this.updateViewDisplay.emit(false);
        this.showOnlyIndex = true;
        this.clearForm();
        this.dataSourceSearch = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(null);
        this.showSearchSection = false;
    }
}
TrainingNeedsAnalysisComponent.ɵfac = function TrainingNeedsAnalysisComponent_Factory(t) { return new (t || TrainingNeedsAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_training_services_traning_plan_training_needs_analysis_service__WEBPACK_IMPORTED_MODULE_4__.TrainingNeedsAnalysisService)); };
TrainingNeedsAnalysisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: TrainingNeedsAnalysisComponent, selectors: [["app-training-needs-analysis"]], inputs: { planId: "planId", isView: "isView" }, outputs: { updateViewDisplay: "updateViewDisplay", updateCourseDropdown: "updateCourseDropdown" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 46, vars: 36, consts: [[1, "row"], [1, "col-12"], ["container", ""], ["title", "searchEmployees"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], [1, "container-fluid", "mtop-45"], [3, "formGroup"], [1, "row", "justify-content-between"], [1, "col-sm-6", "col-lg-3", "col-12"], [1, "inputs-box-with-label"], [1, "box-label"], ["label", "trainingPath", "labelPosition", "before", 1, "w-100", 3, "control"], [1, "box-inputs", "pr-1", "pl-3"], [3, "control", "disable"], ["class", "danger", 3, "style", 4, "ngIf"], ["label", "trainingRequests", "labelPosition", "before", 1, "w-100", 3, "control"], [1, "box-inputs"], [3, "control", "submitted", "filter", "multi", "disable"], ["label", "selfServiceRequest", "labelPosition", "before", 3, "control", "disabled"], ["label", "PMS", "labelPosition", "before", 1, "w-100", 3, "control"], ["label", "appraisalFrom", 3, "control", "submitted", "disabled"], ["label", "appraisalTo", 3, "control", "submitted", "disabled"], ["type", "number", "label", "PMS_Grade", 3, "control", "submitted", "disabled"], [1, "box-label", "no-content"], ["label", "withImplementation", "labelPosition", "before", 1, "w-100", 3, "control"], ["align", "end"], ["label", "General.search", 3, "disabled", "color", "click"], ["class", "row mtop-26", 4, "ngIf"], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "ft-corner-up-left", "font-medium-3"], [1, "danger"], [1, "row", "mtop-26"], ["title", "result"], ["class", "table-in-forms", "checkboxColumnName", "isSelected", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "showPaginator", "showSpaceTop", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "color", "disabled", "onClick"], ["checkboxColumnName", "isSelected", 1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "showPaginator", "showSpaceTop"], ["title", "selectedEmployees"], [1, "container-fluid", "mtop-35"], ["label", "addEmployee", "class", "float-right mb-1", "icon", "pi pi-plus-circle", 3, "disabled", "iconPositionBefore", "color", "click", 4, "ngIf"], ["class", "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showSpaceTop", "deleteRow", 4, "ngIf"], ["label", "clearAll", 3, "disabled", "color", "click"], ["label", "addEmployee", "icon", "pi pi-plus-circle", 1, "float-right", "mb-1", 3, "disabled", "iconPositionBefore", "color", "click"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showSpaceTop", "deleteRow"]], template: function TrainingNeedsAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, TrainingNeedsAnalysisComponent_button_7_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "mat-card-content", 5)(10, "div", 0)(11, "div", 1)(12, "form", 6)(13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "app-check-box", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "app-priorities-checkboxs", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, TrainingNeedsAnalysisComponent_span_20_Template, 3, 6, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "app-check-box", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](26, "app-reason-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](28, "app-check-box", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 8)(30, "div", 9)(31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "app-check-box", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](34, "app-datepicker", 20)(35, "app-datepicker", 21)(36, "app-input", 22)(37, "app-competence-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 8)(39, "div", 9)(40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "app-check-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "mat-card-actions", 25)(43, "app-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrainingNeedsAnalysisComponent_Template_app_button_click_43_listener() { return ctx.onSubmitSearchEmployees(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, TrainingNeedsAnalysisComponent_div_44_Template, 13, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](45, TrainingNeedsAnalysisComponent_div_45_Template, 14, 4, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("hidden", ctx.showOnlyIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.showOnlyIndex && ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.trainingPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.TrainhgPathPrioritySelected)("disable", !ctx.formCtrls.trainingPath.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx.formCtrls.TrainhgPathPrioritySelected == null ? null : ctx.formCtrls.TrainhgPathPrioritySelected.value == null ? null : ctx.formCtrls.TrainhgPathPrioritySelected.value.length) == 0 && ctx.submitted && ctx.formCtrls.trainingPath.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.trainingRequests);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.reasonId)("submitted", ctx.submitted)("filter", true)("multi", true)("disable", !ctx.formCtrls.trainingRequests.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.selfServiceRequest)("disabled", !ctx.formCtrls.trainingRequests.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.pms);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.appraisalFrom)("submitted", ctx.submitted)("disabled", !ctx.formCtrls.pms.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.appraisalTo)("submitted", ctx.submitted)("disabled", !ctx.formCtrls.pms.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.PMS_Grade)("submitted", ctx.submitted)("disabled", !ctx.formCtrls.pms.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.competenceId)("submitted", ctx.submitted)("filter", true)("multi", true)("disable", !ctx.formCtrls.pms.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.withImplementation);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx.planId)("color", ctx.btn.darkBlue);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showSearchSection && !ctx.showOnlyIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.planId > 0 && (ctx.isView || ctx.showIndexAfterAdd));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _shared_components_dropdowns_competence_dropdown_competence_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.CompetenceDropdownComponent, _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent, _shared_components_dropdowns_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.ReasonDropdownComponent, _shared_components_priorities_checkboxs_priorities_checkboxs_component__WEBPACK_IMPORTED_MODULE_14__.PrioritiesCheckboxsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_23__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1uZWVkcy1hbmFseXNpcy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/training/services/traning-plan/training-plan-index.service */ 84656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _add_paln_plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../add-paln/plan-general-data/plan-general-data.component */ 84724);











function GeneralInfoPlanViewComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GeneralInfoPlanViewComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.isUpdate = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GeneralInfoPlanViewComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GeneralInfoPlanViewComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.isUpdate = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function GeneralInfoPlanViewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-view-data-row-item", 14)(3, "app-view-data-row-item", 15)(4, "app-view-data-row-item", 16)(5, "app-view-data-row-item", 17)(6, "app-view-data-row-item", 18)(7, "app-view-data-row-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.plan == null ? null : ctx_r3.plan.en_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.plan == null ? null : ctx_r3.plan.ar_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.plan == null ? null : ctx_r3.plan.from_Date)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.plan == null ? null : ctx_r3.plan.to_Date)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.plan == null ? null : ctx_r3.plan.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.plan == null ? null : ctx_r3.plan.note);
} }
function GeneralInfoPlanViewComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-plan-general-data", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("closeAfterUpdate", function GeneralInfoPlanViewComponent_ng_template_11_Template_app_plan_general_data_closeAfterUpdate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.returnToView($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("plan", ctx_r5.plan);
} }
class GeneralInfoPlanViewComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(trainingPlanIndexService) {
        super();
        this.trainingPlanIndexService = trainingPlanIndexService;
        this.isUpdate = false;
        this.planId = 0;
    }
    onChangeBusinessAndCompanyId() {
        if (this.planId > 0 && this.checkNoBusinessOrCompany)
            this.getPlanById();
    }
    ngOnInit() { }
    getPlanById() {
        this.showLoading();
        this.trainingPlanIndexService
            .getById(this.planId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.plan = res.data[0];
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    returnToView(updatedPlan) {
        this.isUpdate = false;
        this.plan = updatedPlan;
    }
}
GeneralInfoPlanViewComponent.ɵfac = function GeneralInfoPlanViewComponent_Factory(t) { return new (t || GeneralInfoPlanViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_training_services_traning_plan_training_plan_index_service__WEBPACK_IMPORTED_MODULE_2__.TrainingPlanIndexService)); };
GeneralInfoPlanViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GeneralInfoPlanViewComponent, selectors: [["app-general-info-plan-view"]], inputs: { planId: "planId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 4, consts: [[1, "row"], [1, "col-12"], ["container", ""], [1, "title-no-margin"], ["title", "generalInfo"], ["mat-button", "", "class", "float-right section-edit-btn pright-6 pleft-6 darkBlue", "id", "section_edit_btn", 3, "click", 4, "ngIf"], [1, "mt-2"], ["class", "mtop-30", 4, "ngIf", "ngIfElse"], ["form", ""], ["mat-button", "", "id", "section_edit_btn", 1, "float-right", "section-edit-btn", "pright-6", "pleft-6", "darkBlue", 3, "click"], [1, "ft-edit-1", "font-medium-3"], [1, "ft-corner-up-left", "font-medium-3"], [1, "mtop-30"], [1, "view-data-row-container"], ["label", "en_Name", 3, "value"], ["label", "ar_Name", 3, "value"], ["label", "froM_DATE", 3, "value", "isDate"], ["label", "tO_DATE", 3, "value", "isDate"], ["label", "budget", 3, "value"], ["label", "notes", 3, "value"], [3, "plan", "closeAfterUpdate"]], template: function GeneralInfoPlanViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", null, 2)(4, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GeneralInfoPlanViewComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GeneralInfoPlanViewComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, GeneralInfoPlanViewComponent_div_10_Template, 8, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, GeneralInfoPlanViewComponent_ng_template_11_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isUpdate)("ngIfElse", _r4);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_4__.ViewDataRowItemComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _add_paln_plan_general_data_plan_general_data_component__WEBPACK_IMPORTED_MODULE_5__.PlanGeneralDataComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtaW5mby1wbGFuLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6ImdlbmVyYWwtaW5mby1wbGFuLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAudGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuICovXHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);










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
TrainingPlanIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TrainingPlanIndexComponent, selectors: [["app-training-plan-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 9, consts: [["title", "trainingPlanIndex", 1, "mb-10", 3, "globalFunctions"], [3, "isRowClickable", "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function TrainingPlanIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-content")(5, "app-material-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function TrainingPlanIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TrainingPlanIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isRowClickable", true)("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.TrainingPlanIndexService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1wbGFuLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_training_models_training_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/training/models/training-request */ 98452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/training/services/training-request.service */ 24714);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/employee-dropdown/employee-dropdown.component */ 99629);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/course-category-dropdown/course-category-dropdown.component */ 42518);
/* harmony import */ var _shared_components_dropdowns_course_by_course_category_dropdown_course_by_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/course-by-course-category-dropdown/course-by-course-category-dropdown.component */ 30391);
/* harmony import */ var _shared_components_dropdowns_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/reason-dropdown/reason-dropdown.component */ 53155);
/* harmony import */ var _shared_components_dropdowns_business_objective_dropdown_business_objective_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/business-objective-dropdown/business-objective-dropdown.component */ 42995);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ 88035);

























function AddTrainingRequestComponent_app_add_new_btn_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-add-new-btn", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx_r1.moduleId, "/training-request/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("params", ctx_r1.parentParam);
} }
function AddTrainingRequestComponent_reset_form_btn_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "reset-form-btn", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddTrainingRequestComponent_reset_form_btn_33_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
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
        if (this.trainingRequestId > 0 && this.checkNoBusinessOrCompany) {
            this.getTrainingRequestById();
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.trainingRequestId, { nonNullable: true }],
            course_Category_ID: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required],
            course_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            reason_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            from_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required],
            to_Date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required],
            note: [null],
            employee_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required],
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
            this.formCtrls?.SelectedBusinessObjectiveIDs.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]);
        }
        else {
            this.allowBusinessObjective = false;
            this.formCtrls?.SelectedBusinessObjectiveIDs.setValue([]);
            this.formCtrls?.SelectedBusinessObjectiveIDs.removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]);
        }
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
}
AddTrainingRequestComponent.ɵfac = function AddTrainingRequestComponent_Factory(t) { return new (t || AddTrainingRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](app_training_services_training_request_service__WEBPACK_IMPORTED_MODULE_5__.TrainingRequestService)); };
AddTrainingRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: AddTrainingRequestComponent, selectors: [["app-add-training-request"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 35, consts: [[1, "row"], [1, "col-12", "cards-no-shadow"], ["container", ""], [1, "title-no-margin"], ["title", "trainingRequest"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "mt-2"], [1, "container-fluid", "mt-5"], [1, "col-12"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "employees", 3, "control", "submitted", "multi", "filter"], [3, "control", "submitted", "filter"], [3, "control", "courseCategoryControl", "submitted", "filter"], [1, "col-md-4", "col-12", "ptop-15"], [3, "control", "submitted", "filter", "multi", "change"], [3, "control", "submitted", "filter", "multi", "disable"], ["label", "froM_DATE", 3, "control", "submitted"], ["label", "tO_DATE", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [3, "click"]], template: function AddTrainingRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", null, 2)(5, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AddTrainingRequestComponent_app_add_new_btn_8_Template, 1, 2, "app-add-new-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "app-back-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "mat-card-content", 8)(12, "div", 0)(13, "div", 9)(14, "form", 10)(15, "div", 0)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "app-employee-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "app-course-category-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "app-course-by-course-category-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 15)(23, "app-reason-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function AddTrainingRequestComponent_Template_app_reason_dropdown_change_23_listener($event) { return ctx.onReasonChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](25, "business-objective-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](27, "app-datepicker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "app-datepicker", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "app-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "mat-card-actions", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, AddTrainingRequestComponent_reset_form_btn_33_Template, 1, 0, "reset-form-btn", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "submit-btn", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onClick", function AddTrainingRequestComponent_Template_submit_btn_onClick_34_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.trainingRequestId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("url", "/training/", ctx.moduleId, "/training-request/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.employee_id)("submitted", ctx.submitted)("multi", true)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.course_Category_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.course_ID)("courseCategoryControl", ctx.formCtrls.course_Category_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.reason_ID)("submitted", ctx.submitted)("filter", true)("multi", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.SelectedBusinessObjectiveIDs)("submitted", ctx.submitted)("filter", true)("multi", true)("disable", !ctx.allowBusinessObjective);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false)("id", ctx.formCtrls.id.value);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.EmployeeDropdownComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__.PageTitleComponent, _shared_components_dropdowns_course_category_dropdown_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.CourseCategoryDropdownComponent, _shared_components_dropdowns_course_by_course_category_dropdown_course_by_course_category_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.CourseByCourseCategoryDropdownComponent, _shared_components_dropdowns_reason_dropdown_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.ReasonDropdownComponent, _shared_components_dropdowns_business_objective_dropdown_business_objective_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.BusinessObjectiveDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_23__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdHJhaW5pbmctcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);










class TrainingRequestIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(trainingRequestService) {
        super();
        this.trainingRequestService = trainingRequestService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            'Ser',
            'course_name',
            'reason',
            'fromDate',
            'toDate',
            'actions',
        ];
        this.optionalColomns = ['note'];
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany()) {
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
        }
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
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
TrainingRequestIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TrainingRequestIndexComponent, selectors: [["app-training-request-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [["title", "trainingRequest", 1, "mb-10", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function TrainingRequestIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-content")(5, "app-material-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function TrainingRequestIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function TrainingRequestIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.trainingRequestService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1yZXF1ZXN0LWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);









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
TspIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TspIndexComponent, selectors: [["app-tsp-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [["title", "TSP", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function TspIndexComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0c3AtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 34538:
/*!***************************************************!*\
  !*** ./src/app/training/mapper/implementation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "implementationToDisplay": () => (/* binding */ implementationToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function implementationToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            title: ele.trA_Plan_Course?.name,
            en_Name: ele.trA_Plan_Course?.trA_Course?.en_Name,
            from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.from_Date),
            to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.to_Date),
        };
    });
}


/***/ }),

/***/ 55939:
/*!**************************************************!*\
  !*** ./src/app/training/mapper/training-plan.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "planCourseEmployeeToDisplay": () => (/* binding */ planCourseEmployeeToDisplay),
/* harmony export */   "planCourseExpenseToDisplay": () => (/* binding */ planCourseExpenseToDisplay),
/* harmony export */   "planCourseToDisplay": () => (/* binding */ planCourseToDisplay),
/* harmony export */   "planTnaToDisplay": () => (/* binding */ planTnaToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function planTnaToDisplay(data) {
    return data
        .filter((ele) => ele.core_Person != null)
        .map((ele) => {
        return {
            ...ele,
            code: ele.core_Person?.code,
            employee: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.core_Person?.ar_Name, ele.core_Person?.en_Name),
            department: ele.core_Org
                ?.map((org) => (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(org.ar_Name, org.en_Name))
                .join(", "),
            job: ele.core_Job_Title
                ?.map((job) => (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(job.ar_Name, job.en_Name))
                .join(", "),
            noOfTakenCourses: `${(0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.courseNameAr, ele.courseNameEn)} - (${ele.courseCount})`,
            // isAdded: ele.isSelected,
        };
    });
}
function planCourseEmployeeToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            employeeNameAr: ele.ar_Name,
            employeeNameEn: ele.en_Name,
            job: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.ar_Job, ele.en_Job),
            isSelected: false,
        };
    });
}
function planCourseToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            title: ele.name,
            course: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_Course?.ar_Name, ele.trA_Course?.en_Name),
            plan: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_PLan?.ar_Name, ele.trA_PLan?.en_Name),
            fromDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.from_Date),
            toDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(ele.to_Date),
            online: ele.tsP_ID ? false : true,
            budget: ele.trA_PLan?.budget,
        };
    });
}
function planCourseExpenseToDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            // id: ele.plan_Course_ID,
            expense: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.trA_Expense?.ar_Name, ele.trA_Expense?.en_Name),
            value: ele.expense_Value,
        };
    });
}


/***/ }),

/***/ 98452:
/*!*****************************************************!*\
  !*** ./src/app/training/models/training-request.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ImplementationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("training/Implementation/Create", data);
    }
    edit(data) {
        return this.post("training/Implementation/Edit", data);
    }
    getAll() {
        return this.get("training/Implementation/GetAll");
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
        return this.getAll();
    }
}
ImplementationService.ɵfac = function ImplementationService_Factory(t) { return new (t || ImplementationService)(); };
ImplementationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImplementationService, factory: ImplementationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 77534:
/*!*************************************************************************!*\
  !*** ./src/app/training/services/traning-plan/plan-expenses.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanExpensesService": () => (/* binding */ PlanExpensesService)
/* harmony export */ });
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class PlanExpensesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService {
    constructor() {
        super();
    }
    getAll(planId) {
        return this.get("Training/PlanCourseExpenses/GetAll", {
            params: {
                $filter: `plan_Course_ID eq ${planId}`,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.TRA_expense}`,
            },
        });
    }
    create(data) {
        return this.post("Training/PlanCourseExpenses/Create", data);
    }
    Delete(params) {
        return this.delete("Training/PlanCourseExpenses/Delete", {
            params: params,
        });
    }
}
PlanExpensesService.ɵfac = function PlanExpensesService_Factory(t) { return new (t || PlanExpensesService)(); };
PlanExpensesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PlanExpensesService, factory: PlanExpensesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 80827:
/*!***********************************************************************************!*\
  !*** ./src/app/training/services/traning-plan/training-needs-analysis.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingNeedsAnalysisService": () => (/* binding */ TrainingNeedsAnalysisService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class TrainingNeedsAnalysisService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    searchEmployees(model) {
        return this.post("Training/TNA/GetSearchTNAResults", model);
    }
    create(data) {
        return this.post("Training/TNA/Create", data);
    }
    Delete(params) {
        return this.delete("Training/TNA/Delete", {
            params: params,
        });
    }
    DeleteAll(planId) {
        return this.delete("Training/TNA/DeleteAll", {
            params: { plan_id: planId },
        });
    }
}
TrainingNeedsAnalysisService.ɵfac = function TrainingNeedsAnalysisService_Factory(t) { return new (t || TrainingNeedsAnalysisService)(); };
TrainingNeedsAnalysisService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TrainingNeedsAnalysisService, factory: TrainingNeedsAnalysisService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 84656:
/*!*******************************************************************************!*\
  !*** ./src/app/training/services/traning-plan/training-plan-index.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanIndexService": () => (/* binding */ TrainingPlanIndexService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class TrainingPlanIndexService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getList(params) {
        return this.get("Training/plan/GetList", {
            params: params,
        });
    }
    Delete(Id) {
        return this.delete("Training/plan/Delete", {
            params: { Id: Id },
        });
    }
    create(data) {
        return this.post("Training/plan/Create", data);
    }
    update(data) {
        return this.post("Training/plan/Edit", data);
    }
    // getList(params: IPageParams) {
    //   return this.get<IResponseList<IPlanModel[]>>("Training/Plan/GetList", {
    //     params: params,
    //   });
    // }
    getAll() {
        return this.get("Training/Plan/GetAll").pipe();
    }
    getById(id) {
        return this.get("Training/Plan/GetAll", {
            params: {
                $filter: `id eq ${id}`,
            },
        });
    }
    deleteInstructorAttachments(instructorID, attchmentId) {
        return this.delete("Training/Instructor/DeleteInstructorAttachment", {
            params: {
                InstructorID: instructorID,
                AttachmentID: attchmentId,
            },
        });
    }
    exportExcel() {
        return this.getAll();
    }
}
TrainingPlanIndexService.ɵfac = function TrainingPlanIndexService_Factory(t) { return new (t || TrainingPlanIndexService)(); };
TrainingPlanIndexService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TrainingPlanIndexService, factory: TrainingPlanIndexService.ɵfac, providedIn: "root" });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);


















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
                component: app_training_components_courses_add_course_add_course_core_add_course_component__WEBPACK_IMPORTED_MODULE_7__.AddCourseComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_course },
            },
            {
                path: "edit/:id",
                component: app_training_components_courses_add_course_add_course_core_add_course_component__WEBPACK_IMPORTED_MODULE_7__.AddCourseComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_course },
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
            },
            {
                path: "add",
                component: _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_4__.AddTspComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_tsp },
            },
            {
                path: "edit/:id",
                component: _components_tsp_add_tsp_add_tsp_component__WEBPACK_IMPORTED_MODULE_4__.AddTspComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_tsp },
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
            },
            {
                path: "add",
                component: _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_6__.AddInstructorComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_instructor },
            },
            {
                path: "edit/:id",
                component: _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_6__.AddInstructorComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_instructor },
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
            },
            {
                path: "add",
                component: _components_training_requests_add_training_request_add_training_request_component__WEBPACK_IMPORTED_MODULE_9__.AddTrainingRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_request },
            },
            {
                path: "edit/:id",
                component: _components_training_requests_add_training_request_add_training_request_component__WEBPACK_IMPORTED_MODULE_9__.AddTrainingRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_request },
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
            },
            {
                path: "add",
                component: _components_training_plan_add_paln_plan_core_plan_core_component__WEBPACK_IMPORTED_MODULE_11__.PlanCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_plan },
            },
            {
                path: "edit/:id",
                component: _components_training_plan_plan_view_plan_view_core_plan_view_core_component__WEBPACK_IMPORTED_MODULE_12__.PlanViewCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_training_plan },
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
            },
            {
                path: "add",
                component: _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_14__.AddImplementationCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_implementation },
            },
            {
                path: "edit/:id",
                component: _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_14__.AddImplementationCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_implementation },
            },
        ],
    },
];
class TrainingRoutingModule {
}
TrainingRoutingModule.ɵfac = function TrainingRoutingModule_Factory(t) { return new (t || TrainingRoutingModule)(); };
TrainingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: TrainingRoutingModule });
TrainingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](TrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 94666);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 22560);




























class TrainingModule {
}
TrainingModule.ɵfac = function TrainingModule_Factory(t) { return new (t || TrainingModule)(); };
TrainingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: TrainingModule });
TrainingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](TrainingModule, { declarations: [_components_courses_course_index_course_index_component__WEBPACK_IMPORTED_MODULE_2__.CourseIndexComponent,
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
        _components_implementation_add_implementation_add_implementation_core_add_implementation_core_component__WEBPACK_IMPORTED_MODULE_0__.AddImplementationCoreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_training_training_module_ts.js.map