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

/***/ 30747:
/*!*********************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/penalties/penalties.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltiesComponent": () => (/* binding */ PenaltiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/penalties.service */ 14988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);

















function PenaltiesComponent_reset_form_btn_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PenaltiesComponent_reset_form_btn_16_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class PenaltiesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(penaltiesService) {
        super();
        this.penaltiesService = penaltiesService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "name",
            "penalty_Value",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            penalty_Value: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gte(0)]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.checkNoVersionOrCountry())
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
        this.penaltiesService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
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
                Name: this.form.value.name,
                Penalty_Value: this.form.value.penalty_Value,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        }
        else
            this.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.penaltiesService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
        this.penaltiesService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize); // current page after update
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    penaltyToEdit(penalty) {
        this.form.patchValue(penalty);
        // console.log(this.form.value);
    }
    onDelete(penalty) {
        let msg = this.msgTranslate(penalty.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(penalty);
        });
    }
    delete(penalty) {
        this.showLoading();
        this.penaltiesService.Delete(penalty.id).subscribe((res) => {
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
                if (penalty.id == this.formCtrls.id.value)
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
PenaltiesComponent.ɵfac = function PenaltiesComponent_Factory(t) { return new (t || PenaltiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_3__.PenaltiesService)); };
PenaltiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PenaltiesComponent, selectors: [["app-penalties"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "penalties", "editTitle", "editPenalty", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["type", "number", "label", "penalty_Value", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function PenaltiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "div", 0)(7, "div", 1)(8, "form", 5)(9, "div", 0)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-card-actions", 9)(15, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function PenaltiesComponent_Template_submit_btn_onClick_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, PenaltiesComponent_reset_form_btn_16_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function PenaltiesComponent_Template_app_material_table_onChangePage_18_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function PenaltiesComponent_Template_app_material_table_editRow_18_listener($event) { return ctx.penaltyToEdit($event); })("deleteRow", function PenaltiesComponent_Template_app_material_table_deleteRow_18_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.penalty_Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.penaltiesService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbHRpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 98778:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/penalty-regulations/add-penalty-regulations/add-penalty-regulations.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPenaltyRegulationsComponent": () => (/* binding */ AddPenaltyRegulationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/penalty-regulations.service */ 49243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../penalty-regulations-details/penalty-regulations-details.component */ 81330);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function AddPenaltyRegulationsComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-add-new-btn", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx_r0.moduleId, "/penalty-regulations/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddPenaltyRegulationsComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AddPenaltyRegulationsComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class AddPenaltyRegulationsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    // penaltyRegulation: IPenaltyRegulationModel;
    constructor(penaltyRegulationsService) {
        super();
        this.penaltyRegulationsService = penaltyRegulationsService;
        this.submitted = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.penaltyRegulationId = Number(params.get("penaltyRegulationId")) ?? 0;
            // if (this.penaltyRegulationId > 0 && this.CheckNoBusinessOrCompany())
            //   this.getById();
        });
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
        });
    }
    onChangeBusinessAndCompanyId() {
        // this.penaltyRegulation = null;
        if (this.penaltyRegulationId > 0 && this.checkNoBusinessOrCompany())
            this.getById();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getById() {
        this.showLoading();
        this.penaltyRegulationsService
            .getById(this.penaltyRegulationId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // this.penaltyRegulation = res.data[0];
                this.penaltyRegulationToEdit(res.data[0]);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    penaltyRegulationToEdit(penaltyRegulation) {
        this.form.patchValue(penaltyRegulation);
        // console.log(this.form.value);
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
                this.penaltyRegulationId = res.data.id;
                this.formCtrls.id.setValue(this.penaltyRegulationId);
                let url = `/penalty-regulations-setup/${this.moduleId}/penalty-regulations/edit/${this.penaltyRegulationId}`;
                this.navigateTo(url);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                // this.penaltyRegulation = res.data;
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
                // this.penaltyRegulation = res.data;
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
AddPenaltyRegulationsComponent.ɵfac = function AddPenaltyRegulationsComponent_Factory(t) { return new (t || AddPenaltyRegulationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_3__.PenaltyRegulationsService)); };
AddPenaltyRegulationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AddPenaltyRegulationsComponent, selectors: [["app-add-penalty-regulations"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 21, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "penaltyRegulations", "editTitle", "editPenaltyRegulation", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "col-12", "w-100", 3, "dir"], [3, "label"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "penaltyRegulationId"], [3, "click"]], template: function AddPenaltyRegulationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, AddPenaltyRegulationsComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-tab-group", 6)(9, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "mat-card-content", 8)(13, "div", 0)(14, "div", 1)(15, "form", 9)(16, "div", 0)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "mat-card-actions", 12)(20, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function AddPenaltyRegulationsComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, AddPenaltyRegulationsComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "app-penalty-regulations-details", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx.moduleId, "/penalty-regulations/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 13, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 15, "penaltyRegulations")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 19, "penaltyRegulationDetails")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("penaltyRegulationId", ctx.penaltyRegulationId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_10__.PenaltyRegulationsDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGVuYWx0eS1yZWd1bGF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 81330:
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/penalty-regulations/penalty-regulations-details/penalty-regulations-details.component.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsDetailsComponent": () => (/* binding */ PenaltyRegulationsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_penalty_regulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/penalty-regulation */ 69784);
/* harmony import */ var app_system_setup_localization_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/violations */ 57948);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_penalty_regulations_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/services/penalty-regulations-details.service */ 83882);
/* harmony import */ var app_system_setup_localization_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/localization-setup/services/violations.service */ 13372);
/* harmony import */ var app_system_setup_localization_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/localization-setup/services/penalties.service */ 14988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);





















function PenaltyRegulationsDetailsComponent_reset_form_btn_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PenaltyRegulationsDetailsComponent_reset_form_btn_13_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function PenaltyRegulationsDetailsComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function PenaltyRegulationsDetailsComponent_ng_container_14_Template_app_material_table_editRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r4.penaltyRegulationToEdit($event)); })("deleteRow", function PenaltyRegulationsDetailsComponent_ng_container_14_Template_app_material_table_deleteRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("actions", ctx_r1.rowFunctions)("showPaginator", false);
} }
const _c0 = function (a0) { return { "hidden-field": a0 }; };
class PenaltyRegulationsDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_3__.AppHelpers {
    constructor(penaltyRegulationsDetailsService, violationsService, penaltiesService) {
        super();
        this.penaltyRegulationsDetailsService = penaltyRegulationsDetailsService;
        this.violationsService = violationsService;
        this.penaltiesService = penaltiesService;
        this.selectedPenaltyRegulationDetails = null;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "violation",
            "repetition_No",
            "penalty",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
        this.violationsList = [];
        this.penaltiesList = [];
        this.selectedViolation = null;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) {
        //   this.getAllViolations();
        //   this.getAllPenalties();
        //   if (this.penaltyRegulationId > 0) this.getAll();
        // }
        this.form = this.fb.group({
            violation_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            repetition_No: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.digits, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.gte(0)],
            ],
            penalty_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        });
    }
    ngOnChanges(changes) {
        // if (changes.penaltyRegulationId.currentValue > 0) this.getAll();
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllViolations();
            this.getAllPenalties();
            if (this.penaltyRegulationId > 0)
                this.getAll();
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.penaltyRegulationsDetailsService
            .getAllByPenaltyRegulationId(this.penaltyRegulationId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource((0,app_system_setup_localization_setup_mapper_penalty_regulation__WEBPACK_IMPORTED_MODULE_0__.penaltyRegulationDetailsToMap)(res.data));
                this.isLoaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    penaltyRegulationToEdit(penaltyRegulationDetails) {
        this.form.patchValue(penaltyRegulationDetails);
        this.onChangeViolation([penaltyRegulationDetails.att_Violation]);
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
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
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
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
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
        let msg = this.msgTranslate(`${penaltyRegulationDetails.att_Violation.ar_Name} - ${penaltyRegulationDetails.repetition_No}`, `${penaltyRegulationDetails.att_Violation.en_Name} - ${penaltyRegulationDetails.repetition_No}`);
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
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
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
        this.form.reset();
        this.submitted = false;
        this.selectedViolation = null;
        this.selectedPenaltyRegulationDetails = null;
    }
    getAllViolations() {
        this.showLoading();
        this.violationsService
            .getAll()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success)) {
                this.violationsList = (0,app_system_setup_localization_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_1__.violationToMap)(res.data);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    getAllPenalties() {
        this.showLoading();
        this.penaltiesService
            .getAll()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success)) {
                this.penaltiesList = res.data;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onChangeViolation(violation) {
        this.selectedViolation = violation[0];
        if (this.selectedViolation?.ismoney) {
            this.formCtrls.repetition_No.clearValidators();
            this.formCtrls.penalty_ID.clearValidators();
        }
        else {
            this.formCtrls.repetition_No.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.gte(0),
            ]);
            this.formCtrls.penalty_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
        }
        this.formCtrls.repetition_No.updateValueAndValidity();
        this.formCtrls.penalty_ID.updateValueAndValidity();
    }
}
PenaltyRegulationsDetailsComponent.ɵfac = function PenaltyRegulationsDetailsComponent_Factory(t) { return new (t || PenaltyRegulationsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_penalty_regulations_details_service__WEBPACK_IMPORTED_MODULE_4__.PenaltyRegulationsDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_5__.ViolationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_6__.PenaltiesService)); };
PenaltyRegulationsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: PenaltyRegulationsDetailsComponent, selectors: [["app-penalty-regulations-details"]], inputs: { penaltyRegulationId: "penaltyRegulationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 21, consts: [[1, "container-fluid", "mb-0"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "violation", "appendTo", "body", 3, "control", "List", "submitted", "filter", "change"], [1, "col-md-6", "col-12", 3, "ngClass"], ["label", "repetition_No", "type", "number", 3, "control", "submitted"], ["label", "penalty", "appendTo", "body", 3, "control", "List", "submitted", "filter"], ["align", "end"], [3, "id", "disabled", "onClick"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "editRow", "deleteRow"]], template: function PenaltyRegulationsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card-content", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 1)(5, "div", 4)(6, "app-prime-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function PenaltyRegulationsDetailsComponent_Template_app_prime_dropdown_change_6_listener($event) { return ctx.onChangeViolation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "app-prime-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-card-actions", 9)(12, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function PenaltyRegulationsDetailsComponent_Template_submit_btn_onClick_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, PenaltyRegulationsDetailsComponent_reset_form_btn_13_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, PenaltyRegulationsDetailsComponent_ng_container_14_Template, 3, 6, "ng-container", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.violation_ID)("List", ctx.violationsList)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](17, _c0, ctx.selectedViolation == null ? null : ctx.selectedViolation.ismoney));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.repetition_No)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](19, _c0, ctx.selectedViolation == null ? null : ctx.selectedViolation.ismoney));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.penalty_ID)("List", ctx.penaltiesList)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.selectedPenaltyRegulationDetails ? 1 : 0)("disabled", !ctx.penaltyRegulationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.selectedPenaltyRegulationDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.penaltyRegulationId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_8__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_11__.DropdownCoreComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbHR5LXJlZ3VsYXRpb25zLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 34499:
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/penalty-regulations/penalty-regulations-index/penalty-regulations-index.component.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsIndexComponent": () => (/* binding */ PenaltyRegulationsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/localization-setup/services/penalty-regulations.service */ 49243);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);









class PenaltyRegulationsIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
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
PenaltyRegulationsIndexComponent.ɵfac = function PenaltyRegulationsIndexComponent_Factory(t) { return new (t || PenaltyRegulationsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_2__.PenaltyRegulationsService)); };
PenaltyRegulationsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PenaltyRegulationsIndexComponent, selectors: [["app-penalty-regulations-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "penaltyRegulations", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function PenaltyRegulationsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function PenaltyRegulationsIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function PenaltyRegulationsIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.penaltyRegulationsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbHR5LXJlZ3VsYXRpb25zLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 35801:
/*!************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/vacation/vacation-age/vacation-age.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationAgeComponent": () => (/* binding */ VacationAgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/vacation */ 77656);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_vacation_vacation_age_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/services/vacation/vacation-age.service */ 37737);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);



















function VacationAgeComponent_reset_form_btn_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function VacationAgeComponent_reset_form_btn_14_Template_reset_form_btn_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function VacationAgeComponent_app_material_table_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function VacationAgeComponent_app_material_table_15_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.vacationAgeToEdit($event)); })("deleteRow", function VacationAgeComponent_app_material_table_15_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r1.isLoaded)("dataSource", ctx_r1.dataSource)("mandatoryColomns", ctx_r1.mandatoryColomns)("optionalColomns", ctx_r1.optionalColomns)("page", ctx_r1.page)("actions", ctx_r1.rowFunctions)("showPaginator", false);
} }
class VacationAgeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(vacationAgeServ, injector) {
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
        if (this.checkNoBusinessOrCompany() && this.vacationId > 0)
            this.getVacationAgeList();
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource((0,app_system_setup_localization_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__.vacationAgeToMap)(res.data));
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
VacationAgeComponent.ɵfac = function VacationAgeComponent_Factory(t) { return new (t || VacationAgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_vacation_vacation_age_service__WEBPACK_IMPORTED_MODULE_4__.VacationAgeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector)); };
VacationAgeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: VacationAgeComponent, selectors: [["app-vacation-age"]], inputs: { vacationId: "vacationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 11, consts: [[1, "mt-2"], ["addTitle", "addvacationAge", "editTitle", "editvacationAge", 3, "id"], [3, "formGroup"], [1, "row"], [1, "col-md-4", "col-12"], ["type", "number", "label", "From_Age", 3, "control", "submitted"], ["type", "number", "label", "To_Age", 3, "control", "submitted"], ["type", "number", "label", "balance", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "onClick", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "showPaginator", "editRow", "deleteRow", 4, "ngIf"], [3, "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "showPaginator", "editRow", "deleteRow"]], template: function VacationAgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-subtitle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-card-content")(4, "form", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-card-actions", 8)(13, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function VacationAgeComponent_Template_submit_btn_onClick_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, VacationAgeComponent_reset_form_btn_14_Template, 1, 0, "reset-form-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, VacationAgeComponent_app_material_table_15_Template, 1, 7, "app-material-table", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWNhdGlvbi1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 99805:
/*!****************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/vacation/vacation-index/vacation-index.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationIndexComponent": () => (/* binding */ VacationIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/vacation */ 77656);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/vacation/vacation.service */ 69621);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class VacationIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
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
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_system_setup_localization_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__.vacationToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
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
VacationIndexComponent.ɵfac = function VacationIndexComponent_Factory(t) { return new (t || VacationIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_3__.VacationService)); };
VacationIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VacationIndexComponent, selectors: [["app-vacation-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "vacationType", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function VacationIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function VacationIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function VacationIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.vacationService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWNhdGlvbi1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8796:
/*!************************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/vacation/vacation-insurance/vacation-insurance.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationInsuranceComponent": () => (/* binding */ VacationInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_insuranceSide_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/insuranceSide.enum */ 59036);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_vacation_vacation_insurance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/services/vacation/vacation-insurance.service */ 51282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















function VacationInsuranceComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-check-box", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx_r0.formCtrls.ignore_Insurance_Date);
} }
function VacationInsuranceComponent_reset_form_btn_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function VacationInsuranceComponent_reset_form_btn_25_Template_reset_form_btn_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function VacationInsuranceComponent_app_material_table_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-material-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function VacationInsuranceComponent_app_material_table_26_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.vacationInsuranceEdit($event)); })("deleteRow", function VacationInsuranceComponent_app_material_table_26_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("page", ctx_r2.page)("showPaginator", false)("actions", ctx_r2.rowFunctions);
} }
class VacationInsuranceComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
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
        if (this.checkNoBusinessOrCompany() && this.vacationId > 0) {
            this.getVacationInsuranceList();
        }
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
VacationInsuranceComponent.ɵfac = function VacationInsuranceComponent_Factory(t) { return new (t || VacationInsuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_vacation_vacation_insurance_service__WEBPACK_IMPORTED_MODULE_4__.VacationInsuranceService)); };
VacationInsuranceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: VacationInsuranceComponent, selectors: [["app-vacation-insurance"]], inputs: { vacationId: "vacationId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 20, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "addvacationInsurance", "editTitle", "editvacationInsurance", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["type", "number", "label", "from_Year", 3, "control", "submitted"], ["type", "number", "label", "to_Year", 3, "control", "submitted"], ["type", "number", "label", "balance", 3, "control", "submitted"], [1, "col-md-5", "col-12"], [3, "control", "submitted", "radioList"], ["class", "col-md-3 col-12", 4, "ngIf"], ["align", "end"], [3, "id", "onClick"], [3, "onClick", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "showPaginator", "actions", "editRow", "deleteRow", 4, "ngIf"], [1, "col-md-3", "col-12"], ["label", "ignore_Insurance_Date", 3, "control"], [3, "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "showPaginator", "actions", "editRow", "deleteRow"]], template: function VacationInsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "form", 5)(8, "div", 0)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 0)(16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "app-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, VacationInsuranceComponent_div_22_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-card-actions", 13)(24, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function VacationInsuranceComponent_Template_submit_btn_onClick_24_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, VacationInsuranceComponent_reset_form_btn_25_Template, 1, 0, "reset-form-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, VacationInsuranceComponent_app_material_table_26_Template, 1, 7, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 18, "insuranceSide")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.inside_Company)("submitted", ctx.submitted)("radioList", ctx.insuranceSideRadio);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.inside_Company.value == ctx.insuranceSide.inside_Company);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.dataSource == null ? null : ctx.dataSource.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWNhdGlvbi1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8277:
/*!**************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/vacation/vacation-type/vacation-type.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationTypeComponent": () => (/* binding */ VacationTypeComponent)
/* harmony export */ });
/* harmony import */ var app_system_setup_attendance_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/attendance-setup/mapper/vacation */ 97986);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/constants */ 33975);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/localization-setup/services/vacation/vacation.service */ 69621);
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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);
/* harmony import */ var _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/hr-setup/gender-dropdown/gender-dropdown.component */ 99964);
/* harmony import */ var _vacation_age_vacation_age_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../vacation-age/vacation-age.component */ 35801);
/* harmony import */ var _vacation_insurance_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../vacation-insurance/vacation-insurance.component */ 8796);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






























function VacationTypeComponent_app_add_new_btn_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-add-new-btn", 46);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("url", "/localization-setup/", ctx_r1.moduleId, "/localization-vacations/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("params", ctx_r1.pageParams);
} }
function VacationTypeComponent_app_back_btn_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-back-btn", 47);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("url", "/localization-setup/", ctx_r2.moduleId, "/localization-vacations/index");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("params", ctx_r2.pageParams);
} }
function VacationTypeComponent_close_dialog_btn_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "close-dialog-btn", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function VacationTypeComponent_close_dialog_btn_9_Template_close_dialog_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r10.onCloseDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function VacationTypeComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r4.formCtrls.relatedVacationPriority)("submitted", ctx_r4.submitted);
} }
function VacationTypeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-check-box", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("control", ctx_r5.formCtrls.isPostedWithRelatedVacation);
} }
function VacationTypeComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
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
function VacationTypeComponent_reset_form_btn_73_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "reset-form-btn", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function VacationTypeComponent_reset_form_btn_73_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r12.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function VacationTypeComponent_mat_tab_75_Template(rf, ctx) { if (rf & 1) {
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
function VacationTypeComponent_mat_tab_76_Template(rf, ctx) { if (rf & 1) {
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
class VacationTypeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
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
            variableCode: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.pattern(app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.variableCode_pattern),
                ],
            ],
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
        if (this.checkNoBusinessOrCompany()) {
            this.getAllVacations();
            if (this.vacationId > 0)
                this.getVactionById();
        }
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                att_Vacation: {
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
            model.att_Vacation.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.vacationServ
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.vacationId = res.data.att_Vacation.id;
                this.formCtrls.id.setValue(this.vacationId);
                let url = `/attendance-setup/${this.moduleId}/vacations/edit/${this.vacationId}`;
                if (!this.data.isDialog)
                    this.navigateTo(url);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                // get element_ID after add
                this.formCtrls.element_ID.setValue(res.data.att_Vacation.element_ID);
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
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
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
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                let vacation = (0,app_system_setup_attendance_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__.vacationToMap)(res.data)[0];
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
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.vacationList = (0,app_system_setup_attendance_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__.vacationToMap)(res.data);
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
}
VacationTypeComponent.ɵfac = function VacationTypeComponent_Factory(t) { return new (t || VacationTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_4__.VacationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogRef)); };
VacationTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: VacationTypeComponent, selectors: [["app-vacation-type"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 62, consts: [[1, "row"], ["dialogContainer", ""], [1, "col-12"], [1, "pright-10", "pleft-10", "form-card"], ["title", "vacationType"], ["label", "addvacationType", 3, "url", "params", 4, "ngIf"], [3, "url", "params", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "view-tabs-group", 3, "dir"], [3, "label"], [1, "container-fluid"], [3, "formGroup"], [1, "row", "division", "mb-3", "px-1", "pt-3", "pb-0"], [1, "col-md-3", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["type", "text", "label", "variableCode", 3, "control", "submitted"], [3, "control", "submitted", "filter", "appendTo"], ["type", "number", "label", "defaultBalance", 3, "control", "submitted"], ["type", "number", "label", "number_Days_month", 3, "control", "submitted"], ["type", "number", "label", "number_of_Earning", 3, "control", "submitted"], ["label", "vacationType", 3, "control", "submitted", "filter", "List", "appendTo", "change"], ["class", "col-md-3 col-12", 4, "ngIf"], ["class", "col-md-3 col-12 p-2", 4, "ngIf"], [1, "col-md-3", "col-12", "p-2"], ["label", "isRenew", 3, "control"], ["type", "number", "label", "renew_Period", 3, "control", "submitted"], ["type", "number", "label", "renew_Day", 3, "control", "submitted"], ["type", "number", "label", "renew_Month", 3, "control", "submitted"], [4, "ngIf"], ["type", "number", "label", "deductible_Value", 3, "control", "submitted"], ["type", "number", "label", "monthes_to_get_Balance", 3, "control", "submitted"], ["type", "number", "label", "reportOrder", 3, "control", "submitted"], [1, "row", "division", "mb-3", "px-1", "pt-3"], ["label", "calculate_Balance_By_Contract", 3, "control"], ["label", "hasAttashment", 3, "control"], ["label", "isDefault", 3, "control"], ["label", "day_Off_Included", 3, "control"], ["label", "offecial_Vaction_Included", 3, "control"], ["label", "is_Paid", 3, "control"], ["label", "canBeRequestedToday", 3, "control"], ["label", "isEgyptianLaw", 3, "control"], ["label", "calculateBalance", 3, "control", "submitted", "radioList"], ["align", "end"], [3, "id", "onClick"], [3, "label", 4, "ngIf"], ["label", "addvacationType", 3, "url", "params"], [3, "url", "params"], [3, "click"], ["type", "number", "label", "relatedVacationPriority", 3, "control", "submitted"], ["label", "isPostedWithRelatedVacation", 3, "control"], ["label", "allow_Post", 3, "control"], ["type", "number", "label", "max_Post_Days", 3, "control", "submitted"], ["type", "number", "label", "post_Period_Month", 3, "control", "submitted"], ["label", "isPostedPreviousYears", 3, "control"], [3, "vacationId"]], template: function VacationTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 0, 1)(3, "div", 2)(4, "mat-card", 3)(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, VacationTypeComponent_app_add_new_btn_7_Template, 1, 2, "app-add-new-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, VacationTypeComponent_app_back_btn_8_Template, 1, 2, "app-back-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, VacationTypeComponent_close_dialog_btn_9_Template, 1, 0, "close-dialog-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "mat-tab-group", 8)(11, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "mat-card-content", 10)(15, "form", 11)(16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "app-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "app-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](22, "app-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "app-gender-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](26, "app-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](28, "app-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "app-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 13)(32, "app-prime-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function VacationTypeComponent_Template_app_prime_dropdown_change_32_listener($event) { return ctx.onSelectVacation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, VacationTypeComponent_div_33_Template, 2, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](34, VacationTypeComponent_div_34_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "div", 12)(36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](37, "app-check-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](39, "app-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](41, "app-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](43, "app-input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](44, VacationTypeComponent_ng_container_44_Template, 9, 6, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "div", 12)(46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](47, "app-input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](49, "app-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](51, "app-input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](52, "div", 33)(53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](54, "app-check-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](56, "app-check-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](58, "app-check-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](60, "app-check-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](62, "app-check-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](64, "app-check-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](66, "app-check-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](68, "app-check-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](69, "div", 0)(70, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](71, "app-radio-button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](72, "mat-card-actions", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](73, VacationTypeComponent_reset_form_btn_73_Template, 1, 0, "reset-form-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "submit-btn", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onClick", function VacationTypeComponent_Template_submit_btn_onClick_74_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](75, VacationTypeComponent_mat_tab_75_Template, 4, 6, "mat-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](76, VacationTypeComponent_mat_tab_76_Template, 4, 6, "mat-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vacationId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.data.isDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.data.isDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 58, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 60, "vacationType")));
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_13__.CloseDialogBtnComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerComponent, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_14__.DropdownCoreComponent, _shared_components_dropdowns_hr_setup_gender_dropdown_gender_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.GenderDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _vacation_age_vacation_age_component__WEBPACK_IMPORTED_MODULE_16__.VacationAgeComponent, _vacation_insurance_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_17__.VacationInsuranceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWNhdGlvbi10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27894:
/*!*************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/version/version-index/version-index.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionIndexComponent": () => (/* binding */ VersionIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_version_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/version.service */ 12049);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);









class VersionIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
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
VersionIndexComponent.ɵfac = function VersionIndexComponent_Factory(t) { return new (t || VersionIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_version_service__WEBPACK_IMPORTED_MODULE_3__.VersionService)); };
VersionIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VersionIndexComponent, selectors: [["app-version-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 8, consts: [[1, "index-card"], ["title", "versions", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function VersionIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-content")(4, "app-material-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function VersionIndexComponent_Template_app_material_table_onChangePage_4_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function VersionIndexComponent_Template_app_material_table_deleteRow_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.versionService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 62553:
/*!*********************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/violation-types/violation-types.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationTypesComponent": () => (/* binding */ ViolationTypesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_violation_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/violation-types.service */ 78304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function ViolationTypesComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViolationTypesComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class ViolationTypesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(violationTypesService) {
        super();
        this.violationTypesService = violationTypesService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
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
        this.violationTypesService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
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
                Name: this.form.value.name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.violationTypesService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
        this.violationTypesService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize); // current page after update
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    violationTypeToEdit(violationType) {
        this.form.patchValue(violationType);
        // console.log(this.form.value);
    }
    onDelete(violationType) {
        let msg = this.msgTranslate(violationType.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(violationType);
        });
    }
    delete(violationType) {
        this.showLoading();
        this.violationTypesService
            .Delete(violationType.id)
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
                if (violationType.id == this.formCtrls.id.value)
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
ViolationTypesComponent.ɵfac = function ViolationTypesComponent_Factory(t) { return new (t || ViolationTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_violation_types_service__WEBPACK_IMPORTED_MODULE_3__.ViolationTypesService)); };
ViolationTypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ViolationTypesComponent, selectors: [["app-violation-types"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 13, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "violationTypes", "editTitle", "editViolationType", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function ViolationTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "div", 0)(8, "div", 1)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-card-actions", 8)(14, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function ViolationTypesComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ViolationTypesComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-material-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function ViolationTypesComponent_Template_app_material_table_onChangePage_17_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function ViolationTypesComponent_Template_app_material_table_editRow_17_listener($event) { return ctx.violationTypeToEdit($event); })("deleteRow", function ViolationTypesComponent_Template_app_material_table_deleteRow_17_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.violationTypesService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aW9sYXRpb24tdHlwZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 79144:
/*!****************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/violations/add-violation/add-violation.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddViolationComponent": () => (/* binding */ AddViolationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_system_setup_penalty_regulations_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/mapper/violations */ 7368);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/constants */ 33975);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/localization-setup/services/violations.service */ 13372);
/* harmony import */ var app_system_setup_localization_setup_services_violation_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/localization-setup/services/violation-types.service */ 40748);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);























function AddViolationComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-add-new-btn", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx_r0.moduleId, "/violations/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddViolationComponent_reset_form_btn_37_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "reset-form-btn", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddViolationComponent_reset_form_btn_37_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
class AddViolationComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(violationsService, violationTypesService) {
        super();
        this.violationsService = violationsService;
        this.violationTypesService = violationTypesService;
        this.submitted = false;
        // violation: IViolationToDisplayModel;
        this.violationTypesList = [];
        this.typesList = [];
        this.moneyOrPenaltyRadioList = [
            {
                value: true,
                label: "money",
            },
            {
                value: false,
                label: "penalty",
            },
        ];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.violationId = Number(params.get("violationId")) ?? 0;
            // if (this.CheckNoBusinessOrCompany()) {
            //   this.getAllViolationTypes();
            //   this.getAllTypes();
            //   if (this.violationId > 0) this.getById();
            // }
        });
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.whiteSpace]],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.whiteSpace]],
            variableCode: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.whiteSpace,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.noSpace,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.variableCode_pattern),
                ],
            ],
            display_In_Result: [false],
            renew_Day: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__.CustomValidators.gte(0), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__.CustomValidators.digits]],
            fromValue: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required,
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__.CustomValidators.gte(0),
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__.CustomValidators.digits,
                ],
            ],
            toValue: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required,
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__.CustomValidators.gte(0),
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__.CustomValidators.digits,
                ],
            ],
            violation_Type_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            renew_By_Period: [false],
            ismoney: [false],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.greaterThan("fromValue", "toValue"),
        });
    }
    onChangeBusinessAndCompanyId() {
        // this.violation = null;
        if (this.checkNoBusinessOrCompany()) {
            this.getAllViolationTypes();
            this.getAllTypes();
            if (this.violationId > 0)
                this.getById();
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    getById() {
        this.showLoading();
        this.violationsService
            .getById(this.violationId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                // this.violation = res.data[0];
                let result = (0,app_system_setup_penalty_regulations_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_0__.violationToMap)(res.data);
                this.violationToEdit(result[0]);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    violationToEdit(violation) {
        this.form.patchValue(violation);
        // console.log(this.form.value);
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                Violation: {
                    ID: this.form.value.id,
                    En_Name: this.form.value.en_Name,
                    Ar_Name: this.form.value.ar_Name,
                    Renew_Day: this.form.value.renew_Day,
                    FromValue: this.form.value.fromValue,
                    ToValue: this.form.value.toValue,
                    Violation_Type_ID: this.form.value.violation_Type_ID,
                    Type: this.form.value.type,
                    Renew_By_Period: this.form.value.renew_By_Period ?? false,
                    Ismoney: this.form.value.ismoney,
                },
                VariableCode: this.form.value.variableCode,
                Display_In_Result: this.form.value.display_In_Result ?? false,
            };
            model.Violation.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.violationsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.violationId = res.data.id;
                this.formCtrls.id.setValue(this.violationId);
                let url = `/penalty-regulations-setup/${this.moduleId}/violations/edit/${this.violationId}`;
                this.navigateTo(url);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                // this.violation = res.data;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.violationsService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                // this.violation = res.data;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        // if (this.violationId == 0)
        this.form.reset({
            id: 0,
            ismoney: false,
        });
        // else this.violationToEdit();
        this.submitted = false;
    }
    getAllViolationTypes() {
        this.showLoading();
        this.violationTypesService
            .getAll()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.violationTypesList = res.data;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    getAllTypes() {
        this.showLoading();
        this.violationsService
            .getAllTypes()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.typesList = res.data;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
AddViolationComponent.ɵfac = function AddViolationComponent_Factory(t) { return new (t || AddViolationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_5__.ViolationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_violation_types_service__WEBPACK_IMPORTED_MODULE_6__.ViolationTypesService)); };
AddViolationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: AddViolationComponent, selectors: [["app-add-violation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 30, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "violations", "editTitle", "editViolation", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "variableCode", 3, "control", "submitted"], [1, "col-md-6", "col-12", "mtop-14"], ["label", "display_In_Result", 3, "control"], [1, "col-md-4", "col-12"], ["type", "number", "label", "renew_Month", 3, "control", "submitted"], ["type", "number", "label", "fromValue", 3, "control", "submitted"], ["type", "number", "label", "toValue", 3, "control", "submitted"], ["label", "violationType", 3, "control", "submitted", "List"], ["label", "typeName", 3, "control", "submitted", "List"], ["label", "renew_By_Period", 3, "control"], [3, "radioList", "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AddViolationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, AddViolationComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "mat-card-content", 6)(9, "div", 0)(10, "div", 1)(11, "form", 7)(12, "div", 0)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "app-check-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "app-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "app-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](26, "app-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](28, "app-prime-dropdown", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](30, "app-prime-dropdown", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](32, "app-check-box", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](34, "app-radio-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "mat-card-actions", 22)(36, "submit-btn", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onClick", function AddViolationComponent_Template_submit_btn_onClick_36_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, AddViolationComponent_reset_form_btn_37_Template, 1, 0, "reset-form-btn", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx.moduleId, "/violations/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.variableCode)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.display_In_Result);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.renew_Day)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.fromValue)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.toValue)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.violation_Type_ID)("submitted", ctx.submitted)("List", ctx.violationTypesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.type)("submitted", ctx.submitted)("List", ctx.typesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("control", ctx.formCtrls.renew_By_Period);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("radioList", ctx.moneyOrPenaltyRadioList)("control", ctx.formCtrls.ismoney)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_8__.RadioButtonComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_9__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_10__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_11__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_12__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_13__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_14__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerComponent, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_15__.DropdownCoreComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 50464:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/components/violations/violations-index/violations-index.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsIndexComponent": () => (/* binding */ ViolationsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_localization_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/mapper/violations */ 57948);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_localization_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/localization-setup/services/violations.service */ 13372);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class ViolationsIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
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
        this.violationsService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                res.data.map((violation) => {
                    violation.att_Violation.moneyOrPenalty = violation.att_Violation
                        .ismoney
                        ? this.translate("money")
                        : this.translate("penalty");
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_system_setup_localization_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_0__.violationToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
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
ViolationsIndexComponent.ɵfac = function ViolationsIndexComponent_Factory(t) { return new (t || ViolationsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_localization_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_3__.ViolationsService)); };
ViolationsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ViolationsIndexComponent, selectors: [["app-violations-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "violations", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function ViolationsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function ViolationsIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function ViolationsIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.violationsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aW9sYXRpb25zLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _components_version_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/version/add-version/add-version.component */ 11582);
/* harmony import */ var _components_version_version_index_version_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/version/version-index/version-index.component */ 27894);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var _components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/penalties/penalties.component */ 30747);
/* harmony import */ var _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/violations/violations-index/violations-index.component */ 50464);
/* harmony import */ var _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/violations/add-violation/add-violation.component */ 79144);
/* harmony import */ var _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/penalty-regulations/penalty-regulations-index/penalty-regulations-index.component */ 34499);
/* harmony import */ var _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/penalty-regulations/add-penalty-regulations/add-penalty-regulations.component */ 98778);
/* harmony import */ var _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/violation-types/violation-types.component */ 62553);
/* harmony import */ var _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/vacation/vacation-index/vacation-index.component */ 99805);
/* harmony import */ var _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/vacation/vacation-type/vacation-type.component */ 8277);
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
                component: _components_version_version_index_version_index_component__WEBPACK_IMPORTED_MODULE_2__.VersionIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.version_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_version_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_1__.AddVersionComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_version },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: _components_version_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_1__.AddVersionComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.add_version },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "localization-penalties",
        component: _components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_5__.PenaltiesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_penalties },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
    },
    {
        path: "localization-violation-types",
        component: _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_10__.ViolationTypesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_violation_types },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
    },
    {
        path: "localization-violations",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_violations },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_6__.ViolationsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_violations_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_7__.AddViolationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_violation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:violationId",
                component: _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_7__.AddViolationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_violation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "localization-penalty-regulations",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_penalty_regulations },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_8__.PenaltyRegulationsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_penalty_regulations_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_9__.AddPenaltyRegulationsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_penalty_regulations },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:penaltyRegulationId",
                component: _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_9__.AddPenaltyRegulationsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_penalty_regulations },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "localization-vacations",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_4__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__.VacationIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_vacation_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__.VacationTypeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.localization_add_vacation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_3__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:vacationId",
                component: _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__.VacationTypeComponent,
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_system_setup_localization_setup_localization_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/localization-setup/localization-setup-routing.module */ 42047);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_version_version_index_version_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/version/version-index/version-index.component */ 27894);
/* harmony import */ var _components_version_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/version/add-version/add-version.component */ 11582);
/* harmony import */ var _components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/penalties/penalties.component */ 30747);
/* harmony import */ var _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/violation-types/violation-types.component */ 62553);
/* harmony import */ var _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/violations/add-violation/add-violation.component */ 79144);
/* harmony import */ var _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/violations/violations-index/violations-index.component */ 50464);
/* harmony import */ var _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/penalty-regulations/add-penalty-regulations/add-penalty-regulations.component */ 98778);
/* harmony import */ var _components_penalty_regulations_penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/penalty-regulations/penalty-regulations-details/penalty-regulations-details.component */ 81330);
/* harmony import */ var _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/penalty-regulations/penalty-regulations-index/penalty-regulations-index.component */ 34499);
/* harmony import */ var _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/vacation/vacation-index/vacation-index.component */ 99805);
/* harmony import */ var _components_vacation_vacation_age_vacation_age_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/vacation/vacation-age/vacation-age.component */ 35801);
/* harmony import */ var _components_vacation_vacation_insurance_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/vacation/vacation-insurance/vacation-insurance.component */ 8796);
/* harmony import */ var _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/vacation/vacation-type/vacation-type.component */ 8277);
/* harmony import */ var _localization_core_localization_core_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./localization-core/localization-core.component */ 5014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _shared_components_dropdowns_hr_setup_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/components/dropdowns/hr-setup/country-dropdown/country-dropdown.component */ 59681);
/* harmony import */ var _shared_components_dropdowns_localization_setup_versions_dropdown_versions_dropdown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/components/dropdowns/localization-setup/versions-dropdown/versions-dropdown.component */ 57796);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 2508);































class LocalizationSetupModule {
}
LocalizationSetupModule.ɵfac = function LocalizationSetupModule_Factory(t) { return new (t || LocalizationSetupModule)(); };
LocalizationSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: LocalizationSetupModule });
LocalizationSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, app_system_setup_localization_setup_localization_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalizationSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](LocalizationSetupModule, { declarations: [_components_version_version_index_version_index_component__WEBPACK_IMPORTED_MODULE_2__.VersionIndexComponent, _components_version_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_3__.AddVersionComponent, _components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_4__.PenaltiesComponent, _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_5__.ViolationTypesComponent, _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_6__.AddViolationComponent, _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_7__.ViolationsIndexComponent, _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_8__.AddPenaltyRegulationsComponent, _components_penalty_regulations_penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_9__.PenaltyRegulationsDetailsComponent, _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_10__.PenaltyRegulationsIndexComponent, _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_11__.VacationIndexComponent, _components_vacation_vacation_age_vacation_age_component__WEBPACK_IMPORTED_MODULE_12__.VacationAgeComponent, _components_vacation_vacation_insurance_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_13__.VacationInsuranceComponent, _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_14__.VacationTypeComponent, _localization_core_localization_core_component__WEBPACK_IMPORTED_MODULE_15__.LocalizationCoreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, app_system_setup_localization_setup_localization_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalizationSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetComponentScope"](_components_version_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_3__.AddVersionComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_17__.InputComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_18__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_19__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_20__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_21__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_22__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_23__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardActions, _shared_components_dropdowns_hr_setup_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_24__.GovernorateDropdownComponent, _shared_components_dropdowns_localization_setup_versions_dropdown_versions_dropdown_component__WEBPACK_IMPORTED_MODULE_25__.VersionsDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormGroupDirective], []);


/***/ }),

/***/ 69784:
/*!******************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/mapper/penalty-regulation.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "penaltyRegulationDetailsToMap": () => (/* binding */ penaltyRegulationDetailsToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function penaltyRegulationDetailsToMap(penaltyRegulationDetails) {
    return penaltyRegulationDetails.map((penaltyRegulationDetail) => {
        return {
            ...penaltyRegulationDetail,
            violation: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(penaltyRegulationDetail.att_Violation?.ar_Name, penaltyRegulationDetail.att_Violation?.en_Name),
            penalty: penaltyRegulationDetail.att_Penalty?.name,
        };
    });
}


/***/ }),

/***/ 77656:
/*!********************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/mapper/vacation.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vacationAgeToMap": () => (/* binding */ vacationAgeToMap),
/* harmony export */   "vacationToMap": () => (/* binding */ vacationToMap)
/* harmony export */ });
function vacationToMap(vacations) {
    return vacations.map((vacation) => {
        return {
            ...vacation.att_Vacation,
            display_In_Result: vacation.paY_Variable?.display_In_Result,
            variableCode: vacation.paY_Variable?.code,
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

/***/ 57948:
/*!**********************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/mapper/violations.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "violationToMap": () => (/* binding */ violationToMap)
/* harmony export */ });
function violationToMap(violations) {
    return violations.map((violation) => {
        return {
            ...violation.att_Violation,
            variableCode: violation.paY_Variable?.code,
            violationType: violation.att_Violation?.att_Violation_Type?.name,
            typeName: violation.att_Violation?.att_Type?.en_Name,
            display_In_Result: violation.paY_Variable?.display_In_Result,
        };
    });
}


/***/ }),

/***/ 14988:
/*!*******************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/penalties.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltiesService": () => (/* binding */ PenaltiesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class PenaltiesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Penalities/Create", data);
    }
    update(data) {
        return this.post("Penalities/Edit", data);
    }
    getList(params) {
        return this.get("Penalities/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("Penalities/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.ar_Name = item.name;
                item.en_Name = item.name;
            });
            return res;
        }));
    }
    Delete(Id) {
        return this.delete("Penalities/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
PenaltiesService.ɵfac = function PenaltiesService_Factory(t) { return new (t || PenaltiesService)(); };
PenaltiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PenaltiesService, factory: PenaltiesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 83882:
/*!*************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/penalty-regulations-details.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsDetailsService": () => (/* binding */ PenaltyRegulationsDetailsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PenaltyRegulationsDetailsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("PenaltyReg/Create_Penalty_Regulation_Details", data);
    }
    update(data) {
        return this.post("PenaltyReg/Edit_Penalty_Regulation_Details", data);
    }
    getAllByPenaltyRegulationId(penaltyRegulationId) {
        return this.get("PenaltyReg/GetAll_Penalty_Regulation_Details", {
            params: {
                Penalty_Regulation_ID: penaltyRegulationId,
            },
        });
    }
    Delete(params) {
        return this.delete("PenaltyReg/Delete_Penalty_Regulation_Details", {
            params: params,
        });
    }
}
PenaltyRegulationsDetailsService.ɵfac = function PenaltyRegulationsDetailsService_Factory(t) { return new (t || PenaltyRegulationsDetailsService)(); };
PenaltyRegulationsDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PenaltyRegulationsDetailsService, factory: PenaltyRegulationsDetailsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 49243:
/*!*****************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/penalty-regulations.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsService": () => (/* binding */ PenaltyRegulationsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PenaltyRegulationsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("PenaltyReg/Create", data);
    }
    update(data) {
        return this.post("PenaltyReg/Edit", data);
    }
    getList(params) {
        return this.get("PenaltyReg/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("PenaltyReg/GetAll");
    }
    getById(penaltyRegulationId) {
        return this.get("PenaltyReg/GetAll", {
            params: {
                $filter: `id eq ${penaltyRegulationId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("PenaltyReg/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
PenaltyRegulationsService.ɵfac = function PenaltyRegulationsService_Factory(t) { return new (t || PenaltyRegulationsService)(); };
PenaltyRegulationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PenaltyRegulationsService, factory: PenaltyRegulationsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 37737:
/*!*******************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/vacation/vacation-age.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationAgeService": () => (/* binding */ VacationAgeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class VacationAgeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("VacationTypeLoc/AddVacationAgeBased", data);
    }
    update(data) {
        return this.post("VacationTypeLoc/EditVacationAgeBased", data);
    }
    getList(params, vacationId) {
        return this.get("VacationTypeLoc/GetVacationAgeBasedList", {
            params: { ...params, $filter: `vacation_ID eq ${vacationId}` },
        });
    }
    Delete(id) {
        return this.delete("VacationTypeLoc/DeleteVacationAgeBased", {
            params: { Id: id },
        });
    }
}
VacationAgeService.ɵfac = function VacationAgeService_Factory(t) { return new (t || VacationAgeService)(); };
VacationAgeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VacationAgeService, factory: VacationAgeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 51282:
/*!*************************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/vacation/vacation-insurance.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationInsuranceService": () => (/* binding */ VacationInsuranceService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class VacationInsuranceService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("VacationTypeLoc/AddVacationInsuranceBased", data);
    }
    update(data) {
        return this.post("VacationTypeLoc/EditVacationInsuranceBased", data);
    }
    getList(params, vacationId) {
        return this.get("VacationTypeLoc/GetVacationInsuranceBasedList", {
            params: { ...params, $filter: `vacation_ID eq ${vacationId}` },
        });
    }
    Delete(id) {
        return this.delete("VacationTypeLoc/DeleteVacationInsuranceBased", {
            params: { Id: id },
        });
    }
}
VacationInsuranceService.ɵfac = function VacationInsuranceService_Factory(t) { return new (t || VacationInsuranceService)(); };
VacationInsuranceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VacationInsuranceService, factory: VacationInsuranceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 69621:
/*!***************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/vacation/vacation.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationService": () => (/* binding */ VacationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class VacationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("VacationTypeLoc/Create", data);
    }
    update(data) {
        return this.post("VacationTypeLoc/Edit", data);
    }
    getList(params) {
        return this.get("VacationTypeLoc/GetList", {
            params: params,
        });
    }
    getById(id) {
        return this.get("VacationTypeLoc/GetAll", {
            params: {
                $filter: `id eq ${id}`,
            },
        });
    }
    getAll() {
        return this.get("VacationTypeLoc/GetAll");
    }
    Delete(id) {
        return this.delete("VacationTypeLoc/Delete", {
            params: { Id: id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
VacationService.ɵfac = function VacationService_Factory(t) { return new (t || VacationService)(); };
VacationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VacationService, factory: VacationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 40748:
/*!*************************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/violation-types.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationTypesService": () => (/* binding */ ViolationTypesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class ViolationTypesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("ViolationType/Create", data);
    }
    update(data) {
        return this.post("ViolationType/Edit", data);
    }
    getList(params) {
        return this.get("ViolationType/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("ViolationType/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.ar_Name = item.name;
                item.en_Name = item.name;
            });
            return res;
        }));
    }
    Delete(Id) {
        return this.delete("ViolationType/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
ViolationTypesService.ɵfac = function ViolationTypesService_Factory(t) { return new (t || ViolationTypesService)(); };
ViolationTypesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ViolationTypesService, factory: ViolationTypesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 13372:
/*!********************************************************************************!*\
  !*** ./src/app/system-setup/localization-setup/services/violations.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsService": () => (/* binding */ ViolationsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class ViolationsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Violation/Create", data);
    }
    update(data) {
        return this.post("Violation/Edit", data);
    }
    getList(params) {
        return this.get("Violation/GetList", {
            params: {
                ...params,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Type},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation_Type}`,
            },
        });
    }
    getAll() {
        return this.get("Violation/GetAll", {
            params: {
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}`,
            },
        });
    }
    getById(violationId) {
        return this.get("Violation/GetAll", {
            params: {
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Type},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation_Type}`,
                $filter: `id eq ${violationId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Violation/Delete", {
            params: { Id: Id },
        });
    }
    // minutes / day / month
    getAllTypes() {
        return this.get("Violation/GetAll_Type").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            res.data.map((item) => {
                item.ar_Name = item.en_Name;
            });
            return res;
        }));
    }
    exportExcel() {
        this.getAll();
    }
}
ViolationsService.ɵfac = function ViolationsService_Factory(t) { return new (t || ViolationsService)(); };
ViolationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ViolationsService, factory: ViolationsService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_localization-setup_localization-setup_module_ts.js.map