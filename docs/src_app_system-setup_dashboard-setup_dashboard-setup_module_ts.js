"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_dashboard-setup_dashboard-setup_module_ts"],{

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

/***/ 13848:
/*!****************************************************************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/components/dashboard-properties/dashboard-properties.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPropertiesComponent": () => (/* binding */ DashboardPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _mapper_dashboard_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mapper/dashboard-properties */ 33866);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_shared_enums_dashboard_properties_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/enums/dashboard-properties-type.enum */ 7707);
/* harmony import */ var _mapper_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mapper/dashboard */ 61894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_dashboard_setup_services_dashboard_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/dashboard-setup/services/dashboard-properties.service */ 73446);
/* harmony import */ var app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/dashboard-setup/services/dashboard-setup.service */ 31035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_dashboard_setup_properties_dropdown_properties_dropdowncomponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/dashboard-setup/properties-dropdown/properties-dropdowncomponent */ 58913);
























function DashboardPropertiesComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" - ", ctx_r0.msgTranslate(ctx_r0.currentDashboard == null ? null : ctx_r0.currentDashboard.ar_Name, ctx_r0.currentDashboard == null ? null : ctx_r0.currentDashboard.en_Name), " ");
} }
function DashboardPropertiesComponent_reset_form_btn_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "reset-form-btn", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DashboardPropertiesComponent_reset_form_btn_18_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
class DashboardPropertiesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(dashboardPropertiesService, dashboardSetupService) {
        super();
        this.dashboardPropertiesService = dashboardPropertiesService;
        this.dashboardSetupService = dashboardSetupService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "property", "value", "actions"];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.dashboardPropertiesType = app_shared_enums_dashboard_properties_type_enum__WEBPACK_IMPORTED_MODULE_4__.EDashboardPropertiesType;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.dashboardId = Number(params.get("id")) ?? 0;
        });
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            propertyId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            value: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource(null);
        if (this.dashboardId && this.checkNoBusinessOrCompany()) {
            this.getCurrentDashboard();
            this.getList(this.firstPage);
        }
    }
    getCurrentDashboard() {
        this.dashboardSetupService
            .getById(this.dashboardId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.currentDashboard = (0,_mapper_dashboard__WEBPACK_IMPORTED_MODULE_5__.dashboardDisplay)(res.data)[0];
            }
            else
                this.errorList(res.message.messages);
        });
    }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.dashboardPropertiesService
            .getList(this.dashboardId, params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource((0,_mapper_dashboard_properties__WEBPACK_IMPORTED_MODULE_2__.dashboardPropertyDisplay)(res.data));
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
                dashboard_ID: this.dashboardId,
                // id: this.form.value.id,
                property_ID: this.form.value.propertyId,
                value: this.form.value.value,
            };
            if (this.selectedPropertyType == app_shared_enums_dashboard_properties_type_enum__WEBPACK_IMPORTED_MODULE_4__.EDashboardPropertiesType.number)
                model.value = JSON.stringify(model.value);
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.dashboardPropertiesService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getList(this.firstPage);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onDelete(dashboardProperties) {
        let msg = dashboardProperties.property;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(dashboardProperties);
        });
    }
    delete(dashboardProperties) {
        this.showLoading();
        this.dashboardPropertiesService
            .Delete(dashboardProperties.id)
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
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
    onChangeProperty(values) {
        // change value input type (number or text)
        let newSelectedType = values.length > 0 ? values[0]?.property_Type : null;
        if (newSelectedType != this.selectedPropertyType) {
            this.formCtrls.value.reset();
            if (newSelectedType == app_shared_enums_dashboard_properties_type_enum__WEBPACK_IMPORTED_MODULE_4__.EDashboardPropertiesType.number) {
                this.formCtrls.value.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_18__.CustomValidators.number,
                ]);
            }
            else
                this.formCtrls.value.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.atLeastOneCharacter,
                ]);
            this.formCtrls.value.updateValueAndValidity();
            this.selectedPropertyType = newSelectedType;
        }
    }
}
DashboardPropertiesComponent.ɵfac = function DashboardPropertiesComponent_Factory(t) { return new (t || DashboardPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_system_setup_dashboard_setup_services_dashboard_properties_service__WEBPACK_IMPORTED_MODULE_6__.DashboardPropertiesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_7__.DashboardSetupService)); };
DashboardPropertiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: DashboardPropertiesComponent, selectors: [["app-dashboard-properties"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 17, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["title", "dashboardProperties"], [4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "filter", "change"], ["label", "value", 3, "control", "submitted", "type"], ["align", "end"], [3, "click", 4, "ngIf"], [3, "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"], [3, "click"]], template: function DashboardPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, DashboardPropertiesComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "mat-card-content", 6)(9, "div", 0)(10, "div", 1)(11, "form", 7)(12, "div", 0)(13, "div", 8)(14, "app-properties-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function DashboardPropertiesComponent_Template_app_properties_dropdown_change_14_listener($event) { return ctx.onChangeProperty($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "mat-card-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, DashboardPropertiesComponent_reset_form_btn_18_Template, 1, 0, "reset-form-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClick", function DashboardPropertiesComponent_Template_submit_btn_onClick_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "app-material-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChangePage", function DashboardPropertiesComponent_Template_app_material_table_onChangePage_21_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function DashboardPropertiesComponent_Template_app_material_table_deleteRow_21_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_9_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.currentDashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("url", "/dashboard-setup/", ctx.moduleId, "/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.propertyId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.value)("submitted", ctx.submitted)("type", (tmp_9_0 = ctx.selectedPropertyType) !== null && tmp_9_0 !== undefined ? tmp_9_0 : ctx.dashboardPropertiesType.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__.MaterialTableComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_10__.BackBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_13__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerComponent, _shared_components_dropdowns_dashboard_setup_properties_dropdown_properties_dropdowncomponent__WEBPACK_IMPORTED_MODULE_14__.PropertiesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92473:
/*!******************************************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/components/dashboard/dashboard.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _mapper_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mapper/dashboard */ 61894);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/dashboard-setup/services/dashboard-setup.service */ 31035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/prime-ng/file-upload/file-upload.component */ 34292);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_dashboard_setup_module_dropdown_module_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/dashboard-setup/module-dropdown/module-dropdown.component */ 31415);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_dashboard_setup_service_by_module_id_dropdown_service_by_module_id_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/dashboard-setup/service-by-module-id-dropdown/service-by-module-id-dropdown.component */ 55833);
























function DashboardComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r0.formCtrls.home_Order)("submitted", ctx_r0.submitted);
} }
function DashboardComponent_reset_form_btn_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "reset-form-btn", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DashboardComponent_reset_form_btn_29_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
class DashboardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(dashboardSetupService) {
        super();
        this.dashboardSetupService = dashboardSetupService;
        this.submitted = false;
        this.removeFiles = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "en_Name",
            "ar_Name",
            "module",
            "link",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            link: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.url],
            ],
            module_Id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            service_Id: [null],
            isExistInHome: [false],
            home_Order: [null, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.gt(0)],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            dashboard_Order: [null, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomValidators.gt(0)],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource(null);
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
        this.dashboardSetupService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource((0,_mapper_dashboard__WEBPACK_IMPORTED_MODULE_3__.dashboardDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    submit() {
        this.removeFiles = false;
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                dash_dashboard: {
                    ID: this.formCtrls.id.value,
                    Ar_Name: this.formCtrls.ar_Name.value,
                    En_Name: this.formCtrls.en_Name.value,
                    Link: this.formCtrls.link.value,
                    Home_Order: this.formCtrls.home_Order.value ?? 0,
                    IsExistInHome: this.formCtrls.isExistInHome.value,
                },
                Module_ID: this.formCtrls.module_Id.value,
                Service_ID: this.formCtrls.service_Id.value ?? 0,
                Dashboard_Order: this.formCtrls.dashboard_Order.value,
                file: this.formCtrls.file.value,
            };
            console.log('fff', model.file);
            console.log('model', model);
            let formData = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_4__.HelpersFunctions.objectToFormData(model);
            model.dash_dashboard.ID == 0
                ? this.create(formData)
                : this.update(formData);
        }
    }
    create(model) {
        this.showLoading();
        this.dashboardSetupService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.firstPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.dashboardSetupService
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    itemToEdit(item) {
        this.form.patchValue(item);
        // this.formCtrls.file.setValue({
        //   id: item.id,
        //   name: item.en_Name,
        //   path: "/" + item?.file?.path,
        //   size: item.file?.size,
        //   type: item.file?.mime,
        // })
    }
    onDelete(item) {
        let msg = this.msgTranslate(item.ar_Name, item.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(item);
        });
    }
    delete(item) {
        this.showLoading();
        this.dashboardSetupService.Delete(item.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (item.id == this.formCtrls.id.value)
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
        this.removeFiles = true;
    }
    changeHomeOrderValidation() {
        if (this.formCtrls.isExistInHome.value) {
            this.formCtrls.home_Order.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.formCtrls.home_Order.clearValidators();
            this.formCtrls.home_Order.setValue(null);
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_5__.DashboardSetupService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 35, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "dashboard", "editTitle", "editdDashboard", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], [3, "control", "submitted", "filter"], [3, "moduleControl", "control", "submitted", "filter", "multi"], ["type", "number", "label", "DashboardOrder", 3, "control", "submitted"], ["label", "link", 3, "control", "submitted"], [1, "col-md-2", "col-12"], ["label", "IsExistInHome", 3, "control", "onChange"], ["class", "col-md-4 col-12", 4, "ngIf"], [1, "col-md-6", "col-12"], ["accept", "image/*", 3, "control", "submitted", "multiple", "removeFiles", "isFormValid", "isEdit"], ["align", "end"], [3, "click", 4, "ngIf"], [3, "id", "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "editRow", "deleteRow"], ["type", "number", "label", "HomeOrder", 3, "control", "submitted"], [3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "div", 0)(8, "div", 1)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "app-module-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "app-service-by-module-id-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 13)(24, "app-check-box", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChange", function DashboardComponent_Template_app_check_box_onChange_24_listener() { return ctx.changeHomeOrderValidation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, DashboardComponent_div_25_Template, 2, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "primeng-file-upload", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "mat-card-actions", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, DashboardComponent_reset_form_btn_29_Template, 1, 0, "reset-form-btn", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "submit-btn", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClick", function DashboardComponent_Template_submit_btn_onClick_30_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "app-material-table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChangePage", function DashboardComponent_Template_app_material_table_onChangePage_32_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function DashboardComponent_Template_app_material_table_editRow_32_listener($event) { return ctx.itemToEdit($event); })("deleteRow", function DashboardComponent_Template_app_material_table_deleteRow_32_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.module_Id)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("moduleControl", ctx.formCtrls.module_Id)("control", ctx.formCtrls.service_Id)("submitted", ctx.submitted)("filter", true)("multi", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.dashboard_Order)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.link)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.isExistInHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formCtrls.isExistInHome.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.file)("submitted", ctx.submitted)("multiple", false)("removeFiles", ctx.removeFiles)("isFormValid", ctx.form.valid)("isEdit", ctx.formCtrls.file != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.dashboardSetupService);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__.FileUploadComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_9__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _shared_components_dropdowns_dashboard_setup_module_dropdown_module_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.ModuleDropdaownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_22__.NgxSpinnerComponent, _shared_components_dropdowns_dashboard_setup_service_by_module_id_dropdown_service_by_module_id_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.ServiceByModuleIdDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1474:
/*!********************************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/dashboard-setup-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardSetupRoutingModule": () => (/* binding */ DashboardSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _components_dashboard_properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard-properties/dashboard-properties.component */ 13848);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 92473);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var app_system_setup_dashboard_setup_components_properties_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/properties/properties.component */ 8724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: "dashboard",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.dashboard_setup },
        children: [
            {
                path: "",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__.pathMatch.full,
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.dashboard_setup },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_4__.CheckIsViewAllowedGuard],
            },
            {
                path: "dashboard-properties/:id",
                component: _components_dashboard_properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_2__.DashboardPropertiesComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.dashboard_properties },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_4__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "properties",
        component: app_system_setup_dashboard_setup_components_properties_properties_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.properties },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_4__.CheckIsViewAllowedGuard],
    },
];
class DashboardSetupRoutingModule {
}
DashboardSetupRoutingModule.ɵfac = function DashboardSetupRoutingModule_Factory(t) { return new (t || DashboardSetupRoutingModule)(); };
DashboardSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DashboardSetupRoutingModule });
DashboardSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 22386:
/*!************************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/dashboard-setup.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardSetupModule": () => (/* binding */ DashboardSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 92473);
/* harmony import */ var _dashboard_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-setup-routing.module */ 1474);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_dashboard_properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard-properties/dashboard-properties.component */ 13848);
/* harmony import */ var _components_properties_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/properties/properties.component */ 8724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);







class DashboardSetupModule {
}
DashboardSetupModule.ɵfac = function DashboardSetupModule_Factory(t) { return new (t || DashboardSetupModule)(); };
DashboardSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardSetupModule });
DashboardSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _dashboard_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardSetupModule, { declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        _components_dashboard_properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_3__.DashboardPropertiesComponent,
        _components_properties_properties_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _dashboard_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 33866:
/*!*****************************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/mapper/dashboard-properties.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashboardPropertyDisplay": () => (/* binding */ dashboardPropertyDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function dashboardPropertyDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            property: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.properties?.ar_Name, ele.properties?.en_Name),
        };
    });
}


/***/ }),

/***/ 61894:
/*!******************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/mapper/dashboard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashboardDisplay": () => (/* binding */ dashboardDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function dashboardDisplay(data) {
    return data.map((ele) => {
        return {
            id: ele.dash_Dashboard.id,
            ar_Name: ele.dash_Dashboard.ar_Name,
            en_Name: ele.dash_Dashboard.en_Name,
            link: ele.dash_Dashboard.link,
            dashboard_Order: ele.dashboard_Order,
            home_Order: ele.dash_Dashboard.home_Order,
            isExistInHome: ele.dash_Dashboard.isExistInHome,
            module_Id: ele.uM_Module.id,
            module: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele.uM_Module.arbName, ele.uM_Module.engName),
            service_Id: ele.uM_Module.uM_Services.map((res) => {
                return res.id;
            }),
            //file:ele.dash_Dashboard.comm_Attachment
        };
    });
}


/***/ }),

/***/ 73446:
/*!***************************************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/services/dashboard-properties.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPropertiesService": () => (/* binding */ DashboardPropertiesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class DashboardPropertiesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Dashboard/DashboardProperty/Create", data);
    }
    getList(dashboardId, params) {
        return this.get("Dashboard/DashboardProperty/GetList", {
            params: params
        });
    }
    getAll(dashboardId) {
        return this.get("Dashboard/DashboardProperty/GetAll", {
            params: {
                $filter: `dashboard_ID eq ${dashboardId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Dashboard/DashboardProperty/Delete", {
            params: { Id: Id },
        });
    }
}
DashboardPropertiesService.ɵfac = function DashboardPropertiesService_Factory(t) { return new (t || DashboardPropertiesService)(); };
DashboardPropertiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardPropertiesService, factory: DashboardPropertiesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 31035:
/*!**********************************************************************************!*\
  !*** ./src/app/system-setup/dashboard-setup/services/dashboard-setup.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardSetupService": () => (/* binding */ DashboardSetupService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class DashboardSetupService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Dashboard/Dashboard/Create", data);
    }
    update(data) {
        return this.post("Dashboard/Dashboard/Edit", data);
    }
    getList(params) {
        return this.get("Dashboard/Dashboard/GetList", {
            params: {
                ...params,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.um_services},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.dash_dashboard}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Comm_Attachment}`,
            },
        });
    }
    getAll() {
        return this.get("Dashboard/Dashboard/GetAll");
    }
    getById(dashboardId) {
        return this.get("Dashboard/Dashboard/GetAll", {
            params: {
                $filter: `Dashboard_ID eq ${dashboardId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Dashboard/Dashboard/Delete", {
            params: { Id: Id },
        });
    }
}
DashboardSetupService.ɵfac = function DashboardSetupService_Factory(t) { return new (t || DashboardSetupService)(); };
DashboardSetupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DashboardSetupService, factory: DashboardSetupService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_dashboard-setup_dashboard-setup_module_ts.js.map