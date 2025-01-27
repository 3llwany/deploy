"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_penalty-regulations-setup_penalty-regulations-setup_module_ts"],{

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

/***/ 62297:
/*!****************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/components/penalties/penalties.component.ts ***!
  \****************************************************************************************************/
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
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/penalties.service */ 5561);
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
        this.penaltiesService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(res.data);
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
                Name: this.form.value.name,
                Penalty_Value: this.form.value.penalty_Value,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
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
PenaltiesComponent.ɵfac = function PenaltiesComponent_Factory(t) { return new (t || PenaltiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_3__.PenaltiesService)); };
PenaltiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PenaltiesComponent, selectors: [["app-penalties"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 16, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "penalties", "editTitle", "editPenalty", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["type", "number", "label", "penalty_Value", 3, "control", "submitted", "isDecimalNumber"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function PenaltiesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.penalty_Value)("submitted", ctx.submitted)("isDecimalNumber", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.penaltiesService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbHRpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2976:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/components/penalty-regulations/add-penalty-regulations/add-penalty-regulations.component.ts ***!
  \****************************************************************************************************************************************************/
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
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/penalty-regulations.service */ 8683);
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
/* harmony import */ var _penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../penalty-regulations-details/penalty-regulations-details.component */ 58045);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



















function AddPenaltyRegulationsComponent_app_add_new_btn_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-add-new-btn", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx_r0.moduleId, "/penalty-regulations/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddPenaltyRegulationsComponent_reset_form_btn_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AddPenaltyRegulationsComponent_reset_form_btn_20_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.clearForm()); });
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
AddPenaltyRegulationsComponent.ɵfac = function AddPenaltyRegulationsComponent_Factory(t) { return new (t || AddPenaltyRegulationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_3__.PenaltyRegulationsService)); };
AddPenaltyRegulationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AddPenaltyRegulationsComponent, selectors: [["app-add-penalty-regulations"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 21, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "penaltyRegulations", "editTitle", "editPenaltyRegulation", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "col-12", "w-100", 3, "dir"], [3, "label"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "penaltyRegulationId"], [3, "click"]], template: function AddPenaltyRegulationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, AddPenaltyRegulationsComponent_app_add_new_btn_5_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-tab-group", 6)(8, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "mat-card-content", 8)(12, "div", 0)(13, "div", 1)(14, "form", 9)(15, "div", 0)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-card-actions", 12)(19, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function AddPenaltyRegulationsComponent_Template_submit_btn_onClick_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, AddPenaltyRegulationsComponent_reset_form_btn_20_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "app-penalty-regulations-details", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx.moduleId, "/penalty-regulations/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 13, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 15, "penaltyRegulations")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 19, "penaltyRegulationDetails")));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("penaltyRegulationId", ctx.penaltyRegulationId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_10__.PenaltyRegulationsDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGVuYWx0eS1yZWd1bGF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 58045:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/components/penalty-regulations/penalty-regulations-details/penalty-regulations-details.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsDetailsComponent": () => (/* binding */ PenaltyRegulationsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_penalty_regulations_setup_mapper_penalty_regulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/mapper/penalty-regulation */ 51373);
/* harmony import */ var app_system_setup_penalty_regulations_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/mapper/violations */ 7368);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_penalty_regulations_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/penalty-regulations-details.service */ 97598);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/violations.service */ 28766);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/penalties.service */ 5561);
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
        this.mandatoryColomns = ["Ser", "violation", "repetition_No", "penalty", "actions"];
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource((0,app_system_setup_penalty_regulations_setup_mapper_penalty_regulation__WEBPACK_IMPORTED_MODULE_0__.penaltyRegulationDetailsToMap)(res.data));
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
            this.selectedPenaltyRegulationDetails ? this.update(model) : this.create(model);
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
        this.penaltyRegulationsDetailsService.Delete(params).subscribe((res) => {
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
                this.violationsList = (0,app_system_setup_penalty_regulations_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_1__.violationToMap)(res.data);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    getAllPenalties() {
        this.showLoading();
        this.penaltiesService.getAll().subscribe((res) => {
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
            this.formCtrls.repetition_No.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.gte(0)]);
            this.formCtrls.penalty_ID.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
        }
        this.formCtrls.repetition_No.updateValueAndValidity();
        this.formCtrls.penalty_ID.updateValueAndValidity();
    }
}
PenaltyRegulationsDetailsComponent.ɵfac = function PenaltyRegulationsDetailsComponent_Factory(t) { return new (t || PenaltyRegulationsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_penalty_regulations_details_service__WEBPACK_IMPORTED_MODULE_4__.PenaltyRegulationsDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_5__.ViolationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_penalties_service__WEBPACK_IMPORTED_MODULE_6__.PenaltiesService)); };
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

/***/ 84703:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/components/penalty-regulations/penalty-regulations-index/penalty-regulations-index.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsIndexComponent": () => (/* binding */ PenaltyRegulationsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/penalty-regulations.service */ 8683);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);








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
        this.penaltyRegulationsService.Delete(penaltyRegulation.id).subscribe((res) => {
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
PenaltyRegulationsIndexComponent.ɵfac = function PenaltyRegulationsIndexComponent_Factory(t) { return new (t || PenaltyRegulationsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_penalty_regulations_service__WEBPACK_IMPORTED_MODULE_2__.PenaltyRegulationsService)); };
PenaltyRegulationsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PenaltyRegulationsIndexComponent, selectors: [["app-penalty-regulations-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "penaltyRegulations", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function PenaltyRegulationsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function PenaltyRegulationsIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function PenaltyRegulationsIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.penaltyRegulationsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5hbHR5LXJlZ3VsYXRpb25zLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 88849:
/*!****************************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/components/violation-types/violation-types.component.ts ***!
  \****************************************************************************************************************/
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
















function ViolationTypesComponent_reset_form_btn_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViolationTypesComponent_reset_form_btn_14_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
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
                Name: this.form.value.name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.violationTypesService.create(model).subscribe((res) => {
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
        this.violationTypesService.update(model).subscribe((res) => {
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
        this.violationTypesService.Delete(violationType.id).subscribe((res) => {
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
ViolationTypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ViolationTypesComponent, selectors: [["app-violation-types"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 13, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "violationTypes", "editTitle", "editViolationType", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function ViolationTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "div", 0)(7, "div", 1)(8, "form", 5)(9, "div", 0)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "mat-card-actions", 8)(13, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function ViolationTypesComponent_Template_submit_btn_onClick_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ViolationTypesComponent_reset_form_btn_14_Template, 1, 0, "reset-form-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "app-material-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function ViolationTypesComponent_Template_app_material_table_onChangePage_16_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function ViolationTypesComponent_Template_app_material_table_editRow_16_listener($event) { return ctx.violationTypeToEdit($event); })("deleteRow", function ViolationTypesComponent_Template_app_material_table_deleteRow_16_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aW9sYXRpb24tdHlwZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 38897:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/components/violations/add-violation/add-violation.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddViolationComponent": () => (/* binding */ AddViolationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_system_setup_penalty_regulations_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/mapper/violations */ 7368);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/violations.service */ 28766);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_violation_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/violation-types.service */ 78304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);





















function AddViolationComponent_app_add_new_btn_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-add-new-btn", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx_r0.moduleId, "/violations/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddViolationComponent_reset_form_btn_36_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "reset-form-btn", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AddViolationComponent_reset_form_btn_36_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
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
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            variableCode: [null, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.variableCodeValidators],
            display_In_Result: [false],
            renew_Day: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.gte(0), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.digits]],
            fromValue: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.gte(0),
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.digits,
                ],
            ],
            toValue: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.gte(0),
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.digits,
                ],
            ],
            violation_Type_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            renew_By_Period: [false],
            ismoney: [false],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.greaterThan("fromValue", "toValue"),
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
AddViolationComponent.ɵfac = function AddViolationComponent_Factory(t) { return new (t || AddViolationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_4__.ViolationsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_violation_types_service__WEBPACK_IMPORTED_MODULE_5__.ViolationTypesService)); };
AddViolationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: AddViolationComponent, selectors: [["app-add-violation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 30, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "violations", "editTitle", "editViolation", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "variableCode", 3, "control", "submitted"], [1, "col-md-6", "col-12", "mtop-14"], ["label", "display_In_Result", 3, "control"], [1, "col-md-4", "col-12"], ["type", "number", "label", "renew_Month", 3, "control", "submitted"], ["type", "number", "label", "fromValue", 3, "control", "submitted"], ["type", "number", "label", "toValue", 3, "control", "submitted"], ["label", "violationType", 3, "control", "submitted", "List"], ["label", "typeName", 3, "control", "submitted", "List"], ["label", "renew_By_Period", 3, "control"], [3, "radioList", "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AddViolationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, AddViolationComponent_app_add_new_btn_5_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "mat-card-content", 6)(8, "div", 0)(9, "div", 1)(10, "form", 7)(11, "div", 0)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "app-check-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "app-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "app-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "app-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "app-prime-dropdown", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "app-prime-dropdown", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "app-check-box", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](33, "app-radio-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "mat-card-actions", 22)(35, "submit-btn", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClick", function AddViolationComponent_Template_submit_btn_onClick_35_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, AddViolationComponent_reset_form_btn_36_Template, 1, 0, "reset-form-btn", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("url", "/penalty-regulations-setup/", ctx.moduleId, "/violations/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.variableCode)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.display_In_Result);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.renew_Day)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.fromValue)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.toValue)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.violation_Type_ID)("submitted", ctx.submitted)("List", ctx.violationTypesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.type)("submitted", ctx.submitted)("List", ctx.typesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.renew_By_Period);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("radioList", ctx.moneyOrPenaltyRadioList)("control", ctx.formCtrls.ismoney)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_7__.RadioButtonComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_9__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_10__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardActions, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_14__.DropdownCoreComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 91950:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/components/violations/violations-index/violations-index.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsIndexComponent": () => (/* binding */ ViolationsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_penalty_regulations_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/mapper/violations */ 7368);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_penalty_regulations_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/penalty-regulations-setup/services/violations.service */ 28766);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);









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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_system_setup_penalty_regulations_setup_mapper_violations__WEBPACK_IMPORTED_MODULE_0__.violationToMap)(res.data));
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
ViolationsIndexComponent.ɵfac = function ViolationsIndexComponent_Factory(t) { return new (t || ViolationsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_penalty_regulations_setup_services_violations_service__WEBPACK_IMPORTED_MODULE_3__.ViolationsService)); };
ViolationsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ViolationsIndexComponent, selectors: [["app-violations-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "violations", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function ViolationsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function ViolationsIndexComponent_Template_app_material_table_onChangePage_5_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function ViolationsIndexComponent_Template_app_material_table_deleteRow_5_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.violationsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aW9sYXRpb25zLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 51373:
/*!*************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/mapper/penalty-regulation.ts ***!
  \*************************************************************************************/
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

/***/ 7368:
/*!*****************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/mapper/violations.ts ***!
  \*****************************************************************************/
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

/***/ 73338:
/*!****************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/penalty-regulations-setup-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsSetupRoutingModule": () => (/* binding */ PenaltyRegulationsSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/penalties/penalties.component */ 62297);
/* harmony import */ var _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/violation-types/violation-types.component */ 88849);
/* harmony import */ var _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/penalty-regulations/penalty-regulations-index/penalty-regulations-index.component */ 84703);
/* harmony import */ var _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/penalty-regulations/add-penalty-regulations/add-penalty-regulations.component */ 2976);
/* harmony import */ var _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/violations/violations-index/violations-index.component */ 91950);
/* harmony import */ var _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/violations/add-violation/add-violation.component */ 38897);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);












const routes = [
    {
        path: "penalties",
        component: _components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_0__.PenaltiesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.penalties },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
    },
    {
        path: "violation-types",
        component: _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_1__.ViolationTypesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.violation_types },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
    },
    {
        path: "penalty-regulations",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.penalty_regulations },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_6__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_2__.PenaltyRegulationsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.penalty_regulations_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_3__.AddPenaltyRegulationsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_penalty_regulations },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:penaltyRegulationId",
                component: _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_3__.AddPenaltyRegulationsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_penalty_regulations },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "violations",
        data: { view: "violations" },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_6__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_4__.ViolationsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.violations_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_5__.AddViolationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_violation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:violationId",
                component: _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_5__.AddViolationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_violation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_8__.CheckIsViewAllowedGuard],
            },
        ],
    },
];
class PenaltyRegulationsSetupRoutingModule {
}
PenaltyRegulationsSetupRoutingModule.ɵfac = function PenaltyRegulationsSetupRoutingModule_Factory(t) { return new (t || PenaltyRegulationsSetupRoutingModule)(); };
PenaltyRegulationsSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PenaltyRegulationsSetupRoutingModule });
PenaltyRegulationsSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PenaltyRegulationsSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 16690:
/*!********************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/penalty-regulations-setup.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenaltyRegulationsSetupModule": () => (/* binding */ PenaltyRegulationsSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _penalty_regulations_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penalty-regulations-setup-routing.module */ 73338);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/penalties/penalties.component */ 62297);
/* harmony import */ var _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/violation-types/violation-types.component */ 88849);
/* harmony import */ var _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/penalty-regulations/add-penalty-regulations/add-penalty-regulations.component */ 2976);
/* harmony import */ var _components_penalty_regulations_penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/penalty-regulations/penalty-regulations-details/penalty-regulations-details.component */ 58045);
/* harmony import */ var _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/penalty-regulations/penalty-regulations-index/penalty-regulations-index.component */ 84703);
/* harmony import */ var _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/violations/add-violation/add-violation.component */ 38897);
/* harmony import */ var _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/violations/violations-index/violations-index.component */ 91950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);











class PenaltyRegulationsSetupModule {
}
PenaltyRegulationsSetupModule.ɵfac = function PenaltyRegulationsSetupModule_Factory(t) { return new (t || PenaltyRegulationsSetupModule)(); };
PenaltyRegulationsSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PenaltyRegulationsSetupModule });
PenaltyRegulationsSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _penalty_regulations_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.PenaltyRegulationsSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PenaltyRegulationsSetupModule, { declarations: [_components_penalties_penalties_component__WEBPACK_IMPORTED_MODULE_2__.PenaltiesComponent,
        _components_violation_types_violation_types_component__WEBPACK_IMPORTED_MODULE_3__.ViolationTypesComponent,
        _components_penalty_regulations_penalty_regulations_index_penalty_regulations_index_component__WEBPACK_IMPORTED_MODULE_6__.PenaltyRegulationsIndexComponent,
        _components_penalty_regulations_add_penalty_regulations_add_penalty_regulations_component__WEBPACK_IMPORTED_MODULE_4__.AddPenaltyRegulationsComponent,
        _components_penalty_regulations_penalty_regulations_details_penalty_regulations_details_component__WEBPACK_IMPORTED_MODULE_5__.PenaltyRegulationsDetailsComponent,
        _components_violations_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_7__.AddViolationComponent,
        _components_violations_violations_index_violations_index_component__WEBPACK_IMPORTED_MODULE_8__.ViolationsIndexComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _penalty_regulations_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.PenaltyRegulationsSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 5561:
/*!**************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/services/penalties.service.ts ***!
  \**************************************************************************************/
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
        return this.post("PenalitiesSetup/Create", data);
    }
    update(data) {
        return this.post("PenalitiesSetup/Edit", data);
    }
    getList(params) {
        return this.get("PenalitiesSetup/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("PenalitiesSetup/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.ar_Name = item.name;
                item.en_Name = item.name;
            });
            return res;
        }));
    }
    Delete(Id) {
        return this.delete("PenalitiesSetup/Delete", {
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

/***/ 97598:
/*!********************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/services/penalty-regulations-details.service.ts ***!
  \********************************************************************************************************/
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
        return this.post("PenaltyRegSetup/Create_Penalty_Regulation_Details", data);
    }
    update(data) {
        return this.post("PenaltyRegSetup/Edit_Penalty_Regulation_Details", data);
    }
    getAllByPenaltyRegulationId(penaltyRegulationId) {
        return this.get("PenaltyRegSetup/GetAll_Penalty_Regulation_Details", {
            params: {
                Penalty_Regulation_ID: penaltyRegulationId,
            },
        });
    }
    Delete(params) {
        return this.delete("PenaltyRegSetup/Delete_Penalty_Regulation_Details", {
            params: params,
        });
    }
}
PenaltyRegulationsDetailsService.ɵfac = function PenaltyRegulationsDetailsService_Factory(t) { return new (t || PenaltyRegulationsDetailsService)(); };
PenaltyRegulationsDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PenaltyRegulationsDetailsService, factory: PenaltyRegulationsDetailsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 8683:
/*!************************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/services/penalty-regulations.service.ts ***!
  \************************************************************************************************/
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
        return this.post("PenaltyRegSetup/Create", data);
    }
    update(data) {
        return this.post("PenaltyRegSetup/Edit", data);
    }
    getList(params) {
        return this.get("PenaltyRegSetup/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("PenaltyRegSetup/GetAll");
    }
    getById(penaltyRegulationId) {
        return this.get("PenaltyRegSetup/GetAll", {
            params: {
                $filter: `id eq ${penaltyRegulationId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("PenaltyRegSetup/Delete", {
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

/***/ 78304:
/*!********************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/services/violation-types.service.ts ***!
  \********************************************************************************************/
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
        return this.post("ViolationTypeSetup/Create", data);
    }
    update(data) {
        return this.post("ViolationTypeSetup/Edit", data);
    }
    getList(params) {
        return this.get("ViolationTypeSetup/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("ViolationTypeSetup/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.ar_Name = item.name;
                item.en_Name = item.name;
            });
            return res;
        }));
    }
    Delete(Id) {
        return this.delete("ViolationTypeSetup/Delete", {
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

/***/ 28766:
/*!***************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/services/violations.service.ts ***!
  \***************************************************************************************/
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
        return this.post("ViolationSetup/Create", data);
    }
    update(data) {
        return this.post("ViolationSetup/Edit", data);
    }
    getList(params) {
        return this.get("ViolationSetup/GetList", {
            params: {
                ...params,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Type},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation_Type}`,
            },
        });
    }
    getAll() {
        return this.get("ViolationSetup/GetAll", {
            params: {
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}`,
            },
        });
    }
    getById(violationId) {
        return this.get("ViolationSetup/GetAll", {
            params: {
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Type},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Violation_Type}`,
                $filter: `id eq ${violationId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("ViolationSetup/Delete", {
            params: { Id: Id },
        });
    }
    // minutes / day / month
    getAllTypes() {
        return this.get("ViolationSetup/GetAll_Type").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
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
//# sourceMappingURL=src_app_system-setup_penalty-regulations-setup_penalty-regulations-setup_module_ts.js.map