"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_recruitment_recruitment_module_ts"],{

/***/ 90364:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/request/add-request/add-recruitment-job-details/add-recruitment-job-details.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRecruitmentJobDetailsComponent": () => (/* binding */ AddRecruitmentJobDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_org_management_mapper_job_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/mapper/job-title */ 6314);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_job_profile_job_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/org-management/services/job-profile/job-title.service */ 92972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _shared_skeletons_view_card_row_skeleton_view_card_row_skeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/skeletons/view-card-row-skeleton/view-card-row-skeleton.component */ 38368);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _org_management_components_jobs_profile_job_career_path_job_career_path_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../org-management/components/jobs-profile/job-career-path/job-career-path.component */ 22218);
/* harmony import */ var _org_management_components_jobs_profile_job_competences_job_competences_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../org-management/components/jobs-profile/job-competences/job-competences.component */ 70095);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function AddRecruitmentJobDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-view-data-row-item", 9)(2, "app-view-data-row-item", 10)(3, "app-view-data-row-item", 11)(4, "app-view-data-row-item", 12)(5, "app-view-data-row-item", 13)(6, "app-view-data-row-item", 14)(7, "app-view-data-row-item", 15)(8, "app-view-data-row-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.ar_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.en_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.jobFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.parentJobTitleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.remainingVacentPlaces);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.core_Grade == null ? null : ctx_r0.jobTitle.core_Grade.miN_SALARY);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.core_Grade == null ? null : ctx_r0.jobTitle.core_Grade.middel_Salary);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.jobTitle == null ? null : ctx_r0.jobTitle.core_Grade == null ? null : ctx_r0.jobTitle.core_Grade.maX_SALARY);
} }
function AddRecruitmentJobDetailsComponent_app_view_card_row_skeleton_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-view-card-row-skeleton");
} }
function AddRecruitmentJobDetailsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-view-data-row-item", 17)(2, "app-view-data-row-item", 18)(3, "app-view-data-row-item", 19)(4, "app-view-data-row-item", 20)(5, "app-view-data-row-item", 21)(6, "app-view-data-row-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.jobTitle == null ? null : ctx_r2.jobTitle.core_Job_Description == null ? null : ctx_r2.jobTitle.core_Job_Description.joB_PURPOSE)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.jobTitle == null ? null : ctx_r2.jobTitle.core_Job_Description == null ? null : ctx_r2.jobTitle.core_Job_Description.responsibilitieS_DUTIES)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.jobTitle == null ? null : ctx_r2.jobTitle.core_Job_Description == null ? null : ctx_r2.jobTitle.core_Job_Description.knowledgE_SKILLS)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.jobTitle == null ? null : ctx_r2.jobTitle.core_Job_Description == null ? null : ctx_r2.jobTitle.core_Job_Description.education)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.jobTitle == null ? null : ctx_r2.jobTitle.core_Job_Description == null ? null : ctx_r2.jobTitle.core_Job_Description.experience)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.jobTitle == null ? null : ctx_r2.jobTitle.core_Job_Description == null ? null : ctx_r2.jobTitle.core_Job_Description.workinG_CONDITIONS)("textEditor", true);
} }
function AddRecruitmentJobDetailsComponent_app_view_card_row_skeleton_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-view-card-row-skeleton");
} }
function AddRecruitmentJobDetailsComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-view-data-row-item", 23)(3, "app-view-data-row-item", 24)(4, "app-view-data-row-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-view-data-row-item", 26)(7, "app-view-data-row-item", 27)(8, "app-view-data-row-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r4.jobTitle.managerPercentage)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r4.jobTitle.internalColleaguePercentage)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r4.jobTitle.externalColleaguePercentage)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r4.jobTitle.subordinatePercentage)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r4.jobTitle.mySelfPercentage)("textEditor", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r4.jobTitle.customerPercentage)("textEditor", true);
} }
function AddRecruitmentJobDetailsComponent_app_view_card_row_skeleton_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-view-card-row-skeleton");
} }
class AddRecruitmentJobDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(jobTitleService) {
        super();
        this.jobTitleService = jobTitleService;
        this.jobTitleId = 0;
        this.isLoaded = false;
        // kpi
        this.kpiMandatoryColomns = ["kpi"];
        this.kpiOptionalColomns = [];
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.jobTitleId?.currentValue > 0) {
            this.getDetailsById();
        }
    }
    onChangeBusinessAndCompanyId() {
        if (this.jobTitleId > 0 && this.checkNoBusinessOrCompany()) {
            this.getDetailsById();
        }
    }
    getDetailsById() {
        this.jobTitle = null;
        this.kpiDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(null);
        this.isLoaded = false;
        this.jobTitleService
            .getDetailsById(this.jobTitleId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.jobTitle = (0,app_org_management_mapper_job_title__WEBPACK_IMPORTED_MODULE_0__.jobToMap)(res.data)[0];
                this.kpiDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource((0,app_org_management_mapper_job_title__WEBPACK_IMPORTED_MODULE_0__.jobKpiToMap)(res.data[0].core_Job_Title_KPI));
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
AddRecruitmentJobDetailsComponent.ɵfac = function AddRecruitmentJobDetailsComponent_Factory(t) { return new (t || AddRecruitmentJobDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_org_management_services_job_profile_job_title_service__WEBPACK_IMPORTED_MODULE_3__.JobTitleService)); };
AddRecruitmentJobDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AddRecruitmentJobDetailsComponent, selectors: [["app-add-recruitment-job-details"]], inputs: { jobTitleId: "jobTitleId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]], decls: 32, vars: 49, consts: [[1, "mtop-20"], [1, "col-12", "w-100", "view-tabs-group", 3, "dir"], [3, "label"], [1, "ptop-10"], ["class", "view-data-row-container", 4, "ngIf"], [4, "ngIf"], [3, "jobId", "showIndexOnly"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "showSpaceTop"], [1, "view-data-row-container"], ["label", "ar_Name", 1, "w-md-20", "mb-2", 3, "value"], ["label", "en_Name", 1, "w-md-20", "mb-2", 3, "value"], ["label", "jobFamily", 1, "w-md-20", "mb-2", 3, "value"], ["label", "parentJobTitle", 1, "w-md-20", "mb-2", 3, "value"], ["label", "remainingVacentPlaces", 1, "w-md-20", "mb-2", 3, "value"], ["label", "miN_SALARY", 1, "w-md-20", "mb-2", 3, "value"], ["label", "middel_Salary", 1, "w-md-20", "mb-2", 3, "value"], ["label", "maX_SALARY", 1, "w-md-20", "mb-2", 3, "value"], ["label", "jobPurpose", 1, "col-sm-4", "col-6", "px-0", "mb-2", 3, "value", "textEditor"], ["label", "responsibilitiesDuties", 1, "col-sm-4", "col-6", "px-0", "mb-2", 3, "value", "textEditor"], ["label", "knowledgeSkills", 1, "col-sm-4", "col-6", "px-0", "mb-2", 3, "value", "textEditor"], ["label", "education", 1, "col-sm-4", "col-6", "px-0", "mb-2", 3, "value", "textEditor"], ["label", "experience", 1, "col-sm-4", "col-6", "px-0", "mb-2", 3, "value", "textEditor"], ["label", "workingConditions", 1, "col-sm-4", "col-6", "px-0", "mb-2", 3, "value", "textEditor"], ["label", "manager%", 1, "col", "mb-2", 3, "value", "textEditor"], ["label", "internalDepartment%", 1, "col", "mb-2", 3, "value", "textEditor"], ["label", "externalDepartment%", 1, "col", "mb-2", 3, "value", "textEditor"], ["label", "subordinate%", 1, "col", "mb-2", 3, "value", "textEditor"], ["label", "mySelf%", 1, "col", "mb-2", 3, "value", "textEditor"], ["label", "customer%", 1, "col", "mb-2", 3, "value", "textEditor"]], template: function AddRecruitmentJobDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-tab-group", 1)(2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AddRecruitmentJobDetailsComponent_div_6_Template, 9, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, AddRecruitmentJobDetailsComponent_app_view_card_row_skeleton_7_Template, 1, 0, "app-view-card-row-skeleton", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, AddRecruitmentJobDetailsComponent_div_12_Template, 7, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, AddRecruitmentJobDetailsComponent_app_view_card_row_skeleton_13_Template, 1, 0, "app-view-card-row-skeleton", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "app-job-career-path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "app-job-competences", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "app-material-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, AddRecruitmentJobDetailsComponent_ng_container_30_Template, 9, 12, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, AddRecruitmentJobDetailsComponent_app_view_card_row_skeleton_31_Template, 1, 0, "app-view-card-row-skeleton", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 25, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 27, "generalInfo")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 29, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 31, "jobDescription")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 33, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 35, "careerPath")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("jobId", ctx.jobTitleId)("showIndexOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 37, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 39, "competences")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("jobId", ctx.jobTitleId)("showIndexOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 41, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 43, "kpi")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.kpiDataSource)("mandatoryColomns", ctx.kpiMandatoryColomns)("optionalColomns", ctx.kpiOptionalColomns)("actions", ctx.rowFunctions)("showPaginator", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 45, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 47, "appraisalMethod")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, _shared_skeletons_view_card_row_skeleton_view_card_row_skeleton_component__WEBPACK_IMPORTED_MODULE_6__.ViewCardRowSkeletonComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _org_management_components_jobs_profile_job_career_path_job_career_path_component__WEBPACK_IMPORTED_MODULE_7__.JobCareerPathComponent, _org_management_components_jobs_profile_job_competences_job_competences_component__WEBPACK_IMPORTED_MODULE_8__.JobCompetencesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVjcnVpdG1lbnQtam9iLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 85499:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/request/add-request/add-recruitment-request/add-recruitment-request.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRecruitmentRequestComponent": () => (/* binding */ AddRecruitmentRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/recruitment-request.service */ 71180);
/* harmony import */ var app_system_setup_org_management_setup_services_organization_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/org-management-setup/services/organization-types.service */ 50377);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/button/button.component */ 71812);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management-setup/org/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 85443);
/* harmony import */ var _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management/job-title/job-title-by-org-dropdown/job-title-by-org-dropdown.component */ 15362);
/* harmony import */ var _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/hr-setup/gender-dropdown/gender-dropdown.component */ 99964);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management-setup/org-types/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 50260);
/* harmony import */ var _shared_components_dropdowns_recruitment_employment_type_dropdown_employment_type_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/recruitment/employment-type-dropdown/employment-type-dropdown.component */ 65184);
/* harmony import */ var _shared_components_dropdowns_recruitment_request_reason_dropdown_request_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/recruitment/request-reason-dropdown/request-reason-dropdown.component */ 49410);
/* harmony import */ var _add_recruitment_job_details_add_recruitment_job_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../add-recruitment-job-details/add-recruitment-job-details.component */ 90364);




























function AddRecruitmentRequestComponent_app_add_new_btn_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-add-new-btn", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("url", "/recruitment/", ctx_r0.moduleId, "/request/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddRecruitmentRequestComponent_reset_form_btn_41_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "reset-form-btn", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AddRecruitmentRequestComponent_reset_form_btn_41_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
class AddRecruitmentRequestComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(recruitmentRequestService, organizationTypesService) {
        super();
        this.recruitmentRequestService = recruitmentRequestService;
        this.organizationTypesService = organizationTypesService;
        this.requestId = 0;
        this.submitted = false;
        this.showJobTitleDetails = false;
    }
    onChangeBusinessAndCompanyId() {
        if (this.requestId > 0 && this.checkNoBusinessOrCompany()) {
            this.getRequestById();
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.requestId, { nonNullable: true }],
            org_type_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            org_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            job_Title_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            employementType_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            request_Reason_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            gender_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            emp_No: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_23__.CustomValidators.gte(1)]],
            from_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            to_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            other_requirment: [null],
            note: [null],
        }, {
            validator: [app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("from_Date", "to_Date")],
        });
        this.activatedRoute.params.subscribe((param) => {
            this.requestId = Number(param.id ?? 0);
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    getRequestById() {
        this.showLoading("form");
        this.recruitmentRequestService
            .getById(this.requestId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.form.patchValue(res.data[0].request);
                this.formCtrls.gender_ID.setValue(res.data[0].gender_ID);
                this.getOrgTypeByOrgId(res.data[0].org.id, res.data[0].job_Title.id);
                // this.showJobTitleDetails = true;
                // hideLoading >> in getOrgTypeByOrgId function
            }
            else {
                this.errorList(res.message.messages);
                this.hideLoading("form");
            }
        });
    }
    getOrgTypeByOrgId(orgId, jobTitleId) {
        this.organizationTypesService
            .getByOrgId(orgId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.formCtrls.org_type_ID.setValue(res.data[0].id);
                this.formCtrls.org_ID.setValue(orgId);
                setTimeout(() => {
                    this.formCtrls.job_Title_ID.setValue(jobTitleId);
                }, 50);
                this.hideLoading("form");
            }
            else
                this.errorList(res.message.messages);
        });
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            let model = {
                rec_Request: {
                    id: this.form.value.id,
                    emp_No: this.form.value.emp_No,
                    from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.from_Date),
                    to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.to_Date),
                    request_Reason_ID: this.form.value.request_Reason_ID,
                    employementType_ID: this.form.value.employementType_ID,
                    other_requirment: this.form.value.other_requirment,
                    note: this.form.value.note,
                },
                org_ID: this.form.value.org_ID,
                job_Title_ID: this.form.value.job_Title_ID,
                gender_ID: this.form.value.gender_ID,
            };
            model.rec_Request.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(data) {
        this.showLoading("form");
        this.recruitmentRequestService
            .create(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res.message.messageTypeName);
                this.requestId = res.data.rec_Request.id;
                this.formCtrls.id.setValue(this.requestId);
                let url = `/recruitment/${this.moduleId}/request/edit/${this.requestId}`;
                this.navigateTo(url);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading("form");
        });
    }
    update(data) {
        this.showLoading("form");
        this.recruitmentRequestService
            .update(data)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading("form");
        });
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
    onChangeJobTitle(values) {
        this.showJobTitleDetails = values.length > 0 ? true : false;
    }
}
AddRecruitmentRequestComponent.ɵfac = function AddRecruitmentRequestComponent_Factory(t) { return new (t || AddRecruitmentRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_4__.RecruitmentRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_organization_types_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationTypesService)); };
AddRecruitmentRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: AddRecruitmentRequestComponent, selectors: [["app-add-recruitment-request"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 50, consts: [[3, "name"], [1, "title-no-margin", "title-section", "fixed-title"], ["addTitle", "addRecruitmentRequest", "editTitle", "editRecruitmentRequest", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "row"], [1, "col-12", "cards-no-shadow", "has-fixed-title"], [1, "form-card", "sub-fixed-section"], ["container", ""], [1, "title-no-margin"], ["title", "generalInfoAboutRequest"], [1, "container-fluid", "mtop-20"], [1, "col-12"], [3, "formGroup"], [1, "col-md-6", "col-lg-3", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "orgTypeControl", "submitted", "filter"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter", "change"], [1, "mtop-12", "mbottom-12", 3, "label", "icon", "color", "iconPositionBefore", "disabled", "onClick"], [3, "control", "submitted", "inculdeBoth"], ["type", "number", "label", "vacantPlaces", 3, "control", "submitted"], ["label", "fromDateExpected", 3, "control", "submitted"], ["label", "toDateExpected", 3, "control", "submitted"], ["label", "otherRequirment", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [3, "jobTitleId"], [3, "click"]], template: function AddRecruitmentRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, AddRecruitmentRequestComponent_app_add_new_btn_3_Template, 1, 2, "app-add-new-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "mat-card", 7, 8)(9, "mat-card-title", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "page-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "mat-card-content", 11)(12, "div", 5)(13, "div", 12)(14, "form", 13)(15, "div", 5)(16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](17, "app-org-types-dropdown-current-structure", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](19, "app-organization-by-org-type-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 14)(21, "app-job-title-by-org-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function AddRecruitmentRequestComponent_Template_app_job_title_by_org_dropdown_change_21_listener($event) { return ctx.onChangeJobTitle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 14)(23, "app-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onClick", function AddRecruitmentRequestComponent_Template_app_button_onClick_23_listener() { return ctx.showJobTitleDetails = !ctx.showJobTitleDetails; });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "app-employment-type-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](27, "app-request-reason-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "app-gender-dropdown", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](31, "app-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](33, "app-datepicker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](35, "app-datepicker", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](37, "app-input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](39, "app-input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "mat-card-actions", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](41, AddRecruitmentRequestComponent_reset_form_btn_41_Template, 1, 0, "reset-form-btn", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "submit-btn", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onClick", function AddRecruitmentRequestComponent_Template_submit_btn_onClick_42_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](43, "app-add-recruitment-job-details", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("name", "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", ctx.requestId);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.requestId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("url", "/recruitment/", ctx.moduleId, "/request/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.org_type_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.org_ID)("orgTypeControl", ctx.formCtrls.org_type_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.job_Title_ID)("organizationControl", ctx.formCtrls.org_ID)("organizationControlRequired", true)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", ctx.showJobTitleDetails ? "hideDetails" : "showDetails")("icon", ctx.showJobTitleDetails ? "fas fa-chevron-up" : "fas fa-chevron-down")("color", ctx.btn.darkBlue)("iconPositionBefore", false)("disabled", !ctx.formCtrls.job_Title_ID.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.employementType_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.request_Reason_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.gender_ID)("submitted", ctx.submitted)("inculdeBoth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.emp_No)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.other_requirment)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false)("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("hidden", !ctx.showJobTitleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("jobTitleId", ctx.formCtrls.job_Title_ID.value);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_13__.ButtonComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerComponent, _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.OrganizationByOrgTypeDropdownComponent, _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.JobTitleByOrgDropdownComponent, _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.GenderDropdownComponent, _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_17__.OrgTypesDropdownCurrentStructureComponent, _shared_components_dropdowns_recruitment_employment_type_dropdown_employment_type_dropdown_component__WEBPACK_IMPORTED_MODULE_18__.EmploymentTypeDropdownComponent, _shared_components_dropdowns_recruitment_request_reason_dropdown_request_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_19__.RequestReasonDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupDirective, _add_recruitment_job_details_add_recruitment_job_details_component__WEBPACK_IMPORTED_MODULE_20__.AddRecruitmentJobDetailsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVjcnVpdG1lbnQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 22007:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/request/recruitment-request-index/recruitment-request-index.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentRequestIndexComponent": () => (/* binding */ RecruitmentRequestIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_recruitment_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/recruitment-request */ 87420);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/recruitment/services/recruitment-request.service */ 71180);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class RecruitmentRequestIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(recruitmentRequestService) {
        super();
        this.recruitmentRequestService = recruitmentRequestService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "jobTitle",
            "vacantPlaces",
            "fromDateExpected",
            "toDateExpected",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    ngOnInit() { }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.recruitmentRequestService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_recruitment_mapper_recruitment_request__WEBPACK_IMPORTED_MODULE_0__.recruitmentRequestToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(request) {
        let msg = `${request.jobTitle} - ${request.fromDateExpected} - ${request.toDateExpected}`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(request);
        });
    }
    delete(request) {
        this.showLoading();
        this.recruitmentRequestService
            .Delete(request.id)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
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
}
RecruitmentRequestIndexComponent.ɵfac = function RecruitmentRequestIndexComponent_Factory(t) { return new (t || RecruitmentRequestIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_3__.RecruitmentRequestService)); };
RecruitmentRequestIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RecruitmentRequestIndexComponent, selectors: [["app-recruitment-request-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [[1, "index-card"], ["title", "recruitmentRequest", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function RecruitmentRequestIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 0)(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-content")(5, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function RecruitmentRequestIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function RecruitmentRequestIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.recruitmentRequestService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0bWVudC1yZXF1ZXN0LWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 87420:
/*!***********************************************************!*\
  !*** ./src/app/recruitment/mapper/recruitment-request.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recruitmentRequestToDisplay": () => (/* binding */ recruitmentRequestToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function recruitmentRequestToDisplay(data) {
    return data.map((request) => {
        return {
            id: request.request?.id,
            jobTitle: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(request.job_Title?.ar_Name, request.job_Title?.en_Name),
            vacantPlaces: request.request?.emp_No,
            fromDateExpected: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(request.request?.from_Date),
            toDateExpected: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(request.request?.to_Date),
            notes: request.request?.note,
        };
    });
}


/***/ }),

/***/ 71579:
/*!******************************************************************!*\
  !*** ./src/app/recruitment/recruitment.module-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentRoutingModule": () => (/* binding */ RecruitmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/request/recruitment-request-index/recruitment-request-index.component */ 22007);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/request/add-request/add-recruitment-request/add-recruitment-request.component */ 85499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: "request",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.request },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_2__.RecruitmentRequestIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.request_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_4__.AddRecruitmentRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_request },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_4__.AddRecruitmentRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_request },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
];
class RecruitmentRoutingModule {
}
RecruitmentRoutingModule.ɵfac = function RecruitmentRoutingModule_Factory(t) { return new (t || RecruitmentRoutingModule)(); };
RecruitmentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RecruitmentRoutingModule });
RecruitmentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RecruitmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 8941:
/*!***************************************************!*\
  !*** ./src/app/recruitment/recruitment.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentModule": () => (/* binding */ RecruitmentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _recruitment_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recruitment.module-routing.module */ 71579);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/request/recruitment-request-index/recruitment-request-index.component */ 22007);
/* harmony import */ var _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request/add-request/add-recruitment-request/add-recruitment-request.component */ 85499);
/* harmony import */ var _components_request_add_request_add_recruitment_job_details_add_recruitment_job_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/request/add-request/add-recruitment-job-details/add-recruitment-job-details.component */ 90364);
/* harmony import */ var app_org_management_org_management_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/org-management/org-management.module */ 90446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);








class RecruitmentModule {
}
RecruitmentModule.ɵfac = function RecruitmentModule_Factory(t) { return new (t || RecruitmentModule)(); };
RecruitmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RecruitmentModule });
RecruitmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _recruitment_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, app_org_management_org_management_module__WEBPACK_IMPORTED_MODULE_5__.OrgManagementModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecruitmentModule, { declarations: [_components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_2__.RecruitmentRequestIndexComponent,
        _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_3__.AddRecruitmentRequestComponent,
        _components_request_add_request_add_recruitment_job_details_add_recruitment_job_details_component__WEBPACK_IMPORTED_MODULE_4__.AddRecruitmentJobDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _recruitment_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, app_org_management_org_management_module__WEBPACK_IMPORTED_MODULE_5__.OrgManagementModule] }); })();


/***/ }),

/***/ 71180:
/*!*********************************************************************!*\
  !*** ./src/app/recruitment/services/recruitment-request.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentRequestService": () => (/* binding */ RecruitmentRequestService)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _mapper_recruitment_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mapper/recruitment-request */ 87420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class RecruitmentRequestService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Recruitment/Request/Create", data);
    }
    update(data) {
        return this.post("Recruitment/Request/Edit", data);
    }
    getList(params) {
        return this.get("Recruitment/Request/GetList", {
            params: {
                ...params,
                // $expand: `${db.rec_request},${db.Core_Job_Title}`,
            },
        });
    }
    getAll() {
        return this.get("Recruitment/Request/GetAll"
        // {
        //   params: {
        //     $expand: `${db.rec_request},${db.Core_Job_Title}`,
        //   },
        // }
        );
    }
    getById(id) {
        return this.get("Recruitment/Request/GetAll", {
            params: {
                $filter: `request_ID eq ${id}`,
                // $expand: `${db.rec_request},${db.Core_Job_Title},${db.CORE_GENDER},${db.core_Org}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Recruitment/Request/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        return this.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                res.data = (0,_mapper_recruitment_request__WEBPACK_IMPORTED_MODULE_2__.recruitmentRequestToDisplay)(res.data);
                return res;
            }
        }));
    }
}
RecruitmentRequestService.ɵfac = function RecruitmentRequestService_Factory(t) { return new (t || RecruitmentRequestService)(); };
RecruitmentRequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RecruitmentRequestService, factory: RecruitmentRequestService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_recruitment_recruitment_module_ts.js.map