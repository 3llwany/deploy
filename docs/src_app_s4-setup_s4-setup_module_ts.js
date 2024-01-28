"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_s4-setup_s4-setup_module_ts"],{

/***/ 25243:
/*!*******************************************************************************************************!*\
  !*** ./src/app/s4-setup/components/s4-account-map/add-s4-account-map/add-s4-account-map.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddS4AccountMapComponent": () => (/* binding */ AddS4AccountMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_s4_setup_mapper_s4_account_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/s4-setup/mapper/s4-account-map */ 29577);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_s4_setup_services_s4_account_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/s4-setup/services/s4-account-map.service */ 86819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_dropdowns_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/payment-dropdown/payment-dropdown.component */ 70955);
/* harmony import */ var _shared_components_dropdowns_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/variable-by-payment-dropdown/variable-by-payment-dropdown.component */ 35501);
/* harmony import */ var _shared_components_dropdowns_job_family_by_org_dropdown_job_family_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/job-family-by-org-dropdown/job-family-by-org-dropdown.component */ 76774);
/* harmony import */ var _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/bank-dropdown/bank-dropdown.component */ 75968);
/* harmony import */ var _shared_components_dropdowns_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 26511);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_dropdowns_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/job-title-by-org-dropdown/job-title-by-org-dropdown.component */ 28973);
/* harmony import */ var _shared_components_dropdowns_s4_system_instance_dropdown_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/s4-system-instance-dropdown/s4-system-instance-dropdown.component */ 92363);
/* harmony import */ var _shared_components_dropdowns_s4_integration_purpose_by_system_instance_dropdown_s4_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/s4-integration-purpose-by-system-instance-dropdown/s4-integration-purpose-by-system-instance-dropdown.component */ 85003);
/* harmony import */ var _shared_components_dropdowns_gl_account_by_s4_system_instance_dropdown_gl_account_by_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/gl-account-by-s4-system-instance-dropdown/gl-account-by-s4-system-instance-dropdown.component */ 33886);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 15549);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-spinner */ 88035);



























function AddS4AccountMapComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-add-new-btn", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("url", "/s4-setup/", ctx_r0.moduleId, "/s4-account-map/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddS4AccountMapComponent_reset_form_btn_45_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "reset-form-btn", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AddS4AccountMapComponent_reset_form_btn_45_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "hidden-field": a0 }; };
class AddS4AccountMapComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(s4AccountMapService) {
        super();
        this.s4AccountMapService = s4AccountMapService;
        this.submitted = false;
        this.jobTitleRadioList = [
            {
                value: true,
                label: "jobTitle",
                cssClass: "col-md-4 col-12",
            },
            {
                value: false,
                label: "jobFamily",
                cssClass: "col-md-4 col-12",
            },
            {
                value: null,
                label: "none",
                cssClass: "col-md-4 col-12",
            },
        ];
        this.bankRadioList = [
            {
                value: true,
                label: "bothBankWithInstruction",
            },
            {
                value: false,
                label: "cash",
            },
        ];
        this.isDebitRadioList = [
            {
                value: true,
                label: "debit",
            },
            {
                value: false,
                label: "credit",
            },
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            systemInstance_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            integrationPurpose_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            payment_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            variable_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            s4_LG_AccountCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            s4_LG_Account_Text: [null],
            is_Aggregated: [true],
            ignoreCostCenters: [null],
            organizationTypeId: [null],
            organization_ID: [null],
            // for radio btn (job title(true) / job families(false) / none(null))
            isJobtitleType: [true],
            jobTitle_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            job_Title_Family_ID: [null],
            bothBankCash: [true],
            bank_ID: [null],
            is_Debit: [true],
        });
        this.activatedRoute.paramMap.subscribe((params) => {
            this.s4AccountMapId = Number(params.get("s4AccountMapId")) ?? 0;
            // if (this.s4AccountMapId > 0 && this.CheckNoBusinessOrCompany())
            //   this.getById();
        });
    }
    onChangeBusinessAndCompanyId() {
        // this.s4AccountMap = null;
        if (this.s4AccountMapId > 0 && this.checkNoBusinessOrCompany())
            this.getById();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getById() {
        this.showLoading();
        this.s4AccountMapService
            .getById(this.s4AccountMapId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.s4AccountMapToEdit((0,app_s4_setup_mapper_s4_account_map__WEBPACK_IMPORTED_MODULE_0__.s4AccountGetAllToMap)(res.data)[0]);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    s4AccountMapToEdit(s4AccountMap) {
        this.form.patchValue(s4AccountMap);
        // dropdown filtered by another
        this.formCtrls.integrationPurpose_ID.setValue(s4AccountMap.integrationPurpose_ID);
        this.formCtrls.variable_ID.setValue(s4AccountMap.variable_ID);
        this.formCtrls.organization_ID.setValue(s4AccountMap.organization_ID);
        setTimeout(() => {
            this.formCtrls.jobTitle_ID.setValue(s4AccountMap.jobTitle_ID);
            this.formCtrls.job_Title_Family_ID.setValue(s4AccountMap.job_Title_Family_ID);
        }, 20);
        // job radio buttons
        let isJobRadio = null;
        if (s4AccountMap.job_Title_Family_ID)
            isJobRadio = false;
        else if (s4AccountMap.jobTitle_ID)
            isJobRadio = true;
        this.formCtrls.isJobtitleType.setValue(isJobRadio);
        this.onChangeIsJobRadio(isJobRadio, true);
        // console.log(this.form.value);
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                SystemInstance_ID: this.form.value.systemInstance_ID,
                IntegrationPurpose_ID: this.form.value.integrationPurpose_ID,
                S4_LG_AccountCode: this.form.value.s4_LG_AccountCode,
                S4_LG_Account_Text: this.form.value.s4_LG_Account_Text,
                Payment_ID: this.form.value.payment_ID,
                Variable_ID: this.form.value.variable_ID,
                Is_Aggregated: this.form.value.is_Aggregated ?? false,
                IgnoreCostCenters: this.form.value.ignoreCostCenters ?? false,
                Organization_ID: this.form.value.organization_ID,
                JobTitle_ID: this.form.value.jobTitle_ID,
                Job_Title_Family_ID: this.form.value.job_Title_Family_ID,
                BothBankCash: this.form.value.bothBankCash ?? false,
                Bank_ID: this.form.value.bank_ID,
                Is_Debit: this.form.value.is_Debit ?? false,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.s4AccountMapService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.changeDataAfterAddAndEdit(res.data);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.s4AccountMapService.update(model).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.changeDataAfterAddAndEdit(res.data);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    changeDataAfterAddAndEdit(data) {
        this.s4AccountMapId = data.id;
        this.formCtrls.id.setValue(this.s4AccountMapId);
        let url = `/s4-setup/${this.moduleId}/s4-account-map/edit/${this.s4AccountMapId}`;
        this.navigateTo(url);
        // this.s4AccountMap = data;
        this.formCtrls.is_Aggregated.setValue(data.is_Aggregated);
        // this.s4AccountMap.organizationTypeId =
        //   this.formCtrls.organizationTypeId.value;
    }
    clearForm() {
        // if (this.s4AccountMapId == 0)
        this.form.reset({
            id: 0,
            is_Aggregated: true,
            isJobtitleType: true,
            bothBankCash: true,
            is_Debit: true,
        });
        // else this.s4AccountMapToEdit();
        this.submitted = false;
    }
    onChangeIsJobRadio(value, firstTime = false) {
        if (!firstTime) {
            this.formCtrls.jobTitle_ID.reset();
            this.formCtrls.job_Title_Family_ID.reset();
        }
        if (value == true) {
            this.formCtrls.jobTitle_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]);
            this.formCtrls.job_Title_Family_ID.clearValidators();
        }
        else if (value == false) {
            this.formCtrls.job_Title_Family_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]);
            this.formCtrls.jobTitle_ID.clearValidators();
        }
        else {
            this.formCtrls.jobTitle_ID.clearValidators();
            this.formCtrls.job_Title_Family_ID.clearValidators();
        }
        this.formCtrls.jobTitle_ID.updateValueAndValidity();
        this.formCtrls.job_Title_Family_ID.updateValueAndValidity();
    }
    onChangeIsBankRadio(value) {
        if (!value) {
            this.formCtrls.bank_ID.setValue(null);
        }
    }
    changeGLAccountText(glAccount) {
        this.formCtrls.s4_LG_Account_Text.setValue(glAccount[0]?.Gl_text);
    }
}
AddS4AccountMapComponent.ɵfac = function AddS4AccountMapComponent_Factory(t) { return new (t || AddS4AccountMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](app_s4_setup_services_s4_account_map_service__WEBPACK_IMPORTED_MODULE_3__.S4AccountMapService)); };
AddS4AccountMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: AddS4AccountMapComponent, selectors: [["app-add-s4-account-map"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]], decls: 46, vars: 65, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "s4AccountMap", "editTitle", "editS4AccountMap", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "s4SystemInstanceControl", "submitted", "filter"], [3, "control", "s4SystemInstanceControl", "submitted", "filter", "change"], [1, "col-md-6", "col-12"], [3, "control", "paymentControl", "submitted", "filter"], [1, "col-md-6", "col-12", "mb-3"], ["label", "is_Aggregated", 1, "mtop-14", 3, "control"], ["label", "ignoreCostCenters", 1, "mtop-14", 3, "control"], [3, "control", "orgTypeControl", "submitted", "filter"], [1, "col-md-8", "col-12"], [1, "mtop-14", 3, "control", "radioList", "submitted", "change"], [1, "col-md-4", "col-12", 3, "ngClass"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter"], [1, "col-md-6", "col-12", 3, "ngClass"], ["label", "debitOrCredit", 3, "control", "radioList", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AddS4AccountMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, AddS4AccountMapComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "mat-card-content", 6)(9, "div", 0)(10, "div", 1)(11, "form", 7)(12, "div", 0)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "app-s4-system-instance-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "app-s4-integration-purpose-by-system-instance-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 8)(18, "app-gl-account-by-s4-system-instance-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function AddS4AccountMapComponent_Template_app_gl_account_by_s4_system_instance_dropdown_change_18_listener($event) { return ctx.changeGLAccountText($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](20, "app-payment-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](22, "app-variable-by-payment-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "app-check-box", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](26, "app-check-box", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "app-org-types-dropdown-current-structure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](30, "app-organization-by-org-type-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 18)(32, "app-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function AddS4AccountMapComponent_Template_app_radio_button_change_32_listener($event) { return ctx.onChangeIsJobRadio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](34, "app-job-title-by-org-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](36, "app-job-family-by-org-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 12)(38, "app-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function AddS4AccountMapComponent_Template_app_radio_button_change_38_listener($event) { return ctx.onChangeIsBankRadio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](40, "app-bank-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](42, "app-radio-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "mat-card-actions", 24)(44, "submit-btn", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onClick", function AddS4AccountMapComponent_Template_submit_btn_onClick_44_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](45, AddS4AccountMapComponent_reset_form_btn_45_Template, 1, 0, "reset-form-btn", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("url", "/s4-setup/", ctx.moduleId, "/s4-account-map/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.systemInstance_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.integrationPurpose_ID)("s4SystemInstanceControl", ctx.formCtrls.systemInstance_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.s4_LG_AccountCode)("s4SystemInstanceControl", ctx.formCtrls.systemInstance_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.payment_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.variable_ID)("paymentControl", ctx.formCtrls.payment_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.is_Aggregated);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.ignoreCostCenters);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.organizationTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.organization_ID)("orgTypeControl", ctx.formCtrls.organizationTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.isJobtitleType)("radioList", ctx.jobTitleRadioList)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](59, _c0, !(ctx.formCtrls.isJobtitleType.value == true)));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.jobTitle_ID)("organizationControl", ctx.formCtrls.organization_ID)("organizationControlRequired", false)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](61, _c0, !(ctx.formCtrls.isJobtitleType.value == false)));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.job_Title_Family_ID)("organizationControl", ctx.formCtrls.organization_ID)("organizationControlRequired", false)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.bothBankCash)("radioList", ctx.bankRadioList)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](63, _c0, !(ctx.formCtrls.bothBankCash.value == true)));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.bank_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("control", ctx.formCtrls.is_Debit)("radioList", ctx.isDebitRadioList)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_4__.RadioButtonComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__.BackBtnComponent, _shared_components_dropdowns_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.PaymentDropdownComponent, _shared_components_dropdowns_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.VariableByPaymentDropdownComponent, _shared_components_dropdowns_job_family_by_org_dropdown_job_family_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.JobFamilyDropdownComponent, _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.BankDropdownComponent, _shared_components_dropdowns_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.OrganizationByOrgTypeDropdownComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_12__.AddNewBtnComponent, _shared_components_dropdowns_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.JobTitleByOrgDropdownComponent, _shared_components_dropdowns_s4_system_instance_dropdown_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.S4SystemInstanceDropdownComponent, _shared_components_dropdowns_s4_integration_purpose_by_system_instance_dropdown_s4_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.S4IntegrationPurposeBySystemInstanceDropdownComponent, _shared_components_dropdowns_gl_account_by_s4_system_instance_dropdown_gl_account_by_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.GlAccountByS4SystemInstanceDropdownComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_17__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_18__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_19__.PageTitleComponent, _shared_components_dropdowns_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_20__.OrgTypesDropdownCurrentStructureComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_25__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupDirective], styles: ["mat-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zNC1hY2NvdW50LW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUFDRiIsImZpbGUiOiJhZGQtczQtYWNjb3VudC1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 55091:
/*!***********************************************************************************************************!*\
  !*** ./src/app/s4-setup/components/s4-account-map/s4-account-map-index/s4-account-map-index.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S4AccountMapIndexComponent": () => (/* binding */ S4AccountMapIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_s4_setup_mapper_s4_account_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/s4-setup/mapper/s4-account-map */ 29577);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_s4_setup_services_s4_account_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/s4-setup/services/s4-account-map.service */ 86819);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_dropdowns_s4_system_instance_dropdown_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/s4-system-instance-dropdown/s4-system-instance-dropdown.component */ 92363);
/* harmony import */ var _shared_components_dropdowns_s4_integration_purpose_by_system_instance_dropdown_s4_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/s4-integration-purpose-by-system-instance-dropdown/s4-integration-purpose-by-system-instance-dropdown.component */ 85003);
/* harmony import */ var _shared_components_dropdowns_gl_account_by_s4_system_instance_dropdown_gl_account_by_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/gl-account-by-s4-system-instance-dropdown/gl-account-by-s4-system-instance-dropdown.component */ 33886);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















class S4AccountMapIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(s4AccountMapService) {
        super();
        this.s4AccountMapService = s4AccountMapService;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "variables",
            "integrationPurpose",
            "s4_LG_AccountCode",
            "s4_LG_Account_Text",
            "actions",
        ];
        this.optionalColomns = [
            "bothBankCash",
            "is_Aggregated",
            "ignoreCostCenters",
            "accountType",
        ];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
        this.form = this.fb.group({
            systemInstance_ID: [null],
            integrationPurpose_ID: [null],
            S4_LG_AccountCode: [null],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    searchList() {
        if (!this.form?.value.systemInstance_ID &&
            !this.form?.value.integrationPurpose_ID &&
            !this.form?.value.S4_LG_AccountCode) {
            this.warning("selectDataToSearch");
            return;
        }
        else {
            let filter = {
                $filter: "",
            };
            if (this.form?.value.S4_LG_AccountCode)
                filter.$filter = `S4_LG_AccountCode eq '${this.form.value.S4_LG_AccountCode}'`;
            else if (this.form?.value.integrationPurpose_ID)
                filter.$filter = `IntegrationPurpose_ID eq ${this.form.value.integrationPurpose_ID}`;
            else if (this.form?.value.systemInstance_ID)
                filter.$filter = `systemInstance_ID eq ${this.form.value.systemInstance_ID}`;
            this.getList(this.firstPage, filter);
        }
    }
    getList(page, filter = {}, pageSize) {
        this.removePageParams();
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
            ...filter,
        };
        this.s4AccountMapService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource((0,app_s4_setup_mapper_s4_account_map__WEBPACK_IMPORTED_MODULE_0__.s4AccountToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(s4AccountMap) {
        let msg = this.msgTranslate(`${s4AccountMap.id} - ${s4AccountMap.integrationPurpose} - ${s4AccountMap.accountType}`);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(s4AccountMap);
        });
    }
    delete(s4AccountMap) {
        this.showLoading();
        this.s4AccountMapService
            .Delete(s4AccountMap.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
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
    resetSearch() {
        this.form.reset();
        this.getList(this.firstPage);
    }
    onChangePurpose(purpose) {
        if (purpose?.length > 0)
            this.formCtrls.S4_LG_AccountCode.setValue(null);
    }
    onChangeGlAccount(glAccount) {
        if (glAccount?.length > 0)
            this.formCtrls.integrationPurpose_ID.setValue(null);
    }
}
S4AccountMapIndexComponent.ɵfac = function S4AccountMapIndexComponent_Factory(t) { return new (t || S4AccountMapIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_s4_setup_services_s4_account_map_service__WEBPACK_IMPORTED_MODULE_3__.S4AccountMapService)); };
S4AccountMapIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: S4AccountMapIndexComponent, selectors: [["app-s4-account-map-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 20, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["title", "s4AccountMap", 3, "globalFunctions"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "filter"], [3, "control", "s4SystemInstanceControl", "filter", "change"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function S4AccountMapIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "div", 0)(8, "div", 1)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "app-s4-system-instance-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 6)(14, "app-s4-integration-purpose-by-system-instance-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function S4AccountMapIndexComponent_Template_app_s4_integration_purpose_by_system_instance_dropdown_change_14_listener($event) { return ctx.onChangePurpose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 6)(16, "app-gl-account-by-s4-system-instance-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function S4AccountMapIndexComponent_Template_app_gl_account_by_s4_system_instance_dropdown_change_16_listener($event) { return ctx.onChangeGlAccount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "mat-card-actions", 9)(18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function S4AccountMapIndexComponent_Template_button_click_18_listener() { return ctx.searchList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function S4AccountMapIndexComponent_Template_reset_form_btn_click_21_listener() { return ctx.resetSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChangePage", function S4AccountMapIndexComponent_Template_app_material_table_onChangePage_23_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function S4AccountMapIndexComponent_Template_app_material_table_deleteRow_23_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.systemInstance_ID)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.integrationPurpose_ID)("s4SystemInstanceControl", ctx.formCtrls.systemInstance_ID)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.S4_LG_AccountCode)("s4SystemInstanceControl", ctx.formCtrls.systemInstance_ID)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 18, "General.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.s4AccountMapService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_dropdowns_s4_system_instance_dropdown_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.S4SystemInstanceDropdownComponent, _shared_components_dropdowns_s4_integration_purpose_by_system_instance_dropdown_s4_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.S4IntegrationPurposeBySystemInstanceDropdownComponent, _shared_components_dropdowns_gl_account_by_s4_system_instance_dropdown_gl_account_by_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.GlAccountByS4SystemInstanceDropdownComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzNC1hY2NvdW50LW1hcC1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4696:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/s4-setup/components/s4-system-instance/s4-system-instance-index/s4-system-instance-index.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S4SystemInstanceIndexComponent": () => (/* binding */ S4SystemInstanceIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_s4_setup_services_s4_sytem_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/s4-setup/services/s4-sytem-instance.service */ 49704);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class S4SystemInstanceIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(s4SytemInstanceService) {
        super();
        this.s4SytemInstanceService = s4SytemInstanceService;
        this.mandatoryColomns = ["Ser", "id", "ar_Name", "en_Name", "api_Url_Prefix", "actions"];
        this.optionalColomns = ["userName", "password", "s4_Client_Code", "s4_Company_Code"];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
        this.form = this.fb.group({
            systemInstance_ID: [null],
            integrationPurpose_ID: [null],
            LG_Account: [null],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    searchList() {
        if (!this.form?.value.systemInstance_ID &&
            !this.form?.value.integrationPurpose_ID &&
            !this.form?.value.LG_Account) {
            this.getList(this.firstPage);
            return;
        }
        else {
            let filter = {
                $filter: "",
            };
            if (this.form?.value.LG_Account)
                filter.$filter = `LG_Account eq ${this.form.value.LG_Account}`;
            else if (this.form?.value.integrationPurpose_ID)
                filter.$filter = `IntegrationPurpose_ID eq ${this.form.value.integrationPurpose_ID}`;
            else if (this.form?.value.systemInstance_ID)
                filter.$filter = `systemInstance_ID eq ${this.form.value.systemInstance_ID}`;
            this.getList(this.firstPage, filter);
        }
    }
    getList(page, filter = {}, pageSize) {
        this.removePageParams();
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
            ...filter,
        };
        this.s4SytemInstanceService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
    onDelete(s4SystemInstance) {
        let msg = this.msgTranslate(s4SystemInstance.ar_Name, s4SystemInstance.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(s4SystemInstance);
        });
    }
    delete(s4SystemInstance) {
        this.showLoading();
        this.s4SytemInstanceService.Delete(s4SystemInstance.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
    resetSearch() {
        this.form.reset();
        this.getList(this.firstPage);
    }
}
S4SystemInstanceIndexComponent.ɵfac = function S4SystemInstanceIndexComponent_Factory(t) { return new (t || S4SystemInstanceIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_s4_setup_services_s4_sytem_instance_service__WEBPACK_IMPORTED_MODULE_2__.S4SytemInstanceService)); };
S4SystemInstanceIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: S4SystemInstanceIndexComponent, selectors: [["app-s4-system-instance-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 8, consts: [[1, "row"], [1, "col-12"], ["title", "s4SystemInstance", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function S4SystemInstanceIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function S4SystemInstanceIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function S4SystemInstanceIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.s4SytemInstanceService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzNC1zeXN0ZW0taW5zdGFuY2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 29577:
/*!***************************************************!*\
  !*** ./src/app/s4-setup/mapper/s4-account-map.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s4AccountGetAllToMap": () => (/* binding */ s4AccountGetAllToMap),
/* harmony export */   "s4AccountToMap": () => (/* binding */ s4AccountToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function s4AccountGetAllToMap(violations) {
    return violations.map((s4Account) => {
        return {
            ...s4Account._I_PAY_Variable_SAP_SystemInstance_AccountNumber_COMM_Bank,
            organizationTypeId: s4Account.orgTypeId,
        };
    });
}
function s4AccountToMap(violations) {
    return violations.map((s4Account) => {
        return {
            ...s4Account,
            integrationPurpose: s4Account.s4_IntegrationPurpose.name,
            accountType: s4Account.is_Debit ? "Debit" : "Credit",
            variables: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(s4Account.pay_Variable?.arName, s4Account.pay_Variable?.name),
            bothBankCash: s4Account.bothBankCash && !s4Account.bank_ID ? true : false,
        };
    });
}


/***/ }),

/***/ 951:
/*!*****************************************************!*\
  !*** ./src/app/s4-setup/s4-setup-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S4SetupRoutingModule": () => (/* binding */ S4SetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_s4_system_instance_s4_system_instance_index_s4_system_instance_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/s4-system-instance/s4-system-instance-index/s4-system-instance-index.component */ 4696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_s4_account_map_s4_account_map_index_s4_account_map_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/s4-account-map/s4-account-map-index/s4-account-map-index.component */ 55091);
/* harmony import */ var _components_s4_account_map_add_s4_account_map_add_s4_account_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/s4-account-map/add-s4-account-map/add-s4-account-map.component */ 25243);
/* harmony import */ var _components_s4_system_instance_add_s4_system_instance_add_s4_system_instance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/s4-system-instance/add-s4-system-instance/add-s4-system-instance.component */ 45551);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: "s4-system-instance",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.add_s4_system_instance },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_s4_system_instance_s4_system_instance_index_s4_system_instance_index_component__WEBPACK_IMPORTED_MODULE_0__.S4SystemInstanceIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.s4_system_instance_index },
            },
            {
                path: "add",
                component: _components_s4_system_instance_add_s4_system_instance_add_s4_system_instance_component__WEBPACK_IMPORTED_MODULE_3__.AddS4SystemInstanceComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.add_s4_system_instance },
            },
            {
                path: "edit/:s4SystemInstanceId",
                component: _components_s4_system_instance_add_s4_system_instance_add_s4_system_instance_component__WEBPACK_IMPORTED_MODULE_3__.AddS4SystemInstanceComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.add_s4_system_instance },
            },
        ],
    },
    {
        path: "s4-account-map",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.s4_account_map },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_s4_account_map_s4_account_map_index_s4_account_map_index_component__WEBPACK_IMPORTED_MODULE_1__.S4AccountMapIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.s4_account_map_index },
            },
            {
                path: "add",
                component: _components_s4_account_map_add_s4_account_map_add_s4_account_map_component__WEBPACK_IMPORTED_MODULE_2__.AddS4AccountMapComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.add_s4_account_map },
            },
            {
                path: "edit/:s4AccountMapId",
                component: _components_s4_account_map_add_s4_account_map_add_s4_account_map_component__WEBPACK_IMPORTED_MODULE_2__.AddS4AccountMapComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_5__.ViewsManager.add_s4_account_map },
            },
        ],
    },
];
class S4SetupRoutingModule {
}
S4SetupRoutingModule.ɵfac = function S4SetupRoutingModule_Factory(t) { return new (t || S4SetupRoutingModule)(); };
S4SetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: S4SetupRoutingModule });
S4SetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](S4SetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 43538:
/*!*********************************************!*\
  !*** ./src/app/s4-setup/s4-setup.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S4BusinessOneSetupModule": () => (/* binding */ S4BusinessOneSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_s4_account_map_s4_account_map_index_s4_account_map_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/s4-account-map/s4-account-map-index/s4-account-map-index.component */ 55091);
/* harmony import */ var _components_s4_account_map_add_s4_account_map_add_s4_account_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/s4-account-map/add-s4-account-map/add-s4-account-map.component */ 25243);
/* harmony import */ var _s4_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s4-setup-routing.module */ 951);
/* harmony import */ var _components_s4_system_instance_s4_system_instance_index_s4_system_instance_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/s4-system-instance/s4-system-instance-index/s4-system-instance-index.component */ 4696);
/* harmony import */ var _components_s4_system_instance_add_s4_system_instance_add_s4_system_instance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/s4-system-instance/add-s4-system-instance/add-s4-system-instance.component */ 45551);
/* harmony import */ var _components_s4_system_instance_s4_system_instance_methods_s4_system_instance_methods_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/s4-system-instance/s4-system-instance-methods/s4-system-instance-methods.component */ 2372);
/* harmony import */ var _components_s4_system_instance_s4_system_instance_purpose_s4_system_instance_purpose_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/s4-system-instance/s4-system-instance-purpose/s4-system-instance-purpose.component */ 11962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);










class S4BusinessOneSetupModule {
}
S4BusinessOneSetupModule.ɵfac = function S4BusinessOneSetupModule_Factory(t) { return new (t || S4BusinessOneSetupModule)(); };
S4BusinessOneSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: S4BusinessOneSetupModule });
S4BusinessOneSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _s4_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__.S4SetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](S4BusinessOneSetupModule, { declarations: [_components_s4_account_map_s4_account_map_index_s4_account_map_index_component__WEBPACK_IMPORTED_MODULE_1__.S4AccountMapIndexComponent,
        _components_s4_account_map_add_s4_account_map_add_s4_account_map_component__WEBPACK_IMPORTED_MODULE_2__.AddS4AccountMapComponent,
        _components_s4_system_instance_s4_system_instance_index_s4_system_instance_index_component__WEBPACK_IMPORTED_MODULE_4__.S4SystemInstanceIndexComponent,
        _components_s4_system_instance_add_s4_system_instance_add_s4_system_instance_component__WEBPACK_IMPORTED_MODULE_5__.AddS4SystemInstanceComponent,
        _components_s4_system_instance_s4_system_instance_methods_s4_system_instance_methods_component__WEBPACK_IMPORTED_MODULE_6__.S4SystemInstanceMethodsComponent,
        _components_s4_system_instance_s4_system_instance_purpose_s4_system_instance_purpose_component__WEBPACK_IMPORTED_MODULE_7__.S4SystemInstancePurposeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _s4_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__.S4SetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 86819:
/*!*************************************************************!*\
  !*** ./src/app/s4-setup/services/s4-account-map.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S4AccountMapService": () => (/* binding */ S4AccountMapService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _mapper_s4_account_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mapper/s4-account-map */ 29577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class S4AccountMapService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("S4AccountMapSetup/Create", data);
    }
    update(data) {
        return this.post("S4AccountMapSetup/Edit", data);
    }
    getList(params) {
        return this.get("S4AccountMapSetup/GetList", {
            params: {
                ...params,
                $expand: app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Variable,
            },
        });
    }
    getAll() {
        return this.get("S4AccountMapSetup/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            return (0,_mapper_s4_account_map__WEBPACK_IMPORTED_MODULE_2__.s4AccountGetAllToMap)(res.data);
        }));
    }
    getById(id) {
        return this.get("S4AccountMapSetup/GetAll", {
            params: {
                $filter: `id eq ${id}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("S4AccountMapSetup/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        return this.getAll();
    }
}
S4AccountMapService.ɵfac = function S4AccountMapService_Factory(t) { return new (t || S4AccountMapService)(); };
S4AccountMapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: S4AccountMapService, factory: S4AccountMapService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_s4-setup_s4-setup_module_ts.js.map