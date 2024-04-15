"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_localization-setup_localization-setup_module_ts"],{

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

/***/ 63775:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-penalty-regulations/localization-add-penalty-regulations/loc-add-penalty-regulations.component.ts ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocAddPenaltyRegulationsComponent": () => (/* binding */ LocAddPenaltyRegulationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-penalty-regulations.service */ 51046);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_details_loc_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalty-regulations/localization-penalty-regulations-details/loc-penalty-regulations-details.component */ 64089);
















function LocAddPenaltyRegulationsComponent_app_add_new_btn_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-add-new-btn", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("url", "/localization-setup/", ctx_r0.moduleId, "/penalty-regulations/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function LocAddPenaltyRegulationsComponent_reset_form_btn_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LocAddPenaltyRegulationsComponent_reset_form_btn_13_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class LocAddPenaltyRegulationsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(penaltyRegulationsService) {
        super();
        this.penaltyRegulationsService = penaltyRegulationsService;
        this.submitted = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.penaltyId = Number(params.get("id")) ?? 0;
        });
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
        });
    }
    onChangeBusinessAndCompanyId() {
        // this.penaltyRegulation = null;
        if (this.penaltyId > 0 &&
            this.checkNoBusinessOrCompany() &&
            this.checkNoVersionOrCountry())
            this.getById();
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getById() {
        this.showLoading();
        this.penaltyRegulationsService
            .getById(this.penaltyId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.form.patchValue(res.data[0]);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Name: this.form.value.name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.penaltyRegulationsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.penaltyId = res.data.id;
                this.formCtrls.id.setValue(this.penaltyId);
                let url = `/localization-setup/${this.moduleId}/penalty-regulations/edit/${this.penaltyId}`;
                this.navigateTo(url);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.penaltyRegulationsService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        // if (this.penaltyRegulationId == 0)
        this.form.reset({ id: 0 });
        // else this.penaltyRegulationToEdit();
        this.submitted = false;
    }
}
LocAddPenaltyRegulationsComponent.ɵfac = function LocAddPenaltyRegulationsComponent_Factory(t) { return new (t || LocAddPenaltyRegulationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_3__.LocPenaltyRegulationsService)); };
LocAddPenaltyRegulationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: LocAddPenaltyRegulationsComponent, selectors: [["app-add-penalty-regulations"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 10, consts: [[1, "form-card"], ["addTitle", "penaltyRegulations", "editTitle", "editPenaltyRegulation", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], [3, "id", "onClick"], [3, "penaltyRegulationId"], [3, "click"]], template: function LocAddPenaltyRegulationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, LocAddPenaltyRegulationsComponent_app_add_new_btn_3_Template, 1, 2, "app-add-new-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-back-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "div", 5)(7, "div", 6)(8, "form", 7)(9, "div", 5)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "mat-card-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, LocAddPenaltyRegulationsComponent_reset_form_btn_13_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function LocAddPenaltyRegulationsComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-penalty-regulations-details", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("url", "/localization-setup/", ctx.moduleId, "/penalty-regulations/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("penaltyRegulationId", ctx.penaltyId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_details_loc_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_10__.LocPenaltyRegulationsDetailsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtYWRkLXBlbmFsdHktcmVndWxhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 64089:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-penalty-regulations/localization-penalty-regulations-details/loc-penalty-regulations-details.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocPenaltyRegulationsDetailsComponent": () => (/* binding */ LocPenaltyRegulationsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_localization_penalty_regulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/localization-penalty-regulation */ 71155);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_penalty_regulations_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-penalty-regulations-details.service */ 48039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _shared_components_dropdowns_localization_setup_violation_dropdown_violation_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/localization-setup/violation-dropdown/violation-dropdown.component */ 59145);
/* harmony import */ var app_shared_components_dropdowns_localization_setup_penalty_dropdown_penalties_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/components/dropdowns/localization-setup/penalty-dropdown/penalties-dropdown.component */ 83237);



















function LocPenaltyRegulationsDetailsComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LocPenaltyRegulationsDetailsComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function LocPenaltyRegulationsDetailsComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "app-material-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function LocPenaltyRegulationsDetailsComponent_ng_container_17_Template_app_material_table_editRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.penaltyRegulationToEdit($event)); })("deleteRow", function LocPenaltyRegulationsDetailsComponent_ng_container_17_Template_app_material_table_deleteRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false);
} }
const _c0 = function (a0) { return { "hidden-field": a0 }; };
class LocPenaltyRegulationsDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(penaltyRegulationsDetailsService) {
        super();
        this.penaltyRegulationsDetailsService = penaltyRegulationsDetailsService;
        this.selectedPenaltyRegulationDetails = null;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "violation",
            "penalty",
            "repetition_No",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
        this.selectedViolation = null;
    }
    ngOnInit() {
        this.form = this.fb.group({
            Penalty_Regulation_ID: [this.penaltyRegulationId, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            violation_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            repetition_No: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.digits, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.gte(0)],
            ],
            penalty_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.checkNoVersionOrCountry() && this.penaltyRegulationId > 0) {
            this.getAll();
        }
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        this.penaltyRegulationsDetailsService
            .getAllByPenaltyRegulationId(this.penaltyRegulationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.isLoaded = true;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource((0,app_system_setup_localization_setup_mapper_localization_penalty_regulation__WEBPACK_IMPORTED_MODULE_0__.locPenaltyRegDetailsToMap)(res.data));
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    penaltyRegulationToEdit(penaltyRegulationDetails) {
        this.form.patchValue(penaltyRegulationDetails);
        this.onChangeViolation([penaltyRegulationDetails.loc_Violation]);
        this.selectedPenaltyRegulationDetails = penaltyRegulationDetails;
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = [
                {
                    Penalty_Regulation_ID: this.penaltyRegulationId,
                    Violation_ID: this.form.value.violation_ID,
                    Repetition_No: this.form.value.repetition_No ?? 0,
                    Penalty_ID: this.form.value.penalty_ID,
                },
            ];
            this.selectedPenaltyRegulationDetails
                ? this.update(model)
                : this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.penaltyRegulationsDetailsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        let editModel = {
            NewPenalityDetails: model[0],
            OldPenalityDetails: {
                Penalty_Regulation_ID: this.selectedPenaltyRegulationDetails.penalty_Regulation_ID,
                Violation_ID: this.selectedPenaltyRegulationDetails.violation_ID,
                Repetition_No: this.selectedPenaltyRegulationDetails.repetition_No ?? 0,
                Penalty_ID: this.selectedPenaltyRegulationDetails.penalty_ID,
            },
        };
        this.showLoading();
        this.penaltyRegulationsDetailsService
            .update(editModel)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(penaltyRegulationDetails) {
        let msg = this.msgTranslate(`${penaltyRegulationDetails.loc_Violation.ar_Name} - ${penaltyRegulationDetails.repetition_No}`, `${penaltyRegulationDetails.loc_Violation.en_Name} - ${penaltyRegulationDetails.repetition_No}`);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(penaltyRegulationDetails);
        });
    }
    delete(penaltyRegulationDetails) {
        let params = {
            Penalty_Regulation_ID: penaltyRegulationDetails.penalty_Regulation_ID,
            Repetition_No: penaltyRegulationDetails.repetition_No,
            Violation_ID: penaltyRegulationDetails.violation_ID,
        };
        this.showLoading();
        this.penaltyRegulationsDetailsService
            .Delete(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (penaltyRegulationDetails.penalty_Regulation_ID ==
                    this.selectedPenaltyRegulationDetails?.penalty_Regulation_ID &&
                    penaltyRegulationDetails.violation_ID ==
                        this.selectedPenaltyRegulationDetails?.violation_ID &&
                    penaltyRegulationDetails.repetition_No ==
                        this.selectedPenaltyRegulationDetails?.repetition_No)
                    this.clearForm();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset({ Penalty_Regulation_ID: this.penaltyRegulationId });
        this.submitted = false;
        this.selectedViolation = null;
        this.selectedPenaltyRegulationDetails = null;
    }
    onChangeViolation(violation) {
        this.selectedViolation = violation[0];
        if (this.selectedViolation?.ismoney) {
            this.formCtrls.repetition_No.clearValidators();
            this.formCtrls.penalty_ID.clearValidators();
        }
        else {
            this.formCtrls.repetition_No.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required,
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.gte(0),
            ]);
            this.formCtrls.penalty_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
        }
        this.formCtrls.repetition_No.updateValueAndValidity();
        this.formCtrls.penalty_ID.updateValueAndValidity();
    }
}
LocPenaltyRegulationsDetailsComponent.ɵfac = function LocPenaltyRegulationsDetailsComponent_Factory(t) { return new (t || LocPenaltyRegulationsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_penalty_regulations_details_service__WEBPACK_IMPORTED_MODULE_3__.LocPenaltyRegulationsDetailsService)); };
LocPenaltyRegulationsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: LocPenaltyRegulationsDetailsComponent, selectors: [["app-penalty-regulations-details"]], inputs: { penaltyRegulationId: "penaltyRegulationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 16, consts: [[1, "mt-2"], [1, "border-bottom", "pt-1", "pb-2"], ["title", "penaltyRegulationDetails"], [1, "container-fluid", "mb-0"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-3", "col-12"], [3, "control", "submitted", "change"], [1, "col-md-3", "col-12", 3, "ngClass"], [3, "control", "submitted"], ["label", "repetition_No", "type", "number", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], ["label", "save", 3, "disabled", "onClick"], [4, "ngIf"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "editRow", "deleteRow"]], template: function LocPenaltyRegulationsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-card-content", 3)(4, "div", 4)(5, "div", 5)(6, "form", 6)(7, "div", 4)(8, "div", 7)(9, "loc-violation-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function LocPenaltyRegulationsDetailsComponent_Template_loc_violation_dropdown_change_9_listener($event) { return ctx.onChangeViolation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "loc-penalties-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "mat-card-actions", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, LocPenaltyRegulationsDetailsComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function LocPenaltyRegulationsDetailsComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, LocPenaltyRegulationsDetailsComponent_ng_container_17_Template, 3, 6, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.violation_ID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](12, _c0, ctx.selectedViolation == null ? null : ctx.selectedViolation.ismoney));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.penalty_ID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](14, _c0, ctx.selectedViolation == null ? null : ctx.selectedViolation.ismoney));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.repetition_No)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedPenaltyRegulationDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.penaltyRegulationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.penaltyRegulationId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _shared_components_dropdowns_localization_setup_violation_dropdown_violation_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.ViolationDropdownComponent, app_shared_components_dropdowns_localization_setup_penalty_dropdown_penalties_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.PenaltiesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtcGVuYWx0eS1yZWd1bGF0aW9ucy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27408:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-penalty-regulations/localization-penalty-regulations-index/loc-penalty-regulations-index.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocPenaltyRegulationsIndexComponent": () => (/* binding */ LocPenaltyRegulationsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-penalty-regulations.service */ 51046);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);








class LocPenaltyRegulationsIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(penaltyRegulationsService) {
        super();
        this.penaltyRegulationsService = penaltyRegulationsService;
        this.mandatoryColomns = ["Ser", "id", "name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.checkNoVersionOrCountry())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
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
        this.penaltyRegulationsService
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
    onDelete(penaltyRegulation) {
        let msg = this.msgTranslate(penaltyRegulation.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(penaltyRegulation);
        });
    }
    delete(penaltyRegulation) {
        this.showLoading();
        this.penaltyRegulationsService
            .Delete(penaltyRegulation.id)
            .subscribe((res) => {
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
LocPenaltyRegulationsIndexComponent.ɵfac = function LocPenaltyRegulationsIndexComponent_Factory(t) { return new (t || LocPenaltyRegulationsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_2__.LocPenaltyRegulationsService)); };
LocPenaltyRegulationsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LocPenaltyRegulationsIndexComponent, selectors: [["app-penalty-regulations-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "penaltyRegulations", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function LocPenaltyRegulationsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function LocPenaltyRegulationsIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function LocPenaltyRegulationsIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.penaltyRegulationsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtcGVuYWx0eS1yZWd1bGF0aW9ucy1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 19286:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-vacation/localization-vacation-age/loc-vacation-age.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVacationAgeComponent": () => (/* binding */ LocVacationAgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_localization_vacation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/localization-vacation */ 18681);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_vacation_localization_vacation_age_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-vacation/localization-vacation-age.service */ 74290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);

















function LocVacationAgeComponent_reset_form_btn_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LocVacationAgeComponent_reset_form_btn_12_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LocVacationAgeComponent_app_material_table_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function LocVacationAgeComponent_app_material_table_14_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.vacationAgeToEdit($event)); })("deleteRow", function LocVacationAgeComponent_app_material_table_14_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("page", ctx_r1.page)("actions", ctx_r1.rowFunctions)("showPaginator", false);
} }
class LocVacationAgeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(vacationAgeServ) {
        super();
        this.vacationAgeServ = vacationAgeServ;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "From_Age",
            "To_Age",
            "balance",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.businessId > 0 && this.companyId > 0 && this.vacationId > 0) {
        // 	this.getVacationAgeList();
        // }
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            Vacation_ID: [0, { nonNullable: true }],
            From_Age: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.gt(0)]],
            To_Age: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.gt(0)]],
            balance: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.gt(0)]],
        }, {
            validators: [app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.greaterThan("From_Age", "To_Age")],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() &&
            this.checkNoVersionOrCountry() &&
            this.vacationId > 0)
            this.getVacationAgeList();
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
    }
    getVacationAgeList() {
        let params = {
            PageNumber: 1,
            pageSize: 1,
        };
        this.vacationAgeServ
            .getList(params, this.vacationId)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource((0,app_system_setup_localization_setup_mapper_localization_vacation__WEBPACK_IMPORTED_MODULE_0__.vacationAgeToMap)(res.data));
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
                id: this.form.value.id,
                Vacation_ID: this.vacationId,
                From_Age: this.form.value.From_Age,
                To_Age: this.form.value.To_Age,
                Balance: this.form.value.balance,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.vacationAgeServ
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.getVacationAgeList();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.vacationAgeServ
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.getVacationAgeList();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    vacationAgeToEdit(vacationAge) {
        this.form.patchValue(vacationAge);
    }
    onDelete(vacationAge) {
        let msg = this.msgTranslate(vacationAge.to_Age.toString());
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(vacationAge);
            }
        });
    }
    delete(model) {
        this.showLoading();
        this.vacationAgeServ.Delete(model.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getVacationAgeList();
                if (model.id == this.formCtrls.id.value)
                    this.clearForm();
            }
            else {
                this.errorList(res?.message?.messages);
            }
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
LocVacationAgeComponent.ɵfac = function LocVacationAgeComponent_Factory(t) { return new (t || LocVacationAgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_vacation_localization_vacation_age_service__WEBPACK_IMPORTED_MODULE_4__.LocVacationAgeService)); };
LocVacationAgeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LocVacationAgeComponent, selectors: [["app-vacation-age"]], inputs: { vacationId: "vacationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 11, consts: [[1, "mt-2"], ["addTitle", "addvacationAge", "editTitle", "editvacationAge", 3, "id"], [3, "formGroup"], [1, "row"], [1, "col-md-4", "col-12"], ["type", "number", "label", "From_Age", 3, "control", "submitted"], ["type", "number", "label", "To_Age", 3, "control", "submitted"], ["type", "number", "label", "balance", 3, "control", "submitted"], ["align", "end"], [3, "click", 4, "ngIf"], [3, "id", "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "showPaginator", "editRow", "deleteRow", 4, "ngIf"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "showPaginator", "editRow", "deleteRow"]], template: function LocVacationAgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card-subtitle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card-content")(3, "form", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-card-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, LocVacationAgeComponent_reset_form_btn_12_Template, 1, 0, "reset-form-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function LocVacationAgeComponent_Template_submit_btn_onClick_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, LocVacationAgeComponent_app_material_table_14_Template, 1, 7, "app-material-table", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.From_Age)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.To_Age)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.balance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtdmFjYXRpb24tYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 16302:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-vacation/localization-vacation-index/loc-vacation-index.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVacationIndexComponent": () => (/* binding */ LocVacationIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_localization_vacation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/localization-vacation */ 18681);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_vacation_localization_vacation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-vacation/localization-vacation.service */ 25187);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class LocVacationIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(vacationService) {
        super();
        this.vacationService = vacationService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "en_Name",
            "allow_Post",
            "max_Post_Days",
            "offecial_Vaction_Included",
            "actions",
        ];
        this.optionalColomns = [
            "display_In_Result",
            "variableCode",
            "defaultBalance",
            "day_Off_Included",
            "isRenew",
            "renew_Day",
            "renew_Month",
            "renew_Period",
            "number_of_Earning",
            "isDefault",
            "is_Paid",
            "canBeRequestedToday",
            "maxRelatedBal",
            "deductible_Value",
            "relatedVacationId",
            "relatedVacationPriority",
            "hasAttashment",
            "calculate_Balance",
            "calculate_Balance_By_Contract",
            "number_Days_month",
            "reportOrder",
            "gender",
        ];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) {
        //   this.getList(this.currentPage);
        // }
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.checkNoVersionOrCountry())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
    }
    getList(page, pageSize) {
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize) {
            this.page.pageSize = pageSize;
        }
        this.removePageParams();
        const params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.vacationService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType === app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_system_setup_localization_setup_mapper_localization_vacation__WEBPACK_IMPORTED_MODULE_0__.locVacationToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else {
                this.errorList(res?.message?.messages);
            }
        });
    }
    // navigateToEdit(vacation: IVacationModel) {
    //   this.router.navigate(
    //     [`attendance-setup/${this.moduleId}/edit/${vacation.att_Vacation.id}`],
    //     {
    //       queryParams: {
    //         parentView: this.getViewName,
    //         ...this.pageParams,
    //       },
    //     }
    //   );
    // }
    onDelete(vacation) {
        let msg = this.msgTranslate(vacation.ar_Name, vacation.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(vacation);
        });
    }
    delete(vacation) {
        this.showLoading();
        this.vacationService.Delete(vacation.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res.message.messageTypeName);
                if (this.dataSource.data.length == 1 && this.page.pageIndex > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else
                    this.getList(this.currentPage, this.page.pageSize);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
LocVacationIndexComponent.ɵfac = function LocVacationIndexComponent_Factory(t) { return new (t || LocVacationIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_vacation_localization_vacation_service__WEBPACK_IMPORTED_MODULE_3__.LocVacationService)); };
LocVacationIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LocVacationIndexComponent, selectors: [["app-vacation-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "vacationType", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function LocVacationIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function LocVacationIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function LocVacationIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.vacationService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtdmFjYXRpb24taW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 21070:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-vacation/localization-vacation-insurance/loc-vacation-insurance.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVacationInsuranceComponent": () => (/* binding */ LocVacationInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_insuranceSide_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/insuranceSide.enum */ 59036);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_vacation_localization_vacation_insurance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-vacation/localization-vacation-insurance.service */ 40535);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function LocVacationInsuranceComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-check-box", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx_r0.formCtrls.ignore_Insurance_Date);
} }
function LocVacationInsuranceComponent_reset_form_btn_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LocVacationInsuranceComponent_reset_form_btn_23_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LocVacationInsuranceComponent_app_material_table_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-material-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function LocVacationInsuranceComponent_app_material_table_25_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.vacationInsuranceEdit($event)); })("deleteRow", function LocVacationInsuranceComponent_app_material_table_25_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("page", ctx_r2.page)("showPaginator", false)("actions", ctx_r2.rowFunctions);
} }
class LocVacationInsuranceComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(vacationInsServ) {
        super();
        this.vacationInsServ = vacationInsServ;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "from_Year",
            "to_Year",
            "balance",
            "inside_CompanyString",
            "actions",
        ];
        this.optionalColomns = ["ignore_Insurance_Date"];
        this.isLoaded = false;
        this.insuranceSide = app_shared_enums_insuranceSide_enum__WEBPACK_IMPORTED_MODULE_0__.EInsuranceSide;
        this.insuranceSideRadio = [
            {
                value: app_shared_enums_insuranceSide_enum__WEBPACK_IMPORTED_MODULE_0__.EInsuranceSide.outside_Company,
                label: "outside_Company",
            },
            {
                value: app_shared_enums_insuranceSide_enum__WEBPACK_IMPORTED_MODULE_0__.EInsuranceSide.inside_Company,
                label: "inside_Company",
            },
        ];
    }
    ngOnInit() {
        // if (this.businessId > 0 && this.companyId > 0 && this.vacationId > 0)
        // 	this.getVacationInsuranceList();
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            Vacation_ID: [0, { nonNullable: true }],
            from_Year: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.gt(0)]],
            to_Year: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.gt(0)]],
            balance: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.gt(0)]],
            inside_Company: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            ignore_Insurance_Date: [false],
        }, {
            validators: [app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.greaterThan("from_Year", "to_Year")],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(null);
        }
        if (this.checkNoBusinessOrCompany() &&
            this.checkNoVersionOrCountry() &&
            this.vacationId > 0) {
            this.getVacationInsuranceList();
        }
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
    }
    getVacationInsuranceList() {
        let params = {
            PageNumber: 1,
            pageSize: 1,
        };
        this.vacationInsServ
            .getList(params, this.vacationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                res.data.map((e) => {
                    e.inside_CompanyString = this.translate(app_shared_enums_insuranceSide_enum__WEBPACK_IMPORTED_MODULE_0__.EInsuranceSide.getValue(e.inside_Company));
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(res.data);
                this.isLoaded = true;
            }
            else {
                this.errorList(res?.message?.messages);
            }
        });
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Vacation_ID: this.vacationId,
                From_Year: this.form.value.from_Year,
                To_Year: this.form.value.to_Year,
                Balance: this.form.value.balance,
                inside_Company: this.form.value.inside_Company,
                ignore_Insurance_Date: this.form.value.ignore_Insurance_Date,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.vacationInsServ
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.getVacationInsuranceList();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.vacationInsServ
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.getVacationInsuranceList();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    onDelete(vacationInsurance) {
        let msg = this.msgTranslate(vacationInsurance.to_Year.toString());
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(vacationInsurance);
            }
        });
    }
    vacationInsuranceEdit(vacationInsurance) {
        this.form.patchValue(vacationInsurance);
    }
    delete(model) {
        this.showLoading();
        this.vacationInsServ.Delete(model.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getVacationInsuranceList();
                if (model.id == this.formCtrls.id.value) {
                    this.clearForm();
                }
            }
            else {
                this.errorList(res?.message?.messages);
            }
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
LocVacationInsuranceComponent.ɵfac = function LocVacationInsuranceComponent_Factory(t) { return new (t || LocVacationInsuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_vacation_localization_vacation_insurance_service__WEBPACK_IMPORTED_MODULE_4__.LocVacationInsuranceService)); };
LocVacationInsuranceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: LocVacationInsuranceComponent, selectors: [["app-vacation-insurance"]], inputs: { vacationId: "vacationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 20, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "addvacationInsurance", "editTitle", "editvacationInsurance", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["type", "number", "label", "from_Year", 3, "control", "submitted"], ["type", "number", "label", "to_Year", 3, "control", "submitted"], ["type", "number", "label", "balance", 3, "control", "submitted"], [1, "col-md-5", "col-12"], [3, "control", "submitted", "radioList"], ["class", "col-md-3 col-12", 4, "ngIf"], ["align", "end"], [3, "click", 4, "ngIf"], [3, "id", "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "showPaginator", "actions", "editRow", "deleteRow", 4, "ngIf"], [1, "col-md-3", "col-12"], ["label", "ignore_Insurance_Date", 3, "control"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "showPaginator", "actions", "editRow", "deleteRow"]], template: function LocVacationInsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "form", 5)(7, "div", 0)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 0)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "app-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, LocVacationInsuranceComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "mat-card-actions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, LocVacationInsuranceComponent_reset_form_btn_23_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function LocVacationInsuranceComponent_Template_submit_btn_onClick_24_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, LocVacationInsuranceComponent_app_material_table_25_Template, 1, 7, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.from_Year)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.to_Year)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.balance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 18, "insuranceSide")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.inside_Company)("submitted", ctx.submitted)("radioList", ctx.insuranceSideRadio);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.inside_Company.value == ctx.insuranceSide.inside_Company);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtdmFjYXRpb24taW5zdXJhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45845:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-vacation/localization-vacation-type/loc-vacation-type.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVacationTypeComponent": () => (/* binding */ LocVacationTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_system_setup_localization_setup_mapper_localization_vacation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/localization-vacation */ 18681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_vacation_localization_vacation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-vacation/localization-vacation.service */ 25187);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);
/* harmony import */ var _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/hr-setup/gender-dropdown/gender-dropdown.component */ 99964);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_age_loc_vacation_age_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-age/loc-vacation-age.component */ 19286);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_insurance_loc_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-insurance/loc-vacation-insurance.component */ 21070);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





























function LocVacationTypeComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-add-new-btn", 46);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("url", "/localization-setup/", ctx_r1.moduleId, "/vacations/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("params", ctx_r1.pageParams);
} }
function LocVacationTypeComponent_app_back_btn_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-back-btn", 47);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("url", "/localization-setup/", ctx_r2.moduleId, "/vacations");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("params", ctx_r2.pageParams);
} }
function LocVacationTypeComponent_close_dialog_btn_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "close-dialog-btn", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function LocVacationTypeComponent_close_dialog_btn_8_Template_close_dialog_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r10.onCloseDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function LocVacationTypeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r4.formCtrls.relatedVacationPriority)("submitted", ctx_r4.submitted);
} }
function LocVacationTypeComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-check-box", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r5.formCtrls.isPostedWithRelatedVacation);
} }
function LocVacationTypeComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "app-check-box", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "app-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "app-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "app-check-box", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r6.formCtrls.allow_Post);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r6.formCtrls.max_Post_Days)("submitted", ctx_r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r6.formCtrls.post_Period_Month)("submitted", ctx_r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r6.formCtrls.isPostedPreviousYears);
} }
function LocVacationTypeComponent_reset_form_btn_72_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "reset-form-btn", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function LocVacationTypeComponent_reset_form_btn_72_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r12.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function LocVacationTypeComponent_mat_tab_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "app-vacation-age", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 4, "vacationAge")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("vacationId", ctx_r8.vacationId);
} }
function LocVacationTypeComponent_mat_tab_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "app-vacation-insurance", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 4, "vacationInsurance")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("vacationId", ctx_r9.vacationId);
} }
class LocVacationTypeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(vacationServ, data, dialogRef) {
        super();
        this.vacationServ = vacationServ;
        this.data = data;
        this.dialogRef = dialogRef;
        this.submitted = false;
        this.calculateBalance = [
            {
                value: 1,
                label: "hireDate",
                cssClass: "col-12 col-md-6",
            },
            {
                value: 2,
                label: "earningDate",
                cssClass: "col-12 col-md-6",
            },
        ];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.vacationId = params.vacationId ?? 0;
        });
        // if (this.businessId > 0 && this.companyId > 0 && this.vacationId > 0) {
        // 	this.getVactionById();
        // }
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            element_ID: [null],
            monthes_to_get_Balance: [null],
            allow_Post: [false],
            max_Post_Days: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            post_Period_Month: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            offecial_Vaction_Included: [false],
            day_Off_Included: [false],
            isRenew: [false],
            renew_Day: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            renew_Month: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            defaultBalance: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            renew_Period: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            number_of_Earning: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            isDefault: [false],
            is_Paid: [false],
            canBeRequestedToday: [false],
            // maxRelatedBal: [0], //additional property
            deductible_Value: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            relatedVacationId: [null],
            relatedVacationPriority: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            hasAttashment: [false],
            calculate_Balance: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            calculate_Balance_By_Contract: [false],
            number_Days_month: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__.CustomValidators.gte(0)]],
            reportOrder: [null],
            gender: [null],
            isPostedPreviousYears: [false],
            isPostedWithRelatedVacation: [false],
            isEgyptianLaw: [false],
            variableCode: [null, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.variableCodeValidators],
            display_In_Result: [false],
        });
        if (this.data.value) {
            this.formCtrls.ar_Name.setValue(this.data.value);
            this.formCtrls.en_Name.setValue(this.data.value);
        }
    }
    get formCtrls() {
        return this.form?.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.checkNoVersionOrCountry()) {
            this.getAllVacations();
            if (this.vacationId > 0)
                this.getVactionById();
        }
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                loc_Vacation: {
                    id: this.form.value.id,
                    en_Name: this.form.value.en_Name,
                    ar_Name: this.form.value.ar_Name,
                    element_ID: this.form.value.element_ID,
                    monthes_to_get_Balance: this.form.value.monthes_to_get_Balance,
                    allow_Post: this.form.value.allow_Post,
                    max_Post_Days: this.form.value.max_Post_Days,
                    post_Period_Month: this.form.value.post_Period_Month,
                    offecial_Vaction_Included: this.form.value.offecial_Vaction_Included,
                    day_Off_Included: this.form.value.day_Off_Included,
                    isRenew: this.form.value.isRenew,
                    renew_Day: this.form.value.renew_Day,
                    renew_Month: this.form.value.renew_Month,
                    defaultBalance: this.form.value.defaultBalance,
                    renew_Period: this.form.value.renew_Period,
                    number_of_Earning: this.form.value.number_of_Earning,
                    isDefault: this.form.value.isDefault,
                    is_Paid: this.form.value.is_Paid,
                    canBeRequestedToday: this.form.value.canBeRequestedToday,
                    //  maxRelatedBal: this.form.value.maxRelatedBal,
                    deductible_Value: this.form.value.deductible_Value,
                    relatedVacationId: this.form.value.relatedVacationId,
                    relatedVacationPriority: this.form.value.relatedVacationPriority,
                    hasAttashment: this.form.value.hasAttashment,
                    calculate_Balance: this.form.value.calculate_Balance,
                    calculate_Balance_By_Contract: this.form.value.calculate_Balance_By_Contract,
                    number_Days_month: this.form.value.number_Days_month,
                    reportOrder: this.form.value.reportOrder,
                    gender: this.form.value.gender,
                    isPostedPreviousYears: this.form.value.isPostedPreviousYears,
                    isPostedWithRelatedVacation: this.form.value.isPostedWithRelatedVacation,
                    isEgyptianLaw: this.form.value.isEgyptianLaw,
                },
                variableCode: this.form.value.variableCode,
                display_In_Result: this.form.value.display_In_Result,
            };
            model.loc_Vacation.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.vacationServ
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.vacationId = res.data.loc_Vacation.id;
                this.formCtrls.id.setValue(this.vacationId);
                let url = `/localization-setup/${this.moduleId}/vacations/edit/${this.vacationId}`;
                if (!this.data.isDialog)
                    this.navigateTo(url);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                // get element_ID after add
                this.formCtrls.element_ID.setValue(res.data.loc_Vacation.element_ID);
                if (this.data.isDialog)
                    this.dialogRef.close();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.vacationServ
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
                this.hideLoading();
            }
        });
    }
    getVactionById() {
        this.vacationServ
            .getById(this.vacationId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                let vacation = (0,app_system_setup_localization_setup_mapper_localization_vacation__WEBPACK_IMPORTED_MODULE_3__.locVacationToMap)(res.data)[0];
                this.form.patchValue(vacation);
                // this.formCtrls.variableCode.setValue(res.data[0].paY_Variable.code);
                // this.formCtrls.display_In_Result.setValue(res.data[0].paY_Variable.display_In_Result);
            }
        });
    }
    onSelectVacation(att_vacation) {
        if (att_vacation) {
            let vacation = att_vacation[0];
            if (!vacation) {
                this.formCtrls.renew_Period.enable();
                this.formCtrls.renew_Day.enable();
                this.formCtrls.renew_Month.enable();
            }
            else {
                this.formCtrls.renew_Period.setValue(vacation.renew_Period);
                this.formCtrls.renew_Day.setValue(vacation.renew_Day);
                this.formCtrls.renew_Month.setValue(vacation.renew_Month);
                this.formCtrls.renew_Period.disable();
                this.formCtrls.renew_Day.disable();
                this.formCtrls.renew_Month.disable();
            }
        }
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    onCloseDialog() {
        this.dialogRef.close();
    }
    getAllVacations() {
        this.vacationServ
            .getAll()
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.vacationList = (0,app_system_setup_localization_setup_mapper_localization_vacation__WEBPACK_IMPORTED_MODULE_3__.locVacationToMap)(res.data);
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
}
LocVacationTypeComponent.ɵfac = function LocVacationTypeComponent_Factory(t) { return new (t || LocVacationTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_vacation_localization_vacation_service__WEBPACK_IMPORTED_MODULE_4__.LocVacationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogRef)); };
LocVacationTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: LocVacationTypeComponent, selectors: [["app-vacation-type"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 76, vars: 62, consts: [[1, "row"], ["dialogContainer", ""], [1, "col-12"], [1, "pright-10", "pleft-10", "form-card"], ["title", "vacationType"], ["label", "addvacationType", 3, "url", "params", 4, "ngIf"], [3, "url", "params", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "view-tabs-group", "justify-content-start", 3, "dir"], [3, "label"], [1, "container-fluid"], [3, "formGroup"], [1, "row", "division", "mb-3", "px-1", "pt-3", "pb-0"], [1, "col-md-3", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["type", "text", "label", "variableCode", 3, "control", "submitted"], [3, "control", "submitted", "filter", "appendTo"], ["type", "number", "label", "defaultBalance", 3, "control", "submitted"], ["type", "number", "label", "number_Days_month", 3, "control", "submitted"], ["type", "number", "label", "number_of_Earning", 3, "control", "submitted"], ["label", "vacationType", 3, "control", "submitted", "filter", "List", "appendTo", "change"], ["class", "col-md-3 col-12", 4, "ngIf"], ["class", "col-md-3 col-12 p-2", 4, "ngIf"], [1, "col-md-3", "col-12", "p-2"], ["label", "isRenew", 3, "control"], ["type", "number", "label", "renew_Period", 3, "control", "submitted"], ["type", "number", "label", "renew_Day", 3, "control", "submitted"], ["type", "number", "label", "renew_Month", 3, "control", "submitted"], [4, "ngIf"], ["type", "number", "label", "deductible_Value", 3, "control", "submitted"], ["type", "number", "label", "monthes_to_get_Balance", 3, "control", "submitted"], ["type", "number", "label", "reportOrder", 3, "control", "submitted"], [1, "row", "division", "mb-3", "px-1", "pt-3"], ["label", "calculate_Balance_By_Contract", 3, "control"], ["label", "hasAttashment", 3, "control"], ["label", "isDefault", 3, "control"], ["label", "day_Off_Included", 3, "control"], ["label", "offecial_Vaction_Included", 3, "control"], ["label", "is_Paid", 3, "control"], ["label", "canBeRequestedToday", 3, "control"], ["label", "isEgyptianLaw", 3, "control"], ["label", "calculateBalance", 3, "control", "submitted", "radioList"], ["align", "end"], [3, "id", "onClick"], [3, "label", 4, "ngIf"], ["label", "addvacationType", 3, "url", "params"], [3, "url", "params"], [3, "click"], ["type", "number", "label", "relatedVacationPriority", 3, "control", "submitted"], ["label", "isPostedWithRelatedVacation", 3, "control"], ["label", "allow_Post", 3, "control"], ["type", "number", "label", "max_Post_Days", 3, "control", "submitted"], ["type", "number", "label", "post_Period_Month", 3, "control", "submitted"], ["label", "isPostedPreviousYears", 3, "control"], [3, "vacationId"]], template: function LocVacationTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "mat-card", 3)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, LocVacationTypeComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, LocVacationTypeComponent_app_back_btn_7_Template, 1, 2, "app-back-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LocVacationTypeComponent_close_dialog_btn_8_Template, 1, 0, "close-dialog-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "mat-tab-group", 8)(10, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "mat-card-content", 10)(14, "form", 11)(15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "app-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "app-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "app-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](23, "app-gender-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](25, "app-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](27, "app-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "app-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 13)(31, "app-prime-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function LocVacationTypeComponent_Template_app_prime_dropdown_change_31_listener($event) { return ctx.onSelectVacation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, LocVacationTypeComponent_div_32_Template, 2, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, LocVacationTypeComponent_div_33_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "div", 12)(35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](36, "app-check-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](38, "app-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](40, "app-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](42, "app-input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](43, LocVacationTypeComponent_ng_container_43_Template, 9, 6, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "div", 12)(45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](46, "app-input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](48, "app-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](50, "app-input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "div", 33)(52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](53, "app-check-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](55, "app-check-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](57, "app-check-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](59, "app-check-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](61, "app-check-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](63, "app-check-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](65, "app-check-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](67, "app-check-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](68, "div", 0)(69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](70, "app-radio-button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](71, "mat-card-actions", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](72, LocVacationTypeComponent_reset_form_btn_72_Template, 1, 0, "reset-form-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](73, "submit-btn", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onClick", function LocVacationTypeComponent_Template_submit_btn_onClick_73_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](74, LocVacationTypeComponent_mat_tab_74_Template, 4, 6, "mat-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](75, LocVacationTypeComponent_mat_tab_75_Template, 4, 6, "mat-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vacationId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.data.isDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.data.isDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 58, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 60, "vacationType")));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.variableCode)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.gender)("submitted", ctx.submitted)("filter", false)("appendTo", (ctx.data == null ? null : ctx.data.isDialog) ? _r0 : "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.defaultBalance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.number_Days_month)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.number_of_Earning)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.relatedVacationId)("submitted", ctx.submitted)("filter", true)("List", ctx.vacationList)("appendTo", (ctx.data == null ? null : ctx.data.isDialog) ? _r0 : "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formCtrls.relatedVacationId.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formCtrls.relatedVacationId.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.isRenew);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.renew_Period)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.renew_Day)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.renew_Month)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formCtrls.isRenew.value && !ctx.formCtrls.relatedVacationId.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.deductible_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.monthes_to_get_Balance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.reportOrder)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.calculate_Balance_By_Contract);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.hasAttashment);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.isDefault);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.day_Off_Included);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.offecial_Vaction_Included);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.is_Paid);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.canBeRequestedToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.isEgyptianLaw);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx.formCtrls.calculate_Balance)("submitted", ctx.submitted)("radioList", ctx.calculateBalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.data.isDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.data.isDialog);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_13__.CloseDialogBtnComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_14__.DropdownCoreComponent, _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.GenderDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, app_system_setup_localization_setup_components_localization_vacation_localization_vacation_age_loc_vacation_age_component__WEBPACK_IMPORTED_MODULE_16__.LocVacationAgeComponent, app_system_setup_localization_setup_components_localization_vacation_localization_vacation_insurance_loc_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_17__.LocVacationInsuranceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtdmFjYXRpb24tdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 45669:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-version/localization-version-index/loc-version-index.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVersionIndexComponent": () => (/* binding */ LocVersionIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_version_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-version.service */ 4165);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);









class LocVersionIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(versionService) {
        super();
        this.versionService = versionService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "name",
            "date",
            "active",
            "note",
            "countryName",
            "actions",
        ];
        this.optionalColomns = [];
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.checkNoVersionOrCountry())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
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
        this.versionService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                res.data.map((e) => {
                    e.countryName = (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.msgTranslate)(e.country?.ar_Name, e.country?.en_Name);
                    e.date = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDate(e.date);
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    delete(model) {
        this.showLoading();
        this.versionService.Delete(Number(model.id)).subscribe((res) => {
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
        let msg = this.msgTranslate(model.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(model);
        });
    }
}
LocVersionIndexComponent.ɵfac = function LocVersionIndexComponent_Factory(t) { return new (t || LocVersionIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_version_service__WEBPACK_IMPORTED_MODULE_3__.LocVersionService)); };
LocVersionIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LocVersionIndexComponent, selectors: [["app-version-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 8, consts: [[1, "index-card"], ["title", "versions", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function LocVersionIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function LocVersionIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function LocVersionIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.versionService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtdmVyc2lvbi1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16154:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/localization-violations/localization-violations-index/loc-violations-index.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocViolationsIndexComponent": () => (/* binding */ LocViolationsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_localization_violations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/localization-violations */ 73907);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_localization_violations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/localization-violations.service */ 56982);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class LocViolationsIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(violationsService) {
        super();
        this.violationsService = violationsService;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
        this.optionalColomns = [
            "variableCode",
            "display_In_Result",
            "violationType",
            "renew_Day",
            "fromValue",
            "toValue",
            "typeName",
            "moneyOrPenalty",
            "renew_By_Period",
        ];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.checkNoVersionOrCountry())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    onChangeVersionOrCountry() {
        this.onChangeBusinessAndCompanyId();
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
        this.violationsService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                let list = (0,app_system_setup_localization_setup_mapper_localization_violations__WEBPACK_IMPORTED_MODULE_0__.locViolationToMap)(res.data);
                list.map((violation) => {
                    violation.moneyOrPenalty = violation.ismoney
                        ? this.translate("money")
                        : this.translate("penalty");
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(list);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
                this.page.meta = res.meta;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(violation) {
        let msg = this.msgTranslate(violation.ar_Name, violation.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(violation);
        });
    }
    delete(violation) {
        this.showLoading();
        this.violationsService.Delete(violation.id).subscribe((res) => {
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
}
LocViolationsIndexComponent.ɵfac = function LocViolationsIndexComponent_Factory(t) { return new (t || LocViolationsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_localization_violations_service__WEBPACK_IMPORTED_MODULE_3__.LocViolationsService)); };
LocViolationsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LocViolationsIndexComponent, selectors: [["app-violations-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "violations", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function LocViolationsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function LocViolationsIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function LocViolationsIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.violationsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtdmlvbGF0aW9ucy1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 42047:
/*!**************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/localization-setup-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizationSetupRoutingModule": () => (/* binding */ LocalizationSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_system_setup_localization_setup_components_localization_version_localization_add_version_loc_add_version_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-version/localization-add-version/loc-add-version.component */ 47213);
/* harmony import */ var app_system_setup_localization_setup_components_localization_version_localization_version_index_loc_version_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-version/localization-version-index/loc-version-index.component */ 45669);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalties_loc_penalties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalties/loc-penalties.component */ 56195);
/* harmony import */ var app_system_setup_localization_setup_components_localization_violations_localization_violations_index_loc_violations_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-violations/localization-violations-index/loc-violations-index.component */ 16154);
/* harmony import */ var app_system_setup_localization_setup_components_localization_violations_localization_add_violation_loc_add_violation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-violations/localization-add-violation/loc-add-violation.component */ 37495);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_index_loc_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalty-regulations/localization-penalty-regulations-index/loc-penalty-regulations-index.component */ 27408);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalty_regulations_localization_add_penalty_regulations_loc_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalty-regulations/localization-add-penalty-regulations/loc-add-penalty-regulations.component */ 63775);
/* harmony import */ var app_system_setup_localization_setup_components_localization_violation_types_loc_violation_types_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-violation-types/loc-violation-types.component */ 16454);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_index_loc_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-index/loc-vacation-index.component */ 16302);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_type_loc_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-type/loc-vacation-type.component */ 45845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
















const routes = [
    {
        path: "version",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.version },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: app_system_setup_localization_setup_components_localization_version_localization_version_index_loc_version_index_component__WEBPACK_IMPORTED_MODULE_2__.LocVersionIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.version_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: app_system_setup_localization_setup_components_localization_version_localization_add_version_loc_add_version_component__WEBPACK_IMPORTED_MODULE_1__.LocAddVersionComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_version },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: app_system_setup_localization_setup_components_localization_version_localization_add_version_loc_add_version_component__WEBPACK_IMPORTED_MODULE_1__.LocAddVersionComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_version },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "penalties",
        component: app_system_setup_localization_setup_components_localization_penalties_loc_penalties_component__WEBPACK_IMPORTED_MODULE_5__.LocPenaltiesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_penalties },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
    },
    {
        path: "violation-types",
        component: app_system_setup_localization_setup_components_localization_violation_types_loc_violation_types_component__WEBPACK_IMPORTED_MODULE_10__.LocViolationTypesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_violation_types },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
    },
    {
        path: "violations",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_violations },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: app_system_setup_localization_setup_components_localization_violations_localization_violations_index_loc_violations_index_component__WEBPACK_IMPORTED_MODULE_6__.LocViolationsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_violations_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: app_system_setup_localization_setup_components_localization_violations_localization_add_violation_loc_add_violation_component__WEBPACK_IMPORTED_MODULE_7__.LocAddViolationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_violation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: app_system_setup_localization_setup_components_localization_violations_localization_add_violation_loc_add_violation_component__WEBPACK_IMPORTED_MODULE_7__.LocAddViolationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_violation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "penalty-regulations",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_penalty_regulations },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_index_loc_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_8__.LocPenaltyRegulationsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_penalty_regulations_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: app_system_setup_localization_setup_components_localization_penalty_regulations_localization_add_penalty_regulations_loc_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_9__.LocAddPenaltyRegulationsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_penalty_regulations },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: app_system_setup_localization_setup_components_localization_penalty_regulations_localization_add_penalty_regulations_loc_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_9__.LocAddPenaltyRegulationsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_penalty_regulations },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "vacations",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: app_system_setup_localization_setup_components_localization_vacation_localization_vacation_index_loc_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__.LocVacationIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_vacation_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: app_system_setup_localization_setup_components_localization_vacation_localization_vacation_type_loc_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__.LocVacationTypeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_vacation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:vacationId",
                component: app_system_setup_localization_setup_components_localization_vacation_localization_vacation_type_loc_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__.LocVacationTypeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_vacation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
];
class LocalizationSetupRoutingModule {
}
LocalizationSetupRoutingModule.ɵfac = function LocalizationSetupRoutingModule_Factory(t) { return new (t || LocalizationSetupRoutingModule)(); };
LocalizationSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: LocalizationSetupRoutingModule });
LocalizationSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](LocalizationSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 39890:
/*!******************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/localization-setup.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizationSetupModule": () => (/* binding */ LocalizationSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_system_setup_localization_setup_localization_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/localization-setup-routing.module */ 42047);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var app_system_setup_localization_setup_components_localization_version_localization_version_index_loc_version_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-version/localization-version-index/loc-version-index.component */ 45669);
/* harmony import */ var app_system_setup_localization_setup_components_localization_version_localization_add_version_loc_add_version_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-version/localization-add-version/loc-add-version.component */ 47213);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalties_loc_penalties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalties/loc-penalties.component */ 56195);
/* harmony import */ var app_system_setup_localization_setup_components_localization_violation_types_loc_violation_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-violation-types/loc-violation-types.component */ 16454);
/* harmony import */ var app_system_setup_localization_setup_components_localization_violations_localization_add_violation_loc_add_violation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-violations/localization-add-violation/loc-add-violation.component */ 37495);
/* harmony import */ var app_system_setup_localization_setup_components_localization_violations_localization_violations_index_loc_violations_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-violations/localization-violations-index/loc-violations-index.component */ 16154);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalty_regulations_localization_add_penalty_regulations_loc_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalty-regulations/localization-add-penalty-regulations/loc-add-penalty-regulations.component */ 63775);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_details_loc_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalty-regulations/localization-penalty-regulations-details/loc-penalty-regulations-details.component */ 64089);
/* harmony import */ var app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_index_loc_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-penalty-regulations/localization-penalty-regulations-index/loc-penalty-regulations-index.component */ 27408);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_index_loc_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-index/loc-vacation-index.component */ 16302);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_age_loc_vacation_age_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-age/loc-vacation-age.component */ 19286);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_insurance_loc_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-insurance/loc-vacation-insurance.component */ 21070);
/* harmony import */ var app_system_setup_localization_setup_components_localization_vacation_localization_vacation_type_loc_vacation_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/system-setup/localization-setup/components/localization-vacation/localization-vacation-type/loc-vacation-type.component */ 45845);
/* harmony import */ var _localization_core_localization_core_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./localization-core/localization-core.component */ 5014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _shared_components_dropdowns_hr_setup_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/components/dropdowns/hr-setup/country-dropdown/country-dropdown.component */ 59681);
/* harmony import */ var _shared_components_dropdowns_localization_setup_versions_dropdown_versions_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/components/dropdowns/localization-setup/versions-dropdown/versions-dropdown.component */ 57796);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 2508);
































class LocalizationSetupModule {
}
LocalizationSetupModule.ɵfac = function LocalizationSetupModule_Factory(t) { return new (t || LocalizationSetupModule)(); };
LocalizationSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: LocalizationSetupModule });
LocalizationSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, app_system_setup_localization_setup_localization_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalizationSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](LocalizationSetupModule, { declarations: [app_system_setup_localization_setup_components_localization_version_localization_version_index_loc_version_index_component__WEBPACK_IMPORTED_MODULE_2__.LocVersionIndexComponent,
        app_system_setup_localization_setup_components_localization_version_localization_add_version_loc_add_version_component__WEBPACK_IMPORTED_MODULE_3__.LocAddVersionComponent,
        app_system_setup_localization_setup_components_localization_penalties_loc_penalties_component__WEBPACK_IMPORTED_MODULE_4__.LocPenaltiesComponent,
        app_system_setup_localization_setup_components_localization_violation_types_loc_violation_types_component__WEBPACK_IMPORTED_MODULE_5__.LocViolationTypesComponent,
        app_system_setup_localization_setup_components_localization_violations_localization_add_violation_loc_add_violation_component__WEBPACK_IMPORTED_MODULE_6__.LocAddViolationComponent,
        app_system_setup_localization_setup_components_localization_violations_localization_violations_index_loc_violations_index_component__WEBPACK_IMPORTED_MODULE_7__.LocViolationsIndexComponent,
        app_system_setup_localization_setup_components_localization_penalty_regulations_localization_add_penalty_regulations_loc_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_8__.LocAddPenaltyRegulationsComponent,
        app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_details_loc_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_9__.LocPenaltyRegulationsDetailsComponent,
        app_system_setup_localization_setup_components_localization_penalty_regulations_localization_penalty_regulations_index_loc_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_10__.LocPenaltyRegulationsIndexComponent,
        app_system_setup_localization_setup_components_localization_vacation_localization_vacation_index_loc_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__.LocVacationIndexComponent,
        app_system_setup_localization_setup_components_localization_vacation_localization_vacation_age_loc_vacation_age_component__WEBPACK_IMPORTED_MODULE_12__.LocVacationAgeComponent,
        app_system_setup_localization_setup_components_localization_vacation_localization_vacation_insurance_loc_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_13__.LocVacationInsuranceComponent,
        app_system_setup_localization_setup_components_localization_vacation_localization_vacation_type_loc_vacation_type_component__WEBPACK_IMPORTED_MODULE_14__.LocVacationTypeComponent,
        _localization_core_localization_core_component__WEBPACK_IMPORTED_MODULE_15__.LocalizationCoreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, app_system_setup_localization_setup_localization_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalizationSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetComponentScope"](app_system_setup_localization_setup_components_localization_version_localization_add_version_loc_add_version_component__WEBPACK_IMPORTED_MODULE_3__.LocAddVersionComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_17__.InputComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_18__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_19__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_20__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_21__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_22__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_23__.PageTitleComponent, _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_24__.CloseDialogBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardActions, _shared_components_dropdowns_hr_setup_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_25__.GovernorateDropdownComponent, _shared_components_dropdowns_localization_setup_versions_dropdown_versions_dropdown_component__WEBPACK_IMPORTED_MODULE_26__.VersionsDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroupDirective], []);


/***/ }),

/***/ 71155:
/*!*******************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/mapper/localization-penalty-regulation.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locPenaltyRegDetailsToMap": () => (/* binding */ locPenaltyRegDetailsToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function locPenaltyRegDetailsToMap(penaltyRegulationDetails) {
    return penaltyRegulationDetails.map((penaltyRegulationDetail) => {
        return {
            ...penaltyRegulationDetail,
            violation: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(penaltyRegulationDetail.loc_Violation?.ar_Name, penaltyRegulationDetail.loc_Violation?.en_Name),
            penalty: penaltyRegulationDetail.loc_Penalty?.name,
        };
    });
}


/***/ }),

/***/ 18681:
/*!*********************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/mapper/localization-vacation.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locVacationToMap": () => (/* binding */ locVacationToMap),
/* harmony export */   "vacationAgeToMap": () => (/* binding */ vacationAgeToMap)
/* harmony export */ });
function locVacationToMap(vacations) {
    return vacations.map((vacation) => {
        return {
            ...vacation.loc_Vacation,
            display_In_Result: vacation.loc_Variable?.display_In_Result,
            variableCode: vacation.loc_Variable?.code,
        };
    });
}
function vacationAgeToMap(vacationAges) {
    return vacationAges.map((vacationAge) => {
        return {
            ...vacationAge,
            From_Age: vacationAge.from_Age,
            To_Age: vacationAge.to_Age,
        };
    });
}


/***/ }),

/***/ 48039:
/*!**************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/localization-penalty-regulations-details.service.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocPenaltyRegulationsDetailsService": () => (/* binding */ LocPenaltyRegulationsDetailsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LocPenaltyRegulationsDetailsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("PenaltyReg/Create_Penalty_Regulation_Details", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    update(data) {
        return this.post("PenaltyReg/Edit_Penalty_Regulation_Details", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    getAllByPenaltyRegulationId(penaltyRegulationId) {
        return this.get("PenaltyReg/GetAll_Penalty_Regulation_Details", {
            params: {
                Penalty_Regulation_ID: penaltyRegulationId,
                ...this._paramsService.versionCountryParams,
            },
        });
    }
    Delete(params) {
        return this.delete("PenaltyReg/Delete_Penalty_Regulation_Details", {
            params: params,
            ...this._paramsService.versionCountryParams,
        });
    }
}
LocPenaltyRegulationsDetailsService.ɵfac = function LocPenaltyRegulationsDetailsService_Factory(t) { return new (t || LocPenaltyRegulationsDetailsService)(); };
LocPenaltyRegulationsDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocPenaltyRegulationsDetailsService, factory: LocPenaltyRegulationsDetailsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 51046:
/*!******************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/localization-penalty-regulations.service.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocPenaltyRegulationsService": () => (/* binding */ LocPenaltyRegulationsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LocPenaltyRegulationsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("PenaltyReg/Create", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    update(data) {
        return this.post("PenaltyReg/Edit", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    getList(params) {
        return this.get("PenaltyReg/GetList", {
            params: {
                ...params,
                ...this._paramsService.versionCountryParams,
            },
        });
    }
    getAll() {
        return this.get("PenaltyReg/GetAll", {
            params: this._paramsService.versionCountryParams,
        });
    }
    getById(penaltyRegulationId) {
        return this.get("PenaltyReg/GetAll", {
            params: {
                $filter: `id eq ${penaltyRegulationId}`,
                ...this._paramsService.versionCountryParams,
            },
        });
    }
    Delete(Id) {
        return this.delete("PenaltyReg/Delete", {
            params: { Id: Id, ...this._paramsService.versionCountryParams },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
LocPenaltyRegulationsService.ɵfac = function LocPenaltyRegulationsService_Factory(t) { return new (t || LocPenaltyRegulationsService)(); };
LocPenaltyRegulationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocPenaltyRegulationsService, factory: LocPenaltyRegulationsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 74290:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/localization-vacation/localization-vacation-age.service.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVacationAgeService": () => (/* binding */ LocVacationAgeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LocVacationAgeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("VacationTypeLoc/AddVacationAgeBased", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    update(data) {
        return this.post("VacationTypeLoc/EditVacationAgeBased", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    getList(params, vacationId) {
        return this.get("VacationTypeLoc/GetVacationAgeBasedList", {
            params: {
                ...params,
                $filter: `vacation_ID eq ${vacationId}`,
                ...this._paramsService.versionCountryParams,
            },
        });
    }
    Delete(id) {
        return this.delete("VacationTypeLoc/DeleteVacationAgeBased", {
            params: { Id: id, ...this._paramsService.versionCountryParams },
        });
    }
}
LocVacationAgeService.ɵfac = function LocVacationAgeService_Factory(t) { return new (t || LocVacationAgeService)(); };
LocVacationAgeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocVacationAgeService, factory: LocVacationAgeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 40535:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/localization-vacation/localization-vacation-insurance.service.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVacationInsuranceService": () => (/* binding */ LocVacationInsuranceService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LocVacationInsuranceService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("VacationTypeLoc/AddVacationInsuranceBased", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    update(data) {
        return this.post("VacationTypeLoc/EditVacationInsuranceBased", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    getList(params, vacationId) {
        return this.get("VacationTypeLoc/GetVacationInsuranceBasedList", {
            params: {
                ...params,
                ...this._paramsService.versionCountryParams,
                $filter: `vacation_ID eq ${vacationId}`,
            },
        });
    }
    Delete(id) {
        return this.delete("VacationTypeLoc/DeleteVacationInsuranceBased", {
            params: { Id: id, ...this._paramsService.versionCountryParams },
        });
    }
}
LocVacationInsuranceService.ɵfac = function LocVacationInsuranceService_Factory(t) { return new (t || LocVacationInsuranceService)(); };
LocVacationInsuranceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocVacationInsuranceService, factory: LocVacationInsuranceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 25187:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/localization-vacation/localization-vacation.service.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocVacationService": () => (/* binding */ LocVacationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LocVacationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("VacationTypeLoc/Create", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    update(data) {
        return this.post("VacationTypeLoc/Edit", data, {
            params: this._paramsService.versionCountryParams,
        });
    }
    getList(params) {
        return this.get("VacationTypeLoc/GetList", {
            params: {
                ...params,
                ...this._paramsService.versionCountryParams,
            },
        });
    }
    getById(id) {
        return this.get("VacationTypeLoc/GetAll", {
            params: {
                $filter: `id eq ${id}`,
                ...this._paramsService.versionCountryParams,
            },
        });
    }
    getAll() {
        return this.get("VacationTypeLoc/GetAll", {
            params: this._paramsService.versionCountryParams,
        });
    }
    Delete(id) {
        return this.delete("VacationTypeLoc/Delete", {
            params: { Id: id, ...this._paramsService.versionCountryParams },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
LocVacationService.ɵfac = function LocVacationService_Factory(t) { return new (t || LocVacationService)(); };
LocVacationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocVacationService, factory: LocVacationService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_localization-setup_localization-setup_module_ts.js.map