"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_sap-business-one-setup_sap-business-one-setup_module_ts"],{

/***/ 46376:
/*!************************************************************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/components/sap-account-map/add-sap-account-map/add-sap-account-map.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSapAccountMapComponent": () => (/* binding */ AddSapAccountMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sap-business-one-setup/mapper/sap-account-map */ 49252);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sap-business-one-setup/services/sap-account-map.service */ 74033);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/radio-button/radio-button.component */ 24724);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_dropdowns_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/payment-dropdown/payment-dropdown.component */ 70955);
/* harmony import */ var _shared_components_dropdowns_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/variable-by-payment-dropdown/variable-by-payment-dropdown.component */ 35501);
/* harmony import */ var _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/sap-system-instance-dropdown/sap-system-instance-dropdown.component */ 74137);
/* harmony import */ var _shared_components_dropdowns_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/sap-integration-purpose-by-system-instance-dropdown/sap-integration-purpose-by-system-instance-dropdown.component */ 74814);
/* harmony import */ var _shared_components_dropdowns_job_family_by_org_dropdown_job_family_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/job-family-by-org-dropdown/job-family-by-org-dropdown.component */ 76774);
/* harmony import */ var _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/bank-dropdown/bank-dropdown.component */ 75968);
/* harmony import */ var _shared_components_dropdowns_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 26511);
/* harmony import */ var _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/buttons/add-new-btn/add-new-btn.component */ 18825);
/* harmony import */ var _shared_components_dropdowns_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/job-title-by-org-dropdown/job-title-by-org-dropdown.component */ 28973);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 15549);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






























function AddSapAccountMapComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "app-add-new-btn", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("url", "/sap-business-one-setup/", ctx_r0.moduleId, "/sap-account-map/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("params", ctx_r0.parantParam);
} }
function AddSapAccountMapComponent_reset_form_btn_83_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "reset-form-btn", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AddSapAccountMapComponent_reset_form_btn_83_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "hidden-field": a0 }; };
class AddSapAccountMapComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(sapAccountMapService) {
        super();
        this.sapAccountMapService = sapAccountMapService;
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
            systemInstanceId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            integrationPurpose_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            payment_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            variable_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            accountOrPartnerCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            is_vendor: [null],
            is_Aggregated: [true],
            ignoreCostCenters: [null],
            organizationTypeId: [null],
            organization_ID: [null],
            // for radio btn (job title(true) / job families(false) / none(null))
            isJobtitleType: [true],
            jobTitle_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
            job_Title_Family_ID: [null],
            bothBankCash: [true],
            bank_ID: [null],
            is_Debit: [true],
            defualtOcrCode1: [null],
            defualtOcrCode2: [null],
            defualtOcrCode3: [null],
            defualtOcrCode4: [null],
            defualtOcrCode5: [null],
            defualtProj_Code: [null],
            udF1_Name: [null],
            udF1_Value: [null],
            udF2_Name: [null],
            udF2_Value: [null],
            udF3_Name: [null],
            udF3_Value: [null],
        });
        this.activatedRoute.paramMap.subscribe((params) => {
            this.sapAccountMapId = Number(params.get("sapAccountMapId")) ?? 0;
            // if (this.sapAccountMapId > 0 && this.CheckNoBusinessOrCompany())
            //   this.getById();
        });
    }
    onChangeBusinessAndCompanyId() {
        // this.sapAccountMap = null;
        if (this.sapAccountMapId > 0 && this.checkNoBusinessOrCompany())
            this.getById();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getById() {
        this.showLoading();
        this.sapAccountMapService
            .getById(this.sapAccountMapId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                let result = (0,app_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__.sapAccountGetAllToMap)(res.data);
                this.sapAccountMapToEdit(result[0]);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    sapAccountMapToEdit(sapAccountMap) {
        this.form.patchValue(sapAccountMap);
        // dropdown filtered by another
        this.formCtrls.integrationPurpose_ID.setValue(sapAccountMap.integrationPurpose_ID);
        this.formCtrls.variable_ID.setValue(sapAccountMap.variable_ID);
        this.formCtrls.organization_ID.setValue(sapAccountMap.organization_ID);
        setTimeout(() => {
            this.formCtrls.jobTitle_ID.setValue(sapAccountMap.jobTitle_ID);
            this.formCtrls.job_Title_Family_ID.setValue(sapAccountMap.job_Title_Family_ID);
        }, 20);
        // job radio buttons
        let isJobRadio = null;
        if (sapAccountMap.job_Title_Family_ID)
            isJobRadio = false;
        else if (sapAccountMap.jobTitle_ID)
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
                IntegrationPurpose_ID: this.form.value.integrationPurpose_ID,
                Payment_ID: this.form.value.payment_ID,
                Variable_ID: this.form.value.variable_ID,
                AccountOrPartnerCode: this.form.value.accountOrPartnerCode,
                Is_vendor: this.form.value.is_vendor ?? false,
                Is_Aggregated: this.form.value.is_Aggregated ?? false,
                IgnoreCostCenters: this.form.value.ignoreCostCenters ?? false,
                Organization_ID: this.form.value.organization_ID,
                JobTitle_ID: this.form.value.jobTitle_ID,
                Job_Title_Family_ID: this.form.value.job_Title_Family_ID,
                BothBankCash: this.form.value.bothBankCash ?? false,
                Bank_ID: this.form.value.bank_ID,
                Is_Debit: this.form.value.is_Debit ?? false,
                DefualtOcrCode1: this.form.value.defualtOcrCode1,
                DefualtOcrCode2: this.form.value.defualtOcrCode2,
                DefualtOcrCode3: this.form.value.defualtOcrCode3,
                DefualtOcrCode4: this.form.value.defualtOcrCode4,
                DefualtOcrCode5: this.form.value.defualtOcrCode5,
                DefualtProj_Code: this.form.value.defualtProj_Code,
                UDF1_Name: this.form.value.udF1_Name,
                UDF1_Value: this.form.value.udF1_Value,
                UDF2_Name: this.form.value.udF2_Name,
                UDF2_Value: this.form.value.udF2_Value,
                UDF3_Name: this.form.value.udF3_Name,
                UDF3_Value: this.form.value.udF3_Value,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.sapAccountMapService.create(model).subscribe((res) => {
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
        this.sapAccountMapService.update(model).subscribe((res) => {
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
        this.sapAccountMapId = data.id;
        this.formCtrls.id.setValue(this.sapAccountMapId);
        let url = `/sap-business-one-setup/${this.moduleId}/sap-account-map/edit/${this.sapAccountMapId}`;
        this.navigateTo(url);
        // this.sapAccountMap = data;
        this.formCtrls.is_Aggregated.setValue(data.is_Aggregated);
        // this.sapAccountMap.systemInstanceId = this.formCtrls.systemInstanceId.value;
        // this.sapAccountMap.organizationTypeId =
        //   this.formCtrls.organizationTypeId.value;
    }
    clearForm() {
        // if (this.sapAccountMapId == 0)
        this.form.reset({
            id: 0,
            is_Aggregated: true,
            isJobtitleType: true,
            bothBankCash: true,
            is_Debit: true,
        });
        // else this.sapAccountMapToEdit();
        this.submitted = false;
    }
    onChangeIsVendor(value) {
        if (value)
            this.formCtrls.is_Aggregated.setValue(false);
    }
    onChangeIsAggregated(value) {
        if (value)
            this.formCtrls.is_vendor.setValue(false);
    }
    onChangeIsJobRadio(value, firstTime = false) {
        if (!firstTime) {
            this.formCtrls.jobTitle_ID.reset();
            this.formCtrls.job_Title_Family_ID.reset();
        }
        if (value == true) {
            this.formCtrls.jobTitle_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]);
            this.formCtrls.job_Title_Family_ID.clearValidators();
        }
        else if (value == false) {
            this.formCtrls.job_Title_Family_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]);
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
}
AddSapAccountMapComponent.ɵfac = function AddSapAccountMapComponent_Factory(t) { return new (t || AddSapAccountMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](app_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_4__.SapAccountMapService)); };
AddSapAccountMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: AddSapAccountMapComponent, selectors: [["app-add-sap-account-map"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵInheritDefinitionFeature"]], decls: 84, vars: 97, consts: [[1, "row"], [1, "col-12"], ["addTitle", "sapAccountMap", "editTitle", "editSapAccountMap", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "systemInstanceControl", "submitted", "filter"], [3, "control", "paymentControl", "submitted", "filter"], [1, "col-md-3", "col-12"], ["label", "accountOrPartnerCode", 3, "control", "submitted"], ["label", "is_vendor", 1, "mtop-14", 3, "control", "onChange"], ["label", "is_Aggregated", 1, "mtop-14", 3, "control", "onChange"], ["label", "ignoreCostCenters", 1, "mtop-14", 3, "control"], [3, "control", "orgTypeControl", "submitted", "filter"], [1, "col-md-8", "col-12"], [1, "mtop-14", 3, "control", "radioList", "submitted", "change"], [1, "col-md-4", "col-12", 3, "ngClass"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter"], [1, "col-md-6", "col-12", 3, "ngClass"], ["label", "debitOrCredit", 3, "control", "radioList", "submitted"], [1, "col-md-4", "col-12"], ["label", "defualtOcrCode1", 3, "control", "submitted"], ["label", "defualtOcrCode2", 3, "control", "submitted"], ["label", "defualtOcrCode3", 3, "control", "submitted"], ["label", "defualtOcrCode4", 3, "control", "submitted"], ["label", "defualtOcrCode5", 3, "control", "submitted"], ["label", "defualtProj_Code", 3, "control", "submitted"], ["label", "udF1_Name", 3, "control", "submitted"], ["label", "udF1_Value", 3, "control", "submitted"], ["label", "udF2_Name", 3, "control", "submitted"], ["label", "udF2_Value", 3, "control", "submitted"], ["label", "udF3_Name", 3, "control", "submitted"], ["label", "udF3_Value", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AddSapAccountMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, AddSapAccountMapComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "mat-card-content", 5)(9, "div", 0)(10, "div", 1)(11, "form", 6)(12, "div", 0)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](14, "app-sap-system-instance-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](16, "app-sap-integration-purpose-by-system-instance-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](18, "app-payment-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "app-variable-by-payment-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](22, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "div", 11)(24, "app-check-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onChange", function AddSapAccountMapComponent_Template_app_check_box_onChange_24_listener($event) { return ctx.onChangeIsVendor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "div", 11)(26, "app-check-box", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onChange", function AddSapAccountMapComponent_Template_app_check_box_onChange_26_listener($event) { return ctx.onChangeIsAggregated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](28, "app-check-box", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](30, "app-org-types-dropdown-current-structure", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](32, "app-organization-by-org-type-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "div", 17)(34, "app-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function AddSapAccountMapComponent_Template_app_radio_button_change_34_listener($event) { return ctx.onChangeIsJobRadio($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](36, "app-job-title-by-org-dropdown", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](38, "app-job-family-by-org-dropdown", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "div", 7)(40, "app-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function AddSapAccountMapComponent_Template_app_radio_button_change_40_listener($event) { return ctx.onChangeIsBankRadio($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](42, "app-bank-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](44, "app-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](46, "app-input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](48, "app-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](50, "app-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](52, "app-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](54, "app-input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](56, "app-input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](57, "div", 23)(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](62, "app-input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](64, "app-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](65, "div", 23)(66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](70, "app-input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](72, "app-input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](73, "div", 23)(74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](78, "app-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](80, "app-input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](81, "mat-card-actions", 36)(82, "submit-btn", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onClick", function AddSapAccountMapComponent_Template_submit_btn_onClick_82_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](83, AddSapAccountMapComponent_reset_form_btn_83_Template, 1, 0, "reset-form-btn", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("url", "/sap-business-one-setup/", ctx.moduleId, "/sap-account-map/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.systemInstanceId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.integrationPurpose_ID)("systemInstanceControl", ctx.formCtrls.systemInstanceId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.payment_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.variable_ID)("paymentControl", ctx.formCtrls.payment_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.accountOrPartnerCode)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.is_vendor);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.is_Aggregated);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.ignoreCostCenters);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.organizationTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.organization_ID)("orgTypeControl", ctx.formCtrls.organizationTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.isJobtitleType)("radioList", ctx.jobTitleRadioList)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](91, _c0, !(ctx.formCtrls.isJobtitleType.value == true)));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.jobTitle_ID)("organizationControl", ctx.formCtrls.organization_ID)("organizationControlRequired", false)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](93, _c0, !(ctx.formCtrls.isJobtitleType.value == false)));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.job_Title_Family_ID)("organizationControl", ctx.formCtrls.organization_ID)("organizationControlRequired", false)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.bothBankCash)("radioList", ctx.bankRadioList)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](95, _c0, !(ctx.formCtrls.bothBankCash.value == true)));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.bank_ID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.is_Debit)("radioList", ctx.isDebitRadioList)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.defualtOcrCode1)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.defualtOcrCode2)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.defualtOcrCode3)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.defualtOcrCode4)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.defualtOcrCode5)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.defualtProj_Code)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](60, 85, "udF1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF1_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF1_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](68, 87, "udF2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF2_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF2_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](76, 89, "udF3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF3_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF3_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__.BackBtnComponent, _shared_components_dropdowns_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.PaymentDropdownComponent, _shared_components_dropdowns_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.VariableByPaymentDropdownComponent, _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.SapSystemInstanceDropdownComponent, _shared_components_dropdowns_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.SapIntegrationPurposeBySystemInstanceDropdownComponent, _shared_components_dropdowns_job_family_by_org_dropdown_job_family_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.JobFamilyDropdownComponent, _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.BankDropdownComponent, _shared_components_dropdowns_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.OrganizationByOrgTypeDropdownComponent, _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_16__.AddNewBtnComponent, _shared_components_dropdowns_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.JobTitleByOrgDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_18__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_19__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_20__.PageTitleComponent, _shared_components_dropdowns_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_21__.OrgTypesDropdownCurrentStructureComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_27__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslatePipe], styles: ["mat-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zYXAtYWNjb3VudC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLXNhcC1hY2NvdW50LW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 866:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/components/sap-account-map/sap-account-map-index/sap-account-map-index.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapAccountMapIndexComponent": () => (/* binding */ SapAccountMapIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sap-business-one-setup/mapper/sap-account-map */ 49252);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sap-business-one-setup/services/sap-account-map.service */ 74033);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/sap-system-instance-dropdown/sap-system-instance-dropdown.component */ 74137);
/* harmony import */ var _shared_components_dropdowns_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/sap-integration-purpose-by-system-instance-dropdown/sap-integration-purpose-by-system-instance-dropdown.component */ 74814);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















class SapAccountMapIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(sapAccountMapService) {
        super();
        this.sapAccountMapService = sapAccountMapService;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "variables",
            "integrationPurpose",
            "accountOrPartnerCode",
            "accountType",
            "actions",
        ];
        this.optionalColomns = [
            "bothBankCash",
            "is_Aggregated",
            "is_vendor",
            "ignoreCostCenters",
            "defualtOcrCode1",
            "defualtOcrCode2",
            "defualtOcrCode3",
            "defualtOcrCode4",
            "defualtOcrCode5",
            "defualtProj_Code",
            "udF1_Name",
            "udF1_Value",
            "udF2_Name",
            "udF2_Value",
            "udF3_Name",
            "udF3_Value",
        ];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
        this.form = this.fb.group({
            systemInstance: [null],
            integrationPurpose_ID: [null],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    searchList() {
        if (!this.form?.value.integrationPurpose_ID)
            this.warning("chooseIntegrationPurpose");
        else {
            let filter = {
                $filter: `IntegrationPurpose_ID eq ${this.form.value.integrationPurpose_ID}`,
            };
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
        this.sapAccountMapService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource((0,app_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__.sapAccountToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(sapAccountMap) {
        let msg = this.msgTranslate(`${sapAccountMap.variables} - ${sapAccountMap.integrationPurpose}`);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(sapAccountMap);
        });
    }
    delete(sapAccountMap) {
        this.showLoading();
        this.sapAccountMapService.Delete(sapAccountMap.id).subscribe((res) => {
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
}
SapAccountMapIndexComponent.ɵfac = function SapAccountMapIndexComponent_Factory(t) { return new (t || SapAccountMapIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_3__.SapAccountMapService)); };
SapAccountMapIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SapAccountMapIndexComponent, selectors: [["app-sap-account-map-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 16, consts: [[1, "row"], [1, "col-12"], ["title", "sapAccountMap", 3, "globalFunctions"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "filter"], [3, "control", "systemInstanceControl", "filter"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function SapAccountMapIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-card-content", 3)(7, "div", 0)(8, "div", 1)(9, "form", 4)(10, "div", 0)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "app-sap-system-instance-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-sap-integration-purpose-by-system-instance-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-card-actions", 8)(16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SapAccountMapIndexComponent_Template_button_click_16_listener() { return ctx.searchList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "reset-form-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SapAccountMapIndexComponent_Template_reset_form_btn_click_19_listener() { return ctx.resetSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "app-material-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChangePage", function SapAccountMapIndexComponent_Template_app_material_table_onChangePage_21_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function SapAccountMapIndexComponent_Template_app_material_table_deleteRow_21_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.systemInstance)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.integrationPurpose_ID)("systemInstanceControl", ctx.formCtrls.systemInstance)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 14, "General.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.SapSystemInstanceDropdownComponent, _shared_components_dropdowns_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.SapIntegrationPurposeBySystemInstanceDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXAtYWNjb3VudC1tYXAtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 25082:
/*!************************************************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/components/sap-loan-type-account/sap-loan-type-account.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapLoanTypeAccountComponent": () => (/* binding */ SapLoanTypeAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_sap_business_one_setup_mapper_sap_loan_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sap-business-one-setup/mapper/sap-loan-type */ 96237);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_sap_business_one_setup_services_sap_loan_type_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sap-business-one-setup/services/sap-loan-type-account.service */ 26575);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/dropdowns/sap-system-instance-dropdown/sap-system-instance-dropdown.component */ 74137);
/* harmony import */ var _shared_components_dropdowns_loan_types_dropdown_loan_types_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/dropdowns/loan-types-dropdown/loan-types-dropdown.component */ 14149);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 88035);





















function SapLoanTypeAccountComponent_reset_form_btn_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "reset-form-btn", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SapLoanTypeAccountComponent_reset_form_btn_23_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
class SapLoanTypeAccountComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(sapLoanTypeAccountService) {
        super();
        this.sapLoanTypeAccountService = sapLoanTypeAccountService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "debitAccount", "sapSystem", "loanType", "actions"];
        this.optionalColomns = ["creditAccount", "isVendor"];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            sapSystemId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            loanTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            debitAccount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            creditAccount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            isVendor: [null],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.firstPage);
    }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.sapLoanTypeAccountService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource((0,app_sap_business_one_setup_mapper_sap_loan_type__WEBPACK_IMPORTED_MODULE_0__.sapLoanTypeToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
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
                ID: this.form.value.id,
                SapSystemId: this.form.value.sapSystemId,
                LoanTypeId: this.form.value.loanTypeId,
                DebitAccount: this.form.value.debitAccount,
                CreditAccount: this.form.value.creditAccount,
                IsVendor: this.form.value.isVendor ?? false,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.sapLoanTypeAccountService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.lastPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.sapLoanTypeAccountService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize); // current page after update
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    sapLoanTypeAccountToEdit(sapLoanTypeAccount) {
        this.form.patchValue(sapLoanTypeAccount);
        // console.log(this.form.value);
    }
    onDelete(sapLoanTypeAccount) {
        let msg = this.msgTranslate(sapLoanTypeAccount.debitAccount);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(sapLoanTypeAccount);
        });
    }
    delete(sapLoanTypeAccount) {
        this.showLoading();
        this.sapLoanTypeAccountService.Delete(sapLoanTypeAccount.id).subscribe((res) => {
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
                if (sapLoanTypeAccount.id == this.formCtrls.id.value)
                    this.clearForm();
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
SapLoanTypeAccountComponent.ɵfac = function SapLoanTypeAccountComponent_Factory(t) { return new (t || SapLoanTypeAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_sap_business_one_setup_services_sap_loan_type_account_service__WEBPACK_IMPORTED_MODULE_4__.SapLoanTypeAccountService)); };
SapLoanTypeAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: SapLoanTypeAccountComponent, selectors: [["app-sap-loan-type-account"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 21, consts: [[1, "row"], [1, "col-12"], ["addTitle", "sapLoanTypeAccount", "editTitle", "editSapLoanTypeAccount", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], ["label", "debitAccount", 3, "control", "submitted"], [1, "col-md-6", "col-12"], ["label", "creditAccount", 3, "control", "submitted"], ["label", "is_vendor", 1, "mtop-14", 3, "control"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function SapLoanTypeAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-card-content", 3)(7, "div", 0)(8, "div", 1)(9, "form", 4)(10, "div", 0)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "app-sap-system-instance-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "app-loan-types-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "app-check-box", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-card-actions", 11)(22, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function SapLoanTypeAccountComponent_Template_submit_btn_onClick_22_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, SapLoanTypeAccountComponent_reset_form_btn_23_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "app-material-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChangePage", function SapLoanTypeAccountComponent_Template_app_material_table_onChangePage_25_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function SapLoanTypeAccountComponent_Template_app_material_table_editRow_25_listener($event) { return ctx.sapLoanTypeAccountToEdit($event); })("deleteRow", function SapLoanTypeAccountComponent_Template_app_material_table_deleteRow_25_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.sapSystemId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.loanTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.debitAccount)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.creditAccount)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.isVendor);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.SapSystemInstanceDropdownComponent, _shared_components_dropdowns_loan_types_dropdown_loan_types_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.LoanTypesDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXAtbG9hbi10eXBlLWFjY291bnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 16932:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/components/system-instance/system-instance-index/system-instance-index.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemInstanceIndexComponent": () => (/* binding */ SystemInstanceIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_sap_business_one_setup_services_system_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sap-business-one-setup/services/system-instance.service */ 52104);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class SystemInstanceIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(systemInstanceService) {
        super();
        this.systemInstanceService = systemInstanceService;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
        this.optionalColomns = [
            "serverName",
            "licenseServer",
            "dbUserName",
            "dbPassWord",
            "companyDB",
            "userName",
            "password",
            "unit_Mesaure",
            "enumDbServerType",
        ];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
    }
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
        this.systemInstanceService
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
    onDelete(systemInstance) {
        let msg = this.msgTranslate(systemInstance.ar_Name, systemInstance.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(systemInstance);
        });
    }
    delete(systemInstance) {
        this.showLoading();
        this.systemInstanceService.Delete(systemInstance.id).subscribe((res) => {
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
}
SystemInstanceIndexComponent.ɵfac = function SystemInstanceIndexComponent_Factory(t) { return new (t || SystemInstanceIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_sap_business_one_setup_services_system_instance_service__WEBPACK_IMPORTED_MODULE_2__.SystemInstanceService)); };
SystemInstanceIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SystemInstanceIndexComponent, selectors: [["app-system-instance-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 7, consts: [[1, "row"], [1, "col-12"], ["title", "sapSystemInstance", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function SystemInstanceIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function SystemInstanceIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function SystemInstanceIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeXN0ZW0taW5zdGFuY2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 49252:
/*!******************************************************************!*\
  !*** ./src/app/sap-business-one-setup/mapper/sap-account-map.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sapAccountGetAllToMap": () => (/* binding */ sapAccountGetAllToMap),
/* harmony export */   "sapAccountToMap": () => (/* binding */ sapAccountToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function sapAccountGetAllToMap(violations) {
    return violations.map((sapAccount) => {
        return {
            ...sapAccount._I_PAY_Variable_SAP_SystemInstance_AccountNumber_COMM_Bank,
            organizationTypeId: sapAccount.orgTypeId,
            systemInstanceId: sapAccount._I_PAY_Variable_SAP_SystemInstance_AccountNumber_COMM_Bank
                .saP_IntegrationPurpose?.systemInstance_ID,
        };
    });
}
function sapAccountToMap(violations) {
    return violations.map((sapAccount) => {
        return {
            ...sapAccount,
            integrationPurpose: sapAccount.saP_IntegrationPurpose.name,
            accountType: sapAccount.is_Debit ? "Debit" : "Credit",
            variables: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(sapAccount.pay_Variable?.arName, sapAccount.pay_Variable?.name),
            bothBankCash: sapAccount.bothBankCash && !sapAccount.bank_ID ? true : false,
        };
    });
}


/***/ }),

/***/ 96237:
/*!****************************************************************!*\
  !*** ./src/app/sap-business-one-setup/mapper/sap-loan-type.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sapLoanTypeToMap": () => (/* binding */ sapLoanTypeToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function sapLoanTypeToMap(sapLoanTypes) {
    return sapLoanTypes.map((sapLoanType) => {
        return {
            ...sapLoanType,
            sapSystem: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(sapLoanType.saP_SystemInstance.ar_Name, sapLoanType.saP_SystemInstance.en_Name),
            loanType: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(sapLoanType.paY_Loan_TYPE.ar_Name, sapLoanType.paY_Loan_TYPE.en_Name),
        };
    });
}


/***/ }),

/***/ 42146:
/*!*********************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/sap-business-one-setup-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapBusinessOneSetupRoutingModule": () => (/* binding */ SapBusinessOneSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_system_instance_system_instance_index_system_instance_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/system-instance/system-instance-index/system-instance-index.component */ 16932);
/* harmony import */ var _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/system-instance/add-system-instance/add-system-instance.component */ 98838);
/* harmony import */ var _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sap-account-map/add-sap-account-map/add-sap-account-map.component */ 46376);
/* harmony import */ var _components_sap_account_map_sap_account_map_index_sap_account_map_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sap-account-map/sap-account-map-index/sap-account-map-index.component */ 866);
/* harmony import */ var _components_sap_loan_type_account_sap_loan_type_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sap-loan-type-account/sap-loan-type-account.component */ 25082);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    {
        path: "system-instance",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.system_instance },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_5__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_system_instance_system_instance_index_system_instance_index_component__WEBPACK_IMPORTED_MODULE_0__.SystemInstanceIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.system_instance_index },
            },
            {
                path: "add",
                component: _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemInstanceComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_system_instance },
            },
            {
                path: "edit/:systemInstanceId",
                component: _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemInstanceComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_system_instance },
            },
        ],
    },
    {
        path: "sap-account-map",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.sap_account_map },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_5__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_sap_account_map_sap_account_map_index_sap_account_map_index_component__WEBPACK_IMPORTED_MODULE_3__.SapAccountMapIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.sap_account_map_index },
            },
            {
                path: "add",
                component: _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_2__.AddSapAccountMapComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_sap_account_map },
            },
            {
                path: "edit/:sapAccountMapId",
                component: _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_2__.AddSapAccountMapComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_sap_account_map },
            },
        ],
    },
    {
        path: "sap-loan-type-account",
        component: _components_sap_loan_type_account_sap_loan_type_account_component__WEBPACK_IMPORTED_MODULE_4__.SapLoanTypeAccountComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.sap_loan_type_account },
    },
];
class SapBusinessOneSetupRoutingModule {
}
SapBusinessOneSetupRoutingModule.ɵfac = function SapBusinessOneSetupRoutingModule_Factory(t) { return new (t || SapBusinessOneSetupRoutingModule)(); };
SapBusinessOneSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SapBusinessOneSetupRoutingModule });
SapBusinessOneSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SapBusinessOneSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 77068:
/*!*************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/sap-business-one-setup.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapBusinessOneSetupModule": () => (/* binding */ SapBusinessOneSetupModule)
/* harmony export */ });
/* harmony import */ var _components_sap_loan_type_account_sap_loan_type_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sap-loan-type-account/sap-loan-type-account.component */ 25082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _sap_business_one_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sap-business-one-setup-routing.module */ 42146);
/* harmony import */ var _components_system_instance_system_instance_index_system_instance_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/system-instance/system-instance-index/system-instance-index.component */ 16932);
/* harmony import */ var _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/system-instance/add-system-instance/add-system-instance.component */ 98838);
/* harmony import */ var _components_system_instance_system_instance_purpose_system_instance_purpose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/system-instance/system-instance-purpose/system-instance-purpose.component */ 93332);
/* harmony import */ var _components_sap_account_map_sap_account_map_index_sap_account_map_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sap-account-map/sap-account-map-index/sap-account-map-index.component */ 866);
/* harmony import */ var _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sap-account-map/add-sap-account-map/add-sap-account-map.component */ 46376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);










class SapBusinessOneSetupModule {
}
SapBusinessOneSetupModule.ɵfac = function SapBusinessOneSetupModule_Factory(t) { return new (t || SapBusinessOneSetupModule)(); };
SapBusinessOneSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SapBusinessOneSetupModule });
SapBusinessOneSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _sap_business_one_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__.SapBusinessOneSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SapBusinessOneSetupModule, { declarations: [_components_system_instance_system_instance_index_system_instance_index_component__WEBPACK_IMPORTED_MODULE_3__.SystemInstanceIndexComponent,
        _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_4__.AddSystemInstanceComponent,
        _components_system_instance_system_instance_purpose_system_instance_purpose_component__WEBPACK_IMPORTED_MODULE_5__.SystemInstancePurposeComponent,
        _components_sap_account_map_sap_account_map_index_sap_account_map_index_component__WEBPACK_IMPORTED_MODULE_6__.SapAccountMapIndexComponent,
        _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_7__.AddSapAccountMapComponent,
        _components_sap_loan_type_account_sap_loan_type_account_component__WEBPACK_IMPORTED_MODULE_0__.SapLoanTypeAccountComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _sap_business_one_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__.SapBusinessOneSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 74033:
/*!****************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/services/sap-account-map.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapAccountMapService": () => (/* binding */ SapAccountMapService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SapAccountMapService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("SapB1AccountMapSetup/Create", data);
    }
    update(data) {
        return this.post("SapB1AccountMapSetup/Edit", data);
    }
    getList(params) {
        return this.get("SapB1AccountMapSetup/GetList", {
            params: {
                ...params,
                $expand: app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Variable,
            },
        });
    }
    getAll() {
        return this.get("SapB1AccountMapSetup/GetAll");
    }
    getById(id) {
        return this.get("SapB1AccountMapSetup/GetAll", {
            params: {
                $filter: `id eq ${id}`,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.SAP_IntegrationPurpose}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("SapB1AccountMapSetup/Delete", {
            params: { Id: Id },
        });
    }
}
SapAccountMapService.ɵfac = function SapAccountMapService_Factory(t) { return new (t || SapAccountMapService)(); };
SapAccountMapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SapAccountMapService, factory: SapAccountMapService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 26575:
/*!**********************************************************************************!*\
  !*** ./src/app/sap-business-one-setup/services/sap-loan-type-account.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapLoanTypeAccountService": () => (/* binding */ SapLoanTypeAccountService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class SapLoanTypeAccountService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("SapB1LoanTypeSetup/Create", data);
    }
    update(data) {
        return this.post("SapB1LoanTypeSetup/Edit", data);
    }
    getList(params) {
        return this.get("SapB1LoanTypeSetup/GetList", {
            params: params,
        });
    }
    Delete(Id) {
        return this.delete("SapB1LoanTypeSetup/Delete", {
            params: { Id: Id },
        });
    }
}
SapLoanTypeAccountService.ɵfac = function SapLoanTypeAccountService_Factory(t) { return new (t || SapLoanTypeAccountService)(); };
SapLoanTypeAccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SapLoanTypeAccountService, factory: SapLoanTypeAccountService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_sap-business-one-setup_sap-business-one-setup_module_ts.js.map