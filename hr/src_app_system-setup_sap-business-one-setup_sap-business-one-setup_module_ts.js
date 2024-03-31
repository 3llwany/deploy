"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_sap-business-one-setup_sap-business-one-setup_module_ts"],{

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

/***/ 7696:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/components/sap-account-map/add-sap-account-map/add-sap-account-map.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSapAccountMapComponent": () => (/* binding */ AddSapAccountMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_system_setup_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/sap-business-one-setup/mapper/sap-account-map */ 84935);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/sap-business-one-setup/services/sap-account-map.service */ 92762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _shared_components_dropdowns_payroll_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/payroll/payment-dropdown/payment-dropdown.component */ 21194);
/* harmony import */ var _shared_components_dropdowns_payroll_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/payroll/variable-by-payment-dropdown/variable-by-payment-dropdown.component */ 32012);
/* harmony import */ var _shared_components_dropdowns_sap_business_one_setup_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/sap-business-one-setup/sap-system-instance-dropdown/sap-system-instance-dropdown.component */ 37034);
/* harmony import */ var _shared_components_dropdowns_sap_business_one_setup_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/sap-business-one-setup/sap-integration-purpose-by-system-instance-dropdown/sap-integration-purpose-by-system-instance-dropdown.component */ 38982);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_job_family_by_org_dropdown_job_family_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management-setup/job-family-by-org-dropdown/job-family-by-org-dropdown.component */ 40363);
/* harmony import */ var _shared_components_dropdowns_hr_setup_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/hr-setup/bank-dropdown/bank-dropdown.component */ 52013);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management-setup/org/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 85443);
/* harmony import */ var _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management/job-title/job-title-by-org-dropdown/job-title-by-org-dropdown.component */ 15362);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management-setup/org-types/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 50260);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





























function AddSapAccountMapComponent_app_add_new_btn_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "app-add-new-btn", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("url", "/sap-business-one-setup/", ctx_r0.moduleId, "/sap-account-map/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddSapAccountMapComponent_reset_form_btn_82_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "reset-form-btn", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AddSapAccountMapComponent_reset_form_btn_82_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.clearForm()); });
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
                let result = (0,app_system_setup_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__.sapAccountGetAllToMap)(res.data);
                this.sapAccountMapToEdit(result[0]);
            }
            else
                this.errorList(res?.message?.messages);
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
                this.errorList(res?.message?.messages);
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
                this.errorList(res?.message?.messages);
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
AddSapAccountMapComponent.ɵfac = function AddSapAccountMapComponent_Factory(t) { return new (t || AddSapAccountMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](app_system_setup_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_4__.SapAccountMapService)); };
AddSapAccountMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: AddSapAccountMapComponent, selectors: [["app-add-sap-account-map"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵInheritDefinitionFeature"]], decls: 83, vars: 97, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "sapAccountMap", "editTitle", "editSapAccountMap", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "systemInstanceControl", "submitted", "filter"], [3, "control", "paymentControl", "submitted", "filter"], [1, "col-md-3", "col-12"], ["label", "accountOrPartnerCode", 3, "control", "submitted"], ["label", "is_vendor", 1, "mtop-14", 3, "control", "onChange"], ["label", "is_Aggregated", 1, "mtop-14", 3, "control", "onChange"], ["label", "ignoreCostCenters", 1, "mtop-14", 3, "control"], [3, "control", "orgTypeControl", "submitted", "filter"], [1, "col-md-8", "col-12"], [1, "mtop-14", 3, "control", "radioList", "submitted", "change"], [1, "col-md-4", "col-12", 3, "ngClass"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter"], [1, "col-md-6", "col-12", 3, "ngClass"], ["label", "debitOrCredit", 3, "control", "radioList", "submitted"], [1, "col-md-4", "col-12"], ["label", "defualtOcrCode1", 3, "control", "submitted"], ["label", "defualtOcrCode2", 3, "control", "submitted"], ["label", "defualtOcrCode3", 3, "control", "submitted"], ["label", "defualtOcrCode4", 3, "control", "submitted"], ["label", "defualtOcrCode5", 3, "control", "submitted"], ["label", "defualtProj_Code", 3, "control", "submitted"], ["label", "udF1_Name", 3, "control", "submitted"], ["label", "udF1_Value", 3, "control", "submitted"], ["label", "udF2_Name", 3, "control", "submitted"], ["label", "udF2_Value", 3, "control", "submitted"], ["label", "udF3_Name", 3, "control", "submitted"], ["label", "udF3_Value", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AddSapAccountMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, AddSapAccountMapComponent_app_add_new_btn_5_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "mat-card-content", 6)(8, "div", 0)(9, "div", 1)(10, "form", 7)(11, "div", 0)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "app-sap-system-instance-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](15, "app-sap-integration-purpose-by-system-instance-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](17, "app-payment-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "app-variable-by-payment-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](21, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 12)(23, "app-check-box", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onChange", function AddSapAccountMapComponent_Template_app_check_box_onChange_23_listener($event) { return ctx.onChangeIsVendor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 12)(25, "app-check-box", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onChange", function AddSapAccountMapComponent_Template_app_check_box_onChange_25_listener($event) { return ctx.onChangeIsAggregated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](27, "app-check-box", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](29, "app-org-types-dropdown-current-structure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](31, "app-organization-by-org-type-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "div", 18)(33, "app-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function AddSapAccountMapComponent_Template_app_radio_button_change_33_listener($event) { return ctx.onChangeIsJobRadio($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](35, "app-job-title-by-org-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](37, "app-job-family-by-org-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "div", 8)(39, "app-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function AddSapAccountMapComponent_Template_app_radio_button_change_39_listener($event) { return ctx.onChangeIsBankRadio($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](41, "app-bank-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](43, "app-radio-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](45, "app-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](47, "app-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](49, "app-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](51, "app-input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](53, "app-input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](55, "app-input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](56, "div", 24)(57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](61, "app-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](63, "app-input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](64, "div", 24)(65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](69, "app-input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](70, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](71, "app-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](72, "div", 24)(73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](77, "app-input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](79, "app-input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](80, "mat-card-actions", 37)(81, "submit-btn", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onClick", function AddSapAccountMapComponent_Template_submit_btn_onClick_81_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](82, AddSapAccountMapComponent_reset_form_btn_82_Template, 1, 0, "reset-form-btn", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](59, 85, "udF1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF1_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF1_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](67, 87, "udF2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF2_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF2_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](75, 89, "udF3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF3_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("control", ctx.formCtrls.udF3_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardActions, _shared_components_dropdowns_payroll_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.PaymentDropdownComponent, _shared_components_dropdowns_payroll_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.VariableByPaymentDropdownComponent, _shared_components_dropdowns_sap_business_one_setup_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.SapSystemInstanceDropdownComponent, _shared_components_dropdowns_sap_business_one_setup_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_16__.SapIntegrationPurposeBySystemInstanceDropdownComponent, _shared_components_dropdowns_org_management_setup_job_family_by_org_dropdown_job_family_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.JobFamilyByOrgDropdownComponent, _shared_components_dropdowns_hr_setup_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_18__.BankDropdownComponent, _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_19__.OrganizationByOrgTypeDropdownComponent, _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_20__.JobTitleByOrgDropdownComponent, _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_21__.OrgTypesDropdownCurrentStructureComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe], styles: ["mat-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zYXAtYWNjb3VudC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLXNhcC1hY2NvdW50LW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 33428:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/components/sap-account-map/sap-account-map-index/sap-account-map-index.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapAccountMapIndexComponent": () => (/* binding */ SapAccountMapIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/sap-business-one-setup/mapper/sap-account-map */ 84935);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/sap-business-one-setup/services/sap-account-map.service */ 92762);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_sap_business_one_setup_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/sap-business-one-setup/sap-system-instance-dropdown/sap-system-instance-dropdown.component */ 37034);
/* harmony import */ var _shared_components_dropdowns_sap_business_one_setup_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/sap-business-one-setup/sap-integration-purpose-by-system-instance-dropdown/sap-integration-purpose-by-system-instance-dropdown.component */ 38982);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















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
        this.isLoaded = false;
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource((0,app_system_setup_sap_business_one_setup_mapper_sap_account_map__WEBPACK_IMPORTED_MODULE_0__.sapAccountToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(sapAccountMap) {
        let msg = this.msgTranslate(`${sapAccountMap.variables} - ${sapAccountMap.integrationPurpose}`);
        this.deleteDialog(msg).subscribe((confirm) => {
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    resetSearch() {
        this.form.reset();
        this.getList(this.firstPage);
    }
}
SapAccountMapIndexComponent.ɵfac = function SapAccountMapIndexComponent_Factory(t) { return new (t || SapAccountMapIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_system_setup_sap_business_one_setup_services_sap_account_map_service__WEBPACK_IMPORTED_MODULE_3__.SapAccountMapService)); };
SapAccountMapIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SapAccountMapIndexComponent, selectors: [["app-sap-account-map-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 17, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "sapAccountMap", 3, "globalFunctions"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "filter"], [3, "control", "systemInstanceControl", "filter"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "exportService", "page", "actions", "onChangePage", "deleteRow"]], template: function SapAccountMapIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "div", 0)(7, "div", 1)(8, "form", 5)(9, "div", 0)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-sap-system-instance-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-sap-integration-purpose-by-system-instance-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-card-actions", 9)(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SapAccountMapIndexComponent_Template_button_click_15_listener() { return ctx.searchList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SapAccountMapIndexComponent_Template_reset_form_btn_click_18_listener() { return ctx.resetSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChangePage", function SapAccountMapIndexComponent_Template_app_material_table_onChangePage_20_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function SapAccountMapIndexComponent_Template_app_material_table_deleteRow_20_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.systemInstance)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.integrationPurpose_ID)("systemInstanceControl", ctx.formCtrls.systemInstance)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 15, "General.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("exportService", ctx.sapAccountMapService)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_5__.ResetFormBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _shared_components_dropdowns_sap_business_one_setup_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.SapSystemInstanceDropdownComponent, _shared_components_dropdowns_sap_business_one_setup_sap_integration_purpose_by_system_instance_dropdown_sap_integration_purpose_by_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.SapIntegrationPurposeBySystemInstanceDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXAtYWNjb3VudC1tYXAtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 81750:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/components/sap-loan-type-account/sap-loan-type-account.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapLoanTypeAccountComponent": () => (/* binding */ SapLoanTypeAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_sap_business_one_setup_mapper_sap_loan_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/sap-business-one-setup/mapper/sap-loan-type */ 66339);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_sap_business_one_setup_services_sap_loan_type_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/sap-business-one-setup/services/sap-loan-type-account.service */ 20933);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_sap_business_one_setup_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/sap-business-one-setup/sap-system-instance-dropdown/sap-system-instance-dropdown.component */ 37034);
/* harmony import */ var _shared_components_dropdowns_payroll_setup_loan_types_dropdown_loan_types_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/payroll-setup/loan-types-dropdown/loan-types-dropdown.component */ 11526);




















function SapLoanTypeAccountComponent_reset_form_btn_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "reset-form-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SapLoanTypeAccountComponent_reset_form_btn_22_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.clearForm()); });
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
        this.isLoaded = false;
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource((0,app_system_setup_sap_business_one_setup_mapper_sap_loan_type__WEBPACK_IMPORTED_MODULE_0__.sapLoanTypeToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
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
                this.errorList(res?.message?.messages);
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    sapLoanTypeAccountToEdit(sapLoanTypeAccount) {
        this.form.patchValue(sapLoanTypeAccount);
        // console.log(this.form.value);
    }
    onDelete(sapLoanTypeAccount) {
        let msg = this.msgTranslate(sapLoanTypeAccount.debitAccount);
        this.deleteDialog(msg).subscribe((confirm) => {
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
SapLoanTypeAccountComponent.ɵfac = function SapLoanTypeAccountComponent_Factory(t) { return new (t || SapLoanTypeAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_system_setup_sap_business_one_setup_services_sap_loan_type_account_service__WEBPACK_IMPORTED_MODULE_4__.SapLoanTypeAccountService)); };
SapLoanTypeAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: SapLoanTypeAccountComponent, selectors: [["app-sap-loan-type-account"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 22, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "sapLoanTypeAccount", "editTitle", "editSapLoanTypeAccount", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], ["label", "debitAccount", 3, "control", "submitted"], [1, "col-md-6", "col-12"], ["label", "creditAccount", 3, "control", "submitted"], ["label", "is_vendor", 1, "mtop-14", 3, "control"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function SapLoanTypeAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "div", 0)(7, "div", 1)(8, "form", 5)(9, "div", 0)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "app-sap-system-instance-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "app-loan-types-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-check-box", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "mat-card-actions", 12)(21, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function SapLoanTypeAccountComponent_Template_submit_btn_onClick_21_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, SapLoanTypeAccountComponent_reset_form_btn_22_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "app-material-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChangePage", function SapLoanTypeAccountComponent_Template_app_material_table_onChangePage_24_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function SapLoanTypeAccountComponent_Template_app_material_table_editRow_24_listener($event) { return ctx.sapLoanTypeAccountToEdit($event); })("deleteRow", function SapLoanTypeAccountComponent_Template_app_material_table_deleteRow_24_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.sapLoanTypeAccountService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _shared_components_dropdowns_sap_business_one_setup_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.SapSystemInstanceDropdownComponent, _shared_components_dropdowns_payroll_setup_loan_types_dropdown_loan_types_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.LoanTypesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXAtbG9hbi10eXBlLWFjY291bnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 54893:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/components/system-instance/system-instance-index/system-instance-index.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemInstanceIndexComponent": () => (/* binding */ SystemInstanceIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_sap_business_one_setup_services_system_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/sap-business-one-setup/services/system-instance.service */ 44222);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);








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
        this.isLoaded = false;
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
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(systemInstance) {
        let msg = this.msgTranslate(systemInstance.ar_Name, systemInstance.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
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
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
SystemInstanceIndexComponent.ɵfac = function SystemInstanceIndexComponent_Factory(t) { return new (t || SystemInstanceIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_system_setup_sap_business_one_setup_services_system_instance_service__WEBPACK_IMPORTED_MODULE_2__.SystemInstanceService)); };
SystemInstanceIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SystemInstanceIndexComponent, selectors: [["app-system-instance-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "sapSystemInstance", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "exportService", "page", "actions", "onChangePage", "deleteRow"]], template: function SystemInstanceIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function SystemInstanceIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function SystemInstanceIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("exportService", ctx.systemInstanceService)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeXN0ZW0taW5zdGFuY2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 84935:
/*!*******************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/mapper/sap-account-map.ts ***!
  \*******************************************************************************/
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
                ?.saP_IntegrationPurpose?.systemInstance_ID,
        };
    });
}
function sapAccountToMap(violations) {
    return violations.map((sapAccount) => {
        return {
            ...sapAccount,
            integrationPurpose: sapAccount.saP_IntegrationPurpose?.name,
            accountType: sapAccount.is_Debit ? "Debit" : "Credit",
            variables: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(sapAccount.pay_Variable?.arName, sapAccount.pay_Variable?.name),
            bothBankCash: sapAccount.bothBankCash && !sapAccount.bank_ID ? true : false,
        };
    });
}


/***/ }),

/***/ 66339:
/*!*****************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/mapper/sap-loan-type.ts ***!
  \*****************************************************************************/
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
            sapSystem: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(sapLoanType.saP_SystemInstance?.ar_Name, sapLoanType.saP_SystemInstance?.en_Name),
            loanType: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(sapLoanType.paY_Loan_TYPE?.ar_Name, sapLoanType.paY_Loan_TYPE?.en_Name),
        };
    });
}


/***/ }),

/***/ 96305:
/*!**********************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/sap-business-one-setup-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapBusinessOneSetupRoutingModule": () => (/* binding */ SapBusinessOneSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_system_instance_system_instance_index_system_instance_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/system-instance/system-instance-index/system-instance-index.component */ 54893);
/* harmony import */ var _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/system-instance/add-system-instance/add-system-instance.component */ 43130);
/* harmony import */ var _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sap-account-map/add-sap-account-map/add-sap-account-map.component */ 7696);
/* harmony import */ var _components_sap_account_map_sap_account_map_index_sap_account_map_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sap-account-map/sap-account-map-index/sap-account-map-index.component */ 33428);
/* harmony import */ var _components_sap_loan_type_account_sap_loan_type_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sap-loan-type-account/sap-loan-type-account.component */ 81750);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











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
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemInstanceComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_system_instance },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:systemInstanceId",
                component: _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemInstanceComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_system_instance },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__.CheckIsViewAllowedGuard],
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
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_2__.AddSapAccountMapComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_sap_account_map },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:sapAccountMapId",
                component: _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_2__.AddSapAccountMapComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_sap_account_map },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "sap-loan-type-account",
        component: _components_sap_loan_type_account_sap_loan_type_account_component__WEBPACK_IMPORTED_MODULE_4__.SapLoanTypeAccountComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.sap_loan_type_account },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_7__.CheckIsViewAllowedGuard],
    },
];
class SapBusinessOneSetupRoutingModule {
}
SapBusinessOneSetupRoutingModule.ɵfac = function SapBusinessOneSetupRoutingModule_Factory(t) { return new (t || SapBusinessOneSetupRoutingModule)(); };
SapBusinessOneSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SapBusinessOneSetupRoutingModule });
SapBusinessOneSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SapBusinessOneSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 9160:
/*!**************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/sap-business-one-setup.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SapBusinessOneSetupModule": () => (/* binding */ SapBusinessOneSetupModule)
/* harmony export */ });
/* harmony import */ var _components_sap_loan_type_account_sap_loan_type_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sap-loan-type-account/sap-loan-type-account.component */ 81750);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _sap_business_one_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sap-business-one-setup-routing.module */ 96305);
/* harmony import */ var _components_system_instance_system_instance_index_system_instance_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/system-instance/system-instance-index/system-instance-index.component */ 54893);
/* harmony import */ var _components_system_instance_add_system_instance_add_system_instance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/system-instance/add-system-instance/add-system-instance.component */ 43130);
/* harmony import */ var _components_system_instance_system_instance_purpose_system_instance_purpose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/system-instance/system-instance-purpose/system-instance-purpose.component */ 51691);
/* harmony import */ var _components_sap_account_map_sap_account_map_index_sap_account_map_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sap-account-map/sap-account-map-index/sap-account-map-index.component */ 33428);
/* harmony import */ var _components_sap_account_map_add_sap_account_map_add_sap_account_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sap-account-map/add-sap-account-map/add-sap-account-map.component */ 7696);
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

/***/ 92762:
/*!*****************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/services/sap-account-map.service.ts ***!
  \*****************************************************************************************/
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
        return this.get("SapB1AccountMapSetup/GetAll", {
            params: {
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.SAP_IntegrationPurpose},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Org}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Core_Org_Structure_Org}`
            },
        }
        // ).pipe(
        //   map((res: IResponse<ISapAccountMapGetAllModel[]>) => {
        //     return res.data;
        //   })
        );
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
    exportExcel() {
        this.getAll();
    }
}
SapAccountMapService.ɵfac = function SapAccountMapService_Factory(t) { return new (t || SapAccountMapService)(); };
SapAccountMapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SapAccountMapService, factory: SapAccountMapService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 20933:
/*!***********************************************************************************************!*\
  !*** ./src/app/system-setup/sap-business-one-setup/services/sap-loan-type-account.service.ts ***!
  \***********************************************************************************************/
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
//# sourceMappingURL=src_app_system-setup_sap-business-one-setup_sap-business-one-setup_module_ts.js.map