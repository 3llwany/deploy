"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_bonus-setup_bonus-setup_module_ts"],{

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

/***/ 70879:
/*!************************************************************************!*\
  !*** ./src/app/system-setup/bonus-setup/bonus-setup-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BonusSetupRoutingModule": () => (/* binding */ BonusSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_benefit_type_benefit_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/benefit-type/benefit-type.component */ 60834);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _components_benefit_benefit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/benefit/benefit.component */ 5855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    {
        path: "bonus-benefit-type",
        component: _components_benefit_type_benefit_type_component__WEBPACK_IMPORTED_MODULE_0__.BenefitTypeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.bonus_benefit_type },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_2__.CheckIsViewAllowedGuard],
    },
    {
        path: "bonus-benefit",
        component: _components_benefit_benefit_component__WEBPACK_IMPORTED_MODULE_3__.BenefitComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.bonus_benefit },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_2__.CheckIsViewAllowedGuard],
    },
];
class BonusSetupRoutingModule {
}
BonusSetupRoutingModule.ɵfac = function BonusSetupRoutingModule_Factory(t) { return new (t || BonusSetupRoutingModule)(); };
BonusSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BonusSetupRoutingModule });
BonusSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BonusSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 43246:
/*!****************************************************************!*\
  !*** ./src/app/system-setup/bonus-setup/bonus-setup.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BonusSetupModule": () => (/* binding */ BonusSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _bonus_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bonus-setup-routing.module */ 70879);
/* harmony import */ var _components_benefit_type_benefit_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/benefit-type/benefit-type.component */ 60834);
/* harmony import */ var _components_benefit_benefit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/benefit/benefit.component */ 5855);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class BonusSetupModule {
}
BonusSetupModule.ɵfac = function BonusSetupModule_Factory(t) { return new (t || BonusSetupModule)(); };
BonusSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BonusSetupModule });
BonusSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _bonus_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.BonusSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BonusSetupModule, { declarations: [_components_benefit_type_benefit_type_component__WEBPACK_IMPORTED_MODULE_1__.BenefitTypeComponent, _components_benefit_benefit_component__WEBPACK_IMPORTED_MODULE_2__.BenefitComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _bonus_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.BonusSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 60834:
/*!********************************************************************************************!*\
  !*** ./src/app/system-setup/bonus-setup/components/benefit-type/benefit-type.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenefitTypeComponent": () => (/* binding */ BenefitTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_benefit_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/benefit-type.service */ 16328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/close-dialog-btn/close-dialog-btn.component */ 37350);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);



















function BenefitTypeComponent_close_dialog_btn_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "close-dialog-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BenefitTypeComponent_close_dialog_btn_5_Template_close_dialog_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.onCloseDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BenefitTypeComponent_reset_form_btn_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BenefitTypeComponent_reset_form_btn_14_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BenefitTypeComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChangePage", function BenefitTypeComponent_ng_container_16_Template_app_material_table_onChangePage_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.getList($event.pageIndex + 1, $event.pageSize)); })("editRow", function BenefitTypeComponent_ng_container_16_Template_app_material_table_editRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.benefitToEdit($event)); })("deleteRow", function BenefitTypeComponent_ng_container_16_Template_app_material_table_deleteRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("page", ctx_r2.page)("actions", ctx_r2.rowFunctions)("exportService", ctx_r2.benefitTypeService);
} }
class BenefitTypeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(benefitTypeService, data, dialogRef) {
        super();
        this.benefitTypeService = benefitTypeService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "ar_Name", "en_Name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.whiteSpace]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.whiteSpace]],
        });
        if (this.data.value) {
            this.formCtrls.ar_Name.setValue(this.data.value);
            this.formCtrls.en_NAme.setValue(this.data.value);
        }
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
        if (!this.data.isDialog) {
            this.benefitTypeService
                .getList(params)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(res.data);
                    this.isLoaded = true;
                    this.page.length = res.meta.totalItemCount;
                    this.page.meta = res.meta;
                }
                else
                    this.errorList(res?.message?.messages);
            });
        }
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                id: this.form.value.id,
                ar_Name: this.form.value.ar_Name,
                en_Name: this.form.value.en_Name,
                isRange: false,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.benefitTypeService
            .create(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.lastPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
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
        this.benefitTypeService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize); // current page after update
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    benefitToEdit(benefit) {
        this.form.patchValue(benefit);
    }
    onDelete(benefit) {
        let msg = this.msgTranslate(benefit.ar_Name, benefit.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(benefit);
        });
    }
    delete(benefit) {
        this.showLoading();
        this.benefitTypeService.Delete(benefit.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    // if last item in list: get previous page
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    // if not last item in list: get current page
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (benefit.id == this.formCtrls.id.value)
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
    onCloseDialog() {
        this.dialogRef.close();
    }
}
BenefitTypeComponent.ɵfac = function BenefitTypeComponent_Factory(t) { return new (t || BenefitTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_benefit_type_service__WEBPACK_IMPORTED_MODULE_3__.BenefitTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef)); };
BenefitTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: BenefitTypeComponent, selectors: [["app-benefit-type"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 10, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "benefitType", "editTitle", "editBenefitType", 3, "id"], [3, "click", 4, "ngIf"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [4, "ngIf"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "editRow", "deleteRow"]], template: function BenefitTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, BenefitTypeComponent_close_dialog_btn_5_Template, 1, 0, "close-dialog-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-card-content", 5)(7, "form", 6)(8, "div", 0)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-card-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, BenefitTypeComponent_reset_form_btn_14_Template, 1, 0, "reset-form-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function BenefitTypeComponent_Template_submit_btn_onClick_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, BenefitTypeComponent_ng_container_16_Template, 3, 7, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.data.isDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.data.isDialog);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _shared_components_resources_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_9__.CloseDialogBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5lZml0LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5855:
/*!**********************************************************************************!*\
  !*** ./src/app/system-setup/bonus-setup/components/benefit/benefit.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenefitComponent": () => (/* binding */ BenefitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BenefitComponent {
    constructor() { }
    ngOnInit() {
    }
}
BenefitComponent.ɵfac = function BenefitComponent_Factory(t) { return new (t || BenefitComponent)(); };
BenefitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BenefitComponent, selectors: [["app-benefit"]], decls: 2, vars: 0, template: function BenefitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "benefit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5lZml0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 16328:
/*!***************************************************************************!*\
  !*** ./src/app/system-setup/bonus-setup/services/benefit-type.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenefitTypeService": () => (/* binding */ BenefitTypeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class BenefitTypeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("BenefitType/Create", data);
    }
    update(data) {
        return this.post("BenefitType/Edit", data);
    }
    getList(params) {
        return this.get("BenefitType/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("BenefitType/GetAll");
    }
    Delete(id) {
        return this.delete("BenefitType/Delete", {
            params: { Id: id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
BenefitTypeService.ɵfac = function BenefitTypeService_Factory(t) { return new (t || BenefitTypeService)(); };
BenefitTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BenefitTypeService, factory: BenefitTypeService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_bonus-setup_bonus-setup_module_ts.js.map