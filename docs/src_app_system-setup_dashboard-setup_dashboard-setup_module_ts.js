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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






class CheckIsViewAllowedGuard {
    constructor(viewsService, router) {
        this.viewsService = viewsService;
        this.router = router;
        this.loadingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService);
        this.UserModules = viewsService.UserModules$.getValue();
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
CheckIsViewAllowedGuard.ɵfac = function CheckIsViewAllowedGuard_Factory(t) { return new (t || CheckIsViewAllowedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_auth_services_user_views_service__WEBPACK_IMPORTED_MODULE_1__.UserViewsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _mapper_dashboard_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mapper/dashboard-properties */ 33866);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_shared_enums_dashboard_properties_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/enums/dashboard-properties-type.enum */ 7707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_dashboard_setup_services_dashboard_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/dashboard-setup/services/dashboard-properties.service */ 73446);
/* harmony import */ var app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/dashboard-setup/services/dashboard-setup.service */ 31035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_dashboard_setup_properties_dropdown_properties_dropdowncomponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/dashboard-setup/properties-dropdown/properties-dropdowncomponent */ 58913);






















function DashboardPropertiesComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" - ", ctx_r0.msgTranslate(ctx_r0.currentDashboard == null ? null : ctx_r0.currentDashboard.ar_Name, ctx_r0.currentDashboard == null ? null : ctx_r0.currentDashboard.en_Name), " ");
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
            propertyId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            value: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(null);
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
                this.currentDashboard = res.data[0];
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource((0,_mapper_dashboard_properties__WEBPACK_IMPORTED_MODULE_2__.dashboardPropertyDisplay)(res.data));
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_16__.CustomValidators.number,
                ]);
            }
            else
                this.formCtrls.value.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.atLeastOneCharacter,
                ]);
            this.formCtrls.value.updateValueAndValidity();
            this.selectedPropertyType = newSelectedType;
        }
    }
}
DashboardPropertiesComponent.ɵfac = function DashboardPropertiesComponent_Factory(t) { return new (t || DashboardPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_system_setup_dashboard_setup_services_dashboard_properties_service__WEBPACK_IMPORTED_MODULE_5__.DashboardPropertiesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_6__.DashboardSetupService)); };
DashboardPropertiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: DashboardPropertiesComponent, selectors: [["app-dashboard-properties"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 16, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["title", "dashboardProperties"], [4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "filter", "change"], ["label", "value", 3, "control", "submitted", "type"], ["align", "end"], [3, "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function DashboardPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, DashboardPropertiesComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-card-content", 6)(9, "div", 0)(10, "div", 1)(11, "form", 7)(12, "div", 0)(13, "div", 8)(14, "app-properties-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function DashboardPropertiesComponent_Template_app_properties_dropdown_change_14_listener($event) { return ctx.onChangeProperty($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "mat-card-actions", 11)(18, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function DashboardPropertiesComponent_Template_submit_btn_onClick_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "app-material-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChangePage", function DashboardPropertiesComponent_Template_app_material_table_onChangePage_20_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function DashboardPropertiesComponent_Template_app_material_table_deleteRow_20_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_9_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.currentDashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("url", "/dashboard-setup/", ctx.moduleId, "/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.propertyId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.value)("submitted", ctx.submitted)("type", (tmp_9_0 = ctx.selectedPropertyType) !== null && tmp_9_0 !== undefined ? tmp_9_0 : ctx.dashboardPropertiesType.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_8__.MaterialTableComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_9__.BackBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent, _shared_components_dropdowns_dashboard_setup_properties_dropdown_properties_dropdowncomponent__WEBPACK_IMPORTED_MODULE_12__.PropertiesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/dashboard-setup/services/dashboard-setup.service */ 31035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_module_dropdaown_module_dropdaown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/module-dropdaown/module-dropdaown.component */ 48997);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);



















function DashboardComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
class DashboardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(dashboardSetupService) {
        super();
        this.dashboardSetupService = dashboardSetupService;
        this.submitted = false;
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
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            link: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.url]],
            module_Id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.firstPage);
    }
    getList(page, pageSize) {
        this.showLoading();
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
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    submit() {
        if (this.form.valid) {
            const model = {
                ID: this.formCtrls.id.value,
                Ar_Name: this.formCtrls.ar_Name.value,
                En_Name: this.formCtrls.en_Name.value,
                Link: this.formCtrls.link.value,
                Module_Id: this.formCtrls.module_Id.value,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
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
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_system_setup_dashboard_setup_services_dashboard_setup_service__WEBPACK_IMPORTED_MODULE_3__.DashboardSetupService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 20, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "dashboard", "editTitle", "editdDashboard", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], [3, "control", "submitted", "filter"], ["label", "link", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "div", 0)(8, "div", 1)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-module-dropdaown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-card-actions", 11)(20, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function DashboardComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, DashboardComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "app-material-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChangePage", function DashboardComponent_Template_app_material_table_onChangePage_23_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function DashboardComponent_Template_app_material_table_editRow_23_listener($event) { return ctx.itemToEdit($event); })("deleteRow", function DashboardComponent_Template_app_material_table_deleteRow_23_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.module_Id)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.link)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.dashboardSetupService);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _shared_components_dropdowns_module_dropdaown_module_dropdaown_component__WEBPACK_IMPORTED_MODULE_9__.ModuleDropdaownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


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
            params: {
                ...params,
                $filter: `dashboard_ID eq ${dashboardId}`,
            },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


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
            params: params,
        });
    }
    getAll() {
        return this.get("Dashboard/Dashboard/GetAll");
    }
    getById(dashboardId) {
        return this.get("Dashboard/Dashboard/GetAll", {
            params: {
                $filter: `id eq ${dashboardId}`,
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
DashboardSetupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardSetupService, factory: DashboardSetupService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_dashboard-setup_dashboard-setup_module_ts.js.map