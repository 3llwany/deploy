"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_recruitment_recruitment_module_ts"],{

/***/ 89282:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/add-candidate-core/add-candidate-core.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCandidateCoreComponent": () => (/* binding */ AddCandidateCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _add_candidate_done_dialog_add_candidate_done_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-candidate-done-dialog/add-candidate-done-dialog.component */ 49623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/recruitment/services/recruitment-request.service */ 71180);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/steps-footer/steps-footer.component */ 20957);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var _general_info_candidate_basic_info_candidate_basic_info_candidate_basic_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../general-info/candidate-basic-info/candidate-basic-info/candidate-basic-info.component */ 750);
/* harmony import */ var _general_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../general-info/candidate-contact-info/candidate-contact-info/candidate-contact-info/candidate-contact-info.component */ 94365);
/* harmony import */ var _general_info_candidate_general_info_candidate_general_info_candidate_general_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../general-info/candidate-general-info/candidate-general-info/candidate-general-info.component */ 51907);
/* harmony import */ var _education_candidate_education_candidate_education_info_candidate_education_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../education/candidate-education/candidate-education-info/candidate-education-info.component */ 27096);
/* harmony import */ var _education_candidate_training_candidate_training_info_candidate_training_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../education/candidate-training/candidate-training-info/candidate-training-info.component */ 23965);
/* harmony import */ var _education_candidate_certifications_candidate_certification_info_candidate_certification_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../education/candidate-certifications/candidate-certification-info/candidate-certification-info.component */ 67498);
/* harmony import */ var _work_experience_candidate_work_experience_candidate_work_experience_info_candidate_work_experience_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../work-experience/candidate-work-experience/candidate-work-experience-info/candidate-work-experience-info.component */ 19825);
/* harmony import */ var _work_experience_candidate_related_requests_candidate_related_requests_info_candidate_related_requests_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../work-experience/candidate-related-requests/candidate-related-requests-info/candidate-related-requests-info.component */ 28264);
/* harmony import */ var _work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_info_candidate_suitable_requisitions_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-info/candidate-suitable-requisitions-info.component */ 40045);
/* harmony import */ var _work_experience_candidate_reference_candidate_reference_info_candidate_reference_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../work-experience/candidate-reference/candidate-reference-info/candidate-reference-info.component */ 51547);
/* harmony import */ var _work_experience_candidate_documents_candidate_document_info_candidate_document_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../work-experience/candidate-documents/candidate-document-info/candidate-document-info.component */ 29847);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





























const _c0 = ["stepper"];
function AddCandidateCoreComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 16)(8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 4, "jobVacancy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](": ", ctx_r11.jobTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](10, 6, "validTill"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" : ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](13, 8, ctx_r11.requestEndData, "d MMM y"), " ");
} }
function AddCandidateCoreComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "p-skeleton", 17)(3, "p-skeleton", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "p-skeleton", 17)(6, "p-skeleton", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} }
function AddCandidateCoreComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, AddCandidateCoreComponent_ng_container_1_div_1_Template, 14, 11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, AddCandidateCoreComponent_ng_container_1_div_2_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r0.isLoaded);
} }
function AddCandidateCoreComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "page-title", 19);
} }
function AddCandidateCoreComponent_ng_container_4_app_add_new_btn_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-add-new-btn", 21);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("url", "/recruitment/", ctx_r13.moduleId, "/candidate/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("params", ctx_r13.parentParam);
} }
function AddCandidateCoreComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, AddCandidateCoreComponent_ng_container_4_app_add_new_btn_1_Template, 1, 2, "app-add-new-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "app-back-btn", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.requestId > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("url", "/recruitment/", ctx_r3.moduleId, "/candidate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("params", ctx_r3.pageParams);
} }
function AddCandidateCoreComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 22);
} }
function AddCandidateCoreComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 22);
} }
function AddCandidateCoreComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 22);
} }
function AddCandidateCoreComponent_candidate_suitable_requisitions_info_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "candidate-suitable-requisitions-info");
} }
function AddCandidateCoreComponent_candidate_related_requests_info_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "candidate-related-requests-info");
} }
function AddCandidateCoreComponent_candidate_reference_info_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "candidate-reference-info");
} }
class AddCandidateCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService, recruitmentRequestService, dialog) {
        super();
        this.candidateService = candidateService;
        this.recruitmentRequestService = recruitmentRequestService;
        this.dialog = dialog;
        this.isInternal = true;
        this.isGeneralCompleted = false;
        this.isEducationCompleted = false;
        this.isWorkExperienceCompleted = false;
        this.isLoaded = false;
        this.candidateService.isDone$.subscribe((isDone) => {
            this.isGeneralCompleted =
                isDone.GeneralData &&
                    isDone.MaritalData &&
                    isDone.MilitaryData &&
                    isDone.AddressData &&
                    isDone.ContactData;
            this.isEducationCompleted =
                isDone.EducationData && isDone.TrainingData && isDone.CertificationData;
            this.isWorkExperienceCompleted =
                isDone.WorkExperincesData &&
                    isDone.JobInfoData &&
                    isDone.relatedData &&
                    isDone.RefrenceData &&
                    isDone.DocumentData;
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.requestId > 0 && this.checkNoBusinessOrCompany()) {
            this.getRequestIdById();
        }
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.requestId = Number(param.requestId ?? 0);
            if (this.requestId > 0) {
                this.isInternal = false;
                this.candidateService.isDone$.next({
                    ...this.candidateService.isDone$.getValue(),
                    JobInfoData: true,
                    relatedData: true,
                    RefrenceData: true,
                });
            }
        });
    }
    stepChanged() {
        // prevent inputs to be invalid after next & back
        this.stepper.selected.interacted = false;
    }
    // getCandidateId(value) {
    //   this.candidateId = value;
    // }
    submit() {
        this.candidateService.submitted$.next(true);
        let isDone = this.candidateService.isDone$.getValue();
        if (Object.keys(isDone).every((key) => isDone[key] == true)) {
            let model = this.candidateService.candidateData$.getValue();
            console.log(model);
            let formdata = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.objectToFormData(model);
            this.saveGeneral(formdata);
        }
        else
            this.warning("pleaseEnterAllRequiredData");
    }
    saveGeneral(model) {
        this.showLoading();
        this.candidateService
            .createGeneral(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (this.isInternal) {
                    this.addSuccessfullyMsg(res.message.messageTypeName);
                    // // navigate to edit
                    // this.candidateId = res.data.id;
                    // this.formCtrls.id.setValue(this.candidateId);
                    // let url = `/recruitment/${this.moduleId}/candidate/edit/${this.candidateId}`;
                    // this.navigateTo(url);
                }
                else
                    this.openDoneDialog();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    openDoneDialog() {
        return this.dialog
            .open(_add_candidate_done_dialog_add_candidate_done_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddCandidateDoneDialogComponent, {
            autoFocus: false,
            disableClose: true,
            panelClass: "candidate-done-dialog",
        })
            .afterClosed();
    }
    getRequestIdById() {
        this.isLoaded = false;
        this.recruitmentRequestService
            .getById(this.requestId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.jobTitle = this.msgTranslate(res.data[0].job_Title.ar_Name, res.data[0].job_Title.en_Name);
                this.requestEndData = res.data[0].request.to_Date;
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
}
AddCandidateCoreComponent.ɵfac = function AddCandidateCoreComponent_Factory(t) { return new (t || AddCandidateCoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__.CandidateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_5__.RecruitmentRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog)); };
AddCandidateCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: AddCandidateCoreComponent, selectors: [["app-add-candidate-core"]], viewQuery: function AddCandidateCoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 30, consts: [[1, "title-no-margin", "title-section", "fixed-title"], [4, "ngIf", "ngIfElse"], ["internal", ""], [4, "ngIf"], [1, "has-fixed-title"], [1, "candidate-stepper", 3, "linear", "disableRipple", "selectionChange"], ["stepper", ""], [3, "label", "completed"], ["matStepperIcon", "edit"], ["multi", "", 1, "expantion-add-forms"], [3, "stepper", "parentParam", "showCancel", "returnAfterFinish", "finish"], ["class", "candidate-header-container", 4, "ngIf"], [1, "candidate-header-container"], [1, "header-item", "start-value"], [1, "header-title"], [1, "header-value"], [1, "header-item", "center-value"], ["width", "8rem", "height", "2rem"], ["width", "12rem", "height", "2rem", 1, "value"], ["title", "addCandidate"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "fas", "fa-check"]], template: function AddCandidateCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, AddCandidateCoreComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, AddCandidateCoreComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, AddCandidateCoreComponent_ng_container_4_Template, 3, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "mat-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("selectionChange", function AddCandidateCoreComponent_Template_mat_stepper_selectionChange_6_listener() { return ctx.stepChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, AddCandidateCoreComponent_ng_template_11_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "mat-accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "candidate-general-info")(14, "candidate-basic-info")(15, "candidate-contact-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](19, AddCandidateCoreComponent_ng_template_19_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "mat-accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](21, "candidate-education-info")(22, "candidate-training-info")(23, "candidate-certification-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](25, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](27, AddCandidateCoreComponent_ng_template_27_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "mat-accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "candidate-work-experience-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](30, AddCandidateCoreComponent_candidate_suitable_requisitions_info_30_Template, 1, 0, "candidate-suitable-requisitions-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](31, AddCandidateCoreComponent_candidate_related_requests_info_31_Template, 1, 0, "candidate-related-requests-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, AddCandidateCoreComponent_candidate_reference_info_32_Template, 1, 0, "candidate-reference-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](33, "candidate-document-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "steps-footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("finish", function AddCandidateCoreComponent_Template_steps_footer_finish_34_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.isInternal)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isInternal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("linear", false)("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 18, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](10, 20, "general")));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("completed", ctx.isGeneralCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 22, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](18, 24, "education")));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("completed", ctx.isEducationCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](25, 26, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](26, 28, ctx.isInternal ? "jobInfo" : "workExperience")));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("completed", ctx.isWorkExperienceCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isInternal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isInternal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isInternal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("stepper", _r4)("parentParam", ctx.parentParam)("showCancel", ctx.isInternal ? true : false)("returnAfterFinish", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_7__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _shared_components_steps_footer_steps_footer_component__WEBPACK_IMPORTED_MODULE_9__.StepsFooterComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardTitle, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatAccordion, primeng_skeleton__WEBPACK_IMPORTED_MODULE_27__.Skeleton, _general_info_candidate_basic_info_candidate_basic_info_candidate_basic_info_component__WEBPACK_IMPORTED_MODULE_10__.CandidateBasicInfoComponent, _general_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_component__WEBPACK_IMPORTED_MODULE_11__.CandidateContactInfoComponent, _general_info_candidate_general_info_candidate_general_info_candidate_general_info_component__WEBPACK_IMPORTED_MODULE_12__.CandidateGeneralInfoComponent, _education_candidate_education_candidate_education_info_candidate_education_info_component__WEBPACK_IMPORTED_MODULE_13__.CandidateEducationInfoComponent, _education_candidate_training_candidate_training_info_candidate_training_info_component__WEBPACK_IMPORTED_MODULE_14__.CandidateTrainingInfoComponent, _education_candidate_certifications_candidate_certification_info_candidate_certification_info_component__WEBPACK_IMPORTED_MODULE_15__.CandidateCertificationInfoComponent, _work_experience_candidate_work_experience_candidate_work_experience_info_candidate_work_experience_info_component__WEBPACK_IMPORTED_MODULE_16__.CandidateWorkExperienceInfoComponent, _work_experience_candidate_related_requests_candidate_related_requests_info_candidate_related_requests_info_component__WEBPACK_IMPORTED_MODULE_17__.CandidateRelatedRequestsInfoComponent, _work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_info_candidate_suitable_requisitions_info_component__WEBPACK_IMPORTED_MODULE_18__.CandidateSuitableRequisitionsInfoComponent, _work_experience_candidate_reference_candidate_reference_info_candidate_reference_info_component__WEBPACK_IMPORTED_MODULE_19__.CandidateReferenceInfoComponent, _work_experience_candidate_documents_candidate_document_info_candidate_document_info_component__WEBPACK_IMPORTED_MODULE_20__.CandidateDocumentInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslatePipe], styles: [".candidate-stepper.candidate-stepper.mat-stepper-horizontal .mat-horizontal-content-container {\n  padding: 5px;\n}\n  .candidate-stepper {\n  padding-bottom: 30px;\n}\n  .candidate-header-container {\n  display: flex;\n  gap: 30px;\n  margin: 0 30px;\n}\n  .candidate-header-container .header-item {\n  display: inline-block;\n}\n  .candidate-header-container .header-item .header-title {\n  font-size: 20px;\n  color: #4e4e4e;\n}\n  .candidate-header-container .header-item .header-value {\n  font-size: 20px;\n  color: #101317;\n}\n  .candidate-header-container .center-value {\n  margin: auto;\n}\n  .candidate-header-container p-skeleton div {\n  display: inline-block;\n}\n  .candidate-header-container p-skeleton.value {\n  margin: 0 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYW5kaWRhdGUtY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVFLFlBQUE7QUFESjtBQUdFO0VBQ0Usb0JBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBRko7QUFLSTtFQUNFLHFCQUFBO0FBSE47QUFLTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSFI7QUFNTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSlI7QUFZSTtFQUNFLFlBQUE7QUFWTjtBQWdCSTtFQUNFLHFCQUFBO0FBZE47QUFnQkk7RUFDRSxjQUFBO0FBZE4iLCJmaWxlIjoiYWRkLWNhbmRpZGF0ZS1jb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAuY2FuZGlkYXRlLXN0ZXBwZXIuY2FuZGlkYXRlLXN0ZXBwZXIubWF0LXN0ZXBwZXItaG9yaXpvbnRhbFxyXG4gICAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLmNhbmRpZGF0ZS1zdGVwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbmRpZGF0ZS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuaGVhZGVyLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM0ZTRlNGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oZWFkZXItdmFsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogIzEwMTMxNztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC5zdGFydC12YWx1ZSB7XHJcbiAgICAvLyAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC5jZW50ZXItdmFsdWUge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gbGVmdDogNDAlO1xyXG4gICAgICAvLyAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgcC1za2VsZXRvbiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwLXNrZWxldG9uLnZhbHVlIHtcclxuICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 49623:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/add-candidate-done-dialog/add-candidate-done-dialog.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCandidateDoneDialogComponent": () => (/* binding */ AddCandidateDoneDialogComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/button/button.component */ 71812);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






class AddCandidateDoneDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(dialogRef) {
        super();
        this.dialogRef = dialogRef;
        dialogRef.backdropClick().subscribe(() => this.backToHome());
    }
    backToHome() {
        location.reload();
    }
}
AddCandidateDoneDialogComponent.ɵfac = function AddCandidateDoneDialogComponent_Factory(t) { return new (t || AddCandidateDoneDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
AddCandidateDoneDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddCandidateDoneDialogComponent, selectors: [["app-add-candidate-done-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 9, consts: [[3, "name"], ["mat-dialog-title", ""], [1, "done-title"], [1, "container-fluid", "mx-0"], [1, "done-content"], ["alt", "done", 3, "src"], ["label", "General.backToHome", "mat-dialog-close", "", 3, "color", "onClick"]], template: function AddCandidateDoneDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-dialog-content", 3)(6, "div", 4)(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function AddCandidateDoneDialogComponent_Template_app_button_onClick_11_listener() { return ctx.backToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, "finallyAllIsDone"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, "justWaitOurReplyViaYourEmail"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.svgManager.done, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.btn.darkBlue);
    } }, dependencies: [_shared_components_resources_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".candidate-done-dialog .mat-dialog-container {\n  padding: 40px 90px;\n  border-radius: 10px;\n}\n  .candidate-done-dialog .done-title {\n  text-align: center;\n  font-size: 30px;\n  color: #374761;\n}\n  .candidate-done-dialog .mat-dialog-content {\n  padding: 0;\n}\n  .candidate-done-dialog .done-content {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n  .candidate-done-dialog .done-content > div {\n  align-self: center;\n  color: #5c5c5c;\n  font-size: 18px;\n  margin: 0;\n}\n  .candidate-done-dialog .done-content img {\n  width: 320px;\n  height: 320px;\n  margin-bottom: 25px;\n}\n  .candidate-done-dialog .done-content app-button {\n  align-self: center;\n}\n  .candidate-done-dialog .done-content app-button .btn {\n  padding: 2px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYW5kaWRhdGUtZG9uZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXHN0eWxlLWNvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ1pPO0FEUWI7QUFPSTtFQUNFLFVBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQU5OO0FBUU07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQU5SO0FBU007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUFI7QUFVTTtFQUNFLGtCQUFBO0FBUlI7QUFVUTtFQUNFLGlCQUFBO0FBUlYiLCJmaWxlIjoiYWRkLWNhbmRpZGF0ZS1kb25lLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhc3NldHMvc2Fzcy9zdHlsZS1jb25zdGFudHNcIjtcclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLmNhbmRpZGF0ZS1kb25lLWRpYWxvZyB7XHJcbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiA0MHB4IDkwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvbmUtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb25lLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDMwcHg7XHJcblxyXG4gICAgICAmID4gZGl2IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM1YzVjNWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRtYWluLWNvbG9yOiAjMzc0NzYxO1xyXG4kbWFpbi1jb2xvci1ob3ZlcjogIzRkNjA4MTtcclxuJGlucHV0LXJhZGl1czogOHB4O1xyXG4kaW5wdXQtZGlzYWJsZWQtY29sb3I6ICNmMmY0ZjU7XHJcbiRpbnB1dC1kaXNhYmxlZC1jb2xvci0yOiAjYTE5ZjlkO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRiYWJ5Qmx1ZS1jb2xvcjogIzE2OWVkOTtcclxuJGZvbnRBd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuJHN0ZXBwZXItc2VjdGlvbi10aXRsZTogIzMyMzIzMjtcclxuIl19 */"] });


/***/ }),

/***/ 59461:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-certifications/candidate-certification-card/candidate-certification-card.component.ts ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateCertificationCardComponent": () => (/* binding */ CandidateCertificationCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_certification_dialog_candidate_certification_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-certification-dialog/candidate-certification-dialog.component */ 99322);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_certification_table_candidate_certification_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-certification-table/candidate-certification-table.component */ 21652);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateCertificationCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateCertificationCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateCertificationCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateCertificationCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-certification-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateCertificationCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-view-data-row-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-view-data-row-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-view-data-row-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateCertificationCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateCertificationCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateCertificationCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateCertificationCardComponent_mat_card_0_div_6_Template, 12, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7)(8, "see-more-btn", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateCertificationCardComponent_mat_card_0_Template_see_more_btn_toggleTable_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidatecertificationId)("isTableView", ctx_r0.isTableView);
} }
function CandidateCertificationCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 21);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateCertificationCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidatecertificationId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_certification_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_certification_dialog_candidate_certification_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateCertificationDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateCertificationCardComponent.ɵfac = function CandidateCertificationCardComponent_Factory(t) { return new (t || CandidateCertificationCardComponent)(); };
CandidateCertificationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateCertificationCardComponent, selectors: [["candidate-certification-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "certifications", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-10 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-10", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "row"], [1, "col-4", "col-lg", "mb-2"], ["label", "certification", 1, "emp-custom-view", 3, "isDate", "isBool"], [1, "col-3", "col-lg", "mb-2"], ["label", "location", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "start_date", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "end_date", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "notes", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateCertificationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateCertificationCardComponent_mat_card_0_Template, 9, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateCertificationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_certification_table_candidate_certification_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateCertificationTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY2VydGlmaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 42233:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-certifications/candidate-certification-core/candidate-certification-core.component.ts ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateCertificationCoreComponent": () => (/* binding */ CandidateCertificationCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_certification_card_candidate_certification_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-certification-card/candidate-certification-card.component */ 59461);






function CandidateCertificationCoreComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-certification-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateCertificationCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_certification_info_tab);
    }
}
CandidateCertificationCoreComponent.ɵfac = function CandidateCertificationCoreComponent_Factory(t) { return new (t || CandidateCertificationCoreComponent)(); };
CandidateCertificationCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateCertificationCoreComponent, selectors: [["candidate-certification-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateCertificationCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-content", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CandidateCertificationCoreComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_certification_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_certification_card_candidate_certification_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateCertificationCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY2VydGlmaWNhdGlvbi1jb3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 99322:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-certifications/candidate-certification-dialog/candidate-certification-dialog.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateCertificationDialogComponent": () => (/* binding */ CandidateCertificationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_certification_info_candidate_certification_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-certification-info/candidate-certification-info.component */ 67498);




class CandidateCertificationDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateCertificationDialogComponent.ɵfac = function CandidateCertificationDialogComponent_Factory(t) { return new (t || CandidateCertificationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateCertificationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateCertificationDialogComponent, selectors: [["candidate-certification-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateCertificationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateCertificationDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-certification-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_certification_info_candidate_certification_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateCertificationInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY2VydGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 45851:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-certifications/candidate-certification-form/candidate-certifications-form.component.ts ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateCertificationFormComponent": () => (/* binding */ CandidateCertificationFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_certification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-certification */ 84948);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);


















function CandidateCertificationFormComponent_reset_form_btn_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CandidateCertificationFormComponent_reset_form_btn_14_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CandidateCertificationFormComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-divider", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "app-material-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function CandidateCertificationFormComponent_ng_container_16_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.candidateCertificationToEdit($event)); })("deleteRow", function CandidateCertificationFormComponent_ng_container_16_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateCertificationFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "certification",
            "location",
            "startDate",
            "endDate",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.dataSource?.data?.length > 0)
    //     this.dataSource = new MatTableDataSource(null);
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getAll();
    //   } else this.isLoaded = true;
    // }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            certification_Name: [null /* , [Validators.required] */],
            location_Name: [null /* , [Validators.required] */],
            from_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            to_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            note: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("from_Date", "to_Date"),
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    // getAll() {
    //   this.dataSource = new MatTableDataSource(null);
    //   this.isLoaded = false;
    //   this.candidateCertificationService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateCertificationModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         this.dataSource = new MatTableDataSource(
    //           candidateCertificationToDisplay(res.data)
    //         );
    //         if (res.data.length > 0) this.changeDescriptionInfo(true, 0);
    //         else this.invalidRequiredCount();
    //         this.isLoaded = true;
    //       } else this.errorList(res.message.messages);
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // person_Instance_ID: this.candidateId,
                id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                certification_Name: this.form.value.certification_Name,
                location_Name: this.form.value.location_Name,
                from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.from_Date),
                to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.to_Date),
                note: this.form.value.note,
            };
            this.form.value.id == 0 ? this.create(model) : this.update(model);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        // this.showLoading();
        // this.candidateCertificationService
        //   .create(model)
        //   .subscribe((res: IResponse<ICandidateCertificationModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.addSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_certification__WEBPACK_IMPORTED_MODULE_0__.candidateCertificationToDisplay)([model])[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        // this.showLoading();
        // this.candidateCertificationService
        //   .update(model)
        //   .subscribe((res: IResponse<ICandidateCertificationModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.updateSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_certification__WEBPACK_IMPORTED_MODULE_0__.candidateCertificationToDisplay)([model])[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateCertificationToEdit(certification) {
        this.form.patchValue(certification);
    }
    onDelete(certification) {
        let msg = `${certification.certification} (${certification.startDate} - ${certification.endDate})`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(certification);
        });
    }
    delete(certification) {
        // this.showLoading();
        // this.candidateCertificationService
        //   .Delete(certification.id)
        //   .subscribe((res: IResponse) => {
        //     if (res.message.messageType == MessageTypes.Success) {
        //       this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.getAll();
        //       if (certification.id == this.formCtrls.id.value) this.clearForm();
        //     } else this.errorList(res?.message?.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.splice(this.getIndex(certification), 1);
        this.invalidRequiredCount();
        if (certification.id == this.formCtrls.id.value)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            let certification = { ...ele };
            delete certification.id;
            delete certification.certification;
            delete certification.location;
            delete certification.startDate;
            delete certification.endDate;
            delete certification.notes;
            generalModel.push(certification);
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            CertificationData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(certification) {
        return this.dataSource.data.findIndex((ele) => ele.id == certification.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.id ? acc : ele.id), 0) + 1);
    }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            // CertificationData: this.descriptionInfo.isDone,
            CertificationData: isDone,
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescriptionInfo(count == 0 ? true : false, count);
        }
        else
            this.changeDescriptionInfo(true, 0);
    }
}
CandidateCertificationFormComponent.ɵfac = function CandidateCertificationFormComponent_Factory(t) { return new (t || CandidateCertificationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__.CandidateService)); };
CandidateCertificationFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CandidateCertificationFormComponent, selectors: [["candidate-certification-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 16, consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], ["label", "certification", 3, "control", "submitted", "Blur"], ["label", "location", 3, "control", "submitted", "Blur"], ["label", "startDate", 3, "control", "submitted", "change"], ["label", "endDate", 3, "control", "submitted", "change"], ["label", "notes", 3, "control", "submitted"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", "lable", "add", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateCertificationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("Blur", function CandidateCertificationFormComponent_Template_app_input_Blur_3_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 2)(5, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("Blur", function CandidateCertificationFormComponent_Template_app_input_Blur_5_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2)(7, "app-datepicker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CandidateCertificationFormComponent_Template_app_datepicker_change_7_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 2)(9, "app-datepicker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CandidateCertificationFormComponent_Template_app_datepicker_change_9_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CandidateCertificationFormComponent_reset_form_btn_14_Template, 1, 0, "reset-form-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function CandidateCertificationFormComponent_Template_submit_btn_onClick_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, CandidateCertificationFormComponent_ng_container_16_Template, 4, 7, "ng-container", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.certification_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.location_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY2VydGlmaWNhdGlvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 67498:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-certifications/candidate-certification-info/candidate-certification-info.component.ts ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateCertificationInfoComponent": () => (/* binding */ CandidateCertificationInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_certification_form_candidate_certifications_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-certification-form/candidate-certifications-form.component */ 45851);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateCertificationInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-certification-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateCertificationInfoComponent_mat_expansion_panel_0_Template_candidate_certification_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "certifications"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateCertificationInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateCertificationInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateCertificationInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-certification-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateCertificationInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "certifications")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateCertificationInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() {
    }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateCertificationInfoComponent.ɵfac = function CandidateCertificationInfoComponent_Factory(t) { return new (t || CandidateCertificationInfoComponent)(); };
CandidateCertificationInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateCertificationInfoComponent, selectors: [["candidate-certification-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateCertificationInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateCertificationInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateCertificationInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _candidate_certification_form_candidate_certifications_form_component__WEBPACK_IMPORTED_MODULE_2__.CandidateCertificationFormComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__.CandidateTabDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY2VydGlmaWNhdGlvbi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 21652:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-certifications/candidate-certification-table/candidate-certification-table.component.ts ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateCertificationTableComponent": () => (/* binding */ CandidateCertificationTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateCertificationTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "certification",
            "location",
            "start_date",
            "end_date",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_certification_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateCertificationTableComponent.ɵfac = function CandidateCertificationTableComponent_Factory(t) { return new (t || CandidateCertificationTableComponent)(); };
CandidateCertificationTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateCertificationTableComponent, selectors: [["candidate-certification-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateCertificationTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateCertificationTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY2VydGlmaWNhdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 75214:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-education/candidate-education-card/candidate-education-card.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateEducationCardComponent": () => (/* binding */ CandidateEducationCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_education_dialog_candidate_education_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-education-dialog/candidate-education-dialog.component */ 74009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_education_table_candidate_education_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-education-table/candidate-education-table.component */ 75288);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateEducationCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateEducationCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateEducationCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateEducationCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-education-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateEducationCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-view-data-row-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-view-data-row-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-view-data-row-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateEducationCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateEducationCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateEducationCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateEducationCardComponent_mat_card_0_div_6_Template, 12, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8)(8, "see-more-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateEducationCardComponent_mat_card_0_Template_see_more_btn_toggleTable_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidateeducationId)("isTableView", ctx_r0.isTableView);
} }
function CandidateEducationCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateEducationCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidateeducationId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_education_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_education_dialog_candidate_education_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateEducationDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateEducationCardComponent.ɵfac = function CandidateEducationCardComponent_Factory(t) { return new (t || CandidateEducationCardComponent)(); };
CandidateEducationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateEducationCardComponent, selectors: [["candidate-education-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "educationInfo", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-8 col-12", 4, "ngIf"], ["class", "col-lg-10 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-8", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "col-lg-10", "col-12"], [1, "row"], [1, "col-4", "col-lg", "mb-2"], ["label", "institution", 1, "emp-custom-view", 3, "isDate", "isBool"], [1, "col-3", "col-lg", "mb-2"], ["label", "academicQualifications", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "major", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "year", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "grade", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateEducationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateEducationCardComponent_mat_card_0_Template, 9, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateEducationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_education_table_candidate_education_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateEducationTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZWR1Y2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 33305:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-education/candidate-education-core/candidate-education-core.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateEducationCoreComponent": () => (/* binding */ CandidateEducationCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_education_card_candidate_education_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-education-card/candidate-education-card.component */ 75214);






function CandidateEducationCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-education-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateEducationCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_education_info_tab);
    }
}
CandidateEducationCoreComponent.ɵfac = function CandidateEducationCoreComponent_Factory(t) { return new (t || CandidateEducationCoreComponent)(); };
CandidateEducationCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateEducationCoreComponent, selectors: [["candidate-education-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateEducationCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateEducationCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_education_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_education_card_candidate_education_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateEducationCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZWR1Y2F0aW9uLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 74009:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-education/candidate-education-dialog/candidate-education-dialog.component.ts ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateEducationDialogComponent": () => (/* binding */ CandidateEducationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_education_info_candidate_education_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-education-info/candidate-education-info.component */ 27096);




class CandidateEducationDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateEducationDialogComponent.ɵfac = function CandidateEducationDialogComponent_Factory(t) { return new (t || CandidateEducationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateEducationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateEducationDialogComponent, selectors: [["app-candidate-education-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateEducationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateEducationDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-education-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_education_info_candidate_education_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateEducationInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZWR1Y2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 11482:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-education/candidate-education-form/candidate-education-form.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateEducationFormComponent": () => (/* binding */ CandidateEducationFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_education__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-education */ 39625);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_hr_setup_institution_dropdown_institution_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/hr-setup/institution-dropdown/institution-dropdown.component */ 28867);
/* harmony import */ var _shared_components_dropdowns_personnel_setup_education_year_dropdown_education_year_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/personnel-setup/education-year-dropdown/education-year-dropdown.component */ 59997);
/* harmony import */ var _shared_components_dropdowns_hr_setup_education_degree_dropdown_education_degree_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/hr-setup/education-degree-dropdown/education-degree-dropdown.component */ 28888);
/* harmony import */ var _shared_components_dropdowns_hr_setup_education_grade_dropdown_education_grade_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/hr-setup/education-grade-dropdown/education-grade-dropdown.component */ 94183);




















function CandidateEducationFormComponent_reset_form_btn_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CandidateEducationFormComponent_reset_form_btn_14_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CandidateEducationFormComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "mat-divider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function CandidateEducationFormComponent_ng_container_16_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r4.candidateeEducationToEdit($event)); })("deleteRow", function CandidateEducationFormComponent_ng_container_16_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateEducationFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "institution",
            "academicQualifications",
            "major",
            "year",
            "grade",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.dataSource?.data?.length > 0)
    //     this.dataSource = new MatTableDataSource(null);
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getAll();
    //   } else this.isLoaded = true;
    // }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            institutionID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            academicID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            major: [null],
            gradeID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            year: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource([]);
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    // getAll() {
    //   this.dataSource = new MatTableDataSource(null);
    //   this.isLoaded = false;
    //   this.candidateEducationService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateEducationModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         this.dataSource = new MatTableDataSource(
    //           candidateEducationToDisplay(res.data)
    //         );
    //         if (res.data.length > 0) this.changeDescriptionInfo(true, 0);
    //         else this.invalidRequiredCount();
    //         this.isLoaded = true;
    //       } else this.errorList(res.message.messages);
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // personID: this.candidateId,
                id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                institutionID: this.form.value.institutionID,
                academicID: this.form.value.academicID,
                major: this.form.value.major,
                gradeID: this.form.value.gradeID,
                year: this.form.value.year,
            };
            const indexModel = {
                ...model,
                comm_Institution: this.selectedInstitution,
                comm_Education_Degree: this.selectedAcademicQualifications,
                comm_Grade_Type: this.selectedGrade,
            };
            this.form.value.id == 0
                ? this.create(indexModel)
                : this.update(indexModel);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        // this.showLoading();
        // this.candidateEducationService
        //   .create(model)
        //   .subscribe((res: IResponse<ICandidateEducationModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.addSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_education__WEBPACK_IMPORTED_MODULE_0__.candidateEducationToDisplay)([model])[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        // let editModel: ICandidateEducationEditRequest = {
        //   OriginalEducation: {
        //     personID: this.candidateId,
        //     institutionID: this.selectedEducation.institutionID,
        //     academicID: this.selectedEducation.academicID,
        //     major: this.selectedEducation.major,
        //     gradeID: this.selectedEducation.gradeID,
        //     year: this.selectedEducation.year,
        //   },
        //   Education: model,
        // };
        // this.showLoading();
        // this.candidateEducationService
        //   .update(editModel)
        //   .subscribe((res: IResponse<ICandidateEducationModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.updateSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //       this.selectedEducation = null;
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_education__WEBPACK_IMPORTED_MODULE_0__.candidateEducationToDisplay)([model])[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateeEducationToEdit(education) {
        this.form.patchValue(education);
        // this.selectedEducation = education;
        // // to detect edit mode
        // this.formCtrls.id.setValue(1);
    }
    onDelete(education) {
        let msg = education.academicQualifications + " - " + education.grade;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(education);
        });
    }
    delete(education) {
        // let deleteParams: ICandidateEducationDeleteParams = {
        //   PersonID: this.candidateId,
        //   AcademicID: education.academicID,
        //   GradeID: education.gradeID,
        // };
        // this.showLoading();
        // this.candidateEducationService
        //   .Delete(deleteParams)
        //   .subscribe((res: IResponse) => {
        //     if (res.message.messageType == MessageTypes.Success) {
        //       this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.getAll();
        //       if (
        //         education.academicID == this.selectedEducation?.academicID &&
        //         education.gradeID == this.selectedEducation?.gradeID &&
        //         this.formCtrls.id.value > 0
        //       )
        //         this.clearForm();
        //     } else this.errorList(res?.message?.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.splice(this.getIndex(education), 1);
        this.invalidRequiredCount();
        if (this.formCtrls.id.value == education.id)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            let education = { ...ele };
            delete education.id;
            delete education.institution;
            delete education.academicQualifications;
            delete education.grade;
            delete education.comm_Institution;
            delete education.comm_Education_Degree;
            delete education.comm_Grade_Type;
            generalModel.push(education);
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            EducationData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(education) {
        return this.dataSource.data.findIndex((ele) => ele.id == education.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.id ? acc : ele.id), 0) + 1);
    }
    onChangeInstitution(values) {
        this.selectedInstitution = values.length > 0 ? values[0] : null;
        this.invalidRequiredCount();
    }
    onChangeAcademicQualifications(values) {
        this.selectedAcademicQualifications = values.length > 0 ? values[0] : null;
        this.invalidRequiredCount();
    }
    onChangeGrade(values) {
        this.selectedGrade = values.length > 0 ? values[0] : null;
        this.invalidRequiredCount();
    }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            EducationData: isDone,
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescriptionInfo(count == 0 ? true : false, count);
        }
        else
            this.changeDescriptionInfo(true, 0);
    }
}
CandidateEducationFormComponent.ɵfac = function CandidateEducationFormComponent_Factory(t) { return new (t || CandidateEducationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__.CandidateService)); };
CandidateEducationFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: CandidateEducationFormComponent, selectors: [["candidate-education-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 20, consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "change"], ["label", "academicQualifications", 3, "control", "submitted", "filter", "change"], ["label", "major", 3, "control", "submitted"], ["label", "grade", 3, "control", "submitted", "filter", "change"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", "lable", "add", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-15"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateEducationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-institution-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CandidateEducationFormComponent_Template_app_institution_dropdown_change_3_listener($event) { return ctx.onChangeInstitution($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 2)(5, "app-education-degree-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CandidateEducationFormComponent_Template_app_education_degree_dropdown_change_5_listener($event) { return ctx.onChangeAcademicQualifications($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 2)(9, "app-education-grade-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CandidateEducationFormComponent_Template_app_education_grade_dropdown_change_9_listener($event) { return ctx.onChangeGrade($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 2)(11, "app-education-year-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CandidateEducationFormComponent_Template_app_education_year_dropdown_change_11_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, CandidateEducationFormComponent_reset_form_btn_14_Template, 1, 0, "reset-form-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function CandidateEducationFormComponent_Template_submit_btn_onClick_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, CandidateEducationFormComponent_ng_container_16_Template, 4, 7, "ng-container", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.institutionID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.academicID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.major)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.gradeID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.year)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _shared_components_dropdowns_hr_setup_institution_dropdown_institution_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.InstitutionDropdownComponent, _shared_components_dropdowns_personnel_setup_education_year_dropdown_education_year_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.EducationYearDropdownComponent, _shared_components_dropdowns_hr_setup_education_degree_dropdown_education_degree_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.EducationDegreeDropdownComponent, _shared_components_dropdowns_hr_setup_education_grade_dropdown_education_grade_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.EducationGradeDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZWR1Y2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 27096:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-education/candidate-education-info/candidate-education-info.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateEducationInfoComponent": () => (/* binding */ CandidateEducationInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_education_form_candidate_education_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-education-form/candidate-education-form.component */ 11482);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateEducationInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-education-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateEducationInfoComponent_mat_expansion_panel_0_Template_candidate_education_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "education"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateEducationInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateEducationInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateEducationInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-education-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateEducationInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "education")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateEducationInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isView = false;
        this.candidateId = 2;
    }
    ngOnInit() {
    }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: info.noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateEducationInfoComponent.ɵfac = function CandidateEducationInfoComponent_Factory(t) { return new (t || CandidateEducationInfoComponent)(); };
CandidateEducationInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateEducationInfoComponent, selectors: [["candidate-education-info"]], inputs: { isView: "isView", candidateId: "candidateId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateEducationInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateEducationInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateEducationInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _candidate_education_form_candidate_education_form_component__WEBPACK_IMPORTED_MODULE_2__.CandidateEducationFormComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__.CandidateTabDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZWR1Y2F0aW9uLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 75288:
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-education/candidate-education-table/candidate-education-table.component.ts ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateEducationTableComponent": () => (/* binding */ CandidateEducationTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateEducationTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "institution",
            "academicQualifications",
            "major",
            "year",
            "grade",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_education_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateEducationTableComponent.ɵfac = function CandidateEducationTableComponent_Factory(t) { return new (t || CandidateEducationTableComponent)(); };
CandidateEducationTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateEducationTableComponent, selectors: [["candidate-education-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateEducationTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateEducationTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZWR1Y2F0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 16508:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-training/candidate-training-card/candidate-training-card.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateTrainingCardComponent": () => (/* binding */ CandidateTrainingCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_training_dialog_candidate_training_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-training-dialog/candidate-training-dialog.component */ 72697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_training_table_candidate_training_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-training-table/candidate-training-table.component */ 44220);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateTrainingCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateTrainingCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateTrainingCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateTrainingCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-training-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateTrainingCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-view-data-row-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-view-data-row-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-view-data-row-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateTrainingCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateTrainingCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateTrainingCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateTrainingCardComponent_mat_card_0_div_6_Template, 12, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8)(8, "see-more-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateTrainingCardComponent_mat_card_0_Template_see_more_btn_toggleTable_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidateTrainingId)("isTableView", ctx_r0.isTableView);
} }
function CandidateTrainingCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateTrainingCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidateTrainingId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_training_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_training_dialog_candidate_training_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateTrainingDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateTrainingCardComponent.ɵfac = function CandidateTrainingCardComponent_Factory(t) { return new (t || CandidateTrainingCardComponent)(); };
CandidateTrainingCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateTrainingCardComponent, selectors: [["candidate-training-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "training", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-8 col-12", 4, "ngIf"], ["class", "col-lg-10 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-8", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "col-lg-10", "col-12"], [1, "row"], [1, "col-4", "col-lg", "mb-2"], ["label", "institution", 1, "emp-custom-view", 3, "isDate", "isBool"], [1, "col-3", "col-lg", "mb-2"], ["label", "course", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "startDate", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "endDate", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "notes", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateTrainingCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateTrainingCardComponent_mat_card_0_Template, 9, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateTrainingCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_training_table_candidate_training_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateTrainingTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtdHJhaW5pbmctY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 19799:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-training/candidate-training-core/candidate-training-core.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateTrainingCoreComponent": () => (/* binding */ CandidateTrainingCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_training_card_candidate_training_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-training-card/candidate-training-card.component */ 16508);






function CandidateTrainingCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-training-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateTrainingCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_training_info_tab);
    }
}
CandidateTrainingCoreComponent.ɵfac = function CandidateTrainingCoreComponent_Factory(t) { return new (t || CandidateTrainingCoreComponent)(); };
CandidateTrainingCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateTrainingCoreComponent, selectors: [["candidate-training-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateTrainingCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateTrainingCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_training_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_training_card_candidate_training_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateTrainingCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtdHJhaW5pbmctY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 72697:
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-training/candidate-training-dialog/candidate-training-dialog.component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateTrainingDialogComponent": () => (/* binding */ CandidateTrainingDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_training_info_candidate_training_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-training-info/candidate-training-info.component */ 23965);




class CandidateTrainingDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateTrainingDialogComponent.ɵfac = function CandidateTrainingDialogComponent_Factory(t) { return new (t || CandidateTrainingDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateTrainingDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateTrainingDialogComponent, selectors: [["app-candidate-training-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateTrainingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateTrainingDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-training-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_training_info_candidate_training_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateTrainingInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtdHJhaW5pbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 46089:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-training/candidate-training-form/candidate-training-form.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateTrainingFormComponent": () => (/* binding */ CandidateTrainingFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_training__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-training */ 22575);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);


















function CandidateTrainingFormComponent_reset_form_btn_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CandidateTrainingFormComponent_reset_form_btn_14_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CandidateTrainingFormComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-divider", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "app-material-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function CandidateTrainingFormComponent_ng_container_16_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.candidateeTrainingToEdit($event)); })("deleteRow", function CandidateTrainingFormComponent_ng_container_16_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateTrainingFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "institution",
            "course",
            "startDate",
            "endDate",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.dataSource?.data?.length > 0)
    //     this.dataSource = new MatTableDataSource(null);
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getAll();
    //   } else this.isLoaded = true;
    // }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            center_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            course_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            from_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            to_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            note: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("from_Date", "to_Date"),
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    // getAll() {
    //   this.dataSource = new MatTableDataSource(null);
    //   this.isLoaded = false;
    //   this.candidateTrainingService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateTrainingModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         this.dataSource = new MatTableDataSource(
    //           candidateTrainingToDisplay(res.data)
    //         );
    //         if (res.data.length > 0) this.changeDescriptionInfo(true, 0);
    //         else this.invalidRequiredCount();
    //         this.isLoaded = true;
    //       } else this.errorList(res.message.messages);
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // person_Instance_ID: this.candidateId,
                id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                center_Name: this.form.value.center_Name,
                course_Name: this.form.value.course_Name,
                from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.from_Date),
                to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.to_Date),
                note: this.form.value.note,
            };
            this.form.value.id == 0 ? this.create(model) : this.update(model);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        // this.showLoading();
        // this.candidateTrainingService
        //   .create(model)
        //   .subscribe((res: IResponse<ICandidateTrainingModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.addSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_training__WEBPACK_IMPORTED_MODULE_0__.candidateTrainingToDisplay)([model])[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        // this.showLoading();
        // this.candidateTrainingService
        //   .update(model)
        //   .subscribe((res: IResponse<ICandidateTrainingModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.updateSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_training__WEBPACK_IMPORTED_MODULE_0__.candidateTrainingToDisplay)([model])[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateeTrainingToEdit(training) {
        this.form.patchValue(training);
    }
    onDelete(training) {
        let msg = `${training.course} (${training.startDate} - ${training.endDate})`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(training);
        });
    }
    delete(training) {
        // this.showLoading();
        // this.candidateTrainingService
        //   .Delete(training.id)
        //   .subscribe((res: IResponse) => {
        //     if (res.message.messageType == MessageTypes.Success) {
        //       this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.getAll();
        //       if (training.id == this.formCtrls.id.value) this.clearForm();
        //     } else this.errorList(res?.message?.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.splice(this.getIndex(training), 1);
        this.invalidRequiredCount();
        if (training.id == this.formCtrls.id.value)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            let training = { ...ele };
            delete training.id;
            delete training.institution;
            delete training.course;
            delete training.startDate;
            delete training.endDate;
            delete training.notes;
            generalModel.push(training);
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            TrainingData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(certification) {
        return this.dataSource.data.findIndex((ele) => ele.id == certification.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.id ? acc : ele.id), 0) + 1);
    }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            TrainingData: isDone,
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescriptionInfo(count == 0 ? true : false, count);
        }
        else
            this.changeDescriptionInfo(true, 0);
    }
}
CandidateTrainingFormComponent.ɵfac = function CandidateTrainingFormComponent_Factory(t) { return new (t || CandidateTrainingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__.CandidateService)); };
CandidateTrainingFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CandidateTrainingFormComponent, selectors: [["candidate-training-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 16, consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], ["label", "institution", 3, "control", "submitted", "Blur"], ["label", "course", 3, "control", "submitted", "Blur"], ["label", "startDate", 3, "control", "submitted", "change"], ["label", "endDate", 3, "control", "submitted", "change"], ["label", "notes", 3, "control", "submitted"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", "lable", "add", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateTrainingFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("Blur", function CandidateTrainingFormComponent_Template_app_input_Blur_3_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 2)(5, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("Blur", function CandidateTrainingFormComponent_Template_app_input_Blur_5_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2)(7, "app-datepicker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CandidateTrainingFormComponent_Template_app_datepicker_change_7_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 2)(9, "app-datepicker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CandidateTrainingFormComponent_Template_app_datepicker_change_9_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CandidateTrainingFormComponent_reset_form_btn_14_Template, 1, 0, "reset-form-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function CandidateTrainingFormComponent_Template_submit_btn_onClick_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, CandidateTrainingFormComponent_ng_container_16_Template, 4, 7, "ng-container", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.center_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.course_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtdHJhaW5pbmctZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 23965:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-training/candidate-training-info/candidate-training-info.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateTrainingInfoComponent": () => (/* binding */ CandidateTrainingInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_training_form_candidate_training_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-training-form/candidate-training-form.component */ 46089);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateTrainingInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-training-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateTrainingInfoComponent_mat_expansion_panel_0_Template_candidate_training_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "training"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateTrainingInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateTrainingInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateTrainingInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-training-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateTrainingInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "training")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateTrainingInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() {
    }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateTrainingInfoComponent.ɵfac = function CandidateTrainingInfoComponent_Factory(t) { return new (t || CandidateTrainingInfoComponent)(); };
CandidateTrainingInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateTrainingInfoComponent, selectors: [["candidate-training-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateTrainingInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateTrainingInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateTrainingInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _candidate_training_form_candidate_training_form_component__WEBPACK_IMPORTED_MODULE_2__.CandidateTrainingFormComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__.CandidateTabDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtdHJhaW5pbmctaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 44220:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/education/candidate-training/candidate-training-table/candidate-training-table.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateTrainingTableComponent": () => (/* binding */ CandidateTrainingTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateTrainingTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "institution",
            "course",
            "startDate",
            "endDate",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_training_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateTrainingTableComponent.ɵfac = function CandidateTrainingTableComponent_Factory(t) { return new (t || CandidateTrainingTableComponent)(); };
CandidateTrainingTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateTrainingTableComponent, selectors: [["candidate-training-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateTrainingTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateTrainingTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtdHJhaW5pbmctdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 16206:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info-card/candidate-basic-info-card.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicInfoCardComponent": () => (/* binding */ CandidateBasicInfoCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_basic_info_dialog_candidate_basic_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-basic-info-dialog/candidate-basic-info-dialog.component */ 13685);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_basic_marital_candidate_basic_marital_card_candidate_basic_marital_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../candidate-basic-marital/candidate-basic-marital-card/candidate-basic-marital-card.component */ 48701);
/* harmony import */ var _candidate_basic_military_candidate_basic_military_card_candidate_basic_military_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../candidate-basic-military/candidate-basic-military-card/candidate-basic-military-card.component */ 20495);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);













function CandidateBasicInfoCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function CandidateBasicInfoCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateBasicInfoCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "edit"));
} }
const _c0 = function (a0, a1) { return { borderright: a0, borderleft: a1 }; };
function CandidateBasicInfoCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "candidate-basic-marital-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](1, _c0, ctx_r4.languageService.isEnglish, ctx_r4.languageService.isArabic));
} }
function CandidateBasicInfoCardComponent_mat_card_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "candidate-basic-military-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CandidateBasicInfoCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CandidateBasicInfoCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-content", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CandidateBasicInfoCardComponent_mat_card_0_div_6_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CandidateBasicInfoCardComponent_mat_card_0_div_7_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isViewAllowed(ctx_r0.viewsManager.candidate_marital_data_sec));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isViewAllowed(ctx_r0.viewsManager.candidate_military_data_sec));
} }
function CandidateBasicInfoCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateBasicInfoCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_basic_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_basic_info_dialog_candidate_basic_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateBasicInfoDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
}
CandidateBasicInfoCardComponent.ɵfac = function CandidateBasicInfoCardComponent_Factory(t) { return new (t || CandidateBasicInfoCardComponent)(); };
CandidateBasicInfoCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CandidateBasicInfoCardComponent, selectors: [["candidate-basic-info-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "basicInfo", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "container-fluid", "p-0", "px-4"], [1, "row", "mx-md-n2"], ["class", "col-5 p-0 px-md-2", 3, "ngClass", 4, "ngIf"], ["class", "col-7 p-0 px-md-2", 4, "ngIf"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-5", "p-0", "px-md-2", 3, "ngClass"], [1, "col-7", "p-0", "px-md-2"], [3, "rowNo"]], template: function CandidateBasicInfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CandidateBasicInfoCardComponent_mat_card_0_Template, 8, 3, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CandidateBasicInfoCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _candidate_basic_marital_candidate_basic_marital_card_candidate_basic_marital_card_component__WEBPACK_IMPORTED_MODULE_5__.CandidateBasicMaritalCardComponent, _candidate_basic_military_candidate_basic_military_card_candidate_basic_military_card_component__WEBPACK_IMPORTED_MODULE_6__.CandidateBasicMilitaryCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".borderright[_ngcontent-%COMP%] {\n  border-right: 1px solid #eaeaea;\n}\n\n.borderleft[_ngcontent-%COMP%] {\n  border-left: 1px solid #eaeaea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1iYXNpYy1pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRiIsImZpbGUiOiJjYW5kaWRhdGUtYmFzaWMtaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcnJpZ2h0IHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG5cclxufVxyXG5cclxuLmJvcmRlcmxlZnQge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VhZWFlYTtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6066:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info-core/candidate-basic-info-core.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicInfoCoreComponent": () => (/* binding */ CandidateBasicInfoCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_basic_info_card_candidate_basic_info_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-basic-info-card/candidate-basic-info-card.component */ 16206);






function CandidateBasicInfoCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-basic-info-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateBasicInfoCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_basic_info_tab);
    }
}
CandidateBasicInfoCoreComponent.ɵfac = function CandidateBasicInfoCoreComponent_Factory(t) { return new (t || CandidateBasicInfoCoreComponent)(); };
CandidateBasicInfoCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateBasicInfoCoreComponent, selectors: [["candidate-basic-info-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateBasicInfoCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateBasicInfoCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_basic_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_basic_info_card_candidate_basic_info_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateBasicInfoCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtYmFzaWMtaW5mby1jb3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 13685:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info-dialog/candidate-basic-info-dialog.component.ts ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicInfoDialogComponent": () => (/* binding */ CandidateBasicInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_basic_info_candidate_basic_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-basic-info/candidate-basic-info.component */ 750);




class CandidateBasicInfoDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateBasicInfoDialogComponent.ɵfac = function CandidateBasicInfoDialogComponent_Factory(t) { return new (t || CandidateBasicInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateBasicInfoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateBasicInfoDialogComponent, selectors: [["candidate-basic-info-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateBasicInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateBasicInfoDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-basic-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_basic_info_candidate_basic_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateBasicInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtYmFzaWMtaW5mby1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 750:
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info/candidate-basic-info.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicInfoComponent": () => (/* binding */ CandidateBasicInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_basic_marital_candidate_basic_marital_candidate_basic_marital_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate-basic-marital/candidate-basic-marital/candidate-basic-marital.component */ 65486);
/* harmony import */ var _candidate_basic_military_candidate_basic_military_candidate_basic_military_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../candidate-basic-military/candidate-basic-military/candidate-basic-military.component */ 72410);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












function CandidateBasicInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "candidate-basic-marital", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeDescriptionInfo", function CandidateBasicInfoComponent_mat_expansion_panel_0_Template_candidate_basic_marital_changeDescriptionInfo_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "candidate-basic-military", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeDescriptionInfo", function CandidateBasicInfoComponent_mat_expansion_panel_0_Template_candidate_basic_military_changeDescriptionInfo_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.changeDescriptionInfo($event, 2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 6, "basicInfo")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateBasicInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-actions", 11)(1, "submit-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function CandidateBasicInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r6.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateBasicInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "page-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-content", 9)(5, "candidate-basic-marital", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeDescriptionInfo", function CandidateBasicInfoComponent_mat_card_1_Template_candidate_basic_marital_changeDescriptionInfo_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "candidate-basic-military", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeDescriptionInfo", function CandidateBasicInfoComponent_mat_card_1_Template_candidate_basic_military_changeDescriptionInfo_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.changeDescriptionInfo($event, 2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CandidateBasicInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateBasicInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() { }
    changeDescriptionInfo(info, tabIndex) {
        if (tabIndex == 1)
            this.descriptionMaritalLastInfo = info;
        else
            this.descriptionMilitaryLastInfo = info;
        this.descriptionInfo = {
            isDone: this.descriptionMilitaryLastInfo?.isDone &&
                this.descriptionMaritalLastInfo?.isDone,
            noOfRequiredInputs: this.descriptionMilitaryLastInfo?.noOfRequiredInputs +
                this.descriptionMaritalLastInfo?.noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateBasicInfoComponent.ɵfac = function CandidateBasicInfoComponent_Factory(t) { return new (t || CandidateBasicInfoComponent)(); };
CandidateBasicInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CandidateBasicInfoComponent, selectors: [["candidate-basic-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescriptionInfo"], [1, "mbottom-20"], [1, "main-card-title", "border-bottom"], ["title", "basicInfo", "color", "font-dark", 1, "emp-card-title"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "saveAll", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateBasicInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CandidateBasicInfoComponent_mat_expansion_panel_0_Template, 11, 8, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CandidateBasicInfoComponent_mat_card_1_Template, 9, 1, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelTitle, _candidate_basic_marital_candidate_basic_marital_candidate_basic_marital_component__WEBPACK_IMPORTED_MODULE_3__.CandidateBasicMaritalComponent, _candidate_basic_military_candidate_basic_military_candidate_basic_military_component__WEBPACK_IMPORTED_MODULE_4__.CandidateBasicMilitaryComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_5__.CandidateTabDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtYmFzaWMtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 48701:
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-marital/candidate-basic-marital-card/candidate-basic-marital-card.component.ts ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicMaritalCardComponent": () => (/* binding */ CandidateBasicMaritalCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






function CandidateBasicMaritalCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "div", 2)(2, "div", 3)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-view-data-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-view-data-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, "maritalData")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateBasicMaritalCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowNo", 2);
} }
class CandidateBasicMaritalCardComponent {
    constructor() {
        this.isLoaded = true;
    }
    ngOnInit() {
    }
}
CandidateBasicMaritalCardComponent.ɵfac = function CandidateBasicMaritalCardComponent_Factory(t) { return new (t || CandidateBasicMaritalCardComponent)(); };
CandidateBasicMaritalCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateBasicMaritalCardComponent, selectors: [["candidate-basic-marital-card"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "row"], [1, "col-lg-4", "col-12", "cardSectionTitle"], [1, "col-lg-8", "col-12"], [1, "view-data-row-container", "mtop-20"], [1, "col-6", "col-lg-8", "mb-2"], ["label", "maritalStatus", 1, "emp-custom-view", 3, "isDate", "isBool"], [1, "col-6", "col-lg-4", "mb-2"], ["label", "date", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateBasicMaritalCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CandidateBasicMaritalCardComponent_mat_card_0_Template, 13, 9, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CandidateBasicMaritalCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__.ViewDataRowItemComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".cardSectionTitle[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1iYXNpYy1tYXJpdGFsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGIiwiZmlsZSI6ImNhbmRpZGF0ZS1iYXNpYy1tYXJpdGFsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFNlY3Rpb25UaXRsZSB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 65486:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-marital/candidate-basic-marital/candidate-basic-marital.component.ts ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicMaritalComponent": () => (/* binding */ CandidateBasicMaritalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_dropdowns_hr_setup_marital_status_dropdown_marital_status_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/components/dropdowns/hr-setup/marital-status-dropdown/marital-status-dropdown.component */ 9316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












class CandidateBasicMaritalComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        // @Input() candidateId: number = 0;
        this.changeDescriptionInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.submitted = false;
        this.candidateService.submitted$.subscribe((submitted) => (this.submitted = submitted));
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getMaritalStatus();
    //   }
    // }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNullable: true }],
            maritalID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            statusDate: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__.CustomValidators.date]],
        });
        this.invalidRequiredCount();
    }
    get formCtrls() {
        return this.form.controls;
    }
    // getMaritalStatus() {
    //   this.showLoading();
    //   this.candidateMaritalDataService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateMaritalModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         if (res.data.length > 0) {
    //           this.form.patchValue(res.data[0]);
    //           this.formCtrls.id.setValue(res.data[0].maritalID);
    //           this.changeDescription(true, 0);
    //         } else this.invalidRequiredCount();
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        // this.submitted = true;
        // if (this.form.valid) {
        const model = {
            // personID: this.candidateId,
            maritalID: this.form.value.maritalID,
            statusDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDateReverse(this.form.value.statusDate),
        };
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            MaritalData: model,
        });
        // this.formCtrls.id.value == 0 ? this.create(model) : this.update(model);
        // }
        // else this.toastr.error("General.formNotValid");
    }
    // create(model: ICandidateMaritalRequest) {
    //   this.showLoading();
    //   this.candidateMaritalDataService
    //     .create(model)
    //     .subscribe((res: IResponse<ICandidateMaritalModel>) => {
    //       if (res?.message?.messageType == MessageTypes.Success) {
    //         this.addSuccessfullyMsg(res?.message?.messageTypeName);
    //         this.formCtrls.id.setValue(res.data.maritalID);
    //         this.changeDescription(true, 0);
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    // update(model: ICandidateMaritalRequest) {
    //   this.showLoading();
    //   this.candidateMaritalDataService
    //     .update(model)
    //     .subscribe((res: IResponse<ICandidateMaritalModel>) => {
    //       if (res.message.messageType == MessageTypes.Success) {
    //         this.updateSuccessfullyMsg(res?.message?.messageTypeName);
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    changeDescription(isDone, noOfRequiredInputs) {
        this.changeDescriptionInfo.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
    }
    invalidRequiredCount() {
        // if (!(this.formCtrls.id.value > 0)) {
        let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
        this.changeDescription(count == 0 ? true : false, count);
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            MaritalData: count == 0 ? true : false,
        });
        // }
    }
    updateDataInService() {
        setTimeout(() => this.submit(), 1000);
    }
}
CandidateBasicMaritalComponent.ɵfac = function CandidateBasicMaritalComponent_Factory(t) { return new (t || CandidateBasicMaritalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_2__.CandidateService)); };
CandidateBasicMaritalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CandidateBasicMaritalComponent, selectors: [["candidate-basic-marital"]], outputs: { changeDescriptionInfo: "changeDescriptionInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 11, consts: [[1, "row"], [1, "col-lg-2", "col-12"], [1, "candidate-sub-title"], [1, "col-lg-9", "col-12"], [3, "formGroup"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "change"], ["label", "date", 3, "control", "submitted", "change"]], template: function CandidateBasicMaritalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "form", 4)(8, "div", 0)(9, "div", 5)(10, "app-marital-status-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CandidateBasicMaritalComponent_Template_app_marital_status_dropdown_change_10_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "app-datepicker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CandidateBasicMaritalComponent_Template_app_datepicker_change_12_listener() { return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, "maritalData")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.formCtrls.maritalID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.formCtrls.statusDate)("submitted", ctx.submitted);
    } }, dependencies: [_shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__.DatepickerComponent, _shared_components_dropdowns_hr_setup_marital_status_dropdown_marital_status_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.MaritalStatusDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtYmFzaWMtbWFyaXRhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 20495:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-military/candidate-basic-military-card/candidate-basic-military-card.component.ts ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicMilitaryCardComponent": () => (/* binding */ CandidateBasicMilitaryCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






function CandidateBasicMilitaryCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "div", 2)(2, "div", 3)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-view-data-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-view-data-row-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-view-data-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, "militaryData")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateBasicMilitaryCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowNo", 2);
} }
class CandidateBasicMilitaryCardComponent {
    constructor() {
        this.isLoaded = true;
    }
    ngOnInit() {
    }
}
CandidateBasicMilitaryCardComponent.ɵfac = function CandidateBasicMilitaryCardComponent_Factory(t) { return new (t || CandidateBasicMilitaryCardComponent)(); };
CandidateBasicMilitaryCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateBasicMilitaryCardComponent, selectors: [["candidate-basic-military-card"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "row"], [1, "col-lg-4", "col-12", "cardSectionTitle"], [1, "col-lg-8", "col-12"], [1, "view-data-row-container", "mtop-20"], [1, "col-4", "col-lg-4", "mb-2"], ["label", "status", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "grade", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "startDate", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateBasicMilitaryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CandidateBasicMilitaryCardComponent_mat_card_0_Template, 15, 11, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CandidateBasicMilitaryCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__.ViewDataRowItemComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".cardSectionTitle[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1iYXNpYy1taWxpdGFyeS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJjYW5kaWRhdGUtYmFzaWMtbWlsaXRhcnktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkU2VjdGlvblRpdGxlIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 72410:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-military/candidate-basic-military/candidate-basic-military.component.ts ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateBasicMilitaryComponent": () => (/* binding */ CandidateBasicMilitaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_dropdowns_hr_setup_military_status_dropdown_military_status_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/components/dropdowns/hr-setup/military-status-dropdown/military-status-dropdown.component */ 19634);
/* harmony import */ var _shared_components_dropdowns_hr_setup_military_grade_dropdown_military_grade_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/components/dropdowns/hr-setup/military-grade-dropdown/military-grade-dropdown.component */ 17503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);













function CandidateBasicMilitaryComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "app-military-grade-dropdown", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CandidateBasicMilitaryComponent_div_11_Template_app_military_grade_dropdown_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r1.invalidRequiredCount(); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.updateDataInService()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx_r0.formCtrls.gradeID)("submitted", ctx_r0.submitted)("filter", true);
} }
class CandidateBasicMilitaryComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        // @Input() candidateId: number = 0;
        this.changeDescriptionInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.submitted = false;
        this.candidateService.submitted$.subscribe((submitted) => (this.submitted = submitted));
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getMilitaryStatus();
    //   }
    // }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNullable: true }],
            militaryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            gradeID: [null],
            statusDate: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_8__.CustomValidators.date]],
        });
        this.invalidRequiredCount();
    }
    get formCtrls() {
        return this.form.controls;
    }
    // getMilitaryStatus() {
    //   this.showLoading();
    //   this.candidateMilitaryDataService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateMilitaryModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         if (res.data.length > 0) {
    //           this.form.patchValue(res.data[0]);
    //           this.formCtrls.id.setValue(res.data[0].militaryID);
    //           this.changeDescription(true, 0);
    //           this.selectedStatus = res.data[0].comm_Military_Status;
    //         } else this.invalidRequiredCount();
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        // this.submitted = true;
        // if (this.form.valid) {
        const model = {
            // personID: this.candidateId,
            militaryID: this.form.value.militaryID,
            statusDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDateReverse(this.form.value.statusDate),
        };
        if (this.selectedStatus.showGrade)
            model.gradeID = this.form.value.gradeID;
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            MilitaryData: model,
        });
        // this.formCtrls.id.value == 0 ? this.create(model) : this.update(model);
        // }
        // else this.toastr.error("General.formNotValid");
    }
    // create(model: ICandidateMilitaryRequest) {
    //   this.showLoading();
    //   this.candidateMilitaryDataService
    //     .create(model)
    //     .subscribe((res: IResponse<ICandidateMilitaryModel>) => {
    //       if (res?.message?.messageType == MessageTypes.Success) {
    //         this.addSuccessfullyMsg(res?.message?.messageTypeName);
    //         this.formCtrls.id.setValue(res.data.militaryID);
    //         this.changeDescription(true, 0);
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    // update(model: ICandidateMilitaryRequest) {
    //   this.showLoading();
    //   this.candidateMilitaryDataService
    //     .update(model)
    //     .subscribe((res: IResponse<ICandidateMilitaryModel>) => {
    //       if (res.message.messageType == MessageTypes.Success) {
    //         this.updateSuccessfullyMsg(res?.message?.messageTypeName);
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    onChangeStatus(values) {
        this.selectedStatus = values?.length > 0 ? values[0] : null;
        if (this.selectedStatus?.showGrade)
            this.formCtrls.gradeID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
        else
            this.formCtrls.gradeID.clearValidators();
        this.formCtrls.gradeID.updateValueAndValidity();
        this.invalidRequiredCount();
    }
    changeDescription(isDone, noOfRequiredInputs) {
        this.changeDescriptionInfo.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
    }
    invalidRequiredCount() {
        // if (!(this.formCtrls.id.value > 0)) {
        let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
        this.changeDescription(count == 0 ? true : false, count);
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            MilitaryData: count == 0 ? true : false,
        });
        // }
    }
    updateDataInService() {
        setTimeout(() => this.submit(), 1000);
    }
}
CandidateBasicMilitaryComponent.ɵfac = function CandidateBasicMilitaryComponent_Factory(t) { return new (t || CandidateBasicMilitaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_2__.CandidateService)); };
CandidateBasicMilitaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CandidateBasicMilitaryComponent, selectors: [["candidate-basic-military"]], outputs: { changeDescriptionInfo: "changeDescriptionInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 12, consts: [[1, "row"], [1, "col-lg-2", "col-12"], [1, "candidate-sub-title"], [1, "col-lg-9", "col-12"], [3, "formGroup"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "change"], ["class", "col-md-4 col-sm-6 col-12", 4, "ngIf"], ["label", "startDate", 3, "control", "submitted", "change"]], template: function CandidateBasicMilitaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "form", 4)(8, "div", 0)(9, "div", 5)(10, "app-military-status-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CandidateBasicMilitaryComponent_Template_app_military_status_dropdown_change_10_listener($event) { ctx.onChangeStatus($event); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CandidateBasicMilitaryComponent_div_11_Template, 2, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5)(13, "app-datepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CandidateBasicMilitaryComponent_Template_app_datepicker_change_13_listener() { return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 10, "militaryData")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.formCtrls.militaryID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.formCtrls.militaryID.value || (ctx.selectedStatus == null ? null : ctx.selectedStatus.showGrade));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.formCtrls.statusDate)("submitted", ctx.submitted);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__.DatepickerComponent, _shared_components_dropdowns_hr_setup_military_status_dropdown_military_status_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.MilitaryStatusDropdownComponent, _shared_components_dropdowns_hr_setup_military_grade_dropdown_military_grade_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.MilitaryGradeDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtYmFzaWMtbWlsaXRhcnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 57865:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-address/candidate-contact-address-card/candidate-contact-address-card.component.ts ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactAddressCardComponent": () => (/* binding */ CandidateContactAddressCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






function CandidateContactAddressCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "div", 2)(2, "div", 3)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-view-data-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-view-data-row-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-view-data-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, "AddressData")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateContactAddressCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowNo", 2);
} }
class CandidateContactAddressCardComponent {
    constructor() {
        this.isLoaded = true;
    }
    ngOnInit() {
    }
}
CandidateContactAddressCardComponent.ɵfac = function CandidateContactAddressCardComponent_Factory(t) { return new (t || CandidateContactAddressCardComponent)(); };
CandidateContactAddressCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateContactAddressCardComponent, selectors: [["candidate-contact-address-card"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "row"], [1, "col-lg-4", "col-12", "cardSectionTitle"], [1, "col-lg-8", "col-12"], [1, "view-data-row-container", "mtop-20"], [1, "col-4", "col-lg-4", "mb-2"], ["label", "country", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "governorate", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "address", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateContactAddressCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CandidateContactAddressCardComponent_mat_card_0_Template, 15, 11, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CandidateContactAddressCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__.ViewDataRowItemComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".cardSectionTitle[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1jb250YWN0LWFkZHJlc3MtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0YiLCJmaWxlIjoiY2FuZGlkYXRlLWNvbnRhY3QtYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRTZWN0aW9uVGl0bGUge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 79464:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-address/candidate-contact-address/candidate-contact-address.component.ts ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactAddressComponent": () => (/* binding */ CandidateContactAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_dropdowns_hr_setup_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/components/dropdowns/hr-setup/country-dropdown/country-dropdown.component */ 59681);
/* harmony import */ var _shared_components_dropdowns_hr_setup_governorate_by_country_dropdown_governorate_by_country_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/components/dropdowns/hr-setup/governorate-by-country-dropdown/governorate-by-country-dropdown.component */ 10225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);













class CandidateContactAddressComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        // @Input() candidateId: number = 0;
        this.changeDescriptionInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.submitted = false;
        this.candidateService.submitted$.subscribe((submitted) => (this.submitted = submitted));
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getAddress();
    //   }
    // }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            countryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            governorate_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
        });
        this.invalidRequiredCount();
    }
    get formCtrls() {
        return this.form.controls;
    }
    // getAddress() {
    //   this.showLoading();
    //   this.candidateAddressService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateAddressModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         if (res.data.length > 0) {
    //           this.form.patchValue(res.data[0].comm_Address);
    //           this.formCtrls.countryId.setValue(
    //             res.data[0].comm_Address.comm_Governorate.comm_Country.id
    //           );
    //           this.formCtrls.governorate_ID.setValue(
    //             res.data[0].comm_Address.governorate_ID
    //           );
    //           this.formCtrls.address.setValue(res.data[0].comm_Address.en_Name);
    //           this.changeDescription(true, 0);
    //         } else this.invalidRequiredCount();
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        // this.submitted = true;
        // if (this.form.valid) {
        const model = {
            // person_ID: this.candidateId,
            Comm_Address: {
                id: this.form.value.id,
                governorate_ID: this.form.value.governorate_ID,
                en_Name: this.form.value.address,
                isVaild: true,
            },
        };
        let generalModel = model;
        delete generalModel.Comm_Address.id;
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            AddressData: generalModel,
        });
        // model.Comm_Address.id == 0 ? this.create(model) : this.update(model);
        // }
        // else this.toastr.error("General.formNotValid");
    }
    // create(model: ICandidateAddressRequest) {
    //   this.showLoading();
    //   this.candidateAddressService
    //     .create(model)
    //     .subscribe((res: IResponse<ICandidateAddressModel>) => {
    //       if (res?.message?.messageType == MessageTypes.Success) {
    //         this.addSuccessfullyMsg(res?.message?.messageTypeName);
    //         this.formCtrls.id.setValue(res.data.comm_Address.id);
    //         this.changeDescription(true, 0);
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    // update(model: ICandidateAddressRequest) {
    //   this.showLoading();
    //   this.candidateAddressService
    //     .update(model)
    //     .subscribe((res: IResponse<ICandidateAddressModel>) => {
    //       if (res.message.messageType == MessageTypes.Success) {
    //         this.updateSuccessfullyMsg(res?.message?.messageTypeName);
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    changeDescription(isDone, noOfRequiredInputs) {
        this.changeDescriptionInfo.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
    }
    invalidRequiredCount() {
        // if (!(this.formCtrls.id.value > 0)) {
        let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
        this.changeDescription(count == 0 ? true : false, count);
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            AddressData: count == 0 ? true : false,
        });
        // }
    }
    updateDataInService() {
        setTimeout(() => this.submit(), 1000);
    }
}
CandidateContactAddressComponent.ɵfac = function CandidateContactAddressComponent_Factory(t) { return new (t || CandidateContactAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__.CandidateService)); };
CandidateContactAddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CandidateContactAddressComponent, selectors: [["candidate-contact-address"]], outputs: { changeDescriptionInfo: "changeDescriptionInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 15, consts: [[1, "row"], [1, "col-lg-2", "col-12"], [1, "candidate-sub-title"], [1, "col-lg-9", "col-12"], [3, "formGroup"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "change"], [3, "control", "countryControl", "submitted", "filter", "change"], ["label", "address", 3, "control", "submitted", "Blur"]], template: function CandidateContactAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3)(7, "form", 4)(8, "div", 0)(9, "div", 5)(10, "app-country-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CandidateContactAddressComponent_Template_app_country_dropdown_change_10_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5)(12, "app-governorate-by-country-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CandidateContactAddressComponent_Template_app_governorate_by_country_dropdown_change_12_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 5)(14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("Blur", function CandidateContactAddressComponent_Template_app_input_Blur_14_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 13, "AddressData")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formCtrls.countryId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formCtrls.governorate_ID)("countryControl", ctx.formCtrls.countryId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formCtrls.address)("submitted", ctx.submitted);
    } }, dependencies: [_shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_dropdowns_hr_setup_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.GovernorateDropdownComponent, _shared_components_dropdowns_hr_setup_governorate_by_country_dropdown_governorate_by_country_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.GovernorateByCountryDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdC1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86725:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-card/candidate-contact-card.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactCardComponent": () => (/* binding */ CandidateContactCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _candidate_contact_dialog_candidate_contact_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-contact-dialog/candidate-contact-dialog.component */ 95842);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_contact_address_candidate_contact_address_card_candidate_contact_address_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../candidate-contact-address/candidate-contact-address-card/candidate-contact-address-card.component */ 57865);
/* harmony import */ var _candidate_contacts_candidate_contacts_card_candidate_contacts_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../candidate-contacts/candidate-contacts-card/candidate-contacts-card.component */ 30993);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);















function CandidateContactCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateContactCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.click($event)); })("click", function CandidateContactCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
const _c0 = function (a0, a1, a2) { return { borderright: a0, borderleft: a1, clearborder: a2 }; };
function CandidateContactCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-contact-address-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](!ctx_r4.isTableView ? "col-6 p-0 px-md-2" : "col-12 p-0 px-md-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](3, _c0, ctx_r4.languageService.isEnglish, ctx_r4.languageService.isArabic, ctx_r4.isTableView));
} }
function CandidateContactCardComponent_mat_card_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-divider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CandidateContactCardComponent_mat_card_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-contacts-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](!ctx_r6.isTableView ? "col-4 p-0 px-md-2" : "col-8 p-0 px-md-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isTableView", ctx_r6.isTableView);
} }
function CandidateContactCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateContactCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-content", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateContactCardComponent_mat_card_0_div_6_Template, 2, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CandidateContactCardComponent_mat_card_0_div_7_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CandidateContactCardComponent_mat_card_0_div_8_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 10)(10, "see-more-btn", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateContactCardComponent_mat_card_0_Template_see_more_btn_toggleTable_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isViewAllowed(ctx_r0.viewsManager.candidate_address_sec));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isViewAllowed(ctx_r0.viewsManager.candidate_contacts_sec));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidacontactId)("isTableView", ctx_r0.isTableView);
} }
function CandidateContactCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateContactCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidacontactId = 2;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.candidate_contact_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_contact_dialog_candidate_contact_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CandidateContactDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateContactCardComponent.ɵfac = function CandidateContactCardComponent_Factory(t) { return new (t || CandidateContactCardComponent)(); };
CandidateContactCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateContactCardComponent, selectors: [["candidate-contact-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "contactInfo", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "container-fluid", "p-0", "px-4"], [1, "row", "mx-md-n2"], [3, "class", "ngClass", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [3, "ngClass"], [1, "col-12"], [1, "mbottom-20"], [3, "isTableView"], [3, "rowNo"]], template: function CandidateContactCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateContactCardComponent_mat_card_0_Template, 11, 6, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateContactCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_5__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _candidate_contact_address_candidate_contact_address_card_candidate_contact_address_card_component__WEBPACK_IMPORTED_MODULE_6__.CandidateContactAddressCardComponent, _candidate_contacts_candidate_contacts_card_candidate_contacts_card_component__WEBPACK_IMPORTED_MODULE_7__.CandidateContactsCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".borderright[_ngcontent-%COMP%] {\n  border-right: 1px solid #eaeaea;\n}\n\n.borderleft[_ngcontent-%COMP%] {\n  border-left: 1px solid #eaeaea;\n}\n\n.clearborder[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1jb250YWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcnJpZ2h0IHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG5cclxufVxyXG5cclxuLmJvcmRlcmxlZnQge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VhZWFlYTtcclxuXHJcbn1cclxuLmNsZWFyYm9yZGVyIHtcclxuICBib3JkZXI6bm9uZTtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7985:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-core/candidate-contact-core.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactCoreComponent": () => (/* binding */ CandidateContactCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_contact_card_candidate_contact_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-contact-card/candidate-contact-card.component */ 86725);






function CandidateContactCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-contact-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateContactCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_contact_info_sec);
    }
}
CandidateContactCoreComponent.ɵfac = function CandidateContactCoreComponent_Factory(t) { return new (t || CandidateContactCoreComponent)(); };
CandidateContactCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateContactCoreComponent, selectors: [["candidate-contact-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateContactCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateContactCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_contact_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_contact_card_candidate_contact_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateContactCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdC1jb3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 95842:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-dialog/candidate-contact-dialog.component.ts ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactDialogComponent": () => (/* binding */ CandidateContactDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_contact_info_candidate_contact_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-contact-info/candidate-contact-info.component */ 94365);




class CandidateContactDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateContactDialogComponent.ɵfac = function CandidateContactDialogComponent_Factory(t) { return new (t || CandidateContactDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateContactDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateContactDialogComponent, selectors: [["app-candidate-contact-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateContactDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateContactDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-contact-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_contact_info_candidate_contact_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateContactInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 94365:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-info/candidate-contact-info.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactInfoComponent": () => (/* binding */ CandidateContactInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_contact_address_candidate_contact_address_candidate_contact_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../candidate-contact-address/candidate-contact-address/candidate-contact-address.component */ 79464);
/* harmony import */ var _candidate_contacts_candidate_contacts_form_candidate_contacts_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../candidate-contacts/candidate-contacts-form/candidate-contacts-form.component */ 73453);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











function CandidateContactInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "candidate-contact-address", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeDescriptionInfo", function CandidateContactInfoComponent_mat_expansion_panel_0_Template_candidate_contact_address_changeDescriptionInfo_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "candidate-contacts-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeDescriptionInfo", function CandidateContactInfoComponent_mat_expansion_panel_0_Template_candidate_contacts_form_changeDescriptionInfo_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.changeDescriptionInfo($event, 2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, "contactInfo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateContactInfoComponent_mat_card_1_mat_card_actions_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-actions", 10)(1, "submit-btn", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function CandidateContactInfoComponent_mat_card_1_mat_card_actions_9_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r6.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateContactInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "mat-divider", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content", 8)(6, "candidate-contact-address", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeDescriptionInfo", function CandidateContactInfoComponent_mat_card_1_Template_candidate_contact_address_changeDescriptionInfo_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "candidate-contacts-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeDescriptionInfo", function CandidateContactInfoComponent_mat_card_1_Template_candidate_contacts_form_changeDescriptionInfo_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.changeDescriptionInfo($event, 2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CandidateContactInfoComponent_mat_card_1_mat_card_actions_9_Template, 2, 2, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "contactInfo"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateContactInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 0;
        this.isView = false;
    }
    ngOnInit() { }
    changeDescriptionInfo(info, tabIndex) {
        if (tabIndex == 1)
            this.descriptionAddressLastInfo = info;
        else
            this.descriptionContactLastInfo = info;
        this.descriptionInfo = {
            isDone: this.descriptionAddressLastInfo?.isDone &&
                this.descriptionContactLastInfo?.isDone,
            noOfRequiredInputs: this.descriptionAddressLastInfo?.noOfRequiredInputs +
                this.descriptionContactLastInfo?.noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateContactInfoComponent.ɵfac = function CandidateContactInfoComponent_Factory(t) { return new (t || CandidateContactInfoComponent)(); };
CandidateContactInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CandidateContactInfoComponent, selectors: [["candidate-contact-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescriptionInfo"], [1, "mbottom-20"], [1, "mbottom-30"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "saveAll", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateContactInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CandidateContactInfoComponent_mat_expansion_panel_0_Template, 10, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CandidateContactInfoComponent_mat_card_1_Template, 10, 4, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelTitle, _candidate_contact_address_candidate_contact_address_candidate_contact_address_component__WEBPACK_IMPORTED_MODULE_2__.CandidateContactAddressComponent, _candidate_contacts_candidate_contacts_form_candidate_contacts_form_component__WEBPACK_IMPORTED_MODULE_3__.CandidateContactsFormComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_4__.CandidateTabDescriptionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 30993:
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contacts/candidate-contacts-card/candidate-contacts-card.component.ts ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactsCardComponent": () => (/* binding */ CandidateContactsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_contacts_table_candidate_contacts_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-contacts-table/candidate-contacts-table.component */ 57337);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 89461);







function CandidateContactsCardComponent_mat_card_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-view-data-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-view-data-row-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateContactsCardComponent_mat_card_0_candidate_contacts_table_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "candidate-contacts-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("afterDelete", function CandidateContactsCardComponent_mat_card_0_candidate_contacts_table_9_Template_candidate_contacts_table_afterDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.afterDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isMatPaginator", true);
} }
function CandidateContactsCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "div", 2)(2, "div", 3)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CandidateContactsCardComponent_mat_card_0_div_8_Template, 5, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CandidateContactsCardComponent_mat_card_0_candidate_contacts_table_9_Template, 1, 1, "candidate-contacts-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "contacts")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
} }
function CandidateContactsCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowNo", 2);
} }
class CandidateContactsCardComponent {
    constructor() {
        this.isLoaded = true;
        this.isTableView = false;
    }
    ngOnInit() {
    }
    afterDelete(contact) {
    }
}
CandidateContactsCardComponent.ɵfac = function CandidateContactsCardComponent_Factory(t) { return new (t || CandidateContactsCardComponent)(); };
CandidateContactsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateContactsCardComponent, selectors: [["candidate-contacts-card"]], inputs: { isTableView: "isTableView" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "row"], [1, "col-lg-4", "col-12", "cardSectionTitle"], [1, "col-lg-8", "col-12"], ["class", "view-data-row-container mtop-20", 4, "ngIf"], [3, "isMatPaginator", "afterDelete", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], [1, "col-6", "col-lg-6", "mb-2"], ["label", "contactType", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "value", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "isMatPaginator", "afterDelete"], [3, "rowNo"]], template: function CandidateContactsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CandidateContactsCardComponent_mat_card_0_Template, 10, 7, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CandidateContactsCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_1__.ViewDataRowItemComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _candidate_contacts_table_candidate_contacts_table_component__WEBPACK_IMPORTED_MODULE_2__.CandidateContactsTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".cardSectionTitle[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1jb250YWN0cy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdHMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkU2VjdGlvblRpdGxlIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 73453:
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contacts/candidate-contacts-form/candidate-contacts-form.component.ts ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactsFormComponent": () => (/* binding */ CandidateContactsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_contact_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-contact-info */ 37613);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_hr_setup_contact_type_dropdown_contact_type_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../shared/components/dropdowns/hr-setup/contact-type-dropdown/contact-type-dropdown.component */ 99167);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function CandidateContactsFormComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CandidateContactsFormComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CandidateContactsFormComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-divider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editRow", function CandidateContactsFormComponent_ng_container_17_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.candidateContactToEdit($event)); })("deleteRow", function CandidateContactsFormComponent_ng_container_17_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateContactsFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        // @Input() candidateId: number = 0;
        this.changeDescriptionInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "contactType",
            "value",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.dataSource?.data?.length > 0)
    //     this.dataSource = new MatTableDataSource(null);
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getAll();
    //   } else this.isLoaded = true;
    // }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            contacT_TYPE_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            value: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    // ngOnChanges(changes: SimpleChanges): void {
    // if (
    //   changes.candidateId?.currentValue > 0 &&
    //   this.checkNoBusinessOrCompany()
    // )
    //   this.getAll();
    // }
    get formCtrls() {
        return this.form.controls;
    }
    // getAll() {
    //   this.dataSource = new MatTableDataSource(null);
    //   this.isLoaded = false;
    //   this.candidateContactsService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateContactModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         this.dataSource = new MatTableDataSource(
    //           candidateContactToDisplay(res.data)
    //         );
    //         if (res.data.length > 0) this.changeDescription(true, 0);
    //         else this.invalidRequiredCount();
    //         this.isLoaded = true;
    //       } else this.errorList(res.message.messages);
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // person_ID: this.candidateId,
                comm_Contact: {
                    // id: this.form.value.id,
                    id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                    contacT_TYPE_ID: this.form.value.contacT_TYPE_ID,
                    value: this.form.value.value,
                    isVaild: true,
                    isShow: true,
                },
            };
            const indexModel = {
                comm_Contact: {
                    ...model.comm_Contact,
                    comm_Contact_Type: this.selectedContactType,
                },
            };
            this.form.value.id == 0
                ? this.create(indexModel)
                : this.update(indexModel);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        // this.showLoading();
        // this.candidateContactsService
        //   .create(model)
        //   .subscribe((res: IResponse<ICandidateContactModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.addSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_contact_info__WEBPACK_IMPORTED_MODULE_0__.candidateContactToDisplay)([model])[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        // this.showLoading();
        // this.candidateContactsService
        //   .update(model)
        //   .subscribe((res: IResponse<ICandidateContactModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.updateSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_contact_info__WEBPACK_IMPORTED_MODULE_0__.candidateContactToDisplay)([
            model,
        ])[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateContactToEdit(contact) {
        this.form.patchValue(contact.comm_Contact);
    }
    onDelete(contact) {
        let msg = contact.contactType + " - " + contact.value;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contact);
        });
    }
    delete(contact) {
        // let deleteParams: ICandidateContactDeleteParams = {
        //   person_ID: this.candidateId,
        //   contact_ID: contact.contact_ID,
        // };
        // this.showLoading();
        // this.candidateContactsService
        //   .Delete(deleteParams)
        //   .subscribe((res: IResponse) => {
        //     if (res.message.messageType == MessageTypes.Success) {
        //       this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.getAll();
        //       if (this.formCtrls.id.value == contact.comm_Contact.id)
        //         this.clearForm();
        //     } else this.errorList(res?.message?.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.splice(this.getIndex(contact), 1);
        this.invalidRequiredCount();
        if (this.formCtrls.id.value == contact.comm_Contact.id)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            const { id, comm_Contact_Type, ...contact } = ele.comm_Contact;
            generalModel.push({ comm_Contact: contact });
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            ContactData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(contact) {
        return this.dataSource.data.findIndex((ele) => ele.comm_Contact.id == contact.comm_Contact.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.comm_Contact.id ? acc : ele.comm_Contact.id), 0) + 1);
    }
    onChangeContactType(contact) {
        if (contact.length > 0) {
            this.formCtrls.value.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(contact[0]?.regularExpression),
            ]);
            this.selectedContactType = contact[0];
        }
        else {
            this.formCtrls.value.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
            this.selectedContactType = null;
        }
        this.formCtrls.value.updateValueAndValidity();
        this.invalidRequiredCount();
    }
    changeDescription(isDone, noOfRequiredInputs) {
        this.changeDescriptionInfo.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            ContactData: this.dataSource?.data?.length > 0 ? true : false,
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescription(false, count);
        }
        else
            this.changeDescription(true, 0);
    }
}
CandidateContactsFormComponent.ɵfac = function CandidateContactsFormComponent_Factory(t) { return new (t || CandidateContactsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__.CandidateService)); };
CandidateContactsFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CandidateContactsFormComponent, selectors: [["candidate-contacts-form"]], outputs: { changeDescriptionInfo: "changeDescriptionInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 16, consts: [[1, "row"], [1, "col-lg-2", "col-12"], [1, "candidate-sub-title"], [1, "col-lg-9", "col-12"], [3, "formGroup"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "change"], ["label", "contact", 3, "control", "submitted", "Blur"], [1, "col"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", "label", "add", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateContactsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3)(7, "form", 4)(8, "div", 0)(9, "div", 5)(10, "app-contact-type-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CandidateContactsFormComponent_Template_app_contact_type_dropdown_change_10_listener($event) { return ctx.onChangeContactType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 5)(12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("Blur", function CandidateContactsFormComponent_Template_app_input_Blur_12_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 8)(14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CandidateContactsFormComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function CandidateContactsFormComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, CandidateContactsFormComponent_ng_container_17_Template, 4, 7, "ng-container", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 14, "contacts")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.contacT_TYPE_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _shared_components_dropdowns_hr_setup_contact_type_dropdown_contact_type_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.ContactTypeDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 57337:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contacts/candidate-contacts-table/candidate-contacts-table.component.ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateContactsTableComponent": () => (/* binding */ CandidateContactsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateContactsTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "contactType",
            "value",
            "actions",
        ];
        this.optionalColomns = [];
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_contacts_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
    toEdit(contact) {
    }
}
CandidateContactsTableComponent.ɵfac = function CandidateContactsTableComponent_Factory(t) { return new (t || CandidateContactsTableComponent)(); };
CandidateContactsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateContactsTableComponent, selectors: [["candidate-contacts-table"]], inputs: { isMatPaginator: "isMatPaginator" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage", "editRow", "deleteRow"], [3, "name"]], template: function CandidateContactsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateContactsTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function CandidateContactsTableComponent_Template_app_material_table_editRow_0_listener($event) { return ctx.toEdit($event); })("editRow", function CandidateContactsTableComponent_Template_app_material_table_editRow_0_listener($event) { return ctx.toEdit($event); })("deleteRow", function CandidateContactsTableComponent_Template_app_material_table_deleteRow_0_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtY29udGFjdHMtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 54486:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-card/candidate-general-info-card.component.ts ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateGeneralInfoCardComponent": () => (/* binding */ CandidateGeneralInfoCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _candidate_general_info_dialog_candidate_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../candidate-general-info-dialog/candidate-general-info-dialog.component */ 55952);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












function CandidateGeneralInfoCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClickIcon", function CandidateGeneralInfoCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.click($event)); })("click", function CandidateGeneralInfoCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateGeneralInfoCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CandidateGeneralInfoCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-view-data-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-view-data-row-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-view-data-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "app-view-data-row-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-view-data-row-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "app-view-data-row-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "app-view-data-row-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "app-view-data-row-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-view-data-row-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "app-view-data-row-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "app-view-data-row-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "app-view-data-row-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateGeneralInfoCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateGeneralInfoCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.changeCandidateId = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.candidate_general_info_tab);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_general_info_dialog_candidate_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_0__.CandidateGeneralInfoDialogComponent, this.candidate);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
}
CandidateGeneralInfoCardComponent.ɵfac = function CandidateGeneralInfoCardComponent_Factory(t) { return new (t || CandidateGeneralInfoCardComponent)(); };
CandidateGeneralInfoCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CandidateGeneralInfoCardComponent, selectors: [["candidate-general-info-card"]], outputs: { changeCandidateId: "changeCandidateId", onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "generalInfo", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], [1, "col-4", "col-lg", "mb-2"], ["label", "code", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "ar_Name", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "en_Name", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "nationality", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "nationalid", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "birthDate", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "registrationDate", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "gender", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "religion", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "sourcingType", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "sourcingName", 1, "emp-custom-view", 3, "isDate", "isBool"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [3, "rowNo"]], template: function CandidateGeneralInfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CandidateGeneralInfoCardComponent_mat_card_0_Template, 30, 25, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CandidateGeneralInfoCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZ2VuZXJhbC1pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 51762:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-core/candidate-general-info-core.component.ts ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateGeneralInfoCoreComponent": () => (/* binding */ CandidateGeneralInfoCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_general_info_card_candidate_general_info_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-general-info-card/candidate-general-info-card.component */ 54486);






function CandidateGeneralInfoCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-general-info-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateGeneralInfoCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_general_info_tab);
    }
}
CandidateGeneralInfoCoreComponent.ɵfac = function CandidateGeneralInfoCoreComponent_Factory(t) { return new (t || CandidateGeneralInfoCoreComponent)(); };
CandidateGeneralInfoCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateGeneralInfoCoreComponent, selectors: [["candidate-general-info-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateGeneralInfoCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateGeneralInfoCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_general_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_general_info_card_candidate_general_info_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateGeneralInfoCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZ2VuZXJhbC1pbmZvLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 55952:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-dialog/candidate-general-info-dialog.component.ts ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateGeneralInfoDialogComponent": () => (/* binding */ CandidateGeneralInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_general_info_candidate_general_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-general-info/candidate-general-info.component */ 51907);




class CandidateGeneralInfoDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateGeneralInfoDialogComponent.ɵfac = function CandidateGeneralInfoDialogComponent_Factory(t) { return new (t || CandidateGeneralInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateGeneralInfoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateGeneralInfoDialogComponent, selectors: [["app-candidate-general-info-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateGeneralInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateGeneralInfoDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-general-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_general_info_candidate_general_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateGeneralInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZ2VuZXJhbC1pbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 17351:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-form/candidate-general-info-form.component.ts ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateGeneralInfoFormComponent": () => (/* binding */ CandidateGeneralInfoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/constants */ 33975);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/hr-setup/gender-dropdown/gender-dropdown.component */ 99964);
/* harmony import */ var _shared_components_dropdowns_hr_setup_nationality_dropdown_nationality_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/hr-setup/nationality-dropdown/nationality-dropdown.component */ 59678);
/* harmony import */ var _shared_components_dropdowns_hr_setup_religion_dropdown_religion_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/hr-setup/religion-dropdown/religion-dropdown.component */ 2161);
/* harmony import */ var _shared_components_dropdowns_recruitment_sourcing_type_dropdown_sourcing_type_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/recruitment/sourcing-type-dropdown/sourcing-type-dropdown.component */ 77900);




















function CandidateGeneralInfoFormComponent_mat_dialog_actions_27_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-dialog-actions", 14)(1, "submit-btn", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function CandidateGeneralInfoFormComponent_mat_dialog_actions_27_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx_r0.formCtrls.id.value)("color", ctx_r0.btn.darkBlue)("iconPositionBefore", false);
} }
class CandidateGeneralInfoFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeCandidateId = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.submitted = false;
        this.constants = app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_2__.Constants;
        this.isView = false;
        this.candidateService.submitted$.subscribe((submitted) => (this.submitted = submitted));
    }
    onChangeBusinessAndCompanyId() {
        if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
            this.getCandidateById();
        }
        else
            this.invalidRequiredCount();
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.whiteSpace]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.whiteSpace]],
            code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.whiteSpace]],
            selectedCountry: [null],
            nationalid: [
                null,
                [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_15__.CustomValidators.number, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.Length(app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.nationalId)],
            ],
            dob: [null],
            hireDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            gender_ID: [null],
            religioN_ID: [null],
            resource_Type: [null],
            resource_Name: [null],
        });
        this.invalidRequiredCount();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getCandidateById() {
        this.showLoading();
        this.candidateService
            .getById(this.candidateId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.form.patchValue(res.data[0]);
                this.changeDescriptionInfo(true, 0);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    submit() {
        // console.log(this.form.value);
        // this.submitted = true;
        // if (this.form.valid) {
        const model = {
            // id: this.form.value.id,
            Core_Person: {
                ar_Name: this.form.value.ar_Name,
                en_Name: this.form.value.en_Name,
                code: this.form.value.code,
                nationalid: this.form.value.nationalid,
                dob: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.mapDateReverse(this.form.value.dob),
                hireDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.mapDateReverse(this.form.value.hireDate),
                gender_ID: this.form.value.gender_ID,
                religioN_ID: this.form.value.religioN_ID,
            },
            selectedCountry: this.form.value.selectedCountry,
            resource_Type: this.form.value.resource_Type,
            resource_Name: this.form.value.resource_Name,
        };
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            GeneralData: model,
        });
        // model.id == 0 ? this.create(model) : this.update(model);
        // }
        // else this.toastr.error("General.formNotValid");
    }
    // create(model: ICandidateRequest) {
    //   this.showLoading();
    //   this.candidateService
    //     .create(model)
    //     .subscribe((res: IResponse<ICandidateModel>) => {
    //       if (res?.message?.messageType == MessageTypes.Success) {
    //         this.addSuccessfullyMsg(res?.message?.messageTypeName);
    //         this.candidateId = res.data.id;
    //         this.changeCandidateId.emit(this.candidateId);
    //         this.formCtrls.id.setValue(this.candidateId);
    //         let url = `/recruitment/${this.moduleId}/candidate/edit/${this.candidateId}`;
    //         this.navigateTo(url);
    //       } else this.errorList(res?.message?.messages);
    //       this.hideLoading();
    //     });
    // }
    // update(model: ICandidateRequest) {
    //   this.showLoading();
    //   this.candidateService
    //     .update(model)
    //     .subscribe((res: IResponse<ICandidateModel>) => {
    //       if (res.message.messageType == MessageTypes.Success) {
    //         this.updateSuccessfullyMsg(res?.message?.messageTypeName);
    //       } else this.errorList(res?.message?.messages);
    //       this.hideLoading();
    //     });
    // }
    // clearForm() {
    //   this.form.reset();
    //   this.submitted = false;
    // }
    //descriptionInfo: ITabDescriptionInfo;
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
    }
    invalidRequiredCount() {
        // if (this.candidateId == 0) {
        let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
        this.changeDescriptionInfo(count == 0 ? true : false, count);
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            //GeneralData: this.descriptionInfo.isDone,
            GeneralData: count == 0 ? true : false,
        });
        //if (this.descriptionInfo.isDone) this.submit();
        // }
    }
    updateDataInService() {
        setTimeout(() => this.submit(), 1000);
    }
}
CandidateGeneralInfoFormComponent.ɵfac = function CandidateGeneralInfoFormComponent_Factory(t) { return new (t || CandidateGeneralInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_5__.CandidateService)); };
CandidateGeneralInfoFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: CandidateGeneralInfoFormComponent, selectors: [["candidate-general-info-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeCandidateId: "changeCandidateId", changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 28, consts: [[2, "margin-bottom", "-20px", 3, "formGroup"], [1, "row", "ptop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], ["label", "code", 3, "control", "submitted", "Blur"], ["label", "ar_Name", 3, "control", "submitted", "Blur"], ["label", "en_Name", 3, "control", "submitted", "Blur"], [3, "control", "submitted", "filter", "change"], ["label", "nationalid", 3, "control", "submitted", "Blur"], [1, "msg-after"], ["label", "dob", 3, "control", "submitted", "change"], ["label", "registrationDate", 3, "control", "submitted", "change"], [3, "control", "submitted", "change"], ["label", "sourcingName", 3, "control", "submitted", "Blur"], ["class", "border-0", "align", "end", 4, "ngIf"], ["align", "end", 1, "border-0"], ["icon", "ft-save", 3, "id", "color", "iconPositionBefore", "onClick"]], template: function CandidateGeneralInfoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("Blur", function CandidateGeneralInfoFormComponent_Template_app_input_Blur_4_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 2)(6, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("Blur", function CandidateGeneralInfoFormComponent_Template_app_input_Blur_6_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 2)(8, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("Blur", function CandidateGeneralInfoFormComponent_Template_app_input_Blur_8_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 2)(10, "app-nationality-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CandidateGeneralInfoFormComponent_Template_app_nationality_dropdown_change_10_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 2)(12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("Blur", function CandidateGeneralInfoFormComponent_Template_app_input_Blur_12_listener() { ctx.invalidRequiredCount(); return ctx.updateDataInService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 2)(16, "app-datepicker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CandidateGeneralInfoFormComponent_Template_app_datepicker_change_16_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 2)(18, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CandidateGeneralInfoFormComponent_Template_app_datepicker_change_18_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 2)(20, "app-gender-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CandidateGeneralInfoFormComponent_Template_app_gender_dropdown_change_20_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 2)(22, "religion-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CandidateGeneralInfoFormComponent_Template_religion_dropdown_change_22_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 2)(24, "app-sourcing-type-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CandidateGeneralInfoFormComponent_Template_app_sourcing_type_dropdown_change_24_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 2)(26, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("Blur", function CandidateGeneralInfoFormComponent_Template_app_input_Blur_26_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, CandidateGeneralInfoFormComponent_mat_dialog_actions_27_Template, 2, 3, "mat-dialog-actions", 13);
    } if (rf & 2) {
        let tmp_12_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.code)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.selectedCountry)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.nationalid)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ((tmp_12_0 = ctx.formCtrls.nationalid.value == null ? null : ctx.formCtrls.nationalid.value.length) !== null && tmp_12_0 !== undefined ? tmp_12_0 : 0) + "/" + ctx.constants.nationalId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.dob)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.hireDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.gender_ID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.religioN_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.resource_Type)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.resource_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.candidateId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogActions, _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.GenderDropdownComponent, _shared_components_dropdowns_hr_setup_nationality_dropdown_nationality_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.NationalityDropdownComponent, _shared_components_dropdowns_hr_setup_religion_dropdown_religion_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.ReligionDropdownComponent, _shared_components_dropdowns_recruitment_sourcing_type_dropdown_sourcing_type_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.SourcingTypeDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZ2VuZXJhbC1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 51907:
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info/candidate-general-info.component.ts ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateGeneralInfoComponent": () => (/* binding */ CandidateGeneralInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_general_info_form_candidate_general_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-general-info-form/candidate-general-info-form.component */ 17351);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);









function CandidateGeneralInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "candidate-general-info-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changeDescriptionInfo", function CandidateGeneralInfoComponent_mat_expansion_panel_0_Template_candidate_general_info_form_changeDescriptionInfo_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "generalInfo"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateGeneralInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "candidate-general-info-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "generalInfo")), "");
} }
class CandidateGeneralInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isView = false;
    }
    ngOnInit() { }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
}
CandidateGeneralInfoComponent.ɵfac = function CandidateGeneralInfoComponent_Factory(t) { return new (t || CandidateGeneralInfoComponent)(); };
CandidateGeneralInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateGeneralInfoComponent, selectors: [["candidate-general-info"]], inputs: { isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescriptionInfo"], [1, "mt-5"]], template: function CandidateGeneralInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CandidateGeneralInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CandidateGeneralInfoComponent_mat_card_1_Template, 8, 5, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelTitle, _candidate_general_info_form_candidate_general_info_form_component__WEBPACK_IMPORTED_MODULE_1__.CandidateGeneralInfoFormComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__.CandidateTabDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 51170:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/shared-candidate-components/candidate-tab-description/candidate-tab-description.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateTabDescriptionComponent": () => (/* binding */ CandidateTabDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




function CandidateTabDescriptionComponent_mat_panel_description_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateTabDescriptionComponent_mat_panel_description_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", ctx_r2.noOfRequiredInputs, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "fieldsRequired")), ") ");
} }
function CandidateTabDescriptionComponent_mat_panel_description_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "notSaved")), ") ");
} }
function CandidateTabDescriptionComponent_mat_panel_description_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-description", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CandidateTabDescriptionComponent_mat_panel_description_0_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CandidateTabDescriptionComponent_mat_panel_description_0_span_2_Template, 4, 6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CandidateTabDescriptionComponent_mat_panel_description_0_span_3_Template, 4, 5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isDone && ctx_r0.noOfRequiredInputs > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isDone && ctx_r0.noOfRequiredInputs == 0);
} }
class CandidateTabDescriptionComponent {
    // @Input() isStarted: boolean = false;
    constructor() {
        this.isDone = false;
        this.isClosedTab = false;
        this.noOfRequiredInputs = 0;
    }
    ngOnInit() { }
}
CandidateTabDescriptionComponent.ɵfac = function CandidateTabDescriptionComponent_Factory(t) { return new (t || CandidateTabDescriptionComponent)(); };
CandidateTabDescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CandidateTabDescriptionComponent, selectors: [["candidate-tab-description"]], inputs: { isDone: "isDone", isClosedTab: "isClosedTab", noOfRequiredInputs: "noOfRequiredInputs" }, decls: 1, vars: 1, consts: [["class", "candidate-description", 4, "ngIf"], [1, "candidate-description"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "fas", "fa-check-circle"], [1, "error"]], template: function CandidateTabDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CandidateTabDescriptionComponent_mat_panel_description_0_Template, 4, 3, "mat-panel-description", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClosedTab);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelDescription, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".candidate-description i {\n  font-size: 20px;\n  margin-top: 10px;\n  color: #374761;\n}\n  .candidate-description .error {\n  margin-top: 10px;\n  color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS10YWItZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxzdHlsZS1jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDUE87QURJYjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxjQ1BRO0FER2QiLCJmaWxlIjoiY2FuZGlkYXRlLXRhYi1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Nhc3Mvc3R5bGUtY29uc3RhbnRzXCI7XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5jYW5kaWRhdGUtZGVzY3JpcHRpb24ge1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAkZXJyb3ItY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRtYWluLWNvbG9yOiAjMzc0NzYxO1xyXG4kbWFpbi1jb2xvci1ob3ZlcjogIzRkNjA4MTtcclxuJGlucHV0LXJhZGl1czogOHB4O1xyXG4kaW5wdXQtZGlzYWJsZWQtY29sb3I6ICNmMmY0ZjU7XHJcbiRpbnB1dC1kaXNhYmxlZC1jb2xvci0yOiAjYTE5ZjlkO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRiYWJ5Qmx1ZS1jb2xvcjogIzE2OWVkOTtcclxuJGZvbnRBd2Vzb21lOiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuJHN0ZXBwZXItc2VjdGlvbi10aXRsZTogIzMyMzIzMjtcclxuIl19 */"] });


/***/ }),

/***/ 71999:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-card/candidate-document-card.component.ts ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateDocumentCardComponent": () => (/* binding */ CandidateDocumentCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_document_dialog_candidate_document_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-document-dialog/candidate-document-dialog.component */ 47643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_document_table_candidate_document_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-document-table/candidate-document-table.component */ 24216);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateDocumentCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateDocumentCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateDocumentCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateDocumentCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-document-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateDocumentCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateDocumentCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateDocumentCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateDocumentCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateDocumentCardComponent_mat_card_0_div_6_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8)(8, "see-more-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateDocumentCardComponent_mat_card_0_Template_see_more_btn_toggleTable_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidaterelatedRequestId)("isTableView", ctx_r0.isTableView);
} }
function CandidateDocumentCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateDocumentCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidaterelatedRequestId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Documents_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_document_dialog_candidate_document_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateDocumentDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateDocumentCardComponent.ɵfac = function CandidateDocumentCardComponent_Factory(t) { return new (t || CandidateDocumentCardComponent)(); };
CandidateDocumentCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateDocumentCardComponent, selectors: [["candidate-document-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "document", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-6 col-12", 4, "ngIf"], ["class", "col-lg-2 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-6", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "row"], [1, "col-6", "col-lg", "mb-2"], ["label", "document", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateDocumentCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateDocumentCardComponent_mat_card_0_Template, 9, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateDocumentCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_document_table_candidate_document_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateDocumentTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZG9jdW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 54537:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-core/candidate-document-core.component.ts ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateDocumentCoreComponent": () => (/* binding */ CandidateDocumentCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_document_card_candidate_document_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-document-card/candidate-document-card.component */ 71999);






function CandidateDocumentCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-document-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateDocumentCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Documents_info_tab);
    }
}
CandidateDocumentCoreComponent.ɵfac = function CandidateDocumentCoreComponent_Factory(t) { return new (t || CandidateDocumentCoreComponent)(); };
CandidateDocumentCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateDocumentCoreComponent, selectors: [["candidate-document-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateDocumentCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateDocumentCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_Documents_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_document_card_candidate_document_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateDocumentCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZG9jdW1lbnQtY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 47643:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-dialog/candidate-document-dialog.component.ts ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateDocumentDialogComponent": () => (/* binding */ CandidateDocumentDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_document_info_candidate_document_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-document-info/candidate-document-info.component */ 29847);




class CandidateDocumentDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateDocumentDialogComponent.ɵfac = function CandidateDocumentDialogComponent_Factory(t) { return new (t || CandidateDocumentDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateDocumentDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateDocumentDialogComponent, selectors: [["app-candidate-document-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateDocumentDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateDocumentDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-document-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_document_info_candidate_document_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateDocumentInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZG9jdW1lbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 29847:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-info/candidate-document-info.component.ts ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateDocumentInfoComponent": () => (/* binding */ CandidateDocumentInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_documents_form_candidate_documents_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-documents-form/candidate-documents-form.component */ 14332);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateDocumentInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-documents-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateDocumentInfoComponent_mat_expansion_panel_0_Template_candidate_documents_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "document"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateDocumentInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateDocumentInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateDocumentInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-documents-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateDocumentInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "document")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateDocumentInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() { }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
    submit() { }
}
CandidateDocumentInfoComponent.ɵfac = function CandidateDocumentInfoComponent_Factory(t) { return new (t || CandidateDocumentInfoComponent)(); };
CandidateDocumentInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateDocumentInfoComponent, selectors: [["candidate-document-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateDocumentInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateDocumentInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateDocumentInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _candidate_documents_form_candidate_documents_form_component__WEBPACK_IMPORTED_MODULE_2__.CandidateDocumentsFormComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__.CandidateTabDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZG9jdW1lbnQtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24216:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-table/candidate-document-table.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateDocumentTableComponent": () => (/* binding */ CandidateDocumentTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateDocumentTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "attachmentType",
            "attachment",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Documents_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateDocumentTableComponent.ɵfac = function CandidateDocumentTableComponent_Factory(t) { return new (t || CandidateDocumentTableComponent)(); };
CandidateDocumentTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateDocumentTableComponent, selectors: [["candidate-document-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateDocumentTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateDocumentTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtZG9jdW1lbnQtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 14332:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-documents/candidate-documents-form/candidate-documents-form.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateDocumentsFormComponent": () => (/* binding */ CandidateDocumentsFormComponent)
/* harmony export */ });
/* harmony import */ var F_Front_End_hr_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-documents */ 19515);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/prime-ng/file-upload/file-upload.component */ 34292);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_row_functions_row_functions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/row-functions/row-functions.component */ 58313);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _shared_components_dropdowns_hr_setup_hiring_document_by_service_dropdown_hiring_document_by_service_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/hr-setup/hiring-document-by-service-dropdown/hiring-document-by-service-dropdown.component */ 80088);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
/* harmony import */ var _shared_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/pipes/file-size.pipe */ 79117);























function CandidateDocumentsFormComponent_reset_form_btn_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CandidateDocumentsFormComponent_reset_form_btn_8_Template_reset_form_btn_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.clearForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function CandidateDocumentsFormComponent_ng_container_10_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "attachmentType"), " ");
  }
}

function CandidateDocumentsFormComponent_ng_container_10_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ele_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ele_r12 == null ? null : ele_r12.attachmentType, " ");
  }
}

function CandidateDocumentsFormComponent_ng_container_10_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "attachment"), " ");
  }
}

function CandidateDocumentsFormComponent_ng_container_10_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 25)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 29)(4, "div", 30)(5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p", 32)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div")(15, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CandidateDocumentsFormComponent_ng_container_10_td_11_Template_i_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ele_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r14.fileService.downloadBase64File(ele_r13 == null ? null : ele_r13.path, ele_r13 == null ? null : ele_r13.file.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ele_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r7.fileService.getFileIcon(ele_r13 == null ? null : ele_r13.file == null ? null : ele_r13.file.name), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ele_r13 == null ? null : ele_r13.file == null ? null : ele_r13.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 4, ele_r13 == null ? null : ele_r13.file == null ? null : ele_r13.file.size), " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](13, 6, ele_r13 == null ? null : ele_r13.file == null ? null : ele_r13.file.lastModifiedDate, "d MMM, y"), " ");
  }
}

function CandidateDocumentsFormComponent_ng_container_10_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "actions"), " ");
  }
}

function CandidateDocumentsFormComponent_ng_container_10_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 25)(1, "app-row-functions", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("deleteRow", function CandidateDocumentsFormComponent_ng_container_10_td_14_Template_app_row_functions_deleteRow_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ele_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.onDelete(ele_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("actions", ctx_r9.documentsRowFunctions);
  }
}

function CandidateDocumentsFormComponent_ng_container_10_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 35);
  }
}

function CandidateDocumentsFormComponent_ng_container_10_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 36);
  }
}

function CandidateDocumentsFormComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-card-content", 13)(4, "div", 14)(5, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](6, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, CandidateDocumentsFormComponent_ng_container_10_th_7_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CandidateDocumentsFormComponent_ng_container_10_td_8_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](9, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, CandidateDocumentsFormComponent_ng_container_10_th_10_Template, 3, 3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, CandidateDocumentsFormComponent_ng_container_10_td_11_Template, 16, 9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](12, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CandidateDocumentsFormComponent_ng_container_10_th_13_Template, 3, 3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, CandidateDocumentsFormComponent_ng_container_10_td_14_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, CandidateDocumentsFormComponent_ng_container_10_tr_15_Template, 1, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, CandidateDocumentsFormComponent_ng_container_10_tr_16_Template, 1, 0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.mandatoryColomns);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r1.mandatoryColomns);
  }
}

class CandidateDocumentsFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
  constructor(candidateService) {
    super();
    this.candidateService = candidateService;
    this.candidateId = 0;
    this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.submitted = false;
    this.removeFiles = false;
    this.mandatoryColomns = [// "Ser",
    "attachmentType", "attachment", "actions"];
    this.optionalColomns = [];
    this.isLoaded = false;
    this.documentsRowFunctions = {
      basic: [],
      dropdown: []
    };
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
    this.candidateService.submitted$.subscribe(submitted => {
      if (this.dataSource.data.length == 0) this.submitted = submitted;
    });
  } // override onChangeBusinessAndCompanyId() {
  //   if (this.dataSource?.data?.length > 0)
  //     this.dataSource = new MatTableDataSource(null);
  //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
  //     this.getAll();
  //   } else this.isLoaded = true;
  // }


  ngOnInit() {
    this.form = this.fb.group({
      id: [0, {
        nonNullable: true
      }],
      attachmentTypeID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      attachment: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]]
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
    this.invalidRequiredCount();
    this.isLoaded = true;
    this.getDocumentRowFunctions();
  }

  onModulesChanged() {
    this.getDocumentRowFunctions();
  }

  getDocumentRowFunctions() {
    this.rowFunctions?.basic.forEach(e => {
      if (e.name.toLowerCase() == "delete") this.documentsRowFunctions?.basic.push(e);
    });
  }

  get formCtrls() {
    return this.form.controls;
  } // getAll() {
  //   this.dataSource = new MatTableDataSource(null);
  //   this.isLoaded = false;
  //   this.candidateDocumentsService
  //     .getAll(this.candidateId)
  //     .subscribe((res: IResponse<ICandidateDocumentsModel[]>) => {
  //       if ((res.message.messageType = MessageTypes.Success)) {
  //         // this.dataSource = new MatTableDataSource(
  //         //   candidateDocumentsToDisplay(res.data, 0)
  //         // );
  //         if (res.data.length > 0) this.changeDescriptionInfo(true, 0);
  //         else this.invalidRequiredCount();
  //         this.isLoaded = true;
  //       } else this.errorList(res.message.messages);
  //     });
  // }


  submit() {
    var _this = this;

    return (0,F_Front_End_hr_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.form.value);
      _this.submitted = true;
      _this.removeFiles = false;

      if (_this.form.valid) {
        const model = {
          // person_Instance_ID: this.candidateId,
          id: _this.form.value.id == 0 ? _this.getNewId() : _this.form.value.id,
          attachmentTypeID: _this.form.value.attachmentTypeID,
          file: _this.form.value.attachment
        };
        yield _this.fileService.uploadBase64([model.file]).then(file => {
          setTimeout(() => {
            model.path = file.FileAsBase64;
            const indexModel = { ...model,
              comm_Attachment_Type: _this.selectedAttachmentType
            }; // this.form.value.id == 0
            //   ? this.create(indexModel)
            //   : this.update(indexModel);

            _this.create(indexModel);
          }, 100);
        });
      } // else this.toastr.error("General.formNotValid");

    })();
  }

  create(model) {
    // this.showLoading();
    // this.candidateDocumentsService
    //   .create(model)
    //   .subscribe((res: IResponse<ICandidateDocumentsModel>) => {
    //     if (res?.message?.messageType == MessageTypes.Success) {
    //       this.addSuccessfullyMsg(res?.message?.messageTypeName);
    //       this.clearForm();
    //       this.getAll();
    //     } else this.errorList(res.message.messages);
    //     this.hideLoading();
    //   });
    let data = this.dataSource.data;
    data.push((0,app_recruitment_mapper_candidate_candidate_documents__WEBPACK_IMPORTED_MODULE_1__.candidateDocumentsToDisplay)([model])[0]);
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(data);
    this.clearForm();
    this.invalidRequiredCount();
    this.updateGeneralData();
  } // update(model: ICandidateDocumentsModel) {
  //   // this.showLoading();
  //   // this.candidateDocumentsService
  //   //   .update(model)
  //   //   .subscribe((res: IResponse<ICandidateDocumentsModel>) => {
  //   //     if (res?.message?.messageType == MessageTypes.Success) {
  //   //       this.updateSuccessfullyMsg(res?.message?.messageTypeName);
  //   //       this.clearForm();
  //   //       this.getAll();
  //   //     } else this.errorList(res.message.messages);
  //   //     this.hideLoading();
  //   //   });
  //   let mapedModel: ICandidateDocumentsDisplayModel =
  //     candidateDocumentsToDisplay([model])[0];
  //   this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
  //   this.clearForm();
  //   this.updateGeneralData();
  // }
  // candidateeDocumentsToEdit(documents: ICandidateDocumentsDisplayModel) {
  //   this.form.patchValue(documents);
  // }


  onDelete(documents) {
    console.log(documents);
    let msg = documents.attachmentType;
    this.deleteDialog(msg).subscribe(confirm => {
      if (confirm) this.delete(documents);
    });
  }

  delete(documents) {
    // this.showLoading();
    // this.candidateDocumentsService
    //   .Delete(documents.id)
    //   .subscribe((res: IResponse) => {
    //     if (res.message.messageType == MessageTypes.Success) {
    //       this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
    //       this.getAll();
    //       if (documents.id == this.formCtrls.id.value) this.clearForm();
    //     } else this.errorList(res?.message?.messages);
    //     this.hideLoading();
    //   });
    let data = this.dataSource.data;
    data.splice(this.getIndex(documents), 1);
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(data);
    this.invalidRequiredCount();
    if (this.formCtrls.id.value == documents.id) this.clearForm();
    this.updateGeneralData();
  }

  updateGeneralData() {
    let generalModel = [];
    this.dataSource.data.forEach(ele => {
      let document = { ...ele
      };
      delete document.id;
      delete document.attachmentType;
      delete document.path; // delete document.attachment;

      delete document.comm_Attachment_Type;
      generalModel.push(document);
    });
    this.candidateService.candidateData$.next({ ...this.candidateService.candidateData$.getValue(),
      DocumentData: generalModel
    });
  }

  clearForm() {
    this.form.reset({
      id: 0
    });
    this.submitted = false;
    this.removeFiles = true;
  }

  getIndex(certification) {
    return this.dataSource.data.findIndex(ele => ele.id == certification.id);
  }

  getNewId() {
    return this.dataSource.data.reduce((acc, ele) => acc = acc > ele.id ? acc : ele.id, 0) + 1;
  }

  onChangeAttachmentType(values) {
    this.selectedAttachmentType = values.length > 0 ? values[0] : null;
    this.invalidRequiredCount();
  }

  changeDescriptionInfo(isDone, noOfRequiredInputs) {
    this.changeDescription.emit({
      isDone: isDone,
      noOfRequiredInputs: noOfRequiredInputs
    });
    this.candidateService.isDone$.next({ ...this.candidateService.isDone$.getValue(),
      // DocumentData: this.descriptionInfo.isDone,
      DocumentData: isDone
    });
  }

  invalidRequiredCount() {
    if (!(this.dataSource?.data?.length > 0)) {
      let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
      this.changeDescriptionInfo(false, count);
    } else this.changeDescriptionInfo(true, 0);
  }

}

CandidateDocumentsFormComponent.ɵfac = function CandidateDocumentsFormComponent_Factory(t) {
  return new (t || CandidateDocumentsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__.CandidateService));
};

CandidateDocumentsFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CandidateDocumentsFormComponent,
  selectors: [["candidate-documents-form"]],
  inputs: {
    candidateId: "candidateId"
  },
  outputs: {
    changeDescription: "changeDescription"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 15,
  consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], ["label", "attachment_types", 3, "control", "submitted", "filter", "change"], [1, "col-lg-6", "col-md-8", "col-12"], [3, "control", "submitted", "multiple", "isDragDrop", "isEdit", "removeFiles"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", "lable", "add", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", "small-table"], [1, "mat-elevation-z8", "f-w", "table-container", "mtop-33"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "attachmentType"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "attachment"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "media"], ["width", "23", "height", "28", "alt", "avatar", 1, "mtop-5", 3, "src"], [1, "media-body", "d-flex", "align-items-center"], [1, "doc-content"], [1, "doc-title"], [1, "doc-more"], [1, "ft-download", "pointer", 3, "click"], [3, "actions", "deleteRow"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function CandidateDocumentsFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-hiring-document-by-service-dropdown", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CandidateDocumentsFormComponent_Template_app_hiring_document_by_service_dropdown_change_3_listener($event) {
        return ctx.onChangeAttachmentType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "primeng-file-upload", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CandidateDocumentsFormComponent_reset_form_btn_8_Template, 1, 0, "reset-form-btn", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "submit-btn", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function CandidateDocumentsFormComponent_Template_submit_btn_onClick_9_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, CandidateDocumentsFormComponent_ng_container_10_Template, 17, 3, "ng-container", 10);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.attachmentTypeID)("submitted", ctx.submitted)("filter", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.attachment)("submitted", ctx.submitted)("multiple", false)("isDragDrop", true)("isEdit", ctx.formCtrls.id.value > 0)("removeFiles", ctx.removeFiles);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__.FileUploadComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_row_functions_row_functions_component__WEBPACK_IMPORTED_MODULE_8__.RowFunctionsComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _shared_components_dropdowns_hr_setup_hiring_document_by_service_dropdown_hiring_document_by_service_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.HiringDocumentByServiceDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_10__.fileSizePipe],
  styles: [".doc-content[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.doc-title[_ngcontent-%COMP%] {\n  color: #324054;\n  font-size: 14px;\n  margin-bottom: 2px;\n  font-weight: 600;\n  line-height: 1.57;\n}\n\n.doc-more[_ngcontent-%COMP%] {\n  color: #71839b;\n  font-size: 12px;\n  margin-bottom: 2px;\n}\n\ni.ft-download[_ngcontent-%COMP%] {\n  color: #71839b;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1kb2N1bWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImNhbmRpZGF0ZS1kb2N1bWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2MtY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcblxyXG4uZG9jLXRpdGxlIHtcclxuICBjb2xvcjogIzMyNDA1NDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTc7XHJcbn1cclxuXHJcbi5kb2MtbW9yZSB7XHJcbiAgY29sb3I6ICM3MTgzOWI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuaS5mdC1kb3dubG9hZCB7XHJcbiAgY29sb3I6ICM3MTgzOWI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 68696:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-card/candidate-reference-card.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateReferenceCardComponent": () => (/* binding */ CandidateReferenceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_reference_dialog_candidate_reference_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-reference-dialog/candidate-reference-dialog.component */ 8814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_reference_table_candidate_reference_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-reference-table/candidate-reference-table.component */ 80388);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateReferenceCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateReferenceCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateReferenceCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateReferenceCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-reference-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateReferenceCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-view-data-row-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-view-data-row-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-view-data-row-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateReferenceCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateReferenceCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateReferenceCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateReferenceCardComponent_mat_card_0_div_6_Template, 12, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8)(8, "see-more-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateReferenceCardComponent_mat_card_0_Template_see_more_btn_toggleTable_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidaterelatedRequestId)("isTableView", ctx_r0.isTableView);
} }
function CandidateReferenceCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateReferenceCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidaterelatedRequestId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Reference_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_reference_dialog_candidate_reference_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateReferenceDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateReferenceCardComponent.ɵfac = function CandidateReferenceCardComponent_Factory(t) { return new (t || CandidateReferenceCardComponent)(); };
CandidateReferenceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateReferenceCardComponent, selectors: [["candidate-reference-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "reference", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-6 col-12", 4, "ngIf"], ["class", "col-lg-10 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-6", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "col-lg-10", "col-12"], [1, "row"], [1, "col-6", "col-lg", "mb-2"], ["label", "reference", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "position", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "mobileNumber", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "email", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "note", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateReferenceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateReferenceCardComponent_mat_card_0_Template, 9, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateReferenceCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_reference_table_candidate_reference_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateReferenceTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVmZXJlbmNlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 67237:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-core/candidate-reference-core.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateReferenceCoreComponent": () => (/* binding */ CandidateReferenceCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_reference_card_candidate_reference_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-reference-card/candidate-reference-card.component */ 68696);






function CandidateReferenceCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-reference-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateReferenceCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Reference_info_tab);
    }
}
CandidateReferenceCoreComponent.ɵfac = function CandidateReferenceCoreComponent_Factory(t) { return new (t || CandidateReferenceCoreComponent)(); };
CandidateReferenceCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateReferenceCoreComponent, selectors: [["candidate-reference-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateReferenceCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateReferenceCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_Reference_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_reference_card_candidate_reference_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateReferenceCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVmZXJlbmNlLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8814:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-dialog/candidate-reference-dialog.component.ts ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateReferenceDialogComponent": () => (/* binding */ CandidateReferenceDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_reference_info_candidate_reference_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-reference-info/candidate-reference-info.component */ 51547);




class CandidateReferenceDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateReferenceDialogComponent.ɵfac = function CandidateReferenceDialogComponent_Factory(t) { return new (t || CandidateReferenceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateReferenceDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateReferenceDialogComponent, selectors: [["candidate-reference-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateReferenceDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateReferenceDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-reference-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_reference_info_candidate_reference_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateReferenceInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVmZXJlbmNlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1617:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-form/candidate-reference-form.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateReferenceFormComponent": () => (/* binding */ CandidateReferenceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-reference */ 33456);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);


















function CandidateReferenceFormComponent_reset_form_btn_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CandidateReferenceFormComponent_reset_form_btn_16_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CandidateReferenceFormComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "app-material-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editRow", function CandidateReferenceFormComponent_ng_container_18_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.candidateReferenceToEdit($event)); })("deleteRow", function CandidateReferenceFormComponent_ng_container_18_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateReferenceFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "company",
            "reference",
            "position",
            "phone",
            "email",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            company_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            refrence_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            position: [null],
            phone: [null, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.mobileValidators],
            email: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.email]],
            note: [null],
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource([]);
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // person_Instance_ID: this.candidateId,
                id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                company_Name: this.form.value.company_Name,
                refrence_Name: this.form.value.refrence_Name,
                position: this.form.value.position,
                phone: this.form.value.phone,
                email: this.form.value.email,
                note: this.form.value.note,
            };
            this.form.value.id == 0 ? this.create(model) : this.update(model);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_reference__WEBPACK_IMPORTED_MODULE_0__.candidateReferenceToDisplay)([model])[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_reference__WEBPACK_IMPORTED_MODULE_0__.candidateReferenceToDisplay)([model])[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateReferenceToEdit(reference) {
        this.form.patchValue(reference);
    }
    onDelete(reference) {
        let msg = `${reference.company} - ${reference.reference}`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(reference);
        });
    }
    delete(reference) {
        this.dataSource.data.splice(this.getIndex(reference), 1);
        this.invalidRequiredCount();
        if (reference.id == this.formCtrls.id.value)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            let reference = { ...ele };
            delete reference.id;
            delete reference.reference;
            delete reference.company;
            delete reference.mobileNumber;
            delete reference.notes;
            generalModel.push(reference);
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            RefrenceData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(reference) {
        return this.dataSource.data.findIndex((ele) => ele.id == reference.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.id ? acc : ele.id), 0) + 1);
    }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            // RefrenceData: this.descriptionInfo.isDone,
            RefrenceData: isDone,
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescriptionInfo(false, count);
        }
        else
            this.changeDescriptionInfo(true, 0);
    }
}
CandidateReferenceFormComponent.ɵfac = function CandidateReferenceFormComponent_Factory(t) { return new (t || CandidateReferenceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__.CandidateService)); };
CandidateReferenceFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CandidateReferenceFormComponent, selectors: [["candidate-reference-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 18, consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], ["label", "company", 3, "control", "submitted", "Blur"], ["label", "reference", 3, "control", "submitted", "Blur"], ["label", "position", 3, "control", "submitted"], ["label", "mobileNumber", 3, "control", "submitted", "Blur"], ["label", "email", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateReferenceFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("Blur", function CandidateReferenceFormComponent_Template_app_input_Blur_3_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 2)(5, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("Blur", function CandidateReferenceFormComponent_Template_app_input_Blur_5_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 2)(9, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("Blur", function CandidateReferenceFormComponent_Template_app_input_Blur_9_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, CandidateReferenceFormComponent_reset_form_btn_16_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function CandidateReferenceFormComponent_Template_submit_btn_onClick_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, CandidateReferenceFormComponent_ng_container_18_Template, 4, 7, "ng-container", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.company_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.refrence_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.position)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.phone)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.email)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVmZXJlbmNlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 51547:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-info/candidate-reference-info.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateReferenceInfoComponent": () => (/* binding */ CandidateReferenceInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _candidate_reference_form_candidate_reference_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate-reference-form/candidate-reference-form.component */ 1617);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateReferenceInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-reference-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateReferenceInfoComponent_mat_expansion_panel_0_Template_candidate_reference_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "reference"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateReferenceInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateReferenceInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateReferenceInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-reference-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateReferenceInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "reference")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateReferenceInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() {
    }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateReferenceInfoComponent.ɵfac = function CandidateReferenceInfoComponent_Factory(t) { return new (t || CandidateReferenceInfoComponent)(); };
CandidateReferenceInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateReferenceInfoComponent, selectors: [["candidate-reference-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateReferenceInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateReferenceInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateReferenceInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__.CandidateTabDescriptionComponent, _candidate_reference_form_candidate_reference_form_component__WEBPACK_IMPORTED_MODULE_3__.CandidateReferenceFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVmZXJlbmNlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 80388:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-table/candidate-reference-table.component.ts ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateReferenceTableComponent": () => (/* binding */ CandidateReferenceTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateReferenceTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "reference",
            "position",
            "mobileNumber",
            "email",
            "note",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Reference_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateReferenceTableComponent.ɵfac = function CandidateReferenceTableComponent_Factory(t) { return new (t || CandidateReferenceTableComponent)(); };
CandidateReferenceTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateReferenceTableComponent, selectors: [["candidate-reference-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateReferenceTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateReferenceTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVmZXJlbmNlLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 96575:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-request-form/candidate-related-requests-form.component.ts ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateRelatedFormRequestsComponent": () => (/* binding */ CandidateRelatedFormRequestsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_related_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-related-requests */ 51053);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_recruitment_recruitment_plan_dropdown_recruitment_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/recruitment/recruitment-plan-dropdown/recruitment-plan-dropdown.component */ 58543);
/* harmony import */ var _shared_components_dropdowns_recruitment_request_recruitment_request_by_plan_dropdown_recruitment_request_by_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/recruitment/request/recruitment-request-by-plan-dropdown/recruitment-request-by-plan-dropdown.component */ 70899);

















function CandidateRelatedFormRequestsComponent_reset_form_btn_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CandidateRelatedFormRequestsComponent_reset_form_btn_8_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function CandidateRelatedFormRequestsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "app-material-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editRow", function CandidateRelatedFormRequestsComponent_ng_container_10_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.candidateRelatedRequestsToEdit($event)); })("deleteRow", function CandidateRelatedFormRequestsComponent_ng_container_10_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateRelatedFormRequestsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "plan",
            "request",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            planId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            request_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource([]);
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // person_Instance_ID: this.candidateId,
                id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                request_ID: this.form.value.request_ID,
            };
            const indexModel = {
                ...model,
                planId: this.form.value.planId,
                rec_Plan: this.selectedPlan,
                rec_Request: this.selectedRequest,
            };
            this.form.value.id == 0
                ? this.create(indexModel)
                : this.update(indexModel);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_related_requests__WEBPACK_IMPORTED_MODULE_0__.candidateRelatedRequestsToDisplay)([model])[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_related_requests__WEBPACK_IMPORTED_MODULE_0__.candidateRelatedRequestsToDisplay)([model])[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateRelatedRequestsToEdit(relatedRequests) {
        this.form.patchValue(relatedRequests);
        this.formCtrls.request_ID.setValue(relatedRequests.request_ID);
    }
    onDelete(relatedRequests) {
        let msg = `${relatedRequests.plan} - ${relatedRequests.request}`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(relatedRequests);
        });
    }
    delete(relatedRequests) {
        this.dataSource.data.splice(this.getIndex(relatedRequests), 1);
        this.invalidRequiredCount();
        if (relatedRequests.id == this.formCtrls.id.value)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            let relatedRequests = { ...ele };
            delete relatedRequests.id;
            delete relatedRequests.planId;
            delete relatedRequests.request;
            delete relatedRequests.plan;
            delete relatedRequests.rec_Plan;
            delete relatedRequests.rec_Request;
            generalModel.push(relatedRequests);
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            relatedData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(relatedRequests) {
        return this.dataSource.data.findIndex((ele) => ele.id == relatedRequests.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.id ? acc : ele.id), 0) + 1);
    }
    onChangePlan(values) {
        this.selectedPlan = values.length > 0 ? values[0] : null;
        this.invalidRequiredCount();
    }
    onChangeRequest(values) {
        this.selectedRequest =
            values?.length > 0 ? values[0] : this.selectedRequest;
        this.invalidRequiredCount();
    }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            // relatedData: this.descriptionInfo.isDone,
            relatedData: isDone
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescriptionInfo(count == 0 ? true : false, count);
        }
        else
            this.changeDescriptionInfo(true, 0);
    }
}
CandidateRelatedFormRequestsComponent.ɵfac = function CandidateRelatedFormRequestsComponent_Factory(t) { return new (t || CandidateRelatedFormRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__.CandidateService)); };
CandidateRelatedFormRequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CandidateRelatedFormRequestsComponent, selectors: [["candidate-related-requests-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 13, consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "change"], [3, "control", "planControl", "submitted", "filter", "change"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateRelatedFormRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-recruitment-plan-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CandidateRelatedFormRequestsComponent_Template_app_recruitment_plan_dropdown_change_3_listener($event) { return ctx.onChangePlan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 2)(5, "app-recruitment-request-by-plan-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CandidateRelatedFormRequestsComponent_Template_app_recruitment_request_by_plan_dropdown_change_5_listener($event) { return ctx.onChangeRequest($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, CandidateRelatedFormRequestsComponent_reset_form_btn_8_Template, 1, 0, "reset-form-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "submit-btn", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function CandidateRelatedFormRequestsComponent_Template_submit_btn_onClick_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, CandidateRelatedFormRequestsComponent_ng_container_10_Template, 4, 7, "ng-container", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.planId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.request_ID)("planControl", ctx.formCtrls.planId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_5__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _shared_components_dropdowns_recruitment_recruitment_plan_dropdown_recruitment_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.RecruitmentPlanDropdownComponent, _shared_components_dropdowns_recruitment_request_recruitment_request_by_plan_dropdown_recruitment_request_by_plan_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.RecruitmentRequestByPlanDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVsYXRlZC1yZXF1ZXN0cy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5458:
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-card/candidate-related-requests-card.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateRelatedRequestsCardComponent": () => (/* binding */ CandidateRelatedRequestsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_related_requests_dialog_candidate_related_requests_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-related-requests-dialog/candidate-related-requests-dialog.component */ 65388);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_related_requests_table_candidate_related_requests_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-related-requests-table/candidate-related-requests-table.component */ 31254);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateRelatedRequestsCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateRelatedRequestsCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateRelatedRequestsCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateRelatedRequestsCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-related-requests-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateRelatedRequestsCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateRelatedRequestsCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateRelatedRequestsCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateRelatedRequestsCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateRelatedRequestsCardComponent_mat_card_0_div_6_Template, 6, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8)(8, "see-more-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateRelatedRequestsCardComponent_mat_card_0_Template_see_more_btn_toggleTable_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidaterelatedRequestId)("isTableView", ctx_r0.isTableView);
} }
function CandidateRelatedRequestsCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateRelatedRequestsCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidaterelatedRequestId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Related_Requests_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_related_requests_dialog_candidate_related_requests_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateRelatedRequestsDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateRelatedRequestsCardComponent.ɵfac = function CandidateRelatedRequestsCardComponent_Factory(t) { return new (t || CandidateRelatedRequestsCardComponent)(); };
CandidateRelatedRequestsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateRelatedRequestsCardComponent, selectors: [["candidate-related-requests-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "relatedRequests", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-6 col-12", 4, "ngIf"], ["class", "col-lg-4 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-6", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "col-lg-4", "col-12"], [1, "row"], [1, "col-6", "col-lg", "mb-2"], ["label", "plan", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "request", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateRelatedRequestsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateRelatedRequestsCardComponent_mat_card_0_Template, 9, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateRelatedRequestsCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_related_requests_table_candidate_related_requests_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateRelatedRequestsTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVsYXRlZC1yZXF1ZXN0cy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 19347:
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-core/candidate-related-requests-core.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateRelatedRequestsCoreComponent": () => (/* binding */ CandidateRelatedRequestsCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_related_requests_card_candidate_related_requests_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-related-requests-card/candidate-related-requests-card.component */ 5458);






function CandidateRelatedRequestsCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-related-requests-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateRelatedRequestsCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Related_Requests_tab);
    }
}
CandidateRelatedRequestsCoreComponent.ɵfac = function CandidateRelatedRequestsCoreComponent_Factory(t) { return new (t || CandidateRelatedRequestsCoreComponent)(); };
CandidateRelatedRequestsCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateRelatedRequestsCoreComponent, selectors: [["candidate-related-requests-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateRelatedRequestsCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateRelatedRequestsCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_Related_Requests_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_related_requests_card_candidate_related_requests_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateRelatedRequestsCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVsYXRlZC1yZXF1ZXN0cy1jb3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65388:
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-dialog/candidate-related-requests-dialog.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateRelatedRequestsDialogComponent": () => (/* binding */ CandidateRelatedRequestsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_related_requests_info_candidate_related_requests_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-related-requests-info/candidate-related-requests-info.component */ 28264);




class CandidateRelatedRequestsDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateRelatedRequestsDialogComponent.ɵfac = function CandidateRelatedRequestsDialogComponent_Factory(t) { return new (t || CandidateRelatedRequestsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateRelatedRequestsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateRelatedRequestsDialogComponent, selectors: [["candidate-related-requests-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateRelatedRequestsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateRelatedRequestsDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-related-requests-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_related_requests_info_candidate_related_requests_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateRelatedRequestsInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVsYXRlZC1yZXF1ZXN0cy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 28264:
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-info/candidate-related-requests-info.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateRelatedRequestsInfoComponent": () => (/* binding */ CandidateRelatedRequestsInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _candidate_related_request_form_candidate_related_requests_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate-related-request-form/candidate-related-requests-form.component */ 96575);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateRelatedRequestsInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-related-requests-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateRelatedRequestsInfoComponent_mat_expansion_panel_0_Template_candidate_related_requests_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "relatedRequests"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateRelatedRequestsInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateRelatedRequestsInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateRelatedRequestsInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-related-requests-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateRelatedRequestsInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "relatedRequests")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateRelatedRequestsInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() {
    }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateRelatedRequestsInfoComponent.ɵfac = function CandidateRelatedRequestsInfoComponent_Factory(t) { return new (t || CandidateRelatedRequestsInfoComponent)(); };
CandidateRelatedRequestsInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateRelatedRequestsInfoComponent, selectors: [["candidate-related-requests-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateRelatedRequestsInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateRelatedRequestsInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateRelatedRequestsInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__.CandidateTabDescriptionComponent, _candidate_related_request_form_candidate_related_requests_form_component__WEBPACK_IMPORTED_MODULE_3__.CandidateRelatedFormRequestsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVsYXRlZC1yZXF1ZXN0cy1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 31254:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-table/candidate-related-requests-table.component.ts ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateRelatedRequestsTableComponent": () => (/* binding */ CandidateRelatedRequestsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateRelatedRequestsTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "plan",
            "request",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Working_Experience_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateRelatedRequestsTableComponent.ɵfac = function CandidateRelatedRequestsTableComponent_Factory(t) { return new (t || CandidateRelatedRequestsTableComponent)(); };
CandidateRelatedRequestsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateRelatedRequestsTableComponent, selectors: [["candidate-related-requests-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateRelatedRequestsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateRelatedRequestsTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtcmVsYXRlZC1yZXF1ZXN0cy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 15265:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-card/candidate-suitable-requisitions-card.component.ts ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateSuitableRequisitionsCardComponent": () => (/* binding */ CandidateSuitableRequisitionsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_suitable_requisitions_dialog_candidate_suitable_requisitions_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-suitable-requisitions-dialog/candidate-suitable-requisitions-dialog.component */ 80281);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_suitable_requisitions_table_candidate_suitable_requisitions_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-suitable-requisitions-table/candidate-suitable-requisitions-table.component */ 55616);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateSuitableRequisitionsCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateSuitableRequisitionsCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.click($event)); })("click", function CandidateSuitableRequisitionsCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateSuitableRequisitionsCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-suitable-requisitions-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateSuitableRequisitionsCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-view-data-row-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateSuitableRequisitionsCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateSuitableRequisitionsCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateSuitableRequisitionsCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateSuitableRequisitionsCardComponent_mat_card_0_div_6_Template, 8, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7)(8, "see-more-btn", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateSuitableRequisitionsCardComponent_mat_card_0_Template_see_more_btn_toggleTable_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidateSutitableId)("isTableView", ctx_r0.isTableView);
} }
function CandidateSuitableRequisitionsCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateSuitableRequisitionsCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidateSutitableId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Suitable_Requisitions_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_suitable_requisitions_dialog_candidate_suitable_requisitions_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateSuitableRequisitionsDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateSuitableRequisitionsCardComponent.ɵfac = function CandidateSuitableRequisitionsCardComponent_Factory(t) { return new (t || CandidateSuitableRequisitionsCardComponent)(); };
CandidateSuitableRequisitionsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateSuitableRequisitionsCardComponent, selectors: [["candidate-suitable-requisitions-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "suitableRequisitions", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-6 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-6", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "row"], [1, "col-4", "col-lg", "mb-2"], ["label", "organization", 1, "emp-custom-view", 3, "isDate", "isBool"], [1, "col-3", "col-lg", "mb-2"], ["label", "type", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "job", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateSuitableRequisitionsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateSuitableRequisitionsCardComponent_mat_card_0_Template, 9, 5, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateSuitableRequisitionsCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_suitable_requisitions_table_candidate_suitable_requisitions_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateSuitableRequisitionsTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtc3VpdGFibGUtcmVxdWlzaXRpb25zLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 95094:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-core/candidate-suitable-requisitions-core.component.ts ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateSuitableRequisitionsCoreComponent": () => (/* binding */ CandidateSuitableRequisitionsCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_suitable_requisitions_card_candidate_suitable_requisitions_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-suitable-requisitions-card/candidate-suitable-requisitions-card.component */ 15265);






function CandidateSuitableRequisitionsCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-suitable-requisitions-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateSuitableRequisitionsCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Suitable_Requisitions_info_tab);
    }
}
CandidateSuitableRequisitionsCoreComponent.ɵfac = function CandidateSuitableRequisitionsCoreComponent_Factory(t) { return new (t || CandidateSuitableRequisitionsCoreComponent)(); };
CandidateSuitableRequisitionsCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateSuitableRequisitionsCoreComponent, selectors: [["candidate-suitable-requisitions-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateSuitableRequisitionsCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateSuitableRequisitionsCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_Suitable_Requisitions_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_suitable_requisitions_card_candidate_suitable_requisitions_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateSuitableRequisitionsCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtc3VpdGFibGUtcmVxdWlzaXRpb25zLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 80281:
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-dialog/candidate-suitable-requisitions-dialog.component.ts ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateSuitableRequisitionsDialogComponent": () => (/* binding */ CandidateSuitableRequisitionsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_suitable_requisitions_info_candidate_suitable_requisitions_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-suitable-requisitions-info/candidate-suitable-requisitions-info.component */ 40045);




class CandidateSuitableRequisitionsDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateSuitableRequisitionsDialogComponent.ɵfac = function CandidateSuitableRequisitionsDialogComponent_Factory(t) { return new (t || CandidateSuitableRequisitionsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateSuitableRequisitionsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateSuitableRequisitionsDialogComponent, selectors: [["candidate-suitable-requisitions-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateSuitableRequisitionsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateSuitableRequisitionsDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-suitable-requisitions-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_suitable_requisitions_info_candidate_suitable_requisitions_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateSuitableRequisitionsInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtc3VpdGFibGUtcmVxdWlzaXRpb25zLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 73871:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-form/candidate-suitable-requisitions-form.component.ts ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateSuitableRequisitionsFormComponent": () => (/* binding */ CandidateSuitableRequisitionsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_suitable_requisitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-suitable-requisitions */ 51209);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/org-management-setup/org/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 85443);
/* harmony import */ var _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/org-management/job-title/job-title-by-org-dropdown/job-title-by-org-dropdown.component */ 15362);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/org-management-setup/org-types/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 50260);


















function CandidateSuitableRequisitionsFormComponent_reset_form_btn_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CandidateSuitableRequisitionsFormComponent_reset_form_btn_10_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CandidateSuitableRequisitionsFormComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "app-material-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function CandidateSuitableRequisitionsFormComponent_ng_container_12_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.candidateSuitableRequisitionsToEdit($event)); })("deleteRow", function CandidateSuitableRequisitionsFormComponent_ng_container_12_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateSuitableRequisitionsFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "organization",
            "type",
            "job",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            orgTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            org_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            job_Title_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // person_Instance_ID: this.candidateId,
                id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                org_ID: this.form.value.org_ID,
                job_Title_ID: this.form.value.job_Title_ID,
            };
            const indexModel = {
                ...model,
                orgTypeId: this.form.value.orgTypeId,
                core_Org_TYPE: this.selectedOrgType,
                core_Org: this.selectedOrg,
                core_Job_Title: this.selectedJob,
            };
            this.form.value.id == 0
                ? this.create(indexModel)
                : this.update(indexModel);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_suitable_requisitions__WEBPACK_IMPORTED_MODULE_0__.candidateSuitableRequisitionsToDisplay)([model])[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_suitable_requisitions__WEBPACK_IMPORTED_MODULE_0__.candidateSuitableRequisitionsToDisplay)([model])[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateSuitableRequisitionsToEdit(JobInfo) {
        this.form.patchValue(JobInfo);
        this.formCtrls.org_ID.setValue(JobInfo.org_ID);
        setTimeout(() => {
            this.formCtrls.job_Title_ID.setValue(JobInfo.job_Title_ID);
        }, 50);
    }
    onDelete(JobInfo) {
        let msg = `${JobInfo.organization} - ${JobInfo.job}`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(JobInfo);
        });
    }
    delete(JobInfo) {
        this.dataSource.data.splice(this.getIndex(JobInfo), 1);
        this.invalidRequiredCount();
        if (JobInfo.id == this.formCtrls.id.value)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            let JobInfo = { ...ele };
            delete JobInfo.id;
            delete JobInfo.orgTypeId;
            delete JobInfo.type;
            delete JobInfo.organization;
            delete JobInfo.job;
            delete JobInfo.core_Org_TYPE;
            delete JobInfo.core_Org;
            delete JobInfo.core_Job_Title;
            generalModel.push(JobInfo);
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            JobInfoData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(JobInfo) {
        return this.dataSource.data.findIndex((ele) => ele.id == JobInfo.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.id ? acc : ele.id), 0) + 1);
    }
    onChangeOrganizationType(values) {
        this.selectedOrgType = values.length > 0 ? values[0] : null;
        this.invalidRequiredCount();
    }
    onChangeOrganization(values) {
        this.selectedOrg = values?.length > 0 ? values[0] : this.selectedOrg;
        this.invalidRequiredCount();
    }
    onChangeJob(values) {
        this.selectedJob = values?.length > 0 ? values[0] : this.selectedJob;
        this.invalidRequiredCount();
    }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({ isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            // JobInfoData: this.descriptionInfo.isDone,
            JobInfoData: isDone,
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescriptionInfo(count == 0 ? true : false, count);
        }
        else
            this.changeDescriptionInfo(true, 0);
    }
}
CandidateSuitableRequisitionsFormComponent.ɵfac = function CandidateSuitableRequisitionsFormComponent_Factory(t) { return new (t || CandidateSuitableRequisitionsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_3__.CandidateService)); };
CandidateSuitableRequisitionsFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CandidateSuitableRequisitionsFormComponent, selectors: [["candidate-suitable-requisitions-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 18, consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "change"], [3, "control", "orgTypeControl", "submitted", "filter", "change"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter", "change"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", "small-table", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateSuitableRequisitionsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-org-types-dropdown-current-structure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CandidateSuitableRequisitionsFormComponent_Template_app_org_types_dropdown_current_structure_change_3_listener($event) { return ctx.onChangeOrganizationType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 2)(5, "app-organization-by-org-type-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CandidateSuitableRequisitionsFormComponent_Template_app_organization_by_org_type_dropdown_change_5_listener($event) { return ctx.onChangeOrganization($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2)(7, "app-job-title-by-org-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CandidateSuitableRequisitionsFormComponent_Template_app_job_title_by_org_dropdown_change_7_listener($event) { return ctx.onChangeJob($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CandidateSuitableRequisitionsFormComponent_reset_form_btn_10_Template, 1, 0, "reset-form-btn", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function CandidateSuitableRequisitionsFormComponent_Template_submit_btn_onClick_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, CandidateSuitableRequisitionsFormComponent_ng_container_12_Template, 4, 7, "ng-container", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.orgTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.org_ID)("orgTypeControl", ctx.formCtrls.orgTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.job_Title_ID)("organizationControl", ctx.formCtrls.org_ID)("organizationControlRequired", true)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_5__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.OrganizationByOrgTypeDropdownComponent, _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.JobTitleByOrgDropdownComponent, _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_9__.OrgTypesDropdownCurrentStructureComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtc3VpdGFibGUtcmVxdWlzaXRpb25zLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 40045:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-info/candidate-suitable-requisitions-info.component.ts ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateSuitableRequisitionsInfoComponent": () => (/* binding */ CandidateSuitableRequisitionsInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _candidate_suitable_requisitions_form_candidate_suitable_requisitions_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate-suitable-requisitions-form/candidate-suitable-requisitions-form.component */ 73871);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateSuitableRequisitionsInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-suitable-requisitions-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateSuitableRequisitionsInfoComponent_mat_expansion_panel_0_Template_candidate_suitable_requisitions_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "suitableRequisitions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateSuitableRequisitionsInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateSuitableRequisitionsInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateSuitableRequisitionsInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-suitable-requisitions-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateSuitableRequisitionsInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "suitableRequisitions")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateSuitableRequisitionsInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() {
    }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateSuitableRequisitionsInfoComponent.ɵfac = function CandidateSuitableRequisitionsInfoComponent_Factory(t) { return new (t || CandidateSuitableRequisitionsInfoComponent)(); };
CandidateSuitableRequisitionsInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateSuitableRequisitionsInfoComponent, selectors: [["candidate-suitable-requisitions-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateSuitableRequisitionsInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateSuitableRequisitionsInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateSuitableRequisitionsInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_2__.CandidateTabDescriptionComponent, _candidate_suitable_requisitions_form_candidate_suitable_requisitions_form_component__WEBPACK_IMPORTED_MODULE_3__.CandidateSuitableRequisitionsFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtc3VpdGFibGUtcmVxdWlzaXRpb25zLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 55616:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-table/candidate-suitable-requisitions-table.component.ts ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateSuitableRequisitionsTableComponent": () => (/* binding */ CandidateSuitableRequisitionsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateSuitableRequisitionsTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "organization",
            "type",
            "job",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Suitable_Requisitions_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateSuitableRequisitionsTableComponent.ɵfac = function CandidateSuitableRequisitionsTableComponent_Factory(t) { return new (t || CandidateSuitableRequisitionsTableComponent)(); };
CandidateSuitableRequisitionsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateSuitableRequisitionsTableComponent, selectors: [["candidate-suitable-requisitions-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateSuitableRequisitionsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateSuitableRequisitionsTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtc3VpdGFibGUtcmVxdWlzaXRpb25zLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 25899:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-card/candidate-work-experience-card.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateWorkExperienceCardComponent": () => (/* binding */ CandidateWorkExperienceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _candidate_work_experience_dialog_candidate_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-work-experience-dialog/candidate-work-experience-dialog.component */ 20898);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/view-data-row-item/view-data-row-item.component */ 93665);
/* harmony import */ var app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/components/resources/buttons/see-more-btn/see-more-btn.component */ 23333);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _candidate_work_experience_table_candidate_work_experience_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-work-experience-table/candidate-work-experience-table.component */ 64259);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function CandidateWorkExperienceCardComponent_mat_card_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function CandidateWorkExperienceCardComponent_mat_card_0_a_3_Template_a_onClickIcon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.click($event)); })("click", function CandidateWorkExperienceCardComponent_mat_card_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.openEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "edit"));
} }
function CandidateWorkExperienceCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "candidate-work-experience-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isMatPaginator", true)("hideActions", true)("hideActions", true);
} }
function CandidateWorkExperienceCardComponent_mat_card_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-view-data-row-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-view-data-row-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-view-data-row-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-view-data-row-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateWorkExperienceCardComponent_mat_card_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "div", 16)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-view-data-row-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-view-data-row-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDate", false)("isBool", false);
} }
function CandidateWorkExperienceCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CandidateWorkExperienceCardComponent_mat_card_0_a_3_Template, 3, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CandidateWorkExperienceCardComponent_mat_card_0_div_5_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CandidateWorkExperienceCardComponent_mat_card_0_div_6_Template, 14, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CandidateWorkExperienceCardComponent_mat_card_0_div_7_Template, 6, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 9)(9, "see-more-btn", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleTable", function CandidateWorkExperienceCardComponent_mat_card_0_Template_see_more_btn_toggleTable_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.toggleTable()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isTableView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("Id", ctx_r0.candidateexperienceId)("isTableView", ctx_r0.isTableView);
} }
function CandidateWorkExperienceCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 29);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class CandidateWorkExperienceCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isLoaded = true;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isTableView = false;
        this.candidateexperienceId = 2;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Working_Experience_info_sec);
    }
    openEditDialog() {
        let dialogRef = this.dialogsService.addEditDialog(_candidate_work_experience_dialog_candidate_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CandidateWorkExperienceDialogComponent);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
    toggleTable() {
        this.isTableView = !this.isTableView;
    }
}
CandidateWorkExperienceCardComponent.ɵfac = function CandidateWorkExperienceCardComponent_Factory(t) { return new (t || CandidateWorkExperienceCardComponent)(); };
CandidateWorkExperienceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CandidateWorkExperienceCardComponent, selectors: [["candidate-work-experience-card"]], outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "main-card-title", "border-bottom"], ["title", "workExperience", "color", "font-dark"], ["matTooltipPosition", "above", "class", "float-right", 3, "matTooltip", "onClickIcon", "click", 4, "ngIf"], [1, "view-data-row-container", "mtop-20"], ["class", "col-lg-10 col-12", 4, "ngIf"], ["class", "col-lg-12 col-12", 4, "ngIf"], ["class", "col-lg-4 col-12", 4, "ngIf"], [1, "col-lg-2", "col-12"], [3, "Id", "isTableView", "toggleTable"], ["matTooltipPosition", "above", 1, "float-right", 3, "matTooltip", "onClickIcon", "click"], [1, "fas", "fa-pen", "darkBlue", "font-size-15"], [1, "col-lg-10", "col-12"], [3, "isMatPaginator", "hideActions"], [1, "col-lg-12", "col-12"], [1, "row"], [1, "col-4", "col-lg", "mb-2"], ["label", "company", 1, "emp-custom-view", 3, "isDate", "isBool"], [1, "col-3", "col-lg", "mb-2"], ["label", "department", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "job", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "start_date", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "end_date", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "companySalary", 1, "emp-custom-view", 3, "isDate", "isBool"], [1, "col-lg-4", "col-12"], [1, "col-5", "col-lg", "mb-2"], ["label", "resignationReason", 1, "emp-custom-view", 3, "isDate", "isBool"], ["label", "notes", 1, "emp-custom-view", 3, "isDate", "isBool"], [3, "rowNo"]], template: function CandidateWorkExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CandidateWorkExperienceCardComponent_mat_card_0_Template, 10, 6, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CandidateWorkExperienceCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _shared_components_view_data_row_item_view_data_row_item_component__WEBPACK_IMPORTED_MODULE_5__.ViewDataRowItemComponent, app_shared_components_resources_buttons_see_more_btn_see_more_btn_component__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _candidate_work_experience_table_candidate_work_experience_table_component__WEBPACK_IMPORTED_MODULE_7__.CandidateWorkExperienceTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtd29yay1leHBlcmllbmNlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 84098:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-core/candidate-work-experience-core.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateWorkExperienceCoreComponent": () => (/* binding */ CandidateWorkExperienceCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _candidate_work_experience_card_candidate_work_experience_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-work-experience-card/candidate-work-experience-card.component */ 25899);






function CandidateWorkExperienceCoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "candidate-work-experience-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CandidateWorkExperienceCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager;
    }
    ngOnInit() {
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.Working_Experience_info_tab);
    }
}
CandidateWorkExperienceCoreComponent.ɵfac = function CandidateWorkExperienceCoreComponent_Factory(t) { return new (t || CandidateWorkExperienceCoreComponent)(); };
CandidateWorkExperienceCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateWorkExperienceCoreComponent, selectors: [["candidate-work-experience-core"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-12", "p-0", "px-md-2"]], template: function CandidateWorkExperienceCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateWorkExperienceCoreComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.candidate_Working_Experience_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _candidate_work_experience_card_candidate_work_experience_card_component__WEBPACK_IMPORTED_MODULE_2__.CandidateWorkExperienceCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtd29yay1leHBlcmllbmNlLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 20898:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-dialog/candidate-work-experience-dialog.component.ts ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateWorkExperienceDialogComponent": () => (/* binding */ CandidateWorkExperienceDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _candidate_work_experience_info_candidate_work_experience_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate-work-experience-info/candidate-work-experience-info.component */ 19825);




class CandidateWorkExperienceDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
CandidateWorkExperienceDialogComponent.ɵfac = function CandidateWorkExperienceDialogComponent_Factory(t) { return new (t || CandidateWorkExperienceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CandidateWorkExperienceDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateWorkExperienceDialogComponent, selectors: [["app-candidate-work-experience-dialog"]], decls: 4, vars: 1, consts: [[1, "mb-2", 3, "click"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "isView"]], template: function CandidateWorkExperienceDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "close-dialog-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateWorkExperienceDialogComponent_Template_close_dialog_btn_click_0_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "candidate-work-experience-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isView", true);
    } }, dependencies: [_shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_0__.CloseDialogBtnComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _candidate_work_experience_info_candidate_work_experience_info_component__WEBPACK_IMPORTED_MODULE_1__.CandidateWorkExperienceInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtd29yay1leHBlcmllbmNlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 86532:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-form/candidate-work-experience-form.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateWorkExperienceFormComponent": () => (/* binding */ CandidateWorkExperienceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate_work_experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate-work-experience */ 71368);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_recruitment_resignation_reason_dropdown_resignation_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/dropdowns/recruitment/resignation-reason-dropdown/resignation-reason-dropdown.component */ 19283);




















function CandidateWorkExperienceFormComponent_reset_form_btn_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CandidateWorkExperienceFormComponent_reset_form_btn_22_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function CandidateWorkExperienceFormComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-divider", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "app-material-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function CandidateWorkExperienceFormComponent_ng_container_24_Template_app_material_table_editRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.candidateeWorkExperienceToEdit($event)); })("deleteRow", function CandidateWorkExperienceFormComponent_ng_container_24_Template_app_material_table_deleteRow_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class CandidateWorkExperienceFormComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(candidateService) {
        super();
        this.candidateService = candidateService;
        this.candidateId = 0;
        this.changeDescription = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.submitted = false;
        this.mandatoryColomns = [
            // "Ser",
            "company",
            "department",
            "job",
            "startDate",
            "endDate",
            "companySalary",
            "resignationReason",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.resignationReasonOtherId = 6;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
        this.candidateService.submitted$.subscribe((submitted) => {
            if (this.dataSource.data.length == 0)
                this.submitted = submitted;
        });
    }
    // override onChangeBusinessAndCompanyId() {
    //   if (this.dataSource?.data?.length > 0)
    //     this.dataSource = new MatTableDataSource(null);
    //   if (this.candidateId > 0 && this.checkNoBusinessOrCompany()) {
    //     this.getAll();
    //   } else this.isLoaded = true;
    // }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            companyName: [null /* , [Validators.required] */],
            org_Name: [null /* , [Validators.required] */],
            job_Title_Name: [null /* , [Validators.required] */],
            from_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            to_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            companySalary: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.gt(0)]],
            resignationReasonId: [null /* , [Validators.required] */],
            resignation_Reason: [null],
            note: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("from_Date", "to_Date"),
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource([]);
        this.invalidRequiredCount();
        this.isLoaded = true;
    }
    get formCtrls() {
        return this.form.controls;
    }
    // getAll() {
    //   this.dataSource = new MatTableDataSource(null);
    //   this.isLoaded = false;
    //   this.candidateWorkExperienceService
    //     .getAll(this.candidateId)
    //     .subscribe((res: IResponse<ICandidateWorkExperienceModel[]>) => {
    //       if ((res.message.messageType = MessageTypes.Success)) {
    //         this.dataSource = new MatTableDataSource(
    //           candidateWorkExperienceToDisplay(
    //             res.data,
    //             this.resignationReasonOtherId
    //           )
    //         );
    //         if (res.data.length > 0) this.changeDescriptionInfo(true, 0);
    //         else this.invalidRequiredCount();
    //         this.isLoaded = true;
    //       } else this.errorList(res.message.messages);
    //     });
    // }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                // person_Instance_ID: this.candidateId,
                id: this.form.value.id == 0 ? this.getNewId() : this.form.value.id,
                companyName: this.form.value.companyName,
                org_Name: this.form.value.org_Name,
                job_Title_Name: this.form.value.job_Title_Name,
                from_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.from_Date),
                to_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.to_Date),
                companySalary: this.form.value.companySalary,
                resignationReasonId: this.form.value.resignationReasonId,
                resignation_Reason: null,
                note: this.form.value.note,
            };
            if (model.resignationReasonId == this.resignationReasonOtherId)
                model.resignation_Reason = this.form.value.resignation_Reason;
            const indexModel = {
                ...model,
                core_Resignation_Reason: this.selectedResignationReason,
            };
            this.form.value.id == 0
                ? this.create(indexModel)
                : this.update(indexModel);
        }
        // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        // this.showLoading();
        // this.candidateWorkExperienceService
        //   .create(model)
        //   .subscribe((res: IResponse<ICandidateWorkExperienceModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.addSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.push((0,app_recruitment_mapper_candidate_candidate_work_experience__WEBPACK_IMPORTED_MODULE_0__.candidateWorkExperienceToDisplay)([model], this.resignationReasonOtherId)[0]);
        this.clearForm();
        this.invalidRequiredCount();
        this.updateGeneralData();
    }
    update(model) {
        // this.showLoading();
        // this.candidateWorkExperienceService
        //   .update(model)
        //   .subscribe((res: IResponse<ICandidateWorkExperienceModel>) => {
        //     if (res?.message?.messageType == MessageTypes.Success) {
        //       this.updateSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.clearForm();
        //       this.getAll();
        //     } else this.errorList(res.message.messages);
        //     this.hideLoading();
        //   });
        let mapedModel = (0,app_recruitment_mapper_candidate_candidate_work_experience__WEBPACK_IMPORTED_MODULE_0__.candidateWorkExperienceToDisplay)([model], this.resignationReasonOtherId)[0];
        this.dataSource.data[this.getIndex(mapedModel)] = mapedModel;
        this.clearForm();
        this.updateGeneralData();
    }
    candidateeWorkExperienceToEdit(workExperience) {
        this.form.patchValue(workExperience);
    }
    onDelete(workExperience) {
        let msg = `${workExperience.job} (${workExperience.startDate} - ${workExperience.endDate})`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(workExperience);
        });
    }
    delete(workExperience) {
        // this.showLoading();
        // this.candidateWorkExperienceService
        //   .Delete(workExperience.id)
        //   .subscribe((res: IResponse) => {
        //     if (res.message.messageType == MessageTypes.Success) {
        //       this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
        //       this.getAll();
        //       if (workExperience.id == this.formCtrls.id.value) this.clearForm();
        //     } else this.errorList(res?.message?.messages);
        //     this.hideLoading();
        //   });
        this.dataSource.data.splice(this.getIndex(workExperience), 1);
        this.invalidRequiredCount();
        if (this.formCtrls.id.value == workExperience.id)
            this.clearForm();
        this.updateGeneralData();
    }
    updateGeneralData() {
        let generalModel = [];
        this.dataSource.data.forEach((ele) => {
            let workExperience = { ...ele };
            delete workExperience.id;
            delete workExperience.company;
            delete workExperience.department;
            delete workExperience.job;
            delete workExperience.startDate;
            delete workExperience.endDate;
            delete workExperience.resignationReason;
            delete workExperience.notes;
            delete workExperience.core_Resignation_Reason;
            generalModel.push(workExperience);
        });
        this.candidateService.candidateData$.next({
            ...this.candidateService.candidateData$.getValue(),
            WorkExperincesData: generalModel,
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    getIndex(certification) {
        return this.dataSource.data.findIndex((ele) => ele.id == certification.id);
    }
    getNewId() {
        return (this.dataSource.data.reduce((acc, ele) => (acc = acc > ele.id ? acc : ele.id), 0) + 1);
    }
    onChangeResignationReason(values) {
        if (values.length > 0 && values[0].id == this.resignationReasonOtherId)
            this.formCtrls.resignation_Reason.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
        else
            this.formCtrls.resignation_Reason.clearValidators();
        this.formCtrls.resignation_Reason.updateValueAndValidity();
        this.selectedResignationReason = values.length > 0 ? values[0] : null;
        this.invalidRequiredCount();
    }
    changeDescriptionInfo(isDone, noOfRequiredInputs) {
        this.changeDescription.emit({
            isDone: isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        });
        this.candidateService.isDone$.next({
            ...this.candidateService.isDone$.getValue(),
            // WorkExperincesData: this.descriptionInfo.isDone,
            WorkExperincesData: isDone,
        });
    }
    invalidRequiredCount() {
        if (!(this.dataSource?.data?.length > 0)) {
            let count = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.noOfInvalidAndRequiredInputs(this.form);
            this.changeDescriptionInfo(count == 0 ? true : false, count);
        }
        else
            this.changeDescriptionInfo(true, 0);
    }
}
CandidateWorkExperienceFormComponent.ɵfac = function CandidateWorkExperienceFormComponent_Factory(t) { return new (t || CandidateWorkExperienceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__.CandidateService)); };
CandidateWorkExperienceFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: CandidateWorkExperienceFormComponent, selectors: [["candidate-work-experience-form"]], inputs: { candidateId: "candidateId" }, outputs: { changeDescription: "changeDescription" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 26, consts: [[3, "formGroup"], [1, "row", "mtop-5"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12"], ["label", "company", 3, "control", "submitted", "Blur"], ["label", "department", 3, "control", "submitted", "Blur"], ["label", "job", 3, "control", "submitted", "Blur"], ["label", "startDate", 3, "control", "submitted", "change"], ["label", "endDate", 3, "control", "submitted", "change"], ["label", "salary", "type", "number", 3, "control", "submitted"], [3, "control", "submitted", "filter", "change"], ["label", "resignationReasonIfOther", 3, "control", "submitted", "disabled", "Blur"], ["label", "notes", 3, "control", "submitted"], [1, "col"], [1, "row"], ["class", "btn-large line-height-3 float-md-none float-right", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", "lable", "add", 1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "id", "color", "iconPositionBefore", "onClick"], [4, "ngIf"], [1, "btn-large", "line-height-3", "float-md-none", "float-right", 3, "click"], [1, "w-90", "mtop-5"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function CandidateWorkExperienceFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("Blur", function CandidateWorkExperienceFormComponent_Template_app_input_Blur_3_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 2)(5, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("Blur", function CandidateWorkExperienceFormComponent_Template_app_input_Blur_5_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 2)(7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("Blur", function CandidateWorkExperienceFormComponent_Template_app_input_Blur_7_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 2)(9, "app-datepicker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CandidateWorkExperienceFormComponent_Template_app_datepicker_change_9_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 2)(11, "app-datepicker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CandidateWorkExperienceFormComponent_Template_app_datepicker_change_11_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 2)(15, "app-resignation-reason-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CandidateWorkExperienceFormComponent_Template_app_resignation_reason_dropdown_change_15_listener($event) { return ctx.onChangeResignationReason($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 2)(17, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("Blur", function CandidateWorkExperienceFormComponent_Template_app_input_Blur_17_listener() { return ctx.invalidRequiredCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 12)(21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, CandidateWorkExperienceFormComponent_reset_form_btn_22_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function CandidateWorkExperienceFormComponent_Template_submit_btn_onClick_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, CandidateWorkExperienceFormComponent_ng_container_24_Template, 4, 7, "ng-container", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.companyName)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.org_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.job_Title_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.to_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.companySalary)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.resignationReasonId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.resignation_Reason)("submitted", ctx.submitted)("disabled", ctx.formCtrls.resignationReasonId.value != ctx.resignationReasonOtherId);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoaded || ctx.dataSource.data.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _shared_components_dropdowns_recruitment_resignation_reason_dropdown_resignation_reason_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.ResignationReasonDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtd29yay1leHBlcmllbmNlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 19825:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-info/candidate-work-experience-info.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateWorkExperienceInfoComponent": () => (/* binding */ CandidateWorkExperienceInfoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _candidate_work_experience_form_candidate_work_experience_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-work-experience-form/candidate-work-experience-form.component */ 86532);
/* harmony import */ var _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










function CandidateWorkExperienceInfoComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 2, 3)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "candidate-tab-description", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "candidate-work-experience-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeDescription", function CandidateWorkExperienceInfoComponent_mat_expansion_panel_0_Template_candidate_work_experience_form_changeDescription_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeDescriptionInfo($event, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "workExperience"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isClosedTab", !_r2.expanded)("isDone", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.isDone)("noOfRequiredInputs", ctx_r0.descriptionInfo == null ? null : ctx_r0.descriptionInfo.noOfRequiredInputs);
} }
function CandidateWorkExperienceInfoComponent_mat_card_1_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-actions", 8)(1, "submit-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CandidateWorkExperienceInfoComponent_mat_card_1_mat_card_actions_8_Template_submit_btn_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r5.btn.darkBlue)("iconPositionBefore", false);
} }
function CandidateWorkExperienceInfoComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "candidate-work-experience-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CandidateWorkExperienceInfoComponent_mat_card_1_mat_card_actions_8_Template, 2, 2, "mat-card-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "workExperience")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.candidateId > 0);
} }
class CandidateWorkExperienceInfoComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.candidateId = 2;
        this.isView = false;
    }
    ngOnInit() {
    }
    changeDescriptionInfo(info, noOfRequiredInputs) {
        this.descriptionInfo = {
            isDone: info.isDone,
            noOfRequiredInputs: noOfRequiredInputs,
        };
    }
    submit() {
    }
}
CandidateWorkExperienceInfoComponent.ɵfac = function CandidateWorkExperienceInfoComponent_Factory(t) { return new (t || CandidateWorkExperienceInfoComponent)(); };
CandidateWorkExperienceInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CandidateWorkExperienceInfoComponent, selectors: [["candidate-work-experience-info"]], inputs: { candidateId: "candidateId", isView: "isView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["expanded", "", 4, "ngIf"], [4, "ngIf"], ["expanded", ""], ["tab", ""], [3, "isClosedTab", "isDone", "noOfRequiredInputs"], [3, "changeDescription"], [1, "mt-5"], ["align", "end", 4, "ngIf"], ["align", "end"], ["icon", "ft-save", "label", "save", 3, "color", "iconPositionBefore", "onClick"]], template: function CandidateWorkExperienceInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CandidateWorkExperienceInfoComponent_mat_expansion_panel_0_Template, 8, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CandidateWorkExperienceInfoComponent_mat_card_1_Template, 9, 6, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isView);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_1__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _candidate_work_experience_form_candidate_work_experience_form_component__WEBPACK_IMPORTED_MODULE_2__.CandidateWorkExperienceFormComponent, _shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_3__.CandidateTabDescriptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtd29yay1leHBlcmllbmNlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 64259:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-table/candidate-work-experience-table.component.ts ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateWorkExperienceTableComponent": () => (/* binding */ CandidateWorkExperienceTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);






class CandidateWorkExperienceTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.isMatPaginator = false;
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.mandatoryColomns = [
            "company",
            "department",
            "job",
            "start_date",
            "end_date",
            "start_date",
            "end_date",
            "notes",
            "actions",
        ];
        this.optionalColomns = [];
        this.hideActions = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.candidate_Working_Experience_info_sec);
    }
    ngOnInit() {
    }
    getList(page, pageSize) {
    }
    onDelete(contactInfo) {
        let msg = this.msgTranslate(contactInfo.ar_Name, contactInfo.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(contactInfo);
        });
    }
    delete(contact) {
        this.showLoading('table');
    }
}
CandidateWorkExperienceTableComponent.ɵfac = function CandidateWorkExperienceTableComponent_Factory(t) { return new (t || CandidateWorkExperienceTableComponent)(); };
CandidateWorkExperienceTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CandidateWorkExperienceTableComponent, selectors: [["candidate-work-experience-table"]], inputs: { isMatPaginator: "isMatPaginator", hideActions: "hideActions" }, outputs: { afterDelete: "afterDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 12, consts: [[1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "isMatPaginator", "showFirstLastButtons", "showFilter", "showSpaceTop", "onChangePage"], [3, "name"]], template: function CandidateWorkExperienceTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-material-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChangePage", function CandidateWorkExperienceTableComponent_Template_app_material_table_onChangePage_0_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("isMatPaginator", ctx.isMatPaginator)("showFirstLastButtons", false)("showFilter", false)("showSpaceTop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtd29yay1leHBlcmllbmNlLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 26530:
/*!***************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/candidate-index/candidate-index/candidate-index.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateIndexComponent": () => (/* binding */ CandidateIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_candidate_candidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/candidate/candidate */ 78700);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _delete_candidate_dialog_delete_candidate_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-candidate-dialog/delete-candidate-dialog.component */ 92353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/recruitment/services/candidate/candidate.service */ 61076);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function CandidateIndexComponent_mat_card_title_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title", 12)(1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 6, "JobRequisitions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 8, "OpenVacances"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 10, "NoOfCandidates"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 12, "Pending"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 14, "Accepted"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 16, "Rejected"), " ");
} }
function CandidateIndexComponent_mat_card_11_app_material_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-material-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function CandidateIndexComponent_mat_card_11_app_material_table_1_Template_app_material_table_onChangePage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.getList($event.pageIndex + 1, $event.pageSize)); })("deleteRow", function CandidateIndexComponent_mat_card_11_app_material_table_1_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx_r3.isLoaded)("mandatoryColomns", ctx_r3.mandatoryColomns)("optionalColomns", ctx_r3.optionalColomns)("page", ctx_r3.page)("dataSource", ctx_r3.dataSource)("actions", ctx_r3.rowFunctions)("exportService", ctx_r3.candidateService);
} }
function CandidateIndexComponent_mat_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CandidateIndexComponent_mat_card_11_app_material_table_1_Template, 1, 7, "app-material-table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isTable);
} }
const _c0 = function (a0) { return { "border-color": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
function CandidateIndexComponent_div_12_mat_expansion_panel_2_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-menu", 35, 36)(7, "a", 37)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CandidateIndexComponent_div_12_mat_expansion_panel_2_div_17_Template_a_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const candidate_r12 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.openDeleteCardDialog(candidate_r12)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-card-content")(19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-card-footer", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const candidate_r12 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, candidate_r12.status == "1" ? "#40C057" : candidate_r12.status == "7" ? "#F55252" : "576579"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r11.fileService.preview(candidate_r12.img), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 10, "asignTORequest"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 12, "General.delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", candidate_r12.fullName, " ", candidate_r12.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", candidate_r12.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c1, candidate_r12.status == "1" ? "#40C057" : candidate_r12.status == "7" ? "#F55252" : "576579"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", candidate_r12.statusProperty, " ");
} }
function CandidateIndexComponent_div_12_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-expansion-panel", 22, 23)(2, "mat-expansion-panel-header")(3, "mat-panel-title", 24)(4, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CandidateIndexComponent_div_12_mat_expansion_panel_2_div_17_Template, 25, 18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.msgTranslate(item_r9.jobTitleNameAr, item_r9.jobTitleName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9.openVacances, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9.numOfCandidates, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9.pendingNum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9.acceptededNum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9.rejectedNum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r9.candidateList);
} }
function CandidateIndexComponent_div_12_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "p-skeleton", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c2 = function () { return []; };
function CandidateIndexComponent_div_12_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CandidateIndexComponent_div_12_ng_container_3_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c2).constructor(6));
} }
function CandidateIndexComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CandidateIndexComponent_div_12_mat_expansion_panel_2_Template, 18, 7, "mat-expansion-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CandidateIndexComponent_div_12_ng_container_3_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.candidateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isCardLoaded);
} }
class CandidateIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(candidateService, dialog) {
        super();
        this.candidateService = candidateService;
        this.dialog = dialog;
        this.isLoaded = false;
        this.isCardLoaded = false;
        this.isTable = true;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "code",
            "photo",
            "fullName",
            "organization",
            "jobTitleName",
            "phone",
            "email",
            "actions",
        ];
        this.optionalColomns = [];
        this.candidateList = [];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
            this.getListCard();
        }
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
        this.candidateService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource((0,app_recruitment_mapper_candidate_candidate__WEBPACK_IMPORTED_MODULE_0__.candidateToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    getListCard() {
        this.isCardLoaded = false;
        this.candidateService
            .getListCard()
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                res.data.forEach((element) => {
                    this.candidateList.push({
                        requestID: element.requestID,
                        jobTitleName: element.jobTitleName,
                        jobTitleNameAr: element.jobTitleNameAr,
                        candidateList: (0,app_recruitment_mapper_candidate_candidate__WEBPACK_IMPORTED_MODULE_0__.candidateToDisplay)(element.candidateList),
                        numOfCandidates: element.numOfCandidates,
                        pendingNum: element.pendingNum,
                        rejectedNum: element.rejectedNum,
                        acceptededNum: element.acceptededNum,
                        openVacances: element.openVacances,
                    });
                    this.isCardLoaded = true;
                });
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(candidate) {
        let msg = this.msgTranslate(candidate.ar_Name, candidate.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(candidate);
        });
    }
    openDeleteCardDialog(candidate) {
        return this.dialog
            .open(_delete_candidate_dialog_delete_candidate_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DeleteCandidateDialogComponent, {
            autoFocus: false,
            disableClose: true,
            minWidth: 600,
            data: {
                name: this.msgTranslate(candidate.ar_Name, candidate.en_Name)
            }
        })
            .afterClosed().subscribe((confirm) => {
            if (confirm)
                this.delete(candidate);
        });
    }
    delete(candidate) {
        this.showLoading();
        this.candidateService.Delete(candidate.id).subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                if (this.isTable) {
                    if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                        this.getList(this.prevPage, this.page.pageSize);
                    }
                    else {
                        this.getList(this.currentPage, this.page.pageSize);
                    }
                }
                else {
                    this.candidateList = [];
                    this.getListCard();
                }
                this.deleteSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    switchTable(switchTable) {
        this.isTable = switchTable;
        if (this.candidateList.length == 0) {
            this.getListCard();
        }
    }
}
CandidateIndexComponent.ɵfac = function CandidateIndexComponent_Factory(t) { return new (t || CandidateIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_recruitment_services_candidate_candidate_service__WEBPACK_IMPORTED_MODULE_4__.CandidateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog)); };
CandidateIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CandidateIndexComponent, selectors: [["app-candidate-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 6, consts: [[1, "title-no-margin", "title-section", "fixed-title"], ["title", "candidates", 3, "globalFunctions"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "float-right"], [3, "ngClass", "click"], [1, "fa", "fa-list"], [1, "fa", "fa-bars"], ["class", "fixed-title title-section second-section mtop-85", 4, "ngIf"], [1, "row"], [1, "col-12", "has-fixed-title"], [1, "container-fluid"], ["class", "index-card mtop-40", 4, "ngIf"], [4, "ngIf"], [1, "fixed-title", "title-section", "second-section", "mtop-85"], [1, "row", "has-title", "text-center"], [1, "col-6", "col-md-2"], [1, "col-6", "col-md-2", "success"], [1, "col-6", "col-md-2", "danger"], [1, "index-card", "mtop-40"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "dataSource", "actions", "exportService", "onChangePage", "deleteRow", 4, "ngIf"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "dataSource", "actions", "exportService", "onChangePage", "deleteRow"], [1, "sub-fixed-section"], ["expanded", "", "class", "mt-2", 4, "ngFor", "ngForOf"], ["expanded", "", 1, "mt-2"], ["tab", ""], [1, "row", "text-center", "mt-5"], [1, "col-3", "col-md-2"], [1, "col-3", "col-md-2", "success"], [1, "col-3", "col-md-2", "danger"], [1, "row", "mt-2"], ["class", "col-12 col-md-2", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-2"], [1, "card", "mb-5", "text-center", 3, "ngStyle"], ["mat-card-image", "", 3, "src"], [1, "card-icon", "text-center", 3, "matMenuTriggerFor"], [1, "ft-more-vertical"], ["xPosition", "before", 1, "text-center"], ["menuRow", "matMenu"], ["mat-menu-item", ""], [1, "pi", "pi-file-edit"], ["mat-menu-item", "", 3, "click"], [1, "danger"], [1, "pi", "pi-trash", "mr-2"], [3, "ngStyle"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "col-2"], ["size", "15rem"]], template: function CandidateIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CandidateIndexComponent_Template_button_click_3_listener() { return ctx.switchTable(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CandidateIndexComponent_Template_button_click_5_listener() { return ctx.switchTable(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CandidateIndexComponent_mat_card_title_7_Template, 20, 18, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "mat-card-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CandidateIndexComponent_mat_card_11_Template, 2, 1, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CandidateIndexComponent_div_12_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.isTable ? "btn btn-darkBlue float-right" : "btn float-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.isTable ? "btn float-right" : "btn  btn-darkBlue float-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isTable);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardImage, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelTitle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__.Skeleton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".has-fixed-title[_ngcontent-%COMP%] {\n  margin-top: 45px !important;\n}\n\n.sub-fixed-section[_ngcontent-%COMP%] {\n  margin-top: 115px !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  border: 3px solid #576579;\n  padding: 16px !important;\n}\n\nmat-card-footer[_ngcontent-%COMP%] {\n  background-color: #576579;\n  color: aliceblue;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 9px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 5px;\n  color: aliceblue;\n}\n\n.mat-card-title[_ngcontent-%COMP%]:not(:first-child) {\n  width: 96% !important;\n  margin-left: 40px !important;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 45px !important;\n}\n\nmat-card-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 3px;\n}\n\n  .mat-menu-panel {\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 18px !important;\n  margin-right: 40px;\n  margin-top: -28px;\n}\n\n.mat-menu-item[_ngcontent-%COMP%], mat-divider[_ngcontent-%COMP%] {\n  color: aliceblue;\n  margin: 10px;\n}\n\n@media (max-width: 580px) {\n  .sub-fixed-section[_ngcontent-%COMP%] {\n    margin-top: 165px !important;\n  }\n  .mat-expansion-panel-header[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-bottom: 70px !important;\n  }\n  .has-fixed-title[_ngcontent-%COMP%] {\n    margin-top: 55px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmRpZGF0ZS1pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0FBSUY7O0FBREE7RUFDRSw4QkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBRkE7RUFDRTtJQUNFLDRCQUFBO0VBS0Y7RUFIQTtJQUNFLGdCQUFBO0lBQ0EsOEJBQUE7RUFLRjtFQUhBO0lBQ0UsMkJBQUE7RUFLRjtBQUNGIiwiZmlsZSI6ImNhbmRpZGF0ZS1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYXMtZml4ZWQtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDQ1cHggIWltcG9ydGFudDtcclxufVxyXG4uc3ViLWZpeGVkLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDExNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NzY1Nzk7XHJcbiAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1jYXJkLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3NjU3OTtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY2FyZCBpbWcge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDlweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHggIWltcG9ydGFudDtcclxufVxyXG5tYXQtY2FyZC1mb290ZXIgaSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtMjhweDtcclxuXHJcbn1cclxuLm1hdC1tZW51LWl0ZW0gLG1hdC1kaXZpZGVyICB7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5zdWItZml4ZWQtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaGFzLWZpeGVkLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDU1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 92353:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/candidate-index/delete-candidate-dialog/delete-candidate-dialog.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteCandidateDialogComponent": () => (/* binding */ DeleteCandidateDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






class DeleteCandidateDialogComponent {
    constructor(data, dialogRef, messageService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.messageService = messageService;
    }
    ngOnInit() {
    }
    onConfirm() {
        this.messageService.clear('delete');
        this.dialogRef.close(true);
    }
    onReject() {
        this.messageService.clear('delete');
        this.dialogRef.close(false);
    }
}
DeleteCandidateDialogComponent.ɵfac = function DeleteCandidateDialogComponent_Factory(t) { return new (t || DeleteCandidateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService)); };
DeleteCandidateDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteCandidateDialogComponent, selectors: [["app-delete-candidate-dialog"]], decls: 18, vars: 13, consts: [[1, "float-left", "mb-3", "w-30"], [1, "float-right"], ["type", "button", 1, "btn", "btn-danger", "mr-2", 3, "click"], [1, "pi", "pi-trash", "mr-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"]], template: function DeleteCandidateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider", 0)(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCandidateDialogComponent_Template_button_click_11_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCandidateDialogComponent_Template_button_click_15_listener() { return ctx.onReject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "General.confirmDelete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "deleteCandidate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \"", ctx.data.name, "?\"\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "General.delete"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "General.noThanks"), " ");
    } }, dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["mat-divider[_ngcontent-%COMP%] {\n  border-top-width: 4px;\n  border-top-style: solid;\n  border-top-color: #374761 !important;\n  border-radius: 2px;\n}\n\np[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jYW5kaWRhdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRiIsImZpbGUiOiJkZWxldGUtY2FuZGlkYXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaXZpZGVyIHtcclxuICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM3NDc2MSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbnB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 53177:
/*!*****************************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/recruiting-process/recruiting-process.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitingProcessComponent": () => (/* binding */ RecruitingProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class RecruitingProcessComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecruitingProcessComponent.ɵfac = function RecruitingProcessComponent_Factory(t) { return new (t || RecruitingProcessComponent)(); };
RecruitingProcessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecruitingProcessComponent, selectors: [["app-recruiting-process"]], decls: 2, vars: 0, template: function RecruitingProcessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "recruiting-process works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0aW5nLXByb2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 98621:
/*!*********************************************************************************************!*\
  !*** ./src/app/recruitment/components/candidate/view-candidate/view-candidate.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCandidateComponent": () => (/* binding */ ViewCandidateComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/local-storage */ 66606);
/* harmony import */ var app_shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/languages.enum */ 88367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-device-detector */ 81431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/skeletons/employee/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 95981);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/image */ 21478);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var _recruiting_process_recruiting_process_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recruiting-process/recruiting-process.component */ 53177);
/* harmony import */ var _add_candidate_general_info_candidate_general_info_candidate_general_info_core_candidate_general_info_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-candidate/general-info/candidate-general-info/candidate-general-info-core/candidate-general-info-core.component */ 51762);
/* harmony import */ var _add_candidate_general_info_candidate_basic_info_candidate_basic_info_core_candidate_basic_info_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-candidate/general-info/candidate-basic-info/candidate-basic-info-core/candidate-basic-info-core.component */ 6066);
/* harmony import */ var _add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_core_candidate_contact_core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-core/candidate-contact-core.component */ 7985);
/* harmony import */ var _add_candidate_work_experience_candidate_work_experience_candidate_work_experience_core_candidate_work_experience_core_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-candidate/work-experience/candidate-work-experience/candidate-work-experience-core/candidate-work-experience-core.component */ 84098);
/* harmony import */ var _add_candidate_education_candidate_education_candidate_education_core_candidate_education_core_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../add-candidate/education/candidate-education/candidate-education-core/candidate-education-core.component */ 33305);
/* harmony import */ var _add_candidate_education_candidate_training_candidate_training_core_candidate_training_core_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-candidate/education/candidate-training/candidate-training-core/candidate-training-core.component */ 19799);
/* harmony import */ var _add_candidate_education_candidate_certifications_candidate_certification_core_candidate_certification_core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../add-candidate/education/candidate-certifications/candidate-certification-core/candidate-certification-core.component */ 42233);
/* harmony import */ var _add_candidate_work_experience_candidate_related_requests_candidate_related_requests_core_candidate_related_requests_core_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../add-candidate/work-experience/candidate-related-requests/candidate-related-requests-core/candidate-related-requests-core.component */ 19347);
/* harmony import */ var _add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_core_candidate_suitable_requisitions_core_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-core/candidate-suitable-requisitions-core.component */ 95094);
/* harmony import */ var _add_candidate_work_experience_candidate_reference_candidate_reference_core_candidate_reference_core_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../add-candidate/work-experience/candidate-reference/candidate-reference-core/candidate-reference-core.component */ 67237);
/* harmony import */ var _add_candidate_work_experience_candidate_documents_candidate_document_core_candidate_document_core_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../add-candidate/work-experience/candidate-documents/candidate-document-core/candidate-document-core.component */ 54537);




























const _c0 = ["tabGroup"];
function ViewCandidateComponent_app_add_new_btn_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-add-new-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onClick", function ViewCandidateComponent_app_add_new_btn_13_Template_app_add_new_btn_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r8.onAddNew()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("url", "/recruitment/", ctx_r0.moduleId, "/candidate/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function ViewCandidateComponent_ng_container_18_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ViewCandidateComponent_ng_container_18_ng_container_1_ng_template_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); const i_r12 = ctx_r16.index; const tab_r11 = ctx_r16.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); ctx_r14.activeTab = i_r12; return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r14.scrollToSection($event, tab_r11.viewName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "page-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tab_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", tab_r11.name);
} }
function ViewCandidateComponent_ng_container_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ViewCandidateComponent_ng_container_18_ng_container_1_ng_template_2_Template, 3, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} }
function ViewCandidateComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ViewCandidateComponent_ng_container_18_ng_container_1_Template, 3, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r2.customViews);
} }
function ViewCandidateComponent_ng_template_19_mat_tab_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "p-skeleton", 26);
} }
function ViewCandidateComponent_ng_template_19_mat_tab_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ViewCandidateComponent_ng_template_19_mat_tab_0_ng_template_1_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [1, 2, 3, 4, 5, 6, 7]; };
function ViewCandidateComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, ViewCandidateComponent_ng_template_19_mat_tab_0_Template, 2, 0, "mat-tab", 21);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](1, _c1));
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28)(1, "candidate-general-info-core", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("changeCandidateId", function ViewCandidateComponent_ng_container_22_ng_container_1_div_1_Template_candidate_general_info_core_changeCandidateId_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r35.changeCandidateId($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-basic-info-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-contact-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-education-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-training-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-certification-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-work-experience-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-suitable-requisitions-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-related-requests-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-reference-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "candidate-document-core");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-recruiting-process");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", tab_r22.viewName);
} }
function ViewCandidateComponent_ng_container_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ViewCandidateComponent_ng_container_22_ng_container_1_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ViewCandidateComponent_ng_container_22_ng_container_1_div_2_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, ViewCandidateComponent_ng_container_22_ng_container_1_div_3_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, ViewCandidateComponent_ng_container_22_ng_container_1_div_4_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, ViewCandidateComponent_ng_container_22_ng_container_1_div_5_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ViewCandidateComponent_ng_container_22_ng_container_1_div_6_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ViewCandidateComponent_ng_container_22_ng_container_1_div_7_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ViewCandidateComponent_ng_container_22_ng_container_1_div_8_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ViewCandidateComponent_ng_container_22_ng_container_1_div_9_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, ViewCandidateComponent_ng_container_22_ng_container_1_div_10_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, ViewCandidateComponent_ng_container_22_ng_container_1_div_11_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, ViewCandidateComponent_ng_container_22_ng_container_1_div_12_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_general_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_basic_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_contact_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_education_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_training_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_certification_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.Working_Experience_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_Suitable_Requisitions_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_Suitable_Requisitions_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_Reference_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_Documents_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", tab_r22.viewName == ctx_r21.viewsManager.candidate_Recruiting_Process_info_tab);
} }
function ViewCandidateComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ViewCandidateComponent_ng_container_22_ng_container_1_Template, 13, 12, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.customViews);
} }
function ViewCandidateComponent_ng_template_23_div_1_div_6_mat_divider_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "mat-divider");
} }
function ViewCandidateComponent_ng_template_23_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-employee-profile-card-skeleton", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ViewCandidateComponent_ng_template_23_div_1_div_6_mat_divider_2_Template, 1, 0, "mat-divider", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lst_r53 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("rowNo", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !lst_r53);
} }
const _c2 = function () { return [1, 2]; };
function ViewCandidateComponent_ng_template_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 31)(1, "mat-card")(2, "mat-card-title", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "p-skeleton", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "mat-card-content")(5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ViewCandidateComponent_ng_template_23_div_1_div_6_Template, 3, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](1, _c2));
} }
function ViewCandidateComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ViewCandidateComponent_ng_template_23_div_1_Template, 7, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function (a0) { return { "--custom-width": a0 }; };
class ViewCandidateComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(deviceService) {
        super();
        this.deviceService = deviceService;
        this.candidateId = 0;
        this.isOnScrollToSection = false;
        this.firstScroll = true;
        this.activeTab = 0;
        this.customBorderWidth = "100%";
        this.activatedRoute.params.subscribe((params) => {
            this.candidateId = Number(params.candidateId);
        });
    }
    ngOnInit() { }
    onAddNew() {
        this.ngOnDestroy();
    }
    changeCandidateId(candidateId) {
        this.candidateId = candidateId;
    }
    onModulesChanged() {
        setTimeout(() => {
            this.updateMatTabsPosition();
        }, 0);
    }
    scrollToSection(event, sectionId) {
        this.isOnScrollToSection = true;
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            let top = element.offsetTop;
            window.scroll({ top: top, behavior: "smooth" });
        }
        setTimeout(() => {
            this.isOnScrollToSection = false;
        }, 1000);
    }
    updateMatTabsPosition() {
        let tabPositions = this.tabGroup._elementRef.nativeElement.getBoundingClientRect();
        if (app_shared_resources_local_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getLocalLang == app_shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_2__.Languages.en &&
            (tabPositions.left > 100 ||
                this.tabGroup._elementRef.nativeElement.offsetTop + 120)) {
            this.customBorderWidth = `${window.innerWidth - tabPositions.left}px`;
        }
        else if (app_shared_resources_local_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getLocalLang == app_shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_2__.Languages.ar &&
            (window.innerWidth - tabPositions.left - tabPositions.width > 100 ||
                this.tabGroup._elementRef.nativeElement.offsetTop + 120)) {
            this.customBorderWidth = `${window.innerWidth -
                (window.innerWidth - tabPositions.left - tabPositions.width)}px`;
        }
        else
            this.customBorderWidth = "100%";
    }
    onScroll($event) {
        if (this.firstScroll) {
            window.scrollTo(0, 0);
            this.activeTab = 0;
            setTimeout(() => {
                this.firstScroll = false;
            }, 2000);
        }
        let scrollTop = window.pageYOffset;
        const element = document.getElementById("top-tools");
        if (scrollTop >= this.tabGroup._elementRef.nativeElement.offsetTop + 120) {
            this.tabGroup._elementRef.nativeElement.classList.add("nav-fixed");
            element.classList.add("mt-2");
        }
        else {
            this.tabGroup._elementRef.nativeElement.classList.remove("nav-fixed");
            element.classList.remove("mt-2");
        }
        this.updateMatTabsPosition();
        if (!this.isOnScrollToSection) {
            // change active tab
            this.customViews?.forEach((sec, index) => {
                const element = document.getElementById(sec.viewName);
                if (scrollTop >= element.offsetTop) {
                    this.activeTab = index;
                }
            });
        }
    }
    onResize() {
        // this.checkForOverflow();
        this.updateMatTabsPosition();
    }
    ngOnDestroy() {
    }
}
ViewCandidateComponent.ɵfac = function ViewCandidateComponent_Factory(t) { return new (t || ViewCandidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_20__.DeviceDetectorService)); };
ViewCandidateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: ViewCandidateComponent, selectors: [["app-view-candidate"]], viewQuery: function ViewCandidateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.tabGroup = _t.first);
    } }, hostBindings: function ViewCandidateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("scroll", function ViewCandidateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresolveWindow"])("resize", function ViewCandidateComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 18, consts: [[1, "add-employee-container"], [1, "rounded-0"], [1, "row"], [1, "col-12", "col-sm-7"], [1, "media", "user-box", "d-flex", "align-items-center"], ["imageClass", "users-avatar-shadow avatar", "alt", "User Profile Image", 3, "src", "preview", "height", "width"], [1, "media-body", "ml-3"], [1, "mb-1"], [1, "users-view-name"], ["width", "8rem", "height", ".5rem"], [1, "col-12", "col-sm-5", "d-flex", "justify-content-end", "align-items-center"], [3, "url", "params", "onClick", 4, "ngIf"], [3, "url", "params"], [1, "col-12"], ["animationDuration", "0ms", 1, "w-100", "view-tabs-group", "emp-group", 3, "dir", "selectedIndex"], ["tabGroup", ""], [4, "ngIf", "ngIfElse"], ["tabsLoading", ""], ["id", "top-tools", 1, "pb-4", "pl-4", "pr-4", "pt-2"], ["loading", ""], [3, "url", "params", "onClick"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""], [1, "tab-link", 3, "click"], [1, "d-sm-inline-block"], [1, "font-size-15", 3, "title"], ["width", "8rem", "height", "2rem"], ["class", "mbottom-10", 3, "id", 4, "ngIf"], [1, "mbottom-10", 3, "id"], [3, "changeCandidateId"], ["class", "col-12 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "mb-3"], [1, "border-bottom", "pb-2"], ["width", "7rem", "styleClass", "p-mb-2", "borderRadius", "10px"], ["class", "col-12 mb-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mb-2"], [3, "rowNo"], [4, "ngIf"]], template: function ViewCandidateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content")(3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "p-image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 6)(8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "p-skeleton", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, ViewCandidateComponent_app_add_new_btn_13_Template, 1, 2, "app-add-new-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "app-back-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 13)(16, "mat-tab-group", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, ViewCandidateComponent_ng_container_18_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, ViewCandidateComponent_ng_template_19_Template, 1, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, ViewCandidateComponent_ng_container_22_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, ViewCandidateComponent_ng_template_23_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](20);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("preview", true)("height", ctx.deviceService.isMobile() ? "40" : "80")("width", ctx.deviceService.isMobile() ? "40" : "80");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.candidateId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("url", "/recruitment/", ctx.moduleId, "/candidate/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](16, _c3, ctx.customBorderWidth));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassProp"]("no-active-tab", !ctx.customViews);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr")("selectedIndex", ctx.activeTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.customViews)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.customViews)("ngIfElse", _r6);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_3__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_4__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _shared_skeletons_employee_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_6__.EmployeeProfileCardSkeletonComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDivider, primeng_image__WEBPACK_IMPORTED_MODULE_26__.Image, primeng_skeleton__WEBPACK_IMPORTED_MODULE_27__.Skeleton, _recruiting_process_recruiting_process_component__WEBPACK_IMPORTED_MODULE_7__.RecruitingProcessComponent, _add_candidate_general_info_candidate_general_info_candidate_general_info_core_candidate_general_info_core_component__WEBPACK_IMPORTED_MODULE_8__.CandidateGeneralInfoCoreComponent, _add_candidate_general_info_candidate_basic_info_candidate_basic_info_core_candidate_basic_info_core_component__WEBPACK_IMPORTED_MODULE_9__.CandidateBasicInfoCoreComponent, _add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_core_candidate_contact_core_component__WEBPACK_IMPORTED_MODULE_10__.CandidateContactCoreComponent, _add_candidate_work_experience_candidate_work_experience_candidate_work_experience_core_candidate_work_experience_core_component__WEBPACK_IMPORTED_MODULE_11__.CandidateWorkExperienceCoreComponent, _add_candidate_education_candidate_education_candidate_education_core_candidate_education_core_component__WEBPACK_IMPORTED_MODULE_12__.CandidateEducationCoreComponent, _add_candidate_education_candidate_training_candidate_training_core_candidate_training_core_component__WEBPACK_IMPORTED_MODULE_13__.CandidateTrainingCoreComponent, _add_candidate_education_candidate_certifications_candidate_certification_core_candidate_certification_core_component__WEBPACK_IMPORTED_MODULE_14__.CandidateCertificationCoreComponent, _add_candidate_work_experience_candidate_related_requests_candidate_related_requests_core_candidate_related_requests_core_component__WEBPACK_IMPORTED_MODULE_15__.CandidateRelatedRequestsCoreComponent, _add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_core_candidate_suitable_requisitions_core_component__WEBPACK_IMPORTED_MODULE_16__.CandidateSuitableRequisitionsCoreComponent, _add_candidate_work_experience_candidate_reference_candidate_reference_core_candidate_reference_core_component__WEBPACK_IMPORTED_MODULE_17__.CandidateReferenceCoreComponent, _add_candidate_work_experience_candidate_documents_candidate_document_core_candidate_document_core_component__WEBPACK_IMPORTED_MODULE_18__.CandidateDocumentCoreComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

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
                this.errorList(res?.message?.messages);
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
                this.errorList(res?.message?.messages);
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
                }, 1000);
                this.hideLoading("form");
            }
            else
                this.errorList(res?.message?.messages);
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
                this.errorList(res?.message?.messages);
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
                this.errorList(res?.message?.messages);
            this.hideLoading("form");
        });
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
    onChangeJobTitle(values) {
        this.showJobTitleDetails = values?.length > 0 ? true : false;
    }
}
AddRecruitmentRequestComponent.ɵfac = function AddRecruitmentRequestComponent_Factory(t) { return new (t || AddRecruitmentRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_4__.RecruitmentRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_organization_types_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationTypesService)); };
AddRecruitmentRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: AddRecruitmentRequestComponent, selectors: [["app-add-recruitment-request"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 50, consts: [[3, "name"], [1, "title-no-margin", "title-section", "fixed-title"], ["addTitle", "addRecruitmentRequest", "editTitle", "editRecruitmentRequest", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "row"], [1, "col-12", "has-fixed-title"], [1, "form-card", "sub-fixed-section"], ["container", ""], [1, "title-no-margin"], ["title", "generalInfoAboutRequest"], [1, "container-fluid", "mtop-20"], [1, "col-12"], [3, "formGroup"], [1, "col-md-6", "col-lg-3", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "orgTypeControl", "submitted", "filter"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter", "change"], [1, "mtop-12", "mbottom-12", 3, "label", "icon", "color", "iconPositionBefore", "disabled", "onClick"], [3, "control", "submitted", "inculdeBoth"], ["type", "number", "label", "vacantPlaces", 3, "control", "submitted"], ["label", "fromDateExpected", 3, "control", "submitted"], ["label", "toDateExpected", 3, "control", "submitted"], ["label", "otherRequirment", 3, "control", "submitted"], ["label", "notes", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], ["icon", "pi pi-plus-circle", 3, "id", "color", "iconPositionBefore", "onClick"], [3, "jobTitleId"], [3, "click"]], template: function AddRecruitmentRequestComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_recruitment_mapper_recruitment_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/recruitment/mapper/recruitment-request */ 87420);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/recruitment/services/recruitment-request.service */ 71180);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












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
        this.recruitmentRequestService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource((0,app_recruitment_mapper_recruitment_request__WEBPACK_IMPORTED_MODULE_0__.recruitmentRequestToDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
RecruitmentRequestIndexComponent.ɵfac = function RecruitmentRequestIndexComponent_Factory(t) { return new (t || RecruitmentRequestIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_recruitment_services_recruitment_request_service__WEBPACK_IMPORTED_MODULE_3__.RecruitmentRequestService)); };
RecruitmentRequestIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: RecruitmentRequestIndexComponent, selectors: [["app-recruitment-request-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 12, consts: [[1, "index-card"], ["title", "recruitmentRequest", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function RecruitmentRequestIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function RecruitmentRequestIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function RecruitmentRequestIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "side-helping-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-dashboard-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.recruitmentRequestService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0bWVudC1yZXF1ZXN0LWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 84948:
/*!*************************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-certification.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateCertificationToDisplay": () => (/* binding */ candidateCertificationToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateCertificationToDisplay(data) {
    return data.map((certification) => {
        return {
            ...certification,
            certification: certification.certification_Name,
            location: certification.location_Name,
            startDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(certification.from_Date),
            endDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(certification.to_Date),
            notes: certification.note,
        };
    });
}


/***/ }),

/***/ 37613:
/*!************************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-contact-info.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateContactToDisplay": () => (/* binding */ candidateContactToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateContactToDisplay(data) {
    return data.map((contact) => {
        return {
            ...contact,
            contactType: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(contact.comm_Contact?.comm_Contact_Type?.ar_Name, contact.comm_Contact?.comm_Contact_Type?.en_Name),
            value: contact.comm_Contact?.value,
        };
    });
}


/***/ }),

/***/ 19515:
/*!*********************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-documents.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateDocumentsToDisplay": () => (/* binding */ candidateDocumentsToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateDocumentsToDisplay(data) {
    return data.map((document) => {
        return {
            ...document,
            attachmentType: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(document.comm_Attachment_Type?.ar_Name, document.comm_Attachment_Type?.en_Name),
        };
    });
}


/***/ }),

/***/ 39625:
/*!*********************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-education.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateEducationToDisplay": () => (/* binding */ candidateEducationToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateEducationToDisplay(data) {
    return data.map((education) => {
        return {
            ...education,
            institution: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(education.comm_Institution?.ar_Name, education.comm_Institution?.en_Name),
            academicQualifications: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(education.comm_Education_Degree?.ar_Name, education.comm_Education_Degree?.en_Name),
            grade: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(education.comm_Grade_Type?.ar_Name, education.comm_Grade_Type?.en_Name),
        };
    });
}


/***/ }),

/***/ 33456:
/*!*********************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-reference.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateReferenceToDisplay": () => (/* binding */ candidateReferenceToDisplay)
/* harmony export */ });
function candidateReferenceToDisplay(data) {
    return data.map((reference) => {
        return {
            ...reference,
            company: reference.company_Name,
            reference: reference.refrence_Name,
            mobileNumber: reference.phone,
            notes: reference.note,
        };
    });
}


/***/ }),

/***/ 51053:
/*!****************************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-related-requests.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateRelatedRequestsToDisplay": () => (/* binding */ candidateRelatedRequestsToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateRelatedRequestsToDisplay(data) {
    return data.map((jobInfo) => {
        return {
            ...jobInfo,
            plan: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(jobInfo?.rec_Plan?.ar_Name, jobInfo?.rec_Plan?.en_Name),
            request: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(jobInfo?.rec_Request?.job_Title?.ar_Name, jobInfo?.rec_Request?.job_Title?.en_Name),
        };
    });
}


/***/ }),

/***/ 51209:
/*!*********************************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-suitable-requisitions.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateSuitableRequisitionsToDisplay": () => (/* binding */ candidateSuitableRequisitionsToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateSuitableRequisitionsToDisplay(data) {
    return data.map((jobInfo) => {
        return {
            ...jobInfo,
            organization: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(jobInfo?.core_Org?.ar_Name, jobInfo?.core_Org?.en_Name),
            type: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(jobInfo?.core_Org_TYPE?.ar_Name, jobInfo?.core_Org_TYPE?.en_Name),
            job: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(jobInfo?.core_Job_Title?.ar_Name, jobInfo?.core_Job_Title?.en_Name),
        };
    });
}


/***/ }),

/***/ 22575:
/*!********************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-training.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateTrainingToDisplay": () => (/* binding */ candidateTrainingToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateTrainingToDisplay(data) {
    return data.map((training) => {
        return {
            ...training,
            institution: training.center_Name,
            course: training.course_Name,
            startDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(training.from_Date),
            endDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(training.to_Date),
            notes: training.note,
        };
    });
}


/***/ }),

/***/ 71368:
/*!***************************************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate-work-experience.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateWorkExperienceToDisplay": () => (/* binding */ candidateWorkExperienceToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateWorkExperienceToDisplay(data, resignationReasonOtherId) {
    return data.map((workExperience) => {
        return {
            ...workExperience,
            company: workExperience.companyName,
            department: workExperience.org_Name,
            job: workExperience.job_Title_Name,
            startDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(workExperience.from_Date),
            endDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(workExperience.to_Date),
            resignationReason: resignationReasonOtherId != workExperience.resignationReasonId
                ? (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(workExperience.core_Resignation_Reason?.ar_Name, workExperience.core_Resignation_Reason?.en_Name)
                : workExperience.resignation_Reason,
            notes: workExperience.note,
        };
    });
}


/***/ }),

/***/ 78700:
/*!***********************************************************!*\
  !*** ./src/app/recruitment/mapper/candidate/candidate.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "candidateToDisplay": () => (/* binding */ candidateToDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function candidateToDisplay(data) {
    return data.map((candidate) => {
        return {
            ...candidate,
            fullName: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(candidate.ar_Name, candidate.en_Name),
            jobTitleName: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(candidate.jobTitleNameAr, candidate.jobTitleName),
            organization: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(candidate.organizationAr, candidate.organization),
            statusProperty: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(candidate.statusPropertyAr, candidate.statusProperty),
            phone: candidate.contacts?.map((contact) => contact.value).join(", "),
            photo: candidate.img ? "/" + candidate.img : "",
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _components_candidate_add_candidate_add_candidate_core_add_candidate_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/candidate/add-candidate/add-candidate-core/add-candidate-core.component */ 89282);
/* harmony import */ var _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/request/add-request/add-recruitment-request/add-recruitment-request.component */ 85499);
/* harmony import */ var _components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/request/recruitment-request-index/recruitment-request-index.component */ 22007);
/* harmony import */ var _components_candidate_candidate_index_candidate_index_candidate_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/candidate/candidate-index/candidate-index/candidate-index.component */ 26530);
/* harmony import */ var _components_candidate_view_candidate_view_candidate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/candidate/view-candidate/view-candidate.component */ 98621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [
    {
        path: "request",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.request },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_1__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_5__.RecruitmentRequestIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.request_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_4__.AddRecruitmentRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.add_request },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_4__.AddRecruitmentRequestComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.add_request },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "candidate",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.candidate },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_1__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_candidate_candidate_index_candidate_index_candidate_index_component__WEBPACK_IMPORTED_MODULE_6__.CandidateIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.candidate_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__.CheckIsViewAllowedGuard],
            },
            // internal candidate
            {
                path: "add",
                component: _components_candidate_add_candidate_add_candidate_core_add_candidate_core_component__WEBPACK_IMPORTED_MODULE_3__.AddCandidateCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.add_candidate },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__.CheckIsViewAllowedGuard],
            },
            // external candidate
            {
                path: "add/:requestId",
                component: _components_candidate_add_candidate_add_candidate_core_add_candidate_core_component__WEBPACK_IMPORTED_MODULE_3__.AddCandidateCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.add_candidate },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__.CheckIsViewAllowedGuard],
            },
            {
                path: "view/:candidateId",
                component: _components_candidate_view_candidate_view_candidate_component__WEBPACK_IMPORTED_MODULE_7__.ViewCandidateComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.view_candidate },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_0__.CheckIsViewAllowedGuard],
            },
        ],
    },
];
class RecruitmentRoutingModule {
}
RecruitmentRoutingModule.ɵfac = function RecruitmentRoutingModule_Factory(t) { return new (t || RecruitmentRoutingModule)(); };
RecruitmentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RecruitmentRoutingModule });
RecruitmentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RecruitmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _recruitment_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recruitment.module-routing.module */ 71579);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/request/recruitment-request-index/recruitment-request-index.component */ 22007);
/* harmony import */ var _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request/add-request/add-recruitment-request/add-recruitment-request.component */ 85499);
/* harmony import */ var _components_request_add_request_add_recruitment_job_details_add_recruitment_job_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/request/add-request/add-recruitment-job-details/add-recruitment-job-details.component */ 90364);
/* harmony import */ var app_org_management_org_management_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/org-management/org-management.module */ 90446);
/* harmony import */ var _components_candidate_candidate_index_candidate_index_candidate_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/candidate/candidate-index/candidate-index/candidate-index.component */ 26530);
/* harmony import */ var _components_candidate_add_candidate_add_candidate_core_add_candidate_core_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/candidate/add-candidate/add-candidate-core/add-candidate-core.component */ 89282);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_form_candidate_general_info_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-form/candidate-general-info-form.component */ 17351);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_candidate_basic_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info/candidate-basic-info.component */ 750);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_education_candidate_education_form_candidate_education_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-education/candidate-education-form/candidate-education-form.component */ 11482);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_form_candidate_certifications_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-certifications/candidate-certification-form/candidate-certifications-form.component */ 45851);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_training_candidate_training_form_candidate_training_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-training/candidate-training-form/candidate-training-form.component */ 46089);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_form_candidate_work_experience_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-form/candidate-work-experience-form.component */ 86532);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_documents_candidate_documents_form_candidate_documents_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-documents/candidate-documents-form/candidate-documents-form.component */ 14332);
/* harmony import */ var _components_candidate_add_candidate_shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/candidate/add-candidate/shared-candidate-components/candidate-tab-description/candidate-tab-description.component */ 51170);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_form_candidate_reference_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-form/candidate-reference-form.component */ 1617);
/* harmony import */ var _components_candidate_add_candidate_add_candidate_done_dialog_add_candidate_done_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/candidate/add-candidate/add-candidate-done-dialog/add-candidate-done-dialog.component */ 49623);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_request_form_candidate_related_requests_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-request-form/candidate-related-requests-form.component */ 96575);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_form_candidate_suitable_requisitions_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-form/candidate-suitable-requisitions-form.component */ 73871);
/* harmony import */ var _components_candidate_recruiting_process_recruiting_process_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/candidate/recruiting-process/recruiting-process.component */ 53177);
/* harmony import */ var _components_candidate_candidate_index_delete_candidate_dialog_delete_candidate_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/candidate/candidate-index/delete-candidate-dialog/delete-candidate-dialog.component */ 92353);
/* harmony import */ var _components_candidate_view_candidate_view_candidate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/candidate/view-candidate/view-candidate.component */ 98621);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_dialog_candidate_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-dialog/candidate-general-info-dialog.component */ 55952);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_core_candidate_general_info_core_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-core/candidate-general-info-core.component */ 51762);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_card_candidate_general_info_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info-card/candidate-general-info-card.component */ 54486);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_candidate_general_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-general-info/candidate-general-info/candidate-general-info.component */ 51907);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_core_candidate_basic_info_core_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info-core/candidate-basic-info-core.component */ 6066);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_card_candidate_basic_info_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info-card/candidate-basic-info-card.component */ 16206);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_dialog_candidate_basic_info_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-info-dialog/candidate-basic-info-dialog.component */ 13685);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_card_candidate_work_experience_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-card/candidate-work-experience-card.component */ 25899);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_core_candidate_work_experience_core_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-core/candidate-work-experience-core.component */ 84098);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-info/candidate-contact-info.component */ 94365);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_card_candidate_contact_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-card/candidate-contact-card.component */ 86725);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_core_candidate_contact_core_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-core/candidate-contact-core.component */ 7985);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_marital_candidate_basic_marital_card_candidate_basic_marital_card_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-marital/candidate-basic-marital-card/candidate-basic-marital-card.component */ 48701);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_military_candidate_basic_military_card_candidate_basic_military_card_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-military/candidate-basic-military-card/candidate-basic-military-card.component */ 20495);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_marital_candidate_basic_marital_candidate_basic_marital_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-marital/candidate-basic-marital/candidate-basic-marital.component */ 65486);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_military_candidate_basic_military_candidate_basic_military_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-basic-info/candidate-basic-military/candidate-basic-military/candidate-basic-military.component */ 72410);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_address_candidate_contact_address_card_candidate_contact_address_card_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-address/candidate-contact-address-card/candidate-contact-address-card.component */ 57865);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_address_candidate_contact_address_candidate_contact_address_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-address/candidate-contact-address/candidate-contact-address.component */ 79464);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contacts_candidate_contacts_table_candidate_contacts_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contacts/candidate-contacts-table/candidate-contacts-table.component */ 57337);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contacts_candidate_contacts_form_candidate_contacts_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contacts/candidate-contacts-form/candidate-contacts-form.component */ 73453);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_dialog_candidate_contact_dialog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contact-info/candidate-contact-dialog/candidate-contact-dialog.component */ 95842);
/* harmony import */ var _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contacts_candidate_contacts_card_candidate_contacts_card_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/candidate/add-candidate/general-info/candidate-contact-info/candidate-contacts/candidate-contacts-card/candidate-contacts-card.component */ 30993);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_education_candidate_education_card_candidate_education_card_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-education/candidate-education-card/candidate-education-card.component */ 75214);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_education_candidate_education_core_candidate_education_core_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-education/candidate-education-core/candidate-education-core.component */ 33305);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_education_candidate_education_dialog_candidate_education_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-education/candidate-education-dialog/candidate-education-dialog.component */ 74009);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_education_candidate_education_table_candidate_education_table_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-education/candidate-education-table/candidate-education-table.component */ 75288);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_education_candidate_education_info_candidate_education_info_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-education/candidate-education-info/candidate-education-info.component */ 27096);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_training_candidate_training_info_candidate_training_info_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-training/candidate-training-info/candidate-training-info.component */ 23965);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_training_candidate_training_core_candidate_training_core_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-training/candidate-training-core/candidate-training-core.component */ 19799);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_training_candidate_training_card_candidate_training_card_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-training/candidate-training-card/candidate-training-card.component */ 16508);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_training_candidate_training_dialog_candidate_training_dialog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-training/candidate-training-dialog/candidate-training-dialog.component */ 72697);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_training_candidate_training_table_candidate_training_table_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-training/candidate-training-table/candidate-training-table.component */ 44220);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_core_candidate_certification_core_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-certifications/candidate-certification-core/candidate-certification-core.component */ 42233);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_card_candidate_certification_card_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-certifications/candidate-certification-card/candidate-certification-card.component */ 59461);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_table_candidate_certification_table_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-certifications/candidate-certification-table/candidate-certification-table.component */ 21652);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_dialog_candidate_certification_dialog_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-certifications/candidate-certification-dialog/candidate-certification-dialog.component */ 99322);
/* harmony import */ var _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_info_candidate_certification_info_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/candidate/add-candidate/education/candidate-certifications/candidate-certification-info/candidate-certification-info.component */ 67498);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_info_candidate_work_experience_info_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-info/candidate-work-experience-info.component */ 19825);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_dialog_candidate_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-dialog/candidate-work-experience-dialog.component */ 20898);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_table_candidate_work_experience_table_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-work-experience/candidate-work-experience-table/candidate-work-experience-table.component */ 64259);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_core_candidate_related_requests_core_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-core/candidate-related-requests-core.component */ 19347);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_card_candidate_related_requests_card_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-card/candidate-related-requests-card.component */ 5458);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_info_candidate_related_requests_info_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-info/candidate-related-requests-info.component */ 28264);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_dialog_candidate_related_requests_dialog_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-dialog/candidate-related-requests-dialog.component */ 65388);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_table_candidate_related_requests_table_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-related-requests/candidate-related-requests-table/candidate-related-requests-table.component */ 31254);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_info_candidate_suitable_requisitions_info_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-info/candidate-suitable-requisitions-info.component */ 40045);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_dialog_candidate_suitable_requisitions_dialog_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-dialog/candidate-suitable-requisitions-dialog.component */ 80281);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_card_candidate_suitable_requisitions_card_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-card/candidate-suitable-requisitions-card.component */ 15265);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_core_candidate_suitable_requisitions_core_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-core/candidate-suitable-requisitions-core.component */ 95094);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_table_candidate_suitable_requisitions_table_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-suitable-requisitions/candidate-suitable-requisitions-table/candidate-suitable-requisitions-table.component */ 55616);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_info_candidate_reference_info_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-info/candidate-reference-info.component */ 51547);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_core_candidate_reference_core_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-core/candidate-reference-core.component */ 67237);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_card_candidate_reference_card_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-card/candidate-reference-card.component */ 68696);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_table_candidate_reference_table_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-table/candidate-reference-table.component */ 80388);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_dialog_candidate_reference_dialog_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-reference/candidate-reference-dialog/candidate-reference-dialog.component */ 8814);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_dialog_candidate_document_dialog_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-dialog/candidate-document-dialog.component */ 47643);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_info_candidate_document_info_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-info/candidate-document-info.component */ 29847);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_core_candidate_document_core_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-core/candidate-document-core.component */ 54537);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_card_candidate_document_card_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-card/candidate-document-card.component */ 71999);
/* harmony import */ var _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_table_candidate_document_table_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/candidate/add-candidate/work-experience/candidate-documents/candidate-document-table/candidate-document-table.component */ 24216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @angular/core */ 22560);





















































































class RecruitmentModule {
}
RecruitmentModule.ɵfac = function RecruitmentModule_Factory(t) { return new (t || RecruitmentModule)(); };
RecruitmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵdefineNgModule"]({ type: RecruitmentModule });
RecruitmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_84__.CommonModule, _recruitment_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, app_org_management_org_management_module__WEBPACK_IMPORTED_MODULE_5__.OrgManagementModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵsetNgModuleScope"](RecruitmentModule, { declarations: [_components_request_recruitment_request_index_recruitment_request_index_component__WEBPACK_IMPORTED_MODULE_2__.RecruitmentRequestIndexComponent,
        _components_request_add_request_add_recruitment_request_add_recruitment_request_component__WEBPACK_IMPORTED_MODULE_3__.AddRecruitmentRequestComponent,
        _components_request_add_request_add_recruitment_job_details_add_recruitment_job_details_component__WEBPACK_IMPORTED_MODULE_4__.AddRecruitmentJobDetailsComponent,
        _components_candidate_candidate_index_candidate_index_candidate_index_component__WEBPACK_IMPORTED_MODULE_6__.CandidateIndexComponent,
        _components_candidate_add_candidate_add_candidate_core_add_candidate_core_component__WEBPACK_IMPORTED_MODULE_7__.AddCandidateCoreComponent,
        _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_form_candidate_general_info_form_component__WEBPACK_IMPORTED_MODULE_8__.CandidateGeneralInfoFormComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_candidate_basic_info_component__WEBPACK_IMPORTED_MODULE_9__.CandidateBasicInfoComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_candidate_contact_info_component__WEBPACK_IMPORTED_MODULE_32__.CandidateContactInfoComponent,
        _components_candidate_add_candidate_education_candidate_education_candidate_education_form_candidate_education_form_component__WEBPACK_IMPORTED_MODULE_10__.CandidateEducationFormComponent,
        _components_candidate_add_candidate_education_candidate_training_candidate_training_form_candidate_training_form_component__WEBPACK_IMPORTED_MODULE_12__.CandidateTrainingFormComponent,
        _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_form_candidate_certifications_form_component__WEBPACK_IMPORTED_MODULE_11__.CandidateCertificationFormComponent,
        _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_form_candidate_work_experience_form_component__WEBPACK_IMPORTED_MODULE_13__.CandidateWorkExperienceFormComponent,
        _components_candidate_add_candidate_work_experience_candidate_documents_candidate_documents_form_candidate_documents_form_component__WEBPACK_IMPORTED_MODULE_14__.CandidateDocumentsFormComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_marital_candidate_basic_marital_candidate_basic_marital_component__WEBPACK_IMPORTED_MODULE_37__.CandidateBasicMaritalComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_military_candidate_basic_military_candidate_basic_military_component__WEBPACK_IMPORTED_MODULE_38__.CandidateBasicMilitaryComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_address_candidate_contact_address_candidate_contact_address_component__WEBPACK_IMPORTED_MODULE_40__.CandidateContactAddressComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contacts_candidate_contacts_form_candidate_contacts_form_component__WEBPACK_IMPORTED_MODULE_42__.CandidateContactsFormComponent,
        _components_candidate_add_candidate_shared_candidate_components_candidate_tab_description_candidate_tab_description_component__WEBPACK_IMPORTED_MODULE_15__.CandidateTabDescriptionComponent,
        _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_form_candidate_reference_form_component__WEBPACK_IMPORTED_MODULE_16__.CandidateReferenceFormComponent,
        _components_candidate_add_candidate_add_candidate_done_dialog_add_candidate_done_dialog_component__WEBPACK_IMPORTED_MODULE_17__.AddCandidateDoneDialogComponent,
        _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_request_form_candidate_related_requests_form_component__WEBPACK_IMPORTED_MODULE_18__.CandidateRelatedFormRequestsComponent,
        _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_form_candidate_suitable_requisitions_form_component__WEBPACK_IMPORTED_MODULE_19__.CandidateSuitableRequisitionsFormComponent,
        _components_candidate_recruiting_process_recruiting_process_component__WEBPACK_IMPORTED_MODULE_20__.RecruitingProcessComponent,
        _components_candidate_candidate_index_delete_candidate_dialog_delete_candidate_dialog_component__WEBPACK_IMPORTED_MODULE_21__.DeleteCandidateDialogComponent,
        _components_candidate_view_candidate_view_candidate_component__WEBPACK_IMPORTED_MODULE_22__.ViewCandidateComponent,
        _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_dialog_candidate_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_23__.CandidateGeneralInfoDialogComponent,
        _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_core_candidate_general_info_core_component__WEBPACK_IMPORTED_MODULE_24__.CandidateGeneralInfoCoreComponent,
        _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_card_candidate_general_info_card_component__WEBPACK_IMPORTED_MODULE_25__.CandidateGeneralInfoCardComponent,
        _components_candidate_add_candidate_general_info_candidate_general_info_candidate_general_info_candidate_general_info_component__WEBPACK_IMPORTED_MODULE_26__.CandidateGeneralInfoComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_core_candidate_basic_info_core_component__WEBPACK_IMPORTED_MODULE_27__.CandidateBasicInfoCoreComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_card_candidate_basic_info_card_component__WEBPACK_IMPORTED_MODULE_28__.CandidateBasicInfoCardComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_info_dialog_candidate_basic_info_dialog_component__WEBPACK_IMPORTED_MODULE_29__.CandidateBasicInfoDialogComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_marital_candidate_basic_marital_card_candidate_basic_marital_card_component__WEBPACK_IMPORTED_MODULE_35__.CandidateBasicMaritalCardComponent,
        _components_candidate_add_candidate_general_info_candidate_basic_info_candidate_basic_military_candidate_basic_military_card_candidate_basic_military_card_component__WEBPACK_IMPORTED_MODULE_36__.CandidateBasicMilitaryCardComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_card_candidate_contact_card_component__WEBPACK_IMPORTED_MODULE_33__.CandidateContactCardComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_core_candidate_contact_core_component__WEBPACK_IMPORTED_MODULE_34__.CandidateContactCoreComponent,
        _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_card_candidate_work_experience_card_component__WEBPACK_IMPORTED_MODULE_30__.CandidateWorkExperienceCardComponent,
        _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_core_candidate_work_experience_core_component__WEBPACK_IMPORTED_MODULE_31__.CandidateWorkExperienceCoreComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_address_candidate_contact_address_card_candidate_contact_address_card_component__WEBPACK_IMPORTED_MODULE_39__.CandidateContactAddressCardComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contacts_candidate_contacts_table_candidate_contacts_table_component__WEBPACK_IMPORTED_MODULE_41__.CandidateContactsTableComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contact_info_candidate_contact_dialog_candidate_contact_dialog_component__WEBPACK_IMPORTED_MODULE_43__.CandidateContactDialogComponent,
        _components_candidate_add_candidate_general_info_candidate_contact_info_candidate_contacts_candidate_contacts_card_candidate_contacts_card_component__WEBPACK_IMPORTED_MODULE_44__.CandidateContactsCardComponent,
        _components_candidate_add_candidate_education_candidate_education_candidate_education_card_candidate_education_card_component__WEBPACK_IMPORTED_MODULE_45__.CandidateEducationCardComponent,
        _components_candidate_add_candidate_education_candidate_education_candidate_education_core_candidate_education_core_component__WEBPACK_IMPORTED_MODULE_46__.CandidateEducationCoreComponent,
        _components_candidate_add_candidate_education_candidate_education_candidate_education_dialog_candidate_education_dialog_component__WEBPACK_IMPORTED_MODULE_47__.CandidateEducationDialogComponent,
        _components_candidate_add_candidate_education_candidate_education_candidate_education_table_candidate_education_table_component__WEBPACK_IMPORTED_MODULE_48__.CandidateEducationTableComponent,
        _components_candidate_add_candidate_education_candidate_education_candidate_education_info_candidate_education_info_component__WEBPACK_IMPORTED_MODULE_49__.CandidateEducationInfoComponent,
        _components_candidate_add_candidate_education_candidate_training_candidate_training_info_candidate_training_info_component__WEBPACK_IMPORTED_MODULE_50__.CandidateTrainingInfoComponent,
        _components_candidate_add_candidate_education_candidate_training_candidate_training_core_candidate_training_core_component__WEBPACK_IMPORTED_MODULE_51__.CandidateTrainingCoreComponent,
        _components_candidate_add_candidate_education_candidate_training_candidate_training_card_candidate_training_card_component__WEBPACK_IMPORTED_MODULE_52__.CandidateTrainingCardComponent,
        _components_candidate_add_candidate_education_candidate_training_candidate_training_dialog_candidate_training_dialog_component__WEBPACK_IMPORTED_MODULE_53__.CandidateTrainingDialogComponent,
        _components_candidate_add_candidate_education_candidate_training_candidate_training_table_candidate_training_table_component__WEBPACK_IMPORTED_MODULE_54__.CandidateTrainingTableComponent,
        _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_core_candidate_certification_core_component__WEBPACK_IMPORTED_MODULE_55__.CandidateCertificationCoreComponent,
        _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_card_candidate_certification_card_component__WEBPACK_IMPORTED_MODULE_56__.CandidateCertificationCardComponent,
        _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_table_candidate_certification_table_component__WEBPACK_IMPORTED_MODULE_57__.CandidateCertificationTableComponent,
        _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_dialog_candidate_certification_dialog_component__WEBPACK_IMPORTED_MODULE_58__.CandidateCertificationDialogComponent,
        _components_candidate_add_candidate_education_candidate_certifications_candidate_certification_info_candidate_certification_info_component__WEBPACK_IMPORTED_MODULE_59__.CandidateCertificationInfoComponent,
        _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_info_candidate_work_experience_info_component__WEBPACK_IMPORTED_MODULE_60__.CandidateWorkExperienceInfoComponent,
        _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_dialog_candidate_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_61__.CandidateWorkExperienceDialogComponent,
        _components_candidate_add_candidate_work_experience_candidate_work_experience_candidate_work_experience_table_candidate_work_experience_table_component__WEBPACK_IMPORTED_MODULE_62__.CandidateWorkExperienceTableComponent,
        _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_core_candidate_related_requests_core_component__WEBPACK_IMPORTED_MODULE_63__.CandidateRelatedRequestsCoreComponent,
        _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_card_candidate_related_requests_card_component__WEBPACK_IMPORTED_MODULE_64__.CandidateRelatedRequestsCardComponent,
        _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_info_candidate_related_requests_info_component__WEBPACK_IMPORTED_MODULE_65__.CandidateRelatedRequestsInfoComponent,
        _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_dialog_candidate_related_requests_dialog_component__WEBPACK_IMPORTED_MODULE_66__.CandidateRelatedRequestsDialogComponent,
        _components_candidate_add_candidate_work_experience_candidate_related_requests_candidate_related_requests_table_candidate_related_requests_table_component__WEBPACK_IMPORTED_MODULE_67__.CandidateRelatedRequestsTableComponent,
        _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_info_candidate_suitable_requisitions_info_component__WEBPACK_IMPORTED_MODULE_68__.CandidateSuitableRequisitionsInfoComponent,
        _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_dialog_candidate_suitable_requisitions_dialog_component__WEBPACK_IMPORTED_MODULE_69__.CandidateSuitableRequisitionsDialogComponent,
        _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_card_candidate_suitable_requisitions_card_component__WEBPACK_IMPORTED_MODULE_70__.CandidateSuitableRequisitionsCardComponent,
        _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_core_candidate_suitable_requisitions_core_component__WEBPACK_IMPORTED_MODULE_71__.CandidateSuitableRequisitionsCoreComponent,
        _components_candidate_add_candidate_work_experience_candidate_suitable_requisitions_candidate_suitable_requisitions_table_candidate_suitable_requisitions_table_component__WEBPACK_IMPORTED_MODULE_72__.CandidateSuitableRequisitionsTableComponent,
        _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_info_candidate_reference_info_component__WEBPACK_IMPORTED_MODULE_73__.CandidateReferenceInfoComponent,
        _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_core_candidate_reference_core_component__WEBPACK_IMPORTED_MODULE_74__.CandidateReferenceCoreComponent,
        _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_card_candidate_reference_card_component__WEBPACK_IMPORTED_MODULE_75__.CandidateReferenceCardComponent,
        _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_table_candidate_reference_table_component__WEBPACK_IMPORTED_MODULE_76__.CandidateReferenceTableComponent,
        _components_candidate_add_candidate_work_experience_candidate_reference_candidate_reference_dialog_candidate_reference_dialog_component__WEBPACK_IMPORTED_MODULE_77__.CandidateReferenceDialogComponent,
        _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_dialog_candidate_document_dialog_component__WEBPACK_IMPORTED_MODULE_78__.CandidateDocumentDialogComponent,
        _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_info_candidate_document_info_component__WEBPACK_IMPORTED_MODULE_79__.CandidateDocumentInfoComponent,
        _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_core_candidate_document_core_component__WEBPACK_IMPORTED_MODULE_80__.CandidateDocumentCoreComponent,
        _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_card_candidate_document_card_component__WEBPACK_IMPORTED_MODULE_81__.CandidateDocumentCardComponent,
        _components_candidate_add_candidate_work_experience_candidate_documents_candidate_document_table_candidate_document_table_component__WEBPACK_IMPORTED_MODULE_82__.CandidateDocumentTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_84__.CommonModule, _recruitment_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, app_org_management_org_management_module__WEBPACK_IMPORTED_MODULE_5__.OrgManagementModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_recruitment_recruitment_module_ts.js.map